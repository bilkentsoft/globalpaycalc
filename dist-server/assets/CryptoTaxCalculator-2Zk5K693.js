import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { Cpu } from "lucide-react";
import { c as calcTranslations } from "./calculatorTranslations-B446MKlw.js";
const cryptoTaxJurisdictions = {
  US: { name: "United States", flag: "🇺🇸", incomeTaxRate: 28, capitalGainsShortTerm: 28, capitalGainsLongTerm: 15, currency: "$" },
  UK: { name: "United Kingdom", flag: "🇬🇧", incomeTaxRate: 40, capitalGainsShortTerm: 20, capitalGainsLongTerm: 20, currency: "£" },
  DE: { name: "Germany", flag: "🇩🇪", incomeTaxRate: 42, capitalGainsShortTerm: 42, capitalGainsLongTerm: 0, currency: "€" },
  // 0% after 1 year hold
  TR: { name: "Turkey", flag: "🇹🇷", incomeTaxRate: 35, capitalGainsShortTerm: 0, capitalGainsLongTerm: 0, currency: "₺" },
  AE: { name: "UAE / Dubai", flag: "🇦🇪", incomeTaxRate: 0, capitalGainsShortTerm: 0, capitalGainsLongTerm: 0, currency: "$" },
  SG: { name: "Singapore", flag: "🇸🇬", incomeTaxRate: 15, capitalGainsShortTerm: 0, capitalGainsLongTerm: 0, currency: "$" },
  PT: { name: "Portugal", flag: "🇵🇹", incomeTaxRate: 28, capitalGainsShortTerm: 28, capitalGainsLongTerm: 0, currency: "€" }
  // 0% after 365 days
};
function calculateCryptoSalaryTax(cryptoSalaryUsd = 9e4, countryCode = "US", holdingDays = 30) {
  const country = cryptoTaxJurisdictions[countryCode] || cryptoTaxJurisdictions.US;
  const incomeTaxAmount = cryptoSalaryUsd * (country.incomeTaxRate / 100);
  const netSalaryAfterIncomeTax = cryptoSalaryUsd - incomeTaxAmount;
  const isLongTerm = holdingDays >= 365;
  const capitalGainsRate = isLongTerm ? country.capitalGainsLongTerm : country.capitalGainsShortTerm;
  return {
    cryptoSalaryUsd,
    country,
    holdingDays,
    isLongTerm,
    incomeTaxRate: country.incomeTaxRate,
    capitalGainsRate,
    incomeTaxAmount: Math.round(incomeTaxAmount),
    netSalaryAfterIncomeTax: Math.round(netSalaryAfterIncomeTax)
  };
}
function CryptoTaxCalculator({ lang = "en" }) {
  const [salaryUsd, setSalaryUsd] = useState(96e3);
  const [selectedCountry, setSelectedCountry] = useState("US");
  const [holdingDays, setHoldingDays] = useState(30);
  const tCalc = calcTranslations[lang] || calcTranslations["en"];
  const result = calculateCryptoSalaryTax(salaryUsd, selectedCountry, holdingDays);
  return /* @__PURE__ */ jsxs("div", { className: "space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-3xl mx-auto space-y-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold", children: [
        /* @__PURE__ */ jsx(Cpu, { className: "w-3.5 h-3.5" }),
        /* @__PURE__ */ jsx("span", { children: tCalc.cryptoBadge })
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-extrabold text-white tracking-tight", children: tCalc.cryptoTitle }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-sm leading-relaxed", children: tCalc.cryptoDesc })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "glass-card p-6 sm:p-8 rounded-3xl border-slate-800 space-y-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("label", { className: "text-xs font-bold text-slate-300 uppercase tracking-wider", children: tCalc.annualCryptoSalary }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "number",
              value: salaryUsd,
              onChange: (e) => setSalaryUsd(Number(e.target.value)),
              className: "w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white font-bold text-lg focus:border-cyan-500 outline-none"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("label", { className: "text-xs font-bold text-slate-300 uppercase tracking-wider", children: tCalc.residenceCountry }),
          /* @__PURE__ */ jsx(
            "select",
            {
              value: selectedCountry,
              onChange: (e) => setSelectedCountry(e.target.value),
              className: "w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white font-bold text-base focus:border-cyan-500 outline-none cursor-pointer",
              children: Object.entries(cryptoTaxJurisdictions).map(([code, c]) => /* @__PURE__ */ jsxs("option", { value: code, children: [
                c.flag,
                " ",
                c.name,
                " (",
                lang === "tr" ? "Gelir Vergisi" : "Income Tax",
                " %",
                c.incomeTaxRate,
                ")"
              ] }, code))
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("label", { className: "text-xs font-bold text-slate-300 uppercase tracking-wider", children: tCalc.holdingDuration }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "number",
              value: holdingDays,
              onChange: (e) => setHoldingDays(Number(e.target.value)),
              className: "w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white font-bold text-lg focus:border-cyan-500 outline-none"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/90 p-6 rounded-2xl border border-slate-800", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-slate-400 uppercase tracking-wider", children: lang === "tr" ? "Tahakkuk Eden Gelir Vergisi" : "Income Tax Liability" }),
          /* @__PURE__ */ jsxs("div", { className: "text-3xl font-black text-rose-400 mt-1", children: [
            "$",
            result.incomeTaxAmount.toLocaleString()
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-[11px] text-slate-400 mt-1", children: lang === "tr" ? "Kripto alındığı andaki piyasa değeri üzerinden vergi." : "Tax based on the market value of crypto at the time of receipt." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-cyan-950/40 to-slate-900 p-6 rounded-2xl border border-cyan-500/30", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-cyan-400 uppercase tracking-wider", children: tCalc.netCryptoTakeHome }),
          /* @__PURE__ */ jsxs("div", { className: "text-3xl font-black text-white mt-1", children: [
            "$",
            result.netSalaryAfterIncomeTax.toLocaleString()
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-[11px] text-slate-400 mt-1", children: lang === "tr" ? "Net elinize geçen nakit eşdeğeri." : "Net equivalent cash received." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/90 p-6 rounded-2xl border border-slate-800", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-slate-400 uppercase tracking-wider", children: lang === "tr" ? "Sermaye Kazancı Vergi Rejimi" : "Capital Gains Tax Regime" }),
          /* @__PURE__ */ jsxs("div", { className: "text-2xl font-black text-amber-400 mt-1", children: [
            "%",
            result.capitalGainsRate,
            " ",
            /* @__PURE__ */ jsxs("span", { className: "text-xs font-normal text-slate-400", children: [
              "(",
              result.isLongTerm ? lang === "tr" ? "Uzun Vadeli" : "Long Term" : lang === "tr" ? "Kısa Vadeli" : "Short Term",
              ")"
            ] })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-[11px] text-slate-400 mt-1", children: lang === "tr" ? "Bozdurmadan önceki bekletme süresine göre oran." : "Rate based on holding duration before liquidation." })
        ] })
      ] })
    ] })
  ] });
}
export {
  CryptoTaxCalculator as default
};
