import React from 'react';
import { Shield, FileText, Info, Mail, ExternalLink, BookOpen, CheckCircle2, Lock } from 'lucide-react';
import { getTranslation } from '../i18n';
import { generateUnifiedSchema } from '../utils/schemaGenerator';

const LAST_UPDATED_DATE = '2026-10-20';

function buildLegalSchema(lang, slug, title, description) {
  const pathPrefix = lang === 'en' ? '' : `/${lang}`;
  const fullUrl = `https://globalpaycalc.com${pathPrefix}/${slug}`;
  return generateUnifiedSchema({
    url: fullUrl,
    name: `${title} | GlobalPayCalc`,
    description,
    breadcrumbs: [
      { name: 'GlobalPayCalc', url: `https://globalpaycalc.com${pathPrefix || '/'}` },
      { name: title, url: fullUrl }
    ]
  });
}

const adsensePrivacySections = {
  en: {
    h5: "5. Google AdSense & Third-Party Advertising Cookies",
    p5_1: "Third-party vendors, including Google, use cookies (such as the Google advertising and DoubleClick cookie) to serve ads based on a user's prior visits to GlobalPayCalc.com or other websites on the internet.",
    p5_2: "Google's use of advertising cookies enables it and its partners to serve advertisements to our users based on their visit to our site and/or other sites on the Internet.",
    optOutIntro: "Users may opt out of personalized advertising at any time by visiting the following official opt-out portals:",
    h6: "6. EEA, UK & Swiss Consent Mode v2 & GDPR Rights",
    p6: "For visitors located in the European Economic Area (EEA), the United Kingdom, and Switzerland, GlobalPayCalc enforces Google Consent Mode v2 with 'denied' default states for ad_storage, ad_user_data, ad_personalization, and analytics_storage until explicit consent is granted via our consent banner or a Google-certified Consent Management Platform (CMP). Under the GDPR, you have the right to access, rectify, erase, or restrict processing of any personal data. Because all calculator inputs are processed exclusively in your local browser memory (RAM) and never transmitted to our servers, we hold no personal financial records. For any privacy inquiry, contact the GlobalPayCalc Team at support@globalpaycalc.com."
  },
  tr: {
    h5: "5. Google AdSense ve Üçüncü Taraf Reklam Çerezleri",
    p5_1: "Google dahil üçüncü taraf tedarikçiler, kullanıcıların GlobalPayCalc.com'a veya internetteki diğer web sitelerine yaptıkları önceki ziyaretlere dayanarak reklam yayınlamak için çerezleri (Google reklam ve DoubleClick çerezleri gibi) kullanır.",
    p5_2: "Google'ın reklam çerezlerini kullanması, kendisinin ve iş ortaklarının kullanıcılara sitemize ve/veya internetteki diğer sitelere yaptıkları ziyaretlere dayalı olarak reklam sunmasına olanak tanır.",
    optOutIntro: "Kullanıcılar aşağıdaki resmi bağlantıları ziyaret ederek kişiselleştirilmiş reklamcılığı istedikleri zaman devre dışı bırakabilirler:",
    h6: "6. AEA, Birleşik Krallık, İsviçre (Consent Mode v2) ve KVKK/GDPR Hakları",
    p6: "Avrupa Ekonomik Alanı (AEA), Birleşik Krallık, İsviçre ve Türkiye'deki ziyaretçiler için GlobalPayCalc; çerez onay ekranımız veya Google sertifikalı Rıza Yönetim Platformu (CMP) üzerinden açık onay verilene kadar ad_storage, ad_user_data, ad_personalization ve analytics_storage sinyallerini varsayılan olarak 'reddedildi' (denied) konumunda tutan Google Consent Mode v2 standardını uygular. Hesaplama araçlarına girdiğiniz tüm maaş ve vergi verileri yalnızca tarayıcınızın yerel belleğinde (RAM) işlendiği ve sunucularımıza aktarılmadığı için tarafımızca kişisel finansal kayıt tutulmamaktadır. Gizlilikle ilgili tüm talepleriniz için GlobalPayCalc Ekibi ile support@globalpaycalc.com adresinden iletişime geçebilirsiniz."
  },
  es: {
    h5: "5. Google AdSense y Cookies Publicitarias de Terceros",
    p5_1: "Los proveedores terceros, incluido Google, utilizan cookies (como la cookie publicitaria de Google y DoubleClick) para mostrar anuncios basados en las visitas anteriores del usuario a GlobalPayCalc.com o a otros sitios web en Internet.",
    p5_2: "El uso de cookies publicitarias por parte de Google le permite a él y a sus socios mostrar anuncios a nuestros usuarios en función de su visita a nuestro sitio y/o a otros sitios de Internet.",
    optOutIntro: "Los usuarios pueden inhabilitar la publicidad personalizada en cualquier momento a través de los siguientes enlaces oficiales:",
    h6: "6. Consent Mode v2 y Derechos RGPD (EEE, Reino Unido y Suiza)",
    p6: "Para los visitantes del Espacio Económico Europeo (EEE), el Reino Unido y Suiza, GlobalPayCalc aplica Google Consent Mode v2 con estados predeterminados 'denegados' (ad_storage, ad_user_data, ad_personalization y analytics_storage) hasta que el usuario otorgue su consentimiento explícito. Dado que todos los cálculos fiscales y salariales se ejecutan localmente en la memoria RAM de su navegador, no almacenamos datos financieros personales en nuestros servidores. Para consultas sobre privacidad, contacte al equipo de GlobalPayCalc en support@globalpaycalc.com."
  },
  de: {
    h5: "5. Google AdSense & Werbe-Cookies von Drittanbietern",
    p5_1: "Drittanbieter, einschließlich Google, verwenden Cookies (wie das Google-Werbe- und DoubleClick-Cookie), um Anzeigen auf Grundlage vorheriger Besuche eines Nutzers auf GlobalPayCalc.com oder anderen Websites im Internet zu schalten.",
    p5_2: "Die Verwendung von Werbe-Cookies durch Google ermöglicht es Google und seinen Partnern, Nutzern auf Basis ihres Besuchs auf unserer Website und/oder anderen Websites im Internet passende Anzeigen einzublenden.",
    optOutIntro: "Nutzer können personalisierte Werbung jederzeit über die folgenden offiziellen Portale deaktivieren:",
    h6: "6. Google Consent Mode v2 & DSGVO-Rechte (EWR, UK und Schweiz)",
    p6: "Für Besucher aus dem Europäischen Wirtschaftsraum (EWR), dem Vereinigten Königreich und der Schweiz setzt GlobalPayCalc den Google Consent Mode v2 ein, bei dem ad_storage, ad_user_data, ad_personalization und analytics_storage standardmäßig deaktiviert ('denied') sind, bis eine ausdrückliche Einwilligung erfolgt. Da sämtliche Gehalts- und Steuerberechnungen ausschließlich lokal im Arbeitsspeicher (RAM) Ihres Browsers stattfinden, speichern wir keinerlei persönliche Finanzdaten. Bei Fragen zum Datenschutz erreichen Sie das GlobalPayCalc-Team unter support@globalpaycalc.com."
  },
  pt: {
    h5: "5. Google AdSense e Cookies de Publicidade de Terceiros",
    p5_1: "Fornecedores terceiros, incluindo o Google, utilizam cookies (como o cookie de publicidade do Google e DoubleClick) para veicular anúncios com base nas visitas anteriores do usuário ao GlobalPayCalc.com ou a outros sites na internet.",
    p5_2: "O uso de cookies de publicidade pelo Google permite que ele e seus parceiros veiculem anúncios aos nossos usuários com base em sua visita ao nosso site e/ou a outros sites na Internet.",
    optOutIntro: "Os usuários podem desativar a publicidade personalizada a qualquer momento acessando os portais oficiais abaixo:",
    h6: "6. Google Consent Mode v2 e Direitos GDPR / LGPD",
    p6: "Para visitantes do Espaço Econômico Europeu (EEE), Reino Unido, Suíça e Brasil, o GlobalPayCalc aplica o Google Consent Mode v2 com estado padrão 'negado' até que o consentimento seja concedido. Todos os dados inseridos nas calculadoras são processados exclusivamente na memória RAM local do seu navegador e nunca são enviados aos nossos servidores. Para dúvidas sobre privacidade, contate a Equipe GlobalPayCalc em support@globalpaycalc.com."
  },
  fr: {
    h5: "5. Google AdSense et Cookies Publicitaires Tiers",
    p5_1: "Les fournisseurs tiers, y compris Google, utilisent des cookies (tels que le cookie publicitaire Google et DoubleClick) pour diffuser des annonces en fonction des visites antérieures des utilisateurs sur GlobalPayCalc.com ou sur d'autres sites Web.",
    p5_2: "Grâce aux cookies publicitaires, Google et ses partenaires peuvent diffuser des annonces auprès de nos utilisateurs en fonction de leurs visites sur notre site et/ou sur d'autres sites sur Internet.",
    optOutIntro: "Les utilisateurs peuvent désactiver la publicité personnalisée à tout moment via les portails officiels suivants :",
    h6: "6. Google Consent Mode v2 et Droits RGPD (EEE, Royaume-Uni et Suisse)",
    p6: "Pour les visiteurs résidant dans l'Espace économique européen (EEE), au Royaume-Uni et en Suisse, GlobalPayCalc applique le Google Consent Mode v2 avec un état par défaut « refusé » jusqu'au recueil du consentement explicite. Toutes les simulations salariales et fiscales étant exécutées localement dans la mémoire vive (RAM) de votre navigateur, aucune donnée financière personnelle n'est conservée sur nos serveurs. Pour toute question, contactez l'équipe GlobalPayCalc à support@globalpaycalc.com."
  },
  id: {
    h5: "5. Google AdSense & Cookie Periklanan Pihak Ketiga",
    p5_1: "Vendor pihak ketiga, termasuk Google, menggunakan cookie (seperti cookie periklanan Google dan DoubleClick) untuk menayangkan iklan berdasarkan kunjungan pengguna sebelumnya ke GlobalPayCalc.com atau situs web lain di internet.",
    p5_2: "Penggunaan cookie periklanan oleh Google memungkinkan Google dan mitranya menayangkan iklan kepada pengguna kami berdasarkan kunjungan mereka ke situs kami dan/atau situs lain di Internet.",
    optOutIntro: "Pengguna dapat memilih keluar (opt-out) dari periklanan yang dipersonalisasi kapan saja melalui tautan resmi berikut:",
    h6: "6. Google Consent Mode v2 & Hak Privasi Data (GDPR)",
    p6: "Bagi pengunjung di Wilayah Ekonomi Eropa (EEA), Inggris, dan Swiss, GlobalPayCalc menerapkan Google Consent Mode v2 dengan status default 'ditolak' hingga persetujuan diberikan. Karena semua input kalkulator diproses secara lokal di memori RAM peramban Anda, kami tidak menyimpan catatan keuangan pribadi di server kami. Hubungi Tim GlobalPayCalc di support@globalpaycalc.com untuk pertanyaan privasi."
  },
  ja: {
    h5: "5. Google AdSenseおよび第三者配信事業者の広告Cookieについて",
    p5_1: "Googleを含む第三者配信事業者は、ユーザーがGlobalPayCalc.comや他のウェブサイトに過去にアクセスした際の情報に基づいて広告を配信するため、Cookie（Google広告CookieやDoubleClick Cookieなど）を使用します。",
    p5_2: "Googleが広告Cookieを使用することにより、Googleおよびそのパートナーは、当サイトやインターネット上の他のサイトへのアクセス情報に基づいて、ユーザーに適切な広告を表示できます。",
    optOutIntro: "ユーザーは以下の公式ポータルからいつでもパーソナライズ広告を無効（オプトアウト）にすることができます：",
    h6: "6. Google Consent Mode v2およびGDPR（EEA・英国・スイス）における権利",
    p6: "欧州経済領域（EEA）、英国、スイスの訪問者に対し、GlobalPayCalcは同意バナーまたはGoogle認定CMPを通じて明示的な同意が得られるまで、ad_storage、ad_user_data、ad_personalization、analytics_storageをデフォルトで「拒否（denied）」に設定するGoogle Consent Mode v2を適用しています。また、すべての計算入力はお使いのブラウザのメモリ（RAM）内でのみ処理され、サーバーへ送信されることはありません。プライバシーに関するお問い合わせは、GlobalPayCalcチーム（support@globalpaycalc.com）までご連絡ください。"
  }
};

