import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Laptop, Monitor, Apple, Gamepad2, Printer,
  Wrench, Wifi, ShieldCheck, Settings, Database,
  Headphones, HardDrive, Package, Users,
} from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { SectionContainer } from '@/components/common/SectionContainer';
import { SectionHeading } from '@/components/common/SectionHeading';
import { fadeUp, staggerFast, viewportOnce } from '@/lib/animations';
import { ROUTES } from '@/constants/routes';
import { cn } from '@/lib/cn';
import type { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  isHighlighted?: boolean;
}

function ServiceCard({ icon: Icon, title, description, href, isHighlighted }: ServiceCardProps) {
  return (
    <Link
      to={href}
      className={cn(
        'group card-base card-hover p-6 flex flex-col gap-4 focus-visible:outline-2 focus-visible:outline-primary-600',
        isHighlighted && 'border-primary-200 bg-primary-50/40'
      )}
      aria-label={`${title} — Learn more`}
    >
      <div className={cn(
        'w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-200',
        isHighlighted
          ? 'bg-primary-100 text-primary-600 group-hover:bg-primary-600 group-hover:text-white'
          : 'bg-dark-50 text-dark-600 group-hover:bg-primary-600 group-hover:text-white'
      )}>
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-dark-900 group-hover:text-primary-600 transition-colors text-base mb-1.5">
          {title}
        </h3>
        <p className="text-sm text-dark-500 leading-relaxed truncate-2">{description}</p>
      </div>
      <div className="flex items-center gap-1 text-xs font-semibold text-primary-600 group-hover:gap-2 transition-all">
        Learn More <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
      </div>
    </Link>
  );
}

const SERVICES = [
  { icon: Laptop, title: 'Laptop Rental', description: 'Rent business laptops from Dell, HP, Lenovo on daily, weekly, or monthly plans.', href: ROUTES.RENTAL, isHighlighted: true },
  { icon: Monitor, title: 'Desktop Rental', description: 'Desktop computer rentals for offices, exam centers, and events.', href: ROUTES.RENTAL },
  { icon: Apple, title: 'MacBook Rental', description: 'Rent MacBook Air and MacBook Pro for creative professionals.', href: ROUTES.RENTAL, isHighlighted: true },
  { icon: Gamepad2, title: 'Gaming Laptop Rental', description: 'High-performance gaming laptops for events, tournaments, and cafes.', href: ROUTES.RENTAL },
  { icon: Laptop, title: 'Laptop Sales', description: 'New and refurbished laptops from top brands at competitive prices.', href: ROUTES.SALES },
  { icon: Monitor, title: 'Desktop Sales', description: 'New and refurbished desktop computers with warranty.', href: ROUTES.SALES },
  { icon: Package, title: 'Refurbished Systems', description: 'Certified Grade A refurbished laptops and desktops saving up to 60%.', href: ROUTES.SALES },
  { icon: Printer, title: 'Printer Sales & Rental', description: 'Laser and inkjet printers for rent or purchase.', href: ROUTES.SALES },
  { icon: Wrench, title: 'Laptop Repair', description: 'Professional laptop and desktop repair services at your doorstep.', href: ROUTES.SERVICES, isHighlighted: true },
  { icon: ShieldCheck, title: 'Virus Removal', description: 'Malware, virus, and ransomware removal by certified technicians.', href: ROUTES.SERVICES },
  { icon: HardDrive, title: 'Data Recovery', description: 'Professional data recovery from failed hard drives and SSDs.', href: ROUTES.SERVICES },
  { icon: Settings, title: 'Software Installation', description: 'OS, software, and application installation and configuration.', href: ROUTES.SERVICES },
  { icon: Wifi, title: 'Networking & Wi-Fi', description: 'Complete office networking, Wi-Fi, and LAN/WAN setup.', href: ROUTES.SERVICES, isHighlighted: true },
  { icon: Headphones, title: 'IT Support', description: '24×7 helpdesk and onsite IT support for businesses.', href: ROUTES.SERVICES },
  { icon: Database, title: 'AMC Services', description: 'Annual Maintenance Contracts for worry-free IT infrastructure.', href: ROUTES.CORPORATE },
  { icon: Users, title: 'Corporate IT', description: 'Enterprise bulk rentals, office setup, and managed IT services.', href: ROUTES.CORPORATE, isHighlighted: true },
];

export function ServicesSection() {
  return (
    <SectionContainer className="bg-surface">
      <SectionHeading
        eyebrow="What We Offer"
        title="Complete IT Solutions"
        titleHighlight="Under One Roof"
        description="From laptop rentals and computer sales to IT repairs, networking, and enterprise support — Cloud Tech is your one-stop technology partner in Coimbatore."
      />

      <motion.div
        variants={staggerFast}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {SERVICES.map((service) => (
          <motion.div key={service.title} variants={fadeUp}>
            <ServiceCard {...service} />
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  );
}
