import React, { useEffect, useState } from 'react';
import { useLazyAd } from '../hooks/useLazyAd';
import { DollarSign, Heart } from 'lucide-react';

export default function AdSenseSlot({ slotId = 'default-slot', format = 'auto', className = '' }) {
  const { containerRef, shouldRender, adBlocked } = useLazyAd();
  const [refreshKey, setRefreshKey] = useState(0);

  // Enforce aspect-ratio / fixed dimension sizing based on format to eliminate CLS
  let heightClasses = 'h-[250px] md:h-[90px]'; // Leaderboard default (Mobile: rectangle, Desktop: leaderboard)
  let widthClasses = 'w-full max-w-[728px]';

  if (format === 'rectangle') {
    heightClasses = 'h-[250px]';
    widthClasses = 'w-full max-w-[300px]';
  } else if (format === 'mobile-banner') {
    heightClasses = 'h-[50px]';
    widthClasses = 'w-full max-w-[320px]';
  }

  // Phase 3: Active Ad Refresh (Re-request ads every 40 seconds to maximize Page RPM legally)
  useEffect(() => {
    if (!shouldRender || adBlocked) return;

    const interval = setInterval(() => {
      setRefreshKey(prev => prev + 1);
      console.log(`[AdSenseEngine] Refreshing ad slot: ${slotId}`);
    }, 40000); // 40 seconds refresh loop

    return () => clearInterval(interval);
  }, [shouldRender, adBlocked, slotId]);

  useEffect(() => {
    if (shouldRender && !adBlocked && typeof window !== 'undefined') {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        console.warn('[AdSenseSlot] push failed:', err);
      }
    }
  }, [shouldRender, adBlocked, refreshKey]);

  return (
    <div
      ref={containerRef}
      className={`my-8 mx-auto flex flex-col items-center justify-center transition-all ${
        format === 'rectangle'
          ? 'min-h-[280px]'
          : format === 'mobile-banner'
            ? 'min-h-[50px]'
            : 'min-h-[280px] md:min-h-[120px]' // Horizontal fallback: reserve 280px on mobile for rectangle, 120px on desktop
      } ${widthClasses} ${className}`}
    >
      <div className="w-full flex items-center justify-between text-[9px] text-slate-500 font-mono uppercase tracking-wider mb-1.5 px-1">
        <span>Sponsor</span>
        {adBlocked && <span className="text-rose-400 font-semibold">AdBlock Active</span>}
      </div>

      <div className={`relative w-full rounded-2xl overflow-hidden border border-slate-800/80 bg-slate-900/60 flex items-center justify-center ${heightClasses}`}>
        {adBlocked ? (
          // AdBlocker Active: Render a clean, non-intrusive fallback CTA
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-gradient-to-br from-brand-950/20 to-purple-950/20 text-center space-y-1">
            <Heart className="w-4 h-4 text-rose-500 animate-pulse" />
            <div className="text-xs font-bold text-white">Support Free Tools</div>
            <p className="text-[10px] text-slate-400 max-w-xs">
              Whitelisting us helps support unlimited, 100% private client-side utilities. Thank you!
            </p>
          </div>
        ) : !shouldRender ? (
          // Lazy Loading Skeleton Loader with Elegant Tailwind Shimmer
          <div className="absolute inset-0 bg-slate-900/90 flex flex-col items-center justify-center space-y-2">
            <div className="w-full h-full bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 animate-pulse"></div>
          </div>
        ) : (
          // Real Google AdSense responsive tag
          <div key={refreshKey} className="w-full h-full flex items-center justify-center">
            <ins
              className="adsbygoogle"
              style={{ display: 'block', width: '100%', height: '100%' }}
              data-ad-client="ca-pub-5039398843550426"
              data-ad-slot={slotId}
              data-ad-format={format}
              data-full-width-responsive="true"
            ></ins>
          </div>
        )}
      </div>
    </div>
  );
}
