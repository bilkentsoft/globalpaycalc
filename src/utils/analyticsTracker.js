import { supabase } from '../lib/supabaseClient';

// Tracks pageviews in real-time using the user's Supabase database instance
export const trackPageView = async (pagePath) => {
  try {
    const { error } = await supabase.from('page_views').insert([
      {
        path: pagePath,
        timestamp: new Date().toISOString(),
        user_agent: navigator.userAgent,
        referrer: document.referrer || 'direct'
      }
    ]);
    if (error) {
      console.warn('[AnalyticsTracker] Table "page_views" not found in Supabase. Run SQL setup script to enable live analytics.');
    }
  } catch (err) {
    console.error('[AnalyticsTracker] Log error:', err);
  }
};
