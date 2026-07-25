import { s as supabase } from "../entry-server.js";
import "react/jsx-runtime";
import "react";
import "react-dom/server";
import "react-router-dom/server.mjs";
import "react-helmet-async";
import "react-router-dom";
import "lucide-react";
import "@supabase/supabase-js";
const trackPageView = async (pagePath) => {
  try {
    const anonKey = "sb_publishable_XHDhqH6SkyX3N81O2ywSWw_EqkCreUb";
    const isValidJwt = anonKey && anonKey.split(".").length === 3;
    if (!isValidJwt) {
      return;
    }
    const { error } = await supabase.from("page_views").insert([
      {
        path: pagePath,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        user_agent: navigator.userAgent,
        referrer: document.referrer || "direct"
      }
    ]);
    if (error) {
      console.warn('[AnalyticsTracker] Table "page_views" insert failed.');
    }
  } catch (err) {
  }
};
export {
  trackPageView
};
