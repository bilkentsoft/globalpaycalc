import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { Building2 } from "lucide-react";
import { c as calcTranslations } from "./calculatorTranslations-B446MKlw.js";
function calculateEorBreakeven({
  employeeCount = 3,
  avgSalaryPerEmployee = 8e4,
  eorMonthlyFeePerSeat = 599,
  // Deel / Remote.com standard rate
  entityIncorporationCost = 5e3,
  // One-time setup
  entityAnnualComplianceCost = 8e3
  // Annual CPA, payroll software, legal
}) {
  const annualEorCost = employeeCount * eorMonthlyFeePerSeat * 12;
  const annualEntityCost = entityAnnualComplianceCost + entityIncorporationCost / 3;
  const breakevenEmployeeCount = Math.ceil((entityAnnualComplianceCost + entityIncorporationCost) / (eorMonthlyFeePerSeat * 12));
  const savingsUsingEor = annualEntityCost - annualEorCost;
  return {
    employeeCount,
    avgSalaryPerEmployee,
    eorMonthlyFeePerSeat,
    annualEorCost: Math.round(annualEorCost),
    annualEntityCost: Math.round(annualEntityCost),
    breakevenEmployeeCount,
    savingsUsingEor: Math.round(savingsUsingEor),
    recommendation: employeeCount >= breakevenEmployeeCount ? "INCORPORATE_LOCAL" : "USE_EOR"
  };
}
function EorCostCalculator({ lang = "en" }) {
  const [employeeCount, setEmployeeCount] = useState(3);
  const [avgSalary, setAvgSalary] = useState(85e3);
  const [eorFee, setEorFee] = useState(599);
  const tCalc = calcTranslations[lang] || calcTranslations["en"];
  const result = calculateEorBreakeven({
    employeeCount,
    avgSalaryPerEmployee: avgSalary,
    eorMonthlyFeePerSeat: eorFee
  });
  return /* @__PURE__ */ jsxs("div", { className: "space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-3xl mx-auto space-y-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold", children: [
        /* @__PURE__ */ jsx(Building2, { className: "w-3.5 h-3.5" }),
        /* @__PURE__ */ jsx("span", { children: tCalc.eorBadge })
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-extrabold text-white tracking-tight", children: tCalc.eorTitle }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-sm leading-relaxed", children: tCalc.eorDesc })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "glass-card p-6 sm:p-8 rounded-3xl border-slate-800 space-y-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("label", { className: "text-xs font-bold text-slate-300 uppercase tracking-wider", children: lang === "tr" ? "Yurtdışındaki Çalışan Sayısı" : "Number of Overseas Employees" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "number",
              value: employeeCount,
              onChange: (e) => setEmployeeCount(Number(e.target.value)),
              className: "w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white font-bold text-lg focus:border-purple-500 outline-none"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("label", { className: "text-xs font-bold text-slate-300 uppercase tracking-wider", children: lang === "tr" ? "Ortalama Çalışan Başı Yıllık Maaş ($)" : "Average Annual Salary per Employee ($)" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "number",
              value: avgSalary,
              onChange: (e) => setAvgSalary(Number(e.target.value)),
              className: "w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white font-bold text-lg focus:border-purple-500 outline-none"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("label", { className: "text-xs font-bold text-slate-300 uppercase tracking-wider", children: tCalc.eorMonthlyFeeLabel }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "number",
              value: eorFee,
              onChange: (e) => setEorFee(Number(e.target.value)),
              className: "w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white font-bold text-lg focus:border-purple-500 outline-none"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/90 p-6 rounded-2xl border border-slate-800", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-slate-400 uppercase tracking-wider", children: tCalc.eorAnnualCost }),
          /* @__PURE__ */ jsxs("div", { className: "text-3xl font-black text-purple-400 mt-1", children: [
            "$",
            result.annualEorCost.toLocaleString()
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-[11px] text-slate-400 mt-1", children: lang === "tr" ? `${employeeCount} çalışan için Deel/Remote.com maliyeti.` : `Deel/Remote.com cost for ${employeeCount} employees.` })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/90 p-6 rounded-2xl border border-slate-800", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-slate-400 uppercase tracking-wider", children: lang === "tr" ? "Tahmini Şirket Kurma/Uyum Maliyeti" : "Estimated Local Entity Cost" }),
          /* @__PURE__ */ jsxs("div", { className: "text-3xl font-black text-slate-200 mt-1", children: [
            "$",
            result.annualEntityCost.toLocaleString()
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-[11px] text-slate-400 mt-1", children: lang === "tr" ? "Hukuk, muhasebe ve yıllık mali beyanname giderleri." : "Legal, accountancy, and annual compliance overhead." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-emerald-950/40 to-slate-900 p-6 rounded-2xl border border-emerald-500/30", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-emerald-400 uppercase tracking-wider", children: lang === "tr" ? "Maliyet Karşılaştırma Kararı" : "Cost Recommendation" }),
          /* @__PURE__ */ jsx("div", { className: "text-2xl font-black text-emerald-400 mt-1", children: lang === "tr" ? `${result.breakevenEmployeeCount} Çalışan Sınırı` : `${result.breakevenEmployeeCount} Employee Threshold` }),
          /* @__PURE__ */ jsx("p", { className: "text-[11px] text-slate-400 mt-1", children: employeeCount >= result.breakevenEmployeeCount ? lang === "tr" ? "Kendi Şirketini Kurmak Daha Ekonomik!" : "Incorporating is more cost-effective!" : lang === "tr" ? "EOR Kullanmak Daha Avantajlı!" : "EOR service is more cost-effective!" })
        ] })
      ] })
    ] })
  ] });
}
export {
  EorCostCalculator as default
};
