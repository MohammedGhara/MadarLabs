import { ArrowUpRight, Utensils, Stethoscope, Dumbbell, Home, ShoppingBag, Wrench } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ScrollRevealSection from './ScrollRevealSection';

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
    <section id="portfolio" className="section-padding bg-background">
      <div className="container-main">
        <ScrollRevealSection>
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-20">
          <span className="animate-reveal section-badge mb-6">
            {t('portfolio.badge')}
          </span>
          <h2 className="animate-reveal animate-reveal-delay-1 text-3xl md:text-4xl lg:text-5xl xl:text-[3rem] font-bold text-foreground mb-5 text-balance tracking-tight">
            {t('portfolio.title')} <span className="text-gradient">{t('portfolio.titleHighlight')}</span>
          </h2>
          <p className="animate-reveal animate-reveal-delay-2 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t('portfolio.subtitle')}
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`animate-reveal group bg-card rounded-xl sm:rounded-2xl overflow-hidden shadow-card card-hover-lift border border-border/40 ${
                index < 2 ? 'animate-reveal-delay-2' : index < 4 ? 'animate-reveal-delay-3' : 'animate-reveal-delay-4'
              }`}
            >
              {/* Project Image Placeholder */}
              <div className={`h-28 sm:h-48 bg-gradient-to-br ${project.color} relative overflow-hidden group-hover:brightness-[1.05] transition-[filter] duration-500`}>
                <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                  <project.icon className="w-10 h-10 sm:w-16 sm:h-16 text-white/35 drop-shadow-sm" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-white/5" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-white/10 to-transparent" />
              </div>

              {/* Project Info */}
              <div className="p-3 sm:p-6">
                <span className="text-[10px] sm:text-xs font-semibold text-primary uppercase tracking-wider">
                  {t(project.categoryKey)}
                </span>
                <h3 className="text-sm sm:text-xl font-bold text-foreground mt-1 sm:mt-2 mb-1 sm:mb-3">{t(project.titleKey)}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-4">
                  {t('portfolio.result')} <span className="font-semibold text-foreground">{t(project.resultKey)}</span>
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 sm:gap-2 text-primary font-semibold text-xs sm:text-sm hover:gap-2 sm:hover:gap-3 transition-all"
                >
                  {t('portfolio.requestSimilar')}
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
        </ScrollRevealSection>
      </div>
    </section>
  );
};

export default Portfolio;
