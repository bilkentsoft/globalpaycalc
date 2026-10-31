import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';

import NotFoundPage from './pages/NotFoundPage';
import ProtectedRoute from './components/ProtectedRoute';

import NomadTaxCalculator from './components/NomadTaxCalculator';
import DevTokenCalculator from './components/DevTokenCalculator';
import GlobalTakeHomeCalculator from './components/GlobalTakeHomeCalculator';
import ContractorVsPermCalculator from './components/ContractorVsPermCalculator';
import HiddenFxFeeCalculator from './components/HiddenFxFeeCalculator';
import GlobalInvoiceVatCalculator from './components/GlobalInvoiceVatCalculator';
import FreelancerRateCalculator from './components/FreelancerRateCalculator';
import InflationCalculator from './components/InflationCalculator';
import TimezoneOverlapCalculator from './components/TimezoneOverlapCalculator';
import BeckhamLawCalculator from './components/BeckhamLawCalculator';
import CryptoTaxCalculator from './components/CryptoTaxCalculator';
import EorCostCalculator from './components/EorCostCalculator';
import NomadVisaCalculator from './components/NomadVisaCalculator';

import ProgrammaticSeoGrid from './components/ProgrammaticSeoGrid';
import ToolSeoArticle from './components/ToolSeoArticle';
import { GuidesIndexPage, GuideArticlePage } from './pages/GuidesPage';

const AdminDashboard = React.lazy(() => import('./components/AdminDashboard'));

// Direct imports for Legal/Trust pages so SSR pre-renders full E-E-A-T content
import { PrivacyPolicy, TermsOfService, AboutUs, Contact } from './pages/Legal';

import { CookieConsent } from './components/CookieConsent';
import { getTranslation, supportedLanguages } from './i18n';
import { initializeAnalytics } from './utils/adEngine';
import { Sparkles, Globe, DollarSign, Briefcase, ArrowRightLeft, FileText, Clock, TrendingDown, UserCheck, Award, Cpu, Building2, BookOpen } from 'lucide-react';