export const PrivacyPolicy = ({ lang = 'en' }) => {
  const t = (path) => getTranslation(lang, path);
  const schema = buildLegalSchema(lang, 'privacy', t('legal.privacy.title'), t('legal.privacy.desc'));
  const extra = adsensePrivacySections[lang] || adsensePrivacySections.en;

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <div className="flex items-center space-x-3 mb-8">
        <Shield className="w-8 h-8 text-brand-500" />
        <h1 className="text-4xl font-black text-white">{t('legal.privacy.title')}</h1>
      </div>
      <div className="prose prose-invert max-w-none text-slate-300 space-y-6">
        <p className="text-xs font-mono text-slate-400">{t('legal.lastUpdated')}: {LAST_UPDATED_DATE}</p>

        <h2 className="text-2xl font-bold text-white mt-8">{t('legal.privacy.h1')}</h2>
        <p>{t('legal.privacy.p1')}</p>
        
        <h2 className="text-2xl font-bold text-white mt-8">{t('legal.privacy.h2')}</h2>
        <p>{t('legal.privacy.p2')}</p>

        <h2 className="text-2xl font-bold text-white mt-8">{t('legal.privacy.h3')}</h2>
        <p>{t('legal.privacy.p3')}</p>

        <h2 className="text-2xl font-bold text-white mt-8">{t('legal.privacy.h4')}</h2>
        <p>{t('legal.privacy.p4')}</p>

        <h2 className="text-2xl font-bold text-white mt-8">{extra.h5}</h2>
        <p>{extra.p5_1}</p>
        <p>{extra.p5_2}</p>
        <p>{extra.optOutIntro}</p>
        <ul className="list-disc pl-6 space-y-2 text-sm">
          <li>
            <strong>Google Ads Settings / My Ad Center:</strong>{' '}
            <a href="https://myadcenter.google.com/" target="_blank" rel="noopener noreferrer" className="text-brand-400 hover:underline inline-flex items-center gap-1">
              https://myadcenter.google.com/ <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </li>
          <li>
            <strong>Digital Advertising Alliance (DAA) Opt-Out:</strong>{' '}
            <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-brand-400 hover:underline inline-flex items-center gap-1">
              https://www.aboutads.info/choices/ <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </li>
          <li>
            <strong>How Google uses information from sites or apps that use our services:</strong>{' '}
            <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" className="text-brand-400 hover:underline inline-flex items-center gap-1">
              https://policies.google.com/technologies/partner-sites <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-8">{extra.h6}</h2>
        <p>{extra.p6}</p>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </div>
  );
};

