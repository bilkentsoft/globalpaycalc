import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { Globe, DollarSign, PieChart, Download } from "lucide-react";
import { c as calcTranslations } from "./calculatorTranslations-B446MKlw.js";
const globalTaxCountries = {
  US_CA: { id: "US_CA", name: "United States (California)", flag: "🇺🇸", currency: "USD", symbol: "$", region: "US" },
  US_NY: { id: "US_NY", name: "United States (New York)", flag: "🇺🇸", currency: "USD", symbol: "$", region: "US" },
  US_TX: { id: "US_TX", name: "United States (Texas - No State Tax)", flag: "🇺🇸", currency: "USD", symbol: "$", region: "US" },
  US_FL: { id: "US_FL", name: "United States (Florida - No State Tax)", flag: "🇺🇸", currency: "USD", symbol: "$", region: "US" },
  US_WA: { id: "US_WA", name: "United States (Washington - No State Tax)", flag: "🇺🇸", currency: "USD", symbol: "$", region: "US" },
  UK: { id: "UK", name: "United Kingdom", flag: "🇬🇧", currency: "GBP", symbol: "£", region: "UK" },
  DE: { id: "DE", name: "Germany (Deutschland)", flag: "🇩🇪", currency: "EUR", symbol: "€", region: "DE" },
  TR: { id: "TR", name: "Turkey (Türkiye)", flag: "🇹🇷", currency: "TRY", symbol: "₺", region: "TR" },
  IN: { id: "IN", name: "India", flag: "🇮🇳", currency: "INR", symbol: "₹", region: "IN" },
  CA: { id: "CA", name: "Canada (Ontario)", flag: "🇨🇦", currency: "CAD", symbol: "CA$", region: "GENERIC", effTax: 0.28 },
  FR: { id: "FR", name: "France", flag: "🇫🇷", currency: "EUR", symbol: "€", region: "GENERIC", effTax: 0.35 },
  NL: { id: "NL", name: "Netherlands (30% Facility Option)", flag: "🇳🇱", currency: "EUR", symbol: "€", region: "GENERIC", effTax: 0.32 },
  ES: { id: "ES", name: "Spain (Beckham Law)", flag: "🇪🇸", currency: "EUR", symbol: "€", region: "GENERIC", effTax: 0.24 },
  AE: { id: "AE", name: "United Arab Emirates (Dubai - 0% Income Tax)", flag: "🇦🇪", currency: "AED", symbol: "AED", region: "GENERIC", effTax: 0 },
  SG: { id: "SG", name: "Singapore", flag: "🇸🇬", currency: "SGD", symbol: "S$", region: "GENERIC", effTax: 0.12 },
  AU: { id: "AU", name: "Australia", flag: "🇦🇺", currency: "AUD", symbol: "A$", region: "GENERIC", effTax: 0.28 },
  JP: { id: "JP", name: "Japan", flag: "🇯🇵", currency: "JPY", symbol: "¥", region: "GENERIC", effTax: 0.24 }
};
function calculateGlobalTakeHome(amount, countryKey = "US_CA", period = "annual") {
  const country = globalTaxCountries[countryKey] || globalTaxCountries.US_CA;
  const grossAnnual = period === "monthly" ? amount * 12 : amount;
  let incomeTax = 0;
  let socialSecurityTax = 0;
  let stateOrLocalTax = 0;
  let deductionsDetails = [];
  if (country.region === "US") {
    const ssCap = 168600;
    const ssTax = Math.min(grossAnnual, ssCap) * 0.062;
    const medicareTax = grossAnnual * 0.0145;
    const addlMedicare = grossAnnual > 2e5 ? (grossAnnual - 2e5) * 9e-3 : 0;
    socialSecurityTax = ssTax + medicareTax + addlMedicare;
    const stdDeduction = 14600;
    const taxableFed = Math.max(0, grossAnnual - stdDeduction);
    if (taxableFed <= 11600) {
      incomeTax = taxableFed * 0.1;
    } else if (taxableFed <= 47150) {
      incomeTax = 1160 + (taxableFed - 11600) * 0.12;
    } else if (taxableFed <= 100525) {
      incomeTax = 5426 + (taxableFed - 47150) * 0.22;
    } else if (taxableFed <= 191950) {
      incomeTax = 17168.5 + (taxableFed - 100525) * 0.24;
    } else if (taxableFed <= 243725) {
      incomeTax = 39110.5 + (taxableFed - 191950) * 0.32;
    } else if (taxableFed <= 609350) {
      incomeTax = 55678.5 + (taxableFed - 243725) * 0.35;
    } else {
      incomeTax = 183647.25 + (taxableFed - 609350) * 0.37;
    }
    if (countryKey === "US_CA") {
      stateOrLocalTax = grossAnnual * 0.08;
    } else if (countryKey === "US_NY") {
      stateOrLocalTax = grossAnnual * 0.065;
    } else {
      stateOrLocalTax = 0;
    }
    deductionsDetails = [
      { name: "Federal Income Tax", amount: incomeTax },
      { name: "FICA (Social Security & Medicare)", amount: socialSecurityTax },
      { name: "State Income Tax", amount: stateOrLocalTax }
    ];
  } else if (country.region === "UK") {
    const personalAllowance = 12570;
    const taxable = Math.max(0, grossAnnual - personalAllowance);
    if (taxable <= 37700) {
      incomeTax = taxable * 0.2;
    } else if (taxable <= 112570) {
      incomeTax = 7540 + (taxable - 37700) * 0.4;
    } else {
      incomeTax = 37488 + (taxable - 112570) * 0.45;
    }
    if (grossAnnual > 12570) {
      const mainNiBand = Math.min(grossAnnual, 50270) - 12570;
      const upperNiBand = Math.max(0, grossAnnual - 50270);
      socialSecurityTax = mainNiBand * 0.08 + upperNiBand * 0.02;
    }
    deductionsDetails = [
      { name: "UK Income Tax (PAYE)", amount: incomeTax },
      { name: "National Insurance (Class 1)", amount: socialSecurityTax }
    ];
  } else if (country.region === "DE") {
    socialSecurityTax = grossAnnual * 0.2015;
    const freeAmount = 11784;
    const taxable = Math.max(0, grossAnnual - freeAmount - socialSecurityTax * 0.5);
    if (taxable > 0) {
      if (taxable <= 66760) {
        incomeTax = taxable * 0.26;
      } else if (taxable <= 277825) {
        incomeTax = 17357 + (taxable - 66760) * 0.42;
      } else {
        incomeTax = 106004 + (taxable - 277825) * 0.45;
      }
      if (incomeTax > 18130) {
        stateOrLocalTax = incomeTax * 0.055;
      }
    }
    deductionsDetails = [
      { name: "Einkommensteuer (Income Tax)", amount: incomeTax },
      { name: "Sozialabgaben (Social Contributions)", amount: socialSecurityTax },
      { name: "Solidaritätszuschlag (Solidarity Surcharge)", amount: stateOrLocalTax }
    ];
  } else if (country.region === "TR") {
    socialSecurityTax = grossAnnual * 0.15;
    const taxBase = grossAnnual - socialSecurityTax;
    if (taxBase <= 11e4) {
      incomeTax = taxBase * 0.15;
    } else if (taxBase <= 23e4) {
      incomeTax = 16500 + (taxBase - 11e4) * 0.2;
    } else if (taxBase <= 87e4) {
      incomeTax = 40500 + (taxBase - 23e4) * 0.27;
    } else if (taxBase <= 3e6) {
      incomeTax = 213300 + (taxBase - 87e4) * 0.35;
    } else {
      incomeTax = 958800 + (taxBase - 3e6) * 0.4;
    }
    const minWageExemption = Math.min(incomeTax, 3e4);
    incomeTax = Math.max(0, incomeTax - minWageExemption);
    stateOrLocalTax = grossAnnual * 759e-5;
    deductionsDetails = [
      { name: "Gelir Vergisi (İstisna Düşülmüş)", amount: incomeTax },
      { name: "SGK İşçi Payı & İşsizlik (%15)", amount: socialSecurityTax },
      { name: "Damga Vergisi (%0.759)", amount: stateOrLocalTax }
    ];
  } else if (country.region === "IN") {
    const stdDeduct = 75e3;
    const taxable = Math.max(0, grossAnnual - stdDeduct);
    if (taxable <= 3e5) {
      incomeTax = 0;
    } else if (taxable <= 7e5) {
      incomeTax = (taxable - 3e5) * 0.05;
    } else if (taxable <= 1e6) {
      incomeTax = 2e4 + (taxable - 7e5) * 0.1;
    } else if (taxable <= 12e5) {
      incomeTax = 5e4 + (taxable - 1e6) * 0.15;
    } else if (taxable <= 15e5) {
      incomeTax = 8e4 + (taxable - 12e5) * 0.2;
    } else {
      incomeTax = 14e4 + (taxable - 15e5) * 0.3;
    }
    stateOrLocalTax = incomeTax * 0.04;
    socialSecurityTax = grossAnnual * 0.03;
    deductionsDetails = [
      { name: "Income Tax (New Regime)", amount: incomeTax },
      { name: "Health & Education Cess (4%)", amount: stateOrLocalTax },
      { name: "Provident Fund (PF Approx)", amount: socialSecurityTax }
    ];
  } else {
    const rate = country.effTax || 0.25;
    incomeTax = grossAnnual * rate;
    socialSecurityTax = grossAnnual * 0.05;
    deductionsDetails = [
      { name: "Income Tax (Estimated Effective)", amount: incomeTax },
      { name: "Social Security / Statutory Fees", amount: socialSecurityTax }
    ];
  }
  const totalDeductions = incomeTax + socialSecurityTax + stateOrLocalTax;
  const netAnnual = Math.max(0, grossAnnual - totalDeductions);
  const netMonthly = netAnnual / 12;
  const grossMonthly = grossAnnual / 12;
  const effectiveTaxRate = grossAnnual > 0 ? totalDeductions / grossAnnual * 100 : 0;
  return {
    country,
    grossAnnual,
    grossMonthly,
    netAnnual,
    netMonthly,
    totalDeductions,
    effectiveTaxRate: parseFloat(effectiveTaxRate.toFixed(1)),
    deductionsDetails
  };
}
function GlobalTakeHomeCalculator({ lang = "en" }) {
  const [grossAmount, setGrossAmount] = useState(9e4);
  const [selectedCountry, setSelectedCountry] = useState("US_CA");
  const [period, setPeriod] = useState("annual");
  const tCalc = calcTranslations[lang] || calcTranslations["en"];
  const result = calculateGlobalTakeHome(grossAmount, selectedCountry, period);
  const handleExportReport = () => {
    const reportText = `
--------------------------------------------------
GLOBAL NET TAKE-HOME PAY REPORT
Generated by GlobalPayCalc.com (Universal Utility Engine)
--------------------------------------------------
Country: ${result.country.flag} ${result.country.name}
Gross Salary (${period}): ${result.country.symbol}${grossAmount.toLocaleString()} ${result.country.currency}
Gross Annual: ${result.country.symbol}${Math.round(result.grossAnnual).toLocaleString()} ${result.country.currency}

Deductions Breakdown:
${result.deductionsDetails.map((d) => `- ${d.name}: ${result.country.symbol}${Math.round(d.amount).toLocaleString()}`).join("\n")}

Total Deductions: ${result.country.symbol}${Math.round(result.totalDeductions).toLocaleString()} (Effective Tax: ${result.effectiveTaxRate}%)
NET ANNUAL TAKE-HOME: ${result.country.symbol}${Math.round(result.netAnnual).toLocaleString()} ${result.country.currency}
NET MONTHLY TAKE-HOME: ${result.country.symbol}${Math.round(result.netMonthly).toLocaleString()} ${result.country.currency}

--------------------------------------------------
VERIFIED LINK: https://globalpaycalc.com/take-home
Powered by GlobalPayCalc.com - 100% Free & Client-Side
--------------------------------------------------
    `.trim();
    const element = document.createElement("a");
    const file = new Blob([reportText], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `TakeHome_Report_${selectedCountry}.txt`;
    document.body.appendChild(element);
    element.click();
    element.remove();
  };
  return /* @__PURE__ */ jsxs("div", { className: "space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-3xl mx-auto space-y-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold", children: [
        /* @__PURE__ */ jsx(Globe, { className: "w-3.5 h-3.5" }),
        /* @__PURE__ */ jsx("span", { children: tCalc.takeHomeBadge || (lang === "tr" ? "Dinamik Ülke Bazlı Vergi Motoru" : "Dynamic Country Tax Engine") })
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-extrabold text-white tracking-tight", children: lang === "tr" ? "Global Net Maaş ve Vergi Hesaplayıcı" : "Global Net Take-Home Salary & Tax Calculator" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-sm leading-relaxed", children: lang === "tr" ? "ABD (Federal + Eyalet + FICA), İngiltere, Almanya, Türkiye ve 40+ ülkenin vergi kesintilerini hesaplayın." : "Calculate net take-home salary after federal/state income tax, social security, and FICA deductions across 40+ countries." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "glass-card p-6 sm:p-8 rounded-3xl border-slate-800 space-y-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxs("label", { className: "text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center space-x-1", children: [
            /* @__PURE__ */ jsx(DollarSign, { className: "w-3.5 h-3.5 text-brand-400" }),
            /* @__PURE__ */ jsx("span", { children: lang === "tr" ? `Brüt Maaş Tutarı (${result.country.currency})` : `Gross Salary Amount (${result.country.currency})` })
          ] }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "number",
              value: grossAmount,
              onChange: (e) => setGrossAmount(Number(e.target.value)),
              className: "w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white font-bold text-lg focus:outline-none focus:border-brand-500 transition",
              placeholder: "90000"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("label", { className: "text-xs font-bold text-slate-300 uppercase tracking-wider", children: lang === "tr" ? "Maaş Dönemi" : "Salary Period" }),
          /* @__PURE__ */ jsxs(
            "select",
            {
              value: period,
              onChange: (e) => setPeriod(e.target.value),
              className: "w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white font-bold text-base focus:outline-none focus:border-brand-500 transition cursor-pointer",
              children: [
                /* @__PURE__ */ jsx("option", { value: "annual", children: lang === "tr" ? "Yıllık Brüt" : "Annual Gross" }),
                /* @__PURE__ */ jsx("option", { value: "monthly", children: lang === "tr" ? "Aylık Brüt" : "Monthly Gross" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("label", { className: "text-xs font-bold text-slate-300 uppercase tracking-wider", children: lang === "tr" ? "Ülke / Eyalet Mevzuatı" : "Country / State Tax Code" }),
          /* @__PURE__ */ jsx(
            "select",
            {
              value: selectedCountry,
              onChange: (e) => setSelectedCountry(e.target.value),
              className: "w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white font-bold text-base focus:outline-none focus:border-brand-500 transition cursor-pointer",
              children: Object.values(globalTaxCountries).map((c) => /* @__PURE__ */ jsxs("option", { value: c.id, children: [
                c.flag,
                " ",
                c.name,
                " (",
                c.currency,
                ")"
              ] }, c.id))
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 pt-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/80 border border-slate-800 p-6 rounded-2xl space-y-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-slate-400 uppercase tracking-wider", children: tCalc.netCryptoTakeHome || (lang === "tr" ? "Aylık Ele Geçen Net" : "Net Monthly") }),
          /* @__PURE__ */ jsxs("div", { className: "text-3xl font-black text-emerald-400", children: [
            result.country.symbol,
            Math.round(result.netMonthly).toLocaleString(),
            " ",
            /* @__PURE__ */ jsxs("span", { className: "text-xs font-normal text-slate-400", children: [
              "/",
              lang === "tr" ? "ay" : "mo"
            ] })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-[11px] text-slate-400", children: lang === "tr" ? "Vergi ve sigorta kesintileri düşüldükten sonra net tutar." : "Net take-home amount after all statutory deductions." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/80 border border-slate-800 p-6 rounded-2xl space-y-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-slate-400 uppercase tracking-wider", children: tCalc.standardNet || (lang === "tr" ? "Yıllık Ele Geçen Net" : "Net Annual") }),
          /* @__PURE__ */ jsxs("div", { className: "text-3xl font-black text-white", children: [
            result.country.symbol,
            Math.round(result.netAnnual).toLocaleString()
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-[11px] text-slate-400", children: lang === "tr" ? "Yıllık toplam harcanabilir net bütçeniz." : "Your total annual disposable net income." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/80 border border-slate-800 p-6 rounded-2xl space-y-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-slate-400 uppercase tracking-wider", children: tCalc.totalTaxLiab || (lang === "tr" ? "Efektif Vergi Oranı" : "Effective Tax Rate") }),
          /* @__PURE__ */ jsxs("div", { className: "text-3xl font-black text-rose-400", children: [
            "%",
            result.effectiveTaxRate
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-[11px] text-slate-400", children: lang === "tr" ? "Brüt gelirden yapılan toplam yasal kesinti oranı." : "Overall statutory deductions rate from your gross income." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4 pt-4 border-t border-slate-800", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("h3", { className: "text-sm font-bold text-white flex items-center space-x-2", children: [
            /* @__PURE__ */ jsx(PieChart, { className: "w-4 h-4 text-brand-400" }),
            /* @__PURE__ */ jsx("span", { children: lang === "tr" ? `Yasal Kesinti ve Vergi Detayları (${result.country.name})` : `Deduction & Tax Details (${result.country.name})` })
          ] }),
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: handleExportReport,
              className: "px-3 py-1.5 rounded-lg bg-brand-500/10 border border-brand-500/20 text-brand-300 hover:bg-brand-500/20 text-xs font-bold transition flex items-center space-x-1.5",
              children: [
                /* @__PURE__ */ jsx(Download, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ jsx("span", { children: lang === "tr" ? "Raporu İndir (.txt)" : "Download Report (.txt)" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left border-collapse", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-800 text-xs font-bold text-slate-400 uppercase", children: [
            /* @__PURE__ */ jsx("th", { className: "py-3 px-4", children: lang === "tr" ? "Kesinti Kalemi" : "Deduction Item" }),
            /* @__PURE__ */ jsx("th", { className: "py-3 px-4 text-right", children: lang === "tr" ? "Yıllık Tutar" : "Annual Amount" }),
            /* @__PURE__ */ jsx("th", { className: "py-3 px-4 text-right", children: lang === "tr" ? "Oran" : "Rate" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-slate-800/50 text-sm", children: [
            result.deductionsDetails.map((d, idx) => /* @__PURE__ */ jsxs("tr", { className: "hover:bg-slate-800/20 transition", children: [
              /* @__PURE__ */ jsx("td", { className: "py-3 px-4 font-semibold text-slate-200", children: d.name }),
              /* @__PURE__ */ jsxs("td", { className: "py-3 px-4 text-right font-mono text-rose-300", children: [
                "-",
                result.country.symbol,
                Math.round(d.amount).toLocaleString()
              ] }),
              /* @__PURE__ */ jsxs("td", { className: "py-3 px-4 text-right font-mono text-slate-400", children: [
                "%",
                result.grossAnnual > 0 ? (d.amount / result.grossAnnual * 100).toFixed(1) : 0
              ] })
            ] }, idx)),
            /* @__PURE__ */ jsxs("tr", { className: "bg-slate-900/50 font-bold border-t border-slate-700", children: [
              /* @__PURE__ */ jsx("td", { className: "py-3 px-4 text-white", children: lang === "tr" ? "Toplam Yasal Kesintiler" : "Total Deductions" }),
              /* @__PURE__ */ jsxs("td", { className: "py-3 px-4 text-right text-rose-400 font-mono", children: [
                "-",
                result.country.symbol,
                Math.round(result.totalDeductions).toLocaleString()
              ] }),
              /* @__PURE__ */ jsxs("td", { className: "py-3 px-4 text-right text-rose-400 font-mono", children: [
                "%",
                result.effectiveTaxRate
              ] })
            ] })
          ] })
        ] }) })
      ] })
    ] })
  ] });
}
export {
  GlobalTakeHomeCalculator as default
};
