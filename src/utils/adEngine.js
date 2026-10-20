// Analytics loader.
// NOTE: The Google AdSense script is loaded statically in index.html <head> (required for AdSense review).
// Google Consent Mode v2 defaults are also declared in index.html before any Google tag runs,
// so GA4 only sets cookies after the visitor grants consent via the cookie banner / CMP.
let analyticsInjected = false;

export const initializeAnalytics = () => {
  if (analyticsInjected || typeof window === 'undefined') return;

  const injectAnalytics = () => {
    if (analyticsInjected) return;
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-N383BLFQH5';
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', 'G-N383BLFQH5', {
      page_path: window.location.pathname
    });

    analyticsInjected = true;
    cleanup();
  };

  const events = ['pointerdown', 'touchstart', 'scroll', 'mousemove', 'keydown'];
  const cleanup = () => {
    events.forEach(event => window.removeEventListener(event, injectAnalytics));
  };

  events.forEach(event => window.addEventListener(event, injectAnalytics, { passive: true }));
};

// Updates Google Consent Mode v2 signals after the visitor makes a choice.
export const updateConsent = (granted) => {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  const value = granted ? 'granted' : 'denied';
  window.gtag('consent', 'update', {
    ad_storage: value,
    ad_user_data: value,
    ad_personalization: value,
    analytics_storage: value
  });
  window.gtag('set', 'ads_data_redaction', !granted);
};
