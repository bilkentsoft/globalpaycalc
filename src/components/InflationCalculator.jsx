import React, { useState } from 'react';
import { calculateInflationImpact, countryInflationRates } from '../utils/inflationEngine';
import { TrendingDown, AlertTriangle, ShieldCheck, DollarSign, RefreshCw, Info } from 'lucide-react';
import { getTranslation } from '../i18n';

export default function InflationCalculator({ lang = 'en' }) {
  const t = (path) => getTranslation(lang, path);

  const [salary, setSalary] = useState(75000);
  const [selectedCountry, setSelectedCountry] = useState('US');
  const [customRate, setCustomRate] = useState('');
  const [years, setYears] = useState(1);

  const parsedCustomRate = customRate !== '' ? Number(customRate) : null;
  const result = calculateInflationImpact(salary, selectedCountry, parsedCustomRate, years);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Component Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">
          <TrendingDown className="w-3.5 h-3.5" />
          <span>Enflasyon ve Maaş Erimesi Simülatörü</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Enflasyon ve Alım Gücü Kaybı Hesaplayıcı
        </h2>
        <p className="text-slate-400 text-sm leading-relaxed">
          Ülke enflasyonuna göre maaşınızın reel erimesini, kaybettiğiniz alım gücünü ve hayat standardınızı korumak için almanız gereken zam oranını hesaplayın.
        </p>
      </div>

      {/* Main Form */}
      <div className="glass-card p-6 sm:p-8 rounded-3xl border-slate-800 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              Mevcut Maaş ({result.country.symbol})
            </label>
            <input 
              type="number" 
              value={salary} 
              onChange={(e) => setSalary(Number(e.target.value))} 
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white font-bold text-lg focus:border-amber-500 outline-none"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              Ülke Resmi Enflasyonu
            </label>
            <select
              value={selectedCountry}
              onChange={(e) => {
                setSelectedCountry(e.target.value);
                setCustomRate('');
              }}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white font-bold text-base focus:border-amber-500 outline-none cursor-pointer"
            >
              {Object.entries(countryInflationRates).map(([code, c]) => (
                <option key={code} value={code}>
                  {c.flag} {c.name} (%{c.rate})
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              Zaman Ufku (Yıl)
            </label>
            <select
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white font-bold text-base focus:border-amber-500 outline-none cursor-pointer"
            >
              <option value={1}>1 Yıl</option>
              <option value={2}>2 Yıl</option>
              <option value={3}>3 Yıl</option>
              <option value={5}>5 Yıl</option>
            </select>
          </div>
        </div>

        {/* Custom rate override */}
        <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800 flex items-center space-x-4">
          <label className="text-xs font-bold text-slate-300">Özel Enflasyon Oranı Gir (%):</label>
          <input 
            type="number" 
            value={customRate} 
            onChange={(e) => setCustomRate(e.target.value)} 
            placeholder={`Örn: ${result.country.rate}`}
            className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-1.5 text-white font-bold text-sm w-32 focus:border-amber-500 outline-none"
          />
          <span className="text-xs text-slate-400">Girilirse ülkenin resmi oranı yerine kullanılır.</span>
        </div>

        {/* Results Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Erime Sonrası Reel Alım Gücü</span>
            <div className="text-3xl font-black text-rose-400">
              {result.country.symbol}{result.realPurchasingPower.toLocaleString()}
            </div>
            <p className="text-[11px] text-slate-400">{years} yıl sonra bugünün parasıyla kalan gerçek değer.</p>
          </div>

          <div className="bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Toplam Alım Gücü Kaybı</span>
            <div className="text-3xl font-black text-amber-400">
              -{result.country.symbol}{result.purchasingPowerLoss.toLocaleString()}
            </div>
            <p className="text-[11px] text-slate-400">Enflasyon nedeniyle cebinizden eksilen alım gücü.</p>
          </div>

          <div className="bg-gradient-to-br from-emerald-950/40 to-slate-900 p-6 rounded-2xl border border-emerald-500/30 space-y-2">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Alınması Gereken Zam Oranı</span>
            <div className="text-3xl font-black text-emerald-400">
              %{result.requiredRaisePercent}
            </div>
            <p className="text-[11px] text-slate-400">Maaşınızın erimemesi için yapılması gereken minimum zam.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
