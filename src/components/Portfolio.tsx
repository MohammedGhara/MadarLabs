import { ArrowUpRight, Utensils, Stethoscope, Dumbbell, Home, ShoppingBag, Wrench } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      icon: Utensils,
      title: 'Restaurant Ordering Site',
      category: 'Food & Beverage',
      result: '40% increase in online orders',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Stethoscope,
      title: 'Clinic Booking System',
      category: 'Healthcare',
      result: '60% reduction in no-shows',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      icon: Dumbbell,
      title: 'Fitness Gym App',
      category: 'Health & Fitness',
      result: '3x member engagement',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Home,
      title: 'Real Estate Lead Funnel',
      category: 'Real Estate',
      result: '150+ qualified leads/month',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: ShoppingBag,
      title: 'E-Commerce Store',
      category: 'Retail',
      result: '$50K+ monthly revenue',
      color: 'from-amber-500 to-orange-500',
    },
    {
      icon: Wrench,
      title: 'Service Business Site',
      category: 'Professional Services',
      result: '5x more inquiries',
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  return (
    <section id="portfolio" className="section-padding bg-secondary/30">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-4">
            Our Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Projects that <span className="text-gradient">deliver results</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how we've helped businesses like yours grow with custom digital solutions.
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
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-foreground mt-2 mb-3">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Result: <span className="font-semibold text-foreground">{project.result}</span>
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
                >
                  Request a similar project
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
