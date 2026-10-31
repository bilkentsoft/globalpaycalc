import en from './locales/en.json';
import tr from './locales/tr.json';

const translations = {
  en,
  tr
};

export const getTranslation = (lang, path) => {
  const selectedLang = translations[lang] || translations.en;
  const keys = path.split('.');
  let current = selectedLang;

  for (const key of keys) {
    if (current && current[key] !== undefined) {
      current = current[key];
    } else {
      let fallback = translations.en;
      for (const fKey of keys) {
        if (fallback && fallback[fKey] !== undefined) {
          fallback = fallback[fKey];
        } else {
          return path;
        }
      }
      return fallback;
    }
  }

  return current;
};

export const supportedLanguages = [
  { code: 'en', label: 'English 🇺🇸' },
  { code: 'tr', label: 'Türkçe 🇹🇷' }
];
