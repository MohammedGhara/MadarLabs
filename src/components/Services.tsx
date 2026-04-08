import { Globe, ShoppingCart, Smartphone, Calendar, LayoutDashboard, Palette } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ScrollRevealSection from './ScrollRevealSection';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Globe,
      titleKey: 'services.items.websites.title',
      descKey: 'services.items.websites.description',
    },
    {
      icon: ShoppingCart,
      titleKey: 'services.items.ecommerce.title',
      descKey: 'services.items.ecommerce.description',
    },
    {
      icon: Smartphone,
      titleKey: 'services.items.mobile.title',
      descKey: 'services.items.mobile.description',
    },
    {
      icon: Calendar,
      titleKey: 'services.items.booking.title',
      descKey: 'services.items.booking.description',
    },
    {
      icon: LayoutDashboard,
      titleKey: 'services.items.dashboard.title',
      descKey: 'services.items.dashboard.description',
    },
    {
      icon: Palette,
      titleKey: 'services.items.branding.title',
      descKey: 'services.items.branding.description',
    },
  ];

  return (
    <section id="services" className="section-padding bg-section-muted relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-20%,hsl(221_83%_53%/0.06),transparent)] pointer-events-none" />
      <div className="container-main relative">
        <ScrollRevealSection>
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-20">
          <span className="animate-reveal section-badge mb-6">
            {t('services.badge')}
          </span>
          <h2 className="animate-reveal animate-reveal-delay-1 text-3xl md:text-4xl lg:text-5xl xl:text-[3rem] font-bold text-foreground mb-5 text-balance tracking-tight">
            {t('services.title')} <span className="text-gradient">{t('services.titleHighlight')}</span>
          </h2>
          <p className="animate-reveal animate-reveal-delay-2 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`animate-reveal card-premium group cursor-pointer p-5 sm:p-7 card-hover-lift border border-border/50 hover:border-primary/15 ${
                index === 0 ? 'animate-reveal-delay-2' : ''
              } ${index === 1 ? 'animate-reveal-delay-3' : ''} ${index === 2 ? 'animate-reveal-delay-3' : ''} ${index === 3 ? 'animate-reveal-delay-4' : ''} ${index === 4 ? 'animate-reveal-delay-4' : ''} ${index === 5 ? 'animate-reveal-delay-5' : ''}`}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-105 transition-transform duration-500 ease-out shadow-md ring-1 ring-white/10">
                <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground" />
              </div>
              <h3 className="text-base sm:text-xl font-bold text-foreground mb-2 sm:mb-3 tracking-tight">{t(service.titleKey)}</h3>
              <p className="text-muted-foreground text-xs sm:text-base leading-relaxed">{t(service.descKey)}</p>
            </div>
          ))}
        </div>
        </ScrollRevealSection>
      </div>
    </section>
  );
};

export default Services;
