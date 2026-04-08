import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useLanguage } from '@/contexts/LanguageContext';
import ScrollRevealSection from './ScrollRevealSection';

const FAQ = () => {
  const { t } = useLanguage();

  const faqs = t('faq.items') as unknown as { question: string; answer: string }[];

  return (
    <section id="faq" className="section-padding bg-section-muted">
      <div className="container-main">
        <ScrollRevealSection>
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-20">
          <span className="animate-reveal section-badge mb-6">
            {t('faq.badge')}
          </span>
          <h2 className="animate-reveal animate-reveal-delay-1 text-3xl md:text-4xl lg:text-5xl xl:text-[3rem] font-bold text-foreground mb-5 text-balance tracking-tight">
            {t('faq.title')} <span className="text-gradient">{t('faq.titleHighlight')}</span>
          </h2>
          <p className="animate-reveal animate-reveal-delay-2 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            {t('faq.subtitle')}
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="animate-reveal animate-reveal-delay-3 max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {Array.isArray(faqs) && faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-2xl border border-border/60 px-6 shadow-card overflow-hidden transition-all duration-300 hover:border-primary/20 hover:shadow-lg"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        </ScrollRevealSection>
      </div>
    </section>
  );
};

export default FAQ;
