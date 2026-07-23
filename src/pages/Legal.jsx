import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, FileText, Info, Mail } from 'lucide-react';
import { getTranslation } from '../i18n';

export const PrivacyPolicy = ({ lang = 'en' }) => {
  const t = (path) => getTranslation(lang, path);
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <Helmet>
        <title>{t('legal.privacy.title')} | GlobalPayCalc</title>
        <meta name="description" content={t('legal.privacy.desc')} />
      </Helmet>
      <div className="flex items-center space-x-3 mb-8">
        <Shield className="w-8 h-8 text-brand-500" />
        <h1 className="text-4xl font-black text-white">{t('legal.privacy.title')}</h1>
      </div>
      <div className="prose prose-invert max-w-none text-slate-300 space-y-6">
        <p>{t('legal.lastUpdated')}: {new Date().toLocaleDateString()}</p>
        <h2 className="text-2xl font-bold text-white mt-8">{t('legal.privacy.h1')}</h2>
        <p>{t('legal.privacy.p1')}</p>
        
        <h2 className="text-2xl font-bold text-white mt-8">{t('legal.privacy.h2')}</h2>
        <p>{t('legal.privacy.p2')}</p>

        <h2 className="text-2xl font-bold text-white mt-8">{t('legal.privacy.h3')}</h2>
        <p>{t('legal.privacy.p3')}</p>

        <h2 className="text-2xl font-bold text-white mt-8">{t('legal.privacy.h4')}</h2>
        <p>{t('legal.privacy.p4')}</p>
      </div>
    </div>
  );
};

export const TermsOfService = ({ lang = 'en' }) => {
  const t = (path) => getTranslation(lang, path);
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <Helmet>
        <title>{t('legal.terms.title')} | GlobalPayCalc</title>
        <meta name="description" content={t('legal.terms.desc')} />
      </Helmet>
      <div className="flex items-center space-x-3 mb-8">
        <FileText className="w-8 h-8 text-brand-500" />
        <h1 className="text-4xl font-black text-white">{t('legal.terms.title')}</h1>
      </div>
      <div className="prose prose-invert max-w-none text-slate-300 space-y-6">
        <p>{t('legal.lastUpdated')}: {new Date().toLocaleDateString()}</p>
        <h2 className="text-2xl font-bold text-white mt-8">{t('legal.terms.h1')}</h2>
        <p>{t('legal.terms.p1')}</p>
        
        <h2 className="text-2xl font-bold text-white mt-8">{t('legal.terms.h2')}</h2>
        <p>{t('legal.terms.p2')}</p>

        <h2 className="text-2xl font-bold text-white mt-8">{t('legal.terms.h3')}</h2>
        <p>{t('legal.terms.p3')}</p>
      </div>
    </div>
  );
};

export const AboutUs = ({ lang = 'en' }) => {
  const t = (path) => getTranslation(lang, path);
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <Helmet>
        <title>{t('legal.about.title')} | GlobalPayCalc</title>
        <meta name="description" content={t('legal.about.desc')} />
      </Helmet>
      <div className="flex items-center space-x-3 mb-8">
        <Info className="w-8 h-8 text-brand-500" />
        <h1 className="text-4xl font-black text-white">{t('legal.about.title')}</h1>
      </div>
      <div className="prose prose-invert max-w-none text-slate-300 space-y-6">
        <p className="text-xl">{t('legal.about.intro')}</p>
        <h2 className="text-2xl font-bold text-white mt-8">{t('legal.about.h1')}</h2>
        <p>{t('legal.about.p1')}</p>
        
        <h2 className="text-2xl font-bold text-white mt-8">{t('legal.about.h2')}</h2>
        <p>{t('legal.about.p2')}</p>
      </div>
    </div>
  );
};

export const Contact = ({ lang = 'en' }) => {
  const t = (path) => getTranslation(lang, path);
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <Helmet>
        <title>{t('legal.contact.title')} | GlobalPayCalc</title>
        <meta name="description" content={t('legal.contact.desc')} />
      </Helmet>
      <div className="flex items-center space-x-3 mb-8">
        <Mail className="w-8 h-8 text-brand-500" />
        <h1 className="text-4xl font-black text-white">{t('legal.contact.title')}</h1>
      </div>
      <div className="glass-card p-8 rounded-2xl border-slate-800">
        <p className="text-slate-300 mb-6">{t('legal.contact.intro')}</p>
        <div className="space-y-4">
          <div className="flex items-center space-x-3 text-slate-300">
            <Mail className="w-5 h-5 text-brand-400" />
            <span>Email: <a href="mailto:support@globalpaycalc.com" className="text-brand-400 hover:underline">support@globalpaycalc.com</a></span>
          </div>
          <p className="text-sm text-slate-400 mt-8">{t('legal.contact.response')}</p>
        </div>
      </div>
    </div>
  );
};
