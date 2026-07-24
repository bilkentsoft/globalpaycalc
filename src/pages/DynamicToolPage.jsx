import React from 'react';
import { generateSeoSchema } from '../utils/schemaGenerator';
import { ArrowLeftRight, ShieldAlert, TrendingUp, Info, Link as LinkIcon } from 'lucide-react';
import { getTranslation } from '../i18n';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { generatePseoTaxMatrix, generatePseoLlmMatrix } from '../pseo/matrixEngine';
import pseoTemplates from '../data/pseoTemplates';

// Translation dictionary for DynamicToolPage UI elements in 8 languages
const pageTranslations = {
  en: {
    disclaimer: "Disclaimer",
    disclaimerTax: "Tax laws change frequently and individual circumstances vary. Do not base financial or legal decisions solely on this calculator.",
    disclaimerLlm: "API prices and tokenizer rules are subject to change by the respective providers.",
    estimatesNote: "Calculations are estimations based on standard digital nomad tax schemes (e.g. {perk}) and general cost index multipliers. For official advice, please consult an accountant.",
    summaryTitle: "Tax & Relocation Summary",
    originBase: "Origin Base",
    destinationTarget: "Destination Target",
    effectiveTax: "Effective Tax",
    applicableTaxScheme: "Applicable Tax Scheme",
    realPurchasingPowerBoost: "Real Purchasing Power Boost",
    apiCostBenchmark: "{modelA} vs {modelB} API Cost Benchmark",
    remoteNetSalary: "{origin} → {dest} Remote {status} Net Salary"
  },
  tr: {
    disclaimer: "Yasal Uyarı",
    disclaimerTax: "Vergi kanunları sıklıkla değişir ve bireysel durumlar farklılık gösterir. Finansal veya yasal kararlarınızı yalnızca bu hesaplayıcıya dayandırmayın.",
    disclaimerLlm: "API fiyatları ve tokenizer kuralları ilgili sağlayıcılar tarafından değiştirilebilir.",
    estimatesNote: "Hesaplamalar standart dijital göçebe vergi rejimlerine (örn. {perk}) ve genel yaşam maliyeti endekslerine dayanan tahminlerdir. Resmi tavsiye için lütfen bir mali müşavirle görüşün.",
    summaryTitle: "Vergi ve Taşınma Özeti",
    originBase: "Kaynak Şehir",
    destinationTarget: "Hedef Şehir",
    effectiveTax: "Efektif Vergi",
    applicableTaxScheme: "Vergi Programı",
    realPurchasingPowerBoost: "Alım Gücü Çarpanı",
    apiCostBenchmark: "{modelA} ve {modelB} API Maliyet Karşılaştırması",
    remoteNetSalary: "{origin} → {dest} Uzaktan {status} Net Maaş Analizi"
  },
  es: {
    disclaimer: "Descargo de responsabilidad",
    disclaimerTax: "Las leyes fiscales cambian con frecuencia y las circunstancias individuales varían. No base sus decisiones financieras o legales únicamente en esta calculadora.",
    disclaimerLlm: "Los precios de las API y las reglas de tokenización están sujetos a cambios por parte de los respectivos proveedores.",
    estimatesNote: "Los cálculos son estimaciones basadas en esquemas fiscales estándar para nómadas digitales (por ejemplo, {perk}) y multiplicadores de índice de costo de vida general. Para obtener asesoramiento oficial, consulte a un contable.",
    summaryTitle: "Resumen de Impuestos y Reubicación",
    originBase: "Base de Origen",
    destinationTarget: "Destino de Destino",
    effectiveTax: "Impuesto Efectivo",
    applicableTaxScheme: "Esquema Fiscal Aplicable",
    realPurchasingPowerBoost: "Aumento Real del Poder Adquisitivo",
    apiCostBenchmark: "Comparación de Costos de API de {modelA} vs {modelB}",
    remoteNetSalary: "Salario Neto Remoto de {origin} → {dest} como {status}"
  },
  de: {
    disclaimer: "Haftungsausschluss",
    disclaimerTax: "Steuergesetze ändern sich häufig und die individuellen Umstände variieren. Treffen Sie finanzielle oder rechtliche Entscheidungen nicht ausschließlich auf der Grundlage dieses Rechners.",
    disclaimerLlm: "API-Preise und Tokenizer-Regeln können von den jeweiligen Anbietern geändert werden.",
    estimatesNote: "Die Berechnungen sind Schätzungen, die auf Standardsteuersystemen für digitale Nomaden (z. B. {perk}) und allgemeinen Lebenshaltungskostenindizes basieren. Für eine offizielle Beratung wenden Sie sich bitte an einen Steuerberater.",
    summaryTitle: "Steuer- & Umzugszusammenfassung",
    originBase: "Herkunftsort",
    destinationTarget: "Zielort",
    effectiveTax: "Effektiver Steuersatz",
    applicableTaxScheme: "Anwendbares Steuersystem",
    realPurchasingPowerBoost: "Realer Kaufkraftgewinn",
    apiCostBenchmark: "{modelA} vs {modelB} API-Kostenvergleich",
    remoteNetSalary: "{origin} → {dest} Remote-{status}-Nettogehalt"
  },
  pt: {
    disclaimer: "Aviso de Isenção",
    disclaimerTax: "As leis fiscais mudam frequentemente e as circunstâncias individuais variam. Não baseie as decisões financeiras ou legais exclusivamente nesta calculadora.",
    disclaimerLlm: "Os preços da API e as regras do tokenizador estão sujeitos a alterações pelos respectivos provedores.",
    estimatesNote: "Os cálculos são estimativas baseadas em regimes fiscais padrão para nômades digitais (por exemplo, {perk}) e multiplicadores gerais de custo de vida. Para conselhos oficiais, consulte um contador.",
    summaryTitle: "Resumo de Impostos e Relocação",
    originBase: "Base de Origem",
    destinationTarget: "Destino de Destino",
    effectiveTax: "Imposto Efetivo",
    applicableTaxScheme: "Regime Fiscal Aplicável",
    realPurchasingPowerBoost: "Aumento Real do Poder Aquisitivo",
    apiCostBenchmark: "Comparação de Custos de API {modelA} vs {modelB}",
    remoteNetSalary: "Salário Líquido Remoto de {origin} → {dest} como {status}"
  },
  fr: {
    disclaimer: "Clause de non-responsabilité",
    disclaimerTax: "Les lois fiscales changent fréquemment et les situations individuelles varient. Ne fondez pas vos décisions financières ou juridiques uniquement sur ce calculateur.",
    disclaimerLlm: "Les prix des API et les règles de tokenisation sont sujets à modification par les fournisseurs respectifs.",
    estimatesNote: "Les calculs sont des estimations basées sur les régimes fiscaux standards des nomades digitaux (ex. {perk}) et les indices de coût de la vie. Pour un conseil officiel, veuillez consulter un comptable.",
    summaryTitle: "Résumé des Impôts & Relocalisation",
    originBase: "Base d'Origine",
    destinationTarget: "Destination Cible",
    effectiveTax: "Impôt Effectif",
    applicableTaxScheme: "Régime Fiscal Applicable",
    realPurchasingPowerBoost: "Augmentation Réelle du Pouvoir d'Achat",
    apiCostBenchmark: "Comparatif des Coûts API {modelA} vs {modelB}",
    remoteNetSalary: "Salaire Net Distant de {origin} → {dest} en tant que {status}"
  },
  id: {
    disclaimer: "Penafian",
    disclaimerTax: "Undang-undang perpajakan sering berubah dan keadaan individu berbeda-beda. Jangan mendasarkan keputusan keuangan atau hukum semata-mata pada kalkulator ini.",
    disclaimerLlm: "Harga API dan aturan tokenisasi dapat berubah sewaktu-waktu oleh masing-masing penyedia.",
    estimatesNote: "Perhitungan adalah perkiraan berdasarkan skema pajak nomad digital standar (misalnya {perk}) dan indeks biaya hidup umum. Untuk saran resmi, silakan hubungi akuntan.",
    summaryTitle: "Ringkasan Pajak & Relokasi",
    originBase: "Basis Asal",
    destinationTarget: "Target Tujuan",
    effectiveTax: "Pajak Efektif",
    applicableTaxScheme: "Skema Pajak yang Berlaku",
    realPurchasingPowerBoost: "Peningkatan Daya Beli Nyata",
    apiCostBenchmark: "Tolok Ukur Biaya API {modelA} vs {modelB}",
    remoteNetSalary: "Gaji Bersih Remote {origin} → {dest} sebagai {status}"
  },
  ja: {
    disclaimer: "免責事項",
    disclaimerTax: "税法は頻繁に変更され、個々の状況によって異なります。この計算機のみに基づいて財務上または法律上の決定を下さないでください。",
    disclaimerLlm: "API価格およびトークナイザーのルールは、各プロバイダーによって変更される場合があります。",
    estimatesNote: "計算は、標準的なデジタルノマド税制（例：{perk}）および一般的な生活費指数に基づく見積もりです。公式なアドバイスについては、税理士にご相談ください。",
    summaryTitle: "税金と移住の概要",
    originBase: "元の拠点",
    destinationTarget: "目的地のターゲット",
    effectiveTax: "実効税率",
    applicableTaxScheme: "適用される税制",
    realPurchasingPowerBoost: "実質購買力の向上",
    apiCostBenchmark: "{modelA} と {modelB} の API コスト比較",
    remoteNetSalary: "{origin} から {dest} へのリモート {status} のネット給与"
  }
};

