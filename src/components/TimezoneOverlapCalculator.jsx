import React, { useState } from 'react';
import { calculateTimezoneOverlap, globalTimezones } from '../utils/timezoneEngine';
import { Clock } from 'lucide-react';
import calcTranslations from '../data/calculatorTranslations';

export default function TimezoneOverlapCalculator({ lang = 'en' }) {
  const [tzA, setTzA] = useState('US_PACIFIC');
  const [tzB, setTzB] = useState('TR_EET');
  const [workStart, setWorkStart] = useState(9);
  const [workEnd, setWorkEnd] = useState(17);

  const tCalc = calcTranslations[lang] || calcTranslations['en'];
  const result = calculateTimezoneOverlap(tzA, tzB, workStart, workEnd);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Component Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold">
          <Clock className="w-3.5 h-3.5" />
          <span>{tCalc.timezoneBadge}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {tCalc.timezoneTitle}
        </h2>
        <p className="text-slate-400 text-sm leading-relaxed">
          {tCalc.timezoneDesc}
        </p>
      </div>

      {/* Main Glass Form */}
      <div className="glass-card p-6 sm:p-8 rounded-3xl border-slate-800 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              {lang === 'tr' ? '1. Ekip Üyesi / Konum A' : '1. Team Member / Location A'}
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
              {lang === 'tr' ? '2. Ekip Üyesi / Konum B' : '2. Team Member / Location B'}
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
            <span className="text-xs font-bold text-slate-400">
              {lang === 'tr' ? 'Saat Farkı' : 'Time Difference'}
            </span>
            <div className="text-2xl font-black text-white mt-0.5">
              {Math.abs(result.timeDifferenceHours)} {lang === 'tr' ? 'Saat' : 'Hours'}{' '}
              {result.timeDifferenceHours >= 0 
                ? (lang === 'tr' ? 'İleride' : 'Ahead') 
                : (lang === 'tr' ? 'Geride' : 'Behind')}
            </div>
          </div>

          <div className="text-right">
            <span className="text-xs font-bold text-slate-400">
              {lang === 'tr' ? 'Günlük Ortak Çalışma Penceresi' : 'Daily Shared Work Window'}
            </span>
            <div className="text-3xl font-black text-indigo-400 mt-0.5">
              {result.overlappingHoursCount} {lang === 'tr' ? 'Saat Kesişim' : 'Hours Overlap'}
            </div>
          </div>
        </div>

        {/* Visual 24-Hour Timeline Bar */}
        <div className="space-y-4 pt-2">
          <div className="flex items-center justify-between text-xs font-bold text-slate-300">
            <span>
              {lang === 'tr' ? '24-Saatlik Görsel Çalışma Çizelgesi (00:00 - 23:00)' : '24-Hour Visual Work Schedule (00:00 - 23:00)'}
            </span>
            <div className="flex items-center space-x-4">
              <span className="flex items-center space-x-1.5">
                <span className="w-3 h-3 bg-indigo-500 rounded-full inline-block"></span>
                <span>{lang === 'tr' ? 'Ortak Kesişim' : 'Overlap Window'}</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <span className="w-3 h-3 bg-slate-800 rounded-full inline-block"></span>
                <span>{lang === 'tr' ? 'Tekli Mesai' : 'Individual Hours'}</span>
              </span>
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
            <span>{lang === 'tr' ? 'Üst Satır' : 'Top Row'}: {result.tzA.city} ({result.tzA.flag})</span>
            <span>{lang === 'tr' ? 'Alt Satır' : 'Bottom Row'}: {result.tzB.city} ({result.tzB.flag})</span>
          </div>
        </div>

      </div>
    </div>
  );
}
