import React, { useState } from 'react';
import { calculateFreelancerRate } from '../utils/freelancerRateEngine';
import { DollarSign, Clock } from 'lucide-react';
import calcTranslations from '../data/calculatorTranslations';

export default function FreelancerRateCalculator({ lang = 'en' }) {
  const [targetNetAnnual, setTargetNetAnnual] = useState(72000);
  const [taxRatePercent, setTaxRatePercent] = useState(25);
  const [monthlyExpenses, setMonthlyExpenses] = useState(600);
  const [vacationWeeksPerYear, setVacationWeeksPerYear] = useState(4);
  const [billableHoursPerWeek, setBillableHoursPerWeek] = useState(25);

  const tCalc = calcTranslations[lang] || calcTranslations['en'];
  const result = calculateFreelancerRate({
    targetNetAnnual,
    taxRatePercent,
    monthlyExpenses,
    vacationWeeksPerYear,
    billableHoursPerWeek
  });

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Component Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
          <Clock className="w-3.5 h-3.5" />
          <span>{tCalc.freelancerBadge}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {tCalc.freelancerTitle}
        </h2>
        <p className="text-slate-400 text-sm leading-relaxed">
          {tCalc.freelancerDesc}
        </p>
      </div>

      {/* Main Glass Form */}
      <div className="glass-card p-6 sm:p-8 rounded-3xl border-slate-800 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center space-x-1">
              <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
              <span>{tCalc.targetNetLabel}</span>
            </label>
            <input 
              type="number" 
              value={targetNetAnnual} 
              onChange={(e) => setTargetNetAnnual(Number(e.target.value))} 
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white font-bold text-lg focus:border-emerald-500 outline-none"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              {tCalc.averageTaxLabel}
            </label>
            <input 
              type="number" 
              value={taxRatePercent} 
              onChange={(e) => setTaxRatePercent(Number(e.target.value))} 
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white font-bold text-lg focus:border-emerald-500 outline-none"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              {tCalc.fixedExpensesLabel}
            </label>
            <input 
              type="number" 
              value={monthlyExpenses * 12} 
              onChange={(e) => setMonthlyExpenses(Number(e.target.value) / 12)} 
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white font-bold text-lg focus:border-emerald-500 outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-900/60 p-6 rounded-2xl border border-slate-800">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              {lang === 'tr' ? 'Yıllık Tatil / İzin Süresi (Hafta)' : 'Annual Vacation / Time-off (Weeks)'}
            </label>
            <input 
              type="number" 
              value={vacationWeeksPerYear} 
              onChange={(e) => setVacationWeeksPerYear(Number(e.target.value))} 
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white font-bold outline-none focus:border-emerald-500"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              {tCalc.weeklyBillableLabel}
            </label>
            <input 
              type="number" 
              value={billableHoursPerWeek} 
              onChange={(e) => setBillableHoursPerWeek(Number(e.target.value))} 
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white font-bold outline-none focus:border-emerald-500"
            />
            <p className="text-[11px] text-slate-400">
              {lang === 'tr' 
                ? 'Genellikle 40 saatin sadece 20-30 saati doğrudan faturalandırılabilir müşteri işidir.'
                : 'Typically, only 20-30 hours out of a 40-hour week are directly billable to clients.'}
            </p>
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-emerald-950/40 to-slate-900 p-6 rounded-2xl border border-emerald-500/30">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">{tCalc.hourlyRateResult}</span>
            <div className="text-4xl font-black text-white mt-1">
              ${result.minHourlyRate} <span className="text-xs font-normal text-slate-400">/{lang === 'tr' ? 'saat' : 'hr'}</span>
            </div>
            <p className="text-[11px] text-slate-400 mt-1">
              {lang === 'tr'
                ? 'Giderleriniz ve vergileriniz düşüldükten sonra net hedefinizi sağlayan oran.'
                : 'Rate required to secure your target net after taxes and business overhead.'}
            </p>
          </div>

          <div className="bg-slate-900/90 p-6 rounded-2xl border border-slate-800">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{tCalc.dailyRateResult}</span>
            <div className="text-3xl font-black text-emerald-400 mt-1">
              ${result.minDayRate.toLocaleString()} <span className="text-xs font-normal text-slate-400">/{lang === 'tr' ? 'gün' : 'day'}</span>
            </div>
            <p className="text-[11px] text-slate-400 mt-1">
              {lang === 'tr' ? 'Günlük sözleşmeler için vermeniz gereken fiyat.' : 'Rate to quote for day-based contract arrangements.'}
            </p>
          </div>

          <div className="bg-slate-900/90 p-6 rounded-2xl border border-slate-800">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{tCalc.annualGrossRequired}</span>
            <div className="text-3xl font-black text-white mt-1">
              ${result.requiredGrossBeforeTax.toLocaleString()}
            </div>
            <p className="text-[11px] text-slate-400 mt-1">
              {lang === 'tr' ? 'Yıllık fatura kesmeniz gereken toplam tutar.' : 'Total gross revenue you need to bill annually.'}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
