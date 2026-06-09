import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { loadLocale } from '@/locales/loadLocale';
import type { Language } from '@/locales/types';

export type { Language } from '@/locales/types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  /** Dot-path lookup into the active locale (strings, arrays, or nested objects). */
  t: (key: string) => string | unknown;
  dir: 'ltr' | 'rtl';
  localeReady: boolean;
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

function resolveKey(locale: Record<string, unknown>, key: string): unknown {
  const parts = key.split('.');
  let value: unknown = locale;
  for (const k of parts) {
    if (value === null || value === undefined || typeof value !== 'object') {
      return undefined;
    }
    value = (value as Record<string, unknown>)[k];
  }
  return value;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('preferred-language');
    return (saved as Language) || 'en';
  });
  const [locale, setLocale] = useState<Record<string, unknown> | null>(null);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('preferred-language', lang);
  };

  const dir = language === 'en' ? 'ltr' : 'rtl';

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
  }, [language, dir]);

  useEffect(() => {
    let cancelled = false;
    setLocale(null);
    loadLocale(language).then((data) => {
      if (!cancelled) setLocale(data);
    });
    return () => {
      cancelled = true;
    };
  }, [language]);

  const t = (key: string): string | unknown => {
    if (!locale) return key;
    const value = resolveKey(locale, key);
    return value !== undefined && value !== null ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir, localeReady: locale !== null }}>
      {children}
    </LanguageContext.Provider>
  );
};
