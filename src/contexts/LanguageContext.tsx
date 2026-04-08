import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'ar' | 'he';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('preferred-language');
    return (saved as Language) || 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('preferred-language', lang);
  };

  const dir = language === 'en' ? 'ltr' : 'rtl';

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
  }, [language, dir]);

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translations: Record<Language, Record<string, any>> = {
  en: {
    nav: {
      services: 'Services',
      portfolio: 'Portfolio',
      process: 'Process',
      pricing: 'Pricing',
      reviews: 'Reviews',
      faq: 'FAQ',
      contact: 'Contact',
      getConsultation: 'Get Free Consultation',
    },
    hero: {
      badge: 'Trusted by 50+ businesses',
      headline: 'MadarLabs builds apps & websites that',
      headlineHighlight: 'grow your business.',
      subheadline: 'From idea to launch — fast, clean, and built to convert customers.',
      cta: 'Get a Free Consultation',
      ctaSecondary: 'See Our Work',
      trustBadges: {
        fastDelivery: 'Fast Delivery',
        businessFocused: 'Business-Focused',
        cleanUI: 'Clean UI/UX',
      },
      instagramNote: 'From Instagram?',
      instagramNoteText: "Tell us your business + budget — we reply within 24 hours.",
    },
    services: {
      badge: 'Our Services',
      title: 'Everything you need to',
      titleHighlight: 'succeed online',
      subtitle: 'From websites to mobile apps, we build digital solutions that drive real business results.',
      items: {
        websites: {
          title: 'Business Websites',
          description: 'Turn visitors into leads with stunning, conversion-optimized websites.',
        },
        ecommerce: {
          title: 'E-Commerce Stores',
          description: 'Sell online easily with beautiful, secure shopping experiences.',
        },
        mobile: {
          title: 'Mobile Apps',
          description: 'iOS & Android solutions that your customers will love.',
        },
        booking: {
          title: 'Booking & Ordering',
          description: 'Automate client bookings and orders with smart systems.',
        },
        dashboard: {
          title: 'Admin Dashboard & CRM',
          description: 'Manage your business efficiently with custom dashboards.',
        },
        branding: {
          title: 'Branding & UI/UX',
          description: 'Premium visual identity that sets you apart from competition.',
        },
      },
    },
    portfolio: {
      badge: 'Our Work',
      stripLabel: 'Selected work',
      title: 'Projects that',
      titleHighlight: 'deliver results',
      subtitle: "See how we've helped businesses like yours grow with custom digital solutions.",
      requestSimilar: 'Request a similar project',
      result: 'Result:',
      projects: {
        restaurant: {
          title: 'Restaurant Ordering Site',
          category: 'Food & Beverage',
          description:
            'Custom ordering flow with menu highlights, upsells, and a delivery-ready checkout experience.',
          result: '40% increase in online orders',
        },
        clinic: {
          title: 'Clinic Booking System',
          category: 'Healthcare',
          description:
            'Online booking, automated reminders, and calendar sync to reduce missed appointments.',
          result: '60% reduction in no-shows',
        },
        gym: {
          title: 'Fitness Gym App',
          category: 'Health & Fitness',
          description:
            'Member hub with schedules, progress tracking, and engagement tools members actually use.',
          result: '3x member engagement',
        },
        realEstate: {
          title: 'Real Estate Lead Funnel',
          category: 'Real Estate',
          description:
            'Lead capture and qualification tuned for property inquiries and faster follow-up.',
          result: '150+ qualified leads/month',
        },
        ecommerce: {
          title: 'E-Commerce Store',
          category: 'Retail',
          description:
            'Fast catalog and checkout with a conversion-first shopping experience across devices.',
          result: '3x sales growth',
        },
        service: {
          title: 'Service Business Site',
          category: 'Professional Services',
          description:
            'Clear service tiers, social proof, and frictionless contact paths that drive inquiries.',
          result: '5x more inquiries',
        },
      },
    },
    process: {
      badge: 'Our Process',
      title: 'From idea to',
      titleHighlight: 'launch',
      subtitle: 'A proven 5-step process designed to deliver results efficiently.',
      timelines: 'Typical Timelines',
      steps: {
        discovery: {
          title: 'Discovery Call',
          description: 'We discuss your goals, requirements, and vision for the project.',
        },
        design: {
          title: 'Design',
          description: 'Creating wireframes and visual designs tailored to your brand.',
        },
        build: {
          title: 'Build',
          description: 'Developing your solution with clean, scalable code.',
        },
        optimize: {
          title: 'Optimize',
          description: 'Testing, refining, and ensuring peak performance.',
        },
        launch: {
          title: 'Launch & Support',
          description: 'Going live with ongoing maintenance and support.',
        },
      },
      timelineItems: {
        website: 'Website',
        ecommerce: 'E-commerce',
        appMvp: 'App MVP',
      },
    },
    pricing: {
      badge: 'Pricing',
      title: 'Transparent',
      titleHighlight: 'pricing',
      subtitle: 'Investment packages designed to deliver maximum value for your budget.',
      startingAt: 'starting at',
      getStarted: 'Get Started',
      mostPopular: 'MOST POPULAR',
      customQuote: 'Need something different? We create custom solutions for unique requirements.',
      requestQuote: 'Request Custom Quote',
      plans: {
        starter: {
          name: 'Starter Website',
          description: 'Perfect for small businesses getting started online.',
          features: [
            'Up to 5 pages',
            'Mobile responsive design',
            'Contact form integration',
            'Basic SEO setup',
            '1 month support',
          ],
        },
        business: {
          name: 'Business Pro',
          description: 'For growing businesses that need more features.',
          features: [
            'Up to 15 pages',
            'Custom design & branding',
            'CMS integration',
            'Advanced SEO & analytics',
            'Booking/payment integration',
            '3 months support',
          ],
        },
        custom: {
          name: 'Custom App/System',
          description: 'Full-scale custom solutions for unique needs.',
          features: [
            'Custom web or mobile app',
            'Database & backend',
            'Admin dashboard',
            'Third-party integrations',
            'Scalable architecture',
            '6 months support',
          ],
        },
      },
    },
    testimonials: {
      badge: 'Testimonials',
      title: 'What our clients',
      titleHighlight: 'say',
      subtitle: "Don't just take our word for it — hear from businesses we've helped succeed.",
    },
    faq: {
      badge: 'FAQ',
      title: 'Frequently asked',
      titleHighlight: 'questions',
      subtitle: "Got questions? We've got answers. If you don't see yours here, just ask!",
      items: [
        {
          question: 'How long does it take to complete a project?',
          answer: 'Timelines vary based on project complexity. A standard website takes 7-14 days, e-commerce stores 14-30 days, and custom apps/systems 30-60 days. We provide exact timelines after understanding your requirements.',
        },
        {
          question: 'What if I want changes or redesigns during the project?',
          answer: 'We include revision rounds in our packages. Minor tweaks are always welcome during development. Major scope changes may require timeline adjustments, which we discuss transparently.',
        },
        {
          question: 'Do you provide hosting and domain services?',
          answer: 'Yes! We can set up and manage hosting for you, or work with your existing hosting provider. We also assist with domain registration and DNS configuration.',
        },
        {
          question: 'What are the payment terms?',
          answer: 'We typically require 50% upfront to begin work, with the remaining 50% due upon project completion. For larger projects, we can arrange milestone-based payments.',
        },
        {
          question: 'Do you offer ongoing maintenance and support?',
          answer: 'Absolutely. All packages include a support period (1-6 months depending on the package). After that, we offer affordable monthly maintenance plans to keep your site updated and secure.',
        },
        {
          question: 'What information do you need to get started?',
          answer: "We need your business goals, target audience info, brand guidelines (if available), content/images, and examples of websites you like. We guide you through everything in our discovery call.",
        },
      ],
    },
    leadForm: {
      badge: 'Get Started',
      title: "Let's build something",
      titleHighlight: 'amazing',
      subtitle: "Tell us about your project and we'll get back to you within 24 hours with a free consultation.",
      sections: {
        aboutYou: 'About You',
        projectDetails: 'Project Details',
        contactInfo: 'Contact Info',
      },
      fields: {
        fullName: 'Full Name',
        businessType: 'Business Type',
        businessTypePlaceholder: 'e.g., Restaurant, Gym, Clinic, E-commerce...',
        serviceNeeded: 'Service Needed',
        selectService: 'Select a service',
        budgetRange: 'Budget Range',
        selectBudget: 'Select your budget',
        whatsappNumber: 'WhatsApp Number',
        instagramUsername: 'Instagram Username (optional)',
        message: 'Message (optional)',
        messagePlaceholder: 'Tell us more about your project...',
      },
      services: [
        'Business Website',
        'E-Commerce Store',
        'Mobile App',
        'Booking/Ordering System',
        'Admin Dashboard/CRM',
        'Branding & UI/UX',
        'Other',
      ],
      budgetRanges: [
        'Under ₪6,000',
        '₪6,000 - ₪13,000',
        '₪13,000 - ₪30,000',
        '₪30,000 - ₪55,000',
        '₪55,000+',
        'Not sure yet',
      ],
      submit: 'Send & Get My Plan',
      submitting: 'Sending...',
      replyNote: "We'll reply within 24 hours. No spam, ever.",
      contactSidebar: {
        getInTouch: 'Get in touch directly',
        preferToChat: 'Prefer to chat?',
        chatDescription: 'Skip the form and message us directly on WhatsApp for the fastest response.',
        chatOnWhatsApp: 'Chat on WhatsApp',
        whatsapp: 'WhatsApp',
        email: 'Email',
        instagram: 'Instagram',
        location: 'Location',
      },
      success: {
        title: 'Message Sent!',
        message: "Thank you for reaching out. We'll reply within 24 hours.",
      },
      errors: {
        nameRequired: 'Name is required',
        businessTypeRequired: 'Business type is required',
        serviceRequired: 'Please select a service',
        budgetRequired: 'Please select a budget range',
        whatsappRequired: 'Valid WhatsApp number required',
      },
    },
    footer: {
      description: 'We build apps & websites that grow your business. From idea to launch — fast, clean, and built to convert customers.',
      quickLinks: 'Quick Links',
      contact: 'Contact',
      copyright: '© {year} MadarLabs. All rights reserved.',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
    },
  },
  ar: {
    nav: {
      services: 'الخدمات',
      portfolio: 'أعمالنا',
      process: 'العملية',
      pricing: 'الأسعار',
      reviews: 'التقييمات',
      faq: 'الأسئلة الشائعة',
      contact: 'اتصل بنا',
      getConsultation: 'احصل على استشارة مجانية',
    },
    hero: {
      badge: 'موثوق من 50+ شركة',
      headline: 'MadarLabs تبني تطبيقات ومواقع',
      headlineHighlight: 'تنمّي عملك.',
      subheadline: 'من الفكرة إلى الإطلاق — سريع، نظيف، ومصمم لتحويل العملاء.',
      cta: 'احصل على استشارة مجانية',
      ctaSecondary: 'شاهد أعمالنا',
      trustBadges: {
        fastDelivery: 'تسليم سريع',
        businessFocused: 'تركيز على الأعمال',
        cleanUI: 'واجهة نظيفة',
      },
      instagramNote: 'من إنستغرام؟',
      instagramNoteText: 'أخبرنا عن عملك وميزانيتك — نرد خلال 24 ساعة.',
    },
    services: {
      badge: 'خدماتنا',
      title: 'كل ما تحتاجه',
      titleHighlight: 'للنجاح عبر الإنترنت',
      subtitle: 'من المواقع إلى التطبيقات، نبني حلولاً رقمية تحقق نتائج حقيقية.',
      items: {
        websites: {
          title: 'مواقع الأعمال',
          description: 'حوّل الزوار إلى عملاء محتملين مع مواقع مذهلة ومحسنة للتحويل.',
        },
        ecommerce: {
          title: 'متاجر إلكترونية',
          description: 'بيع عبر الإنترنت بسهولة مع تجارب تسوق جميلة وآمنة.',
        },
        mobile: {
          title: 'تطبيقات الجوال',
          description: 'حلول iOS و Android سيحبها عملاؤك.',
        },
        booking: {
          title: 'أنظمة الحجز والطلب',
          description: 'أتمتة حجوزات وطلبات العملاء بأنظمة ذكية.',
        },
        dashboard: {
          title: 'لوحات التحكم وإدارة العملاء',
          description: 'أدر عملك بكفاءة مع لوحات تحكم مخصصة.',
        },
        branding: {
          title: 'الهوية البصرية والتصميم',
          description: 'هوية بصرية مميزة تميزك عن المنافسين.',
        },
      },
    },
    portfolio: {
      badge: 'أعمالنا',
      stripLabel: 'أعمال مختارة',
      title: 'مشاريع تحقق',
      titleHighlight: 'نتائج',
      subtitle: 'شاهد كيف ساعدنا شركات مثل شركتك على النمو بحلول رقمية مخصصة.',
      requestSimilar: 'اطلب مشروعاً مشابهاً',
      result: 'النتيجة:',
      projects: {
        restaurant: {
          title: 'موقع طلبات المطعم',
          category: 'الطعام والمشروبات',
          description:
            'تجربة طلب مخصصة مع عرض القائمة والعروض الإضافية ودفع جاهز للتوصيل.',
          result: '40% زيادة في الطلبات',
        },
        clinic: {
          title: 'نظام حجز العيادة',
          category: 'الرعاية الصحية',
          description:
            'حجز عبر الإنترنت، تذكيرات تلقائية، ومزامنة التقويم لتقليل الغياب.',
          result: '60% تقليل في عدم الحضور',
        },
        gym: {
          title: 'تطبيق صالة الرياضة',
          category: 'الصحة واللياقة',
          description:
            'مركز للأعضاء مع الجداول وتتبع التقدم وأدوات تفاعل فعّالة.',
          result: '3x تفاعل الأعضاء',
        },
        realEstate: {
          title: 'قمع العقارات',
          category: 'العقارات',
          description:
            'جذب وتأهيل العملاء المحتملين مع متابعة أسرع لاستفسارات العقارات.',
          result: '150+ عميل محتمل شهرياً',
        },
        ecommerce: {
          title: 'متجر إلكتروني',
          category: 'التجزئة',
          description:
            'كتالوج سريع ودفع سلس مع تجربة تسوق تركز على التحويل.',
          result: 'نمو المبيعات 3x',
        },
        service: {
          title: 'موقع خدمات',
          category: 'الخدمات المهنية',
          description:
            'عرض خدمات واضح، إثبات اجتماعي، ومسارات تواصل سلسة تزيد الاستفسارات.',
          result: '5x استفسارات أكثر',
        },
      },
    },
    process: {
      badge: 'عمليتنا',
      title: 'من الفكرة إلى',
      titleHighlight: 'الإطلاق',
      subtitle: 'عملية من 5 خطوات مصممة لتحقيق النتائج بكفاءة.',
      timelines: 'الجداول الزمنية المعتادة',
      steps: {
        discovery: {
          title: 'مكالمة الاكتشاف',
          description: 'نناقش أهدافك ومتطلباتك ورؤيتك للمشروع.',
        },
        design: {
          title: 'التصميم',
          description: 'إنشاء تصاميم مرئية مخصصة لعلامتك التجارية.',
        },
        build: {
          title: 'التطوير',
          description: 'تطوير حلك بكود نظيف وقابل للتوسع.',
        },
        optimize: {
          title: 'التحسين',
          description: 'اختبار وتحسين وضمان أفضل أداء.',
        },
        launch: {
          title: 'الإطلاق والدعم',
          description: 'الانطلاق مع صيانة ودعم مستمر.',
        },
      },
      timelineItems: {
        website: 'موقع ويب',
        ecommerce: 'متجر إلكتروني',
        appMvp: 'MVP تطبيق',
      },
    },
    pricing: {
      badge: 'الأسعار',
      title: 'أسعار',
      titleHighlight: 'شفافة',
      subtitle: 'باقات استثمار مصممة لتحقيق أقصى قيمة لميزانيتك.',
      startingAt: 'تبدأ من',
      getStarted: 'ابدأ الآن',
      mostPopular: 'الأكثر شيوعاً',
      customQuote: 'تحتاج شيئاً مختلفاً؟ ننشئ حلولاً مخصصة لاحتياجاتك الفريدة.',
      requestQuote: 'اطلب عرض سعر مخصص',
      plans: {
        starter: {
          name: 'موقع مبتدئ',
          description: 'مثالي للشركات الصغيرة التي تبدأ عبر الإنترنت.',
          features: [
            'حتى 5 صفحات',
            'تصميم متجاوب للجوال',
            'نموذج اتصال',
            'إعداد SEO أساسي',
            'شهر دعم واحد',
          ],
        },
        business: {
          name: 'الأعمال المتقدم',
          description: 'للشركات النامية التي تحتاج ميزات أكثر.',
          features: [
            'حتى 15 صفحة',
            'تصميم وهوية مخصصة',
            'نظام إدارة المحتوى',
            'SEO وتحليلات متقدمة',
            'نظام حجز/دفع',
            '3 أشهر دعم',
          ],
        },
        custom: {
          name: 'تطبيق/نظام مخصص',
          description: 'حلول مخصصة كاملة للاحتياجات الفريدة.',
          features: [
            'تطبيق ويب أو جوال مخصص',
            'قاعدة بيانات وخلفية',
            'لوحة تحكم إدارية',
            'تكاملات خارجية',
            'هيكلية قابلة للتوسع',
            '6 أشهر دعم',
          ],
        },
      },
    },
    testimonials: {
      badge: 'شهادات العملاء',
      title: 'ماذا يقول',
      titleHighlight: 'عملاؤنا',
      subtitle: 'لا تأخذ كلامنا فقط — اسمع من الشركات التي ساعدناها على النجاح.',
    },
    faq: {
      badge: 'الأسئلة الشائعة',
      title: 'الأسئلة',
      titleHighlight: 'المتكررة',
      subtitle: 'عندك أسئلة؟ عندنا إجابات. إذا لم تجد سؤالك هنا، اسألنا!',
      items: [
        {
          question: 'كم يستغرق إكمال المشروع؟',
          answer: 'تختلف الجداول الزمنية حسب تعقيد المشروع. موقع عادي يستغرق 7-14 يوم، متاجر إلكترونية 14-30 يوم، وتطبيقات/أنظمة مخصصة 30-60 يوم. نوفر جداول دقيقة بعد فهم متطلباتك.',
        },
        {
          question: 'ماذا لو أردت تغييرات أثناء المشروع؟',
          answer: 'نشمل جولات مراجعة في باقاتنا. التعديلات الصغيرة مرحب بها دائماً. التغييرات الكبيرة قد تحتاج تعديل الجدول الزمني، نناقشها بشفافية.',
        },
        {
          question: 'هل توفرون خدمات الاستضافة والدومين؟',
          answer: 'نعم! نستطيع إعداد وإدارة الاستضافة لك، أو العمل مع مزود الاستضافة الحالي. نساعد أيضاً في تسجيل الدومين وإعداد DNS.',
        },
        {
          question: 'ما هي شروط الدفع؟',
          answer: 'نطلب عادة 50% مقدماً لبدء العمل، والـ 50% المتبقية عند إكمال المشروع. للمشاريع الكبيرة، نرتب دفعات حسب المراحل.',
        },
        {
          question: 'هل تقدمون صيانة ودعم مستمر؟',
          answer: 'بالتأكيد. كل الباقات تشمل فترة دعم (1-6 أشهر حسب الباقة). بعدها، نقدم خطط صيانة شهرية بأسعار معقولة.',
        },
        {
          question: 'ما المعلومات المطلوبة للبدء؟',
          answer: 'نحتاج أهداف عملك، معلومات الجمهور المستهدف، دليل العلامة التجارية (إن وجد)، المحتوى/الصور، وأمثلة لمواقع تعجبك. نرشدك في كل شيء في مكالمة الاكتشاف.',
        },
      ],
    },
    leadForm: {
      badge: 'ابدأ الآن',
      title: 'لنبني شيئاً',
      titleHighlight: 'مذهلاً',
      subtitle: 'أخبرنا عن مشروعك وسنرد خلال 24 ساعة باستشارة مجانية.',
      sections: {
        aboutYou: 'معلوماتك',
        projectDetails: 'تفاصيل المشروع',
        contactInfo: 'معلومات التواصل',
      },
      fields: {
        fullName: 'الاسم الكامل',
        businessType: 'نوع العمل',
        businessTypePlaceholder: 'مثال: مطعم، صالة رياضة، عيادة، متجر إلكتروني...',
        serviceNeeded: 'الخدمة المطلوبة',
        selectService: 'اختر خدمة',
        budgetRange: 'نطاق الميزانية',
        selectBudget: 'اختر ميزانيتك',
        whatsappNumber: 'رقم واتساب',
        instagramUsername: 'حساب إنستغرام (اختياري)',
        message: 'رسالة (اختياري)',
        messagePlaceholder: 'أخبرنا المزيد عن مشروعك...',
      },
      services: [
        'موقع أعمال',
        'متجر إلكتروني',
        'تطبيق جوال',
        'نظام حجز/طلب',
        'لوحة تحكم/CRM',
        'هوية بصرية وتصميم',
        'أخرى',
      ],
      budgetRanges: [
        'أقل من ₪6,000',
        '₪6,000 - ₪13,000',
        '₪13,000 - ₪30,000',
        '₪30,000 - ₪55,000',
        '₪55,000+',
        'غير متأكد بعد',
      ],
      submit: 'أرسل واحصل على خطتي',
      submitting: 'جاري الإرسال...',
      replyNote: 'سنرد خلال 24 ساعة. بدون إزعاج، أبداً.',
      contactSidebar: {
        getInTouch: 'تواصل معنا مباشرة',
        preferToChat: 'تفضل المحادثة؟',
        chatDescription: 'تخطّى النموذج وراسلنا مباشرة على واتساب للحصول على أسرع رد.',
        chatOnWhatsApp: 'تحدث على واتساب',
        whatsapp: 'واتساب',
        email: 'البريد الإلكتروني',
        instagram: 'إنستغرام',
        location: 'الموقع',
      },
      success: {
        title: 'تم إرسال الرسالة!',
        message: 'شكراً للتواصل. سنرد خلال 24 ساعة.',
      },
      errors: {
        nameRequired: 'الاسم مطلوب',
        businessTypeRequired: 'نوع العمل مطلوب',
        serviceRequired: 'الرجاء اختيار خدمة',
        budgetRequired: 'الرجاء اختيار نطاق الميزانية',
        whatsappRequired: 'رقم واتساب صحيح مطلوب',
      },
    },
    footer: {
      description: 'نبني تطبيقات ومواقع تنمّي عملك. من الفكرة إلى الإطلاق — سريع، نظيف، ومصمم لتحويل العملاء.',
      quickLinks: 'روابط سريعة',
      contact: 'اتصل بنا',
      copyright: '© {year} MadarLabs. جميع الحقوق محفوظة.',
      privacyPolicy: 'سياسة الخصوصية',
      termsOfService: 'شروط الخدمة',
    },
  },
  he: {
    nav: {
      services: 'שירותים',
      portfolio: 'תיק עבודות',
      process: 'תהליך',
      pricing: 'מחירים',
      reviews: 'ביקורות',
      faq: 'שאלות נפוצות',
      contact: 'צור קשר',
      getConsultation: 'קבל ייעוץ חינם',
    },
    hero: {
      badge: 'מהימן על 50+ עסקים',
      headline: 'MadarLabs בונה אפליקציות ואתרים ש',
      headlineHighlight: 'מצמיחים את העסק שלך.',
      subheadline: 'מרעיון להשקה — מהיר, נקי, ובנוי להמיר לקוחות.',
      cta: 'קבל ייעוץ חינם',
      ctaSecondary: 'ראה את העבודות שלנו',
      trustBadges: {
        fastDelivery: 'אספקה מהירה',
        businessFocused: 'מותאם לעסקים',
        cleanUI: 'עיצוב נקי',
      },
      instagramNote: 'מאינסטגרם?',
      instagramNoteText: 'ספר לנו על העסק + התקציב שלך — נחזור תוך 24 שעות.',
    },
    services: {
      badge: 'השירותים שלנו',
      title: 'כל מה שאתה צריך',
      titleHighlight: 'להצליח באונליין',
      subtitle: 'מאתרים ועד אפליקציות, אנחנו בונים פתרונות דיגיטליים שמניבים תוצאות אמיתיות.',
      items: {
        websites: {
          title: 'אתרים עסקיים',
          description: 'הפוך מבקרים ללידים עם אתרים מרהיבים ומותאמים להמרה.',
        },
        ecommerce: {
          title: 'חנויות אונליין',
          description: 'מכור באינטרנט בקלות עם חוויות קנייה יפות ומאובטחות.',
        },
        mobile: {
          title: 'אפליקציות מובייל',
          description: 'פתרונות iOS ואנדרואיד שהלקוחות שלך יאהבו.',
        },
        booking: {
          title: 'מערכות הזמנות',
          description: 'אוטומציה של הזמנות לקוחות עם מערכות חכמות.',
        },
        dashboard: {
          title: 'דשבורד ניהול ו-CRM',
          description: 'נהל את העסק שלך ביעילות עם דשבורדים מותאמים.',
        },
        branding: {
          title: 'מיתוג ו-UI/UX',
          description: 'זהות ויזואלית פרימיום שמבדילה אותך מהמתחרים.',
        },
      },
    },
    portfolio: {
      badge: 'העבודות שלנו',
      stripLabel: 'עבודות נבחרות',
      title: 'פרויקטים ש',
      titleHighlight: 'מניבים תוצאות',
      subtitle: 'ראה איך עזרנו לעסקים כמו שלך לצמוח עם פתרונות דיגיטליים מותאמים.',
      requestSimilar: 'בקש פרויקט דומה',
      result: 'תוצאה:',
      projects: {
        restaurant: {
          title: 'אתר הזמנות למסעדה',
          category: 'מזון ומשקאות',
          description:
            'זרימת הזמנה מותאמת עם תפריט, מבצעים נלווים ותשלום מוכן למשלוחים.',
          result: '40% עלייה בהזמנות',
        },
        clinic: {
          title: 'מערכת הזמנות לקליניקה',
          category: 'בריאות',
          description:
            'הזמנות מקוונות, תזכורות אוטומטיות וסנכרון יומן להפחתת אי-הגעות.',
          result: '60% פחות אי-הגעות',
        },
        gym: {
          title: 'אפליקציית חדר כושר',
          category: 'בריאות וכושר',
          description:
            'מרכז חברים עם לוחות זמנים, מעקב התקדמות וכלים שמגבירים מעורבות.',
          result: 'x3 מעורבות חברים',
        },
        realEstate: {
          title: 'משפך לידים לנדל"ן',
          category: 'נדל"ן',
          description:
            'לכידה ואיכות לידים עם מענה מהיר לפניות נדל"ן.',
          result: '150+ לידים איכותיים בחודש',
        },
        ecommerce: {
          title: 'חנות אונליין',
          category: 'קמעונאות',
          description:
            'קטלוג ותשלום מהירים עם חוויית קנייה ממוקדת המרה.',
          result: 'גידול של פי 3 במכירות',
        },
        service: {
          title: 'אתר שירותים',
          category: 'שירותים מקצועיים',
          description:
            'חבילות שירות ברורות, הוכחות חברתיות ונתיבי יצירת קשר חלקים.',
          result: 'x5 יותר פניות',
        },
      },
    },
    process: {
      badge: 'התהליך שלנו',
      title: 'מרעיון ל',
      titleHighlight: 'השקה',
      subtitle: 'תהליך בן 5 שלבים שתוכנן להניב תוצאות ביעילות.',
      timelines: 'לוחות זמנים טיפוסיים',
      steps: {
        discovery: {
          title: 'שיחת היכרות',
          description: 'אנחנו דנים במטרות, בדרישות ובחזון שלך לפרויקט.',
        },
        design: {
          title: 'עיצוב',
          description: 'יצירת עיצובים ויזואליים מותאמים למותג שלך.',
        },
        build: {
          title: 'פיתוח',
          description: 'פיתוח הפתרון שלך עם קוד נקי וניתן להרחבה.',
        },
        optimize: {
          title: 'אופטימיזציה',
          description: 'בדיקות, שיפור והבטחת ביצועים מיטביים.',
        },
        launch: {
          title: 'השקה ותמיכה',
          description: 'עלייה לאוויר עם תחזוקה ותמיכה שוטפת.',
        },
      },
      timelineItems: {
        website: 'אתר',
        ecommerce: 'חנות אונליין',
        appMvp: 'MVP אפליקציה',
      },
    },
    pricing: {
      badge: 'מחירים',
      title: 'מחירים',
      titleHighlight: 'שקופים',
      subtitle: 'חבילות השקעה שתוכננו לספק ערך מרבי לתקציב שלך.',
      startingAt: 'החל מ',
      getStarted: 'התחל עכשיו',
      mostPopular: 'הכי פופולרי',
      customQuote: 'צריך משהו שונה? אנחנו יוצרים פתרונות מותאמים לדרישות ייחודיות.',
      requestQuote: 'בקש הצעת מחיר מותאמת',
      plans: {
        starter: {
          name: 'אתר מתחילים',
          description: 'מושלם לעסקים קטנים שמתחילים באונליין.',
          features: [
            'עד 5 עמודים',
            'עיצוב רספונסיבי',
            'טופס יצירת קשר',
            'הגדרת SEO בסיסית',
            'חודש תמיכה',
          ],
        },
        business: {
          name: 'עסקי פרו',
          description: 'לעסקים צומחים שצריכים יותר תכונות.',
          features: [
            'עד 15 עמודים',
            'עיצוב ומיתוג מותאם',
            'מערכת ניהול תוכן',
            'SEO ואנליטיקס מתקדמים',
            'אינטגרציית הזמנות/תשלום',
            '3 חודשי תמיכה',
          ],
        },
        custom: {
          name: 'אפליקציה/מערכת מותאמת',
          description: 'פתרונות מותאמים מלאים לצרכים ייחודיים.',
          features: [
            'אפליקציית ווב או מובייל מותאמת',
            'מסד נתונים וצד שרת',
            'דשבורד ניהול',
            'אינטגרציות צד שלישי',
            'ארכיטקטורה סקיילבילית',
            '6 חודשי תמיכה',
          ],
        },
      },
    },
    testimonials: {
      badge: 'המלצות',
      title: 'מה הלקוחות שלנו',
      titleHighlight: 'אומרים',
      subtitle: 'אל תסמוך רק על המילה שלנו — שמע מעסקים שעזרנו להם להצליח.',
    },
    faq: {
      badge: 'שאלות נפוצות',
      title: 'שאלות',
      titleHighlight: 'נפוצות',
      subtitle: 'יש לך שאלות? יש לנו תשובות. אם לא מצאת את שלך כאן, פשוט שאל!',
      items: [
        {
          question: 'כמה זמן לוקח להשלים פרויקט?',
          answer: 'לוחות הזמנים משתנים לפי מורכבות הפרויקט. אתר רגיל לוקח 7-14 ימים, חנויות אונליין 14-30 ימים, ואפליקציות/מערכות מותאמות 30-60 ימים. אנחנו מספקים לוחות זמנים מדויקים אחרי הבנת הדרישות שלך.',
        },
        {
          question: 'מה אם אני רוצה שינויים במהלך הפרויקט?',
          answer: 'אנחנו כוללים סבבי תיקונים בחבילות שלנו. שינויים קטנים תמיד מתקבלים בברכה. שינויים גדולים עשויים לדרוש התאמת לוח זמנים, שנדון בשקיפות.',
        },
        {
          question: 'האם אתם מספקים שירותי אחסון ודומיין?',
          answer: 'כן! אנחנו יכולים להקים ולנהל אחסון עבורך, או לעבוד עם ספק האחסון הקיים שלך. אנחנו גם עוזרים ברישום דומיין והגדרת DNS.',
        },
        {
          question: 'מהם תנאי התשלום?',
          answer: 'אנחנו בדרך כלל דורשים 50% מראש לתחילת העבודה, וה-50% הנותרים עם סיום הפרויקט. לפרויקטים גדולים, נוכל לסדר תשלומים לפי אבני דרך.',
        },
        {
          question: 'האם אתם מציעים תחזוקה ותמיכה שוטפת?',
          answer: 'בהחלט. כל החבילות כוללות תקופת תמיכה (1-6 חודשים בהתאם לחבילה). אחר כך, אנחנו מציעים תוכניות תחזוקה חודשיות במחירים סבירים.',
        },
        {
          question: 'איזה מידע אתם צריכים להתחיל?',
          answer: 'אנחנו צריכים את מטרות העסק שלך, מידע על קהל היעד, מדריך מותג (אם קיים), תוכן/תמונות, ודוגמאות לאתרים שאתה אוהב. אנחנו מדריכים אותך בהכל בשיחת ההיכרות.',
        },
      ],
    },
    leadForm: {
      badge: 'התחל עכשיו',
      title: 'בוא נבנה משהו',
      titleHighlight: 'מדהים',
      subtitle: 'ספר לנו על הפרויקט שלך ונחזור אליך תוך 24 שעות עם ייעוץ חינם.',
      sections: {
        aboutYou: 'קצת עליך',
        projectDetails: 'פרטי הפרויקט',
        contactInfo: 'פרטי התקשרות',
      },
      fields: {
        fullName: 'שם מלא',
        businessType: 'סוג העסק',
        businessTypePlaceholder: 'לדוגמה: מסעדה, חדר כושר, קליניקה, חנות אונליין...',
        serviceNeeded: 'שירות נדרש',
        selectService: 'בחר שירות',
        budgetRange: 'טווח תקציב',
        selectBudget: 'בחר את התקציב שלך',
        whatsappNumber: 'מספר וואטסאפ',
        instagramUsername: 'שם משתמש אינסטגרם (אופציונלי)',
        message: 'הודעה (אופציונלי)',
        messagePlaceholder: 'ספר לנו עוד על הפרויקט שלך...',
      },
      services: [
        'אתר עסקי',
        'חנות אונליין',
        'אפליקציית מובייל',
        'מערכת הזמנות',
        'דשבורד/CRM',
        'מיתוג ו-UI/UX',
        'אחר',
      ],
      budgetRanges: [
        'מתחת ל-₪6,000',
        '₪6,000 - ₪13,000',
        '₪13,000 - ₪30,000',
        '₪30,000 - ₪55,000',
        '₪55,000+',
        'עדיין לא בטוח',
      ],
      submit: 'שלח וקבל את התוכנית שלי',
      submitting: 'שולח...',
      replyNote: 'נחזור תוך 24 שעות. בלי ספאם, לעולם.',
      contactSidebar: {
        getInTouch: 'צור קשר ישירות',
        preferToChat: 'מעדיף לשוחח?',
        chatDescription: 'דלג על הטופס וכתוב לנו ישירות בוואטסאפ לתשובה המהירה ביותר.',
        chatOnWhatsApp: 'שוחח בוואטסאפ',
        whatsapp: 'וואטסאפ',
        email: 'אימייל',
        instagram: 'אינסטגרם',
        location: 'מיקום',
      },
      success: {
        title: 'ההודעה נשלחה!',
        message: 'תודה על הפנייה. נחזור אליך תוך 24 שעות.',
      },
      errors: {
        nameRequired: 'שם נדרש',
        businessTypeRequired: 'סוג העסק נדרש',
        serviceRequired: 'אנא בחר שירות',
        budgetRequired: 'אנא בחר טווח תקציב',
        whatsappRequired: 'מספר וואטסאפ תקף נדרש',
      },
    },
    footer: {
      description: 'אנחנו בונים אפליקציות ואתרים שמצמיחים את העסק שלך. מרעיון להשקה — מהיר, נקי, ובנוי להמיר לקוחות.',
      quickLinks: 'קישורים מהירים',
      contact: 'צור קשר',
      copyright: '© {year} MadarLabs. כל הזכויות שמורות.',
      privacyPolicy: 'מדיניות פרטיות',
      termsOfService: 'תנאי שימוש',
    },
  },
};
