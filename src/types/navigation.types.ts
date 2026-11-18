// Navigation types

export interface NavItem {
  label: string;
  href: string;
  description?: string;
  isExternal?: boolean;
  badge?: string;
  children?: NavDropdownItem[];
}

export interface NavDropdownItem {
  label: string;
  href: string;
  description?: string;
  icon?: string;
}

export interface FooterLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}