const termsExtraSections = {
  en: {
    h4: "4. No Financial, Tax, or Legal Advice Disclaimer",
    p4: "GlobalPayCalc is an educational software platform maintained by the GlobalPayCalc Team. None of the calculators, tax regime comparisons (including Spain's Beckham Law Art. 93 LIRPF, US W-2 vs 1099, UK IR35, or Germany freelancer simulations), or editorial guides constitute formal tax, legal, accounting, or investment advice. Statutory tax brackets, social security caps, and municipal surcharges depend on your personal residency status, family allowances, and bilateral double-taxation treaties. Always consult a qualified Chartered Accountant, CPA, asesor fiscal, or Steuerberater before filing official tax returns or signing employment contracts.",
    h5: "5. Limitation of Liability",
    p5: "All tools and reference figures are provided on an 'as-is' basis without warranties of any kind. Under no circumstances shall GlobalPayCalc or the GlobalPayCalc Team be liable for any direct, indirect, or consequential financial loss arising from reliance on estimates generated by this website."
  },
  tr: {
    h4: "4. Mali, Vergisel veya Hukuki Tavsiye Niteliği Taşımama Beyanı",
    p4: "GlobalPayCalc, GlobalPayCalc Ekibi tarafından geliştirilen eğitim ve simülasyon amaçlı bir yazılım platformudur. Sitede yer alan hiçbir hesaplama aracı, vergi rejimi karşılaştırması (İspanya Beckham Yasası, ABD W-2 vs 1099, İngiltere IR35 veya Almanya serbest meslek simülasyonları dahil) veya rehber içerik; resmi mali müşavirlik, vergi danışmanlığı, hukuki görüş veya yatırım tavsiyesi teşkil etmez. Vergi beyannamesi vermeden veya uluslararası iş sözleşmesi imzalamadan önce mutlaka yetkili bir mali müşavire (SMMM/YMM veya ilgili ülkedeki lisanslı vergi danışmanına) danışınız.",
    h5: "5. Sorumluluğun Sınırlandırılması",
    p5: "Tüm hesaplama araçları ve referans veriler 'olduğu gibi' sunulmaktadır. GlobalPayCalc veya GlobalPayCalc Ekibi, bu web sitesindeki tahminlere dayanılarak alınan kararlardan doğabilecek doğrudan veya dolaylı hiçbir finansal zarardan sorumlu tutulamaz."
  }
};

