import { useMemo, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Target,
  Wrench,
} from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion } from '@/components/ui/accordion';
import { ContactEnquiryForm } from '@/components/forms/ContactEnquiryForm';
import { QuoteRequestForm } from '@/components/forms/QuoteRequestForm';
import { ProductCatalogControls } from '@/components/catalog/ProductCatalogControls';
import { ProductDetailModal } from '@/components/catalog/ProductDetailModal';
import { PRODUCTS, PRODUCT_CATEGORIES } from '@/data/products.data';
import {
  MIN_MONTHLY_RENTAL,
  RENTAL_CATEGORIES,
  RENTAL_PRODUCTS,
} from '@/data/rentalProducts.data';
import { BLOG_POSTS } from '@/data/blog.data';
import { FAQ_ITEMS } from '@/data/faq.data';
import { COMPANY, getWhatsAppUrl, WHATSAPP_MESSAGES } from '@/constants/company';
import { PAGE_SEO } from '@/constants/seo';
import { ROUTES } from '@/constants/routes';
import { filterRentalProducts, filterSalesProducts } from '@/lib/catalogFilters';
import { calcDiscount, formatDate, formatPrice } from '@/lib/utils';
import type { Product, ProductBrand, ProductFilters, RentalProduct } from '@/types/product.types';

import dellLatitudeImg from '@/assets/images/dell_latitude_laptop_1794999745585.jpg';
import macbookAirImg from '@/assets/images/macbook_air_laptop_1794999747306.jpg';
import accKeyboardMouseImg from '@/assets/images/acc_keyboard_mouse_1794999748738.jpg';
import accBusinessMonitorImg from '@/assets/images/acc_business_monitor_1794999749946.jpg';
import accHeadsetWebcamImg from '@/assets/images/acc_headset_webcam_1794999749613.jpg';
import accRouterSwitchImg from '@/assets/images/acc_router_switch_1794999750408.jpg';
import accStorageDriveImg from '@/assets/images/acc_storage_drive_1794999751102.jpg';
import accCablesPowerImg from '@/assets/images/acc_cables_power_1794999750639.jpg';

const IMAGES = {
  team: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80',
  rental: dellLatitudeImg,
  sales: macbookAirImg,
  service: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
  corporate: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80',
  blog: 'https://images.unsplash.com/photo-1516321310764-8d9c8bc0c3d2?auto=format&fit=crop&w=1200&q=80',
  contact: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
  accessories: accKeyboardMouseImg,
};

