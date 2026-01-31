import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { z } from 'zod';

const leadFormSchema = z.object({
  fullName: z.string().trim().min(2, 'Name is required').max(100),
  businessType: z.string().trim().min(2, 'Business type is required').max(100),
  serviceNeeded: z.string().min(1, 'Please select a service'),
  budgetRange: z.string().min(1, 'Please select a budget range'),
  whatsappNumber: z.string().trim().min(10, 'Valid WhatsApp number required').max(20),
  instagramUsername: z.string().trim().max(50).optional(),
  message: z.string().trim().max(500).optional(),
});

type LeadFormData = z.infer<typeof leadFormSchema>;

const LeadForm = () => {
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    businessType: '',
    serviceNeeded: '',
    budgetRange: '',
    whatsappNumber: '',
    instagramUsername: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof LeadFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof LeadFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const result = leadFormSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof LeadFormData, string>> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof LeadFormData] = err.message;
        }
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }

    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const services = [
    'Business Website',
    'E-Commerce Store',
    'Mobile App',
    'Booking/Ordering System',
    'Admin Dashboard/CRM',
    'Branding & UI/UX',
    'Other',
  ];

  const budgetRanges = [
    'Under $1,500',
    '$1,500 - $3,500',
    '$3,500 - $8,000',
    '$8,000 - $15,000',
    '$15,000+',
    'Not sure yet',
  ];

  if (isSubmitted) {
    return (
      <section id="contact" className="section-padding bg-background">
        <div className="container-main">
          <div className="max-w-2xl mx-auto">
            <div className="card-premium text-center py-16">
              <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={40} className="text-primary-foreground" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Message Sent!</h2>
              <p className="text-lg text-muted-foreground">
                Thank you for reaching out. We'll reply within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-4">
            Get Started
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Let's build something <span className="text-gradient">amazing</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tell us about your project and we'll get back to you within 24 hours with a free
            consultation.
          </p>
        </div>

        {/* Form */}
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="card-premium">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="md:col-span-2">
                <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${
                    errors.fullName ? 'border-destructive' : 'border-border'
                  }`}
                  placeholder="Your full name"
                />
                {errors.fullName && (
                  <p className="text-destructive text-sm mt-1">{errors.fullName}</p>
                )}
              </div>

              {/* Business Type */}
              <div className="md:col-span-2">
                <label htmlFor="businessType" className="block text-sm font-medium text-foreground mb-2">
                  Business Type *
                </label>
                <input
                  type="text"
                  id="businessType"
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${
                    errors.businessType ? 'border-destructive' : 'border-border'
                  }`}
                  placeholder="e.g., Restaurant, Gym, Clinic, E-commerce..."
                />
                {errors.businessType && (
                  <p className="text-destructive text-sm mt-1">{errors.businessType}</p>
                )}
              </div>

              {/* Service Needed */}
              <div>
                <label htmlFor="serviceNeeded" className="block text-sm font-medium text-foreground mb-2">
                  Service Needed *
                </label>
                <select
                  id="serviceNeeded"
                  name="serviceNeeded"
                  value={formData.serviceNeeded}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${
                    errors.serviceNeeded ? 'border-destructive' : 'border-border'
                  }`}
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                {errors.serviceNeeded && (
                  <p className="text-destructive text-sm mt-1">{errors.serviceNeeded}</p>
                )}
              </div>

              {/* Budget Range */}
              <div>
                <label htmlFor="budgetRange" className="block text-sm font-medium text-foreground mb-2">
                  Budget Range *
                </label>
                <select
                  id="budgetRange"
                  name="budgetRange"
                  value={formData.budgetRange}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${
                    errors.budgetRange ? 'border-destructive' : 'border-border'
                  }`}
                >
                  <option value="">Select your budget</option>
                  {budgetRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
                {errors.budgetRange && (
                  <p className="text-destructive text-sm mt-1">{errors.budgetRange}</p>
                )}
              </div>

              {/* WhatsApp Number */}
              <div>
                <label htmlFor="whatsappNumber" className="block text-sm font-medium text-foreground mb-2">
                  WhatsApp Number *
                </label>
                <input
                  type="tel"
                  id="whatsappNumber"
                  name="whatsappNumber"
                  value={formData.whatsappNumber}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${
                    errors.whatsappNumber ? 'border-destructive' : 'border-border'
                  }`}
                  placeholder="+972 50 123 4567"
                />
                {errors.whatsappNumber && (
                  <p className="text-destructive text-sm mt-1">{errors.whatsappNumber}</p>
                )}
              </div>

              {/* Instagram Username */}
              <div>
                <label htmlFor="instagramUsername" className="block text-sm font-medium text-foreground mb-2">
                  Instagram Username (optional)
                </label>
                <input
                  type="text"
                  id="instagramUsername"
                  name="instagramUsername"
                  value={formData.instagramUsername}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="@yourusername"
                />
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message (optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  placeholder="Tell us more about your project..."
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary text-lg py-4 mt-8 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                'Sending...'
              ) : (
                <>
                  Send & Get My Plan
                  <Send size={20} />
                </>
              )}
            </button>

            <p className="text-center text-sm text-muted-foreground mt-4">
              We'll reply within 24 hours. No spam, ever.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
