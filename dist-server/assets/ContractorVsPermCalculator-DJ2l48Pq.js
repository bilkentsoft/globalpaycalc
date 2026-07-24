import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { Briefcase, Info } from "lucide-react";
import { c as calcTranslations } from "./calculatorTranslations-B446MKlw.js";
function calculateContractorEquivalence({
  baseSalary = 1e5,
  ptoDays = 20,
  // Paid holidays + vacation
  healthInsuranceValue = 6e3,
  // Annual value of company health insurance
  retirementMatchPercent = 4,
  // Company pension/401k match %
  bonusPercent = 5,
  // Annual bonus %
  workingWeeksPerYear = 48,
  hoursPerWeek = 40,
  countryKey = "US"
}) {
  const ptoValue = baseSalary / 260 * ptoDays;
  const bonusValue = baseSalary * (bonusPercent / 100);
  const retirementValue = baseSalary * (retirementMatchPercent / 100);
  let employerTaxBurdenRate = 0.08;
  if (countryKey === "UK") employerTaxBurdenRate = 0.138;
  if (countryKey === "DE" || countryKey === "EU") employerTaxBurdenRate = 0.2;
  const employerTaxValue = baseSalary * employerTaxBurdenRate;
  const totalEmployeeValue = baseSalary + bonusValue + ptoValue + healthInsuranceValue + retirementValue;
  let selfEmploymentTaxExtra = 0.0765;
  if (countryKey === "UK") selfEmploymentTaxExtra = 0.09;
  if (countryKey === "DE") selfEmploymentTaxExtra = 0.12;
  const adminUnbilledOverheadRate = 0.15;
  const equipmentAndSoftwareAnnual = 3e3;
  const totalBillableHoursAnnual = (workingWeeksPerYear - ptoDays / 5) * hoursPerWeek * (1 - adminUnbilledOverheadRate);
  const requiredContractorGrossAnnual = totalEmployeeValue * (1 + selfEmploymentTaxExtra) + equipmentAndSoftwareAnnual;
  const minHourlyBillingRate = requiredContractorGrossAnnual / totalBillableHoursAnnual;
  const minMonthlyBillingRate = requiredContractorGrossAnnual / 12;
  const contractorMultiplier = requiredContractorGrossAnnual / baseSalary;
  return {
    baseSalary,
    totalEmployeeValue,
    breakdown: {
      ptoValue: Math.round(ptoValue),
      bonusValue: Math.round(bonusValue),
      healthInsuranceValue: Math.round(healthInsuranceValue),
      retirementValue: Math.round(retirementValue),
      employerTaxValue: Math.round(employerTaxValue)
    },
    contractor: {
      requiredGrossAnnual: Math.round(requiredContractorGrossAnnual),
      minMonthlyBillingRate: Math.round(minMonthlyBillingRate),
      minHourlyBillingRate: parseFloat(minHourlyBillingRate.toFixed(2)),
      totalBillableHoursAnnual: Math.round(totalBillableHoursAnnual),
      contractorMultiplier: parseFloat(contractorMultiplier.toFixed(2))
    }
  };
}
function ContractorVsPermCalculator({ lang = "en" }) {
  const [baseSalary, setBaseSalary] = useState(95e3);
  const [ptoDays, setPtoDays] = useState(20);
  const [healthInsuranceValue, setHealthInsuranceValue] = useState(6e3);
  const [retirementMatchPercent, setRetirementMatchPercent] = useState(4);
  const [bonusPercent, setBonusPercent] = useState(5);
  const [countryKey, setCountryKey] = useState("US");
  const tCalc = calcTranslations[lang] || calcTranslations["en"];
  const result = calculateContractorEquivalence({
    baseSalary,
    ptoDays,
    healthInsuranceValue,
    retirementMatchPercent,
    bonusPercent,
    countryKey
  });
  return /* @__PURE__ */ jsxs("div", { className: "space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-3xl mx-auto space-y-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold", children: [
        /* @__PURE__ */ jsx(Briefcase, { className: "w-3.5 h-3.5" }),
        /* @__PURE__ */ jsx("span", { children: tCalc.contractorBadge })
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-extrabold text-white tracking-tight", children: tCalc.contractorTitle }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-sm leading-relaxed", children: tCalc.contractorDesc })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "glass-card p-6 sm:p-8 rounded-3xl border-slate-800 space-y-8", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-5 bg-slate-900/60 p-6 rounded-2xl border border-slate-800", children: [
        /* @__PURE__ */ jsxs("h3", { className: "text-base font-bold text-white flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx(Briefcase, { className: "w-4 h-4 text-cyan-400" }),
          /* @__PURE__ */ jsx("span", { children: lang === "tr" ? "Tam Zamanlı Maaşlı Teklif (Employee)" : "Full-Time Salaried Offer (Employee)" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("label", { className: "text-xs font-semibold text-slate-300", children: tCalc.permSalaryLabel }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "number",
              value: baseSalary,
              onChange: (e) => setBaseSalary(Number(e.target.value)),
              className: "w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white font-bold focus:border-cyan-500 outline-none"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("label", { className: "text-xs font-semibold text-slate-300", children: tCalc.ptoDaysLabel }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "number",
              value: ptoDays,
              onChange: (e) => setPtoDays(Number(e.target.value)),
              className: "w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white font-bold focus:border-cyan-500 outline-none"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("label", { className: "text-xs font-semibold text-slate-300", children: lang === "tr" ? "Sağlık Sigortası Yıllık Değeri ($/Yıl)" : "Annual Health Insurance Value ($/Year)" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "number",
              value: healthInsuranceValue,
              onChange: (e) => setHealthInsuranceValue(Number(e.target.value)),
              className: "w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white font-bold focus:border-cyan-500 outline-none"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx("label", { className: "text-xs font-semibold text-slate-300", children: lang === "tr" ? "Emeklilik Katkısı (%)" : "Retirement Contribution (%)" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "number",
                value: retirementMatchPercent,
                onChange: (e) => setRetirementMatchPercent(Number(e.target.value)),
                className: "w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white font-bold focus:border-cyan-500 outline-none"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx("label", { className: "text-xs font-semibold text-slate-300", children: lang === "tr" ? "Yıllık Prim / Bonus (%)" : "Annual Bonus / Commission (%)" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "number",
                value: bonusPercent,
                onChange: (e) => setBonusPercent(Number(e.target.value)),
                className: "w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white font-bold focus:border-cyan-500 outline-none"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("label", { className: "text-xs font-semibold text-slate-300", children: lang === "tr" ? "Ülke / Bölge Kuralları" : "Country / Region Rules" }),
          /* @__PURE__ */ jsxs(
            "select",
            {
              value: countryKey,
              onChange: (e) => setCountryKey(e.target.value),
              className: "w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white font-bold focus:border-cyan-500 outline-none cursor-pointer",
              children: [
                /* @__PURE__ */ jsx("option", { value: "US", children: lang === "tr" ? "ABD (W-2 vs 1099 Contractor)" : "US (W-2 vs 1099 Contractor)" }),
                /* @__PURE__ */ jsx("option", { value: "UK", children: lang === "tr" ? "İngiltere (IR35 Inside vs Outside)" : "UK (IR35 Inside vs Outside)" }),
                /* @__PURE__ */ jsx("option", { value: "DE", children: lang === "tr" ? "Almanya & AB (Salaried vs Freelance)" : "Germany & EU (Salaried vs Freelance)" }),
                /* @__PURE__ */ jsx("option", { value: "EU", children: lang === "tr" ? "Küresel / Türkiye (Kadrolu vs Şahıs Şirketi)" : "Global / general (Salaried vs Freelance)" })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-5 bg-gradient-to-br from-cyan-950/30 to-brand-950/20 p-6 rounded-2xl border border-cyan-500/30 flex flex-col justify-between", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-base font-bold text-white", children: tCalc.contractorRateResult }),
            /* @__PURE__ */ jsxs("span", { className: "text-xs font-bold text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/20", children: [
              result.contractor.contractorMultiplier,
              "x ",
              lang === "tr" ? "Çarpan" : "Multiplier"
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/90 p-5 rounded-2xl border border-slate-800", children: [
              /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-slate-400 uppercase tracking-wider", children: tCalc.requiredHourly }),
              /* @__PURE__ */ jsxs("div", { className: "text-4xl font-black text-cyan-400 mt-1", children: [
                "$",
                result.contractor.minHourlyBillingRate,
                " ",
                /* @__PURE__ */ jsxs("span", { className: "text-xs text-slate-400 font-normal", children: [
                  "/",
                  lang === "tr" ? "saat" : "hr"
                ] })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-[11px] text-slate-400 mt-1", children: lang === "tr" ? `Yılda ortalama ${result.contractor.totalBillableHoursAnnual} faturalandırılabilir çalışma saatine göre.` : `Based on an average of ${result.contractor.totalBillableHoursAnnual} billable hours per year.` })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/80 p-4 rounded-xl border border-slate-800", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[11px] font-bold text-slate-400", children: lang === "tr" ? "Aylık Fatura" : "Monthly Billable" }),
                /* @__PURE__ */ jsxs("div", { className: "text-xl font-black text-white mt-1", children: [
                  "$",
                  result.contractor.minMonthlyBillingRate.toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/80 p-4 rounded-xl border border-slate-800", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[11px] font-bold text-slate-400", children: lang === "tr" ? "Yıllık Brüt Fatura" : "Annual Gross Billable" }),
                /* @__PURE__ */ jsxs("div", { className: "text-xl font-black text-emerald-400 mt-1", children: [
                  "$",
                  result.contractor.requiredGrossAnnual.toLocaleString()
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2 pt-2 border-t border-slate-800/80 text-xs", children: [
            /* @__PURE__ */ jsx("span", { className: "font-bold text-slate-300", children: lang === "tr" ? "Hesaba Katılan Yan Haklar Değeri:" : "Factored Benefits Value:" }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-2 text-slate-400", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                "• ",
                lang === "tr" ? "Ücretli İzin (PTO)" : "Paid Leave (PTO)",
                ": ",
                /* @__PURE__ */ jsxs("strong", { className: "text-slate-200", children: [
                  "$",
                  result.breakdown.ptoValue
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                "• ",
                lang === "tr" ? "Sağlık Sigortası" : "Health Insurance",
                ": ",
                /* @__PURE__ */ jsxs("strong", { className: "text-slate-200", children: [
                  "$",
                  result.breakdown.healthInsuranceValue
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                "• ",
                lang === "tr" ? "Emeklilik Katkısı" : "Retirement Match",
                ": ",
                /* @__PURE__ */ jsxs("strong", { className: "text-slate-200", children: [
                  "$",
                  result.breakdown.retirementValue
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                "• ",
                lang === "tr" ? "Bonus / Prim" : "Bonus / Comm",
                ": ",
                /* @__PURE__ */ jsxs("strong", { className: "text-slate-200", children: [
                  "$",
                  result.breakdown.bonusValue
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-[11px] text-slate-400 bg-slate-900/60 p-3 rounded-xl border border-slate-800 flex items-start space-x-2", children: [
          /* @__PURE__ */ jsx(Info, { className: "w-4 h-4 text-cyan-400 shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsx("span", { children: lang === "tr" ? `Contractor çalışanlar kendi muhasebe, bağkur, ekipman ve tatil günlerini kendileri ödediği için tam zamanlı maaşın en az ${result.contractor.contractorMultiplier} katı tutarında fatura kesmelidir.` : `Since contractors pay for their own accounting, taxes, gear, and vacation days, they should bill at least ${result.contractor.contractorMultiplier} times the full-time salaried baseline.` })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  ContractorVsPermCalculator as default
};
