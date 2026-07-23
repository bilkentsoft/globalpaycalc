import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Home, Compass } from 'lucide-react';

const content = {
  en: { title: "404 - Page Not Found", desc: "The page you are looking for doesn't exist or has been moved.", btn: "Back to Home" },
  tr: { title: "404 - Sayfa Bulunamadı", desc: "Aradığınız sayfa mevcut değil veya taşınmış olabilir.", btn: "Ana Sayfaya Dön" },
  es: { title: "404 - Página no encontrada", desc: "La página que buscas no existe o ha sido movida.", btn: "Volver al inicio" },
  de: { title: "404 - Seite nicht gefunden", desc: "Die gesuchte Seite existiert nicht oder wurde verschoben.", btn: "Zurück zur Startseite" },
  pt: { title: "404 - Página não encontrada", desc: "A página que você está procurando não existe ou foi movida.", btn: "Voltar ao Início" },
  fr: { title: "404 - Page introuvable", desc: "La page que vous recherchez n'existe pas ou a été déplacée.", btn: "Retour à l'accueil" },
  id: { title: "404 - Halaman Tidak Ditemukan", desc: "Halaman yang Anda cari tidak ada atau telah dipindahkan.", btn: "Kembali ke Beranda" },
  ja: { title: "404 - ページが見つかりません", desc: "お探しのページは存在しないか、移動した可能性があります。", btn: "ホームに戻る" }
};

export default function NotFoundPage({ lang = 'en' }) {
  const t = content[lang] || content.en;

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 space-y-8 text-center">
      <Helmet>
        <title>{t.title} | GlobalPayCalc</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="space-y-4">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-slate-900 border border-slate-800 shadow-2xl mb-4">
          <Compass className="w-12 h-12 text-rose-500 animate-pulse" />
        </div>
        
        <h1 className="text-6xl sm:text-8xl font-black text-white tracking-tight drop-shadow-2xl">
          4<span className="text-rose-500">0</span>4
        </h1>
        
        <h2 className="text-xl sm:text-3xl font-bold text-slate-300">
          {t.title.split('- ')[1]}
        </h2>
        
        <p className="text-slate-400 max-w-md mx-auto text-sm sm:text-base">
          {t.desc}
        </p>
      </div>

      <Link 
        to={`/${lang === 'en' ? '' : lang}`} 
        className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 text-white font-bold hover:from-brand-500 hover:to-brand-400 transition-all shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:-translate-y-0.5"
      >
        <Home className="w-4.5 h-4.5" />
        <span>{t.btn}</span>
      </Link>
    </div>
  );
}
