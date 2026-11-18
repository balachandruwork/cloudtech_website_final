import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Cpu, HardDrive, MonitorSmartphone, Truck } from 'lucide-react';
import { SectionContainer } from '@/components/common/SectionContainer';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { RENTAL_PRODUCTS, RENTAL_CATEGORIES } from '@/data/rentalProducts.data';
import { ROUTES } from '@/constants/routes';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '@/constants/company';
import { formatPrice } from '@/lib/utils';
import { fadeUp, staggerFast } from '@/lib/animations';
import { cn } from '@/lib/cn';
import type { RentalProduct } from '@/types/product.types';

function RentalProductCard({ product }: { product: RentalProduct }) {
  return (
    <div className="card-base card-hover flex flex-col overflow-hidden group">
      {/* Image */}
      <div className="relative aspect-[4/3] bg-dark-50 overflow-hidden">
        <img
          src={product.thumbnail}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(event) => { event.currentTarget.src = 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=80'; }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <MonitorSmartphone className="h-16 w-16 text-white/60 drop-shadow" aria-hidden="true" />
        </div>
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge variant="primary">{product.brand}</Badge>
          {!product.isAvailable && <Badge variant="danger">Unavailable</Badge>}
        </div>
        {product.isFeatured && (
          <div className="absolute top-3 right-3">
            <Badge variant="featured">Featured</Badge>
          </div>
        )}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-emerald-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
          <Truck className="h-3 w-3" aria-hidden="true" />
          {product.deliveryTime}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <div className="flex-1">
          <h3 className="font-display font-semibold text-dark-900 text-base mb-2">{product.name}</h3>

          {/* Specs */}
          <div className="grid grid-cols-2 gap-1.5 mb-4">
            {[
              { icon: Cpu, text: product.specs.processor },
              { icon: HardDrive, text: `${product.specs.ram} · ${product.specs.storage}` },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-1.5 text-xs text-dark-500">
                <Icon className="h-3 w-3 flex-shrink-0 text-primary-400" aria-hidden="true" />
                <span className="truncate">{text}</span>
              </div>
            ))}
          </div>

          {/* Pricing */}
          <div className="bg-surface rounded-lg p-3 mb-4">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-dark-400 mb-2">
              Rental Pricing
            </p>
            <div className="grid grid-cols-3 gap-2 text-center">
              {product.pricing.daily && (
                <div>
                  <p className="text-base font-bold text-primary-700">{formatPrice(product.pricing.daily)}</p>
                  <p className="text-[10px] text-dark-400">/ Day</p>
                </div>
              )}
              {product.pricing.weekly && (
                <div>
                  <p className="text-base font-bold text-primary-700">{formatPrice(product.pricing.weekly)}</p>
                  <p className="text-[10px] text-dark-400">/ Week</p>
                </div>
              )}
              <div>
                <p className="text-base font-bold text-primary-700">{formatPrice(product.pricing.monthly)}</p>
                <p className="text-[10px] text-dark-400">/ Month</p>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <a
            href={getWhatsAppUrl(WHATSAPP_MESSAGES.rentalEnquiry(product.name))}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <Button variant="primary" size="sm" fullWidth>
              Rent Now
            </Button>
          </a>
          <Link to={ROUTES.CONTACT} className="flex-1">
            <Button variant="outline" size="sm" fullWidth>
              Get Quote
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export function RentalProductsSection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const supportedProducts = RENTAL_PRODUCTS.filter((p) =>
    ['laptop', 'desktop', 'macbook'].includes(p.category)
  );
  const filtered = activeCategory === 'all'
    ? supportedProducts
    : supportedProducts.filter((p) => p.category === activeCategory);

  return (
    <SectionContainer className="bg-white">
      <SectionHeading
        eyebrow="Rental Catalog"
        title="Rent Premium Devices"
        titleHighlight="Starting ₹550/Month"
        description="Flexible daily, weekly, and monthly rental plans. Free delivery and installation included. Wide range of laptops, desktops, MacBooks, and gaming devices available."
      />

      {/* Category tabs */}
      <div className="mt-10 flex flex-wrap gap-2 justify-center" role="tablist" aria-label="Device categories">
        {RENTAL_CATEGORIES.map((cat) => (
          <button
            key={cat.value}
            role="tab"
            aria-selected={activeCategory === cat.value}
            onClick={() => setActiveCategory(cat.value)}
            className={cn(
              'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-primary-600',
              activeCategory === cat.value
                ? 'bg-primary-600 text-white shadow-blue'
                : 'bg-white border border-border text-dark-600 hover:border-primary-300 hover:text-primary-600'
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Product grid */}
      <motion.div
        key={activeCategory}
        variants={staggerFast}
        initial="hidden"
        animate="visible"
        className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
      >
        {filtered.map((product) => (
          <motion.div key={product.id} variants={fadeUp}>
            <RentalProductCard product={product} />
          </motion.div>
        ))}
      </motion.div>

      {/* View all CTA */}
      <div className="mt-10 text-center">
        <Link to={ROUTES.RENTAL}>
          <Button variant="outline" size="lg">
            View Full Rental Catalog
          </Button>
        </Link>
      </div>
    </SectionContainer>
  );
}
