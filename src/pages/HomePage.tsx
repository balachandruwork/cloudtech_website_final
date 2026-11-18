import { SEO } from '@/components/common/SEO';
import { PAGE_SEO } from '@/constants/seo';
import { ROUTES } from '@/constants/routes';
import { HeroSection } from '@/components/home/HeroSection';
import { StatsSection } from '@/components/home/StatsSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { RentalProductsSection } from '@/components/home/RentalProductsSection';
import { FeaturedProductsSection } from '@/components/home/FeaturedProductsSection';
import { WhyChooseUsSection } from '@/components/home/WhyChooseUsSection';

export default function HomePage() {
  return (
    <>
      {/* No `title` override — home should render SEO_DEFAULTS.defaultTitle as-is */}
      <SEO
        description={PAGE_SEO.home.description}
        keywords={PAGE_SEO.home.keywords}
        canonical={ROUTES.HOME}
      />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <RentalProductsSection />
      <FeaturedProductsSection />
      <WhyChooseUsSection />
    </>
  );
}