const localizeCity = (cityName, lang) => {
  if (!cityName) return '';
  let result = cityName;
  const countryMap = {
    ' (US)': { tr: ' (ABD)', es: ' (EE. UU.)', de: ' (USA)', pt: ' (EUA)', fr: ' (États-Unis)', id: ' (AS)', ja: ' (米国)', en: ' (US)' },
    ' (Germany)': { tr: ' (Almanya)', es: ' (Alemania)', de: ' (Deutschland)', pt: ' (Alemanha)', fr: ' (Allemagne)', id: ' (Jerman)', ja: ' (ドイツ)', en: ' (Germany)' },
    ' (France)': { tr: ' (Fransa)', es: ' (Francia)', de: ' (Frankreich)', pt: ' (França)', fr: ' (France)', id: ' (Prancis)', ja: ' (フランス)', en: ' (France)' },
    ' (Turkey)': { tr: ' (Türkiye)', es: ' (Turquía)', de: ' (Türkei)', pt: ' (Turquia)', fr: ' (Turquie)', id: ' (Turki)', ja: ' (トルコ)', en: ' (Turkey)' },
    ' (UAE)': { tr: ' (BAE)', es: ' (EAU)', de: ' (VAE)', pt: ' (EAU)', fr: ' (Émirats arabes unis)', id: ' (UEA)', ja: ' (UAE)', en: ' (UAE)' },
    ' (Canada)': { tr: ' (Kanada)', es: ' (Canadá)', de: ' (Kanada)', pt: ' (Canadá)', fr: ' (Canada)', id: ' (Kanada)', ja: ' (カナダ)', en: ' (Canada)' },
    ' (Australia)': { tr: ' (Avustralya)', es: ' (Australia)', de: ' (Australien)', pt: ' (Austrália)', fr: ' (Australie)', id: ' (Australia)', ja: ' (オーストラリア)', en: ' (Australia)' },
    ' (Switzerland)': { tr: ' (İsviçre)', es: ' (Suiza)', de: ' (Schweiz)', pt: ' (Suíça)', fr: ' (Suisse)', id: ' (Swiss)', ja: ' (スイス)', en: ' (Switzerland)' },
    ' (Netherlands)': { tr: ' (Hollanda)', es: ' (Países Bajos)', de: ' (Niederlande)', pt: ' (Países Baixos)', fr: ' (Pays-Bas)', id: ' (Belanda)', ja: ' (オランダ)', en: ' (Netherlands)' },
    ' (South Korea)': { tr: ' (Güney Kore)', es: ' (Corea del Sur)', de: ' (Südkorea)', pt: ' (Corea del Sur)', fr: ' (Corée du Sud)', id: ' (Korea Selatan)', ja: ' (韓国)', en: ' (South Korea)' },
    ' (Poland)': { tr: ' (Polonya)', es: ' (Polonia)', de: ' (Polen)', pt: ' (Polónia)', fr: ' (Pologne)', id: ' (Polandia)', ja: ' (ポーランド)', en: ' (Poland)' },
    ' (Austria)': { tr: ' (Avusturya)', es: ' (Austria)', de: ' (Österreich)', pt: ' (Áustria)', fr: ' (Autriche)', id: ' (Austria)', ja: ' (オーストリア)', en: ' (Austria)' },
    ' (Ireland)': { tr: ' (İrlanda)', es: ' (Irlanda)', de: ' (Irland)', pt: ' (Irlanda)', fr: ' (Irlande)', id: ' (Irlandia)', ja: ' (アイルランド)', en: ' (Ireland)' },
    ' (Sweden)': { tr: ' (İsveç)', es: ' (Suecia)', de: ' (Schweden)', pt: ' (Suécia)', fr: ' (Suède)', id: ' (Swedia)', ja: ' (Stokholm)', en: ' (Sweden)' },
    ' (Denmark)': { tr: ' (Danimarka)', es: ' (Dinamarca)', de: ' (Dänemark)', pt: ' (Dinamarca)', fr: ' (Danemark)', id: ' (Denmark)', ja: ' (デンマーク)', en: ' (Denmark)' },
    ' (Norway)': { tr: ' (Norveç)', es: ' (Noruega)', de: ' (Norwegen)', pt: ' (Noruega)', fr: ' (Norvège)', id: ' (Norwegia)', ja: ' (ノルウェー)', en: ' (Norway)' },
    ' (Belgium)': { tr: ' (Belçika)', es: ' (Bélgica)', de: ' (Belgien)', pt: ' (Bélgica)', fr: ' (Belgique)', id: ' (Belgia)', ja: ' (ベルギー)', en: ' (Belgium)' },
    ' (Italy)': { tr: ' (İtalya)', es: ' (Italia)', de: ' (Italien)', pt: ' (Itália)', fr: ' (Italie)', id: ' (Italia)', ja: ' (イタリア)', en: ' (Italy)' },
    ' (Taiwan)': { tr: ' (Tayvan)', es: ' (Taiwán)', de: ' (Taiwan)', pt: ' (Taiwan)', fr: ' (Taïwan)', id: ' (Taiwan)', ja: ' (台湾)', en: ' (Taiwan)' },
    ' (Spain)': { tr: ' (İspanya)', es: ' (España)', de: ' (Spanien)', pt: ' (Espanha)', fr: ' (Espagne)', id: ' (Spanyol)', ja: ' (スペイン)', en: ' (Spain)' },
    ' (Portugal)': { tr: ' (Portekiz)', es: ' (Portugal)', de: ' (Portugal)', pt: ' (Portugal)', fr: ' (Portugal)', id: ' (Portugal)', ja: ' (ポルトガル)', en: ' (Portugal)' },
    ' (Indonesia)': { tr: ' (Endonezya)', es: ' (Indonesia)', de: ' (Indonesien)', pt: ' (Indonésia)', fr: ' (Indonésie)', id: ' (Indonesia)', ja: ' (インドネシア)', en: ' (Indonesia)' },
    ' (Japan)': { tr: ' (Japonya)', es: ' (Japón)', de: ' (Japan)', pt: ' (Japão)', fr: ' (Japon)', id: ' (Jepang)', ja: ' (日本)', en: ' (Japan)' },
    ' (Thailand)': { tr: ' (Tayland)', es: ' (Tailandia)', de: ' (Thailand)', pt: ' (Tailândia)', fr: ' (Thaïlande)', id: ' (Thailand)', ja: ' (タイ)', en: ' (Thailand)' },
    ' (Colombia)': { tr: ' (Kolombiya)', es: ' (Colombia)', de: ' (Kolumbien)', pt: ' (Colômbia)', fr: ' (Colombie)', id: ' (Kolombia)', ja: ' (コロンビア)', en: ' (Colombia)' },
    ' (Argentina)': { tr: ' (Arjantin)', es: ' (Argentina)', de: ' (Argentinien)', pt: ' (Argentina)', fr: ' (Argentine)', id: ' (Argentina)', ja: ' (アルゼンチン)', en: ' (Argentina)' },
    ' (South Africa)': { tr: ' (Güney Afrika)', es: ' (Sudáfrica)', de: ' (Südafrika)', pt: ' (África do Sul)', fr: ' (Afrique du Sud)', id: ' (Afrika Selatan)', ja: ' (南アフリカ)', en: ' (South Africa)' },
    ' (Mexico)': { tr: ' (Meksika)', es: ' (México)', de: ' (Mexiko)', pt: ' (México)', fr: ' (Mexique)', id: ' (Meksiko)', ja: ' (メキシコ)', en: ' (Mexico)' },
    ' (Estonia)': { tr: ' (Estonya)', es: ' (Estonia)', de: ' (Estland)', pt: ' (Estónia)', fr: ' (Estonie)', id: ' (Estonia)', ja: ' (Estonia)', en: ' (Estonia)' },
    ' (Greece)': { tr: ' (Yunanistan)', es: ' (Grecia)', de: ' (Griechenland)', pt: ' (Grécia)', fr: ' (Grèce)', id: ' (Yunani)', ja: ' (ギリシャ)', en: ' (Greece)' },
    ' (Vietnam)': { tr: ' (Vietnam)', es: ' (Vietnam)', de: ' (Vietnam)', pt: ' (Vietname)', fr: ' (Viêt Nam)', id: ' (Vietnam)', ja: ' (ベトナム)', en: ' (Vietnam)' },
    ' (Malaysia)': { tr: ' (Malezya)', es: ' (Malasia)', de: ' (Malaysia)', pt: ' (Malásia)', fr: ' (Malaisie)', id: ' (Malaysia)', ja: ' (マレーシア)', en: ' (Malaysia)' },
    ' (Hungary)': { tr: ' (Macaristan)', es: ' (Hungría)', de: ' (Ungarn)', pt: ' (Hungria)', fr: ' (Hongrie)', id: ' (Hongaria)', ja: ' (ハンガリー)', en: ' (Hungary)' },
    ' (Czechia)': { tr: ' (Çekya)', es: ' (República Checa)', de: ' (Tschechien)', pt: ' (Chéquia)', fr: ' (Tchéquie)', id: ' (Ceko)', ja: ' (チェコ)', en: ' (Czechia)' },
    ' (Brazil)': { tr: ' (Brezilya)', es: ' (Brasil)', de: ' (Brasilien)', pt: ' (Brasil)', fr: ' (Brésil)', id: ' (Brasil)', ja: ' (ブラジル)', en: ' (Brazil)' },
    ' (Chile)': { tr: ' (Şili)', es: ' (Chile)', de: ' (Chile)', pt: ' (Chile)', fr: ' (Chili)', id: ' (Chili)', ja: ' (チリ)', en: ' (Chile)' },
    ' (Costa Rica)': { tr: ' (Kosta Rika)', es: ' (Costa Rica)', de: ' (Costa Rica)', pt: ' (Costa Rica)', fr: ' (Costa Rica)', id: ' (Kosta Rika)', ja: ' (コスタリカ)', en: ' (Costa Rica)' },
    ' (Georgia)': { tr: ' (Gürcistan)', es: ' (Georgia)', de: ' (Georgien)', pt: ' (Geórgia)', fr: ' (Géorgie)', id: ' (Georgia)', ja: ' (ジョージア)', en: ' (Georgia)' }
  };
  for (const [key, valueMap] of Object.entries(countryMap)) {
    if (result.includes(key)) {
      result = result.replace(key, valueMap[lang] || valueMap.en);
    }
  }

  // Translate specific city names
  const cityMap = {
    'New York City': { tr: 'New York', es: 'Nueva York', de: 'New York', pt: 'Nova Iorque', fr: 'New York', id: 'New York', ja: 'ニューヨーク' },
    'London': { tr: 'Londra', es: 'Londres', de: 'London', pt: 'Londres', fr: 'Londres', id: 'London', ja: 'ロンドン' },
    'Zurich': { tr: 'Zürih', es: 'Zúrich', fr: 'Zurich', ja: 'チューリッヒ' },
    'Seoul': { tr: 'Seul', es: 'Seúl', pt: 'Seul', ja: 'ソウル' },
    'Warsaw': { tr: 'Varşova', es: 'Varsovia', de: 'Warschau', pt: 'Varsóvia', fr: 'Varsovie', id: 'Warsawa', ja: 'ワルシャワ' },
    'Vienna': { tr: 'Viyana', es: 'Viena', de: 'Wien', pt: 'Viena', fr: 'Vienne', id: 'Wina', ja: 'ウィーン' },
    'Stockholm': { tr: 'Stokholm', es: 'Estocolmo', pt: 'Estocolmo', ja: 'ストックホルム' },
    'Copenhagen': { tr: 'Kopenhag', es: 'Copenhague', de: 'Kopenhagen', pt: 'Copenhaga', fr: 'Copenhague', id: 'Kopenhagen', ja: 'コペンハーゲン' },
    'Brussels': { tr: 'Brüksel', es: 'Bruselas', de: 'Brüssel', pt: 'Bruxelas', fr: 'Bruxelles', id: 'Brussel', ja: 'ブリュッセル' },
    'Milan': { tr: 'Milano', es: 'Milán', de: 'Mailand', pt: 'Milão', fr: 'Milan', id: 'Milan', ja: 'ミラノ' },
    'Sydney': { tr: 'Sidney', ja: 'シドニー' },
    'Austin': { ja: 'オースティン' },
    'Lisbon': { tr: 'Lizbon', es: 'Lisboa', de: 'Lissabon', pt: 'Lisboa', fr: 'Lisbonne', id: 'Lisbon', ja: 'リスボン' },
    'Tokyo': { tr: 'Tokyo', es: 'Tokio', pt: 'Tóquio', ja: '東京' },
    'Singapore': { tr: 'Singapur', es: 'Singapur', de: 'Singapur', pt: 'Singapura', fr: 'Singapour', id: 'Singapura', ja: 'シンガポール' },
    'Cape Town': { tr: 'Cape Town', es: 'Ciudad del Cabo', de: 'Kapstadt', pt: 'Cidade do Cabo', fr: 'Le Cap', id: 'Cape Town', ja: 'ケープタウン' },
    'Mexico City': { tr: 'Meksiko', es: 'Ciudad de México', de: 'Mexiko-Stadt', pt: 'Cidade do México', fr: 'Mexico', id: 'Mexico City', ja: 'メキシコシティ' },
    'Athens': { tr: 'Atina', es: 'Grecia', de: 'Athen', pt: 'Atenas', fr: 'Athènes', id: 'Athena', ja: 'アテネ' },
    'Barcelona': { tr: 'Barselona', ja: 'バルセロナ' },
    'Porto': { ja: 'ポルト' },
    'Ho Chi Minh City': { tr: 'Ho Chi Minh', es: 'Ciudad Ho Chi Minh', de: 'Ho-Chi-Minh-Stadt', pt: 'Cidade de Ho Chi Minh', fr: 'Hô-Chi-Minh-Ville', id: 'Kota Ho Chi Minh', ja: 'ホーチミン' },
    'Kuala Lumpur': { ja: 'クアラルンプール' },
    'Budapest': { tr: 'Budapeşte', ja: 'ブダペスト' },
    'Prague': { tr: 'Prag', es: 'Praga', de: 'Prag', pt: 'Praga', fr: 'Prague', id: 'Prag', ja: 'プラハ' },
    'Krakow': { tr: 'Krakow', es: 'Cracovia', de: 'Krakau', pt: 'Cracovie', fr: 'Cracovie', id: 'Krakow', ja: 'クラクフ' },
    'Sao Paulo': { tr: 'Sao Paulo', es: 'São Paulo', pt: 'São Paulo', ja: 'サンパウロ' },
    'Santiago': { ja: 'サンティアゴ' },
    'San Jose': { tr: 'San Jose', es: 'San José', pt: 'San José', ja: 'サンホセ' },
    'Valencia': { tr: 'Valensiya', ja: 'バレンシア' },
    'Cagliari / Sardinia': { tr: 'Cagliari / Sardinya', es: 'Cagliari / Cerdeña', de: 'Cagliari / Sardinien', pt: 'Cagliari / Sardenha', fr: 'Cagliari / Sardaigne', id: 'Cagliari / Sardinia', ja: 'カリアリ / サルデーニャ' },
    'Tbilisi': { tr: 'Tiflis', es: 'Tiflis', de: 'Tiflis', pt: 'Tbilisi', fr: 'Tbilissi', id: 'Tbilisi', ja: 'トビリシ' }
  };
  for (const [key, valueMap] of Object.entries(cityMap)) {
    if (result.startsWith(key)) {
      result = result.replace(key, valueMap[lang] || key);
    }
  }

  return result;
};

