import { lazy, Suspense } from 'react';
import { ArrowRight, Zap, Users, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

const HeroVideoBackground = lazy(() => import('@/components/HeroVideoBackground'));

const Hero = () => {
  const { t, dir } = useLanguage();
  const rtl = dir === 'rtl';

  const trustBadges = [
    { icon: Zap, label: t('hero.trustBadges.fastDelivery') },
    { icon: Users, label: t('hero.trustBadges.businessFocused') },
    { icon: Palette, label: t('hero.trustBadges.cleanUI') },
  ];

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-20 sm:min-h-screen">
      <Suspense fallback={<div className="absolute inset-0 z-0 bg-[#020617]" aria-hidden />}>
        <HeroVideoBackground />
      </Suspense>

      <div className="container-main relative z-20 px-4 pb-20 pt-10 md:px-8 md:pb-28 md:pt-14">
        <div
          className={cn(
            'mx-auto max-w-3xl text-center',
            'lg:mx-0 lg:max-w-xl lg:text-left',
            rtl && 'lg:ml-auto lg:max-w-xl lg:text-right'
          )}
        >
          <p className="mb-4 animate-fade-in-up text-[11px] font-semibold uppercase tracking-[0.2em] text-white/75 sm:text-xs">
            {t('hero.badge')}
          </p>

          <h1 className="mb-6 animate-slide-up text-balance text-4xl font-extrabold leading-[1.08] tracking-tight text-white drop-shadow-[0_2px_28px_rgba(0,0,0,0.45)] md:text-5xl lg:text-6xl xl:text-[3.5rem]">
            {t('hero.headline')}{' '}
            <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
              {t('hero.headlineHighlight')}
            </span>
          </h1>

          <p
            className="mx-auto mb-8 max-w-2xl animate-fade-in-up text-base font-medium leading-relaxed text-white/85 drop-shadow-[0_1px_12px_rgba(0,0,0,0.35)] md:mb-10 md:text-lg lg:mx-0 lg:text-xl"
            style={{ animationDelay: '0.08s' }}
          >
            {t('hero.subheadline')}
          </p>

          <div
            className={cn(
              'mb-10 flex animate-fade-in-up flex-col items-stretch justify-center gap-4 sm:mb-12 sm:flex-row sm:items-center',
              rtl ? 'sm:justify-end' : 'sm:justify-start'
            )}
            style={{ animationDelay: '0.14s' }}
          >
            <Link
              to="/#contact"
              className="btn-primary group w-full rounded-xl px-8 py-4 text-center text-base glow-soft shadow-[0_8px_32px_-8px_hsl(221_83%_53%/0.6)] transition-all duration-300 hover:glow-strong sm:w-auto md:text-lg"
            >
              <span className="inline-flex items-center justify-center gap-2">
                {t('hero.cta')}
                <ArrowRight
                  size={20}
                  className={cn(
                    'transition-transform duration-300 ease-out group-hover:translate-x-1',
                    rtl && 'rotate-180 group-hover:-translate-x-1 group-hover:translate-x-0'
                  )}
                />
              </span>
            </Link>
            <Link
              to="/#portfolio"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-white/25 bg-white/5 px-8 py-4 text-base font-semibold text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/12 sm:w-auto md:text-lg"
            >
              {t('hero.ctaSecondary')}
            </Link>
          </div>

          <div
            className={cn(
              'mb-10 flex animate-fade-in-up flex-wrap items-center justify-center gap-8 md:gap-12',
              rtl ? 'lg:justify-end' : 'lg:justify-start'
            )}
            style={{ animationDelay: '0.2s' }}
          >
            {trustBadges.map((badge, index) => (
              <div key={index} className="group flex items-center gap-3 text-white/80">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/10 transition-all duration-300 group-hover:scale-105 group-hover:border-white/25 group-hover:bg-white/15">
                  <badge.icon size={20} className="text-cyan-200" />
                </div>
                <span className="text-sm font-medium text-white/90 transition-colors group-hover:text-white">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>

          <div
            className={cn(
              'card-glass-hero mx-auto max-w-lg animate-fade-in-up px-6 py-5 sm:text-center',
              rtl ? 'lg:ml-0 lg:mr-auto lg:text-right' : 'lg:mx-0 lg:text-left'
            )}
            style={{ animationDelay: '0.28s' }}
          >
            <p className="text-sm leading-relaxed text-white/88">
              <span className="font-semibold text-white">{t('hero.instagramNote')}</span>{' '}
              {t('hero.instagramNoteText')}
            </p>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-30">
        <svg
          viewBox="0 0 1440 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-auto w-full text-[hsl(var(--background))]"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path d="M0 72L720 8L1440 72V120H0V72Z" fill="currentColor" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
