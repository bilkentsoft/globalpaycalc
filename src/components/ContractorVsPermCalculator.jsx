import React, { useState } from 'react';
import { calculateContractorEquivalence } from '../utils/contractorEngine';
import { Briefcase, ArrowRight, ShieldCheck, DollarSign, Calculator, Info, CheckCircle2 } from 'lucide-react';
import { getTranslation } from '../i18n';

export default function ContractorVsPermCalculator({ lang = 'en' }) {
  const t = (path) => getTranslation(lang, path);

  const [baseSalary, setBaseSalary] = useState(95000);
  const [ptoDays, setPtoDays] = useState(20);
  const [healthInsuranceValue, setHealthInsuranceValue] = useState(6000);
  const [retirementMatchPercent, setRetirementMatchPercent] = useState(4);
  const [bonusPercent, setBonusPercent] = useState(5);
  const [countryKey, setCountryKey] = useState('US');

  const result = calculateContractorEquivalence({
    baseSalary,
    ptoDays,
    healthInsuranceValue,
    retirementMatchPercent,
    bonusPercent,
    countryKey
  });

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Component Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold">
          <Briefcase className="w-3.5 h-3.5" />
          <span>W-2 vs 1099 / IR35 / Perm vs Freelance Denkliği</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Tam Zamanlı Çalışan vs. Serbest Çalışan Karşılaştırıcısı
        </h2>
        <p className="text-slate-400 text-sm leading-relaxed">
          Kadrolu çalışandaki ücretli izin, sağlık sigortası ve emeklilik haklarını kaybetmeden serbest çalışan (Contractor) olarak istemeniz gereken minimum fatura tutarını hesaplayın.
        </p>
      </div>

      {/* Main Glass Form */}
      <div className="glass-card p-6 sm:p-8 rounded-3xl border-slate-800 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left Column: Perm Salary Inputs */}
          <div className="space-y-5 bg-slate-900/60 p-6 rounded-2xl border border-slate-800">
            <h3 className="text-base font-bold text-white flex items-center space-x-2">
              <Briefcase className="w-4 h-4 text-cyan-400" />
              <span>Tam Zamanlı Maaşlı Teklif (Employee)</span>
            </h3>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300">Yıllık Brüt Maaş ($ / €)</label>
              <input 
                type="number" 
                value={baseSalary} 
                onChange={(e) => setBaseSalary(Number(e.target.value))} 
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white font-bold focus:border-cyan-500 outline-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300">Yıllık Ücretli İzin (PTO + Tatil Günü)</label>
              <input 
                type="number" 
                value={ptoDays} 
                onChange={(e) => setPtoDays(Number(e.target.value))} 
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white font-bold focus:border-cyan-500 outline-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300">Sağlık Sigortası Şirket Payı ($/Yıl)</label>
              <input 
                type="number" 
                value={healthInsuranceValue} 
                onChange={(e) => setHealthInsuranceValue(Number(e.target.value))} 
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white font-bold focus:border-cyan-500 outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300">Emeklilik Katkısı (%)</label>
                <input 
                  type="number" 
                  value={retirementMatchPercent} 
                  onChange={(e) => setRetirementMatchPercent(Number(e.target.value))} 
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white font-bold focus:border-cyan-500 outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300">Yıllık Prim / Bonus (%)</label>
                <input 
                  type="number" 
                  value={bonusPercent} 
                  onChange={(e) => setBonusPercent(Number(e.target.value))} 
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white font-bold focus:border-cyan-500 outline-none"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300">Ülke / Bölge Mantığı</label>
              <select
                value={countryKey}
                onChange={(e) => setCountryKey(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white font-bold focus:border-cyan-500 outline-none"
              >
                <option value="US">ABD (W-2 vs 1099 Contractor)</option>
                <option value="UK">İngiltere (IR35 Inside vs Outside)</option>
                <option value="DE">Almanya & AB (Salaried vs Freelance)</option>
                <option value="EU">Küresel / Türkiye (Kadrolu vs Şahıs Şirketi)</option>
              </select>
            </div>
          </div>

          {/* Right Column: Contractor Equivalence Results */}
          <div className="space-y-5 bg-gradient-to-br from-cyan-950/30 to-brand-950/20 p-6 rounded-2xl border border-cyan-500/30 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-white">İstemeniz Gereken Contractor Fatura Tutarı</h3>
                <span className="text-xs font-bold text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/20">
                  {result.contractor.contractorMultiplier}x Çarpan
                </span>
              </div>

              <div className="space-y-4">
                <div className="bg-slate-900/90 p-5 rounded-2xl border border-slate-800">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Minimum Saatlik Fatura Ücretiniz</span>
                  <div className="text-4xl font-black text-cyan-400 mt-1">
                    ${result.contractor.minHourlyBillingRate} <span className="text-xs text-slate-400 font-normal">/ saat</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Yılda ortalama {result.contractor.totalBillableHoursAnnual} faturalandırılabilir çalışma saatine göre.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
                    <span className="text-[11px] font-bold text-slate-400">Aylık Fatura</span>
                    <div className="text-xl font-black text-white mt-1">
                      ${result.contractor.minMonthlyBillingRate.toLocaleString()}
                    </div>
                  </div>
                  <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
                    <span className="text-[11px] font-bold text-slate-400">Yıllık Brüt Fatura</span>
                    <div className="text-xl font-black text-emerald-400 mt-1">
                      ${result.contractor.requiredGrossAnnual.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefit Breakdown */}
              <div className="space-y-2 pt-2 border-t border-slate-800/80 text-xs">
                <span className="font-bold text-slate-300">Hesaba Katılan Yan Haklar Değeri:</span>
                <div className="grid grid-cols-2 gap-2 text-slate-400">
                  <div>• Ücretli İzin (PTO): <strong className="text-slate-200">${result.breakdown.ptoValue}</strong></div>
                  <div>• Sağlık Sigortası: <strong className="text-slate-200">${result.breakdown.healthInsuranceValue}</strong></div>
                  <div>• Emeklilik Katkısı: <strong className="text-slate-200">${result.breakdown.retirementValue}</strong></div>
                  <div>• Bonus / Prim: <strong className="text-slate-200">${result.breakdown.bonusValue}</strong></div>
                </div>
              </div>
            </div>

            <div className="text-[11px] text-slate-400 bg-slate-900/60 p-3 rounded-xl border border-slate-800 flex items-start space-x-2">
              <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>
                Contractor çalışanlar kendi muhasebe, bağkur/SE-tax, ekipman ve tatil günlerini kendileri ödediği için tam zamanlı maaşın en az <strong>{result.contractor.contractorMultiplier} katı</strong> tutarında fatura kesmelidir.
              </span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
