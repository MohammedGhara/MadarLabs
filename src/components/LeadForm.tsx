import { useState } from 'react';
import { Send, CheckCircle2, Mail, MapPin, Sparkles, User, Briefcase, MessageCircle, FileText } from 'lucide-react';
import ScrollRevealSection, { ScrollReveal } from './ScrollRevealSection';
import { z } from 'zod';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { submitLead } from '@/api/leads';
import { config, getWhatsAppLink } from '@/lib/config';

const LeadForm = () => {
  const { t: tRaw, dir } = useLanguage();
  /** String leaf values only — do not use for keys that resolve to arrays/objects (e.g. leadForm.services). */
  const t = (key: string) => {
    const v = tRaw(key);
    if (typeof v === 'string' || typeof v === 'number' || typeof v === 'boolean') return String(v);
    return '';
  };
  const { toast } = useToast();

  const serviceOptions: string[] = Array.isArray(tRaw('leadForm.services'))
    ? (tRaw('leadForm.services') as string[])
    : [];
  const budgetOptions: string[] = Array.isArray(tRaw('leadForm.budgetRanges'))
    ? (tRaw('leadForm.budgetRanges') as string[])
    : [];

  const leadFormSchema = z.object({
    fullName: z.string().trim().min(2, t('leadForm.errors.nameRequired')).max(100),
    email: z
      .string()
      .trim()
      .min(1, t('leadForm.errors.emailRequired'))
      .email({ message: t('leadForm.errors.emailInvalid') }),
    subject: z.string().trim().min(3, t('leadForm.errors.subjectRequired')).max(200),
    businessType: z.string().trim().min(2, t('leadForm.errors.businessTypeRequired')).max(100),
    serviceNeeded: z.string().min(1, t('leadForm.errors.serviceRequired')),
    budgetRange: z.string().min(1, t('leadForm.errors.budgetRequired')),
    whatsappNumber: z.string().trim().min(10, t('leadForm.errors.whatsappRequired')).max(20),
    instagramUsername: z.string().trim().max(50).optional(),
    message: z
      .string()
      .trim()
      .min(10, t('leadForm.errors.messageMin'))
      .max(5000, t('leadForm.errors.messageMax')),
  });

  type LeadFormData = z.infer<typeof leadFormSchema>;

  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    email: '',
    subject: '',
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
    setErrors({});

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

    const payload = {
      fullName: result.data.fullName,
      email: result.data.email,
      subject: result.data.subject,
      businessType: result.data.businessType,
      serviceNeeded: result.data.serviceNeeded,
      budgetRange: result.data.budgetRange,
      whatsappNumber: result.data.whatsappNumber,
      instagramUsername: result.data.instagramUsername || undefined,
      message: result.data.message,
    };

    try {
      await submitLead(payload);
      setIsSubmitted(true);
      setIsSubmitting(false);
      toast({ title: t('leadForm.success.title'), description: t('leadForm.success.message') });
    } catch (err) {
      const fallback = String(t('leadForm.toastGenericError'));
      const raw = err instanceof Error ? err.message : '';
      const isNetwork =
        raw === 'Failed to fetch' ||
        raw.includes('NetworkError') ||
        raw.includes('Load failed');
      const message = isNetwork
        ? String(t('leadForm.toastNetworkError'))
        : raw || fallback;
      toast({
        title: String(t('leadForm.toastError')),
        description: message || fallback,
        variant: 'destructive',
      });
      setIsSubmitting(false);
    }
  };

  const inputBase = `w-full px-4 py-3.5 text-sm rounded-xl border border-border/80 bg-background/80 text-foreground placeholder:text-muted-foreground/65 shadow-sm
    focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary/40 focus:shadow-md transition-all duration-300 ease-out
    ${dir === 'rtl' ? 'text-right' : 'text-left'}`;
  const inputError = 'border-destructive focus:ring-destructive/30 focus:border-destructive';
  const labelBase = `block text-sm font-semibold text-foreground/90 mb-2 ${dir === 'rtl' ? 'text-right' : 'text-left'}`;
  const errorBase = `text-destructive text-sm mt-1 ${dir === 'rtl' ? 'text-right' : 'text-left'}`;

  if (isSubmitted) {
    return (
      <section id="contact" className="section-padding contact-section-bg">
        <div className="container-main relative">
          <div className="max-w-md mx-auto">
            <div className="card-glass p-6 sm:p-8 text-center animate-fade-in-up">
              <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center mx-auto mb-5 shadow-soft">
                <CheckCircle2 className="w-8 h-8 text-primary-foreground" strokeWidth={2.5} />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">{t('leadForm.success.title')}</h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                {t('leadForm.success.message')}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section-padding contact-section-bg">
      <div className="container-main relative">
        <ScrollRevealSection>
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-14">
          <span className="animate-reveal section-badge mb-6 inline-flex items-center gap-2 !normal-case !tracking-normal">
            <Sparkles className="w-4 h-4 opacity-90" />
            {t('leadForm.badge')}
          </span>
          <h2 className="animate-reveal animate-reveal-delay-1 text-2xl sm:text-3xl lg:text-4xl xl:text-[2.75rem] font-bold text-foreground mb-4 tracking-tight text-balance">
            {t('leadForm.title')}{' '}
            <span className="text-gradient">{t('leadForm.titleHighlight')}</span>
          </h2>
          <p className="animate-reveal animate-reveal-delay-2 text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
            {t('leadForm.subtitle')}
          </p>
        </div>

        {/* Form + Contact */}
        <ScrollReveal delay={2} className="mx-auto flex max-w-3xl flex-col gap-6">
          {/* Form Card */}
          <form onSubmit={handleSubmit} className="card-glass flex flex-col overflow-visible p-6 sm:p-8">
            {/* About You */}
            <div className="mb-6">
              <div className={`flex items-center gap-2 mb-4 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center">
                  <User className="w-4 h-4 text-primary" />
                </div>
                <h3 className="text-base font-bold text-foreground">{t('leadForm.sections.aboutYou')}</h3>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="fullName" className={labelBase}>
                      {t('leadForm.fields.fullName')} *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      autoComplete="name"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={`${inputBase} ${errors.fullName ? inputError : 'border-border'}`}
                      placeholder={t('leadForm.fields.fullName')}
                      dir={dir}
                    />
                    {errors.fullName && <p className={errorBase}>{errors.fullName}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className={labelBase}>
                      {t('leadForm.fields.email')} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`${inputBase} ${errors.email ? inputError : 'border-border'}`}
                      placeholder={t('leadForm.fields.emailPlaceholder')}
                      dir="ltr"
                    />
                    {errors.email && <p className={errorBase}>{errors.email}</p>}
                  </div>
                </div>
                <div>
                  <label htmlFor="businessType" className={labelBase}>
                    {t('leadForm.fields.businessType')} *
                  </label>
                  <input
                    type="text"
                    id="businessType"
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    className={`${inputBase} ${errors.businessType ? inputError : 'border-border'}`}
                    placeholder={t('leadForm.fields.businessTypePlaceholder')}
                    dir={dir}
                  />
                  {errors.businessType && <p className={errorBase}>{errors.businessType}</p>}
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="mb-6">
              <div className={`flex items-center gap-2 mb-4 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                <div className="w-8 h-8 rounded-xl bg-accent/20 flex items-center justify-center">
                  <Briefcase className="w-4 h-4 text-accent" />
                </div>
                <h3 className="text-base font-bold text-foreground">{t('leadForm.sections.projectDetails')}</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="serviceNeeded" className={labelBase}>{t('leadForm.fields.serviceNeeded')} *</label>
                  <select
                    id="serviceNeeded"
                    name="serviceNeeded"
                    value={formData.serviceNeeded}
                    onChange={handleChange}
                    className={`${inputBase} cursor-pointer appearance-auto ${errors.serviceNeeded ? inputError : 'border-border'}`}
                    dir="ltr"
                  >
                    <option value="">{t('leadForm.fields.selectService')}</option>
                    {serviceOptions.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  {errors.serviceNeeded && <p className={errorBase}>{errors.serviceNeeded}</p>}
                </div>
                <div>
                  <label htmlFor="budgetRange" className={labelBase}>{t('leadForm.fields.budgetRange')} *</label>
                  <select
                    id="budgetRange"
                    name="budgetRange"
                    value={formData.budgetRange}
                    onChange={handleChange}
                    className={`${inputBase} cursor-pointer appearance-auto ${errors.budgetRange ? inputError : 'border-border'}`}
                    dir="ltr"
                  >
                    <option value="">{t('leadForm.fields.selectBudget')}</option>
                    {budgetOptions.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                  {errors.budgetRange && <p className={errorBase}>{errors.budgetRange}</p>}
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mb-6">
              <div className={`flex items-center gap-2 mb-4 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                <div className="w-8 h-8 rounded-xl bg-[#25D366]/20 flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                </div>
                <h3 className="text-base font-bold text-foreground">{t('leadForm.sections.contactInfo')}</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="whatsappNumber" className={labelBase}>{t('leadForm.fields.whatsappNumber')} *</label>
                  <input
                    type="tel"
                    id="whatsappNumber"
                    name="whatsappNumber"
                    value={formData.whatsappNumber}
                    onChange={handleChange}
                    className={`${inputBase} ${errors.whatsappNumber ? inputError : 'border-border'}`}
                    placeholder="+972 52 686 7838"
                    dir="ltr"
                  />
                  {errors.whatsappNumber && <p className={errorBase}>{errors.whatsappNumber}</p>}
                </div>
                <div>
                  <label htmlFor="instagramUsername" className={labelBase}>{t('leadForm.fields.instagramUsername')}</label>
                  <input
                    type="text"
                    id="instagramUsername"
                    name="instagramUsername"
                    value={formData.instagramUsername}
                    onChange={handleChange}
                    className={`${inputBase} border-border`}
                    placeholder="@yourusername"
                    dir="ltr"
                  />
                </div>
              </div>
            </div>

            {/* Subject + message */}
            <div className="mb-6">
              <div className={`flex items-center gap-2 mb-4 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center">
                  <FileText className="w-4 h-4 text-primary" />
                </div>
                <h3 className="text-base font-bold text-foreground">{t('leadForm.sections.yourMessage')}</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <label htmlFor="subject" className={labelBase}>
                    {t('leadForm.fields.subject')} *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`${inputBase} ${errors.subject ? inputError : 'border-border'}`}
                    placeholder={t('leadForm.fields.subjectPlaceholder')}
                    dir={dir}
                  />
                  {errors.subject && <p className={errorBase}>{errors.subject}</p>}
                </div>
                <div>
                  <label htmlFor="message" className={labelBase}>
                    {t('leadForm.fields.message')} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`${inputBase} resize-y min-h-[120px] ${errors.message ? inputError : 'border-border'}`}
                    placeholder={t('leadForm.fields.messagePlaceholder')}
                    dir={dir}
                  />
                  {errors.message && <p className={errorBase}>{errors.message}</p>}
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="mt-auto pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary text-base py-3.5 rounded-xl gap-2 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    {t('leadForm.submitting')}
                  </span>
                ) : (
                  <>
                    {t('leadForm.submit')}
                    <Send className={`w-5 h-5 ${dir === 'rtl' ? 'rotate-180' : ''}`} />
                  </>
                )}
              </button>
              <p className="text-center text-sm text-muted-foreground mt-3">
                {t('leadForm.replyNote')}
              </p>
            </div>
          </form>

          {/* Get in touch directly - below form */}
          <div className="card-glass p-6 sm:p-8">
            <h3 className="text-base font-bold text-foreground mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center">
                <Mail className="w-4 h-4 text-primary" />
              </span>
              {t('leadForm.contactSidebar.getInTouch')}
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 p-4 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 transition-all duration-200 group ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}
              >
                <div className="w-10 h-10 rounded-xl bg-[#25D366]/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#25D366">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-foreground text-sm">{t('leadForm.contactSidebar.whatsapp')}</p>
                  <p className="text-muted-foreground text-sm truncate" dir="ltr">
                    +{config.whatsappNumber.length >= 12 ? `${config.whatsappNumber.slice(0, 3)} ${config.whatsappNumber.slice(3, 5)}-${config.whatsappNumber.slice(5, 8)}-${config.whatsappNumber.slice(8)}` : config.whatsappNumber}
                  </p>
                </div>
              </a>
              <a
                href={config.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-orange-400/10 hover:from-purple-500/20 transition-all duration-200 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-foreground text-sm">{t('leadForm.contactSidebar.instagram')}</p>
                  <p className="text-muted-foreground text-sm truncate">{config.instagramHandle}</p>
                </div>
              </a>
              <a
                href={`mailto:${config.email}`}
                className={`flex items-center gap-3 p-4 rounded-xl bg-primary/10 hover:bg-primary/20 transition-all duration-200 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}
              >
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-foreground text-sm">{t('leadForm.contactSidebar.email')}</p>
                  <p className="text-muted-foreground text-sm truncate break-all">{config.email}</p>
                </div>
              </a>
              <div className={`flex items-center gap-3 p-4 rounded-xl bg-muted/50 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-muted-foreground" />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-foreground text-sm">{t('leadForm.contactSidebar.location')}</p>
                  <p className="text-muted-foreground text-sm truncate">{config.location}</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
        </ScrollRevealSection>
      </div>
    </section>
  );
};

export default LeadForm;
