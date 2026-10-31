import React from 'react';
import { Link } from 'react-router-dom';
import { Lock, RefreshCw, Star, Globe, BookOpen, ShieldCheck, ExternalLink, ArrowRight } from 'lucide-react';
import { getTranslation } from '../i18n';
import { editorialGuides } from '../data/editorialGuidesData';

const uiTexts = {
  en: {
    guidesTitle: "Featured International Tax & Compensation Research Guides",
    guidesSubtitle: "Explore our comprehensive statutory guides with worked case studies, tax tables, and legal references.",
    viewAllGuides: "View All 10 Research Guides",
    badge1: "100% Client-Side RAM Processing",
    badge2: "Aligned with Official OECD & Statutory Tax Tables",
    badge3: "Free Access Across All 13 Financial & Tax Calculators",
    hubTitle: "Complete Suite of Global Financial, Tax & Compensation Calculators",
    hubSubtitle: "Explore our 13 specialized interactive engines with full statutory breakdowns and worked examples.",
    sourcesTitle: "Official Statutory Tax & Data References",
    sourcesDesc: "Our calculators and editorial guides reference primary government tax authorities and international economic benchmarks:"
  },
  tr: {
    guidesTitle: "Öne Çıkan Uluslararası Vergi ve Maaş Mevzuatı Rehberleri",
    guidesSubtitle: "Örnek vergi hesaplama tabloları, kanun maddeleri ve vaka analizleri içeren kapsamlı araştırma kütüphanemiz.",
    viewAllGuides: "Tüm 10 Mevzuat Rehberini İncele",
    badge1: "%100 Tarayıcı Belleğinde (RAM) Yerel İşlem",
    badge2: "OECD ve Resmi Vergi Mevzuatlarıyla Uyumlu",
    badge3: "13 Finansal ve Vergi Hesaplama Aracına Ücretsiz Erişim",
    hubTitle: "Küresel Finans, Vergi ve Uzaktan Maaş Hesaplama Araçları Dizini",
    hubSubtitle: "Resmi mevzuat analizleri ve örnek hesaplamalarla desteklenen 13 interaktif aracımızı inceleyin.",
    sourcesTitle: "Resmi Vergi Daireleri ve Birincil Veri Kaynakları",
    sourcesDesc: "Hesaplama motorlarımız ve rehberlerimiz birincil resmi maliye kurumlarını ve uluslararası ekonomik raporları referans alır:"
  }
};

const coreCalculatorsList = [
  { path: '', navKey: 'nav.takeHome', fallback: 'Global Net Salary & Income Tax Calculator', badge: '40+ Countries' },
  { path: '/beckham-law', navKey: 'nav.beckhamLaw', fallback: 'Spain Beckham Law Calculator (Art. 93 LIRPF)', badge: '24% Flat Tax' },
  { path: '/contractor', navKey: 'nav.contractor', fallback: 'W-2 vs 1099, UK IR35 & DE Freelancer Calculator', badge: 'B2B vs Perm' },
  { path: '/eor-cost', navKey: 'nav.eorCost', fallback: 'Employer of Record (EOR) & Hiring Cost Calculator', badge: 'EOR vs Entity' },
  { path: '/hourly-rate', navKey: 'nav.hourlyRate', fallback: 'Freelancer Billable Hourly Rate & Utilization Engine', badge: 'Freelance' },
  { path: '/nomad-visa', navKey: 'nav.nomadVisa', fallback: 'Digital Nomad Visa Minimum Income Eligibility Checker', badge: 'Visa Rules' },
  { path: '/crypto-tax', navKey: 'nav.cryptoTax', fallback: 'Crypto Capital Gains & Expat Tax Calculator', badge: 'FIFO / Holding' },
  { path: '/salary', navKey: 'nav.salary', fallback: 'Digital Nomad Relocation Tax & Cost of Living Simulator', badge: 'PPP & Tax' },
  { path: '/fx-fees', navKey: 'nav.fxFees', fallback: 'Hidden Bank FX Markup & Cross-Border Wire Calculator', badge: 'Mid-Market FX' },
  { path: '/vat', navKey: 'nav.vat', fallback: 'Global B2B Invoice VAT, GST & Reverse-Charge Calculator', badge: 'EU VIES / GST' },
  { path: '/inflation', navKey: 'nav.inflation', fallback: 'Multi-Currency CPI Inflation & Purchasing Power Engine', badge: 'Real Value' },
  { path: '/timezone', navKey: 'nav.timezone', fallback: 'Global Distributed Team Timezone Overlap Planner', badge: 'Async Work' },
  { path: '/ai', navKey: 'nav.aiCost', fallback: 'LLM API Token Cost & Prompt Caching Simulator', badge: 'AI FinOps' }
];

