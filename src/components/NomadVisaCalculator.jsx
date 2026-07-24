import React, { useState } from 'react';
import { checkNomadVisaEligibility, nomadVisaRequirements } from '../utils/nomadVisaEngine';
import { Globe, CheckCircle2, XCircle, DollarSign, Award, Info } from 'lucide-react';
import { getTranslation } from '../i18n';

export default function NomadVisaCalculator({ lang = 'en' }) {
  const t = (path) => getTranslation(lang, path);

  const [monthlyIncome, setMonthlyIncome] = useState(3800);

  const result = checkNomadVisaEligibility(monthlyIncome);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Component Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
          <Globe className="w-3.5 h-3.5" />
          <span>Dijital Göçebe Vize Gelir Uyum Testi</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Digital Nomad Visa Income Eligibility Checker
        </h2>
        <p className="text-slate-400 text-sm leading-relaxed">
          Aylık net remote gelirinize göre İspanya, Portekiz, Dubai, Japonya, İtalya ve Yunanistan Dijital Göçebe Vizelerine başvurup başvuramayacağınızı anında öğrenin.
        </p>
      </div>

      {/* Main Form */}
      <div className="glass-card p-6 sm:p-8 rounded-3xl border-slate-800 space-y-8">
        
        <div className="max-w-xl mx-auto space-y-2">
          <label className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center justify-center space-x-1">
            <DollarSign className="w-4 h-4 text-emerald-400" />
            <span>Aylık Düzenli Remote Geliriniz ($ USD)</span>
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
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Uygun Bulunduğunuz Vize Sayısı</span>
          <div className="text-4xl font-black text-emerald-400 mt-1">
            {result.eligibleCount} / {result.totalCount} Ülke Vizesi Uyumlu
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
                    Gereken Min. Gelir: <strong className="text-slate-200">${visa.minMonthlyIncomeUsd.toLocaleString()} / ay</strong>
                  </div>
                  <div className="text-[11px] text-emerald-400 font-medium">
                    Avantaj: {visa.taxPerk}
                  </div>
                </div>

                <div>
                  {isEligible ? (
                    <span className="px-3 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30 flex items-center space-x-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Uygun</span>
                    </span>
                  ) : (
                    <span className="px-3 py-1.5 rounded-full bg-slate-800 text-slate-400 text-xs font-medium flex items-center space-x-1">
                      <XCircle className="w-3.5 h-3.5 text-rose-400" />
                      <span>Yetersiz</span>
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
