import { ROUTES } from './routes';
import type { NavItem, FooterColumn } from '@/types/navigation.types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: ROUTES.HOME },
  { label: 'About', href: ROUTES.ABOUT },
  { label: 'Services', href: ROUTES.SERVICES },
  { label: 'Corporate', href: ROUTES.CORPORATE },
  { label: 'Blog', href: ROUTES.BLOG },
  { label: 'Contact', href: ROUTES.CONTACT },
];

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: 'Rental Services',
    links: [
      { label: 'Laptop Rental', href: ROUTES.RENTAL },
      { label: 'Desktop Rental', href: ROUTES.RENTAL },
      { label: 'MacBook Rental', href: ROUTES.RENTAL },
      { label: 'Gaming Laptop Rental', href: ROUTES.RENTAL },
      { label: 'Team / Corporate Rental', href: ROUTES.CORPORATE },
    ],
  },
  {
    title: 'Sales',
    links: [
      { label: 'New Laptops', href: ROUTES.SALES },
      { label: 'New Desktops', href: ROUTES.SALES },
      { label: 'MacBooks', href: ROUTES.SALES },
      { label: 'Gaming Laptops', href: ROUTES.SALES },
      { label: 'Refurbished Laptops', href: ROUTES.SALES },
      { label: 'Accessories', href: ROUTES.ACCESSORIES },
    ],
  },
  {
    title: 'IT Services',
    links: [
      { label: 'Laptop & Desktop Repair', href: ROUTES.SERVICES },
      { label: 'Virus & Malware Removal', href: ROUTES.SERVICES },
      { label: 'Data Recovery', href: ROUTES.SERVICES },
      { label: 'Networking & Wi-Fi', href: ROUTES.SERVICES },
      { label: 'Software & Security Setup', href: ROUTES.SERVICES },
      { label: 'Annual Maintenance (AMC)', href: ROUTES.SERVICES },
      { label: 'Office IT Setup', href: ROUTES.CORPORATE },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Cloud Tech', href: ROUTES.ABOUT },
      { label: 'Corporate Solutions', href: ROUTES.CORPORATE },
      { label: 'Blog & Updates', href: ROUTES.BLOG },
      { label: 'Contact & Quote', href: ROUTES.CONTACT },
      { label: 'Privacy Policy', href: ROUTES.PRIVACY_POLICY },
      { label: 'Terms & Conditions', href: ROUTES.TERMS_CONDITIONS },
    ],
  },
];
