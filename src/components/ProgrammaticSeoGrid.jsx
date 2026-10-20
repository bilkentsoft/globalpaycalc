import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { generateUnifiedSchema, injectJsonLdSchema } from '../utils/schemaGenerator';
import { HelpCircle, ChevronDown, ChevronUp, Lock, RefreshCw, Star, Globe, BookOpen, ShieldCheck, ExternalLink } from 'lucide-react';
import { getTranslation } from '../i18n';

// Localized FAQ Database for all 8 Languages (Factually accurate, compliant with Google Publisher Policies)
const faqData = {
  en: [
    { question: "Is my personal salary data or file upload secure on GlobalPayCalc?", answer: "Yes, 100%. All processing (salary tax simulations, contractor comparisons, image compression, and token cost estimations) runs locally inside your browser's memory (RAM). We never upload, store, or log your financial inputs or files on external servers." },
    { question: "How does the Global Take-Home Salary & FX Fee engine work?", answer: "Our calculation engine applies statutory income tax brackets, social security contributions, and mid-market exchange rate benchmarks to estimate net take-home pay and reveal hidden cross-border transfer markups across 40+ countries." },
    { question: "Where do the tax brackets, Beckham Law rates, and cost-of-living figures come from?", answer: "Our tax and social security parameters are compiled from official statutory publications—including Spain's Agencia Tributaria (BOE / Ley 35/2006 Art. 93), the US IRS, the UK HMRC, Germany's BMF, and OECD Taxing Wages reports—alongside international purchasing power parity (PPP) benchmarks." },
    { question: "Why are GlobalPayCalc calculators free to use?", answer: "We fund our hosting and ongoing tax-table maintenance through non-intrusive Google AdSense advertising. This allows us to provide all 14 financial and developer calculators free of charge without paywalls or subscriptions." },
    { question: "How is the AI Token API Cost Simulator calculated?", answer: "Token cost estimates use published per-1M input, cached input, and output token rates from official LLM API documentation (OpenAI, Anthropic, Google Gemini, Meta Llama, DeepSeek, and Mistral) combined with your custom daily request and cache-hit assumptions." },
    { question: "Can I rely on these calculators for my final tax filing?", answer: "GlobalPayCalc provides educational financial models and side-by-side statutory comparisons. Because individual deductions, regional surcharges, and bilateral tax treaties vary, always verify your final liability with a qualified tax advisor (CPA, asesor fiscal, or Steuerberater)." }
  ],
  tr: [
    { question: "GlobalPayCalc üzerinde girdiğim maaş verileri veya dosyalar güvende mi?", answer: "Evet, %100. Maaş ve vergi simülasyonları, B2B sözleşmeli çalışan karşılaştırmaları, görsel sıkıştırma ve token maliyeti hesaplamalarının tamamı tarayıcınızın yerel belleğinde (RAM) gerçekleşir. Finansal verileriniz hiçbir sunucuya gönderilmez veya kaydedilmez." },
    { question: "Küresel Net Maaş, Vergi ve FX Komisyon Motoru nasıl çalışır?", answer: "Hesaplama motorumuz; ABD, İngiltere, Almanya, İspanya, Türkiye ve 40+ ülkenin resmi gelir vergisi dilimlerini, sosyal güvenlik kesintilerini ve reel piyasa döviz kurlarını kullanarak elinize geçecek tahmini net tutarı ve döviz transfer marjlarını hesaplar." },
    { question: "Vergi dilimleri, Beckham Yasası oranları ve yaşam maliyeti verileri nereden alınıyor?", answer: "Vergi ve sosyal güvenlik parametreleri; İspanya Agencia Tributaria (BOE / Ley 35/2006 Madde 93), ABD IRS, İngiltere HMRC, Almanya BMF ve OECD Taxing Wages raporları gibi resmi mevzuat kaynaklarından ve uluslararası satın alma gücü paritesi (PPP) endekslerinden derlenmektedir." },
    { question: "Bu platform neden tamamen ücretsiz?", answer: "Sunucu ve veri güncelleme maliyetlerimizi kullanıcı deneyimini bozmayan Google AdSense reklamlarıyla karşılıyoruz. Bu sayede 14 finansal ve geliştirici hesaplama aracımızın tamamını abonelik veya ücret talep etmeden ücretsiz sunabiliyoruz." },
    { question: "Yapay Zeka Token API Maliyet Simülatörü nasıl hesaplama yapar?", answer: "Maliyet tahminleri; OpenAI, Anthropic, Google Gemini, Meta Llama, DeepSeek ve Mistral'in resmi API fiyatlandırma sayfalarında yayınlanan 1 milyon girdi, önbellek (prompt caching) ve çıktı token tarifelerine dayanır." },
    { question: "Resmi vergi beyannamem için yalnızca bu hesaplayıcıyı kullanabilir miyim?", answer: "GlobalPayCalc eğitim ve karşılaştırma amaçlı finansal simülasyonlar sunar. Kişisel indirimler, bölgesel vergiler ve çifte vergilendirmeyi önleme anlaşmaları farklılık gösterebileceğinden, resmi beyannameniz için mutlaka yetkili bir mali müşavire danışmalısınız." }
  ],
  es: [
    { question: "¿Están seguros mis datos salariales o archivos en GlobalPayCalc?", answer: "Sí, 100%. Todos los cálculos (simulaciones de IRPF, Ley Beckham, comparativas autónomo vs empleado y compresión de archivos) se ejecutan localmente en la memoria RAM de su navegador. No almacenamos ni enviamos sus datos financieros a ningún servidor." },
    { question: "¿Cómo funciona la calculadora de Salario Neto y comisiones cambiarias (FX)?", answer: "Nuestro motor aplica los tramos oficiales del impuesto sobre la renta, las cotizaciones a la Seguridad Social y el tipo de cambio medio del mercado para estimar su salario neto y revelar los márgenes ocultos en transferencias internacionales." },
    { question: "¿De dónde provienen los datos de la Ley Beckham (Art. 93 LIRPF) y tramos fiscales?", answer: "Los parámetros fiscales se recopilan de fuentes oficiales, incluyendo la Agencia Tributaria de España (AEAT, Ley 35/2006 Art. 93 reformado por la Ley 28/2022 y Ley 7/2024), el IRS de EE.UU., HMRC del Reino Unido, el BMF de Alemania y los informes Taxing Wages de la OCDE." },
    { question: "¿Por qué todas las calculadoras son gratuitas?", answer: "Financiamos el mantenimiento técnico y la actualización de tablas impositivas mediante publicidad no intrusiva de Google AdSense, manteniendo las 14 herramientas gratuitas y sin suscripciones." },
    { question: "¿Cómo se calculan los costes en el Simulador de Tokens de API de IA?", answer: "Las estimaciones utilizan las tarifas oficiales por cada millón de tokens de entrada, entrada en caché y salida publicadas por OpenAI, Anthropic, Google Gemini, Meta Llama y Mistral." },
    { question: "¿Sustituyen estos cálculos el asesoramiento de un asesor fiscal?", answer: "No. GlobalPayCalc ofrece simulaciones informativas y educativas. Dado que las deducciones autonómicas, convenios de doble imposición y situaciones familiares varían, consulte siempre a un asesor fiscal colegiado antes de presentar los Modelos 149 o 151." }
  ],
  de: [
    { question: "Sind meine Gehaltsdaten oder Dateien auf GlobalPayCalc sicher?", answer: "Ja, zu 100 %. Alle Berechnungen (Brutto-Netto-Simulationen, Freelancer-vs.-Festanstellung-Vergleiche, Bildkomprimierung und Token-Kalkulationen) erfolgen lokal im Arbeitsspeicher (RAM) Ihres Browsers. Es werden keine Finanzdaten auf Server hochgeladen." },
    { question: "Wie funktioniert der Brutto-Netto- und FX-Gebühren-Rechner?", answer: "Unser Rechner kombiniert gesetzliche Einkommensteuertarife, Sozialversicherungsbeiträge (Kranken-, Renten-, Arbeitslosen- und Pflegeversicherung) sowie reale Devisenmittelkurse für über 40 Länder." },
    { question: "Woher stammen die Steuersätze und Sozialversicherungsparameter?", answer: "Die Berechnungsgrundlagen stammen aus offiziellen Quellen wie dem Bundesministerium der Finanzen (BMF), der spanischen Agencia Tributaria (AEAT), dem US-amerikanischen IRS, der britischen HMRC sowie den OECD-Berichten „Taxing Wages“." },
    { question: "Warum ist GlobalPayCalc kostenlos nutzbar?", answer: "Wir finanzieren den Betrieb und die laufende Pflege der Steuertabellen über dezente Google AdSense-Anzeigen, sodass alle 14 Rechner ohne Abonnement kostenlos zur Verfügung stehen." },
    { question: "Wie genau ist der KI-Token- und API-Kostensimulator?", answer: "Die Berechnungen basieren auf den veröffentlichten API-Preisen pro 1 Million Input-, Cached-Input- und Output-Token von OpenAI, Anthropic, Google Gemini, Meta Llama und Mistral." },
    { question: "Ersetzt der Rechner eine professionelle Steuerberatung?", answer: "Nein. Unsere Tools dienen der unverbindlichen Orientierung und Finanzplanung. Für verbindliche Auskünfte oder Ihre Steuererklärung wenden Sie sich bitte an einen zugelassenen Steuerberater." }
  ],
  pt: [
    { question: "Meus dados salariais ou arquivos enviados estão seguros no GlobalPayCalc?", answer: "Sim, 100%. Todos os cálculos (salário líquido, comparativo CLT vs PJ/B2B, Lei Beckham e compressão de arquivos) ocorrem localmente na memória RAM do seu navegador. Não armazenamos seus dados em servidores externos." },
    { question: "Como funciona a calculadora de Salário Líquido e taxas de câmbio (FX)?", answer: "Nosso motor aplica as faixas oficiais de imposto de renda, contribuições previdenciárias e taxas de câmbio comerciais para estimar sua remuneração líquida em mais de 40 países." },
    { question: "De onde vêm as tabelas de impostos e índices de custo de vida?", answer: "Os parâmetros são compilados de fontes oficiais, incluindo a Receita Federal, Agencia Tributaria da Espanha (AEAT), IRS (EUA), HMRC (Reino Unido), BMF (Alemanha) e relatórios da OCDE." },
    { question: "Por que a plataforma é totalmente gratuita?", answer: "Mantemos o projeto através de anúncios não intrusivos do Google AdSense, permitindo oferecer todas as 14 calculadoras financeiras e técnicas gratuitamente sem mensalidades." },
    { question: "Como funciona o simulador de custos de APIs de IA?", answer: "As estimativas utilizam os preços oficiais por milhão de tokens de entrada, cache e saída publicados pela OpenAI, Anthropic, Google Gemini, Meta e Mistral." },
    { question: "Posso usar os resultados como declaração fiscal oficial?", answer: "As ferramentas têm caráter educativo e informativo. Para declarações fiscais formais ou planejamento tributário internacional, consulte sempre um contador certificado." }
  ],
  fr: [
    { question: "Mes données salariales et mes fichiers sont-ils sécurisés sur GlobalPayCalc ?", answer: "Oui, à 100 %. Tous les calculs (salaire brut/net, comparatif CDI vs Freelance B2B, Loi Beckham et compression WebAssembly) s'exécutent localement dans la mémoire vive (RAM) de votre navigateur. Aucune donnée n'est stockée sur nos serveurs." },
    { question: "Comment fonctionne le calculateur de salaire net et de frais de change ?", answer: "Notre moteur intègre les barèmes officiels de l'impôt sur le revenu, les cotisations sociales et les taux de change interbancaires pour estimer votre revenu net dans plus de 40 pays." },
    { question: "D'où proviennent les barèmes fiscaux et les données sur le coût de la vie ?", answer: "Les données proviennent de publications officielles : administration fiscale française, Agencia Tributaria espagnole (AEAT), IRS américain, HMRC britannique, BMF allemand et rapports « Taxing Wages » de l'OCDE." },
    { question: "Pourquoi ce service est-il entièrement gratuit ?", answer: "Nous finançons l'hébergement et la mise à jour des barèmes fiscaux via des annonces Google AdSense non intrusives, ce qui permet un accès gratuit et sans abonnement à nos 14 outils." },
    { question: "Comment sont calculés les coûts des tokens d'API IA ?", answer: "Les prix sont basés sur les grilles tarifaires officielles par million de tokens (entrée, cache et sortie) d'OpenAI, Anthropic, Google Gemini, Meta et Mistral." },
    { question: "Ces simulateurs remplacent-ils un expert-comptable ou un avocat fiscaliste ?", answer: "Non. Nos simulateurs fournissent des estimations éducatives. Consultez toujours un expert-comptable ou un conseiller fiscal qualifié pour vos déclarations officielles." }
  ],
  id: [
    { question: "Apakah data gaji atau berkas saya aman di GlobalPayCalc?", answer: "Ya, 100% aman. Semua simulasi pajak gaji, perbandingan kontraktor B2B, kompresi berkas, dan estimasi token AI berjalan langsung di memori peramban (RAM) perangkat Anda tanpa disimpan di server kami." },
    { question: "Bagaimana cara kerja kalkulator Gaji Bersih dan biaya nilai tukar (FX)?", answer: "Mesin kami menggabungkan tarif pajak penghasilan resmi, potongan jaminan sosial, dan kurs nilai tukar pasar tengah untuk menghitung gaji bersih di lebih dari 40 negara." },
    { question: "Dari mana sumber data tarif pajak dan biaya hidup?", answer: "Parameter pajak dikumpulkan dari publikasi resmi pemerintah seperti IRS (AS), HMRC (Inggris), AEAT (Spanyol), BMF (Jerman), Direktorat Jenderal Pajak, serta laporan OECD Taxing Wages." },
    { question: "Mengapa semua kalkulator ini gratis digunakan?", answer: "Kami membiayai pemeliharaan platform melalui iklan Google AdSense yang rapi dan tidak mengganggu, sehingga ke-14 alat kalkulasi tetap gratis tanpa biaya langganan." },
    { question: "Bagaimana cara perhitungan simulator biaya API Token AI?", answer: "Estimasi menggunakan tarif resmi per 1 juta token input, cache, dan output dari dokumentasi resmi OpenAI, Anthropic, Google Gemini, Meta, dan Mistral." },
    { question: "Apakah hasil kalkulator ini merupakan nasihat pajak resmi?", answer: "Tidak. Kalkulator ini disediakan untuk tujuan edukasi dan perencanaan awal. Selalu konsultasikan kewajiban pajak resmi Anda dengan konsultan pajak bersertifikat." }
  ],
  ja: [
    { question: "GlobalPayCalcに入力した給与データやファイルは安全ですか？", answer: "はい、100%安全です。手取り給与計算、正社員と業務委託（B2B）の比較、ベッカム法シミュレーション、画像圧縮などの処理はすべてお使いのブラウザのメモリ（RAM）内でローカルに実行されます。外部サーバーにデータが送信・保存されることはありません。" },
    { question: "グローバル手取り給与・為替手数料計算ツールの仕組みは？", answer: "世界40カ国以上の法定所得税率、社会保険料控除、および実勢為替レート（ミッドマーケットレート）を統合し、手取り給与額と国際送金時の隠れた為替スプレッドを算出します。" },
    { question: "税率や社会保険料のデータはどこから取得していますか？", answer: "各国の公的機関（米国IRS、英国HMRC、ドイツ連邦財務省BMF、スペイン税務庁AEAT、日本国税庁など）の法定税率表およびOECDの「Taxing Wages」統計レポートを参照しています。" },
    { question: "なぜすべての計算ツールを無料で利用できるのですか？", answer: "当サイトはGoogle AdSense広告の収益によってサーバー維持費やデータ更新費用を賄っており、14種類の専門計算ツールを登録不要・完全無料で提供しています。" },
    { question: "AIトークンAPIコストシミュレーターの計算根拠は？", answer: "OpenAI、Anthropic、Google Gemini、Meta Llama、Mistralなどの公式API料金ページで公開されている100万トークンあたりの入力・キャッシュ・出力単価に基づいています。" },
    { question: "計算結果をそのまま確定申告や税務申告に使用できますか？", answer: "いいえ。当サイトの計算機は教育および概算比較を目的としています。実際の税額は個別の控除や租税条約により異なるため、最終的な申告にあたっては税理士や公認会計士にご相談ください。" }
  ]
};

