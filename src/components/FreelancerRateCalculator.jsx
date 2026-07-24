import React, { useState } from 'react';
import { calculateFreelancerRate } from '../utils/freelancerRateEngine';
import { DollarSign, Calculator, Clock, Calendar, ShieldCheck, Download, Info } from 'lucide-react';
import { getTranslation } from '../i18n';

export default function FreelancerRateCalculator({ lang = 'en' }) {
  const t = (path) => getTranslation(lang, path);

  const [targetNetAnnual, setTargetNetAnnual] = useState(72000);
  const [taxRatePercent, setTaxRatePercent] = useState(25);
  const [monthlyExpenses, setMonthlyExpenses] = useState(600);
  const [vacationWeeksPerYear, setVacationWeeksPerYear] = useState(4);
  const [billableHoursPerWeek, setBillableHoursPerWeek] = useState(25);

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
          <span>Freelancer Saatlik Ücret Motoru</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Freelancer Minimum Saatlik Ücret Hesaplayıcı
        </h2>
        <p className="text-slate-400 text-sm leading-relaxed">
          Hedef net kazancınız, sabit ofis/yazılım giderleriniz, vergi yükünüz ve haftalık faturalandırılabilir çalışma saatinize göre vermeniz gereken minimum saatlik/günlük teklif tutarını hesaplayın.
        </p>
      </div>

      {/* Main Glass Form */}
      <div className="glass-card p-6 sm:p-8 rounded-3xl border-slate-800 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center space-x-1">
              <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
              <span>Hedef Yıllık Net Kazanç ($ / €)</span>
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
              Tahmini Vergi Oranı (%)
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
              Aylık Sabit Giderler ($ / €)
            </label>
            <input 
              type="number" 
              value={monthlyExpenses} 
              onChange={(e) => setMonthlyExpenses(Number(e.target.value))} 
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white font-bold text-lg focus:border-emerald-500 outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-900/60 p-6 rounded-2xl border border-slate-800">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              Yıllık Tatil / İzin Süresi (Hafta)
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
              Haftalık Faturalandırılabilir Çalışma Saati
            </label>
            <input 
              type="number" 
              value={billableHoursPerWeek} 
              onChange={(e) => setBillableHoursPerWeek(Number(e.target.value))} 
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white font-bold outline-none focus:border-emerald-500"
            />
            <p className="text-[11px] text-slate-400">Genellikle 40 saatin sadece 20-30 saati doğrudan faturalandırılabilir müşteri işidir.</p>
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-emerald-950/40 to-slate-900 p-6 rounded-2xl border border-emerald-500/30">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Minimum Saatlik Teklif Ücretiniz</span>
            <div className="text-4xl font-black text-white mt-1">
              ${result.minHourlyRate} <span className="text-xs font-normal text-slate-400">/ saat</span>
            </div>
            <p className="text-[11px] text-slate-400 mt-1">Giderleriniz ve vergileriniz düşüldükten sonra net hedefinizi sağlayan oran.</p>
          </div>

          <div className="bg-slate-900/90 p-6 rounded-2xl border border-slate-800">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Günlük Fatura Ücreti (8 Saat)</span>
            <div className="text-3xl font-black text-emerald-400 mt-1">
              ${result.minDayRate.toLocaleString()} <span className="text-xs font-normal text-slate-400">/ gün</span>
            </div>
            <p className="text-[11px] text-slate-400 mt-1">Günlük sözleşmeler için vermeniz gereken fiyat.</p>
          </div>

          <div className="bg-slate-900/90 p-6 rounded-2xl border border-slate-800">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Gereken Yıllık Brüt Ciro</span>
            <div className="text-3xl font-black text-white mt-1">
              ${result.requiredGrossBeforeTax.toLocaleString()}
            </div>
            <p className="text-[11px] text-slate-400 mt-1">Yıllık fatura kesmeniz gereken toplam tutar.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