export const TermsOfService = ({ lang = 'en' }) => {
  const t = (path) => getTranslation(lang, path);
  const schema = buildLegalSchema(lang, 'terms', t('legal.terms.title'), t('legal.terms.desc'));
  const extra = termsExtraSections[lang] || termsExtraSections.en;

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <div className="flex items-center space-x-3 mb-8">
        <FileText className="w-8 h-8 text-brand-500" />
        <h1 className="text-4xl font-black text-white">{t('legal.terms.title')}</h1>
      </div>
      <div className="prose prose-invert max-w-none text-slate-300 space-y-6">
        <p className="text-xs font-mono text-slate-400">{t('legal.lastUpdated')}: {LAST_UPDATED_DATE}</p>
        <h2 className="text-2xl font-bold text-white mt-8">{t('legal.terms.h1')}</h2>
        <p>{t('legal.terms.p1')}</p>
        
        <h2 className="text-2xl font-bold text-white mt-8">{t('legal.terms.h2')}</h2>
        <p>{t('legal.terms.p2')}</p>

        <h2 className="text-2xl font-bold text-white mt-8">{t('legal.terms.h3')}</h2>
        <p>{t('legal.terms.p3')}</p>

        <h2 className="text-2xl font-bold text-white mt-8">{extra.h4}</h2>
        <p>{extra.p4}</p>

        <h2 className="text-2xl font-bold text-white mt-8">{extra.h5}</h2>
        <p>{extra.p5}</p>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </div>
  );
};

