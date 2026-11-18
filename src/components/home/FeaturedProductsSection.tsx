import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, MonitorSmartphone, Zap, ShieldCheck } from 'lucide-react';
import { SectionContainer } from '@/components/common/SectionContainer';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PRODUCTS } from '@/data/products.data';
import { ROUTES } from '@/constants/routes';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '@/constants/company';
import { formatPrice, calcDiscount } from '@/lib/utils';
import { fadeUp, staggerFast, viewportOnce } from '@/lib/animations';
import type { Product } from '@/types/product.types';

function ProductCard({ product }: { product: Product }) {
  const discount = product.originalPrice
    ? calcDiscount(product.originalPrice, product.price)
    : 0;

  return (
    <div className="card-base card-hover flex flex-col overflow-hidden group">
      {/* Image */}
      <div className="relative aspect-[4/3] bg-gradient-to-br from-dark-50 to-dark-100 overflow-hidden">
        <img
          src={product.thumbnail}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(event) => { event.currentTarget.src = 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=80'; }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <MonitorSmartphone className="h-20 w-20 text-white/60 drop-shadow" aria-hidden="true" />
        </div>
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.isNewArrival && <Badge variant="new">New</Badge>}
          {product.condition === 'refurbished' && <Badge variant="warning">Refurbished</Badge>}
          {discount > 0 && <Badge variant="sale">{discount}% OFF</Badge>}
        </div>
        <div className="absolute top-3 right-3">
          <Badge variant="navy">{product.brand}</Badge>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <div className="flex-1">
          <h3 className="font-display font-semibold text-dark-900 text-base mb-1">{product.name}</h3>
          <p className="text-xs text-dark-500 mb-3">{product.shortDescription}</p>

          {/* Key specs */}
          <div className="bg-surface rounded-lg px-3 py-2.5 mb-4 space-y-1.5">
            <div className="flex items-center gap-2 text-xs text-dark-600">
              <Zap className="h-3 w-3 text-primary-500" aria-hidden="true" />
              <span>{product.specs.processor}</span>
            </div>
            <div className="text-xs text-dark-500 pl-5">
              {product.specs.ram} · {product.specs.storage}
              {product.specs.display && ` · ${product.specs.display}`}
            </div>
            {product.specs.warranty && (
              <div className="flex items-center gap-2 text-xs text-emerald-600">
                <ShieldCheck className="h-3 w-3" aria-hidden="true" />
                <span>{product.specs.warranty}</span>
              </div>
            )}
          </div>

          {/* Price */}
          <div className="flex items-end gap-2 mb-4">
            <span className="text-2xl font-bold text-primary-700 font-display">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-dark-400 line-through pb-0.5">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <a
            href={getWhatsAppUrl(WHATSAPP_MESSAGES.salesEnquiry(product.name))}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <Button variant="primary" size="sm" fullWidth leftIcon={<ShoppingCart className="h-4 w-4" aria-hidden="true" />}>
              Buy Now
            </Button>
          </a>
          <Link to={ROUTES.CONTACT} className="flex-1">
            <Button variant="outline" size="sm" fullWidth>
              Enquire
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export function FeaturedProductsSection() {
  const featured = PRODUCTS.filter((p) => p.isFeatured).slice(0, 4);

  return (
    <SectionContainer className="bg-surface">
      <SectionHeading
        eyebrow="Products for Sale"
        title="Buy New, Refurbished &"
        titleHighlight="Gaming Computers"
        description="Shop genuine laptops, desktops, MacBooks, and gaming PCs at the best prices in Coimbatore. All products come with warranty and free technical support."
      />

      <motion.div
        variants={staggerFast}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
      >
        {featured.map((product) => (
          <motion.div key={product.id} variants={fadeUp}>
            <ProductCard product={product} />
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-10 text-center">
        <Link to={ROUTES.SALES}>
          <Button variant="secondary" size="lg">
            View All Products
          </Button>
        </Link>
      </div>
    </SectionContainer>
  );
}
