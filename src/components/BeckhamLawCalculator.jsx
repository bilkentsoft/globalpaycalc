import React, { useState } from 'react';
import { calculateBeckhamSavings, expatRegimes } from '../utils/beckhamLawEngine';
import { Award, ShieldCheck, ExternalLink, FileCheck2, Info } from 'lucide-react';
import calcTranslations from '../data/calculatorTranslations';

export default function BeckhamLawCalculator({ lang = 'en' }) {
  const [annualGross, setAnnualGross] = useState(120000);
  const [selectedRegime, setSelectedRegime] = useState('ES_BECKHAM');
  const [useAutoProgressive, setUseAutoProgressive] = useState(true);
  const [customStandardRate, setCustomStandardRate] = useState(40);
  const [includeSS, setIncludeSS] = useState(true);

  const tCalc = calcTranslations[lang] || calcTranslations['en'];
  const effectiveComparisonRate = (selectedRegime === 'ES_BECKHAM' && useAutoProgressive) ? null : customStandardRate;
  const result = calculateBeckhamSavings(annualGross, selectedRegime, effectiveComparisonRate, includeSS);
  const sym = result.regime.currencySymbol || '€';

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Component Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold">
          <Award className="w-3.5 h-3.5" />
          <span>{tCalc.beckhamBadge}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {tCalc.beckhamTitle}
        </h2>
        <p className="text-slate-400 text-sm leading-relaxed">
          {tCalc.beckhamDesc}
        </p>
      </div>

      {/* Main Form */}
      <div className="glass-card p-6 sm:p-8 rounded-3xl border-slate-800 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              {tCalc.grossSalaryLabel} ({sym})
            </label>
            <input 
              type="number" 
              min="20000"
              max="2000000"
              step="5000"
              value={annualGross} 
              onChange={(e) => setAnnualGross(Number(e.target.value))} 
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white font-bold text-lg focus:border-rose-500 outline-none"
            />
            <div className="flex gap-1.5 pt-1">
              {[75000, 120000, 200000, 650000].map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => setAnnualGross(preset)}
                  className={`px-2 py-1 rounded-lg text-[10px] font-mono font-bold border transition ${
                    annualGross === preset ? 'bg-rose-500/20 border-rose-500/50 text-rose-300' : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {sym}{(preset / 1000)}k
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              {tCalc.expatRegimeLabel}
            </label>
            <select
              value={selectedRegime}
              aria-label="Expat Tax Regime Selection"
              onChange={(e) => setSelectedRegime(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white font-bold text-sm focus:border-rose-500 outline-none cursor-pointer"
            >
              {Object.entries(expatRegimes).map(([code, r]) => (
                <option key={code} value={code}>
                  {r.flag} {r.name} ({r.flatTaxRate}%)
                </option>
              ))}
            </select>
            <div className="text-[11px] text-slate-400 flex items-center justify-between pt-1">
              <span>Duration: <strong>{result.regime.durationYears} tax years</strong></span>
              {result.regime.maxCap > 0 && (
                <span>Cap: <strong>{sym}{result.regime.maxCap.toLocaleString()}</strong></span>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                {tCalc.standardTaxRateLabel}
              </label>
              {selectedRegime === 'ES_BECKHAM' && (
                <button
                  type="button"
                  onClick={() => setUseAutoProgressive(!useAutoProgressive)}
                  className="text-[10px] font-bold text-brand-400 hover:underline"
                >
                  {useAutoProgressive ? 'Custom %' : 'Auto IRPF Scale'}
                </button>
              )}
            </div>
            {selectedRegime === 'ES_BECKHAM' && useAutoProgressive ? (
              <div className="w-full bg-slate-900/80 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 font-bold text-sm flex items-center justify-between">
                <span>Spanish Progressive IRPF</span>
                <span className="text-rose-400 font-mono">{result.standardTaxRatePercent}% Eff.</span>
              </div>
            ) : (
              <input 
                type="number" 
                min="10"
                max="60"
                value={customStandardRate} 
                onChange={(e) => setCustomStandardRate(Number(e.target.value))} 
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white font-bold text-lg focus:border-rose-500 outline-none"
              />
            )}
            <label className="flex items-center space-x-2 pt-1 cursor-pointer text-xs text-slate-300">
              <input
                type="checkbox"
                checked={includeSS}
                onChange={(e) => setIncludeSS(e.target.checked)}
                className="rounded accent-rose-500"
              />
              <span>Include Employee Social Security ({sym}{result.socialSecurityAmount.toLocaleString()}/yr)</span>
            </label>
          </div>
        </div>

        {/* Results Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-1">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{tCalc.standardNet}</span>
            <div className="text-3xl font-black text-rose-400">
              {sym}{result.standardNetTakeHome.toLocaleString()}
            </div>
            <div className="text-xs font-mono text-slate-300">
              {sym}{result.standardNetMonthly.toLocaleString()}/mo net
            </div>
            <p className="text-[11px] text-slate-400 pt-1">
              Income Tax: {sym}{result.standardTaxAmount.toLocaleString()} ({result.standardTaxRatePercent}%)
              {includeSS ? ` + SS: ${sym}${result.socialSecurityAmount.toLocaleString()}` : ''}
            </p>
          </div>

          <div className="bg-gradient-to-br from-emerald-950/40 to-slate-900 p-6 rounded-2xl border border-emerald-500/30 space-y-1">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">{tCalc.expatNet}</span>
            <div className="text-3xl font-black text-emerald-400">
              {sym}{result.expatNetTakeHome.toLocaleString()}
            </div>
            <div className="text-xs font-mono text-emerald-200">
              {sym}{result.expatNetMonthly.toLocaleString()}/mo net
            </div>
            <p className="text-[11px] text-slate-300 pt-1">
              Regime Tax: {sym}{result.expatTaxAmount.toLocaleString()} ({result.effectiveExpatTaxPercent}%)
              {includeSS ? ` + SS: ${sym}${result.socialSecurityAmount.toLocaleString()}` : ''}
            </p>
          </div>

          <div className="bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-1">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">{tCalc.annualSavings}</span>
            <div className="text-3xl font-black text-amber-400">
              +{sym}{result.annualTaxSavings.toLocaleString()}
            </div>
            <div className="text-xs font-mono text-amber-200">
              +{sym}{Math.round(result.annualTaxSavings / 12).toLocaleString()}/mo saved
            </div>
            <p className="text-[11px] text-slate-400 pt-1">
              {result.regime.durationYears}-year cumulative savings: <strong>{sym}{result.totalDurationSavings.toLocaleString()}</strong>
            </p>
          </div>
        </div>

        {/* Statutory Filing & Compliance Summary Box */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-slate-950/70 p-4 rounded-2xl border border-slate-800/80 text-xs">
          <div className="space-y-1">
            <div className="text-[10px] font-bold uppercase text-slate-400 flex items-center gap-1">
              <FileCheck2 className="w-3.5 h-3.5 text-brand-400" />
              <span>Application & Election</span>
            </div>
            <div className="text-slate-200 font-semibold">{result.regime.formApplication}</div>
          </div>
          <div className="space-y-1">
            <div className="text-[10px] font-bold uppercase text-slate-400 flex items-center gap-1">
              <Info className="w-3.5 h-3.5 text-emerald-400" />
              <span>Annual Tax Return & Prior Non-Residency</span>
            </div>
            <div className="text-slate-200 font-semibold">
              {result.regime.formAnnual} ({result.regime.priorNonResidencyYears} yrs prior non-resident)
            </div>
          </div>
          <div className="space-y-1 flex flex-col justify-between">
            <div className="text-[10px] font-bold uppercase text-slate-400 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>Official Tax Authority</span>
            </div>
            <a
              href={result.regime.authorityUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-400 hover:underline font-bold inline-flex items-center gap-1"
            >
              <span>Verify Statutory Rules</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Visual Comparative Bar Chart */}
        <div className="pt-4 border-t border-slate-800 space-y-3">
          <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-slate-300">
            <span>{lang === 'tr' ? 'Vergi Tasarrufu Görsel Grafiği' : 'Expat Tax Savings Visual Chart'}</span>
            <span className="text-amber-400 font-extrabold">{result.regime.durationYears} {lang === 'tr' ? 'Yıllık Tasarruf:' : 'Yr Total:'} {sym}{result.totalDurationSavings.toLocaleString()}</span>
          </div>

          <div className="space-y-2">
            {/* Standard Net */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs text-slate-400 font-medium">
                <span>{lang === 'tr' ? 'Standart Vergi Sonrası Net' : 'Standard Progressive Net Take-Home'}</span>
                <span className="font-mono text-rose-300">{sym}{result.standardNetTakeHome.toLocaleString()}</span>
              </div>
              <div className="w-full bg-slate-900 rounded-full h-3.5 p-0.5 border border-slate-800">
                <div className="bg-gradient-to-r from-rose-500 to-pink-600 h-full rounded-full transition-all duration-500" style={{ width: `${Math.min(100, (result.standardNetTakeHome / Math.max(1, result.annualGrossSalary)) * 100)}%` }}></div>
              </div>
            </div>

            {/* Expat Net */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs text-slate-400 font-medium">
                <span>{lang === 'tr' ? `Expat Yasası Net (${result.regime.name})` : `Expat Regime Net (${result.regime.name})`}</span>
                <span className="font-mono text-emerald-400 font-bold">{sym}{result.expatNetTakeHome.toLocaleString()}</span>
              </div>
              <div className="w-full bg-slate-900 rounded-full h-3.5 p-0.5 border border-slate-800">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full transition-all duration-500" style={{ width: `${Math.min(100, (result.expatNetTakeHome / Math.max(1, result.annualGrossSalary)) * 100)}%` }}></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
