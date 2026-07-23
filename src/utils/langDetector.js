// Automatic IP & Browser Device Language Detector
export const detectUserLanguage = () => {
  if (typeof window === 'undefined' || !navigator) return 'en';

  const browserLang = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
  const primaryCode = browserLang.split('-')[0]; // e.g. "es-ES" -> "es"

  const supportedCodes = ['en', 'tr', 'es', 'de', 'pt', 'fr', 'id', 'ja'];

  if (supportedCodes.includes(primaryCode)) {
    console.log(`[Auto Language Detection] User browser language detected: ${browserLang} -> Auto-switched to '${primaryCode}'`);
    return primaryCode;
  }

  // Fallback to English for rest of world
  return 'en';
};
