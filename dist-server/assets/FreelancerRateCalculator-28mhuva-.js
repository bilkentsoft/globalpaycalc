import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { Clock, DollarSign } from "lucide-react";
import { c as calcTranslations } from "./calculatorTranslations-B446MKlw.js";
function calculateFreelancerRate({
  targetNetAnnual = 6e4,
  taxRatePercent = 25,
  monthlyExpenses = 500,
  // Software, equipment, CPA, insurance
  vacationWeeksPerYear = 4,
  billableHoursPerWeek = 25,
  // Reality of billable hours vs 40h workweek
  currency = "$"
}) {
  const annualExpenses = monthlyExpenses * 12;
  const taxFraction = Math.min(0.9, taxRatePercent / 100);
  const requiredGrossBeforeTax = (targetNetAnnual + annualExpenses) / (1 - taxFraction);
  const billableWeeks = Math.max(1, 52 - vacationWeeksPerYear);
  const totalAnnualBillableHours = billableWeeks * billableHoursPerWeek;
  const minHourlyRate = requiredGrossBeforeTax / totalAnnualBillableHours;
  const minDayRate = minHourlyRate * 8;
  const minMonthlyGross = requiredGrossBeforeTax / 12;
  const annualTaxAmount = requiredGrossBeforeTax - targetNetAnnual - annualExpenses;
  return {
    targetNetAnnual,
    annualExpenses,
    taxRatePercent,
    requiredGrossBeforeTax: Math.round(requiredGrossBeforeTax),
    annualTaxAmount: Math.round(annualTaxAmount),
    totalAnnualBillableHours: Math.round(totalAnnualBillableHours),
    minHourlyRate: parseFloat(minHourlyRate.toFixed(2)),
    minDayRate: Math.round(minDayRate),
    minMonthlyGross: Math.round(minMonthlyGross),
    currency
  };
}
function FreelancerRateCalculator({ lang = "en" }) {
  const [targetNetAnnual, setTargetNetAnnual] = useState(72e3);
  const [taxRatePercent, setTaxRatePercent] = useState(25);
  const [monthlyExpenses, setMonthlyExpenses] = useState(600);
  const [vacationWeeksPerYear, setVacationWeeksPerYear] = useState(4);
  const [billableHoursPerWeek, setBillableHoursPerWeek] = useState(25);
  const tCalc = calcTranslations[lang] || calcTranslations["en"];
  const result = calculateFreelancerRate({
    targetNetAnnual,
    taxRatePercent,
    monthlyExpenses,
    vacationWeeksPerYear,
    billableHoursPerWeek
  });
  return /* @__PURE__ */ jsxs("div", { className: "space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-3xl mx-auto space-y-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold", children: [
        /* @__PURE__ */ jsx(Clock, { className: "w-3.5 h-3.5" }),
        /* @__PURE__ */ jsx("span", { children: tCalc.freelancerBadge })
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-extrabold text-white tracking-tight", children: tCalc.freelancerTitle }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-sm leading-relaxed", children: tCalc.freelancerDesc })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "glass-card p-6 sm:p-8 rounded-3xl border-slate-800 space-y-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxs("label", { className: "text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center space-x-1", children: [
            /* @__PURE__ */ jsx(DollarSign, { className: "w-3.5 h-3.5 text-emerald-400" }),
            /* @__PURE__ */ jsx("span", { children: tCalc.targetNetLabel })
          ] }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "number",
              value: targetNetAnnual,
              onChange: (e) => setTargetNetAnnual(Number(e.target.value)),
              className: "w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white font-bold text-lg focus:border-emerald-500 outline-none"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("label", { className: "text-xs font-bold text-slate-300 uppercase tracking-wider", children: tCalc.averageTaxLabel }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "number",
              value: taxRatePercent,
              onChange: (e) => setTaxRatePercent(Number(e.target.value)),
              className: "w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white font-bold text-lg focus:border-emerald-500 outline-none"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("label", { className: "text-xs font-bold text-slate-300 uppercase tracking-wider", children: tCalc.fixedExpensesLabel }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "number",
              value: monthlyExpenses * 12,
              onChange: (e) => setMonthlyExpenses(Number(e.target.value) / 12),
              className: "w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white font-bold text-lg focus:border-emerald-500 outline-none"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-900/60 p-6 rounded-2xl border border-slate-800", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("label", { className: "text-xs font-bold text-slate-300 uppercase tracking-wider", children: lang === "tr" ? "Yıllık Tatil / İzin Süresi (Hafta)" : "Annual Vacation / Time-off (Weeks)" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "number",
              value: vacationWeeksPerYear,
              onChange: (e) => setVacationWeeksPerYear(Number(e.target.value)),
              className: "w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white font-bold outline-none focus:border-emerald-500"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("label", { className: "text-xs font-bold text-slate-300 uppercase tracking-wider", children: tCalc.weeklyBillableLabel }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "number",
              value: billableHoursPerWeek,
              onChange: (e) => setBillableHoursPerWeek(Number(e.target.value)),
              className: "w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white font-bold outline-none focus:border-emerald-500"
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "text-[11px] text-slate-400", children: lang === "tr" ? "Genellikle 40 saatin sadece 20-30 saati doğrudan faturalandırılabilir müşteri işidir." : "Typically, only 20-30 hours out of a 40-hour week are directly billable to clients." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-emerald-950/40 to-slate-900 p-6 rounded-2xl border border-emerald-500/30", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-emerald-400 uppercase tracking-wider", children: tCalc.hourlyRateResult }),
          /* @__PURE__ */ jsxs("div", { className: "text-4xl font-black text-white mt-1", children: [
            "$",
            result.minHourlyRate,
            " ",
            /* @__PURE__ */ jsxs("span", { className: "text-xs font-normal text-slate-400", children: [
              "/",
              lang === "tr" ? "saat" : "hr"
            ] })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-[11px] text-slate-400 mt-1", children: lang === "tr" ? "Giderleriniz ve vergileriniz düşüldükten sonra net hedefinizi sağlayan oran." : "Rate required to secure your target net after taxes and business overhead." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/90 p-6 rounded-2xl border border-slate-800", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-slate-400 uppercase tracking-wider", children: tCalc.dailyRateResult }),
          /* @__PURE__ */ jsxs("div", { className: "text-3xl font-black text-emerald-400 mt-1", children: [
            "$",
            result.minDayRate.toLocaleString(),
            " ",
            /* @__PURE__ */ jsxs("span", { className: "text-xs font-normal text-slate-400", children: [
              "/",
              lang === "tr" ? "gün" : "day"
            ] })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-[11px] text-slate-400 mt-1", children: lang === "tr" ? "Günlük sözleşmeler için vermeniz gereken fiyat." : "Rate to quote for day-based contract arrangements." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/90 p-6 rounded-2xl border border-slate-800", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-slate-400 uppercase tracking-wider", children: tCalc.annualGrossRequired }),
          /* @__PURE__ */ jsxs("div", { className: "text-3xl font-black text-white mt-1", children: [
            "$",
            result.requiredGrossBeforeTax.toLocaleString()
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-[11px] text-slate-400 mt-1", children: lang === "tr" ? "Yıllık fatura kesmeniz gereken toplam tutar." : "Total gross revenue you need to bill annually." })
        ] })
      ] })
    ] })
  ] });
}
export {
  FreelancerRateCalculator as default
};
