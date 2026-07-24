// Smart Lazy Ad Injection Engine (requestIdleCallback + DOM Injection)
let scriptInjected = false;

export const initializeAdSense = () => {
  if (scriptInjected || typeof window === 'undefined') return;

  const injectScript = () => {
    if (scriptInjected) return;
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5039398843550426';
    script.crossOrigin = 'anonymous';
    document.head.appendChild(script);
    scriptInjected = true;
    console.log('[AdSenseEngine] Google Ads script injected on user interaction.');
    cleanup();
  };

  const events = ['pointerdown', 'touchstart', 'scroll', 'mousemove', 'keydown'];
  const cleanup = () => {
    events.forEach(event => window.removeEventListener(event, injectScript));
  };

  events.forEach(event => window.addEventListener(event, injectScript, { passive: true }));
};