function Hero({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
}) {
  return (
    <section className="bg-navy-600 text-white overflow-hidden">
      <div className="container-site grid lg:grid-cols-2 min-h-[360px] items-center gap-10 py-14 lg:py-0">
        <div className="py-5">
          <p className="text-primary-200 text-sm font-bold uppercase tracking-[0.18em] mb-4">
            {eyebrow}
          </p>
          <h1 className="text-white text-balance">{title}</h1>
          <p className="mt-5 text-blue-100 max-w-xl text-lg">{description}</p>
        </div>
        <img
          src={image}
          alt=""
          className="h-72 lg:h-full min-h-[360px] w-full object-cover rounded-2xl lg:rounded-none"
        />
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section className="bg-primary-600">
      <div className="container-site py-12 flex flex-col sm:flex-row justify-between gap-5 items-center">
        <div>
          <h2 className="text-white text-2xl">Need a tailored IT solution?</h2>
          <p className="text-primary-100 mt-1">
            Share your requirements and our Coimbatore team will prepare a clear quotation.
          </p>
        </div>
        <Link to={`${ROUTES.CONTACT}?tab=quote`}>
          <Button variant="secondary" size="lg">
            Request a free quote <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
}

const serviceItems = [
  {
    id: 'laptop-repair',
    title: 'Laptop & desktop repair',
    description: 'Diagnostics, component replacements, SSD/RAM upgrades, and thermal servicing.',
  },
  {
    id: 'data-recovery',
    title: 'Data recovery',
    description: 'Careful recovery evaluation for failing hard drives, SSDs, and accidental deletions.',
  },
  {
    id: 'networking',
    title: 'Networking & Wi-Fi',
    description: 'Router/switch setup, structured LAN planning, and stable office Wi-Fi coverage.',
  },
  {
    id: 'amc',
    title: 'Managed IT & AMC',
    description: 'Preventive maintenance, periodic checkups, and responsive remote or on-site support.',
  },
  {
    id: 'other',
    title: 'Software & security',
    description: 'OS installation, virus/malware removal, and essential business software setup.',
  },
  {
    id: 'corporate-it',
    title: 'Office IT infrastructure',
    description: 'Workstation staging, device deployment, and peripheral setup for local teams.',
  },
];

function CatalogCard({
  name,
  description,
  image,
  detail,
  onViewDetails,
  whatsappHref,
  quoteHref,
}: {
  name: string;
  description: string;
  image: string;
  detail: string;
  onViewDetails?: () => void;
  whatsappHref?: string;
  quoteHref?: string;
}) {
  return (
    <article className="card-base overflow-hidden group flex flex-col">
      <div className="aspect-[4/3] overflow-hidden bg-dark-50">
        <img
          src={image}
          alt={name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(event) => {
            event.currentTarget.src = IMAGES.rental;
          }}
        />
      </div>
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-display font-semibold text-dark-900">{name}</h3>
          <p className="mt-2 text-sm text-dark-500">{description}</p>
          <p className="mt-4 font-bold text-primary-700">{detail}</p>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-3 pt-2 border-t border-border/60">
          {onViewDetails && (
            <button
              type="button"
              onClick={onViewDetails}
              className="text-sm font-semibold text-dark-700 hover:text-primary-600"
            >
              View specs
            </button>
          )}
          {whatsappHref && (
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-emerald-600 hover:text-emerald-700"
            >
              WhatsApp
            </a>
          )}
          <Link
            to={quoteHref ?? ROUTES.CONTACT}
            className="ml-auto inline-flex items-center gap-1 text-sm font-semibold text-primary-600 hover:text-primary-700"
          >
            Enquire now <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}

export function AboutPage() {
  return (
    <>
      <SEO
        title={PAGE_SEO.about.title}
        description={PAGE_SEO.about.description}
        keywords={PAGE_SEO.about.keywords}
        canonical={ROUTES.ABOUT}
      />
      <Hero
        eyebrow="About Cloud Tech"
        title="A practical IT hardware & support partner in Coimbatore since 2023"
        description="Established in 2023, Cloud Tech brings around 3–4 years of hands-on experience in laptop rentals, hardware sales, repairs, and local IT support."
        image={IMAGES.team}
      />

      <section className="container-site section-py grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          ['2023', 'Year established in Coimbatore'],
          ['3–4 Years', 'Practical IT hardware & service experience'],
          ['3–4', 'Current active customers served directly'],
          ['4 Core Areas', 'Rentals, Sales, Accessories & IT Services'],
        ].map(([value, label]) => (
          <div className="card-base p-6" key={label}>
            <p className="text-3xl font-bold text-primary-600 font-display">{value}</p>
            <p className="mt-1 text-sm text-dark-600">{label}</p>
          </div>
        ))}
      </section>

      <section className="bg-surface">
        <div className="container-site section-py grid lg:grid-cols-2 gap-12">
          <div>
            <p className="badge-primary">Company Background</p>
            <h2 className="mt-4">Focused, transparent IT service from day one.</h2>
            <p className="mt-5">
              Cloud Tech was founded in {COMPANY.founded} in Coimbatore, Tamil Nadu to make reliable
              computing equipment and responsive technical support accessible for startups, local
              businesses, event organizers, and individual professionals.
            </p>
            <p className="mt-4">
              As a focused, growing operation currently serving 3–4 active customers with around
              3–4 years of hands-on experience, every enquiry and device deployment receives
              direct attention—from specification review and pre-delivery testing to post-delivery
              support.
            </p>
          </div>

          <div className="space-y-4">
            <div className="card-base p-6">
              <div className="flex items-center gap-3 mb-2">
                <Target className="h-5 w-5 text-primary-600" aria-hidden="true" />
                <h3 className="text-lg">Our Vision &amp; Mission</h3>
              </div>
              <p className="text-sm">
                To grow sustainably as a dependable Coimbatore technology partner by delivering
                well-tested hardware, honest guidance, and timely maintenance without inflated claims.
              </p>
            </div>
            <div className="card-base p-6 space-y-3">
              <h3 className="text-lg">How We Support Customers</h3>
              {[
                'Clear hardware recommendations and transparent daily, weekly, or monthly pricing',
                'Multi-point testing on all rental laptops, desktops, MacBooks, and refurbished units',
                'Direct support in Coimbatore for repairs, networking, data recovery, and AMC care',
              ].map((text) => (
                <div className="flex gap-3" key={text}>
                  <CheckCircle2 className="text-primary-600 shrink-0 mt-0.5 h-5 w-5" />
                  <p className="text-sm">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}

export function RentalPage() {
  const [filters, setFilters] = useState<ProductFilters>({ sortBy: 'featured' });
  const [selected, setSelected] = useState<RentalProduct | null>(null);

  const brands = useMemo(
    () => Array.from(new Set(RENTAL_PRODUCTS.map((p) => p.brand))) as ProductBrand[],
    []
  );

  const filteredDevices = useMemo(
    () => filterRentalProducts(RENTAL_PRODUCTS, filters),
    [filters]
  );

  return (
    <>
      <SEO
        title={PAGE_SEO.rental.title}
        description={PAGE_SEO.rental.description}
        keywords={PAGE_SEO.rental.keywords}
        canonical={ROUTES.RENTAL}
      />
      <Hero
        eyebrow="Flexible device rental"
        title="The right device, for exactly as long as you need it."
        description={`Desktop rentals from ${formatPrice(MIN_MONTHLY_RENTAL)}/month, business laptops from ₹3,000/month, and MacBooks from ₹3,500/month in Coimbatore.`}
        image={IMAGES.rental}
      />
      <section className="container-site section-py">
        <div className="mb-8">
          <p className="badge-primary">Rental catalogue</p>
          <h2 className="mt-4">Laptops, MacBooks, Gaming Systems &amp; Desktops</h2>
          <p className="mt-3">
            Search, filter by category, brand, or monthly budget, and view full specifications.
          </p>
        </div>

        <ProductCatalogControls
          filters={filters}
          onChange={setFilters}
          categories={RENTAL_CATEGORIES}
          brands={brands}
          priceLabel="Filter by monthly rental budget"
          priceRanges={[
            { label: 'Any Monthly Budget' },
            { label: 'Up to ₹2,500 / mo', max: 2500 },
            { label: 'Up to ₹3,500 / mo', max: 3500 },
            { label: 'Up to ₹5,000 / mo', max: 5000 },
            { label: 'Up to ₹15,000 / mo', max: 15000 },
          ]}
          totalCount={RENTAL_PRODUCTS.length}
          filteredCount={filteredDevices.length}
        />

        {filteredDevices.length === 0 ? (
          <div className="card-base p-10 text-center">
            <p className="font-semibold text-dark-900">No rental devices match your filters.</p>
            <p className="text-sm mt-1">
              Try clearing a filter or contact us directly for custom device configurations.
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDevices.map((product) => (
              <CatalogCard
                key={product.id}
                name={product.name}
                description={`${product.specs.processor} · ${product.specs.ram} · ${product.specs.storage}`}
                image={product.thumbnail}
                detail={`From ${formatPrice(product.pricing.monthly)} / month${
                  product.pricing.daily ? ` (${formatPrice(product.pricing.daily)}/day)` : ''
                }`}
                onViewDetails={() => setSelected(product)}
                whatsappHref={getWhatsAppUrl(WHATSAPP_MESSAGES.rentalEnquiry(product.name))}
                quoteHref={`${ROUTES.CONTACT}?tab=quote&device=${encodeURIComponent(product.name)}`}
              />
            ))}
          </div>
        )}
      </section>

      <section className="bg-surface">
        <div className="container-narrow section-py">
          <h2 className="text-center mb-8">Rental FAQs</h2>
          <Accordion items={FAQ_ITEMS.filter((item) => item.category === 'rental')} />
        </div>
      </section>

      <ProductDetailModal
        target={selected ? { mode: 'rental', item: selected } : null}
        onClose={() => setSelected(null)}
      />
      <Cta />
    </>
  );
}

export function SalesPage() {
  const [filters, setFilters] = useState<ProductFilters>({ sortBy: 'featured' });
  const [selected, setSelected] = useState<Product | null>(null);

  const brands = useMemo(
    () => Array.from(new Set(PRODUCTS.map((p) => p.brand))) as ProductBrand[],
    []
  );

  const filteredDevices = useMemo(
    () => filterSalesProducts(PRODUCTS, filters),
    [filters]
  );

  return (
    <>
      <SEO
        title={PAGE_SEO.sales.title}
        description={PAGE_SEO.sales.description}
        keywords={PAGE_SEO.sales.keywords}
        canonical={ROUTES.SALES}
      />
      <Hero
        eyebrow="Computers for sale"
        title="New and certified refurbished systems with warranty."
        description="Browse laptops, desktops, MacBooks, and gaming systems with transparent specifications, pricing, and local support."
        image={IMAGES.sales}
      />
      <section className="container-site section-py">
        <div className="mb-8">
          <p className="badge-primary">Sales catalogue</p>
          <h2 className="mt-4">New &amp; Refurbished Hardware</h2>
          <p className="mt-3">
            Filter by category, condition, brand, or budget and click any system to inspect full specs.
          </p>
        </div>

        <ProductCatalogControls
          filters={filters}
          onChange={setFilters}
          categories={PRODUCT_CATEGORIES}
          brands={brands}
          showConditionFilter
          priceLabel="Filter by budget"
          priceRanges={[
            { label: 'Any Budget' },
            { label: 'Under ₹35,000', max: 35000 },
            { label: 'Under ₹60,000', max: 60000 },
            { label: 'Under ₹90,000', max: 90000 },
            { label: 'Under ₹1,20,000', max: 120000 },
          ]}
          totalCount={PRODUCTS.length}
          filteredCount={filteredDevices.length}
        />

        {filteredDevices.length === 0 ? (
          <div className="card-base p-10 text-center">
            <p className="font-semibold text-dark-900">No products match your filters.</p>
            <p className="text-sm mt-1">
              Reset filters or send us an enquiry if you are looking for a specific configuration.
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDevices.map((product) => {
              const discount = product.originalPrice
                ? calcDiscount(product.originalPrice, product.price)
                : 0;
              const priceLabel = `${formatPrice(product.price)}${
                discount > 0 ? ` (${discount}% off · ${product.condition})` : ` (${product.condition})`
              }`;
              return (
                <CatalogCard
                  key={product.id}
                  name={product.name}
                  description={`${product.specs.processor} · ${product.specs.ram} · ${product.specs.storage}${
                    product.specs.warranty ? ` · ${product.specs.warranty}` : ''
                  }`}
                  image={product.thumbnail}
                  detail={priceLabel}
                  onViewDetails={() => setSelected(product)}
                  whatsappHref={getWhatsAppUrl(WHATSAPP_MESSAGES.salesEnquiry(product.name))}
                  quoteHref={`${ROUTES.CONTACT}?tab=quote&device=${encodeURIComponent(product.name)}`}
                />
              );
            })}
          </div>
        )}
      </section>

      <ProductDetailModal
        target={selected ? { mode: 'sales', item: selected } : null}
        onClose={() => setSelected(null)}
      />
      <Cta />
    </>
  );
}

export function ServicesPage() {
  return (
    <>
      <SEO
        title={PAGE_SEO.services.title}
        description={PAGE_SEO.services.description}
        keywords={PAGE_SEO.services.keywords}
        canonical={ROUTES.SERVICES}
      />
      <Hero
        eyebrow="IT services"
        title="Keep your laptops, desktops, and office networks dependable."
        description="Practical repair, data recovery, software configuration, networking, and AMC support from our Coimbatore team."
        image={IMAGES.service}
      />
      <section className="container-site section-py">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {serviceItems.map((item) => (
            <article className="card-base p-6 flex flex-col justify-between" key={item.title}>
              <div>
                <Wrench className="text-primary-600 h-7 w-7" aria-hidden="true" />
                <h3 className="mt-5 text-lg">{item.title}</h3>
                <p className="mt-2 text-sm">{item.description}</p>
              </div>
              <div className="mt-5 flex items-center justify-between pt-3 border-t border-border/60">
                <a
                  href={getWhatsAppUrl(WHATSAPP_MESSAGES.serviceEnquiry(item.title))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-emerald-600 hover:text-emerald-700"
                >
                  WhatsApp
                </a>
                <Link
                  to={`${ROUTES.CONTACT}?tab=enquiry&service=${encodeURIComponent(item.id)}`}
                  className="inline-flex items-center text-primary-600 text-sm font-semibold hover:text-primary-700"
                >
                  Book support <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <Cta />
    </>
  );
}

export function CorporatePage() {
  const solutions = [
    'Team and bulk laptop or desktop rentals for projects and training',
    'Office workstation staging, OS imaging, and peripheral setup',
    'Local office Wi-Fi planning, routers, and switch deployment',
    'Annual Maintenance Contracts (AMC) and on-call support in Coimbatore',
  ];
  return (
    <>
      <SEO
        title={PAGE_SEO.corporate.title}
        description={PAGE_SEO.corporate.description}
        keywords={PAGE_SEO.corporate.keywords}
        canonical={ROUTES.CORPORATE}
      />
      <Hero
        eyebrow="Business & corporate solutions"
        title="Practical IT setup and rental support for growing teams."
        description="Whether you are setting up a startup team, running a training batch, or standardizing office IT maintenance, Cloud Tech delivers accountable local execution."
        image={IMAGES.corporate}
      />
      <section className="container-site section-py grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2>Built for startups, SMBs, and event teams</h2>
          <p className="mt-4">
            Our business support covers hardware selection, software pre-configuration, delivery,
            Wi-Fi setup, and ongoing maintenance under a clear, itemized proposal.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to={`${ROUTES.CONTACT}?tab=quote`}>
              <Button>Request a Business Quote</Button>
            </Link>
            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.corporateEnquiry)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="whatsapp">WhatsApp Corporate Desk</Button>
            </a>
          </div>
        </div>
        <div className="grid gap-4">
          {solutions.map((solution, index) => (
            <div className="card-base p-5 flex gap-4 items-center" key={solution}>
              <span className="bg-primary-100 text-primary-700 h-8 w-8 rounded-full shrink-0 flex justify-center items-center font-bold">
                0{index + 1}
              </span>
              <p className="font-semibold text-dark-800">{solution}</p>
            </div>
          ))}
        </div>
      </section>
      <Cta />
    </>
  );
}

export function AccessoriesPage() {
  const items = [
    {
      name: 'Wireless keyboards & mice',
      description: 'Ergonomic desktop and laptop input combos for daily office comfort.',
      image: accKeyboardMouseImg,
    },
    {
      name: 'Business monitors',
      description: 'Full HD external monitors for dual-screen productivity setups.',
      image: accBusinessMonitorImg,
    },
    {
      name: 'Headsets & webcams',
      description: 'Clear audio headsets and HD webcams for meetings and training calls.',
      image: accHeadsetWebcamImg,
    },
    {
      name: 'Routers & switches',
      description: 'Reliable Wi-Fi routers and gigabit switches for small offices.',
      image: accRouterSwitchImg,
    },
    {
      name: 'Storage & backup drives',
      description: 'SSDs and portable backup drives for upgrades and data safety.',
      image: accStorageDriveImg,
    },
    {
      name: 'Cables and power accessories',
      description: 'Adapters, surge strips, HDMI cables, and replacement laptop chargers.',
      image: accCablesPowerImg,
    },
  ];

  return (
    <>
      <SEO
        title={PAGE_SEO.accessories.title}
        description={PAGE_SEO.accessories.description}
        keywords={PAGE_SEO.accessories.keywords}
        canonical={ROUTES.ACCESSORIES}
      />
      <Hero
        eyebrow="Accessories"
        title="Complete every workstation."
        description="Essential accessories, monitors, storage upgrades, and networking equipment for individual and office setups."
        image={IMAGES.accessories}
      />
      <section className="container-site section-py grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((item) => (
          <CatalogCard
            key={item.name}
            name={item.name}
            description={item.description}
            image={item.image}
            detail="Available on request · Ask for pricing"
            whatsappHref={getWhatsAppUrl(WHATSAPP_MESSAGES.salesEnquiry(item.name))}
            quoteHref={`${ROUTES.CONTACT}?tab=quote&device=${encodeURIComponent(item.name)}`}
          />
        ))}
      </section>
      <Cta />
    </>
  );
}

export function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const categories = useMemo(
    () => ['All', ...Array.from(new Set(BLOG_POSTS.map((post) => post.category)))],
    []
  );

  const posts =
    activeCategory === 'All'
      ? BLOG_POSTS
      : BLOG_POSTS.filter((post) => post.category === activeCategory);

  return (
    <>
      <SEO
        title={PAGE_SEO.blog.title}
        description={PAGE_SEO.blog.description}
        keywords={PAGE_SEO.blog.keywords}
        canonical={ROUTES.BLOG}
      />
      <Hero
        eyebrow="Cloud Tech journal"
        title="Practical technology guides and company updates."
        description="Company updates since our founding in 2023 alongside rental guides, buying tips, and IT maintenance advice for Coimbatore teams."
        image={IMAGES.blog}
      />
      <section className="container-site section-py">
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? 'bg-primary-600 text-white'
                  : 'bg-white border border-border text-dark-600 hover:border-primary-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              to={`/blog/${post.slug}`}
              key={post.id}
              className="card-base card-hover overflow-hidden group flex flex-col"
            >
              <img
                src={post.thumbnail}
                alt={post.title}
                className="aspect-[16/9] w-full object-cover"
              />
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-bold text-primary-600 uppercase tracking-wide">
                    {post.category}
                  </p>
                  <h2 className="text-xl mt-2 group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm mt-3 line-clamp-3">{post.excerpt}</p>
                </div>
                <p className="text-xs text-dark-400 mt-4">
                  {post.readTime} · {formatDate(post.publishedAt)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export function BlogPostPage() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((item) => item.slug === slug);
  if (!post) return <BlogPage />;

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        keywords={post.tags.join(', ')}
        canonical={`/blog/${post.slug}`}
      />
      <article className="container-narrow section-py">
        <Link to={ROUTES.BLOG} className="text-sm text-primary-600 font-semibold hover:underline">
          ← Back to articles
        </Link>
        <p className="mt-8 text-xs font-bold text-primary-600 uppercase tracking-wide">
          {post.category}
        </p>
        <h1 className="mt-3 text-balance">{post.title}</h1>
        <p className="mt-5 text-lg text-dark-600">{post.excerpt}</p>
        <div className="flex flex-wrap gap-3 mt-5 text-sm text-dark-500">
          <span>
            {post.author.name} ({post.author.role})
          </span>
          <span aria-hidden="true">·</span>
          <span>{formatDate(post.publishedAt)}</span>
          <span aria-hidden="true">·</span>
          <span>{post.readTime}</span>
        </div>

        <img
          src={post.thumbnail}
          alt={post.title}
          className="w-full h-80 object-cover rounded-2xl mt-8 border border-border"
        />

        <div className="mt-10 space-y-5 text-base leading-relaxed text-dark-700">
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {post.tags.length > 0 && (
          <div className="mt-10 pt-6 border-t border-border flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="primary">
                #{tag}
              </Badge>
            ))}
          </div>
        )}
      </article>
      <Cta />
    </>
  );
}

