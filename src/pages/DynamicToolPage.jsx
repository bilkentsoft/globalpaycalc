import React, { useState } from 'react';
import { generateUnifiedSchema } from '../utils/schemaGenerator';
import { ArrowLeftRight, ShieldAlert, TrendingUp, Info, Link as LinkIcon, CheckCircle2, AlertTriangle, DollarSign, Wifi, Building2, Cpu, Sliders } from 'lucide-react';
import { getTranslation } from '../i18n';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { generatePseoTaxMatrix, generatePseoLlmMatrix, llmModelsCatalog, useCasePresets } from '../pseo/matrixEngine';
import pseoTemplates from '../data/pseoTemplates';
import NotFoundPage from './NotFoundPage';

const pageTranslations = {
  en: {
    disclaimer: "Disclaimer",
    disclaimerTax: "Tax laws change frequently and individual circumstances vary. Do not base financial or legal decisions solely on this calculator.",
    disclaimerLlm: "API prices and tokenizer rules are subject to change by the respective providers.",
    estimatesNote: "Calculations are estimations based on verified expat/nomad regimes ({perk}) and city-level living cost benchmarks. Consult a qualified cross-border CPA for formal filings.",
    summaryTitle: "Tax, Rent & Relocation Breakdown ($85k Baseline)",
    originBase: "Origin Hub",
    destinationTarget: "Destination Hub",
    effectiveTax: "Effective Tax",
    applicableTaxScheme: "Applicable Tax Regime",
    realPurchasingPowerBoost: "Purchasing Power Multiplier",
    apiCostBenchmark: "{modelA} vs {modelB} API Cost & Architecture Guide",
    remoteNetSalary: "{origin} → {dest} Remote Tax, Rent & Net Savings Analysis"
  },
  tr: {
    disclaimer: "Yasal Uyarı",
    disclaimerTax: "Vergi kanunları sıklıkla değişir ve bireysel durumlar farklılık gösterir. Finansal veya yasal kararlarınızı yalnızca bu hesaplayıcıya dayandırmayın.",
    disclaimerLlm: "API fiyatları ve tokenizer kuralları ilgili sağlayıcılar tarafından değiştirilebilir.",
    estimatesNote: "Hesaplamalar doğrulanmış dijital göçebe vergi rejimlerine ({perk}) ve şehir bazlı kira/yaşam maliyeti verilerine dayanır.",
    summaryTitle: "Vergi, Kira ve Taşınma Özeti",
    originBase: "Kaynak Şehir",
    destinationTarget: "Hedef Şehir",
    effectiveTax: "Efektif Vergi",
    applicableTaxScheme: "Vergi Programı",
    realPurchasingPowerBoost: "Alım Gücü Çarpanı",
    apiCostBenchmark: "{modelA} ve {modelB} API Maliyet Karşılaştırması",
    remoteNetSalary: "{origin} → {dest} Uzaktan {status} Net Maaş Analizi"
  }
};

let taxMatrixMap = null;
let llmMatrixMap = null;

export const getRouteData = (slug, type) => {
  if (type === 'tax') {
    if (!taxMatrixMap) {
      taxMatrixMap = new Map();
      generatePseoTaxMatrix().forEach(r => taxMatrixMap.set(r.slug, r));
    }
    // Also gracefully resolve legacy -freelancer-tax-parity slugs in client router if hit
    const normalizedSlug = slug ? slug.replace('-freelancer-tax-parity', '-nomad-tax-parity') : slug;
    return taxMatrixMap.get(normalizedSlug);
  } else {
    if (!llmMatrixMap) {
      llmMatrixMap = new Map();
      generatePseoLlmMatrix().forEach(r => llmMatrixMap.set(r.slug, r));
    }
    return llmMatrixMap.get(slug);
  }
};

