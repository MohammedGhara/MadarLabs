import { ArrowRight, Zap, Users, Palette, CheckCircle2 } from 'lucide-react';

const Hero = () => {
  const trustBadges = [
    { icon: Zap, label: 'Fast Delivery' },
    { icon: Users, label: 'Business-Focused' },
    { icon: Palette, label: 'Clean UI/UX' },
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-main px-4 md:px-8 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-8 animate-fade-in-up">
            <CheckCircle2 size={16} />
            <span>Trusted by 50+ businesses</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6 animate-slide-up">
            VertexAgency builds apps & websites that{' '}
            <span className="text-gradient">grow your business.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            From idea to launch — fast, clean, and built to convert customers.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <a href="#contact" className="btn-primary text-base md:text-lg px-8 py-4 w-full sm:w-auto">
              Get a Free Consultation
              <ArrowRight size={20} />
            </a>
            <a href="#portfolio" className="btn-secondary text-base md:text-lg px-8 py-4 w-full sm:w-auto">
              See Our Work
            </a>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center gap-2 text-muted-foreground">
                <badge.icon size={18} className="text-primary" />
                <span className="text-sm font-medium">{badge.label}</span>
              </div>
            ))}
          </div>

          {/* Instagram Note */}
          <div className="card-premium max-w-lg mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">From Instagram?</span>{' '}
              Tell us your business + budget — we reply within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
