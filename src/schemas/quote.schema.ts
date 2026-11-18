import { z } from 'zod';

export const quoteSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  company: z.string().optional(),
  phone: z.string().min(10, 'Valid phone number required'),
  email: z.string().email('Valid email required'),
  deviceType: z.string().min(1, 'Please select a device type'),
  quantity: z.number().int().min(1, 'Minimum 1 device').max(10000),
  duration: z.string().min(1, 'Please select a duration'),
  requirements: z.string().max(1000).optional(),
});

export type QuoteFormData = z.infer<typeof quoteSchema>;
