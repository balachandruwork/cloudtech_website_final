import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import { COMPANY, getWhatsAppUrl, WHATSAPP_MESSAGES } from '@/constants/company';
import { FOOTER_COLUMNS } from '@/constants/navigation';
import { ROUTES } from '@/constants/routes';
import { newsletterSchema, type NewsletterFormData } from '@/schemas/newsletter.schema';
import {
  subscribeToNewsletter,
  type NewsletterSubscriptionResult,
} from '@/services/newsletter.service';

function NewsletterForm() {
  const [status, setStatus] = useState<NewsletterSubscriptionResult | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { email: '' },
  });

  const onSubmit = async (data: NewsletterFormData) => {
    setStatus(null);
    setErrorMessage(null);
    try {
      const result = await subscribeToNewsletter(data, 'footer');
      setStatus(result);
      if (result.success) {
        reset();
      }
    } catch {
      setErrorMessage('Could not subscribe right now. Please try again later.');
    }
  };

  return (
    <div className="w-full max-w-sm">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-4 flex gap-2"
        aria-label="Newsletter signup"
        noValidate
      >
        <label htmlFor="footer-email" className="sr-only">
          Email address
        </label>
        <input
          id="footer-email"
          type="email"
          placeholder="Your email address"
          aria-invalid={errors.email ? 'true' : undefined}
          className="flex-1 px-4 py-2.5 bg-dark-800 border border-dark-700 rounded-lg text-sm text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
          {...register('email')}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-4 py-2.5 bg-primary-600 hover:bg-primary-700 disabled:opacity-60 text-white text-sm font-medium rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-primary-500 whitespace-nowrap"
        >
          {isSubmitting ? 'Saving...' : 'Subscribe'}
        </button>
      </form>

      {errors.email?.message && (
        <p className="mt-2 text-xs text-red-400 flex items-center gap-1.5" role="alert">
          <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          {errors.email.message}
        </p>
      )}

      {status && (
        <p
          className={`mt-2 text-xs flex items-center gap-1.5 ${
            status.success ? 'text-emerald-400' : 'text-amber-300'
          }`}
          role="status"
        >
          {status.success ? (
            <CheckCircle2 className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          ) : (
            <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          )}
          {status.message}
        </p>
      )}

      {errorMessage && (
        <p className="mt-2 text-xs text-red-400 flex items-center gap-1.5" role="alert">
          <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          {errorMessage}
        </p>
      )}
    </div>
  );
}

const CURRENT_YEAR = new Date().getFullYear();

const SOCIAL_PROFILES = [
  {
    label: 'Facebook',
    href: COMPANY.social.facebook,
    path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z',
  },
  {
    label: 'Instagram',
    href: COMPANY.social.instagram,
    path: 'M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2m4.5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10m5.5-.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5',
  },
  {
    label: 'Twitter',
    href: COMPANY.social.twitter,
    path: 'M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z',
  },
  {
    label: 'LinkedIn',
    href: COMPANY.social.linkedin,
    path: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z M4 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4',
  },
  {
    label: 'YouTube',
    href: COMPANY.social.youtube,
    path: 'M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z M9.75 15.02V8.48l5.75 3.27z',
  },
].filter((item) => Boolean(item.href));

export function Footer() {

  return (
    <footer className="bg-dark-950 text-dark-300" role="contentinfo">
      {/* Main footer */}
      <div className="container-site py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link
              to={ROUTES.HOME}
              className="inline-flex items-center bg-white rounded-xl px-3 py-1.5 mb-4 focus-visible:outline-2 focus-visible:outline-primary-500 shadow-sm"
              aria-label="Cloud Tech Home"
            >
              <img
                src="/assets/aistudio/New_Logo_31ad2fb6.png"
                alt="Cloud Tech — Rent, Buy, Service Laptops & Desktops"
                className="h-11 w-auto object-contain"
              />
            </Link>

            <p className="text-sm text-dark-400 leading-relaxed max-w-sm mb-6">
              Established in {COMPANY.founded} in Coimbatore, Cloud Tech provides laptop rentals, computer sales, repairs, networking, and AMC support for businesses and individuals.
            </p>

            {/* Contact info */}
            <div className="space-y-3 text-sm mb-6">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-dark-400">{COMPANY.address.full}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary-400 flex-shrink-0" aria-hidden="true" />
                {COMPANY.hasDirectPhone ? (
                  <a
                    href={`tel:${COMPANY.phoneRaw}`}
                    className="text-dark-400 hover:text-white transition-colors"
                  >
                    {COMPANY.phone}
                  </a>
                ) : (
                  <Link
                    to={ROUTES.CONTACT}
                    className="text-dark-400 hover:text-white transition-colors"
                  >
                    {COMPANY.phone}
                  </Link>
                )}
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

            {/* Social Icons (MOD-10: rendered when official profile URLs are configured) */}
            {SOCIAL_PROFILES.length > 0 && (
              <div className="flex items-center gap-3">
                {SOCIAL_PROFILES.map(({ path, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${COMPANY.name} on ${label}`}
                    className="w-8 h-8 flex items-center justify-center rounded-lg bg-dark-800 hover:bg-primary-600 text-dark-400 hover:text-white transition-all duration-200"
                  >
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d={path} />
                    </svg>
                  </a>
                ))}
              </div>
            )}
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
                Get practical IT guides, hardware availability updates, and rental news in your inbox.
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
            © {CURRENT_YEAR} {COMPANY.legalName} (Est. {COMPANY.founded}). All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-dark-500">
            <Link to={ROUTES.PRIVACY_POLICY} className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span aria-hidden="true">·</span>
            <Link to={ROUTES.TERMS_CONDITIONS} className="hover:text-white transition-colors">
              Terms &amp; Conditions
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
