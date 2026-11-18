import { Helmet } from 'react-helmet-async';
import { SEO_DEFAULTS } from '@/constants/seo';
import { COMPANY } from '@/constants/company';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
  noIndex?: boolean;
}

export function SEO({
  title,
  description = SEO_DEFAULTS.defaultDescription,
  keywords = SEO_DEFAULTS.keywords,
  ogImage = SEO_DEFAULTS.ogImage,
  canonical,
  noIndex = false,
}: SEOProps) {
  const pageTitle = title
    ? `${title} | ${COMPANY.name} — Laptop Rental & IT Services Coimbatore`
    : SEO_DEFAULTS.defaultTitle;

  const canonicalUrl = canonical
    ? `${COMPANY.siteUrl}${canonical}`
    : COMPANY.siteUrl;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={COMPANY.name} />
      <meta property="og:locale" content={SEO_DEFAULTS.locale} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={SEO_DEFAULTS.twitterHandle} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Business Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: COMPANY.name,
          description: COMPANY.description,
          url: COMPANY.siteUrl,
          telephone: COMPANY.phone,
          email: COMPANY.email,
          address: {
            '@type': 'PostalAddress',
            streetAddress: COMPANY.address.street,
            addressLocality: COMPANY.address.city,
            addressRegion: COMPANY.address.state,
            postalCode: COMPANY.address.pincode,
            addressCountry: 'IN',
          },
          openingHoursSpecification: [
            { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '19:00' },
            { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:00', closes: '17:00' },
          ],
        })}
      </script>
    </Helmet>
  );
}
