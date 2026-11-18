import { Link } from 'react-router-dom';
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  // Facebook,
  // Instagram,
  // Linkedin,
  // Youtube,
  // Twitter,
} from 'lucide-react';
import { COMPANY, getWhatsAppUrl, WHATSAPP_MESSAGES } from '@/constants/company';
import { FOOTER_COLUMNS } from '@/constants/navigation';
import { ROUTES } from '@/constants/routes';

function NewsletterForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="mt-4 flex gap-2 max-w-sm"
      aria-label="Newsletter signup"
    >
      <label htmlFor="footer-email" className="sr-only">
        Email address
      </label>
      <input
        id="footer-email"
        type="email"
        placeholder="Your email address"
        className="flex-1 px-4 py-2.5 bg-dark-800 border border-dark-700 rounded-lg text-sm text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
        required
      />
      <button
        type="submit"
        className="px-4 py-2.5 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-primary-500 whitespace-nowrap"
      >
        Subscribe
      </button>
    </form>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-950 text-dark-300" role="contentinfo">
      {/* Main footer */}
      <div className="container-site py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link
              to={ROUTES.HOME}
              className="inline-flex items-center gap-2.5 mb-4 focus-visible:outline-2 focus-visible:outline-primary-500 rounded-md"
              aria-label="Cloud Tech Home"
            >
              <div className="w-9 h-9 bg-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white" aria-hidden="true">
                  <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" fill="currentColor" />
                </svg>
              </div>
              <div>
                <div className="font-display font-bold text-xl text-white leading-none">
                  CLOUD <span className="text-primary-400">TECH</span>
                </div>
                <div className="text-[9px] tracking-[0.15em] text-dark-400 uppercase font-medium">
                  Laptop Rental Service
                </div>
              </div>
            </Link>

            <p className="text-sm text-dark-400 leading-relaxed max-w-sm mb-6">
              Coimbatore's trusted provider of laptop rentals, computer sales, IT repairs, networking, AMC services, and enterprise IT support since {COMPANY.founded}.
            </p>

            {/* Contact info */}
            <div className="space-y-3 text-sm mb-6">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-dark-400">{COMPANY.address.full}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary-400 flex-shrink-0" aria-hidden="true" />
                <a
                  href={`tel:${COMPANY.phoneRaw}`}
                  className="text-dark-400 hover:text-white transition-colors"
                >
                  {COMPANY.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary-400 flex-shrink-0" aria-hidden="true" />
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-dark-400 hover:text-white transition-colors"
                >
                  {COMPANY.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-primary-400 flex-shrink-0" aria-hidden="true" />
                <span className="text-dark-400">Mon–Fri 9AM–7PM · Sat 9AM–5PM</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[
                // { Icon: Facebook, href: COMPANY.social.facebook, label: 'Facebook' },
                // { Icon: Instagram, href: COMPANY.social.instagram, label: 'Instagram' },
                // { Icon: Twitter, href: COMPANY.social.twitter, label: 'Twitter' },
                // { Icon: Linkedin, href: COMPANY.social.linkedin, label: 'LinkedIn' },
                // { Icon: Youtube, href: COMPANY.social.youtube, label: 'YouTube' },
              ].map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${COMPANY.name} on ${label}`}
                  className="w-8 h-8 flex items-center justify-center rounded-lg bg-dark-800 hover:bg-primary-600 text-dark-400 hover:text-white transition-all duration-200"
                >
                  {/* <Icon className="h-4 w-4" aria-hidden="true" /> */}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {col.title}
              </h3>
              <ul className="space-y-2.5" role="list">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-dark-400 hover:text-white transition-colors hover:translate-x-0.5 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-dark-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="text-base font-semibold text-white mb-1">
                Stay updated with Cloud Tech
              </h3>
              <p className="text-sm text-dark-400">
                Get latest IT tips, rental deals, and tech news directly in your inbox.
              </p>
            </div>
            <NewsletterForm />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-dark-800">
        <div className="container-site py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-dark-500">
            © {currentYear} {COMPANY.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-dark-500">
            <Link to={ROUTES.PRIVACY_POLICY} className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span aria-hidden="true">·</span>
            <Link to={ROUTES.TERMS_CONDITIONS} className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <span aria-hidden="true">·</span>
            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.generic)}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <MessageCircle className="h-3 w-3" aria-hidden="true" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
