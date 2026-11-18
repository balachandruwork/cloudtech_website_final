import { sleep } from '@/lib/utils';
import type { QuoteFormData } from '@/schemas/quote.schema';

export interface QuoteSubmissionResult {
  success: boolean;
  message: string;
  quoteId?: string;
}

export async function submitQuoteRequest(
  data: QuoteFormData
): Promise<QuoteSubmissionResult> {
  await sleep(1200);

  // TODO: Replace with actual API call
  console.info('Quote request:', data);

  return {
    success: true,
    message: 'Quote request received! We\'ll send you a detailed proposal within 2 hours.',
    quoteId: `QT-${Date.now()}`,
  };
}
