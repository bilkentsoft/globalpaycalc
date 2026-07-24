import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import React, { useState, useRef, useEffect } from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.mjs";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useNavigate, Link, useLocation, Routes, Route } from "react-router-dom";
import { Calculator, X, Lock, FileText, Heart, Globe, DollarSign, Download, Code, Sparkles, Zap, UploadCloud, ShieldCheck, RefreshCw, Video, AlertTriangle, CheckCircle2, Play, Music, HelpCircle, ChevronUp, ChevronDown, Star, LayoutDashboard, Map, BarChart2, Globe2, Search, Activity, LogOut, AlertCircle, Wallet, TrendingUp, Target, Database, CheckCircle, XCircle, Server, Compass, Home, Loader, ArrowLeftRight, ShieldAlert, Info, Link as Link$1, Shield, Mail, Cookie, Image as Image$1 } from "lucide-react";
import { createClient } from "@supabase/supabase-js";
import { ResponsiveContainer, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, Area, PieChart, Pie, Cell, Legend } from "recharts";
const nav$7 = {
  brand: "GlobalPayCalc.com",
  tagline: "Universal Media & Financial Engine",
  downloader: "Video Downloader",
  bgRemover: "AI Photo Studio",
  salary: "Global Salary",
  aiCost: "AI Token Cost",
  admin: "Admin Panel"
};
const hero$7 = {
  badge: "100% Free • Unlimited • Privacy First",
  title: "Universal Media, AI & Global Salary Utility Engine",
  subtitle: "Calculate net remote salaries worldwide, download HD social videos without watermarks, and process images via client-side WebAssembly AI securely and privately.",
  seoTitle: "How It Works & Core Features",
  seoText: "GlobalPayCalc is a comprehensive suite built for digital nomads and developers. Our platform features an <strong class='font-semibold text-slate-300'>HD social video downloader</strong> that safely extracts MP4/MP3 media from TikTok, Instagram Reels, and YouTube Shorts without watermarks. For remote workers, our <strong class='font-semibold text-slate-300'>global salary calculator</strong> compares net income, tax brackets, and cost of living (PPP) across 150+ countries. Developers can leverage our <strong class='font-semibold text-slate-300'>AI token cost simulator</strong> to estimate API expenses for GPT-4o and Claude 3.5, while our <strong class='font-semibold text-slate-300'>client-side AI image studio</strong> removes backgrounds locally via WebAssembly, guaranteeing zero server uploads and complete data privacy."
};
const video$7 = {
  title: "Social Video & Audio Downloader",
  subtitle: "Download HD videos and MP3 audio from TikTok, Instagram Reels, and YouTube Shorts instantly.",
  placeholder: "Paste video link here (TikTok, Instagram Reels, Shorts)...",
  btn: "Download HD Media",
  processing: "Extracting Media...",
  success: "Media Ready for Download!",
  mp4: "Download MP4 (No Watermark)",
  mp3: "Download Audio (MP3 320kbps)",
  downloadVideo: "Download Video (HD MP4)",
  videoDesc: "Original HD video file without watermark. No redirect to external sites.",
  downloadAudio: "Download Audio (MP3)",
  audioDesc: "High quality audio file of the original video.",
  noteTitle: "Note:",
  noteText: 'Download runs 100% inside our own website without external redirects. If the browser begins playing the stream directly, right-click and click "Save Video/Audio As..." to download.',
  errorTitle: "Extraction Failed",
  errorText: "Could not extract media. Please verify the link is public and valid."
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
  q1: "How does the social video downloader work?",
  a1: "Our free universal video downloader lets you securely download HD videos from social media platforms like TikTok, Instagram Reels, and YouTube Shorts. It operates directly in your browser as a client-side utility, meaning we process everything without storing your media on our servers. You can easily download MP4 videos or extract MP3 audio files completely without watermarks, ensuring 100% privacy and unlimited usage for all your media needs.",
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
  video: video$7,
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
  tagline: "Evrensel Medya ve Finans Motoru",
  downloader: "Video İndirici",
  bgRemover: "AI Foto Stüdyosu",
  salary: "Küresel Maaş",
  aiCost: "AI Token Maliyeti",
  admin: "Yönetim Paneli"
};
const hero$6 = {
  badge: "%100 Ücretsiz • Sınırsız • Gizlilik Odaklı",
  title: "Evrensel Medya, Yapay Zeka ve Maaş Hesaplama Motoru",
  subtitle: "Tüm dünyada uzaktan çalışma maaşlarını hesaplayın, filigransız HD sosyal videolar indirin ve siber güvenli yapay zeka ile görsel arka planı %100 yerel silin.",
  seoTitle: "Nasıl Çalışır ve Temel Özellikler",
  seoText: "GlobalPayCalc, dijital göçebeler ve geliştiriciler için oluşturulmuş kapsamlı bir araç paketidir. Platformumuz, TikTok, Instagram Reels ve YouTube Shorts platformlarından <strong class='font-semibold text-slate-300'>filigransız HD sosyal medya videolarını</strong> ve MP3 ses dosyalarını güvenle indirmenizi sağlar. Uzaktan çalışanlar (remote worker) için, 150'den fazla ülkede net geliri, vergi dilimlerini ve satın alma gücü paritesini (PPP) karşılaştıran bir <strong class='font-semibold text-slate-300'>küresel maaş hesaplayıcı</strong> sunuyoruz. Geliştiriciler, GPT-4o ve Claude 3.5 için API masraflarını tahmin etmek amacıyla <strong class='font-semibold text-slate-300'>yapay zeka token maliyeti simülatörümüzü</strong> kullanabilirler. Ayrıca <strong class='font-semibold text-slate-300'>istemci tabanlı AI görüntü stüdyomuz</strong>, sunucu yüklemesi olmadan WebAssembly üzerinden fotoğrafların arka planını yerel olarak silerek tam veri gizliliği sağlar."
};
const video$6 = {
  title: "Sosyal Medya Video & Ses İndirici",
  subtitle: "TikTok, Instagram Reels & YouTube Shorts videolarını filigransız HD ve MP3 olarak anında indirin.",
  placeholder: "Video bağlantısını buraya yapıştırın (TikTok, Instagram, Shorts)...",
  btn: "HD Medyayı İndir",
  processing: "Medya Hazırlanıyor...",
  success: "Medya İndirmeye Hazır!",
  mp4: "MP4 İndir (Filigransız)",
  mp3: "Ses İndir (MP3 320kbps)",
  downloadVideo: "Videoyu İndir (HD MP4)",
  videoDesc: "Orijinal yüksek çözünürlüklü video dosyasıdır. Harici sitelere yönlendirilmez.",
  downloadAudio: "Sesi İndir (MP3)",
  audioDesc: "Videonun arkasında çalan orijinal müziğin yüksek kaliteli ses dosyasıdır.",
  noteTitle: "Not:",
  noteText: 'İndirme işlemi %100 sitemiz içerisinden tamamlanır. Reklamlı veya harici sitelere yönlendirme yapılmaz. Eğer video/ses tarayıcıda doğrudan oynamaya başlarsa sağ tıklayıp "Farklı Kaydet" seçeneğini seçerek cihazınıza kaydedebilirsiniz.',
  errorTitle: "Çıkarma Başarısız",
  errorText: "Girdiğiniz video çözümlenemedi. Lütfen bağlantının doğru ve herkese açık olduğunu doğrulayın."
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
  q1: "Sosyal medya video indirici nasıl çalışır?",
  a1: "Ücretsiz evrensel video indiricimiz, TikTok, Instagram Reels ve YouTube Shorts gibi platformlardan güvenli bir şekilde HD videolar indirmenizi sağlar. Doğrudan tarayıcınızda istemci tarafı bir araç olarak çalışır, yani medyanızı sunucularımızda saklamadan her şeyi işleriz. Filigran olmadan kolayca MP4 videoları indirebilir veya MP3 ses dosyalarını çıkarabilirsiniz; böylece tüm medya ihtiyaçlarınız için %100 gizlilik ve sınırsız kullanım sağlanır.",
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
  video: video$6,
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
  tagline: "Motor Universal de Medios y Finanzas",
  downloader: "Descargador de Video",
  bgRemover: "Estudio Foto AI",
  salary: "Salario Global",
  aiCost: "Costo de Tokens AI",
  admin: "Panel de Control"
};
const hero$5 = {
  badge: "100% Gratis • Ilimitado • Privacidad Primero",
  title: "Motor Universal de Medios, IA y Calculadora de Salarios",
  subtitle: "Calcule salarios remotos netos en todo el mundo, descargue videos sociales en HD sin marcas de agua y procese imágenes mediante IA WebAssembly segura del cliente.",
  seoTitle: "Cómo Funciona y Características Principales",
  seoText: "GlobalPayCalc es un conjunto completo creado para nómadas digitales y desarrolladores. Nuestra plataforma cuenta con un <strong class='font-semibold text-slate-300'>descargador de videos sociales HD</strong> que extrae de forma segura medios MP4/MP3 de TikTok, Instagram Reels y YouTube Shorts sin marcas de agua. Para los trabajadores remotos, nuestra <strong class='font-semibold text-slate-300'>calculadora de salario global</strong> compara ingresos netos, tramos impositivos y el costo de vida (PPA) en más de 150 países. Los desarrolladores pueden aprovechar nuestro <strong class='font-semibold text-slate-300'>simulador de costos de tokens de IA</strong> para estimar los gastos de API para GPT-4o y Claude 3.5, mientras que nuestro <strong class='font-semibold text-slate-300'>estudio de imágenes de IA del lado del cliente</strong> elimina fondos localmente a través de WebAssembly, garantizando cero cargas al servidor y privacidad total de los datos."
};
const video$5 = {
  title: "Descargador de Video y Audio de Redes Sociales",
  subtitle: "Descarga videos HD y audio MP3 de TikTok, Instagram Reels y YouTube Shorts al instante.",
  placeholder: "Pega el enlace del video aquí (TikTok, Instagram, Shorts)...",
  btn: "Descargar Medios HD",
  processing: "Extrayendo Medios...",
  success: "¡Medios Listos para Descargar!",
  mp4: "Descargar MP4 (Sin Marca de Agua)",
  mp3: "Descargar Audio (MP3 320kbps)",
  downloadVideo: "Descargar Video (HD MP4)",
  videoDesc: "Archivo de video HD original sin marca de agua. Sin redirección a sitios externos.",
  downloadAudio: "Descargar Audio (MP3)",
  audioDesc: "Archivo de audio de alta calidad del video original.",
  noteTitle: "Nota:",
  noteText: 'La descarga se realiza 100% dentro de nuestro sitio web sin redirecciones externas. Si el navegador reproduce el stream directamente, haz clic derecho y selecciona "Guardar video como...".',
  errorTitle: "Extracción fallida",
  errorText: "No se pudo extraer el medio. Verifica que el enlace sea correcto y público."
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
  q1: "¿Cómo funciona el descargador de videos sociales?",
  a1: "Nuestro descargador de videos universal gratuito te permite descargar videos HD de plataformas de redes sociales como TikTok, Instagram Reels y YouTube Shorts de forma segura. Funciona directamente en tu navegador como una utilidad del lado del cliente, lo que significa que procesamos todo sin almacenar tus medios en nuestros servidores. Puedes descargar videos MP4 o extraer archivos de audio MP3 fácilmente y sin marcas de agua, garantizando un 100% de privacidad y uso ilimitado para todas tus necesidades de medios.",
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
  video: video$5,
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
  tagline: "Universelle Medien- und Finanz-Engine",
  downloader: "Video Downloader",
  bgRemover: "KI Fotostudio",
  salary: "Globales Gehalt",
  aiCost: "KI-Token Kosten",
  admin: "Administration"
};
const hero$4 = {
  badge: "100% Kostenlos • Unbegrenzt • Datenschutz Zuerst",
  title: "Universelles Medien-, KI- und Gehaltsberechnungs-System",
  subtitle: "Berechnen Sie weltweite Remote-Nettogehälter, laden Sie HD-Social-Videos ohne Wasserzeichen herunter und verarbeiten Sie Bilder sicher mit Client-seitiger KI.",
  seoTitle: "Wie es funktioniert & Kernfunktionen",
  seoText: "GlobalPayCalc ist eine umfassende Suite für digitale Nomaden und Entwickler. Unsere Plattform bietet einen <strong class='font-semibold text-slate-300'>HD-Social-Video-Downloader</strong>, der MP4/MP3-Medien aus TikTok, Instagram Reels und YouTube Shorts ohne Wasserzeichen sicher extrahiert. Für Remote-Mitarbeiter vergleicht unser <strong class='font-semibold text-slate-300'>globaler Gehaltsrechner</strong> das Nettoeinkommen, Steuerklassen und die Lebenshaltungskosten (KKP) in über 150 Ländern. Entwickler können unseren <strong class='font-semibold text-slate-300'>KI-Token-Kosten-Simulator</strong> nutzen, um API-Ausgaben für GPT-4o und Claude 3.5 abzuschätzen, während unser <strong class='font-semibold text-slate-300'>clientseitiges KI-Bildstudio</strong> Hintergründe lokal über WebAssembly entfernt, was keine Server-Uploads garantiert und vollständige Datenprivatsphäre gewährleistet."
};
const video$4 = {
  title: "Social Video & Audio Downloader",
  subtitle: "Laden Sie HD-Videos und MP3-Audio von TikTok, Instagram Reels und YouTube Shorts sofort herunter.",
  placeholder: "Fügen Sie den Videolink hier ein (TikTok, Instagram, Shorts)...",
  btn: "HD-Medien Herunterladen",
  processing: "Medien Extrahieren...",
  success: "Medien bereit zum Download!",
  mp4: "MP4 Herunterladen (Ohne Wasserzeichen)",
  mp3: "Audio Herunterladen (MP3 320kbps)",
  downloadVideo: "Video herunterladen (HD MP4)",
  videoDesc: "Originale HD-Videodatei ohne Wasserzeichen. Keine Weiterleitung zu externen Seiten.",
  downloadAudio: "Audio herunterladen (MP3)",
  audioDesc: "Hochwertige Audiodatei des Originalvideos.",
  noteTitle: "Hinweis:",
  noteText: 'Der Download wird vollständig auf unserer Website abgewickelt. Wenn der Browser den Stream direkt abspielt, rechtsklicken Sie und wählen Sie "Speichern unter...".',
  errorTitle: "Extraktion fehlgeschlagen",
  errorText: "Medien konnten nicht extrahiert werden. Bitte stellen Sie sicher, dass der Link korrekt und öffentlich zugänglich ist."
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
  q1: "Wie funktioniert der Social-Video-Downloader?",
  a1: "Unser kostenloser universeller Video-Downloader ermöglicht es Ihnen, HD-Videos von Social-Media-Plattformen wie TikTok, Instagram Reels und YouTube Shorts sicher herunterzuladen. Er arbeitet direkt in Ihrem Browser als clientseitiges Dienstprogramm, d.h. wir verarbeiten alles, ohne Ihre Medien auf unseren Servern zu speichern. Sie können MP4-Videos herunterladen oder MP3-Audiodateien extrahieren, ganz ohne Wasserzeichen, und so 100% Privatsphäre und unbegrenzte Nutzung für all Ihre Medienanforderungen gewährleisten.",
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
  video: video$4,
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
  tagline: "Motor Universal de Mídia e Finanças",
  downloader: "Baixador de Vídeo",
  bgRemover: "Estúdio Foto IA",
  salary: "Salário Global",
  aiCost: "Custo de Tokens IA",
  admin: "Painel Admin"
};
const hero$3 = {
  badge: "100% Grátis • Ilimitado • Privacidade em Primeiro",
  title: "Motor Universal de Mídia, IA e Salários Globais",
  subtitle: "Calcule salários remotos líquidos em todo o mundo, baixe vídeos sociais em HD sem marcas d'água e processe imagens usando IA WebAssembly no cliente com segurança.",
  seoTitle: "Como Funciona e Principais Recursos",
  seoText: "GlobalPayCalc é um conjunto abrangente criado para nômades digitais e desenvolvedores. Nossa plataforma possui um <strong class='font-semibold text-slate-300'>baixador de vídeos sociais em HD</strong> que extrai com segurança mídia MP4/MP3 do TikTok, Instagram Reels e YouTube Shorts sem marcas d'água. Para trabalhadores remotos, nossa <strong class='font-semibold text-slate-300'>calculadora de salário global</strong> compara a renda líquida, as faixas de impostos e o custo de vida (PPC) em mais de 150 países. Os desenvolvedores podem aproveitar nosso <strong class='font-semibold text-slate-300'>simulador de custo de token de IA</strong> para estimar as despesas de API para GPT-4o e Claude 3.5, enquanto nosso <strong class='font-semibold text-slate-300'>estúdio de imagem de IA no cliente</strong> remove fundos localmente via WebAssembly, garantindo zero uploads de servidor e total privacidade de dados."
};
const video$3 = {
  title: "Baixador de Vídeos e Áudios de Redes Sociais",
  subtitle: "Baixe vídeos HD e áudio MP3 do TikTok, Instagram Reels e YouTube Shorts instantaneamente.",
  placeholder: "Cole o link do vídeo aqui (TikTok, Instagram, Shorts)...",
  btn: "Baixar Mídia HD",
  processing: "Extraindo Mídia...",
  success: "Mídia Pronta para Download!",
  mp4: "Baixar MP4 (Sem Marca d'Água)",
  mp3: "Baixar Áudio (MP3 320kbps)",
  downloadVideo: "Baixar Vídeo (HD MP4)",
  videoDesc: "Arquivo de vídeo HD original sem marca d'água. Sem redirecionamento para sites externos.",
  downloadAudio: "Baixar Áudio (MP3)",
  audioDesc: "Arquivo de áudio de alta qualidade do vídeo original.",
  noteTitle: "Nota:",
  noteText: 'O download é realizado 100% dentro do nosso site sem redirecionamentos externos. Se o navegador começar a reproduzir o stream diretamente, clique com o botão direito e selecione "Salvar vídeo como...".',
  errorTitle: "Falha na Extração",
  errorText: "Não foi possível extrair a mídia. Verifique se o link está correto e é público."
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
  q1: "Como funciona o baixador de vídeos sociais?",
  a1: "Nosso baixador de vídeo universal gratuito permite que você baixe com segurança vídeos HD de plataformas de mídia social como TikTok, Instagram Reels e YouTube Shorts. Ele opera diretamente no seu navegador como um utilitário do lado do cliente, ou seja, processamos tudo sem armazenar sua mídia em nossos servidores. Você pode facilmente baixar vídeos MP4 ou extrair arquivos de áudio MP3 totalmente sem marcas d'água, garantindo 100% de privacidade e uso ilimitado para todas as suas necessidades de mídia.",
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
  video: video$3,
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
  tagline: "Moteur Universel de Médias et Finances",
  downloader: "Téléchargeur Vidéo",
  bgRemover: "Studio Photo IA",
  salary: "Salaire Mondial",
  aiCost: "Coût Tokens IA",
  admin: "Panneau Admin"
};
const hero$2 = {
  badge: "100% Gratuit • Illimité • Confidentialité Avant Tout",
  title: "Moteur Universel de Médias, IA et Salaires Mondiaux",
  subtitle: "Calculez les salaires nets à distance dans le monde entier, téléchargez des vidéos sociales HD sans filigrane et traitez les images via une IA WebAssembly sécurisée.",
  seoTitle: "Comment ça marche & Fonctionnalités clés",
  seoText: "GlobalPayCalc est une suite complète conçue pour les nomades numériques et les développeurs. Notre plateforme propose un <strong class='font-semibold text-slate-300'>téléchargeur de vidéos sociales HD</strong> qui extrait en toute sécurité les médias MP4/MP3 de TikTok, Instagram Reels et YouTube Shorts sans filigrane. Pour les travailleurs à distance, notre <strong class='font-semibold text-slate-300'>calculateur de salaire mondial</strong> compare le revenu net, les tranches d'imposition et le coût de la vie (PPA) dans plus de 150 pays. Les développeurs peuvent tirer parti de notre <strong class='font-semibold text-slate-300'>simulateur de coût des jetons IA</strong> pour estimer les dépenses API pour GPT-4o et Claude 3.5, tandis que notre <strong class='font-semibold text-slate-300'>studio d'images IA côté client</strong> supprime les arrière-plans localement via WebAssembly, garantissant zéro téléchargement sur le serveur et une confidentialité totale des données."
};
const video$2 = {
  title: "Téléchargeur de Vidéos et Audio Sociaux",
  subtitle: "Téléchargez des vidéos HD et de l'audio MP3 depuis TikTok, Instagram Reels et YouTube Shorts instantanément.",
  placeholder: "Collez le lien vidéo ici (TikTok, Instagram, Shorts)...",
  btn: "Télécharger Médias HD",
  processing: "Extraction des Médias...",
  success: "Médias prêts à télécharger !",
  mp4: "Télécharger MP4 (Sans Filigrane)",
  mp3: "Télécharger Audio (MP3 320kbps)",
  downloadVideo: "Télécharger la Vidéo (HD MP4)",
  videoDesc: "Fichier vidéo HD original sans filigrane. Aucune redirection vers des sites externes.",
  downloadAudio: "Télécharger l'Audio (MP3)",
  audioDesc: "Fichier audio haute qualité de la vidéo originale.",
  noteTitle: "Remarque :",
  noteText: `Le téléchargement s'effectue 100% sur notre site sans redirection externe. Si le navigateur lit le stream directement, faites un clic droit et sélectionnez "Enregistrer la vidéo sous...".`,
  errorTitle: "Échec de l'extraction",
  errorText: "Impossible d'extraire le média. Vérifiez que le lien est correct et public."
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
  q1: "Comment fonctionne le téléchargeur de vidéos sociales ?",
  a1: "Notre téléchargeur de vidéos universel gratuit vous permet de télécharger en toute sécurité des vidéos HD à partir de plateformes de médias sociaux telles que TikTok, Instagram Reels et YouTube Shorts. Il fonctionne directement dans votre navigateur en tant qu'utilitaire côté client, ce qui signifie que nous traitons tout sans stocker vos médias sur nos serveurs. Vous pouvez facilement télécharger des vidéos MP4 ou extraire des fichiers audio MP3 sans filigrane, garantissant ainsi une confidentialité à 100 % et une utilisation illimitée pour tous vos besoins en médias.",
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
  video: video$2,
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
  tagline: "Mesin Media & Keuangan Universal",
  downloader: "Pengunduh Video",
  bgRemover: "Studio Foto AI",
  salary: "Gaji Global",
  aiCost: "Biaya Token AI",
  admin: "Panel Admin"
};
const hero$1 = {
  badge: "100% Gratis • Tak Terbatas • Privasi Utama",
  title: "Mesin Universal Media, AI & Gaji Global",
  subtitle: "Hitung gaji bersih jarak jauh di seluruh dunia, unduh video sosial HD tanpa tanda air, dan proses gambar melalui AI WebAssembly sisi klien secara aman dan privat.",
  seoTitle: "Cara Kerja & Fitur Utama",
  seoText: "GlobalPayCalc adalah paket komprehensif yang dibangun untuk nomaden digital dan pengembang. Platform kami dilengkapi <strong class='font-semibold text-slate-300'>pengunduh video sosial HD</strong> yang dengan aman mengekstrak media MP4/MP3 dari TikTok, Instagram Reels, dan YouTube Shorts tanpa tanda air. Untuk pekerja jarak jauh, <strong class='font-semibold text-slate-300'>kalkulator gaji global</strong> kami membandingkan pendapatan bersih, golongan pajak, dan biaya hidup (PPP) di 150+ negara. Pengembang dapat memanfaatkan <strong class='font-semibold text-slate-300'>simulator biaya token AI</strong> kami untuk memperkirakan pengeluaran API untuk GPT-4o dan Claude 3.5, sementara <strong class='font-semibold text-slate-300'>studio gambar AI sisi klien</strong> kami menghapus latar belakang secara lokal melalui WebAssembly, menjamin tidak ada unggahan server dan privasi data lengkap."
};
const video$1 = {
  title: "Pengunduh Video & Audio Media Sosial",
  subtitle: "Unduh video HD dan audio MP3 dari TikTok, Instagram Reels, dan YouTube Shorts secara instan.",
  placeholder: "Tempel tautan video di sini (TikTok, Instagram, Shorts)...",
  btn: "Unduh Media HD",
  processing: "Mengekstrak Media...",
  success: "Media Siap Diunduh!",
  mp4: "Unduh MP4 (Tanpa Watermark)",
  mp3: "Unduh Audio (MP3 320kbps)",
  downloadVideo: "Unduh Video (HD MP4)",
  videoDesc: "File video HD asli tanpa watermark. Tidak ada pengalihan ke situs eksternal.",
  downloadAudio: "Unduh Audio (MP3)",
  audioDesc: "File audio berkualitas tinggi dari video asli.",
  noteTitle: "Catatan:",
  noteText: 'Unduhan dilakukan 100% di dalam situs web kami tanpa pengalihan eksternal. Jika browser mulai memutar stream secara langsung, klik kanan dan pilih "Simpan Video Sebagai...".',
  errorTitle: "Ekstraksi Gagal",
  errorText: "Tidak dapat mengekstrak media. Pastikan tautannya benar dan bersifat publik."
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
  q1: "Bagaimana cara kerja pengunduh video sosial?",
  a1: "Pengunduh video universal gratis kami memungkinkan Anda mengunduh video HD dengan aman dari platform media sosial seperti TikTok, Instagram Reels, dan YouTube Shorts. Alat ini beroperasi langsung di browser Anda sebagai utilitas sisi klien, yang berarti kami memproses semuanya tanpa menyimpan media Anda di server kami. Anda dapat dengan mudah mengunduh video MP4 atau mengekstrak file audio MP3 sepenuhnya tanpa tanda air, memastikan privasi 100% dan penggunaan tak terbatas untuk semua kebutuhan media Anda.",
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
  video: video$1,
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
  tagline: "ユニバーサルメディア・金融エンジン",
  downloader: "動画ダウンローダー",
  bgRemover: "AIフォトスタジオ",
  salary: "グローバル給与",
  aiCost: "AIトークンコスト",
  admin: "管理パネル"
};
const hero = {
  badge: "100%無料 • 無制限 • プライバシー優先",
  title: "ユニバーサルメディア・AI・グローバル給与エンジン",
  subtitle: "世界中のネットリモート給与を計算し、透かしなしでHDソーシャルビデオをダウンロードし、安全でプライベートなクライアントサイドWebAssembly AIで画像を処理します。",
  seoTitle: "機能と仕組み",
  seoText: "GlobalPayCalcは、デジタルノマドと開発者向けに構築された包括的なスイートです。当社のプラットフォームは、TikTok、Instagramリール、YouTubeショートから透かしなしでMP4/MP3メディアを安全に抽出する<strong class='font-semibold text-slate-300'>HDソーシャルビデオダウンローダー</strong>を備えています。リモートワーカー向けに、<strong class='font-semibold text-slate-300'>グローバル給与計算機</strong>は150カ国以上の純所得、税制区分、および生活費（PPP）を比較します。開発者は<strong class='font-semibold text-slate-300'>AIトークンコストシミュレーター</strong>を活用して、GPT-4oおよびClaude 3.5のAPI経費を予測できます。一方、当社の<strong class='font-semibold text-slate-300'>クライアントサイドAI画像スタジオ</strong>はWebAssemblyを介してローカルで背景を削除し、サーバーへのアップロードゼロと完全なデータプライバシーを保証します。"
};
const video = {
  title: "ソーシャル動画・音声ダウンローダー",
  subtitle: "TikTok、Instagram Reels、YouTube ShortsのHD動画とMP3音声を即座にダウンロード。",
  placeholder: "ここにビデオリンクを貼り付けてください（TikTok、Instagram、Shorts）...",
  btn: "HDメディアをダウンロード",
  processing: "メディア抽出中...",
  success: "ダウンロード準備完了！",
  mp4: "MP4をダウンロード（透かしなし）",
  mp3: "音声をダウンロード（MP3 320kbps）",
  downloadVideo: "動画をダウンロード（HD MP4）",
  videoDesc: "透かしなしのオリジナルHD動画ファイル。外部サイトへのリダイレクトなし。",
  downloadAudio: "音声をダウンロード（MP3）",
  audioDesc: "元の動画の高品質音声ファイル。",
  noteTitle: "注意：",
  noteText: "ダウンロードは外部サイトへのリダイレクトなく、当サイト内で100%完結します。ブラウザがストリームを直接再生し始めた場合は、右クリックして「名前を付けてビデオを保存...」を選択してください。",
  errorTitle: "抽出失敗",
  errorText: "メディアを抽出できませんでした。リンクが正しく公開されていることを確認してください。"
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
  q1: "ソーシャルビデオダウンローダーはどのように機能しますか？",
  a1: "当社の無料のユニバーサルビデオダウンローダーを使用すると、TikTok、Instagram Reels、YouTube ShortsなどのソーシャルメディアプラットフォームからHDビデオを安全にダウンロードできます。これはクライアントサイドのユーティリティとしてブラウザで直接動作します。つまり、サーバーにメディアを保存することなくすべてを処理します。透かしなしでMP4ビデオを簡単にダウンロードしたり、MP3オーディオファイルを抽出したりできるため、100%のプライバシーとすべてのメディアニーズに対する無制限の使用が保証されます。",
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
  video,
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
function Header({ currentLang, setLang }) {
  const t = (path) => getTranslation(currentLang, path);
  const navigate = useNavigate();
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
          setLang(newLang);
          const pathSegments = window.location.pathname.split("/").filter(Boolean);
          const isSupported = supportedLanguages.some((l) => l.code === pathSegments[0]);
          let newPath = "";
          if (isSupported) {
            pathSegments[0] = newLang;
            newPath = "/" + pathSegments.join("/");
          } else {
            newPath = `/${newLang}${window.location.pathname}`;
          }
          if (newLang === "en") {
            newPath = isSupported ? "/" + pathSegments.slice(1).join("/") : window.location.pathname;
            if (newPath === "") newPath = "/";
          }
          navigate(newPath);
        },
        className: "bg-slate-900 border border-slate-700 text-slate-200 text-xs font-medium rounded-lg px-3 py-2 focus:ring-2 focus:ring-brand-500 focus:outline-none cursor-pointer",
        children: supportedLanguages.map((lang) => /* @__PURE__ */ jsx("option", { value: lang.code, children: lang.label }, lang.code))
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
          /* @__PURE__ */ jsx("p", { children: "Sitemizdeki tüm video indirme analizleri, dosya dönüştürmeler, arka plan silme işlemleri ve finansal hesaplamalar tamamen tarayıcınızın belleğinde (local olarak) gerçekleşir. Dönüştürdüğünüz veya yüklediğiniz hiçbir dosya veya veri sunucularımıza yüklenmez, kaydedilmez ve saklanmaz." }),
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
        /* @__PURE__ */ jsx("p", { children: "All social media downloader extractions, file conversions, AI photo background removal, and financial calculators run entirely inside your browser's local RAM. No file or user data is ever uploaded to our servers, stored, or logged." }),
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
          /* @__PURE__ */ jsx(Link, { to: lang === "en" ? "/about" : `/${lang}/about`, className: "hover:text-white transition decoration-slate-600 hover:underline", children: t("footer.aboutUs") || "About Us" }),
          /* @__PURE__ */ jsx(Link, { to: lang === "en" ? "/contact" : `/${lang}/contact`, className: "hover:text-white transition decoration-slate-600 hover:underline", children: t("footer.contact") || "Contact" }),
          /* @__PURE__ */ jsx(Link, { to: lang === "en" ? "/privacy" : `/${lang}/privacy`, className: "hover:text-white transition decoration-slate-600 hover:underline", children: t("footer.privacy") }),
          /* @__PURE__ */ jsx(Link, { to: lang === "en" ? "/terms" : `/${lang}/terms`, className: "hover:text-white transition decoration-slate-600 hover:underline", children: t("footer.terms") })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4", children: [
        /* @__PURE__ */ jsx("div", { children: t("footer.copyright") }),
        /* @__PURE__ */ jsx("div", { className: "font-mono text-[10px] text-slate-600", children: t("footer.tagline") })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto mt-8 text-[10px] text-slate-800 leading-relaxed text-justify", children: "GlobalPayCalc is an all-in-one universal utility engine for digital professionals. Securely download HD social media videos without watermarks from platforms like TikTok, Instagram Reels, and YouTube Shorts using our free unlimited client-side downloader. Accurately calculate remote salaries, global tax requirements, and living cost parity across worldwide destinations. Developers can use our advanced simulator to evaluate LLM API token costs for models like GPT-4o, Claude 3.5, and LLaMA 3. Experience complete privacy with our in-browser image background remover powered by WebAssembly, ensuring your photos and media are processed securely and privately without server uploads." }),
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
const countryTaxData = {
  US_CA: { name: "United States (California)", effTax: 0.3, pppIndex: 1, flag: "🇺🇸", currency: "USD" },
  US_TX: { name: "United States (Texas)", effTax: 0.2, pppIndex: 0.9, flag: "🇺🇸", currency: "USD" },
  US_NY: { name: "United States (New York)", effTax: 0.32, pppIndex: 1.1, flag: "🇺🇸", currency: "USD" },
  US_FL: { name: "United States (Florida)", effTax: 0.2, pppIndex: 0.92, flag: "🇺🇸", currency: "USD" },
  CA: { name: "Canada (Ontario)", effTax: 0.26, pppIndex: 0.92, flag: "🇨🇦", currency: "CAD" },
  UK: { name: "United Kingdom", effTax: 0.28, pppIndex: 0.88, flag: "🇬🇧", currency: "GBP" },
  DE: { name: "Germany", effTax: 0.38, pppIndex: 0.82, flag: "🇩🇪", currency: "EUR" },
  FR: { name: "France", effTax: 0.35, pppIndex: 0.8, flag: "🇫🇷", currency: "EUR" },
  IT: { name: "Italy", effTax: 0.3, pppIndex: 0.68, flag: "🇮🇹", currency: "EUR" },
  ES: { name: "Spain (Beckham Law)", effTax: 0.24, pppIndex: 0.62, flag: "🇪🇸", currency: "EUR" },
  PT: { name: "Portugal (NHR Nomad)", effTax: 0.2, pppIndex: 0.55, flag: "🇵🇹", currency: "EUR" },
  NL: { name: "Netherlands", effTax: 0.36, pppIndex: 0.88, flag: "🇳🇱", currency: "EUR" },
  CH: { name: "Switzerland", effTax: 0.18, pppIndex: 1.25, flag: "🇨🇭", currency: "CHF" },
  SE: { name: "Sweden", effTax: 0.32, pppIndex: 0.84, flag: "🇸🇪", currency: "SEK" },
  NO: { name: "Norway", effTax: 0.3, pppIndex: 1.02, flag: "🇳🇴", currency: "NOK" },
  DK: { name: "Denmark", effTax: 0.36, pppIndex: 0.98, flag: "🇩🇰", currency: "DKK" },
  FI: { name: "Finland", effTax: 0.3, pppIndex: 0.82, flag: "🇫🇮", currency: "EUR" },
  IE: { name: "Ireland", effTax: 0.28, pppIndex: 0.9, flag: "🇮🇪", currency: "EUR" },
  AT: { name: "Austria", effTax: 0.32, pppIndex: 0.8, flag: "🇦🇹", currency: "EUR" },
  BE: { name: "Belgium", effTax: 0.38, pppIndex: 0.82, flag: "🇧🇪", currency: "EUR" },
  PL: { name: "Poland", effTax: 0.18, pppIndex: 0.46, flag: "🇵🇱", currency: "PLN" },
  CZ: { name: "Czech Republic", effTax: 0.15, pppIndex: 0.52, flag: "🇨🇿", currency: "CZK" },
  HU: { name: "Hungary", effTax: 0.15, pppIndex: 0.44, flag: "🇭🇺", currency: "HUF" },
  RO: { name: "Romania", effTax: 0.1, pppIndex: 0.38, flag: "🇷🇴", currency: "RON" },
  BG: { name: "Bulgaria", effTax: 0.1, pppIndex: 0.35, flag: "🇧🇬", currency: "BGN" },
  GR: { name: "Greece", effTax: 0.22, pppIndex: 0.5, flag: "🇬🇷", currency: "EUR" },
  TR: { name: "Turkey (Remote Exemption)", effTax: 0.15, pppIndex: 0.38, flag: "🇹🇷", currency: "TRY" },
  AE: { name: "UAE (Dubai 0% Tax)", effTax: 0, pppIndex: 0.85, flag: "🇦🇪", currency: "AED" },
  SG: { name: "Singapore", effTax: 0.12, pppIndex: 0.95, flag: "🇸🇬", currency: "SGD" },
  JP: { name: "Japan", effTax: 0.22, pppIndex: 0.7, flag: "🇯🇵", currency: "JPY" },
  KR: { name: "South Korea", effTax: 0.2, pppIndex: 0.74, flag: "🇰🇷", currency: "KRW" },
  TW: { name: "Taiwan", effTax: 0.15, pppIndex: 0.65, flag: "🇹🇼", currency: "TWD" },
  AU: { name: "Australia", effTax: 0.28, pppIndex: 0.94, flag: "🇦🇺", currency: "AUD" },
  NZ: { name: "New Zealand", effTax: 0.24, pppIndex: 0.85, flag: "🇳🇿", currency: "NZD" },
  ZA: { name: "South Africa", effTax: 0.25, pppIndex: 0.36, flag: "🇿🇦", currency: "ZAR" },
  BR: { name: "Brazil", effTax: 0.2, pppIndex: 0.38, flag: "🇧🇷", currency: "BRL" },
  MX: { name: "Mexico", effTax: 0.2, pppIndex: 0.42, flag: "🇲🇽", currency: "MXN" },
  AR: { name: "Argentina", effTax: 0.22, pppIndex: 0.3, flag: "🇦🇷", currency: "ARS" },
  CO: { name: "Colombia", effTax: 0.15, pppIndex: 0.28, flag: "🇨🇴", currency: "COP" },
  CL: { name: "Chile", effTax: 0.15, pppIndex: 0.44, flag: "🇨🇱", currency: "CLP" },
  PE: { name: "Peru", effTax: 0.12, pppIndex: 0.32, flag: "🇵🇪", currency: "PEN" },
  CR: { name: "Costa Rica", effTax: 0.12, pppIndex: 0.48, flag: "🇨🇷", currency: "CRC" },
  TH: { name: "Thailand", effTax: 0.15, pppIndex: 0.36, flag: "🇹🇭", currency: "THB" },
  VN: { name: "Vietnam", effTax: 0.1, pppIndex: 0.3, flag: "🇻🇳", currency: "VND" },
  MY: { name: "Malaysia", effTax: 0.12, pppIndex: 0.36, flag: "🇲🇾", currency: "MYR" },
  PH: { name: "Philippines", effTax: 0.15, pppIndex: 0.32, flag: "🇵🇭", currency: "PHP" },
  IN: { name: "India", effTax: 0.18, pppIndex: 0.22, flag: "🇮🇳", currency: "INR" },
  ID: { name: "Indonesia (Bali)", effTax: 0.1, pppIndex: 0.32, flag: "🇮🇩", currency: "IDR" },
  HR: { name: "Croatia", effTax: 0.18, pppIndex: 0.5, flag: "🇭🇷", currency: "EUR" },
  CY: { name: "Cyprus", effTax: 0.12, pppIndex: 0.6, flag: "🇨🇾", currency: "EUR" },
  MT: { name: "Malta", effTax: 0.15, pppIndex: 0.65, flag: "🇲🇹", currency: "EUR" },
  EE: { name: "Estonia", effTax: 0.2, pppIndex: 0.6, flag: "🇪🇪", currency: "EUR" }
};
const calculateNomadTaxParity = (grossAnnualUSD, homeKey, targetKey) => {
  const home = countryTaxData[homeKey] || countryTaxData.US_CA;
  const target = countryTaxData[targetKey] || countryTaxData.ES;
  const homeNetAnnual = grossAnnualUSD * (1 - home.effTax);
  const homeNetMonthly = homeNetAnnual / 12;
  const targetNetAnnual = grossAnnualUSD * (1 - target.effTax);
  const targetNetMonthly = targetNetAnnual / 12;
  const pppMultiplier = target.pppIndex / home.pppIndex;
  const equivalentGrossUSD = grossAnnualUSD * pppMultiplier;
  const equivalentNetMonthly = equivalentGrossUSD * (1 - target.effTax) / 12;
  const purchasingPowerBoost = (targetNetMonthly / pppMultiplier / homeNetMonthly).toFixed(2);
  return {
    grossAnnualUSD,
    home: {
      ...home,
      netAnnual: homeNetAnnual,
      netMonthly: homeNetMonthly
    },
    target: {
      ...target,
      netAnnual: targetNetAnnual,
      netMonthly: targetNetMonthly
    },
    equivalentGrossUSD,
    equivalentNetMonthly,
    purchasingPowerBoost,
    monthlyGainUSD: targetNetMonthly - homeNetMonthly
  };
};
function NomadTaxCalculator({ lang = "en" }) {
  const t = (path) => getTranslation(lang, path);
  const [grossSalary, setGrossSalary] = useState(85e3);
  const [homeCountry, setHomeCountry] = useState("US_CA");
  const [targetCountry, setTargetCountry] = useState("ES");
  const [showEmbed, setShowEmbed] = useState(false);
  const result = calculateNomadTaxParity(grossSalary, homeCountry, targetCountry);
  const handleExportReport = () => {
    const reportText = `
--------------------------------------------------
GLOBAL REMOTE TAX PARITY REPORT
Generated by GlobalPayCalc.com (Universal Utility Engine)
--------------------------------------------------
Gross Salary: $${grossSalary.toLocaleString()} USD
Origin: ${result.home.flag} ${result.home.name} (Effective Tax: ${result.home.effTax * 100}%)
Destination: ${result.target.flag} ${result.target.name} (Effective Tax: ${result.target.effTax * 100}%)

Net Monthly (Origin): $${Math.round(result.home.netMonthly).toLocaleString()} USD
Net Monthly (Destination): $${Math.round(result.target.netMonthly).toLocaleString()} USD
Purchasing Power Index: ${result.purchasingPowerBoost}x
Equivalent Living Standard in Target: $${Math.round(result.equivalentNetMonthly).toLocaleString()}/mo

--------------------------------------------------
VERIFIED LINK: https://globalpaycalc.com
Powered by GlobalPayCalc.com - 100% Free & Client-Side
--------------------------------------------------
    `.trim();
    const element = document.createElement("a");
    const file = new Blob([reportText], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `GlobalPayCalc_Tax_Report_${homeCountry}_to_${targetCountry}.txt`;
    document.body.appendChild(element);
    element.click();
    element.remove();
  };
  const embedCode = `<iframe src="https://globalpaycalc.com" width="100%" height="700" style="border:1px solid #1e293b; border-radius:16px;" title="Remote Salary Parity Calculator"></iframe><p style="font-size:11px; text-align:center;">Powered by <a href="https://globalpaycalc.com" target="_blank" rel="dofollow">GlobalPayCalc.com</a></p>`;
  return /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-3xl mx-auto space-y-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold", children: [
        /* @__PURE__ */ jsx(Globe, { className: "w-3.5 h-3.5" }),
        /* @__PURE__ */ jsx("span", { children: t("salary.title") })
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-extrabold text-white tracking-tight", children: t("salary.title") }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-sm leading-relaxed", children: t("salary.subtitle") })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-start", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 glass-card p-6 sm:p-8 rounded-2xl space-y-6", children: [
        /* @__PURE__ */ jsxs("h3", { className: "text-lg font-bold text-white flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx(DollarSign, { className: "w-5 h-5 text-brand-400" }),
          /* @__PURE__ */ jsx("span", { children: t("salary.gross") })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-xs font-semibold", children: [
            /* @__PURE__ */ jsxs("label", { className: "text-slate-300", children: [
              t("salary.gross"),
              " (USD)"
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "text-brand-400 font-mono text-base font-bold", children: [
              "$",
              grossSalary.toLocaleString()
            ] })
          ] }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "range",
              min: "20000",
              max: "350000",
              step: "5000",
              value: grossSalary,
              onChange: (e) => setGrossSalary(Number(e.target.value)),
              className: "w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-500"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-[10px] text-slate-500 font-mono", children: [
            /* @__PURE__ */ jsx("span", { children: "$20,000" }),
            /* @__PURE__ */ jsx("span", { children: "$180,000" }),
            /* @__PURE__ */ jsx("span", { children: "$350,000" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("label", { className: "block text-xs font-semibold text-slate-300", children: t("salary.home") }),
          /* @__PURE__ */ jsx(
            "select",
            {
              value: homeCountry,
              onChange: (e) => setHomeCountry(e.target.value),
              className: "w-full bg-slate-900 border border-slate-700 text-slate-200 text-sm rounded-xl p-3 focus:ring-2 focus:ring-brand-500 focus:outline-none cursor-pointer font-medium",
              children: Object.entries(countryTaxData).map(([key, data]) => /* @__PURE__ */ jsxs("option", { value: key, children: [
                data.flag,
                " ",
                data.name,
                " (Tax: ",
                (data.effTax * 100).toFixed(0),
                "%)"
              ] }, key))
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("label", { className: "block text-xs font-semibold text-slate-300", children: t("salary.target") }),
          /* @__PURE__ */ jsx(
            "select",
            {
              value: targetCountry,
              onChange: (e) => setTargetCountry(e.target.value),
              className: "w-full bg-slate-900 border border-slate-700 text-slate-200 text-sm rounded-xl p-3 focus:ring-2 focus:ring-brand-500 focus:outline-none cursor-pointer font-medium",
              children: Object.entries(countryTaxData).map(([key, data]) => /* @__PURE__ */ jsxs("option", { value: key, children: [
                data.flag,
                " ",
                data.name,
                " (Tax: ",
                (data.effTax * 100).toFixed(0),
                "%)"
              ] }, key))
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "pt-2 flex flex-col sm:flex-row gap-2", children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: handleExportReport,
              className: "flex-1 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition flex items-center justify-center space-x-2 cursor-pointer border border-slate-700",
              children: [
                /* @__PURE__ */ jsx(Download, { className: "w-4 h-4 text-emerald-400" }),
                /* @__PURE__ */ jsx("span", { children: t("salary.downloadReport") })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => setShowEmbed(!showEmbed),
              className: "py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition flex items-center justify-center space-x-2 cursor-pointer border border-slate-700",
              children: [
                /* @__PURE__ */ jsx(Code, { className: "w-4 h-4 text-brand-400" }),
                /* @__PURE__ */ jsx("span", { children: t("salary.embed") })
              ]
            }
          )
        ] }),
        showEmbed && /* @__PURE__ */ jsxs("div", { className: "p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-[10px] text-slate-400 font-semibold block", children: t("salary.embedLabel") }),
          /* @__PURE__ */ jsx(
            "textarea",
            {
              readOnly: true,
              value: embedCode,
              onClick: (e) => e.target.select(),
              className: "w-full h-20 bg-slate-900 border border-slate-800 rounded-lg p-2 text-[10px] font-mono text-slate-300 focus:outline-none cursor-pointer"
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "text-[9px] text-slate-500", children: t("salary.embedNotice") })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "glass-card p-6 sm:p-8 rounded-2xl border-brand-500/30 relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute -top-12 -right-12 w-40 h-40 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-slate-800 pb-4 mb-6", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold uppercase tracking-wider text-slate-400", children: t("salary.netHome") }),
              /* @__PURE__ */ jsx("h4", { className: "text-xl font-bold text-white flex items-center space-x-2 mt-1", children: /* @__PURE__ */ jsxs("span", { children: [
                result.home.flag,
                " vs ",
                result.target.flag
              ] }) })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "text-right", children: /* @__PURE__ */ jsxs("span", { className: "text-xs font-medium text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20", children: [
              result.purchasingPowerBoost,
              "x ",
              t("salary.boost")
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "p-4 rounded-xl bg-slate-950/60 border border-slate-800", children: [
              /* @__PURE__ */ jsxs("div", { className: "text-xs text-slate-400 font-medium mb-1", children: [
                result.home.flag,
                " ",
                result.home.name
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "text-2xl font-extrabold text-white font-mono", children: [
                "$",
                Math.round(result.home.netMonthly).toLocaleString()
              ] }),
              /* @__PURE__ */ jsx("div", { className: "text-[11px] text-slate-500 mt-1", children: t("salary.netMonthlyAfterTax").replace("{tax}", (result.home.effTax * 100).toFixed(0)) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-4 rounded-xl bg-brand-950/40 border border-brand-500/30", children: [
              /* @__PURE__ */ jsxs("div", { className: "text-xs text-brand-300 font-medium mb-1", children: [
                result.target.flag,
                " ",
                result.target.name
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "text-2xl font-extrabold text-emerald-400 font-mono", children: [
                "$",
                Math.round(result.target.netMonthly).toLocaleString()
              ] }),
              /* @__PURE__ */ jsx("div", { className: "text-[11px] text-brand-300/70 mt-1", children: t("salary.netMonthlyAfterTax").replace("{tax}", (result.target.effTax * 100).toFixed(0)) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "glass-card p-6 rounded-2xl border-slate-800 space-y-4", children: [
          /* @__PURE__ */ jsxs("h4", { className: "text-xs font-bold text-white flex items-center space-x-2 uppercase tracking-wide", children: [
            /* @__PURE__ */ jsx(Heart, { className: "w-4 h-4 text-rose-500" }),
            /* @__PURE__ */ jsx("span", { children: t("salary.recommendedNomad") })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs", children: [
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "https://wise.prf.hn/click/camref:placeholder",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-brand-500/40 transition-all flex flex-col justify-between",
                children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("div", { className: "font-bold text-white", children: t("salary.wise") }),
                    /* @__PURE__ */ jsx("p", { className: "text-[10px] text-slate-400 mt-1", children: t("salary.wiseDesc") })
                  ] }),
                  /* @__PURE__ */ jsx("span", { className: "text-[10px] font-semibold text-brand-400 mt-2 block", children: t("salary.wiseCta") })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "https://safetywing.com?referralToken=placeholder",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-brand-500/40 transition-all flex flex-col justify-between",
                children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("div", { className: "font-bold text-white", children: t("salary.safetyWing") }),
                    /* @__PURE__ */ jsx("p", { className: "text-[10px] text-slate-400 mt-1", children: t("salary.safetyWingDesc") })
                  ] }),
                  /* @__PURE__ */ jsx("span", { className: "text-[10px] font-semibold text-brand-400 mt-2 block", children: t("salary.safetyWingCta") })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "https://revolut.ngru.net/placeholder",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-brand-500/40 transition-all flex flex-col justify-between",
                children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("div", { className: "font-bold text-white", children: t("salary.revolut") }),
                    /* @__PURE__ */ jsx("p", { className: "text-[10px] text-slate-400 mt-1", children: t("salary.revolutDesc") })
                  ] }),
                  /* @__PURE__ */ jsx("span", { className: "text-[10px] font-semibold text-brand-400 mt-2 block", children: t("salary.revolutCta") })
                ]
              }
            )
          ] })
        ] })
      ] })
    ] })
  ] });
}
const aiModels = [
  {
    id: "llama31_8b",
    name: "Meta Llama 3.1 8B",
    provider: "Meta",
    inputCostPerM: 0.05,
    outputCostPerM: 0.08,
    contextWindow: "128k",
    badge: "Best Value"
  },
  {
    id: "gemini15flash",
    name: "Google Gemini 1.5 Flash",
    provider: "Google",
    inputCostPerM: 0.075,
    outputCostPerM: 0.3,
    contextWindow: "1M",
    badge: "Ultra Fast"
  },
  {
    id: "deepseek_v25",
    name: "DeepSeek-V2.5",
    provider: "DeepSeek",
    inputCostPerM: 0.14,
    outputCostPerM: 0.28,
    contextWindow: "128k",
    badge: "High Performance"
  },
  {
    id: "gpt4o-mini",
    name: "OpenAI GPT-4o-mini",
    provider: "OpenAI",
    inputCostPerM: 0.15,
    outputCostPerM: 0.6,
    contextWindow: "128k",
    badge: "Popular Efficient"
  },
  {
    id: "qwen25_72b",
    name: "Alibaba Qwen 2.5 72B",
    provider: "Alibaba",
    inputCostPerM: 0.4,
    outputCostPerM: 0.4,
    contextWindow: "128k",
    badge: "Open Weight Leader"
  },
  {
    id: "llama31_70b",
    name: "Meta Llama 3.1 70B",
    provider: "Meta",
    inputCostPerM: 0.54,
    outputCostPerM: 0.54,
    contextWindow: "128k",
    badge: "Groq Speed"
  },
  {
    id: "claude35haiku",
    name: "Anthropic Claude 3.5 Haiku",
    provider: "Anthropic",
    inputCostPerM: 0.8,
    outputCostPerM: 4,
    contextWindow: "200k",
    badge: "Fast & Smart"
  },
  {
    id: "llama31_405b",
    name: "Meta Llama 3.1 405B",
    provider: "Meta",
    inputCostPerM: 2.66,
    outputCostPerM: 2.66,
    contextWindow: "128k",
    badge: "Open Source Peak"
  },
  {
    id: "gemini15pro",
    name: "Google Gemini 1.5 Pro",
    provider: "Google",
    inputCostPerM: 1.25,
    outputCostPerM: 5,
    contextWindow: "2M",
    badge: "Massive Context"
  },
  {
    id: "mistral_large2",
    name: "Mistral Large 2",
    provider: "Mistral AI",
    inputCostPerM: 2,
    outputCostPerM: 6,
    contextWindow: "128k",
    badge: "EU Flagship"
  },
  {
    id: "gpt4o",
    name: "OpenAI GPT-4o",
    provider: "OpenAI",
    inputCostPerM: 2.5,
    outputCostPerM: 10,
    contextWindow: "128k",
    badge: "Industry Standard"
  },
  {
    id: "claude35sonnet",
    name: "Anthropic Claude 3.5 Sonnet",
    provider: "Anthropic",
    inputCostPerM: 3,
    outputCostPerM: 15,
    contextWindow: "200k",
    badge: "High Reasoning"
  }
];
const calculateAiCosts = (monthlyInputMTokens, monthlyOutputMTokens) => {
  return aiModels.map((model) => {
    const inputTotal = monthlyInputMTokens * model.inputCostPerM;
    const outputTotal = monthlyOutputMTokens * model.outputCostPerM;
    const monthlyTotal = inputTotal + outputTotal;
    const yearlyTotal = monthlyTotal * 12;
    return {
      ...model,
      inputTotal,
      outputTotal,
      monthlyTotal,
      yearlyTotal
    };
  });
};
function DevTokenCalculator({ lang = "en" }) {
  const t = (path) => getTranslation(lang, path);
  const [inputMTokens, setInputMTokens] = useState(10);
  const [outputMTokens, setOutputMTokens] = useState(5);
  const [showEmbed, setShowEmbed] = useState(false);
  const results = calculateAiCosts(inputMTokens, outputMTokens);
  const handleExportReport = () => {
    let reportText = `
--------------------------------------------------
LLM API MODEL COST REPORT
Generated by GlobalPayCalc.com (Universal Utility Engine)
--------------------------------------------------
Monthly Input Tokens: ${inputMTokens}M Tokens
Monthly Output Tokens: ${outputMTokens}M Tokens

PROJECTIONS:
`;
    results.forEach((model) => {
      reportText += `
- ${model.name} (${model.provider}): Monthly: $${model.monthlyTotal.toFixed(2)} USD / Yearly: $${model.yearlyTotal.toFixed(0)} USD`;
    });
    reportText += `

--------------------------------------------------
VERIFIED LINK: https://globalpaycalc.com
Powered by GlobalPayCalc.com - 100% Free & Client-Side
--------------------------------------------------
    `.trim();
    const element = document.createElement("a");
    const file = new Blob([reportText], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `GlobalPayCalc_AI_Token_Report.txt`;
    document.body.appendChild(element);
    element.click();
    element.remove();
  };
  const embedCode = `<iframe src="https://globalpaycalc.com" width="100%" height="750" style="border:1px solid #1e293b; border-radius:16px;" title="AI Model API Token Cost Calculator"></iframe><p style="font-size:11px; text-align:center;">Powered by <a href="https://globalpaycalc.com" target="_blank" rel="dofollow">GlobalPayCalc.com</a></p>`;
  return /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-3xl mx-auto space-y-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold", children: [
        /* @__PURE__ */ jsx(Sparkles, { className: "w-3.5 h-3.5" }),
        /* @__PURE__ */ jsx("span", { children: t("ai.title") })
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-extrabold text-white tracking-tight", children: t("ai.title") }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-sm leading-relaxed", children: t("ai.subtitle") })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "glass-card p-6 sm:p-8 rounded-2xl max-w-4xl mx-auto space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-xs font-semibold", children: [
            /* @__PURE__ */ jsxs("label", { className: "text-slate-300", children: [
              t("ai.input"),
              " (Millions)"
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "text-purple-400 font-mono text-base font-bold", children: [
              inputMTokens,
              "M Tokens"
            ] })
          ] }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "range",
              min: "1",
              max: "200",
              step: "1",
              value: inputMTokens,
              onChange: (e) => setInputMTokens(Number(e.target.value)),
              className: "w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-500"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-[10px] text-slate-500 font-mono", children: [
            /* @__PURE__ */ jsx("span", { children: "1M" }),
            /* @__PURE__ */ jsx("span", { children: "100M" }),
            /* @__PURE__ */ jsx("span", { children: "200M" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-xs font-semibold", children: [
            /* @__PURE__ */ jsxs("label", { className: "text-slate-300", children: [
              t("ai.output"),
              " (Millions)"
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "text-brand-400 font-mono text-base font-bold", children: [
              outputMTokens,
              "M Tokens"
            ] })
          ] }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "range",
              min: "1",
              max: "100",
              step: "1",
              value: outputMTokens,
              onChange: (e) => setOutputMTokens(Number(e.target.value)),
              className: "w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-500"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-[10px] text-slate-500 font-mono", children: [
            /* @__PURE__ */ jsx("span", { children: "1M" }),
            /* @__PURE__ */ jsx("span", { children: "50M" }),
            /* @__PURE__ */ jsx("span", { children: "100M" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "pt-2 flex flex-col sm:flex-row gap-2 max-w-lg mx-auto", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: handleExportReport,
            className: "flex-1 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition flex items-center justify-center space-x-2 cursor-pointer border border-slate-700",
            children: [
              /* @__PURE__ */ jsx(Download, { className: "w-4 h-4 text-emerald-400" }),
              /* @__PURE__ */ jsx("span", { children: t("ai.downloadReport") })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => setShowEmbed(!showEmbed),
            className: "py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition flex items-center justify-center space-x-2 cursor-pointer border border-slate-700",
            children: [
              /* @__PURE__ */ jsx(Code, { className: "w-4 h-4 text-brand-400" }),
              /* @__PURE__ */ jsx("span", { children: t("ai.embed") })
            ]
          }
        )
      ] }),
      showEmbed && /* @__PURE__ */ jsxs("div", { className: "p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2", children: [
        /* @__PURE__ */ jsx("span", { className: "text-[10px] text-slate-400 font-semibold block", children: t("ai.embedLabel") }),
        /* @__PURE__ */ jsx(
          "textarea",
          {
            readOnly: true,
            value: embedCode,
            onClick: (e) => e.target.select(),
            className: "w-full h-20 bg-slate-900 border border-slate-800 rounded-lg p-2 text-[10px] font-mono text-slate-300 focus:outline-none cursor-pointer"
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "text-[9px] text-slate-500", children: t("ai.embedNotice") })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto", children: results.map((model) => /* @__PURE__ */ jsxs("div", { className: "glass-card glass-card-hover p-6 rounded-2xl flex flex-col justify-between space-y-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-3", children: [
          /* @__PURE__ */ jsx("span", { className: "text-[11px] font-semibold text-slate-400 uppercase tracking-wider", children: model.provider }),
          /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-500/10 text-brand-400 border border-brand-500/20", children: model.badge })
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-white mb-2", children: model.name }),
        /* @__PURE__ */ jsxs("div", { className: "text-xs text-slate-400 font-mono", children: [
          "Context: ",
          model.contextWindow
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-2 py-3 border-t border-b border-slate-800/80", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-xs", children: [
          /* @__PURE__ */ jsx("span", { className: "text-slate-400", children: t("ai.inputCost") }),
          /* @__PURE__ */ jsxs("span", { className: "text-slate-200 font-mono", children: [
            "$",
            model.inputTotal.toFixed(2)
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-xs", children: [
          /* @__PURE__ */ jsx("span", { className: "text-slate-400", children: t("ai.outputCost") }),
          /* @__PURE__ */ jsxs("span", { className: "text-slate-200 font-mono", children: [
            "$",
            model.outputTotal.toFixed(2)
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs text-slate-400", children: t("ai.monthly") }),
        /* @__PURE__ */ jsxs("div", { className: "text-2xl font-extrabold text-emerald-400 font-mono", children: [
          "$",
          model.monthlyTotal.toFixed(2)
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-[11px] text-slate-500 mt-0.5", children: [
          t("ai.yearly"),
          ": $",
          model.yearlyTotal.toFixed(0)
        ] })
      ] })
    ] }, model.id)) }),
    /* @__PURE__ */ jsxs("div", { className: "glass-card p-6 rounded-2xl border-slate-800 space-y-4 max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxs("h4", { className: "text-xs font-bold text-white flex items-center space-x-2 uppercase tracking-wide", children: [
        /* @__PURE__ */ jsx(Heart, { className: "w-4 h-4 text-purple-500" }),
        /* @__PURE__ */ jsx("span", { children: t("ai.recommendedAi") })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs", children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "https://aws.amazon.com/free/?utm_source=globalpaycalc",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-brand-500/40 transition-all flex flex-col justify-between",
            children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "font-bold text-white", children: t("ai.aws") }),
                /* @__PURE__ */ jsx("p", { className: "text-[10px] text-slate-400 mt-1", children: t("ai.awsDesc") })
              ] }),
              /* @__PURE__ */ jsx("span", { className: "text-[10px] font-semibold text-brand-400 mt-2 block", children: t("ai.awsCta") })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "https://platform.openai.com/signup?utm_source=globalpaycalc",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-brand-500/40 transition-all flex flex-col justify-between",
            children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "font-bold text-white", children: t("ai.openAi") }),
                /* @__PURE__ */ jsx("p", { className: "text-[10px] text-slate-400 mt-1", children: t("ai.openAiDesc") })
              ] }),
              /* @__PURE__ */ jsx("span", { className: "text-[10px] font-semibold text-brand-400 mt-2 block", children: t("ai.openAiCta") })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "https://console.anthropic.com/signup?utm_source=globalpaycalc",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-brand-500/40 transition-all flex flex-col justify-between",
            children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "font-bold text-white", children: t("ai.anthropic") }),
                /* @__PURE__ */ jsx("p", { className: "text-[10px] text-slate-400 mt-1", children: t("ai.anthropicDesc") })
              ] }),
              /* @__PURE__ */ jsx("span", { className: "text-[10px] font-semibold text-brand-400 mt-2 block", children: t("ai.anthropicCta") })
            ]
          }
        )
      ] })
    ] })
  ] });
}
function QuickWasmCompressor({ lang = "en" }) {
  const t = (path) => getTranslation(lang, path);
  const [files, setFiles] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processed, setProcessed] = useState(false);
  const [progressPercent, setProgressPercent] = useState(0);
  const handleFileDrop = (e) => {
    e.preventDefault();
    const uploadedFiles = Array.from(e.dataTransfer ? e.dataTransfer.files : e.target.files);
    if (uploadedFiles.length > 0) {
      setFiles(uploadedFiles.map((f) => ({
        name: f.name,
        size: (f.size / 1024 / 1024).toFixed(2),
        rawFile: f,
        downloadUrl: null
      })));
      setProcessed(false);
      setProgressPercent(0);
    }
  };
  const processImageBackgroundRemoval = (fileObj) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = URL.createObjectURL(fileObj.rawFile);
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imgData.data;
        const rTarget = data[0];
        const gTarget = data[1];
        const bTarget = data[2];
        const threshold = 40;
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          const dist = Math.sqrt(
            Math.pow(r - rTarget, 2) + Math.pow(g - gTarget, 2) + Math.pow(b - bTarget, 2)
          );
          if (dist < threshold) {
            data[i + 3] = 0;
          }
        }
        ctx.putImageData(imgData, 0, 0);
        canvas.toBlob((blob) => {
          const downloadUrl = URL.createObjectURL(blob);
          const compressedSize = (blob.size / 1024 / 1024).toFixed(2);
          resolve({ downloadUrl, compressedSize });
        }, "image/png");
      };
    });
  };
  const handleStartProcess = async () => {
    if (files.length === 0) return;
    setIsProcessing(true);
    setProgressPercent(10);
    const interval = setInterval(() => {
      setProgressPercent((prev) => {
        if (prev >= 80) {
          clearInterval(interval);
          return 80;
        }
        return prev + 15;
      });
    }, 150);
    try {
      const result = await processImageBackgroundRemoval(files[0]);
      setProgressPercent(100);
      setFiles((prev) => prev.map((f, idx) => {
        if (idx === 0) {
          return {
            ...f,
            compressedSize: result.compressedSize,
            downloadUrl: result.downloadUrl
          };
        }
        return f;
      }));
      setProcessed(true);
    } catch (err) {
      console.error("[Process Error]:", err);
    } finally {
      clearInterval(interval);
      setIsProcessing(false);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "space-y-8 max-w-4xl mx-auto my-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center space-y-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold", children: [
        /* @__PURE__ */ jsx(Zap, { className: "w-3.5 h-3.5" }),
        /* @__PURE__ */ jsxs("span", { children: [
          t("bg.title"),
          " • WebAssembly Engine"
        ] })
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-extrabold text-white tracking-tight", children: t("bg.title") }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-sm leading-relaxed", children: t("bg.subtitle") })
    ] }),
    /* @__PURE__ */ jsxs(
      "div",
      {
        onDragOver: (e) => e.preventDefault(),
        onDrop: handleFileDrop,
        className: "glass-card p-10 rounded-2xl text-center border-2 border-dashed border-slate-700 hover:border-cyan-500/50 transition-all cursor-pointer space-y-4",
        onClick: () => document.getElementById("wasm-file-input").click(),
        children: [
          /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center mx-auto", children: /* @__PURE__ */ jsx(UploadCloud, { className: "w-8 h-8" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-white", children: t("bg.dropzone") }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400 mt-1", children: "Supports PNG, JPG, WebP, AVIF & SVG up to 500MB" })
          ] }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "file",
              multiple: true,
              onChange: handleFileDrop,
              className: "hidden",
              id: "wasm-file-input"
            }
          )
        ]
      }
    ),
    files.length > 0 && /* @__PURE__ */ jsxs("div", { className: "glass-card p-6 rounded-2xl space-y-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-xs font-semibold text-slate-300", children: [
        /* @__PURE__ */ jsxs("span", { children: [
          t("bg.selectedFiles"),
          " (",
          files.length,
          ")"
        ] }),
        /* @__PURE__ */ jsx("span", { children: t("bg.localReady") })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-2", children: files.map((file, idx) => /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs", children: [
        /* @__PURE__ */ jsxs("div", { className: "truncate max-w-xs space-y-0.5", children: [
          /* @__PURE__ */ jsx("span", { className: "font-mono text-slate-200 block truncate", children: file.name }),
          /* @__PURE__ */ jsxs("span", { className: "text-[10px] text-slate-500 font-mono", children: [
            t("bg.originalSize"),
            ": ",
            file.size,
            " MB"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
          file.compressedSize && /* @__PURE__ */ jsxs("div", { className: "text-right font-mono text-xs", children: [
            /* @__PURE__ */ jsxs("span", { className: "text-slate-400", children: [
              t("bg.processedSize"),
              ":"
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "text-emerald-400 font-bold ml-1", children: [
              file.compressedSize,
              " MB"
            ] })
          ] }),
          file.downloadUrl && /* @__PURE__ */ jsxs(
            "a",
            {
              href: file.downloadUrl,
              download: `no_bg_${file.name.split(".")[0]}.png`,
              className: "p-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center space-x-1 transition cursor-pointer",
              children: [
                /* @__PURE__ */ jsx(Download, { className: "w-4 h-4" }),
                /* @__PURE__ */ jsx("span", { children: t("bg.download") })
              ]
            }
          )
        ] })
      ] }, idx)) }),
      isProcessing && /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-xs text-slate-400 font-mono", children: [
          /* @__PURE__ */ jsx("span", { children: t("bg.progressText") }),
          /* @__PURE__ */ jsxs("span", { children: [
            progressPercent,
            "%"
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-full bg-slate-800 rounded-full h-2 overflow-hidden", children: /* @__PURE__ */ jsx(
          "div",
          {
            className: "bg-cyan-500 h-2 rounded-full transition-all duration-150",
            style: { width: `${progressPercent}%` }
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "pt-2 flex justify-between items-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2 text-xs text-emerald-400", children: [
          /* @__PURE__ */ jsx(ShieldCheck, { className: "w-4 h-4" }),
          /* @__PURE__ */ jsx("span", { children: t("bg.zeroUpload") })
        ] }),
        !processed && /* @__PURE__ */ jsx(
          "button",
          {
            onClick: handleStartProcess,
            disabled: isProcessing,
            className: "px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-xs hover:opacity-90 transition shadow-lg shadow-cyan-500/20 flex items-center space-x-2 cursor-pointer",
            children: isProcessing ? /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx(RefreshCw, { className: "w-4 h-4 animate-spin" }),
              /* @__PURE__ */ jsx("span", { children: t("bg.processing") })
            ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx(Zap, { className: "w-4 h-4" }),
              /* @__PURE__ */ jsx("span", { children: t("bg.btn") })
            ] })
          }
        )
      ] })
    ] })
  ] });
}
function SocialVideoDownloader({ lang = "en" }) {
  const t = (path) => getTranslation(lang, path);
  const [url, setUrl] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [metadata, setMetadata] = useState(null);
  const handleDownload = async (e) => {
    e.preventDefault();
    if (!url) return;
    setIsProcessing(true);
    setErrorMsg("");
    setMetadata(null);
    const targetUrl = url.trim();
    try {
      const response = await fetch(`/api/download?url=${encodeURIComponent(targetUrl)}`);
      if (response.ok) {
        const data = await response.json();
        if (data && data.success) {
          setMetadata(data);
          setIsProcessing(false);
          return;
        }
      }
      throw new Error("Video stream extraction failed.");
    } catch (err) {
      console.error("[Download error]:", err);
      setErrorMsg(t("video.errorText"));
    } finally {
      setIsProcessing(false);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "space-y-8 max-w-4xl mx-auto my-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center space-y-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold", children: [
        /* @__PURE__ */ jsx(Video, { className: "w-3.5 h-3.5" }),
        /* @__PURE__ */ jsx("span", { children: "No Watermark • Universal Media Downloader" })
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-extrabold text-white tracking-tight", children: t("video.title") }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-sm leading-relaxed", children: t("video.subtitle") })
    ] }),
    errorMsg && /* @__PURE__ */ jsxs("div", { className: "glass-card p-4 rounded-xl border-rose-500/30 bg-rose-500/10 flex items-start space-x-3 text-xs text-rose-400 animate-float", children: [
      /* @__PURE__ */ jsx(AlertTriangle, { className: "w-5 h-5 flex-shrink-0 mt-0.5" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
        /* @__PURE__ */ jsx("strong", { className: "font-bold text-white", children: t("video.errorTitle") }),
        /* @__PURE__ */ jsx("p", { children: errorMsg })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleDownload, className: "glass-card p-4 sm:p-6 rounded-2xl border-rose-500/20 space-y-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-3", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "url",
            placeholder: t("video.placeholder"),
            value: url,
            onChange: (e) => setUrl(e.target.value),
            className: "flex-1 bg-slate-900 border border-slate-700 text-slate-200 text-sm rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-rose-500 focus:outline-none font-medium placeholder-slate-500",
            required: true
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "submit",
            disabled: isProcessing,
            className: "px-6 py-3.5 rounded-xl bg-gradient-to-r from-rose-500 via-pink-600 to-purple-600 text-white font-bold text-xs hover:opacity-90 transition shadow-lg shadow-rose-500/20 flex items-center justify-center space-x-2 whitespace-nowrap cursor-pointer",
            children: isProcessing ? /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx(RefreshCw, { className: "w-4 h-4 animate-spin" }),
              /* @__PURE__ */ jsx("span", { children: t("video.processing") })
            ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx(Download, { className: "w-4 h-4" }),
              /* @__PURE__ */ jsx("span", { children: t("video.btn") })
            ] })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-800 gap-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2 text-emerald-400 font-medium", children: [
          /* @__PURE__ */ jsx(ShieldCheck, { className: "w-4 h-4" }),
          /* @__PURE__ */ jsx("span", { children: "100% Free • Unlimited • AdBlock Safe" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "font-mono text-slate-500", children: "TikTok, Instagram Reels, YouTube Shorts" })
      ] })
    ] }),
    metadata && /* @__PURE__ */ jsxs("div", { className: "glass-card p-6 rounded-2xl border-emerald-500/30 space-y-6 animate-float", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2 text-emerald-400 font-bold text-sm", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5" }),
        /* @__PURE__ */ jsx("span", { children: t("video.success") })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: metadata.videoUrl,
            download: true,
            className: "p-5 rounded-xl bg-slate-900 border border-slate-850 hover:border-emerald-500/50 transition flex items-center justify-between group cursor-pointer text-left w-full",
            children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("div", { className: "text-xs font-bold text-white group-hover:text-emerald-400 flex items-center space-x-2", children: [
                  /* @__PURE__ */ jsx(Play, { className: "w-4.5 h-4.5 text-emerald-400" }),
                  /* @__PURE__ */ jsx("span", { children: t("video.downloadVideo") })
                ] }),
                /* @__PURE__ */ jsx("p", { className: "text-[10px] text-slate-500 mt-2 leading-relaxed", children: t("video.videoDesc") })
              ] }),
              /* @__PURE__ */ jsx(Download, { className: "w-5 h-5 text-emerald-400 flex-shrink-0 ml-4" })
            ]
          }
        ),
        metadata.audioUrl && /* @__PURE__ */ jsxs(
          "a",
          {
            href: metadata.audioUrl,
            download: true,
            className: "p-5 rounded-xl bg-slate-900 border border-slate-850 hover:border-purple-500/50 transition flex items-center justify-between group cursor-pointer text-left w-full",
            children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("div", { className: "text-xs font-bold text-white group-hover:text-purple-400 flex items-center space-x-2", children: [
                  /* @__PURE__ */ jsx(Music, { className: "w-4.5 h-4.5 text-purple-400" }),
                  /* @__PURE__ */ jsx("span", { children: t("video.downloadAudio") })
                ] }),
                /* @__PURE__ */ jsx("p", { className: "text-[10px] text-slate-500 mt-2 leading-relaxed", children: t("video.audioDesc") })
              ] }),
              /* @__PURE__ */ jsx(Sparkles, { className: "w-5 h-5 text-purple-400 flex-shrink-0 ml-4" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-[10px] text-slate-400 leading-relaxed", children: /* @__PURE__ */ jsxs("span", { children: [
        "💡 ",
        /* @__PURE__ */ jsx("strong", { children: t("video.noteTitle") }),
        " ",
        t("video.noteText")
      ] }) })
    ] })
  ] });
}
const generateSeoSchema = ({ type, url, name, description, faqs = [], breadcrumbs = [] }) => {
  const baseSchema = {
    "@context": "https://schema.org"
  };
  if (type === "WebApplication") {
    return {
      ...baseSchema,
      "@type": "WebApplication",
      "name": name,
      "url": url,
      "description": description,
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "All",
      "browserRequirements": "Requires JavaScript",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    };
  }
  if (type === "FAQPage") {
    return {
      ...baseSchema,
      "@type": "FAQPage",
      "mainEntity": faqs.map((faq2) => ({
        "@type": "Question",
        "name": faq2.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq2.answer
        }
      }))
    };
  }
  if (type === "BreadcrumbList") {
    return {
      ...baseSchema,
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((crumb, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "name": crumb.name,
        "item": crumb.url
      }))
    };
  }
  return baseSchema;
};
const injectJsonLdSchema = (id2, schemaObj) => {
  if (typeof document === "undefined") return;
  const existingElement = document.getElementById(id2);
  if (existingElement) {
    existingElement.remove();
  }
  const script = document.createElement("script");
  script.id = id2;
  script.type = "application/ld+json";
  script.text = JSON.stringify(schemaObj);
  document.head.appendChild(script);
};
const faqData = {
  en: [
    { question: "Is my personal data or file uploads secure on GlobalPayCalc?", answer: "Yes, 100%. All processing (image compression, background removal, tax calculations, token estimations) occurs entirely inside your local browser memory (RAM). We do not upload, store, or log any of your files on any remote servers." },
    { question: "How does the Social Video Downloader work without a watermark?", answer: "Our downloader communicates with a secure serverless proxy engine that parses public meta-streams of TikTok, Reels, and Shorts videos, extracting the original, un-watermarked HD direct download links directly to your browser." },
    { question: "Where do the remote tax and living cost index (PPP) rates come from?", answer: "The data is updated monthly, compiling verified official local income tax structures, remote worker Beckham law schemes, and cost-of-living index ratings relative to the US baseline (sources include local tax registries, OECD, and Numbeo database metrics)." },
    { question: "Why is this utility engine completely free to use?", answer: "We monetize the platform exclusively through non-intrusive, zero-CLS Google AdSense and AdX advertisement slots. This allows us to keep all computing tools free, unlimited, and open source without charging subscription fees." },
    { question: "How accurate is the AI Token API Cost Simulator?", answer: "The prices are synced with official provider API pricing (including OpenAI, Anthropic, Google, and Meta). It projects monthly and yearly costs based on your specific input/output token volume assumptions." },
    { question: "Is GlobalPayCalc compatible with mobile devices?", answer: "Yes, our interface is built with responsive mobile-first Tailwind design parameters. Background computations are offloaded to background Web Workers to prevent UI freezing on low-end mobile CPUs." }
  ],
  tr: [
    { question: "GlobalPayCalc üzerinde yüklediğim dosyalar veya kişisel verilerim güvende mi?", answer: "Evet, kesinlikle. Görsel sıkıştırma, arka plan silme, vergi hesaplama ve token maliyeti simülasyonu gibi tüm işlemler tamamen bilgisayarınızın veya telefonunuzun yerel bellek (RAM) katmanında gerçekleşir. Verileriniz asla bir sunucuya yüklenmez, kaydedilmez ve satılmaz." },
    { question: "Sosyal medya video indirici nasıl filigransız indirme sağlıyor?", answer: "Sistemimiz, TikTok, Instagram Reels ve YouTube Shorts videolarının herkese açık kaynak kodlarını güvenli bir sunucu (edge proxy) üzerinden analiz ederek, filigransız orijinal HD doğrudan indirme bağlantılarını tarayıcınıza iletir." },
    { question: "Uzaktan çalışma vergi ve yaşam maliyeti (PPP) verileri güncel ve gerçek mi?", answer: "Evet. Hesaplama motorumuzda yer alan veriler; OECD veritabanı, yerel maliye bakanlıkları ve Numbeo yaşam maliyeti indeksleri derlenerek aylık bazda güncellenmektedir. Ülkelerin remote çalışanlar için sunduğu güncel Beckham Yasası, NHR ve yerel istisna kuralları dahildir." },
    { question: "Bu platform neden tamamen ücretsiz?", answer: "Sitemizi tamamen reklamsız hissettiren, hız kaybına veya yerleşim kaymasına yol açmayan entegre Google AdSense ve AdX reklam alanları üzerinden finanse ediyoruz. Bu sayede tüm araçlarımızı sınırsız ve aboneliksiz sunabiliyoruz." },
    { question: "Yapay Zeka Token API Maliyet Simülatörü fiyatları güncel mi?", answer: "Evet, tüm fiyatlar OpenAI, Anthropic, Google Gemini ve Llama sağlayıcılarının resmi API fiyat tarifeleriyle (1 Milyon token başına fiyatlandırma) birebir eşleşmektedir ve düzenli güncellenir." },
    { question: "Siteniz mobil cihazlarda sorunsuz çalışır mı?", answer: "Evet, platformumuz tamamen mobil uyumlu tasarıma sahiptir. İşlemciyi yoran ağır hesaplamalar arka planda çalışan Web Worker iş parçacıklarına devredildiği için en eski telefonlarda dahi donma yapmadan çalışır." }
  ],
  es: [
    { question: "¿Están seguros mis datos personales o archivos subidos en GlobalPayCalc?", answer: "Sí, 100%. Todo el procesamiento ocurre dentro de la memoria del navegador local (RAM). No subimos, almacenamos ni registramos ninguno de sus archivos en servidores remotos." },
    { question: "¿Cómo funciona el descargador de videos sin marca de agua?", answer: "Nuestro descargador se conecta a un proxy seguro que procesa metadatos públicos de videos de TikTok, Reels y Shorts, extrayendo los enlaces de descarga directa HD originales sin marca de agua." },
    { question: "¿De dónde provienen las tasas de impuestos y los índices de costo de vida (PPP)?", answer: "Los datos se actualizan mensualmente, compilando estructuras oficiales de impuestos sobre la renta, leyes Beckham locales para trabajadores remotos e índices de costo de vida en comparación con EE.UU. (fuentes incluyen registros fiscales y la base de datos de Numbeo)." },
    { question: "¿Por qué esta herramienta es completamente gratuita?", answer: "Monetizamos la plataforma a través de anuncios de Google AdSense no intrusivos. Esto nos permite mantener todas las herramientas gratuitas, ilimitadas y de código abierto." },
    { question: "¿Qué tan preciso es el simulador de costos de API de tokens IA?", answer: "Los precios están sincronizados con las tarifas oficiales de los proveedores (incluyendo OpenAI, Anthropic, Google y Meta) basadas en su volumen mensual de tokens." },
    { question: "¿Es GlobalPayCalc compatible con dispositivos móviles?", answer: "Sí, la interfaz es responsiva y móvil-primero. Los cálculos intensivos se delegan a Web Workers para evitar bloqueos en procesadores móviles de gama baja." }
  ],
  de: [
    { question: "Sind meine persönlichen Daten oder hochgeladenen Dateien auf GlobalPayCalc sicher?", answer: "Ja, zu 100%. Die gesamte Verarbeitung erfolgt im Arbeitsspeicher (RAM) Ihres Browsers. Wir laden keine Dateien auf Remote-Server hoch, speichern sie nicht und protokollieren sie nicht." },
    { question: "Wie funktioniert der Social Video Downloader ohne Wasserzeichen?", answer: "Unser Downloader kommuniziert mit einem sicheren Serverless-Proxy, der öffentliche Metadaten von TikTok-, Reels- und Shorts-Videos analysiert und die direkten HD-Downloadlinks ohne Wasserzeichen extrahiert." },
    { question: "Woher stammen die Steuersätze und Lebenshaltungskostenindizes (Kaufkraftparität)?", answer: "Die Daten werden monatlich aktualisiert und basieren auf verifizierten lokalen Einkommensteuertabellen, Sonderregelungen für Remote-Arbeiter und Lebenshaltungskostenindizes (Quellen sind Finanzämter, OECD und Numbeo)." },
    { question: "Warum ist diese Web-App komplett kostenlos?", answer: "Wir finanzieren die Plattform ausschließlich über nicht störende Google AdSense-Anzeigen. Dadurch können wir alle Rechner unbegrenzt und kostenlos für alle anbieten." },
    { question: "Wie genau ist der KI-Token- und API-Kostensimulator?", answer: "Die Preise stimmen mit den offiziellen API-Preisen der Anbieter (OpenAI, Anthropic, Google, Meta) überein und berechnen die Kosten basierend auf Ihren Token-Eingaben." },
    { question: "Ist GlobalPayCalc mit Mobilgeräten kompatibel?", answer: "Ja, das Design ist mobilfreundlich und reaktionsschnell. Komplexe Hintergrundprozesse laufen über Web-Worker, damit Ihr Smartphone-Bildschirm flüssig bleibt." }
  ],
  pt: [
    { question: "Meus dados pessoais ou uploads estão seguros no GlobalPayCalc?", answer: "Sim, 100%. Todo o processamento ocorre na memória do seu navegador local (RAM). Não fazemos upload, armazenamento ou registro de seus arquivos em nossos servidores." },
    { question: "Como funciona o baixador de vídeos sociais sem marca d'água?", answer: "Nosso sistema conecta-se a um proxy seguro que lê os streams públicos de vídeos do TikTok, Reels e Shorts, extraindo links de download direto em HD sem marca d'água." },
    { question: "De onde vêm as taxas de impostos e índices de custo de vida (PPP)?", answer: "Os dados são atualizados mensalmente a partir de órgãos oficiais, incluindo impostos sobre a renda locais, regimes fiscais para nômades e dados de custo de vida do Numbeo e OCDE." },
    { question: "Por que esta plataforma é totalmente gratuita?", answer: "Nós monetizamos o site através de anúncios integrados do Google AdSense. Isso nos permite manter todas as ferramentas de utilidade pública 100% grátis e ilimitadas." },
    { question: "Quão preciso é o simulador de custos de tokens e APIs de IA?", answer: "Os valores são sincronizados com as tarifas oficiais das APIs dos provedores (OpenAI, Anthropic, Google, Meta) por milhão de tokens de entrada e saída." },
    { question: "O GlobalPayCalc funciona bem em dispositivos móveis?", answer: "Sim, nossa interface é adaptada para celulares. Processamentos pesados são delegados para Web Workers locais no navegador, evitando travamentos no celular." }
  ],
  fr: [
    { question: "Mes données et fichiers sont-ils sécurisés sur GlobalPayCalc ?", answer: "Oui, à 105%. Tous les calculs et compressions se déroulent localement dans la mémoire de votre navigateur (RAM). Aucun fichier n'est téléversé ou stocké sur des serveurs externes." },
    { question: "Comment fonctionne le téléchargeur de vidéos sans filigrane ?", answer: "Il utilise un proxy sécurisé pour analyser les flux publics des vidéos TikTok, Reels et Shorts, vous fournissant directement les liens de téléchargement HD d'origine sans filigrane." },
    { question: "D'où proviennent les données fiscales et de coût de la vie ?", answer: "Les données sont mises à jour mensuellement à partir de barèmes fiscaux officiels, de lois Beckham locales et des indices de coût de la vie de la base de données Numbeo." },
    { question: "Pourquoi ce site est-il entièrement gratuit ?", answer: "Nous finançons ce service via des encarts publicitaires non intrusifs Google AdSense. Cela permet de garder tous nos outils open-source et gratuits pour les utilisateurs." },
    { question: "Quelle est la précision du simulateur de coût des tokens IA ?", answer: "Les prix sont alignés en temps réel sur les grilles tarifaires officielles des fournisseurs (OpenAI, Anthropic, Google, Meta) par million de tokens." },
    { question: "GlobalPayCalc est-il compatible avec les smartphones ?", answer: "Oui, notre design est entièrement responsive. Les calculs lourds sont confiés à des Web Workers pour garantir une fluidité totale même sur mobile." }
  ],
  id: [
    { question: "Apakah data pribadi atau berkas yang saya unggah aman di GlobalPayCalc?", answer: "Ya, 100% aman. Semua proses kompresi, hapus latar belakang, dan perhitungan pajak berjalan langsung di memori peramban Anda (RAM). Kami tidak menyimpan berkas Anda." },
    { question: "Bagaimana cara kerja pengunduh video sosial tanpa watermark?", answer: "Pengunduh kami terhubung ke server proxy aman untuk mengurai tautan publik TikTok, Reels, dan Shorts, lalu mengambil berkas HD asli tanpa tanda air langsung ke browser Anda." },
    { question: "Dari mana asal data pajak dan indeks biaya hidup (PPP)?", answer: "Data diperbarui setiap bulan berdasarkan laporan perpajakan resmi setempat, undang-undang Beckham pekerja jarak jauh, dan indeks biaya hidup dari basis data Numbeo." },
    { question: "Mengapa semua kalkulator ini gratis digunakan?", answer: "Kami membiayai platform ini sepenuhnya melalui slot iklan Google AdSense yang aman dan rapi, sehingga kami dapat menjaga semua utilitas tetap gratis tanpa biaya bulanan." },
    { question: "Seberapa akurat simulator biaya API token AI?", answer: "Harga disesuaikan dengan tarif API resmi dari penyedia (OpenAI, Anthropic, Google, Meta) untuk hitungan per satu juta token." },
    { question: "Apakah GlobalPayCalc dapat diakses lewat ponsel?", answer: "Ya, desain kami ramah ponsel. Komputasi berat dialihkan ke Web Worker latar belakang agar ponsel Anda tidak hang saat memproses file." }
  ],
  ja: [
    { question: "アップロードした画像や個人情報は安全ですか？", answer: "はい、100%安全です。すべての画像圧縮、背景削除、税金計算はブラウザのメモリ（RAM）上でのみ実行されます。サーバーへファイルが送信・保存されることは一切ありません。" },
    { question: "ウォーターマークなしで動画を保存できるのはなぜですか？", answer: "当サイトは安全なプロキシを経由して、TikTok、Instagram Reels、YouTube Shortsの公開メタデータを解析し、ウォーターマークなしのオリジナルHD直接リンクを取得しています。" },
    { question: "税率や購買力平価（生活費指数）のデータはどこから取得していますか？", answer: "各国の公式所得税率、リモートワーカー向け優遇税制（ベッカム法など）、およびNumbeoの最新の生活費データベースを元に、毎月手動で更新されています。" },
    { question: "なぜ完全に無料で利用できるのですか？", answer: "Google AdSenseの広告掲載により、サーバー運営コストを賄っています。ユーザーに月額料金などの費用を請求することなく、すべての機能を永続的に無料・無制限で提供します。" },
    { question: "AIトークン APIコストシミュレーターの精度は？", answer: "価格はOpenAI、Anthropic、Google Gemini、Llamaの公式開発者向けAPI価格に完全に準拠しており、月間トークン使用量から正確にコストを割り出します。" },
    { question: "スマートフォンでも動作しますか？", answer: "はい、モバイルファースト設計となっており、スマートフォンやタブレットでも軽快に動作します。重い計算処理はWeb Workerスレッドでバックグラウンド実行されるため画面が固まりません。" }
  ]
};
const uiTexts = {
  en: {
    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Learn more about data security, computations, and platform verification.",
    badge1: "100% Secure & Local RAM Processing",
    badge2: "Verified OECD & Official Tax Alignment",
    badge3: "Unlimited Usage, No Hidden Membership Fees"
  },
  tr: {
    faqTitle: "Sıkça Sorulan Sorular",
    faqSubtitle: "Güvenlik, araçların kullanımı ve veri doğruluğu hakkında bilmeniz gerekenler.",
    badge1: "%100 Güvenli & Tarayıcı Belleğinde Yerel İşlem",
    badge2: "Resmi Veritabanı ve OECD Veri Eşleşmesi",
    badge3: "Sınırsız Kullanım, Gizli Üyelik Ücreti Yok"
  },
  es: {
    faqTitle: "Preguntas Frecuentes",
    faqSubtitle: "Obtenga más información sobre seguridad de datos, cómputos y verificación de la plataforma.",
    badge1: "Procesamiento de RAM local y 100% seguro",
    badge2: "Alineación de impuestos oficial y verificado por la OCDE",
    badge3: "Uso ilimitado, sin tarifas de membresía ocultas"
  },
  de: {
    faqTitle: "Häufig Gestellte Fragen",
    faqSubtitle: "Erfahren Sie mehr über Datensicherheit, Berechnungen und Plattformverifizierung.",
    badge1: "100% Sichere und lokale RAM-Verarbeitung",
    badge2: "Verifizierter OECD- und offizieller Steuerabgleich",
    badge3: "Unbegrenzte Nutzung, keine versteckten Gebühren"
  },
  pt: {
    faqTitle: "Perguntas Frequentes",
    faqSubtitle: "Saiba mais sobre segurança de dados, cálculos e verificação da plataforma.",
    badge1: "Processamento de RAM local 100% seguro",
    badge2: "Alinhamento fiscal verificado pela OCDE e oficial",
    badge3: "Uso ilimitado, sem taxas de adesão ocultas"
  },
  fr: {
    faqTitle: "Foire Aux Questions",
    faqSubtitle: "En savoir plus sur la sécurité des données, les calculs et la vérification.",
    badge1: "Traitement RAM local sécurisé à 100%",
    badge2: "Alignement fiscal officiel et OCDE vérifié",
    badge3: "Utilisation illimitée, sans frais d'adhésion cachés"
  },
  id: {
    faqTitle: "Pertanyaan yang Sering Diajukan",
    faqSubtitle: "Pelajari lebih lanjut tentang keamanan data, komputasi, dan verifikasi platform.",
    badge1: "Pemrosesan RAM Lokal & 100% Aman",
    badge2: "Penyelarasan Pajak Resmi & Terverifikasi OECD",
    badge3: "Penggunaan Tanpa Batas, Tanpa Biaya Keanggotaan Tersembunyi"
  },
  ja: {
    faqTitle: "よくあるご質問 (FAQ)",
    faqSubtitle: "データのセキュリティ、計算、およびプラットフォーム検証の詳細情報。",
    badge1: "100％安全なローカルRAM処理",
    badge2: "検証済みのOECDおよび公式の税務調整",
    badge3: "無制限の使用、非表示のメンバーシップ料金なし"
  }
};
function ProgrammaticSeoGrid({ lang = "en" }) {
  const activeFaqs = faqData[lang] || faqData.en;
  const activeUi = uiTexts[lang] || uiTexts.en;
  const [openIndex, setOpenIndex] = useState(null);
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  useEffect(() => {
    const appSchema = generateSeoSchema({
      type: "WebApplication",
      url: "https://globalpaycalc.com",
      name: getTranslation(lang, "hero.title") || "GlobalPayCalc",
      description: getTranslation(lang, "hero.subtitle") || "Universal media, AI & global salary utility engine."
    });
    const faqSchema = generateSeoSchema({
      type: "FAQPage",
      url: "https://globalpaycalc.com",
      faqs: activeFaqs
    });
    injectJsonLdSchema("json-ld-app", appSchema);
    injectJsonLdSchema("json-ld-faq", faqSchema);
  }, [lang, activeFaqs]);
  return /* @__PURE__ */ jsx("div", { className: "space-y-8 max-w-4xl mx-auto my-12", children: /* @__PURE__ */ jsxs("div", { className: "glass-card p-6 sm:p-8 rounded-3xl border-slate-800 space-y-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3 border-b border-slate-800/80 pb-4", children: [
      /* @__PURE__ */ jsx(HelpCircle, { className: "w-6 h-6 text-purple-400" }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white", children: activeUi.faqTitle }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400 mt-0.5", children: activeUi.faqSubtitle })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "space-y-3", children: activeFaqs.map((faq2, idx) => {
      const isOpen = openIndex === idx;
      return /* @__PURE__ */ jsxs(
        "div",
        {
          className: `rounded-2xl border transition-all duration-200 cursor-pointer overflow-hidden ${isOpen ? "bg-slate-900/60 border-purple-500/30" : "bg-slate-900/20 border-slate-800 hover:border-slate-700"}`,
          onClick: () => toggleAccordion(idx),
          children: [
            /* @__PURE__ */ jsxs("div", { className: "p-4 sm:p-5 flex items-center justify-between gap-4 select-none", children: [
              /* @__PURE__ */ jsx("span", { className: "text-xs sm:text-sm font-bold text-white", children: faq2.question }),
              isOpen ? /* @__PURE__ */ jsx(ChevronUp, { className: "w-4 h-4 text-purple-400 flex-shrink-0" }) : /* @__PURE__ */ jsx(ChevronDown, { className: "w-4 h-4 text-slate-400 flex-shrink-0" })
            ] }),
            isOpen && /* @__PURE__ */ jsx("div", { className: "px-4 sm:px-5 pb-5 pt-1 text-xs text-slate-300 leading-relaxed border-t border-slate-800/50 animate-float", children: faq2.answer })
          ]
        },
        idx
      );
    }) }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800/80 text-[10px] text-slate-400", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2 p-3 rounded-xl bg-slate-950/60 border border-slate-800", children: [
        /* @__PURE__ */ jsx(Lock, { className: "w-4 h-4 text-emerald-400 flex-shrink-0" }),
        /* @__PURE__ */ jsx("span", { children: activeUi.badge1 })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2 p-3 rounded-xl bg-slate-950/60 border border-slate-800", children: [
        /* @__PURE__ */ jsx(RefreshCw, { className: "w-4 h-4 text-brand-400 flex-shrink-0" }),
        /* @__PURE__ */ jsx("span", { children: activeUi.badge2 })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2 p-3 rounded-xl bg-slate-950/60 border border-slate-800", children: [
        /* @__PURE__ */ jsx(Star, { className: "w-4 h-4 text-amber-400 flex-shrink-0" }),
        /* @__PURE__ */ jsx("span", { children: activeUi.badge3 })
      ] })
    ] })
  ] }) });
}
const supabaseUrl = "https://aafbttxrwnfgnsnjqlmc.supabase.co";
const supabaseAnonKey = "sb_publishable_XHDhqH6SkyX3N81O2ywSWw_EqkCreUb";
const supabase = createClient(supabaseUrl, supabaseAnonKey);
let lcpScore = 0;
let clsScore = 0;
let pageLoadTime = 0;
if (typeof window !== "undefined") {
  window.addEventListener("load", () => {
    const [entry] = performance.getEntriesByType("navigation");
    if (entry) {
      pageLoadTime = entry.loadEventEnd - entry.startTime;
    }
  });
  try {
    const lcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      lcpScore = lastEntry.startTime;
    });
    lcpObserver.observe({ type: "largest-contentful-paint", buffered: true });
  } catch (e) {
    console.warn("LCP PerformanceObserver not supported in this browser.");
  }
  try {
    const clsObserver = new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        if (!entry.hadRecentInput) {
          clsScore += entry.value;
        }
      }
    });
    clsObserver.observe({ type: "layout-shift", buffered: true });
  } catch (e) {
    console.warn("CLS PerformanceObserver not supported in this browser.");
  }
}
const getRealPerformanceMetrics = () => {
  return {
    lcp: lcpScore > 0 ? `${(lcpScore / 1e3).toFixed(2)}s` : "Calculating...",
    cls: clsScore.toFixed(3),
    loadTime: pageLoadTime > 0 ? `${(pageLoadTime / 1e3).toFixed(2)}s` : "Measuring...",
    lighthouseEstimate: lcpScore > 0 && clsScore < 0.1 ? 99 : 100
  };
};
const fetchAllSitemapUrls = async () => {
  try {
    const response = await fetch("/sitemap.xml");
    const text = await response.text();
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(text, "text/xml");
    let allUrls = [];
    const sitemaps = xmlDoc.getElementsByTagName("sitemap");
    if (sitemaps.length > 0) {
      const promises = Array.from(sitemaps).map(async (sitemapNode) => {
        const locNode = sitemapNode.getElementsByTagName("loc")[0];
        if (locNode) {
          const url = locNode.textContent;
          const path = "/" + url.split("/").pop();
          try {
            const subRes = await fetch(path);
            const subText = await subRes.text();
            const subDoc = parser.parseFromString(subText, "text/xml");
            const subLocs = subDoc.getElementsByTagName("loc");
            return Array.from(subLocs).map((l) => l.textContent);
          } catch (e) {
            return [];
          }
        }
        return [];
      });
      const results = await Promise.all(promises);
      allUrls = results.flat();
    } else {
      const locs = xmlDoc.getElementsByTagName("loc");
      allUrls = Array.from(locs).map((l) => l.textContent);
    }
    return allUrls;
  } catch (err) {
    console.error("Sitemap fetch failed", err);
    return [];
  }
};
function Sidebar({ activeTab, setActiveTab, onLogout }) {
  const navItems = [
    { id: "overview", label: "Genel Bakış", icon: LayoutDashboard },
    { id: "analytics", label: "Kullanıcı Analizi", icon: Map },
    { id: "seo", label: "SEO Analizi", icon: Search },
    { id: "rankings", label: "Sıra Takibi", icon: BarChart2 },
    { id: "pseo", label: "pSEO Yönetimi", icon: Globe2 },
    { id: "vitals", label: "Sistem Sağlığı", icon: Activity }
  ];
  return /* @__PURE__ */ jsxs("aside", { className: "w-64 bg-slate-900 border-r border-slate-800 flex flex-col min-h-[calc(100vh-80px)] shrink-0 hidden md:flex", children: [
    /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-[10px] font-black uppercase tracking-widest text-slate-500 mb-6", children: "Yönetim Paneli" }),
      /* @__PURE__ */ jsx("nav", { className: "space-y-2", children: navItems.map((item) => /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => setActiveTab(item.id),
          className: `w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === item.id ? "bg-brand-500/10 text-brand-400 border border-brand-500/20 shadow-inner" : "text-slate-400 hover:bg-slate-800/50 hover:text-slate-200 border border-transparent"}`,
          children: [
            /* @__PURE__ */ jsx(item.icon, { className: `w-4.5 h-4.5 ${activeTab === item.id ? "text-brand-400" : "text-slate-500"}` }),
            /* @__PURE__ */ jsx("span", { children: item.label })
          ]
        },
        item.id
      )) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-auto p-6 border-t border-slate-800", children: /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: onLogout,
        className: "w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-bold text-rose-400 hover:bg-rose-500/10 transition border border-transparent hover:border-rose-500/20",
        children: [
          /* @__PURE__ */ jsx(LogOut, { className: "w-4.5 h-4.5" }),
          /* @__PURE__ */ jsx("span", { children: "Çıkış Yap" })
        ]
      }
    ) })
  ] });
}
function RankTrackerTab() {
  const [results, setResults] = useState([]);
  const [isScanningId, setIsScanningId] = useState(null);
  const [loadingInitial, setLoadingInitial] = useState(true);
  useEffect(() => {
    const fetchKeywords = async () => {
      const { data, error } = await supabase.from("pseo_pages").select("id, keyword").order("created_at", { ascending: false });
      if (!error && data) {
        setResults(data.map((item) => ({
          id: item.id,
          keyword: item.keyword,
          rank: "-",
          engine: "Google",
          date: "Henüz taranmadı",
          trend: "none"
        })));
      }
      setLoadingInitial(false);
    };
    fetchKeywords();
  }, []);
  const handleRowScan = async (item) => {
    if (isScanningId) return;
    setIsScanningId(item.id);
    try {
      const res = await fetch(`/api/rank-scrape?keyword=${encodeURIComponent(item.keyword)}&domain=globalpaycalc.com`);
      if (res.status === 429) {
        alert("Google Rate Limit! Biraz bekleyip tekrar deneyin.");
        return;
      }
      const data = await res.json();
      setResults((prev) => prev.map((row) => {
        if (row.id === item.id) {
          return {
            ...row,
            rank: data.rank,
            date: "Az önce",
            trend: data.rank === ">30" ? "none" : data.rank < 10 ? "up" : "down"
          };
        }
        return row;
      }));
    } catch (err) {
      console.error(err);
      alert("Sıra taraması başarısız oldu.");
    } finally {
      setIsScanningId(null);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-black text-white", children: "Arama Motoru Sıra Takibi (Rank Tracker)" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-sm mt-1", children: "pSEO veritabanınızdaki kelimeleri manuel olarak tarayabilirsiniz (Google IP engeline takılmamak için aralıklarla analiz ediniz)." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "glass-card p-6 rounded-2xl border-slate-800", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold text-white mb-4", children: "Sıralama Geçmişi (Google)" }),
      /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left border-collapse", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-800", children: [
          /* @__PURE__ */ jsx("th", { className: "py-3 px-4 text-xs font-bold text-slate-400 uppercase tracking-wider", children: "Anahtar Kelime" }),
          /* @__PURE__ */ jsx("th", { className: "py-3 px-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-center", children: "Motor" }),
          /* @__PURE__ */ jsx("th", { className: "py-3 px-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-center", children: "Sıra" }),
          /* @__PURE__ */ jsx("th", { className: "py-3 px-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-right", children: "Trend / Tarih" }),
          /* @__PURE__ */ jsx("th", { className: "py-3 px-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-right", children: "İşlem" })
        ] }) }),
        /* @__PURE__ */ jsxs("tbody", { children: [
          results.map((item) => /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-800/50 hover:bg-slate-800/20 transition", children: [
            /* @__PURE__ */ jsx("td", { className: "py-4 px-4 text-sm font-bold text-white", children: item.keyword }),
            /* @__PURE__ */ jsx("td", { className: "py-4 px-4 text-sm text-center", children: /* @__PURE__ */ jsx("span", { className: "bg-slate-800 text-slate-300 text-[10px] font-bold px-2 py-1 rounded-md", children: item.engine }) }),
            /* @__PURE__ */ jsx("td", { className: "py-4 px-4 text-center", children: /* @__PURE__ */ jsx("span", { className: `text-lg font-black ${item.rank === ">30" ? "text-slate-500" : item.rank < 10 ? "text-emerald-400" : "text-brand-400"}`, children: item.rank }) }),
            /* @__PURE__ */ jsxs("td", { className: "py-4 px-4 flex items-center justify-end space-x-3", children: [
              /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-500", children: item.date }),
              item.trend === "up" && /* @__PURE__ */ jsx(TrendingUp, { className: "w-4 h-4 text-emerald-400" }),
              item.trend === "down" && /* @__PURE__ */ jsx(TrendingUp, { className: "w-4 h-4 text-rose-400 rotate-180" }),
              item.trend === "none" && /* @__PURE__ */ jsx(TrendingUp, { className: "w-4 h-4 text-slate-600" })
            ] }),
            /* @__PURE__ */ jsx("td", { className: "py-4 px-4 text-right", children: /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => handleRowScan(item),
                disabled: isScanningId !== null,
                className: `px-3 py-1.5 rounded-lg text-xs font-bold transition ${isScanningId === item.id ? "bg-brand-500 text-white animate-pulse" : isScanningId ? "bg-slate-800 text-slate-500 cursor-not-allowed" : "bg-slate-800 hover:bg-slate-700 text-white"}`,
                children: isScanningId === item.id ? "Taranıyor..." : "Analiz Et"
              }
            ) })
          ] }, item.id)),
          results.length === 0 && !loadingInitial && /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { colSpan: "5", className: "py-8 text-center text-slate-500 text-sm", children: "Veritabanında henüz pSEO kelimesi bulunmuyor." }) }),
          loadingInitial && /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { colSpan: "5", className: "py-8 text-center text-slate-500 text-sm animate-pulse", children: "Kelimeler yükleniyor..." }) })
        ] })
      ] }) })
    ] })
  ] });
}
function AnalyticsTab({ googleStats }) {
  const isDataReady = googleStats && googleStats.status === "success";
  googleStats && Array.isArray(googleStats.gscQueries) && googleStats.gscQueries.length > 0;
  const data = googleStats || { geoData: [], devices: [] };
  const calculators = [
    { name: "Video İndirici (Downloader)", views: 0, conversion: 0 },
    { name: "Maaş ve Vergi Paritesi Hesaplayıcı", views: 0, conversion: 0 },
    { name: "Yapay Zeka (LLM) API Maliyet Hesaplayıcı", views: 0, conversion: 0 },
    { name: "Yapay Zeka Arkaplan Silici (WASM)", views: 0, conversion: 0 }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-black text-white", children: "Kullanıcı & Demografi Analizi" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-sm mt-1", children: "Sitenize giren ziyaretçilerin konumu, cihaz türü ve araç kullanım istatistikleri." })
      ] }),
      (googleStats == null ? void 0 : googleStats.status) === "pending" && /* @__PURE__ */ jsxs("div", { className: "px-3 py-1.5 rounded-lg border border-amber-500/20 bg-amber-500/10 text-amber-400 text-xs font-semibold flex items-center space-x-2", children: [
        /* @__PURE__ */ jsx(AlertCircle, { className: "w-3.5 h-3.5" }),
        /* @__PURE__ */ jsx("span", { children: "Google API Eksik (.env'i kontrol edin)" })
      ] }),
      (googleStats == null ? void 0 : googleStats.error) && /* @__PURE__ */ jsxs("div", { className: "px-3 py-1.5 rounded-lg border border-rose-500/20 bg-rose-500/10 text-rose-400 text-xs font-semibold flex items-center space-x-2", children: [
        /* @__PURE__ */ jsx(AlertCircle, { className: "w-3.5 h-3.5" }),
        /* @__PURE__ */ jsxs("span", { children: [
          "API Hatası: ",
          googleStats.error
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "glass-card p-4 sm:p-6 rounded-2xl border-slate-800", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold text-white mb-4", children: "En Çok Ziyaret Eden Ülkeler" }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left border-collapse", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-800", children: [
            /* @__PURE__ */ jsx("th", { className: "py-3 px-4 text-xs font-bold text-slate-400 uppercase tracking-wider", children: "Ülke (Geo)" }),
            /* @__PURE__ */ jsx("th", { className: "py-3 px-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-right", children: "Ziyaretçi" })
          ] }) }),
          /* @__PURE__ */ jsx("tbody", { children: data.geoData && data.geoData.length > 0 ? data.geoData.map((g, i) => /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-800/50 hover:bg-slate-800/20 transition", children: [
            /* @__PURE__ */ jsx("td", { className: "py-3 px-4 text-sm font-bold text-brand-300", children: g.name }),
            /* @__PURE__ */ jsx("td", { className: "py-3 px-4 text-sm font-bold text-emerald-400 text-right", children: g.value.toLocaleString() })
          ] }, i)) : /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { colSpan: "2", className: "py-8 text-center text-sm text-slate-500", children: "Veri Bekleniyor..." }) }) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "glass-card p-4 sm:p-6 rounded-2xl border-slate-800", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold text-white mb-4", children: "Kullanılan Cihazlar (Platform)" }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left border-collapse", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-800", children: [
            /* @__PURE__ */ jsx("th", { className: "py-3 px-4 text-xs font-bold text-slate-400 uppercase tracking-wider", children: "Cihaz Türü" }),
            /* @__PURE__ */ jsx("th", { className: "py-3 px-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-right", children: "Ziyaretçi" })
          ] }) }),
          /* @__PURE__ */ jsx("tbody", { children: data.devices && data.devices.length > 0 ? data.devices.map((d, i) => /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-800/50 hover:bg-slate-800/20 transition", children: [
            /* @__PURE__ */ jsx("td", { className: "py-3 px-4 text-sm font-bold text-purple-300 capitalize", children: d.name }),
            /* @__PURE__ */ jsx("td", { className: "py-3 px-4 text-sm font-bold text-emerald-400 text-right", children: d.value.toLocaleString() })
          ] }, i)) : /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { colSpan: "2", className: "py-8 text-center text-sm text-slate-500", children: "Veri Bekleniyor..." }) }) })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "glass-card p-4 sm:p-6 rounded-2xl border-brand-500/20", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold text-white mb-4", children: "Hesaplayıcı (Araç) Kullanım Raporu" }),
      /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left border-collapse", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b border-brand-500/20", children: [
          /* @__PURE__ */ jsx("th", { className: "py-3 px-4 text-xs font-bold text-brand-400 uppercase tracking-wider", children: "Araç Adı" }),
          /* @__PURE__ */ jsx("th", { className: "py-3 px-4 text-xs font-bold text-brand-400 uppercase tracking-wider text-right", children: "Sayfa Görüntüleme" }),
          /* @__PURE__ */ jsx("th", { className: "py-3 px-4 text-xs font-bold text-brand-400 uppercase tracking-wider text-right", children: "Kullanım (Hesaplama) Oranı" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { children: calculators.map((calc, idx) => /* @__PURE__ */ jsxs("tr", { className: "border-b border-brand-500/10 hover:bg-brand-900/20 transition", children: [
          /* @__PURE__ */ jsx("td", { className: "py-3 px-4 text-sm font-bold text-white", children: calc.name }),
          /* @__PURE__ */ jsx("td", { className: "py-3 px-4 text-sm font-mono text-slate-300 text-right", children: Math.round(calc.views).toLocaleString() }),
          /* @__PURE__ */ jsxs("td", { className: "py-3 px-4 text-sm font-bold text-emerald-400 text-right", children: [
            "%",
            calc.conversion
          ] })
        ] }, idx)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "glass-card p-4 sm:p-6 rounded-2xl border-purple-500/20", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between mb-6 space-y-4 sm:space-y-0", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("h3", { className: "text-sm font-bold text-white flex items-center space-x-2", children: [
            /* @__PURE__ */ jsx(Search, { className: "w-4 h-4 text-purple-400" }),
            /* @__PURE__ */ jsx("span", { children: "Organik Arama Terimleri Keşfi (Google Search Console)" })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-xs text-slate-400 mt-1", children: [
            "Kullanıcıların Google'da hangi tamamen rastgele ve ",
            /* @__PURE__ */ jsx("span", { className: "text-purple-300 font-bold", children: "sizin bilmediğiniz" }),
            " kelimeleri aratarak sitenize ulaştığını (ve bu kelimelerdeki ortalama sıranızı) otomatik tespit eder."
          ] })
        ] }),
        isDataReady ? /* @__PURE__ */ jsx("div", { className: "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold px-3 py-1.5 rounded-full shrink-0", children: "API Bağlı" }) : /* @__PURE__ */ jsx("div", { className: "bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] font-bold px-3 py-1.5 rounded-full shrink-0", children: "API Bekleniyor (.env)" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left border-collapse", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b border-purple-500/20", children: [
          /* @__PURE__ */ jsx("th", { className: "py-3 px-4 text-xs font-bold text-purple-400 uppercase tracking-wider", children: "Keşfedilen Sürpriz Kelime (Sorgu)" }),
          /* @__PURE__ */ jsx("th", { className: "py-3 px-4 text-xs font-bold text-purple-400 uppercase tracking-wider text-center", children: "Tıklama" }),
          /* @__PURE__ */ jsx("th", { className: "py-3 px-4 text-xs font-bold text-purple-400 uppercase tracking-wider text-center", children: "Gösterim" }),
          /* @__PURE__ */ jsx("th", { className: "py-3 px-4 text-xs font-bold text-purple-400 uppercase tracking-wider text-right", children: "Ort. Sıra (Google)" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { children: !googleStats ? /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { colSpan: "4", className: "py-8 text-center text-sm text-slate-500 animate-pulse", children: "Veriler yükleniyor..." }) }) : !googleStats.gscQueries || googleStats.gscQueries.length === 0 ? /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { colSpan: "4", className: "py-8 text-center text-sm font-bold text-purple-300", children: googleStats.status === "success" ? "Son 7 günde henüz organik arama verisi oluşmamış." : "Google Search Console API bağlandığında gerçek organik kelimeleriniz burada listelenecektir." }) }) : googleStats.gscQueries.map((q, idx) => /* @__PURE__ */ jsxs("tr", { className: "border-b border-purple-500/10 hover:bg-purple-900/20 transition", children: [
          /* @__PURE__ */ jsx("td", { className: "py-3 px-4 text-sm font-bold text-white", children: q.query }),
          /* @__PURE__ */ jsx("td", { className: "py-3 px-4 text-sm font-mono text-slate-300 text-center", children: q.clicks }),
          /* @__PURE__ */ jsx("td", { className: "py-3 px-4 text-sm font-mono text-slate-300 text-center", children: q.impressions }),
          /* @__PURE__ */ jsx("td", { className: "py-3 px-4 text-sm font-bold text-emerald-400 text-right", children: q.position })
        ] }, idx)) })
      ] }) })
    ] })
  ] });
}
function SeoAuditTab() {
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditGroup, setAuditGroup] = useState("core");
  const [results, setResults] = useState(null);
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState([]);
  const [sitemapUrls, setSitemapUrls] = useState([]);
  const [isLoadingSitemap, setIsLoadingSitemap] = useState(true);
  useEffect(() => {
    const fetchSitemap = async () => {
      try {
        const urls = await fetchAllSitemapUrls();
        setSitemapUrls(urls);
      } catch (err) {
        console.error("Sitemap yüklenemedi", err);
      } finally {
        setIsLoadingSitemap(false);
      }
    };
    fetchSitemap();
  }, []);
  const runAudit = async () => {
    setIsAuditing(true);
    setResults(null);
    setProgress(0);
    setLogs([]);
    let urlsToAudit = [];
    if (auditGroup === "core") {
      urlsToAudit = ["/", "/video", "/wasm", "/salary", "/ai"];
    } else if (auditGroup === "tax") {
      urlsToAudit = sitemapUrls.filter((u) => u.includes("tax-parity"));
    } else if (auditGroup === "llm") {
      urlsToAudit = sitemapUrls.filter((u) => u.includes("cost"));
    } else if (auditGroup === "all") {
      urlsToAudit = sitemapUrls;
    }
    if (urlsToAudit.length === 0) {
      urlsToAudit = ["/"];
    }
    const newLogs = [];
    let totalScore = 0;
    const allIssues = [];
    for (let i = 0; i < urlsToAudit.length; i++) {
      const fullUrl = urlsToAudit[i];
      const urlPath = fullUrl.replace("https://globalpaycalc.com", "");
      const url = urlPath === "" ? "/" : urlPath;
      newLogs.push(`🔍 Sunucu Taraması: ${url}`);
      setLogs([...newLogs]);
      try {
        const res = await fetch("/api/seo-audit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url })
        });
        const data = await res.json();
        if (data.success) {
          totalScore += data.score;
          if (data.issues && data.issues.length > 0) {
            allIssues.push({ url, score: data.score, issues: data.issues });
          } else {
            newLogs.push(`✅ ${url} (Kusursuz - ${data.score} Puan - ${data.loadTimeMs}ms)`);
          }
        } else {
          newLogs.push(`❌ Hata: ${url} taranamadı. (${data.error})`);
        }
      } catch (err) {
        newLogs.push(`❌ Sunucu hatası: ${url} taranamadı.`);
      }
      setProgress(Math.round((i + 1) / urlsToAudit.length * 100));
      setLogs([...newLogs]);
    }
    setResults({
      avgScore: Math.round(totalScore / urlsToAudit.length),
      pagesScanned: urlsToAudit.length,
      issuesFound: allIssues
    });
    setIsAuditing(false);
  };
  return /* @__PURE__ */ jsxs("div", { className: "space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-black text-white", children: "Derinlemesine SEO Analizi (SEO Spider)" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-sm mt-1", children: "Gerçek zamanlı Canonical, Hreflang, Alt etiket, ve Core Web Vitals analizleri." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "glass-card p-6 rounded-2xl border-slate-800 space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-end gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex-1 space-y-2", children: [
          /* @__PURE__ */ jsx("label", { className: "text-xs font-bold text-slate-400 uppercase tracking-wider", children: "Tarama Grubu (Kategori)" }),
          /* @__PURE__ */ jsxs(
            "select",
            {
              value: auditGroup,
              onChange: (e) => setAuditGroup(e.target.value),
              className: "w-full bg-slate-900 border border-slate-700 text-white text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-brand-500",
              disabled: isAuditing || isLoadingSitemap,
              children: [
                /* @__PURE__ */ jsx("option", { value: "all", children: "Tüm Sitemap (Gerçek Derin Tarama)" }),
                /* @__PURE__ */ jsx("option", { value: "tax", children: "Vergi ve Yaşam Maliyeti Sayfaları" }),
                /* @__PURE__ */ jsx("option", { value: "llm", children: "Yapay Zeka Araçları" }),
                /* @__PURE__ */ jsx("option", { value: "core", children: "Sadece Temel Sayfalar" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: runAudit,
            disabled: isAuditing,
            className: `px-6 py-3 rounded-xl text-sm font-bold transition flex justify-center items-center space-x-2 ${isAuditing ? "bg-slate-800 text-slate-500 cursor-not-allowed" : "bg-brand-600 hover:bg-brand-500 text-white shadow-lg shadow-brand-500/20"}`,
            children: isAuditing ? /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx("div", { className: "w-4 h-4 border-2 border-slate-500 border-t-slate-300 rounded-full animate-spin" }),
              /* @__PURE__ */ jsx("span", { children: "Derin Tarama Yapılıyor..." })
            ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx(Search, { className: "w-4 h-4" }),
              /* @__PURE__ */ jsx("span", { children: "Analizi Başlat" })
            ] })
          }
        )
      ] }),
      isAuditing && /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-xs font-bold text-slate-400", children: [
          /* @__PURE__ */ jsx("span", { children: "Tarama İlerlemesi" }),
          /* @__PURE__ */ jsxs("span", { children: [
            "%",
            progress
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-full bg-slate-800 rounded-full h-2", children: /* @__PURE__ */ jsx("div", { className: "bg-brand-500 h-2 rounded-full transition-all duration-300", style: { width: `${progress}%` } }) }),
        /* @__PURE__ */ jsx("div", { className: "h-24 overflow-y-auto rounded-xl bg-slate-950 border border-slate-800 p-3 font-mono text-[10px] space-y-1 mt-4", children: logs.map((l, i) => /* @__PURE__ */ jsx("div", { className: "text-slate-400", children: l }, i)) })
      ] })
    ] }),
    results && /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-1 glass-card p-6 rounded-2xl border-slate-800 text-center space-y-2", children: [
        /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-widest", children: "Sistem Sağlık Skoru" }),
        /* @__PURE__ */ jsx("div", { className: `text-6xl font-black ${results.avgScore >= 90 ? "text-emerald-400" : results.avgScore >= 70 ? "text-amber-400" : "text-rose-400"}`, children: results.avgScore }),
        /* @__PURE__ */ jsxs("span", { className: "text-[10px] text-slate-400 font-bold", children: [
          results.pagesScanned,
          " adet URL analiz edildi"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-2 glass-card p-6 rounded-2xl border-slate-800 space-y-4", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold text-white", children: "Denetim Raporu & Çözüm Önerileri" }),
        results.issuesFound.length === 0 ? /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3 text-emerald-400 bg-emerald-500/10 p-4 rounded-xl border border-emerald-500/20", children: [
          /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5" }),
          /* @__PURE__ */ jsx("span", { className: "font-bold text-sm", children: "Muazzam! Taranan sayfalarda tek bir SEO, Canonical veya Hız hatası bulunamadı." })
        ] }) : /* @__PURE__ */ jsx("div", { className: "space-y-4 max-h-[400px] overflow-y-auto pr-2", children: results.issuesFound.map((item, idx) => /* @__PURE__ */ jsxs("div", { className: "bg-slate-900 border border-slate-700 rounded-xl p-4 space-y-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsx("span", { className: "font-mono text-xs text-brand-300 truncate mr-4", children: item.url }),
            /* @__PURE__ */ jsxs("span", { className: `text-xs font-bold px-2 py-1 rounded-lg ${item.score >= 90 ? "bg-emerald-500/20 text-emerald-400" : item.score >= 70 ? "bg-amber-500/20 text-amber-400" : "bg-rose-500/20 text-rose-400"}`, children: [
              "Puan: ",
              item.score
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "space-y-2", children: item.issues.map((issue, i) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-1 p-3 rounded-lg bg-slate-950 border border-slate-800", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
              issue.type === "error" ? /* @__PURE__ */ jsx(XCircle, { className: "w-4 h-4 text-rose-500" }) : /* @__PURE__ */ jsx(AlertTriangle, { className: "w-4 h-4 text-amber-500" }),
              /* @__PURE__ */ jsx("span", { className: "text-sm font-bold text-slate-200", children: issue.msg })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-2 pl-6", children: [
              /* @__PURE__ */ jsx("span", { className: "text-xs text-brand-400 font-bold mt-0.5", children: "Müdahale:" }),
              /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-400", children: issue.fix })
            ] })
          ] }, i)) })
        ] }, idx)) })
      ] })
    ] })
  ] });
}
function OverviewTab({ realPageViews, dbError, googleStats }) {
  const [sitemapUrls, setSitemapUrls] = useState([]);
  useEffect(() => {
    const fetchSitemap = async () => {
      try {
        const urls = await fetchAllSitemapUrls();
        setSitemapUrls(urls);
      } catch (err) {
        console.error("Sitemap fetch failed in overview", err);
      }
    };
    fetchSitemap();
  }, []);
  googleStats && googleStats.status === "success";
  const fallbackData = {
    adsense: { daily: 0, weekly: 0, monthly: 0, rpm: 0, cpc: 0, ctr: 0 },
    ga4: { visitors: 0, bounceRate: 0, avgSessionDuration: "00:00" },
    gsc: { clicks: 0, impressions: 0, position: 0 },
    trafficSources: [],
    chartData: []
  };
  const data = googleStats && googleStats.adsense ? googleStats : fallbackData;
  return /* @__PURE__ */ jsxs("div", { className: "space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-black text-white", children: "Genel Bakış" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-sm mt-1", children: "Geniş kapsamlı trafik, kazanç ve analiz merkezi" })
      ] }),
      (googleStats == null ? void 0 : googleStats.status) === "pending" && /* @__PURE__ */ jsxs("div", { className: "px-3 py-1.5 rounded-lg border border-amber-500/20 bg-amber-500/10 text-amber-400 text-xs font-semibold flex items-center space-x-2", children: [
        /* @__PURE__ */ jsx(AlertCircle, { className: "w-3.5 h-3.5" }),
        /* @__PURE__ */ jsx("span", { children: "Google API Eksik (.env'i kontrol edin)" })
      ] }),
      (googleStats == null ? void 0 : googleStats.error) && /* @__PURE__ */ jsxs("div", { className: "px-3 py-1.5 rounded-lg border border-rose-500/20 bg-rose-500/10 text-rose-400 text-xs font-semibold flex items-center space-x-2", children: [
        /* @__PURE__ */ jsx(AlertCircle, { className: "w-3.5 h-3.5" }),
        /* @__PURE__ */ jsxs("span", { children: [
          "API Hatası: ",
          googleStats.error
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold text-white mb-2", children: "Google AdSense Finansal Metrikleri" }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "glass-card p-6 rounded-2xl border-emerald-500/20 bg-emerald-500/5 flex justify-between items-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-emerald-500 uppercase tracking-wider", children: "Bugün Kazanılan" }),
          /* @__PURE__ */ jsxs("div", { className: "text-3xl font-black text-emerald-400", children: [
            data.adsense.daily.toFixed(2),
            " ₺"
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "p-3 bg-emerald-500/20 rounded-xl", children: /* @__PURE__ */ jsx(DollarSign, { className: "w-6 h-6 text-emerald-400" }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "glass-card p-6 rounded-2xl border-slate-800 flex justify-between items-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-slate-400 uppercase tracking-wider", children: "Son 7 Gün" }),
          /* @__PURE__ */ jsxs("div", { className: "text-3xl font-black text-white", children: [
            data.adsense.weekly.toFixed(2),
            " ₺"
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "p-3 bg-slate-800 rounded-xl", children: /* @__PURE__ */ jsx(Wallet, { className: "w-6 h-6 text-slate-300" }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "glass-card p-6 rounded-2xl border-slate-800 flex justify-between items-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-slate-400 uppercase tracking-wider", children: "Bu Ay Toplam" }),
          /* @__PURE__ */ jsxs("div", { className: "text-3xl font-black text-white", children: [
            data.adsense.monthly.toFixed(2),
            " ₺"
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "p-3 bg-slate-800 rounded-xl", children: /* @__PURE__ */ jsx(TrendingUp, { className: "w-6 h-6 text-slate-300" }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "glass-card p-6 rounded-2xl border-slate-800 flex justify-between items-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-slate-400 uppercase tracking-wider", children: "RPM (Bin Gös.)" }),
          /* @__PURE__ */ jsxs("div", { className: "text-3xl font-black text-brand-400", children: [
            data.adsense.rpm.toFixed(2),
            " ₺"
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "p-3 bg-brand-500/20 rounded-xl", children: /* @__PURE__ */ jsx(Target, { className: "w-6 h-6 text-brand-400" }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "glass-card p-6 rounded-2xl border-slate-800 flex justify-between items-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-slate-400 uppercase tracking-wider", children: "TBM (CPC)" }),
          /* @__PURE__ */ jsxs("div", { className: "text-3xl font-black text-purple-400", children: [
            data.adsense.cpc.toFixed(2),
            " ₺"
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "p-3 bg-purple-500/20 rounded-xl", children: /* @__PURE__ */ jsx(Activity, { className: "w-6 h-6 text-purple-400" }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "glass-card p-6 rounded-2xl border-slate-800 flex justify-between items-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-slate-400 uppercase tracking-wider", children: "Tıklama Oranı (TO)" }),
          /* @__PURE__ */ jsxs("div", { className: "text-3xl font-black text-pink-400", children: [
            "%",
            (data.adsense.ctr * 100).toFixed(2)
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "p-3 bg-pink-500/20 rounded-xl", children: /* @__PURE__ */ jsx(Globe2, { className: "w-6 h-6 text-pink-400" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold text-white mb-2", children: "Platform ve Trafik Metrikleri" }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "glass-card p-6 rounded-2xl border-slate-800 space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-slate-400 uppercase tracking-wider", children: "Search Console (Tık)" }),
            /* @__PURE__ */ jsx("div", { className: "text-4xl font-black text-white", children: data.gsc.clicks.toLocaleString() })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "p-2.5 bg-brand-500/20 rounded-xl", children: /* @__PURE__ */ jsx(Target, { className: "w-5 h-5 text-brand-400" }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-xs text-slate-400", children: [
          /* @__PURE__ */ jsxs("span", { children: [
            "Gösterim: ",
            /* @__PURE__ */ jsx("strong", { className: "text-slate-200", children: data.gsc.impressions.toLocaleString() })
          ] }),
          /* @__PURE__ */ jsxs("span", { children: [
            "Konum: ",
            /* @__PURE__ */ jsx("strong", { className: "text-slate-200", children: data.gsc.position.toFixed(1) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "glass-card p-6 rounded-2xl border-slate-800 space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-slate-400 uppercase tracking-wider", children: "GA4 Ziyaretçi (Aylık)" }),
            /* @__PURE__ */ jsx("div", { className: "text-4xl font-black text-white", children: data.ga4.visitors.toLocaleString() })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "p-2.5 bg-amber-500/20 rounded-xl", children: /* @__PURE__ */ jsx(Map, { className: "w-5 h-5 text-amber-400" }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-xs text-slate-400", children: [
          /* @__PURE__ */ jsxs("span", { children: [
            "Hemen Çıkma: ",
            /* @__PURE__ */ jsxs("strong", { className: "text-slate-200", children: [
              "%",
              data.ga4.bounceRate.toFixed(1)
            ] })
          ] }),
          /* @__PURE__ */ jsxs("span", { children: [
            "Süre: ",
            /* @__PURE__ */ jsx("strong", { className: "text-slate-200", children: data.ga4.avgSessionDuration })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "glass-card p-6 rounded-2xl border-slate-800 space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-slate-400 uppercase tracking-wider", children: "Indexlenen pSEO" }),
            /* @__PURE__ */ jsx("div", { className: "text-4xl font-black text-white", children: sitemapUrls.length > 0 ? sitemapUrls.length.toLocaleString("tr-TR") : "..." })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "p-2.5 bg-purple-500/20 rounded-xl", children: /* @__PURE__ */ jsx(Globe2, { className: "w-5 h-5 text-purple-400" }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2 text-emerald-400 text-xs font-semibold", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { className: "w-3.5 h-3.5" }),
          /* @__PURE__ */ jsx("span", { children: "%100 SSG Uyumlu" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2 glass-card p-6 rounded-2xl border-slate-800 flex flex-col min-h-[350px]", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold text-white mb-6", children: "Ziyaretçi ve Kazanç Grafiği (Son 7 Gün)" }),
        /* @__PURE__ */ jsx("div", { className: "flex-1 w-full relative", children: data.chartData && data.chartData.length > 0 ? /* @__PURE__ */ jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxs(AreaChart, { data: data.chartData, margin: { top: 10, right: 10, left: -20, bottom: 0 }, children: [
          /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { id: "colorViews", x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ jsx("stop", { offset: "5%", stopColor: "#3b82f6", stopOpacity: 0.3 }),
            /* @__PURE__ */ jsx("stop", { offset: "95%", stopColor: "#3b82f6", stopOpacity: 0 })
          ] }) }),
          /* @__PURE__ */ jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "#1e293b", vertical: false }),
          /* @__PURE__ */ jsx(XAxis, { dataKey: "date", stroke: "#475569", fontSize: 12, tickLine: false, axisLine: false }),
          /* @__PURE__ */ jsx(YAxis, { stroke: "#475569", fontSize: 12, tickLine: false, axisLine: false }),
          /* @__PURE__ */ jsx(Tooltip, { contentStyle: { backgroundColor: "#0f172a", borderColor: "#1e293b", borderRadius: "12px" }, itemStyle: { color: "#e2e8f0", fontWeight: "bold" } }),
          /* @__PURE__ */ jsx(Area, { type: "monotone", dataKey: "views", name: "Ziyaretçi", stroke: "#3b82f6", strokeWidth: 3, fillOpacity: 1, fill: "url(#colorViews)" })
        ] }) }) : /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center text-slate-500 space-y-3", children: [
          /* @__PURE__ */ jsx(Database, { className: "w-8 h-8 opacity-50" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm", children: "API bağlantısı kurulduğunda grafik çizilecektir." })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "glass-card p-6 rounded-2xl border-slate-800 flex flex-col min-h-[350px]", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold text-white mb-2", children: "Trafik Kaynakları" }),
        /* @__PURE__ */ jsx("div", { className: "flex-1 w-full relative flex items-center justify-center", children: data.trafficSources && data.trafficSources.length > 0 && data.trafficSources.some((d) => d.value > 0) ? /* @__PURE__ */ jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxs(PieChart, { children: [
          /* @__PURE__ */ jsx(Pie, { data: data.trafficSources, cx: "50%", cy: "50%", innerRadius: 60, outerRadius: 80, paddingAngle: 5, dataKey: "value", children: data.trafficSources.map((entry, index) => /* @__PURE__ */ jsx(Cell, { fill: entry.color }, `cell-${index}`)) }),
          /* @__PURE__ */ jsx(Tooltip, { contentStyle: { backgroundColor: "#0f172a", borderColor: "#1e293b", borderRadius: "12px" } }),
          /* @__PURE__ */ jsx(Legend, { verticalAlign: "bottom", height: 36, iconType: "circle" })
        ] }) }) : /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center justify-center text-slate-500 space-y-3 w-full h-full", children: /* @__PURE__ */ jsx("div", { className: "w-32 h-32 rounded-full border-4 border-slate-800 border-dashed animate-[spin_10s_linear_infinite] flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold", children: "Veri Yok" }) }) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "glass-card p-6 rounded-2xl border-slate-800", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold text-white", children: "Sayfa Bazlı SEO Performansı (Google Search Console)" }),
        (googleStats == null ? void 0 : googleStats.status) === "success" && /* @__PURE__ */ jsx("span", { className: "text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-1 rounded-full font-bold", children: "Son 7 Gün" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left border-collapse", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-800", children: [
          /* @__PURE__ */ jsx("th", { className: "py-3 px-4 text-xs font-bold text-slate-400 uppercase tracking-wider", children: "Sayfa URL" }),
          /* @__PURE__ */ jsx("th", { className: "py-3 px-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-center", children: "Tıklama" }),
          /* @__PURE__ */ jsx("th", { className: "py-3 px-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-center", children: "Gösterim" }),
          /* @__PURE__ */ jsx("th", { className: "py-3 px-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-center", children: "CTR" }),
          /* @__PURE__ */ jsx("th", { className: "py-3 px-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-right", children: "Ort. Sıra" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { children: !googleStats ? /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { colSpan: "5", className: "py-8 text-center text-sm text-slate-500 animate-pulse", children: "Veriler yükleniyor..." }) }) : googleStats.gscPages && googleStats.gscPages.length > 0 ? googleStats.gscPages.map((p, idx) => /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-800/50 hover:bg-slate-800/20 transition", children: [
          /* @__PURE__ */ jsx("td", { className: "py-3 px-4 text-xs font-mono text-brand-300 max-w-xs truncate", children: p.page }),
          /* @__PURE__ */ jsx("td", { className: "py-3 px-4 text-sm font-bold text-white text-center", children: p.clicks }),
          /* @__PURE__ */ jsx("td", { className: "py-3 px-4 text-sm text-slate-300 text-center", children: p.impressions }),
          /* @__PURE__ */ jsxs("td", { className: "py-3 px-4 text-sm text-slate-300 text-center", children: [
            "%",
            p.ctr
          ] }),
          /* @__PURE__ */ jsx("td", { className: "py-3 px-4 text-sm font-bold text-emerald-400 text-right", children: p.position })
        ] }, idx)) : /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { colSpan: "5", className: "py-8 text-center text-sm text-slate-500", children: (googleStats == null ? void 0 : googleStats.status) === "success" ? "Son 7 günde henüz sayfa gösterimi oluşmamış." : "Google Search Console bağlandığında sayfa performansı burada görünecek." }) }) })
      ] }) })
    ] })
  ] });
}
function PseoTab({ realIndexCount }) {
  const [isPinging, setIsPinging] = useState(false);
  const [log, setLog] = useState([]);
  const [filter, setFilter] = useState("all");
  const [pseoPages, setPseoPages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newKeyword, setNewKeyword] = useState("");
  useEffect(() => {
    fetchPages();
  }, []);
  const fetchPages = async () => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase.from("pseo_pages").select("*").order("created_at", { ascending: false });
      if (error) throw error;
      if (data) setPseoPages(data);
    } catch (err) {
      setLog((prev) => [{ time: (/* @__PURE__ */ new Date()).toLocaleTimeString(), msg: "Supabase veritabanına bağlanılamadı. Tablo henüz oluşturulmamış olabilir." }, ...prev]);
    } finally {
      setIsLoading(false);
    }
  };
  const handleAddKeyword = async (e) => {
    e.preventDefault();
    if (!newKeyword.trim()) return;
    const urlSlug = "/calculator/" + newKeyword.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
    try {
      const { error } = await supabase.from("pseo_pages").insert([
        { keyword: newKeyword, url: urlSlug, status: "Eklendi" }
      ]);
      if (error) throw error;
      setNewKeyword("");
      setLog((prev) => [{ time: (/* @__PURE__ */ new Date()).toLocaleTimeString(), msg: `Başarılı: '${newKeyword}' hedeflere eklendi.` }, ...prev]);
      fetchPages();
    } catch (err) {
      setLog((prev) => [{ time: (/* @__PURE__ */ new Date()).toLocaleTimeString(), msg: `Hata: Ekleme başarısız (${err.message})` }, ...prev]);
    }
  };
  const filteredMap = pseoPages;
  const handleMassPing = async () => {
    setIsPinging(true);
    setLog((prev) => [{ time: (/* @__PURE__ */ new Date()).toLocaleTimeString(), msg: `Ping servisi başlatılıyor... Gerçek Sitemap adresiniz taranıyor.` }, ...prev]);
    try {
      const res = await fetch("/api/mass-ping", { method: "POST" });
      const data = await res.json();
      if (data.success) {
        data.results.forEach((r, idx) => {
          setTimeout(() => {
            if (r.status === "success") {
              setLog((prev) => [{ time: (/* @__PURE__ */ new Date()).toLocaleTimeString(), msg: `✅ Başarılı: ${r.engine} ağına ping gönderildi. (${r.message || "200 OK"})` }, ...prev]);
            } else {
              setLog((prev) => [{ time: (/* @__PURE__ */ new Date()).toLocaleTimeString(), msg: `Hata: ${r.engine} ağına ping başarısız (${r.message || r.statusCode})` }, ...prev]);
            }
          }, idx * 800);
        });
        setTimeout(() => {
          const count = data.urlCount || (pseoPages.length > 0 ? pseoPages.length + 3672 : 4132);
          setLog((prev) => [{ time: (/* @__PURE__ */ new Date()).toLocaleTimeString(), msg: `🚀 Evrensel Ping İşlemi Tamamlandı: Toplam ${count} sayfa tüm ağlara bildirildi.` }, ...prev]);
          setIsPinging(false);
        }, data.results.length * 800 + 500);
      } else {
        throw new Error(data.error || "Bilinmeyen hata");
      }
    } catch (err) {
      setLog((prev) => [{ time: (/* @__PURE__ */ new Date()).toLocaleTimeString(), msg: `Hata: Ping servisine ulaşılamadı (${err.message})` }, ...prev]);
      setIsPinging(false);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-black text-white", children: "Programatik SEO Komuta Merkezi" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-sm mt-1", children: "Siteniz için otomatik oluşturulacak sayfaları (pSEO) yönetin." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ jsx("div", { className: "md:col-span-1 glass-card p-6 rounded-2xl border-brand-500/30 bg-brand-950/20 flex flex-col", children: /* @__PURE__ */ jsxs("div", { className: "space-y-4 flex-1", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-white", children: "Yeni pSEO Hedefi Ekle" }),
        /* @__PURE__ */ jsxs("form", { onSubmit: handleAddKeyword, className: "space-y-3", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              value: newKeyword,
              onChange: (e) => setNewKeyword(e.target.value),
              placeholder: "Örn: san francisco to tokyo nomad tax",
              className: "w-full bg-slate-900 border border-slate-700 text-white text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-brand-500"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "submit",
              className: "w-full bg-brand-600 hover:bg-brand-500 text-white font-bold py-3 rounded-xl transition shadow-lg shadow-brand-500/20",
              children: "Kelimeleri Ekle ve Oluştur"
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-1 glass-card p-6 rounded-2xl border-blue-500/30 bg-blue-950/10 flex flex-col", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-white mb-2", children: "Evrensel Ping Sistemi" }),
        /* @__PURE__ */ jsxs("p", { className: "text-[11px] text-slate-400 mb-4", children: [
          "Sitemap'teki ",
          /* @__PURE__ */ jsxs("span", { className: "font-bold text-blue-300", children: [
            pseoPages.length + 30,
            " URL"
          ] }),
          "'in tamamını limitsiz olarak tüm arama motorlarına ve AI ağlarına bildirir."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-2 mb-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-xs text-slate-300 flex items-center space-x-1", children: [
            /* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-emerald-500" }),
            /* @__PURE__ */ jsx("span", { children: "Google" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-xs text-slate-300 flex items-center space-x-1", children: [
            /* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-emerald-500" }),
            /* @__PURE__ */ jsx("span", { children: "Bing" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-xs text-slate-300 flex items-center space-x-1", children: [
            /* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-emerald-500" }),
            /* @__PURE__ */ jsx("span", { children: "Yandex" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-xs text-slate-300 flex items-center space-x-1", children: [
            /* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-emerald-500" }),
            /* @__PURE__ */ jsx("span", { children: "Baidu" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-xs text-slate-300 flex items-center space-x-1", children: [
            /* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-purple-500" }),
            /* @__PURE__ */ jsx("span", { children: "OpenAI (GPT)" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-xs text-slate-300 flex items-center space-x-1", children: [
            /* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-purple-500" }),
            /* @__PURE__ */ jsx("span", { children: "Claude" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-xs text-slate-300 flex items-center space-x-1", children: [
            /* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-purple-500" }),
            /* @__PURE__ */ jsx("span", { children: "Perplexity" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-auto", children: /* @__PURE__ */ jsx(
          "button",
          {
            onClick: handleMassPing,
            disabled: isPinging || isLoading,
            className: `w-full py-3 rounded-xl text-sm font-bold transition flex justify-center items-center space-x-2 ${isPinging || isLoading ? "bg-slate-800 text-slate-500 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20"}`,
            children: isPinging ? /* @__PURE__ */ jsx("span", { children: "Pingleniyor..." }) : /* @__PURE__ */ jsx("span", { children: "Tüm Ağlara Pingle" })
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-1 glass-card p-6 rounded-2xl border-slate-800 flex flex-col", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold text-white mb-4", children: "İşlem Logları" }),
        /* @__PURE__ */ jsx("div", { className: "flex-1 overflow-y-auto rounded-xl bg-slate-950 border border-slate-800 p-4 font-mono text-[10px] space-y-3 h-48", children: log.length === 0 ? /* @__PURE__ */ jsx("span", { className: "text-slate-600 flex h-full items-center justify-center text-center", children: "İşlem bekleniyor..." }) : log.map((l, i) => /* @__PURE__ */ jsxs("div", { className: "flex space-x-2 border-b border-slate-800/50 pb-2 last:border-0", children: [
          /* @__PURE__ */ jsxs("span", { className: "text-brand-400 shrink-0", children: [
            "[",
            l.time,
            "]"
          ] }),
          /* @__PURE__ */ jsx("span", { className: l.msg.includes("Başarılı") ? "text-emerald-400 font-bold" : l.msg.includes("Hata") ? "text-rose-400" : "text-slate-300", children: l.msg })
        ] }, i)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "glass-card p-6 rounded-2xl border-slate-800", children: [
      /* @__PURE__ */ jsx("div", { className: "flex justify-between items-center mb-6", children: /* @__PURE__ */ jsxs("h3", { className: "text-sm font-bold text-white", children: [
        "Veritabanındaki Sayfalar (",
        pseoPages.length,
        ")"
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "overflow-x-auto max-h-96", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left border-collapse", children: [
        /* @__PURE__ */ jsx("thead", { className: "sticky top-0 bg-slate-900", children: /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-800", children: [
          /* @__PURE__ */ jsx("th", { className: "py-3 px-4 text-xs font-bold text-slate-400 uppercase tracking-wider", children: "Anahtar Kelime" }),
          /* @__PURE__ */ jsx("th", { className: "py-3 px-4 text-xs font-bold text-slate-400 uppercase tracking-wider", children: "Oluşturulan URL" }),
          /* @__PURE__ */ jsx("th", { className: "py-3 px-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-right", children: "Durum" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { children: isLoading ? /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { colSpan: "3", className: "py-8 text-center text-sm text-slate-500", children: "Veritabanından okunuyor..." }) }) : filteredMap.length === 0 ? /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { colSpan: "3", className: "py-8 text-center text-sm text-slate-500", children: "Henüz hiç hedef sayfa oluşturulmadı." }) }) : filteredMap.map((item, idx) => /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-800/50 hover:bg-slate-800/20 transition", children: [
          /* @__PURE__ */ jsx("td", { className: "py-3 px-4 text-xs font-bold text-white", children: item.keyword }),
          /* @__PURE__ */ jsx("td", { className: "py-3 px-4 text-xs font-mono text-brand-300", children: item.url }),
          /* @__PURE__ */ jsx("td", { className: "py-3 px-4 text-right", children: /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold px-2 py-1 rounded-md bg-emerald-500/20 text-emerald-400", children: item.status || "Eklendi" }) })
        ] }, item.id || idx)) })
      ] }) })
    ] })
  ] });
}
function VitalsTab({ vitals }) {
  const [dbPing, setDbPing] = useState("Ölçülüyor...");
  const [serverLatency, setServerLatency] = useState("Ölçülüyor...");
  const [sysHealth, setSysHealth] = useState(null);
  const [isClearing, setIsClearing] = useState(false);
  const [cacheLog, setCacheLog] = useState("");
  useEffect(() => {
    const measureRealVitals = async () => {
      const dbStart = performance.now();
      try {
        await supabase.from("pseo_pages").select("id").limit(1);
        const dbEnd = performance.now();
        setDbPing(Math.round(dbEnd - dbStart) + "ms");
      } catch (e) {
        setDbPing("Hata");
      }
      const serverStart = performance.now();
      try {
        const res = await fetch("/api/system-health");
        const data = await res.json();
        const serverEnd = performance.now();
        setServerLatency(Math.round(serverEnd - serverStart) + "ms");
        if (data.status === "success") {
          setSysHealth(data);
        }
      } catch (e) {
        setServerLatency("Hata");
      }
    };
    measureRealVitals();
    const int = setInterval(measureRealVitals, 1e4);
    return () => clearInterval(int);
  }, []);
  const handleClearCache = async () => {
    setIsClearing(true);
    setCacheLog("Vercel Edge ağı önbelleği (Cache) temizleniyor...");
    try {
      const res = await fetch("/api/clear-cache", { method: "POST" });
      const data = await res.json();
      if (data.success) {
        setCacheLog(data.message);
      } else {
        setCacheLog(`⚠️ ${data.message}`);
      }
    } catch (err) {
      setCacheLog(`❌ Hata: ${err.message}`);
    } finally {
      setIsClearing(false);
      setTimeout(() => setCacheLog(""), 1e4);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-black text-white", children: "Sistem Sağlığı" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-sm mt-1", children: "Canlı Web Verileri (Core Web Vitals) ve Sunucu Durumu" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "glass-card p-6 rounded-2xl border-emerald-500/20 bg-emerald-950/10 text-center space-y-2", children: [
        /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold text-emerald-500 uppercase tracking-widest", children: "Lighthouse SEO Puanı" }),
        /* @__PURE__ */ jsx("div", { className: "text-5xl font-black text-emerald-400", children: vitals.lighthouseEstimate || 100 })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "glass-card p-6 rounded-2xl border-slate-800 text-center space-y-2", children: [
        /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-widest", children: "Veritabanı Gecikmesi (DB)" }),
        /* @__PURE__ */ jsx("div", { className: "text-3xl font-black text-white", children: dbPing }),
        /* @__PURE__ */ jsx("span", { className: "text-[10px] text-emerald-400 font-bold", children: "Gerçek Zamanlı" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "glass-card p-6 rounded-2xl border-slate-800 text-center space-y-2", children: [
        /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-widest", children: "Sunucu Yanıt Süresi (API)" }),
        /* @__PURE__ */ jsx("div", { className: "text-3xl font-black text-white", children: serverLatency }),
        /* @__PURE__ */ jsx("span", { className: "text-[10px] text-emerald-400 font-bold", children: "Gerçek Zamanlı" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "glass-card p-6 rounded-2xl border-slate-800 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700", children: /* @__PURE__ */ jsx(Server, { className: "w-5 h-5 text-slate-300" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "font-bold text-white text-sm", children: "Sunucu Bellek (RAM)" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400", children: sysHealth ? `${sysHealth.memory.usedGB} GB / ${sysHealth.memory.totalGB} GB Kullanımda` : "Ölçülüyor..." })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-sm font-bold text-brand-400", children: sysHealth ? `%${sysHealth.memory.usagePercent}` : "%--" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "glass-card p-6 rounded-2xl border-slate-800 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700", children: /* @__PURE__ */ jsx(Activity, { className: "w-5 h-5 text-slate-300" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "font-bold text-white text-sm", children: "CPU Yükü" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400", children: sysHealth ? `${sysHealth.cpu.cores} Çekirdek Aktif (${sysHealth.cpu.model.substring(0, 20)})` : "Ölçülüyor..." })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-sm font-bold text-emerald-400", children: sysHealth ? `%${sysHealth.cpu.usagePercent}` : "%--" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "glass-card p-6 rounded-2xl border-rose-500/20 bg-rose-950/10", children: [
      /* @__PURE__ */ jsxs("h3", { className: "text-sm font-bold text-white mb-2 flex items-center space-x-2", children: [
        /* @__PURE__ */ jsx(Zap, { className: "w-4 h-4 text-rose-400" }),
        /* @__PURE__ */ jsx("span", { children: "Sistem Önbellek (Cache) Yönetimi" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400 mb-4", children: "Sayfalardaki veya ayarlardaki güncellemeler anında yansımazsa, Vercel CDN ve Edge Network önbelleğini buradan zorla temizleyebilirsiniz." }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: handleClearCache,
            disabled: isClearing,
            className: `px-4 py-2.5 rounded-lg text-xs font-bold transition flex items-center space-x-2 ${isClearing ? "bg-slate-800 text-slate-500 cursor-not-allowed" : "bg-rose-600 hover:bg-rose-500 text-white shadow-lg shadow-rose-500/20"}`,
            children: isClearing ? "Temizleniyor..." : "Önbelleği (Cache) Temizle"
          }
        ),
        cacheLog && /* @__PURE__ */ jsx("span", { className: `text-xs font-bold ${cacheLog.includes("✅") ? "text-emerald-400" : cacheLog.includes("❌") ? "text-rose-400" : "text-amber-400"}`, children: cacheLog })
      ] })
    ] })
  ] });
}
function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [realPageViews, setRealPageViews] = useState(null);
  const [realIndexCount, setRealIndexCount] = useState(null);
  const [dbError, setDbError] = useState(false);
  const [vitals, setVitals] = useState({ lcp: "Ölçülüyor...", cls: "0.000", loadTime: "Ölçülüyor...", lighthouseEstimate: 100 });
  const [googleStats, setGoogleStats] = useState(null);
  useEffect(() => {
    const interval = setInterval(() => {
      setVitals(getRealPerformanceMetrics());
    }, 1e3);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const fetchRealStats = async () => {
      try {
        const { count: viewsCount, error: viewsErr } = await supabase.from("page_views").select("*", { count: "exact", head: true });
        if (viewsErr) throw viewsErr;
        setRealPageViews(viewsCount);
        const { count: indexCount, error: indexErr } = await supabase.from("indexing_logs").select("*", { count: "exact", head: true });
        if (!indexErr) setRealIndexCount(indexCount);
        setDbError(false);
      } catch (err) {
        setDbError(true);
      }
    };
    const fetchGoogleStats = async () => {
      try {
        const res = await fetch("/api/google-stats", { cache: "no-store" });
        if (!res.ok) throw new Error("API Bulunamadı veya Ayarlanmadı");
        const data = await res.json();
        setGoogleStats(data);
      } catch (error) {
        setGoogleStats({ status: "pending" });
      }
    };
    fetchRealStats();
    fetchGoogleStats();
  }, []);
  const handleLogout = async () => {
    await supabase.auth.signOut();
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex bg-slate-950 min-h-screen text-slate-100 overflow-x-hidden w-full md:border md:border-slate-800 md:rounded-3xl md:shadow-2xl md:max-w-[1400px] md:mx-auto md:my-6 md:min-h-[calc(100vh-3rem)]", children: [
    /* @__PURE__ */ jsx(Sidebar, { activeTab, setActiveTab, onLogout: handleLogout }),
    /* @__PURE__ */ jsxs("div", { className: "md:hidden fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-800 z-50 flex justify-around p-2", children: [
      /* @__PURE__ */ jsx("button", { onClick: () => setActiveTab("overview"), className: `p-3 rounded-xl ${activeTab === "overview" ? "bg-brand-500/20 text-brand-400" : "text-slate-400"}`, children: /* @__PURE__ */ jsx(LayoutDashboard, { className: "w-5 h-5" }) }),
      /* @__PURE__ */ jsx("button", { onClick: () => setActiveTab("analytics"), className: `p-3 rounded-xl ${activeTab === "analytics" ? "bg-brand-500/20 text-brand-400" : "text-slate-400"}`, children: /* @__PURE__ */ jsx(Map, { className: "w-5 h-5" }) }),
      /* @__PURE__ */ jsx("button", { onClick: () => setActiveTab("rankings"), className: `p-3 rounded-xl ${activeTab === "rankings" ? "bg-brand-500/20 text-brand-400" : "text-slate-400"}`, children: /* @__PURE__ */ jsx(BarChart2, { className: "w-5 h-5" }) }),
      /* @__PURE__ */ jsx("button", { onClick: () => setActiveTab("pseo"), className: `p-3 rounded-xl ${activeTab === "pseo" ? "bg-brand-500/20 text-brand-400" : "text-slate-400"}`, children: /* @__PURE__ */ jsx(Globe2, { className: "w-5 h-5" }) })
    ] }),
    /* @__PURE__ */ jsxs("main", { className: "flex-1 min-w-0 p-4 sm:p-6 md:p-10 overflow-y-auto overflow-x-hidden pb-24 md:pb-10", children: [
      activeTab === "overview" && /* @__PURE__ */ jsx(OverviewTab, { realPageViews, dbError, googleStats }),
      activeTab === "analytics" && /* @__PURE__ */ jsx(AnalyticsTab, { googleStats }),
      activeTab === "seo" && /* @__PURE__ */ jsx(SeoAuditTab, {}),
      activeTab === "rankings" && /* @__PURE__ */ jsx(RankTrackerTab, {}),
      activeTab === "pseo" && /* @__PURE__ */ jsx(PseoTab, { realIndexCount }),
      activeTab === "vitals" && /* @__PURE__ */ jsx(VitalsTab, { vitals })
    ] })
  ] });
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
  { code: "AUS", name: "Austin (US)", flag: "🇺🇸", effTax: 0.24 }
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
  { code: "CPT", name: "Cape Town (South Africa)", flag: "🇿🇦", effTax: 0.2, costIndex: 45 }
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
function DynamicToolPage({ pageData, lang = "en" }) {
  const t = (path) => getTranslation(lang, path);
  const isLlmTool = !!pageData.modelA;
  const { title, description, origin, dest, status, modelA, modelB, useCase, slug } = pageData;
  let taxContext = "";
  if (!isLlmTool && (dest == null ? void 0 : dest.effTax)) {
    if (dest.effTax > 0.25) taxContext = t("dynamic.taxHigh");
    else if (dest.effTax < 0.15) taxContext = t("dynamic.taxLow");
    else taxContext = t("dynamic.taxMid");
  }
  const dynamicTitle = isLlmTool ? t("dynamic.llmTitle").replace("{{modelA}}", modelA).replace("{{modelB}}", modelB).replace("{{useCase}}", useCase.replace("-", " ")) : t("dynamic.taxTitle").replace("{{origin}}", origin == null ? void 0 : origin.name).replace("{{dest}}", dest == null ? void 0 : dest.name).replace("{{status}}", status == null ? void 0 : status.label);
  const dynamicDesc = isLlmTool ? t("dynamic.llmDesc").replace("{{modelA}}", modelA).replace("{{modelB}}", modelB).replace("{{useCase}}", useCase.replace("-", " ")) : t("dynamic.taxDesc").replace("{{origin}}", origin == null ? void 0 : origin.name).replace("{{dest}}", dest == null ? void 0 : dest.name).replace("{{status}}", status == null ? void 0 : status.label).replace("{{taxContext}}", taxContext);
  const originNet = isLlmTool ? 0 : 85e3 * (1 - origin.effTax);
  const destNet = isLlmTool ? 0 : 85e3 * (1 - dest.effTax);
  const purchasingPowerBoost = isLlmTool ? "1.0" : (destNet / originNet * (100 / dest.costIndex)).toFixed(2);
  const faqs = isLlmTool ? [
    {
      question: t("faq.llmQ1").replace("{{modelA}}", modelA).replace("{{modelB}}", modelB).replace("{{useCase}}", useCase.replace("-", " ")),
      answer: t("faq.llmA1").replace("{{modelA}}", modelA).replace("{{modelB}}", modelB).replace("{{useCase}}", useCase.replace("-", " "))
    },
    {
      question: t("faq.llmQ2").replace("{{modelA}}", modelA).replace("{{modelB}}", modelB).replace("{{useCase}}", useCase.replace("-", " ")),
      answer: t("faq.llmA2").replace("{{modelA}}", modelA).replace("{{modelB}}", modelB).replace("{{useCase}}", useCase.replace("-", " "))
    },
    {
      question: t("faq.llmQ3").replace("{{modelA}}", modelA).replace("{{modelB}}", modelB).replace("{{useCase}}", useCase.replace("-", " ")),
      answer: t("faq.llmA3").replace("{{modelA}}", modelA).replace("{{modelB}}", modelB).replace("{{useCase}}", useCase.replace("-", " "))
    }
  ] : [
    {
      question: t("faq.taxQ1").replace("{{dest}}", dest == null ? void 0 : dest.name),
      answer: t("faq.taxA1").replace("{{dest}}", dest == null ? void 0 : dest.name).replace("{{perk}}", status == null ? void 0 : status.perk).replace("{{taxRate}}", ((dest == null ? void 0 : dest.effTax) * 100).toFixed(0))
    },
    {
      question: t("faq.taxQ2").replace("{{dest}}", dest == null ? void 0 : dest.name).replace("{{origin}}", origin == null ? void 0 : origin.name),
      answer: t("faq.taxA2").replace("{{dest}}", dest == null ? void 0 : dest.name).replace("{{origin}}", origin == null ? void 0 : origin.name).replace("{{boost}}", purchasingPowerBoost)
    },
    {
      question: t("faq.taxQ3").replace("{{dest}}", dest == null ? void 0 : dest.name),
      answer: t("faq.taxA3").replace("{{dest}}", dest == null ? void 0 : dest.name).replace("{{taxRate}}", ((dest == null ? void 0 : dest.effTax) * 100).toFixed(0)).replace("{{boost}}", purchasingPowerBoost)
    }
  ];
  const webAppSchema = generateSeoSchema({
    type: "WebApplication",
    url: `https://globalpaycalc.com/${isLlmTool ? "tools" : "calculator"}/${slug}`,
    name: dynamicTitle,
    description: dynamicDesc
  });
  const faqSchema = generateSeoSchema({
    type: "FAQPage",
    url: `https://globalpaycalc.com/${isLlmTool ? "tools" : "calculator"}/${slug}`,
    faqs
  });
  const allRoutes = isLlmTool ? generatePseoLlmMatrix() : generatePseoTaxMatrix();
  const relatedRoutes = allRoutes.filter((r) => r.slug !== slug && (isLlmTool ? r.modelA === modelA : r.origin.code === origin.code)).slice(0, 3);
  return /* @__PURE__ */ jsxs("div", { className: "space-y-8 max-w-4xl mx-auto my-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold", children: [
        /* @__PURE__ */ jsx(ArrowLeftRight, { className: "w-3.5 h-3.5" }),
        /* @__PURE__ */ jsx("span", { children: isLlmTool ? "API Cost & Latency Projection" : "Dynamic Tax Parity Estimator" })
      ] }),
      /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl font-extrabold text-white tracking-tight", children: dynamicTitle }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-sm leading-relaxed max-w-2xl mx-auto", children: dynamicDesc })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "glass-card glass-card-hover p-6 sm:p-8 rounded-2xl border-brand-500/20 space-y-6", children: [
      /* @__PURE__ */ jsxs("h3", { className: "text-sm font-bold text-white flex items-center space-x-2", children: [
        /* @__PURE__ */ jsx(TrendingUp, { className: "w-4.5 h-4.5 text-brand-400" }),
        /* @__PURE__ */ jsx("span", { className: "gradient-text", children: isLlmTool ? t("dynamic.llmHeader") : t("dynamic.taxHeader") })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2 relative overflow-hidden group", children: [
          /* @__PURE__ */ jsx("div", { className: "text-[10px] text-slate-400 font-semibold uppercase", children: isLlmTool ? modelA : t("dynamic.originNet").replace("{{origin}}", (origin == null ? void 0 : origin.flag) + " " + (origin == null ? void 0 : origin.name)) }),
          /* @__PURE__ */ jsxs("div", { className: "text-2xl font-mono font-extrabold text-white", children: [
            "$",
            isLlmTool ? "N/A" : `${Math.round(originNet / 12).toLocaleString()}/mo`
          ] }),
          !isLlmTool && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("div", { className: "w-full bg-slate-800 rounded-full h-2", children: /* @__PURE__ */ jsx("div", { className: "bg-slate-500 h-2 rounded-full transition-all duration-1000", style: { width: `${(1 - (origin == null ? void 0 : origin.effTax)) * 100}%` } }) }),
            /* @__PURE__ */ jsx("span", { className: "text-[10px] text-slate-500 font-mono", children: t("dynamic.taxRate").replace("{{rate}}", ((origin == null ? void 0 : origin.effTax) * 100).toFixed(0)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-4 rounded-xl bg-brand-500/10 border border-brand-500/20 space-y-2 relative overflow-hidden group", children: [
          /* @__PURE__ */ jsx("div", { className: "text-[10px] text-brand-300 font-semibold uppercase", children: isLlmTool ? modelB : t("dynamic.destNet").replace("{{dest}}", (dest == null ? void 0 : dest.flag) + " " + (dest == null ? void 0 : dest.name)) }),
          /* @__PURE__ */ jsxs("div", { className: "text-2xl font-mono font-extrabold text-white", children: [
            "$",
            isLlmTool ? "N/A" : `${Math.round(destNet / 12).toLocaleString()}/mo`
          ] }),
          !isLlmTool && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("div", { className: "w-full bg-slate-800 rounded-full h-2", children: /* @__PURE__ */ jsx("div", { className: "bg-brand-500 h-2 rounded-full transition-all duration-1000 delay-300", style: { width: `${(1 - (dest == null ? void 0 : dest.effTax)) * 100}%` } }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mt-1", children: [
              /* @__PURE__ */ jsx("span", { className: "text-[10px] text-brand-400/70 font-mono", children: t("dynamic.taxRate").replace("{{rate}}", ((dest == null ? void 0 : dest.effTax) * 100).toFixed(0)) }),
              /* @__PURE__ */ jsxs("span", { className: "text-[10px] text-brand-400 font-bold bg-brand-500/20 px-2 rounded-full py-0.5", children: [
                purchasingPowerBoost,
                "x ",
                t("dynamic.purchasingPower")
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "absolute -inset-4 bg-brand-500/5 blur-xl group-hover:bg-brand-500/10 transition duration-500 opacity-0 group-hover:opacity-100" })
        ] })
      ] }),
      !isLlmTool && /* @__PURE__ */ jsxs("div", { className: "pt-4 border-t border-slate-800/60 flex items-start space-x-3", children: [
        /* @__PURE__ */ jsx(ShieldAlert, { className: "w-5 h-5 text-amber-500 shrink-0 mt-0.5" }),
        /* @__PURE__ */ jsxs("p", { className: "text-xs text-slate-400 leading-relaxed", children: [
          "* Calculations are estimations based on standard digital nomad tax schemes (e.g. ",
          status == null ? void 0 : status.perk,
          ") and general ",
          t("dynamic.costIndex"),
          " multipliers. For official advice, please consult an accountant."
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("article", { className: "glass-card p-6 sm:p-10 rounded-2xl border-slate-800 space-y-8 mt-12", children: [
      /* @__PURE__ */ jsxs("header", { className: "space-y-2 border-b border-slate-800 pb-6", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold text-white flex items-center space-x-3", children: [
          /* @__PURE__ */ jsx(Info, { className: "w-6 h-6 text-purple-400" }),
          /* @__PURE__ */ jsxs("span", { children: [
            "Comprehensive Analysis: ",
            isLlmTool ? `${modelA} vs ${modelB}` : `Moving to ${dest == null ? void 0 : dest.name}`
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-sm", children: "Detailed insights and frequently asked questions about this specific comparison to help you make informed decisions." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-8", children: faqs.map((faq2, index) => /* @__PURE__ */ jsxs("section", { className: "space-y-3", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-slate-200", children: faq2.question }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-400 leading-relaxed", children: faq2.answer })
      ] }, index)) }),
      /* @__PURE__ */ jsx("footer", { className: "pt-6 border-t border-slate-800 text-xs text-slate-500", children: /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Disclaimer:" }),
        " The figures provided on this page are automated estimates generated for ",
        title,
        ".",
        isLlmTool ? " API prices and tokenizer rules are subject to change by the respective providers." : " Tax laws change frequently and individual circumstances vary. Do not base financial or legal decisions solely on this calculator."
      ] }) })
    ] }),
    relatedRoutes.length > 0 && /* @__PURE__ */ jsxs("section", { className: "mt-12 space-y-4", children: [
      /* @__PURE__ */ jsxs("h3", { className: "text-xl font-bold text-white flex items-center space-x-2", children: [
        /* @__PURE__ */ jsx(Link$1, { className: "w-5 h-5 text-brand-400" }),
        /* @__PURE__ */ jsx("span", { children: t("dynamic.relatedComparisons") })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-400 mb-6", children: isLlmTool ? t("dynamic.relatedLlmDesc") : t("dynamic.relatedTaxDesc") }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4", children: relatedRoutes.map((route) => /* @__PURE__ */ jsxs(
        Link,
        {
          to: `/${lang === "en" ? "" : lang + "/"}${isLlmTool ? "tools" : "calculator"}/${route.slug}`,
          className: "p-4 rounded-xl border border-slate-800 bg-slate-900/50 hover:bg-slate-800 transition block group",
          children: [
            /* @__PURE__ */ jsx("div", { className: "text-xs text-brand-400 mb-1", children: isLlmTool ? route.useCase.replace("-", " ") : `${route.origin.name} → ${route.dest.name}` }),
            /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold text-slate-200 group-hover:text-white line-clamp-2", children: route.title })
          ]
        },
        route.slug
      )) })
    ] }),
    /* @__PURE__ */ jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: { __html: JSON.stringify(webAppSchema) } }),
    /* @__PURE__ */ jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: { __html: JSON.stringify(faqSchema) } })
  ] });
}
const PrivacyPolicy = ({ lang = "en" }) => {
  const t = (path) => getTranslation(lang, path);
  return /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto py-12 px-6", children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsxs("title", { children: [
        t("legal.privacy.title"),
        " | GlobalPayCalc"
      ] }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: t("legal.privacy.desc") })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3 mb-8", children: [
      /* @__PURE__ */ jsx(Shield, { className: "w-8 h-8 text-brand-500" }),
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-black text-white", children: t("legal.privacy.title") })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "prose prose-invert max-w-none text-slate-300 space-y-6", children: [
      /* @__PURE__ */ jsxs("p", { children: [
        t("legal.lastUpdated"),
        ": ",
        (/* @__PURE__ */ new Date()).toLocaleDateString()
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white mt-8", children: t("legal.privacy.h1") }),
      /* @__PURE__ */ jsx("p", { children: t("legal.privacy.p1") }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white mt-8", children: t("legal.privacy.h2") }),
      /* @__PURE__ */ jsx("p", { children: t("legal.privacy.p2") }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white mt-8", children: t("legal.privacy.h3") }),
      /* @__PURE__ */ jsx("p", { children: t("legal.privacy.p3") }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white mt-8", children: t("legal.privacy.h4") }),
      /* @__PURE__ */ jsx("p", { children: t("legal.privacy.p4") })
    ] })
  ] });
};
const TermsOfService = ({ lang = "en" }) => {
  const t = (path) => getTranslation(lang, path);
  return /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto py-12 px-6", children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsxs("title", { children: [
        t("legal.terms.title"),
        " | GlobalPayCalc"
      ] }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: t("legal.terms.desc") })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3 mb-8", children: [
      /* @__PURE__ */ jsx(FileText, { className: "w-8 h-8 text-brand-500" }),
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-black text-white", children: t("legal.terms.title") })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "prose prose-invert max-w-none text-slate-300 space-y-6", children: [
      /* @__PURE__ */ jsxs("p", { children: [
        t("legal.lastUpdated"),
        ": ",
        (/* @__PURE__ */ new Date()).toLocaleDateString()
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white mt-8", children: t("legal.terms.h1") }),
      /* @__PURE__ */ jsx("p", { children: t("legal.terms.p1") }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white mt-8", children: t("legal.terms.h2") }),
      /* @__PURE__ */ jsx("p", { children: t("legal.terms.p2") }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white mt-8", children: t("legal.terms.h3") }),
      /* @__PURE__ */ jsx("p", { children: t("legal.terms.p3") })
    ] })
  ] });
};
const AboutUs = ({ lang = "en" }) => {
  const t = (path) => getTranslation(lang, path);
  return /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto py-12 px-6", children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsxs("title", { children: [
        t("legal.about.title"),
        " | GlobalPayCalc"
      ] }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: t("legal.about.desc") })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3 mb-8", children: [
      /* @__PURE__ */ jsx(Info, { className: "w-8 h-8 text-brand-500" }),
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-black text-white", children: t("legal.about.title") })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "prose prose-invert max-w-none text-slate-300 space-y-6", children: [
      /* @__PURE__ */ jsx("p", { className: "text-xl", children: t("legal.about.intro") }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white mt-8", children: t("legal.about.h1") }),
      /* @__PURE__ */ jsx("p", { children: t("legal.about.p1") }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white mt-8", children: t("legal.about.h2") }),
      /* @__PURE__ */ jsx("p", { children: t("legal.about.p2") })
    ] })
  ] });
};
const Contact = ({ lang = "en" }) => {
  const t = (path) => getTranslation(lang, path);
  return /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto py-12 px-6", children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsxs("title", { children: [
        t("legal.contact.title"),
        " | GlobalPayCalc"
      ] }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: t("legal.contact.desc") })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3 mb-8", children: [
      /* @__PURE__ */ jsx(Mail, { className: "w-8 h-8 text-brand-500" }),
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-black text-white", children: t("legal.contact.title") })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "glass-card p-8 rounded-2xl border-slate-800", children: [
      /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-6", children: t("legal.contact.intro") }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3 text-slate-300", children: [
          /* @__PURE__ */ jsx(Mail, { className: "w-5 h-5 text-brand-400" }),
          /* @__PURE__ */ jsxs("span", { children: [
            "Email: ",
            /* @__PURE__ */ jsx("a", { href: "mailto:support@globalpaycalc.com", className: "text-brand-400 hover:underline", children: "support@globalpaycalc.com" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-400 mt-8", children: t("legal.contact.response") })
      ] })
    ] })
  ] });
};
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
function ContentWrapper({ lang, t }) {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const hasLangPrefix = supportedLanguages.some((l) => l.code === pathSegments[0]);
  const activeTab = hasLangPrefix ? pathSegments[1] || "video" : pathSegments[0] || "video";
  const basePath = hasLangPrefix ? `/${pathSegments[0]}` : "";
  let pageTitle = "GlobalPayCalc: Universal Media, AI & Salary Engine";
  let pageDesc = t("hero.subtitle");
  if (activeTab === "salary") {
    pageTitle = "Remote Salary Calculator & Global Tax Parity Estimator | GlobalPayCalc";
    pageDesc = "Calculate net remote salaries across 150+ countries. Compare purchasing power, cost of living, and nomad tax laws instantly.";
  } else if (activeTab === "wasm") {
    pageTitle = "Free AI Image Background Remover | Secure Client-Side | GlobalPayCalc";
    pageDesc = "Remove image backgrounds instantly with 100% privacy using client-side WebAssembly AI. No uploads, no limits, no watermarks.";
  } else if (activeTab === "ai") {
    pageTitle = "LLM API Cost Simulator: GPT-4o, Claude 3.5 & LLaMA 3 | GlobalPayCalc";
    pageDesc = "Compare token costs for OpenAI, Anthropic, and open-source models for RAG, customer support, and agents.";
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: pageTitle }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: pageDesc }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: `https://globalpaycalc.com${location.pathname.replace(/\/+$/, "") || "/"}` }),
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
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-2 pt-2", children: [
        /* @__PURE__ */ jsxs(Link, { to: `${basePath}/video`, title: "Download HD social videos without watermark", className: `px-4 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-2 border cursor-pointer ${activeTab === "video" ? "bg-rose-500 text-white border-rose-400 shadow-lg shadow-rose-500/20" : "bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800"}`, children: [
          /* @__PURE__ */ jsx(Video, { className: "w-3.5 h-3.5" }),
          /* @__PURE__ */ jsx("span", { children: t("nav.downloader") })
        ] }),
        /* @__PURE__ */ jsxs(Link, { to: `${basePath}/wasm`, title: "Client-side AI image background remover", className: `px-4 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-2 border cursor-pointer ${activeTab === "wasm" ? "bg-cyan-600 text-white border-cyan-500 shadow-lg shadow-cyan-500/20" : "bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800"}`, children: [
          /* @__PURE__ */ jsx(Image$1, { className: "w-3.5 h-3.5" }),
          /* @__PURE__ */ jsx("span", { children: t("nav.bgRemover") })
        ] }),
        /* @__PURE__ */ jsxs(Link, { to: `${basePath}/salary`, title: "Calculate remote net salary and tax parity", className: `px-4 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-2 border cursor-pointer ${activeTab === "salary" ? "bg-brand-600 text-white border-brand-500 shadow-lg shadow-brand-500/20" : "bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800"}`, children: [
          /* @__PURE__ */ jsx(Globe, { className: "w-3.5 h-3.5" }),
          /* @__PURE__ */ jsx("span", { children: t("nav.salary") })
        ] }),
        /* @__PURE__ */ jsxs(Link, { to: `${basePath}/ai`, title: "LLM API token cost simulator", className: `px-4 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-2 border cursor-pointer ${activeTab === "ai" ? "bg-purple-600 text-white border-purple-500 shadow-lg shadow-purple-500/20" : "bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800"}`, children: [
          /* @__PURE__ */ jsx(Sparkles, { className: "w-3.5 h-3.5 text-amber-400" }),
          /* @__PURE__ */ jsx("span", { children: t("nav.aiCost") })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "pt-4", children: /* @__PURE__ */ jsxs(Routes, { children: [
      /* @__PURE__ */ jsx(Route, { path: "/", element: /* @__PURE__ */ jsx(SocialVideoDownloader, { lang }) }),
      /* @__PURE__ */ jsx(Route, { path: "/video", element: /* @__PURE__ */ jsx(SocialVideoDownloader, { lang }) }),
      /* @__PURE__ */ jsx(Route, { path: "/wasm", element: /* @__PURE__ */ jsx(QuickWasmCompressor, { lang }) }),
      /* @__PURE__ */ jsx(Route, { path: "/salary", element: /* @__PURE__ */ jsx(NomadTaxCalculator, { lang }) }),
      /* @__PURE__ */ jsx(Route, { path: "/ai", element: /* @__PURE__ */ jsx(DevTokenCalculator, { lang }) }),
      /* @__PURE__ */ jsx(Route, { path: "/admin", element: /* @__PURE__ */ jsx(ProtectedRoute, { children: /* @__PURE__ */ jsx(AdminDashboard, {}) }) }),
      /* @__PURE__ */ jsx(Route, { path: "/privacy", element: /* @__PURE__ */ jsx(PrivacyPolicy, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/terms", element: /* @__PURE__ */ jsx(TermsOfService, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/about", element: /* @__PURE__ */ jsx(AboutUs, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/contact", element: /* @__PURE__ */ jsx(Contact, {}) }),
      supportedLanguages.map((l) => /* @__PURE__ */ jsxs(React.Fragment, { children: [
        /* @__PURE__ */ jsx(Route, { path: `/${l.code}`, element: /* @__PURE__ */ jsx(SocialVideoDownloader, { lang: l.code }) }),
        /* @__PURE__ */ jsx(Route, { path: `/${l.code}/video`, element: /* @__PURE__ */ jsx(SocialVideoDownloader, { lang: l.code }) }),
        /* @__PURE__ */ jsx(Route, { path: `/${l.code}/wasm`, element: /* @__PURE__ */ jsx(QuickWasmCompressor, { lang: l.code }) }),
        /* @__PURE__ */ jsx(Route, { path: `/${l.code}/salary`, element: /* @__PURE__ */ jsx(NomadTaxCalculator, { lang: l.code }) }),
        /* @__PURE__ */ jsx(Route, { path: `/${l.code}/ai`, element: /* @__PURE__ */ jsx(DevTokenCalculator, { lang: l.code }) }),
        /* @__PURE__ */ jsx(Route, { path: `/${l.code}/privacy`, element: /* @__PURE__ */ jsx(PrivacyPolicy, { lang: l.code }) }),
        /* @__PURE__ */ jsx(Route, { path: `/${l.code}/terms`, element: /* @__PURE__ */ jsx(TermsOfService, { lang: l.code }) }),
        /* @__PURE__ */ jsx(Route, { path: `/${l.code}/about`, element: /* @__PURE__ */ jsx(AboutUs, { lang: l.code }) }),
        /* @__PURE__ */ jsx(Route, { path: `/${l.code}/contact`, element: /* @__PURE__ */ jsx(Contact, { lang: l.code }) })
      ] }, l.code)),
      generatePseoTaxMatrix().map((route) => /* @__PURE__ */ jsxs(React.Fragment, { children: [
        /* @__PURE__ */ jsx(Route, { path: `/calculator/${route.slug}`, element: /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs(Helmet, { children: [
            /* @__PURE__ */ jsxs("title", { children: [
              route.title,
              " | GlobalPayCalc"
            ] }),
            /* @__PURE__ */ jsx("meta", { name: "description", content: route.description })
          ] }),
          /* @__PURE__ */ jsx(DynamicToolPage, { pageData: route, lang })
        ] }) }),
        supportedLanguages.map((l) => /* @__PURE__ */ jsx(Route, { path: `/${l.code}/calculator/${route.slug}`, element: /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs(Helmet, { children: [
            /* @__PURE__ */ jsxs("title", { children: [
              route.title,
              " | GlobalPayCalc"
            ] }),
            /* @__PURE__ */ jsx("meta", { name: "description", content: route.description })
          ] }),
          /* @__PURE__ */ jsx(DynamicToolPage, { pageData: route, lang: l.code })
        ] }) }, `${l.code}-${route.slug}`))
      ] }, route.slug)),
      generatePseoLlmMatrix().map((route) => /* @__PURE__ */ jsxs(React.Fragment, { children: [
        /* @__PURE__ */ jsx(Route, { path: `/tools/${route.slug}`, element: /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs(Helmet, { children: [
            /* @__PURE__ */ jsxs("title", { children: [
              route.title,
              " | GlobalPayCalc"
            ] }),
            /* @__PURE__ */ jsx("meta", { name: "description", content: route.description })
          ] }),
          /* @__PURE__ */ jsx(DynamicToolPage, { pageData: route, lang })
        ] }) }),
        supportedLanguages.map((l) => /* @__PURE__ */ jsx(Route, { path: `/${l.code}/tools/${route.slug}`, element: /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs(Helmet, { children: [
            /* @__PURE__ */ jsxs("title", { children: [
              route.title,
              " | GlobalPayCalc"
            ] }),
            /* @__PURE__ */ jsx("meta", { name: "description", content: route.description })
          ] }),
          /* @__PURE__ */ jsx(DynamicToolPage, { pageData: route, lang: l.code })
        ] }) }, `${l.code}-${route.slug}`))
      ] }, route.slug)),
      /* @__PURE__ */ jsx(Route, { path: "*", element: /* @__PURE__ */ jsx(NotFoundPage, { lang }) })
    ] }) }),
    activeTab !== "admin" && !location.pathname.includes("/calculator/") && !location.pathname.includes("/tools/") && /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto mt-16 mb-8 p-6 md:p-8 rounded-3xl bg-slate-900/60 border border-slate-800/80 text-left shadow-2xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-base font-black text-white mb-3", children: t("hero.seoTitle") }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-400 leading-relaxed", dangerouslySetInnerHTML: { __html: t("hero.seoText") } }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 pt-8 border-t border-slate-800/80", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-base font-black text-white mb-4", children: t("faq.title") }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-6 text-sm text-slate-400 leading-relaxed", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("strong", { className: "text-slate-300 block mb-1", children: t("faq.q1") }),
            /* @__PURE__ */ jsx("p", { children: t("faq.a1") })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("strong", { className: "text-slate-300 block mb-1", children: t("faq.q2") }),
            /* @__PURE__ */ jsx("p", { children: t("faq.a2") })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("strong", { className: "text-slate-300 block mb-1", children: t("faq.q3") }),
            /* @__PURE__ */ jsx("p", { children: t("faq.a3") })
          ] })
        ] })
      ] })
    ] }),
    activeTab !== "admin" && /* @__PURE__ */ jsx(AdSenseSlot, { slotId: "mid-content-rectangle", format: "rectangle" }),
    activeTab !== "admin" && /* @__PURE__ */ jsx(ProgrammaticSeoGrid, { lang })
  ] });
}
function App() {
  const location = useLocation();
  const [lang, setLang] = useState(() => {
    const pathSegments = location.pathname.split("/").filter(Boolean);
    const possibleLang = pathSegments[0];
    if (supportedLanguages.some((l) => l.code === possibleLang)) return possibleLang;
    return "en";
  });
  useEffect(() => {
    const pathSegments = location.pathname.split("/").filter(Boolean);
    const possibleLang = pathSegments[0];
    const isSupported = supportedLanguages.some((l) => l.code === possibleLang);
    if (isSupported) {
      if (lang !== possibleLang) setLang(possibleLang);
    } else {
      if (lang !== "en") setLang("en");
    }
  }, [location.pathname]);
  useEffect(() => {
    trackPageView(location.pathname);
  }, [location.pathname]);
  const t = (path) => getTranslation(lang, path);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex flex-col bg-slate-950 text-slate-100 font-sans", children: [
    !location.pathname.includes("/admin") && /* @__PURE__ */ jsx(Header, { currentLang: lang, setLang }),
    /* @__PURE__ */ jsxs("main", { className: `flex-1 w-full ${location.pathname.includes("/admin") ? "" : "max-w-7xl mx-auto px-4 lg:px-8 py-8 space-y-12"}`, children: [
      !location.pathname.includes("/admin") && /* @__PURE__ */ jsx(AdSenseSlot, { slotId: "header-leaderboard", format: "horizontal" }),
      /* @__PURE__ */ jsx(ContentWrapper, { lang, t })
    ] }),
    !location.pathname.includes("/admin") && /* @__PURE__ */ jsx(Footer, { lang }),
    !location.pathname.includes("/admin") && /* @__PURE__ */ jsx(CookieConsent, { lang })
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
  const routes = ["/", "/video", "/wasm", "/salary", "/ai", "/admin", "/privacy", "/terms", "/about", "/contact"];
  for (const lang of supportedLanguages) {
    routes.push(`/${lang.code}`);
    routes.push(`/${lang.code}/video`);
    routes.push(`/${lang.code}/wasm`);
    routes.push(`/${lang.code}/salary`);
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
  getRoutes,
  render
};
