import { Star, Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Testimonials = () => {
  const { t } = useLanguage();
  
  // Testimonials are kept in English as they are client quotes
  const testimonials = [
    {
      name: 'Sarah Cohen',
      role: 'Owner, Bloom Café',
      content:
        'VertexAgency transformed our online presence. Our ordering system increased revenue by 40% in the first month. The team was professional and delivered ahead of schedule.',
      rating: 5,
    },
    {
      name: 'David Levi',
      role: 'CEO, FitPro Gym',
      content:
        'The app they built for our gym is exactly what we needed. Member engagement tripled and the booking system works flawlessly. Highly recommend!',
      rating: 5,
    },
    {
      name: 'Maya Shapira',
      role: 'Director, Prime Real Estate',
      content:
        'Our lead generation website has been a game-changer. We now get 150+ qualified leads per month. The ROI has been incredible.',
      rating: 5,
    },
    {
      name: 'Oren Tal',
      role: 'Founder, TechServe IT',
      content:
        'Professional, responsive, and they truly understand business needs. Our new website perfectly represents our brand and converts visitors into clients.',
      rating: 5,
    },
    {
      name: 'Noa Berger',
      role: 'Owner, StyleBox Boutique',
      content:
        "The e-commerce store they built is beautiful and easy to manage. Sales have been growing steadily since launch. Couldn't be happier!",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-4">
            {t('testimonials.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('testimonials.title')} <span className="text-gradient">{t('testimonials.titleHighlight')}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-premium relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-primary/10">
                <Quote size={40} />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-star text-star" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground mb-6 relative z-10">"{testimonial.content}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
