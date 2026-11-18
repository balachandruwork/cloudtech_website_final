import { motion } from 'framer-motion';
import { COMPANY } from '@/constants/company';
import { RENTAL_PRODUCTS } from '@/data/rentalProducts.data';
import { PRODUCTS } from '@/data/products.data';
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/animations';

interface StatCardItem {
  value: string;
  label: string;
  description: string;
}

const STATS: StatCardItem[] = [
  {
    value: String(COMPANY.founded),
    label: 'Established',
    description: 'Serving Coimbatore, Tamil Nadu',
  },
  {
    value: COMPANY.yearsOfExperienceLabel,
    label: 'Business Experience',
    description: 'Hands-on hardware & IT support',
  },
  {
    value: '3–4',
    label: 'Current Customers',
    description: 'Dedicated personal accountability',
  },
  {
    value: `${RENTAL_PRODUCTS.length + PRODUCTS.length}+`,
    label: 'Devices & Services',
    description: 'Rentals, sales, repairs & networking',
  },
];

export function StatsSection() {
  return (
    <section className="py-14 bg-white border-b border-border" aria-label="Company overview metrics">
      <div className="container-site">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6"
        >
          {STATS.map((stat, i) => (
            <motion.div key={stat.label} variants={fadeUp} custom={i} className="text-center px-4">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-navy-600 stat-number">
                {stat.value}
              </div>
              <div className="mt-2 text-base font-semibold text-dark-800">{stat.label}</div>
              <div className="mt-1 text-sm text-dark-500">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
