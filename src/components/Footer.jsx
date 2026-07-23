import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LegalModal from './LegalModal';
import { getTranslation } from '../i18n';

export default function Footer({ lang = 'en' }) {
  const [modalType, setModalType] = useState(null);
  const t = (path) => getTranslation(lang, path);

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 mt-20 py-12 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        <div className="flex flex-col md:flex-row justify-between items-center pb-8 border-b border-slate-800/60 gap-4">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="font-extrabold text-lg text-white">GlobalPayCalc.com</div>
            <p className="text-slate-400 text-xs max-w-md">
              {t('hero.subtitle')}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-400">
            <Link to={lang === 'en' ? '/about' : `/${lang}/about`} className="hover:text-white transition decoration-slate-600 hover:underline">
              {t('footer.aboutUs') || 'About Us'}
            </Link>
            <Link to={lang === 'en' ? '/contact' : `/${lang}/contact`} className="hover:text-white transition decoration-slate-600 hover:underline">
              {t('footer.contact') || 'Contact'}
            </Link>
            <Link to={lang === 'en' ? '/privacy' : `/${lang}/privacy`} className="hover:text-white transition decoration-slate-600 hover:underline">
              {t('footer.privacy')}
            </Link>
            <Link to={lang === 'en' ? '/terms' : `/${lang}/terms`} className="hover:text-white transition decoration-slate-600 hover:underline">
              {t('footer.terms')}
            </Link>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            {t('footer.copyright')}
          </div>
          <div className="font-mono text-[10px] text-slate-600">
            {t('footer.tagline')}
          </div>
        </div>

      </div>
      
      {/* SEO Keyword Engine (Visible to bots, very subtle for users) */}
      <div className="max-w-7xl mx-auto mt-8 text-[10px] text-slate-800 leading-relaxed text-justify">
        GlobalPayCalc is an all-in-one universal utility engine for digital professionals. Securely download HD social media videos without watermarks from platforms like TikTok, Instagram Reels, and YouTube Shorts using our free unlimited client-side downloader. Accurately calculate remote salaries, global tax requirements, and living cost parity across worldwide destinations. Developers can use our advanced simulator to evaluate LLM API token costs for models like GPT-4o, Claude 3.5, and LLaMA 3. Experience complete privacy with our in-browser image background remover powered by WebAssembly, ensuring your photos and media are processed securely and privately without server uploads.
      </div>

      {/* Render Legal Modal if open */}
      <LegalModal type={modalType} onClose={() => setModalType(null)} />
    </footer>
  );
}