const uiTexts = {
  en: {
    faqTitle: "Frequently Asked Questions & Methodology",
    faqSubtitle: "Learn how our browser-based calculation engines, statutory data sources, and privacy protections work.",
    badge1: "100% Client-Side RAM Processing",
    badge2: "Aligned with Official OECD & Statutory Tax Tables",
    badge3: "Free Access Across All 14 Financial & Dev Tools",
    hubTitle: "Complete Suite of Global Financial, Tax & Developer Calculators",
    hubSubtitle: "Explore our 14 specialized interactive engines with full statutory breakdowns and worked examples.",
    sourcesTitle: "Official Statutory Tax & Data References",
    sourcesDesc: "Our calculators reference primary government tax authorities and international economic benchmarks:"
  },
  tr: {
    faqTitle: "Sıkça Sorulan Sorular ve Metodoloji",
    faqSubtitle: "Tarayıcı tabanlı hesaplama motorlarımızın, resmi veri kaynaklarımızın ve gizlilik ilkelerimizin işleyişi.",
    badge1: "%100 Tarayıcı Belleğinde (RAM) Yerel İşlem",
    badge2: "OECD ve Resmi Vergi Mevzuatlarıyla Uyumlu",
    badge3: "14 Finansal ve Geliştirici Aracına Ücretsiz Erişim",
    hubTitle: "Küresel Finans, Vergi ve Geliştirici Hesaplama Araçları Dizini",
    hubSubtitle: "Resmi mevzuat analizleri ve örnek hesaplamalarla desteklenen 14 interaktif aracımızı inceleyin.",
    sourcesTitle: "Resmi Vergi Daireleri ve Veri Kaynakları",
    sourcesDesc: "Hesaplama motorlarımız birincil resmi maliye kurumlarını ve uluslararası ekonomik raporları referans alır:"
  },
  es: {
    faqTitle: "Preguntas Frecuentes y Metodología",
    faqSubtitle: "Conozca cómo funcionan nuestros motores de cálculo local, fuentes oficiales y protección de privacidad.",
    badge1: "Procesamiento 100% Local en Memoria RAM",
    badge2: "Basado en Tablas Oficiales de la AEAT, IRS y OCDE",
    badge3: "Acceso Gratuito a las 14 Calculadoras Especializadas",
    hubTitle: "Directorio Completo de Calculadoras Fiscales y Financieras",
    hubSubtitle: "Explore nuestras 14 herramientas interactivas con desgloses normativos y ejemplos prácticos.",
    sourcesTitle: "Fuentes Fiscales y Normativas Oficiales",
    sourcesDesc: "Nuestros simuladores consultan publicaciones primarias de autoridades tributarias y organismos internacionales:"
  },
  de: {
    faqTitle: "Häufig Gestellte Fragen & Methodik",
    faqSubtitle: "Erfahren Sie mehr über unsere lokalen Berechnungsmodelle, amtlichen Datenquellen und den Datenschutz.",
    badge1: "100 % Lokale Verarbeitung im Browser-RAM",
    badge2: "Abgeglichen mit offiziellen BMF-, IRS- & OECD-Tabellen",
    badge3: "Kostenloser Zugang zu allen 14 Fachrechnern",
    hubTitle: "Alle 14 Globalen Steuer-, Finanz- & Entwickler-Rechner",
    hubSubtitle: "Entdecken Sie unsere interaktiven Simulatoren mit gesetzlichen Grundlagen und Rechenbeispielen.",
    sourcesTitle: "Amtliche Steuer- und Datenquellen",
    sourcesDesc: "Unsere Berechnungsmodelle stützen sich auf offizielle Angaben der Finanzbehörden und Wirtschaftsinstitute:"
  },
  pt: {
    faqTitle: "Perguntas Frequentes e Metodologia",
    faqSubtitle: "Saiba como funcionam nossos motores de cálculo local, fontes oficiais e proteção de privacidade.",
    badge1: "Processamento 100% Local na Memória RAM",
    badge2: "Alinhado com Tabelas Oficiais da OCDE e Receitas Fiscais",
    badge3: "Acesso Gratuito às 14 Calculadoras Especializadas",
    hubTitle: "Diretório Completo de Calculadoras Financeiras e Fiscais",
    hubSubtitle: "Explore nossas 14 ferramentas interativas com análises regulamentares e exemplos práticos.",
    sourcesTitle: "Fontes Fiscais e Governamentais Oficiais",
    sourcesDesc: "Nossos simuladores utilizam dados primários de autoridades tributárias e relatórios econômicos:"
  },
  fr: {
    faqTitle: "Foire Aux Questions et Méthodologie",
    faqSubtitle: "Découvrez le fonctionnement de nos moteurs de calcul locaux, nos sources officielles et la confidentialité.",
    badge1: "Traitement 100 % Local dans la Mémoire RAM",
    badge2: "Aligné sur les Barèmes Officiels de l'OCDE et des États",
    badge3: "Accès Gratuit aux 14 Simulateurs Financiers et Tech",
    hubTitle: "Répertoire Complet des 14 Simulateurs Fiscaux et Financiers",
    hubSubtitle: "Explorez nos outils interactifs accompagnés d'explications réglementaires et de cas pratiques chiffrés.",
    sourcesTitle: "Sources Fiscales et Réglementaires Officielles",
    sourcesDesc: "Nos modèles s'appuient sur les publications officielles des administrations fiscales nationales :"
  },
  id: {
    faqTitle: "Pertanyaan Umum (FAQ) & Metodologi",
    faqSubtitle: "Pelajari cara kerja mesin kalkulasi berbasis peramban, sumber data resmi, dan perlindungan privasi kami.",
    badge1: "100% Pemrosesan Lokal di Memori RAM",
    badge2: "Mengacu pada Tabel Pajak Resmi & Laporan OECD",
    badge3: "Akses Gratis ke 14 Kalkulator Keuangan & Pengembang",
    hubTitle: "Direktori Lengkap 14 Kalkulator Pajak, Gaji & Pengembang Global",
    hubSubtitle: "Jelajahi 14 alat interaktif kami lengkap dengan rincian peraturan dan contoh perhitungan nyata.",
    sourcesTitle: "Referensi Otoritas Pajak & Data Resmi",
    sourcesDesc: "Kalkulator kami mengacu pada publikasi resmi otoritas pajak pemerintah dan lembaga internasional:"
  },
  ja: {
    faqTitle: "よくあるご質問（FAQ）と計算メソドロジー",
    faqSubtitle: "ブラウザ内ローカル計算エンジンの仕組み、公的データソース、プライバシー保護について。",
    badge1: "100%ブラウザ内RAMでのローカル処理",
    badge2: "OECDおよび各国税務当局の公式税率表に準拠",
    badge3: "全14種類の金融・税務・開発者ツールが完全無料",
    hubTitle: "グローバル給与・税務・開発者向け計算ツール一覧（全14種）",
    hubSubtitle: "法定税率の内訳と具体的な計算例を備えた14のインタラクティブツールをご利用いただけます。",
    sourcesTitle: "参照している公的税務機関および統計データソース",
    sourcesDesc: "当プラットフォームの計算モデルは、以下の一次公的機関および国際統計を参照しています："
  }
};

