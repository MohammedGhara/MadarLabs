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
      
      // Adjust video position based on screen size
      if (isTouchDevice && width <= 768) {
        // Mobile phones: center the subject
        setObjectPosition('center center');
      } else {
        // Desktop/Tablet: show top part
        setObjectPosition('center top');
      }
    };

    // Set initial position
    updateObjectPosition();

    // Update on resize
    window.addEventListener('resize', updateObjectPosition);
    return () => window.removeEventListener('resize', updateObjectPosition);
  }, []);

  const trustBadges = [
    { icon: Zap, label: t('hero.trustBadges.fastDelivery') },
    { icon: Users, label: t('hero.trustBadges.businessFocused') },
    { icon: Palette, label: t('hero.trustBadges.cleanUI') },
  ];

  return (
    <section className="relative min-h-[85vh] sm:min-h-screen flex items-center overflow-hidden pt-20">
      {/* Video background */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full"
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
          {/* Fallback if video doesn't load */}
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Premium mesh gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/20 to-white/20 z-10" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 z-10" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-orb" />
        <div className="absolute bottom-1/4 -right-32 w-[450px] h-[450px] bg-primary/15 rounded-full blur-[100px] animate-orb" style={{ animationDelay: '-7s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[80px] animate-orb" style={{ animationDelay: '-14s' }} />
      </div>

      <div className="container-main relative px-4 md:px-8 pt-8 md:pt-12 pb-16 md:pb-24 z-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-foreground leading-[1.1] tracking-tight mb-6 animate-slide-up text-balance">
            {t('hero.headline')}{' '}
            <span className="text-gradient">{t('hero.headlineHighlight')}</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up leading-relaxed" style={{ animationDelay: '0.1s' }}>
            {t('hero.subheadline')}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <a
              href="#contact"
              className="btn-primary text-base md:text-lg px-8 py-4 w-full sm:w-auto rounded-xl glow-soft hover:glow-strong transition-all duration-300 group"
            >
              {t('hero.cta')}
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#portfolio"
              className="btn-secondary text-base md:text-lg px-8 py-4 w-full sm:w-auto rounded-xl border-2 hover:border-primary/50 hover:shadow-soft transition-all duration-300"
            >
              {t('hero.ctaSecondary')}
            </a>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center gap-3 text-muted-foreground group">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 group-hover:shadow-soft transition-all duration-300">
                  <badge.icon size={20} className="text-primary" />
                </div>
                <span className="text-sm font-medium group-hover:text-foreground transition-colors">{badge.label}</span>
              </div>
            ))}
          </div>

          {/* Instagram Note - glass style */}
          <div className="card-glass max-w-lg mx-auto animate-fade-in-up py-5 px-6" style={{ animationDelay: '0.4s' }}>
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">{t('hero.instagramNote')}</span>{' '}
              {t('hero.instagramNoteText')}
            </p>
          </div>
        </div>
      </div>

      {/* Simple Diagonal Divider at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-30 pointer-events-none">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60L720 0L1440 60V120H0V60Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
