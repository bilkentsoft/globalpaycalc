const fs = require('fs');
const path = require('path');

const heroTranslations = {
  tr: "Yaşam maliyeti, vergi dilimleri ve döviz dalgalanmalarını hesaba katarak 150+ ülke için net uzaktan çalışma maaşlarını hesaplayın. Sosyal medya videolarını filigransız indirin ve istemci tarafı AI ile arka plan temizliği yapın.",
  es: "Calcule salarios remotos netos en más de 150 países teniendo en cuenta el costo de vida, las escalas impositivas y las fluctuaciones monetarias. Descargue videos HD sin marca de agua y procese imágenes usando IA.",
  de: "Berechnen Sie Netto-Remote-Gehälter für über 150 Länder unter Berücksichtigung von Lebenshaltungskosten, Steuerklassen und Währungsschwankungen. Laden Sie HD-Videos ohne Wasserzeichen herunter und bearbeiten Sie Bilder mit lokaler KI.",
  pt: "Calcule salários remotos líquidos em mais de 150 países, considerando o custo de vida, faixas de impostos e flutuações cambiais. Baixe vídeos HD sem marca d'água e processe imagens usando IA local.",
  fr: "Calculez les salaires nets à distance dans plus de 150 pays en tenant compte du coût de la vie, des tranches d'imposition et des fluctuations monétaires. Téléchargez des vidéos HD sans filigrane et traitez des images avec l'IA.",
  id: "Hitung gaji bersih jarak jauh di 150+ negara dengan mempertimbangkan biaya hidup, golongan pajak, dan fluktuasi mata uang. Unduh video HD tanpa tanda air dan proses gambar menggunakan AI.",
  ja: "生活費、税区分、為替変動を考慮して、150か国以上の純リモート給与を計算します。透かしなしでHDソーシャルビデオを即座にダウンロードし、クライアント側のAIを使用して画像を処理します。"
};

const localesDir = path.join(__dirname, '../src/i18n/locales');
for (const [lang, text] of Object.entries(heroTranslations)) {
  const filePath = path.join(localesDir, `${lang}.json`);
  if (fs.existsSync(filePath)) {
    const json = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    if (json.hero && json.hero.subtitle) {
      json.hero.subtitle = text;
      fs.writeFileSync(filePath, JSON.stringify(json, null, 2));
      console.log(`Updated LSI keywords in ${lang}.json`);
    }
  }
}
