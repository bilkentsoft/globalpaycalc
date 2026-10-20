import React from 'react';
import { Info, HelpCircle, ShieldCheck, BookOpen, Calculator, Table } from 'lucide-react';
import { generateUnifiedSchema } from '../utils/schemaGenerator';
import allArticles from '../data/seoArticles';
import { toolDeepGuides } from '../data/toolDeepGuides';

export default function ToolSeoArticle({ activeTool = 'take-home', lang = 'en' }) {
  // Pick the language dict, fall back to EN
  const langDict = allArticles[lang] || allArticles['en'];
  const article = langDict[activeTool] || langDict['take-home'] || allArticles['en']['take-home'];

  // Pick deep guide for activeTool (prefer current language, fall back to EN)
  const toolGuideMap = toolDeepGuides[activeTool] || toolDeepGuides['take-home'];
  const deepGuide = (toolGuideMap && (toolGuideMap[lang] || toolGuideMap['en'])) || null;

  const faqLabels = {
    en: 'Frequently Asked Questions & Statutory Rules',
    tr: 'Sıkça Sorulan Sorular ve Mevzuat Rehberi',
    es: 'Preguntas Frecuentes y Normativa Oficial',
    de: 'Häufig gestellte Fragen & Gesetzliche Grundlagen',
    pt: 'Perguntas Frequentes e Regras Oficiais',
    fr: 'Questions Fréquemment Posées et Réglementation',
    id: 'Pertanyaan yang Sering Diajukan & Panduan Resmi',
    ja: 'よくある質問（FAQ）と法定計算ガイド',
  };
  const faqLabel = faqLabels[lang] || faqLabels['en'];

  const combinedFaqs = [
    ...(article.faqs || []),
    ...(deepGuide?.extraFaqs || [])
  ];

  const schemaFaqs = combinedFaqs.map(f => ({
    question: f.q,
    answer: f.a
  }));

  const canonicalPath = activeTool === 'take-home' ? '' : `/${activeTool}`;
  const fullUrl = `https://globalpaycalc.com${lang !== 'en' ? '/' + lang : ''}${canonicalPath || (lang === 'en' ? '/' : '')}`;

  const unifiedToolSchema = generateUnifiedSchema({
    url: fullUrl,
    name: article.title,
    description: article.subtitle,
    faqs: schemaFaqs
  });

  return (
    <article className="glass-card rounded-2xl border-slate-800 mt-8 p-6 sm:p-10 space-y-8">
      <header className="space-y-2 border-b border-slate-800 pb-6">
        <h2 className="text-2xl font-bold text-white flex items-center space-x-3">
          <Info className="w-6 h-6 text-brand-400 flex-shrink-0" />
          <span>{article.title}</span>
        </h2>
        <p className="text-slate-400 text-sm font-medium">{article.subtitle}</p>
      </header>

      {/* Core Introduction Paragraphs */}
      <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
        {(article.paragraphs || []).map((p, idx) => (
          <p key={idx}>{p}</p>
        ))}
      </div>

      {/* Mathematical Formula & Statutory Methodology Box */}
      {deepGuide?.formulaCode && (
        <div className="bg-slate-900/90 border border-brand-500/30 rounded-2xl p-5 sm:p-6 space-y-3">
          <div className="flex items-center space-x-2 text-brand-400 font-bold text-xs uppercase tracking-wider">
            <Calculator className="w-4 h-4 shrink-0" />
            <span>{deepGuide.formulaTitle}</span>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs sm:text-sm text-emerald-300 overflow-x-auto">
            {deepGuide.formulaCode}
          </div>
          {deepGuide.formulaNotes && (
            <p className="text-xs text-slate-400 leading-relaxed">
              {deepGuide.formulaNotes}
            </p>
          )}
        </div>
      )}

      {/* Worked Numerical Comparison & Benchmark Table */}
      {deepGuide?.tableRows && deepGuide.tableRows.length > 0 && (
        <div className="space-y-3 pt-2">
          <h3 className="text-lg font-bold text-white flex items-center space-x-2">
            <Table className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>{deepGuide.tableTitle}</span>
          </h3>
          <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/60">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-950/80 text-slate-300">
                  {deepGuide.tableHeaders.map((th, i) => (
                    <th key={i} className="py-3 px-4 font-bold whitespace-nowrap">{th}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/70 text-slate-300">
                {deepGuide.tableRows.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-slate-800/40 transition">
                    {row.map((cell, cIdx) => (
                      <td
                        key={cIdx}
                        className={`py-3 px-4 whitespace-nowrap ${
                          cIdx === 0 ? 'font-semibold text-white' : 'font-mono text-slate-300'
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Deep Editorial Subsections */}
      {deepGuide?.sections && deepGuide.sections.length > 0 && (
        <div className="space-y-6 pt-4 border-t border-slate-800">
          {deepGuide.sections.map((sec, idx) => (
            <section key={idx} className="space-y-2">
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-brand-400 shrink-0" />
                <span>{sec.heading}</span>
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {sec.body}
              </p>
            </section>
          ))}
        </div>
      )}

      {/* Comprehensive FAQs */}
      {combinedFaqs.length > 0 && (
        <div className="space-y-5 pt-6 border-t border-slate-800">
          <h3 className="text-xl font-bold text-white flex items-center space-x-2">
            <HelpCircle className="w-5 h-5 text-amber-400 shrink-0" />
            <span>{faqLabel}</span>
          </h3>
          <div className="grid grid-cols-1 gap-4">
            {combinedFaqs.map((faq, idx) => (
              <div key={idx} className="bg-slate-900/60 p-4 sm:p-5 rounded-xl border border-slate-800 space-y-1.5">
                <h4 className="font-bold text-slate-100 text-sm">{faq.q}</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <footer className="pt-6 border-t border-slate-800 text-xs text-slate-400 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <span>© GlobalPayCalc Team — Client-Side Financial & Tax Simulation Engine (Educational Use Only)</span>
        <span className="flex items-center space-x-1 text-emerald-400 font-mono">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>100% Local Browser RAM</span>
        </span>
      </footer>

      {/* Structured JSON-LD Schema (WebApplication + FAQPage) */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(unifiedToolSchema) }} />
    </article>
  );
}
