import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import { lazySection, SectionSuspense } from '@/components/LazyMount';

const Services = lazySection(() => import('@/components/Services'));
const Portfolio = lazySection(() => import('@/components/Portfolio'));
const Process = lazySection(() => import('@/components/Process'));
const FAQ = lazySection(() => import('@/components/FAQ'));
const LeadForm = lazySection(() => import('@/components/LeadForm'));
const Footer = lazySection(() => import('@/components/Footer'));
const FloatingButtons = lazySection(() => import('@/components/FloatingButtons'));

const Index = () => {
  const { dir } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.slice(1);
    if (!id) return;
    const el = document.getElementById(id);
    if (!el) return;
    const timer = window.setTimeout(() => {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 0);
    return () => window.clearTimeout(timer);
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/15 selection:text-foreground" dir={dir}>
      <Header />
      <main>
        <Hero />
        <SectionSuspense>
          <Services />
        </SectionSuspense>
        <SectionSuspense>
          <Portfolio />
        </SectionSuspense>
        <SectionSuspense>
          <Process />
        </SectionSuspense>
        <SectionSuspense>
          <FAQ />
        </SectionSuspense>
        <SectionSuspense>
          <LeadForm />
        </SectionSuspense>
      </main>
      <SectionSuspense>
        <Footer />
      </SectionSuspense>
      <SectionSuspense>
        <FloatingButtons />
      </SectionSuspense>
    </div>
  );
};

export default Index;
