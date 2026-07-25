import React, { useState, useEffect } from 'react';
import { Info, HelpCircle, ShieldCheck, ChevronDown } from 'lucide-react';
import { generateSeoSchema } from '../utils/schemaGenerator';
import allArticles from '../data/seoArticles';

export default function ToolSeoArticle({ activeTool = 'take-home', lang = 'en' }) {
  // Pick the language dict, fall back to EN
  const langDict = allArticles[lang] || allArticles['en'];
  // Pick the tool article, fall back to take-home
  const article = langDict[activeTool] || langDict['take-home'] || allArticles['en']['take-home'];

  const faqLabels = {
    en: 'Frequently Asked Questions',
    tr: 'Sıkça Sorulan Sorular',
    es: 'Preguntas Frecuentes',
    de: 'Häufig gestellte Fragen',
    pt: 'Perguntas Frequentes',
    fr: 'Questions Fréquemment Posées',
    id: 'Pertanyaan yang Sering Diajukan',
    ja: 'よくある質問',
  };
  const faqLabel = faqLabels[lang] || faqLabels['en'];

  const buttonLabels = {
    en: { show: 'Show Detailed Guide & FAQs', hide: 'Hide Detailed Guide & FAQs' },
    tr: { show: 'Detaylı Rehber & SSS Göster', hide: 'Detaylı Rehber & SSS Gizle' },
    es: { show: 'Mostrar Guía Detallada y Preguntas Frecuentes', hide: 'Ocultar Guía Detallada y Preguntas Frecuentes' },
    de: { show: 'Detaillierte Anleitung & FAQs anzeigen', hide: 'Detaillierte Anleitung & FAQs ausblenden' },
    pt: { show: 'Mostrar Guia Detalhado e Perguntas Frequentes', hide: 'Ocultar Guia Detalhado e Perguntas Frequentes' },
    fr: { show: 'Afficher le Guide Détaillé & FAQ', hide: 'Masquer le Guide Détaillé & FAQ' },
    id: { show: 'Tampilkan Panduan Detail & FAQ', hide: 'Sembunyikan Panduan Detail & FAQ' },
    ja: { show: '詳細ガイドとよくある質問を表示', hide: '詳細ガイドとよくある質問を非表示' },
  };
  const label = buttonLabels[lang] || buttonLabels['en'];

  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setIsCollapsed(mobile);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const showMobile = mounted && isMobile;
  const showCollapsed = mounted ? (isMobile && isCollapsed) : false;

  const webAppSchema = generateSeoSchema({
    type: 'WebApplication',
    url: `https://globalpaycalc.com/${lang !== 'en' ? lang + '/' : ''}${activeTool}`,
    name: article.title,
    description: article.subtitle,
  });

  return (
    <article className={`glass-card rounded-2xl border-slate-800 transition-all duration-300 ${showMobile ? 'mt-6' : 'mt-12'} ${showMobile ? (showCollapsed ? 'p-0 bg-transparent border-transparent' : 'p-6 bg-slate-900/40 border-slate-800/80 space-y-6') : 'p-6 sm:p-10 space-y-8'}`}>
      {showMobile && (
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="w-full flex items-center justify-between p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-200 hover:text-white transition font-bold text-xs active:scale-[0.98] outline-none"
        >
          <span className="flex items-center space-x-2">
            <Info className="w-4 h-4 text-brand-400" />
            <span>{showCollapsed ? label.show : label.hide}</span>
          </span>
          <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${showCollapsed ? '' : 'rotate-180'}`} />
        </button>
      )}

      <div className={`transition-all duration-500 ease-in-out overflow-hidden ${showMobile ? (showCollapsed ? 'max-h-0 opacity-0 pointer-events-none' : 'max-h-[5000px] opacity-100 space-y-6') : 'space-y-8'}`}>
        <header className="space-y-2 border-b border-slate-800 pb-6">
          <h2 className="text-2xl font-bold text-white flex items-center space-x-3">
            <Info className="w-6 h-6 text-brand-400 flex-shrink-0" />
            <span>{article.title}</span>
          </h2>
          <p className="text-slate-400 text-sm font-medium">{article.subtitle}</p>
        </header>

        <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
          {(article.paragraphs || []).map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        {article.faqs && article.faqs.length > 0 && (
          <div className="space-y-6 pt-6 border-t border-slate-800">
            <h3 className="text-xl font-bold text-white flex items-center space-x-2">
              <HelpCircle className="w-5 h-5 text-amber-400" />
              <span>{faqLabel}</span>
            </h3>
            <div className="space-y-4">
              {article.faqs.map((faq, idx) => (
                <div key={idx} className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 space-y-1">
                  <h4 className="font-semibold text-slate-200 text-sm">{faq.q}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <footer className="pt-6 border-t border-slate-800 text-xs text-slate-500 flex items-center justify-between">
          <span>© GlobalPayCalc.com — 100% Client-Side Financial Utility Engine</span>
          <span className="flex items-center space-x-1 text-emerald-400 font-mono">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>SSL 256-Bit Encrypted</span>
          </span>
        </footer>
      </div>

      {/* Structured JSON-LD Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
    </article>
  );
}
