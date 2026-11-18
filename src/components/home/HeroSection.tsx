import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Phone, Monitor, Cpu, Wifi } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ROUTES } from '@/constants/routes';
import { COMPANY, getWhatsAppUrl, WHATSAPP_MESSAGES } from '@/constants/company';
import { RENTAL_PRODUCTS } from '@/data/rentalProducts.data';
import { formatPrice } from '@/lib/utils';
import { fadeUp, slideInRight, staggerContainer } from '@/lib/animations';

const TRUST_ITEMS = [
  'Same-Day Coimbatore Delivery',
  'Tested Hardware & Warranty',
  'Flexible Daily to Monthly Plans',
  'Direct Local Technical Support',
];

const FLOATING_STATS = [
  { label: 'Established', value: String(COMPANY.founded), icon: '📅' },
  { label: 'Current Customers', value: '3–4', icon: '🤝' },
  { label: 'Experience', value: COMPANY.yearsOfExperienceLabel, icon: '💻' },
];

const latitude = RENTAL_PRODUCTS.find((p) => p.id === 'r1');
const macbookAir = RENTAL_PRODUCTS.find((p) => p.id === 'r4');
const elitebook = RENTAL_PRODUCTS.find((p) => p.id === 'r2');

const HERO_PREVIEW_ITEMS = [
  {
    label: latitude?.name ?? 'Dell Latitude 5540',
    spec: 'i5 / 16GB / 512 SSD',
    price: `${formatPrice(latitude?.pricing.monthly ?? 3000)}/mo`,
    icon: Monitor,
  },
  {
    label: macbookAir?.name ?? 'Apple MacBook Air M2',
    spec: 'M2 / 8GB / 256 SSD',
    price: `${formatPrice(macbookAir?.pricing.monthly ?? 3500)}/mo`,
    icon: Cpu,
  },
  {
    label: elitebook?.name ?? 'HP EliteBook 840',
    spec: 'i7 / 16GB / 512 SSD',
    price: `${formatPrice(elitebook?.pricing.monthly ?? 3500)}/mo`,
    icon: Monitor,
  },
  {
    label: 'Networking & AMC',
    spec: 'Office Wi-Fi & IT Setup',
    price: 'Custom Quote',
    icon: Wifi,
  },
];

export function HeroSection() {
  return (
    <section
      className="relative min-h-[88vh] flex items-center overflow-hidden bg-gradient-to-br from-dark-950 via-navy-600 to-dark-900"
      aria-label="Hero section"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 dot-pattern opacity-10" aria-hidden="true" />

      {/* Gradient orbs */}
      <div className="absolute top-20 left-1/3 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-navy-500/30 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="container-site relative z-10 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {/* Eyebrow */}
            <motion.div variants={fadeUp}>
              <Badge variant="primary" className="bg-primary-500/20 text-primary-200 border-primary-500/30 text-sm py-1.5 px-4">
                Coimbatore IT Hardware &amp; Support · Est. {COMPANY.founded}
              </Badge>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.1] text-balance"
            >
              Reliable Laptop &amp;{' '}
              <span className="text-primary-400">Computer Rental,</span>{' '}
              Sales &amp; Professional{' '}
              <span className="text-primary-300">IT Services</span>
            </motion.h1>

            {/* Description */}
            <motion.p variants={fadeUp} className="text-lg text-dark-300 leading-relaxed max-w-xl">
              Established in {COMPANY.founded}, Cloud Tech provides laptop and desktop rentals,
              new and refurbished computer sales, accessories, repairs, Wi-Fi networking, and AMC
              support for businesses, startups, event organizers, and individuals in Coimbatore.
            </motion.p>

            {/* Trust checkmarks */}
            <motion.ul variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-2.5" role="list">
              {TRUST_ITEMS.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-dark-300">
                  <CheckCircle2 className="h-4 w-4 text-primary-400 flex-shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </motion.ul>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link to={`${ROUTES.CONTACT}?tab=quote`}>
                <Button size="lg" variant="primary" rightIcon={<ArrowRight className="h-5 w-5" />}>
                  Get Free Quote
                </Button>
              </Link>
              <Link to={ROUTES.RENTAL}>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:border-white/50">
                  Rent Now
                </Button>
              </Link>
              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.generic)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="whatsapp" leftIcon={
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                }>
                  WhatsApp
                </Button>
              </a>
            </motion.div>

            {/* Quick contact */}
            <motion.div variants={fadeUp} className="flex items-center gap-4 pt-1">
              {COMPANY.hasDirectPhone ? (
                <a
                  href={`tel:${COMPANY.phoneRaw}`}
                  className="flex items-center gap-2 text-sm text-dark-400 hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {COMPANY.phone}
                </a>
              ) : (
                <Link
                  to={ROUTES.CONTACT}
                  className="flex items-center gap-2 text-sm text-dark-400 hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {COMPANY.email}
                </Link>
              )}
              <span className="text-dark-600" aria-hidden="true">|</span>
              <span className="text-xs text-dark-400">Mon–Fri 9AM–7PM · Sat 9AM–5PM</span>
            </motion.div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            className="relative hidden lg:block"
            aria-hidden="true"
          >
            <div className="relative">
              <div className="relative bg-gradient-to-br from-dark-800 to-dark-900 rounded-2xl p-6 border border-dark-700 shadow-card-xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex-1 h-6 bg-dark-700 rounded-md flex items-center px-3">
                    <span className="text-xs text-dark-400 font-mono">{COMPANY.domain}</span>
                  </div>
                </div>

                {/* Product display synced with actual rental catalog prices */}
                <div className="grid grid-cols-2 gap-3">
                  {HERO_PREVIEW_ITEMS.map((item) => (
                    <div key={item.label} className="bg-dark-700/60 rounded-xl p-3.5 border border-dark-600/50">
                      <item.icon className="h-5 w-5 text-primary-400 mb-2" />
                      <p className="text-xs font-semibold text-white">{item.label}</p>
                      <p className="text-[10px] text-dark-400 mt-0.5">{item.spec}</p>
                      <p className="text-xs font-bold text-primary-400 mt-1.5">{item.price}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating stat cards */}
              {FLOATING_STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.15, duration: 0.5 }}
                  className={`absolute glass rounded-xl px-4 py-3 shadow-card-lg border border-white/10 ${
                    i === 0 ? '-top-4 -left-6' : i === 1 ? '-bottom-4 left-6' : '-right-6 top-1/3'
                  }`}
                >
                  <div className="text-lg">{stat.icon}</div>
                  <p className="text-sm font-bold text-dark-900">{stat.value}</p>
                  <p className="text-xs text-dark-500">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none" aria-hidden="true">
        <svg className="relative block w-full h-12" viewBox="0 0 1440 48" preserveAspectRatio="none">
          <path d="M0,48 L0,24 Q360,0 720,24 Q1080,48 1440,24 L1440,48 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
