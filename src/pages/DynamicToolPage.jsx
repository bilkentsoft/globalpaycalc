import React from 'react';
import { generateSeoSchema } from '../utils/schemaGenerator';
import { ArrowLeftRight, ShieldAlert, Sparkles, TrendingUp, Info, Link as LinkIcon } from 'lucide-react';
import { getTranslation } from '../i18n';
import { Link } from 'react-router-dom';
import { generatePseoTaxMatrix, generatePseoLlmMatrix } from '../pseo/matrixEngine';

export default function DynamicToolPage({ pageData, lang = 'en' }) {
  const t = (path) => getTranslation(lang, path);

  const isLlmTool = !!pageData.modelA;
  const { title, description, origin, dest, status, modelA, modelB, useCase, slug } = pageData;

  let taxContext = '';
  if (!isLlmTool && dest?.effTax) {
    if (dest.effTax > 0.25) taxContext = t('dynamic.taxHigh');
    else if (dest.effTax < 0.15) taxContext = t('dynamic.taxLow');
    else taxContext = t('dynamic.taxMid');
  }

  const dynamicTitle = isLlmTool 
    ? t('dynamic.llmTitle').replace('{{modelA}}', modelA).replace('{{modelB}}', modelB).replace('{{useCase}}', useCase.replace('-', ' '))
    : t('dynamic.taxTitle').replace('{{origin}}', origin?.name).replace('{{dest}}', dest?.name).replace('{{status}}', status?.label);

  const dynamicDesc = isLlmTool 
    ? t('dynamic.llmDesc').replace('{{modelA}}', modelA).replace('{{modelB}}', modelB).replace('{{useCase}}', useCase.replace('-', ' '))
    : t('dynamic.taxDesc').replace('{{origin}}', origin?.name).replace('{{dest}}', dest?.name).replace('{{status}}', status?.label).replace('{{taxContext}}', taxContext);

  // Render a mock dynamic calculation result based on matrix parameters
  const originNet = isLlmTool ? 0 : 85000 * (1 - origin.effTax);
  const destNet = isLlmTool ? 0 : 85000 * (1 - dest.effTax);
  const purchasingPowerBoost = isLlmTool ? '1.0' : (destNet / originNet * (100 / dest.costIndex)).toFixed(2);

  const faqs = isLlmTool ? [
    {
      question: t('faq.llmQ1').replace('{{modelA}}', modelA).replace('{{modelB}}', modelB).replace('{{useCase}}', useCase.replace('-', ' ')),
      answer: t('faq.llmA1').replace('{{modelA}}', modelA).replace('{{modelB}}', modelB).replace('{{useCase}}', useCase.replace('-', ' '))
    },
    {
      question: t('faq.llmQ2').replace('{{modelA}}', modelA).replace('{{modelB}}', modelB).replace('{{useCase}}', useCase.replace('-', ' ')),
      answer: t('faq.llmA2').replace('{{modelA}}', modelA).replace('{{modelB}}', modelB).replace('{{useCase}}', useCase.replace('-', ' '))
    },
    {
      question: t('faq.llmQ3').replace('{{modelA}}', modelA).replace('{{modelB}}', modelB).replace('{{useCase}}', useCase.replace('-', ' ')),
      answer: t('faq.llmA3').replace('{{modelA}}', modelA).replace('{{modelB}}', modelB).replace('{{useCase}}', useCase.replace('-', ' '))
    }
  ] : [
    {
      question: t('faq.taxQ1').replace('{{dest}}', dest?.name),
      answer: t('faq.taxA1').replace('{{dest}}', dest?.name).replace('{{perk}}', status?.perk).replace('{{taxRate}}', (dest?.effTax * 100).toFixed(0))
    },
    {
      question: t('faq.taxQ2').replace('{{dest}}', dest?.name).replace('{{origin}}', origin?.name),
      answer: t('faq.taxA2').replace('{{dest}}', dest?.name).replace('{{origin}}', origin?.name).replace('{{boost}}', purchasingPowerBoost)
    },
    {
      question: t('faq.taxQ3').replace('{{dest}}', dest?.name),
      answer: t('faq.taxA3').replace('{{dest}}', dest?.name).replace('{{taxRate}}', (dest?.effTax * 100).toFixed(0)).replace('{{boost}}', purchasingPowerBoost)
    }
  ];

  const webAppSchema = generateSeoSchema({
    type: 'WebApplication',
    url: `https://globalpaycalc.com/${isLlmTool ? 'tools' : 'calculator'}/${slug}`,
    name: dynamicTitle,
    description: dynamicDesc
  });

  const faqSchema = generateSeoSchema({
    type: 'FAQPage',
    url: `https://globalpaycalc.com/${isLlmTool ? 'tools' : 'calculator'}/${slug}`,
    faqs
  });

  // Internal Linking Logic (Related Routes)
  const allRoutes = isLlmTool ? generatePseoLlmMatrix() : generatePseoTaxMatrix();
  const relatedRoutes = allRoutes
    .filter(r => r.slug !== slug && (isLlmTool ? r.modelA === modelA : r.origin.code === origin.code))
    .slice(0, 3);

  return (
    <div className="space-y-8 max-w-4xl mx-auto my-8">
      
      {/* Header */}
      <div className="space-y-3 text-center">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold">
          <ArrowLeftRight className="w-3.5 h-3.5" />
          <span>{isLlmTool ? 'API Cost & Latency Projection' : 'Dynamic Tax Parity Estimator'}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {dynamicTitle}
        </h1>
        <p className="text-slate-400 text-sm leading-relaxed max-w-2xl mx-auto">
          {dynamicDesc}
        </p>
      </div>

      {/* Dynamic Interactive Chart Comparison Card */}
      <div className="glass-card glass-card-hover p-6 sm:p-8 rounded-2xl border-brand-500/20 space-y-6">
        <h3 className="text-sm font-bold text-white flex items-center space-x-2">
          <TrendingUp className="w-4.5 h-4.5 text-brand-400" />
          <span className="gradient-text">{isLlmTool ? t('dynamic.llmHeader') : t('dynamic.taxHeader')}</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Origin Country Net */}
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2 relative overflow-hidden group">
            <div className="text-[10px] text-slate-400 font-semibold uppercase">{isLlmTool ? modelA : t('dynamic.originNet').replace('{{origin}}', origin?.flag + ' ' + origin?.name)}</div>
            <div className="text-2xl font-mono font-extrabold text-white">${isLlmTool ? 'N/A' : `${Math.round(originNet / 12).toLocaleString()}/mo`}</div>
            {!isLlmTool && (
              <>
                <div className="w-full bg-slate-800 rounded-full h-2">
                  <div className="bg-slate-500 h-2 rounded-full transition-all duration-1000" style={{ width: `${(1 - origin?.effTax) * 100}%` }}></div>
                </div>
                <span className="text-[10px] text-slate-500 font-mono">{t('dynamic.taxRate').replace('{{rate}}', (origin?.effTax * 100).toFixed(0))}</span>
              </>
            )}
          </div>

          {/* Destination Country Net */}
          <div className="p-4 rounded-xl bg-brand-500/10 border border-brand-500/20 space-y-2 relative overflow-hidden group">
            <div className="text-[10px] text-brand-300 font-semibold uppercase">{isLlmTool ? modelB : t('dynamic.destNet').replace('{{dest}}', dest?.flag + ' ' + dest?.name)}</div>
            <div className="text-2xl font-mono font-extrabold text-white">${isLlmTool ? 'N/A' : `${Math.round(destNet / 12).toLocaleString()}/mo`}</div>
            {!isLlmTool && (
              <>
                <div className="w-full bg-slate-800 rounded-full h-2">
                  <div className="bg-brand-500 h-2 rounded-full transition-all duration-1000 delay-300" style={{ width: `${(1 - dest?.effTax) * 100}%` }}></div>
                </div>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-[10px] text-brand-400/70 font-mono">{t('dynamic.taxRate').replace('{{rate}}', (dest?.effTax * 100).toFixed(0))}</span>
                  <span className="text-[10px] text-brand-400 font-bold bg-brand-500/20 px-2 rounded-full py-0.5">{purchasingPowerBoost}x {t('dynamic.purchasingPower')}</span>
                </div>
              </>
            )}
            
            {/* Background Glow */}
            <div className="absolute -inset-4 bg-brand-500/5 blur-xl group-hover:bg-brand-500/10 transition duration-500 opacity-0 group-hover:opacity-100"></div>
          </div>
        </div>

        {!isLlmTool && (
          <div className="pt-4 border-t border-slate-800/60 flex items-start space-x-3">
            <ShieldAlert className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <p className="text-xs text-slate-400 leading-relaxed">
              * Calculations are estimations based on standard digital nomad tax schemes (e.g. {status?.perk}) and general {t('dynamic.costIndex')} multipliers. For official advice, please consult an accountant.
            </p>
          </div>
        )}
      </div>

      {/* Enhanced SEO Content Block (To prevent Thin Content AdSense Rejection) */}
      <article className="glass-card p-6 sm:p-10 rounded-2xl border-slate-800 space-y-8 mt-12">
        <header className="space-y-2 border-b border-slate-800 pb-6">
          <h2 className="text-2xl font-bold text-white flex items-center space-x-3">
            <Info className="w-6 h-6 text-purple-400" />
            <span>Comprehensive Analysis: {isLlmTool ? `${modelA} vs ${modelB}` : `Moving to ${dest?.name}`}</span>
          </h2>
          <p className="text-slate-400 text-sm">
            Detailed insights and frequently asked questions about this specific comparison to help you make informed decisions.
          </p>
        </header>
        
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <section key={index} className="space-y-3">
              <h3 className="text-lg font-semibold text-slate-200">{faq.question}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{faq.answer}</p>
            </section>
          ))}
        </div>
        
        <footer className="pt-6 border-t border-slate-800 text-xs text-slate-500">
          <p>
            <strong>Disclaimer:</strong> The figures provided on this page are automated estimates generated for {title}. 
            {isLlmTool ? ' API prices and tokenizer rules are subject to change by the respective providers.' : ' Tax laws change frequently and individual circumstances vary. Do not base financial or legal decisions solely on this calculator.'}
          </p>
        </footer>
      </article>

      {/* Internal Linking Matrix (Orphan Page Prevention) */}
      {relatedRoutes.length > 0 && (
        <section className="mt-12 space-y-4">
          <h3 className="text-xl font-bold text-white flex items-center space-x-2">
            <LinkIcon className="w-5 h-5 text-brand-400" />
            <span>{t('dynamic.relatedComparisons')}</span>
          </h3>
          <p className="text-sm text-slate-400 mb-6">
            {isLlmTool ? t('dynamic.relatedLlmDesc') : t('dynamic.relatedTaxDesc')}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedRoutes.map(route => (
              <Link 
                key={route.slug} 
                to={`/${lang === 'en' ? '' : lang + '/'}${isLlmTool ? 'tools' : 'calculator'}/${route.slug}`}
                className="p-4 rounded-xl border border-slate-800 bg-slate-900/50 hover:bg-slate-800 transition block group"
              >
                <div className="text-xs text-brand-400 mb-1">{isLlmTool ? route.useCase.replace('-', ' ') : `${route.origin.name} → ${route.dest.name}`}</div>
                <div className="text-sm font-semibold text-slate-200 group-hover:text-white line-clamp-2">
                  {route.title}
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Static JSON-LD Schema Injection for SSR */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

    </div>
  );
}
