import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Cpu, HardDrive, Monitor, ShieldCheck, Truck, ShoppingCart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '@/constants/company';
import { ROUTES } from '@/constants/routes';
import { calcDiscount, formatPrice } from '@/lib/utils';
import type { Product, RentalProduct } from '@/types/product.types';

type CatalogItem =
  | { mode: 'rental'; item: RentalProduct }
  | { mode: 'sales'; item: Product };

interface ProductDetailModalProps {
  target: CatalogItem | null;
  onClose: () => void;
}

export function ProductDetailModal({ target, onClose }: ProductDetailModalProps) {
  useEffect(() => {
    if (!target) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [target, onClose]);

  if (!target) return null;

  const { mode, item } = target;
  const specRows = [
    { label: 'Processor', value: item.specs.processor, icon: Cpu },
    { label: 'Memory (RAM)', value: item.specs.ram, icon: HardDrive },
    { label: 'Storage', value: item.specs.storage, icon: HardDrive },
    { label: 'Display', value: item.specs.display, icon: Monitor },
    { label: 'Graphics', value: item.specs.graphics, icon: Cpu },
    { label: 'Operating System', value: item.specs.os, icon: Monitor },
    { label: 'Weight', value: item.specs.weight, icon: Monitor },
    { label: 'Warranty', value: item.specs.warranty, icon: ShieldCheck },
  ].filter((row) => Boolean(row.value));

  const quoteUrl = `${ROUTES.CONTACT}?tab=quote&device=${encodeURIComponent(item.name)}`;
  const whatsappHref =
    mode === 'rental'
      ? getWhatsAppUrl(WHATSAPP_MESSAGES.rentalEnquiry(item.name))
      : getWhatsAppUrl(WHATSAPP_MESSAGES.salesEnquiry(item.name));

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-dark-950/60 p-4 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-detail-title"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-card-xl border border-border"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm px-6 py-4 border-b border-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Badge variant="primary">{item.brand}</Badge>
            {mode === 'sales' && item.condition === 'refurbished' && (
              <Badge variant="warning">Refurbished</Badge>
            )}
            {mode === 'rental' && (
              <Badge variant="success">
                <Truck className="h-3 w-3" aria-hidden="true" />
                {item.deliveryTime}
              </Badge>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close product details"
            className="p-2 rounded-lg text-dark-500 hover:bg-dark-100 transition-colors"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="p-6 grid md:grid-cols-2 gap-6">
          <div>
            <img
              src={item.thumbnail}
              alt={item.name}
              className="w-full aspect-[4/3] object-cover rounded-xl border border-border"
            />

            {mode === 'rental' ? (
              <div className="mt-4 bg-surface rounded-xl p-4 border border-border">
                <p className="text-xs font-semibold uppercase tracking-wider text-dark-400 mb-3">
                  Rental Plans (Minimum: {item.pricing.minimumPeriod})
                </p>
                <div className="grid grid-cols-3 gap-3 text-center">
                  {item.pricing.daily && (
                    <div className="bg-white rounded-lg p-2.5 border border-border">
                      <p className="text-lg font-bold text-primary-700">
                        {formatPrice(item.pricing.daily)}
                      </p>
                      <p className="text-xs text-dark-400">Per Day</p>
                    </div>
                  )}
                  {item.pricing.weekly && (
                    <div className="bg-white rounded-lg p-2.5 border border-border">
                      <p className="text-lg font-bold text-primary-700">
                        {formatPrice(item.pricing.weekly)}
                      </p>
                      <p className="text-xs text-dark-400">Per Week</p>
                    </div>
                  )}
                  <div className="bg-white rounded-lg p-2.5 border border-primary-200">
                    <p className="text-lg font-bold text-primary-700">
                      {formatPrice(item.pricing.monthly)}
                    </p>
                    <p className="text-xs text-dark-400">Per Month</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="mt-4 bg-surface rounded-xl p-4 border border-border">
                <p className="text-xs font-semibold uppercase tracking-wider text-dark-400 mb-1">
                  Selling Price
                </p>
                <div className="flex items-end gap-3">
                  <span className="text-3xl font-bold font-display text-primary-700">
                    {formatPrice(item.price)}
                  </span>
                  {item.originalPrice && (
                    <>
                      <span className="text-sm text-dark-400 line-through pb-1">
                        {formatPrice(item.originalPrice)}
                      </span>
                      <Badge variant="sale" className="mb-1">
                        {calcDiscount(item.originalPrice, item.price)}% OFF
                      </Badge>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col justify-between space-y-5">
            <div>
              <h2 id="product-detail-title" className="text-2xl font-display font-bold text-dark-900">
                {item.name}
              </h2>
              <p className="mt-2 text-sm text-dark-600 leading-relaxed">{item.description}</p>

              <div className="mt-5">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-dark-400 mb-3">
                  Key Specifications
                </h3>
                <dl className="space-y-2">
                  {specRows.map((spec) => (
                    <div
                      key={spec.label}
                      className="flex items-center justify-between gap-4 py-1.5 border-b border-border/60 text-sm"
                    >
                      <dt className="text-dark-500">{spec.label}</dt>
                      <dd className="font-medium text-dark-900 text-right">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button
                  variant="primary"
                  size="md"
                  fullWidth
                  leftIcon={
                    mode === 'sales' ? (
                      <ShoppingCart className="h-4 w-4" aria-hidden="true" />
                    ) : undefined
                  }
                >
                  {mode === 'rental' ? 'Rent via WhatsApp' : 'Buy via WhatsApp'}
                </Button>
              </a>
              <Link to={quoteUrl} onClick={onClose} className="flex-1">
                <Button variant="outline" size="md" fullWidth>
                  Request Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
