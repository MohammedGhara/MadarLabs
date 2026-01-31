import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  const { dir } = useLanguage();

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
            Back to Home
          </Link>

          <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
          <p className="text-muted-foreground mb-6">Last updated: January 2025</p>

          <div className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Information We Collect</h2>
              <p>
                When you submit our contact form, we collect your name, business type, service needs, budget range,
                WhatsApp number, optional Instagram username, and any message you provide. We use this information
                solely to respond to your inquiry and provide our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. How We Use Your Information</h2>
              <p>
                We use the information you provide to communicate with you about your project, send project updates,
                and deliver our web and mobile development services. We do not sell or share your personal information
                with third parties for marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. Data Storage & Security</h2>
              <p>
                Your data is stored securely and processed in accordance with applicable data protection laws.
                We implement appropriate technical and organizational measures to protect your personal information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Cookies & Analytics</h2>
              <p>
                Our website may use cookies and similar technologies to improve your experience. We may use analytics
                services to understand how visitors use our site. You can control cookie preferences through your
                browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Your Rights</h2>
              <p>
                You have the right to access, correct, or delete your personal data. To exercise these rights or
                ask questions about our privacy practices, please contact us using the contact details provided
                on our website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">6. Contact Us</h2>
              <p>
                For any privacy-related questions, please reach out to us via the contact form or the email
                address listed in our footer.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
