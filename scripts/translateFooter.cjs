const fs = require('fs');
const path = require('path');

const footerTranslations = {
  en: { aboutUs: "About Us", contact: "Contact" },
  tr: { aboutUs: "Hakkımızda", contact: "İletişim" },
  es: { aboutUs: "Sobre Nosotros", contact: "Contacto" },
  de: { aboutUs: "Über uns", contact: "Kontakt" },
  pt: { aboutUs: "Sobre Nós", contact: "Contato" },
  fr: { aboutUs: "À propos de nous", contact: "Contact" },
  id: { aboutUs: "Tentang Kami", contact: "Kontak" },
  ja: { aboutUs: "私たちについて", contact: "お問い合わせ" }
};

const localesDir = path.join(__dirname, '../src/i18n/locales');
for (const [lang, data] of Object.entries(footerTranslations)) {
  const filePath = path.join(localesDir, `${lang}.json`);
  if (fs.existsSync(filePath)) {
    const json = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    if (!json.footer) json.footer = {};
    json.footer.aboutUs = data.aboutUs;
    json.footer.contact = data.contact;
    fs.writeFileSync(filePath, JSON.stringify(json, null, 2));
    console.log(`Updated footer links in ${lang}.json`);
  }
}
