import en from './locales/en.json';
import tr from './locales/tr.json';
import es from './locales/es.json';
import de from './locales/de.json';
import pt from './locales/pt.json';
import fr from './locales/fr.json';
import id from './locales/id.json';
import ja from './locales/ja.json';

const translations = {
  en,
  tr,
  es,
  de,
  pt,
  fr,
  id,
  ja
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
  { code: 'tr', label: 'Türkçe 🇹🇷' },
  { code: 'es', label: 'Español 🇪🇸' },
  { code: 'de', label: 'Deutsch 🇩🇪' },
  { code: 'pt', label: 'Português 🇧🇷' },
  { code: 'fr', label: 'Français 🇫🇷' },
  { code: 'id', label: 'Bahasa Indonesia 🇮🇩' },
  { code: 'ja', label: '日本語 🇯🇵' }
];
