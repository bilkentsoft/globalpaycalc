import React, { useState } from 'react';
import { calculateEorBreakeven } from '../utils/eorCostEngine';
import { Building2, Users, DollarSign, CheckCircle2, Info } from 'lucide-react';
import { getTranslation } from '../i18n';

export default function EorCostCalculator({ lang = 'en' }) {
  const t = (path) => getTranslation(lang, path);

  const [employeeCount, setEmployeeCount] = useState(3);
  const [avgSalary, setAvgSalary] = useState(85000);
  const [eorFee, setEorFee] = useState(599);

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
          <span>EOR vs Yerel Şirket Kurma Başa Baş Analizi</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Employer of Record (EOR) vs Entity Setup Cost Estimator
        </h2>
        <p className="text-slate-400 text-sm leading-relaxed">
          Deel / Remote.com ($599/ay) gibi EOR hizmeti kullanmak ile yerel şirket açıp bordro yönetmenin maliyet başa baş noktasını hesaplayın.
        </p>
      </div>

      {/* Main Form */}
      <div className="glass-card p-6 sm:p-8 rounded-3xl border-slate-800 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              Yurtdışındaki Çalışan Sayısı
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
              Ortalama Çalışan Başı Yıllık Maaş ($)
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
              Aylık EOR Koltuk Ücreti ($ / ay)
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
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Yıllık Toplam EOR Hizmet Bedeli</span>
            <div className="text-3xl font-black text-purple-400 mt-1">
              ${result.annualEorCost.toLocaleString()}
            </div>
            <p className="text-[11px] text-slate-400 mt-1">{employeeCount} çalışan için Deel/Remote.com maliyeti.</p>
          </div>

          <div className="bg-slate-900/90 p-6 rounded-2xl border border-slate-800">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Tahmini Yerel Şirket Kurma/Uyum Maliyeti</span>
            <div className="text-3xl font-black text-slate-200 mt-1">
              ${result.annualEntityCost.toLocaleString()}
            </div>
            <p className="text-[11px] text-slate-400 mt-1">Hukuk, muhasebe ve yıllık mali beyanname giderleri.</p>
          </div>

          <div className="bg-gradient-to-br from-emerald-950/40 to-slate-900 p-6 rounded-2xl border border-emerald-500/30">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Başa Baş (Breakeven) Çalışan Sayısı</span>
            <div className="text-3xl font-black text-emerald-400 mt-1">
              {result.breakevenEmployeeCount} Çalışan
            </div>
            <p className="text-[11px] text-slate-400 mt-1">
              {employeeCount >= result.breakevenEmployeeCount ? 'Yerel Şirket Kurmak Daha Ekonomik!' : 'EOR Kullanmak Daha Avantajlı!'}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
