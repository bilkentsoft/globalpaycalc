const fs = require('fs');
const path = require('path');
const localesDir = path.join(process.cwd(), 'src/i18n/locales');
const files = fs.readdirSync(localesDir);
const newSubtitle = 'Calculate remote salaries, download HD videos without watermarks, and process images via client-side AI securely and privately.';

const translations = {
  "en.json": "Calculate net remote salaries worldwide, download HD social videos without watermarks, and process images via client-side WebAssembly AI securely and privately.",
  "tr.json": "Tüm dünyada uzaktan çalışma maaşlarını hesaplayın, filigransız HD sosyal videolar indirin ve siber güvenli yapay zeka ile görsel arka planı %100 yerel silin.",
  "es.json": "Calcule salarios remotos netos en todo el mundo, descargue videos sociales en HD sin marcas de agua y procese imágenes mediante IA WebAssembly segura del cliente.",
  "de.json": "Berechnen Sie weltweite Remote-Nettogehälter, laden Sie HD-Social-Videos ohne Wasserzeichen herunter und verarbeiten Sie Bilder sicher mit Client-seitiger KI.",
  "pt.json": "Calcule salários remotos líquidos em todo o mundo, baixe vídeos sociais em HD sem marcas d'água e processe imagens usando IA WebAssembly no cliente com segurança.",
  "fr.json": "Calculez les salaires nets à distance dans le monde entier, téléchargez des vidéos sociales HD sans filigrane et traitez les images via une IA WebAssembly sécurisée.",
  "id.json": "Hitung gaji bersih jarak jauh di seluruh dunia, unduh video sosial HD tanpa tanda air, dan proses gambar melalui AI WebAssembly sisi klien secara aman dan privat.",
  "ja.json": "世界中のネットリモート給与を計算し、透かしなしでHDソーシャルビデオをダウンロードし、安全でプライベートなクライアントサイドWebAssembly AIで画像を処理します。"
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
