import { jsxs, jsx } from "react/jsx-runtime";
import "react";
import { Helmet } from "react-helmet-async";
import { Shield, FileText, Info, Mail } from "lucide-react";
import { g as getTranslation } from "../entry-server.js";
import "react-dom/server";
import "react-router-dom/server.mjs";
import "react-router-dom";
import "@supabase/supabase-js";
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
      /* @__PURE__ */ jsx("p", { children: t("legal.about.p2") }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white mt-8", children: comp.title }),
      /* @__PURE__ */ jsx("p", { className: "bg-slate-900/60 p-5 rounded-2xl border border-slate-800 leading-relaxed text-sm text-slate-400", children: comp.text })
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
export {
  AboutUs,
  Contact,
  PrivacyPolicy,
  TermsOfService
};
