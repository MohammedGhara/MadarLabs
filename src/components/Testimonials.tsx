import { Star, Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ScrollRevealSection from './ScrollRevealSection';

type TestimonialItem = { name: string; role: string; quote: string };

const Testimonials = () => {
  const { t } = useLanguage();

  const testimonials = t('testimonials.items') as unknown as TestimonialItem[];

  return (
    <section id="testimonials" className="section-padding bg-background relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,hsl(221_83%_53%/0.05),transparent)] pointer-events-none" />
      <div className="container-main relative">
        <ScrollRevealSection>
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-20">
          <span className="animate-reveal section-badge mb-6">
            {t('testimonials.badge')}
          </span>
          <h2 className="animate-reveal animate-reveal-delay-1 text-3xl md:text-4xl lg:text-5xl xl:text-[3rem] font-bold text-foreground mb-5 text-balance tracking-tight">
            {t('testimonials.title')} <span className="text-gradient">{t('testimonials.titleHighlight')}</span>
          </h2>
          <p className="animate-reveal animate-reveal-delay-2 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {Array.isArray(testimonials) &&
            testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`animate-reveal card-premium relative p-5 sm:p-6 card-hover-lift ${
                index < 2 ? 'animate-reveal-delay-2' : index < 4 ? 'animate-reveal-delay-3' : 'animate-reveal-delay-4'
              }`}
            >
              {/* Quote Icon */}
              <div className="absolute top-3 end-3 sm:top-6 sm:end-6 text-primary/10">
                <Quote className="w-6 h-6 sm:w-10 sm:h-10" />
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 sm:gap-1 mb-2 sm:mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 sm:w-[18px] sm:h-[18px] fill-star text-star" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground text-xs sm:text-base mb-3 sm:mb-6 relative z-10 line-clamp-4 sm:line-clamp-none">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xs sm:text-base">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-foreground text-xs sm:text-base truncate">{testimonial.name}</p>
                  <p className="text-[10px] sm:text-sm text-muted-foreground truncate">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        </ScrollRevealSection>
      </div>
    </section>
  );
};

export default Testimonials;
