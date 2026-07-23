import React, { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';
import { getTranslation } from '../i18n';

export const CookieConsent = ({ lang = 'en' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const t = (path) => getTranslation(lang, path);

  useEffect(() => {
    const consent = localStorage.getItem('globalpaycalc_cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('globalpaycalc_cookie_consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-800 p-4 md:p-6 z-50 animate-in slide-in-from-bottom-10 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-start md:items-center gap-3">
          <div className="p-2 bg-brand-500/20 rounded-lg shrink-0">
            <Cookie className="w-6 h-6 text-brand-400" />
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            {t('cookie.message')} <a href="/privacy" className="text-brand-400 hover:underline">Privacy Policy</a>.
          </p>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto justify-end">
          <button 
            onClick={() => setIsVisible(false)}
            className="px-4 py-2 text-sm font-semibold text-slate-400 hover:text-white transition-colors"
          >
            {t('cookie.decline')}
          </button>
          <button 
            onClick={acceptCookies}
            className="px-6 py-2 bg-brand-600 hover:bg-brand-500 text-white text-sm font-bold rounded-xl transition-all shadow-lg shadow-brand-500/20 whitespace-nowrap"
          >
            {t('cookie.accept')}
          </button>
        </div>
      </div>
    </div>
  );
};
