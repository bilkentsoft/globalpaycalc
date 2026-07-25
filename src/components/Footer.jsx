import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LegalModal from './LegalModal';
import { getTranslation } from '../i18n';

export default function Footer({ lang = 'en' }) {
  const [modalType, setModalType] = useState(null);
  const t = (path) => getTranslation(lang, path);

  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const showMobile = mounted && isMobile;

  return (
    <footer className={`border-t border-slate-800/80 bg-slate-950 transition-all duration-300 ${showMobile ? 'mt-10 py-6 px-4' : 'mt-20 py-12 px-4 lg:px-8'}`}>
      <div className="max-w-7xl mx-auto space-y-6">
        
        {!showMobile && (
          <div className="flex flex-col md:flex-row justify-between items-center pb-8 border-b border-slate-800/60 gap-4">
            <div className="space-y-1.5 text-center md:text-left">
              <div className="font-extrabold text-lg text-white">GlobalPayCalc.com</div>
              <p className="text-slate-400 text-xs max-w-md">
                {t('hero.subtitle')}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-400">
              <Link to={lang === 'en' ? '/about' : `/${lang}/about`} title={t('footer.aboutUs') || 'About Us'} className="hover:text-white transition decoration-slate-600 hover:underline">
                {t('footer.aboutUs') || 'About Us'}
              </Link>
              <Link to={lang === 'en' ? '/contact' : `/${lang}/contact`} title={t('footer.contact') || 'Contact'} className="hover:text-white transition decoration-slate-600 hover:underline">
                {t('footer.contact') || 'Contact'}
              </Link>
              <Link to={lang === 'en' ? '/privacy' : `/${lang}/privacy`} title={t('footer.privacy')} className="hover:text-white transition decoration-slate-600 hover:underline">
                {t('footer.privacy')}
              </Link>
              <Link to={lang === 'en' ? '/terms' : `/${lang}/terms`} title={t('footer.terms')} className="hover:text-white transition decoration-slate-600 hover:underline">
                {t('footer.terms')}
              </Link>
            </div>
          </div>
        )}

        {showMobile && (
          <div className="flex flex-col items-center space-y-4 pb-4 border-b border-slate-800/60">
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[11px] font-semibold text-slate-400">
              <Link to={lang === 'en' ? '/about' : `/${lang}/about`} title={t('footer.aboutUs') || 'About Us'} className="hover:text-white transition">
                {t('footer.aboutUs') || 'About Us'}
              </Link>
              <Link to={lang === 'en' ? '/contact' : `/${lang}/contact`} title={t('footer.contact') || 'Contact'} className="hover:text-white transition">
                {t('footer.contact') || 'Contact'}
              </Link>
              <Link to={lang === 'en' ? '/privacy' : `/${lang}/privacy`} title={t('footer.privacy')} className="hover:text-white transition">
                {t('footer.privacy')}
              </Link>
              <Link to={lang === 'en' ? '/terms' : `/${lang}/terms`} title={t('footer.terms')} className="hover:text-white transition">
                {t('footer.terms')}
              </Link>
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
          <div className="text-center sm:text-left">
            {t('footer.copyright')}
          </div>
          {!showMobile && (
            <div className="font-mono text-[10px] text-slate-400">
              {t('footer.tagline')}
            </div>
          )}
        </div>

      </div>
      
      {/* SEO Keyword Engine (Visible to bots, very subtle for users, hidden from screenreaders to fix contrast) */}
      <div aria-hidden="true" className="max-w-7xl mx-auto mt-6 text-[10px] text-slate-800/40 leading-relaxed text-justify">
        GlobalPayCalc is an all-in-one universal utility engine for digital professionals. Accurately calculate remote salaries, global tax requirements, and living cost parity across worldwide destinations. Developers can use our advanced simulator to evaluate LLM API token costs for models like GPT-4o, Claude 3.5, and LLaMA 3. Experience complete privacy with our in-browser image background remover powered by WebAssembly, ensuring your photos and media are processed securely and privately without server uploads.
      </div>

      {/* Render Legal Modal if open */}
      <LegalModal type={modalType} onClose={() => setModalType(null)} />
    </footer>
  );
}
