import { Phone, PenTool, Code, Gauge, Rocket, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ScrollRevealSection from './ScrollRevealSection';

const Process = () => {
  const { t } = useLanguage();
  
  const steps = [
    {
      icon: Phone,
      number: '01',
      titleKey: 'process.steps.discovery.title',
      descKey: 'process.steps.discovery.description',
    },
    {
      icon: PenTool,
      number: '02',
      titleKey: 'process.steps.design.title',
      descKey: 'process.steps.design.description',
    },
    {
      icon: Code,
      number: '03',
      titleKey: 'process.steps.build.title',
      descKey: 'process.steps.build.description',
    },
    {
      icon: Gauge,
      number: '04',
      titleKey: 'process.steps.optimize.title',
      descKey: 'process.steps.optimize.description',
    },
    {
      icon: Rocket,
      number: '05',
      titleKey: 'process.steps.launch.title',
      descKey: 'process.steps.launch.description',
    },
  ];

  const timelines = [
    { typeKey: 'process.timelineItems.website', duration: '7–14' },
    { typeKey: 'process.timelineItems.ecommerce', duration: '14–30' },
    { typeKey: 'process.timelineItems.appMvp', duration: '30–60' },
  ];

  return (
    <section id="process" className="section-padding bg-background">
      <div className="container-main">
        <ScrollRevealSection>
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-20">
          <span className="animate-reveal inline-block px-5 py-2.5 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-5">
            {t('process.badge')}
          </span>
          <h2 className="animate-reveal animate-reveal-delay-1 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            {t('process.title')} <span className="text-gradient">{t('process.titleHighlight')}</span>
          </h2>
          <p className="animate-reveal animate-reveal-delay-2 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('process.subtitle')}
          </p>
        </div>

        {/* Timeline - Vertical on mobile, grid on desktop */}
        <div className="relative">
          {/* Desktop: horizontal connection line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-primary/60 to-primary opacity-20" />

          {/* Mobile: vertical timeline with connecting line */}
          <div className="md:hidden">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-4">
                {/* Left: icon + connecting line */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-soft shrink-0 ring-4 ring-background">
                    <step.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 min-h-[40px] mt-2 bg-gradient-to-b from-primary/50 to-primary/30 rounded-full" />
                  )}
                </div>

                {/* Right: step content */}
                <div className="flex-1 min-w-0 pt-0.5 pb-6 last:pb-0">
                  <span className="inline-block px-2.5 py-1 rounded-lg bg-primary/10 text-primary text-xs font-bold mb-2">
                    {step.number}
                  </span>
                  <h3 className="text-base font-bold text-foreground mb-1.5">{t(step.titleKey)}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t(step.descKey)}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: grid layout */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="card-premium text-center h-full p-6 border-2 border-border/60">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center shadow-strong ring-4 ring-background z-10">
                    <span className="text-sm font-bold text-white">{step.number}</span>
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 mt-4">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{t(step.titleKey)}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t(step.descKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Estimates */}
        <div className="mt-10 sm:mt-16">
          <div className="card-premium bg-gradient-primary p-6 sm:p-8 md:p-10 overflow-hidden relative border-0 shadow-strong">
            {/* Decorative glow - mobile only */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl pointer-events-none md:hidden" />
            <div className="flex items-center gap-3 mb-4 sm:mb-6 relative z-10">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white flex items-center justify-center shadow-strong ring-2 ring-primary/30">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-primary drop-shadow-lg">{t('process.timelines')}</h3>
            </div>
            {/* Mobile: vertical stack, Desktop: 3-column grid */}
            <div className="flex flex-col md:grid md:grid-cols-3 gap-3 md:gap-6 relative z-10">
              {timelines.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between md:flex-col md:text-center gap-4 md:gap-0 bg-white rounded-xl p-4 md:p-5 md:py-5 border-2 border-white/40 shadow-strong"
                >
                  <p className="text-foreground text-sm md:text-base font-semibold md:mb-2">{t(item.typeKey)}</p>
                  <p className="text-2xl md:text-3xl font-bold text-primary md:mt-0">{item.duration} days</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        </ScrollRevealSection>
      </div>
    </section>
  );
};

export default Process;
