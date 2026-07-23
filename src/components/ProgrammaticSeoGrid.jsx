import React, { useEffect, useState } from 'react';
import { generateSeoSchema, injectJsonLdSchema } from '../utils/schemaGenerator';
import { HelpCircle, ChevronDown, ChevronUp, Lock, RefreshCw, Star } from 'lucide-react';
import { getTranslation } from '../i18n';

// Localized FAQ Database for all 8 Languages
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

export default function ProgrammaticSeoGrid({ lang = 'en' }) {
  const activeFaqs = faqData[lang] || faqData.en;
  const activeUi = uiTexts[lang] || uiTexts.en;
  
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    // Generate and inject dynamic JSON-LD schemas to head
    const appSchema = generateSeoSchema({
      type: 'WebApplication',
      url: 'https://globalpaycalc.com',
      name: 'GlobalPayCalc.com Suite',
      description: 'Universal media, AI & global salary utility engine.'
    });

    const faqSchema = generateSeoSchema({
      type: 'FAQPage',
      url: 'https://globalpaycalc.com',
      faqs: activeFaqs
    });

    injectJsonLdSchema('json-ld-app', appSchema);
    injectJsonLdSchema('json-ld-faq', faqSchema);
  }, [lang, activeFaqs]);

  return (
    <div className="space-y-8 max-w-4xl mx-auto my-12">
      
      {/* Premium Accordion FAQ UI */}
      <div className="glass-card p-6 sm:p-8 rounded-3xl border-slate-800 space-y-6">
        <div className="flex items-center space-x-3 border-b border-slate-800/80 pb-4">
          <HelpCircle className="w-6 h-6 text-purple-400" />
          <div>
            <h3 className="text-xl font-bold text-white">
              {activeUi.faqTitle}
            </h3>
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
                {/* Accordion Header */}
                <div className="p-4 sm:p-5 flex items-center justify-between gap-4 select-none">
                  <span className="text-xs sm:text-sm font-bold text-white">{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  )}
                </div>

                {/* Accordion Body */}
                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-xs text-slate-300 leading-relaxed border-t border-slate-800/50 animate-float">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Dynamic Verification Badges at Bottom of FAQ */}
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

    </div>
  );
}
