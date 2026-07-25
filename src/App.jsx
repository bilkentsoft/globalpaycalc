import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import AdSenseSlot from './components/AdSenseSlot';
import NotFoundPage from './pages/NotFoundPage';
import ProtectedRoute from './components/ProtectedRoute';

import NomadTaxCalculator from './components/NomadTaxCalculator';
import DevTokenCalculator from './components/DevTokenCalculator';
import QuickWasmCompressor from './components/QuickWasmCompressor';
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
import DynamicToolPage from './pages/DynamicToolPage';
import ToolSeoArticle from './components/ToolSeoArticle';

const AdminDashboard = React.lazy(() => import('./components/AdminDashboard'));

// Legal pages split loading
const PrivacyPolicy = React.lazy(() => import('./pages/Legal').then(m => ({ default: m.PrivacyPolicy })));
const TermsOfService = React.lazy(() => import('./pages/Legal').then(m => ({ default: m.TermsOfService })));
const AboutUs = React.lazy(() => import('./pages/Legal').then(m => ({ default: m.AboutUs })));
const Contact = React.lazy(() => import('./pages/Legal').then(m => ({ default: m.Contact })));

import { CookieConsent } from './components/CookieConsent';
import { getTranslation, supportedLanguages } from './i18n';
import { detectUserLanguage } from './utils/langDetector';
import { trackPageView } from './utils/analyticsTracker';
import { Sparkles, Globe, Image, DollarSign, Briefcase, ArrowRightLeft, FileText, Clock, TrendingDown, UserCheck, Award, Cpu, Building2 } from 'lucide-react';
import { generatePseoTaxMatrix, generatePseoLlmMatrix } from './pseo/matrixEngine';

