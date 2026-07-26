import React, { useState } from 'react';
import { calculateFxFees } from '../utils/fxFeeEngine';
import { ArrowRightLeft } from 'lucide-react';
import calcTranslations from '../data/calculatorTranslations';

export default function HiddenFxFeeCalculator({ lang = 'en' }) {
  const [sendAmount, setSendAmount] = useState(5000);
  const [selectedPair, setSelectedPair] = useState('USD_EUR');

  const tCalc = calcTranslations[lang] || calcTranslations['en'];
  const result = calculateFxFees(sendAmount, selectedPair);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Component Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold">
          <ArrowRightLeft className="w-3.5 h-3.5" />
          <span>{tCalc.fxBadge}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {tCalc.fxTitle}
        </h2>
        <p className="text-slate-400 text-sm leading-relaxed">
          {tCalc.fxDesc}
        </p>
      </div>

      {/* Main Glass Form */}
      <div className="glass-card p-6 sm:p-8 rounded-3xl border-slate-800 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              {tCalc.transferAmountLabel} ({result.fromCurr})
            </label>
            <input 
              type="number" 
              value={sendAmount} 
              onChange={(e) => setSendAmount(Number(e.target.value))} 
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white font-bold text-lg focus:border-rose-500 outline-none"
              placeholder="5000"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              {lang === 'tr' ? 'Döviz Çifti' : 'Currency Pair'}
            </label>
            <select
              value={selectedPair}
              aria-label="Currency Pair Selector"
              onChange={(e) => setSelectedPair(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white font-bold text-base focus:border-rose-500 outline-none cursor-pointer"
            >
              <option value="USD_EUR">USD ➔ EUR ({lang === 'tr' ? 'ABD ➔ Avrupa' : 'US ➔ Europe'})</option>
              <option value="USD_GBP">USD ➔ GBP ({lang === 'tr' ? 'ABD ➔ İngiltere' : 'US ➔ UK'})</option>
              <option value="USD_TRY">USD ➔ TRY ({lang === 'tr' ? 'ABD ➔ Türkiye' : 'US ➔ Turkey'})</option>
              <option value="USD_INR">USD ➔ INR ({lang === 'tr' ? 'ABD ➔ Hindistan' : 'US ➔ India'})</option>
              <option value="USD_CAD">USD ➔ CAD ({lang === 'tr' ? 'ABD ➔ Kanada' : 'US ➔ Canada'})</option>
              <option value="USD_AUD">USD ➔ AUD ({lang === 'tr' ? 'ABD ➔ Avustralya' : 'US ➔ Australia'})</option>
              <option value="USD_BRL">USD ➔ BRL ({lang === 'tr' ? 'ABD ➔ Brezilya' : 'US ➔ Brazil'})</option>
              <option value="USD_JPY">USD ➔ JPY ({lang === 'tr' ? 'ABD ➔ Japonya' : 'US ➔ Japan'})</option>
              <option value="EUR_USD">EUR ➔ USD ({lang === 'tr' ? 'Avrupa ➔ ABD' : 'Europe ➔ US'})</option>
              <option value="GBP_USD">GBP ➔ USD ({lang === 'tr' ? 'İngiltere ➔ ABD' : 'UK ➔ US'})</option>
            </select>
          </div>
        </div>

        {/* Mid-market summary banner */}
        <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-slate-400">{tCalc.interbankRate}</span>
            <div className="text-2xl font-black text-white mt-0.5">
              1 {result.fromCurr} = {result.midMarketRate} {result.toCurr}
            </div>
          </div>
          <div className="text-right">
            <span className="text-xs font-bold text-slate-400">
              {lang === 'tr' ? 'Sıfır Komisyonlu Alınması Gereken Net' : 'Net Amount Expected at Mid-Market'}
            </span>
            <div className="text-2xl font-black text-emerald-400 mt-0.5">
              {result.targetMidMarketAmount.toLocaleString()} {result.toCurr}
            </div>
          </div>
        </div>

        {/* Provider Comparison List */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-white">{tCalc.estimatedFxFeesHeader}</h3>
            <span className="text-xs text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
              {lang === 'tr' ? `Fark: ${result.potentialSavings} ${result.toCurr} tasarruf imkanı` : `Potential savings: ${result.potentialSavings} ${result.toCurr}`}
            </span>
          </div>

          <div className="space-y-3">
            {result.comparison.map((item, idx) => (
              <div 
                key={item.provider.id}
                className={`p-5 rounded-2xl border transition flex flex-wrap items-center justify-between gap-4 ${
                  idx === 0 
                    ? 'bg-emerald-950/20 border-emerald-500/40 shadow-lg shadow-emerald-500/5' 
                    : 'bg-slate-900/60 border-slate-800'
                }`}
              >
                <div className="flex items-center space-x-3 min-w-[200px]">
                  <span className="text-2xl">{item.provider.flag}</span>
                  <div>
                    <div className="font-bold text-white flex items-center space-x-2">
                      <span>{item.provider.name}</span>
                      {idx === 0 && (
                        <span className="text-[10px] bg-emerald-500 text-slate-950 font-black px-2 py-0.5 rounded-full">
                          {lang === 'tr' ? 'EN UYGUN' : 'BEST RATE'}
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-slate-400">
                      {lang === 'tr' ? `Süre: ${item.provider.speed}` : `Duration: ${item.provider.speed}`}
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs text-slate-400 block">{tCalc.rateOffered}</span>
                  <span className="font-mono text-sm text-slate-200 font-bold">1 {result.fromCurr} = {item.providerRate}</span>
                </div>

                <div className="text-right">
                  <span className="text-xs text-slate-400 block">{lang === 'tr' ? 'Gizli Kur Marjı Kaybı' : 'Hidden Markup Fee Loss'}</span>
                  <span className={`font-mono text-sm font-bold ${item.hiddenFxLoss > 10 ? 'text-rose-400' : 'text-slate-300'}`}>
                    -{item.hiddenFxLoss} {result.toCurr} (%{item.hiddenFxLossPercent})
                  </span>
                </div>

                <div className="text-right min-w-[140px]">
                  <span className="text-xs text-slate-400 block">{tCalc.netAmountReceived}</span>
                  <span className="text-lg font-black text-white">
                    {item.recipientReceives.toLocaleString()} {result.toCurr}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual FX Provider Net Amount Bar Chart */}
        <div className="pt-6 border-t border-slate-800 space-y-4">
          <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-slate-300">
            <span>{lang === 'tr' ? 'Sağlayıcıya Göre Net Alınan Tutar Grafiği' : 'Net Amount Received by Provider Chart'}</span>
            <span className="text-emerald-400 font-extrabold">{lang === 'tr' ? 'Potansiyel Tasarruf:' : 'Potential Savings:'} {result.potentialSavings} {result.toCurr}</span>
          </div>

          <div className="space-y-3">
            {result.comparison.map((item, idx) => {
              const maxReceived = result.bestOption.recipientReceives;
              const barWidth = (item.recipientReceives / maxReceived) * 100;
              const isBest = idx === 0;

              return (
                <div key={item.provider.id} className="space-y-1 text-xs">
                  <div className="flex justify-between items-center text-slate-300 font-medium">
                    <span className="flex items-center space-x-1.5 font-bold">
                      <span>{item.provider.flag}</span>
                      <span>{item.provider.name}</span>
                      {isBest && <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/30">BEST</span>}
                    </span>
                    <span className={`font-mono font-bold ${isBest ? 'text-emerald-400' : 'text-slate-300'}`}>
                      {item.recipientReceives.toLocaleString()} {result.toCurr}
                    </span>
                  </div>

                  <div className="w-full bg-slate-900 rounded-full h-3.5 p-0.5 border border-slate-800">
                    <div 
                      className={`h-full rounded-full transition-all duration-500 ${isBest ? 'bg-gradient-to-r from-emerald-500 to-teal-400' : 'bg-slate-600'}`}
                      style={{ width: `${barWidth}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
