import { ArrowRight, Zap, Users, Palette } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState, useEffect } from 'react';

const Hero = () => {
  const { t } = useLanguage();
  const [objectPosition, setObjectPosition] = useState('center center');

  useEffect(() => {
    const updateObjectPosition = () => {
      const width = window.innerWidth;
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

      if (isTouchDevice && width <= 768) {
        setObjectPosition('center center');
      } else {
        setObjectPosition('center top');
      }
    };

    updateObjectPosition();
    window.addEventListener('resize', updateObjectPosition);
    return () => window.removeEventListener('resize', updateObjectPosition);
  }, []);

  const trustBadges = [
    { icon: Zap, label: t('hero.trustBadges.fastDelivery') },
    { icon: Users, label: t('hero.trustBadges.businessFocused') },
    { icon: Palette, label: t('hero.trustBadges.cleanUI') },
  ];

  return (
    <section className="relative min-h-[88vh] sm:min-h-screen flex items-center overflow-hidden pt-20">
      {/* Video background */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full scale-105"
          style={{
            objectFit: 'cover',
            objectPosition: objectPosition,
            minWidth: '100%',
            minHeight: '100%',
            width: '100%',
            height: '100%',
          }}
        >
          <source src="/12778084_1920_1080_30fps.mp4" type="video/mp4" />
        </video>
        {/* Cinematic scrim */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/65" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,hsl(221_83%_53%/0.35),transparent)]" />
      </div>

      {/* Ambient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <div className="absolute top-1/4 -left-32 w-[520px] h-[520px] bg-primary/25 rounded-full blur-[130px] animate-orb opacity-90" />
        <div
          className="absolute bottom-1/4 -right-32 w-[480px] h-[480px] bg-accent/20 rounded-full blur-[110px] animate-orb opacity-80"
          style={{ animationDelay: '-7s' }}
        />
      </div>

      <div className="absolute inset-0 bg-grid-pattern opacity-[0.12] z-10 mix-blend-overlay" />

      <div className="container-main relative px-4 md:px-8 pt-10 md:pt-14 pb-20 md:pb-28 z-20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-white/70 mb-4 animate-fade-in-up">
            {t('hero.badge')}
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[3.5rem] font-extrabold text-white leading-[1.08] tracking-tight mb-6 animate-slide-up text-balance drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)]">
            {t('hero.headline')}{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-cyan-200">
              {t('hero.headlineHighlight')}
            </span>
          </h1>

          <p
            className="text-base md:text-lg lg:text-xl text-white/80 max-w-2xl mx-auto mb-10 animate-fade-in-up leading-relaxed font-medium"
            style={{ animationDelay: '0.08s' }}
          >
            {t('hero.subheadline')}
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up"
            style={{ animationDelay: '0.14s' }}
          >
            <a
              href="#contact"
              className="btn-primary text-base md:text-lg px-8 py-4 w-full sm:w-auto rounded-xl glow-soft hover:glow-strong transition-all duration-300 group shadow-[0_8px_32px_-8px_hsl(221_83%_53%/0.6)]"
            >
              {t('hero.cta')}
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300 ease-out" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 w-full sm:w-auto rounded-xl text-base md:text-lg font-semibold text-white border-2 border-white/25 bg-white/5 backdrop-blur-md hover:bg-white/12 hover:border-white/40 transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
            >
              {t('hero.ctaSecondary')}
            </a>
          </div>

          <div
            className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mb-12 animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            {trustBadges.map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-white/75 group"
              >
                <div className="w-11 h-11 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center group-hover:bg-white/15 group-hover:scale-105 group-hover:border-white/25 transition-all duration-300">
                  <badge.icon size={20} className="text-cyan-200" />
                </div>
                <span className="text-sm font-medium text-white/90 group-hover:text-white transition-colors">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>

          <div
            className="card-glass-hero max-w-lg mx-auto animate-fade-in-up py-5 px-6 text-left sm:text-center"
            style={{ animationDelay: '0.28s' }}
          >
            <p className="text-sm text-white/85 leading-relaxed">
              <span className="font-semibold text-white">{t('hero.instagramNote')}</span>{' '}
              {t('hero.instagramNoteText')}
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-30 pointer-events-none">
        <svg
          viewBox="0 0 1440 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto text-[hsl(var(--background))]"
          preserveAspectRatio="none"
        >
          <path
            d="M0 72L720 8L1440 72V120H0V72Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
