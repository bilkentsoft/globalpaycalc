import { jsxs, jsx } from "react/jsx-runtime";
import "react";
import { Helmet } from "react-helmet-async";
import { Shield, FileText, Info, Mail } from "lucide-react";
import { g as getTranslation } from "../entry-server.js";
import "react-dom/server";
import "react-router-dom/server.mjs";
import "react-router-dom";
import "@supabase/supabase-js";
const PrivacyPolicy = ({ lang = "en" }) => {
  const t = (path) => getTranslation(lang, path);
  return /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto py-12 px-6", children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsxs("title", { children: [
        t("legal.privacy.title"),
        " | GlobalPayCalc"
      ] }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: t("legal.privacy.desc") })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3 mb-8", children: [
      /* @__PURE__ */ jsx(Shield, { className: "w-8 h-8 text-brand-500" }),
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-black text-white", children: t("legal.privacy.title") })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "prose prose-invert max-w-none text-slate-300 space-y-6", children: [
      /* @__PURE__ */ jsxs("p", { children: [
        t("legal.lastUpdated"),
        ": ",
        (/* @__PURE__ */ new Date()).toLocaleDateString()
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white mt-8", children: t("legal.privacy.h1") }),
      /* @__PURE__ */ jsx("p", { children: t("legal.privacy.p1") }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white mt-8", children: t("legal.privacy.h2") }),
      /* @__PURE__ */ jsx("p", { children: t("legal.privacy.p2") }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white mt-8", children: t("legal.privacy.h3") }),
      /* @__PURE__ */ jsx("p", { children: t("legal.privacy.p3") }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white mt-8", children: t("legal.privacy.h4") }),
      /* @__PURE__ */ jsx("p", { children: t("legal.privacy.p4") })
    ] })
  ] });
};
const TermsOfService = ({ lang = "en" }) => {
  const t = (path) => getTranslation(lang, path);
  return /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto py-12 px-6", children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsxs("title", { children: [
        t("legal.terms.title"),
        " | GlobalPayCalc"
      ] }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: t("legal.terms.desc") })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3 mb-8", children: [
      /* @__PURE__ */ jsx(FileText, { className: "w-8 h-8 text-brand-500" }),
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-black text-white", children: t("legal.terms.title") })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "prose prose-invert max-w-none text-slate-300 space-y-6", children: [
      /* @__PURE__ */ jsxs("p", { children: [
        t("legal.lastUpdated"),
        ": ",
        (/* @__PURE__ */ new Date()).toLocaleDateString()
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white mt-8", children: t("legal.terms.h1") }),
      /* @__PURE__ */ jsx("p", { children: t("legal.terms.p1") }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white mt-8", children: t("legal.terms.h2") }),
      /* @__PURE__ */ jsx("p", { children: t("legal.terms.p2") }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white mt-8", children: t("legal.terms.h3") }),
      /* @__PURE__ */ jsx("p", { children: t("legal.terms.p3") })
    ] })
  ] });
};
const AboutUs = ({ lang = "en" }) => {
  const t = (path) => getTranslation(lang, path);
  return /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto py-12 px-6", children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsxs("title", { children: [
        t("legal.about.title"),
        " | GlobalPayCalc"
      ] }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: t("legal.about.desc") })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3 mb-8", children: [
      /* @__PURE__ */ jsx(Info, { className: "w-8 h-8 text-brand-500" }),
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-black text-white", children: t("legal.about.title") })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "prose prose-invert max-w-none text-slate-300 space-y-6", children: [
      /* @__PURE__ */ jsx("p", { className: "text-xl", children: t("legal.about.intro") }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white mt-8", children: t("legal.about.h1") }),
      /* @__PURE__ */ jsx("p", { children: t("legal.about.p1") }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white mt-8", children: t("legal.about.h2") }),
      /* @__PURE__ */ jsx("p", { children: t("legal.about.p2") })
    ] })
  ] });
};
const Contact = ({ lang = "en" }) => {
  const t = (path) => getTranslation(lang, path);
  return /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto py-12 px-6", children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsxs("title", { children: [
        t("legal.contact.title"),
        " | GlobalPayCalc"
      ] }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: t("legal.contact.desc") })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3 mb-8", children: [
      /* @__PURE__ */ jsx(Mail, { className: "w-8 h-8 text-brand-500" }),
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-black text-white", children: t("legal.contact.title") })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "glass-card p-8 rounded-2xl border-slate-800", children: [
      /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-6", children: t("legal.contact.intro") }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3 text-slate-300", children: [
          /* @__PURE__ */ jsx(Mail, { className: "w-5 h-5 text-brand-400" }),
          /* @__PURE__ */ jsxs("span", { children: [
            "Email: ",
            /* @__PURE__ */ jsx("a", { href: "mailto:support@globalpaycalc.com", className: "text-brand-400 hover:underline", children: "support@globalpaycalc.com" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-400 mt-8", children: t("legal.contact.response") })
      ] })
    ] })
  ] });
};
export {
  AboutUs,
  Contact,
  PrivacyPolicy,
  TermsOfService
};
