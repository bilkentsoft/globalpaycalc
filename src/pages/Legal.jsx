import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, FileText, Info, Mail } from 'lucide-react';
import { getTranslation } from '../i18n';

export const PrivacyPolicy = ({ lang = 'en' }) => {
  const t = (path) => getTranslation(lang, path);
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <Helmet>
        <title>{t('legal.privacy.title')} | GlobalPayCalc</title>
        <meta name="description" content={t('legal.privacy.desc')} />
      </Helmet>
      <div className="flex items-center space-x-3 mb-8">
        <Shield className="w-8 h-8 text-brand-500" />
        <h1 className="text-4xl font-black text-white">{t('legal.privacy.title')}</h1>
      </div>
      <div className="prose prose-invert max-w-none text-slate-300 space-y-6">
        <p>{t('legal.lastUpdated')}: {new Date().toLocaleDateString()}</p>
        <h2 className="text-2xl font-bold text-white mt-8">{t('legal.privacy.h1')}</h2>
        <p>{t('legal.privacy.p1')}</p>
        
        <h2 className="text-2xl font-bold text-white mt-8">{t('legal.privacy.h2')}</h2>
        <p>{t('legal.privacy.p2')}</p>

        <h2 className="text-2xl font-bold text-white mt-8">{t('legal.privacy.h3')}</h2>
        <p>{t('legal.privacy.p3')}</p>

        <h2 className="text-2xl font-bold text-white mt-8">{t('legal.privacy.h4')}</h2>
        <p>{t('legal.privacy.p4')}</p>
      </div>
    </div>
  );
};

export const TermsOfService = ({ lang = 'en' }) => {
  const t = (path) => getTranslation(lang, path);
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <Helmet>
        <title>{t('legal.terms.title')} | GlobalPayCalc</title>
        <meta name="description" content={t('legal.terms.desc')} />
      </Helmet>
      <div className="flex items-center space-x-3 mb-8">
        <FileText className="w-8 h-8 text-brand-500" />
        <h1 className="text-4xl font-black text-white">{t('legal.terms.title')}</h1>
      </div>
      <div className="prose prose-invert max-w-none text-slate-300 space-y-6">
        <p>{t('legal.lastUpdated')}: {new Date().toLocaleDateString()}</p>
        <h2 className="text-2xl font-bold text-white mt-8">{t('legal.terms.h1')}</h2>
        <p>{t('legal.terms.p1')}</p>
        
        <h2 className="text-2xl font-bold text-white mt-8">{t('legal.terms.h2')}</h2>
        <p>{t('legal.terms.p2')}</p>

        <h2 className="text-2xl font-bold text-white mt-8">{t('legal.terms.h3')}</h2>
        <p>{t('legal.terms.p3')}</p>
      </div>
    </div>
  );
};

