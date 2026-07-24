import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { ArrowRightLeft } from "lucide-react";
import { c as calcTranslations } from "./calculatorTranslations-B446MKlw.js";
const fxProviders = [
  { id: "wise", name: "Wise (TransferWise)", fxMarkupPercent: 0.45, fixedFeeUSD: 2.5, speed: "Instant / Same Day", flag: "🚀" },
  { id: "swift", name: "Traditional Bank (SWIFT Wire)", fxMarkupPercent: 3.8, fixedFeeUSD: 35, speed: "2 - 5 Business Days", flag: "🏦" },
  { id: "paypal", name: "PayPal International", fxMarkupPercent: 4.5, fixedFeeUSD: 4.99, speed: "Instant", flag: "💳" },
  { id: "stripe", name: "Stripe Cross-Border", fxMarkupPercent: 2, fixedFeeUSD: 0.3, speed: "2 - 3 Business Days", flag: "⚡" },
  { id: "payoneer", name: "Payoneer", fxMarkupPercent: 2.5, fixedFeeUSD: 1.5, speed: "1 - 2 Business Days", flag: "🌐" }
];
const mockExchangeRates = {
  "USD_EUR": 0.92,
  "USD_GBP": 0.79,
  "USD_TRY": 33.2,
  "USD_INR": 83.5,
  "USD_CAD": 1.36,
  "USD_AUD": 1.51,
  "USD_BRL": 5.45,
  "USD_JPY": 158,
  "EUR_USD": 1.087,
  "GBP_USD": 1.265,
  "TRY_USD": 0.0301
};
function calculateFxFees(sendAmount = 5e3, pair = "USD_EUR") {
  const midMarketRate = mockExchangeRates[pair] || 1;
  const [fromCurr, toCurr] = pair.split("_");
  const targetMidMarketAmount = sendAmount * midMarketRate;
  const comparison = fxProviders.map((provider) => {
    const providerRate = midMarketRate * (1 - provider.fxMarkupPercent / 100);
    const feeInFromCurr = provider.fixedFeeUSD;
    const amountAfterFee = Math.max(0, sendAmount - feeInFromCurr);
    const recipientReceives = amountAfterFee * providerRate;
    const hiddenFxLoss = targetMidMarketAmount - recipientReceives;
    const hiddenFxLossPercent = hiddenFxLoss / targetMidMarketAmount * 100;
    return {
      provider,
      providerRate: parseFloat(providerRate.toFixed(4)),
      recipientReceives: parseFloat(recipientReceives.toFixed(2)),
      hiddenFxLoss: parseFloat(hiddenFxLoss.toFixed(2)),
      hiddenFxLossPercent: parseFloat(hiddenFxLossPercent.toFixed(2)),
      feeInFromCurr
    };
  });
  comparison.sort((a, b) => b.recipientReceives - a.recipientReceives);
  const bestOption = comparison[0];
  const worstOption = comparison[comparison.length - 1];
  const potentialSavings = worstOption.hiddenFxLoss - bestOption.hiddenFxLoss;
  return {
    sendAmount,
    pair,
    fromCurr,
    toCurr,
    midMarketRate,
    targetMidMarketAmount: parseFloat(targetMidMarketAmount.toFixed(2)),
    comparison,
    bestOption,
    potentialSavings: parseFloat(potentialSavings.toFixed(2))
  };
}
function HiddenFxFeeCalculator({ lang = "en" }) {
  const [sendAmount, setSendAmount] = useState(5e3);
  const [selectedPair, setSelectedPair] = useState("USD_EUR");
  const tCalc = calcTranslations[lang] || calcTranslations["en"];
  const result = calculateFxFees(sendAmount, selectedPair);
  return /* @__PURE__ */ jsxs("div", { className: "space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-3xl mx-auto space-y-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold", children: [
        /* @__PURE__ */ jsx(ArrowRightLeft, { className: "w-3.5 h-3.5" }),
        /* @__PURE__ */ jsx("span", { children: tCalc.fxBadge })
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-extrabold text-white tracking-tight", children: tCalc.fxTitle }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-sm leading-relaxed", children: tCalc.fxDesc })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "glass-card p-6 sm:p-8 rounded-3xl border-slate-800 space-y-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxs("label", { className: "text-xs font-bold text-slate-300 uppercase tracking-wider", children: [
            tCalc.transferAmountLabel,
            " (",
            result.fromCurr,
            ")"
          ] }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "number",
              value: sendAmount,
              onChange: (e) => setSendAmount(Number(e.target.value)),
              className: "w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white font-bold text-lg focus:border-rose-500 outline-none",
              placeholder: "5000"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("label", { className: "text-xs font-bold text-slate-300 uppercase tracking-wider", children: lang === "tr" ? "Döviz Çifti" : "Currency Pair" }),
          /* @__PURE__ */ jsxs(
            "select",
            {
              value: selectedPair,
              onChange: (e) => setSelectedPair(e.target.value),
              className: "w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white font-bold text-base focus:border-rose-500 outline-none cursor-pointer",
              children: [
                /* @__PURE__ */ jsxs("option", { value: "USD_EUR", children: [
                  "USD ➔ EUR (",
                  lang === "tr" ? "ABD ➔ Avrupa" : "US ➔ Europe",
                  ")"
                ] }),
                /* @__PURE__ */ jsxs("option", { value: "USD_GBP", children: [
                  "USD ➔ GBP (",
                  lang === "tr" ? "ABD ➔ İngiltere" : "US ➔ UK",
                  ")"
                ] }),
                /* @__PURE__ */ jsxs("option", { value: "USD_TRY", children: [
                  "USD ➔ TRY (",
                  lang === "tr" ? "ABD ➔ Türkiye" : "US ➔ Turkey",
                  ")"
                ] }),
                /* @__PURE__ */ jsxs("option", { value: "USD_INR", children: [
                  "USD ➔ INR (",
                  lang === "tr" ? "ABD ➔ Hindistan" : "US ➔ India",
                  ")"
                ] }),
                /* @__PURE__ */ jsxs("option", { value: "USD_CAD", children: [
                  "USD ➔ CAD (",
                  lang === "tr" ? "ABD ➔ Kanada" : "US ➔ Canada",
                  ")"
                ] }),
                /* @__PURE__ */ jsxs("option", { value: "USD_AUD", children: [
                  "USD ➔ AUD (",
                  lang === "tr" ? "ABD ➔ Avustralya" : "US ➔ Australia",
                  ")"
                ] }),
                /* @__PURE__ */ jsxs("option", { value: "USD_BRL", children: [
                  "USD ➔ BRL (",
                  lang === "tr" ? "ABD ➔ Brezilya" : "US ➔ Brazil",
                  ")"
                ] }),
                /* @__PURE__ */ jsxs("option", { value: "USD_JPY", children: [
                  "USD ➔ JPY (",
                  lang === "tr" ? "ABD ➔ Japonya" : "US ➔ Japan",
                  ")"
                ] }),
                /* @__PURE__ */ jsxs("option", { value: "EUR_USD", children: [
                  "EUR ➔ USD (",
                  lang === "tr" ? "Avrupa ➔ ABD" : "Europe ➔ US",
                  ")"
                ] }),
                /* @__PURE__ */ jsxs("option", { value: "GBP_USD", children: [
                  "GBP ➔ USD (",
                  lang === "tr" ? "İngiltere ➔ ABD" : "UK ➔ US",
                  ")"
                ] })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/90 border border-slate-800 p-5 rounded-2xl flex flex-wrap items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-slate-400", children: tCalc.interbankRate }),
          /* @__PURE__ */ jsxs("div", { className: "text-2xl font-black text-white mt-0.5", children: [
            "1 ",
            result.fromCurr,
            " = ",
            result.midMarketRate,
            " ",
            result.toCurr
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-slate-400", children: lang === "tr" ? "Sıfır Komisyonlu Alınması Gereken Net" : "Net Amount Expected at Mid-Market" }),
          /* @__PURE__ */ jsxs("div", { className: "text-2xl font-black text-emerald-400 mt-0.5", children: [
            result.targetMidMarketAmount.toLocaleString(),
            " ",
            result.toCurr
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold text-white", children: tCalc.estimatedFxFeesHeader }),
          /* @__PURE__ */ jsx("span", { className: "text-xs text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full", children: lang === "tr" ? `Fark: ${result.potentialSavings} ${result.toCurr} tasarruf imkanı` : `Potential savings: ${result.potentialSavings} ${result.toCurr}` })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-3", children: result.comparison.map((item, idx) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: `p-5 rounded-2xl border transition flex flex-wrap items-center justify-between gap-4 ${idx === 0 ? "bg-emerald-950/20 border-emerald-500/40 shadow-lg shadow-emerald-500/5" : "bg-slate-900/60 border-slate-800"}`,
            children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3 min-w-[200px]", children: [
                /* @__PURE__ */ jsx("span", { className: "text-2xl", children: item.provider.flag }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("div", { className: "font-bold text-white flex items-center space-x-2", children: [
                    /* @__PURE__ */ jsx("span", { children: item.provider.name }),
                    idx === 0 && /* @__PURE__ */ jsx("span", { className: "text-[10px] bg-emerald-500 text-slate-950 font-black px-2 py-0.5 rounded-full", children: lang === "tr" ? "EN UYGUN" : "BEST RATE" })
                  ] }),
                  /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-400", children: lang === "tr" ? `Süre: ${item.provider.speed}` : `Duration: ${item.provider.speed}` })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
                /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-400 block", children: tCalc.rateOffered }),
                /* @__PURE__ */ jsxs("span", { className: "font-mono text-sm text-slate-200 font-bold", children: [
                  "1 ",
                  result.fromCurr,
                  " = ",
                  item.providerRate
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
                /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-400 block", children: lang === "tr" ? "Gizli Kur Marjı Kaybı" : "Hidden Markup Fee Loss" }),
                /* @__PURE__ */ jsxs("span", { className: `font-mono text-sm font-bold ${item.hiddenFxLoss > 10 ? "text-rose-400" : "text-slate-300"}`, children: [
                  "-",
                  item.hiddenFxLoss,
                  " ",
                  result.toCurr,
                  " (%",
                  item.hiddenFxLossPercent,
                  ")"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "text-right min-w-[140px]", children: [
                /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-400 block", children: tCalc.netAmountReceived }),
                /* @__PURE__ */ jsxs("span", { className: "text-lg font-black text-white", children: [
                  item.recipientReceives.toLocaleString(),
                  " ",
                  result.toCurr
                ] })
              ] })
            ]
          },
          item.provider.id
        )) })
      ] })
    ] })
  ] });
}
export {
  HiddenFxFeeCalculator as default
};
