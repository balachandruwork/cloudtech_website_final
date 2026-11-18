import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { MainLayout } from '@/components/layout/MainLayout';
import { LoadingScreen } from '@/components/common/LoadingScreen';
import { ROUTES } from '@/constants/routes';
import { AboutPage, AccessoriesPage, BlogPage, BlogPostPage, ContactPage, CorporatePage, LegalPage, RentalPage, SalesPage, ServicesPage } from '@/pages/ContentPages';

const HomePage = lazy(() => import('@/pages/HomePage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <MainLayout>
          <Suspense fallback={<LoadingScreen />}>
            <Routes>
              <Route path={ROUTES.HOME} element={<HomePage />} />
              <Route path={ROUTES.ABOUT} element={<AboutPage />} />
              <Route path={ROUTES.RENTAL} element={<RentalPage />} />
              <Route path={ROUTES.SALES} element={<SalesPage />} />
              <Route path={ROUTES.SERVICES} element={<ServicesPage />} />
              <Route path={ROUTES.CORPORATE} element={<CorporatePage />} />
              <Route path={ROUTES.ACCESSORIES} element={<AccessoriesPage />} />
              <Route path={ROUTES.BLOG} element={<BlogPage />} />
              <Route path={ROUTES.BLOG_POST} element={<BlogPostPage />} />
              <Route path={ROUTES.CONTACT} element={<ContactPage />} />
              <Route path={ROUTES.PRIVACY_POLICY} element={<LegalPage />} />
              <Route path={ROUTES.TERMS_CONDITIONS} element={<LegalPage terms />} />
              <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </MainLayout>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
