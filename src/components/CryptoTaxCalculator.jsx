import React, { useState } from 'react';
import { calculateCryptoSalaryTax, cryptoTaxJurisdictions } from '../utils/cryptoTaxEngine';
import { Cpu } from 'lucide-react';
import calcTranslations from '../data/calculatorTranslations';

export default function CryptoTaxCalculator({ lang = 'en' }) {
  const [salaryUsd, setSalaryUsd] = useState(96000);
  const [selectedCountry, setSelectedCountry] = useState('US');
  const [holdingDays, setHoldingDays] = useState(30);

  const tCalc = calcTranslations[lang] || calcTranslations['en'];
  const result = calculateCryptoSalaryTax(salaryUsd, selectedCountry, holdingDays);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Component Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold">
          <Cpu className="w-3.5 h-3.5" />
          <span>{tCalc.cryptoBadge}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {tCalc.cryptoTitle}
        </h2>
        <p className="text-slate-400 text-sm leading-relaxed">
          {tCalc.cryptoDesc}
        </p>
      </div>

      {/* Main Form */}
      <div className="glass-card p-6 sm:p-8 rounded-3xl border-slate-800 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              {tCalc.annualCryptoSalary}
            </label>
            <input 
              type="number" 
              value={salaryUsd} 
              onChange={(e) => setSalaryUsd(Number(e.target.value))} 
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white font-bold text-lg focus:border-cyan-500 outline-none"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              {tCalc.residenceCountry}
            </label>
            <select
              value={selectedCountry}
              aria-label="Country Residency Selection"
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white font-bold text-base focus:border-cyan-500 outline-none cursor-pointer"
            >
              {Object.entries(cryptoTaxJurisdictions).map(([code, c]) => (
                <option key={code} value={code}>
                  {c.flag} {c.name} ({lang === 'tr' ? 'Gelir Vergisi' : 'Income Tax'} %{c.incomeTaxRate})
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              {tCalc.holdingDuration}
            </label>
            <input 
              type="number" 
              value={holdingDays} 
              onChange={(e) => setHoldingDays(Number(e.target.value))} 
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white font-bold text-lg focus:border-cyan-500 outline-none"
            />
          </div>
        </div>

        {/* Results Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900/90 p-6 rounded-2xl border border-slate-800">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              {lang === 'tr' ? 'Tahakkuk Eden Gelir Vergisi' : 'Income Tax Liability'}
            </span>
            <div className="text-3xl font-black text-rose-400 mt-1">
              ${result.incomeTaxAmount.toLocaleString()}
            </div>
            <p className="text-[11px] text-slate-400 mt-1">
              {lang === 'tr' 
                ? 'Kripto alındığı andaki piyasa değeri üzerinden vergi.' 
                : 'Tax based on the market value of crypto at the time of receipt.'}
            </p>
          </div>

          <div className="bg-gradient-to-br from-cyan-950/40 to-slate-900 p-6 rounded-2xl border border-cyan-500/30">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">{tCalc.netCryptoTakeHome}</span>
            <div className="text-3xl font-black text-white mt-1">
              ${result.netSalaryAfterIncomeTax.toLocaleString()}
            </div>
            <p className="text-[11px] text-slate-400 mt-1">
              {lang === 'tr' ? 'Net elinize geçen nakit eşdeğeri.' : 'Net equivalent cash received.'}
            </p>
          </div>

          <div className="bg-slate-900/90 p-6 rounded-2xl border border-slate-800">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              {lang === 'tr' ? 'Sermaye Kazancı Vergi Rejimi' : 'Capital Gains Tax Regime'}
            </span>
            <div className="text-2xl font-black text-amber-400 mt-1">
              %{result.capitalGainsRate} <span className="text-xs font-normal text-slate-400">({result.isLongTerm ? (lang === 'tr' ? 'Uzun Vadeli' : 'Long Term') : (lang === 'tr' ? 'Kısa Vadeli' : 'Short Term')})</span>
            </div>
            <p className="text-[11px] text-slate-400 mt-1">
              {lang === 'tr' ? 'Bozdurmadan önceki bekletme süresine göre oran.' : 'Rate based on holding duration before liquidation.'}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
