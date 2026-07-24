import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { Globe, DollarSign, CheckCircle2, XCircle } from "lucide-react";
import { c as calcTranslations } from "./calculatorTranslations-B446MKlw.js";
const nomadVisaRequirements = [
  { id: "ES", country: "Spain", visaName: "Digital Nomad Visa", flag: "🇪🇸", minMonthlyIncomeUsd: 2900, minSavingsUsd: 0, taxPerk: "Beckham Law 24% option" },
  { id: "PT", country: "Portugal", visaName: "D8 Digital Nomad Visa", flag: "🇵🇹", minMonthlyIncomeUsd: 3600, minSavingsUsd: 11e3, taxPerk: "IFICI Tax Scheme" },
  { id: "AE", country: "Dubai / UAE", visaName: "Work Remotely Visa", flag: "🇦🇪", minMonthlyIncomeUsd: 3500, minSavingsUsd: 0, taxPerk: "0% Personal Income Tax" },
  { id: "JP", country: "Japan", visaName: "Digital Nomad Visa", flag: "🇯🇵", minMonthlyIncomeUsd: 5500, minSavingsUsd: 0, taxPerk: "6 Months Tax Exempt" },
  { id: "CR", country: "Costa Rica", visaName: "Estancia Digital Nomad", flag: "🇨🇷", minMonthlyIncomeUsd: 3e3, minSavingsUsd: 0, taxPerk: "100% Tax Exempt Income" },
  { id: "GR", country: "Greece", visaName: "Digital Nomad Visa", flag: "🇬🇷", minMonthlyIncomeUsd: 3800, minSavingsUsd: 0, taxPerk: "50% Income Tax Cut" },
  { id: "IT", country: "Italy", visaName: "Digital Nomad Visa", flag: "🇮🇹", minMonthlyIncomeUsd: 3100, minSavingsUsd: 0, taxPerk: "Impatriati 50-70% Cut" },
  { id: "EE", country: "Estonia", visaName: "Digital Nomad Visa", flag: "🇪🇪", minMonthlyIncomeUsd: 4800, minSavingsUsd: 0, taxPerk: "E-Residency Ecosystem" }
];
function checkNomadVisaEligibility(monthlyIncomeUsd = 4e3) {
  const eligibleVisas = nomadVisaRequirements.filter((v) => monthlyIncomeUsd >= v.minMonthlyIncomeUsd);
  const ineligibleVisas = nomadVisaRequirements.filter((v) => monthlyIncomeUsd < v.minMonthlyIncomeUsd);
  return {
    monthlyIncomeUsd,
    totalCount: nomadVisaRequirements.length,
    eligibleCount: eligibleVisas.length,
    eligibleVisas,
    ineligibleVisas
  };
}
function NomadVisaCalculator({ lang = "en" }) {
  const [monthlyIncome, setMonthlyIncome] = useState(3800);
  const tCalc = calcTranslations[lang] || calcTranslations["en"];
  const result = checkNomadVisaEligibility(monthlyIncome);
  return /* @__PURE__ */ jsxs("div", { className: "space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-3xl mx-auto space-y-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold", children: [
        /* @__PURE__ */ jsx(Globe, { className: "w-3.5 h-3.5" }),
        /* @__PURE__ */ jsx("span", { children: tCalc.visaBadge })
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-extrabold text-white tracking-tight", children: tCalc.visaTitle }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-sm leading-relaxed", children: tCalc.visaDesc })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "glass-card p-6 sm:p-8 rounded-3xl border-slate-800 space-y-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-xl mx-auto space-y-2", children: [
        /* @__PURE__ */ jsxs("label", { className: "text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center justify-center space-x-1", children: [
          /* @__PURE__ */ jsx(DollarSign, { className: "w-4 h-4 text-emerald-400" }),
          /* @__PURE__ */ jsx("span", { children: tCalc.monthlyIncomeLabel })
        ] }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "number",
            value: monthlyIncome,
            onChange: (e) => setMonthlyIncome(Number(e.target.value)),
            className: "w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-4 text-white font-bold text-2xl text-center focus:border-emerald-500 outline-none"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-slate-400 uppercase tracking-wider", children: tCalc.eligibleVisasHeader }),
        /* @__PURE__ */ jsx("div", { className: "text-4xl font-black text-emerald-400 mt-1", children: tCalc.eligibleVisasCount.replace("{count}", result.eligibleCount).replace("{total}", result.totalCount) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 pt-2", children: nomadVisaRequirements.map((visa) => {
        const isEligible = monthlyIncome >= visa.minMonthlyIncomeUsd;
        return /* @__PURE__ */ jsxs(
          "div",
          {
            className: `p-5 rounded-2xl border transition flex items-center justify-between ${isEligible ? "bg-gradient-to-r from-emerald-950/30 to-slate-900 border-emerald-500/40" : "bg-slate-900/50 border-slate-800 opacity-60"}`,
            children: [
              /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-xl", children: visa.flag }),
                  /* @__PURE__ */ jsxs("span", { className: "font-extrabold text-white text-base", children: [
                    visa.country,
                    " ",
                    visa.visaName
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "text-xs text-slate-400", children: [
                  tCalc.requiredIncome,
                  ": ",
                  /* @__PURE__ */ jsxs("strong", { className: "text-slate-200", children: [
                    "$",
                    visa.minMonthlyIncomeUsd.toLocaleString(),
                    " / ",
                    lang === "tr" ? "ay" : "mo"
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "text-[11px] text-emerald-400 font-medium", children: [
                  tCalc.visaPerks,
                  ": ",
                  visa.taxPerk
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { children: isEligible ? /* @__PURE__ */ jsxs("span", { className: "px-3 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30 flex items-center space-x-1", children: [
                /* @__PURE__ */ jsx(CheckCircle2, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ jsx("span", { children: tCalc.eligibleStatus })
              ] }) : /* @__PURE__ */ jsxs("span", { className: "px-3 py-1.5 rounded-full bg-slate-800 text-slate-400 text-xs font-medium flex items-center space-x-1", children: [
                /* @__PURE__ */ jsx(XCircle, { className: "w-3.5 h-3.5 text-rose-400" }),
                /* @__PURE__ */ jsx("span", { children: tCalc.ineligibleStatus })
              ] }) })
            ]
          },
          visa.id
        );
      }) })
    ] })
  ] });
}
export {
  NomadVisaCalculator as default
};
