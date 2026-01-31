import { Check, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Pricing = () => {
  const { t } = useLanguage();
  
  const plans = [
    {
      nameKey: 'pricing.plans.starter.name',
      price: '$1,500',
      descKey: 'pricing.plans.starter.description',
      featuresKey: 'pricing.plans.starter.features',
      popular: false,
    },
    {
      nameKey: 'pricing.plans.business.name',
      price: '$3,500',
      descKey: 'pricing.plans.business.description',
      featuresKey: 'pricing.plans.business.features',
      popular: true,
    },
    {
      nameKey: 'pricing.plans.custom.name',
      price: '$8,000',
      descKey: 'pricing.plans.custom.description',
      featuresKey: 'pricing.plans.custom.features',
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="section-padding bg-secondary/30">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-4">
            {t('pricing.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('pricing.title')} <span className="text-gradient">{t('pricing.titleHighlight')}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const features = t(plan.featuresKey) as unknown as string[];
            
            return (
              <div
                key={index}
                className={`relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 ${
                  plan.popular
                    ? 'bg-gradient-primary shadow-elevated'
                    : 'bg-card shadow-card border border-border/50'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 px-4 py-1 bg-accent rounded-full">
                    <Sparkles size={14} className="text-accent-foreground" />
                    <span className="text-xs font-bold text-accent-foreground">{t('pricing.mostPopular')}</span>
                  </div>
                )}

                {/* Plan Info */}
                <div className="mb-6">
                  <h3
                    className={`text-xl font-bold mb-2 ${
                      plan.popular ? 'text-primary-foreground' : 'text-foreground'
                    }`}
                  >
                    {t(plan.nameKey)}
                  </h3>
                  <p
                    className={`text-sm ${
                      plan.popular ? 'text-primary-foreground/80' : 'text-muted-foreground'
                    }`}
                  >
                    {t(plan.descKey)}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <span
                    className={`text-4xl font-bold ${
                      plan.popular ? 'text-primary-foreground' : 'text-foreground'
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-sm ${
                      plan.popular ? 'text-primary-foreground/70' : 'text-muted-foreground'
                    }`}
                  >
                    {' '}
                    {t('pricing.startingAt')}
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {Array.isArray(features) && features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check
                        size={18}
                        className={`flex-shrink-0 mt-0.5 ${
                          plan.popular ? 'text-accent' : 'text-primary'
                        }`}
                      />
                      <span
                        className={`text-sm ${
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
                  className={`block w-full text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
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
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            {t('pricing.customQuote')}
          </p>
          <a href="#contact" className="btn-secondary">
            {t('pricing.requestQuote')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
