import {
  ArrowUpRight,
  Utensils,
  Stethoscope,
  Dumbbell,
  Home,
  ShoppingBag,
  Wrench,
  TrendingUp,
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ScrollRevealSection from './ScrollRevealSection';

const REVEAL_STAGGER = [
  'animate-reveal-delay-2',
  'animate-reveal-delay-3',
  'animate-reveal-delay-4',
  'animate-reveal-delay-5',
  'animate-reveal-delay-6',
  'animate-reveal-delay-7',
] as const;

const Portfolio = () => {
  const { t } = useLanguage();

  const projects = [
    {
      icon: Utensils,
      titleKey: 'portfolio.projects.restaurant.title',
      categoryKey: 'portfolio.projects.restaurant.category',
      descriptionKey: 'portfolio.projects.restaurant.description',
      resultKey: 'portfolio.projects.restaurant.result',
      color: 'from-orange-500 via-rose-500 to-red-600',
    },
    {
      icon: Stethoscope,
      titleKey: 'portfolio.projects.clinic.title',
      categoryKey: 'portfolio.projects.clinic.category',
      descriptionKey: 'portfolio.projects.clinic.description',
      resultKey: 'portfolio.projects.clinic.result',
      color: 'from-emerald-500 via-teal-500 to-cyan-700',
    },
    {
      icon: Dumbbell,
      titleKey: 'portfolio.projects.gym.title',
      categoryKey: 'portfolio.projects.gym.category',
      descriptionKey: 'portfolio.projects.gym.description',
      resultKey: 'portfolio.projects.gym.result',
      color: 'from-violet-500 via-fuchsia-500 to-pink-600',
    },
    {
      icon: Home,
      titleKey: 'portfolio.projects.realEstate.title',
      categoryKey: 'portfolio.projects.realEstate.category',
      descriptionKey: 'portfolio.projects.realEstate.description',
      resultKey: 'portfolio.projects.realEstate.result',
      color: 'from-sky-500 via-blue-500 to-indigo-600',
    },
    {
      icon: ShoppingBag,
      titleKey: 'portfolio.projects.ecommerce.title',
      categoryKey: 'portfolio.projects.ecommerce.category',
      descriptionKey: 'portfolio.projects.ecommerce.description',
      resultKey: 'portfolio.projects.ecommerce.result',
      color: 'from-amber-500 via-orange-500 to-red-600',
    },
    {
      icon: Wrench,
      titleKey: 'portfolio.projects.service.title',
      categoryKey: 'portfolio.projects.service.category',
      descriptionKey: 'portfolio.projects.service.description',
      resultKey: 'portfolio.projects.service.result',
      color: 'from-indigo-500 via-violet-600 to-purple-700',
    },
  ];

  return (
    <section
      id="portfolio"
      className="portfolio-section section-padding relative overflow-hidden bg-background"
    >
      {/* Layered atmosphere */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-15%,hsl(221_83%_53%/0.11),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_100%_80%,hsl(187_85%_42%/0.09),transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_0%_60%,hsl(230_76%_48%/0.06),transparent)]"
        aria-hidden
      />
      <div
        className="portfolio-orb pointer-events-none absolute -left-32 top-1/4 h-[min(70vw,28rem)] w-[min(70vw,28rem)] rounded-full bg-primary/[0.09] blur-3xl"
        aria-hidden
      />
      <div
        className="portfolio-orb-slow pointer-events-none absolute -right-24 bottom-0 h-[min(60vw,22rem)] w-[min(60vw,22rem)] rounded-full bg-cyan-500/[0.08] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4] dark:opacity-[0.22]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--border) / 0.55) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--border) / 0.55) 1px, transparent 1px)`,
          backgroundSize: '56px 56px',
        }}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" aria-hidden />

      <div className="container-main relative z-10">
        <ScrollRevealSection>
          {/* Heading */}
          <div className="mx-auto mb-16 max-w-3xl text-center sm:mb-20 md:mb-24">
            <span className="animate-reveal section-badge mb-6 inline-flex">{t('portfolio.badge')}</span>
            <div className="animate-reveal animate-reveal-delay-1 mb-6 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-gradient-to-r from-transparent to-primary/45 sm:w-16" aria-hidden />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground sm:text-xs">
                {t('portfolio.stripLabel')}
              </span>
              <span className="h-px w-12 bg-gradient-to-l from-transparent to-primary/45 sm:w-16" aria-hidden />
            </div>
            <h2 className="animate-reveal animate-reveal-delay-1 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl xl:text-[3.15rem] xl:leading-[1.12]">
              <span className="relative inline-block">
                {t('portfolio.title')}
                <span
                  className="pointer-events-none absolute -bottom-1 left-0 right-0 mx-auto h-3 max-w-[min(100%,14rem)] rounded-full bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 blur-md md:h-4"
                  aria-hidden
                />
              </span>{' '}
              <span className="text-gradient">{t('portfolio.titleHighlight')}</span>
            </h2>
            <p className="animate-reveal animate-reveal-delay-2 mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:mt-7 md:text-lg lg:text-xl">
              {t('portfolio.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-8 xl:grid-cols-3 xl:gap-9">
            {projects.map((project, index) => (
              <article
                key={project.titleKey}
                className={`animate-reveal group/card portfolio-card-premium flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-border/55 bg-card/85 backdrop-blur-[1px] ${
                  REVEAL_STAGGER[index] ?? 'animate-reveal-delay-8'
                }`}
              >
                {/* Media */}
                <div
                  className={`relative min-h-[200px] flex-1 overflow-hidden border-b border-border/30 bg-gradient-to-br ${project.color}`}
                >
                  <div
                    className="absolute inset-0 opacity-[0.2]"
                    style={{
                      backgroundImage: `linear-gradient(hsl(0 0% 100% / 0.14) 1px, transparent 1px),
                        linear-gradient(90deg, hsl(0 0% 100% / 0.14) 1px, transparent 1px)`,
                      backgroundSize: '28px 28px',
                    }}
                    aria-hidden
                  />
                  <div className="portfolio-card-media absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-white/10" />
                  <div className="absolute inset-0 z-[1] opacity-0 transition-opacity duration-500 group-hover/card:opacity-100 bg-gradient-to-br from-white/12 via-transparent to-primary/10" />
                  <div className="portfolio-shine z-[5]" aria-hidden />

                  <span className="absolute start-4 top-4 z-[6] inline-flex max-w-[calc(100%-2rem)] items-center rounded-full border border-white/25 bg-black/40 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white shadow-lg backdrop-blur-md sm:text-[11px]">
                    {t(project.categoryKey)}
                  </span>

                  <div className="relative z-[6] flex h-full min-h-[200px] items-center justify-center p-8">
                    <div className="portfolio-icon-shell rounded-2xl border border-white/30 bg-white/15 p-5 shadow-xl backdrop-blur-md sm:p-6">
                      <project.icon
                        className="h-11 w-11 text-white drop-shadow-md sm:h-14 sm:w-14"
                        strokeWidth={1.65}
                        aria-hidden
                      />
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="relative flex flex-1 flex-col justify-between bg-gradient-to-b from-card via-card to-muted/[0.35] p-6 sm:p-7">
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border/80 to-transparent" />

                  <div>
                    <h3 className="text-xl font-bold leading-snug tracking-tight text-foreground sm:text-[1.35rem]">
                      {t(project.titleKey)}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem]">
                      {t(project.descriptionKey)}
                    </p>
                  </div>

                  <div className="mt-6 rounded-2xl border border-primary/12 bg-gradient-to-br from-primary/[0.07] to-transparent px-4 py-3.5 sm:mt-7">
                    <div className="flex gap-3.5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/12 text-primary shadow-inner">
                        <TrendingUp className="h-[18px] w-[18px]" aria-hidden />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground sm:text-[11px]">
                          {t('portfolio.result')}
                        </p>
                        <p className="mt-0.5 text-sm font-semibold leading-snug text-foreground sm:text-base">
                          {t(project.resultKey)}
                        </p>
                      </div>
                    </div>
                  </div>

                  <a
                    href="#contact"
                    className="portfolio-cta-glow group/cta relative mt-6 inline-flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-xl border border-primary/25 bg-primary/[0.06] px-4 py-3 text-sm font-semibold text-primary shadow-sm transition-colors hover:border-primary/40 hover:bg-primary/[0.1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    <span className="relative z-[1]">{t('portfolio.requestSimilar')}</span>
                    <ArrowUpRight
                      className="relative z-[1] h-4 w-4 transition-transform duration-300 ease-out group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
                      aria-hidden
                    />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </ScrollRevealSection>
      </div>
    </section>
  );
};

export default Portfolio;
