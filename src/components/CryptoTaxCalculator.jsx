import React, { useState } from 'react';
import { calculateCryptoSalaryTax, cryptoTaxJurisdictions } from '../utils/cryptoTaxEngine';
import { DollarSign, ShieldCheck, TrendingUp, Cpu, Globe, Info } from 'lucide-react';
import { getTranslation } from '../i18n';

export default function CryptoTaxCalculator({ lang = 'en' }) {
  const t = (path) => getTranslation(lang, path);

  const [salaryUsd, setSalaryUsd] = useState(96000);
  const [selectedCountry, setSelectedCountry] = useState('US');
  const [holdingDays, setHoldingDays] = useState(30);

  const result = calculateCryptoSalaryTax(salaryUsd, selectedCountry, holdingDays);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Component Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold">
          <Cpu className="w-3.5 h-3.5" />
          <span>Crypto & USDT Maaş Vergi Hesaplayıcı</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Crypto & USDT Remote Salary Tax Estimator
        </h2>
        <p className="text-slate-400 text-sm leading-relaxed">
          USDT, USDC veya ETH ile maaş alan remote çalışanlar için Gelir Vergisi vs. Sermaye Kazancı (Capital Gains) yükünü ve net kazancı hesaplayın.
        </p>
      </div>

      {/* Main Form */}
      <div className="glass-card p-6 sm:p-8 rounded-3xl border-slate-800 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              Yıllık Kripto Maaş ($ USDT / USDC)
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
              İkamet Ülkesi
            </label>
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white font-bold text-base focus:border-cyan-500 outline-none cursor-pointer"
            >
              {Object.entries(cryptoTaxJurisdictions).map(([code, c]) => (
                <option key={code} value={code}>
                  {c.flag} {c.name} (Gelir Vergisi %{c.incomeTaxRate})
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              Kripto Tutma Süresi (Gün)
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
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Tahakkuk Eden Gelir Vergisi</span>
            <div className="text-3xl font-black text-rose-400 mt-1">
              ${result.incomeTaxAmount.toLocaleString()}
            </div>
            <p className="text-[11px] text-slate-400 mt-1">Kripto alındığı andaki piyasa değeri üzerinden vergi.</p>
          </div>

          <div className="bg-gradient-to-br from-cyan-950/40 to-slate-900 p-6 rounded-2xl border border-cyan-500/30">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Vergiler Sonrası Net Maaş</span>
            <div className="text-3xl font-black text-white mt-1">
              ${result.netSalaryAfterIncomeTax.toLocaleString()}
            </div>
            <p className="text-[11px] text-slate-400 mt-1">Net elinize geçen nakit eşdeğeri.</p>
          </div>

          <div className="bg-slate-900/90 p-6 rounded-2xl border border-slate-800">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Sermaye Kazancı Vergi Rejimi</span>
            <div className="text-2xl font-black text-amber-400 mt-1">
              %{result.capitalGainsRate} <span className="text-xs font-normal text-slate-400">({result.isLongTerm ? 'Uzun Vadeli' : 'Kısa Vadeli'})</span>
            </div>
            <p className="text-[11px] text-slate-400 mt-1">Bozdurmadan önceki bekletme süresine göre oran.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
