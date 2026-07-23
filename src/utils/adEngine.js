// Smart Lazy Ad Injection Engine (requestIdleCallback + DOM Injection)
let scriptInjected = false;

export const initializeAdSense = () => {
  if (scriptInjected || typeof window === 'undefined') return;

  const injectScript = () => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5039398843550426';
    script.crossOrigin = 'anonymous';
    document.head.appendChild(script);
    scriptInjected = true;
    console.log('[AdSenseEngine] Google Ads script injected lazily.');
  };

  // Use requestIdleCallback or fallback to setTimeout for non-blocking execution
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(() => injectScript(), { timeout: 2000 });
  } else {
    setTimeout(injectScript, 1000);
  }
};
