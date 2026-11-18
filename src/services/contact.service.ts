import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '@/lib/firebase';
import { contactSchema, type ContactFormData } from '@/schemas/contact.schema';

export interface ContactSubmissionResult {
  success: boolean;
  message: string;
  referenceId?: string;
}

export async function submitContactForm(
  rawData: ContactFormData
): Promise<ContactSubmissionResult> {
  const parsed = contactSchema.parse(rawData);
  const referenceId = `CT-${Date.now()}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
  const path = `contactEnquiries/${referenceId}`;

  const payload: Record<string, unknown> = {
    referenceId,
    name: parsed.name,
    phone: parsed.phone,
    email: parsed.email.toLowerCase(),
    service: parsed.service,
    message: parsed.message,
    consent: true,
    createdAt: serverTimestamp(),
  };

  if (parsed.company && parsed.company.length > 0) {
    payload.company = parsed.company;
  }

  try {
    await setDoc(doc(db, 'contactEnquiries', referenceId), payload);
    return {
      success: true,
      message:
        'Thank you for contacting Cloud Tech! Our team in Coimbatore will review your enquiry and get back to you shortly.',
      referenceId,
    };
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, path);
  }
}