const officialSources = [
  { org: 'Agencia Tributaria (Spain AEAT)', ref: 'Ley 35/2006 Art. 93 (Beckham Law), Ley 28/2022 & Ley 7/2024, Modelo 149/151', url: 'https://sede.agenciatributaria.gob.es/' },
  { org: 'Internal Revenue Service (US IRS)', ref: 'Federal Income Tax Brackets, FICA, SECA (15.3%) & QBI Deduction Rules', url: 'https://www.irs.gov/' },
  { org: 'HM Revenue & Customs (UK HMRC)', ref: 'Income Tax Bands, Class 1/4 National Insurance, Dividend Tax & Off-Payroll (IR35)', url: 'https://www.gov.uk/government/organisations/hm-revenue-customs' },
  { org: 'Bundesministerium der Finanzen (Germany BMF)', ref: 'Einkommensteuertarif (§ 32a EStG), Solidaritätszuschlag & Sozialversicherungs-Rechengrößen', url: 'https://www.bundesfinanzministerium.de/' },
  { org: 'Gelir İdaresi Başkanlığı (Turkey GİB)', ref: '193 S.K. GVK Md. 89/13 (%80 Yazılım/Tasarım İhracatı İstisnası) & 3065 S.K. Md. 11/1-a KDV İstisnası', url: 'https://www.gib.gov.tr/' },
  { org: 'OECD Taxing Wages & Economic Data', ref: 'Comparative Income Tax, Employee/Employer Social Security Contributions & PPP Indices', url: 'https://www.oecd.org/tax/tax-policy/taxing-wages-brochure.pdf' }
];

export default function ProgrammaticSeoGrid({ lang = 'en' }) {
  const isTr = lang === 'tr';
  const activeUi = uiTexts[isTr ? 'tr' : 'en'];
  const langPrefix = isTr ? '/tr' : '';

  return (
    <div className="space-y-8 max-w-4xl mx-auto my-12">
      {/* Featured Editorial Research Library (/guides) */}
      <div className="glass-card p-6 sm:p-8 rounded-3xl border-slate-800 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
          <div className="flex items-center space-x-3">
            <BookOpen className="w-6 h-6 text-brand-400 shrink-0" />
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-white">
                {activeUi.guidesTitle}
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                {activeUi.guidesSubtitle}
              </p>
            </div>
          </div>
          <Link
            to={`${langPrefix}/guides`}
            className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-brand-600/20 hover:bg-brand-600/30 border border-brand-500/30 text-brand-300 text-xs font-bold transition shrink-0"
          >
            <span>{activeUi.viewAllGuides}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {editorialGuides.slice(0, 6).map((guide) => {
            const content = isTr ? guide.tr : guide.en;
            return (
              <Link
                key={guide.slug}
                to={`${langPrefix}/guides/${guide.slug}`}
                className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-brand-500/40 hover:bg-slate-900 transition flex flex-col justify-between space-y-2.5 group"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                    <span className="text-brand-400 font-bold uppercase">{content.category}</span>
                    <span>{guide.readTime}</span>
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-200 group-hover:text-white leading-snug">
                    {content.title}
                  </h3>
                </div>
                <span className="text-[11px] font-semibold text-emerald-400 flex items-center space-x-1">
                  <span>{isTr ? 'Mevzuat Rehberini Oku' : 'Read Statutory Guide'}</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
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

      {/* Core Calculators Directory Hub */}
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
              const targetUrl = `${langPrefix}${tool.path === '' ? (isTr ? '' : '/') : tool.path}`;
              const localizedLabel = !isTr ? tool.fallback : (getTranslation(lang, tool.navKey) || tool.fallback);
              return (
                <Link
                  key={tool.path}
                  to={targetUrl}
                  className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-brand-500/40 hover:bg-slate-900 transition text-xs flex items-center justify-between group"
                >
                  <span className="text-slate-200 group-hover:text-white font-semibold truncate pr-2">
                    {localizedLabel}
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