// Localized SEO Metadata (Title, Description, and Unique H1) per Tool & Language
const localizedToolSeo = {
  'take-home': {
    en: { h1: 'Global Net Salary & Income Tax Calculator', title: 'Global Net Salary & Tax Calculator (2026) | GlobalPayCalc', desc: 'Calculate net take-home salary after federal and state income tax, social security, and FICA deductions across 40+ countries.' },
    tr: { h1: 'Küresel Net Maaş ve Gelir Vergisi Hesaplayıcı', title: 'Küresel Net Maaş ve Gelir Vergisi Hesaplama (2026) | GlobalPayCalc', desc: '40+ ülkede gelir vergisi dilimleri, SGK/sosyal güvenlik kesintileri ve FICA sonrası elinize geçecek net maaşı anında hesaplayın.' }
  },
  'contractor': {
    en: { h1: 'W-2 vs 1099, IR35 & Freelancer Tax Equivalence Calculator', title: 'W-2 vs 1099, IR35 & Freelancer Tax Calculator (US, UK, Germany) | GlobalPayCalc', desc: 'Compare W-2 vs 1099 contractor rates, UK Inside/Outside IR35 take-home pay, and Germany freelancer tax vs salaried employment.' },
    tr: { h1: 'B2B Sözleşmeli (Freelance) ve Bordrolu Maaş Karşılaştırma', title: 'B2B Freelance ve Bordrolu Maaş Karşılaştırma | GlobalPayCalc', desc: 'Kadrolu (SGK/W-2) maaş teklifi ile B2B faturalı sözleşmeli çalışma maliyetlerini, vergi ve yan hak farklarıyla karşılaştırın.' }
  },
  'hourly-rate': {
    en: { h1: 'Freelancer Target Income to Hourly Rate Calculator', title: 'Freelancer Hourly Rate Calculator | GlobalPayCalc', desc: 'Calculate minimum required hourly and daily billing rates based on your annual target income, taxes, expenses, and billable hours.' },
    tr: { h1: 'Freelancer Saatlik ve Günlük Ücret Hesaplama Aracı', title: 'Freelancer Saatlik Ücret Hesaplama Aracı | GlobalPayCalc', desc: 'Yıllık hedef net geliriniz, vergi oranınız, iş giderleriniz ve faturalandırılabilir çalışma saatlerinize göre minimum saatlik ücretinizi hesaplayın.' }
  },
  'beckham-law': {
    en: { h1: 'Beckham Law Spain Tax & Net Salary Calculator', title: 'Beckham Law Spain Tax Calculator (24% Flat Tax & Expat Salary) | GlobalPayCalc', desc: "Calculate your net salary and expat tax savings with Spain's Beckham Law calculator (24% flat tax), Portugal IFICI/NHR, Italy Impatriati, and Dubai 0% tax." },
    tr: { h1: 'İspanya Beckham Yasası ve Expat Vergi Avantajı Hesaplayıcı', title: 'İspanya Beckham Yasası ve Expat Vergi Hesaplama | GlobalPayCalc', desc: 'İspanya Beckham Yasası (%24 sabit vergi), Portekiz IFICI/NHR, İtalya Impatriati ve Dubai %0 vergi rejimleriyle yıllık vergi tasarrufunuzu hesaplayın.' }
  },
  'crypto-tax': {
    en: { h1: 'Crypto & Stablecoin (USDT/USDC) Salary Tax Calculator', title: 'Crypto & USDT Salary Tax Calculator | GlobalPayCalc', desc: 'Calculate income and capital gains tax liabilities for remote salaries paid in USDT, USDC, BTC, or ETH across major jurisdictions.' },
    tr: { h1: 'Kripto ve USDT/USDC Uzaktan Maaş Vergisi Hesaplayıcı', title: 'Kripto Maaş (USDT/USDC) Vergi Hesaplama | GlobalPayCalc', desc: 'USDT, USDC, BTC veya ETH ile alınan uzaktan çalışma maaşlarının ABD, İngiltere, Almanya ve Türkiye vergi mevzuatına göre yükümlülüğünü hesaplayın.' }
  },
  'eor-cost': {
    en: { h1: 'EOR Cost Calculator: Employer of Record Pricing vs Local Entity', title: 'EOR Cost Calculator: Employer of Record Fees & Pricing vs Local Entity | GlobalPayCalc', desc: 'Calculate how much an EOR costs (Deel, Remote, Oyster fees) and find the breakeven point vs setting up a local subsidiary.' },
    tr: { h1: 'EOR (Deel/Remote) ve Yerel Şirket Kurulum Maliyeti Karşılaştırma', title: 'EOR vs Yerel Şirket Kurma Maliyet Hesaplayıcı | GlobalPayCalc', desc: 'Deel veya Remote gibi EOR servislerine çalışan başı aylık ücret ödemek ile yurt dışında yerel tüzel kişilik kurmanın başabaş noktasını hesaplayın.' }
  },
  'nomad-visa': {
    en: { h1: 'Digital Nomad Visa Minimum Income Eligibility Checker', title: 'Digital Nomad Visa Income Eligibility Checker | GlobalPayCalc', desc: 'Verify monthly minimum income requirements and tax rules for Digital Nomad Visas in Spain, Portugal, Italy, Greece, Dubai, and Japan.' },
    tr: { h1: 'Dijital Göçebe Vizesi Gelir Şartı ve Uygunluk Testi', title: 'Dijital Göçebe Vizesi Gelir Şartı Sorgulama | GlobalPayCalc', desc: 'İspanya, Portekiz, İtalya, Yunanistan, Dubai ve Japonya dijital göçebe vizeleri için gereken minimum aylık gelir şartlarını anında kontrol edin.' }
  },
  'salary': {
    en: { h1: 'Global Remote Salary & Purchasing Power Parity (PPP) Calculator', title: 'Global Remote Salary & PPP Calculator | GlobalPayCalc', desc: 'Compare net remote salaries, cost of living index, and purchasing power parity across 150+ international cities and nomad hubs.' },
    tr: { h1: 'Ülkeler Arası Satın Alma Gücü Paritesi (PPP) ve Maaş Hesaplayıcı', title: 'Küresel Maaş ve Satın Alma Gücü (PPP) Hesaplama | GlobalPayCalc', desc: 'Farklı şehir ve ülkelerdeki yaşam maliyeti indekslerini, kira giderlerini ve net maaş satın alma gücü paritesini (PPP) karşılaştırın.' }
  },
  'inflation': {
    en: { h1: 'Inflation & Real Salary Purchasing Power Erosion Calculator', title: 'Inflation & Salary Purchasing Power Calculator | GlobalPayCalc', desc: 'Calculate real salary erosion and the exact annual pay raise percentage required to preserve your purchasing power against inflation.' },
    tr: { h1: 'Enflasyon Karşısında Maaş Erimesi ve Zam Oranı Hesaplayıcı', title: 'Enflasyon Maaş Erimesi ve Alım Gücü Hesaplama | GlobalPayCalc', desc: 'Yıllık enflasyon oranlarına göre maaşınızın gerçek alım gücü kaybını ve standartlarınızı korumak için gereken zam yüzdesini hesaplayın.' }
  },
  'fx-fees': {
    en: { h1: 'Real Mid-Market FX Rate & Hidden Bank Wire Fee Estimator', title: 'Real FX Rate & Hidden Bank Fee Estimator | GlobalPayCalc', desc: 'Compare real mid-market exchange rates against hidden bank FX markups and international wire transfer fees across Wise, SWIFT, PayPal, and Stripe.' },
    tr: { h1: 'Gizli Banka Döviz (FX) Makası ve Yurt Dışı Transfer Komisyonu Hesaplayıcı', title: 'Gizli Banka FX Komisyonu ve SWIFT Maliyet Hesaplama | GlobalPayCalc', desc: 'Gerçek piyasa kuru ile SWIFT, PayPal, Stripe ve Wise uluslararası para transferlerindeki gizli kur makası kayıplarını karşılaştırın.' }
  },
  'vat': {
    en: { h1: 'Global B2B Invoice VAT, GST & Reverse Charge Calculator', title: 'Global Invoice & VAT Calculator | GlobalPayCalc', desc: 'Calculate net, VAT/GST amounts, and gross invoice totals with B2B cross-border Reverse Charge 0% export exemptions.' },
    tr: { h1: 'Uluslararası B2B Fatura, KDV/VAT ve İhracat İstisnası Hesaplayıcı', title: 'B2B Fatura KDV / VAT ve Stopaj Hesaplama | GlobalPayCalc', desc: 'Yurt dışı yazılım/hizmet ihracatı (%0 KDV / Reverse Charge) ve küresel KDV/GST oranlarıyla netten brüte fatura tutarlarını hesaplayın.' }
  },
  'timezone': {
    en: { h1: 'Global Remote Team Timezone Overlap & Meeting Window Planner', title: 'Timezone Overlap Calculator for Remote Teams | GlobalPayCalc', desc: 'Visualize working hour overlaps and optimal synchronous meeting windows for distributed engineering teams across global timezones.' },
    tr: { h1: 'Uzaktan Çalışan Ekipler İçin Zaman Dilimi Çakışması Planlayıcı', title: 'Küresel Zaman Dilimi ve Ortak Toplantı Saati Hesaplama | GlobalPayCalc', desc: 'ABD, Avrupa, Türkiye ve Asya saat dilimlerindeki dağıtık ekipler için ortak mesai saatlerini ve en uygun toplantı aralıklarını görselleştirin.' }
  },
  'ai': {
    en: { h1: 'LLM API Token Cost & Prompt Caching Simulator', title: 'LLM API Token Cost Simulator (Claude Sonnet 4.6, GPT-5.4, Gemini 2.5) | GlobalPayCalc', desc: 'Compare monthly API token costs and prompt caching savings across Claude Sonnet 4.6, GPT-5.4, Gemini 2.5 Pro, and DeepSeek V3.2.' },
    tr: { h1: 'Yapay Zeka (LLM) API Token Maliyeti ve Prompt Cache Simülatörü', title: 'LLM API Token Maliyet Hesaplayıcı (Claude 4.6, GPT-5.4, Gemini 2.5) | GlobalPayCalc', desc: 'Claude Sonnet 4.6, GPT-5.4, Gemini 2.5 Pro ve DeepSeek V3.2 modellerinin aylık girdi/çıktı token ve önbellek maliyetlerini karşılaştırın.' }
  }
};

