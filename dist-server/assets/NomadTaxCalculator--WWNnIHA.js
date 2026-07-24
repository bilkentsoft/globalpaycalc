import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { Globe, DollarSign, Download, Code, Heart } from "lucide-react";
import { g as getTranslation } from "../entry-server.js";
import "react-dom/server";
import "react-router-dom/server.mjs";
import "react-helmet-async";
import "react-router-dom";
import "@supabase/supabase-js";
const countryTaxData = {
  US_CA: { name: "United States (California)", effTax: 0.3, pppIndex: 1, flag: "🇺🇸", currency: "USD" },
  US_TX: { name: "United States (Texas)", effTax: 0.2, pppIndex: 0.9, flag: "🇺🇸", currency: "USD" },
  US_NY: { name: "United States (New York)", effTax: 0.32, pppIndex: 1.1, flag: "🇺🇸", currency: "USD" },
  US_FL: { name: "United States (Florida)", effTax: 0.2, pppIndex: 0.92, flag: "🇺🇸", currency: "USD" },
  CA: { name: "Canada (Ontario)", effTax: 0.26, pppIndex: 0.92, flag: "🇨🇦", currency: "CAD" },
  UK: { name: "United Kingdom", effTax: 0.28, pppIndex: 0.88, flag: "🇬🇧", currency: "GBP" },
  DE: { name: "Germany", effTax: 0.38, pppIndex: 0.82, flag: "🇩🇪", currency: "EUR" },
  FR: { name: "France", effTax: 0.35, pppIndex: 0.8, flag: "🇫🇷", currency: "EUR" },
  IT: { name: "Italy", effTax: 0.3, pppIndex: 0.68, flag: "🇮🇹", currency: "EUR" },
  ES: { name: "Spain (Beckham Law)", effTax: 0.24, pppIndex: 0.62, flag: "🇪🇸", currency: "EUR" },
  PT: { name: "Portugal (NHR Nomad)", effTax: 0.2, pppIndex: 0.55, flag: "🇵🇹", currency: "EUR" },
  NL: { name: "Netherlands", effTax: 0.36, pppIndex: 0.88, flag: "🇳🇱", currency: "EUR" },
  CH: { name: "Switzerland", effTax: 0.18, pppIndex: 1.25, flag: "🇨🇭", currency: "CHF" },
  SE: { name: "Sweden", effTax: 0.32, pppIndex: 0.84, flag: "🇸🇪", currency: "SEK" },
  NO: { name: "Norway", effTax: 0.3, pppIndex: 1.02, flag: "🇳🇴", currency: "NOK" },
  DK: { name: "Denmark", effTax: 0.36, pppIndex: 0.98, flag: "🇩🇰", currency: "DKK" },
  FI: { name: "Finland", effTax: 0.3, pppIndex: 0.82, flag: "🇫🇮", currency: "EUR" },
  IE: { name: "Ireland", effTax: 0.28, pppIndex: 0.9, flag: "🇮🇪", currency: "EUR" },
  AT: { name: "Austria", effTax: 0.32, pppIndex: 0.8, flag: "🇦🇹", currency: "EUR" },
  BE: { name: "Belgium", effTax: 0.38, pppIndex: 0.82, flag: "🇧🇪", currency: "EUR" },
  PL: { name: "Poland", effTax: 0.18, pppIndex: 0.46, flag: "🇵🇱", currency: "PLN" },
  CZ: { name: "Czech Republic", effTax: 0.15, pppIndex: 0.52, flag: "🇨🇿", currency: "CZK" },
  HU: { name: "Hungary", effTax: 0.15, pppIndex: 0.44, flag: "🇭🇺", currency: "HUF" },
  RO: { name: "Romania", effTax: 0.1, pppIndex: 0.38, flag: "🇷🇴", currency: "RON" },
  BG: { name: "Bulgaria", effTax: 0.1, pppIndex: 0.35, flag: "🇧🇬", currency: "BGN" },
  GR: { name: "Greece", effTax: 0.22, pppIndex: 0.5, flag: "🇬🇷", currency: "EUR" },
  TR: { name: "Turkey (Remote Exemption)", effTax: 0.15, pppIndex: 0.38, flag: "🇹🇷", currency: "TRY" },
  AE: { name: "UAE (Dubai 0% Tax)", effTax: 0, pppIndex: 0.85, flag: "🇦🇪", currency: "AED" },
  SG: { name: "Singapore", effTax: 0.12, pppIndex: 0.95, flag: "🇸🇬", currency: "SGD" },
  JP: { name: "Japan", effTax: 0.22, pppIndex: 0.7, flag: "🇯🇵", currency: "JPY" },
  KR: { name: "South Korea", effTax: 0.2, pppIndex: 0.74, flag: "🇰🇷", currency: "KRW" },
  TW: { name: "Taiwan", effTax: 0.15, pppIndex: 0.65, flag: "🇹🇼", currency: "TWD" },
  AU: { name: "Australia", effTax: 0.28, pppIndex: 0.94, flag: "🇦🇺", currency: "AUD" },
  NZ: { name: "New Zealand", effTax: 0.24, pppIndex: 0.85, flag: "🇳🇿", currency: "NZD" },
  ZA: { name: "South Africa", effTax: 0.25, pppIndex: 0.36, flag: "🇿🇦", currency: "ZAR" },
  BR: { name: "Brazil", effTax: 0.2, pppIndex: 0.38, flag: "🇧🇷", currency: "BRL" },
  MX: { name: "Mexico", effTax: 0.2, pppIndex: 0.42, flag: "🇲🇽", currency: "MXN" },
  AR: { name: "Argentina", effTax: 0.22, pppIndex: 0.3, flag: "🇦🇷", currency: "ARS" },
  CO: { name: "Colombia", effTax: 0.15, pppIndex: 0.28, flag: "🇨🇴", currency: "COP" },
  CL: { name: "Chile", effTax: 0.15, pppIndex: 0.44, flag: "🇨🇱", currency: "CLP" },
  PE: { name: "Peru", effTax: 0.12, pppIndex: 0.32, flag: "🇵🇪", currency: "PEN" },
  CR: { name: "Costa Rica", effTax: 0.12, pppIndex: 0.48, flag: "🇨🇷", currency: "CRC" },
  TH: { name: "Thailand", effTax: 0.15, pppIndex: 0.36, flag: "🇹🇭", currency: "THB" },
  VN: { name: "Vietnam", effTax: 0.1, pppIndex: 0.3, flag: "🇻🇳", currency: "VND" },
  MY: { name: "Malaysia", effTax: 0.12, pppIndex: 0.36, flag: "🇲🇾", currency: "MYR" },
  PH: { name: "Philippines", effTax: 0.15, pppIndex: 0.32, flag: "🇵🇭", currency: "PHP" },
  IN: { name: "India", effTax: 0.18, pppIndex: 0.22, flag: "🇮🇳", currency: "INR" },
  ID: { name: "Indonesia (Bali)", effTax: 0.1, pppIndex: 0.32, flag: "🇮🇩", currency: "IDR" },
  HR: { name: "Croatia", effTax: 0.18, pppIndex: 0.5, flag: "🇭🇷", currency: "EUR" },
  CY: { name: "Cyprus", effTax: 0.12, pppIndex: 0.6, flag: "🇨🇾", currency: "EUR" },
  MT: { name: "Malta", effTax: 0.15, pppIndex: 0.65, flag: "🇲🇹", currency: "EUR" },
  EE: { name: "Estonia", effTax: 0.2, pppIndex: 0.6, flag: "🇪🇪", currency: "EUR" }
};
const calculateNomadTaxParity = (grossAnnualUSD, homeKey, targetKey) => {
  const home = countryTaxData[homeKey] || countryTaxData.US_CA;
  const target = countryTaxData[targetKey] || countryTaxData.ES;
  const homeNetAnnual = grossAnnualUSD * (1 - home.effTax);
  const homeNetMonthly = homeNetAnnual / 12;
  const targetNetAnnual = grossAnnualUSD * (1 - target.effTax);
  const targetNetMonthly = targetNetAnnual / 12;
  const pppMultiplier = target.pppIndex / home.pppIndex;
  const equivalentGrossUSD = grossAnnualUSD * pppMultiplier;
  const equivalentNetMonthly = equivalentGrossUSD * (1 - target.effTax) / 12;
  const purchasingPowerBoost = (targetNetMonthly / pppMultiplier / homeNetMonthly).toFixed(2);
  return {
    grossAnnualUSD,
    home: {
      ...home,
      netAnnual: homeNetAnnual,
      netMonthly: homeNetMonthly
    },
    target: {
      ...target,
      netAnnual: targetNetAnnual,
      netMonthly: targetNetMonthly
    },
    equivalentGrossUSD,
    equivalentNetMonthly,
    purchasingPowerBoost,
    monthlyGainUSD: targetNetMonthly - homeNetMonthly
  };
};
function NomadTaxCalculator({ lang = "en" }) {
  const t = (path) => getTranslation(lang, path);
  const [grossSalary, setGrossSalary] = useState(85e3);
  const [homeCountry, setHomeCountry] = useState("US_CA");
  const [targetCountry, setTargetCountry] = useState("ES");
  const [showEmbed, setShowEmbed] = useState(false);
  const result = calculateNomadTaxParity(grossSalary, homeCountry, targetCountry);
  const handleExportReport = () => {
    const reportText = `
--------------------------------------------------
GLOBAL REMOTE TAX PARITY REPORT
Generated by GlobalPayCalc.com (Universal Utility Engine)
--------------------------------------------------
Gross Salary: $${grossSalary.toLocaleString()} USD
Origin: ${result.home.flag} ${result.home.name} (Effective Tax: ${result.home.effTax * 100}%)
Destination: ${result.target.flag} ${result.target.name} (Effective Tax: ${result.target.effTax * 100}%)

Net Monthly (Origin): $${Math.round(result.home.netMonthly).toLocaleString()} USD
Net Monthly (Destination): $${Math.round(result.target.netMonthly).toLocaleString()} USD
Purchasing Power Index: ${result.purchasingPowerBoost}x
Equivalent Living Standard in Target: $${Math.round(result.equivalentNetMonthly).toLocaleString()}/mo

--------------------------------------------------
VERIFIED LINK: https://globalpaycalc.com
Powered by GlobalPayCalc.com - 100% Free & Client-Side
--------------------------------------------------
    `.trim();
    const element = document.createElement("a");
    const file = new Blob([reportText], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `GlobalPayCalc_Tax_Report_${homeCountry}_to_${targetCountry}.txt`;
    document.body.appendChild(element);
    element.click();
    element.remove();
  };
  const embedCode = `<iframe src="https://globalpaycalc.com" width="100%" height="700" style="border:1px solid #1e293b; border-radius:16px;" title="Remote Salary Parity Calculator"></iframe><p style="font-size:11px; text-align:center;">Powered by <a href="https://globalpaycalc.com" target="_blank" rel="dofollow">GlobalPayCalc.com</a></p>`;
  return /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-3xl mx-auto space-y-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold", children: [
        /* @__PURE__ */ jsx(Globe, { className: "w-3.5 h-3.5" }),
        /* @__PURE__ */ jsx("span", { children: t("salary.title") })
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-extrabold text-white tracking-tight", children: t("salary.title") }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-sm leading-relaxed", children: t("salary.subtitle") })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-start", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 glass-card p-6 sm:p-8 rounded-2xl space-y-6", children: [
        /* @__PURE__ */ jsxs("h3", { className: "text-lg font-bold text-white flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx(DollarSign, { className: "w-5 h-5 text-brand-400" }),
          /* @__PURE__ */ jsx("span", { children: t("salary.gross") })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-xs font-semibold", children: [
            /* @__PURE__ */ jsxs("label", { className: "text-slate-300", children: [
              t("salary.gross"),
              " (USD)"
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "text-brand-400 font-mono text-base font-bold", children: [
              "$",
              grossSalary.toLocaleString()
            ] })
          ] }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "range",
              min: "20000",
              max: "350000",
              step: "5000",
              value: grossSalary,
              onChange: (e) => setGrossSalary(Number(e.target.value)),
              className: "w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-500"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-[10px] text-slate-500 font-mono", children: [
            /* @__PURE__ */ jsx("span", { children: "$20,000" }),
            /* @__PURE__ */ jsx("span", { children: "$180,000" }),
            /* @__PURE__ */ jsx("span", { children: "$350,000" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("label", { className: "block text-xs font-semibold text-slate-300", children: t("salary.home") }),
          /* @__PURE__ */ jsx(
            "select",
            {
              value: homeCountry,
              onChange: (e) => setHomeCountry(e.target.value),
              className: "w-full bg-slate-900 border border-slate-700 text-slate-200 text-sm rounded-xl p-3 focus:ring-2 focus:ring-brand-500 focus:outline-none cursor-pointer font-medium",
              children: Object.entries(countryTaxData).map(([key, data]) => /* @__PURE__ */ jsxs("option", { value: key, children: [
                data.flag,
                " ",
                data.name,
                " (Tax: ",
                (data.effTax * 100).toFixed(0),
                "%)"
              ] }, key))
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("label", { className: "block text-xs font-semibold text-slate-300", children: t("salary.target") }),
          /* @__PURE__ */ jsx(
            "select",
            {
              value: targetCountry,
              onChange: (e) => setTargetCountry(e.target.value),
              className: "w-full bg-slate-900 border border-slate-700 text-slate-200 text-sm rounded-xl p-3 focus:ring-2 focus:ring-brand-500 focus:outline-none cursor-pointer font-medium",
              children: Object.entries(countryTaxData).map(([key, data]) => /* @__PURE__ */ jsxs("option", { value: key, children: [
                data.flag,
                " ",
                data.name,
                " (Tax: ",
                (data.effTax * 100).toFixed(0),
                "%)"
              ] }, key))
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "pt-2 flex flex-col sm:flex-row gap-2", children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: handleExportReport,
              className: "flex-1 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition flex items-center justify-center space-x-2 cursor-pointer border border-slate-700",
              children: [
                /* @__PURE__ */ jsx(Download, { className: "w-4 h-4 text-emerald-400" }),
                /* @__PURE__ */ jsx("span", { children: t("salary.downloadReport") })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => setShowEmbed(!showEmbed),
              className: "py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition flex items-center justify-center space-x-2 cursor-pointer border border-slate-700",
              children: [
                /* @__PURE__ */ jsx(Code, { className: "w-4 h-4 text-brand-400" }),
                /* @__PURE__ */ jsx("span", { children: t("salary.embed") })
              ]
            }
          )
        ] }),
        showEmbed && /* @__PURE__ */ jsxs("div", { className: "p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-[10px] text-slate-400 font-semibold block", children: t("salary.embedLabel") }),
          /* @__PURE__ */ jsx(
            "textarea",
            {
              readOnly: true,
              value: embedCode,
              onClick: (e) => e.target.select(),
              className: "w-full h-20 bg-slate-900 border border-slate-800 rounded-lg p-2 text-[10px] font-mono text-slate-300 focus:outline-none cursor-pointer"
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "text-[9px] text-slate-500", children: t("salary.embedNotice") })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "glass-card p-6 sm:p-8 rounded-2xl border-brand-500/30 relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute -top-12 -right-12 w-40 h-40 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-slate-800 pb-4 mb-6", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold uppercase tracking-wider text-slate-400", children: t("salary.netHome") }),
              /* @__PURE__ */ jsx("h4", { className: "text-xl font-bold text-white flex items-center space-x-2 mt-1", children: /* @__PURE__ */ jsxs("span", { children: [
                result.home.flag,
                " vs ",
                result.target.flag
              ] }) })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "text-right", children: /* @__PURE__ */ jsxs("span", { className: "text-xs font-medium text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20", children: [
              result.purchasingPowerBoost,
              "x ",
              t("salary.boost")
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "p-4 rounded-xl bg-slate-950/60 border border-slate-800", children: [
              /* @__PURE__ */ jsxs("div", { className: "text-xs text-slate-400 font-medium mb-1", children: [
                result.home.flag,
                " ",
                result.home.name
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "text-2xl font-extrabold text-white font-mono", children: [
                "$",
                Math.round(result.home.netMonthly).toLocaleString()
              ] }),
              /* @__PURE__ */ jsx("div", { className: "text-[11px] text-slate-500 mt-1", children: t("salary.netMonthlyAfterTax").replace("{tax}", (result.home.effTax * 100).toFixed(0)) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-4 rounded-xl bg-brand-950/40 border border-brand-500/30", children: [
              /* @__PURE__ */ jsxs("div", { className: "text-xs text-brand-300 font-medium mb-1", children: [
                result.target.flag,
                " ",
                result.target.name
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "text-2xl font-extrabold text-emerald-400 font-mono", children: [
                "$",
                Math.round(result.target.netMonthly).toLocaleString()
              ] }),
              /* @__PURE__ */ jsx("div", { className: "text-[11px] text-brand-300/70 mt-1", children: t("salary.netMonthlyAfterTax").replace("{tax}", (result.target.effTax * 100).toFixed(0)) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "glass-card p-6 rounded-2xl border-slate-800 space-y-4", children: [
          /* @__PURE__ */ jsxs("h4", { className: "text-xs font-bold text-white flex items-center space-x-2 uppercase tracking-wide", children: [
            /* @__PURE__ */ jsx(Heart, { className: "w-4 h-4 text-rose-500" }),
            /* @__PURE__ */ jsx("span", { children: t("salary.recommendedNomad") })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs", children: [
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "https://wise.prf.hn/click/camref:placeholder",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-brand-500/40 transition-all flex flex-col justify-between",
                children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("div", { className: "font-bold text-white", children: t("salary.wise") }),
                    /* @__PURE__ */ jsx("p", { className: "text-[10px] text-slate-400 mt-1", children: t("salary.wiseDesc") })
                  ] }),
                  /* @__PURE__ */ jsx("span", { className: "text-[10px] font-semibold text-brand-400 mt-2 block", children: t("salary.wiseCta") })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "https://safetywing.com?referralToken=placeholder",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-brand-500/40 transition-all flex flex-col justify-between",
                children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("div", { className: "font-bold text-white", children: t("salary.safetyWing") }),
                    /* @__PURE__ */ jsx("p", { className: "text-[10px] text-slate-400 mt-1", children: t("salary.safetyWingDesc") })
                  ] }),
                  /* @__PURE__ */ jsx("span", { className: "text-[10px] font-semibold text-brand-400 mt-2 block", children: t("salary.safetyWingCta") })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "https://revolut.ngru.net/placeholder",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-brand-500/40 transition-all flex flex-col justify-between",
                children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("div", { className: "font-bold text-white", children: t("salary.revolut") }),
                    /* @__PURE__ */ jsx("p", { className: "text-[10px] text-slate-400 mt-1", children: t("salary.revolutDesc") })
                  ] }),
                  /* @__PURE__ */ jsx("span", { className: "text-[10px] font-semibold text-brand-400 mt-2 block", children: t("salary.revolutCta") })
                ]
              }
            )
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  NomadTaxCalculator as default
};
