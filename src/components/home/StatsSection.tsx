import { useCounter } from '@/hooks/useCounter';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/animations';

interface StatItemProps {
  end: number;
  suffix: string;
  label: string;
  description: string;
}

function StatItem({ end, suffix, label, description }: StatItemProps) {
  const { count, ref } = useCounter({ end, duration: 2200 });

  return (
    <div ref={ref} className="text-center px-4">
      <div className="text-4xl sm:text-5xl font-display font-bold text-navy-600 stat-number">
        {count.toLocaleString('en-IN')}
        <span className="text-primary-600">{suffix}</span>
      </div>
      <div className="mt-2 text-base font-semibold text-dark-800">{label}</div>
      <div className="mt-1 text-sm text-dark-500">{description}</div>
    </div>
  );
}

const STATS = [
  { end: 5000, suffix: '+', label: 'Happy Customers', description: 'Businesses & individuals served' },
  { end: 1000, suffix: '+', label: 'Rental Devices', description: 'Laptops, desktops & more' },
  { end: 300, suffix: '+', label: 'Corporate Clients', description: 'Enterprises we support' },
  { end: 10, suffix: '+', label: 'Years Experience', description: 'Trusted since 2014' },
  { end: 99, suffix: '%', label: 'Customer Satisfaction', description: 'Based on client feedback' },
];

export function StatsSection() {
  return (
    <section className="py-14 bg-white border-b border-border" aria-label="Company statistics">
      <div className="container-site">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4"
        >
          {STATS.map((stat, i) => (
            <motion.div key={stat.label} variants={fadeUp} custom={i}>
              <StatItem {...stat} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
