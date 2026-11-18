import type { Product, ProductFilters, RentalProduct } from '@/types/product.types';

export function filterRentalProducts(
  items: RentalProduct[],
  filters: ProductFilters
): RentalProduct[] {
  const search = filters.search?.trim().toLowerCase() || '';

  const filtered = items.filter((item) => {
    if (filters.category && filters.category.length > 0) {
      if (!filters.category.includes(item.category)) return false;
    }

    if (filters.brand && filters.brand.length > 0) {
      if (!filters.brand.includes(item.brand)) return false;
    }

    if (typeof filters.minPrice === 'number' && item.pricing.monthly < filters.minPrice) {
      return false;
    }

    if (typeof filters.maxPrice === 'number' && item.pricing.monthly > filters.maxPrice) {
      return false;
    }

    if (search) {
      const haystack = [
        item.name,
        item.brand,
        item.category,
        item.shortDescription,
        item.specs.processor,
        item.specs.ram,
        item.specs.storage,
        ...item.tags,
      ]
        .join(' ')
        .toLowerCase();
      if (!haystack.includes(search)) return false;
    }

    return true;
  });

  const sorted = [...filtered];
  switch (filters.sortBy) {
    case 'price-asc':
      sorted.sort((a, b) => a.pricing.monthly - b.pricing.monthly);
      break;
    case 'price-desc':
      sorted.sort((a, b) => b.pricing.monthly - a.pricing.monthly);
      break;
    case 'name':
      sorted.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'featured':
    default:
      sorted.sort((a, b) => Number(b.isFeatured) - Number(a.isFeatured));
      break;
  }

  return sorted;
}

export function filterSalesProducts(
  items: Product[],
  filters: ProductFilters
): Product[] {
  const search = filters.search?.trim().toLowerCase() || '';

  const filtered = items.filter((item) => {
    if (filters.category && filters.category.length > 0) {
      const matchesRefurbishedCategory =
        filters.category.includes('refurbished') && item.condition === 'refurbished';
      const matchesStandardCategory = filters.category.includes(item.category);
      if (!matchesRefurbishedCategory && !matchesStandardCategory) return false;
    }

    if (filters.brand && filters.brand.length > 0) {
      if (!filters.brand.includes(item.brand)) return false;
    }

    if (filters.condition && filters.condition.length > 0) {
      if (!filters.condition.includes(item.condition)) return false;
    }

    if (typeof filters.minPrice === 'number' && item.price < filters.minPrice) {
      return false;
    }

    if (typeof filters.maxPrice === 'number' && item.price > filters.maxPrice) {
      return false;
    }

    if (search) {
      const haystack = [
        item.name,
        item.brand,
        item.category,
        item.condition,
        item.shortDescription,
        item.specs.processor,
        item.specs.ram,
        item.specs.storage,
        ...item.tags,
      ]
        .join(' ')
        .toLowerCase();
      if (!haystack.includes(search)) return false;
    }

    return true;
  });

  const sorted = [...filtered];
  switch (filters.sortBy) {
    case 'price-asc':
      sorted.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      sorted.sort((a, b) => b.price - a.price);
      break;
    case 'name':
      sorted.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'newest':
      sorted.sort((a, b) => Number(b.isNewArrival) - Number(a.isNewArrival));
      break;
    case 'featured':
    default:
      sorted.sort((a, b) => Number(b.isFeatured) - Number(a.isFeatured));
      break;
  }

  return sorted;
}