export function ContactPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabParam = searchParams.get('tab');
  const deviceParam = searchParams.get('device') ?? '';
  const serviceParam = searchParams.get('service') ?? '';

  const activeTab: 'enquiry' | 'quote' =
    tabParam === 'quote' || (tabParam !== 'enquiry' && Boolean(deviceParam))
      ? 'quote'
      : 'enquiry';

  const handleTabChange = (nextTab: 'enquiry' | 'quote') => {
    const nextParams = new URLSearchParams(searchParams);
    nextParams.set('tab', nextTab);
    setSearchParams(nextParams, { replace: true });
  };

  return (
    <>
      <SEO
        title={PAGE_SEO.contact.title}
        description={PAGE_SEO.contact.description}
        keywords={PAGE_SEO.contact.keywords}
        canonical={ROUTES.CONTACT}
      />
      <Hero
        eyebrow="Contact us"
        title="Tell us what you or your team needs."
        description="Send a general enquiry or request a tailored device rental or purchase quote. Our Coimbatore team responds promptly."
        image={IMAGES.contact}
      />

      {/* Interactive Forms Section (MOD-1 & MOD-2) */}
      <section className="container-site section-py">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left: Form Panel */}
          <div className="lg:col-span-7 card-base p-6 sm:p-8">
            <div className="flex flex-wrap gap-2 border-b border-border pb-4 mb-6" role="tablist">
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'enquiry'}
                onClick={() => handleTabChange('enquiry')}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  activeTab === 'enquiry'
                    ? 'bg-primary-600 text-white'
                    : 'bg-surface text-dark-600 hover:text-primary-600'
                }`}
              >
                General Enquiry
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'quote'}
                onClick={() => handleTabChange('quote')}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  activeTab === 'quote'
                    ? 'bg-primary-600 text-white'
                    : 'bg-surface text-dark-600 hover:text-primary-600'
                }`}
              >
                Request a Quote
              </button>
            </div>

            {activeTab === 'enquiry' ? (
              <div>
                <h2 className="text-2xl mb-1">Send an Enquiry</h2>
                <p className="text-sm text-dark-500 mb-6">
                  Ask about laptop rentals, repairs, networking, AMC, or product availability.
                </p>
                <ContactEnquiryForm defaultService={serviceParam} />
              </div>
            ) : (
              <div>
                <h2 className="text-2xl mb-1">Request a Hardware Quote</h2>
                <p className="text-sm text-dark-500 mb-6">
                  Specify the device type, quantity, and rental or purchase duration for a clear estimate.
                </p>
                <QuoteRequestForm initialDevice={deviceParam} />
              </div>
            )}
          </div>

          {/* Right: Direct Contact Details & Hours */}
          <div className="lg:col-span-5 space-y-5">
            <div className="card-base p-6 space-y-4">
              <h3 className="text-lg font-display font-bold text-dark-900">
                Direct Contact — Coimbatore
              </h3>
              <div className="space-y-4 text-sm">
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-start gap-3 text-dark-600 hover:text-primary-600 transition-colors"
                >
                  <Mail className="h-5 w-5 text-primary-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-dark-900">Email</p>
                    <p>{COMPANY.email}</p>
                  </div>
                </a>

                {COMPANY.hasDirectPhone && (
                  <a
                    href={`tel:${COMPANY.phoneRaw}`}
                    className="flex items-start gap-3 text-dark-600 hover:text-primary-600 transition-colors"
                  >
                    <Phone className="h-5 w-5 text-primary-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-dark-900">Phone</p>
                      <p>{COMPANY.phone}</p>
                    </div>
                  </a>
                )}

                <a
                  href={getWhatsAppUrl(WHATSAPP_MESSAGES.generic)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-dark-600 hover:text-emerald-600 transition-colors"
                >
                  <MessageCircle className="h-5 w-5 text-[#25D366] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-dark-900">WhatsApp Enquiry</p>
                    <p>Start an instant chat with our team</p>
                  </div>
                </a>

                <a
                  href={COMPANY.address.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-dark-600 hover:text-primary-600 transition-colors"
                >
                  <MapPin className="h-5 w-5 text-primary-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-dark-900">Service Area</p>
                    <p>{COMPANY.address.full}</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="card-base p-6">
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="h-5 w-5 text-primary-600" aria-hidden="true" />
                <h3 className="text-lg font-display font-bold text-dark-900">Business Hours</h3>
              </div>
              <div className="space-y-2.5 text-sm">
                {COMPANY.businessHours.map((hour) => (
                  <div
                    key={hour.day}
                    className="flex items-center justify-between py-1.5 border-b border-border/60 last:border-0"
                  >
                    <span className="font-medium text-dark-700">{hour.day}</span>
                    <span className={hour.isOpen ? 'text-dark-900' : 'text-dark-400'}>
                      {hour.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-base p-6 bg-surface">
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="h-5 w-5 text-primary-600" aria-hidden="true" />
                <h3 className="text-base font-semibold text-dark-900">Established {COMPANY.founded}</h3>
              </div>
              <p className="text-sm text-dark-600">
                Cloud Tech provides personal, accountable hardware rental, sales, and IT support
                in Coimbatore with {COMPANY.yearsOfExperienceLabel.toLowerCase()} of practical experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function LegalPage({ terms = false }: { terms?: boolean }) {
  const title = terms ? 'Terms & Conditions' : 'Privacy Policy';
  const route = terms ? ROUTES.TERMS_CONDITIONS : ROUTES.PRIVACY_POLICY;

  const sections = terms
    ? [
        {
          heading: '1. Scope of Services',
          body: 'Cloud Tech (established 2023, Coimbatore, Tamil Nadu) provides laptop, MacBook, and desktop rentals, new and refurbished hardware sales, accessories, repair services, networking setup, and Annual Maintenance Contracts (AMC) subject to availability and written or digital confirmation.',
        },
        {
          heading: '2. Rental Terms, Verification & Extensions',
          body: 'All rentals require valid customer identification and agreed rental period confirmation prior to dispatch. Minimum rental duration is 1 day. Customers may request extensions at least 24 hours before the scheduled return date, subject to hardware availability and agreed renewal rates.',
        },
        {
          heading: '3. Care, Damage & Warranty',
          body: 'Rented hardware must be operated responsibly and returned with all supplied chargers and accessories in working order. Normal wear is covered; physical, liquid, or unauthorized tampering damage may incur repair or replacement charges. New sales items carry manufacturer warranty, and Grade A refurbished systems carry the Cloud Tech warranty specified on your invoice.',
        },
        {
          heading: '4. Pricing & Payments',
          body: 'Quotations list applicable daily, weekly, monthly, or outright prices transparently before order confirmation. Payments may be made via UPI, NEFT/RTGS, cards, or agreed business billing terms.',
        },
        {
          heading: '5. Contact & Governing Law',
          body: `These terms are governed by the laws of India with jurisdiction in Coimbatore, Tamil Nadu. For any questions regarding an active rental, purchase, or service request, contact ${COMPANY.email}.`,
        },
      ]
    : [
        {
          heading: '1. Information We Collect',
          body: 'When you submit a Contact Enquiry, Quote Request, or Newsletter subscription on the Cloud Tech website, we collect only the details you provide—such as your name, company name (optional), phone number, email address, and service or device requirements.',
        },
        {
          heading: '2. How We Use Your Information',
          body: 'Your contact and enquiry details are used strictly to respond to your request, prepare rental or purchase quotations, coordinate device delivery or IT support in Coimbatore, and send newsletter updates if you subscribe.',
        },
        {
          heading: '3. Data Storage & Protection',
          body: 'Website enquiry, quote, and newsletter records are stored securely with restricted administrative access. Cloud Tech does not sell, rent, or trade your personal contact information to third-party marketers.',
        },
        {
          heading: '4. Your Choices & Updates',
          body: `You may request correction or deletion of your enquiry or newsletter subscription record at any time by writing to ${COMPANY.email}.`,
        },
      ];

  return (
    <>
      <SEO title={title} canonical={route} />
      <section className="bg-surface">
        <div className="container-narrow section-py">
          <p className="badge-primary">Cloud Tech · Coimbatore</p>
          <h1 className="mt-4">{title}</h1>
          <p className="mt-4 text-sm text-dark-500">
            Effective for {COMPANY.name} (Est. {COMPANY.founded}) · {COMPANY.address.full}
          </p>
          <div className="mt-10 space-y-6">
            {sections.map((section) => (
              <section key={section.heading} className="card-base p-6">
                <h2 className="text-xl">{section.heading}</h2>
                <p className="mt-2 text-sm leading-relaxed">{section.body}</p>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
