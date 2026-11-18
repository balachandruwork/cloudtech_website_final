import { sleep } from '@/lib/utils';
import type { ContactFormData } from '@/schemas/contact.schema';

export interface ContactSubmissionResult {
  success: boolean;
  message: string;
  referenceId?: string;
}

// When backend is ready, replace this with a real API call using apiClient
export async function submitContactForm(
  data: ContactFormData
): Promise<ContactSubmissionResult> {
  // Simulate API call delay
  await sleep(1500);

  // TODO: Replace with actual API integration
  // const response = await apiClient.post('/contact', data);
  // return response.data;

  console.info('Contact form submitted:', data);

  return {
    success: true,
    message:
      'Thank you for contacting Cloud Tech! Our team will reach out to you within 24 hours.',
    referenceId: `CT-${Date.now()}`,
  };
}
