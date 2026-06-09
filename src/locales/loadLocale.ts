import type { Language } from './types';

const loaders: Record<Language, () => Promise<{ default: Record<string, unknown> }>> = {
  en: () => import('./en'),
  ar: () => import('./ar'),
  he: () => import('./he'),
};

export function loadLocale(lang: Language): Promise<Record<string, unknown>> {
  return loaders[lang]().then((module) => module.default);
}
