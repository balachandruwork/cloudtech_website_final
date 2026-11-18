import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, ArrowUp } from 'lucide-react';
import { cn } from '@/lib/cn';
import { COMPANY, getWhatsAppUrl, WHATSAPP_MESSAGES } from '@/constants/company';
import { ROUTES } from '@/constants/routes';
import { useScrollPosition } from '@/hooks/useScrollPosition';

interface FloatingActionButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  href?: string;
  to?: string;
  className?: string;
  isExternal?: boolean;
  pulse?: boolean;
}

function FAB({ icon, label, onClick, href, to, className, isExternal, pulse }: FloatingActionButtonProps) {
  const baseClasses = cn(
    'relative w-12 h-12 rounded-full flex items-center justify-center shadow-card-lg',
    'transition-all duration-200 hover:scale-110 focus-visible:outline-2 focus-visible:outline-white focus-visible:ring-offset-2',
    'group',
    className
  );

  const content = (
    <>
      {pulse && (
        <span className="absolute inset-0 rounded-full animate-ping opacity-30 bg-current" aria-hidden="true" />
      )}
      <span aria-hidden="true">{icon}</span>
      <span className="absolute right-14 top-1/2 -translate-y-1/2 bg-dark-900 text-white text-xs font-medium px-2.5 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
        {label}
      </span>
    </>
  );

  if (to) {
    return (
      <Link to={to} aria-label={label} className={baseClasses}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        aria-label={label}
        className={baseClasses}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} aria-label={label} className={baseClasses}>
      {content}
    </button>
  );
}

export function FloatingActions() {
  const scrollY = useScrollPosition();
  const showBackToTop = scrollY > 400;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className="fixed bottom-6 right-4 sm:right-6 z-30 flex flex-col items-end gap-3"
      aria-label="Quick contact actions"
    >
      <AnimatePresence>
        {showBackToTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <FAB
              icon={<ArrowUp className="h-5 w-5" />}
              label="Back to top"
              onClick={scrollToTop}
              className="bg-dark-700 text-white hover:bg-dark-600"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <FAB
        icon={<Mail className="h-5 w-5" />}
        label={`Email: ${COMPANY.email}`}
        href={`mailto:${COMPANY.email}`}
        className="bg-primary-600 text-white hover:bg-primary-700"
      />

      {COMPANY.hasDirectPhone ? (
        <FAB
          icon={<Phone className="h-5 w-5" />}
          label={`Call: ${COMPANY.phone}`}
          href={`tel:${COMPANY.phoneRaw}`}
          className="bg-navy-600 text-white hover:bg-navy-700"
        />
      ) : (
        <FAB
          icon={<Phone className="h-5 w-5" />}
          label="Contact / Request Quote"
          to={ROUTES.CONTACT}
          className="bg-navy-600 text-white hover:bg-navy-700"
        />
      )}

      <FAB
        icon={
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        }
        label="Chat on WhatsApp"
        href={getWhatsAppUrl(WHATSAPP_MESSAGES.generic)}
        isExternal
        pulse
        className="bg-[#25D366] text-white hover:bg-[#22bf5b] scale-110"
      />
    </div>
  );
}
