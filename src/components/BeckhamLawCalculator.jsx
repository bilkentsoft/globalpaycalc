import React, { useState } from 'react';
import { calculateBeckhamSavings, expatRegimes } from '../utils/beckhamLawEngine';
import { ShieldCheck, Award, TrendingUp, DollarSign, Globe, Info } from 'lucide-react';
import { getTranslation } from '../i18n';

export default function BeckhamLawCalculator({ lang = 'en' }) {
  const t = (path) => getTranslation(lang, path);

  const [annualGross, setAnnualGross] = useState(130000);
  const [selectedRegime, setSelectedRegime] = useState('ES_BECKHAM');
  const [standardTaxRate, setStandardTaxRate] = useState(45);

  const result = calculateBeckhamSavings(annualGross, selectedRegime, standardTaxRate);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Component Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold">
          <Award className="w-3.5 h-3.5" />
          <span>Expat & Beckham Law Vergi Muafiyeti Hesaplayıcı</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Beckham Law & Expat Tax Savings Calculator
        </h2>
        <p className="text-slate-400 text-sm leading-relaxed">
          İspanya Beckham Yasası (%24 sabit vergi), Portekiz IFICI, İtalya Impatriati ve Dubai %0 vergi avantajı ile ne kadar net tasarruf sağlayacağınızı hesaplayın.
        </p>
      </div>

      {/* Main Form */}
      <div className="glass-card p-6 sm:p-8 rounded-3xl border-slate-800 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              Yıllık Brüt Maaş ($ / €)
            </label>
            <input 
              type="number" 
              value={annualGross} 
              onChange={(e) => setAnnualGross(Number(e.target.value))} 
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white font-bold text-lg focus:border-rose-500 outline-none"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              Expat Vergi Rejimi / Ülke
            </label>
            <select
              value={selectedRegime}
              onChange={(e) => setSelectedRegime(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white font-bold text-base focus:border-rose-500 outline-none cursor-pointer"
            >
              {Object.entries(expatRegimes).map(([code, r]) => (
                <option key={code} value={code}>
                  {r.flag} {r.name} (%{r.flatTaxRate})
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              Standart Yerel Vergi Oranı (%)
            </label>
            <input 
              type="number" 
              value={standardTaxRate} 
              onChange={(e) => setStandardTaxRate(Number(e.target.value))} 
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white font-bold text-lg focus:border-rose-500 outline-none"
            />
          </div>
        </div>

        {/* Results Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900/90 p-6 rounded-2xl border border-slate-800">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Standart Vergiye Göre Net Maaş</span>
            <div className="text-3xl font-black text-rose-400 mt-1">
              ${result.standardNetTakeHome.toLocaleString()}
            </div>
            <p className="text-[11px] text-slate-400 mt-1">Muafiyet yasası olmadan elinize geçen net tutar.</p>
          </div>

          <div className="bg-gradient-to-br from-emerald-950/40 to-slate-900 p-6 rounded-2xl border border-emerald-500/30">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Expat Rejimi ile Net Maaş</span>
            <div className="text-3xl font-black text-emerald-400 mt-1">
              ${result.expatNetTakeHome.toLocaleString()}
            </div>
            <p className="text-[11px] text-slate-400 mt-1">{result.regime.name} kapsamında elinize geçen net maaş.</p>
          </div>

          <div className="bg-slate-900/90 p-6 rounded-2xl border border-slate-800">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Yıllık Vergi Tasarrufunuz</span>
            <div className="text-3xl font-black text-amber-400 mt-1">
              +${result.annualTaxSavings.toLocaleString()}
            </div>
            <p className="text-[11px] text-slate-400 mt-1">{result.regime.durationYears} yıllık toplam: ${result.totalDurationSavings.toLocaleString()}</p>
          </div>
        </div>

      </div>
    </div>
  );
}
