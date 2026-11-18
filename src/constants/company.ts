// Company constants — single source of truth for Cloud Tech business details

const envPhone = (import.meta.env.VITE_PHONE_NUMBER as string | undefined)?.trim() || '';
const envWhatsapp = (import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined)?.trim() || '';
const envEmail = (import.meta.env.VITE_CONTACT_EMAIL as string | undefined)?.trim() || 'info@cloudtech.in';
const envSiteUrl = (import.meta.env.VITE_SITE_URL as string | undefined)?.trim() || 'https://www.cloudtech.in';

const rawPhoneDigits = envPhone.replace(/[^\d+]/g, '');
const rawWhatsappDigits = envWhatsapp.replace(/\D/g, '');

export const COMPANY = {
  name: 'Cloud Tech',
  legalName: 'Cloud Tech',
  tagline: 'Laptop Rental, Computer Sales & IT Services',
  description:
    'Established in 2023 in Coimbatore, Cloud Tech delivers laptop and desktop rentals, new and refurbished computer sales, accessories, repairs, networking, and managed IT support for businesses, startups, event organizers, and individuals.',
  shortDescription: 'Laptop Rental, Computer Sales & IT Services in Coimbatore',

  // Contact (configurable via environment variables when phone/WhatsApp lines are provisioned)
  hasDirectPhone: Boolean(rawPhoneDigits),
  phone: envPhone || 'Contact Desk (Coimbatore)',
  phoneRaw: rawPhoneDigits,
  hasWhatsappNumber: Boolean(rawWhatsappDigits),
  whatsapp: envWhatsapp || 'WhatsApp Enquiry',
  whatsappRaw: rawWhatsappDigits,
  email: envEmail,
  emailSupport: 'support@cloudtech.in',
  emailSales: 'sales@cloudtech.in',

  // Address
  address: {
    city: 'Coimbatore',
    state: 'Tamil Nadu',
    country: 'India',
    full: 'Coimbatore, Tamil Nadu, India',
    mapLink: 'https://maps.google.com/?q=Coimbatore,Tamil+Nadu,India',
  },

  // Business Hours
  businessHours: [
    { day: 'Monday – Friday', hours: '9:00 AM – 7:00 PM', isOpen: true },
    { day: 'Saturday', hours: '9:00 AM – 5:00 PM', isOpen: true },
    { day: 'Sunday', hours: 'Closed', isOpen: false },
  ],

  // Official Social Media Profiles (populate via VITE_SOCIAL_* env vars when active)
  social: {
    facebook: (import.meta.env.VITE_SOCIAL_FACEBOOK as string | undefined)?.trim() || '',
    instagram: (import.meta.env.VITE_SOCIAL_INSTAGRAM as string | undefined)?.trim() || '',
    twitter: (import.meta.env.VITE_SOCIAL_TWITTER as string | undefined)?.trim() || '',
    linkedin: (import.meta.env.VITE_SOCIAL_LINKEDIN as string | undefined)?.trim() || '',
    youtube: (import.meta.env.VITE_SOCIAL_YOUTUBE as string | undefined)?.trim() || '',
  },

  // Verified Business Profile
  founded: 2023,
  yearsOfExperienceLabel: '3–4 Years',
  customerBaseLabel: '3–4 Customers',

  // Domain
  siteUrl: envSiteUrl,
  domain: 'cloudtech.in',
} as const;

// WhatsApp helper — uses dedicated business number when configured, or pre-filled WhatsApp share composer
export function getWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return COMPANY.whatsappRaw
    ? `https://wa.me/${COMPANY.whatsappRaw}?text=${encoded}`
    : `https://wa.me/?text=${encoded}`;
}

export const WHATSAPP_MESSAGES = {
  generic: `Hello Cloud Tech!\n\nI'm interested in your laptop rental, sales, or IT services in Coimbatore. Please share more details.\n\nThank you!`,

  rentalEnquiry: (productName?: string) =>
    `Hello Cloud Tech!\n\nI'm interested in renting${productName ? ` a ${productName}` : ' a laptop/computer'}.\n\nCould you please share availability and rental terms?\n\nThank you!`,

  salesEnquiry: (productName?: string) =>
    `Hello Cloud Tech!\n\nI'm interested in buying${productName ? ` a ${productName}` : ' a laptop/computer'}.\n\nCould you please share availability, warranty details, and pricing?\n\nThank you!`,

  corporateEnquiry: `Hello Cloud Tech!\n\nWe are looking for business IT solutions including team laptop rentals, office IT setup, networking, or AMC support.\n\nPlease share a proposal.\n\nThank you!`,

  serviceEnquiry: (serviceName?: string) =>
    `Hello Cloud Tech!\n\nI need assistance with${serviceName ? ` ${serviceName}` : ' IT repair or technical support'}.\n\nCould you please share the next steps?\n\nThank you!`,

  quoteRequest: `Hello Cloud Tech!\n\nI would like to request a quote for your hardware rental or IT services.\n\nPlease get in touch with me.\n\nThank you!`,
} as const;
