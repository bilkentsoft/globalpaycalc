import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { TrendingDown } from "lucide-react";
import { c as calcTranslations } from "./calculatorTranslations-B446MKlw.js";
const countryInflationRates = {
  US: { name: "United States", flag: "🇺🇸", rate: 3.2, currency: "USD", symbol: "$" },
  UK: { name: "United Kingdom", flag: "🇬🇧", rate: 3.8, currency: "GBP", symbol: "£" },
  DE: { name: "Germany", flag: "🇩🇪", rate: 2.7, currency: "EUR", symbol: "€" },
  TR: { name: "Turkey", flag: "🇹🇷", rate: 65, currency: "TRY", symbol: "₺" },
  IN: { name: "India", flag: "🇮🇳", rate: 5.1, currency: "INR", symbol: "₹" },
  AR: { name: "Argentina", rate: 140, flag: "🇦🇷", currency: "ARS", symbol: "ARS$" },
  BR: { name: "Brazil", rate: 4.2, flag: "🇧🇷", currency: "BRL", symbol: "R$" },
  CA: { name: "Canada", rate: 2.9, flag: "🇨🇦", currency: "CAD", symbol: "CA$" },
  AU: { name: "Australia", rate: 3.6, flag: "🇦🇺", currency: "AUD", symbol: "A$" },
  JP: { name: "Japan", rate: 2.5, flag: "🇯🇵", currency: "JPY", symbol: "¥" }
};
function calculateInflationImpact(salary = 8e4, countryCode = "US", customInflationRate = null, years = 1) {
  const country = countryInflationRates[countryCode] || countryInflationRates.US;
  const inflationRate = customInflationRate !== null ? customInflationRate : country.rate;
  const cumulativeInflationMultiplier = Math.pow(1 + inflationRate / 100, years);
  const realPurchasingPower = salary / cumulativeInflationMultiplier;
  const purchasingPowerLoss = salary - realPurchasingPower;
  const requiredSalary = salary * cumulativeInflationMultiplier;
  const requiredRaiseAmount = requiredSalary - salary;
  const requiredRaisePercent = ((cumulativeInflationMultiplier - 1) * 100).toFixed(1);
  return {
    salary,
    country,
    inflationRate,
    years,
    realPurchasingPower: Math.round(realPurchasingPower),
    purchasingPowerLoss: Math.round(purchasingPowerLoss),
    requiredSalary: Math.round(requiredSalary),
    requiredRaiseAmount: Math.round(requiredRaiseAmount),
    requiredRaisePercent: parseFloat(requiredRaisePercent)
  };
}
function InflationCalculator({ lang = "en" }) {
  const [salary, setSalary] = useState(75e3);
  const [selectedCountry, setSelectedCountry] = useState("US");
  const [customRate, setCustomRate] = useState("");
  const [years, setYears] = useState(1);
  const tCalc = calcTranslations[lang] || calcTranslations["en"];
  const parsedCustomRate = customRate !== "" ? Number(customRate) : null;
  const result = calculateInflationImpact(salary, selectedCountry, parsedCustomRate, years);
  return /* @__PURE__ */ jsxs("div", { className: "space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-3xl mx-auto space-y-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold", children: [
        /* @__PURE__ */ jsx(TrendingDown, { className: "w-3.5 h-3.5" }),
        /* @__PURE__ */ jsx("span", { children: tCalc.inflationBadge })
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-extrabold text-white tracking-tight", children: tCalc.inflationTitle }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-sm leading-relaxed", children: tCalc.inflationDesc })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "glass-card p-6 sm:p-8 rounded-3xl border-slate-800 space-y-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxs("label", { className: "text-xs font-bold text-slate-300 uppercase tracking-wider", children: [
            tCalc.currentSalaryLabel,
            " (",
            result.country.symbol,
            ")"
          ] }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "number",
              value: salary,
              onChange: (e) => setSalary(Number(e.target.value)),
              className: "w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white font-bold text-lg focus:border-amber-500 outline-none"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("label", { className: "text-xs font-bold text-slate-300 uppercase tracking-wider", children: tCalc.annualInflationLabel }),
          /* @__PURE__ */ jsx(
            "select",
            {
              value: selectedCountry,
              onChange: (e) => {
                setSelectedCountry(e.target.value);
                setCustomRate("");
              },
              className: "w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white font-bold text-base focus:border-amber-500 outline-none cursor-pointer",
              children: Object.entries(countryInflationRates).map(([code, c]) => /* @__PURE__ */ jsxs("option", { value: code, children: [
                c.flag,
                " ",
                c.name,
                " (%",
                c.rate,
                ")"
              ] }, code))
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("label", { className: "text-xs font-bold text-slate-300 uppercase tracking-wider", children: tCalc.projectionYearsLabel }),
          /* @__PURE__ */ jsxs(
            "select",
            {
              value: years,
              onChange: (e) => setYears(Number(e.target.value)),
              className: "w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white font-bold text-base focus:border-amber-500 outline-none cursor-pointer",
              children: [
                /* @__PURE__ */ jsx("option", { value: 1, children: tCalc.yearsHorizon.replace("{years}", 1) }),
                /* @__PURE__ */ jsx("option", { value: 2, children: tCalc.yearsHorizon.replace("{years}", 2) }),
                /* @__PURE__ */ jsx("option", { value: 3, children: tCalc.yearsHorizon.replace("{years}", 3) }),
                /* @__PURE__ */ jsx("option", { value: 5, children: tCalc.yearsHorizon.replace("{years}", 5) })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/60 p-4 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4", children: [
        /* @__PURE__ */ jsx("label", { className: "text-xs font-bold text-slate-300", children: lang === "tr" ? "Özel Enflasyon Oranı Gir (%):" : "Enter Custom Inflation Rate (%):" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "number",
            value: customRate,
            onChange: (e) => setCustomRate(e.target.value),
            placeholder: `e.g. ${result.country.rate}`,
            className: "bg-slate-950 border border-slate-800 rounded-xl px-3 py-1.5 text-white font-bold text-sm w-32 focus:border-amber-500 outline-none"
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-400", children: lang === "tr" ? "Girilirse ülkenin resmi oranı yerine kullanılır." : "If entered, overrides the official country rate." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-slate-400 uppercase tracking-wider", children: tCalc.realSalaryValue }),
          /* @__PURE__ */ jsxs("div", { className: "text-3xl font-black text-rose-400", children: [
            result.country.symbol,
            result.realPurchasingPower.toLocaleString()
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-[11px] text-slate-400", children: lang === "tr" ? `${years} yıl sonra bugünün parasıyla kalan gerçek değer.` : `Actual value in today's currency after ${years} year(s).` })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-slate-400 uppercase tracking-wider", children: tCalc.cumulativeLoss }),
          /* @__PURE__ */ jsxs("div", { className: "text-3xl font-black text-amber-400", children: [
            "-",
            result.country.symbol,
            result.purchasingPowerLoss.toLocaleString()
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-[11px] text-slate-400", children: lang === "tr" ? "Enflasyon nedeniyle eriyen satın alma gücü." : "Purchasing power eroded due to inflation." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-emerald-950/40 to-slate-900 p-6 rounded-2xl border border-emerald-500/30 space-y-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-emerald-400 uppercase tracking-wider", children: tCalc.requiredRaise }),
          /* @__PURE__ */ jsxs("div", { className: "text-3xl font-black text-emerald-400", children: [
            "%",
            result.requiredRaisePercent
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-[11px] text-slate-400", children: lang === "tr" ? "Maaşınızın erimemesi için yapılması gereken asgari zam." : "Minimum raise required to maintain standard of living." })
        ] })
      ] })
    ] })
  ] });
}
export {
  InflationCalculator as default
};