const coreCalculatorsList = [
  { path: '', title: 'Global Net Salary & Income Tax Calculator', badge: '40+ Countries' },
  { path: '/beckham-law', title: 'Spain Beckham Law Calculator (Art. 93 LIRPF)', badge: '24% Flat Tax' },
  { path: '/contractor', title: 'W-2 vs 1099, UK IR35 & DE Freelancer Calculator', badge: 'B2B vs Perm' },
  { path: '/eor-cost', title: 'Employer of Record (EOR) & Hiring Cost Calculator', badge: 'Employer Burden' },
  { path: '/hourly-rate', title: 'Freelancer Billable Hourly Rate & Utilization Engine', badge: 'Freelance' },
  { path: '/nomad-visa', title: 'Digital Nomad Visa Minimum Income Eligibility Checker', badge: 'Visa Rules' },
  { path: '/crypto-tax', title: 'Crypto Capital Gains & Expat Tax Calculator', badge: 'FIFO / Holding' },
  { path: '/salary', title: 'Digital Nomad Relocation Tax & Cost of Living Simulator', badge: 'PPP & Tax' },
  { path: '/fx-fees', title: 'Hidden Bank FX Markup & Cross-Border Wire Calculator', badge: 'Mid-Market FX' },
  { path: '/vat', title: 'Global B2B Invoice VAT, GST & Reverse-Charge Calculator', badge: 'EU VIES / GST' },
  { path: '/inflation', title: 'Multi-Currency CPI Inflation & Purchasing Power Engine', badge: 'Real Value' },
  { path: '/timezone', title: 'Global Distributed Team Timezone Overlap Planner', badge: 'Async Work' },
  { path: '/ai', title: 'LLM API Token Cost & Prompt Caching Simulator', badge: 'AI FinOps' },
  { path: '/wasm', title: 'Client-Side WebAssembly Image Compressor & Optimizer', badge: 'Local RAM' }
];

