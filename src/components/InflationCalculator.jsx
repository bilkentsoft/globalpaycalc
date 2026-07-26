import React, { useState } from 'react';
import { calculateInflationImpact, countryInflationRates } from '../utils/inflationEngine';
import { TrendingDown } from 'lucide-react';
import calcTranslations from '../data/calculatorTranslations';

export default function InflationCalculator({ lang = 'en' }) {
  const [salary, setSalary] = useState(75000);
  const [selectedCountry, setSelectedCountry] = useState('US');
  const [customRate, setCustomRate] = useState('');
  const [years, setYears] = useState(1);

  const tCalc = calcTranslations[lang] || calcTranslations['en'];
  const parsedCustomRate = customRate !== '' ? Number(customRate) : null;
  const result = calculateInflationImpact(salary, selectedCountry, parsedCustomRate, years);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Component Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">
          <TrendingDown className="w-3.5 h-3.5" />
          <span>{tCalc.inflationBadge}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {tCalc.inflationTitle}
        </h2>
        <p className="text-slate-400 text-sm leading-relaxed">
          {tCalc.inflationDesc}
        </p>
      </div>

      {/* Main Form */}
      <div className="glass-card p-6 sm:p-8 rounded-3xl border-slate-800 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              {tCalc.currentSalaryLabel} ({result.country.symbol})
            </label>
            <input 
              type="number" 
              value={salary} 
              onChange={(e) => setSalary(Number(e.target.value))} 
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white font-bold text-lg focus:border-amber-500 outline-none"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              {tCalc.annualInflationLabel}
            </label>
            <select
              value={selectedCountry}
              aria-label="Country Inflation Baseline"
              onChange={(e) => {
                setSelectedCountry(e.target.value);
                setCustomRate('');
              }}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white font-bold text-base focus:border-amber-500 outline-none cursor-pointer"
            >
              {Object.entries(countryInflationRates).map(([code, c]) => (
                <option key={code} value={code}>
                  {c.flag} {c.name} (%{c.rate})
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              {tCalc.projectionYearsLabel}
            </label>
            <select
              value={years}
              aria-label="Projection Horizon Years"
              onChange={(e) => setYears(Number(e.target.value))}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white font-bold text-base focus:border-amber-500 outline-none cursor-pointer"
            >
              <option value={1}>{tCalc.yearsHorizon.replace('{years}', 1)}</option>
              <option value={2}>{tCalc.yearsHorizon.replace('{years}', 2)}</option>
              <option value={3}>{tCalc.yearsHorizon.replace('{years}', 3)}</option>
              <option value={5}>{tCalc.yearsHorizon.replace('{years}', 5)}</option>
            </select>
          </div>
        </div>

        {/* Custom rate override */}
        <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
          <label className="text-xs font-bold text-slate-300">
            {lang === 'tr' ? 'Özel Enflasyon Oranı Gir (%):' : 'Enter Custom Inflation Rate (%):'}
          </label>
          <input 
            type="number" 
            value={customRate} 
            onChange={(e) => setCustomRate(e.target.value)} 
            placeholder={`e.g. ${result.country.rate}`}
            className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-1.5 text-white font-bold text-sm w-32 focus:border-amber-500 outline-none"
          />
          <span className="text-xs text-slate-400">
            {lang === 'tr' ? 'Girilirse ülkenin resmi oranı yerine kullanılır.' : 'If entered, overrides the official country rate.'}
          </span>
        </div>

        {/* Results Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{tCalc.realSalaryValue}</span>
            <div className="text-3xl font-black text-rose-400">
              {result.country.symbol}{result.realPurchasingPower.toLocaleString()}
            </div>
            <p className="text-[11px] text-slate-400">
              {lang === 'tr'
                ? `${years} yıl sonra bugünün parasıyla kalan gerçek değer.`
                : `Actual value in today's currency after ${years} year(s).`}
            </p>
          </div>

          <div className="bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{tCalc.cumulativeLoss}</span>
            <div className="text-3xl font-black text-amber-400">
              -{result.country.symbol}{result.purchasingPowerLoss.toLocaleString()}
            </div>
            <p className="text-[11px] text-slate-400">
              {lang === 'tr' ? 'Enflasyon nedeniyle eriyen satın alma gücü.' : 'Purchasing power eroded due to inflation.'}
            </p>
          </div>

          <div className="bg-gradient-to-br from-emerald-950/40 to-slate-900 p-6 rounded-2xl border border-emerald-500/30 space-y-2">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">{tCalc.requiredRaise}</span>
            <div className="text-3xl font-black text-emerald-400">
              %{result.requiredRaisePercent}
            </div>
            <p className="text-[11px] text-slate-400">
              {lang === 'tr' ? 'Maaşınızın erimemesi için yapılması gereken asgari zam.' : 'Minimum raise required to maintain standard of living.'}
            </p>
          </div>
        </div>

        {/* Visual Inflation Erosion Bar Chart */}
        <div className="pt-6 border-t border-slate-800 space-y-3">
          <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-slate-300">
            <span>{lang === 'tr' ? 'Enflasyon Alım Gücü Erozyon Grafiği' : 'Inflation Purchasing Power Visual Chart'}</span>
            <span className="text-amber-400 font-extrabold">%{result.inflationRate} {lang === 'tr' ? 'Enflasyon' : 'Inflation'}</span>
          </div>

          <div className="space-y-2.5 text-xs">
            {/* Nominal Baseline */}
            <div className="space-y-1">
              <div className="flex justify-between text-slate-300 font-medium">
                <span>{lang === 'tr' ? 'Mevcut Nominal Maaş' : 'Current Nominal Salary'}</span>
                <span className="font-mono text-slate-200">{result.country.symbol}{result.salary.toLocaleString()}</span>
              </div>
              <div className="w-full bg-slate-900 rounded-full h-3.5 p-0.5 border border-slate-800">
                <div className="bg-slate-600 h-full rounded-full transition-all duration-500" style={{ width: '100%' }}></div>
              </div>
            </div>

            {/* Eroded Real Value */}
            <div className="space-y-1">
              <div className="flex justify-between text-slate-300 font-medium">
                <span>{lang === 'tr' ? `${years} Yıl Sonra Gerçek Alım Gücü` : `Real Value After ${years} Year(s)`}</span>
                <span className="font-mono text-rose-400 font-bold">{result.country.symbol}{result.realPurchasingPower.toLocaleString()}</span>
              </div>
              <div className="w-full bg-slate-900 rounded-full h-3.5 p-0.5 border border-slate-800">
                <div 
                  className="bg-gradient-to-r from-rose-500 to-pink-600 h-full rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(100, (result.realPurchasingPower / result.salary) * 100)}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
