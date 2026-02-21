import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ImageReveal from '@/components/ImageReveal';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Process from '@/components/Process';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import LeadForm from '@/components/LeadForm';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

const Index = () => {
  const { dir } = useLanguage();
  
  return (
    <div className="min-h-screen bg-background text-foreground antialiased" dir={dir}>
      <Header />
      <main>
        <Hero />
        <ImageReveal />
        <Services />
        <Portfolio />
        <Process />
        <Pricing />
        <Testimonials />
        <FAQ />
        <LeadForm />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
