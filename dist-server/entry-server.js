import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import React, { useState, useEffect, useRef } from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.mjs";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useNavigate, Link, useLocation, Routes, Route } from "react-router-dom";
import { Calculator, X, Lock, FileText, Heart, Compass, Home, Loader, Cookie, DollarSign, Briefcase, UserCheck, Award, Cpu, Globe, Building2, TrendingDown, ArrowRightLeft, Clock, Image, Sparkles } from "lucide-react";
import { createClient } from "@supabase/supabase-js";
const nav$7 = {
  brand: "GlobalPayCalc.com",
  tagline: "Global Fintech & Salary Engine",
  takeHome: "Net Take-Home Pay",
  contractor: "Contractor vs Perm",
  fxFees: "Hidden FX Fees",
  vat: "Invoice & VAT",
  salary: "City Parity",
  aiCost: "AI Token Cost",
  bgRemover: "WASM Studio",
  admin: "Admin Panel",
  hourlyRate: "Hourly Rate",
  beckhamLaw: "Beckham Law",
  cryptoTax: "Crypto Salary",
  nomadVisa: "Nomad Visa Test",
  eorCost: "EOR Cost",
  inflation: "Inflation Loss",
  timezone: "Timezone Overlap"
};
const hero$7 = {
  badge: "100% Free • Unlimited • Client-Side Fintech Engine",
  title: "Global Net Salary, Tax, FX & AI Cost Simulator",
  subtitle: "Calculate global net take-home salaries, W-2 vs 1099 and IR35 contractor equivalency, hidden bank FX markups, and cross-border B2B/B2C VAT reverse charge amounts.",
  seoTitle: "How It Works & Core Features",
  seoText: "GlobalPayCalc is a comprehensive fintech platform built for remote workers, digital nomads, and AI developers. Our suite features a <strong class='font-semibold text-slate-300'>Dynamic Take-Home Pay Calculator</strong> supporting tax brackets across US, UK, Germany, Turkey, and 40+ countries, a <strong class='font-semibold text-slate-300'>Contractor vs Full-Time Equivalence Engine</strong> factoring in PTO, health insurance, and SE taxes, a <strong class='font-semibold text-slate-300'>Real FX & Hidden Fee Estimator</strong> comparing SWIFT, Wise, PayPal, and Stripe, and a <strong class='font-semibold text-slate-300'>Global Invoice & VAT Calculator</strong> handling B2B cross-border Reverse Charge exemptions."
};
const bg$7 = {
  title: "AI Image Background Remover & Converter",
  subtitle: "Remove background from photos and convert images to WebP/PNG instantly inside your browser.",
  dropzone: "Drag & drop photos here or click to browse",
  btn: "Remove Background & Compress",
  processing: "Processing Image in AI Engine...",
  success: "Background Removed Successfully!",
  selectedFiles: "Selected Files",
  localReady: "Local Processing Ready",
  originalSize: "Original Size",
  processedSize: "Processed Size",
  download: "Download",
  progressText: "Removing background & transparentizing...",
  zeroUpload: "Zero server upload • Processed locally in WebWorker thread"
};
const salary$7 = {
  title: "Global Remote Salary & Currency Calculator",
  subtitle: "Calculate net take-home salary and purchasing power parity across 50+ countries.",
  gross: "Annual Gross Salary",
  home: "Origin Country",
  target: "Target Destination",
  netHome: "Net Monthly (Origin)",
  netTarget: "Net Monthly (Destination)",
  boost: "Purchasing Power Ratio",
  downloadReport: "Download Report (PDF/TXT)",
  embed: "Embed Widget",
  embedLabel: "Add to Your Site (Embeddable Widget Code):",
  embedNotice: "Copy the code above and paste it on your website/blog to display the widget.",
  netMonthlyAfterTax: "Net Monthly after {tax}% tax",
  recommendedNomad: "Recommended Nomad Essentials (Save & Secure)",
  wise: "Wise Transfer",
  wiseDesc: "Zero-markup multi-currency account.",
  wiseCta: "Get Free Transfer →",
  safetyWing: "SafetyWing",
  safetyWingDesc: "Global travel medical insurance for nomads.",
  safetyWingCta: "Insure for $1.50/day →",
  revolut: "Revolut Business",
  revolutDesc: "Global accounts for freelancers & startups.",
  revolutCta: "Open Account →"
};
const ai$7 = {
  title: "AI Model Token & API Cost Simulator",
  subtitle: "Estimate monthly API spending for GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro, and Llama 3.",
  input: "Monthly Input Tokens",
  output: "Monthly Output Tokens",
  monthly: "Monthly Estimated Cost",
  yearly: "Yearly Estimated Cost",
  downloadReport: "Download Report (PDF/TXT)",
  embed: "Embed Widget",
  embedLabel: "Add to Your Site (Embeddable Widget Code):",
  embedNotice: "Copy the code above and paste it on your website/blog to display the widget.",
  inputCost: "Input Cost",
  outputCost: "Output Cost",
  recommendedAi: "Recommended AI & Cloud Resources (Get Credits)",
  aws: "AWS Free Tier",
  awsDesc: "Get 12 Months free computing and storage tier.",
  awsCta: "Claim Free AWS Account →",
  openAi: "OpenAI Credits",
  openAiDesc: "Free starting API usage credits for developers.",
  openAiCta: "Get $5 Free Credits →",
  anthropic: "Anthropic Claude API",
  anthropicDesc: "Deploy Claude 3.5 Sonnet instances directly.",
  anthropicCta: "Register Developer Console →"
};
const footer$7 = {
  tagline: "Secure client-side utility suite.",
  copyright: "© 2026 GlobalPayCalc.com. All rights reserved.",
  privacy: "Privacy Policy",
  terms: "Terms of Service",
  privacyText: "At GlobalPayCalc.com, accessible from https://globalpaycalc.com, visitor privacy is our priority. All operations run 100% locally inside your web browser. No files are uploaded to any server.",
  termsText: "Calculations provided on GlobalPayCalc.com are for estimation purposes only. Consult local accounting and tax professionals for formal advice.",
  aboutUs: "About Us",
  contact: "Contact"
};
const faq$7 = {
  title: "Frequently Asked Questions",
  q1: "How does the Global Net Take-Home Salary & Tax Engine work?",
  a1: "GlobalPayCalc is a 100% free global fintech and utility suite built for remote workers, digital nomads, and developers. It includes dynamic take-home net salary calculators (US, UK, DE, TR), W-2 vs 1099 contractor equivalence, hourly rate estimators, hidden bank FX fee comparators, and global VAT/GST export calculators.",
  q2: "Can I calculate my remote salary and tax parity accurately?",
  a2: "Yes! GlobalPayCalc provides a highly accurate global salary calculator designed specifically for digital nomads and remote workers. Our utility engine compares your net salary across over 150 countries, taking into account local tax brackets, living cost variations, and purchasing power parity (PPP). This ensures you can evaluate sponsor offers and securely calculate how much you will actually earn after taxes, regardless of your global location.",
  q3: "Is the AI token cost simulator free for developers?",
  a3: "Absolutely. Developers can use our advanced AI API token cost simulator to accurately predict the financial cost of running large language models (LLMs) such as GPT-4o, Claude 3.5, and LLaMA 3. Whether you are building an autonomous agent, processing large data extractions, or running a customer support pipeline, our simulator provides instant, free estimates to help you optimize your API expenses securely."
};
const cookie$7 = {
  message: "We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking 'Accept All', you consent to our use of cookies in accordance with our Privacy Policy.",
  accept: "Accept All",
  decline: "Decline"
};
const legal$7 = {
  lastUpdated: "Last updated",
  privacy: {
    title: "Privacy Policy",
    desc: "Privacy Policy and GDPR compliance for GlobalPayCalc.",
    h1: "1. Information We Collect",
    p1: 'GlobalPayCalc ("we," "our," or "us") is committed to protecting your privacy. We collect minimal information necessary to provide our services. We use Google Analytics to monitor website traffic and Google AdSense to display advertisements.',
    h2: "2. How We Use Cookies",
    p2: "We use cookies to personalize content and ads, to provide social media features, and to analyze our traffic. You can choose to accept or decline cookies using our consent banner.",
    h3: "3. Third-Party Services",
    p3: "We use third-party services like Google Analytics and Google AdSense. These services may use cookies and web beacons to collect data about your visits to this and other websites in order to provide relevant advertisements. You can opt out of personalized advertising by visiting Google Ads Settings.",
    h4: "4. Data Security",
    p4: "All calculations (salary, tax, video processing) are performed locally in your browser. We do not store or transmit your sensitive financial inputs to our servers."
  },
  terms: {
    title: "Terms of Service",
    desc: "Terms of Service for GlobalPayCalc.",
    h1: "1. Acceptance of Terms",
    p1: "By accessing and using GlobalPayCalc.com, you accept and agree to be bound by the terms and provision of this agreement.",
    h2: "2. Use of Service",
    p2: "The calculators and tools provided on this website are for informational purposes only. We do not guarantee the accuracy of tax or financial calculations. You should consult with a certified financial advisor before making any financial decisions.",
    h3: "3. Intellectual Property",
    p3: "The content, features, and functionality of this website are owned by GlobalPayCalc and are protected by international copyright, trademark, and other intellectual property laws."
  },
  about: {
    title: "About Us",
    desc: "Learn more about GlobalPayCalc and our mission.",
    intro: "GlobalPayCalc is a comprehensive suite of digital tools designed for remote workers, digital nomads, and software developers.",
    h1: "Our Mission",
    p1: "Our mission is to democratize financial and technical data by providing instant, client-side, and highly accurate tools. From calculating digital nomad tax parity across different global cities to estimating the API costs of next-generation AI models, our platform is built for speed and precision.",
    h2: "Why We Built This",
    p2: 'The world is shifting towards remote work and AI integration. Professionals need quick answers to complex questions like "How much tax will I pay if I move to Tokyo?" or "How much will it cost to run 1 million tokens through Claude 3 Opus?". GlobalPayCalc answers these questions instantly, without requiring users to sign up or send their private data to external servers.'
  },
  contact: {
    title: "Contact Us",
    desc: "Contact GlobalPayCalc support.",
    intro: "Have questions, suggestions, or business inquiries? We'd love to hear from you.",
    response: "We typically respond within 24-48 business hours."
  }
};
const dynamic$7 = {
  llmTitle: "{{modelA}} vs {{modelB}} API Cost Simulator for {{useCase}}",
  llmDesc: "Project and compare monthly API costs between {{modelA}} and {{modelB}} for high volume {{useCase}} implementations.",
  taxTitle: "{{origin}} to {{dest}} Remote {{status}} Tax Parity Calculator",
  taxDesc: "Calculate net remote take-home pay, cost of living difference, and effective tax rates from {{origin}} to {{dest}} for remote {{status}}s. {{taxContext}}",
  llmHeader: "LLM API Cost & Latency Projection",
  taxHeader: "Net Salary & Purchasing Power Parity Projection",
  originNet: "{{origin}} Net",
  destNet: "{{dest}} Net",
  taxRate: "{{rate}}% Tax Rate",
  purchasingPower: "Purchasing Power Boost",
  costIndex: "Cost of Living Index",
  relatedComparisons: "Related Comparisons",
  relatedLlmDesc: "Explore other AI cost simulations and pipeline benchmarks.",
  relatedTaxDesc: "Explore other popular remote work destinations and tax parity guides.",
  taxHigh: "This route represents a relatively high tax bracket, but often balances with robust social infrastructure.",
  taxLow: "This destination offers highly favorable tax conditions, acting as a potential tax haven for digital nomads.",
  taxMid: "This destination features a moderate tax structure with standard international rates."
};
const en = {
  nav: nav$7,
  hero: hero$7,
  bg: bg$7,
  salary: salary$7,
  ai: ai$7,
  footer: footer$7,
  faq: faq$7,
  cookie: cookie$7,
  legal: legal$7,
  dynamic: dynamic$7
};
const nav$6 = {
  brand: "GlobalPayCalc.com",
  tagline: "Küresel Fintek ve Maaş Motoru",
  takeHome: "Net Maaş & Vergi",
  contractor: "Çalışan vs Contractor",
  fxFees: "Gizli Kur Komisyonu",
  vat: "Fatura & KDV",
  salary: "Şehir Paritesi",
  aiCost: "AI API Maliyeti",
  bgRemover: "WASM Stüdyo",
  admin: "Yönetim Paneli",
  hourlyRate: "Saatlik Ücret",
  beckhamLaw: "Beckham Yasası",
  cryptoTax: "Kripto Maaş",
  nomadVisa: "Göçebe Vize Testi",
  eorCost: "EOR Maliyeti",
  inflation: "Enflasyon Kaybı",
  timezone: "Zaman Dilimi"
};
const hero$6 = {
  badge: "%100 Ücretsiz • Sınırsız • Client-Side Fintek Motoru",
  title: "Küresel Maaş, Vergi, FX ve AI Maliyet Simülatörü",
  subtitle: "Tüm dünyada uzaktan çalışma net maaşlarını, W-2 vs 1099 ve IR35 denkliğini, banka gizli kur marjlarını ve B2B/B2C KDV matrahını hesaplayın.",
  seoTitle: "Nasıl Çalışır ve Temel Özellikler",
  seoText: "GlobalPayCalc, küresel uzaktan çalışanlar, dijital göçebeler, yazılımcılar ve AI geliştiricileri için tasarlanmış kapsamlı bir fintek platformudur. Platformumuz ABD, İngiltere, Almanya, Türkiye ve 40+ ülkede net ele geçen maaşı ve vergi kesintilerini hesaplayan <strong class='font-semibold text-slate-300'>Dinamik Net Maaş Hesaplayıcı</strong>, kadrolu teklifler ile serbest çalışan fatura tutarları arasındaki denkliği çıkaran <strong class='font-semibold text-slate-300'>Full-Time vs Contractor Kıyaslama Aracı</strong>, uluslararası para transferlerinde bankaların kestiği gizli marjı ölçen <strong class='font-semibold text-slate-300'>Gizli Kur Komisyonu Analizcisi</strong> ve B2B/B2C faturalarda Ters Ödeme Yükümlülüğünü (%0 KDV İhracat) hesaplayan <strong class='font-semibold text-slate-300'>Fatura & KDV Matrah Motoru</strong> sunar."
};
const bg$6 = {
  title: "AI Fotoğraf Arka Plan Silici & Dönüştürücü",
  subtitle: "Fotoğrafların arka planını saniyeler içinde silin ve görselleri WebP/PNG formatına dönüştürün.",
  dropzone: "Fotoğrafları buraya sürükleyin veya seçmek için tıklayın",
  btn: "Arka Planı Sil & Sıkıştır",
  processing: "Görsel İşleniyor...",
  success: "Arka Plan Başarıyla Silindi!",
  selectedFiles: "Seçili Dosyalar",
  localReady: "Yerel İşlem Hazır",
  originalSize: "Orijinal Boyut",
  processedSize: "İşlenmiş Boyut",
  download: "İndir",
  progressText: "Arka plan siliniyor ve şeffaflaştırılıyor...",
  zeroUpload: "Sunucuya yükleme yok • WebWorker içinde yerel işlendi"
};
const salary$6 = {
  title: "Küresel Remote Maaş & Döviz Hesaplayıcı",
  subtitle: "50+ ülke genelinde net ele geçen maaşı ve alım gücü paritesini hesaplayın.",
  gross: "Yıllık Brüt Maaş",
  home: "Mevcut Ülke",
  target: "Hedef Ülke",
  netHome: "Aylık Net (Mevcut)",
  netTarget: "Aylık Net (Hedef)",
  boost: "Alım Gücü Oranı",
  downloadReport: "Rapor İndir (PDF/TXT)",
  embed: "Göm (Embed)",
  embedLabel: "Sitene Ekle (Gömülebilir Widget Kodu):",
  embedNotice: "Kodu kopyalayıp blogunuza ekleyerek widget'ı kullanabilirsiniz.",
  netMonthlyAfterTax: "%{tax} vergi sonrası aylık net maaş",
  recommendedNomad: "Önerilen Dijital Göçebe Araçları (Tasarruf & Güvenlik)",
  wise: "Wise Para Transferi",
  wiseDesc: "Komisyonsuz çok para birimli hesap.",
  wiseCta: "Ücretsiz Transfer Al →",
  safetyWing: "SafetyWing Sağlık",
  safetyWingDesc: "Göçebeler için küresel seyahat sağlık sigortası.",
  safetyWingCta: "Günde $1.50'a Sigortalan →",
  revolut: "Revolut İşletme",
  revolutDesc: "Freelance ve girişimler için küresel bankacılık.",
  revolutCta: "Hesap Aç →"
};
const ai$6 = {
  title: "Yapay Zeka Token & API Maliyet Simülatörü",
  subtitle: "GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro ve Llama 3 modellerinin aylık API maliyetini hesaplayın.",
  input: "Aylık Girdi Token",
  output: "Aylık Çıktı Token",
  monthly: "Tahmini Aylık Maliyet",
  yearly: "Tahmini Yıllık Maliyet",
  downloadReport: "Rapor İndir (PDF/TXT)",
  embed: "Göm (Embed)",
  embedLabel: "Sitene Ekle (Gömülebilir Widget Kodu):",
  embedNotice: "Kodu kopyalayıp sitenize ekleyerek widget'ı kullanabilirsiniz.",
  inputCost: "Girdi Maliyeti",
  outputCost: "Çıktı Maliyeti",
  recommendedAi: "Önerilen Yapay Zeka & Bulut Kaynakları (Kredi Al)",
  aws: "AWS Ücretsiz Kullanım",
  awsDesc: "12 ay boyunca ücretsiz sunucu ve depolama alanı edinin.",
  awsCta: "Ücretsiz AWS Hesabı Al →",
  openAi: "OpenAI Geliştirici Kredisi",
  openAiDesc: "Geliştiriciler için ücretsiz başlangıç API kredileri.",
  openAiCta: "$5 Ücretsiz Kredi Al →",
  anthropic: "Anthropic Claude API",
  anthropicDesc: "Doğrudan Claude 3.5 Sonnet örnekleri çalıştırın.",
  anthropicCta: "Geliştirici Konsoluna Kaydol →"
};
const footer$6 = {
  tagline: "Güvenli istemci taraflı araçlar paketi.",
  copyright: "© 2026 GlobalPayCalc.com. Tüm hakları saklıdır.",
  privacy: "Gizlilik Politikası",
  terms: "Kullanım Şartları",
  privacyText: "GlobalPayCalc.com adresinde ziyaretçi gizliliği en büyük önceliğimizdir. Tüm işlemler tamamen tarayıcınızın belleğinde local olarak gerçekleşir. Dosyalarınız hiçbir sunucuya yüklenmez.",
  termsText: "GlobalPayCalc.com üzerinde sunulan tüm hesaplama ve tahminler yalnızca bilgilendirme amaçlıdır. Resmi kararlarınız öncesinde muhasebe ve vergi danışmanınızdan onay alın.",
  aboutUs: "Hakkımızda",
  contact: "İletişim"
};
const faq$6 = {
  title: "Sıkça Sorulan Sorular",
  q1: "Küresel Net Maaş ve Vergi Motoru nasıl çalışır?",
  a1: "GlobalPayCalc, uzaktan çalışanlar, dijital göçebeler ve yazılımcılar için geliştirilmiş %100 ücretsiz küresel bir finans ve hesaplama platformudur. ABD, İngiltere, Almanya, Türkiye ve 40+ ülkenin net maaş ve vergi hesaplayıcısı, tam zamanlı vs. serbest çalışan kıyası, saatlik ücret motoru, gizli banka FX komisyon aracı ve KDV hesaplama araçlarını sunar.",
  q2: "Uzaktan çalışma maaşımı ve vergi durumumu doğru bir şekilde hesaplayabilir miyim?",
  a2: "Evet! GlobalPayCalc, özellikle dijital göçebeler ve uzaktan çalışanlar için tasarlanmış son derece hassas bir küresel maaş hesaplayıcı sunar. Yardımcı motorumuz, yerel vergi dilimlerini, yaşam maliyeti değişikliklerini ve satın alma gücü paritesini (PPP) dikkate alarak 150'den fazla ülkede net maaşınızı karşılaştırır. Bu, küresel konumunuz ne olursa olsun sponsor tekliflerini değerlendirebilmenizi ve vergilerden sonra gerçekte ne kadar kazanacağınızı güvenli bir şekilde hesaplayabilmenizi sağlar.",
  q3: "Yapay zeka token maliyet simülatörü geliştiriciler için ücretsiz mi?",
  a3: "Kesinlikle. Geliştiriciler, GPT-4o, Claude 3.5 ve LLaMA 3 gibi büyük dil modellerini (LLM'ler) çalıştırmanın finansal maliyetini doğru bir şekilde tahmin etmek için gelişmiş AI API token maliyet simülatörümüzü kullanabilirler. İster otonom bir aracı (agent) inşa ediyor olun, ister büyük veri çıkarımları işliyor olun, isterse de bir müşteri destek hattı çalıştırıyor olun, simülatörümüz API giderlerinizi güvenli bir şekilde optimize etmenize yardımcı olmak için anında ve ücretsiz tahminler sunar."
};
const cookie$6 = {
  message: "Tarama deneyiminizi geliştirmek, kişiselleştirilmiş reklamlar veya içerik sunmak ve trafiğimizi analiz etmek için çerezleri (cookies) kullanıyoruz. 'Tümünü Kabul Et' seçeneğine tıklayarak, Gizlilik Politikamıza uygun olarak çerez kullanımımızı kabul etmiş olursunuz.",
  accept: "Tümünü Kabul Et",
  decline: "Reddet"
};
const legal$6 = {
  lastUpdated: "Son güncelleme",
  privacy: {
    title: "Gizlilik Politikası",
    desc: "GlobalPayCalc Gizlilik Politikası ve GDPR uyumluluğu.",
    h1: "1. Topladığımız Bilgiler",
    p1: "GlobalPayCalc gizliliğinizi korumaya kararlıdır. Sadece hizmetlerimizi sunmak için gerekli asgari bilgileri toplarız. Web sitesi trafiğini izlemek için Google Analytics'i ve reklam göstermek için Google AdSense'i kullanıyoruz.",
    h2: "2. Çerezleri Nasıl Kullanıyoruz",
    p2: "Çerezleri, içerik ve reklamları kişiselleştirmek, sosyal medya özellikleri sağlamak ve trafiğimizi analiz etmek için kullanırız. Çerez onay afişimizi kullanarak çerezleri kabul etmeyi veya reddetmeyi seçebilirsiniz.",
    h3: "3. Üçüncü Taraf Hizmetleri",
    p3: "Google Analytics ve Google AdSense gibi üçüncü taraf hizmetleri kullanıyoruz. Bu hizmetler, size alakalı reklamlar sunmak için çerezleri ve web işaretçilerini kullanabilir. Google Reklam Ayarları'nı ziyaret ederek kişiselleştirilmiş reklamlardan çıkabilirsiniz.",
    h4: "4. Veri Güvenliği",
    p4: "Tüm hesaplamalar (maaş, vergi, video işleme) tarayıcınızda yerel olarak yapılır. Hassas finansal girişlerinizi sunucularımızda saklamaz veya sunucularımıza iletmeyiz."
  },
  terms: {
    title: "Kullanım Koşulları",
    desc: "GlobalPayCalc Kullanım Koşulları.",
    h1: "1. Koşulların Kabulü",
    p1: "GlobalPayCalc.com'a erişerek ve kullanarak, bu sözleşmenin şartlarını ve hükümlerini kabul etmiş olursunuz.",
    h2: "2. Hizmet Kullanımı",
    p2: "Bu web sitesinde sunulan hesaplayıcılar ve araçlar yalnızca bilgi amaçlıdır. Vergi veya finansal hesaplamaların doğruluğunu garanti etmiyoruz. Finansal kararlar almadan önce sertifikalı bir mali danışmana başvurmalısınız.",
    h3: "3. Fikri Mülkiyet",
    p3: "Bu web sitesinin içeriği, özellikleri ve işlevselliği GlobalPayCalc'a aittir ve uluslararası telif hakkı ve ticari marka yasaları ile korunmaktadır."
  },
  about: {
    title: "Hakkımızda",
    desc: "GlobalPayCalc ve misyonumuz hakkında daha fazla bilgi edinin.",
    intro: "GlobalPayCalc, uzaktan çalışanlar, dijital göçebeler ve yazılım geliştiriciler için tasarlanmış kapsamlı bir dijital araçlar paketidir.",
    h1: "Misyonumuz",
    p1: "Misyonumuz, anında çalışan ve son derece doğru araçlar sunarak finansal ve teknik verileri demokratikleştirmektir. Dijital göçebe vergi eşitliğini hesaplamaktan yeni nesil yapay zeka modellerinin API maliyetlerini tahmin etmeye kadar, platformumuz hız ve hassasiyet için oluşturulmuştur.",
    h2: "Bunu Neden Yaptık?",
    p2: "Dünya uzaktan çalışmaya ve yapay zeka entegrasyonuna doğru kayıyor. Profesyonellerin 'Tokyo'ya taşınırsam ne kadar vergi öderim?' veya '1 milyon tokeni yapay zekaya işletmek ne kadara mal olur?' gibi karmaşık sorulara hızlı yanıtlar bulması gerekiyor. GlobalPayCalc, kullanıcılardan kayıt olmalarını veya özel verilerini harici sunuculara göndermelerini istemeden bu soruları anında yanıtlar."
  },
  contact: {
    title: "İletişim",
    desc: "GlobalPayCalc destek ekibiyle iletişime geçin.",
    intro: "Sorularınız, önerileriniz veya iş talepleriniz mi var? Sizden haber almaktan memnuniyet duyarız.",
    response: "Genellikle 24-48 iş saati içinde yanıt veririz."
  }
};
const dynamic$6 = {
  llmTitle: "{{useCase}} için {{modelA}} vs {{modelB}} API Maliyet Simülatörü",
  llmDesc: "Yüksek hacimli {{useCase}} uygulamaları için {{modelA}} ve {{modelB}} arasındaki aylık API maliyetlerini projelendirin ve karşılaştırın.",
  taxTitle: "{{origin}} - {{dest}} Uzaktan {{status}} Vergi Eşitliği Hesaplayıcı",
  taxDesc: "Uzaktan {{status}} çalışanları için {{origin}}'den {{dest}}'e net maaş, yaşam maliyeti farkı ve efektif vergi oranlarını hesaplayın. {{taxContext}}",
  llmHeader: "LLM API Maliyet ve Gecikme Projeksiyonu",
  taxHeader: "Net Maaş ve Alım Gücü Eşitliği Projeksiyonu",
  originNet: "{{origin}} Net",
  destNet: "{{dest}} Net",
  taxRate: "%{{rate}} Vergi Oranı",
  purchasingPower: "Alım Gücü Artışı",
  costIndex: "Yaşam Maliyeti Endeksi",
  relatedComparisons: "Benzer Karşılaştırmalar",
  relatedLlmDesc: "Diğer yapay zeka maliyet simülasyonlarını ve altyapı kıyaslamalarını inceleyin.",
  relatedTaxDesc: "Diğer popüler uzaktan çalışma destinasyonlarını ve vergi eşitliği rehberlerini inceleyin.",
  taxHigh: "Bu rota nispeten yüksek bir vergi dilimini temsil eder, ancak genellikle güçlü sosyal altyapı ile dengelenir.",
  taxLow: "Bu hedef ülke, dijital göçebeler için oldukça avantajlı bir vergi cenneti konumundadır.",
  taxMid: "Bu destinasyon standart uluslararası oranlara sahip orta düzey bir vergi yapısı sunmaktadır."
};
const tr = {
  nav: nav$6,
  hero: hero$6,
  bg: bg$6,
  salary: salary$6,
  ai: ai$6,
  footer: footer$6,
  faq: faq$6,
  cookie: cookie$6,
  legal: legal$6,
  dynamic: dynamic$6
};
const nav$5 = {
  brand: "GlobalPayCalc.com",
  tagline: "Motor Fintech y de Salarios Globale",
  takeHome: "Salario Neto y Taxes",
  contractor: "Empleado vs Contractor",
  fxFees: "Tarifas FX Ocultas",
  vat: "Factura e IVA",
  salary: "Paridad de Ciudades",
  aiCost: "Costo Tokens IA",
  bgRemover: "WASM Studio",
  admin: "Panel de Control",
  hourlyRate: "Tarifa Horaria",
  beckhamLaw: "Ley Beckham",
  cryptoTax: "Salario Cripto",
  nomadVisa: "Test Visa Nómada",
  eorCost: "Costo EOR",
  inflation: "Pérdida Inflación",
  timezone: "Zona Horaria"
};
const hero$5 = {
  badge: "100% Gratis • Ilimitado • Motor Fintech del Cliente",
  title: "Simulador Global de Salarios Netos, Impuestos y Costos IA",
  subtitle: "Calcula salarios netos globales, equivalencia W-2 vs 1099, tarifas ocultas bancarias y montos de IVA de exportación B2B.",
  seoTitle: "Cómo Funciona y Características Principales",
  seoText: "GlobalPayCalc es una plataforma fintech integral creada para trabajadores remotos, nómadas digitales y desarrolladores de IA. Nuestra suite cuenta con una calculadora dinámica de salario neto, un motor de equivalencia entre contratistas y empleados, un estimador de tarifas bancarias reales y una calculadora de IVA."
};
const bg$5 = {
  title: "Eliminador de Fondo y Conversor de Imágenes IA",
  subtitle: "Elimina el fondo de las fotos y convierte imágenes a WebP/PNG al instante en tu navegador.",
  dropzone: "Arrastra las fotos aquí o haz clic para buscarlas",
  btn: "Eliminar Fondo y Comprimir",
  processing: "Procesando Imagen en el Motor de IA...",
  success: "¡Fondo Eliminado con Éxito!",
  selectedFiles: "Archivos seleccionados",
  localReady: "Procesamiento local listo",
  originalSize: "Tamaño original",
  processedSize: "Tamaño procesado",
  download: "Descargar",
  progressText: "Eliminando fondo y transparentando...",
  zeroUpload: "Sin carga al servidor • Procesado localmente en WebWorker"
};
const salary$5 = {
  title: "Calculadora de Salario Remoto Global y Divisas",
  subtitle: "Calcula el salario neto y la paridad de poder adquisitivo en más de 50 países.",
  gross: "Salario Bruto Anual",
  home: "País de Origen",
  target: "País de Destino",
  netHome: "Neto Mensual (Origen)",
  netTarget: "Neto Mensual (Destino)",
  boost: "Relación de Poder Adquisitivo",
  downloadReport: "Descargar Informe (PDF/TXT)",
  embed: "Incrustar Widget",
  embedLabel: "Añade a tu Sitio Web (Código de Widget Incrustable):",
  embedNotice: "Copia el código anterior y pégalo en tu sitio web para mostrar el widget.",
  netMonthlyAfterTax: "Neto mensual después de {tax}% de impuesto",
  recommendedNomad: "Herramientas Nómada Recomendadas (Ahorra & Protégete)",
  wise: "Transferencia Wise",
  wiseDesc: "Cuenta multidivisa sin comisiones.",
  wiseCta: "Obtener Transferencia Gratis →",
  safetyWing: "SafetyWing",
  safetyWingDesc: "Seguro médico de viaje global para nómadas.",
  safetyWingCta: "Asegúrate por $1.50/día →",
  revolut: "Revolut Business",
  revolutDesc: "Cuentas globales para freelancers y startups.",
  revolutCta: "Abrir Cuenta →"
};
const ai$5 = {
  title: "Simulador de Costo de API y Tokens de Modelos de IA",
  subtitle: "Estima el gasto mensual en API para GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro y Llama 3.",
  input: "Tokens de Entrada Mensuales",
  output: "Tokens de Salida Mensuales",
  monthly: "Costo Estimado Mensual",
  yearly: "Costo Estimado Anual",
  downloadReport: "Descargar Informe (PDF/TXT)",
  embed: "Incrustar Widget",
  embedLabel: "Añade a tu Sitio Web (Código de Widget Incrustable):",
  embedNotice: "Copia el código y pégalo en tu sitio web para mostrar el widget.",
  inputCost: "Costo de Entrada",
  outputCost: "Costo de Salida",
  recommendedAi: "Recursos de IA y Nube Recomendados (Obtén Créditos)",
  aws: "AWS Capa Gratuita",
  awsDesc: "Obtén 12 meses de cómputo y almacenamiento gratuito.",
  awsCta: "Reclamar Cuenta AWS Gratuita →",
  openAi: "Créditos OpenAI",
  openAiDesc: "Créditos de API gratuitos para comenzar a desarrollar.",
  openAiCta: "Obtener $5 Gratis →",
  anthropic: "Anthropic Claude API",
  anthropicDesc: "Implementa instancias de Claude 3.5 Sonnet directamente.",
  anthropicCta: "Registrar Consola de Desarrollador →"
};
const footer$5 = {
  copyright: "© 2026 GlobalPayCalc.com. Todos los derechos reservados.",
  privacy: "Política de Privacidad",
  terms: "Términos de Servicio",
  tagline: "Suite de utilidades segura del lado del cliente.",
  privacyText: "En GlobalPayCalc.com, la privacidad de los visitantes es nuestra prioridad. Todas las operaciones se ejecutan localmente en su navegador. No se cargan archivos a ningún servidor.",
  termsText: "Las estimaciones de GlobalPayCalc.com son solo de referencia. Consulte con un asesor fiscal antes de tomar decisiones oficiales.",
  aboutUs: "Sobre Nosotros",
  contact: "Contacto"
};
const faq$5 = {
  title: "Preguntas Frecuentes",
  q1: "¿Cómo funciona el motor de salario neto e impuestos?",
  a1: "GlobalPayCalc es una suite fintech global 100% gratuita creada para trabajadores remotos, nómadas digitales y desarrolladores. Incluye calculadoras de salario neto (EE. UU., Reino Unido, DE, TR), equivalencia de contratistas W-2 vs 1099, estimadores de tarifas por hora, comparadores de tarifas bancarias FX y calculadoras de IVA de exportación.",
  q2: "¿Puedo calcular mi salario remoto y la paridad fiscal con precisión?",
  a2: "¡Sí! GlobalPayCalc ofrece una calculadora de salario global altamente precisa, diseñada específicamente para nómadas digitales y trabajadores remotos. Nuestro motor de utilidad compara tu salario neto en más de 150 países, teniendo en cuenta los tramos impositivos locales, las variaciones del costo de vida y la paridad del poder adquisitivo (PPA). Esto asegura que puedas evaluar las ofertas de patrocinadores y calcular de manera segura cuánto ganarás realmente después de impuestos, independientemente de tu ubicación global.",
  q3: "¿El simulador de costo de tokens de IA es gratuito para los desarrolladores?",
  a3: "Absolutamente. Los desarrolladores pueden utilizar nuestro avanzado simulador de costo de tokens API de IA para predecir con precisión el costo financiero de ejecutar modelos de lenguaje grande (LLM) como GPT-4o, Claude 3.5 y LLaMA 3. Ya sea que estés construyendo un agente autónomo, procesando grandes extracciones de datos o ejecutando un canal de soporte al cliente, nuestro simulador proporciona estimaciones instantáneas y gratuitas para ayudarte a optimizar tus gastos de API de forma segura."
};
const cookie$5 = {
  message: "Utilizamos cookies para mejorar su experiencia, mostrar anuncios personalizados y analizar nuestro tráfico. Al hacer clic en 'Aceptar todo', acepta nuestro uso de cookies según nuestra Política de privacidad.",
  accept: "Aceptar todo",
  decline: "Rechazar"
};
const legal$5 = {
  lastUpdated: "Última actualización",
  privacy: {
    title: "Política de Privacidad",
    desc: "Política de privacidad y cumplimiento del GDPR.",
    h1: "1. Información que Recopilamos",
    p1: "Recopilamos la información mínima necesaria. Utilizamos Google Analytics para el tráfico y Google AdSense para anuncios.",
    h2: "2. Cómo Usamos las Cookies",
    p2: "Utilizamos cookies para personalizar contenido, anuncios y analizar nuestro tráfico.",
    h3: "3. Servicios de Terceros",
    p3: "Servicios como Google Analytics y AdSense pueden usar cookies. Puede darse de baja visitando la Configuración de Anuncios de Google.",
    h4: "4. Seguridad de Datos",
    p4: "Todos los cálculos se realizan localmente en su navegador. No almacenamos sus datos financieros."
  },
  terms: {
    title: "Términos de Servicio",
    desc: "Términos de servicio de GlobalPayCalc.",
    h1: "1. Aceptación de los Términos",
    p1: "Al utilizar GlobalPayCalc.com, acepta regirse por estos términos.",
    h2: "2. Uso del Servicio",
    p2: "Las herramientas son solo para fines informativos. Consulte a un asesor financiero certificado antes de tomar decisiones.",
    h3: "3. Propiedad Intelectual",
    p3: "El contenido y la funcionalidad son propiedad de GlobalPayCalc y están protegidos por las leyes de propiedad intelectual."
  },
  about: {
    title: "Sobre Nosotros",
    desc: "Nuestra misión en GlobalPayCalc.",
    intro: "GlobalPayCalc es una suite de herramientas digitales para nómadas digitales y desarrolladores.",
    h1: "Nuestra Misión",
    p1: "Nuestra misión es democratizar los datos financieros y técnicos con herramientas instantáneas y precisas.",
    h2: "Por Qué Construimos Esto",
    p2: "El mundo cambia hacia el trabajo remoto. Los profesionales necesitan respuestas rápidas a cálculos complejos sin comprometer su privacidad."
  },
  contact: {
    title: "Contáctenos",
    desc: "Soporte de GlobalPayCalc.",
    intro: "¿Tiene preguntas o sugerencias? Nos encantaría escucharlo.",
    response: "Normalmente respondemos en 24-48 horas hábiles."
  }
};
const dynamic$5 = {
  llmTitle: "Simulador de Costos de API {{modelA}} vs {{modelB}} para {{useCase}}",
  llmDesc: "Proyecte y compare costos mensuales de API entre {{modelA}} y {{modelB}} para implementaciones de alto volumen de {{useCase}}.",
  taxTitle: "Calculadora de Paridad Fiscal para {{status}} Remoto de {{origin}} a {{dest}}",
  taxDesc: "Calcule el salario neto, diferencia de costo de vida y tasas impositivas efectivas de {{origin}} a {{dest}} para {{status}} remoto. {{taxContext}}",
  llmHeader: "Proyección de Costos y Latencia de API LLM",
  taxHeader: "Proyección de Salario Neto y Paridad de Poder Adquisitivo",
  originNet: "Neto en {{origin}}",
  destNet: "Neto en {{dest}}",
  taxRate: "{{rate}}% de Impuestos",
  purchasingPower: "Aumento del Poder Adquisitivo",
  costIndex: "Índice de Costo de Vida",
  relatedComparisons: "Comparaciones Relacionadas",
  relatedLlmDesc: "Explore otras simulaciones de costos de IA.",
  relatedTaxDesc: "Explore otros destinos populares para trabajo remoto.",
  taxHigh: "Esta ruta representa una categoría impositiva relativamente alta.",
  taxLow: "Este destino ofrece condiciones fiscales muy favorables (paraíso fiscal).",
  taxMid: "Este destino cuenta con una estructura fiscal moderada."
};
const es = {
  nav: nav$5,
  hero: hero$5,
  bg: bg$5,
  salary: salary$5,
  ai: ai$5,
  footer: footer$5,
  faq: faq$5,
  cookie: cookie$5,
  legal: legal$5,
  dynamic: dynamic$5
};
const nav$4 = {
  brand: "GlobalPayCalc.com",
  tagline: "Globales Fintech- & Gehalts-Tool",
  takeHome: "Netto-Gehalt & Steuer",
  contractor: "Angestellter vs Contractor",
  fxFees: "Versteckte FX-Gebühren",
  vat: "Rechnung & MwSt",
  salary: "Städte-Parität",
  aiCost: "KI-Token-Kosten",
  bgRemover: "WASM Studio",
  admin: "Admin-Panel",
  hourlyRate: "Stundensatz",
  beckhamLaw: "Beckham-Gesetz",
  cryptoTax: "Krypto-Gehalt",
  nomadVisa: "Nomaden-Visum Test",
  eorCost: "EOR-Kosten",
  inflation: "Inflationsverlust",
  timezone: "Zeitzone"
};
const hero$4 = {
  badge: "100% Kostenlos • Unbegrenzt • Client-Side Fintech Engine",
  title: "Globales Netto-Gehalts-, Steuer-, FX- & KI-Kosten-Tool",
  subtitle: "Berechnen Sie globale Nettogehälter, W-2 vs. 1099 Äquivalenz, versteckte Bankgebühren und grenzüberschreitende MwSt-Beträge.",
  seoTitle: "Funktionsweise und Hauptmerkmale",
  seoText: "GlobalPayCalc ist eine umfassende Fintech-Plattform für Remote-Mitarbeiter, digitale Nomaden und Entwickler. Unsere Plattform bietet einen dynamischen Netto-Gehaltsrechner für über 40 Länder, einen Vergleich von Angestellten- und Freiberufler-Gehältern, einen Gebühren-Rechner für internationale Überweisungen und ein Tool für grenzüberschreitende Rechnungen mit MwSt-Befreiung."
};
const bg$4 = {
  title: "KI-Bildhintergrundentferner & Konverter",
  subtitle: "Entfernen Sie Hintergründe aus Fotos und konvertieren Sie Bilder sofort im Browser in WebP/PNG.",
  dropzone: "Fotos hierher ziehen oder zum Suchen klicken",
  btn: "Hintergrund Entfernen & Komprimieren",
  processing: "Bild in KI-Engine verarbeiten...",
  success: "Hintergrund erfolgreich entfernt!",
  selectedFiles: "Ausgewählte Dateien",
  localReady: "Lokale Verarbeitung bereit",
  originalSize: "Originalgröße",
  processedSize: "Verarbeitete Größe",
  download: "Herunterladen",
  progressText: "Hintergrund entfernen & transparentieren...",
  zeroUpload: "Kein Server-Upload • Lokal im WebWorker verarbeitet"
};
const salary$4 = {
  title: "Globaler Remote-Gehalts- & Währungsrechner",
  subtitle: "Berechnen Sie das Nettoeinkommen und die Kaufkraftparität in über 50 Ländern.",
  gross: "Jahresbruttogehalt",
  home: "Herkunftsland",
  target: "Zielland",
  netHome: "Netto Monatlich (Herkunft)",
  netTarget: "Netto Monatlich (Ziel)",
  boost: "Kaufkraftverhältnis",
  downloadReport: "Bericht Herunterladen (PDF/TXT)",
  embed: "Einbetten (Embed)",
  embedLabel: "Zu Ihrer Website hinzufügen (Einbettbarer Widget-Code):",
  embedNotice: "Kopieren Sie den obigen Code und fügen Sie ihn auf Ihrer Website ein.",
  netMonthlyAfterTax: "Monatliches Netto nach {tax}% Steuer",
  recommendedNomad: "Empfohlene Nomaden-Tools (Sparen & Absichern)",
  wise: "Wise Überweisung",
  wiseDesc: "Gebührenfreies Mehrwährungskonto.",
  wiseCta: "Kostenlose Überweisung holen →",
  safetyWing: "SafetyWing Krankenversicherung",
  safetyWingDesc: "Globale Reisekrankenversicherung für Nomaden.",
  safetyWingCta: "Für $1,50/Tag versichern →",
  revolut: "Revolut Business",
  revolutDesc: "Globale Konten für Freiberufler & Startups.",
  revolutCta: "Konto eröffnen →"
};
const ai$4 = {
  title: "KI-Modell Token- & API-Kostensimulator",
  subtitle: "Schätzen Sie die monatlichen API-Ausgaben für GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro und Llama 3.",
  input: "Monatliche Eingabe-Token",
  output: "Monatliche Ausgabe-Token",
  monthly: "Geschätzte Monatliche Kosten",
  yearly: "Geschätzte Jährliche Kosten",
  downloadReport: "Bericht Herunterladen (PDF/TXT)",
  embed: "Einbetten (Embed)",
  embedLabel: "Zu Ihrer Website hinzufügen (Einbettbarer Widget-Code):",
  embedNotice: "Kopieren Sie den Code und fügen Sie ihn auf Ihrer Website ein.",
  inputCost: "Eingabekosten",
  outputCost: "Ausgabekosten",
  recommendedAi: "Empfohlene KI- & Cloud-Ressourcen (Credits erhalten)",
  aws: "AWS Free Tier",
  awsDesc: "12 Monate kostenlose Rechen- und Speicherkapazität.",
  awsCta: "Kostenloses AWS-Konto holen →",
  openAi: "OpenAI Credits",
  openAiDesc: "Kostenlose Start-API-Credits für Entwickler.",
  openAiCta: "$5 gratis Credits holen →",
  anthropic: "Anthropic Claude API",
  anthropicDesc: "Claude 3.5 Sonnet-Instanzen direkt deployen.",
  anthropicCta: "Entwicklerkonsole registrieren →"
};
const footer$4 = {
  copyright: "© 2026 GlobalPayCalc.com. Alle Rechte vorbehalten.",
  privacy: "Datenschutzerklärung",
  terms: "Nutzungsbedingungen",
  tagline: "Sicheres Client-seitiges Utility-Paket.",
  privacyText: "Bei GlobalPayCalc.com hat der Schutz Ihrer Privatsphäre Priorität. Alle Vorgänge laufen lokal im Browser ab. Es werden keine Dateien auf Server hochgeladen.",
  termsText: "Die Berechnungen dienen nur zur Information. Konsultieren Sie vor Steuerentscheidungen einen Steuerberater.",
  aboutUs: "Über uns",
  contact: "Kontakt"
};
const faq$4 = {
  title: "Häufig gestellte Fragen",
  q1: "Wie funktioniert der globale Netto-Gehalts- & Steuerrechner?",
  a1: "GlobalPayCalc ist eine 100 % kostenlose globale Fintech-Plattform für Remote-Mitarbeiter, digitale Nomaden und Entwickler. Es bietet Netto-Gehaltsrechner (USA, UK, DE, TR), Angestellten- vs. Freiberufler-Vergleiche, Stundensatz-Rechner, Bankgebühren-Schätzer und MwSt-Rechner.",
  q2: "Kann ich mein Remote-Gehalt und die Steuerparität genau berechnen?",
  a2: "Ja! GlobalPayCalc bietet einen hochpräzisen globalen Gehaltsrechner, der speziell für digitale Nomaden und Remote-Mitarbeiter entwickelt wurde. Unsere Utility-Engine vergleicht Ihr Nettogehalt in über 150 Ländern unter Berücksichtigung lokaler Steuerklassen, Lebenshaltungskostenunterschiede und der Kaufkraftparität (KKP). Dies stellt sicher, dass Sie Sponsorenangebote bewerten und sicher berechnen können, wie viel Sie nach Steuern tatsächlich verdienen, unabhängig von Ihrem globalen Standort.",
  q3: "Ist der KI-Token-Kosten-Simulator für Entwickler kostenlos?",
  a3: "Absolut. Entwickler können unseren fortschrittlichen KI-API-Token-Kosten-Simulator verwenden, um die finanziellen Kosten für den Betrieb großer Sprachmodelle (LLMs) wie GPT-4o, Claude 3.5 und LLaMA 3 genau vorherzusagen. Egal, ob Sie einen autonomen Agenten erstellen, große Datenextraktionen verarbeiten oder eine Kundensupport-Pipeline betreiben, unser Simulator bietet sofortige, kostenlose Schätzungen, die Ihnen helfen, Ihre API-Ausgaben sicher zu optimieren."
};
const cookie$4 = {
  message: "Wir verwenden Cookies, um Ihre Erfahrung zu verbessern, personalisierte Anzeigen zu schalten und unseren Traffic zu analysieren. Durch Klicken auf 'Alle akzeptieren' stimmen Sie der Verwendung von Cookies zu.",
  accept: "Alle akzeptieren",
  decline: "Ablehnen"
};
const legal$4 = {
  lastUpdated: "Zuletzt aktualisiert",
  privacy: {
    title: "Datenschutzrichtlinie",
    desc: "Datenschutzrichtlinie und DSGVO-Konformität.",
    h1: "1. Informationen, die wir sammeln",
    p1: "Wir sammeln minimale Informationen. Wir verwenden Google Analytics und Google AdSense.",
    h2: "2. Wie wir Cookies verwenden",
    p2: "Wir verwenden Cookies, um Inhalte und Anzeigen zu personalisieren und unseren Traffic zu analysieren.",
    h3: "3. Dienste von Drittanbietern",
    p3: "Dienste wie Google Analytics und AdSense können Cookies verwenden. Sie können personalisierte Werbung deaktivieren.",
    h4: "4. Datensicherheit",
    p4: "Alle Berechnungen werden lokal im Browser durchgeführt. Wir speichern keine Finanzdaten."
  },
  terms: {
    title: "Nutzungsbedingungen",
    desc: "Nutzungsbedingungen von GlobalPayCalc.",
    h1: "1. Annahme der Bedingungen",
    p1: "Durch die Nutzung von GlobalPayCalc.com stimmen Sie diesen Bedingungen zu.",
    h2: "2. Nutzung des Dienstes",
    p2: "Die Tools dienen nur zu Informationszwecken. Wir garantieren nicht für die Richtigkeit von Steuerberechnungen.",
    h3: "3. Geistiges Eigentum",
    p3: "Die Inhalte sind Eigentum von GlobalPayCalc und urheberrechtlich geschützt."
  },
  about: {
    title: "Über uns",
    desc: "Erfahren Sie mehr über GlobalPayCalc.",
    intro: "GlobalPayCalc ist ein umfassendes digitales Werkzeug für Remote-Arbeiter.",
    h1: "Unsere Mission",
    p1: "Unsere Mission ist es, Finanzdaten durch schnelle und genaue Tools zu demokratisieren.",
    h2: "Warum wir das gebaut haben",
    p2: "Profis brauchen schnelle Antworten auf komplexe Fragen, ohne private Daten zu senden."
  },
  contact: {
    title: "Kontakt",
    desc: "Kontaktieren Sie den Support.",
    intro: "Haben Sie Fragen oder Anregungen?",
    response: "Wir antworten normalerweise innerhalb von 24-48 Stunden."
  }
};
const dynamic$4 = {
  llmTitle: "{{modelA}} vs {{modelB}} API-Kostensimulator für {{useCase}}",
  llmDesc: "Projizieren und vergleichen Sie monatliche API-Kosten zwischen {{modelA}} und {{modelB}} für großvolumige {{useCase}} Implementierungen.",
  taxTitle: "{{origin}} nach {{dest}} Remote {{status}} Steuerparitätsrechner",
  taxDesc: "Berechnen Sie das Nettogehalt, Lebenshaltungskosten und effektive Steuersätze von {{origin}} nach {{dest}} für Remote-{{status}}. {{taxContext}}",
  llmHeader: "LLM API Kosten- & Latenzprojektion",
  taxHeader: "Nettogehalt & Kaufkraftparitätsprojektion",
  originNet: "{{origin}} Netto",
  destNet: "{{dest}} Netto",
  taxRate: "{{rate}}% Steuersatz",
  purchasingPower: "Kaufkraftsteigerung",
  costIndex: "Lebenshaltungskostenindex",
  relatedComparisons: "Verwandte Vergleiche",
  relatedLlmDesc: "Entdecken Sie weitere KI-Kostensimulationen.",
  relatedTaxDesc: "Entdecken Sie weitere beliebte Remote-Arbeitsziele.",
  taxHigh: "Diese Route stellt eine relativ hohe Steuerklasse dar.",
  taxLow: "Dieses Ziel bietet sehr günstige steuerliche Bedingungen.",
  taxMid: "Dieses Ziel verfügt über eine moderate Steuerstruktur."
};
const de = {
  nav: nav$4,
  hero: hero$4,
  bg: bg$4,
  salary: salary$4,
  ai: ai$4,
  footer: footer$4,
  faq: faq$4,
  cookie: cookie$4,
  legal: legal$4,
  dynamic: dynamic$4
};
const nav$3 = {
  brand: "GlobalPayCalc.com",
  tagline: "Motor Fintech e Salários Globais",
  takeHome: "Salário Líquido e Impostos",
  contractor: "Funcionário vs Contractor",
  fxFees: "Taxas FX Ocultas",
  vat: "Fatura e IVA",
  salary: "Paridade de Cidades",
  aiCost: "Custo de Tokens IA",
  bgRemover: "Estúdio WASM",
  admin: "Painel Admin",
  hourlyRate: "Taxa Horária",
  beckhamLaw: "Lei Beckham",
  cryptoTax: "Salário Cripto",
  nomadVisa: "Teste Visto Nômada",
  eorCost: "Custo EOR",
  inflation: "Perda Inflação",
  timezone: "Fuso Horário"
};
const hero$3 = {
  badge: "100% Grátis • Ilimitado • Motor Fintech no Cliente",
  title: "Simulador Global de Salários Líquidos, Impostos e Custos IA",
  subtitle: "Calcule salários líquidos globais, equivalência W-2 vs 1099, taxas bancárias ocultas e valores de IVA de exportação B2B.",
  seoTitle: "Como Funciona e Principais Recursos",
  seoText: "GlobalPayCalc é uma plataforma fintech abrangente criada para trabalhadores remotos, nômades digitais e desenvolvedores de IA. Nossa suíte inclui uma calculadora dinâmica de salário líquido, motor de equivalência contratado vs funcionário, estimador de taxas bancárias e calculadora de IVA."
};
const bg$3 = {
  title: "Removedor de Fundo e Conversor de Imagens IA",
  subtitle: "Remova fundos de fotos e converta imagens para WebP/PNG instantaneamente no seu navegador.",
  dropzone: "Arraste as fotos aqui ou clique para procurar",
  btn: "Remover Fundo & Comprimir",
  processing: "Processando Imagem no Motor de IA...",
  success: "Fundo Removido com Sucesso!",
  selectedFiles: "Arquivos selecionados",
  localReady: "Processamento local pronto",
  originalSize: "Tamanho original",
  processedSize: "Tamanho processado",
  download: "Baixar",
  progressText: "Removendo fundo e transparentizando...",
  zeroUpload: "Sem envio ao servidor • Processado localmente no WebWorker"
};
const salary$3 = {
  title: "Calculadora de Salário Remoto Global e Câmbio",
  subtitle: "Calcule o salário líquido e a paridade do poder de compra em mais de 50 países.",
  gross: "Salário Bruto Anual",
  home: "País de Origem",
  target: "País de Destino",
  netHome: "Líquido Mensal (Origem)",
  netTarget: "Líquido Mensal (Destino)",
  boost: "Relação de Poder de Compra",
  downloadReport: "Baixar Relatório (PDF/TXT)",
  embed: "Incorporar (Embed)",
  embedLabel: "Adicionar ao Seu Site (Código do Widget Incorporável):",
  embedNotice: "Copie o código acima e cole-o no seu site ou blog para exibir o widget.",
  netMonthlyAfterTax: "Líquido mensal após {tax}% de imposto",
  recommendedNomad: "Ferramentas Nômade Recomendadas (Economize & Proteja-se)",
  wise: "Transferência Wise",
  wiseDesc: "Conta multicambial sem taxas ocultas.",
  wiseCta: "Obter Transferência Grátis →",
  safetyWing: "SafetyWing Saúde",
  safetyWingDesc: "Seguro médico de viagem global para nômades.",
  safetyWingCta: "Segurar por $1,50/dia →",
  revolut: "Revolut Business",
  revolutDesc: "Contas globais para freelancers & startups.",
  revolutCta: "Abrir Conta →"
};
const ai$3 = {
  title: "Simulador de Custo de Tokens e API de Modelos de IA",
  subtitle: "Estime os gastos mensais com API para GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro e Llama 3.",
  input: "Tokens de Entrada Mensais",
  output: "Tokens de Saída Mensais",
  monthly: "Custo Mensal Estimado",
  yearly: "Custo Anual Estimado",
  downloadReport: "Baixar Relatório (PDF/TXT)",
  embed: "Incorporar (Embed)",
  embedLabel: "Adicionar ao Seu Site (Código do Widget Incorporável):",
  embedNotice: "Copie o código e cole-o no seu site para exibir o widget.",
  inputCost: "Custo de Entrada",
  outputCost: "Custo de Saída",
  recommendedAi: "Recursos de IA e Nuvem Recomendados (Obtenha Créditos)",
  aws: "AWS Nível Gratuito",
  awsDesc: "Obtenha 12 meses de computação e armazenamento gratuitos.",
  awsCta: "Criar Conta AWS Gratuita →",
  openAi: "Créditos OpenAI",
  openAiDesc: "Créditos de API gratuitos para desenvolvedores iniciantes.",
  openAiCta: "Obter $5 de Créditos Grátis →",
  anthropic: "Anthropic Claude API",
  anthropicDesc: "Implante instâncias Claude 3.5 Sonnet diretamente.",
  anthropicCta: "Registrar no Console do Desenvolvedor →"
};
const footer$3 = {
  copyright: "© 2026 GlobalPayCalc.com. Todos os direitos reservados.",
  privacy: "Política de Privacidade",
  terms: "Termos de Serviço",
  tagline: "Suite de utilitários segura no lado do cliente.",
  privacyText: "Na GlobalPayCalc.com, a privacidade dos visitantes é nossa prioridade. Todas as operações são executadas localmente no seu navegador. Nenhum arquivo é carregado para qualquer servidor.",
  termsText: "As estimativas da GlobalPayCalc.com são apenas para referência. Consulte um consultor fiscal antes de tomar decisões oficiais.",
  aboutUs: "Sobre Nós",
  contact: "Contato"
};
const faq$3 = {
  title: "Perguntas Frequentes",
  q1: "Como funciona o motor de salário líquido e impostos?",
  a1: "GlobalPayCalc é uma suíte fintech global 100% gratuita criada para trabalhadores remotos, nômades digitais e desenvolvedores. Inclui calculadoras de salário líquido (EUA, Reino Unido, DE, TR), equivalência de contratados W-2 vs 1099, estimadores de taxa horária e comparadores de taxas bancárias FX.",
  q2: "Posso calcular meu salário remoto e paridade fiscal com precisão?",
  a2: "Sim! A GlobalPayCalc fornece uma calculadora de salário global altamente precisa, projetada especificamente para nômades digitais e trabalhadores remotos. Nosso mecanismo utilitário compara seu salário líquido em mais de 150 países, levando em consideração as faixas de impostos locais, variações de custo de vida e paridade de poder de compra (PPC). Isso garante que você possa avaliar as ofertas dos patrocinadores e calcular com segurança quanto realmente ganhará após os impostos, independentemente da sua localização global.",
  q3: "O simulador de custo de token de IA é gratuito para desenvolvedores?",
  a3: "Absolutamente. Os desenvolvedores podem usar nosso avançado simulador de custo de token de API de IA para prever com precisão o custo financeiro de executar modelos de linguagem grande (LLMs), como GPT-4o, Claude 3.5 e LLaMA 3. Esteja você construindo um agente autônomo, processando grandes extrações de dados ou executando um pipeline de suporte ao cliente, nosso simulador fornece estimativas instantâneas e gratuitas para ajudá-lo a otimizar as despesas de sua API com segurança."
};
const cookie$3 = {
  message: "Usamos cookies para melhorar sua experiência, veicular anúncios personalizados e analisar nosso tráfego. Ao clicar em 'Aceitar tudo', você concorda com o uso de cookies.",
  accept: "Aceitar tudo",
  decline: "Recusar"
};
const legal$3 = {
  lastUpdated: "Última atualização",
  privacy: {
    title: "Política de Privacidade",
    desc: "Política de Privacidade e GDPR.",
    h1: "1. Informações que coletamos",
    p1: "Coletamos o mínimo de informações. Usamos o Google Analytics e o Google AdSense.",
    h2: "2. Como usamos cookies",
    p2: "Usamos cookies para personalizar conteúdo, anúncios e analisar o tráfego.",
    h3: "3. Serviços de terceiros",
    p3: "Serviços como Google Analytics podem usar cookies. Você pode desativar anúncios personalizados.",
    h4: "4. Segurança de dados",
    p4: "Os cálculos são feitos localmente. Não armazenamos dados financeiros."
  },
  terms: {
    title: "Termos de Serviço",
    desc: "Termos de Serviço do GlobalPayCalc.",
    h1: "1. Aceitação",
    p1: "Ao usar o GlobalPayCalc.com, você concorda com estes termos.",
    h2: "2. Uso do Serviço",
    p2: "As calculadoras são apenas para fins informativos. Consulte um consultor financeiro.",
    h3: "3. Propriedade Intelectual",
    p3: "O conteúdo é propriedade do GlobalPayCalc e é protegido por leis de direitos autorais."
  },
  about: {
    title: "Sobre Nós",
    desc: "Saiba mais sobre a nossa missão.",
    intro: "GlobalPayCalc é uma suíte de ferramentas para trabalhadores remotos.",
    h1: "Nossa Missão",
    p1: "Fornecer ferramentas precisas, instantâneas e seguras no lado do cliente.",
    h2: "Por que construímos isso",
    p2: "O mundo exige respostas rápidas a cálculos complexos sem comprometer a privacidade."
  },
  contact: {
    title: "Contate-Nos",
    desc: "Entre em contato com o suporte.",
    intro: "Tem dúvidas ou sugestões?",
    response: "Normalmente respondemos em 24-48 horas úteis."
  }
};
const dynamic$3 = {
  llmTitle: "Simulador de Custos de API {{modelA}} vs {{modelB}} para {{useCase}}",
  llmDesc: "Projete e compare custos mensais de API entre {{modelA}} e {{modelB}} para implementações de alto volume de {{useCase}}.",
  taxTitle: "Calculadora de Paridade Fiscal para {{status}} Remoto de {{origin}} para {{dest}}",
  taxDesc: "Calcule salário líquido, diferença de custo de vida e taxas de impostos efetivas de {{origin}} para {{dest}} para {{status}} remoto. {{taxContext}}",
  llmHeader: "Projeção de Custos e Latência de API LLM",
  taxHeader: "Projeção de Salário Líquido e Paridade de Poder de Compra",
  originNet: "Líquido em {{origin}}",
  destNet: "Líquido em {{dest}}",
  taxRate: "{{rate}}% de Imposto",
  purchasingPower: "Aumento do Poder de Compra",
  costIndex: "Índice de Custo de Vida",
  relatedComparisons: "Comparações Relacionadas",
  relatedLlmDesc: "Explore outras simulações de custos de IA.",
  relatedTaxDesc: "Explore outros destinos populares de trabalho remoto.",
  taxHigh: "Esta rota representa uma faixa de impostos relativamente alta.",
  taxLow: "Este destino oferece condições fiscais altamente favoráveis.",
  taxMid: "Este destino apresenta uma estrutura fiscal moderada."
};
const pt = {
  nav: nav$3,
  hero: hero$3,
  bg: bg$3,
  salary: salary$3,
  ai: ai$3,
  footer: footer$3,
  faq: faq$3,
  cookie: cookie$3,
  legal: legal$3,
  dynamic: dynamic$3
};
const nav$2 = {
  brand: "GlobalPayCalc.com",
  tagline: "Moteur Fintech et Salaires Mondiaux",
  takeHome: "Salaire Net et Impôts",
  contractor: "Employé vs Contractor",
  fxFees: "Frais FX Cachés",
  vat: "Facture et TVA",
  salary: "Parité des Villes",
  aiCost: "Coût Jetons IA",
  bgRemover: "WASM Studio",
  admin: "Panneau d'Administration",
  hourlyRate: "Taux Horaire",
  beckhamLaw: "Loi Beckham",
  cryptoTax: "Salaire Crypto",
  nomadVisa: "Test Visa Nomade",
  eorCost: "Coût EOR",
  inflation: "Perte d'Inflation",
  timezone: "Fuseau Horaire"
};
const hero$2 = {
  badge: "100% Gratuit • Illimité • Moteur Fintech Côté Client",
  title: "Simulateur Mondial de Salaires Nets, Impôts et Coûts IA",
  subtitle: "Calculez les salaires nets mondiaux, l'équivalence W-2 vs 1099, les frais bancaires cachés et la TVA d'exportation B2B.",
  seoTitle: "Comment Ça Marche et Fonctionnalités Principales",
  seoText: "GlobalPayCalc est une plateforme fintech complète conçue pour les travailleurs à distance, les nomades numériques et les développeurs IA. Notre suite comprend un calculateur dynamique de salaire net, un moteur d'équivalence entre contractuels et salariés, un estimateur de frais bancaires réels et un calculateur de TVA."
};
const bg$2 = {
  title: "Suppresseur de Fond et Convertisseur d'Images IA",
  subtitle: "Supprimez les arrière-plans des photos et convertissez les images en WebP/PNG instantanément dans votre navigateur.",
  dropzone: "Glissez les photos ici ou cliquez pour parcourir",
  btn: "Supprimer le Fond & Compresser",
  processing: "Traitement de l'image dans le moteur IA...",
  success: "Arrière-plan supprimé avec succès !",
  selectedFiles: "Fichiers sélectionnés",
  localReady: "Traitement local prêt",
  originalSize: "Taille originale",
  processedSize: "Taille traitée",
  download: "Télécharger",
  progressText: "Suppression du fond et transparentisation...",
  zeroUpload: "Aucun envoi au serveur • Traité localement dans WebWorker"
};
const salary$2 = {
  title: "Calculateur de Salaire Remote et Devises",
  subtitle: "Calculez le salaire net à emporter et la parité du pouvoir d'achat dans plus de 50 pays.",
  gross: "Salaire Brut Annuel",
  home: "Pays d'Origine",
  target: "Pays de Destination",
  netHome: "Net Mensuel (Origine)",
  netTarget: "Net Mensuel (Destination)",
  boost: "Ratio de Pouvoir d'Achat",
  downloadReport: "Télécharger le Rapport (PDF/TXT)",
  embed: "Intégrer (Embed)",
  embedLabel: "Ajouter à votre site (Code Widget Intégrable) :",
  embedNotice: "Copiez le code ci-dessus et collez-le sur votre site web ou blog.",
  netMonthlyAfterTax: "Net mensuel après {tax}% d'impôt",
  recommendedNomad: "Outils Nomades Recommandés (Économiser & Sécuriser)",
  wise: "Virement Wise",
  wiseDesc: "Compte multidevises sans frais cachés.",
  wiseCta: "Obtenir un Virement Gratuit →",
  safetyWing: "SafetyWing Assurance",
  safetyWingDesc: "Assurance médicale de voyage mondiale pour nomades.",
  safetyWingCta: "S'assurer pour 1,50 $/jour →",
  revolut: "Revolut Business",
  revolutDesc: "Comptes mondiaux pour freelances & startups.",
  revolutCta: "Ouvrir un Compte →"
};
const ai$2 = {
  title: "Simulateur de Coût de Tokens & API de Modèles IA",
  subtitle: "Estimez les dépenses API mensuelles pour GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro et Llama 3.",
  input: "Tokens d'Entrée Mensuels",
  output: "Tokens de Sortie Mensuels",
  monthly: "Coût Mensuel Estimé",
  yearly: "Coût Annuel Estimé",
  downloadReport: "Télécharger le Rapport (PDF/TXT)",
  embed: "Intégrer (Embed)",
  embedLabel: "Ajouter à votre site (Code Widget Intégrable) :",
  embedNotice: "Copiez le code et collez-le sur votre site web pour afficher le widget.",
  inputCost: "Coût d'Entrée",
  outputCost: "Coût de Sortie",
  recommendedAi: "Ressources IA & Cloud Recommandées (Obtenir des Crédits)",
  aws: "AWS Offre Gratuite",
  awsDesc: "Obtenez 12 mois de calcul et stockage gratuits.",
  awsCta: "Créer un Compte AWS Gratuit →",
  openAi: "Crédits OpenAI",
  openAiDesc: "Crédits API de démarrage gratuits pour développeurs.",
  openAiCta: "Obtenir 5$ de Crédits Gratuits →",
  anthropic: "Anthropic Claude API",
  anthropicDesc: "Déployez des instances Claude 3.5 Sonnet directement.",
  anthropicCta: "S'inscrire sur la Console Développeur →"
};
const footer$2 = {
  copyright: "© 2026 GlobalPayCalc.com. Tous droits réservés.",
  privacy: "Politique de Confidentialité",
  terms: "Conditions d'Utilisation",
  tagline: "Suite d'utilitaires sécurisée côté client.",
  privacyText: "Chez GlobalPayCalc.com, la confidentialité des visiteurs est notre priorité. Toutes les opérations s'exécutent localement dans votre navigateur. Aucun fichier n'est téléversé sur des serveurs externes.",
  termsText: "Les calculs fournis sur GlobalPayCalc.com sont à titre indicatif uniquement. Consultez un conseiller fiscal avant toute décision officielle.",
  aboutUs: "À propos de nous",
  contact: "Contact"
};
const faq$2 = {
  title: "Foire Aux Questions",
  q1: "Comment fonctionne le moteur de salaire net et d'impôts ?",
  a1: "GlobalPayCalc est une suite fintech mondiale 100% gratuite conçue pour les travailleurs à distance, les nomades numériques et les développeurs. Elle comprend des calculateurs de salaire net (USA, UK, DE, TR), l'équivalence contractuel W-2 vs 1099, des estimateurs de taux horaire et des comparateurs de frais bancaires.",
  q2: "Puis-je calculer mon salaire à distance et la parité fiscale avec précision ?",
  a2: "Oui ! GlobalPayCalc fournit un calculateur de salaire mondial très précis, conçu spécifiquement pour les nomades numériques et les travailleurs à distance. Notre moteur utilitaire compare votre salaire net dans plus de 150 pays, en tenant compte des tranches d'imposition locales, des variations du coût de la vie et de la parité de pouvoir d'achat (PPA). Cela garantit que vous pouvez évaluer les offres des sponsors et calculer en toute sécurité ce que vous gagnerez réellement après impôts, quelle que soit votre situation géographique mondiale.",
  q3: "Le simulateur de coût des jetons IA est-il gratuit pour les développeurs ?",
  a3: "Absolument. Les développeurs peuvent utiliser notre simulateur de coût des jetons de l'API IA avancé pour prévoir avec précision le coût financier de l'exécution de grands modèles linguistiques (LLM) tels que GPT-4o, Claude 3.5 et LLaMA 3. Que vous construisiez un agent autonome, traitiez des extractions de données volumineuses ou gériez un pipeline de support client, notre simulateur fournit des estimations instantanées et gratuites pour vous aider à optimiser vos dépenses d'API en toute sécurité."
};
const cookie$2 = {
  message: "Nous utilisons des cookies pour améliorer votre expérience, diffuser des annonces personnalisées et analyser notre trafic. En cliquant sur 'Tout accepter', vous consentez à l'utilisation de cookies.",
  accept: "Tout accepter",
  decline: "Refuser"
};
const legal$2 = {
  lastUpdated: "Dernière mise à jour",
  privacy: {
    title: "Politique de confidentialité",
    desc: "Politique de confidentialité et RGPD.",
    h1: "1. Informations que nous collectons",
    p1: "Nous collectons un minimum d'informations. Nous utilisons Google Analytics et Google AdSense.",
    h2: "2. Comment nous utilisons les cookies",
    p2: "Nous utilisons des cookies pour personnaliser le contenu et analyser notre trafic.",
    h3: "3. Services tiers",
    p3: "Des services comme Google Analytics peuvent utiliser des cookies. Vous pouvez désactiver les annonces personnalisées.",
    h4: "4. Sécurité des données",
    p4: "Tous les calculs sont effectués localement. Nous ne stockons pas vos données financières."
  },
  terms: {
    title: "Conditions d'utilisation",
    desc: "Conditions d'utilisation de GlobalPayCalc.",
    h1: "1. Acceptation des conditions",
    p1: "En utilisant GlobalPayCalc.com, vous acceptez ces conditions.",
    h2: "2. Utilisation du service",
    p2: "Les outils sont fournis à titre informatif. Consultez un conseiller financier.",
    h3: "3. Propriété intellectuelle",
    p3: "Le contenu appartient à GlobalPayCalc et est protégé par le droit d'auteur."
  },
  about: {
    title: "À propos de nous",
    desc: "En savoir plus sur GlobalPayCalc.",
    intro: "GlobalPayCalc est une suite d'outils pour les travailleurs à distance.",
    h1: "Notre mission",
    p1: "Fournir des outils précis, instantanés et sécurisés.",
    h2: "Pourquoi nous avons construit cela",
    p2: "Le monde a besoin de réponses rapides à des questions complexes sans compromettre la confidentialité."
  },
  contact: {
    title: "Nous contacter",
    desc: "Contacter le support.",
    intro: "Vous avez des questions ou des suggestions ?",
    response: "Nous répondons généralement dans les 24-48 heures."
  }
};
const dynamic$2 = {
  llmTitle: "Simulateur de Coût API {{modelA}} vs {{modelB}} pour {{useCase}}",
  llmDesc: "Projetez et comparez les coûts mensuels d'API entre {{modelA}} et {{modelB}} pour des implémentations de {{useCase}}.",
  taxTitle: "Calculateur de Parité Fiscale de {{origin}} à {{dest}} pour {{status}} à Distance",
  taxDesc: "Calculez le salaire net, la différence de coût de la vie et les taux d'imposition effectifs de {{origin}} à {{dest}} pour {{status}}. {{taxContext}}",
  llmHeader: "Projection des Coûts et de la Latence de l'API LLM",
  taxHeader: "Projection du Salaire Net et de la Parité de Pouvoir d'Achat",
  originNet: "Net à {{origin}}",
  destNet: "Net à {{dest}}",
  taxRate: "{{rate}}% d'Impôts",
  purchasingPower: "Augmentation du Pouvoir d'Achat",
  costIndex: "Indice du Coût de la Vie",
  relatedComparisons: "Comparaisons Liées",
  relatedLlmDesc: "Explorez d'autres simulations de coûts d'IA.",
  relatedTaxDesc: "Explorez d'autres destinations de télétravail populaires.",
  taxHigh: "Cet itinéraire représente une tranche d'imposition relativement élevée.",
  taxLow: "Cette destination offre des conditions fiscales très favorables.",
  taxMid: "Cette destination présente une structure fiscale modérée."
};
const fr = {
  nav: nav$2,
  hero: hero$2,
  bg: bg$2,
  salary: salary$2,
  ai: ai$2,
  footer: footer$2,
  faq: faq$2,
  cookie: cookie$2,
  legal: legal$2,
  dynamic: dynamic$2
};
const nav$1 = {
  brand: "GlobalPayCalc.com",
  tagline: "Mesin Fintech & Gaji Global",
  takeHome: "Gaji Bersih & Pajak",
  contractor: "Karyawan vs Contractor",
  fxFees: "Biaya FX Tersembunyi",
  vat: "Faktur & PPN",
  salary: "Paritas Kota",
  aiCost: "Biaya Token AI",
  bgRemover: "Studio WASM",
  admin: "Panel Admin",
  hourlyRate: "Tarif Per Jam",
  beckhamLaw: "Hukum Beckham",
  cryptoTax: "Gaji Kripto",
  nomadVisa: "Tes Visa Nomad",
  eorCost: "Biaya EOR",
  inflation: "Kerugian Inflasi",
  timezone: "Zona Waktu"
};
const hero$1 = {
  badge: "100% Gratis • Tanpa Batas • Mesin Fintech Sisi Klien",
  title: "Simulasi Gaji Bersih, Pajak & Biaya AI Global",
  subtitle: "Hitung gaji bersih global, kesetaraan W-2 vs 1099, biaya tersembunyi bank, dan nilai PPN ekspor B2B.",
  seoTitle: "Cara Kerja & Fitur Utama",
  seoText: "GlobalPayCalc adalah platform fintech komprehensif yang dirancang untuk pekerja jarak jauh, nomaden digital, dan pengembang AI. Suite kami mencakup kalkulator gaji bersih dinamis, mesin kesetaraan kontraktor vs karyawan, estimasi biaya bank nyata, dan kalkulator PPN."
};
const bg$1 = {
  title: "Penghapus Latar Belakang & Konverter Gambar AI",
  subtitle: "Hapus latar belakang foto dan konversi gambar ke WebP/PNG secara instan di browser Anda.",
  dropzone: "Seret foto ke sini atau klik untuk mencari",
  btn: "Hapus Latar Belakang & Kompres",
  processing: "Memproses Gambar di Mesin AI...",
  success: "Latar Belakang Berhasil Dihapus!",
  selectedFiles: "File dipilih",
  localReady: "Pemrosesan lokal siap",
  originalSize: "Ukuran asli",
  processedSize: "Ukuran terproses",
  download: "Unduh",
  progressText: "Menghapus latar belakang & membuat transparan...",
  zeroUpload: "Tidak ada upload ke server • Diproses lokal di WebWorker"
};
const salary$1 = {
  title: "Kalkulator Gaji Remote Global & Mata Uang",
  subtitle: "Hitung gaji bersih dan paritas daya beli di lebih dari 50 negara.",
  gross: "Gaji Kotor Tahunan",
  home: "Negara Asal",
  target: "Negara Tujuan",
  netHome: "Bersih Bulanan (Asal)",
  netTarget: "Bersih Bulanan (Tujuan)",
  boost: "Rasio Daya Beli",
  downloadReport: "Unduh Laporan (PDF/TXT)",
  embed: "Sematkan (Embed)",
  embedLabel: "Tambahkan ke Situs Anda (Kode Widget yang Dapat Disematkan):",
  embedNotice: "Salin kode di atas dan tempel di situs web atau blog Anda untuk menampilkan widget.",
  netMonthlyAfterTax: "Bersih bulanan setelah pajak {tax}%",
  recommendedNomad: "Alat Nomad yang Direkomendasikan (Hemat & Aman)",
  wise: "Transfer Wise",
  wiseDesc: "Akun multimata uang tanpa komisi.",
  wiseCta: "Dapatkan Transfer Gratis →",
  safetyWing: "SafetyWing Kesehatan",
  safetyWingDesc: "Asuransi kesehatan perjalanan global untuk nomad.",
  safetyWingCta: "Asuransi seharga $1,50/hari →",
  revolut: "Revolut Business",
  revolutDesc: "Rekening global untuk freelancer & startup.",
  revolutCta: "Buka Akun →"
};
const ai$1 = {
  title: "Simulator Biaya Token & API Model AI",
  subtitle: "Perkirakan pengeluaran API bulanan untuk GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro, dan Llama 3.",
  input: "Token Input Bulanan",
  output: "Token Output Bulanan",
  monthly: "Estimasi Biaya Bulanan",
  yearly: "Estimasi Biaya Tahunan",
  downloadReport: "Unduh Laporan (PDF/TXT)",
  embed: "Sematkan (Embed)",
  embedLabel: "Tambahkan ke Situs Anda (Kode Widget yang Dapat Disematkan):",
  embedNotice: "Salin kode dan tempel di situs web Anda untuk menampilkan widget.",
  inputCost: "Biaya Input",
  outputCost: "Biaya Output",
  recommendedAi: "Sumber Daya AI & Cloud yang Direkomendasikan (Dapatkan Kredit)",
  aws: "AWS Tingkat Gratis",
  awsDesc: "Dapatkan komputasi dan penyimpanan gratis 12 bulan.",
  awsCta: "Klaim Akun AWS Gratis →",
  openAi: "Kredit OpenAI",
  openAiDesc: "Kredit API awal gratis untuk pengembang.",
  openAiCta: "Dapatkan $5 Kredit Gratis →",
  anthropic: "Anthropic Claude API",
  anthropicDesc: "Deploy instans Claude 3.5 Sonnet secara langsung.",
  anthropicCta: "Daftar Konsol Developer →"
};
const footer$1 = {
  copyright: "© 2026 GlobalPayCalc.com. Semua hak dilindungi.",
  privacy: "Kebijakan Privasi",
  terms: "Syarat Layanan",
  tagline: "Suite utilitas aman di sisi klien.",
  privacyText: "Di GlobalPayCalc.com, privasi pengunjung adalah prioritas kami. Semua operasi berjalan secara lokal di browser Anda. Tidak ada file yang diunggah ke server manapun.",
  termsText: "Kalkulasi yang disediakan di GlobalPayCalc.com hanya untuk tujuan estimasi. Konsultasikan dengan profesional pajak lokal untuk saran resmi.",
  aboutUs: "Tentang Kami",
  contact: "Kontak"
};
const faq$1 = {
  title: "Pertanyaan yang Sering Diajukan",
  q1: "Bagaimana cara kerja mesin gaji bersih dan pajak?",
  a1: "GlobalPayCalc adalah suite fintech global 100% gratis yang dibangun untuk pekerja jarak jauh, nomaden digital, dan pengembang. Ini mencakup kalkulator gaji bersih (AS, Inggris, DE, TR), kesetaraan kontraktor W-2 vs 1099, estimasi tarif per jam, dan pembanding biaya bank FX.",
  q2: "Dapatkah saya menghitung gaji jarak jauh dan paritas pajak saya secara akurat?",
  a2: "Ya! GlobalPayCalc menyediakan kalkulator gaji global yang sangat akurat yang dirancang khusus untuk nomaden digital dan pekerja jarak jauh. Mesin utilitas kami membandingkan gaji bersih Anda di lebih dari 150 negara, dengan mempertimbangkan golongan pajak lokal, variasi biaya hidup, dan paritas daya beli (PPP). Ini memastikan bahwa Anda dapat mengevaluasi penawaran sponsor dan dengan aman menghitung berapa banyak yang benar-benar akan Anda peroleh setelah pajak, terlepas dari lokasi global Anda.",
  q3: "Apakah simulator biaya token AI gratis untuk pengembang?",
  a3: "Tentu saja. Pengembang dapat menggunakan simulator biaya token API AI kami yang canggih untuk memprediksi secara akurat biaya keuangan dari menjalankan model bahasa besar (LLM) seperti GPT-4o, Claude 3.5, dan LLaMA 3. Apakah Anda sedang membangun agen otonom, memproses ekstraksi data yang besar, atau menjalankan pipa dukungan pelanggan, simulator kami memberikan perkiraan instan dan gratis untuk membantu Anda mengoptimalkan biaya API Anda secara aman."
};
const cookie$1 = {
  message: "Kami menggunakan cookie untuk meningkatkan pengalaman Anda, menayangkan iklan yang dipersonalisasi, dan menganalisis lalu lintas kami. Dengan mengeklik 'Terima Semua', Anda menyetujui penggunaan cookie kami.",
  accept: "Terima Semua",
  decline: "Tolak"
};
const legal$1 = {
  lastUpdated: "Terakhir diperbarui",
  privacy: {
    title: "Kebijakan Privasi",
    desc: "Kebijakan privasi dan kepatuhan GDPR.",
    h1: "1. Informasi yang Kami Kumpulkan",
    p1: "Kami mengumpulkan informasi minimal. Kami menggunakan Google Analytics dan AdSense.",
    h2: "2. Penggunaan Cookie",
    p2: "Kami menggunakan cookie untuk mempersonalisasi konten dan menganalisis lalu lintas.",
    h3: "3. Layanan Pihak Ketiga",
    p3: "Layanan seperti Google Analytics dapat menggunakan cookie. Anda dapat memilih keluar dari iklan yang dipersonalisasi.",
    h4: "4. Keamanan Data",
    p4: "Semua perhitungan dilakukan secara lokal di browser Anda. Kami tidak menyimpan data keuangan Anda."
  },
  terms: {
    title: "Ketentuan Layanan",
    desc: "Ketentuan Layanan GlobalPayCalc.",
    h1: "1. Penerimaan Ketentuan",
    p1: "Dengan menggunakan GlobalPayCalc.com, Anda menyetujui ketentuan ini.",
    h2: "2. Penggunaan Layanan",
    p2: "Alat-alat hanya untuk tujuan informasi. Konsultasikan dengan penasihat keuangan.",
    h3: "3. Kekayaan Intelektual",
    p3: "Konten dimiliki oleh GlobalPayCalc dan dilindungi oleh hak cipta."
  },
  about: {
    title: "Tentang Kami",
    desc: "Pelajari lebih lanjut tentang misi kami.",
    intro: "GlobalPayCalc adalah alat digital untuk pekerja jarak jauh.",
    h1: "Misi Kami",
    p1: "Menyediakan alat yang akurat, instan, dan aman.",
    h2: "Mengapa Kami Membangun Ini",
    p2: "Dunia membutuhkan jawaban cepat atas perhitungan kompleks tanpa mengorbankan privasi."
  },
  contact: {
    title: "Hubungi Kami",
    desc: "Hubungi dukungan.",
    intro: "Punya pertanyaan atau saran?",
    response: "Kami biasanya merespons dalam 24-48 jam kerja."
  }
};
const dynamic$1 = {
  llmTitle: "Simulator Biaya API {{modelA}} vs {{modelB}} untuk {{useCase}}",
  llmDesc: "Proyeksikan dan bandingkan biaya API bulanan antara {{modelA}} dan {{modelB}} untuk implementasi {{useCase}} volume tinggi.",
  taxTitle: "Kalkulator Paritas Pajak {{status}} Jarak Jauh dari {{origin}} ke {{dest}}",
  taxDesc: "Hitung gaji bersih, perbedaan biaya hidup, dan tarif pajak efektif dari {{origin}} ke {{dest}} untuk {{status}} jarak jauh. {{taxContext}}",
  llmHeader: "Proyeksi Biaya & Latensi API LLM",
  taxHeader: "Proyeksi Gaji Bersih & Paritas Daya Beli",
  originNet: "Bersih di {{origin}}",
  destNet: "Bersih di {{dest}}",
  taxRate: "Tarif Pajak {{rate}}%",
  purchasingPower: "Peningkatan Daya Beli",
  costIndex: "Indeks Biaya Hidup",
  relatedComparisons: "Perbandingan Terkait",
  relatedLlmDesc: "Jelajahi simulasi biaya AI lainnya.",
  relatedTaxDesc: "Jelajahi tujuan kerja jarak jauh populer lainnya.",
  taxHigh: "Rute ini mewakili kelompok pajak yang relatif tinggi.",
  taxLow: "Tujuan ini menawarkan kondisi pajak yang sangat menguntungkan.",
  taxMid: "Tujuan ini memiliki struktur pajak sedang."
};
const id = {
  nav: nav$1,
  hero: hero$1,
  bg: bg$1,
  salary: salary$1,
  ai: ai$1,
  footer: footer$1,
  faq: faq$1,
  cookie: cookie$1,
  legal: legal$1,
  dynamic: dynamic$1
};
const nav = {
  brand: "GlobalPayCalc.com",
  tagline: "グローバルFintech＆給与計算エンジン",
  takeHome: "手取り給与＆税金",
  contractor: "正社員 vs 業務委託",
  fxFees: "隠れた為替手数料",
  vat: "請求書＆消費税",
  salary: "都市間購買力",
  aiCost: "AIトークンコスト",
  bgRemover: "WASMスタジオ",
  admin: "管理パネル",
  hourlyRate: "時給計算",
  beckhamLaw: "ベッカム法",
  cryptoTax: "仮想通貨給与",
  nomadVisa: "ノマドビザ判定",
  eorCost: "EORコスト",
  inflation: "インフレ損失",
  timezone: "タイムゾーン"
};
const hero = {
  badge: "100%無料 • 無制限 • クライアントサイドFintechエンジン",
  title: "グローバル手取り給与、税金、FX＆AIコストシミュレーター",
  subtitle: "世界各国の手取り給与、正社員vsフリーランス換算、銀行の隠れた為替手数料、B2B輸出消費税額を正確に計算。",
  seoTitle: "仕組みと主な機能",
  seoText: "GlobalPayCalcは、リモートワーカー、デジタルノマド、AI開発者のために構築された包括的なFintechプラットフォームです。動的な手取り給与計算機、契約形態比較エンジン、実際の銀行手数料見積もり、および消費税計算ツールを備えています。"
};
const bg = {
  title: "AI写真背景削除・コンバーター",
  subtitle: "ブラウザ内で瞬時に写真の背景を削除し、画像をWebP/PNG形式に変換。",
  dropzone: "ここに写真をドラッグするか、クリックして参照",
  btn: "背景を削除・圧縮",
  processing: "AIエンジンで画像処理中...",
  success: "背景の削除に成功しました！",
  selectedFiles: "選択済みファイル",
  localReady: "ローカル処理準備完了",
  originalSize: "元のサイズ",
  processedSize: "処理後のサイズ",
  download: "ダウンロード",
  progressText: "背景を削除・透明化中...",
  zeroUpload: "サーバーへのアップロードなし • WebWorkerでローカル処理"
};
const salary = {
  title: "グローバルリモート給与・通貨計算機",
  subtitle: "50か国以上の手取り給与と購買力平価を計算。",
  gross: "年収総支給額",
  home: "出身国",
  target: "目標国",
  netHome: "月間手取り（出身国）",
  netTarget: "月間手取り（目標国）",
  boost: "購買力比率",
  downloadReport: "レポートをダウンロード（PDF/TXT）",
  embed: "埋め込み（Embed）",
  embedLabel: "あなたのサイトに追加（埋め込みウィジェットコード）：",
  embedNotice: "上記のコードをコピーして、ウェブサイトまたはブログに貼り付けてください。",
  netMonthlyAfterTax: "{tax}%税引き後の月間手取り",
  recommendedNomad: "おすすめノマドツール（節約＆安全）",
  wise: "Wise送金",
  wiseDesc: "手数料なしのマルチカレンシー口座。",
  wiseCta: "無料送金を取得 →",
  safetyWing: "SafetyWing保険",
  safetyWingDesc: "ノマド向けグローバル旅行医療保険。",
  safetyWingCta: "1日1.50ドルで加入 →",
  revolut: "Revolut Business",
  revolutDesc: "フリーランス＆スタートアップ向けグローバル口座。",
  revolutCta: "口座を開設 →"
};
const ai = {
  title: "AIモデルトークン・APIコストシミュレーター",
  subtitle: "GPT-4o、Claude 3.5 Sonnet、Gemini 1.5 Pro、Llama 3の月間API費用を見積もります。",
  input: "月間入力トークン数",
  output: "月間出力トークン数",
  monthly: "推定月間コスト",
  yearly: "推定年間コスト",
  downloadReport: "レポートをダウンロード（PDF/TXT）",
  embed: "埋め込み（Embed）",
  embedLabel: "あなたのサイトに追加（埋め込みウィジェットコード）：",
  embedNotice: "コードをコピーして、ウィジェットを表示するためにウェブサイトに貼り付けてください。",
  inputCost: "入力コスト",
  outputCost: "出力コスト",
  recommendedAi: "おすすめAI・クラウドリソース（クレジット取得）",
  aws: "AWS無料利用枠",
  awsDesc: "12か月間の無料コンピューティングとストレージ。",
  awsCta: "無料AWSアカウントを取得 →",
  openAi: "OpenAIクレジット",
  openAiDesc: "開発者向け無料スターターAPIクレジット。",
  openAiCta: "$5の無料クレジットを取得 →",
  anthropic: "Anthropic Claude API",
  anthropicDesc: "Claude 3.5 Sonnetインスタンスを直接デプロイ。",
  anthropicCta: "開発者コンソールに登録 →"
};
const footer = {
  copyright: "© 2026 GlobalPayCalc.com. 全著作権所有。",
  privacy: "プライバシーポリシー",
  terms: "利用規約",
  tagline: "安全なクライアントサイドユーティリティスイート。",
  privacyText: "GlobalPayCalc.comでは、訪問者のプライバシーを最優先にしています。すべての操作はブラウザ内でローカルに実行されます。ファイルは外部サーバーにアップロードされません。",
  termsText: "GlobalPayCalc.comで提供される計算は推定目的のみです。公式なアドバイスについては、地元の会計・税務専門家にご相談ください。",
  aboutUs: "私たちについて",
  contact: "お問い合わせ"
};
const faq = {
  title: "よくある質問",
  q1: "グローバル手取り給与＆税金エンジンの仕組みは？",
  a1: "GlobalPayCalcは、リモートワーカー、デジタルノマド、開発者向けに構築された100%無料のグローバルFintech＆ユーティリティスイートです。各国の手取り給与計算機（米国、英国、ドイツ、トルコ）、W-2 vs 1099契約形態換算、時給試算、銀行の為替手数料比較、消費税計算ツールが含まれます。",
  q2: "リモート給与と税のパリティを正確に計算できますか？",
  a2: "はい！GlobalPayCalcは、デジタルノマドとリモートワーカー向けに特別に設計された、高精度のグローバル給与計算機を提供しています。当社のユーティリティエンジンは、現地の税制区分、生活費の変動、および購買力平価（PPP）を考慮して、150か国以上の純給与を比較します。これにより、スポンサーのオファーを評価し、世界中のどこにいても税引き後に実際にいくら稼ぐかを安全に計算できます。",
  q3: "開発者向けのAIトークンコストシミュレーターは無料ですか？",
  a3: "もちろんです。開発者は、当社の高度なAI APIトークンコストシミュレーターを使用して、GPT-4o、Claude 3.5、LLaMA 3などの大規模言語モデル（LLM）を実行する財務コストを正確に予測できます。自律型エージェントの構築、大規模なデータ抽出の処理、カスタマーサポートパイプラインの実行など、シミュレーターはAPIの経費を安全に最適化するのに役立つ無料の即時見積もりを提供します。"
};
const cookie = {
  message: "当社はCookieを使用して、ブラウジング体験を向上させ、パーソナライズされた広告を提供し、トラフィックを分析します。「すべて受け入れる」をクリックすると、Cookieの使用に同意したことになります。",
  accept: "すべて受け入れる",
  decline: "拒否"
};
const legal = {
  lastUpdated: "最終更新日",
  privacy: {
    title: "プライバシーポリシー",
    desc: "プライバシーポリシーとGDPRコンプライアンス。",
    h1: "1. 収集する情報",
    p1: "最小限の情報を収集します。Google AnalyticsおよびAdSenseを使用しています。",
    h2: "2. Cookieの使用",
    p2: "コンテンツのパーソナライズとトラフィックの分析にCookieを使用します。",
    h3: "3. サードパーティサービス",
    p3: "Google AnalyticsなどのサービスがCookieを使用する場合があります。",
    h4: "4. データセキュリティ",
    p4: "すべての計算はブラウザ内でローカルに行われます。財務データを保存することはありません。"
  },
  terms: {
    title: "利用規約",
    desc: "GlobalPayCalcの利用規約。",
    h1: "1. 規約の同意",
    p1: "GlobalPayCalc.comを使用することで、これらの規約に同意したことになります。",
    h2: "2. サービスの利用",
    p2: "ツールは情報提供のみを目的としています。財務上の決定を下す前にファイナンシャルアドバイザーにご相談ください。",
    h3: "3. 知的財産",
    p3: "コンテンツはGlobalPayCalcが所有しており、著作権法によって保護されています。"
  },
  about: {
    title: "私たちについて",
    desc: "GlobalPayCalcのミッション。",
    intro: "GlobalPayCalcは、リモートワーカー向けのデジタルツールスイートです。",
    h1: "私たちのミッション",
    p1: "正確で安全なツールを提供し、データを民主化することです。",
    h2: "構築した理由",
    p2: "プライバシーを損なうことなく、複雑な計算に対する迅速な回答が必要とされています。"
  },
  contact: {
    title: "お問い合わせ",
    desc: "サポートに連絡する。",
    intro: "ご質問やご提案がありますか？",
    response: "通常24〜48営業時間以内に返信します。"
  }
};
const dynamic = {
  llmTitle: "{{useCase}} 用の {{modelA}} vs {{modelB}} API コスト シミュレーター",
  llmDesc: "大量の {{useCase}} 実装に対する {{modelA}} と {{modelB}} の月間 API コストを予測および比較します。",
  taxTitle: "{{origin}} から {{dest}} へのリモート {{status}} 税金平価計算ツール",
  taxDesc: "リモート {{status}} のために、{{origin}} から {{dest}} への純給与、生活費の違い、実効税率を計算します。{{taxContext}}",
  llmHeader: "LLM API コストとレイテンシ予測",
  taxHeader: "純給与と購買力平価の予測",
  originNet: "{{origin}} の純額",
  destNet: "{{dest}} の純額",
  taxRate: "税率 {{rate}}%",
  purchasingPower: "購買力の向上",
  costIndex: "生活費指数",
  relatedComparisons: "関連する比較",
  relatedLlmDesc: "他のAIコストシミュレーションをご覧ください。",
  relatedTaxDesc: "他の人気のあるリモートワークの目的地をご覧ください。",
  taxHigh: "このルートは比較的高い税区分を表しています。",
  taxLow: "この目的地は非常に有利な税条件を提供します。",
  taxMid: "この目的地は中程度の税構造を持っています。"
};
const ja = {
  nav,
  hero,
  bg,
  salary,
  ai,
  footer,
  faq,
  cookie,
  legal,
  dynamic
};
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
const getTranslation = (lang, path) => {
  const selectedLang = translations[lang] || translations.en;
  const keys = path.split(".");
  let current = selectedLang;
  for (const key of keys) {
    if (current && current[key] !== void 0) {
      current = current[key];
    } else {
      let fallback = translations.en;
      for (const fKey of keys) {
        if (fallback && fallback[fKey] !== void 0) {
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
const supportedLanguages = [
  { code: "en", label: "English 🇺🇸" },
  { code: "tr", label: "Türkçe 🇹🇷" },
  { code: "es", label: "Español 🇪🇸" },
  { code: "de", label: "Deutsch 🇩🇪" },
  { code: "pt", label: "Português 🇧🇷" },
  { code: "fr", label: "Français 🇫🇷" },
  { code: "id", label: "Bahasa Indonesia 🇮🇩" },
  { code: "ja", label: "日本語 🇯🇵" }
];
function Header({ currentLang, setLang, onLanguageChange }) {
  const t = (path) => getTranslation(currentLang, path);
  const navigate = useNavigate();
  const changeLang = setLang || onLanguageChange;
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return /* @__PURE__ */ jsx("header", { className: "sticky top-0 z-50 glass-card border-b border-slate-800/80 px-4 lg:px-8 py-3.5", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto flex items-center justify-between", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3 cursor-pointer", onClick: () => navigate("/"), children: [
      /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-gradient-to-tr from-rose-600 via-purple-600 to-brand-500 flex items-center justify-center shadow-lg shadow-rose-500/20", children: /* @__PURE__ */ jsx(Calculator, { className: "w-5 h-5 text-white" }) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-1", children: [
          /* @__PURE__ */ jsx("span", { className: "font-extrabold text-xl tracking-tight text-white", children: "GlobalPayCalc" }),
          /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold px-2 py-0.5 rounded-full bg-brand-500/20 text-brand-400 border border-brand-500/30", children: ".com" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-[11px] text-slate-400 font-medium hidden sm:block", children: t("nav.tagline") })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsx(
      "select",
      {
        value: currentLang,
        onChange: (e) => {
          const newLang = e.target.value;
          try {
            localStorage.setItem("gpc_lang", newLang);
          } catch (_) {
          }
          if (changeLang) changeLang(newLang);
          const pathSegments = window.location.pathname.split("/").filter(Boolean);
          const isSupported = supportedLanguages.some((l) => l.code === pathSegments[0]);
          let newPath = "";
          if (newLang === "en") {
            newPath = isSupported ? "/" + pathSegments.slice(1).join("/") : window.location.pathname;
            if (!newPath || newPath === "") newPath = "/";
          } else if (isSupported) {
            pathSegments[0] = newLang;
            newPath = "/" + pathSegments.join("/");
          } else {
            newPath = `/${newLang}${window.location.pathname}`;
          }
          navigate(newPath);
        },
        className: "bg-slate-900 border border-slate-700 text-slate-200 text-xs font-medium rounded-lg px-2 py-1.5 md:px-3 md:py-2 focus:ring-2 focus:ring-brand-500 focus:outline-none cursor-pointer",
        children: supportedLanguages.map((lang) => /* @__PURE__ */ jsx("option", { value: lang.code, children: isMobile ? lang.label.split(" ").pop() : lang.label }, lang.code))
      }
    ) })
  ] }) });
}
function LegalModal({ type, lang = "en", onClose }) {
  if (!type) return null;
  const renderContent = () => {
    if (lang === "tr") {
      if (type === "privacy") {
        return /* @__PURE__ */ jsxs("div", { className: "space-y-4 text-xs text-slate-300 leading-relaxed", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2 text-brand-400 font-bold text-lg mb-2", children: [
            /* @__PURE__ */ jsx(Lock, { className: "w-5 h-5" }),
            /* @__PURE__ */ jsx("span", { children: "Gizlilik Politikası (Privacy Policy)" })
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            /* @__PURE__ */ jsx("strong", { children: "GlobalPayCalc.com" }),
            " adresinde ziyaretçilerimizin gizliliği bizim için en büyük önceliktir. Bu Gizlilik Politikası belgesi, platformumuz tarafından toplanan ve kaydedilen bilgi türlerini ve bunları nasıl kullandığımızı açıklamaktadır."
          ] }),
          /* @__PURE__ */ jsx("h4", { className: "font-bold text-white text-sm", children: "1. %100 Yerel İstemci Taraflı İşleme (Client-Side Privacy)" }),
          /* @__PURE__ */ jsx("p", { children: "Sitemizdeki tüm dosya dönüştürmeler, arka plan silme işlemleri ve finansal hesaplamalar tamamen tarayıcınızın belleğinde (local olarak) gerçekleşir. Dönüştürdüğünüz veya yüklediğiniz hiçbir dosya veya veri sunucularımıza yüklenmez, kaydedilmez ve saklanmaz." }),
          /* @__PURE__ */ jsx("h4", { className: "font-bold text-white text-sm", children: "2. Log Dosyaları" }),
          /* @__PURE__ */ jsx("p", { children: "GlobalPayCalc.com standart bir log dosyası barındırma prosedürü izler. Bu dosyalar ziyaretçilerin web sitelerini ziyaret ettiklerinde tuttukları kayıtları içerir. Barındırma (hosting) şirketleri bunu analitik amaçlarla yapar. Log dosyaları IP adresleri, tarayıcı türü, İnternet Servis Sağlayıcısı (ISP), tarih/saat damgası ve tıklama sayısını içerebilir. Bunlar kişisel olarak tanımlanabilir herhangi bir bilgiyle bağlantılı değildir." }),
          /* @__PURE__ */ jsx("h4", { className: "font-bold text-white text-sm", children: "3. Google AdSense & Çerezler" }),
          /* @__PURE__ */ jsx("p", { children: "Sitemizde Google AdSense reklamları yayınlanmaktadır. Google, üçüncü taraf satıcı olarak, sitemizde reklam sunmak için çerezleri (DART çerezi dahil) kullanır. Kullanıcılar, Google reklam ve içerik ağı gizlilik politikasını ziyaret ederek DART çerezinin kullanımını engelleyebilirler." })
        ] });
      }
      if (type === "terms") {
        return /* @__PURE__ */ jsxs("div", { className: "space-y-4 text-xs text-slate-300 leading-relaxed", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2 text-purple-400 font-bold text-lg mb-2", children: [
            /* @__PURE__ */ jsx(FileText, { className: "w-5 h-5" }),
            /* @__PURE__ */ jsx("span", { children: "Kullanım Şartları (Terms of Service)" })
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            /* @__PURE__ */ jsx("strong", { children: "GlobalPayCalc.com" }),
            " web sitesine erişerek aşağıdaki kullanım şartlarını kabul etmiş sayılırsınız. Bu şartları kabul etmiyorsanız lütfen siteyi kullanmayınız."
          ] }),
          /* @__PURE__ */ jsx("h4", { className: "font-bold text-white text-sm", children: "1. Bilgilendirme Amaçlı Kullanım" }),
          /* @__PURE__ */ jsx("p", { children: "Bu platformda sunulan vergi, net maaş, alım gücü paritesi ve yapay zeka token maliyeti hesaplama araçları yalnızca bilgilendirme ve tahmini analiz amacıyla sunulmaktadır. Hesaplama sonuçları kesinlik teşkil etmez." }),
          /* @__PURE__ */ jsx("h4", { className: "font-bold text-white text-sm", children: "2. Sorumluluk Sınırlandırması" }),
          /* @__PURE__ */ jsx("p", { children: "Vergi yasaları, oranları ve finansal kurallar ülkeden ülkeye ve zamana göre sürekli değişiklik göstermektedir. Bu nedenle, resmi ve yasal kararlarınızı vermeden önce mutlaka yetkili mali müşavir veya vergi danışmanınızdan resmi onay almanız gerekmektedir. Hesaplama hatalarından veya yanlış tahminlerden kaynaklanan durumlarda platformumuz sorumluluk kabul etmez." }),
          /* @__PURE__ */ jsx("h4", { className: "font-bold text-white text-sm", children: "3. Hizmet Değişiklikleri" }),
          /* @__PURE__ */ jsx("p", { children: "GlobalPayCalc.com, sitedeki araçları, modülleri veya kuralları önceden haber vermeksizin değiştirme veya sonlandırma hakkını saklı tutar." })
        ] });
      }
    }
    if (type === "privacy") {
      return /* @__PURE__ */ jsxs("div", { className: "space-y-4 text-xs text-slate-300 leading-relaxed", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2 text-brand-400 font-bold text-lg mb-2", children: [
          /* @__PURE__ */ jsx(Lock, { className: "w-5 h-5" }),
          /* @__PURE__ */ jsx("span", { children: "Privacy Policy" })
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "At ",
          /* @__PURE__ */ jsx("strong", { children: "GlobalPayCalc.com" }),
          ", accessible from https://globalpaycalc.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by our platform and how we use it."
        ] }),
        /* @__PURE__ */ jsx("h4", { className: "font-bold text-white text-sm", children: "1. 100% Client-Side Local Processing" }),
        /* @__PURE__ */ jsx("p", { children: "All financial calculators, net salary tax parity tools, AI photo background removal, and WASM utilities run entirely inside your browser's local RAM. No file or user data is ever uploaded to our servers, stored, or logged." }),
        /* @__PURE__ */ jsx("h4", { className: "font-bold text-white text-sm", children: "2. Log Files" }),
        /* @__PURE__ */ jsx("p", { children: "GlobalPayCalc.com follows a standard procedure of using log files. These files log visitors when they visit websites. Barring standard server details like IP address, browser type, Internet Service Provider (ISP), date and time stamp, and referring/exit pages, no personally identifiable information is stored." }),
        /* @__PURE__ */ jsx("h4", { className: "font-bold text-white text-sm", children: "3. Google Cookies & Ads" }),
        /* @__PURE__ */ jsx("p", { children: "Google is one of a third-party vendor on our site. It uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to our platform and other sites on the internet." })
      ] });
    }
    return /* @__PURE__ */ jsxs("div", { className: "space-y-4 text-xs text-slate-300 leading-relaxed", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2 text-purple-400 font-bold text-lg mb-2", children: [
        /* @__PURE__ */ jsx(FileText, { className: "w-5 h-5" }),
        /* @__PURE__ */ jsx("span", { children: "Terms of Service" })
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        "By accessing ",
        /* @__PURE__ */ jsx("strong", { children: "GlobalPayCalc.com" }),
        ", you agree to comply with these terms of service. If you do not agree, please do not use this platform."
      ] }),
      /* @__PURE__ */ jsx("h4", { className: "font-bold text-white text-sm", children: "1. Educational & Estimation Use Only" }),
      /* @__PURE__ */ jsx("p", { children: "All calculator estimates, tax rates, AI token prices, and purchasing power parity results are provided for informational and estimation purposes only. They do not constitute formal legal or financial advice." }),
      /* @__PURE__ */ jsx("h4", { className: "font-bold text-white text-sm", children: "2. Liability Limitation" }),
      /* @__PURE__ */ jsx("p", { children: "Tax regulations, rates, and software pricing parameters are subject to frequent changes. Always consult a certified accountant or tax professional before making business decisions. GlobalPayCalc.com is not liable for errors in calculations." })
    ] });
  };
  return /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm", children: /* @__PURE__ */ jsxs("div", { className: "glass-card max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 rounded-2xl border-slate-700 relative space-y-6 animate-float", children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: onClose,
        className: "absolute top-4 right-4 p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition cursor-pointer",
        children: /* @__PURE__ */ jsx(X, { className: "w-5 h-5" })
      }
    ),
    renderContent(),
    /* @__PURE__ */ jsx("div", { className: "pt-4 border-t border-slate-800 text-right", children: /* @__PURE__ */ jsx(
      "button",
      {
        onClick: onClose,
        className: "px-5 py-2 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs transition cursor-pointer",
        children: "OK"
      }
    ) })
  ] }) });
}
function Footer({ lang = "en" }) {
  const [modalType, setModalType] = useState(null);
  const t = (path) => getTranslation(lang, path);
  return /* @__PURE__ */ jsxs("footer", { className: "border-t border-slate-800/80 bg-slate-950 mt-20 py-12 px-4 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto space-y-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row justify-between items-center pb-8 border-b border-slate-800/60 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 text-center md:text-left", children: [
          /* @__PURE__ */ jsx("div", { className: "font-extrabold text-lg text-white", children: "GlobalPayCalc.com" }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-xs max-w-md", children: t("hero.subtitle") })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-400", children: [
          /* @__PURE__ */ jsx(Link, { to: lang === "en" ? "/about" : `/${lang}/about`, title: t("footer.aboutUs") || "About Us", className: "hover:text-white transition decoration-slate-600 hover:underline", children: t("footer.aboutUs") || "About Us" }),
          /* @__PURE__ */ jsx(Link, { to: lang === "en" ? "/contact" : `/${lang}/contact`, title: t("footer.contact") || "Contact", className: "hover:text-white transition decoration-slate-600 hover:underline", children: t("footer.contact") || "Contact" }),
          /* @__PURE__ */ jsx(Link, { to: lang === "en" ? "/privacy" : `/${lang}/privacy`, title: t("footer.privacy"), className: "hover:text-white transition decoration-slate-600 hover:underline", children: t("footer.privacy") }),
          /* @__PURE__ */ jsx(Link, { to: lang === "en" ? "/terms" : `/${lang}/terms`, title: t("footer.terms"), className: "hover:text-white transition decoration-slate-600 hover:underline", children: t("footer.terms") })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4", children: [
        /* @__PURE__ */ jsx("div", { children: t("footer.copyright") }),
        /* @__PURE__ */ jsx("div", { className: "font-mono text-[10px] text-slate-600", children: t("footer.tagline") })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto mt-8 text-[10px] text-slate-800 leading-relaxed text-justify", children: "GlobalPayCalc is an all-in-one universal utility engine for digital professionals. Accurately calculate remote salaries, global tax requirements, and living cost parity across worldwide destinations. Developers can use our advanced simulator to evaluate LLM API token costs for models like GPT-4o, Claude 3.5, and LLaMA 3. Experience complete privacy with our in-browser image background remover powered by WebAssembly, ensuring your photos and media are processed securely and privately without server uploads." }),
    /* @__PURE__ */ jsx(LegalModal, { type: modalType, onClose: () => setModalType(null) })
  ] });
}
let scriptInjected = false;
const initializeAdSense = () => {
  if (scriptInjected || typeof window === "undefined") return;
  const injectScript = () => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5039398843550426";
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);
    scriptInjected = true;
    console.log("[AdSenseEngine] Google Ads script injected lazily.");
  };
  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(() => injectScript(), { timeout: 2e3 });
  } else {
    setTimeout(injectScript, 1e3);
  }
};
function useLazyAd() {
  const [shouldRender, setShouldRender] = useState(false);
  const [adBlocked, setAdBlocked] = useState(false);
  const containerRef = useRef(null);
  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldRender(true);
            initializeAdSense();
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: "200px",
        // Preload 200px before the element enters the viewport
        threshold: 0.01
      }
    );
    observer.observe(containerRef.current);
    const checkAdBlock = setTimeout(() => {
      if (window.adsbygoogle === void 0 || window.adsbygoogle && window.adsbygoogle.length === 0 && !document.querySelector("ins.adsbygoogle iframe")) {
        fetch("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", { mode: "no-cors" }).catch(() => {
          setAdBlocked(true);
          console.warn("[AdBlocker] Active AdBlocker detected. Rendering fallback CTA.");
        });
      }
    }, 3e3);
    return () => {
      observer.disconnect();
      clearTimeout(checkAdBlock);
    };
  }, []);
  return { containerRef, shouldRender, adBlocked };
}
function AdSenseSlot({ slotId = "default-slot", format = "auto", className = "" }) {
  const { containerRef, shouldRender, adBlocked } = useLazyAd();
  const [refreshKey, setRefreshKey] = useState(0);
  let heightClasses = "h-[250px] md:h-[90px]";
  let widthClasses = "w-full max-w-[728px]";
  if (format === "rectangle") {
    heightClasses = "h-[250px]";
    widthClasses = "w-full max-w-[300px]";
  } else if (format === "mobile-banner") {
    heightClasses = "h-[50px]";
    widthClasses = "w-full max-w-[320px]";
  }
  useEffect(() => {
    if (!shouldRender || adBlocked) return;
    const interval = setInterval(() => {
      setRefreshKey((prev) => prev + 1);
      console.log(`[AdSenseEngine] Refreshing ad slot: ${slotId}`);
    }, 4e4);
    return () => clearInterval(interval);
  }, [shouldRender, adBlocked, slotId]);
  useEffect(() => {
    if (shouldRender && !adBlocked && typeof window !== "undefined") {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        console.warn("[AdSenseSlot] push failed:", err);
      }
    }
  }, [shouldRender, adBlocked, refreshKey]);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref: containerRef,
      className: `my-8 mx-auto flex flex-col items-center justify-center transition-all ${format === "rectangle" ? "min-h-[280px]" : format === "mobile-banner" ? "min-h-[50px]" : "min-h-[280px] md:min-h-[120px]"} ${widthClasses} ${className}`,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full flex items-center justify-between text-[9px] text-slate-500 font-mono uppercase tracking-wider mb-1.5 px-1", children: [
          /* @__PURE__ */ jsx("span", { children: "Sponsor" }),
          adBlocked && /* @__PURE__ */ jsx("span", { className: "text-rose-400 font-semibold", children: "AdBlock Active" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: `relative w-full rounded-2xl overflow-hidden border border-slate-800/80 bg-slate-900/60 flex items-center justify-center ${heightClasses}`, children: adBlocked ? (
          // AdBlocker Active: Render a clean, non-intrusive fallback CTA
          /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center p-4 bg-gradient-to-br from-brand-950/20 to-purple-950/20 text-center space-y-1", children: [
            /* @__PURE__ */ jsx(Heart, { className: "w-4 h-4 text-rose-500 animate-pulse" }),
            /* @__PURE__ */ jsx("div", { className: "text-xs font-bold text-white", children: "Support Free Tools" }),
            /* @__PURE__ */ jsx("p", { className: "text-[10px] text-slate-400 max-w-xs", children: "Whitelisting us helps support unlimited, 100% private client-side utilities. Thank you!" })
          ] })
        ) : !shouldRender ? (
          // Lazy Loading Skeleton Loader with Elegant Tailwind Shimmer
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-slate-900/90 flex flex-col items-center justify-center space-y-2", children: /* @__PURE__ */ jsx("div", { className: "w-full h-full bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 animate-pulse" }) })
        ) : (
          // Real Google AdSense responsive tag
          /* @__PURE__ */ jsx("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ jsx(
            "ins",
            {
              className: "adsbygoogle",
              style: { display: "block", width: "100%", height: "100%" },
              "data-ad-client": "ca-pub-5039398843550426",
              "data-ad-slot": slotId,
              "data-ad-format": format,
              "data-full-width-responsive": "true"
            }
          ) }, refreshKey)
        ) })
      ]
    }
  );
}
const content = {
  en: { title: "404 - Page Not Found", desc: "The page you are looking for doesn't exist or has been moved.", btn: "Back to Home" },
  tr: { title: "404 - Sayfa Bulunamadı", desc: "Aradığınız sayfa mevcut değil veya taşınmış olabilir.", btn: "Ana Sayfaya Dön" },
  es: { title: "404 - Página no encontrada", desc: "La página que buscas no existe o ha sido movida.", btn: "Volver al inicio" },
  de: { title: "404 - Seite nicht gefunden", desc: "Die gesuchte Seite existiert nicht oder wurde verschoben.", btn: "Zurück zur Startseite" },
  pt: { title: "404 - Página não encontrada", desc: "A página que você está procurando não existe ou foi movida.", btn: "Voltar ao Início" },
  fr: { title: "404 - Page introuvable", desc: "La page que vous recherchez n'existe pas ou a été déplacée.", btn: "Retour à l'accueil" },
  id: { title: "404 - Halaman Tidak Ditemukan", desc: "Halaman yang Anda cari tidak ada atau telah dipindahkan.", btn: "Kembali ke Beranda" },
  ja: { title: "404 - ページが見つかりません", desc: "お探しのページは存在しないか、移動した可能性があります。", btn: "ホームに戻る" }
};
function NotFoundPage({ lang = "en" }) {
  const t = content[lang] || content.en;
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center min-h-[60vh] px-4 space-y-8 text-center", children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsxs("title", { children: [
        t.title,
        " | GlobalPayCalc"
      ] }),
      /* @__PURE__ */ jsx("meta", { name: "robots", content: "noindex, follow" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx("div", { className: "inline-flex items-center justify-center w-24 h-24 rounded-full bg-slate-900 border border-slate-800 shadow-2xl mb-4", children: /* @__PURE__ */ jsx(Compass, { className: "w-12 h-12 text-rose-500 animate-pulse" }) }),
      /* @__PURE__ */ jsxs("h1", { className: "text-6xl sm:text-8xl font-black text-white tracking-tight drop-shadow-2xl", children: [
        "4",
        /* @__PURE__ */ jsx("span", { className: "text-rose-500", children: "0" }),
        "4"
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "text-xl sm:text-3xl font-bold text-slate-300", children: t.title.split("- ")[1] }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-400 max-w-md mx-auto text-sm sm:text-base", children: t.desc })
    ] }),
    /* @__PURE__ */ jsxs(
      Link,
      {
        to: `/${lang === "en" ? "" : lang}`,
        className: "inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 text-white font-bold hover:from-brand-500 hover:to-brand-400 transition-all shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:-translate-y-0.5",
        children: [
          /* @__PURE__ */ jsx(Home, { className: "w-4.5 h-4.5" }),
          /* @__PURE__ */ jsx("span", { children: t.btn })
        ]
      }
    )
  ] });
}
const supabaseUrl = "https://aafbttxrwnfgnsnjqlmc.supabase.co";
const supabaseAnonKey = "sb_publishable_XHDhqH6SkyX3N81O2ywSWw_EqkCreUb";
const supabase = createClient(supabaseUrl, supabaseAnonKey);
function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session: session2 } }) => {
      setSession(session2);
      setLoading(false);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session2) => {
      setSession(session2);
      setLoading(false);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []);
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setAuthError("");
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });
      if (error) throw error;
      setSession(data.session);
    } catch (err) {
      console.error("[Login error]:", err);
      setAuthError(err.message || "Failed to authenticate.");
    } finally {
      setLoading(false);
    }
  };
  if (loading) {
    return /* @__PURE__ */ jsxs("div", { className: "min-h-[50vh] flex flex-col items-center justify-center space-y-4", children: [
      /* @__PURE__ */ jsx(Loader, { className: "w-8 h-8 text-brand-500 animate-spin" }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400 font-medium", children: "Verifying session token..." })
    ] });
  }
  if (!session) {
    return /* @__PURE__ */ jsxs("div", { className: "max-w-md w-full mx-auto glass-card p-8 rounded-3xl space-y-6 text-center shadow-2xl border-brand-500/20 my-8", children: [
      /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-brand-500/10 rounded-full flex items-center justify-center mx-auto text-brand-400", children: /* @__PURE__ */ jsx(Lock, { className: "w-8 h-8" }) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-white", children: "Yönetim Paneli Giriş" }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400 mt-1", children: "Supabase Authentication ile güvenli bağlantı." })
      ] }),
      authError && /* @__PURE__ */ jsx("div", { className: "p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-xs text-rose-400 text-left", children: authError }),
      /* @__PURE__ */ jsxs("form", { onSubmit: handleLogin, className: "space-y-4 text-left", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsx("label", { className: "text-xs font-semibold text-slate-300", children: "E-Posta" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "email",
              value: email,
              onChange: (e) => setEmail(e.target.value),
              placeholder: "admin@globalpaycalc.com",
              className: "w-full bg-slate-900 border border-slate-700 text-slate-200 text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-brand-500",
              required: true
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsx("label", { className: "text-xs font-semibold text-slate-300", children: "Şifre" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "password",
              value: password,
              onChange: (e) => setPassword(e.target.value),
              placeholder: "••••••••",
              className: "w-full bg-slate-900 border border-slate-700 text-slate-200 text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-brand-500",
              required: true
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "submit",
            className: "w-full py-3 bg-brand-600 hover:bg-brand-500 text-white text-xs font-bold rounded-xl transition cursor-pointer",
            children: "Giriş Yap"
          }
        )
      ] })
    ] });
  }
  return children;
}
const CookieConsent = ({ lang = "en" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const t = (path) => getTranslation(lang, path);
  useEffect(() => {
    const consent = localStorage.getItem("globalpaycalc_cookie_consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);
  const acceptCookies = () => {
    localStorage.setItem("globalpaycalc_cookie_consent", "true");
    setIsVisible(false);
  };
  if (!isVisible) return null;
  return /* @__PURE__ */ jsx("div", { className: "fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-800 p-4 md:p-6 z-50 animate-in slide-in-from-bottom-10 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-start md:items-center gap-3", children: [
      /* @__PURE__ */ jsx("div", { className: "p-2 bg-brand-500/20 rounded-lg shrink-0", children: /* @__PURE__ */ jsx(Cookie, { className: "w-6 h-6 text-brand-400" }) }),
      /* @__PURE__ */ jsxs("p", { className: "text-sm text-slate-300 leading-relaxed", children: [
        t("cookie.message"),
        " ",
        /* @__PURE__ */ jsx("a", { href: "/privacy", className: "text-brand-400 hover:underline", children: "Privacy Policy" }),
        "."
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 w-full md:w-auto justify-end", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setIsVisible(false),
          className: "px-4 py-2 text-sm font-semibold text-slate-400 hover:text-white transition-colors",
          children: t("cookie.decline")
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: acceptCookies,
          className: "px-6 py-2 bg-brand-600 hover:bg-brand-500 text-white text-sm font-bold rounded-xl transition-all shadow-lg shadow-brand-500/20 whitespace-nowrap",
          children: t("cookie.accept")
        }
      )
    ] })
  ] }) });
};
const detectUserLanguage = () => {
  if (typeof window === "undefined" || !navigator) return "en";
  const browserLang = (navigator.language || navigator.userLanguage || "en").toLowerCase();
  const primaryCode = browserLang.split("-")[0];
  const supportedCodes = ["en", "tr", "es", "de", "pt", "fr", "id", "ja"];
  if (supportedCodes.includes(primaryCode)) {
    console.log(`[Auto Language Detection] User browser language detected: ${browserLang} -> Auto-switched to '${primaryCode}'`);
    return primaryCode;
  }
  return "en";
};
const trackPageView = async (pagePath) => {
  try {
    const { error } = await supabase.from("page_views").insert([
      {
        path: pagePath,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        user_agent: navigator.userAgent,
        referrer: document.referrer || "direct"
      }
    ]);
    if (error) {
      console.warn('[AnalyticsTracker] Table "page_views" not found in Supabase. Run SQL setup script to enable live analytics.');
    }
  } catch (err) {
    console.error("[AnalyticsTracker] Log error:", err);
  }
};
const originCities = [
  { code: "SF", name: "San Francisco (US)", flag: "🇺🇸", effTax: 0.35 },
  { code: "NYC", name: "New York City (US)", flag: "🇺🇸", effTax: 0.38 },
  { code: "LON", name: "London (UK)", flag: "🇬🇧", effTax: 0.28 },
  { code: "BER", name: "Berlin (Germany)", flag: "🇩🇪", effTax: 0.42 },
  { code: "PAR", name: "Paris (France)", flag: "🇫🇷", effTax: 0.4 },
  { code: "IST", name: "Istanbul (Turkey)", flag: "🇹🇷", effTax: 0.22 },
  { code: "DXB", name: "Dubai (UAE)", flag: "🇦🇪", effTax: 0 },
  { code: "TOR", name: "Toronto (Canada)", flag: "🇨🇦", effTax: 0.33 },
  { code: "SYD", name: "Sydney (Australia)", flag: "🇦🇺", effTax: 0.32 },
  { code: "AUS", name: "Austin (US)", flag: "🇺🇸", effTax: 0.24 },
  { code: "ZRH", name: "Zurich (Switzerland)", flag: "🇨🇭", effTax: 0.18 },
  { code: "AMS", name: "Amsterdam (Netherlands)", flag: "🇳🇱", effTax: 0.37 },
  { code: "SEO", name: "Seoul (South Korea)", flag: "🇰🇷", effTax: 0.24 },
  { code: "WAR", name: "Warsaw (Poland)", flag: "🇵🇱", effTax: 0.19 },
  { code: "VIE", name: "Vienna (Austria)", flag: "🇦🇹", effTax: 0.38 },
  { code: "DUB", name: "Dublin (Ireland)", flag: "🇮🇪", effTax: 0.3 },
  { code: "VAN", name: "Vancouver (Canada)", flag: "🇨🇦", effTax: 0.31 },
  { code: "MIA", name: "Miami (US)", flag: "🇺🇸", effTax: 0.24 },
  { code: "STO", name: "Stockholm (Sweden)", flag: "🇸🇪", effTax: 0.45 },
  { code: "CPH", name: "Copenhagen (Denmark)", flag: "🇩🇰", effTax: 0.46 },
  { code: "OSL", name: "Oslo (Norway)", flag: "🇳🇴", effTax: 0.4 },
  { code: "BRU", name: "Brussels (Belgium)", flag: "🇧🇪", effTax: 0.44 },
  { code: "MIL", name: "Milan (Italy)", flag: "🇮🇹", effTax: 0.36 },
  { code: "HKG", name: "Hong Kong", flag: "🇭🇰", effTax: 0.15 },
  { code: "TPE", name: "Taipei (Taiwan)", flag: "🇹🇼", effTax: 0.18 }
];
const destinationCities = [
  { code: "MAD", name: "Madrid (Spain)", flag: "🇪🇸", effTax: 0.15, costIndex: 60 },
  { code: "LIS", name: "Lisbon (Portugal)", flag: "🇵🇹", effTax: 0.2, costIndex: 55 },
  { code: "BALI", name: "Bali (Indonesia)", flag: "🇮🇩", effTax: 0.1, costIndex: 32 },
  { code: "TOK", name: "Tokyo (Japan)", flag: "🇯🇵", effTax: 0.25, costIndex: 75 },
  { code: "SNG", name: "Singapore", flag: "🇸🇬", effTax: 0.12, costIndex: 90 },
  { code: "BKK", name: "Bangkok (Thailand)", flag: "🇹🇭", effTax: 0.15, costIndex: 40 },
  { code: "MED", name: "Medellin (Colombia)", flag: "🇨🇴", effTax: 0.18, costIndex: 35 },
  { code: "BUE", name: "Buenos Aires (Argentina)", flag: "🇦🇷", effTax: 0.1, costIndex: 25 },
  { code: "CPT", name: "Cape Town (South Africa)", flag: "🇿🇦", effTax: 0.2, costIndex: 45 },
  { code: "MEX", name: "Mexico City (Mexico)", flag: "🇲🇽", effTax: 0.22, costIndex: 42 },
  { code: "TAL", name: "Tallinn (Estonia)", flag: "🇪🇪", effTax: 0.2, costIndex: 65 },
  { code: "ATH", name: "Athens (Greece)", flag: "🇬🇷", effTax: 0.22, costIndex: 52 },
  { code: "BCN", name: "Barcelona (Spain)", flag: "🇪🇸", effTax: 0.15, costIndex: 62 },
  { code: "OPO", name: "Porto (Portugal)", flag: "🇵🇹", effTax: 0.2, costIndex: 50 },
  { code: "SGN", name: "Ho Chi Minh City (Vietnam)", flag: "🇻🇳", effTax: 0.1, costIndex: 30 },
  { code: "KL", name: "Kuala Lumpur (Malaysia)", flag: "🇲🇾", effTax: 0.12, costIndex: 38 },
  { code: "BUD", name: "Budapest (Hungary)", flag: "🇭🇺", effTax: 0.15, costIndex: 48 },
  { code: "PRG", name: "Prague (Czechia)", flag: "🇨🇿", effTax: 0.15, costIndex: 54 },
  { code: "KRK", name: "Krakow (Poland)", flag: "🇵🇱", effTax: 0.12, costIndex: 45 },
  { code: "SP", name: "Sao Paulo (Brazil)", flag: "🇧🇷", effTax: 0.18, costIndex: 40 },
  { code: "SCL", name: "Santiago (Chile)", flag: "🇨🇱", effTax: 0.2, costIndex: 48 },
  { code: "SJO", name: "San Jose (Costa Rica)", flag: "🇨🇷", effTax: 0.1, costIndex: 52 },
  { code: "VLC", name: "Valencia (Spain)", flag: "🇪🇸", effTax: 0.15, costIndex: 55 },
  { code: "CAG", name: "Cagliari / Sardinia (Italy)", flag: "🇮🇹", effTax: 0.1, costIndex: 48 },
  { code: "TBS", name: "Tbilisi (Georgia)", flag: "🇬🇪", effTax: 0.01, costIndex: 35 }
  // 1% Individual Entrepreneur tax rate!
];
const nomadStatuses = [
  { code: "nomad", label: "Digital Nomad", perk: "Special Tax Scheme / Beckham Law" },
  { code: "freelancer", label: "Freelancer", perk: "Independent Contractor Exemption" }
];
const generatePseoTaxMatrix = () => {
  const routes = [];
  for (const origin of originCities) {
    for (const dest of destinationCities) {
      for (const status of nomadStatuses) {
        const slug = `${origin.code.toLowerCase()}-to-${dest.code.toLowerCase()}-${status.code}-tax-parity`;
        routes.push({
          slug,
          origin,
          dest,
          status,
          title: `${origin.name} to ${dest.name} Remote ${status.label} Tax Parity Calculator`,
          description: `Calculate net remote take-home pay, cost of living difference, and effective tax rates from ${origin.name} to ${dest.name} for remote ${status.label}s.`
        });
      }
    }
  }
  return routes;
};
const generatePseoLlmMatrix = () => {
  const models = [
    "gpt4o",
    "claude35",
    "gemini15pro",
    "llama31",
    "gpt4o-mini",
    "mistral-large",
    "grok2",
    "claude3-opus",
    "gemini15-flash",
    "llama3-70b"
  ];
  const useCases = [
    "rag-pipeline",
    "customer-support",
    "data-extraction",
    "agents-orchestration",
    "code-generation",
    "content-summarization"
  ];
  const routes = [];
  for (let i = 0; i < models.length; i++) {
    for (let j = i + 1; j < models.length; j++) {
      for (const useCase of useCases) {
        const slug = `${models[i]}-vs-${models[j]}-${useCase}-cost`;
        routes.push({
          slug,
          modelA: models[i],
          modelB: models[j],
          useCase,
          title: `${models[i].toUpperCase()} vs ${models[j].toUpperCase()} API Cost Simulator for ${useCase.replace("-", " ")}`,
          description: `Project and compare monthly API costs between ${models[i]} and ${models[j]} for high volume ${useCase} implementations.`
        });
      }
    }
  }
  return routes;
};
const NomadTaxCalculator = React.lazy(() => import("./assets/NomadTaxCalculator--WWNnIHA.js"));
const DevTokenCalculator = React.lazy(() => import("./assets/DevTokenCalculator-DYGSuA7B.js"));
const QuickWasmCompressor = React.lazy(() => import("./assets/QuickWasmCompressor-kw14UP8c.js"));
const GlobalTakeHomeCalculator = React.lazy(() => import("./assets/GlobalTakeHomeCalculator-CsQKO7FI.js"));
const ContractorVsPermCalculator = React.lazy(() => import("./assets/ContractorVsPermCalculator-DJ2l48Pq.js"));
const HiddenFxFeeCalculator = React.lazy(() => import("./assets/HiddenFxFeeCalculator-in61zMGf.js"));
const GlobalInvoiceVatCalculator = React.lazy(() => import("./assets/GlobalInvoiceVatCalculator-DJJUbXQM.js"));
const FreelancerRateCalculator = React.lazy(() => import("./assets/FreelancerRateCalculator-28mhuva-.js"));
const InflationCalculator = React.lazy(() => import("./assets/InflationCalculator-B4q1fAS5.js"));
const TimezoneOverlapCalculator = React.lazy(() => import("./assets/TimezoneOverlapCalculator-B6ObIMml.js"));
const BeckhamLawCalculator = React.lazy(() => import("./assets/BeckhamLawCalculator-CDCvA9dm.js"));
const CryptoTaxCalculator = React.lazy(() => import("./assets/CryptoTaxCalculator-2Zk5K693.js"));
const EorCostCalculator = React.lazy(() => import("./assets/EorCostCalculator-BzE84nHI.js"));
const NomadVisaCalculator = React.lazy(() => import("./assets/NomadVisaCalculator-BgEZp-Yb.js"));
const ProgrammaticSeoGrid = React.lazy(() => import("./assets/ProgrammaticSeoGrid-BOXkoXTW.js"));
const AdminDashboard = React.lazy(() => import("./assets/AdminDashboard-BY8RINX7.js"));
const DynamicToolPage = React.lazy(() => import("./assets/DynamicToolPage-DNrRes--.js"));
const ToolSeoArticle = React.lazy(() => import("./assets/ToolSeoArticle-TUONr4YT.js"));
const PrivacyPolicy = React.lazy(() => import("./assets/Legal-BadAf7-J.js").then((m) => ({ default: m.PrivacyPolicy })));
const TermsOfService = React.lazy(() => import("./assets/Legal-BadAf7-J.js").then((m) => ({ default: m.TermsOfService })));
const AboutUs = React.lazy(() => import("./assets/Legal-BadAf7-J.js").then((m) => ({ default: m.AboutUs })));
const Contact = React.lazy(() => import("./assets/Legal-BadAf7-J.js").then((m) => ({ default: m.Contact })));
function ContentWrapper({ lang, t }) {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const hasLangPrefix = supportedLanguages.some((l) => l.code === pathSegments[0]);
  const activeTab = hasLangPrefix ? pathSegments[1] || "take-home" : pathSegments[0] || "take-home";
  const basePath = hasLangPrefix ? `/${pathSegments[0]}` : "";
  const [activeCat, setActiveCat] = useState("tax");
  const tools = [
    { path: "/take-home", title: t("nav.takeHome"), desc: lang === "tr" ? "Gelir vergisi ve sosyal kesinti" : "Net salary after tax & FICA", icon: DollarSign, color: "text-emerald-400", bg: "bg-emerald-500/10", cat: "tax" },
    { path: "/contractor", title: t("nav.contractor"), desc: lang === "tr" ? "B2B ve bordrolu karşılaştırma" : "W2 vs 1099 contractor equivalency", icon: Briefcase, color: "text-cyan-400", bg: "bg-cyan-500/10", cat: "tax" },
    { path: "/hourly-rate", title: t("nav.hourlyRate"), desc: lang === "tr" ? "Freelancer saatlik ücret hesabı" : "Target income to hourly billing rate", icon: UserCheck, color: "text-emerald-400", bg: "bg-emerald-500/10", cat: "tax" },
    { path: "/beckham-law", title: t("nav.beckhamLaw"), desc: lang === "tr" ? "Expat vergi muafiyeti" : "Spain Beckham law & expat incentives", icon: Award, color: "text-rose-400", bg: "bg-rose-500/10", cat: "tax" },
    { path: "/crypto-tax", title: t("nav.cryptoTax"), desc: lang === "tr" ? "Kripto maaş vergi hesaplama" : "Taxes on USDT/USDC remote salary", icon: Cpu, color: "text-cyan-400", bg: "bg-cyan-500/10", cat: "tax" },
    { path: "/nomad-visa", title: t("nav.nomadVisa"), desc: lang === "tr" ? "Dijital göçebe vize uygunluğu" : "Nomad visa minimum income check", icon: Globe, color: "text-emerald-400", bg: "bg-emerald-500/10", cat: "tax" },
    { path: "/eor-cost", title: t("nav.eorCost"), desc: lang === "tr" ? "EOR ve şirket kurma maliyeti" : "Employer of Record vs local entity cost", icon: Building2, color: "text-purple-400", bg: "bg-purple-500/10", cat: "tax" },
    { path: "/salary", title: t("nav.salary"), desc: lang === "tr" ? "Ülkeler arası satın alma gücü" : "Global cost of living & PPP parity", icon: Globe, color: "text-amber-400", bg: "bg-amber-500/10", cat: "tax" },
    { path: "/inflation", title: t("nav.inflation"), desc: lang === "tr" ? "Maaşın enflasyon karşısındaki kaybı" : "Real purchasing power loss calculator", icon: TrendingDown, color: "text-amber-400", bg: "bg-amber-500/10", cat: "finance" },
    { path: "/fx-fees", title: t("nav.fxFees"), desc: lang === "tr" ? "Gizli döviz transfer marjları" : "Hidden bank FX markup wire fees", icon: ArrowRightLeft, color: "text-rose-400", bg: "bg-rose-500/10", cat: "finance" },
    { path: "/vat", title: t("nav.vat"), desc: lang === "tr" ? "B2B fatura vergi ve KDV matrahı" : "Invoice VAT & sales tax calculator", icon: FileText, color: "text-purple-400", bg: "bg-purple-500/10", cat: "finance" },
    { path: "/timezone", title: t("nav.timezone"), desc: lang === "tr" ? "Ortak çalışma saati çakışması" : "Remote meeting window grid builder", icon: Clock, color: "text-indigo-400", bg: "bg-indigo-500/10", cat: "finance" },
    { path: "/wasm", title: t("nav.bgRemover"), desc: lang === "tr" ? "Tarayıcıda yerel görsel işleme" : "100% private WASM image compressor", icon: Image, color: "text-cyan-400", bg: "bg-cyan-500/10", cat: "ai_wasm" },
    { path: "/ai", title: t("nav.aiCost"), desc: lang === "tr" ? "LLM API token maliyet hesabı" : "Compare GPT-4o, Claude 3.5 API token cost", icon: Sparkles, color: "text-amber-400", bg: "bg-amber-500/10", cat: "ai_wasm" }
  ];
  useEffect(() => {
    const currentTabSlug = activeTab === "video" ? "take-home" : activeTab;
    const currentTool = tools.find((t2) => t2.path.replace("/", "") === currentTabSlug);
    if (currentTool) {
      setActiveCat(currentTool.cat);
    }
  }, [activeTab]);
  let pageTitle = "GlobalPayCalc: Global Remote Net Salary, Expat Tax, FX & AI Cost Suite";
  let pageDesc = t("hero.subtitle");
  if (activeTab === "take-home") {
    pageTitle = "Global Net Salary & Tax Calculator | GlobalPayCalc";
    pageDesc = "Calculate net take-home salary after federal and state income tax, social security, and FICA deductions across 40+ countries. Get instant, accurate projections.";
  } else if (activeTab === "contractor") {
    pageTitle = "W-2 vs 1099 Contractor Equivalence Calculator";
    pageDesc = "Compare W-2 salaried offer vs 1099 contractor billing rates. Factor in PTO, health insurance, and self-employment taxes accurately in our comparison engine.";
  } else if (activeTab === "hourly-rate") {
    pageTitle = "Freelancer Hourly Rate Calculator | GlobalPayCalc";
    pageDesc = "Calculate minimum required hourly and daily billing rates based on your annual target income, tax brackets, business expenses, and billable work hours.";
  } else if (activeTab === "beckham-law") {
    pageTitle = "Beckham Law & Expat Tax Savings Calculator";
    pageDesc = "Calculate expat tax exemptions under Spain's Beckham Law (24% flat), Portugal NHR, Italy 70% Impatriati, and Dubai 0% tax scheme. Save on international taxes.";
  } else if (activeTab === "crypto-tax") {
    pageTitle = "Crypto & USDT Salary Tax Calculator | GlobalPayCalc";
    pageDesc = "Calculate tax liabilities for remote salaries paid in USDT, USDC, or ETH across US, UK, Germany, and Turkey. Differentiate income and capital gains tax.";
  } else if (activeTab === "eor-cost") {
    pageTitle = "EOR vs Local Entity Setup Cost Calculator";
    pageDesc = "Calculate the financial breakeven point between paying Deel/Remote $599/mo per seat versus incorporating and operating a local subsidiary entity.";
  } else if (activeTab === "nomad-visa") {
    pageTitle = "Digital Nomad Visa Income Eligibility Checker";
    pageDesc = "Verify monthly minimum income requirements for Digital Nomad Visas in Spain, Portugal, Dubai, Japan, Italy, and Greece. Check your eligible countries.";
  } else if (activeTab === "inflation") {
    pageTitle = "Inflation & Salary Purchasing Power Calculator";
    pageDesc = "Calculate real salary erosion and the exact annual pay raise percentage required to maintain your living standard against global country inflation rates.";
  } else if (activeTab === "fx-fees") {
    pageTitle = "Real FX Rate & Hidden Bank Fee Estimator";
    pageDesc = "Compare real mid-market exchange rates against hidden bank FX markups and wire transfer fees for Wise, SWIFT, PayPal, and Stripe global transactions.";
  } else if (activeTab === "vat") {
    pageTitle = "Global Invoice & VAT Calculator | GlobalPayCalc";
    pageDesc = "Calculate net, VAT/GST amounts, and gross invoice totals. Includes B2B cross-border Reverse Charge 0% export exemptions and tax declaration options.";
  } else if (activeTab === "timezone") {
    pageTitle = "Timezone Overlap Calculator for Remote Teams";
    pageDesc = "Visualize working hour overlaps and shared meeting windows for global remote teams across US, Europe, Asia, and Turkey with our interactive time grid.";
  } else if (activeTab === "salary") {
    pageTitle = "Global Remote Salary Calculator | GlobalPayCalc";
    pageDesc = "Calculate net remote salaries across 150+ countries. Compare purchasing power, cost of living index, and nomad tax laws instantly in local currencies.";
  } else if (activeTab === "wasm") {
    pageTitle = "Free AI Background Remover & Compressor";
    pageDesc = "Remove photo backgrounds instantly with 100% privacy using client-side WebAssembly AI. Compress and convert images to WebP/PNG without server uploads.";
  } else if (activeTab === "ai") {
    pageTitle = "LLM API Token Cost Simulator | GlobalPayCalc";
    pageDesc = "Compare monthly token costs for OpenAI, Anthropic, and open-source models (GPT-4o, Claude 3.5, LLaMA 3) across RAG pipelines and agent implementations.";
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: pageTitle }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: pageDesc }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: `https://globalpaycalc.com${location.pathname.replace(/\/+$/, "") || "/"}` }),
      /* @__PURE__ */ jsx("link", { rel: "alternate", hreflang: "en", href: `https://globalpaycalc.com/${activeTab === "take-home" ? "" : activeTab}` }),
      ["tr", "es", "de", "pt", "fr", "id", "ja"].map((lc) => /* @__PURE__ */ jsx("link", { rel: "alternate", hreflang: lc, href: `https://globalpaycalc.com/${lc}/${activeTab === "take-home" ? "" : activeTab}` }, lc)),
      /* @__PURE__ */ jsx("link", { rel: "alternate", hreflang: "x-default", href: `https://globalpaycalc.com/${activeTab === "take-home" ? "" : activeTab}` }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: `https://globalpaycalc.com${location.pathname}` }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: pageTitle }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: pageDesc }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: "https://globalpaycalc.com/og-image.png" }),
      /* @__PURE__ */ jsx("meta", { property: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx("meta", { property: "twitter:url", content: `https://globalpaycalc.com${location.pathname}` }),
      /* @__PURE__ */ jsx("meta", { property: "twitter:title", content: pageTitle }),
      /* @__PURE__ */ jsx("meta", { property: "twitter:description", content: pageDesc })
    ] }),
    activeTab !== "admin" && !location.pathname.includes("/calculator/") && !location.pathname.includes("/tools/") && /* @__PURE__ */ jsxs("div", { className: "text-center max-w-4xl mx-auto space-y-6 pt-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-brand-500/10 via-purple-500/10 to-pink-500/10 border border-brand-500/20 text-xs font-semibold text-brand-300 animate-float", children: [
        /* @__PURE__ */ jsx(Sparkles, { className: "w-3.5 h-3.5 text-amber-400" }),
        /* @__PURE__ */ jsx("span", { children: t("hero.badge") })
      ] }),
      /* @__PURE__ */ jsx("h1", { className: "text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-tight drop-shadow-2xl", children: /* @__PURE__ */ jsx("span", { className: "gradient-text", children: t("hero.title") }) }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed font-medium", children: t("hero.subtitle") }),
      /* @__PURE__ */ jsx("div", { className: "hidden md:flex flex-wrap justify-center gap-2 pt-2", children: tools.map((tool) => {
        const Icon = tool.icon;
        const isActive = activeTab === tool.path.replace("/", "") || tool.path === "/take-home" && activeTab === "video";
        const colorScheme = {
          "text-emerald-400": "bg-emerald-600 text-white border-emerald-500 shadow-lg shadow-emerald-500/20",
          "text-cyan-400": "bg-cyan-600 text-white border-cyan-500 shadow-lg shadow-cyan-500/20",
          "text-rose-400": "bg-rose-600 text-white border-rose-500 shadow-lg shadow-rose-500/20",
          "text-purple-400": "bg-purple-600 text-white border-purple-500 shadow-lg shadow-purple-500/20",
          "text-amber-400": "bg-amber-600 text-white border-amber-500 shadow-lg shadow-amber-500/20",
          "text-indigo-400": "bg-indigo-600 text-white border-indigo-500 shadow-lg shadow-indigo-500/20"
        };
        const activeClass = colorScheme[tool.color] || "bg-slate-800 text-white border-slate-700";
        return /* @__PURE__ */ jsxs(
          Link,
          {
            to: `${basePath}${tool.path}`,
            title: tool.desc,
            className: `px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 border cursor-pointer ${isActive ? activeClass : "bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800"}`,
            children: [
              /* @__PURE__ */ jsx(Icon, { className: `w-3.5 h-3.5 ${tool.color}` }),
              /* @__PURE__ */ jsx("span", { children: tool.title })
            ]
          },
          tool.path
        );
      }) }),
      /* @__PURE__ */ jsxs("div", { className: "md:hidden flex space-x-1 bg-slate-900/60 p-1.5 rounded-2xl border border-slate-850/80 max-w-md mx-auto", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => setActiveCat("tax"),
            className: `flex-1 flex items-center justify-center space-x-1 py-3 px-1 rounded-xl text-[10px] font-black transition-all ${activeCat === "tax" ? "bg-gradient-to-r from-rose-600 via-purple-600 to-brand-500 text-white shadow-lg shadow-purple-600/20" : "text-slate-400 hover:text-slate-200"}`,
            children: [
              /* @__PURE__ */ jsx(DollarSign, { className: "w-3.5 h-3.5 text-emerald-400 animate-pulse" }),
              /* @__PURE__ */ jsx("span", { children: lang === "tr" ? "Maaş & Vergi" : "Salary & Tax" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => setActiveCat("finance"),
            className: `flex-1 flex items-center justify-center space-x-1 py-3 px-1 rounded-xl text-[10px] font-black transition-all ${activeCat === "finance" ? "bg-gradient-to-r from-rose-600 via-purple-600 to-brand-500 text-white shadow-lg shadow-purple-600/20" : "text-slate-400 hover:text-slate-200"}`,
            children: [
              /* @__PURE__ */ jsx(FileText, { className: "w-3.5 h-3.5 text-purple-400" }),
              /* @__PURE__ */ jsx("span", { children: lang === "tr" ? "B2B & Finans" : "Finance" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => setActiveCat("ai_wasm"),
            className: `flex-1 flex items-center justify-center space-x-1 py-3 px-1 rounded-xl text-[10px] font-black transition-all ${activeCat === "ai_wasm" ? "bg-gradient-to-r from-rose-600 via-purple-600 to-brand-500 text-white shadow-lg shadow-purple-600/20" : "text-slate-400 hover:text-slate-200"}`,
            children: [
              /* @__PURE__ */ jsx(Sparkles, { className: "w-3.5 h-3.5 text-amber-400" }),
              /* @__PURE__ */ jsx("span", { children: lang === "tr" ? "Yapay Zeka" : "AI & WASM" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "md:hidden grid grid-cols-2 gap-3 pt-2", children: tools.filter((t2) => t2.cat === activeCat).map((tool) => {
        const Icon = tool.icon;
        const isActive = activeTab === tool.path.replace("/", "") || tool.path === "/take-home" && activeTab === "video";
        const borderColors = {
          "text-emerald-400": "border-emerald-500/30",
          "text-cyan-400": "border-cyan-500/30",
          "text-rose-400": "border-rose-500/30",
          "text-purple-400": "border-purple-500/30",
          "text-amber-400": "border-amber-500/30",
          "text-indigo-400": "border-indigo-500/30"
        };
        const borderClass = borderColors[tool.color] || "border-slate-800";
        return /* @__PURE__ */ jsxs(
          Link,
          {
            to: `${basePath}${tool.path}`,
            title: tool.desc,
            className: `flex flex-col text-left p-4 rounded-2xl border transition-all duration-150 active:scale-[0.96] cursor-pointer ${isActive ? "bg-slate-900 border-brand-500 shadow-lg shadow-brand-500/10" : "bg-slate-900/50 hover:bg-slate-900 border-slate-800"}`,
            children: [
              /* @__PURE__ */ jsx("div", { className: `w-9 h-9 rounded-xl ${tool.bg} flex items-center justify-center mb-3 border ${borderClass}`, children: /* @__PURE__ */ jsx(Icon, { className: `w-4 h-4 ${tool.color}` }) }),
              /* @__PURE__ */ jsx("span", { className: "text-xs font-black text-white leading-tight", children: tool.title }),
              /* @__PURE__ */ jsx("span", { className: "text-[10px] text-slate-400 mt-1 font-medium leading-tight", children: tool.desc })
            ]
          },
          tool.path
        );
      }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "pt-4", children: /* @__PURE__ */ jsx(React.Suspense, { fallback: /* @__PURE__ */ jsxs("div", { className: "min-h-[450px] flex flex-col items-center justify-center bg-slate-900/40 rounded-3xl border border-slate-800/80 p-8 text-center animate-pulse", children: [
      /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full border-2 border-brand-500 border-t-transparent animate-spin mb-4" }),
      /* @__PURE__ */ jsx("div", { className: "text-slate-400 text-sm font-medium", children: "Yükleniyor... / Loading..." })
    ] }), children: /* @__PURE__ */ jsxs(Routes, { children: [
      /* @__PURE__ */ jsx(Route, { path: "/", element: /* @__PURE__ */ jsx(GlobalTakeHomeCalculator, { lang }) }),
      /* @__PURE__ */ jsx(Route, { path: "/take-home", element: /* @__PURE__ */ jsx(GlobalTakeHomeCalculator, { lang }) }),
      /* @__PURE__ */ jsx(Route, { path: "/contractor", element: /* @__PURE__ */ jsx(ContractorVsPermCalculator, { lang }) }),
      /* @__PURE__ */ jsx(Route, { path: "/hourly-rate", element: /* @__PURE__ */ jsx(FreelancerRateCalculator, { lang }) }),
      /* @__PURE__ */ jsx(Route, { path: "/beckham-law", element: /* @__PURE__ */ jsx(BeckhamLawCalculator, { lang }) }),
      /* @__PURE__ */ jsx(Route, { path: "/crypto-tax", element: /* @__PURE__ */ jsx(CryptoTaxCalculator, { lang }) }),
      /* @__PURE__ */ jsx(Route, { path: "/eor-cost", element: /* @__PURE__ */ jsx(EorCostCalculator, { lang }) }),
      /* @__PURE__ */ jsx(Route, { path: "/nomad-visa", element: /* @__PURE__ */ jsx(NomadVisaCalculator, { lang }) }),
      /* @__PURE__ */ jsx(Route, { path: "/inflation", element: /* @__PURE__ */ jsx(InflationCalculator, { lang }) }),
      /* @__PURE__ */ jsx(Route, { path: "/fx-fees", element: /* @__PURE__ */ jsx(HiddenFxFeeCalculator, { lang }) }),
      /* @__PURE__ */ jsx(Route, { path: "/vat", element: /* @__PURE__ */ jsx(GlobalInvoiceVatCalculator, { lang }) }),
      /* @__PURE__ */ jsx(Route, { path: "/timezone", element: /* @__PURE__ */ jsx(TimezoneOverlapCalculator, { lang }) }),
      /* @__PURE__ */ jsx(Route, { path: "/salary", element: /* @__PURE__ */ jsx(NomadTaxCalculator, { lang }) }),
      /* @__PURE__ */ jsx(Route, { path: "/ai", element: /* @__PURE__ */ jsx(DevTokenCalculator, { lang }) }),
      /* @__PURE__ */ jsx(Route, { path: "/wasm", element: /* @__PURE__ */ jsx(QuickWasmCompressor, { lang }) }),
      /* @__PURE__ */ jsx(Route, { path: "/video", element: /* @__PURE__ */ jsx(GlobalTakeHomeCalculator, { lang }) }),
      /* @__PURE__ */ jsx(Route, { path: "/admin", element: /* @__PURE__ */ jsx(ProtectedRoute, { children: /* @__PURE__ */ jsx(AdminDashboard, {}) }) }),
      /* @__PURE__ */ jsx(Route, { path: "/privacy", element: /* @__PURE__ */ jsx(PrivacyPolicy, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/terms", element: /* @__PURE__ */ jsx(TermsOfService, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/about", element: /* @__PURE__ */ jsx(AboutUs, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/contact", element: /* @__PURE__ */ jsx(Contact, {}) }),
      supportedLanguages.map((l) => /* @__PURE__ */ jsxs(React.Fragment, { children: [
        /* @__PURE__ */ jsx(Route, { path: `/${l.code}`, element: /* @__PURE__ */ jsx(GlobalTakeHomeCalculator, { lang: l.code }) }),
        /* @__PURE__ */ jsx(Route, { path: `/${l.code}/take-home`, element: /* @__PURE__ */ jsx(GlobalTakeHomeCalculator, { lang: l.code }) }),
        /* @__PURE__ */ jsx(Route, { path: `/${l.code}/contractor`, element: /* @__PURE__ */ jsx(ContractorVsPermCalculator, { lang: l.code }) }),
        /* @__PURE__ */ jsx(Route, { path: `/${l.code}/hourly-rate`, element: /* @__PURE__ */ jsx(FreelancerRateCalculator, { lang: l.code }) }),
        /* @__PURE__ */ jsx(Route, { path: `/${l.code}/beckham-law`, element: /* @__PURE__ */ jsx(BeckhamLawCalculator, { lang: l.code }) }),
        /* @__PURE__ */ jsx(Route, { path: `/${l.code}/crypto-tax`, element: /* @__PURE__ */ jsx(CryptoTaxCalculator, { lang: l.code }) }),
        /* @__PURE__ */ jsx(Route, { path: `/${l.code}/eor-cost`, element: /* @__PURE__ */ jsx(EorCostCalculator, { lang: l.code }) }),
        /* @__PURE__ */ jsx(Route, { path: `/${l.code}/nomad-visa`, element: /* @__PURE__ */ jsx(NomadVisaCalculator, { lang: l.code }) }),
        /* @__PURE__ */ jsx(Route, { path: `/${l.code}/inflation`, element: /* @__PURE__ */ jsx(InflationCalculator, { lang: l.code }) }),
        /* @__PURE__ */ jsx(Route, { path: `/${l.code}/fx-fees`, element: /* @__PURE__ */ jsx(HiddenFxFeeCalculator, { lang: l.code }) }),
        /* @__PURE__ */ jsx(Route, { path: `/${l.code}/vat`, element: /* @__PURE__ */ jsx(GlobalInvoiceVatCalculator, { lang: l.code }) }),
        /* @__PURE__ */ jsx(Route, { path: `/${l.code}/timezone`, element: /* @__PURE__ */ jsx(TimezoneOverlapCalculator, { lang: l.code }) }),
        /* @__PURE__ */ jsx(Route, { path: `/${l.code}/salary`, element: /* @__PURE__ */ jsx(NomadTaxCalculator, { lang: l.code }) }),
        /* @__PURE__ */ jsx(Route, { path: `/${l.code}/ai`, element: /* @__PURE__ */ jsx(DevTokenCalculator, { lang: l.code }) }),
        /* @__PURE__ */ jsx(Route, { path: `/${l.code}/wasm`, element: /* @__PURE__ */ jsx(QuickWasmCompressor, { lang: l.code }) }),
        /* @__PURE__ */ jsx(Route, { path: `/${l.code}/video`, element: /* @__PURE__ */ jsx(GlobalTakeHomeCalculator, { lang: l.code }) }),
        /* @__PURE__ */ jsx(Route, { path: `/${l.code}/privacy`, element: /* @__PURE__ */ jsx(PrivacyPolicy, { lang: l.code }) }),
        /* @__PURE__ */ jsx(Route, { path: `/${l.code}/terms`, element: /* @__PURE__ */ jsx(TermsOfService, { lang: l.code }) }),
        /* @__PURE__ */ jsx(Route, { path: `/${l.code}/about`, element: /* @__PURE__ */ jsx(AboutUs, { lang: l.code }) }),
        /* @__PURE__ */ jsx(Route, { path: `/${l.code}/contact`, element: /* @__PURE__ */ jsx(Contact, { lang: l.code }) })
      ] }, l.code)),
      /* @__PURE__ */ jsx(Route, { path: "/calculator/:slug", element: /* @__PURE__ */ jsx(DynamicToolPage, { type: "tax", lang }) }),
      /* @__PURE__ */ jsx(Route, { path: "/tools/:slug", element: /* @__PURE__ */ jsx(DynamicToolPage, { type: "llm", lang }) }),
      supportedLanguages.map((l) => /* @__PURE__ */ jsxs(React.Fragment, { children: [
        /* @__PURE__ */ jsx(Route, { path: `/${l.code}/calculator/:slug`, element: /* @__PURE__ */ jsx(DynamicToolPage, { type: "tax", lang: l.code }) }),
        /* @__PURE__ */ jsx(Route, { path: `/${l.code}/tools/:slug`, element: /* @__PURE__ */ jsx(DynamicToolPage, { type: "llm", lang: l.code }) })
      ] }, l.code)),
      /* @__PURE__ */ jsx(Route, { path: "*", element: /* @__PURE__ */ jsx(NotFoundPage, {}) })
    ] }) }) }),
    activeTab !== "admin" && !location.pathname.includes("/calculator/") && !location.pathname.includes("/tools/") && /* @__PURE__ */ jsx(React.Suspense, { fallback: null, children: /* @__PURE__ */ jsx(ToolSeoArticle, { activeTool: activeTab, lang }) }),
    activeTab !== "admin" && /* @__PURE__ */ jsx(React.Suspense, { fallback: null, children: /* @__PURE__ */ jsxs("div", { className: "space-y-8 mt-12", children: [
      /* @__PURE__ */ jsx(AdSenseSlot, { slotId: "content-bottom" }),
      /* @__PURE__ */ jsx(ProgrammaticSeoGrid, { lang })
    ] }) })
  ] });
}
function App() {
  const [lang, setLang] = useState("en");
  const location = useLocation();
  useEffect(() => {
    const pathSegments = location.pathname.split("/").filter(Boolean);
    const urlLang = supportedLanguages.find((l) => l.code === pathSegments[0]);
    if (urlLang) {
      setLang(urlLang.code);
      try {
        localStorage.setItem("gpc_lang", urlLang.code);
      } catch (_) {
      }
    } else {
      let preferred = null;
      try {
        preferred = localStorage.getItem("gpc_lang");
      } catch (_) {
      }
      const detected = preferred || detectUserLanguage();
      setLang(detected);
    }
    trackPageView(location.pathname);
  }, [location]);
  const t = (path) => getTranslation(lang, path);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-brand-500 selection:text-white", children: [
    /* @__PURE__ */ jsx(Header, { currentLang: lang, onLanguageChange: setLang }),
    /* @__PURE__ */ jsx("main", { className: "flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8", children: /* @__PURE__ */ jsx(ContentWrapper, { lang, t }) }),
    /* @__PURE__ */ jsx(Footer, { lang }),
    /* @__PURE__ */ jsx(CookieConsent, { lang })
  ] });
}
function render(url) {
  const helmetContext = {};
  const html = ReactDOMServer.renderToString(
    /* @__PURE__ */ jsx(React.StrictMode, { children: /* @__PURE__ */ jsx(HelmetProvider, { context: helmetContext, children: /* @__PURE__ */ jsx(StaticRouter, { location: url, children: /* @__PURE__ */ jsx(App, {}) }) }) })
  );
  return { html, helmet: helmetContext.helmet };
}
function getRoutes() {
  const routes = ["", "/take-home", "/contractor", "/hourly-rate", "/beckham-law", "/crypto-tax", "/eor-cost", "/nomad-visa", "/salary", "/inflation", "/fx-fees", "/vat", "/timezone", "/wasm", "/ai", "/privacy", "/terms", "/about", "/contact"];
  for (const lang of supportedLanguages) {
    routes.push(`/${lang.code}`);
    routes.push(`/${lang.code}/take-home`);
    routes.push(`/${lang.code}/contractor`);
    routes.push(`/${lang.code}/hourly-rate`);
    routes.push(`/${lang.code}/beckham-law`);
    routes.push(`/${lang.code}/crypto-tax`);
    routes.push(`/${lang.code}/eor-cost`);
    routes.push(`/${lang.code}/nomad-visa`);
    routes.push(`/${lang.code}/salary`);
    routes.push(`/${lang.code}/inflation`);
    routes.push(`/${lang.code}/fx-fees`);
    routes.push(`/${lang.code}/vat`);
    routes.push(`/${lang.code}/timezone`);
    routes.push(`/${lang.code}/wasm`);
    routes.push(`/${lang.code}/ai`);
    routes.push(`/${lang.code}/privacy`);
    routes.push(`/${lang.code}/terms`);
    routes.push(`/${lang.code}/about`);
    routes.push(`/${lang.code}/contact`);
  }
  for (const route of generatePseoTaxMatrix()) {
    routes.push(`/calculator/${route.slug}`);
    for (const lang of supportedLanguages) {
      routes.push(`/${lang.code}/calculator/${route.slug}`);
    }
  }
  for (const route of generatePseoLlmMatrix()) {
    routes.push(`/tools/${route.slug}`);
    for (const lang of supportedLanguages) {
      routes.push(`/${lang.code}/tools/${route.slug}`);
    }
  }
  return routes;
}
export {
  generatePseoLlmMatrix as a,
  generatePseoTaxMatrix as b,
  getTranslation as g,
  getRoutes,
  render,
  supabase as s
};
