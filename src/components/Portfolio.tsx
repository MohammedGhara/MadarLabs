import { ArrowUpRight, Utensils, Stethoscope, Dumbbell, Home, ShoppingBag, Wrench } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Portfolio = () => {
  const { t } = useLanguage();
  
  const projects = [
    {
      icon: Utensils,
      titleKey: 'portfolio.projects.restaurant.title',
      categoryKey: 'portfolio.projects.restaurant.category',
      resultKey: 'portfolio.projects.restaurant.result',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Stethoscope,
      titleKey: 'portfolio.projects.clinic.title',
      categoryKey: 'portfolio.projects.clinic.category',
      resultKey: 'portfolio.projects.clinic.result',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      icon: Dumbbell,
      titleKey: 'portfolio.projects.gym.title',
      categoryKey: 'portfolio.projects.gym.category',
      resultKey: 'portfolio.projects.gym.result',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Home,
      titleKey: 'portfolio.projects.realEstate.title',
      categoryKey: 'portfolio.projects.realEstate.category',
      resultKey: 'portfolio.projects.realEstate.result',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: ShoppingBag,
      titleKey: 'portfolio.projects.ecommerce.title',
      categoryKey: 'portfolio.projects.ecommerce.category',
      resultKey: 'portfolio.projects.ecommerce.result',
      color: 'from-amber-500 to-orange-500',
    },
    {
      icon: Wrench,
      titleKey: 'portfolio.projects.service.title',
      categoryKey: 'portfolio.projects.service.category',
      resultKey: 'portfolio.projects.service.result',
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  return (
    <section id="portfolio" className="section-padding bg-secondary/30">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-4">
            {t('portfolio.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('portfolio.title')} <span className="text-gradient">{t('portfolio.titleHighlight')}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('portfolio.subtitle')}
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
            >
              {/* Project Image Placeholder */}
              <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <project.icon size={64} className="text-white/30" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                  {t(project.categoryKey)}
                </span>
                <h3 className="text-xl font-bold text-foreground mt-2 mb-3">{t(project.titleKey)}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {t('portfolio.result')} <span className="font-semibold text-foreground">{t(project.resultKey)}</span>
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
                >
                  {t('portfolio.requestSimilar')}
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
