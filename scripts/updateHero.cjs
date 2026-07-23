const fs = require('fs');
const path = require('path');
const localesDir = path.join(process.cwd(), 'src/i18n/locales');
const files = fs.readdirSync(localesDir);
const newSubtitle = 'Calculate remote salaries, download HD videos without watermarks, and process images via client-side AI securely and privately.';

const translations = {
  "en.json": "Calculate remote salaries, download HD videos without watermarks, and process images via client-side AI securely and privately.",
  "tr.json": "Uzaktan çalışma maaşlarını hesaplayın, filigransız HD video indirin ve siber güvenli yapay zeka ile görsel arka planı silin.",
  "es.json": "Calcule salarios remotos, descargue videos HD sin marcas de agua y procese imágenes mediante IA segura del lado del cliente.",
  "de.json": "Berechnen Sie Remote-Gehälter, laden Sie HD-Videos ohne Wasserzeichen herunter und verarbeiten Sie Bilder mit sicherer KI.",
  "pt.json": "Calcule salários remotos, baixe vídeos em HD sem marca d'água e processe imagens usando IA segura no cliente.",
  "fr.json": "Calculez les salaires à distance, téléchargez des vidéos HD sans filigrane et traitez les images via une IA sécurisée.",
  "id.json": "Hitung gaji jarak jauh, unduh video HD tanpa tanda air, dan proses gambar melalui AI sisi klien secara aman.",
  "ja.json": "リモート給与を計算し、透かしなしでHD動画をダウンロードし、安全なクライアントサイドAIで画像を処理します。"
};

files.forEach(file => {
  if (translations[file]) {
    const filePath = path.join(localesDir, file);
    let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    if (data.hero) {
      data.hero.subtitle = translations[file];
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
      console.log('Updated ' + file);
    }
  }
});
