import { doc, getDoc, serverTimestamp, writeBatch } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '@/lib/firebase';
import { newsletterSchema, type NewsletterFormData } from '@/schemas/newsletter.schema';

export interface NewsletterSubscriptionResult {
  success: boolean;
  duplicate?: boolean;
  message: string;
}

async function computeSubscriberKey(normalizedEmail: string): Promise<string> {
  const bytes = new TextEncoder().encode(normalizedEmail);
  const digest = await crypto.subtle.digest('SHA-256', bytes);
  const hex = Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('');
  return `sub_${hex}`;
}

export async function subscribeToNewsletter(
  rawData: NewsletterFormData,
  source = 'footer'
): Promise<NewsletterSubscriptionResult> {
  const parsed = newsletterSchema.parse(rawData);
  const normalizedEmail = parsed.email.trim().toLowerCase();
  const subscriberKey = await computeSubscriberKey(normalizedEmail);
  const indexPath = `newsletterIndex/${subscriberKey}`;

  try {
    const existingIndex = await getDoc(doc(db, 'newsletterIndex', subscriberKey));
    if (existingIndex.exists()) {
      return {
        success: false,
        duplicate: true,
        message: 'This email is already subscribed to Cloud Tech updates.',
      };
    }
  } catch (error) {
    handleFirestoreError(error, OperationType.GET, indexPath);
  }

  const batch = writeBatch(db);
  const timestamp = serverTimestamp();

  batch.set(doc(db, 'newsletterIndex', subscriberKey), {
    active: true,
    createdAt: timestamp,
  });

  batch.set(doc(db, 'newsletterSubscribers', subscriberKey), {
    email: normalizedEmail,
    source: source.slice(0, 40) || 'footer',
    createdAt: timestamp,
  });

  try {
    await batch.commit();
    return {
      success: true,
      message: 'Subscribed! You will receive Cloud Tech guides, hardware updates, and offers.',
    };
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, `newsletterSubscribers/${subscriberKey}`);
  }
}
