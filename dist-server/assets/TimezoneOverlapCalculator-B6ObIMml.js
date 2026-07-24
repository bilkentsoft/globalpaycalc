import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { Clock } from "lucide-react";
import { c as calcTranslations } from "./calculatorTranslations-B446MKlw.js";
const globalTimezones = [
  { id: "US_PACIFIC", name: "US Pacific (San Francisco / LA)", offset: -7, flag: "🇺🇸", city: "San Francisco" },
  { id: "US_EASTERN", name: "US Eastern (New York / Miami)", offset: -4, flag: "🇺🇸", city: "New York" },
  { id: "UK_GMT", name: "UK (London / GMT / BST)", offset: 1, flag: "🇬🇧", city: "London" },
  { id: "EU_CENTRAL", name: "Central Europe (Berlin / Paris / Madrid)", offset: 2, flag: "🇩🇪", city: "Berlin" },
  { id: "TR_EET", name: "Turkey (Istanbul / TRT)", offset: 3, flag: "🇹🇷", city: "Istanbul" },
  { id: "UAE_GST", name: "UAE (Dubai / GST)", offset: 4, flag: "🇦🇪", city: "Dubai" },
  { id: "IN_IST", name: "India (Bangalore / IST)", offset: 5.5, flag: "🇮🇳", city: "Bangalore" },
  { id: "SG_SGT", name: "Singapore / Bali", offset: 8, flag: "🇸🇬", city: "Singapore" },
  { id: "JP_JST", name: "Japan (Tokyo / JST)", offset: 9, flag: "🇯🇵", city: "Tokyo" },
  { id: "AU_AEST", name: "Australia (Sydney / AEST)", offset: 10, flag: "🇦🇺", city: "Sydney" }
];
function calculateTimezoneOverlap(tzA_id = "US_PACIFIC", tzB_id = "TR_EET", workStart = 9, workEnd = 17) {
  const tzA = globalTimezones.find((t) => t.id === tzA_id) || globalTimezones[0];
  const tzB = globalTimezones.find((t) => t.id === tzB_id) || globalTimezones[4];
  const timeDifferenceHours = tzB.offset - tzA.offset;
  const hourlyGrid = [];
  let overlappingHoursCount = 0;
  for (let hourA = 0; hourA < 24; hourA++) {
    let hourB = (hourA + timeDifferenceHours + 24) % 24;
    const isWorkA = hourA >= workStart && hourA < workEnd;
    const isWorkB = hourB >= workStart && hourB < workEnd;
    const isOverlap = isWorkA && isWorkB;
    if (isOverlap) overlappingHoursCount++;
    hourlyGrid.push({
      hourA,
      hourB,
      formattedA: `${hourA.toString().padStart(2, "0")}:00`,
      formattedB: `${Math.floor(hourB).toString().padStart(2, "0")}:00`,
      isWorkA,
      isWorkB,
      isOverlap
    });
  }
  return {
    tzA,
    tzB,
    timeDifferenceHours,
    overlappingHoursCount,
    hourlyGrid,
    workStart,
    workEnd
  };
}
function TimezoneOverlapCalculator({ lang = "en" }) {
  const [tzA, setTzA] = useState("US_PACIFIC");
  const [tzB, setTzB] = useState("TR_EET");
  const [workStart, setWorkStart] = useState(9);
  const [workEnd, setWorkEnd] = useState(17);
  const tCalc = calcTranslations[lang] || calcTranslations["en"];
  const result = calculateTimezoneOverlap(tzA, tzB, workStart, workEnd);
  return /* @__PURE__ */ jsxs("div", { className: "space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-3xl mx-auto space-y-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold", children: [
        /* @__PURE__ */ jsx(Clock, { className: "w-3.5 h-3.5" }),
        /* @__PURE__ */ jsx("span", { children: tCalc.timezoneBadge })
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-extrabold text-white tracking-tight", children: tCalc.timezoneTitle }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-sm leading-relaxed", children: tCalc.timezoneDesc })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "glass-card p-6 sm:p-8 rounded-3xl border-slate-800 space-y-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("label", { className: "text-xs font-bold text-slate-300 uppercase tracking-wider", children: lang === "tr" ? "1. Ekip Üyesi / Konum A" : "1. Team Member / Location A" }),
          /* @__PURE__ */ jsx(
            "select",
            {
              value: tzA,
              onChange: (e) => setTzA(e.target.value),
              className: "w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white font-bold text-base focus:border-indigo-500 outline-none cursor-pointer",
              children: globalTimezones.map((t) => /* @__PURE__ */ jsxs("option", { value: t.id, children: [
                t.flag,
                " ",
                t.name
              ] }, t.id))
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("label", { className: "text-xs font-bold text-slate-300 uppercase tracking-wider", children: lang === "tr" ? "2. Ekip Üyesi / Konum B" : "2. Team Member / Location B" }),
          /* @__PURE__ */ jsx(
            "select",
            {
              value: tzB,
              onChange: (e) => setTzB(e.target.value),
              className: "w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white font-bold text-base focus:border-indigo-500 outline-none cursor-pointer",
              children: globalTimezones.map((t) => /* @__PURE__ */ jsxs("option", { value: t.id, children: [
                t.flag,
                " ",
                t.name
              ] }, t.id))
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/90 border border-slate-800 p-6 rounded-2xl flex flex-wrap items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-slate-400", children: lang === "tr" ? "Saat Farkı" : "Time Difference" }),
          /* @__PURE__ */ jsxs("div", { className: "text-2xl font-black text-white mt-0.5", children: [
            Math.abs(result.timeDifferenceHours),
            " ",
            lang === "tr" ? "Saat" : "Hours",
            " ",
            result.timeDifferenceHours >= 0 ? lang === "tr" ? "İleride" : "Ahead" : lang === "tr" ? "Geride" : "Behind"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-slate-400", children: lang === "tr" ? "Günlük Ortak Çalışma Penceresi" : "Daily Shared Work Window" }),
          /* @__PURE__ */ jsxs("div", { className: "text-3xl font-black text-indigo-400 mt-0.5", children: [
            result.overlappingHoursCount,
            " ",
            lang === "tr" ? "Saat Kesişim" : "Hours Overlap"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4 pt-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-xs font-bold text-slate-300", children: [
          /* @__PURE__ */ jsx("span", { children: lang === "tr" ? "24-Saatlik Görsel Çalışma Çizelgesi (00:00 - 23:00)" : "24-Hour Visual Work Schedule (00:00 - 23:00)" }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
            /* @__PURE__ */ jsxs("span", { className: "flex items-center space-x-1.5", children: [
              /* @__PURE__ */ jsx("span", { className: "w-3 h-3 bg-indigo-500 rounded-full inline-block" }),
              /* @__PURE__ */ jsx("span", { children: lang === "tr" ? "Ortak Kesişim" : "Overlap Window" })
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center space-x-1.5", children: [
              /* @__PURE__ */ jsx("span", { className: "w-3 h-3 bg-slate-800 rounded-full inline-block" }),
              /* @__PURE__ */ jsx("span", { children: lang === "tr" ? "Tekli Mesai" : "Individual Hours" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto pb-2", children: /* @__PURE__ */ jsx("div", { className: "min-w-[650px] grid grid-cols-24 gap-1 bg-slate-950 p-3 rounded-2xl border border-slate-800", children: result.hourlyGrid.map((slot) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: `p-2 rounded-xl text-center flex flex-col justify-between transition ${slot.isOverlap ? "bg-indigo-600/90 text-white font-bold border border-indigo-400" : slot.isWorkA || slot.isWorkB ? "bg-slate-800/80 text-slate-300" : "bg-slate-900/40 text-slate-600"}`,
            children: [
              /* @__PURE__ */ jsx("span", { className: "text-[10px] block font-mono", children: slot.formattedA }),
              /* @__PURE__ */ jsx("span", { className: "text-[10px] block font-mono opacity-80 mt-1", children: slot.formattedB })
            ]
          },
          slot.hourA
        )) }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-[11px] text-slate-400 px-1 font-mono", children: [
          /* @__PURE__ */ jsxs("span", { children: [
            lang === "tr" ? "Üst Satır" : "Top Row",
            ": ",
            result.tzA.city,
            " (",
            result.tzA.flag,
            ")"
          ] }),
          /* @__PURE__ */ jsxs("span", { children: [
            lang === "tr" ? "Alt Satır" : "Bottom Row",
            ": ",
            result.tzB.city,
            " (",
            result.tzB.flag,
            ")"
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  TimezoneOverlapCalculator as default
};
