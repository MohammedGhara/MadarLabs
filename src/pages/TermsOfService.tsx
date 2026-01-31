import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
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

          <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
          <p className="text-muted-foreground mb-6">Last updated: January 2025</p>

          <div className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Agreement to Terms</h2>
              <p>
                By accessing our website and using our services, you agree to be bound by these Terms of Service.
                If you do not agree with any part of these terms, please do not use our website or services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. Services</h2>
              <p>
                VertexAgency provides web development, mobile app development, e-commerce solutions, and related
                digital services. Specific scope, deliverables, and timelines are defined in individual project
                agreements or quotes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. Pricing & Payment</h2>
              <p>
                Pricing is as specified in our quotes or pricing page. We typically require 50% upfront to begin
                work, with the remainder due upon project completion. Payment terms may be adjusted for larger
                projects with milestone-based arrangements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Intellectual Property</h2>
              <p>
                Upon full payment, you receive ownership of the custom deliverables created for your project.
                We retain the right to use non-proprietary tools, libraries, and techniques in other projects.
                Any pre-existing materials you provide remain your property.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Revisions & Scope Changes</h2>
              <p>
                Our packages include specified revision rounds. Additional revisions or scope changes may incur
                additional charges and timeline adjustments. We communicate any such changes before proceeding.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">6. Limitation of Liability</h2>
              <p>
                Our liability is limited to the amount paid for the specific project. We are not liable for
                indirect, incidental, or consequential damages. We strive to deliver quality work and stand
                behind our services within the agreed scope.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">7. Contact</h2>
              <p>
                For questions about these terms, please contact us through the contact form or the details
                provided in our website footer.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
