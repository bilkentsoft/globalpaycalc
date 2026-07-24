import React, { useState } from 'react';
import { checkNomadVisaEligibility, nomadVisaRequirements } from '../utils/nomadVisaEngine';
import { Globe, CheckCircle2, XCircle, DollarSign } from 'lucide-react';
import calcTranslations from '../data/calculatorTranslations';

export default function NomadVisaCalculator({ lang = 'en' }) {
  const [monthlyIncome, setMonthlyIncome] = useState(3800);

  const tCalc = calcTranslations[lang] || calcTranslations['en'];
  const result = checkNomadVisaEligibility(monthlyIncome);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Component Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
          <Globe className="w-3.5 h-3.5" />
          <span>{tCalc.visaBadge}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {tCalc.visaTitle}
        </h2>
        <p className="text-slate-400 text-sm leading-relaxed">
          {tCalc.visaDesc}
        </p>
      </div>

      {/* Main Form */}
      <div className="glass-card p-6 sm:p-8 rounded-3xl border-slate-800 space-y-8">
        
        <div className="max-w-xl mx-auto space-y-2">
          <label className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center justify-center space-x-1">
            <DollarSign className="w-4 h-4 text-emerald-400" />
            <span>{tCalc.monthlyIncomeLabel}</span>
          </label>
          <input 
            type="number" 
            value={monthlyIncome} 
            onChange={(e) => setMonthlyIncome(Number(e.target.value))} 
            className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-4 text-white font-bold text-2xl text-center focus:border-emerald-500 outline-none"
          />
        </div>

        {/* Results Overview */}
        <div className="text-center">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{tCalc.eligibleVisasHeader}</span>
          <div className="text-4xl font-black text-emerald-400 mt-1">
            {tCalc.eligibleVisasCount.replace('{count}', result.eligibleCount).replace('{total}', result.totalCount)}
          </div>
        </div>

        {/* Visa Breakdown Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {nomadVisaRequirements.map(visa => {
            const isEligible = monthlyIncome >= visa.minMonthlyIncomeUsd;
            return (
              <div 
                key={visa.id}
                className={`p-5 rounded-2xl border transition flex items-center justify-between ${
                  isEligible 
                    ? 'bg-gradient-to-r from-emerald-950/30 to-slate-900 border-emerald-500/40' 
                    : 'bg-slate-900/50 border-slate-800 opacity-60'
                }`}
              >
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl">{visa.flag}</span>
                    <span className="font-extrabold text-white text-base">{visa.country} {visa.visaName}</span>
                  </div>
                  <div className="text-xs text-slate-400">
                    {tCalc.requiredIncome}: <strong className="text-slate-200">${visa.minMonthlyIncomeUsd.toLocaleString()} / {lang === 'tr' ? 'ay' : 'mo'}</strong>
                  </div>
                  <div className="text-[11px] text-emerald-400 font-medium">
                    {tCalc.visaPerks}: {visa.taxPerk}
                  </div>
                </div>

                <div>
                  {isEligible ? (
                    <span className="px-3 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30 flex items-center space-x-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{tCalc.eligibleStatus}</span>
                    </span>
                  ) : (
                    <span className="px-3 py-1.5 rounded-full bg-slate-800 text-slate-400 text-xs font-medium flex items-center space-x-1">
                      <XCircle className="w-3.5 h-3.5 text-rose-400" />
                      <span>{tCalc.ineligibleStatus}</span>
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