const localizeStatus = (label, lang) => {
  const statusMap = {
    'Digital Nomad': { tr: 'Dijital Göçebe', es: 'Nómada Digital', de: 'Digitaler Nomade', pt: 'Nômade Digital', fr: 'Nomade Digital', id: 'Nomaden Digital', ja: 'デジタルノマド', en: 'Digital Nomad' },
    'Freelancer': { tr: 'Serbest Çalışan', es: 'Autónomo', de: 'Freiberufler', pt: 'Freelancer', fr: 'Freelance', id: 'Pekerja Lepas', ja: 'フリーランサー', en: 'Freelancer' }
  };
  return statusMap[label]?.[lang] || statusMap[label]?.en || label;
};

const localizePerk = (perk, lang) => {
  const perkMap = {
    'Special Tax Scheme / Beckham Law': {
      tr: 'Özel Vergi Rejimi / Beckham Yasası',
      es: 'Régimen Fiscal Especial / Ley Beckham',
      de: 'Sondersteuerregelung / Beckham-Gesetz',
      pt: 'Regime Fiscal Especial / Lei Beckham',
      fr: 'Régime fiscal spécial / Loi Beckham',
      id: 'Skema Pajak Khusus / Undang-Undang Beckham',
      ja: '特別税制（ベッカム法）',
      en: 'Special Tax Scheme / Beckham Law'
    },
    'Independent Contractor Exemption': {
      tr: 'Bağımsız Yüklenici Muafiyeti',
      es: 'Exención de Contratista Independiente',
      de: 'Freiberufler-Steuerbefreiung',
      pt: 'Isenção de Contratador Independente',
      fr: 'Exonération pour entrepreneur indépendant',
      id: 'Pengecualian Kontraktor Independen',
      ja: '独立契約者免除',
      en: 'Independent Contractor Exemption'
    }
  };
  return perkMap[perk]?.[lang] || perkMap[perk]?.en || perk;
};