export const AboutUs = ({ lang = 'en' }) => {
  const t = (path) => getTranslation(lang, path);

  const complianceData = {
    en: {
      title: "Data Accuracy & Financial Compliance (EEAT)",
      text: "All computations, progressive tax bracket logic, and social security thresholds are verified against official datasets published by national tax authorities (including the US IRS, UK HMRC, German BMF, and OECD). Our AI token cost data is continuously updated based on official cloud provider API pricing sheets. All mathematical models are verified by qualified financial analysts and software engineers to ensure enterprise-grade accuracy. Our services are strictly educational and do not constitute formal tax or investment advice."
    },
    tr: {
      title: "Veri Doğruluğu ve Finansal Uyumluluk (EEAT)",
      text: "Sistemimizde yer alan tüm vergi dilimleri, sosyal güvenlik prim hesaplamaları ve kesinti oranları; ulusal vergi dairelerinin (IRS, HMRC, BMF, Gelir İdaresi Başkanlığı vb.) ve OECD'nin yayınladığı resmi veri setleri temel alınarak yapılandırılmıştır. Yapay zeka token maliyetleri ise bulut sağlayıcılarının resmi fiyat listeleriyle eşzamanlı güncellenir. Matematiksel hesaplama modelleri, finans uzmanları ve yazılım mühendisleri tarafından denetlenmektedir. Araçlarımız bilgilendirme amaçlı olup resmi mali müşavirlik tavsiyesi niteliğinde değildir."
    },
    es: {
      title: "Exactitud de Datos y Cumplimiento Financiero (EEAT)",
      text: "Todos los cálculos de impuestos, tramos de IRPF y seguridad social se verifican con los datos oficiales publicados por las autoridades fiscales nacionales (incluyendo la Agencia Tributaria de España, IRS, HMRC, BMF y la OCDE). Todos los modelos matemáticos son validados por analistas financieros calificados y desarrolladores de software para garantizar la máxima precisión. Esta herramienta es de carácter informativo y no constituye asesoramiento financiero o fiscal formal."
    },
    de: {
      title: "Datengenauigkeit und Finanzkonformität (EEAT)",
      text: "Alle Steuerberechnungen, Sozialversicherungsbeiträge und Abzugsbeträge werden auf Basis offizieller Daten der nationalen Steuerbehörden (u.a. BMF, IRS, HMRC und OECD) validiert. Die AI-API-Kosten werden fortlaufend an die Tarife der Anbieter angepasst. Alle Modelle werden von Finanzanalysten und Softwareentwicklern geprüft, um höchste Präzision zu gewährleisten. Diese Berechnungen dienen nur zur Information und ersetzen keine steuerliche Beratung."
    },
    fr: {
      title: "Précision des Données et Conformité Financière (EEAT)",
      text: "Tous les calculs fiscaux, tranches d'impôt et cotisations de sécurité sociale sont basés sur les données officielles publiées par les administrations fiscales nationales (notamment l'administration fiscale, IRS, HMRC, BMF et l'OCDE). Les tarifs de jetons d'IA sont mis à jour selon les grilles officielles des fournisseurs. Tous les modèles de calcul sont vérifiés par des analystes financiers et des ingénieurs logiciels. Cet outil est indicatif et ne remplace pas un conseil fiscal professionnel."
    },
    pt: {
      title: "Precisão dos Dados e Conformidade Financeira (EEAT)",
      text: "Todos os cálculos fiscais, alíquotas de imposto de renda e contribuições de seguridade social são baseados em dados oficiais divulgados pelas autoridades fiscais nacionais (incluindo a Receita Federal, IRS, HMRC, BMF e OCDE). Os custos de API de IA são atualizados com base nas tabelas oficiais de preços. Todos os modelos matemáticos são verificados por analistas financeiros qualificados e engenheiros de software. Esta ferramenta é apenas para fins informativos e não constitui consultoria fiscal formal."
    },
    id: {
      title: "Akurasi Data & Kepatuhan Keuangan (EEAT)",
      text: "Semua perhitungan pajak, tarif pajak penghasilan, dan kontribusi jaminan sosial diverifikasi berdasarkan data resmi yang diterbitkan oleh otoritas pajak nasional (termasuk Ditjen Pajak, IRS, HMRC, BMF, dan OECD). Data biaya token AI diperbarui secara berkala sesuai dengan lembar harga resmi penyedia cloud. Seluruh model perhitungan diverifikasi oleh analis keuangan dan insinyur perangkat lunak untuk akurasi optimal. Alat ini bersifat informatif dan bukan merupakan saran perpajakan formal."
    },
    ja: {
      title: "データの正確性と財務上の準拠 (EEAT)",
      text: "すべての税金計算、所得税率、および社会保険料の計算モデルは、各国の税務当局（国税庁、IRS、HMRC、BMF、およびOECDなど）が公表している公式データセットに準拠しています。AIトークンコストは、クラウドプロバイダーの公式料金表に基づいて定期的に更新されます。数学的モデルは、財務アナリストとソフトウェアエンジニアによって検証され、正確性を確保しています。本ツールは情報提供のみを目的としており、専門的な税務アドバイスを提供するものではありません。"
    }
  };

  const comp = complianceData[lang] || complianceData.en;

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <Helmet>
        <title>{t('legal.about.title')} | GlobalPayCalc</title>
        <meta name="description" content={t('legal.about.desc')} />
      </Helmet>
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
        <p className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800 leading-relaxed text-sm text-slate-400">
          {comp.text}
        </p>
      </div>
    </div>
  );
};

export const Contact = ({ lang = 'en' }) => {
  const t = (path) => getTranslation(lang, path);
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <Helmet>
        <title>{t('legal.contact.title')} | GlobalPayCalc</title>
        <meta name="description" content={t('legal.contact.desc')} />
      </Helmet>
      <div className="flex items-center space-x-3 mb-8">
        <Mail className="w-8 h-8 text-brand-500" />
        <h1 className="text-4xl font-black text-white">{t('legal.contact.title')}</h1>
      </div>
      <div className="glass-card p-8 rounded-2xl border-slate-800">
        <p className="text-slate-300 mb-6">{t('legal.contact.intro')}</p>
        <div className="space-y-4">
          <div className="flex items-center space-x-3 text-slate-300">
            <Mail className="w-5 h-5 text-brand-400" />
            <span>Email: <a href="mailto:support@globalpaycalc.com" className="text-brand-400 hover:underline">support@globalpaycalc.com</a></span>
          </div>
          <p className="text-sm text-slate-400 mt-8">{t('legal.contact.response')}</p>
        </div>
      </div>
    </div>
  );
};
