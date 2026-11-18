import { motion } from 'framer-motion';
import {
  BadgeIndianRupee, ShieldCheck, Package, Truck,
  Calendar, Building2, Award, Headphones, Users, Clock,
} from 'lucide-react';
import { SectionContainer } from '@/components/common/SectionContainer';
import { SectionHeading } from '@/components/common/SectionHeading';
import { fadeUp, staggerFast, viewportOnce } from '@/lib/animations';
import { cn } from '@/lib/cn';

const WHY_ITEMS = [
  { icon: BadgeIndianRupee, title: 'Affordable Pricing', description: 'Competitive rates with no hidden charges. Transparent invoicing for every rental and service.', color: 'text-emerald-600 bg-emerald-50' },
  { icon: ShieldCheck, title: 'Certified Engineers', description: 'All technicians are certified and experienced in enterprise IT support and repairs.', color: 'text-primary-600 bg-primary-50' },
  { icon: Package, title: 'Genuine Products', description: 'Only genuine branded products with valid manufacturer warranties — no counterfeits.', color: 'text-violet-600 bg-violet-50' },
  { icon: Truck, title: 'Free Fast Delivery', description: 'Same-day or next-day delivery within Coimbatore. Free delivery for monthly plans.', color: 'text-orange-600 bg-orange-50' },
  { icon: Calendar, title: 'Flexible Plans', description: 'Daily, weekly, monthly, quarterly, and yearly rental plans tailored to your needs.', color: 'text-primary-600 bg-primary-50' },
  { icon: Building2, title: 'Enterprise Solutions', description: 'Dedicated corporate account managers for bulk orders and enterprise deployments.', color: 'text-navy-600 bg-navy-50' },
  { icon: Award, title: 'Warranty Included', description: 'All rentals covered by Cloud Tech service warranty. Sales products carry manufacturer warranty.', color: 'text-amber-600 bg-amber-50' },
  { icon: Headphones, title: 'Onsite Support', description: 'Our technicians come to your office or home for setup, repair, and IT support.', color: 'text-teal-600 bg-teal-50' },
  { icon: Users, title: 'Trusted by 300+ Businesses', description: 'Over 300 corporate clients trust Cloud Tech for their IT infrastructure needs.', color: 'text-rose-600 bg-rose-50' },
  { icon: Clock, title: '24×7 Support', description: 'Round-the-clock customer support via WhatsApp, phone, and email.', color: 'text-primary-700 bg-primary-50' },
];

export function WhyChooseUsSection() {
  return (
    <SectionContainer className="bg-white">
      <SectionHeading
        eyebrow="Why Cloud Tech"
        title="10+ Years of Trusted"
        titleHighlight="IT Excellence"
        description="We've earned the trust of 5,000+ customers and 300+ businesses by delivering quality products, professional service, and unmatched reliability."
      />

      <motion.div
        variants={staggerFast}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5"
      >
        {WHY_ITEMS.map((item) => (
          <motion.div
            key={item.title}
            variants={fadeUp}
            className="card-base card-hover p-5 flex flex-col gap-3 text-center items-center group"
          >
            <div className={cn('w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200', item.color)}>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-semibold text-dark-900 text-sm mb-1.5">{item.title}</h3>
              <p className="text-xs text-dark-500 leading-relaxed">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  );
}
