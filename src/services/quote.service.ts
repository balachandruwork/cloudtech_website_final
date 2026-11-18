import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '@/lib/firebase';
import { quoteSchema, type QuoteFormData } from '@/schemas/quote.schema';

export interface QuoteSubmissionResult {
  success: boolean;
  message: string;
  quoteId?: string;
}

export async function submitQuoteRequest(
  rawData: QuoteFormData
): Promise<QuoteSubmissionResult> {
  const parsed = quoteSchema.parse(rawData);
  const quoteId = `QT-${Date.now()}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
  const path = `quoteRequests/${quoteId}`;

  const payload: Record<string, unknown> = {
    quoteId,
    name: parsed.name,
    phone: parsed.phone,
    email: parsed.email.toLowerCase(),
    deviceType: parsed.deviceType,
    quantity: parsed.quantity,
    duration: parsed.duration,
    createdAt: serverTimestamp(),
  };

  if (parsed.company && parsed.company.length > 0) {
    payload.company = parsed.company;
  }

  if (parsed.requirements && parsed.requirements.length > 0) {
    payload.requirements = parsed.requirements;
  }

  try {
    await setDoc(doc(db, 'quoteRequests', quoteId), payload);
    return {
      success: true,
      message:
        'Quote request received! Our team will prepare a transparent quotation based on your device and duration needs.',
      quoteId,
    };
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, path);
  }
}
