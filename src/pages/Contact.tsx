import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LeadForm from '@/components/LeadForm';
import FloatingButtons from '@/components/FloatingButtons';

const Contact = () => {
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
        <LeadForm />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Contact;
