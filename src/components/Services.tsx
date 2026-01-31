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
    <section id="services" className="section-padding bg-background">
      <div className="container-main">
        <ScrollRevealSection>
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-20">
          <span className="animate-reveal inline-block px-5 py-2.5 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-5">
            {t('services.badge')}
          </span>
          <h2 className="animate-reveal animate-reveal-delay-1 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            {t('services.title')} <span className="text-gradient">{t('services.titleHighlight')}</span>
          </h2>
          <p className="animate-reveal animate-reveal-delay-2 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`animate-reveal card-premium group cursor-pointer p-5 sm:p-6 card-hover-lift border border-border/40 hover:border-primary/20 ${
                index === 0 ? 'animate-reveal-delay-2' : ''
              } ${index === 1 ? 'animate-reveal-delay-3' : ''} ${index === 2 ? 'animate-reveal-delay-3' : ''} ${index === 3 ? 'animate-reveal-delay-4' : ''} ${index === 4 ? 'animate-reveal-delay-4' : ''} ${index === 5 ? 'animate-reveal-delay-5' : ''}`}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300 shadow-soft">
                <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground" />
              </div>
              <h3 className="text-base sm:text-xl font-bold text-foreground mb-2 sm:mb-3">{t(service.titleKey)}</h3>
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
