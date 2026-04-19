import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

type LegalSection = { title: string; body: string };

const PrivacyPolicy = () => {
  const { dir, t } = useLanguage();
  const sections = t('legal.privacy.sections') as unknown as LegalSection[];

  return (
    <div className="min-h-screen bg-background" dir={dir}>
      <Header />
      <main className="pt-24 pb-16 px-4 md:px-8">
        <div className="container-main max-w-3xl">
          <Link
            to="/"
            className={`inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors ${
              dir === 'rtl' ? 'flex-row-reverse' : ''
            }`}
          >
            <ArrowLeft size={18} className={dir === 'rtl' ? 'rotate-180' : ''} />
            {String(t('legal.backHome'))}
          </Link>

          <h1 className="text-4xl font-bold text-foreground mb-8">{String(t('legal.privacy.title'))}</h1>
          <p className="text-muted-foreground mb-6">{String(t('legal.lastUpdated'))}</p>

          <div
            className={`prose prose-slate dark:prose-invert max-w-none space-y-6 text-muted-foreground ${dir === 'rtl' ? 'prose-headings:text-right' : ''}`}
          >
            {Array.isArray(sections) &&
              sections.map((section, i) => (
                <section key={i} className={dir === 'rtl' ? 'text-right' : ''}>
                  <h2 className="text-xl font-semibold text-foreground mb-3">{section.title}</h2>
                  <p>{section.body}</p>
                </section>
              ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
