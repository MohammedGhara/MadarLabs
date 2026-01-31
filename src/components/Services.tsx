import { Globe, ShoppingCart, Smartphone, Calendar, LayoutDashboard, Palette } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Business Websites',
      description: 'Turn visitors into leads with stunning, conversion-optimized websites.',
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Stores',
      description: 'Sell online easily with beautiful, secure shopping experiences.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'iOS & Android solutions that your customers will love.',
    },
    {
      icon: Calendar,
      title: 'Booking & Ordering',
      description: 'Automate client bookings and orders with smart systems.',
    },
    {
      icon: LayoutDashboard,
      title: 'Admin Dashboard & CRM',
      description: 'Manage your business efficiently with custom dashboards.',
    },
    {
      icon: Palette,
      title: 'Branding & UI/UX',
      description: 'Premium visual identity that sets you apart from competition.',
    },
  ];

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Everything you need to <span className="text-gradient">succeed online</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From websites to mobile apps, we build digital solutions that drive real business results.
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
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
