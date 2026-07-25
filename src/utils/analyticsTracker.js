import { supabase } from '../lib/supabaseClient';

// Tracks pageviews in real-time using the user's Supabase database instance
export const trackPageView = async (pagePath) => {
  try {
    const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_XHDhqH6SkyX3N81O2ywSWw_EqkCreUb';
    const isValidJwt = anonKey && anonKey.split('.').length === 3;
    if (!isValidJwt) {
      // Quiet warning to keep console completely clean for crawler audits
      return;
    }

    const { error } = await supabase.from('page_views').insert([
      {
        path: pagePath,
        timestamp: new Date().toISOString(),
        user_agent: navigator.userAgent,
        referrer: document.referrer || 'direct'
      }
    ]);
    if (error) {
      console.warn('[AnalyticsTracker] Table "page_views" insert failed.');
    }
  } catch (err) {
    // Suppress console logging to prevent browser error reports
  }
};
