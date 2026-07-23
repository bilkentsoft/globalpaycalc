import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import AdSenseSlot from './components/AdSenseSlot';
import NomadTaxCalculator from './components/NomadTaxCalculator';
import DevTokenCalculator from './components/DevTokenCalculator';
import QuickWasmCompressor from './components/QuickWasmCompressor';
import SocialVideoDownloader from './components/SocialVideoDownloader';
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
import { Sparkles, Video, Globe, Zap, Image } from 'lucide-react';
import { generatePseoTaxMatrix, generatePseoLlmMatrix } from './pseo/matrixEngine';

function ContentWrapper({ lang, t }) {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);
  
  // Ignore language prefix for routing tab highlighting
  const hasLangPrefix = supportedLanguages.some(l => l.code === pathSegments[0]);
  const activeTab = hasLangPrefix ? (pathSegments[1] || 'video') : (pathSegments[0] || 'video');
  const basePath = hasLangPrefix ? `/${pathSegments[0]}` : '';

  // Get active route data for dynamic meta
  let pageTitle = t('hero.title');
  let pageDesc = t('hero.subtitle');

  if (activeTab === 'salary') {
    pageTitle = "Remote Salary Calculator & Global Tax Parity Estimator | GlobalPayCalc";
    pageDesc = "Calculate net remote salaries across 150+ countries. Compare purchasing power, cost of living, and nomad tax laws instantly.";
  } else if (activeTab === 'wasm') {
    pageTitle = "Free AI Image Background Remover | Secure Client-Side | GlobalPayCalc";
    pageDesc = "Remove image backgrounds instantly with 100% privacy using client-side WebAssembly AI. No uploads, no limits, no watermarks.";
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
        <link rel="canonical" href={`https://globalpaycalc.com${location.pathname}`} />
        
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
            <Link to={`${basePath}/video`} className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-2 border cursor-pointer ${activeTab === 'video' ? 'bg-rose-500 text-white border-rose-400 shadow-lg shadow-rose-500/20' : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'}`}>
              <Video className="w-3.5 h-3.5" />
              <span>{t('nav.downloader')}</span>
            </Link>
            <Link to={`${basePath}/wasm`} className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-2 border cursor-pointer ${activeTab === 'wasm' ? 'bg-cyan-600 text-white border-cyan-500 shadow-lg shadow-cyan-500/20' : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'}`}>
              <Image className="w-3.5 h-3.5" />
              <span>{t('nav.bgRemover')}</span>
            </Link>
            <Link to={`${basePath}/salary`} className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-2 border cursor-pointer ${activeTab === 'salary' ? 'bg-brand-600 text-white border-brand-500 shadow-lg shadow-brand-500/20' : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'}`}>
              <Globe className="w-3.5 h-3.5" />
              <span>{t('nav.salary')}</span>
            </Link>
            <Link to={`${basePath}/ai`} className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-2 border cursor-pointer ${activeTab === 'ai' ? 'bg-purple-600 text-white border-purple-500 shadow-lg shadow-purple-500/20' : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'}`}>
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{t('nav.aiCost')}</span>
            </Link>
          </div>
        </div>
      )}

      <div className="pt-4">
        <Routes>
          <Route path="/" element={<SocialVideoDownloader lang={lang} />} />
          <Route path="/video" element={<SocialVideoDownloader lang={lang} />} />
          <Route path="/wasm" element={<QuickWasmCompressor lang={lang} />} />
          <Route path="/salary" element={<NomadTaxCalculator lang={lang} />} />
          <Route path="/ai" element={<DevTokenCalculator lang={lang} />} />
          <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
          
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Lang Routes */}
          {supportedLanguages.map(l => (
            <React.Fragment key={l.code}>
              <Route path={`/${l.code}`} element={<SocialVideoDownloader lang={l.code} />} />
              <Route path={`/${l.code}/video`} element={<SocialVideoDownloader lang={l.code} />} />
              <Route path={`/${l.code}/wasm`} element={<QuickWasmCompressor lang={l.code} />} />
              <Route path={`/${l.code}/salary`} element={<NomadTaxCalculator lang={l.code} />} />
              <Route path={`/${l.code}/ai`} element={<DevTokenCalculator lang={l.code} />} />
              
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
                  <DynamicToolPage pageData={route} lang={lang} />
                </>
              } />
              {supportedLanguages.map(l => (
                <Route key={`${l.code}-${route.slug}`} path={`/${l.code}/calculator/${route.slug}`} element={
                  <>
                    <Helmet>
                      <title>{route.title} | GlobalPayCalc</title>
                      <meta name="description" content={route.description} />
                    </Helmet>
                    <DynamicToolPage pageData={route} lang={l.code} />
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
                  <DynamicToolPage pageData={route} lang={lang} />
                </>
              } />
              {supportedLanguages.map(l => (
                <Route key={`${l.code}-${route.slug}`} path={`/${l.code}/tools/${route.slug}`} element={
                  <>
                    <Helmet>
                      <title>{route.title} | GlobalPayCalc</title>
                      <meta name="description" content={route.description} />
                    </Helmet>
                    <DynamicToolPage pageData={route} lang={l.code} />
                  </>
                } />
              ))}
            </React.Fragment>
          ))}

          {/* Fallback 404 Route */}
          <Route path="*" element={<NotFoundPage lang={lang} />} />
        </Routes>
      </div>

      {activeTab !== 'admin' && <AdSenseSlot slotId="mid-content-rectangle" format="auto" />}
      {activeTab !== 'admin' && <ProgrammaticSeoGrid lang={lang} />}
    </>
  );
}

export default function App() {
  const [lang, setLang] = useState('en');
  const location = useLocation();

  useEffect(() => {
    // Detect lang from URL
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const possibleLang = pathSegments[0];
    const isSupported = supportedLanguages.some(l => l.code === possibleLang);
    
    if (isSupported) {
      setLang(possibleLang);
    } else if (typeof window !== 'undefined') {
      const autoLang = detectUserLanguage();
      setLang(autoLang);
    }
  }, [location.pathname]);

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location.pathname]);

  const t = (path) => getTranslation(lang, path);

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 font-sans">
      <Header currentLang={lang} setLang={setLang} />
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 lg:px-8 py-8 space-y-12">
        {!location.pathname.includes('/admin') && <AdSenseSlot slotId="header-leaderboard" format="horizontal" />}
        <ContentWrapper lang={lang} t={t} />
      </main>
      <Footer lang={lang} />
      <CookieConsent lang={lang} />
    </div>
  );
}
