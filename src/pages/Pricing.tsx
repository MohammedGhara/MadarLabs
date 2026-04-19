import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PricingSection from '@/components/Pricing';
import FloatingButtons from '@/components/FloatingButtons';

const PricingPage = () => {
  const { dir } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/15 selection:text-foreground"
      dir={dir}
    >
      <Header />
      <main>
        <PricingSection />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default PricingPage;