function ContentWrapper({ lang, t }) {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);
  
  // Ignore language prefix for routing tab highlighting
  const hasLangPrefix = supportedLanguages.some(l => l.code === pathSegments[0]);
  const activeTab = hasLangPrefix ? (pathSegments[1] || 'take-home') : (pathSegments[0] || 'take-home');
  const basePath = hasLangPrefix ? `/${pathSegments[0]}` : '';

  const [activeCat, setActiveCat] = useState('tax');
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const showMobile = mounted && isMobile;

  const tools = [
    { path: '/take-home', title: t('nav.takeHome'), desc: lang === 'tr' ? 'Gelir vergisi ve sosyal kesinti' : 'Net salary after tax & FICA', icon: DollarSign, color: 'text-emerald-400', bg: 'bg-emerald-500/10', cat: 'tax' },
    { path: '/contractor', title: t('nav.contractor'), desc: lang === 'tr' ? 'B2B ve bordrolu karşılaştırma' : 'W2 vs 1099 contractor equivalency', icon: Briefcase, color: 'text-cyan-400', bg: 'bg-cyan-500/10', cat: 'tax' },
    { path: '/hourly-rate', title: t('nav.hourlyRate'), desc: lang === 'tr' ? 'Freelancer saatlik ücret hesabı' : 'Target income to hourly billing rate', icon: UserCheck, color: 'text-emerald-400', bg: 'bg-emerald-500/10', cat: 'tax' },
    { path: '/beckham-law', title: t('nav.beckhamLaw'), desc: lang === 'tr' ? 'Expat vergi muafiyeti' : 'Spain Beckham law & expat incentives', icon: Award, color: 'text-rose-400', bg: 'bg-rose-500/10', cat: 'tax' },
    { path: '/crypto-tax', title: t('nav.cryptoTax'), desc: lang === 'tr' ? 'Kripto maaş vergi hesaplama' : 'Taxes on USDT/USDC remote salary', icon: Cpu, color: 'text-cyan-400', bg: 'bg-cyan-500/10', cat: 'tax' },
    { path: '/nomad-visa', title: t('nav.nomadVisa'), desc: lang === 'tr' ? 'Dijital göçebe vize uygunluğu' : 'Nomad visa minimum income check', icon: Globe, color: 'text-emerald-400', bg: 'bg-emerald-500/10', cat: 'tax' },
    { path: '/eor-cost', title: t('nav.eorCost'), desc: lang === 'tr' ? 'EOR ve şirket kurma maliyeti' : 'Employer of Record vs local entity cost', icon: Building2, color: 'text-purple-400', bg: 'bg-purple-500/10', cat: 'tax' },
    { path: '/salary', title: t('nav.salary'), desc: lang === 'tr' ? 'Ülkeler arası satın alma gücü' : 'Global cost of living & PPP parity', icon: Globe, color: 'text-amber-400', bg: 'bg-amber-500/10', cat: 'tax' },
    { path: '/inflation', title: t('nav.inflation'), desc: lang === 'tr' ? 'Maaşın enflasyon karşısındaki kaybı' : 'Real purchasing power loss calculator', icon: TrendingDown, color: 'text-amber-400', bg: 'bg-amber-500/10', cat: 'finance' },
    { path: '/fx-fees', title: t('nav.fxFees'), desc: lang === 'tr' ? 'Gizli döviz transfer marjları' : 'Hidden bank FX markup wire fees', icon: ArrowRightLeft, color: 'text-rose-400', bg: 'bg-rose-500/10', cat: 'finance' },
    { path: '/vat', title: t('nav.vat'), desc: lang === 'tr' ? 'B2B fatura vergi ve KDV matrahı' : 'Invoice VAT & sales tax calculator', icon: FileText, color: 'text-purple-400', bg: 'bg-purple-500/10', cat: 'finance' },
    { path: '/timezone', title: t('nav.timezone'), desc: lang === 'tr' ? 'Ortak çalışma saati çakışması' : 'Remote meeting window grid builder', icon: Clock, color: 'text-indigo-400', bg: 'bg-indigo-500/10', cat: 'finance' },
    { path: '/wasm', title: t('nav.bgRemover'), desc: lang === 'tr' ? 'Tarayıcıda yerel görsel işleme' : '100% private WASM image compressor', icon: Image, color: 'text-cyan-400', bg: 'bg-cyan-500/10', cat: 'ai_wasm' },
    { path: '/ai', title: t('nav.aiCost'), desc: lang === 'tr' ? 'LLM API token maliyet hesabı' : 'Compare GPT-4o, Claude 3.5 API token cost', icon: Sparkles, color: 'text-amber-400', bg: 'bg-amber-500/10', cat: 'ai_wasm' }
  ];

  useEffect(() => {
    const currentTabSlug = activeTab === 'video' ? 'take-home' : activeTab;
    const currentTool = tools.find(t => t.path.replace('/', '') === currentTabSlug);
    if (currentTool) {
      setActiveCat(currentTool.cat);
    }
  }, [activeTab]);

  // Get active route data for dynamic meta
  let pageTitle = 'GlobalPayCalc: Global Remote Net Salary, Expat Tax, FX & AI Cost Suite';
  let pageDesc = t('hero.subtitle');

  if (activeTab === 'take-home') {
    pageTitle = "Global Net Salary & Tax Calculator | GlobalPayCalc";
    pageDesc = "Calculate net take-home salary after federal and state income tax, social security, and FICA deductions across 40+ countries. Get instant, accurate projections.";
  } else if (activeTab === 'contractor') {
    pageTitle = "W-2 vs 1099 Contractor Equivalence Calculator";
    pageDesc = "Compare W-2 salaried offer vs 1099 contractor billing rates. Factor in PTO, health insurance, and self-employment taxes accurately in our comparison engine.";
  } else if (activeTab === 'hourly-rate') {
    pageTitle = "Freelancer Hourly Rate Calculator | GlobalPayCalc";
    pageDesc = "Calculate minimum required hourly and daily billing rates based on your annual target income, tax brackets, business expenses, and billable work hours.";
  } else if (activeTab === 'beckham-law') {
    pageTitle = "Beckham Law & Expat Tax Savings Calculator";
    pageDesc = "Calculate expat tax exemptions under Spain's Beckham Law (24% flat), Portugal NHR, Italy 70% Impatriati, and Dubai 0% tax scheme. Save on international taxes.";
  } else if (activeTab === 'crypto-tax') {
    pageTitle = "Crypto & USDT Salary Tax Calculator | GlobalPayCalc";
    pageDesc = "Calculate tax liabilities for remote salaries paid in USDT, USDC, or ETH across US, UK, Germany, and Turkey. Differentiate income and capital gains tax.";
  } else if (activeTab === 'eor-cost') {
    pageTitle = "EOR vs Local Entity Setup Cost Calculator";
    pageDesc = "Calculate the financial breakeven point between paying Deel/Remote $599/mo per seat versus incorporating and operating a local subsidiary entity.";
  } else if (activeTab === 'nomad-visa') {
    pageTitle = "Digital Nomad Visa Income Eligibility Checker";
    pageDesc = "Verify monthly minimum income requirements for Digital Nomad Visas in Spain, Portugal, Dubai, Japan, Italy, and Greece. Check your eligible countries.";
  } else if (activeTab === 'inflation') {
    pageTitle = "Inflation & Salary Purchasing Power Calculator";
    pageDesc = "Calculate real salary erosion and the exact annual pay raise percentage required to maintain your living standard against global country inflation rates.";
  } else if (activeTab === 'fx-fees') {
    pageTitle = "Real FX Rate & Hidden Bank Fee Estimator";
    pageDesc = "Compare real mid-market exchange rates against hidden bank FX markups and wire transfer fees for Wise, SWIFT, PayPal, and Stripe global transactions.";
  } else if (activeTab === 'vat') {
    pageTitle = "Global Invoice & VAT Calculator | GlobalPayCalc";
    pageDesc = "Calculate net, VAT/GST amounts, and gross invoice totals. Includes B2B cross-border Reverse Charge 0% export exemptions and tax declaration options.";
  } else if (activeTab === 'timezone') {
    pageTitle = "Timezone Overlap Calculator for Remote Teams";
    pageDesc = "Visualize working hour overlaps and shared meeting windows for global remote teams across US, Europe, Asia, and Turkey with our interactive time grid.";
  } else if (activeTab === 'salary') {
    pageTitle = "Global Remote Salary Calculator | GlobalPayCalc";
    pageDesc = "Calculate net remote salaries across 150+ countries. Compare purchasing power, cost of living index, and nomad tax laws instantly in local currencies.";
  } else if (activeTab === 'wasm') {
    pageTitle = "Free AI Background Remover & Compressor";
    pageDesc = "Remove photo backgrounds instantly with 100% privacy using client-side WebAssembly AI. Compress and convert images to WebP/PNG without server uploads.";
  } else if (activeTab === 'ai') {
    pageTitle = "LLM API Token Cost Simulator | GlobalPayCalc";
    pageDesc = "Compare monthly token costs for OpenAI, Anthropic, and open-source models (GPT-4o, Claude 3.5, LLaMA 3) across RAG pipelines and agent implementations.";
  }

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        {/* Dynamic Canonical */}
        <link rel="canonical" href={`https://globalpaycalc.com${location.pathname.replace(/\/+$/, '') || '/'}`} />

        {/* hreflang Alternates for all supported languages */}
        <link rel="alternate" hreflang="en" href={`https://globalpaycalc.com/${activeTab === 'take-home' ? '' : activeTab}`} />
        {['tr','es','de','pt','fr','id','ja'].map(lc => (
          <link key={lc} rel="alternate" hreflang={lc} href={`https://globalpaycalc.com/${lc}/${activeTab === 'take-home' ? '' : activeTab}`} />
        ))}
        <link rel="alternate" hreflang="x-default" href={`https://globalpaycalc.com/${activeTab === 'take-home' ? '' : activeTab}`} />
        
        {/* Open Graph / Facebook / LinkedIn */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://globalpaycalc.com${location.pathname}`} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:image" content="https://globalpaycalc.com/og-image.png" />

        {/* Twitter Card */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`https://globalpaycalc.com${location.pathname}`} />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={pageDesc} />
      </Helmet>

      {activeTab !== 'admin' && !location.pathname.includes('/calculator/') && !location.pathname.includes('/tools/') && (
        <div className="text-center max-w-4xl mx-auto space-y-6 pt-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-brand-500/10 via-purple-500/10 to-pink-500/10 border border-brand-500/20 text-xs font-semibold text-brand-300 animate-float">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{t('hero.badge')}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-tight drop-shadow-2xl">
            <span className="gradient-text">{t('hero.title')}</span>
          </h1>

          <p className="text-slate-400 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            {t('hero.subtitle')}
          </p>

          {/* Responsive menu rendering to prevent duplicate link indexing warnings */}
          {!showMobile ? (
            /* Desktop view navigation */
            <div className="hidden md:flex flex-wrap justify-center gap-2 pt-2">
              {tools.map(tool => {
                const Icon = tool.icon;
                const isActive = activeTab === tool.path.replace('/', '') || (tool.path === '/take-home' && activeTab === 'video');
                const colorScheme = {
                  'text-emerald-400': 'bg-emerald-600 text-white border-emerald-500 shadow-lg shadow-emerald-500/20',
                  'text-cyan-400': 'bg-cyan-600 text-white border-cyan-500 shadow-lg shadow-cyan-500/20',
                  'text-rose-400': 'bg-rose-600 text-white border-rose-500 shadow-lg shadow-rose-500/20',
                  'text-purple-400': 'bg-purple-600 text-white border-purple-500 shadow-lg shadow-purple-500/20',
                  'text-amber-400': 'bg-amber-600 text-white border-amber-500 shadow-lg shadow-amber-500/20',
                  'text-indigo-400': 'bg-indigo-600 text-white border-indigo-500 shadow-lg shadow-indigo-500/20',
                };
                const activeClass = colorScheme[tool.color] || 'bg-slate-800 text-white border-slate-700';

                return (
                  <Link 
                    key={tool.path}
                    to={`${basePath}${tool.path}`} 
                    title={tool.desc}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 border cursor-pointer ${isActive ? activeClass : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'}`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${tool.color}`} />
                    <span>{tool.title}</span>
                  </Link>
                );
              })}
            </div>
          ) : (
            <>
              {/* Mobile view segment category switcher */}
              <div className="md:hidden flex space-x-1 bg-slate-900/60 p-1.5 rounded-2xl border border-slate-850/80 max-w-md mx-auto">
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
                  <span>{lang === 'tr' ? 'B2B & Finans' : 'Finance'}</span>
                </button>
                <button 
                  onClick={() => setActiveCat('ai_wasm')} 
                  className={`flex-1 flex items-center justify-center space-x-1 py-3 px-1 rounded-xl text-[10px] font-black transition-all ${activeCat === 'ai_wasm' ? 'bg-gradient-to-r from-rose-600 via-purple-600 to-brand-500 text-white shadow-lg shadow-purple-600/20' : 'text-slate-400 hover:text-slate-200'}`}
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>{lang === 'tr' ? 'Yapay Zeka' : 'AI & WASM'}</span>
                </button>
              </div>

              {/* Mobile view tool grid */}
              <div className="md:hidden grid grid-cols-2 gap-3 pt-2">
                {tools.filter(t => t.cat === activeCat).map(tool => {
                  const Icon = tool.icon;
                  const isActive = activeTab === tool.path.replace('/', '') || (tool.path === '/take-home' && activeTab === 'video');
                  const borderColors = {
                    'text-emerald-400': 'border-emerald-500/30',
                    'text-cyan-400': 'border-cyan-500/30',
                    'text-rose-400': 'border-rose-500/30',
                    'text-purple-400': 'border-purple-500/30',
                    'text-amber-400': 'border-amber-500/30',
                    'text-indigo-400': 'border-indigo-500/30',
                  };
                  const borderClass = borderColors[tool.color] || 'border-slate-800';

                  return (
                    <Link 
                      key={tool.path}
                      to={`${basePath}${tool.path}`}
                      title={tool.desc}
                      className={`flex flex-col text-left p-4 rounded-2xl border transition-all duration-150 active:scale-[0.96] cursor-pointer ${isActive ? 'bg-slate-900 border-brand-500 shadow-lg shadow-brand-500/10' : 'bg-slate-900/50 hover:bg-slate-900 border-slate-800'}`}
                    >
                      <div className={`w-9 h-9 rounded-xl ${tool.bg} flex items-center justify-center mb-3 border ${borderClass}`}>
                        <Icon className={`w-4 h-4 ${tool.color}`} />
                      </div>
                      <span className="text-xs font-black text-white leading-tight">{tool.title}</span>
                      <span className="text-[10px] text-slate-400 mt-1 font-medium leading-tight">{tool.desc}</span>
                    </Link>
                  );
                })}
              </div>
            </>
          )}

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
            <Route path="/wasm" element={<QuickWasmCompressor lang={lang} />} />
            <Route path="/video" element={<GlobalTakeHomeCalculator lang={lang} />} />
            <Route path="/admin" element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            } />
            
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Lang Routes */}
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
                <Route path={`/${l.code}/wasm`} element={<QuickWasmCompressor lang={l.code} />} />
                <Route path={`/${l.code}/video`} element={<GlobalTakeHomeCalculator lang={l.code} />} />
                
                <Route path={`/${l.code}/privacy`} element={<PrivacyPolicy lang={l.code} />} />
                <Route path={`/${l.code}/terms`} element={<TermsOfService lang={l.code} />} />
                <Route path={`/${l.code}/about`} element={<AboutUs lang={l.code} />} />
                <Route path={`/${l.code}/contact`} element={<Contact lang={l.code} />} />
              </React.Fragment>
            ))}

            {/* Programmatic SEO Routes */}
            <Route path="/calculator/:slug" element={<DynamicToolPage type="tax" lang={lang} />} />
            <Route path="/tools/:slug" element={<DynamicToolPage type="llm" lang={lang} />} />
            
            {supportedLanguages.map(l => (
              <React.Fragment key={l.code}>
                <Route path={`/${l.code}/calculator/:slug`} element={<DynamicToolPage type="tax" lang={l.code} />} />
                <Route path={`/${l.code}/tools/:slug`} element={<DynamicToolPage type="llm" lang={l.code} />} />
              </React.Fragment>
            ))}

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </React.Suspense>
      </div>

      {activeTab !== 'admin' && !location.pathname.includes('/calculator/') && !location.pathname.includes('/tools/') && (
        <ToolSeoArticle activeTool={activeTab} lang={lang} />
      )}

      {activeTab !== 'admin' && (
        <div className="space-y-8 mt-12">
          <AdSenseSlot slotId="content-bottom" />
          <ProgrammaticSeoGrid lang={lang} />
        </div>
      )}
    </>
  );
}

export default function App() {
  const [lang, setLang] = useState('en');
  const location = useLocation();

  useEffect(() => {
    // Detect URL lang prefix
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const urlLang = supportedLanguages.find(l => l.code === pathSegments[0]);

    if (urlLang) {
      // URL has explicit lang prefix — always trust it and persist
      setLang(urlLang.code);
      try { localStorage.setItem('gpc_lang', urlLang.code); } catch (_) {}
    } else {
      // No URL prefix — prefer explicit user selection, then browser detection
      let preferred = null;
      try { preferred = localStorage.getItem('gpc_lang'); } catch (_) {}
      const detected = preferred || detectUserLanguage();
      setLang(detected);
    }

    // Analytics Tracking
    trackPageView(location.pathname);
  }, [location]);

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
