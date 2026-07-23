import { useEffect, useState, useRef } from 'react';
import { initializeAdSense } from '../utils/adEngine';

export function useLazyAd() {
  const [shouldRender, setShouldRender] = useState(false);
  const [adBlocked, setAdBlocked] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldRender(true);
            initializeAdSense(); // Lazy load the global script
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '200px', // Preload 200px before the element enters the viewport
        threshold: 0.01
      }
    );

    observer.observe(containerRef.current);

    // AdBlocker Detection logic: check if the global adsbygoogle array gets challenged
    const checkAdBlock = setTimeout(() => {
      if (window.adsbygoogle === undefined || (window.adsbygoogle && window.adsbygoogle.length === 0 && !document.querySelector('ins.adsbygoogle iframe'))) {
        // Double check if resource loading of doubleclick/pagead failed
        fetch('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js', { mode: 'no-cors' })
          .catch(() => {
            setAdBlocked(true);
            console.warn('[AdBlocker] Active AdBlocker detected. Rendering fallback CTA.');
          });
      }
    }, 3000);

    return () => {
      observer.disconnect();
      clearTimeout(checkAdBlock);
    };
  }, []);

  return { containerRef, shouldRender, adBlocked };
}
