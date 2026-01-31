import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { z } from 'zod';
import { useLanguage } from '@/contexts/LanguageContext';

const LeadForm = () => {
  const { t, dir } = useLanguage();
  
  const leadFormSchema = z.object({
    fullName: z.string().trim().min(2, t('leadForm.errors.nameRequired')).max(100),
    businessType: z.string().trim().min(2, t('leadForm.errors.businessTypeRequired')).max(100),
    serviceNeeded: z.string().min(1, t('leadForm.errors.serviceRequired')),
    budgetRange: z.string().min(1, t('leadForm.errors.budgetRequired')),
    whatsappNumber: z.string().trim().min(10, t('leadForm.errors.whatsappRequired')).max(20),
    instagramUsername: z.string().trim().max(50).optional(),
    message: z.string().trim().max(500).optional(),
  });

  type LeadFormData = z.infer<typeof leadFormSchema>;

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

  const services = t('leadForm.services') as unknown as string[];
  const budgetRanges = t('leadForm.budgetRanges') as unknown as string[];

  if (isSubmitted) {
    return (
      <section id="contact" className="section-padding bg-background">
        <div className="container-main">
          <div className="max-w-2xl mx-auto">
            <div className="card-premium text-center py-16">
              <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={40} className="text-primary-foreground" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">{t('leadForm.success.title')}</h2>
              <p className="text-lg text-muted-foreground">
                {t('leadForm.success.message')}
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
            {t('leadForm.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('leadForm.title')} <span className="text-gradient">{t('leadForm.titleHighlight')}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('leadForm.subtitle')}
          </p>
        </div>

        {/* Form */}
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="card-premium">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="md:col-span-2">
                <label htmlFor="fullName" className={`block text-sm font-medium text-foreground mb-2 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
                  {t('leadForm.fields.fullName')} *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${
                    errors.fullName ? 'border-destructive' : 'border-border'
                  } ${dir === 'rtl' ? 'text-right' : 'text-left'}`}
                  placeholder={t('leadForm.fields.fullName')}
                  dir={dir}
                />
                {errors.fullName && (
                  <p className={`text-destructive text-sm mt-1 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>{errors.fullName}</p>
                )}
              </div>

              {/* Business Type */}
              <div className="md:col-span-2">
                <label htmlFor="businessType" className={`block text-sm font-medium text-foreground mb-2 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
                  {t('leadForm.fields.businessType')} *
                </label>
                <input
                  type="text"
                  id="businessType"
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${
                    errors.businessType ? 'border-destructive' : 'border-border'
                  } ${dir === 'rtl' ? 'text-right' : 'text-left'}`}
                  placeholder={t('leadForm.fields.businessTypePlaceholder')}
                  dir={dir}
                />
                {errors.businessType && (
                  <p className={`text-destructive text-sm mt-1 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>{errors.businessType}</p>
                )}
              </div>

              {/* Service Needed */}
              <div>
                <label htmlFor="serviceNeeded" className={`block text-sm font-medium text-foreground mb-2 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
                  {t('leadForm.fields.serviceNeeded')} *
                </label>
                <select
                  id="serviceNeeded"
                  name="serviceNeeded"
                  value={formData.serviceNeeded}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${
                    errors.serviceNeeded ? 'border-destructive' : 'border-border'
                  } ${dir === 'rtl' ? 'text-right' : 'text-left'}`}
                  dir={dir}
                >
                  <option value="">{t('leadForm.fields.selectService')}</option>
                  {Array.isArray(services) && services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                {errors.serviceNeeded && (
                  <p className={`text-destructive text-sm mt-1 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>{errors.serviceNeeded}</p>
                )}
              </div>

              {/* Budget Range */}
              <div>
                <label htmlFor="budgetRange" className={`block text-sm font-medium text-foreground mb-2 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
                  {t('leadForm.fields.budgetRange')} *
                </label>
                <select
                  id="budgetRange"
                  name="budgetRange"
                  value={formData.budgetRange}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${
                    errors.budgetRange ? 'border-destructive' : 'border-border'
                  } ${dir === 'rtl' ? 'text-right' : 'text-left'}`}
                  dir={dir}
                >
                  <option value="">{t('leadForm.fields.selectBudget')}</option>
                  {Array.isArray(budgetRanges) && budgetRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
                {errors.budgetRange && (
                  <p className={`text-destructive text-sm mt-1 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>{errors.budgetRange}</p>
                )}
              </div>

              {/* WhatsApp Number */}
              <div>
                <label htmlFor="whatsappNumber" className={`block text-sm font-medium text-foreground mb-2 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
                  {t('leadForm.fields.whatsappNumber')} *
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
                  dir="ltr"
                />
                {errors.whatsappNumber && (
                  <p className={`text-destructive text-sm mt-1 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>{errors.whatsappNumber}</p>
                )}
              </div>

              {/* Instagram Username */}
              <div>
                <label htmlFor="instagramUsername" className={`block text-sm font-medium text-foreground mb-2 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
                  {t('leadForm.fields.instagramUsername')}
                </label>
                <input
                  type="text"
                  id="instagramUsername"
                  name="instagramUsername"
                  value={formData.instagramUsername}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="@yourusername"
                  dir="ltr"
                />
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <label htmlFor="message" className={`block text-sm font-medium text-foreground mb-2 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
                  {t('leadForm.fields.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none ${dir === 'rtl' ? 'text-right' : 'text-left'}`}
                  placeholder={t('leadForm.fields.messagePlaceholder')}
                  dir={dir}
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
                t('leadForm.submitting')
              ) : (
                <>
                  {t('leadForm.submit')}
                  <Send size={20} className={dir === 'rtl' ? 'rotate-180' : ''} />
                </>
              )}
            </button>

            <p className="text-center text-sm text-muted-foreground mt-4">
              {t('leadForm.replyNote')}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