function ContentWrapper({ lang, t }) {
  const location = useLocation();
  const navigate = useNavigate();
  const pathSegments = location.pathname.split('/').filter(Boolean);
  
  const hasLangPrefix = supportedLanguages.some(l => l.code === pathSegments[0]);
  const activeTab = hasLangPrefix ? (pathSegments[1] || 'take-home') : (pathSegments[0] || 'take-home');
  const basePath = hasLangPrefix ? `/${pathSegments[0]}` : '';

  const [activeCat, setActiveCat] = useState('tax');

  const tools = [
    { path: '', slug: 'take-home', title: t('nav.takeHome'), desc: lang === 'tr' ? 'Gelir vergisi ve sosyal kesinti' : 'Net salary after tax & FICA', icon: DollarSign, color: 'text-emerald-400', bg: 'bg-emerald-500/10', cat: 'tax' },
    { path: '/contractor', slug: 'contractor', title: t('nav.contractor'), desc: lang === 'tr' ? 'B2B ve bordrolu karşılaştırma' : 'W2 vs 1099 contractor equivalency', icon: Briefcase, color: 'text-cyan-400', bg: 'bg-cyan-500/10', cat: 'tax' },
    { path: '/hourly-rate', slug: 'hourly-rate', title: t('nav.hourlyRate'), desc: lang === 'tr' ? 'Freelancer saatlik ücret hesabı' : 'Target income to hourly billing rate', icon: UserCheck, color: 'text-emerald-400', bg: 'bg-emerald-500/10', cat: 'tax' },
    { path: '/beckham-law', slug: 'beckham-law', title: t('nav.beckhamLaw'), desc: lang === 'tr' ? 'Expat vergi muafiyeti' : 'Spain Beckham law & expat incentives', icon: Award, color: 'text-rose-400', bg: 'bg-rose-500/10', cat: 'tax' },
    { path: '/crypto-tax', slug: 'crypto-tax', title: t('nav.cryptoTax'), desc: lang === 'tr' ? 'Kripto maaş vergi hesaplama' : 'Taxes on USDT/USDC remote salary', icon: Cpu, color: 'text-cyan-400', bg: 'bg-cyan-500/10', cat: 'tax' },
    { path: '/nomad-visa', slug: 'nomad-visa', title: t('nav.nomadVisa'), desc: lang === 'tr' ? 'Dijital göçebe vize uygunluğu' : 'Nomad visa minimum income check', icon: Globe, color: 'text-emerald-400', bg: 'bg-emerald-500/10', cat: 'tax' },
    { path: '/eor-cost', slug: 'eor-cost', title: t('nav.eorCost'), desc: lang === 'tr' ? 'EOR ve şirket kurma maliyeti' : 'Employer of Record vs local entity cost', icon: Building2, color: 'text-purple-400', bg: 'bg-purple-500/10', cat: 'tax' },
    { path: '/salary', slug: 'salary', title: t('nav.salary'), desc: lang === 'tr' ? 'Ülkeler arası satın alma gücü' : 'Global cost of living & PPP parity', icon: Globe, color: 'text-amber-400', bg: 'bg-amber-500/10', cat: 'tax' },
    { path: '/inflation', slug: 'inflation', title: t('nav.inflation'), desc: lang === 'tr' ? 'Maaşın enflasyon karşısındaki kaybı' : 'Real purchasing power loss calculator', icon: TrendingDown, color: 'text-amber-400', bg: 'bg-amber-500/10', cat: 'finance' },
    { path: '/fx-fees', slug: 'fx-fees', title: t('nav.fxFees'), desc: lang === 'tr' ? 'Gizli döviz transfer marjları' : 'Hidden bank FX markup wire fees', icon: ArrowRightLeft, color: 'text-rose-400', bg: 'bg-rose-500/10', cat: 'finance' },
    { path: '/vat', slug: 'vat', title: t('nav.vat'), desc: lang === 'tr' ? 'B2B fatura vergi ve KDV matrahı' : 'Invoice VAT & sales tax calculator', icon: FileText, color: 'text-purple-400', bg: 'bg-purple-500/10', cat: 'finance' },
    { path: '/timezone', slug: 'timezone', title: t('nav.timezone'), desc: lang === 'tr' ? 'Ortak çalışma saati çakışması' : 'Remote meeting window grid builder', icon: Clock, color: 'text-indigo-400', bg: 'bg-indigo-500/10', cat: 'finance' },
    { path: '/ai', slug: 'ai', title: t('nav.aiCost'), desc: lang === 'tr' ? 'LLM API token maliyet hesabı' : 'Compare Claude 4.6, GPT-5.4 API token cost', icon: Sparkles, color: 'text-amber-400', bg: 'bg-amber-500/10', cat: 'finance' }
  ];

  useEffect(() => {
    const currentTool = tools.find(item => item.slug === activeTab);
    if (currentTool) {
      setActiveCat(currentTool.cat);
    }
  }, [activeTab]);

  const isLegalPage = ['privacy', 'terms', 'about', 'contact'].includes(activeTab);
  const isGuidesPage = activeTab === 'guides';

  const toolSeoGroup = localizedToolSeo[activeTab] || localizedToolSeo['take-home'];
  const activeSeo = toolSeoGroup[lang] || toolSeoGroup.en;

  let pageTitle = activeSeo.title;
  let pageDesc = activeSeo.desc;
  let heroH1 = activeSeo.h1;

  if (activeTab === 'privacy') {
    pageTitle = `${t('legal.privacy.title')} | GlobalPayCalc`;
    pageDesc = t('legal.privacy.desc');
  } else if (activeTab === 'terms') {
    pageTitle = `${t('legal.terms.title')} | GlobalPayCalc`;
    pageDesc = t('legal.terms.desc');
  } else if (activeTab === 'about') {
    pageTitle = `${t('legal.about.title')} | GlobalPayCalc`;
    pageDesc = t('legal.about.desc');
  } else if (activeTab === 'contact') {
    pageTitle = `${t('legal.contact.title')} | GlobalPayCalc`;
    pageDesc = t('legal.contact.desc');
  }

  const canonicalSlug = activeTab === 'take-home' ? '' : activeTab;
  const canonicalPath = hasLangPrefix
    ? `/${pathSegments[0]}${canonicalSlug ? '/' + canonicalSlug : ''}`
    : (canonicalSlug ? `/${canonicalSlug}` : '/');
  const canonicalHref = `https://globalpaycalc.com${canonicalPath}`;

  return (
    <>
      {!isGuidesPage && (
        <Helmet>
          <title>{pageTitle}</title>
          <meta name="description" content={pageDesc} />
          <link rel="canonical" href={canonicalHref} />

          {/* hreflang Alternates for 100% Native Canonical Languages (EN & TR) */}
          <link rel="alternate" hreflang="en" href={`https://globalpaycalc.com/${canonicalSlug}`} />
          <link rel="alternate" hreflang="tr" href={`https://globalpaycalc.com/tr${canonicalSlug ? '/' + canonicalSlug : ''}`} />
          <link rel="alternate" hreflang="x-default" href={`https://globalpaycalc.com/${canonicalSlug}`} />
          
          {/* Open Graph / Facebook / LinkedIn */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content={canonicalHref} />
          <meta property="og:title" content={pageTitle} />
          <meta property="og:description" content={pageDesc} />
          <meta property="og:image" content="https://globalpaycalc.com/og-image.png" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content={canonicalHref} />
          <meta name="twitter:title" content={pageTitle} />
          <meta name="twitter:description" content={pageDesc} />
          <meta name="twitter:image" content="https://globalpaycalc.com/og-image.png" />
        </Helmet>
      )}

      {activeTab !== 'admin' && !isGuidesPage && !isLegalPage && (
        <div className="text-center max-w-4xl mx-auto space-y-6 pt-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-brand-500/10 via-purple-500/10 to-pink-500/10 border border-brand-500/20 text-xs font-semibold text-brand-300 animate-float">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{t('hero.badge')}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight drop-shadow-2xl">
            <span className="gradient-text">{heroH1}</span>
          </h1>

          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            {pageDesc}
          </p>

          {/* Desktop view navigation - wrapping list (100% crawlable canonical links) */}
          <div className="hidden md:flex flex-wrap justify-center gap-2 pt-4">
            {tools.map(tool => {
              const Icon = tool.icon;
              const isActive = activeTab === tool.slug;
              const colorScheme = {
                'text-emerald-400': 'bg-emerald-600 text-white border-emerald-500 shadow-lg shadow-emerald-500/20',
                'text-cyan-400': 'bg-cyan-600 text-white border-cyan-500 shadow-lg shadow-cyan-500/20',
                'text-rose-400': 'bg-rose-600 text-white border-rose-500 shadow-lg shadow-rose-500/20',
                'text-purple-400': 'bg-purple-600 text-white border-purple-500 shadow-lg shadow-purple-500/20',
                'text-amber-400': 'bg-amber-600 text-white border-amber-500 shadow-lg shadow-amber-500/20',
                'text-indigo-400': 'bg-indigo-600 text-white border-indigo-500 shadow-lg shadow-indigo-500/20',
              };
              const activeClass = colorScheme[tool.color] || 'bg-slate-800 text-white border-slate-700';
              const targetHref = `${basePath}${tool.path}` || '/';

              return (
                <Link 
                  key={tool.slug}
                  to={targetHref} 
                  title={tool.desc}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 border cursor-pointer ${isActive ? activeClass : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'}`}
                >
                  <Icon className={`w-3.5 h-3.5 ${tool.color}`} />
                  <span>{tool.title}</span>
                </Link>
              );
            })}
            <Link
              to={`${basePath}/guides`}
              className="px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 border bg-brand-950/60 text-brand-300 border-brand-500/40 hover:bg-brand-900/60"
            >
              <BookOpen className="w-3.5 h-3.5 text-brand-400" />
              <span>{lang === 'tr' ? 'Mevzuat Rehberleri (10)' : 'Statutory Guides (10)'}</span>
            </Link>
          </div>

          {/* Mobile view navigation - category switcher and grid */}
          <div className="md:hidden block space-y-4 pt-4">
            <div className="flex space-x-1 bg-slate-900/60 p-1.5 rounded-2xl border border-slate-850/80 max-w-md mx-auto">
              <button 
                onClick={() => setActiveCat('tax')} 
                className={`flex-1 flex items-center justify-center space-x-1 py-3 px-1 rounded-xl text-[10px] font-black transition-all ${activeCat === 'tax' ? 'bg-gradient-to-r from-rose-600 via-purple-600 to-brand-500 text-white shadow-lg shadow-purple-600/20' : 'text-slate-400 hover:text-slate-200'}`}
              >
                <DollarSign className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                <span>{lang === 'tr' ? 'Maaş & Vergi' : 'Salary & Tax'}</span>
              </button>
              <button 
                onClick={() => setActiveCat('finance')} 
                className={`flex-1 flex items-center justify-center space-x-1 py-3 px-1 rounded-xl text-[10px] font-black transition-all ${activeCat === 'finance' ? 'bg-gradient-to-r from-rose-600 via-purple-600 to-brand-500 text-white shadow-lg shadow-purple-600/20' : 'text-slate-400 hover:text-slate-200'}`}
              >
                <FileText className="w-3.5 h-3.5 text-purple-400" />
                <span>{lang === 'tr' ? 'B2B, Döviz & FinOps' : 'B2B, FX & FinOps'}</span>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              {tools.filter(item => item.cat === activeCat).map(tool => {
                const Icon = tool.icon;
                const isActive = activeTab === tool.slug;
                const borderColors = {
                  'text-emerald-400': 'border-emerald-500/30',
                  'text-cyan-400': 'border-cyan-500/30',
                  'text-rose-400': 'border-rose-500/30',
                  'text-purple-400': 'border-purple-500/30',
                  'text-amber-400': 'border-amber-500/30',
                  'text-indigo-400': 'border-indigo-500/30',
                };
                const borderClass = borderColors[tool.color] || 'border-slate-800';
                const targetHref = `${basePath}${tool.path}` || '/';

                return (
                  <div 
                    key={tool.slug}
                    onClick={() => navigate(targetHref)}
                    className={`flex flex-col text-left p-4 rounded-2xl border transition-all duration-150 active:scale-[0.96] cursor-pointer ${isActive ? 'bg-slate-900 border-brand-500 shadow-lg shadow-brand-500/10' : 'bg-slate-900/50 hover:bg-slate-900 border-slate-800'}`}
                  >
                    <div className={`w-9 h-9 rounded-xl ${tool.bg} flex items-center justify-center mb-3 border ${borderClass}`}>
                      <Icon className={`w-4 h-4 ${tool.color}`} />
                    </div>
                    <span className="text-xs font-black text-white leading-tight">{tool.title}</span>
                    <span className="text-[10px] text-slate-400 mt-1 font-medium leading-tight">{tool.desc}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      <div className="pt-4">
        <React.Suspense fallback={
          <div className="min-h-[450px] flex flex-col items-center justify-center bg-slate-900/40 rounded-3xl border border-slate-800/80 p-8 text-center animate-pulse">
            <div className="w-10 h-10 rounded-full border-2 border-brand-500 border-t-transparent animate-spin mb-4" />
            <div className="text-slate-400 text-sm font-medium">Yükleniyor... / Loading...</div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<GlobalTakeHomeCalculator lang={lang} />} />
            <Route path="/take-home" element={<GlobalTakeHomeCalculator lang={lang} />} />
            <Route path="/contractor" element={<ContractorVsPermCalculator lang={lang} />} />
            <Route path="/hourly-rate" element={<FreelancerRateCalculator lang={lang} />} />
            <Route path="/beckham-law" element={<BeckhamLawCalculator lang={lang} />} />
            <Route path="/crypto-tax" element={<CryptoTaxCalculator lang={lang} />} />
            <Route path="/eor-cost" element={<EorCostCalculator lang={lang} />} />
            <Route path="/nomad-visa" element={<NomadVisaCalculator lang={lang} />} />
            <Route path="/inflation" element={<InflationCalculator lang={lang} />} />
            <Route path="/fx-fees" element={<HiddenFxFeeCalculator lang={lang} />} />
            <Route path="/vat" element={<GlobalInvoiceVatCalculator lang={lang} />} />
            <Route path="/timezone" element={<TimezoneOverlapCalculator lang={lang} />} />
            <Route path="/salary" element={<NomadTaxCalculator lang={lang} />} />
            <Route path="/ai" element={<DevTokenCalculator lang={lang} />} />

            {/* Standalone Editorial Research Guides (EN) */}
            <Route path="/guides" element={<GuidesIndexPage lang="en" />} />
            <Route path="/guides/:slug" element={<GuideArticlePage lang="en" />} />

            <Route path="/admin" element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            } />
            
            <Route path="/privacy" element={<PrivacyPolicy lang={lang} />} />
            <Route path="/terms" element={<TermsOfService lang={lang} />} />
            <Route path="/about" element={<AboutUs lang={lang} />} />
            <Route path="/contact" element={<Contact lang={lang} />} />
            
            {/* Localized Canonical Routes (TR) */}
            {supportedLanguages.map(l => (
              <React.Fragment key={l.code}>
                <Route path={`/${l.code}`} element={<GlobalTakeHomeCalculator lang={l.code} />} />
                <Route path={`/${l.code}/take-home`} element={<GlobalTakeHomeCalculator lang={l.code} />} />
                <Route path={`/${l.code}/contractor`} element={<ContractorVsPermCalculator lang={l.code} />} />
                <Route path={`/${l.code}/hourly-rate`} element={<FreelancerRateCalculator lang={l.code} />} />
                <Route path={`/${l.code}/beckham-law`} element={<BeckhamLawCalculator lang={l.code} />} />
                <Route path={`/${l.code}/crypto-tax`} element={<CryptoTaxCalculator lang={l.code} />} />
                <Route path={`/${l.code}/eor-cost`} element={<EorCostCalculator lang={l.code} />} />
                <Route path={`/${l.code}/nomad-visa`} element={<NomadVisaCalculator lang={l.code} />} />
                <Route path={`/${l.code}/inflation`} element={<InflationCalculator lang={l.code} />} />
                <Route path={`/${l.code}/fx-fees`} element={<HiddenFxFeeCalculator lang={l.code} />} />
                <Route path={`/${l.code}/vat`} element={<GlobalInvoiceVatCalculator lang={l.code} />} />
                <Route path={`/${l.code}/timezone`} element={<TimezoneOverlapCalculator lang={l.code} />} />
                <Route path={`/${l.code}/salary`} element={<NomadTaxCalculator lang={l.code} />} />
                <Route path={`/${l.code}/ai`} element={<DevTokenCalculator lang={l.code} />} />
                
                <Route path={`/${l.code}/guides`} element={<GuidesIndexPage lang={l.code} />} />
                <Route path={`/${l.code}/guides/:slug`} element={<GuideArticlePage lang={l.code} />} />

                <Route path={`/${l.code}/privacy`} element={<PrivacyPolicy lang={l.code} />} />
                <Route path={`/${l.code}/terms`} element={<TermsOfService lang={l.code} />} />
                <Route path={`/${l.code}/about`} element={<AboutUs lang={l.code} />} />
                <Route path={`/${l.code}/contact`} element={<Contact lang={l.code} />} />
              </React.Fragment>
            ))}

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </React.Suspense>
      </div>

      {activeTab !== 'admin' && !isLegalPage && !isGuidesPage && (
        <ToolSeoArticle activeTool={activeTab} lang={lang} />
      )}

      {activeTab !== 'admin' && (
        <div className="space-y-8 mt-12">
          <ProgrammaticSeoGrid lang={lang} />
        </div>
      )}
    </>
  );
}

export default function App() {
  const location = useLocation();

  const pathSegments = location.pathname.split('/').filter(Boolean);
  const urlLang = supportedLanguages.find(l => l.code === pathSegments[0]);

  const [lang, setLang] = useState(urlLang ? urlLang.code : 'en');

  useEffect(() => {
    initializeAnalytics();

    const targetLang = urlLang ? urlLang.code : 'en';
    if (lang !== targetLang) {
      setLang(targetLang);
    }

    import('./utils/analyticsTracker').then(({ trackPageView }) => {
       trackPageView(location.pathname);
    }).catch(err => {
       console.warn('[Analytics] Failed to track page view dynamically', err);
    });
  }, [location.pathname, urlLang]);

  const t = (path) => getTranslation(lang, path);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-brand-500 selection:text-white">
      <Header currentLang={lang} onLanguageChange={setLang} />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ContentWrapper lang={lang} t={t} />
      </main>

      <Footer lang={lang} />
      <CookieConsent lang={lang} />
    </div>
  );
}