export const AboutUs = ({ lang = 'en' }) => {
  const t = (path) => getTranslation(lang, path);
  const schema = buildLegalSchema(lang, 'about', t('legal.about.title'), t('legal.about.desc'));

  const complianceData = {
    en: {
      title: "Editorial Methodology & Statutory Data Sources",
      text: "GlobalPayCalc is built and maintained by the GlobalPayCalc Team—an independent software engineering and financial modeling group focused on transparent, client-side tools for international professionals. Every calculator pairs deterministic browser-based math with documented statutory tax schedules published by primary government authorities (such as Spain's Agencia Tributaria / BOE, the US IRS, the UK HMRC, Germany's BMF, and the OECD Taxing Wages dataset) and official LLM provider API pricing sheets. Whenever tax legislation changes—such as Spain's Ley 28/2022 and Ley 7/2024 updates to Article 93 LIRPF—we update our calculation parameters and document the exact statutory rates and ceilings on the page. All tools are strictly educational and do not substitute personalized advice from a licensed tax advisor."
    },
    tr: {
      title: "Araştırma Metodolojisi ve Resmi Veri Kaynakları",
      text: "GlobalPayCalc, uluslararası çalışanlar ve geliştiriciler için şeffaf, tarayıcı tabanlı finansal araçlar geliştiren bağımsız GlobalPayCalc Ekibi tarafından yönetilmektedir. Platformdaki her hesaplama aracı; ulusal maliye kurumlarının (İspanya Agencia Tributaria / BOE, ABD IRS, İngiltere HMRC, Almanya BMF, Türkiye GİB ve OECD Taxing Wages veri setleri) yayınladığı resmi vergi dilimleri ve bulut sağlayıcılarının resmi API fiyat tarifeleri temel alınarak modellenmiştir. Vergi mevzuatlarında yapılan değişiklikler (örneğin İspanya Beckham Yasası Madde 93 LIRPF üzerindeki Ley 28/2022 ve Ley 7/2024 güncellemeleri) düzenli olarak hesaplama motorlarımıza işlenir ve kullanılan formüller sayfa içindeki rehberlerde açıkça paylaşılır. Araçlarımız bilgilendirme ve eğitim amaçlıdır; resmi mali müşavirlik tavsiyesi yerine geçmez."
    },
    es: {
      title: "Metodología Editorial y Fuentes Normativas Oficiales",
      text: "GlobalPayCalc es desarrollado y mantenido por el Equipo de GlobalPayCalc (GlobalPayCalc Team). Nuestras calculadoras combinan modelos matemáticos ejecutados 100% en el navegador con tablas impositivas oficiales publicadas por autoridades tributarias nacionales (incluyendo la Agencia Tributaria de España / BOE para el Art. 93 LIRPF Ley Beckham tras la Ley 28/2022 y Ley 7/2024, el IRS de EE.UU., HMRC del Reino Unido, el BMF de Alemania y la OCDE). Nuestras herramientas tienen fines estrictamente educativos e informativos y no sustituyen el asesoramiento de un asesor fiscal colegiado."
    },
    de: {
      title: "Berechnungsmethodik und Amtliche Datenquellen",
      text: "GlobalPayCalc wird vom GlobalPayCalc-Team entwickelt und gepflegt. Unsere Rechner basieren auf dokumentierten gesetzlichen Steuertarifen und Sozialversicherungsparametern offizieller Behörden (darunter das deutsche Bundesministerium der Finanzen BMF, die spanische Agencia Tributaria AEAT, der US-amerikanische IRS, die britische HMRC sowie die OECD-Studie „Taxing Wages“) sowie den offiziellen API-Preislisten der KI-Anbieter. Alle Berechnungen dienen ausschließlich der unverbindlichen Information und ersetzen keine steuerliche Beratung durch einen Steuerberater."
    },
    fr: {
      title: "Méthodologie Éditoriale et Sources Officielles",
      text: "GlobalPayCalc est développé et maintenu par l'équipe GlobalPayCalc (GlobalPayCalc Team). Nos simulateurs s'appuient sur les barèmes fiscaux et plafonds de cotisations sociales publiés par les administrations officielles (administration fiscale, Agencia Tributaria espagnole AEAT, IRS, HMRC, BMF et rapports « Taxing Wages » de l'OCDE) ainsi que sur les grilles tarifaires officielles des fournisseurs d'API IA. Ces outils sont fournis à titre purement éducatif et ne remplacent pas une consultation auprès d'un expert-comptable."
    },
    pt: {
      title: "Metodologia Editorial e Fontes Oficiais",
      text: "O GlobalPayCalc é desenvolvido e mantido pela Equipe GlobalPayCalc (GlobalPayCalc Team). Nossos cálculos são baseados em tabelas oficiais publicadas pelas autoridades fiscais nacionais (incluindo Receita Federal, Agencia Tributaria da Espanha AEAT, IRS, HMRC, BMF e relatórios da OCDE) e nas tabelas oficiais de preços de APIs de IA. Esta plataforma tem finalidade exclusivamente informativa e educativa, não substituindo a consultoria de um contador certificado."
    },
    id: {
      title: "Metodologi Editorial & Sumber Data Resmi",
      text: "GlobalPayCalc dikembangkan dan dikelola oleh Tim GlobalPayCalc (GlobalPayCalc Team).Semua model perhitungan pajak dan biaya sosial mengacu pada publikasi resmi otoritas pajak nasional (termasuk Ditjen Pajak, AEAT Spanyol, IRS AS, HMRC Inggris, BMF Jerman, dan laporan OECD) serta lembar harga resmi penyedia API AI. Alat ini bersifat edukatif dan bukan merupakan nasihat perpajakan formal."
    },
    ja: {
      title: "編集メソドロジーおよび公的データソース",
      text: "GlobalPayCalcは、国際的なプロフェッショナルや開発者向けに透明性の高いクライアントサイド計算ツールを開発・運営するGlobalPayCalcチーム（GlobalPayCalc Team）によって管理されています。すべての計算モデルは、各国の税務当局（スペイン税務庁AEAT、米国IRS、英国HMRC、ドイツ連邦財務省BMF、日本国税庁、およびOECD「Taxing Wages」統計）が公表する法定税率・社会保険料データ、およびAIプロバイダーの公式API料金表に基づいています。当サイトのツールは教育および概算比較を目的としており、税理士による個別の税務アドバイスに代わるものではありません。"
    }
  };

  const comp = complianceData[lang] || complianceData.en;

  const primaryRegistries = [
    { name: "Spain — Agencia Tributaria (AEAT) & BOE", detail: "Ley 35/2006 (Art. 93 Special Expat Regime / Beckham Law), Ley 28/2022, Ley 7/2024, Modelo 149 & Modelo 151", url: "https://sede.agenciatributaria.gob.es/" },
    { name: "United States — Internal Revenue Service (IRS)", detail: "Federal Income Tax Brackets, Standard Deduction, FICA & Self-Employment Tax (SECA 15.3%)", url: "https://www.irs.gov/" },
    { name: "United Kingdom — HM Revenue & Customs (HMRC)", detail: "Income Tax Rates, Class 1/2/4 National Insurance, Corporation Tax & Off-Payroll Working (IR35)", url: "https://www.gov.uk/government/organisations/hm-revenue-customs" },
    { name: "Germany — Bundesministerium der Finanzen (BMF)", detail: "Einkommensteuertarif (§ 32a EStG), Solidaritätszuschlag & Sozialversicherungs-Rechengrößen", url: "https://www.bundesfinanzministerium.de/" },
    { name: "OECD — Taxing Wages & Purchasing Power Parity", detail: "Cross-country statutory tax wedges, employer social security burdens & comparative price levels", url: "https://www.oecd.org/tax/tax-policy/taxing-wages-brochure.pdf" }
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <div className="flex items-center space-x-3 mb-8">
        <Info className="w-8 h-8 text-brand-500" />
        <h1 className="text-4xl font-black text-white">{t('legal.about.title')}</h1>
      </div>
      <div className="prose prose-invert max-w-none text-slate-300 space-y-6">
        <p className="text-xl">{t('legal.about.intro')}</p>
        <h2 className="text-2xl font-bold text-white mt-8">{t('legal.about.h1')}</h2>
        <p>{t('legal.about.p1')}</p>
        
        <h2 className="text-2xl font-bold text-white mt-8">{t('legal.about.h2')}</h2>
        <p>{t('legal.about.p2')}</p>

        <h2 className="text-2xl font-bold text-white mt-8">{comp.title}</h2>
        <p className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800 leading-relaxed text-sm text-slate-300">
          {comp.text}
        </p>

        <div className="mt-8 space-y-3">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-brand-400" />
            <span>Primary Statutory & Economic Reference Registries</span>
          </h3>
          <div className="grid grid-cols-1 gap-3">
            {primaryRegistries.map((reg, idx) => (
              <a
                key={idx}
                href={reg.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-brand-500/40 transition flex items-start justify-between gap-4 no-underline group"
              >
                <div>
                  <div className="text-sm font-bold text-white group-hover:text-brand-300">{reg.name}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{reg.detail}</div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-brand-400 shrink-0 mt-1" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </div>
  );
};

export const Contact = ({ lang = 'en' }) => {
  const t = (path) => getTranslation(lang, path);
  const schema = buildLegalSchema(lang, 'contact', t('legal.contact.title'), t('legal.contact.desc'));
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <div className="flex items-center space-x-3 mb-8">
        <Mail className="w-8 h-8 text-brand-500" />
        <h1 className="text-4xl font-black text-white">{t('legal.contact.title')}</h1>
      </div>
      <div className="glass-card p-8 rounded-2xl border-slate-800 space-y-6">
        <p className="text-slate-300 leading-relaxed">{t('legal.contact.intro')}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="text-xs font-bold uppercase text-brand-400">Editorial & Technical Support</div>
            <div className="text-sm font-bold text-white">GlobalPayCalc Team</div>
            <div className="flex items-center space-x-2 text-sm text-slate-300 pt-1">
              <Mail className="w-4 h-4 text-brand-400 shrink-0" />
              <a href="mailto:support@globalpaycalc.com" className="text-brand-400 hover:underline font-mono">support@globalpaycalc.com</a>
            </div>
          </div>
          <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="text-xs font-bold uppercase text-emerald-400">Statutory Data Updates & Bug Reports</div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Spotted a newly enacted tax bracket, social security cap update, or LLM API pricing change? Email us with the official government or provider link and we will verify and update our engine.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-400 pt-2 border-t border-slate-800/80">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{t('legal.contact.response')}</span>
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </div>
  );
};
