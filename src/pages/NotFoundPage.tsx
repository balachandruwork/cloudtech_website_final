import { Link } from 'react-router-dom';
import { SEO } from '@/components/common/SEO';
import { ROUTES } from '@/constants/routes';
import { Button } from '@/components/ui/button';
import { SectionContainer } from '@/components/common/SectionContainer';

export default function NotFoundPage() {
  return (
    <>
      <SEO title="Page Not Found" noIndex />
      <SectionContainer>
        <div className="flex flex-col items-center justify-center text-center py-24">
          <p className="font-display font-black text-7xl text-primary-600">404</p>
          <h1 className="font-display font-bold text-2xl text-navy-600 mt-4">
            This page is not available yet
          </h1>
          <p className="text-dark-400 mt-2 max-w-md">
            The page you are looking for has moved, or has not been built yet.
          </p>
          <Button asChild className="mt-8">
            <Link to={ROUTES.HOME}>Back to home</Link>
          </Button>
        </div>
      </SectionContainer>
    </>
  );
}
