import { z } from 'zod';

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters'),
  company: z.string().max(200, 'Company name too long').optional(),
  phone: z
    .string()
    .min(10, 'Enter a valid phone number')
    .max(15, 'Phone number too long')
    .regex(/^[+\d\s-()]+$/, 'Enter a valid phone number'),
  email: z.string().email('Enter a valid email address').max(200),
  service: z.string().min(1, 'Please select a service'),
  message: z
    .string()
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
  { value: 'corporate-rental', label: 'Corporate / Bulk Rental' },
  { value: 'laptop-sales', label: 'Buy Laptop / Desktop' },
  { value: 'macbook-sales', label: 'Buy MacBook' },
  { value: 'laptop-repair', label: 'Laptop / Desktop Repair' },
  { value: 'networking', label: 'Networking & Wi-Fi Setup' },
  { value: 'amc', label: 'Annual Maintenance Contract (AMC)' },
  { value: 'corporate-it', label: 'Corporate IT Support' },
  { value: 'server', label: 'Server Installation / Cloud' },
  { value: 'other', label: 'Other / General Enquiry' },
] as const;
