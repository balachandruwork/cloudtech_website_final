// Application routes — single source of truth for all route paths

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  RENTAL: '/rental',
  SALES: '/sales',
  SERVICES: '/services',
  CORPORATE: '/corporate',
  ACCESSORIES: '/accessories',
  BLOG: '/blog',
  BLOG_POST: '/blog/:slug',
  CONTACT: '/contact',
  PRIVACY_POLICY: '/privacy-policy',
  TERMS_CONDITIONS: '/terms-and-conditions',
  NOT_FOUND: '*',
} as const;

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES];