export default function DynamicToolPage({ pageData, routeData, type, lang = 'en' }) {
  const t = (path) => getTranslation(lang, path);
  const { slug } = useParams();

  let data = pageData || routeData;
  if (!data && slug) {
    data = getRouteData(slug, type);
  }

  // Interactive states for Tax & Relocation Simulator
  const [grossSalary, setGrossSalary] = useState(95000);
  const [housingTier, setHousingTier] = useState('standard'); // 'budget' | 'standard' | 'family'
  const [workMode, setWorkMode] = useState('nomad'); // 'nomad' | 'b2b'

  // Interactive states for LLM Token Simulator
  const preset = data?.useCasePreset || useCasePresets[data?.useCase] || useCasePresets['rag-pipeline'];
  const [reqsPerDay, setReqsPerDay] = useState(preset?.defaultReqsPerDay || 5000);
  const [inputTokens, setInputTokens] = useState(preset?.defaultInputTokens || 4000);
  const [outputTokens, setOutputTokens] = useState(preset?.defaultOutputTokens || 600);
  const [cacheHitPct, setCacheHitPct] = useState(preset?.defaultCacheHit || 50);

  if (!data) {
    return <NotFoundPage />;
  }

  const isLlmTool = !!data.modelA;
  const { origin, dest, status, modelA, modelB, useCase } = data;
  const modelAInfo = data.modelAInfo || llmModelsCatalog[modelA] || { name: modelA?.toUpperCase(), provider: 'API', inputPer1M: 2.5, outputPer1M: 10.0, cachedInputPer1M: 1.25, contextWindow: '128K', speedTokSec: 100 };
  const modelBInfo = data.modelBInfo || llmModelsCatalog[modelB] || { name: modelB?.toUpperCase(), provider: 'API', inputPer1M: 3.0, outputPer1M: 15.0, cachedInputPer1M: 0.30, contextWindow: '200K', speedTokSec: 85 };

  const activePageText = pageTranslations[lang] || pageTranslations.en;

  const canonicalUrl = `https://globalpaycalc.com/${isLlmTool ? 'tools' : 'calculator'}/${data.slug}`;
  const dynamicTitle = data.title;
  const dynamicDesc = data.description;

  // Tax & Relocation Interactive Math
  const housingMultipliers = { budget: 0.72, standard: 1.0, family: 1.65 };
  const rentMult = housingMultipliers[housingTier] || 1.0;

  const originEffTax = !isLlmTool ? (workMode === 'b2b' ? Math.max(0.15, origin.effTax - 0.04) : origin.effTax) : 0;
  const destEffTax = !isLlmTool ? (workMode === 'b2b' ? Math.max(0.0, dest.effTax - 0.03) : dest.effTax) : 0;

  const originNetAnnual = isLlmTool ? 0 : grossSalary * (1 - originEffTax);
  const destNetAnnual = isLlmTool ? 0 : grossSalary * (1 - destEffTax);
  const originNetMonthly = Math.round(originNetAnnual / 12);
  const destNetMonthly = Math.round(destNetAnnual / 12);

  const originMonthlyCost = isLlmTool ? 0 : Math.round((origin.avgRent1Br || 2200) * rentMult + (origin.avgLivingExRent || 1300));
  const destMonthlyCost = isLlmTool ? 0 : Math.round((dest.avgRent1Br || 1000) * rentMult + (dest.avgLivingExRent || 800));

  const originMonthlySavings = originNetMonthly - originMonthlyCost;
  const destMonthlySavings = destNetMonthly - destMonthlyCost;
  const annualSavingsDelta = (destMonthlySavings - originMonthlySavings) * 12;

  const purchasingPowerBoost = isLlmTool ? '1.00' : (destNetAnnual / originNetAnnual * (100 / (dest.costIndex || 50))).toFixed(2);
  const grossMonthly = Math.round(grossSalary / 12);
  const meetsVisaMin = !isLlmTool && grossMonthly >= (dest.visaMinIncomeMonthly || 2500);

  // LLM Interactive Math
  const monthlyRequests = reqsPerDay * 30;
  const totalInputM = (monthlyRequests * inputTokens) / 1_000_000;
  const totalOutputM = (monthlyRequests * outputTokens) / 1_000_000;
  const cachedRatio = cacheHitPct / 100;

  const calcModelMonthlyCost = (mInfo) => {
    const uncachedInputCost = totalInputM * (1 - cachedRatio) * mInfo.inputPer1M;
    const cachedInputCost = totalInputM * cachedRatio * mInfo.cachedInputPer1M;
    const outputCost = totalOutputM * mInfo.outputPer1M;
    return uncachedInputCost + cachedInputCost + outputCost;
  };

  const modelAMonthlyCost = isLlmTool ? calcModelMonthlyCost(modelAInfo) : 0;
  const modelBMonthlyCost = isLlmTool ? calcModelMonthlyCost(modelBInfo) : 0;
  const cheaperModel = modelAMonthlyCost <= modelBMonthlyCost ? modelAInfo : modelBInfo;
  const llmMonthlySavings = Math.abs(modelAMonthlyCost - modelBMonthlyCost);

  // Load templates
  const activeTemplates = pseoTemplates[lang] || pseoTemplates['en'];
  let introText = '';
  let body1Text = '';
  let body2Text = '';
  let faqs = [];

  if (!isLlmTool) {
    const replacer = (text) => {
      if (!text) return '';
      return text
        .replace(/{origin}/g, origin.name)
        .replace(/{dest}/g, dest.name)
        .replace(/{status}/g, status.label)
        .replace(/{perk}/g, dest.taxSchemeName)
        .replace(/{destTax}/g, (dest.effTax * 100).toFixed(0))
        .replace(/{originTax}/g, (origin.effTax * 100).toFixed(0))
        .replace(/{destNetMonthly}/g, destNetMonthly.toLocaleString('en-US'))
        .replace(/{originNetMonthly}/g, originNetMonthly.toLocaleString('en-US'))
        .replace(/{destCostIndex}/g, dest.costIndex)
        .replace(/{purchasingPower}/g, purchasingPowerBoost);
    };

    introText = replacer(activeTemplates.taxIntro);
    body1Text = `${replacer(activeTemplates.taxBody1)} ${dest.taxSchemeSummary || ''}`;
    body2Text = `${replacer(activeTemplates.taxBody2)} Typical 1-bedroom city-center rent in ${dest.name} averages $${dest.avgRent1Br}/month (plus ~$${dest.avgLivingExRent}/month in groceries, coworking, and utilities), compared to $${origin.avgRent1Br}/month rent in ${origin.name}.`;
    faqs = [
      {
        question: `What is the remote worker tax rate and visa requirement in ${dest.name}?`,
        answer: `${dest.taxSchemeSummary} To qualify for the ${dest.visaType}, applicants generally need to demonstrate at least $${dest.visaMinIncomeMonthly.toLocaleString('en-US')}/month in remote earnings.`
      },
      {
        question: `How much can I save moving from ${origin.name} to ${dest.name} on a $${grossSalary.toLocaleString('en-US')} salary?`,
        answer: `On a $${grossSalary.toLocaleString('en-US')} gross salary, your estimated net take-home pay shifts from $${originNetMonthly.toLocaleString('en-US')}/mo in ${origin.name} (~${(originEffTax * 100).toFixed(0)}% tax) to $${destNetMonthly.toLocaleString('en-US')}/mo in ${dest.name} (~${(destEffTax * 100).toFixed(0)}% tax). Factoring in rent ($${dest.avgRent1Br}/mo vs $${origin.avgRent1Br}/mo) and living costs, your net annual savings changes by ${annualSavingsDelta >= 0 ? '+' : ''}$${annualSavingsDelta.toLocaleString('en-US')}/year.`
      },
      {
        question: `How fast is fiber internet and coworking infrastructure in ${dest.name}?`,
        answer: `${dest.name} offers an average fixed broadband speed of ${dest.internetMbps} Mbps with widespread fiber coverage and dedicated international coworking hubs suitable for low-latency video calls and engineering workflows.`
      }
    ];
  } else {
    const useCaseLabel = preset?.label || useCase.replace('-', ' ');
    introText = `Selecting between ${modelAInfo.name} (${modelAInfo.provider}) and ${modelBInfo.name} (${modelBInfo.provider}) for production ${useCaseLabel} workloads requires balancing token pricing, prompt caching discounts, context window capacity (${modelAInfo.contextWindow} vs ${modelBInfo.contextWindow}), and streaming throughput (${modelAInfo.speedTokSec} vs ${modelBInfo.speedTokSec} tok/s).`;
    body1Text = `${modelAInfo.name} is priced at $${modelAInfo.inputPer1M.toFixed(2)} per 1M input tokens ($${modelAInfo.cachedInputPer1M.toFixed(3)}/1M with prompt caching) and $${modelAInfo.outputPer1M.toFixed(2)} per 1M output tokens. By comparison, ${modelBInfo.name} charges $${modelBInfo.inputPer1M.toFixed(2)} per 1M input tokens ($${modelBInfo.cachedInputPer1M.toFixed(3)}/1M cached) and $${modelBInfo.outputPer1M.toFixed(2)} per 1M output tokens.`;
    body2Text = `At ${reqsPerDay.toLocaleString('en-US')} requests/day (${(totalInputM).toFixed(1)}M monthly input tokens and ${(totalOutputM).toFixed(1)}M monthly output tokens with a ${cacheHitPct}% cache hit rate), ${modelAInfo.name} costs $${modelAMonthlyCost.toFixed(2)}/month whereas ${modelBInfo.name} costs $${modelBMonthlyCost.toFixed(2)}/month—a monthly variance of $${llmMonthlySavings.toFixed(2)} ($${(llmMonthlySavings * 12).toFixed(0)}/year).`;
    faqs = [
      {
        question: `Is ${modelAInfo.name} or ${modelBInfo.name} cheaper for ${useCaseLabel}?`,
        answer: `Under standard ${useCaseLabel} parameters (${reqsPerDay.toLocaleString('en-US')} reqs/day, ${inputTokens} input tokens, ${outputTokens} output tokens, ${cacheHitPct}% cache hit), ${cheaperModel.name} is more cost-effective, saving $${llmMonthlySavings.toFixed(2)} per month ($${(llmMonthlySavings * 12).toFixed(2)} annually).`
      },
      {
        question: `How does prompt caching affect ${modelAInfo.name} vs ${modelBInfo.name} pricing?`,
        answer: `${modelAInfo.name} reduces cached input costs to $${modelAInfo.cachedInputPer1M}/1M tokens, while ${modelBInfo.name} charges $${modelBInfo.cachedInputPer1M}/1M cached input tokens. High system-prompt reuse in ${useCaseLabel} pipelines can cut total input token spend by 50%–90%.`
      },
      {
        question: `What are the context window and speed differences between ${modelAInfo.name} and ${modelBInfo.name}?`,
        answer: `${modelAInfo.name} supports a ${modelAInfo.contextWindow} token context window at ~${modelAInfo.speedTokSec} tokens/sec, while ${modelBInfo.name} provides a ${modelBInfo.contextWindow} token context window at ~${modelBInfo.speedTokSec} tokens/sec.`
      }
    ];
  }

  const unifiedSchema = generateUnifiedSchema({
    url: canonicalUrl,
    name: dynamicTitle,
    description: dynamicDesc,
    faqs,
    breadcrumbs: [
      { name: 'GlobalPayCalc', url: 'https://globalpaycalc.com/' },
      { name: isLlmTool ? 'AI API Cost Calculators' : 'Remote Tax & Relocation Calculators', url: `https://globalpaycalc.com/${isLlmTool ? 'ai' : 'salary'}` },
      { name: dynamicTitle, url: canonicalUrl }
    ]
  });

  const allRoutes = isLlmTool ? generatePseoLlmMatrix() : generatePseoTaxMatrix();
  const relatedRoutes = allRoutes
    .filter(r => r.slug !== data.slug && (isLlmTool ? (r.modelA === modelA || r.modelB === modelB) : (r.origin.code === origin.code || r.dest.code === dest.code)))
    .slice(0, 6);

  return (
    <div className="space-y-8 max-w-4xl mx-auto my-8 animate-in fade-in duration-300">
      <Helmet>
        <title>{dynamicTitle} | GlobalPayCalc</title>
        <meta name="description" content={dynamicDesc} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={`${dynamicTitle} | GlobalPayCalc`} />
        <meta property="og:description" content={dynamicDesc} />
        <meta property="og:image" content="https://globalpaycalc.com/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={canonicalUrl} />
        <meta name="twitter:title" content={`${dynamicTitle} | GlobalPayCalc`} />
        <meta name="twitter:description" content={dynamicDesc} />
        <meta name="twitter:image" content="https://globalpaycalc.com/og-image.png" />
      </Helmet>

      {/* Header */}
      <div className="space-y-3 text-center">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold">
          <ArrowLeftRight className="w-3.5 h-3.5" />
          <span>{isLlmTool ? 'Interactive LLM API Token Cost Simulator' : 'Interactive Relocation Tax & Living Cost Simulator'}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {dynamicTitle}
        </h1>
        <p className="text-slate-400 text-sm leading-relaxed max-w-2xl mx-auto">
          {dynamicDesc}
        </p>
      </div>

      {/* Interactive Calculator Controls & Comparison Card */}
      <div className="glass-card p-6 sm:p-8 rounded-2xl border-brand-500/20 space-y-6">
        {!isLlmTool ? (
          <>
            {/* Interactive Salary & Lifestyle Controls */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-slate-900/80 p-4 rounded-xl border border-slate-800">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                    <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Annual Gross Income (USD)</span>
                  </label>
                  <span className="text-sm font-mono font-extrabold text-emerald-400">${grossSalary.toLocaleString('en-US')}</span>
                </div>
                <input
                  type="range"
                  min="30000"
                  max="350000"
                  step="5000"
                  value={grossSalary}
                  onChange={(e) => setGrossSalary(Number(e.target.value))}
                  aria-label="Annual Gross Income in USD"
                  className="w-full accent-brand-500 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>$30k/yr</span>
                  <span>$150k/yr</span>
                  <span>$350k/yr</span>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-brand-400" />
                  <span>Tax & Legal Setup</span>
                </label>
                <div className="grid grid-cols-2 gap-1.5">
                  <button
                    type="button"
                    onClick={() => setWorkMode('nomad')}
                    className={`py-2 px-2.5 rounded-lg text-xs font-bold border transition ${workMode === 'nomad' ? 'bg-brand-600 text-white border-brand-500' : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'}`}
                  >
                    Nomad Scheme
                  </button>
                  <button
                    type="button"
                    onClick={() => setWorkMode('b2b')}
                    className={`py-2 px-2.5 rounded-lg text-xs font-bold border transition ${workMode === 'b2b' ? 'bg-brand-600 text-white border-brand-500' : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'}`}
                  >
                    B2B Contractor
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5 text-purple-400" />
                  <span>Housing Tier</span>
                </label>
                <div className="grid grid-cols-3 gap-1">
                  {[
                    { id: 'budget', label: 'Shared/Suburb' },
                    { id: 'standard', label: '1BR Center' },
                    { id: 'family', label: '3BR Family' }
                  ].map(tier => (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() => setHousingTier(tier.id)}
                      className={`py-2 px-1.5 rounded-lg text-[11px] font-bold border transition ${housingTier === tier.id ? 'bg-purple-600 text-white border-purple-500' : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'}`}
                    >
                      {tier.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Side-by-Side City Comparison Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Origin City */}
              <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-bold uppercase">{origin.flag} {origin.name}</span>
                  <span className="text-xs font-mono text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded-full border border-rose-500/20">
                    {(originEffTax * 100).toFixed(0)}% Eff. Tax
                  </span>
                </div>
                <div>
                  <div className="text-[11px] text-slate-400">Net Take-Home Pay</div>
                  <div className="text-2xl font-mono font-extrabold text-white">${originNetMonthly.toLocaleString('en-US')}<span className="text-xs text-slate-400 font-normal">/mo</span></div>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2">
                  <div className="bg-slate-500 h-2 rounded-full transition-all duration-300" style={{ width: `${(1 - originEffTax) * 100}%` }}></div>
                </div>
                <div className="pt-2 border-t border-slate-800/80 space-y-1 text-xs">
                  <div className="flex justify-between text-slate-400">
                    <span>Est. Rent + Living:</span>
                    <span className="font-mono text-slate-200">-${originMonthlyCost.toLocaleString('en-US')}/mo</span>
                  </div>
                  <div className="flex justify-between font-bold">
                    <span className="text-slate-300">Net Monthly Savings:</span>
                    <span className={`font-mono ${originMonthlySavings >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                      ${originMonthlySavings.toLocaleString('en-US')}/mo
                    </span>
                  </div>
                </div>
              </div>

              {/* Destination City */}
              <div className="p-5 rounded-xl bg-brand-500/10 border border-brand-500/30 space-y-3 relative overflow-hidden">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-brand-300 font-bold uppercase">{dest.flag} {dest.name}</span>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    {(destEffTax * 100).toFixed(0)}% Eff. Tax
                  </span>
                </div>
                <div>
                  <div className="text-[11px] text-brand-200">Net Take-Home Pay</div>
                  <div className="text-2xl font-mono font-extrabold text-white">${destNetMonthly.toLocaleString('en-US')}<span className="text-xs text-brand-300 font-normal">/mo</span></div>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2">
                  <div className="bg-brand-500 h-2 rounded-full transition-all duration-300" style={{ width: `${(1 - destEffTax) * 100}%` }}></div>
                </div>
                <div className="pt-2 border-t border-brand-500/20 space-y-1 text-xs">
                  <div className="flex justify-between text-slate-300">
                    <span>Est. Rent + Living:</span>
                    <span className="font-mono text-white">-${destMonthlyCost.toLocaleString('en-US')}/mo</span>
                  </div>
                  <div className="flex justify-between font-bold">
                    <span className="text-brand-200">Net Monthly Savings:</span>
                    <span className={`font-mono ${destMonthlySavings >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                      ${destMonthlySavings.toLocaleString('en-US')}/mo
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Relocation Metrics Banner */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-400">Annual Savings Impact</div>
                  <div className={`text-lg font-mono font-extrabold ${annualSavingsDelta >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {annualSavingsDelta >= 0 ? '+' : ''}${annualSavingsDelta.toLocaleString('en-US')}/yr
                  </div>
                </div>
                <TrendingUp className="w-5 h-5 text-emerald-400" />
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-400">Purchasing Power Parity</div>
                  <div className="text-lg font-mono font-extrabold text-brand-400">{purchasingPowerBoost}x Boost</div>
                </div>
                <Wifi className="w-5 h-5 text-brand-400" title={`${dest.internetMbps} Mbps Avg Fiber`} />
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-400">Nomad Visa Min. Income</div>
                  <div className="text-xs font-bold text-white flex items-center gap-1 mt-0.5">
                    {meetsVisaMin ? (
                      <><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> <span>Eligible (${dest.visaMinIncomeMonthly.toLocaleString('en-US')}/mo req)</span></>
                    ) : (
                      <><AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" /> <span>Needs ${dest.visaMinIncomeMonthly.toLocaleString('en-US')}/mo</span></>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800/60 flex items-start space-x-3">
              <ShieldAlert className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <p className="text-xs text-slate-400 leading-relaxed">
                * {activePageText.estimatesNote.replace('{perk}', dest.taxSchemeName)}
              </p>
            </div>
          </>
        ) : (
          <>
            {/* Interactive LLM API Workload Controls */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-slate-900/80 p-4 rounded-xl border border-slate-800">
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="font-bold text-slate-300">Requests / Day</span>
                  <span className="font-mono font-bold text-brand-400">{reqsPerDay.toLocaleString('en-US')}</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="100000"
                  step="500"
                  value={reqsPerDay}
                  onChange={(e) => setReqsPerDay(Number(e.target.value))}
                  aria-label="Requests Per Day"
                  className="w-full accent-brand-500 cursor-pointer"
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="font-bold text-slate-300">Input Tokens / Req</span>
                  <span className="font-mono font-bold text-emerald-400">{inputTokens.toLocaleString('en-US')}</span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="32000"
                  step="200"
                  value={inputTokens}
                  onChange={(e) => setInputTokens(Number(e.target.value))}
                  aria-label="Input Tokens Per Request"
                  className="w-full accent-brand-500 cursor-pointer"
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="font-bold text-slate-300">Output Tokens / Req</span>
                  <span className="font-mono font-bold text-purple-400">{outputTokens.toLocaleString('en-US')}</span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="8000"
                  step="100"
                  value={outputTokens}
                  onChange={(e) => setOutputTokens(Number(e.target.value))}
                  aria-label="Output Tokens Per Request"
                  className="w-full accent-purple-500 cursor-pointer"
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="font-bold text-slate-300">Prompt Cache Hit %</span>
                  <span className="font-mono font-bold text-amber-400">{cacheHitPct}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="90"
                  step="5"
                  value={cacheHitPct}
                  onChange={(e) => setCacheHitPct(Number(e.target.value))}
                  aria-label="Prompt Cache Hit Percentage"
                  className="w-full accent-brand-500 cursor-pointer"
                />
              </div>
            </div>

            {/* Side-by-Side LLM Cost Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-300 uppercase">{modelAInfo.name} ({modelAInfo.provider})</span>
                  <span className="text-[11px] font-mono text-slate-400">{modelAInfo.contextWindow} Context</span>
                </div>
                <div>
                  <div className="text-[11px] text-slate-400">Estimated Monthly API Spend</div>
                  <div className="text-2xl font-mono font-extrabold text-white">${modelAMonthlyCost.toFixed(2)}<span className="text-xs text-slate-400 font-normal">/mo</span></div>
                </div>
                <div className="pt-2 border-t border-slate-800 text-xs space-y-1 text-slate-400">
                  <div className="flex justify-between"><span>Input / Cached (1M):</span><span className="font-mono text-slate-200">${modelAInfo.inputPer1M.toFixed(2)} / ${modelAInfo.cachedInputPer1M.toFixed(3)}</span></div>
                  <div className="flex justify-between"><span>Output (1M):</span><span className="font-mono text-slate-200">${modelAInfo.outputPer1M.toFixed(2)}</span></div>
                  <div className="flex justify-between"><span>Avg Speed:</span><span className="font-mono text-emerald-400">~{modelAInfo.speedTokSec} tok/s</span></div>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-brand-500/10 border border-brand-500/30 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-brand-300 uppercase">{modelBInfo.name} ({modelBInfo.provider})</span>
                  <span className="text-[11px] font-mono text-brand-300">{modelBInfo.contextWindow} Context</span>
                </div>
                <div>
                  <div className="text-[11px] text-brand-200">Estimated Monthly API Spend</div>
                  <div className="text-2xl font-mono font-extrabold text-white">${modelBMonthlyCost.toFixed(2)}<span className="text-xs text-brand-300 font-normal">/mo</span></div>
                </div>
                <div className="pt-2 border-t border-brand-500/20 text-xs space-y-1 text-slate-300">
                  <div className="flex justify-between"><span>Input / Cached (1M):</span><span className="font-mono text-white">${modelBInfo.inputPer1M.toFixed(2)} / ${modelBInfo.cachedInputPer1M.toFixed(3)}</span></div>
                  <div className="flex justify-between"><span>Output (1M):</span><span className="font-mono text-white">${modelBInfo.outputPer1M.toFixed(2)}</span></div>
                  <div className="flex justify-between"><span>Avg Speed:</span><span className="font-mono text-emerald-400">~{modelBInfo.speedTokSec} tok/s</span></div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
              <div className="flex items-center space-x-2 text-emerald-300 font-semibold">
                <Cpu className="w-4 h-4 shrink-0" />
                <span>Cost Winner for {preset?.label}: <strong>{cheaperModel.name}</strong> saves <strong>${llmMonthlySavings.toFixed(2)}/month</strong> (${(llmMonthlySavings * 12).toFixed(0)}/year) at current token volume.</span>
              </div>
              <Link to="/ai" className="text-brand-400 hover:underline font-bold shrink-0">Open Full Multi-Model Simulator →</Link>
            </div>
          </>
        )}
      </div>

      {/* Rich Educational Guide & Breakdown */}
      <article className="glass-card p-6 sm:p-10 rounded-2xl border-slate-800 space-y-8 mt-12">
        <header className="space-y-2 border-b border-slate-800 pb-6">
          <h2 className="text-2xl font-bold text-white flex items-center space-x-3">
            <Info className="w-6 h-6 text-brand-400 flex-shrink-0" />
            <span>
              {isLlmTool
                ? activePageText.apiCostBenchmark.replace('{modelA}', modelAInfo.name).replace('{modelB}', modelBInfo.name)
                : activePageText.remoteNetSalary.replace('{origin}', origin.name).replace('{dest}', dest.name).replace('{status}', status.label)
              }
            </span>
          </h2>
        </header>

        <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
          <p>{introText}</p>
          <p>{body1Text}</p>
          {!isLlmTool && (
            <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl my-4">
              <h3 className="font-bold text-white mb-3 text-base">Relocation Tax, Visa & Living Cost Matrix</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400">
                      <th className="py-2 pr-4">Metric</th>
                      <th className="py-2 px-4">{origin.flag} {origin.name}</th>
                      <th className="py-2 pl-4">{dest.flag} {dest.name}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 text-slate-300">
                    <tr>
                      <td className="py-2.5 pr-4 font-semibold">Tax Regime / Rules</td>
                      <td className="py-2.5 px-4">{origin.taxNotes}</td>
                      <td className="py-2.5 pl-4 text-brand-300 font-medium">{dest.taxSchemeName}</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 pr-4 font-semibold">Effective Tax Rate</td>
                      <td className="py-2.5 px-4 font-mono">{(origin.effTax * 100).toFixed(0)}%</td>
                      <td className="py-2.5 pl-4 font-mono text-emerald-400">{(dest.effTax * 100).toFixed(0)}%</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 pr-4 font-semibold">Avg 1BR City-Center Rent</td>
                      <td className="py-2.5 px-4 font-mono">${origin.avgRent1Br.toLocaleString('en-US')}/mo</td>
                      <td className="py-2.5 pl-4 font-mono">${dest.avgRent1Br.toLocaleString('en-US')}/mo</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 pr-4 font-semibold">Living Expenses (Ex-Rent)</td>
                      <td className="py-2.5 px-4 font-mono">${origin.avgLivingExRent.toLocaleString('en-US')}/mo</td>
                      <td className="py-2.5 pl-4 font-mono">${dest.avgLivingExRent.toLocaleString('en-US')}/mo</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 pr-4 font-semibold">Digital Nomad Visa</td>
                      <td className="py-2.5 px-4">Domestic Residency</td>
                      <td className="py-2.5 pl-4">{dest.visaType} (Min. ${dest.visaMinIncomeMonthly.toLocaleString('en-US')}/mo)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
          <p>{body2Text}</p>
        </div>

        <div className="space-y-6 pt-4 border-t border-slate-800">
          <h3 className="text-xl font-bold text-white">Frequently Asked Questions</h3>
          {faqs.map((faq, index) => (
            <section key={index} className="space-y-1.5 bg-slate-900/50 p-4 rounded-xl border border-slate-800/80">
              <h4 className="text-sm font-bold text-slate-100">{faq.question}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{faq.answer}</p>
            </section>
          ))}
        </div>

        <footer className="pt-6 border-t border-slate-800 text-xs text-slate-500">
          <p>
            <strong>{activePageText.disclaimer}:</strong>
            {isLlmTool ? ` ${activePageText.disclaimerLlm}` : ` ${activePageText.disclaimerTax}`}
          </p>
        </footer>
      </article>

      {/* Internal Linking Matrix */}
      {relatedRoutes.length > 0 && (
        <section className="mt-12 space-y-4">
          <h3 className="text-xl font-bold text-white flex items-center space-x-2">
            <LinkIcon className="w-5 h-5 text-brand-400" />
            <span>Related Calculators & Comparisons</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedRoutes.map(route => (
              <Link
                key={route.slug}
                to={`/${isLlmTool ? 'tools' : 'calculator'}/${route.slug}`}
                className="p-4 rounded-xl border border-slate-800 bg-slate-900/50 hover:bg-slate-800 transition block group"
              >
                <div className="text-xs text-brand-400 mb-1 font-semibold">
                  {isLlmTool ? `${route.modelAInfo.name} vs ${route.modelBInfo.name}` : `${route.origin.flag} ${route.origin.name} → ${route.dest.flag} ${route.dest.name}`}
                </div>
                <div className="text-xs font-medium text-slate-300 group-hover:text-white line-clamp-2">
                  {route.title}
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(unifiedSchema) }} />
    </div>
  );
}
