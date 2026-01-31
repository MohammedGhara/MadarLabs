import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: 'How long does it take to complete a project?',
      answer:
        'Timelines vary based on project complexity. A standard website takes 7-14 days, e-commerce stores 14-30 days, and custom apps/systems 30-60 days. We provide exact timelines after understanding your requirements.',
    },
    {
      question: 'What if I want changes or redesigns during the project?',
      answer:
        'We include revision rounds in our packages. Minor tweaks are always welcome during development. Major scope changes may require timeline adjustments, which we discuss transparently.',
    },
    {
      question: 'Do you provide hosting and domain services?',
      answer:
        'Yes! We can set up and manage hosting for you, or work with your existing hosting provider. We also assist with domain registration and DNS configuration.',
    },
    {
      question: 'What are the payment terms?',
      answer:
        'We typically require 50% upfront to begin work, with the remaining 50% due upon project completion. For larger projects, we can arrange milestone-based payments.',
    },
    {
      question: 'Do you offer ongoing maintenance and support?',
      answer:
        'Absolutely. All packages include a support period (1-6 months depending on the package). After that, we offer affordable monthly maintenance plans to keep your site updated and secure.',
    },
    {
      question: 'What information do you need to get started?',
      answer:
        'We need your business goals, target audience info, brand guidelines (if available), content/images, and examples of websites you like. We guide you through everything in our discovery call.',
    },
  ];

  return (
    <section id="faq" className="section-padding bg-secondary/30">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Frequently asked <span className="text-gradient">questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers. If you don't see yours here, just ask!
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-2xl border border-border/50 px-6 shadow-card overflow-hidden"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
