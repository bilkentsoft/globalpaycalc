import React, { useState, useEffect } from 'react';
import { Calculator } from 'lucide-react';
import { supportedLanguages, getTranslation } from '../i18n';
import { useNavigate } from 'react-router-dom';

export default function Header({ currentLang, setLang, onLanguageChange }) {
  const t = (path) => getTranslation(currentLang, path);
  const navigate = useNavigate();
  const changeLang = setLang || onLanguageChange;

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 glass-card border-b border-slate-800/80 px-4 lg:px-8 py-3.5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo */}
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate('/')}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-rose-600 via-purple-600 to-brand-500 flex items-center justify-center shadow-lg shadow-rose-500/20">
            <Calculator className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center space-x-1">
              <span className="font-extrabold text-xl tracking-tight text-white">GlobalPayCalc</span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-brand-500/20 text-brand-400 border border-brand-500/30">.com</span>
            </div>
            <p className="text-[11px] text-slate-400 font-medium hidden sm:block">{t('nav.tagline')}</p>
          </div>
        </div>

        {/* Language Selector Dropdown (Manual Override) */}
        <div className="relative">
          <select
            value={currentLang}
            aria-label="Select Language"
            onChange={(e) => {
              const newLang = e.target.value;
              // Persist explicit user choice immediately
              try { localStorage.setItem('gpc_lang', newLang); } catch (_) {}
              if (changeLang) changeLang(newLang);
              
              // Handle Navigation
              const pathSegments = window.location.pathname.split('/').filter(Boolean);
              const isSupported = supportedLanguages.some(l => l.code === pathSegments[0]);
              
              let newPath = '';
              if (newLang === 'en') {
                // English: strip lang prefix, use clean root paths
                newPath = isSupported
                  ? '/' + pathSegments.slice(1).join('/')
                  : window.location.pathname;
                if (!newPath || newPath === '') newPath = '/';
              } else if (isSupported) {
                // Replace existing lang prefix
                pathSegments[0] = newLang;
                newPath = '/' + pathSegments.join('/');
              } else {
                // Add new lang prefix
                newPath = `/${newLang}${window.location.pathname}`;
              }

              navigate(newPath);
            }}
            className="bg-slate-900 border border-slate-700 text-slate-200 text-xs font-medium rounded-lg px-2 py-1.5 md:px-3 md:py-2 focus:ring-2 focus:ring-brand-500 focus:outline-none cursor-pointer"
          >
            {supportedLanguages.map(lang => (
              <option key={lang.code} value={lang.code}>
                {isMobile ? lang.label.split(' ').pop() : lang.label}
              </option>
            ))}
          </select>
        </div>

      </div>
    </header>
  );
}
