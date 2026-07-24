import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import AdSenseSlot from './components/AdSenseSlot';
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
import AdminDashboard from './components/AdminDashboard';
import NotFoundPage from './pages/NotFoundPage';
import ProtectedRoute from './components/ProtectedRoute';
import DynamicToolPage from './pages/DynamicToolPage';
import { PrivacyPolicy, TermsOfService, AboutUs, Contact } from './pages/Legal';
import { CookieConsent } from './components/CookieConsent';
import { getTranslation, supportedLanguages } from './i18n';
import { detectUserLanguage } from './utils/langDetector';
import { trackPageView } from './utils/analyticsTracker';
import { Sparkles, Globe, Image, DollarSign, Briefcase, ArrowRightLeft, FileText, Clock, TrendingDown, UserCheck, Award, Cpu, Building2 } from 'lucide-react';
import { generatePseoTaxMatrix, generatePseoLlmMatrix } from './pseo/matrixEngine';
import ToolSeoArticle from './components/ToolSeoArticle';

function ContentWrapper({ lang, t }) {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);
  
  // Ignore language prefix for routing tab highlighting
  const hasLangPrefix = supportedLanguages.some(l => l.code === pathSegments[0]);
  const activeTab = hasLangPrefix ? (pathSegments[1] || 'take-home') : (pathSegments[0] || 'take-home');
  const basePath = hasLangPrefix ? `/${pathSegments[0]}` : '';

  // Get active route data for dynamic meta
  let pageTitle = 'GlobalPayCalc: Global Remote Net Salary, Expat Tax, FX & AI Cost Suite';
  let pageDesc = t('hero.subtitle');

  if (activeTab === 'take-home') {
    pageTitle = "Global Net Take-Home Salary & Tax Calculator | US, UK, DE, TR | GlobalPayCalc";
    pageDesc = "Calculate net take-home salary after federal/state income tax, social security, and FICA deductions across 40+ countries.";
  } else if (activeTab === 'contractor') {
    pageTitle = "Full-Time vs Contractor / Freelance Equivalence Calculator (W-2 vs 1099, IR35)";
    pageDesc = "Compare W-2 salaried offer vs 1099 contractor billing rate. Factor in PTO, health insurance, and SE taxes accurately.";
  } else if (activeTab === 'hourly-rate') {
    pageTitle = "Freelancer Minimum Hourly Rate Calculator | Target Net Income & Expenses";
    pageDesc = "Calculate minimum required hourly and daily billing rate based on annual target income, taxes, and billable hours.";
  } else if (activeTab === 'beckham-law') {
    pageTitle = "Expat & Beckham Law Tax Savings Calculator | Spain, Portugal, Italy, Dubai";
    pageDesc = "Calculate expat tax exemptions under Spain Beckham Law (24%), Portugal IFICI, Italy 70% Impatriati, and Dubai 0% tax.";
  } else if (activeTab === 'crypto-tax') {
    pageTitle = "Crypto & USDT Remote Salary Tax Estimator | Capital Gains vs Income Tax";
    pageDesc = "Calculate tax liabilities for remote salaries paid in USDT, USDC, or ETH across US, UK, Germany, Turkey, and Dubai.";
  } else if (activeTab === 'eor-cost') {
    pageTitle = "Employer of Record (EOR) vs Entity Setup Cost Estimator | Deel vs Local Entity";
    pageDesc = "Calculate breakeven point between paying Deel/Remote $599/mo per seat vs incorporating a local subsidiary.";
  } else if (activeTab === 'nomad-visa') {
    pageTitle = "Digital Nomad Visa Financial Income Eligibility Checker | 10+ Countries";
    pageDesc = "Check monthly minimum income eligibility for Digital Nomad Visas in Spain, Portugal, Dubai, Japan, Italy, and Greece.";
  } else if (activeTab === 'inflation') {
    pageTitle = "Inflation & Salary Purchasing Power Loss Calculator | GlobalPayCalc";
    pageDesc = "Calculate real salary erosion and required raise percentage based on country inflation rates.";
  } else if (activeTab === 'fx-fees') {
    pageTitle = "Real FX Rate & Hidden Bank Fee Estimator (Wise vs SWIFT vs PayPal vs Stripe)";
    pageDesc = "Calculate real mid-market exchange rate vs hidden bank FX markups and transfer fees for international cross-border payments.";
  } else if (activeTab === 'vat') {
    pageTitle = "Global Invoice & VAT / Sales Tax Calculator | Cross-Border Reverse Charge";
    pageDesc = "Calculate net, VAT/GST amount, and gross invoice total. Includes B2B cross-border Reverse Charge 0% export exemption.";
  } else if (activeTab === 'timezone') {
    pageTitle = "Timezone Overlap Calculator for Remote Teams | Global Work Hours Grid";
    pageDesc = "Visualize working hour overlap and shared meeting windows for global remote teams across US, Europe, Asia, and Turkey.";
  } else if (activeTab === 'salary') {
    pageTitle = "Remote Salary Calculator & Global Tax Parity Estimator | GlobalPayCalc";
    pageDesc = "Calculate net remote salaries across 150+ countries. Compare purchasing power, cost of living, and nomad tax laws instantly.";
  } else if (activeTab === 'wasm') {
    pageTitle = "Free AI Background & Object Remover | Secure Client-Side | GlobalPayCalc";
    pageDesc = "Remove photo backgrounds instantly with 100% privacy using client-side WebAssembly AI. No uploads, no limits.";
  } else if (activeTab === 'ai') {
    pageTitle = "LLM API Cost Simulator: GPT-4o, Claude 3.5 & LLaMA 3 | GlobalPayCalc";
    pageDesc = "Compare token costs for OpenAI, Anthropic, and open-source models for RAG, customer support, and agents.";
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

          <div className="flex flex-wrap justify-center gap-2 pt-2">
            <Link to={`${basePath}/take-home`} title="Global Net Take-Home Salary & Tax Calculator" className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 border cursor-pointer ${activeTab === 'take-home' || activeTab === 'video' ? 'bg-brand-600 text-white border-brand-500 shadow-lg shadow-brand-500/20' : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'}`}>
              <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t('nav.takeHome')}</span>
            </Link>
            <Link to={`${basePath}/contractor`} title="Full-Time vs Contractor Equivalence Calculator" className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 border cursor-pointer ${activeTab === 'contractor' ? 'bg-cyan-600 text-white border-cyan-500 shadow-lg shadow-cyan-500/20' : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'}`}>
              <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
              <span>{t('nav.contractor')}</span>
            </Link>
            <Link to={`${basePath}/hourly-rate`} title="Freelancer Minimum Hourly Rate Calculator" className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 border cursor-pointer ${activeTab === 'hourly-rate' ? 'bg-emerald-600 text-white border-emerald-500 shadow-lg shadow-emerald-500/20' : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'}`}>
              <UserCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Saatlik Ücret</span>
            </Link>
            <Link to={`${basePath}/beckham-law`} title="Expat & Beckham Law Tax Savings Calculator" className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 border cursor-pointer ${activeTab === 'beckham-law' ? 'bg-rose-600 text-white border-rose-500 shadow-lg shadow-rose-500/20' : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'}`}>
              <Award className="w-3.5 h-3.5 text-rose-400" />
              <span>Beckham Law</span>
            </Link>
            <Link to={`${basePath}/crypto-tax`} title="Crypto & USDT Remote Salary Tax Estimator" className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 border cursor-pointer ${activeTab === 'crypto-tax' ? 'bg-cyan-600 text-white border-cyan-500 shadow-lg shadow-cyan-500/20' : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'}`}>
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              <span>Kripto Maaş</span>
            </Link>
            <Link to={`${basePath}/nomad-visa`} title="Digital Nomad Visa Financial Income Eligibility Checker" className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 border cursor-pointer ${activeTab === 'nomad-visa' ? 'bg-emerald-600 text-white border-emerald-500 shadow-lg shadow-emerald-500/20' : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'}`}>
              <Globe className="w-3.5 h-3.5 text-emerald-400" />
              <span>Göçebe Vize Testi</span>
            </Link>
            <Link to={`${basePath}/eor-cost`} title="Employer of Record (EOR) vs Entity Setup Cost Estimator" className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 border cursor-pointer ${activeTab === 'eor-cost' ? 'bg-purple-600 text-white border-purple-500 shadow-lg shadow-purple-500/20' : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'}`}>
              <Building2 className="w-3.5 h-3.5 text-purple-400" />
              <span>EOR Maliyeti</span>
            </Link>
            <Link to={`${basePath}/salary`} title="Calculate remote net salary and tax parity" className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 border cursor-pointer ${activeTab === 'salary' ? 'bg-slate-800 text-white border-slate-700' : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'}`}>
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <span>{t('nav.salary')}</span>
            </Link>
            <Link to={`${basePath}/inflation`} title="Inflation & Salary Purchasing Power Loss Calculator" className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 border cursor-pointer ${activeTab === 'inflation' ? 'bg-amber-600 text-white border-amber-500 shadow-lg shadow-amber-500/20' : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'}`}>
              <TrendingDown className="w-3.5 h-3.5 text-amber-400" />
              <span>Enflasyon Kaybı</span>
            </Link>
            <Link to={`${basePath}/fx-fees`} title="Real FX Rate & Hidden Bank Fee Estimator" className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 border cursor-pointer ${activeTab === 'fx-fees' ? 'bg-rose-600 text-white border-rose-500 shadow-lg shadow-rose-500/20' : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'}`}>
              <ArrowRightLeft className="w-3.5 h-3.5 text-rose-400" />
              <span>{t('nav.fxFees')}</span>
            </Link>
            <Link to={`${basePath}/vat`} title="Global Invoice & VAT / Sales Tax Calculator" className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 border cursor-pointer ${activeTab === 'vat' ? 'bg-purple-600 text-white border-purple-500 shadow-lg shadow-purple-500/20' : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'}`}>
              <FileText className="w-3.5 h-3.5 text-purple-400" />
              <span>{t('nav.vat')}</span>
            </Link>
            <Link to={`${basePath}/timezone`} title="Timezone Overlap Calculator for Remote Teams" className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 border cursor-pointer ${activeTab === 'timezone' ? 'bg-indigo-600 text-white border-indigo-500 shadow-lg shadow-indigo-500/20' : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'}`}>
              <Clock className="w-3.5 h-3.5 text-indigo-400" />
              <span>Timezone</span>
            </Link>
            <Link to={`${basePath}/wasm`} title="Client-side AI image background remover" className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 border cursor-pointer ${activeTab === 'wasm' ? 'bg-slate-800 text-white border-slate-700' : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'}`}>
              <Image className="w-3.5 h-3.5 text-cyan-400" />
              <span>{t('nav.bgRemover')}</span>
            </Link>
            <Link to={`${basePath}/ai`} title="LLM API token cost simulator" className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 border cursor-pointer ${activeTab === 'ai' ? 'bg-slate-800 text-white border-slate-700' : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'}`}>
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{t('nav.aiCost')}</span>
            </Link>
          </div>

        </div>
      )}

      <div className="pt-4">
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
          <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
          
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
          {generatePseoTaxMatrix().map(route => (
            <React.Fragment key={route.slug}>
              <Route path={`/calculator/${route.slug}`} element={
                <>
                  <Helmet>
                    <title>{route.title} | GlobalPayCalc</title>
                    <meta name="description" content={route.description} />
                  </Helmet>
                  <DynamicToolPage pageData={route} type="tax" lang={lang} />
                </>
              } />
              {supportedLanguages.map(l => (
                <Route key={`${l.code}-${route.slug}`} path={`/${l.code}/calculator/${route.slug}`} element={
                  <>
                    <Helmet>
                      <title>{route.title} | GlobalPayCalc</title>
                      <meta name="description" content={route.description} />
                    </Helmet>
                    <DynamicToolPage pageData={route} type="tax" lang={l.code} />
                  </>
                } />
              ))}
            </React.Fragment>
          ))}

          {generatePseoLlmMatrix().map(route => (
            <React.Fragment key={route.slug}>
              <Route path={`/tools/${route.slug}`} element={
                <>
                  <Helmet>
                    <title>{route.title} | GlobalPayCalc</title>
                    <meta name="description" content={route.description} />
                  </Helmet>
                  <DynamicToolPage pageData={route} type="llm" lang={lang} />
                </>
              } />
              {supportedLanguages.map(l => (
                <Route key={`${l.code}-${route.slug}`} path={`/${l.code}/tools/${route.slug}`} element={
                  <>
                    <Helmet>
                      <title>{route.title} | GlobalPayCalc</title>
                      <meta name="description" content={route.description} />
                    </Helmet>
                    <DynamicToolPage pageData={route} type="llm" lang={l.code} />
                  </>
                } />
              ))}
            </React.Fragment>
          ))}

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
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
