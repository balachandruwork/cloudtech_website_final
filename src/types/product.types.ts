// Product related types

export type ProductCategory =
  | 'laptop'
  | 'desktop'
  | 'macbook'
  | 'gaming-laptop'
  | 'gaming-pc'
  | 'workstation'
  | 'printer'
  | 'projector'
  | 'server'
  | 'networking'
  | 'accessory'
  | 'refurbished';

export type ProductCondition = 'new' | 'refurbished' | 'used';

export type ProductBrand =
  | 'Dell'
  | 'HP'
  | 'Lenovo'
  | 'Apple'
  | 'Asus'
  | 'Acer'
  | 'MSI'
  | 'Samsung'
  | 'Microsoft'
  | 'Other';

export interface ProductSpec {
  processor: string;
  ram: string;
  storage: string;
  display?: string;
  graphics?: string;
  os?: string;
  battery?: string;
  ports?: string;
  weight?: string;
  warranty?: string;
}

export interface Product {
  id: string;
  name: string;
  brand: ProductBrand;
  category: ProductCategory;
  condition: ProductCondition;
  description: string;
  shortDescription: string;
  specs: ProductSpec;
  images: string[];
  thumbnail: string;
  price: number;
  originalPrice?: number;
  discountPercent?: number;
  isInStock: boolean;
  isFeatured: boolean;
  isNewArrival: boolean;
  tags: string[];
  slug: string;
}

export interface RentalPricing {
  daily?: number;
  weekly?: number;
  monthly: number;
  quarterly?: number;
  halfYearly?: number;
  yearly?: number;
  minimumPeriod: string;
}

export interface RentalProduct {
  id: string;
  name: string;
  brand: ProductBrand;
  category: ProductCategory;
  description: string;
  shortDescription: string;
  specs: ProductSpec;
  images: string[];
  thumbnail: string;
  pricing: RentalPricing;
  isAvailable: boolean;
  isFeatured: boolean;
  tags: string[];
  slug: string;
  deliveryTime: string;
}

export interface FilterOption {
  value: string;
  label: string;
  count?: number;
}

export interface ProductFilters {
  brand?: ProductBrand[];
  category?: ProductCategory[];
  condition?: ProductCondition[];
  minPrice?: number;
  maxPrice?: number;
  search?: string;
  sortBy?: 'price-asc' | 'price-desc' | 'name' | 'featured' | 'newest';
}
