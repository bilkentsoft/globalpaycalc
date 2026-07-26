import React, { useState } from 'react';
import { calculateEorBreakeven } from '../utils/eorCostEngine';
import { Building2 } from 'lucide-react';
import calcTranslations from '../data/calculatorTranslations';

export default function EorCostCalculator({ lang = 'en' }) {
  const [employeeCount, setEmployeeCount] = useState(3);
  const [avgSalary, setAvgSalary] = useState(85000);
  const [eorFee, setEorFee] = useState(599);

  const tCalc = calcTranslations[lang] || calcTranslations['en'];
  const result = calculateEorBreakeven({
    employeeCount,
    avgSalaryPerEmployee: avgSalary,
    eorMonthlyFeePerSeat: eorFee
  });

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Component Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold">
          <Building2 className="w-3.5 h-3.5" />
          <span>{tCalc.eorBadge}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {tCalc.eorTitle}
        </h2>
        <p className="text-slate-400 text-sm leading-relaxed">
          {tCalc.eorDesc}
        </p>
      </div>

      {/* Main Form */}
      <div className="glass-card p-6 sm:p-8 rounded-3xl border-slate-800 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              {lang === 'tr' ? 'Yurtdışındaki Çalışan Sayısı' : 'Number of Overseas Employees'}
            </label>
            <input 
              type="number" 
              value={employeeCount} 
              onChange={(e) => setEmployeeCount(Number(e.target.value))} 
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white font-bold text-lg focus:border-purple-500 outline-none"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              {lang === 'tr' ? 'Ortalama Çalışan Başı Yıllık Maaş ($)' : 'Average Annual Salary per Employee ($)'}
            </label>
            <input 
              type="number" 
              value={avgSalary} 
              onChange={(e) => setAvgSalary(Number(e.target.value))} 
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white font-bold text-lg focus:border-purple-500 outline-none"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              {tCalc.eorMonthlyFeeLabel}
            </label>
            <input 
              type="number" 
              value={eorFee} 
              onChange={(e) => setEorFee(Number(e.target.value))} 
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white font-bold text-lg focus:border-purple-500 outline-none"
            />
          </div>
        </div>

        {/* Results Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900/90 p-6 rounded-2xl border border-slate-800">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{tCalc.eorAnnualCost}</span>
            <div className="text-3xl font-black text-purple-400 mt-1">
              ${result.annualEorCost.toLocaleString()}
            </div>
            <p className="text-[11px] text-slate-400 mt-1">
              {lang === 'tr' 
                ? `${employeeCount} çalışan için Deel/Remote.com maliyeti.`
                : `Deel/Remote.com cost for ${employeeCount} employees.`}
            </p>
          </div>

          <div className="bg-slate-900/90 p-6 rounded-2xl border border-slate-800">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              {lang === 'tr' ? 'Tahmini Şirket Kurma/Uyum Maliyeti' : 'Estimated Local Entity Cost'}
            </span>
            <div className="text-3xl font-black text-slate-200 mt-1">
              ${result.annualEntityCost.toLocaleString()}
            </div>
            <p className="text-[11px] text-slate-400 mt-1">
              {lang === 'tr'
                ? 'Hukuk, muhasebe ve yıllık mali beyanname giderleri.'
                : 'Legal, accountancy, and annual compliance overhead.'}
            </p>
          </div>

          <div className="bg-gradient-to-br from-emerald-950/40 to-slate-900 p-6 rounded-2xl border border-emerald-500/30">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
              {lang === 'tr' ? 'Maliyet Karşılaştırma Kararı' : 'Cost Recommendation'}
            </span>
            <div className="text-2xl font-black text-emerald-400 mt-1">
              {lang === 'tr' 
                ? `${result.breakevenEmployeeCount} Çalışan Sınırı`
                : `${result.breakevenEmployeeCount} Employee Threshold`}
            </div>
            <p className="text-[11px] text-slate-400 mt-1">
              {employeeCount >= result.breakevenEmployeeCount 
                ? (lang === 'tr' ? 'Kendi Şirketini Kurmak Daha Ekonomik!' : 'Incorporating is more cost-effective!')
                : (lang === 'tr' ? 'EOR Kullanmak Daha Avantajlı!' : 'EOR service is more cost-effective!')}
            </p>
          </div>
        </div>

        {/* Visual Cost Comparison Bar Chart */}
        <div className="pt-6 border-t border-slate-800 space-y-3">
          <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-slate-300">
            <span>{lang === 'tr' ? 'EOR vs Şirket Kurulum Yıllık Maliyet Grafiği' : 'EOR vs Entity Annual Cost Visual Chart'}</span>
            <span className="text-cyan-400 font-extrabold">{employeeCount} {lang === 'tr' ? 'Çalışan' : 'Employees'}</span>
          </div>

          <div className="space-y-2.5">
            {/* EOR Annual Cost */}
            <div className="space-y-1 text-xs">
              <div className="flex justify-between text-slate-300 font-medium">
                <span>{lang === 'tr' ? 'EOR Servis Yıllık Toplamı (Deel/Remote)' : 'EOR Platform Annual Total (Deel/Remote)'}</span>
                <span className="font-mono text-cyan-300">${result.annualEorCost.toLocaleString()}</span>
              </div>
              <div className="w-full bg-slate-900 rounded-full h-3.5 p-0.5 border border-slate-800">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-cyan-400 h-full rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(100, (result.annualEorCost / Math.max(result.annualEorCost, result.annualEntityCost)) * 100)}%` }}
                ></div>
              </div>
            </div>

            {/* Local Entity Cost */}
            <div className="space-y-1 text-xs">
              <div className="flex justify-between text-slate-300 font-medium">
                <span>{lang === 'tr' ? 'Yerel Şirket Amorti Edilmiş Yıllık Masrafı' : 'Local Entity Amortized Annual Overhead'}</span>
                <span className="font-mono text-purple-300">${result.annualEntityCost.toLocaleString()}</span>
              </div>
              <div className="w-full bg-slate-900 rounded-full h-3.5 p-0.5 border border-slate-800">
                <div 
                  className="bg-gradient-to-r from-purple-500 to-indigo-500 h-full rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(100, (result.annualEntityCost / Math.max(result.annualEorCost, result.annualEntityCost)) * 100)}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
