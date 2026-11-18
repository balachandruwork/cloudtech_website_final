import { NavLink, Link } from 'react-router-dom';
import { Phone, MessageCircle, Mail } from 'lucide-react';
import { cn } from '@/lib/cn';
import { COMPANY, getWhatsAppUrl, WHATSAPP_MESSAGES } from '@/constants/company';
import { NAV_ITEMS } from '@/constants/navigation';
import { ROUTES } from '@/constants/routes';
import { Button } from '@/components/ui/button';

interface MobileNavigationProps {
  onClose: () => void;
}

export function MobileNavigation({ onClose }: MobileNavigationProps) {
  return (
    <div className="flex flex-col h-full">
      {/* Nav Links */}
      <nav className="flex-1 p-4 space-y-1" aria-label="Mobile navigation">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            end={item.href === ROUTES.HOME}
            onClick={onClose}
            className={({ isActive }) =>
              cn(
                'flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all duration-200',
                isActive
                  ? 'bg-primary-50 text-primary-700 font-semibold'
                  : 'text-dark-700 hover:bg-dark-50'
              )
            }
          >
            {({ isActive }) => (
              <>
                <span>{item.label}</span>
                {isActive && <div className="w-2 h-2 rounded-full bg-primary-600" aria-hidden="true" />}
                {item.badge && !isActive && (
                  <span className="px-2 py-0.5 bg-primary-600 text-white text-xs font-bold rounded-full">
                    {item.badge}
                  </span>
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Contact CTAs */}
      <div className="p-4 border-t border-border space-y-3">
        <Link to={ROUTES.CONTACT} onClick={onClose}>
          <Button variant="primary" size="lg" fullWidth>
            Get Free Quote
          </Button>
        </Link>

        <div className="grid grid-cols-3 gap-2">
          <a
            href={`tel:${COMPANY.phoneRaw}`}
            className="flex flex-col items-center gap-1.5 p-3 bg-dark-50 rounded-xl hover:bg-dark-100 transition-colors"
            aria-label={`Call ${COMPANY.phone}`}
          >
            <Phone className="h-5 w-5 text-primary-600" aria-hidden="true" />
            <span className="text-xs font-medium text-dark-700">Call Us</span>
          </a>
          <a
            href={getWhatsAppUrl(WHATSAPP_MESSAGES.generic)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1.5 p-3 bg-green-50 rounded-xl hover:bg-green-100 transition-colors"
            aria-label="WhatsApp Cloud Tech"
          >
            <MessageCircle className="h-5 w-5 text-[#25D366]" aria-hidden="true" />
            <span className="text-xs font-medium text-dark-700">WhatsApp</span>
          </a>
          <a
            href={`mailto:${COMPANY.email}`}
            className="flex flex-col items-center gap-1.5 p-3 bg-dark-50 rounded-xl hover:bg-dark-100 transition-colors"
            aria-label={`Email ${COMPANY.email}`}
          >
            <Mail className="h-5 w-5 text-primary-600" aria-hidden="true" />
            <span className="text-xs font-medium text-dark-700">Email</span>
          </a>
        </div>

        <p className="text-center text-xs text-dark-400 pb-2">
          Mon–Fri 9AM–7PM · Sat 9AM–5PM
        </p>
      </div>
    </div>
  );
}
