// SEO & Dynamic Hreflang Tags Injector Utility
import { supportedLanguages } from '../i18n';

export const injectHreflangLinks = (path) => {
  if (typeof document === 'undefined') return;

  const baseDomain = 'https://globalpaycalc.com';
  const cleanPath = path.startsWith('/') ? path : `/${path}`;

  // Clear existing hreflang link tags to avoid duplicates
  const existingHreflangs = document.querySelectorAll('link[rel="alternate"][hreflang]');
  existingHreflangs.forEach(el => el.remove());

  // Inject hreflang for each supported language
  supportedLanguages.forEach(lang => {
    const link = document.createElement('link');
    link.rel = 'alternate';
    link.hreflang = lang.code;
    link.href = `${baseDomain}/${lang.code}${cleanPath}`;
    document.head.appendChild(link);
  });

  // Inject x-default fallback link tag
  const fallbackLink = document.createElement('link');
  fallbackLink.rel = 'alternate';
  fallbackLink.hreflang = 'x-default';
  fallbackLink.href = `${baseDomain}${cleanPath}`;
  document.head.appendChild(fallbackLink);

  // Update canonical URL tag
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  canonical.href = `${baseDomain}${cleanPath}`;

  console.log(`[SEOUtils] Injected 8 hreflangs and canonical for path: ${cleanPath}`);
};
