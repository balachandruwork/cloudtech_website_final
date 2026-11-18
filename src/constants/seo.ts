import { COMPANY } from './company';

// SEO defaults — all pages start with these and override as needed

export const SEO_DEFAULTS = {
  titleTemplate: '%s | Cloud Tech — Laptop Rental & IT Services Coimbatore',
  defaultTitle: 'Cloud Tech — Laptop Rental, Computer Sales & IT Services | Coimbatore',
  defaultDescription:
    'Established in 2023, Cloud Tech provides laptop rentals, desktop rentals, MacBook rentals, new and refurbished computer sales, IT repairs, networking, and AMC support in Coimbatore, Tamil Nadu.',
  siteUrl: COMPANY.siteUrl,
  ogImage: `${COMPANY.siteUrl}/assets/aistudio/New_Logo_31ad2fb6.png`,
  twitterHandle: '@cloudtech',
  locale: 'en_IN',
  keywords:
    'laptop rental Coimbatore, computer rental Coimbatore, MacBook rental, IT support Coimbatore, laptop repair, desktop rental, refurbished laptop Coimbatore, networking Coimbatore, AMC services',
} as const;

export const PAGE_SEO = {
  home: {
    title: 'Cloud Tech — Laptop Rental, Computer Sales & IT Services | Coimbatore',
    description:
      'Established in 2023 in Coimbatore, Cloud Tech offers laptop rentals, desktop and MacBook rentals, new & refurbished sales, accessories, IT repairs, networking, and AMC support.',
    keywords: 'laptop rental Coimbatore, laptop on rent, computer rental service Coimbatore',
  },
  about: {
    title: 'About Cloud Tech',
    description:
      'Learn about Cloud Tech — established in 2023 in Coimbatore to provide reliable laptop rentals, computer sales, and practical IT support for businesses and individuals.',
    keywords: 'about Cloud Tech Coimbatore, laptop rental company Coimbatore',
  },
  rental: {
    title: 'Laptop & Computer Rental Services',
    description:
      'Rent business laptops, gaming laptops, MacBooks, and desktops on daily, weekly, or monthly plans in Coimbatore.',
    keywords: 'laptop rental Coimbatore, MacBook rental, gaming laptop rent, desktop computer rental',
  },
  sales: {
    title: 'Buy Laptops, Desktops & Computers',
    description:
      'Buy new and certified refurbished laptops, desktops, MacBooks, and gaming laptops with warranty support in Coimbatore.',
    keywords: 'buy laptop Coimbatore, desktop computer sale, refurbished laptop Coimbatore',
  },
  services: {
    title: 'IT Repair & Technical Services',
    description:
      'Laptop and desktop repair, data recovery, virus removal, software setup, networking, Wi-Fi installation, and AMC services in Coimbatore.',
    keywords: 'laptop repair Coimbatore, IT support, data recovery Coimbatore, virus removal',
  },
  corporate: {
    title: 'Corporate IT Solutions & Team Rentals',
    description:
      'Team and bulk laptop rentals, office IT setup, Wi-Fi networking, and Annual Maintenance Contracts (AMC) in Coimbatore.',
    keywords: 'corporate laptop rental Coimbatore, office IT setup Coimbatore, IT AMC Coimbatore',
  },
  accessories: {
    title: 'Computer Accessories & Networking Equipment',
    description:
      'Keyboards, mice, business monitors, headsets, routers, switches, storage drives, and power accessories available at Cloud Tech Coimbatore.',
    keywords: 'computer accessories Coimbatore, networking equipment, laptop accessories',
  },
  blog: {
    title: 'IT Blog & Company Updates',
    description:
      'Practical technology guides, laptop rental insights, buying advice, and company updates from Cloud Tech in Coimbatore.',
    keywords: 'IT blog Coimbatore, laptop rental guide, refurbished laptop buying guide',
  },
  contact: {
    title: 'Contact Cloud Tech',
    description:
      'Contact Cloud Tech in Coimbatore for laptop rentals, computer sales, IT repair, or a tailored hardware quotation.',
    keywords: 'contact Cloud Tech Coimbatore, laptop rental enquiry, IT support contact',
  },
} as const;
