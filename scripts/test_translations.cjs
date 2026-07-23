const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, '../src/i18n/locales');
const locales = ['en', 'tr', 'es', 'de', 'pt', 'fr', 'id', 'ja'];

let baseKeys = null;
let errors = [];

function getKeys(obj, prefix = '') {
  let keys = [];
  for (const key in obj) {
    const fullPath = prefix ? `${prefix}.${key}` : key;
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      keys = keys.concat(getKeys(obj[key], fullPath));
    } else {
      keys.push(fullPath);
    }
  }
  return keys;
}

locales.forEach(lang => {
  const filePath = path.join(localesDir, `${lang}.json`);
  if (!fs.existsSync(filePath)) {
    errors.push(`Missing file: ${lang}.json`);
    return;
  }
  
  const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const keys = getKeys(content);
  
  if (lang === 'en') {
    baseKeys = keys;
  } else {
    // Compare keys
    const missingInLang = baseKeys.filter(k => !keys.includes(k));
    const extraInLang = keys.filter(k => !baseKeys.includes(k));
    
    if (missingInLang.length > 0) errors.push(`[${lang}] Missing keys: ${missingInLang.join(', ')}`);
    if (extraInLang.length > 0) errors.push(`[${lang}] Extra keys: ${extraInLang.join(', ')}`);
  }
});

if (errors.length === 0) {
  console.log('SUCCESS: All 8 translation files have perfectly matching keys.');
} else {
  console.log('ERRORS FOUND IN TRANSLATIONS:');
  errors.forEach(e => console.log(e));
}
