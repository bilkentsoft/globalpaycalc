import React from 'react';
import { Info, HelpCircle, ShieldCheck } from 'lucide-react';
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

  const webAppSchema = generateSeoSchema({
    type: 'WebApplication',
    url: `https://globalpaycalc.com/${lang !== 'en' ? lang + '/' : ''}${activeTool}`,
    name: article.title,
    description: article.subtitle,
  });

  return (
    <article className="glass-card p-6 sm:p-10 rounded-2xl border-slate-800 space-y-8 mt-12">
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

      {/* Structured JSON-LD Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
    </article>
  );
}
