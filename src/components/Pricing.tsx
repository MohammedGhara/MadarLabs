import { Check, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ScrollRevealSection from './ScrollRevealSection';

const Pricing = () => {
  const { t } = useLanguage();
  
  const plans = [
    {
      nameKey: 'pricing.plans.starter.name',
      descKey: 'pricing.plans.starter.description',
      featuresKey: 'pricing.plans.starter.features',
      popular: false,
    },
    {
      nameKey: 'pricing.plans.business.name',
      descKey: 'pricing.plans.business.description',
      featuresKey: 'pricing.plans.business.features',
      popular: true,
    },
    {
      nameKey: 'pricing.plans.custom.name',
      descKey: 'pricing.plans.custom.description',
      featuresKey: 'pricing.plans.custom.features',
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="section-padding bg-secondary/30">
      <div className="container-main">
        <ScrollRevealSection>
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-20">
          <span className="animate-reveal inline-block px-5 py-2.5 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-5">
            {t('pricing.badge')}
          </span>
          <h2 className="animate-reveal animate-reveal-delay-1 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            {t('pricing.title')} <span className="text-gradient">{t('pricing.titleHighlight')}</span>
          </h2>
          <p className="animate-reveal animate-reveal-delay-2 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const features = t(plan.featuresKey) as unknown as string[];
            return (
              <div
                key={index}
                className={`animate-reveal relative rounded-xl sm:rounded-2xl p-5 sm:p-8 card-hover-lift ${
                  index === 0 ? 'animate-reveal-delay-2' : index === 1 ? 'animate-reveal-delay-3' : 'animate-reveal-delay-4'
                } ${
                  plan.popular
                    ? 'bg-gradient-primary shadow-elevated'
                    : 'bg-card shadow-card border border-border/50'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 px-2 sm:px-4 py-0.5 sm:py-1 bg-accent rounded-full">
                    <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-accent-foreground" />
                    <span className="text-[10px] sm:text-xs font-bold text-accent-foreground">{t('pricing.mostPopular')}</span>
                  </div>
                )}

                {/* Plan Info */}
                <div className="mb-4 sm:mb-6">
                  <h3
                    className={`text-sm sm:text-xl font-bold mb-1 sm:mb-2 ${
                      plan.popular ? 'text-primary-foreground' : 'text-foreground'
                    }`}
                  >
                    {t(plan.nameKey)}
                  </h3>
                  <p
                    className={`text-xs sm:text-sm ${
                      plan.popular ? 'text-primary-foreground/80' : 'text-muted-foreground'
                    }`}
                  >
                    {t(plan.descKey)}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-1.5 sm:space-y-3 mb-4 sm:mb-8">
                  {Array.isArray(features) && features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 sm:gap-3">
                      <Check
                        className={`w-3.5 h-3.5 sm:w-[18px] sm:h-[18px] flex-shrink-0 mt-0.5 ${
                          plan.popular ? 'text-accent' : 'text-primary'
                        }`}
                      />
                      <span
                        className={`text-xs sm:text-sm ${
                          plan.popular ? 'text-primary-foreground/90' : 'text-foreground'
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className={`block w-full text-center py-2 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-white text-primary hover:bg-white/90'
                      : 'bg-primary text-primary-foreground hover:brightness-110'
                  }`}
                >
                  {t('pricing.getStarted')}
                </a>
              </div>
            );
          })}
        </div>

        {/* Custom Quote */}
        <div className="animate-reveal animate-reveal-delay-5 text-center mt-12">
          <p className="text-muted-foreground mb-4">
            {t('pricing.customQuote')}
          </p>
          <a href="#contact" className="btn-secondary">
            {t('pricing.requestQuote')}
          </a>
        </div>
        </ScrollRevealSection>
      </div>
    </section>
  );
};

export default Pricing;
