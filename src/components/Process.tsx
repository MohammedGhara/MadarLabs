import { Phone, PenTool, Code, Gauge, Rocket, Clock } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: Phone,
      number: '01',
      title: 'Discovery Call',
      description: 'We discuss your goals, requirements, and vision for the project.',
    },
    {
      icon: PenTool,
      number: '02',
      title: 'Design',
      description: 'Creating wireframes and visual designs tailored to your brand.',
    },
    {
      icon: Code,
      number: '03',
      title: 'Build',
      description: 'Developing your solution with clean, scalable code.',
    },
    {
      icon: Gauge,
      number: '04',
      title: 'Optimize',
      description: 'Testing, refining, and ensuring peak performance.',
    },
    {
      icon: Rocket,
      number: '05',
      title: 'Launch & Support',
      description: 'Going live with ongoing maintenance and support.',
    },
  ];

  const timelines = [
    { type: 'Website', duration: '7–14 days' },
    { type: 'E-commerce', duration: '14–30 days' },
    { type: 'App MVP', duration: '30–60 days' },
  ];

  return (
    <section id="process" className="section-padding bg-background">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-4">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            From idea to <span className="text-gradient">launch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A proven 5-step process designed to deliver results efficiently.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary opacity-20" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="card-premium text-center h-full">
                  {/* Number Badge */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                    <span className="text-xs font-bold text-primary-foreground">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 mt-4">
                    <step.icon size={28} className="text-primary" />
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Estimates */}
        <div className="mt-16">
          <div className="card-premium bg-gradient-primary p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <Clock size={24} className="text-primary-foreground" />
              <h3 className="text-xl font-bold text-primary-foreground">Typical Timelines</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {timelines.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-5 text-center"
                >
                  <p className="text-primary-foreground/80 text-sm mb-1">{item.type}</p>
                  <p className="text-2xl font-bold text-primary-foreground">{item.duration}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
