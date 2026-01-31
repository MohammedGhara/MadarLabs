import { ArrowRight, Zap, Users, Palette, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  const trustBadges = [
    { icon: Zap, label: t('hero.trustBadges.fastDelivery') },
    { icon: Users, label: t('hero.trustBadges.businessFocused') },
    { icon: Palette, label: t('hero.trustBadges.cleanUI') },
  ];

  return (
    <section className="relative min-h-[85vh] sm:min-h-screen flex items-center overflow-hidden pt-20">
      {/* Premium mesh gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-orb" />
        <div className="absolute bottom-1/4 -right-32 w-[450px] h-[450px] bg-accent/20 rounded-full blur-[100px] animate-orb" style={{ animationDelay: '-7s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[80px] animate-orb" style={{ animationDelay: '-14s' }} />
      </div>

      <div className="container-main relative px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 backdrop-blur-sm rounded-full text-primary text-sm font-semibold mb-8 animate-fade-in-up border border-primary/20">
            <CheckCircle2 size={18} />
            <span>{t('hero.badge')}</span>
          </div>

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
              className="btn-primary text-base md:text-lg px-8 py-4 w-full sm:w-auto rounded-xl glow-soft hover:glow-primary transition-all duration-300"
            >
              {t('hero.cta')}
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#portfolio"
              className="btn-secondary text-base md:text-lg px-8 py-4 w-full sm:w-auto rounded-xl border-2 hover:border-primary/40 transition-all duration-300"
            >
              {t('hero.ctaSecondary')}
            </a>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center gap-3 text-muted-foreground group">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <badge.icon size={20} className="text-primary" />
                </div>
                <span className="text-sm font-medium">{badge.label}</span>
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
    </section>
  );
};

export default Hero;
