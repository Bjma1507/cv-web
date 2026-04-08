import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  if (url.pathname.includes('/en/') || url.pathname.endsWith('/en')) {
    return 'en';
  }
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}