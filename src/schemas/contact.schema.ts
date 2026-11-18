import { z } from 'zod';

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters'),
  company: z.string().trim().max(200, 'Company name too long').optional(),
  phone: z
    .string()
    .trim()
    .min(10, 'Enter a valid phone number')
    .max(15, 'Phone number too long')
    .regex(/^[+\d\s\-()]+$/, 'Enter a valid phone number'),
  email: z.string().trim().email('Enter a valid email address').min(5).max(200),
  service: z.string().trim().min(1, 'Please select a service').max(64),
  message: z
    .string()
    .trim()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message must be less than 2000 characters'),
  consent: z.boolean().refine((val) => val === true, {
    message: 'Please agree to be contacted',
  }),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const SERVICE_OPTIONS = [
  { value: '', label: 'Select a service...' },
  { value: 'laptop-rental', label: 'Laptop Rental' },
  { value: 'desktop-rental', label: 'Desktop Rental' },
  { value: 'macbook-rental', label: 'MacBook Rental' },
  { value: 'gaming-rental', label: 'Gaming Laptop Rental' },
  { value: 'corporate-rental', label: 'Team / Corporate Rental' },
  { value: 'laptop-sales', label: 'Buy Laptop / Desktop' },
  { value: 'macbook-sales', label: 'Buy MacBook' },
  { value: 'accessories', label: 'Computer & Networking Accessories' },
  { value: 'laptop-repair', label: 'Laptop / Desktop Repair' },
  { value: 'data-recovery', label: 'Data Recovery' },
  { value: 'networking', label: 'Networking & Wi-Fi Setup' },
  { value: 'amc', label: 'Annual Maintenance Contract (AMC)' },
  { value: 'corporate-it', label: 'Office IT Infrastructure Support' },
  { value: 'other', label: 'Other / General Enquiry' },
] as const;
