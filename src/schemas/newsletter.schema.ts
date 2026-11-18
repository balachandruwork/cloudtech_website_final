import { z } from 'zod';

export const newsletterSchema = z.object({
  email: z
    .string()
    .trim()
    .email('Please enter a valid email address')
    .min(5, 'Please enter a valid email address')
    .max(200, 'Email address is too long'),
});

export type NewsletterFormData = z.infer<typeof newsletterSchema>;
