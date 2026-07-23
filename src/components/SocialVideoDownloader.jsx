import React, { useState } from 'react';
import { Video, Download, Sparkles, CheckCircle2, ShieldCheck, RefreshCw, AlertTriangle, Play, Music } from 'lucide-react';
import { getTranslation } from '../i18n';

export default function SocialVideoDownloader({ lang = 'en' }) {
  const t = (path) => getTranslation(lang, path);

  const [url, setUrl] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [metadata, setMetadata] = useState(null);

  const handleDownload = async (e) => {
    e.preventDefault();
    if (!url) return;

    setIsProcessing(true);
    setErrorMsg('');
    setMetadata(null);

    const targetUrl = url.trim();

    try {
      // Query the unified download API (active on local Vite and production Vercel servers!)
      const response = await fetch(`/api/download?url=${encodeURIComponent(targetUrl)}`);
      
      if (response.ok) {
        const data = await response.json();
        if (data && data.success) {
          setMetadata(data);
          setIsProcessing(false);
          return;
        }
      }
      
      throw new Error('Video stream extraction failed.');
    } catch (err) {
      console.error('[Download error]:', err);
      setErrorMsg(t('video.errorText'));
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto my-8">
      <div className="text-center space-y-3">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold">
          <Video className="w-3.5 h-3.5" />
          <span>No Watermark • Universal Media Downloader</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {t('video.title')}
        </h2>
        <p className="text-slate-400 text-sm leading-relaxed">
          {t('video.subtitle')}
        </p>
      </div>

      {/* Error Boundary / Display Alert */}
      {errorMsg && (
        <div className="glass-card p-4 rounded-xl border-rose-500/30 bg-rose-500/10 flex items-start space-x-3 text-xs text-rose-400 animate-float">
          <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <strong className="font-bold text-white">{t('video.errorTitle')}</strong>
            <p>{errorMsg}</p>
          </div>
        </div>
      )}

      {/* Input Bar Card */}
      <form onSubmit={handleDownload} className="glass-card p-4 sm:p-6 rounded-2xl border-rose-500/20 space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="url"
            placeholder={t('video.placeholder')}
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1 bg-slate-900 border border-slate-700 text-slate-200 text-sm rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-rose-500 focus:outline-none font-medium placeholder-slate-500"
            required
          />
          <button
            type="submit"
            disabled={isProcessing}
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-rose-500 via-pink-600 to-purple-600 text-white font-bold text-xs hover:opacity-90 transition shadow-lg shadow-rose-500/20 flex items-center justify-center space-x-2 whitespace-nowrap cursor-pointer"
          >
            {isProcessing ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>{t('video.processing')}</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                <span>{t('video.btn')}</span>
              </>
            )}
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-800 gap-2">
          <div className="flex items-center space-x-2 text-emerald-400 font-medium">
            <ShieldCheck className="w-4 h-4" />
            <span>100% Free • Unlimited • AdBlock Safe</span>
          </div>
          <div className="font-mono text-slate-500">TikTok, Instagram Reels, YouTube Shorts</div>
        </div>
      </form>

      {/* Native HTML Download Buttons (100% On-Site!) */}
      {metadata && (
        <div className="glass-card p-6 rounded-2xl border-emerald-500/30 space-y-6 animate-float">
          <div className="flex items-center space-x-2 text-emerald-400 font-bold text-sm">
            <CheckCircle2 className="w-5 h-5" />
            <span>{t('video.success')}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* MP4 Download */}
            <a
              href={metadata.videoUrl}
              download
              className="p-5 rounded-xl bg-slate-900 border border-slate-850 hover:border-emerald-500/50 transition flex items-center justify-between group cursor-pointer text-left w-full"
            >
              <div>
                <div className="text-xs font-bold text-white group-hover:text-emerald-400 flex items-center space-x-2">
                  <Play className="w-4.5 h-4.5 text-emerald-400" />
                  <span>{t('video.downloadVideo')}</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-2 leading-relaxed">
                  {t('video.videoDesc')}
                </p>
              </div>
              <Download className="w-5 h-5 text-emerald-400 flex-shrink-0 ml-4" />
            </a>

            {/* MP3 Download */}
            {metadata.audioUrl && (
              <a
                href={metadata.audioUrl}
                download
                className="p-5 rounded-xl bg-slate-900 border border-slate-850 hover:border-purple-500/50 transition flex items-center justify-between group cursor-pointer text-left w-full"
              >
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-purple-400 flex items-center space-x-2">
                    <Music className="w-4.5 h-4.5 text-purple-400" />
                    <span>{t('video.downloadAudio')}</span>
                  </div>
                  <p className="text-[10px] text-slate-500 mt-2 leading-relaxed">
                    {t('video.audioDesc')}
                  </p>
                </div>
                <Sparkles className="w-5 h-5 text-purple-400 flex-shrink-0 ml-4" />
              </a>
            )}
          </div>

          {/* User Guidance Notice */}
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-[10px] text-slate-400 leading-relaxed">
            <span>
              💡 <strong>{t('video.noteTitle')}</strong> {t('video.noteText')}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
