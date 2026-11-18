import { COMPANY } from './company';

// SEO defaults — all pages start with these and override as needed

export const SEO_DEFAULTS = {
  titleTemplate: '%s | Cloud Tech — Laptop Rental & IT Services Coimbatore',
  defaultTitle: 'Cloud Tech — Laptop Rental, Computer Sales & IT Services | Coimbatore',
  defaultDescription:
    'Cloud Tech provides affordable laptop rentals, desktop rentals, MacBook rentals, computer sales, IT repairs, networking, AMC, and enterprise IT support in Coimbatore, Tamil Nadu, India.',
  siteUrl: COMPANY.siteUrl,
  ogImage: `${COMPANY.siteUrl}/images/og-default.jpg`,
  twitterHandle: '@cloudtech',
  locale: 'en_IN',
  keywords:
    'laptop rental Coimbatore, computer rental, MacBook rental, IT support Coimbatore, laptop repair, desktop rental, gaming laptop rental, corporate IT, annual maintenance contract, networking Coimbatore',
} as const;

export const PAGE_SEO = {
  home: {
    title: 'Cloud Tech — Laptop Rental, Computer Sales & IT Services | Coimbatore',
    description:
      'Cloud Tech delivers affordable laptop rentals, desktop rentals, MacBook rentals, computer sales, IT infrastructure, networking, AMC services, repairs, and enterprise IT support in Coimbatore.',
    keywords: 'laptop rental Coimbatore, laptop on rent, computer rental service Coimbatore',
  },
  about: {
    title: 'About Cloud Tech',
    description:
      'Learn about Cloud Tech — Coimbatore\'s trusted provider of laptop rentals, computer sales, and professional IT services since 2014.',
    keywords: 'about Cloud Tech Coimbatore, laptop rental company Coimbatore',
  },
  rental: {
    title: 'Laptop & Computer Rental Services',
    description:
      'Rent laptops, desktops, MacBooks, gaming laptops, workstations, printers, and servers. Flexible daily, weekly, and monthly plans. Free delivery in Coimbatore.',
    keywords: 'laptop rental Coimbatore, MacBook rental, gaming laptop rent, desktop computer rental',
  },
  sales: {
    title: 'Buy Laptops, Desktops & Computers',
    description:
      'Buy new and refurbished laptops, desktops, MacBooks, gaming PCs, and accessories at best prices in Coimbatore. Genuine products with warranty.',
    keywords: 'buy laptop Coimbatore, desktop computer sale, refurbished laptop Coimbatore',
  },
  services: {
    title: 'IT Repair & Technical Services',
    description:
      'Professional laptop repair, desktop repair, virus removal, data recovery, software installation, networking, and IT support services in Coimbatore.',
    keywords: 'laptop repair Coimbatore, IT support, data recovery Coimbatore, virus removal',
  },
  corporate: {
    title: 'Corporate IT Solutions & Enterprise Services',
    description:
      'Enterprise IT solutions including bulk laptop rental, office IT setup, networking, server installation, managed IT services, and AMC in Coimbatore.',
    keywords: 'corporate laptop rental Coimbatore, enterprise IT solutions, office IT setup Coimbatore',
  },
  accessories: {
    title: 'Computer Accessories & Networking Equipment',
    description:
      'Shop keyboards, mice, monitors, headsets, networking equipment, and more computer accessories at Cloud Tech Coimbatore.',
    keywords: 'computer accessories Coimbatore, networking equipment, laptop accessories',
  },
  blog: {
    title: 'IT Blog & Tech News',
    description:
      'Stay updated with the latest IT tips, laptop rental guides, technology news, and professional IT advice from Cloud Tech.',
    keywords: 'IT blog Coimbatore, laptop rental guide, technology news India',
  },
  contact: {
    title: 'Contact Cloud Tech',
    description:
      'Get in touch with Cloud Tech for laptop rentals, computer sales, IT support, repair services, and corporate enquiries. Call, WhatsApp, or email us.',
    keywords: 'contact Cloud Tech Coimbatore, laptop rental enquiry, IT support contact',
  },
} as const;