const officialSources = [
  { org: 'Agencia Tributaria (Spain AEAT)', ref: 'Ley 35/2006 Art. 93 (Beckham Law), Ley 28/2022 & Ley 7/2024, Modelo 149/151', url: 'https://sede.agenciatributaria.gob.es/' },
  { org: 'Internal Revenue Service (US IRS)', ref: 'Federal Income Tax Brackets, FICA, SECA (15.3%) & QBI Deduction Rules', url: 'https://www.irs.gov/' },
  { org: 'HM Revenue & Customs (UK HMRC)', ref: 'Income Tax Bands, Class 1/4 National Insurance, Dividend Tax & Off-Payroll (IR35)', url: 'https://www.gov.uk/government/organisations/hm-revenue-customs' },
  { org: 'Bundesministerium der Finanzen (Germany BMF)', ref: 'Einkommensteuertarif (§ 32a EStG), Solidaritätszuschlag & Sozialversicherungs-Rechengrößen', url: 'https://www.bundesfinanzministerium.de/' },
  { org: 'OECD Taxing Wages & Economic Data', ref: 'Comparative Income Tax, Employee/Employer Social Security Contributions & PPP Indices', url: 'https://www.oecd.org/tax/tax-policy/taxing-wages-brochure.pdf' }
];

export default function ProgrammaticSeoGrid({ lang = 'en' }) {
  const activeFaqs = faqData[lang] || faqData.en;
  const activeUi = uiTexts[lang] || uiTexts.en;
  const langPrefix = lang === 'en' ? '' : `/${lang}`;
  
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const unifiedSchema = generateUnifiedSchema({
    url: `https://globalpaycalc.com${lang === 'en' ? '/' : '/' + lang}`,
    name: getTranslation(lang, 'hero.title') || 'Global Net Salary, Tax, FX & AI Cost Simulator',
    description: getTranslation(lang, 'hero.subtitle') || 'Calculate net take-home salary, contractor equivalency, Spain Beckham Law tax, hidden bank FX fees, and B2B VAT.',
    faqs: activeFaqs
  });

  useEffect(() => {
    injectJsonLdSchema('json-ld-unified', unifiedSchema);
  }, [lang, unifiedSchema]);

  return (
    <div className="space-y-8 max-w-4xl mx-auto my-12">
      
      {/* Accordion FAQ UI (All answers rendered in DOM for crawlers and accessibility) */}
      <div className="glass-card p-6 sm:p-8 rounded-3xl border-slate-800 space-y-6">
        <div className="flex items-center space-x-3 border-b border-slate-800/80 pb-4">
          <HelpCircle className="w-6 h-6 text-purple-400" />
          <div>
            <h2 className="text-xl font-bold text-white">
              {activeUi.faqTitle}
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              {activeUi.faqSubtitle}
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {activeFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`rounded-2xl border transition-all duration-200 cursor-pointer overflow-hidden ${
                  isOpen ? 'bg-slate-900/60 border-purple-500/30' : 'bg-slate-900/20 border-slate-800 hover:border-slate-700'
                }`}
                onClick={() => toggleAccordion(idx)}
              >
                <div className="p-4 sm:p-5 flex items-center justify-between gap-4 select-none">
                  <span className="text-xs sm:text-sm font-bold text-white">{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  )}
                </div>

                <div className={isOpen ? "px-4 sm:px-5 pb-5 pt-1 text-xs text-slate-300 leading-relaxed border-t border-slate-800/50 block" : "px-4 sm:px-5 pb-4 pt-1 text-xs text-slate-400 leading-relaxed border-t border-slate-800/30 block"}>
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>

        {/* Verification & Privacy Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800/80 text-[10px] text-slate-400">
          <div className="flex items-center space-x-2 p-3 rounded-xl bg-slate-950/60 border border-slate-800">
            <Lock className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>{activeUi.badge1}</span>
          </div>
          <div className="flex items-center space-x-2 p-3 rounded-xl bg-slate-950/60 border border-slate-800">
            <RefreshCw className="w-4 h-4 text-brand-400 flex-shrink-0" />
            <span>{activeUi.badge2}</span>
          </div>
          <div className="flex items-center space-x-2 p-3 rounded-xl bg-slate-950/60 border border-slate-800">
            <Star className="w-4 h-4 text-amber-400 flex-shrink-0" />
            <span>{activeUi.badge3}</span>
          </div>
        </div>
      </div>

      {/* Core Calculators Directory Hub (Replaces 180-link templated pSEO footer directory) */}
      <div className="glass-card p-6 sm:p-8 rounded-3xl border-slate-800 space-y-6">
        <div className="space-y-4">
          <div className="flex items-center space-x-2.5">
            <Globe className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white">{activeUi.hubTitle}</h2>
              <p className="text-xs text-slate-400">{activeUi.hubSubtitle}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {coreCalculatorsList.map((tool) => {
              const targetUrl = `${langPrefix}${tool.path === '' ? (lang === 'en' ? '/' : '') : tool.path}`;
              return (
                <Link
                  key={tool.path}
                  to={targetUrl}
                  className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-brand-500/40 hover:bg-slate-900 transition text-xs flex items-center justify-between group"
                >
                  <span className="text-slate-200 group-hover:text-white font-semibold truncate pr-2">
                    {tool.title}
                  </span>
                  <span className="text-[10px] font-mono text-brand-400 bg-brand-500/10 px-2 py-0.5 rounded-md border border-brand-500/20 shrink-0">
                    {tool.badge}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Official Statutory Data Sources & E-E-A-T References */}
        <div className="space-y-3 pt-5 border-t border-slate-800/80">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-5 h-5 text-brand-400 shrink-0" />
            <h3 className="text-sm font-bold text-white">{activeUi.sourcesTitle}</h3>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            {activeUi.sourcesDesc}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
            {officialSources.map((src, i) => (
              <a
                key={i}
                href={src.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-slate-700 transition flex items-start justify-between gap-2 group"
              >
                <div className="space-y-0.5">
                  <div className="text-xs font-bold text-slate-200 group-hover:text-brand-300 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-brand-400 shrink-0" />
                    <span>{src.org}</span>
                  </div>
                  <div className="text-[11px] text-slate-400 leading-snug">{src.ref}</div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-slate-300 shrink-0 mt-0.5" />
              </a>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
