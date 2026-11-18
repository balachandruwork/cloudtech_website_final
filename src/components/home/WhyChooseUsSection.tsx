import { motion } from 'framer-motion';
import {
  BadgeIndianRupee, ShieldCheck, Package, Truck,
  Calendar, Building2, Award, Headphones, Users, Clock,
} from 'lucide-react';
import { SectionContainer } from '@/components/common/SectionContainer';
import { SectionHeading } from '@/components/common/SectionHeading';
import { COMPANY } from '@/constants/company';
import { fadeUp, staggerFast, viewportOnce } from '@/lib/animations';
import { cn } from '@/lib/cn';

const WHY_ITEMS = [
  { icon: BadgeIndianRupee, title: 'Transparent Pricing', description: 'Clear daily, weekly, and monthly rates with straightforward invoicing and no hidden surprises.', color: 'text-emerald-600 bg-emerald-50' },
  { icon: ShieldCheck, title: 'Experienced Technicians', description: 'Approximately 3–4 years of hands-on experience in laptop servicing, networking, and setup.', color: 'text-primary-600 bg-primary-50' },
  { icon: Package, title: 'Tested Hardware', description: 'Every rental and refurbished machine undergoes multi-point diagnostics before dispatch.', color: 'text-violet-600 bg-violet-50' },
  { icon: Truck, title: 'Coimbatore Delivery', description: 'Prompt delivery and installation support across Coimbatore for individuals and teams.', color: 'text-orange-600 bg-orange-50' },
  { icon: Calendar, title: 'Flexible Plans', description: 'Short-term event rentals as well as weekly, monthly, and longer-term plans.', color: 'text-primary-600 bg-primary-50' },
  { icon: Building2, title: 'Business & Event Ready', description: 'Custom configurations for startups, training centers, workshops, and offices.', color: 'text-navy-600 bg-navy-50' },
  { icon: Award, title: 'Warranty Coverage', description: 'New hardware carries manufacturer warranty; Grade A refurbished systems carry Cloud Tech warranty.', color: 'text-amber-600 bg-amber-50' },
  { icon: Headphones, title: 'Onsite Assistance', description: 'On-site support in Coimbatore for hardware setup, networking, and troubleshooting.', color: 'text-teal-600 bg-teal-50' },
  { icon: Users, title: 'Personal Accountability', description: 'Serving our current 3–4 customers directly without impersonal call-center handoffs.', color: 'text-rose-600 bg-rose-50' },
  { icon: Clock, title: 'Responsive Support', description: 'Quick assistance via WhatsApp, phone, email, and web enquiry forms.', color: 'text-primary-700 bg-primary-50' },
];

export function WhyChooseUsSection() {
  return (
    <SectionContainer className="bg-white">
      <SectionHeading
        eyebrow="Why Cloud Tech"
        title="Dependable Local Support"
        titleHighlight={`Since ${COMPANY.founded}`}
        description={`Founded in ${COMPANY.founded} in Coimbatore, Cloud Tech combines ${COMPANY.yearsOfExperienceLabel.toLowerCase()} of practical IT experience with direct, responsive service for every customer.`}
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
