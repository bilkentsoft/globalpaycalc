// Smart Lazy Ad Injection Engine (requestIdleCallback + DOM Injection)
let scriptInjected = false;
let analyticsInjected = false;

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

export const initializeAnalytics = () => {
  if (analyticsInjected || typeof window === 'undefined') return;

  const injectAnalytics = () => {
    if (analyticsInjected) return;
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-N383BLFQH5';
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function() { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', 'G-N383BLFQH5', {
      page_path: window.location.pathname
    });

    analyticsInjected = true;
    console.log('[AnalyticsEngine] Google Analytics script injected on user interaction.');
    cleanup();
  };

  const events = ['pointerdown', 'touchstart', 'scroll', 'mousemove', 'keydown'];
  const cleanup = () => {
    events.forEach(event => window.removeEventListener(event, injectAnalytics));
  };

  events.forEach(event => window.addEventListener(event, injectAnalytics, { passive: true }));
};
