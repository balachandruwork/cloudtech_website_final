import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/cn';
import { useIsScrolled } from '@/hooks/useScrollPosition';
import { COMPANY, getWhatsAppUrl, WHATSAPP_MESSAGES } from '@/constants/company';
import { NAV_ITEMS } from '@/constants/navigation';
import { ROUTES } from '@/constants/routes';
import { Button } from '@/components/ui/button';
import { MobileNavigation } from './MobileNavigation';
import { mobileMenuVariants, overlayVariants } from '@/lib/animations';

export function Header() {
  const isScrolled = useIsScrolled(20);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-card border-b border-border'
            : 'bg-white/90 backdrop-blur-sm'
        )}
      >
        <div className="container-site">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <Link
              to={ROUTES.HOME}
              className="flex-shrink-0 flex items-center focus-visible:outline-2 focus-visible:outline-primary-600 focus-visible:rounded-md"
              aria-label="Cloud Tech — Home"
            >
              <img
                src="/assets/aistudio/New_Logo_31ad2fb6.png"
                alt="Cloud Tech — Rent, Buy, Service Laptops & Desktops"
                className="h-10 sm:h-11 w-auto object-contain"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className={({ isActive }) =>
                    cn(
                      'relative px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 group',
                      isActive
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-dark-700 hover:text-primary-600 hover:bg-primary-50/60'
                    )
                  }
                  end={item.href === ROUTES.HOME}
                >
                  {({ isActive }) => (
                    <>
                      {item.label}
                      {item.badge && (
                        <span className="absolute -top-1 -right-1 px-1.5 py-0.5 bg-primary-600 text-white text-[9px] font-bold rounded-full leading-none">
                          {item.badge}
                        </span>
                      )}
                      {isActive && (
                        <motion.div
                          layoutId="nav-active-underline"
                          className="absolute bottom-0.5 left-3 right-3 h-0.5 bg-primary-600 rounded-full"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Header CTAs */}
            <div className="hidden lg:flex items-center gap-2">
              <a
                href={`tel:${COMPANY.phoneRaw}`}
                className="flex items-center gap-1.5 text-sm font-medium text-dark-700 hover:text-primary-600 transition-colors px-3 py-2 rounded-lg hover:bg-primary-50"
                aria-label={`Call us at ${COMPANY.phone}`}
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span className="hidden xl:inline">{COMPANY.phone}</span>
                <span className="xl:hidden">Call</span>
              </a>
              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.quoteRequest)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-medium text-[#25D366] hover:bg-green-50 px-3 py-2 rounded-lg transition-colors"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                <span>WhatsApp</span>
              </a>
              <Link to={ROUTES.CONTACT}>
                <Button size="sm" variant="primary">
                  Get Free Quote
                </Button>
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 rounded-lg text-dark-700 hover:bg-dark-100 transition-colors focus-visible:outline-2 focus-visible:outline-primary-600"
              onClick={() => setMobileOpen(true)}
              aria-label="Open mobile menu"
              aria-expanded={mobileOpen}
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 z-50 bg-dark-900/50"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />
            {/* Drawer */}
            <motion.aside
              key="drawer"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 bottom-0 z-50 w-80 max-w-full bg-white shadow-card-xl overflow-y-auto"
              aria-label="Mobile navigation"
              role="dialog"
              aria-modal="true"
            >
              <div className="flex items-center justify-between p-4 border-b border-border">
                <Link
                  to={ROUTES.HOME}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center"
                  aria-label="Cloud Tech Home"
                >
                  <img
                    src="/assets/aistudio/New_Logo_31ad2fb6.png"
                    alt="Cloud Tech — Rent, Buy, Service Laptops & Desktops"
                    className="h-9 w-auto object-contain"
                  />
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg text-dark-500 hover:bg-dark-100 transition-colors"
                  aria-label="Close mobile menu"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
              <MobileNavigation onClose={() => setMobileOpen(false)} />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

// Spacer so content isn't hidden under the fixed header
export function HeaderSpacer() {
  return <div className="h-16 md:h-18" aria-hidden="true" />;
}
