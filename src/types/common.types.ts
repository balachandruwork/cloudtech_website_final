// Common shared types

export type Status = 'idle' | 'loading' | 'success' | 'error';

export interface ApiResponse<T = unknown> {
  data: T;
  message: string;
  success: boolean;
  statusCode: number;
}

export interface PaginatedResponse<T = unknown> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    perPage: number;
    total: number;
    totalPages: number;
  };
}

export interface SelectOption {
  value: string;
  label: string;
}

export interface ImageAsset {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface SeoMeta {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
  businessHours: BusinessHour[];
}

export interface BusinessHour {
  day: string;
  hours: string;
  isOpen: boolean;
}

export interface SocialLink {
  platform: string;
  href: string;
  ariaLabel: string;
}

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'whatsapp';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface Stat {
  value: number;
  suffix: string;
  label: string;
  icon?: string;
}
