import {
  ArrowUpRight,
  Crown,
  Sparkles,
  Dumbbell,
  Home,
  ShoppingBag,
  Wrench,
  TrendingUp,
  type LucideIcon,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import ScrollRevealSection from './ScrollRevealSection';

type FeaturedAccent = 'cyan' | 'gold';

type ProjectCard = {
  icon: LucideIcon;
  titleKey: string;
  categoryKey: string;
  descriptionKey: string;
  resultKey: string;
  color: string;
  image?: string;
  imageAltKey?: string;
  externalUrl?: string;
  /** Featured case study: richer media, motion, and hierarchy */
  featured?: boolean;
  /** Show full asset without cropping (photos + logos) */
  imageFit?: 'cover' | 'contain';
  /** Dark = photo on charcoal; light = logo on white/off-white */
  mediaTheme?: 'dark' | 'light';
  /** Glow + badge accent for featured cards */
  featuredAccent?: FeaturedAccent;
};

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

  const projects: ProjectCard[] = [
    {
      icon: Crown,
      titleKey: 'portfolio.projects.shishaKing.title',
      categoryKey: 'portfolio.projects.shishaKing.category',
      descriptionKey: 'portfolio.projects.shishaKing.description',
      resultKey: 'portfolio.projects.shishaKing.result',
      imageAltKey: 'portfolio.projects.shishaKing.imageAlt',
      color: 'from-amber-600 via-orange-600 to-rose-900',
      image: '/portfolio-shishaking.png',
      externalUrl: 'https://shishakingsil.com/',
      featured: true,
      imageFit: 'contain',
      mediaTheme: 'dark',
      featuredAccent: 'cyan',
    },
    {
      icon: Sparkles,
      titleKey: 'portfolio.projects.hebaFashion.title',
      categoryKey: 'portfolio.projects.hebaFashion.category',
      descriptionKey: 'portfolio.projects.hebaFashion.description',
      resultKey: 'portfolio.projects.hebaFashion.result',
      imageAltKey: 'portfolio.projects.hebaFashion.imageAlt',
      color: 'from-amber-200 via-rose-100 to-stone-200',
      image: '/portfolio-hebafashion.png',
      externalUrl: 'https://hebafashionil.com/',
      featured: true,
      imageFit: 'contain',
      mediaTheme: 'light',
      featuredAccent: 'gold',
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
            {projects.map((project, index) => {
              const isFeatured = project.featured === true;
              const imageFit = project.imageFit ?? 'cover';
              const useContain = imageFit === 'contain';
              const mediaLight = project.mediaTheme === 'light';
              const accent: FeaturedAccent = project.featuredAccent ?? 'cyan';
              return (
              <article
                key={project.titleKey}
                className={cn(
                  'animate-reveal group/card portfolio-card-premium flex h-full flex-col overflow-hidden rounded-[1.5rem] border bg-card/90 backdrop-blur-[1px]',
                  isFeatured
                    ? 'border-primary/20 shadow-md shadow-black/[0.06] transition-all duration-500 ease-out motion-safe:hover:-translate-y-2 motion-safe:hover:border-primary/35 motion-safe:hover:shadow-2xl motion-safe:hover:shadow-primary/[0.14]'
                    : 'border-border/55 transition-shadow duration-300 hover:border-border/80',
                  REVEAL_STAGGER[index] ?? 'animate-reveal-delay-8'
                )}
              >
                {/* Media */}
                <div
                  className={cn(
                    'relative flex-1 overflow-hidden border-b border-border/30',
                    project.image && mediaLight && 'bg-[#f6f6f6]',
                    project.image && !mediaLight && 'bg-zinc-950',
                    !project.image && `bg-gradient-to-br ${project.color}`,
                    isFeatured && useContain
                      ? 'min-h-[260px] sm:min-h-[300px]'
                      : isFeatured
                        ? 'min-h-[240px] sm:min-h-[272px]'
                        : 'min-h-[200px]'
                  )}
                >
                  {project.image ? (
                    <>
                      <div className="absolute inset-0 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.imageAltKey ? String(t(project.imageAltKey)) : ''}
                          className={cn(
                            'h-full w-full will-change-transform transition-[transform,filter] duration-700 ease-out-expo motion-safe:group-hover/card:scale-[1.04]',
                            useContain
                              ? 'object-contain object-center px-4 py-5 sm:px-8 sm:py-9'
                              : 'object-cover object-center',
                            !useContain &&
                              isFeatured &&
                              'object-[center_42%] max-sm:object-[center_46%] sm:object-[center_40%]'
                          )}
                          loading={isFeatured ? 'eager' : 'lazy'}
                          decoding="async"
                        />
                      </div>
                      {isFeatured && accent === 'cyan' && (
                        <div
                          className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-32 bg-gradient-to-t from-cyan-500/20 via-transparent to-transparent opacity-70 blur-2xl transition-opacity duration-500 group-hover/card:opacity-100"
                          aria-hidden
                        />
                      )}
                      {isFeatured && accent === 'gold' && (
                        <div
                          className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-28 bg-gradient-to-t from-amber-400/25 via-amber-200/10 to-transparent opacity-80 blur-2xl transition-opacity duration-500 group-hover/card:opacity-100"
                          aria-hidden
                        />
                      )}
                    </>
                  ) : (
                    <div
                      className="absolute inset-0 opacity-[0.2]"
                      style={{
                        backgroundImage: `linear-gradient(hsl(0 0% 100% / 0.14) 1px, transparent 1px),
                        linear-gradient(90deg, hsl(0 0% 100% / 0.14) 1px, transparent 1px)`,
                        backgroundSize: '28px 28px',
                      }}
                      aria-hidden
                    />
                  )}
                  <div
                    className={cn(
                      'portfolio-card-media absolute inset-0 bg-gradient-to-t',
                      mediaLight
                        ? 'from-stone-900/10 via-transparent to-white/40'
                        : 'from-black/55 via-black/15 to-white/10',
                      isFeatured && !mediaLight && 'from-black/70 via-black/25 to-black/20',
                      isFeatured && mediaLight && 'from-stone-900/15 via-transparent to-white/55'
                    )}
                  />
                  <div className="absolute inset-0 z-[1] opacity-0 transition-opacity duration-500 group-hover/card:opacity-100 bg-gradient-to-br from-white/12 via-transparent to-primary/10" />
                  <div className="portfolio-shine z-[5]" aria-hidden />

                  <span
                    className={cn(
                      'absolute start-4 top-4 z-[6] inline-flex max-w-[calc(100%-2rem)] items-center rounded-full border px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white shadow-lg backdrop-blur-md sm:text-[11px]',
                      isFeatured && accent === 'cyan' && 'border-cyan-300/35 bg-black/50 tracking-[0.16em] shadow-[0_0_28px_-6px_rgba(34,211,238,0.35)]',
                      isFeatured && accent === 'gold' && 'border-amber-400/50 bg-black/55 tracking-[0.16em] shadow-[0_0_28px_-6px_rgba(251,191,36,0.32)]',
                      !isFeatured && 'border-white/25 bg-black/40 tracking-[0.14em]'
                    )}
                  >
                    {t(project.categoryKey)}
                  </span>

                  {project.image && !isFeatured ? (
                    <div className="pointer-events-none absolute end-4 bottom-4 z-[6]">
                      <div className="rounded-2xl border border-white/30 bg-black/35 p-3 shadow-xl backdrop-blur-md sm:p-4">
                        <project.icon
                          className="h-9 w-9 text-amber-200 drop-shadow-md sm:h-11 sm:w-11"
                          strokeWidth={1.65}
                          aria-hidden
                        />
                      </div>
                    </div>
                  ) : !project.image ? (
                    <div className="relative z-[6] flex h-full min-h-[200px] items-center justify-center p-8">
                      <div className="portfolio-icon-shell rounded-2xl border border-white/30 bg-white/15 p-5 shadow-xl backdrop-blur-md sm:p-6">
                        <project.icon
                          className="h-11 w-11 text-white drop-shadow-md sm:h-14 sm:w-14"
                          strokeWidth={1.65}
                          aria-hidden
                        />
                      </div>
                    </div>
                  ) : null}
                </div>

                {/* Body */}
                <div
                  className={cn(
                    'relative flex flex-1 flex-col justify-between bg-gradient-to-b from-card via-card to-muted/[0.35] p-6 sm:p-7',
                    isFeatured && 'pt-7 sm:pt-8'
                  )}
                >
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border/80 to-transparent" />
                  {isFeatured && (
                    <div
                      className="pointer-events-none absolute inset-x-6 top-0 h-[3px] rounded-full opacity-90"
                      style={{
                        background:
                          accent === 'gold'
                            ? 'linear-gradient(90deg, transparent, rgba(245, 158, 11, 0.55), transparent)'
                            : 'linear-gradient(90deg, transparent, hsl(var(--primary) / 0.5), transparent)',
                      }}
                      aria-hidden
                    />
                  )}

                  <div>
                    <h3
                      className={cn(
                        'text-xl font-bold leading-snug tracking-tight text-foreground sm:text-[1.35rem]',
                        isFeatured && 'text-[1.35rem] font-extrabold tracking-tight sm:text-[1.45rem]'
                      )}
                    >
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

                  {project.externalUrl ? (
                    <a
                      href={project.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        'portfolio-cta-glow group/cta relative mt-6 inline-flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-xl border px-4 py-3 text-sm font-semibold shadow-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                        isFeatured && accent === 'gold'
                          ? 'border-amber-500/30 bg-gradient-to-r from-amber-500/[0.1] via-primary/[0.08] to-rose-500/[0.06] text-primary hover:border-amber-500/45 hover:shadow-md hover:shadow-amber-500/15'
                          : isFeatured
                            ? 'border-primary/30 bg-gradient-to-r from-primary/[0.12] via-primary/[0.08] to-cyan-500/[0.08] text-primary hover:border-primary/45 hover:shadow-md hover:shadow-primary/15'
                            : 'border-primary/25 bg-primary/[0.06] text-primary hover:border-primary/40 hover:bg-primary/[0.1]'
                      )}
                    >
                      <span className="relative z-[1]">{t('portfolio.visitLiveSite')}</span>
                      <ArrowUpRight
                        className="relative z-[1] h-4 w-4 transition-transform duration-300 ease-out group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
                        aria-hidden
                      />
                    </a>
                  ) : (
                    <Link
                      to="/contact"
                      className="portfolio-cta-glow group/cta relative mt-6 inline-flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-xl border border-primary/25 bg-primary/[0.06] px-4 py-3 text-sm font-semibold text-primary shadow-sm transition-colors hover:border-primary/40 hover:bg-primary/[0.1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                      <span className="relative z-[1]">{t('portfolio.requestSimilar')}</span>
                      <ArrowUpRight
                        className="relative z-[1] h-4 w-4 transition-transform duration-300 ease-out group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
                        aria-hidden
                      />
                    </Link>
                  )}
                </div>
              </article>
            );
            })}
          </div>
        </ScrollRevealSection>
      </div>
    </section>
  );
};

export default Portfolio;
