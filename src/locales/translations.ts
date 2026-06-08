import type { Language } from "./types";

export const translations: Record<Language, Record<string, unknown>> = {
  en: {
    nav: {
      home: 'Home',
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
      visitLiveSite: 'Visit live site',
      result: 'Result:',
      projects: {
        shishaKing: {
          title: 'ShishaKing',
          category: 'Premium shisha & lounge',
          description:
            'Premium web experience for a shisha lounge—atmosphere-led visuals, clear menu and location story, and smooth paths to connect with guests.',
          result: 'Stronger brand presence & discovery',
          imageAlt: 'Premium shisha lounge — ShishaKing',
        },
        hebaFashion: {
          title: 'Heba Fashion',
          category: 'Fashion & styling',
          description:
            'Elegant brand site for a designer fashion label—luxury presentation, clear styling services, and a polished path to book and shop.',
          result: 'Elevated brand & client bookings',
          imageAlt: 'Heba Fashion — designer & styling',
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
      subtitle:
        'Real feedback from businesses we worked with. Click “Add your review” to open the form — a valid email is required to show your review on this page.',
      items: [
        {
          name: 'Noura Al-Mansouri',
          role: 'Owner, Al-Sham Restaurant',
          quote:
            'They built a clear site with a menu and WhatsApp orders. Customers find us on Google more easily, and the project was delivered on time.',
        },
        {
          name: 'Khaled Al-Otaibi',
          role: 'Founder, Afaq Fitness',
          quote:
            'Class booking from the phone without overloading the front desk. The interface is simple and changes were handled quickly.',
        },
        {
          name: 'Lamya Al-Zahrani',
          role: 'Director, Al-Madinah Properties',
          quote:
            'The listings site is fast and the contact form works well. We get more serious leads now — worth the investment.',
        },
        {
          name: 'Abdulrahman Fahd',
          role: 'Founder, Tech Corner Store',
          quote:
            'The store looks professional and checkout works on mobile. They explained hosting in plain language. Sales improved in the first weeks.',
        },
        {
          name: 'Huda Al-Qahtani',
          role: 'Owner, Nada Beauty Salon',
          quote:
            'Online booking reduced no-shows. Clients pick service and time; we get a WhatsApp summary. Exactly what we needed.',
        },
      ],
      reviewForm: {
        title: 'Leave your feedback',
        subtitle:
          'To publish a review on this page, use your real email. We only show a masked version (e.g. mo***@gmail.com) next to your name — never the full address.',
        nameLabel: 'Your name',
        namePlaceholder: 'Full name',
        emailLabel: 'Email',
        emailPlaceholder: 'you@example.com',
        emailHint: 'Required — we display a privacy-safe masked email on the card.',
        emailInvalid: 'Please enter a valid email address.',
        roleLabel: 'Role or business',
        rolePlaceholder: 'e.g. Owner, Cafe Nour',
        optional: 'optional',
        ratingLabel: 'Rating',
        reviewLabel: 'Your review',
        reviewPlaceholder: 'What went well? What would you tell other businesses?',
        submit: 'Submit review',
        submitting: 'Sending…',
        success: 'Thanks! Your review is now visible in the list above.',
        error: "Couldn't send. Check the fields and try again.",
        errorApi:
          "We can't connect to the review service right now. Please try again in a few minutes.",
        visitorBadge: 'Visitor',
        dialogCta: 'Add your review',
      },
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
        yourMessage: 'Your message',
      },
      fields: {
        fullName: 'Full Name',
        email: 'Email address',
        emailPlaceholder: 'you@example.com',
        businessType: 'Business Type',
        businessTypePlaceholder: 'e.g., Restaurant, Gym, Clinic, E-commerce...',
        serviceNeeded: 'Service Needed',
        selectService: 'Select a service',
        budgetRange: 'Budget Range',
        selectBudget: 'Select your budget',
        whatsappNumber: 'WhatsApp Number',
        instagramUsername: 'Instagram Username (optional)',
        subject: 'Subject',
        subjectPlaceholder: 'What is your inquiry about?',
        message: 'Message',
        messagePlaceholder: 'Describe your project or question in detail...',
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
        emailRequired: 'Email is required',
        emailInvalid: 'Please enter a valid email address',
        businessTypeRequired: 'Business type is required',
        serviceRequired: 'Please select a service',
        budgetRequired: 'Please select a budget range',
        whatsappRequired: 'Valid WhatsApp number required',
        subjectRequired: 'Subject is required',
        messageRequired: 'Message is required',
        messageMin: 'Please write at least 10 characters',
        messageMax: 'Message is too long (max 5000 characters)',
      },
      toastError: 'Error',
      toastGenericError: 'Something went wrong. Please try again.',
      toastNetworkError:
        'Could not reach the server. Start the API (in a second terminal: cd server && npm start), then try again. The form needs the backend on port 3001.',
    },
    footer: {
      description: 'We build apps & websites that grow your business. From idea to launch — fast, clean, and built to convert customers.',
      quickLinks: 'Quick Links',
      contact: 'Contact',
      copyright: '© {year} MadarLabs. All rights reserved.',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
      locationLine: 'Tel Aviv, Israel',
    },
    common: {
      toggleMenu: 'Toggle menu',
      instagramAria: 'Instagram',
      whatsappAria: 'WhatsApp',
    },
    floating: {
      whatsappTooltip: 'Chat with us on WhatsApp',
    },
    notFound: {
      badge: 'Error 404',
      title: 'Page not found',
      description: "The page you're looking for doesn't exist or was moved.",
      cta: 'Return to Home',
    },
    legal: {
      backHome: 'Back to Home',
      lastUpdated: 'Last updated: January 2026',
      privacy: {
        title: 'Privacy Policy',
        sections: [
          {
            title: '1. Information We Collect',
            body:
              'When you submit our contact form, we collect your name, business type, service needs, budget range, WhatsApp number, optional Instagram username, and any message you provide. We use this information solely to respond to your inquiry and provide our services.',
          },
          {
            title: '2. How We Use Your Information',
            body:
              'We use the information you provide to communicate with you about your project, send project updates, and deliver our web and mobile development services. We do not sell or share your personal information with third parties for marketing purposes.',
          },
          {
            title: '3. Data Storage & Security',
            body:
              'Your data is stored securely and processed in accordance with applicable data protection laws. We implement appropriate technical and organizational measures to protect your personal information.',
          },
          {
            title: '4. Cookies & Analytics',
            body:
              'Our website may use cookies and similar technologies to improve your experience. We may use analytics services to understand how visitors use our site. You can control cookie preferences through your browser settings.',
          },
          {
            title: '5. Your Rights',
            body:
              'You have the right to access, correct, or delete your personal data. To exercise these rights or ask questions about our privacy practices, please contact us using the contact details provided on our website.',
          },
          {
            title: '6. Contact Us',
            body:
              'For any privacy-related questions, please reach out to us via the contact form or the email address listed in our footer.',
          },
        ],
      },
      terms: {
        title: 'Terms of Service',
        sections: [
          {
            title: '1. Agreement to Terms',
            body:
              'By accessing our website and using our services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website or services.',
          },
          {
            title: '2. Services',
            body:
              'MadarLabs provides web development, mobile app development, e-commerce solutions, and related digital services. Specific scope, deliverables, and timelines are defined in individual project agreements or quotes.',
          },
          {
            title: '3. Pricing & Payment',
            body:
              'Pricing is as specified in our quotes or pricing page. We typically require 50% upfront to begin work, with the remainder due upon project completion. Payment terms may be adjusted for larger projects with milestone-based arrangements.',
          },
          {
            title: '4. Intellectual Property',
            body:
              'Upon full payment, you receive ownership of the custom deliverables created for your project. We retain the right to use non-proprietary tools, libraries, and techniques in other projects. Any pre-existing materials you provide remain your property.',
          },
          {
            title: '5. Revisions & Scope Changes',
            body:
              'Our packages include specified revision rounds. Additional revisions or scope changes may incur additional charges and timeline adjustments. We communicate any such changes before proceeding.',
          },
          {
            title: '6. Limitation of Liability',
            body:
              'Our liability is limited to the amount paid for the specific project. We are not liable for indirect, incidental, or consequential damages. We strive to deliver quality work and stand behind our services within the agreed scope.',
          },
          {
            title: '7. Contact',
            body:
              'For questions about these terms, please contact us through the contact form or the details provided in our website footer.',
          },
        ],
      },
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
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
      visitLiveSite: 'زيارة الموقع المباشر',
      result: 'النتيجة:',
      projects: {
        shishaKing: {
          title: 'ShishaKing',
          category: 'شيشة ولاونج فاخر',
          description:
            'تجربة ويب فاخرة لصالة شيشة — صور تعكس الأجواء، قصة واضحة للقائمة والموقع، ومسارات سلسة للتواصل مع الضيوف.',
          result: 'حضور أقوى للعلامة واكتشاف أفضل',
          imageAlt: 'صالة شيشة فاخرة — ShishaKing',
        },
        hebaFashion: {
          title: 'Heba Fashion',
          category: 'أزياء وستايل',
          description:
            'موقع أنيق لعلامة أزياء — عرض فاخر، خدمات تصميم واضحة، وتجربة سلسة للحجز والتسوق.',
          result: 'علامة أرقى وحجوزات أوضح',
          imageAlt: 'Heba Fashion — تصميم وستايل',
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
      subtitle:
        'تقييمات حقيقية من أصحاب أعمال تعاملنا معهم. اضغط «أضف تقييمك» لفتح النموذج — يلزم بريد إلكتروني صالح ليظهر رأيك في هذه الصفحة.',
      items: [
        {
          name: 'نورة المنصوري',
          role: 'صاحبة مطعم الشام — حيفا',
          quote:
            'بنوا لنا موقع واضح مع قائمة وطلب عبر الواتساب. صار الزبائن يلقونا بسهولة وسلّموا بالموعد.',
        },
        {
          name: 'خالد العتيبي',
          role: 'مؤسس صالة الأفق — الناصرة',
          quote:
            'الحجز من الجوال بدون ضغط على الاستقبال. الواجهة سهلة والتعديلات اللي طلبناها كانت بسرعة.',
        },
        {
          name: 'لمياء الزهراني',
          role: 'مديرة مكتب عقاري المدينة — أم الفحم',
          quote:
            'الموقع صار سريع ونموذج التواصل مضبوط. الفيد ينعكس في الشغل.',
        },
        {
          name: 'عبدالرحمن فهد',
          role: 'صاحب متجر تقني — الطيبة',
          quote:
            'شكل متجرنا احترافي والدفع من الجوال تمام. شرحوا الاستضافة ببساطة. المبيعات ارتفعت بأسابيع.',
        },
        {
          name: 'هدى القحطاني',
          role: 'صاحبة صالون ندى — باقة الغربية',
          quote:
            'الحجز أونلاين قلل الغياب. الزبونة تختار الوقت ونستلم ملخص واتساب. بالضبط طلبت.',
        },
      ],
      reviewForm: {
        title: 'رأيك يهمنا',
        subtitle:
          'لنشر تعليقك في هذه الصفحة يلزم بريدك الإلكتروني. لن نعرض البريد كاملاً — فقط شكل آمن (مثال: ab***@gmail.com) بجانب اسمك.',
        nameLabel: 'الاسم',
        namePlaceholder: 'الاسم الكامل',
        emailLabel: 'البريد الإلكتروني',
        emailPlaceholder: 'name@email.com',
        emailHint: 'مطلوب — سنعرض نسخة مجهّلة من البريد على البطاقة فقط.',
        emailInvalid: 'الرجاء إدخال بريد إلكتروني صحيح.',
        roleLabel: 'الصفة أو النشاط',
        rolePlaceholder: 'مثال: صاحب مطعم، عيادة…',
        optional: 'اختياري',
        ratingLabel: 'التقييم',
        reviewLabel: 'نص التعليق',
        reviewPlaceholder: 'ماذا نفعكم العمل؟ ماذا تود أن يعرف غيرك؟',
        submit: 'إرسال',
        submitting: 'جاري الإرسال…',
        success: 'شكراً! يظهر تعليقك في القائمة أعلاه.',
        error: 'تعذر الإرسال. راجع الحقول وحاول مرة أخرى.',
        errorApi:
          'تعذر الاتصال بخدمة التعليقات حالياً. يرجى المحاولة بعد بضع دقائق.',
        visitorBadge: 'زائر',
        dialogCta: 'أضف تقييمك',
      },
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
        yourMessage: 'رسالتك',
      },
      fields: {
        fullName: 'الاسم الكامل',
        email: 'البريد الإلكتروني',
        emailPlaceholder: 'you@example.com',
        businessType: 'نوع العمل',
        businessTypePlaceholder: 'مثال: مطعم، صالة رياضة، عيادة، متجر إلكتروني...',
        serviceNeeded: 'الخدمة المطلوبة',
        selectService: 'اختر خدمة',
        budgetRange: 'نطاق الميزانية',
        selectBudget: 'اختر ميزانيتك',
        whatsappNumber: 'رقم واتساب',
        instagramUsername: 'حساب إنستغرام (اختياري)',
        subject: 'الموضوع',
        subjectPlaceholder: 'بماذا نقدر أن نساعدك؟',
        message: 'الرسالة',
        messagePlaceholder: 'صف مشروعك أو استفسارك بالتفصيل...',
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
        emailRequired: 'البريد الإلكتروني مطلوب',
        emailInvalid: 'يرجى إدخال بريد إلكتروني صحيح',
        businessTypeRequired: 'نوع العمل مطلوب',
        serviceRequired: 'الرجاء اختيار خدمة',
        budgetRequired: 'الرجاء اختيار نطاق الميزانية',
        whatsappRequired: 'رقم واتساب صحيح مطلوب',
        subjectRequired: 'الموضوع مطلوب',
        messageRequired: 'الرسالة مطلوبة',
        messageMin: 'يرجى كتابة 10 أحرف على الأقل',
        messageMax: 'الرسالة طويلة جداً (حد أقصى 5000 حرف)',
      },
      toastError: 'خطأ',
      toastGenericError: 'حدث خطأ ما. يرجى المحاولة مرة أخرى.',
      toastNetworkError:
        'تعذر الاتصال بالخادم. شغّل واجهة الـ API (في طرفية ثانية: cd server && npm start) ثم أعد المحاولة. النموذج يحتاج الخادم على المنفذ 3001.',
    },
    footer: {
      description: 'نبني تطبيقات ومواقع تنمّي عملك. من الفكرة إلى الإطلاق — سريع، نظيف، ومصمم لتحويل العملاء.',
      quickLinks: 'روابط سريعة',
      contact: 'اتصل بنا',
      copyright: '© {year} MadarLabs. جميع الحقوق محفوظة.',
      privacyPolicy: 'سياسة الخصوصية',
      termsOfService: 'شروط الخدمة',
      locationLine: 'تل أبيب، إسرائيل',
    },
    common: {
      toggleMenu: 'تبديل القائمة',
      instagramAria: 'إنستغرام',
      whatsappAria: 'واتساب',
    },
    floating: {
      whatsappTooltip: 'تحدث معنا على واتساب',
    },
    notFound: {
      badge: 'خطأ 404',
      title: 'الصفحة غير موجودة',
      description: 'الصفحة التي تبحث عنها غير موجودة أو تم نقلها.',
      cta: 'العودة إلى الرئيسية',
    },
    legal: {
      backHome: 'العودة إلى الرئيسية',
      lastUpdated: 'آخر تحديث: يناير 2026',
      privacy: {
        title: 'سياسة الخصوصية',
        sections: [
          {
            title: '١. المعلومات التي نجمعها',
            body:
              'عند إرسال نموذج الاتصال، نجمع اسمك ونوع عملك واحتياجات الخدمة ونطاق الميزانية ورقم واتساب واسم مستخدم إنستغرام (اختياري) وأي رسالة ترسلها. نستخدم هذه المعلومات فقط للرد على استفسارك وتقديم خدماتنا.',
          },
          {
            title: '٢. كيف نستخدم معلوماتك',
            body:
              'نستخدم المعلومات للتواصل معك بشأن مشروعك وإرسال التحديثات وتقديم خدمات تطوير الويب والجوال. لا نبيع معلوماتك الشخصية ولا نشاركها مع أطراف ثالثة لأغراض تسويقية.',
          },
          {
            title: '٣. التخزين والأمان',
            body:
              'يتم تخزين بياناتك بشكل آمن ومعالجتها وفقاً لقوانين حماية البيانات المعمول بها. نطبق إجراءات تقنية وتنظيمية مناسبة لحماية معلوماتك.',
          },
          {
            title: '٤. ملفات تعريف الارتباط والتحليلات',
            body:
              'قد يستخدم موقعنا ملفات تعريف الارتباط وتقنيات مشابهة لتحسين تجربتك. قد نستخدم خدمات تحليلات لفهم كيفية استخدام الزوار للموقع. يمكنك التحكم في تفضيلات ملفات الارتباط من إعدادات المتصفح.',
          },
          {
            title: '٥. حقوقك',
            body:
              'لديك الحق في الوصول إلى بياناتك الشخصية أو تصحيحها أو حذفها. لممارسة هذه الحقوق أو لطرح أسئلة حول الخصوصية، يرجى التواصل معنا عبر تفاصيل الاتصال في الموقع.',
          },
          {
            title: '٦. اتصل بنا',
            body:
              'لأي أسئلة متعلقة بالخصوصية، تواصل معنا عبر نموذج الاتصال أو البريد الإلكتروني المذكور في التذييل.',
          },
        ],
      },
      terms: {
        title: 'شروط الخدمة',
        sections: [
          {
            title: '١. الموافقة على الشروط',
            body:
              'باستخدام موقعنا وخدماتنا، فإنك توافق على هذه الشروط. إذا كنت لا توافق على أي جزء، يرجى عدم استخدام الموقع أو الخدمات.',
          },
          {
            title: '٢. الخدمات',
            body:
              'تقدم MadarLabs تطوير مواقع وتطبيقات جوال وحلول تجارة إلكترونية وخدمات رقمية ذات صلة. يتم تحديد النطاق والمخرجات والجداول الزمنية في عروض أو اتفاقيات مشاريع فردية.',
          },
          {
            title: '٣. التسعير والدفع',
            body:
              'التسعير كما هو محدد في عروضنا أو صفحة الأسعار. عادةً نطلب 50% مقدماً لبدء العمل والباقي عند اكتمال المشروع. قد تُعدّل شروط الدفع للمشاريع الكبيرة حسب المراحل.',
          },
          {
            title: '٤. الملكية الفكرية',
            body:
              'عند السداد الكامل، تحصل على ملكية المخرجات المخصصة لمشروعك. نحتفظ بحق استخدام الأدوات والمكتبات غير الحصرية في مشاريع أخرى. أي مواد مقدمة منك مسبقاً تبقى ملكك.',
          },
          {
            title: '٥. المراجعات وتغيير النطاق',
            body:
              'تتضمن باقاتنا جولات مراجعة محددة. قد تترتب على المراجعات الإضافية أو تغيير النطاق رسوم وتعديلات جدول زمني. نتواصل بأي تغيير قبل المتابعة.',
          },
          {
            title: '٦. حدود المسؤولية',
            body:
              'تقتصر مسؤوليتنا على المبلغ المدفوع للمشروع المحدد. لسنا مسؤولين عن الأضرار غير المباشرة أو العرضية. نسعى لتقديم جودة عالية ضمن النطاق المتفق عليه.',
          },
          {
            title: '٧. التواصل',
            body:
              'للأسئلة حول هذه الشروط، تواصل معنا عبر نموذج الاتصال أو التفاصيل في تذييل الموقع.',
          },
        ],
      },
    },
  },
  he: {
    nav: {
      home: 'בית',
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
      visitLiveSite: 'לאתר החי',
      result: 'תוצאה:',
      projects: {
        shishaKing: {
          title: 'ShishaKing',
          category: 'שישה ולאונג\' פרימיום',
          description:
            'חוויית אינטרנט פרימיום ללאונג\' שישה — ויזואליות שמדגישה אווירה, סיפור תפריט ומיקום ברור, ונתיבי קשר חלקים לאורחים.',
          result: 'נוכחות מותג חזקה ויותר חשיפה',
          imageAlt: 'לאונג\' שישה פרימיום — ShishaKing',
        },
        hebaFashion: {
          title: 'Heba Fashion',
          category: 'אופנה וסטיילינג',
          description:
            'אתר מותג אלגנטי ללייבל אופנה — מיצוג פרימיום, שירותי עיצוב ברורים, ונתיב חלק להזמנות ולקנייה.',
          result: 'מותג משודרג ופניות מסודרות',
          imageAlt: 'Heba Fashion — מעצבת וסטיילינג',
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
      subtitle:
        'משוב אמיתי מעסקים שעבדנו איתם. לחצו על «הוסף ביקורת» לפתיחת הטופס — נדרש אימייל תקין כדי להציג את הביקורת בדף.',
      items: [
        {
          name: 'נורה אלמנסורי',
          role: 'בעלים, מסעדת א-שאם — חיפה',
          quote:
            'הקימו לנו אתר ברור עם תפריט והזמנות בוואטסאפ. הלקוחות מוצאים אותנו בקלות וההספקה בזמן.',
        },
        {
          name: 'חאלד אלעותייבי',
          role: 'מייסד, חדר כושר אפק — נצרת',
          quote:
            'הזמנות שיעורים מהטלפון בלי לעמוס על הכניסה. הכל פשוט והתיקונים הקטנים טופלו מהר.',
        },
        {
          name: 'למיאה א-זהראני',
          role: 'מנהלת, משרד נדל״ן אלמדינה',
          quote:
            'האתר נטען מהר וטופס לידים עובד. אנחנו מקבלים פניות ענייניות יותר.',
        },
        {
          name: 'עבד אלרחמן פהד',
          role: 'מייסד, חנות טק — טייבה',
          quote:
            'חנות נראית מקצועית, תשלום בנייד חלק. עזרו להבין אחסון בצורה פשוטה. שיפור מכירות בתוך שבועות.',
        },
        {
          name: 'הודא אלקחטאני',
          role: 'בעלים, מספרת נדא',
          quote:
            'הזמנה אונליין מצמצמת ביטולים. הלקוחה בוחרת שעה, מקבלים וואטסאפ. כמו שביקשנו.',
        },
      ],
      reviewForm: {
        title: 'השאר משוב',
        subtitle:
          'לפרסום ביקורת בדף זה נדרש אימייל. לא נציג את כתובת המייל המלאה — רק גרסה ממוסכת (לדוגמה ab***@gmail.com) לצד שמך.',
        nameLabel: 'שמך',
        namePlaceholder: 'שם מלא',
        emailLabel: 'אימייל',
        emailPlaceholder: 'name@email.com',
        emailHint: 'נדרש — אנחנו מציגים בכרטיס רק אימייל ממוסך.',
        emailInvalid: 'הכנס כתובת אימייל תקפה.',
        roleLabel: 'תפקיד או עסק',
        rolePlaceholder: 'לדוגמה: בעלים, בית קפה',
        optional: 'אופציונלי',
        ratingLabel: 'דירוג',
        reviewLabel: 'המלצה שלך',
        reviewPlaceholder: 'במה הייתם מעולים? מה היית מספר לעסק אחר?',
        submit: 'שלח',
        submitting: 'שולח…',
        success: 'תודה! הביקורת מופיעה עכשיו למעלה.',
        error: 'השליחה נכשלה. בדוק את השדות ונסה שוב.',
        errorApi:
          'אין כרגע חיבור לשירות הביקורות. נסו שוב בעוד כמה דקות.',
        visitorBadge: 'מבקר',
        dialogCta: 'הוסף ביקורת',
      },
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
        yourMessage: 'ההודעה שלך',
      },
      fields: {
        fullName: 'שם מלא',
        email: 'כתובת אימייל',
        emailPlaceholder: 'you@example.com',
        businessType: 'סוג העסק',
        businessTypePlaceholder: 'לדוגמה: מסעדה, חדר כושר, קליניקה, חנות אונליין...',
        serviceNeeded: 'שירות נדרש',
        selectService: 'בחר שירות',
        budgetRange: 'טווח תקציב',
        selectBudget: 'בחר את התקציב שלך',
        whatsappNumber: 'מספר וואטסאפ',
        instagramUsername: 'שם משתמש אינסטגרם (אופציונלי)',
        subject: 'נושא',
        subjectPlaceholder: 'על מה ההודעה?',
        message: 'הודעה',
        messagePlaceholder: 'תאר את הפרויקט או השאלה בפירוט...',
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
        emailRequired: 'אימייל נדרש',
        emailInvalid: 'נא להזין כתובת אימייל תקינה',
        businessTypeRequired: 'סוג העסק נדרש',
        serviceRequired: 'אנא בחר שירות',
        budgetRequired: 'אנא בחר טווח תקציב',
        whatsappRequired: 'מספר וואטסאפ תקף נדרש',
        subjectRequired: 'נושא נדרש',
        messageRequired: 'הודעה נדרשת',
        messageMin: 'נא לכתוב לפחות 10 תווים',
        messageMax: 'ההודעה ארוכה מדי (עד 5000 תווים)',
      },
      toastError: 'שגיאה',
      toastGenericError: 'משהו השתבש. נסה שוב.',
      toastNetworkError:
        'לא ניתן להתחבר לשרת. הפעל את ה־API (בטרמינל נוסף: cd server && npm start) ונסה שוב. הטופס דורש את השרת בפורט 3001.',
    },
    footer: {
      description: 'אנחנו בונים אפליקציות ואתרים שמצמיחים את העסק שלך. מרעיון להשקה — מהיר, נקי, ובנוי להמיר לקוחות.',
      quickLinks: 'קישורים מהירים',
      contact: 'צור קשר',
      copyright: '© {year} MadarLabs. כל הזכויות שמורות.',
      privacyPolicy: 'מדיניות פרטיות',
      termsOfService: 'תנאי שימוש',
      locationLine: 'תל אביב, ישראל',
    },
    common: {
      toggleMenu: 'פתח/סגור תפריט',
      instagramAria: 'אינסטגרם',
      whatsappAria: 'וואטסאפ',
    },
    floating: {
      whatsappTooltip: 'שוחח איתנו בוואטסאפ',
    },
    notFound: {
      badge: 'שגיאה 404',
      title: 'הדף לא נמצא',
      description: 'הדף שחיפשת לא קיים או הועבר.',
      cta: 'חזרה לדף הבית',
    },
    legal: {
      backHome: 'חזרה לדף הבית',
      lastUpdated: 'עודכן לאחרונה: ינואר 2026',
      privacy: {
        title: 'מדיניות פרטיות',
        sections: [
          {
            title: '1. איזה מידע אנחנו אוספים',
            body:
              'כשאתם שולחים את טופס יצירת הקשר, אנו אוספים שם, סוג עסק, צורך בשירות, טווח תקציב, מספר וואטסאפ, שם משתמש אינסטגרם (אופציונלי) וכל הודעה שתרצו. אנו משתמשים במידע זה רק כדי להגיב לפנייה ולספק את השירותים.',
          },
          {
            title: '2. איך אנו משתמשים במידע',
            body:
              'אנו משתמשים במידע כדי לתקשר איתכם לגבי הפרויקט, לשלוח עדכונים ולספק שירותי פיתוח אתרים ואפליקציות. אנו לא מוכרים את המידע האישי שלכם ולא משתפים אותו לשיווק עם צדדים שלישיים.',
          },
          {
            title: '3. אחסון ואבטחה',
            body:
              'הנתונים נשמרים בצורה מאובטחת ומעובדים בהתאם לחוקי הגנת המידע החלים. אנו מיישמים אמצעים טכניים וארגוניים מתאימים להגנה על המידע.',
          },
          {
            title: '4. עוגיות ואנליטיקה',
            body:
              'האתר עשוי להשתמש בעוגיות וטכנולוגיות דומות לשיפור החוויה. עשויים להיות שירותי אנליטיקה להבנת שימוש המבקרים. ניתן לשלוט בהעדפות דרך הגדרות הדפדפן.',
          },
          {
            title: '5. הזכויות שלכם',
            body:
              'יש לכם זכות לגשת, לתקן או למחוק נתונים אישיים. למימוש זכויות או שאלות על פרטיות, צרו קשר דרך פרטי הקשר באתר.',
          },
          {
            title: '6. צור קשר',
            body:
              'לשאלות פרטיות, פנו דרך טופס יצירת הקשר או האימייל המופיע בפוטר.',
          },
        ],
      },
      terms: {
        title: 'תנאי שימוש',
        sections: [
          {
            title: '1. הסכמה לתנאים',
            body:
              'בגישה לאתר ובשימוש בשירותים אתם מסכימים לתנאים אלה. אם אינכם מסכימים, אל תשתמשו באתר או בשירותים.',
          },
          {
            title: '2. שירותים',
            body:
              'MadarLabs מספקת פיתוח אתרים, אפליקציות מובייל, פתרונות מסחר אלקטרוני ושירותים דיגיטליים נלווים. היקף, תוצרים ולוחות זמנים מוגדרים בהצעות או בהסכמי פרויקט.',
          },
          {
            title: '3. תמחור ותשלום',
            body:
              'התמחור כפי שמופיע בהצעות או בדף המחירים. בדרך כלל נדרשים 50% מראש והשאר עם סיום הפרויקט. ניתן להתאים תשלומים לפי אבני דרך בפרויקטים גדולים.',
          },
          {
            title: '4. קניין רוחני',
            body:
              'לאחר תשלום מלא, אתם מקבלים בעלות על התוצרים המותאמים. אנו שומרים זכות שימוש בכלים וספריות לא בלעדיים בפרויקטים נוספים. חומרים קיימים שסיפקתם נשארים בבעלותכם.',
          },
          {
            title: '5. תיקונים ושינוי היקף',
            body:
              'החבילות כוללות סבבי תיקון מוגדרים. תיקונים נוספים או שינוי היקף עשויים לכלול עלויות והתאמת לוח זמנים. נעדכן לפני ביצוע.',
          },
          {
            title: '6. הגבלת אחריות',
            body:
              'האחריות מוגבלת לסכום ששולם עבור הפרויקט הספציפי. איננו אחראים לנזקים עקיפים. אנו משתדלים לספק עבודה איכותית בהיקף המוסכם.',
          },
          {
            title: '7. צור קשר',
            body:
              'לשאלות על התנאים, צרו קשר דרך טופס יצירת הקשר או הפרטים בפוטר.',
          },
        ],
      },
    },
  },
};