let taxMatrixMap = null;
let llmMatrixMap = null;

const getRouteData = (slug, type) => {
  if (type === 'tax') {
    if (!taxMatrixMap) {
      taxMatrixMap = new Map();
      generatePseoTaxMatrix().forEach(r => taxMatrixMap.set(r.slug, r));
    }
    return taxMatrixMap.get(slug);
  } else {
    if (!llmMatrixMap) {
      llmMatrixMap = new Map();
      generatePseoLlmMatrix().forEach(r => llmMatrixMap.set(r.slug, r));
    }
    return llmMatrixMap.get(slug);
  }
};

export default function DynamicToolPage({ pageData, routeData, type, lang = 'en' }) {
  const t = (path) => getTranslation(lang, path);
  const { slug } = useParams();

  let data = pageData || routeData;
  if (!data && slug) {
    data = getRouteData(slug, type);
  }
  if (!data) return null;

  const isLlmTool = !!data.modelA;
  const { title, description, origin, dest, status, modelA, modelB, useCase } = data;

  const activePageText = pageTranslations[lang] || pageTranslations.en;

  let taxContext = '';
  if (!isLlmTool && dest?.effTax) {
    if (dest.effTax > 0.25) taxContext = t('dynamic.taxHigh');
    else if (dest.effTax < 0.15) taxContext = t('dynamic.taxLow');
    else taxContext = t('dynamic.taxMid');
  }

  // Localized values
  const localizedOriginName = isLlmTool ? '' : localizeCity(origin?.name, lang);
  const localizedDestName = isLlmTool ? '' : localizeCity(dest?.name, lang);
  const localizedStatusLabel = isLlmTool ? '' : localizeStatus(status?.label, lang);
  const localizedStatusPerk = isLlmTool ? '' : localizePerk(status?.perk, lang);

  const dynamicTitle = isLlmTool 
    ? t('dynamic.llmTitle').replace('{{modelA}}', modelA).replace('{{modelB}}', modelB).replace('{{useCase}}', useCase.replace('-', ' '))
    : t('dynamic.taxTitle').replace('{{origin}}', localizedOriginName).replace('{{dest}}', localizedDestName).replace('{{status}}', localizedStatusLabel);

  const dynamicDesc = isLlmTool 
    ? t('dynamic.llmDesc').replace('{{modelA}}', modelA).replace('{{modelB}}', modelB).replace('{{useCase}}', useCase.replace('-', ' '))
    : t('dynamic.taxDesc').replace('{{origin}}', localizedOriginName).replace('{{dest}}', localizedDestName).replace('{{status}}', localizedStatusLabel).replace('{{taxContext}}', taxContext);

  // Render dynamic calculation results
  const originNet = isLlmTool ? 0 : 85000 * (1 - origin.effTax);
  const destNet = isLlmTool ? 0 : 85000 * (1 - dest.effTax);
  const purchasingPowerBoost = isLlmTool ? '1.0' : (destNet / originNet * (100 / dest.costIndex)).toFixed(2);

  // Load appropriate language templates (fall back to 'en')
  const activeTemplates = pseoTemplates[lang] || pseoTemplates['en'];

  // Construct dynamic content body paragraphs
  let introText = '';
  let body1Text = '';
  let body2Text = '';
  let faqs = [];

  if (!isLlmTool) {
    const replacer = (text) => {
      if (!text) return '';
      return text
        .replace(/{origin}/g, localizedOriginName)
        .replace(/{dest}/g, localizedDestName)
        .replace(/{status}/g, localizedStatusLabel)
        .replace(/{perk}/g, localizedStatusPerk)
        .replace(/{destTax}/g, (dest?.effTax * 100).toFixed(0))
        .replace(/{originTax}/g, (origin?.effTax * 100).toFixed(0))
        .replace(/{destNetMonthly}/g, Math.round(destNet / 12).toLocaleString())
        .replace(/{originNetMonthly}/g, Math.round(originNet / 12).toLocaleString())
        .replace(/{destCostIndex}/g, dest?.costIndex || '')
        .replace(/{purchasingPower}/g, purchasingPowerBoost);
    };

    introText = replacer(activeTemplates.taxIntro);
    body1Text = replacer(activeTemplates.taxBody1);
    body2Text = replacer(activeTemplates.taxBody2);
    faqs = (activeTemplates.taxFaqs || []).map(f => ({
      question: replacer(f.q),
      answer: replacer(f.a)
    }));
  } else {
    const replacer = (text) => {
      if (!text) return '';
      return text
        .replace(/{modelA}/g, modelA || '')
        .replace(/{modelB}/g, modelB || '')
        .replace(/{useCase}/g, (useCase || '').replace('-', ' '));
    };

    introText = replacer(activeTemplates.llmIntro);
    body1Text = replacer(activeTemplates.llmBody1);
    body2Text = replacer(activeTemplates.llmBody2);
    faqs = (activeTemplates.llmFaqs || []).map(f => ({
      question: replacer(f.q),
      answer: replacer(f.a)
    }));
  }

  const webAppSchema = generateSeoSchema({
    type: 'WebApplication',
    url: `https://globalpaycalc.com/${isLlmTool ? 'tools' : 'calculator'}/${slug}`,
    name: dynamicTitle,
    description: dynamicDesc
  });

  const faqSchema = generateSeoSchema({
    type: 'FAQPage',
    url: `https://globalpaycalc.com/${isLlmTool ? 'tools' : 'calculator'}/${slug}`,
    faqs
  });

  // Internal Linking Logic
  const allRoutes = isLlmTool ? generatePseoLlmMatrix() : generatePseoTaxMatrix();
  const relatedRoutes = allRoutes
    .filter(r => r.slug !== slug && (isLlmTool ? r.modelA === modelA : r.origin.code === origin.code))
    .slice(0, 3);

  const faqTitle = {
    en: 'Frequently Asked Questions',
    tr: 'Sıkça Sorulan Sorular',
    es: 'Preguntas Frecuentes',
    de: 'Häufig gestellte Fragen',
    pt: 'Perguntas Frequentes',
    fr: 'Questions Fréquemment Posées',
    id: 'Pertanyaan yang Sering Diajukan',
    ja: 'よくある質問'
  }[lang] || 'Frequently Asked Questions';

  return (
    <div className="space-y-8 max-w-4xl mx-auto my-8 animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="space-y-3 text-center">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold">
          <ArrowLeftRight className="w-3.5 h-3.5" />
          <span>{isLlmTool ? t('dynamic.llmHeader') : t('dynamic.taxHeader')}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {dynamicTitle}
        </h1>
        <p className="text-slate-400 text-sm leading-relaxed max-w-2xl mx-auto">
          {dynamicDesc}
        </p>
      </div>

      {/* Dynamic Comparison Card */}
      <div className="glass-card glass-card-hover p-6 sm:p-8 rounded-2xl border-brand-500/20 space-y-6">
        <h3 className="text-sm font-bold text-white flex items-center space-x-2">
          <TrendingUp className="w-4.5 h-4.5 text-brand-400" />
          <span className="gradient-text">{isLlmTool ? t('dynamic.llmHeader') : t('dynamic.taxHeader')}</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Origin Net / Model A */}
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2 relative overflow-hidden group">
            <div className="text-[10px] text-slate-400 font-semibold uppercase">{isLlmTool ? modelA : t('dynamic.originNet').replace('{{origin}}', origin?.flag + ' ' + localizedOriginName)}</div>
            <div className="text-2xl font-mono font-extrabold text-white">${isLlmTool ? 'N/A' : `${Math.round(originNet / 12).toLocaleString()}/mo`}</div>
            {!isLlmTool && (
              <>
                <div className="w-full bg-slate-800 rounded-full h-2">
                  <div className="bg-slate-500 h-2 rounded-full transition-all duration-1000" style={{ width: `${(1 - origin?.effTax) * 100}%` }}></div>
                </div>
                <span className="text-[10px] text-slate-500 font-mono">{t('dynamic.taxRate').replace('{{rate}}', (origin?.effTax * 100).toFixed(0))}</span>
              </>
            )}
          </div>

          {/* Destination Net / Model B */}
          <div className="p-4 rounded-xl bg-brand-500/10 border border-brand-500/20 space-y-2 relative overflow-hidden group">
            <div className="text-[10px] text-brand-300 font-semibold uppercase">{isLlmTool ? modelB : t('dynamic.destNet').replace('{{dest}}', dest?.flag + ' ' + localizedDestName)}</div>
            <div className="text-2xl font-mono font-extrabold text-white">${isLlmTool ? 'N/A' : `${Math.round(destNet / 12).toLocaleString()}/mo`}</div>
            {!isLlmTool && (
              <>
                <div className="w-full bg-slate-800 rounded-full h-2">
                  <div className="bg-brand-500 h-2 rounded-full transition-all duration-1000 delay-300" style={{ width: `${(1 - dest?.effTax) * 100}%` }}></div>
                </div>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-[10px] text-brand-400/70 font-mono">{t('dynamic.taxRate').replace('{{rate}}', (dest?.effTax * 100).toFixed(0))}</span>
                  <span className="text-[10px] text-brand-400 font-bold bg-brand-500/20 px-2 rounded-full py-0.5">{purchasingPowerBoost}x {t('dynamic.purchasingPower')}</span>
                </div>
              </>
            )}
            
            {/* Background Glow */}
            <div className="absolute -inset-4 bg-brand-500/5 blur-xl group-hover:bg-brand-500/10 transition duration-500 opacity-0 group-hover:opacity-100"></div>
          </div>
        </div>

        {!isLlmTool && (
          <div className="pt-4 border-t border-slate-800/60 flex items-start space-x-3">
            <ShieldAlert className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <p className="text-xs text-slate-400 leading-relaxed">
              * {activePageText.estimatesNote.replace('{perk}', localizedStatusPerk)}
            </p>
          </div>
        )}
      </div>

      {/* Localized Rich Educational Content Block */}
      <article className="glass-card p-6 sm:p-10 rounded-2xl border-slate-800 space-y-8 mt-12">
        <header className="space-y-2 border-b border-slate-800 pb-6">
          <h2 className="text-2xl font-bold text-white flex items-center space-x-3">
            <Info className="w-6 h-6 text-brand-400 flex-shrink-0" />
            <span>
              {isLlmTool 
                ? activePageText.apiCostBenchmark.replace('{modelA}', modelA.toUpperCase()).replace('{modelB}', modelB.toUpperCase())
                : activePageText.remoteNetSalary.replace('{origin}', localizedOriginName).replace('{dest}', localizedDestName).replace('{status}', localizedStatusLabel)
              }
            </span>
          </h2>
          <p className="text-slate-400 text-sm font-medium">
            {isLlmTool ? t('dynamic.relatedLlmDesc') : t('dynamic.relatedTaxDesc')}
          </p>
        </header>

        {/* 300+ Word Dynamic & Localized Educational Guide */}
        <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
          <p>{introText}</p>
          <p>{body1Text}</p>
          {!isLlmTool && (
            <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl my-4">
              <h4 className="font-bold text-white mb-2">{activePageText.summaryTitle}</h4>
              <ul className="list-disc list-inside space-y-1 text-slate-400 text-xs">
                <li><strong>{activePageText.originBase} ({localizedOriginName}):</strong> {activePageText.effectiveTax} ~{(origin?.effTax * 100).toFixed(0)}%</li>
                <li><strong>{activePageText.destinationTarget} ({localizedDestName}):</strong> {activePageText.effectiveTax} ~{(dest?.effTax * 100).toFixed(0)}%</li>
                <li><strong>{activePageText.applicableTaxScheme}:</strong> {localizedStatusPerk}</li>
                <li><strong>{activePageText.realPurchasingPowerBoost}:</strong> {purchasingPowerBoost}x</li>
              </ul>
            </div>
          )}
          <p>{body2Text}</p>
        </div>

        <div className="space-y-8 pt-4 border-t border-slate-800">
          <h3 className="text-xl font-bold text-white">{faqTitle}</h3>
          {faqs.map((faq, index) => (
            <section key={index} className="space-y-2">
              <h4 className="text-base font-semibold text-slate-200">{faq.question}</h4>
              <p className="text-sm text-slate-400 leading-relaxed">{faq.answer}</p>
            </section>
          ))}
        </div>

        <footer className="pt-6 border-t border-slate-800 text-xs text-slate-500">
          <p>
            <strong>{activePageText.disclaimer}:</strong> 
            {isLlmTool ? ` ${activePageText.disclaimerLlm}` : ` ${activePageText.disclaimerTax}`}
          </p>
        </footer>
      </article>

      {/* Internal Linking Matrix */}
      {relatedRoutes.length > 0 && (
        <section className="mt-12 space-y-4">
          <h3 className="text-xl font-bold text-white flex items-center space-x-2">
            <LinkIcon className="w-5 h-5 text-brand-400" />
            <span>{t('dynamic.relatedComparisons')}</span>
          </h3>
          <p className="text-sm text-slate-400 mb-6">
            {isLlmTool ? t('dynamic.relatedLlmDesc') : t('dynamic.relatedTaxDesc')}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedRoutes.map(route => {
              const relOrigin = isLlmTool ? '' : localizeCity(route.origin.name, lang);
              const relDest = isLlmTool ? '' : localizeCity(route.dest.name, lang);
              return (
                <Link 
                  key={route.slug} 
                  to={`/${lang === 'en' ? '' : lang + '/'}${isLlmTool ? 'tools' : 'calculator'}/${route.slug}`}
                  className="p-4 rounded-xl border border-slate-800 bg-slate-900/50 hover:bg-slate-800 transition block group"
                >
                  <div className="text-xs text-brand-400 mb-1">
                    {isLlmTool ? route.useCase.replace('-', ' ') : `${relOrigin} → ${relDest}`}
                  </div>
                  <div className="text-sm font-semibold text-slate-200 group-hover:text-white line-clamp-2">
                    {route.title}
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* Static JSON-LD Schema Injection for SSR */}
      <Helmet>
        <title>{dynamicTitle} | GlobalPayCalc</title>
        <meta name="description" content={dynamicDesc} />
      </Helmet>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

    </div>
  );
}
