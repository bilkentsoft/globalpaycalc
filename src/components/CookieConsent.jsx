import React, { useState, useEffect } from 'react';
import { Cookie } from 'lucide-react';
import { getTranslation } from '../i18n';
import { updateConsent } from '../utils/adEngine';

const STORAGE_KEY = 'globalpaycalc_cookie_consent';

export const CookieConsent = ({ lang = 'en' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const t = (path) => getTranslation(lang, path);
  const privacyHref = lang === 'en' ? '/privacy' : `/${lang}/privacy`;

  useEffect(() => {
    let stored = null;
    try { stored = localStorage.getItem(STORAGE_KEY); } catch (e) { /* storage blocked */ }
    if (stored) return;

    // If a Google-certified CMP (IAB TCF, e.g. AdSense "Privacy & messaging") is active,
    // it collects consent itself — do not show a second banner.
    const timer = setTimeout(() => {
      if (typeof window.__tcfapi === 'function' || window.googlefc) return;
      setIsVisible(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const saveChoice = (granted) => {
    try { localStorage.setItem(STORAGE_KEY, granted ? 'granted' : 'denied'); } catch (e) { /* ignore */ }
    updateConsent(granted);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div role="dialog" aria-live="polite" aria-label="Cookie consent" className="fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-800 p-4 md:p-6 z-50 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-start md:items-center gap-3">
          <div className="p-2 bg-brand-500/20 rounded-lg shrink-0">
            <Cookie className="w-6 h-6 text-brand-400" />
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            {t('cookie.message')} <a href={privacyHref} className="text-brand-400 hover:underline">{t('legal.privacy.title')}</a>.
          </p>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto justify-end">
          <button
            onClick={() => saveChoice(false)}
            className="px-5 py-2 text-sm font-semibold text-slate-200 border border-slate-700 rounded-xl hover:bg-slate-800 transition-colors whitespace-nowrap"
          >
            {t('cookie.decline')}
          </button>
          <button
            onClick={() => saveChoice(true)}
            className="px-6 py-2 bg-brand-600 hover:bg-brand-500 text-white text-sm font-bold rounded-xl transition-all shadow-lg shadow-brand-500/20 whitespace-nowrap"
          >
            {t('cookie.accept')}
          </button>
        </div>
      </div>
    </div>
  );
};
