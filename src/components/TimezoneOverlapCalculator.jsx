import React, { useState } from 'react';
import { calculateTimezoneOverlap, globalTimezones } from '../utils/timezoneEngine';
import { Clock, Globe, Users, CheckCircle2, AlertCircle } from 'lucide-react';
import { getTranslation } from '../i18n';

export default function TimezoneOverlapCalculator({ lang = 'en' }) {
  const t = (path) => getTranslation(lang, path);

  const [tzA, setTzA] = useState('US_PACIFIC');
  const [tzB, setTzB] = useState('TR_EET');
  const [workStart, setWorkStart] = useState(9);
  const [workEnd, setWorkEnd] = useState(17);

  const result = calculateTimezoneOverlap(tzA, tzB, workStart, workEnd);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Component Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold">
          <Clock className="w-3.5 h-3.5" />
          <span>Küresel Remote Ekip Zaman Dilimi Kesişim Barı</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Timezone Overlap Calculator for Remote Teams
        </h2>
        <p className="text-slate-400 text-sm leading-relaxed">
          Farklı ülkelerde yaşayan remote ekip üyelerinin ve müşterilerin ortak çalışma saatlerini ve kesişim penceresini görselleştirin.
        </p>
      </div>

      {/* Main Glass Form */}
      <div className="glass-card p-6 sm:p-8 rounded-3xl border-slate-800 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              1. Ekip Üyesi / Konum A
            </label>
            <select
              value={tzA}
              onChange={(e) => setTzA(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white font-bold text-base focus:border-indigo-500 outline-none cursor-pointer"
            >
              {globalTimezones.map(t => (
                <option key={t.id} value={t.id}>
                  {t.flag} {t.name}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              2. Ekip Üyesi / Konum B
            </label>
            <select
              value={tzB}
              onChange={(e) => setTzB(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white font-bold text-base focus:border-indigo-500 outline-none cursor-pointer"
            >
              {globalTimezones.map(t => (
                <option key={t.id} value={t.id}>
                  {t.flag} {t.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Overlap Summary */}
        <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-2xl flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-slate-400">Saat Farkı</span>
            <div className="text-2xl font-black text-white mt-0.5">
              {Math.abs(result.timeDifferenceHours)} Saat {result.timeDifferenceHours >= 0 ? 'İleride' : 'Geride'}
            </div>
          </div>

          <div className="text-right">
            <span className="text-xs font-bold text-slate-400">Günlük Ortak Çalışma Penceresi</span>
            <div className="text-3xl font-black text-indigo-400 mt-0.5">
              {result.overlappingHoursCount} Saat Kesişim
            </div>
          </div>
        </div>

        {/* Visual 24-Hour Timeline Bar */}
        <div className="space-y-4 pt-2">
          <div className="flex items-center justify-between text-xs font-bold text-slate-300">
            <span>24-Saatlik Görsel Çalışma Çizelgesi (00:00 - 23:00)</span>
            <div className="flex items-center space-x-4">
              <span className="flex items-center space-x-1.5"><span className="w-3 h-3 bg-indigo-500 rounded-full inline-block"></span><span>Ortak Kesişim</span></span>
              <span className="flex items-center space-x-1.5"><span className="w-3 h-3 bg-slate-800 rounded-full inline-block"></span><span>Tekli Mesai</span></span>
            </div>
          </div>

          <div className="overflow-x-auto pb-2">
            <div className="min-w-[650px] grid grid-cols-24 gap-1 bg-slate-950 p-3 rounded-2xl border border-slate-800">
              {result.hourlyGrid.map(slot => (
                <div 
                  key={slot.hourA}
                  className={`p-2 rounded-xl text-center flex flex-col justify-between transition ${
                    slot.isOverlap
                      ? 'bg-indigo-600/90 text-white font-bold border border-indigo-400'
                      : slot.isWorkA || slot.isWorkB
                        ? 'bg-slate-800/80 text-slate-300'
                        : 'bg-slate-900/40 text-slate-600'
                  }`}
                >
                  <span className="text-[10px] block font-mono">{slot.formattedA}</span>
                  <span className="text-[10px] block font-mono opacity-80 mt-1">{slot.formattedB}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between text-[11px] text-slate-400 px-1 font-mono">
            <span>Üst Satır: {result.tzA.city} ({result.tzA.flag})</span>
            <span>Alt Satır: {result.tzB.city} ({result.tzB.flag})</span>
          </div>
        </div>

      </div>
    </div>
  );
}
