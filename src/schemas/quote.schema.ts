import { z } from 'zod';

export const quoteSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters'),
  company: z.string().trim().max(200, 'Company name too long').optional(),
  phone: z
    .string()
    .trim()
    .min(10, 'Valid phone number required')
    .max(15, 'Phone number too long')
    .regex(/^[+\d\s\-()]+$/, 'Enter a valid phone number'),
  email: z.string().trim().email('Valid email required').min(5).max(200),
  deviceType: z.string().trim().min(1, 'Please select a device type').max(120),
  quantity: z
    .number({ error: 'Enter a valid quantity' })
    .int('Quantity must be a whole number')
    .min(1, 'Minimum 1 device')
    .max(10000, 'Maximum 10,000 devices'),
  duration: z.string().trim().min(1, 'Please select a duration').max(64),
  requirements: z.string().trim().max(1000, 'Requirements must be under 1000 characters').optional(),
});

export type QuoteFormData = z.infer<typeof quoteSchema>;

export const DEVICE_TYPE_OPTIONS = [
  { value: '', label: 'Select device type...' },
  { value: 'Business Laptop (Core i5 / i7 / Ryzen)', label: 'Business Laptop (Dell / HP / Lenovo)' },
  { value: 'Apple MacBook (Air M2 / Pro M3)', label: 'Apple MacBook (Air M2 / Pro M3)' },
  { value: 'Gaming / High-Performance Laptop', label: 'Gaming / High-Performance Laptop' },
  { value: 'Business Desktop (EliteDesk / OptiPlex)', label: 'Business Desktop (HP / Dell)' },
  { value: 'New Laptop / Desktop Purchase', label: 'New Laptop / Desktop Purchase' },
  { value: 'Refurbished Business Laptop Purchase', label: 'Refurbished Business Laptop Purchase' },
  { value: 'Networking & Wi-Fi / Accessories Setup', label: 'Networking & Wi-Fi / Accessories Setup' },
  { value: 'Mixed Team / Event Setup', label: 'Mixed Team / Event Setup' },
] as const;

export const RENTAL_DURATION_OPTIONS = [
  { value: '', label: 'Select duration...' },
  { value: '1-6 days (Daily / Event)', label: '1–6 Days (Daily / Event)' },
  { value: '1-3 weeks (Weekly)', label: '1–3 Weeks (Weekly)' },
  { value: '1-3 months (Monthly)', label: '1–3 Months (Monthly)' },
  { value: '3-6 months (Quarterly)', label: '3–6 Months (Quarterly)' },
  { value: '6-12+ months (Long-Term)', label: '6–12+ Months (Long-Term)' },
  { value: 'Outright Purchase / Service', label: 'Outright Purchase / One-Time Service' },
] as const;
