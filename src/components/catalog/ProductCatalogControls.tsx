import { Search, RotateCcw } from 'lucide-react';
import { cn } from '@/lib/cn';
import type {
  ProductBrand,
  ProductCategory,
  ProductCondition,
  ProductFilters,
} from '@/types/product.types';

interface CategoryOption {
  value: string;
  label: string;
}

interface ProductCatalogControlsProps {
  filters: ProductFilters;
  onChange: (next: ProductFilters) => void;
  categories: readonly CategoryOption[];
  brands: ProductBrand[];
  showConditionFilter?: boolean;
  priceLabel: string;
  priceRanges: { label: string; max?: number }[];
  totalCount: number;
  filteredCount: number;
}

export function ProductCatalogControls({
  filters,
  onChange,
  categories,
  brands,
  showConditionFilter = false,
  priceLabel,
  priceRanges,
  totalCount,
  filteredCount,
}: ProductCatalogControlsProps) {
  const activeCategory = filters.category?.[0] ?? 'all';
  const activeBrand = filters.brand?.[0] ?? 'all';
  const activeCondition = filters.condition?.[0] ?? 'all';
  const activeMaxPrice = filters.maxPrice ? String(filters.maxPrice) : 'all';

  const hasActiveFilters = Boolean(
    filters.search ||
      (filters.category && filters.category.length > 0) ||
      (filters.brand && filters.brand.length > 0) ||
      (filters.condition && filters.condition.length > 0) ||
      typeof filters.maxPrice === 'number' ||
      (filters.sortBy && filters.sortBy !== 'featured')
  );

  const resetFilters = () => {
    onChange({ sortBy: 'featured' });
  };

  return (
    <div className="mb-10 space-y-5">
      {/* Category tabs */}
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Product categories">
        {categories.map((cat) => {
          const isSelected = activeCategory === cat.value;
          return (
            <button
              key={cat.value}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() =>
                onChange({
                  ...filters,
                  category:
                    cat.value === 'all' ? undefined : [cat.value as ProductCategory],
                })
              }
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
                isSelected
                  ? 'bg-primary-600 text-white shadow-blue'
                  : 'bg-white border border-border text-dark-600 hover:border-primary-300 hover:text-primary-600'
              )}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Search & filter controls */}
      <div className="card-base p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 items-center">
        {/* Search */}
        <div className="relative lg:col-span-2">
          <Search
            className="h-4 w-4 text-dark-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
            aria-hidden="true"
          />
          <input
            type="search"
            value={filters.search ?? ''}
            onChange={(e) =>
              onChange({ ...filters, search: e.target.value || undefined })
            }
            placeholder="Search by model, CPU, RAM, or brand..."
            aria-label="Search products"
            className="input-base pl-10 py-2.5"
          />
        </div>

        {/* Brand */}
        <select
          aria-label="Filter by brand"
          value={activeBrand}
          onChange={(e) =>
            onChange({
              ...filters,
              brand:
                e.target.value === 'all'
                  ? undefined
                  : [e.target.value as ProductBrand],
            })
          }
          className="input-base py-2.5"
        >
          <option value="all">All Brands</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>

        {/* Condition (sales) or Price Range */}
        {showConditionFilter ? (
          <select
            aria-label="Filter by condition"
            value={activeCondition}
            onChange={(e) =>
              onChange({
                ...filters,
                condition:
                  e.target.value === 'all'
                    ? undefined
                    : [e.target.value as ProductCondition],
              })
            }
            className="input-base py-2.5"
          >
            <option value="all">All Conditions</option>
            <option value="new">New</option>
            <option value="refurbished">Refurbished</option>
          </select>
        ) : (
          <select
            aria-label={priceLabel}
            value={activeMaxPrice}
            onChange={(e) =>
              onChange({
                ...filters,
                maxPrice:
                  e.target.value === 'all' ? undefined : Number(e.target.value),
              })
            }
            className="input-base py-2.5"
          >
            {priceRanges.map((range) => (
              <option key={range.label} value={range.max ? String(range.max) : 'all'}>
                {range.label}
              </option>
            ))}
          </select>
        )}

        {/* Sort */}
        <select
          aria-label="Sort products"
          value={filters.sortBy ?? 'featured'}
          onChange={(e) =>
            onChange({
              ...filters,
              sortBy: e.target.value as ProductFilters['sortBy'],
            })
          }
          className="input-base py-2.5"
        >
          <option value="featured">Sort: Featured</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="name">Name: A to Z</option>
          {showConditionFilter && <option value="newest">Sort: New Arrivals</option>}
        </select>
      </div>

      {/* Price range chips for sales + summary count */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-dark-500">
        <div className="flex flex-wrap items-center gap-2">
          <span>
            Showing <strong className="text-dark-900">{filteredCount}</strong> of{' '}
            <strong className="text-dark-900">{totalCount}</strong> devices
          </span>
          {showConditionFilter && (
            <select
              aria-label={priceLabel}
              value={activeMaxPrice}
              onChange={(e) =>
                onChange({
                  ...filters,
                  maxPrice:
                    e.target.value === 'all' ? undefined : Number(e.target.value),
                })
              }
              className="ml-2 px-3 py-1.5 rounded-lg border border-border bg-white text-xs text-dark-700"
            >
              {priceRanges.map((range) => (
                <option key={range.label} value={range.max ? String(range.max) : 'all'}>
                  {range.label}
                </option>
              ))}
            </select>
          )}
        </div>

        {hasActiveFilters && (
          <button
            type="button"
            onClick={resetFilters}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-600 hover:text-primary-700"
          >
            <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
            Reset filters
          </button>
        )}
      </div>
    </div>
  );
}
