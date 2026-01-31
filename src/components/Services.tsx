import { Globe, ShoppingCart, Smartphone, Calendar, LayoutDashboard, Palette } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

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
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-4">
            {t('services.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('services.title')} <span className="text-gradient">{t('services.titleHighlight')}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-premium group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <service.icon size={28} className="text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{t(service.titleKey)}</h3>
              <p className="text-muted-foreground">{t(service.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
