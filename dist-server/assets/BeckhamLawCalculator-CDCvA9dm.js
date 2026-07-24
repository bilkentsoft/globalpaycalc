import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { Award } from "lucide-react";
import { c as calcTranslations } from "./calculatorTranslations-B446MKlw.js";
const expatRegimes = {
  ES_BECKHAM: { id: "ES_BECKHAM", name: "Spain (Beckham Law)", flag: "🇪🇸", flatTaxRate: 24, durationYears: 6, maxCap: 6e5 },
  PT_IFICI: { id: "PT_IFICI", name: "Portugal (NHR 2.0 / IFICI)", flag: "🇵🇹", flatTaxRate: 20, durationYears: 10, maxCap: 0 },
  IT_IMPATRIATI: { id: "IT_IMPATRIATI", name: "Italy (Rientro dei Cervelli - 50% Exemption)", flag: "🇮🇹", flatTaxRate: 21, durationYears: 5, maxCap: 0 },
  AE_DUBAI: { id: "AE_DUBAI", name: "Dubai / UAE (0% Income Tax)", flag: "🇦🇪", flatTaxRate: 0, durationYears: 99, maxCap: 0 },
  US_FEIE: { id: "US_FEIE", name: "US Expat FEIE ($126,500 Exclusion)", flag: "🇺🇸", flatTaxRate: 15, durationYears: 99, maxCap: 126500 }
};
function calculateBeckhamSavings(annualGrossSalary = 12e4, regimeId = "ES_BECKHAM", standardTaxRatePercent = 45) {
  const regime = expatRegimes[regimeId] || expatRegimes.ES_BECKHAM;
  const standardTaxAmount = annualGrossSalary * (standardTaxRatePercent / 100);
  const standardNetTakeHome = annualGrossSalary - standardTaxAmount;
  let expatTaxAmount = 0;
  if (regime.id === "US_FEIE") {
    const taxableAmount = Math.max(0, annualGrossSalary - regime.maxCap);
    expatTaxAmount = taxableAmount * 0.3;
  } else {
    expatTaxAmount = annualGrossSalary * (regime.flatTaxRate / 100);
  }
  const expatNetTakeHome = annualGrossSalary - expatTaxAmount;
  const annualTaxSavings = Math.max(0, expatTaxAmount < standardTaxAmount ? standardTaxAmount - expatTaxAmount : 0);
  const totalDurationSavings = annualTaxSavings * regime.durationYears;
  return {
    annualGrossSalary,
    regime,
    standardTaxRatePercent,
    standardTaxAmount: Math.round(standardTaxAmount),
    standardNetTakeHome: Math.round(standardNetTakeHome),
    expatTaxAmount: Math.round(expatTaxAmount),
    expatNetTakeHome: Math.round(expatNetTakeHome),
    annualTaxSavings: Math.round(annualTaxSavings),
    totalDurationSavings: Math.round(totalDurationSavings)
  };
}
function BeckhamLawCalculator({ lang = "en" }) {
  const [annualGross, setAnnualGross] = useState(13e4);
  const [selectedRegime, setSelectedRegime] = useState("ES_BECKHAM");
  const [standardTaxRate, setStandardTaxRate] = useState(45);
  const tCalc = calcTranslations[lang] || calcTranslations["en"];
  const result = calculateBeckhamSavings(annualGross, selectedRegime, standardTaxRate);
  return /* @__PURE__ */ jsxs("div", { className: "space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-3xl mx-auto space-y-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold", children: [
        /* @__PURE__ */ jsx(Award, { className: "w-3.5 h-3.5" }),
        /* @__PURE__ */ jsx("span", { children: tCalc.beckhamBadge })
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-extrabold text-white tracking-tight", children: tCalc.beckhamTitle }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-sm leading-relaxed", children: tCalc.beckhamDesc })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "glass-card p-6 sm:p-8 rounded-3xl border-slate-800 space-y-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("label", { className: "text-xs font-bold text-slate-300 uppercase tracking-wider", children: tCalc.grossSalaryLabel }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "number",
              value: annualGross,
              onChange: (e) => setAnnualGross(Number(e.target.value)),
              className: "w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white font-bold text-lg focus:border-rose-500 outline-none"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("label", { className: "text-xs font-bold text-slate-300 uppercase tracking-wider", children: tCalc.expatRegimeLabel }),
          /* @__PURE__ */ jsx(
            "select",
            {
              value: selectedRegime,
              onChange: (e) => setSelectedRegime(e.target.value),
              className: "w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white font-bold text-base focus:border-rose-500 outline-none cursor-pointer",
              children: Object.entries(expatRegimes).map(([code, r]) => /* @__PURE__ */ jsxs("option", { value: code, children: [
                r.flag,
                " ",
                r.name,
                " (%",
                r.flatTaxRate,
                ")"
              ] }, code))
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("label", { className: "text-xs font-bold text-slate-300 uppercase tracking-wider", children: tCalc.standardTaxRateLabel }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "number",
              value: standardTaxRate,
              onChange: (e) => setStandardTaxRate(Number(e.target.value)),
              className: "w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white font-bold text-lg focus:border-rose-500 outline-none"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/90 p-6 rounded-2xl border border-slate-800", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-slate-400 uppercase tracking-wider", children: tCalc.standardNet }),
          /* @__PURE__ */ jsxs("div", { className: "text-3xl font-black text-rose-400 mt-1", children: [
            "$",
            result.standardNetTakeHome.toLocaleString()
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-[11px] text-slate-400 mt-1", children: lang === "tr" ? "Muafiyet yasası olmadan elinize geçen net tutar." : "Take-home amount without the tax exemption scheme." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-emerald-950/40 to-slate-900 p-6 rounded-2xl border border-emerald-500/30", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-emerald-400 uppercase tracking-wider", children: tCalc.expatNet }),
          /* @__PURE__ */ jsxs("div", { className: "text-3xl font-black text-emerald-400 mt-1", children: [
            "$",
            result.expatNetTakeHome.toLocaleString()
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-[11px] text-slate-400 mt-1", children: lang === "tr" ? `${result.regime.name} kapsamında elinize geçen net maaş.` : `Take-home pay under the ${result.regime.name} framework.` })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/90 p-6 rounded-2xl border border-slate-800", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-amber-400 uppercase tracking-wider", children: tCalc.annualSavings }),
          /* @__PURE__ */ jsxs("div", { className: "text-3xl font-black text-amber-400 mt-1", children: [
            "+$",
            result.annualTaxSavings.toLocaleString()
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-[11px] text-slate-400 mt-1", children: lang === "tr" ? `${result.regime.durationYears} yıllık toplam: $${result.totalDurationSavings.toLocaleString()}` : `${result.regime.durationYears}-year total: $${result.totalDurationSavings.toLocaleString()}` })
        ] })
      ] })
    ] })
  ] });
}
export {
  BeckhamLawCalculator as default
};
