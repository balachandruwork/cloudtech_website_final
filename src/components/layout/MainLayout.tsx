import { Header, HeaderSpacer } from './Header';
import { Footer } from './Footer';
import { FloatingActions } from './FloatingActions';
import { ScrollToTop } from '@/components/common/ScrollToTop';

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <ScrollToTop />
      <Header />
      <HeaderSpacer />
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
