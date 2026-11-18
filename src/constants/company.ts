// Company constants — single source of truth for all contact info
// Update this file when contact details change; components read from here

export const COMPANY = {
  name: 'Cloud Tech',
  legalName: 'Cloud Tech Laptop Rental Service',
  tagline: 'Laptop Rental Service',
  description:
    'Cloud Tech delivers affordable laptop rentals, desktop rentals, MacBook rentals, computer sales, IT infrastructure, networking, AMC services, repairs, and enterprise IT support for businesses, startups, educational institutions, and individuals.',
  shortDescription: 'Laptop Rental, Computer Sales & Professional IT Services in Coimbatore',

  // Contact
  phone: '+91-XXXXXXXXXX',
  phoneRaw: '91XXXXXXXXXX', // for tel: links
  whatsapp: '+91-XXXXXXXXXX',
  whatsappRaw: '91XXXXXXXXXX', // for wa.me links
  email: 'info@cloudtech.in',
  emailSupport: 'support@cloudtech.in',
  emailSales: 'sales@cloudtech.in',

  // Address
  address: {
    street: 'No. XX, XXX Street',
    area: 'XXXXXXX',
    city: 'Coimbatore',
    state: 'Tamil Nadu',
    country: 'India',
    pincode: '600XXX',
    full: 'No. XX, XXX Street, XXXXXXX, Coimbatore, Tamil Nadu - 600XXX',
    mapLink: 'https://maps.google.com/?q=Coimbatore,Tamil+Nadu,India',
  },

  // Business Hours
  businessHours: [
    { day: 'Monday – Friday', hours: '9:00 AM – 7:00 PM', isOpen: true },
    { day: 'Saturday', hours: '9:00 AM – 5:00 PM', isOpen: true },
    { day: 'Sunday', hours: 'Closed', isOpen: false },
  ],

  // Social Media
  social: {
    facebook: 'https://www.facebook.com/cloudtech',
    instagram: 'https://www.instagram.com/cloudtech',
    twitter: 'https://www.twitter.com/cloudtech',
    linkedin: 'https://www.linkedin.com/company/cloudtech',
    youtube: 'https://www.youtube.com/@cloudtech',
  },

  // Brand
  founded: 2014,
  yearsOfExperience: 10,

  // Domain
  siteUrl: 'https://www.cloudtech.in',
  domain: 'cloudtech.in',
} as const;

// WhatsApp helpers
export const WHATSAPP_BASE = `https://wa.me/${COMPANY.whatsappRaw}`;

export function getWhatsAppUrl(message: string): string {
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_MESSAGES = {
  generic: `Hello Cloud Tech! 👋\n\nI'm interested in your services. Please contact me with more details.\n\nThank you!`,

  rentalEnquiry: (productName?: string) =>
    `Hello Cloud Tech! 👋\n\nI'm interested in renting${productName ? ` a ${productName}` : ' a laptop/computer'}.\n\nCould you please share pricing and availability?\n\nThank you!`,

  salesEnquiry: (productName?: string) =>
    `Hello Cloud Tech! 👋\n\nI'm interested in buying${productName ? ` a ${productName}` : ' a laptop/computer'}.\n\nCould you please share details and pricing?\n\nThank you!`,

  corporateEnquiry: `Hello Cloud Tech! 👋\n\nWe are looking for corporate IT solutions including bulk rentals, office IT setup, and managed IT services.\n\nPlease share a corporate proposal.\n\nThank you!`,

  serviceEnquiry: (serviceName?: string) =>
    `Hello Cloud Tech! 👋\n\nI need assistance with${serviceName ? ` ${serviceName}` : ' IT repair/support services'}.\n\nCould you please guide me with the process?\n\nThank you!`,

  quoteRequest: `Hello Cloud Tech! 👋\n\nI would like to request a free quote for your services.\n\nPlease contact me with more details.\n\nThank you!`,
} as const;
