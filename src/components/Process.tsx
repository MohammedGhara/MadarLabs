import { Phone, PenTool, Code, Gauge, Rocket, type LucideIcon } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ScrollRevealSection, { ScrollReveal } from './ScrollRevealSection';
import { cn } from '@/lib/utils';

const STEPS: {
  icon: LucideIcon;
  number: string;
  titleKey: string;
  descKey: string;
}[] = [
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

const Process = () => {
  const { t, dir } = useLanguage();
  const rtl = dir === 'rtl';

  return (
    <section id="process" className="section-padding relative overflow-hidden bg-section-muted">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_100%_0%,hsl(187_85%_42%/0.06),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_30%_at_0%_100%,hsl(221_83%_53%/0.05),transparent)]" />

      <div className="container-main relative">
        <ScrollRevealSection>
          <div className="mb-14 text-center sm:mb-20">
            <span className="animate-reveal section-badge mb-6">{t('process.badge')}</span>
            <h2 className="animate-reveal animate-reveal-delay-1 mb-5 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl xl:text-[3rem]">
              {t('process.title')} <span className="text-gradient">{t('process.titleHighlight')}</span>
            </h2>
            <p className="animate-reveal animate-reveal-delay-2 mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              {t('process.subtitle')}
            </p>
          </div>

          {/* Large screens — horizontal workflow pipeline */}
          <div className="relative hidden lg:block" dir={dir}>
            <div
              className="pointer-events-none absolute top-[2.125rem] z-0 h-0.5 rounded-full bg-gradient-to-r from-transparent via-primary/40 to-transparent ltr:left-[6%] ltr:right-[6%] rtl:left-[6%] rtl:right-[6%]"
              aria-hidden
            />

            <div className="relative z-10 grid grid-cols-5 gap-5">
              {STEPS.map((step, index) => {
                const Icon = step.icon;
                return (
                  <ScrollReveal
                    key={step.number}
                    delay={index + 1}
                    className="group flex h-full flex-col items-center text-center"
                  >
                  <div className="flex h-full flex-col items-center text-center">
                    <div className="relative mb-7 flex flex-col items-center">
                      <div className="relative flex h-[4.25rem] w-[4.25rem] items-center justify-center rounded-2xl bg-gradient-primary shadow-[0_8px_28px_-6px_hsl(221_83%_53%/0.55)] ring-4 ring-background transition-transform duration-500 ease-out group-hover:scale-105">
                        <Icon className="h-7 w-7 text-primary-foreground" strokeWidth={2} />
                      </div>
                      <span className="absolute -bottom-2.5 rounded-full border border-primary/20 bg-background px-2.5 py-0.5 text-[10px] font-bold tracking-widest text-primary shadow-sm">
                        {step.number}
                      </span>
                    </div>

                    <div className="flex h-full w-full flex-col rounded-2xl border border-border/60 bg-card/80 p-5 shadow-card backdrop-blur-sm transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:border-primary/20 group-hover:shadow-elevated">
                      <h3 className="mb-2 text-base font-bold tracking-tight text-foreground lg:text-[1.05rem]">
                        {t(step.titleKey)}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{t(step.descKey)}</p>
                    </div>
                  </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>

          {/* Mobile & tablet — vertical timeline */}
          <div className="relative lg:hidden" dir={dir}>
            <div
              className={cn(
                'pointer-events-none absolute bottom-2 top-2 w-px bg-gradient-to-b from-primary/10 via-primary/35 to-primary/10',
                rtl ? 'right-[1.375rem]' : 'left-[1.375rem]'
              )}
              aria-hidden
            />

            <div className="space-y-4 sm:space-y-5">
              {STEPS.map((step, index) => {
                const Icon = step.icon;
                return (
                  <ScrollReveal
                    key={step.number}
                    delay={index + 1}
                    className={cn('relative flex gap-4 sm:gap-5', rtl && 'flex-row-reverse')}
                  >
                    <div className="relative z-10 flex shrink-0 flex-col items-center pt-1">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary shadow-md ring-4 ring-background sm:h-12 sm:w-12">
                        <Icon className="h-5 w-5 text-primary-foreground sm:h-6 sm:w-6" strokeWidth={2} />
                      </div>
                    </div>

                    <div
                      className={cn(
                        'min-w-0 flex-1 rounded-2xl border border-border/60 bg-card/90 p-4 shadow-card backdrop-blur-sm sm:p-5',
                        rtl ? 'text-right' : 'text-left'
                      )}
                    >
                      <span className="mb-2 inline-block rounded-md bg-primary/10 px-2 py-0.5 text-[10px] font-bold tracking-widest text-primary">
                        {step.number}
                      </span>
                      <h3 className="mb-1.5 text-base font-bold text-foreground sm:text-lg">
                        {t(step.titleKey)}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{t(step.descKey)}</p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </ScrollRevealSection>
      </div>
    </section>
  );
};

export default Process;
