// Service related types
import type { LucideIcon } from 'lucide-react';

export type ServiceCategory =
  | 'rental'
  | 'sales'
  | 'repair'
  | 'it-support'
  | 'networking'
  | 'corporate'
  | 'cloud'
  | 'maintenance';

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: LucideIcon;
  category: ServiceCategory;
  features: string[];
  href: string;
  isHighlighted?: boolean;
  badge?: string;
}

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  category?: ServiceCategory;
  isHighlighted?: boolean;
  badge?: string;
  className?: string;
}

export interface CorporateService {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  cta: string;
  ctaHref: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}
