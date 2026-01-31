import { Check, Sparkles } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter Website',
      price: '$1,500',
      description: 'Perfect for small businesses getting started online.',
      features: [
        'Up to 5 pages',
        'Mobile responsive design',
        'Contact form integration',
        'Basic SEO setup',
        '1 month support',
      ],
      popular: false,
    },
    {
      name: 'Business Pro',
      price: '$3,500',
      description: 'For growing businesses that need more features.',
      features: [
        'Up to 15 pages',
        'Custom design & branding',
        'CMS integration',
        'Advanced SEO & analytics',
        'Booking/payment integration',
        '3 months support',
      ],
      popular: true,
    },
    {
      name: 'Custom App/System',
      price: '$8,000',
      description: 'Full-scale custom solutions for unique needs.',
      features: [
        'Custom web or mobile app',
        'Database & backend',
        'Admin dashboard',
        'Third-party integrations',
        'Scalable architecture',
        '6 months support',
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="section-padding bg-secondary/30">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-4">
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Transparent <span className="text-gradient">pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Investment packages designed to deliver maximum value for your budget.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 ${
                plan.popular
                  ? 'bg-gradient-primary shadow-elevated'
                  : 'bg-card shadow-card border border-border/50'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 px-4 py-1 bg-accent rounded-full">
                  <Sparkles size={14} className="text-accent-foreground" />
                  <span className="text-xs font-bold text-accent-foreground">MOST POPULAR</span>
                </div>
              )}

              {/* Plan Info */}
              <div className="mb-6">
                <h3
                  className={`text-xl font-bold mb-2 ${
                    plan.popular ? 'text-primary-foreground' : 'text-foreground'
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm ${
                    plan.popular ? 'text-primary-foreground/80' : 'text-muted-foreground'
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <span
                  className={`text-4xl font-bold ${
                    plan.popular ? 'text-primary-foreground' : 'text-foreground'
                  }`}
                >
                  {plan.price}
                </span>
                <span
                  className={`text-sm ${
                    plan.popular ? 'text-primary-foreground/70' : 'text-muted-foreground'
                  }`}
                >
                  {' '}
                  starting at
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check
                      size={18}
                      className={`flex-shrink-0 mt-0.5 ${
                        plan.popular ? 'text-accent' : 'text-primary'
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        plan.popular ? 'text-primary-foreground/90' : 'text-foreground'
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className={`block w-full text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-white text-primary hover:bg-white/90'
                    : 'bg-primary text-primary-foreground hover:brightness-110'
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        {/* Custom Quote */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Need something different? We create custom solutions for unique requirements.
          </p>
          <a href="#contact" className="btn-secondary">
            Request Custom Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
