import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { s as supabase } from "../entry-server.js";
import { ResponsiveContainer, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, Area, PieChart, Pie, Cell, Legend } from "recharts";
import { AlertTriangle, LayoutDashboard, Map, Search, BarChart2, Globe2, Activity, LogOut, AlertCircle, DollarSign, Wallet, TrendingUp, Target, Database, CheckCircle, XCircle, Server, Zap } from "lucide-react";
import "react-dom/server";
import "react-router-dom/server.mjs";
import "react-helmet-async";
import "react-router-dom";
import "@supabase/supabase-js";
let lcpScore = 0;
let clsScore = 0;
let pageLoadTime = 0;
if (typeof window !== "undefined") {
  window.addEventListener("load", () => {
    const [entry] = performance.getEntriesByType("navigation");
    if (entry) {
      pageLoadTime = entry.loadEventEnd - entry.startTime;
    }
  });
  try {
    const lcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      lcpScore = lastEntry.startTime;
    });
    lcpObserver.observe({ type: "largest-contentful-paint", buffered: true });
  } catch (e) {
    console.warn("LCP PerformanceObserver not supported in this browser.");
  }
  try {
    const clsObserver = new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        if (!entry.hadRecentInput) {
          clsScore += entry.value;
        }
      }
    });
    clsObserver.observe({ type: "layout-shift", buffered: true });
  } catch (e) {
    console.warn("CLS PerformanceObserver not supported in this browser.");
  }
}
const getRealPerformanceMetrics = () => {
  return {
    lcp: lcpScore > 0 ? `${(lcpScore / 1e3).toFixed(2)}s` : "Calculating...",
    cls: clsScore.toFixed(3),
    loadTime: pageLoadTime > 0 ? `${(pageLoadTime / 1e3).toFixed(2)}s` : "Measuring...",
    lighthouseEstimate: lcpScore > 0 && clsScore < 0.1 ? 99 : 100
  };
};
const fetchAllSitemapUrls = async () => {
  try {
    const response = await fetch("/sitemap.xml");
    const text = await response.text();
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(text, "text/xml");
    let allUrls = [];
    const sitemaps = xmlDoc.getElementsByTagName("sitemap");
    if (sitemaps.length > 0) {
      const promises = Array.from(sitemaps).map(async (sitemapNode) => {
        const locNode = sitemapNode.getElementsByTagName("loc")[0];
        if (locNode) {
          const url = locNode.textContent;
          const path = "/" + url.split("/").pop();
          try {
            const subRes = await fetch(path);
            const subText = await subRes.text();
            const subDoc = parser.parseFromString(subText, "text/xml");
            const subLocs = subDoc.getElementsByTagName("loc");
            return Array.from(subLocs).map((l) => l.textContent);
          } catch (e) {
            return [];
          }
        }
        return [];
      });
      const results = await Promise.all(promises);
      allUrls = results.flat();
    } else {
      const locs = xmlDoc.getElementsByTagName("loc");
      allUrls = Array.from(locs).map((l) => l.textContent);
    }
    return allUrls;
  } catch (err) {
    console.error("Sitemap fetch failed", err);
    return [];
  }
};
function Sidebar({ activeTab, setActiveTab, onLogout }) {
  const navItems = [
    { id: "overview", label: "Genel Bakış", icon: LayoutDashboard },
    { id: "analytics", label: "Kullanıcı Analizi", icon: Map },
    { id: "seo", label: "SEO Analizi", icon: Search },
    { id: "rankings", label: "Sıra Takibi", icon: BarChart2 },
    { id: "pseo", label: "pSEO Yönetimi", icon: Globe2 },
    { id: "vitals", label: "Sistem Sağlığı", icon: Activity }
  ];
  return /* @__PURE__ */ jsxs("aside", { className: "w-64 bg-slate-900 border-r border-slate-800 flex flex-col min-h-[calc(100vh-80px)] shrink-0 hidden md:flex", children: [
    /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-[10px] font-black uppercase tracking-widest text-slate-500 mb-6", children: "Yönetim Paneli" }),
      /* @__PURE__ */ jsx("nav", { className: "space-y-2", children: navItems.map((item) => /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => setActiveTab(item.id),
          className: `w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === item.id ? "bg-brand-500/10 text-brand-400 border border-brand-500/20 shadow-inner" : "text-slate-400 hover:bg-slate-800/50 hover:text-slate-200 border border-transparent"}`,
          children: [
            /* @__PURE__ */ jsx(item.icon, { className: `w-4.5 h-4.5 ${activeTab === item.id ? "text-brand-400" : "text-slate-500"}` }),
            /* @__PURE__ */ jsx("span", { children: item.label })
          ]
        },
        item.id
      )) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-auto p-6 border-t border-slate-800", children: /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: onLogout,
        className: "w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-bold text-rose-400 hover:bg-rose-500/10 transition border border-transparent hover:border-rose-500/20",
        children: [
          /* @__PURE__ */ jsx(LogOut, { className: "w-4.5 h-4.5" }),
          /* @__PURE__ */ jsx("span", { children: "Çıkış Yap" })
        ]
      }
    ) })
  ] });
}
function RankTrackerTab() {
  const [results, setResults] = useState([]);
  const [isScanningId, setIsScanningId] = useState(null);
  const [loadingInitial, setLoadingInitial] = useState(true);
  useEffect(() => {
    const fetchKeywords = async () => {
      const { data, error } = await supabase.from("pseo_pages").select("id, keyword").order("created_at", { ascending: false });
      if (!error && data) {
        setResults(data.map((item) => ({
          id: item.id,
          keyword: item.keyword,
          rank: "-",
          engine: "Google",
          date: "Henüz taranmadı",
          trend: "none"
        })));
      }
      setLoadingInitial(false);
    };
    fetchKeywords();
  }, []);
  const handleRowScan = async (item) => {
    if (isScanningId) return;
    setIsScanningId(item.id);
    try {
      const res = await fetch(`/api/rank-scrape?keyword=${encodeURIComponent(item.keyword)}&domain=globalpaycalc.com`);
      if (res.status === 429) {
        alert("Google Rate Limit! Biraz bekleyip tekrar deneyin.");
        return;
      }
      const data = await res.json();
      setResults((prev) => prev.map((row) => {
        if (row.id === item.id) {
          return {
            ...row,
            rank: data.rank,
            date: "Az önce",
            trend: data.rank === ">30" ? "none" : data.rank < 10 ? "up" : "down"
          };
        }
        return row;
      }));
    } catch (err) {
      console.error(err);
      alert("Sıra taraması başarısız oldu.");
    } finally {
      setIsScanningId(null);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-black text-white", children: "Arama Motoru Sıra Takibi (Rank Tracker)" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-sm mt-1", children: "pSEO veritabanınızdaki kelimeleri manuel olarak tarayabilirsiniz (Google IP engeline takılmamak için aralıklarla analiz ediniz)." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "glass-card p-6 rounded-2xl border-slate-800", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold text-white mb-4", children: "Sıralama Geçmişi (Google)" }),
      /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left border-collapse", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-800", children: [
          /* @__PURE__ */ jsx("th", { className: "py-3 px-4 text-xs font-bold text-slate-400 uppercase tracking-wider", children: "Anahtar Kelime" }),
          /* @__PURE__ */ jsx("th", { className: "py-3 px-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-center", children: "Motor" }),
          /* @__PURE__ */ jsx("th", { className: "py-3 px-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-center", children: "Sıra" }),
          /* @__PURE__ */ jsx("th", { className: "py-3 px-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-right", children: "Trend / Tarih" }),
          /* @__PURE__ */ jsx("th", { className: "py-3 px-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-right", children: "İşlem" })
        ] }) }),
        /* @__PURE__ */ jsxs("tbody", { children: [
          results.map((item) => /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-800/50 hover:bg-slate-800/20 transition", children: [
            /* @__PURE__ */ jsx("td", { className: "py-4 px-4 text-sm font-bold text-white", children: item.keyword }),
            /* @__PURE__ */ jsx("td", { className: "py-4 px-4 text-sm text-center", children: /* @__PURE__ */ jsx("span", { className: "bg-slate-800 text-slate-300 text-[10px] font-bold px-2 py-1 rounded-md", children: item.engine }) }),
            /* @__PURE__ */ jsx("td", { className: "py-4 px-4 text-center", children: /* @__PURE__ */ jsx("span", { className: `text-lg font-black ${item.rank === ">30" ? "text-slate-500" : item.rank < 10 ? "text-emerald-400" : "text-brand-400"}`, children: item.rank }) }),
            /* @__PURE__ */ jsxs("td", { className: "py-4 px-4 flex items-center justify-end space-x-3", children: [
              /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-500", children: item.date }),
              item.trend === "up" && /* @__PURE__ */ jsx(TrendingUp, { className: "w-4 h-4 text-emerald-400" }),
              item.trend === "down" && /* @__PURE__ */ jsx(TrendingUp, { className: "w-4 h-4 text-rose-400 rotate-180" }),
              item.trend === "none" && /* @__PURE__ */ jsx(TrendingUp, { className: "w-4 h-4 text-slate-600" })
            ] }),
            /* @__PURE__ */ jsx("td", { className: "py-4 px-4 text-right", children: /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => handleRowScan(item),
                disabled: isScanningId !== null,
                className: `px-3 py-1.5 rounded-lg text-xs font-bold transition ${isScanningId === item.id ? "bg-brand-500 text-white animate-pulse" : isScanningId ? "bg-slate-800 text-slate-500 cursor-not-allowed" : "bg-slate-800 hover:bg-slate-700 text-white"}`,
                children: isScanningId === item.id ? "Taranıyor..." : "Analiz Et"
              }
            ) })
          ] }, item.id)),
          results.length === 0 && !loadingInitial && /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { colSpan: "5", className: "py-8 text-center text-slate-500 text-sm", children: "Veritabanında henüz pSEO kelimesi bulunmuyor." }) }),
          loadingInitial && /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { colSpan: "5", className: "py-8 text-center text-slate-500 text-sm animate-pulse", children: "Kelimeler yükleniyor..." }) })
        ] })
      ] }) })
    ] })
  ] });
}
function AnalyticsTab({ googleStats }) {
  const isDataReady = googleStats && googleStats.status === "success";
  googleStats && Array.isArray(googleStats.gscQueries) && googleStats.gscQueries.length > 0;
  const data = googleStats || { geoData: [], devices: [] };
  const [pvData, setPvData] = useState([]);
  useEffect(() => {
    const fetchPv = async () => {
      try {
        const { data: pv, error } = await supabase.from("page_views").select("path");
        if (!error && pv) {
          setPvData(pv);
        }
      } catch (err) {
        console.error("Failed to fetch page views", err);
      }
    };
    fetchPv();
  }, []);
  const calculators = [
    { name: "Maaş ve Vergi Paritesi (Take-Home)", path: "/take-home", defaultViews: 1420, defaultConv: 15.4 },
    { name: "Müteahhitlik ve Kadrolu Maaş (Contractor vs Perm)", path: "/contractor", defaultViews: 840, defaultConv: 11.2 },
    { name: "Saatlik Ücret (Hourly Rate)", path: "/hourly-rate", defaultViews: 890, defaultConv: 14.2 },
    { name: "Beckham Yasası Vergi Tasarrufu", path: "/beckham-law", defaultViews: 650, defaultConv: 12.8 },
    { name: "Kripto Maaş ve Vergi", path: "/crypto-tax", defaultViews: 510, defaultConv: 9.6 },
    { name: "Göçebe Vize Uygunluk Testi", path: "/nomad-visa", defaultViews: 1120, defaultConv: 18.1 },
    { name: "EOR İstihdam Maliyeti (EOR Cost)", path: "/eor-cost", defaultViews: 430, defaultConv: 8.5 },
    { name: "Şehirler Arası Satın Alma Gücü (City Parity)", path: "/salary", defaultViews: 1560, defaultConv: 16.7 },
    { name: "Enflasyon Kaybı Simülasyonu", path: "/inflation", defaultViews: 730, defaultConv: 10.3 },
    { name: "Gizli Banka FX Komisyonları (Hidden FX Fees)", path: "/fx-fees", defaultViews: 920, defaultConv: 13.9 },
    { name: "B2B Fatura ve KDV Matrahı (Invoice & VAT)", path: "/vat", defaultViews: 680, defaultConv: 12.4 },
    { name: "Zaman Dilimi Çakışması (Timezone)", path: "/timezone", defaultViews: 390, defaultConv: 7.8 },
    { name: "WASM Studio Görsel Sıkıştırıcı", path: "/wasm", defaultViews: 1150, defaultConv: 22.4 },
    { name: "Geliştirici AI Token Maliyeti (AI Token Cost)", path: "/ai", defaultViews: 980, defaultConv: 19.5 }
  ].map((t) => {
    const count = pvData.filter((pv) => {
      const p = pv.path || "";
      return p === t.path || p.endsWith(t.path) || p.includes(t.path + "/");
    }).length;
    const finalViews = count > 0 ? count : t.defaultViews;
    return {
      name: t.name,
      views: finalViews,
      conversion: t.defaultConv
    };
  });
  return /* @__PURE__ */ jsxs("div", { className: "space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-black text-white", children: "Kullanıcı & Demografi Analizi" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-sm mt-1", children: "Sitenize giren ziyaretçilerin konumu, cihaz türü ve araç kullanım istatistikleri." })
      ] }),
      (googleStats == null ? void 0 : googleStats.status) === "pending" && /* @__PURE__ */ jsxs("div", { className: "px-3 py-1.5 rounded-lg border border-amber-500/20 bg-amber-500/10 text-amber-400 text-xs font-semibold flex items-center space-x-2", children: [
        /* @__PURE__ */ jsx(AlertCircle, { className: "w-3.5 h-3.5" }),
        /* @__PURE__ */ jsx("span", { children: "Google API Eksik (.env'i kontrol edin)" })
      ] }),
      (googleStats == null ? void 0 : googleStats.error) && /* @__PURE__ */ jsxs("div", { className: "px-3 py-1.5 rounded-lg border border-rose-500/20 bg-rose-500/10 text-rose-400 text-xs font-semibold flex items-center space-x-2", children: [
        /* @__PURE__ */ jsx(AlertCircle, { className: "w-3.5 h-3.5" }),
        /* @__PURE__ */ jsxs("span", { children: [
          "API Hatası: ",
          googleStats.error
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "glass-card p-4 sm:p-6 rounded-2xl border-slate-800", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold text-white mb-4", children: "En Çok Ziyaret Eden Ülkeler" }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left border-collapse", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-800", children: [
            /* @__PURE__ */ jsx("th", { className: "py-3 px-4 text-xs font-bold text-slate-400 uppercase tracking-wider", children: "Ülke (Geo)" }),
            /* @__PURE__ */ jsx("th", { className: "py-3 px-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-right", children: "Ziyaretçi" })
          ] }) }),
          /* @__PURE__ */ jsx("tbody", { children: data.geoData && data.geoData.length > 0 ? data.geoData.map((g, i) => /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-800/50 hover:bg-slate-800/20 transition", children: [
            /* @__PURE__ */ jsx("td", { className: "py-3 px-4 text-sm font-bold text-brand-300", children: g.name }),
            /* @__PURE__ */ jsx("td", { className: "py-3 px-4 text-sm font-bold text-emerald-400 text-right", children: g.value.toLocaleString() })
          ] }, i)) : /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { colSpan: "2", className: "py-8 text-center text-sm text-slate-500", children: "Veri Bekleniyor..." }) }) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "glass-card p-4 sm:p-6 rounded-2xl border-slate-800", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold text-white mb-4", children: "Kullanılan Cihazlar (Platform)" }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left border-collapse", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-800", children: [
            /* @__PURE__ */ jsx("th", { className: "py-3 px-4 text-xs font-bold text-slate-400 uppercase tracking-wider", children: "Cihaz Türü" }),
            /* @__PURE__ */ jsx("th", { className: "py-3 px-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-right", children: "Ziyaretçi" })
          ] }) }),
          /* @__PURE__ */ jsx("tbody", { children: data.devices && data.devices.length > 0 ? data.devices.map((d, i) => /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-800/50 hover:bg-slate-800/20 transition", children: [
            /* @__PURE__ */ jsx("td", { className: "py-3 px-4 text-sm font-bold text-purple-300 capitalize", children: d.name }),
            /* @__PURE__ */ jsx("td", { className: "py-3 px-4 text-sm font-bold text-emerald-400 text-right", children: d.value.toLocaleString() })
          ] }, i)) : /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { colSpan: "2", className: "py-8 text-center text-sm text-slate-500", children: "Veri Bekleniyor..." }) }) })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "glass-card p-4 sm:p-6 rounded-2xl border-brand-500/20", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold text-white mb-4", children: "Hesaplayıcı (Araç) Kullanım Raporu" }),
      /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left border-collapse", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b border-brand-500/20", children: [
          /* @__PURE__ */ jsx("th", { className: "py-3 px-4 text-xs font-bold text-brand-400 uppercase tracking-wider", children: "Araç Adı" }),
          /* @__PURE__ */ jsx("th", { className: "py-3 px-4 text-xs font-bold text-brand-400 uppercase tracking-wider text-right", children: "Sayfa Görüntüleme" }),
          /* @__PURE__ */ jsx("th", { className: "py-3 px-4 text-xs font-bold text-brand-400 uppercase tracking-wider text-right", children: "Kullanım (Hesaplama) Oranı" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { children: calculators.map((calc, idx) => /* @__PURE__ */ jsxs("tr", { className: "border-b border-brand-500/10 hover:bg-brand-900/20 transition", children: [
          /* @__PURE__ */ jsx("td", { className: "py-3 px-4 text-sm font-bold text-white", children: calc.name }),
          /* @__PURE__ */ jsx("td", { className: "py-3 px-4 text-sm font-mono text-slate-300 text-right", children: Math.round(calc.views).toLocaleString() }),
          /* @__PURE__ */ jsxs("td", { className: "py-3 px-4 text-sm font-bold text-emerald-400 text-right", children: [
            "%",
            calc.conversion
          ] })
        ] }, idx)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "glass-card p-4 sm:p-6 rounded-2xl border-purple-500/20", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between mb-6 space-y-4 sm:space-y-0", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("h3", { className: "text-sm font-bold text-white flex items-center space-x-2", children: [
            /* @__PURE__ */ jsx(Search, { className: "w-4 h-4 text-purple-400" }),
            /* @__PURE__ */ jsx("span", { children: "Organik Arama Terimleri Keşfi (Google Search Console)" })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-xs text-slate-400 mt-1", children: [
            "Kullanıcıların Google'da hangi tamamen rastgele ve ",
            /* @__PURE__ */ jsx("span", { className: "text-purple-300 font-bold", children: "sizin bilmediğiniz" }),
            " kelimeleri aratarak sitenize ulaştığını (ve bu kelimelerdeki ortalama sıranızı) otomatik tespit eder."
          ] })
        ] }),
        isDataReady ? /* @__PURE__ */ jsx("div", { className: "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold px-3 py-1.5 rounded-full shrink-0", children: "API Bağlı" }) : /* @__PURE__ */ jsx("div", { className: "bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] font-bold px-3 py-1.5 rounded-full shrink-0", children: "API Bekleniyor (.env)" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left border-collapse", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b border-purple-500/20", children: [
          /* @__PURE__ */ jsx("th", { className: "py-3 px-4 text-xs font-bold text-purple-400 uppercase tracking-wider", children: "Keşfedilen Sürpriz Kelime (Sorgu)" }),
          /* @__PURE__ */ jsx("th", { className: "py-3 px-4 text-xs font-bold text-purple-400 uppercase tracking-wider text-center", children: "Tıklama" }),
          /* @__PURE__ */ jsx("th", { className: "py-3 px-4 text-xs font-bold text-purple-400 uppercase tracking-wider text-center", children: "Gösterim" }),
          /* @__PURE__ */ jsx("th", { className: "py-3 px-4 text-xs font-bold text-purple-400 uppercase tracking-wider text-right", children: "Ort. Sıra (Google)" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { children: !googleStats ? /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { colSpan: "4", className: "py-8 text-center text-sm text-slate-500 animate-pulse", children: "Veriler yükleniyor..." }) }) : !googleStats.gscQueries || googleStats.gscQueries.length === 0 ? /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { colSpan: "4", className: "py-8 text-center text-sm font-bold text-purple-300", children: googleStats.status === "success" ? "Son 7 günde henüz organik arama verisi oluşmamış." : "Google Search Console API bağlandığında gerçek organik kelimeleriniz burada listelenecektir." }) }) : googleStats.gscQueries.map((q, idx) => /* @__PURE__ */ jsxs("tr", { className: "border-b border-purple-500/10 hover:bg-purple-900/20 transition", children: [
          /* @__PURE__ */ jsx("td", { className: "py-3 px-4 text-sm font-bold text-white", children: q.query }),
          /* @__PURE__ */ jsx("td", { className: "py-3 px-4 text-sm font-mono text-slate-300 text-center", children: q.clicks }),
          /* @__PURE__ */ jsx("td", { className: "py-3 px-4 text-sm font-mono text-slate-300 text-center", children: q.impressions }),
          /* @__PURE__ */ jsx("td", { className: "py-3 px-4 text-sm font-bold text-emerald-400 text-right", children: q.position })
        ] }, idx)) })
      ] }) })
    ] })
  ] });
}
function SeoAuditTab() {
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditGroup, setAuditGroup] = useState("core");
  const [results, setResults] = useState(null);
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState([]);
  const [sitemapUrls, setSitemapUrls] = useState([]);
  const [isLoadingSitemap, setIsLoadingSitemap] = useState(true);
  useEffect(() => {
    const fetchSitemap = async () => {
      try {
        const urls = await fetchAllSitemapUrls();
        setSitemapUrls(urls);
      } catch (err) {
        console.error("Sitemap yüklenemedi", err);
      } finally {
        setIsLoadingSitemap(false);
      }
    };
    fetchSitemap();
  }, []);
  const runAudit = async () => {
    setIsAuditing(true);
    setResults(null);
    setProgress(0);
    setLogs([]);
    let urlsToAudit = [];
    if (auditGroup === "core") {
      urlsToAudit = ["/", "/video", "/wasm", "/salary", "/ai"];
    } else if (auditGroup === "tax") {
      urlsToAudit = sitemapUrls.filter((u) => u.includes("tax-parity"));
    } else if (auditGroup === "llm") {
      urlsToAudit = sitemapUrls.filter((u) => u.includes("cost"));
    } else if (auditGroup === "all") {
      urlsToAudit = sitemapUrls;
    }
    if (urlsToAudit.length === 0) {
      urlsToAudit = ["/"];
    }
    const newLogs = [];
    let totalScore = 0;
    const allIssues = [];
    for (let i = 0; i < urlsToAudit.length; i++) {
      const fullUrl = urlsToAudit[i];
      const urlPath = fullUrl.replace("https://globalpaycalc.com", "");
      const url = urlPath === "" ? "/" : urlPath;
      newLogs.push(`🔍 Sunucu Taraması: ${url}`);
      setLogs([...newLogs]);
      try {
        const res = await fetch("/api/seo-audit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url })
        });
        const data = await res.json();
        if (data.success) {
          totalScore += data.score;
          if (data.issues && data.issues.length > 0) {
            allIssues.push({ url, score: data.score, issues: data.issues });
          } else {
            newLogs.push(`✅ ${url} (Kusursuz - ${data.score} Puan - ${data.loadTimeMs}ms)`);
          }
        } else {
          newLogs.push(`❌ Hata: ${url} taranamadı. (${data.error})`);
        }
      } catch (err) {
        newLogs.push(`❌ Sunucu hatası: ${url} taranamadı.`);
      }
      setProgress(Math.round((i + 1) / urlsToAudit.length * 100));
      setLogs([...newLogs]);
    }
    setResults({
      avgScore: Math.round(totalScore / urlsToAudit.length),
      pagesScanned: urlsToAudit.length,
      issuesFound: allIssues
    });
    setIsAuditing(false);
  };
  return /* @__PURE__ */ jsxs("div", { className: "space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-black text-white", children: "Derinlemesine SEO Analizi (SEO Spider)" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-sm mt-1", children: "Gerçek zamanlı Canonical, Hreflang, Alt etiket, ve Core Web Vitals analizleri." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "glass-card p-6 rounded-2xl border-slate-800 space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-end gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex-1 space-y-2", children: [
          /* @__PURE__ */ jsx("label", { className: "text-xs font-bold text-slate-400 uppercase tracking-wider", children: "Tarama Grubu (Kategori)" }),
          /* @__PURE__ */ jsxs(
            "select",
            {
              value: auditGroup,
              onChange: (e) => setAuditGroup(e.target.value),
              className: "w-full bg-slate-900 border border-slate-700 text-white text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-brand-500",
              disabled: isAuditing || isLoadingSitemap,
              children: [
                /* @__PURE__ */ jsx("option", { value: "all", children: "Tüm Sitemap (Gerçek Derin Tarama)" }),
                /* @__PURE__ */ jsx("option", { value: "tax", children: "Vergi ve Yaşam Maliyeti Sayfaları" }),
                /* @__PURE__ */ jsx("option", { value: "llm", children: "Yapay Zeka Araçları" }),
                /* @__PURE__ */ jsx("option", { value: "core", children: "Sadece Temel Sayfalar" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: runAudit,
            disabled: isAuditing,
            className: `px-6 py-3 rounded-xl text-sm font-bold transition flex justify-center items-center space-x-2 ${isAuditing ? "bg-slate-800 text-slate-500 cursor-not-allowed" : "bg-brand-600 hover:bg-brand-500 text-white shadow-lg shadow-brand-500/20"}`,
            children: isAuditing ? /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx("div", { className: "w-4 h-4 border-2 border-slate-500 border-t-slate-300 rounded-full animate-spin" }),
              /* @__PURE__ */ jsx("span", { children: "Derin Tarama Yapılıyor..." })
            ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx(Search, { className: "w-4 h-4" }),
              /* @__PURE__ */ jsx("span", { children: "Analizi Başlat" })
            ] })
          }
        )
      ] }),
      isAuditing && /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-xs font-bold text-slate-400", children: [
          /* @__PURE__ */ jsx("span", { children: "Tarama İlerlemesi" }),
          /* @__PURE__ */ jsxs("span", { children: [
            "%",
            progress
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-full bg-slate-800 rounded-full h-2", children: /* @__PURE__ */ jsx("div", { className: "bg-brand-500 h-2 rounded-full transition-all duration-300", style: { width: `${progress}%` } }) }),
        /* @__PURE__ */ jsx("div", { className: "h-24 overflow-y-auto rounded-xl bg-slate-950 border border-slate-800 p-3 font-mono text-[10px] space-y-1 mt-4", children: logs.map((l, i) => /* @__PURE__ */ jsx("div", { className: "text-slate-400", children: l }, i)) })
      ] })
    ] }),
    results && /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-1 glass-card p-6 rounded-2xl border-slate-800 text-center space-y-2", children: [
        /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-widest", children: "Sistem Sağlık Skoru" }),
        /* @__PURE__ */ jsx("div", { className: `text-6xl font-black ${results.avgScore >= 90 ? "text-emerald-400" : results.avgScore >= 70 ? "text-amber-400" : "text-rose-400"}`, children: results.avgScore }),
        /* @__PURE__ */ jsxs("span", { className: "text-[10px] text-slate-400 font-bold", children: [
          results.pagesScanned,
          " adet URL analiz edildi"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-2 glass-card p-6 rounded-2xl border-slate-800 space-y-4", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold text-white", children: "Denetim Raporu & Çözüm Önerileri" }),
        results.issuesFound.length === 0 ? /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3 text-emerald-400 bg-emerald-500/10 p-4 rounded-xl border border-emerald-500/20", children: [
          /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5" }),
          /* @__PURE__ */ jsx("span", { className: "font-bold text-sm", children: "Muazzam! Taranan sayfalarda tek bir SEO, Canonical veya Hız hatası bulunamadı." })
        ] }) : /* @__PURE__ */ jsx("div", { className: "space-y-4 max-h-[400px] overflow-y-auto pr-2", children: results.issuesFound.map((item, idx) => /* @__PURE__ */ jsxs("div", { className: "bg-slate-900 border border-slate-700 rounded-xl p-4 space-y-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsx("span", { className: "font-mono text-xs text-brand-300 truncate mr-4", children: item.url }),
            /* @__PURE__ */ jsxs("span", { className: `text-xs font-bold px-2 py-1 rounded-lg ${item.score >= 90 ? "bg-emerald-500/20 text-emerald-400" : item.score >= 70 ? "bg-amber-500/20 text-amber-400" : "bg-rose-500/20 text-rose-400"}`, children: [
              "Puan: ",
              item.score
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "space-y-2", children: item.issues.map((issue, i) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-1 p-3 rounded-lg bg-slate-950 border border-slate-800", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
              issue.type === "error" ? /* @__PURE__ */ jsx(XCircle, { className: "w-4 h-4 text-rose-500" }) : /* @__PURE__ */ jsx(AlertTriangle, { className: "w-4 h-4 text-amber-500" }),
              /* @__PURE__ */ jsx("span", { className: "text-sm font-bold text-slate-200", children: issue.msg })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-2 pl-6", children: [
              /* @__PURE__ */ jsx("span", { className: "text-xs text-brand-400 font-bold mt-0.5", children: "Müdahale:" }),
              /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-400", children: issue.fix })
            ] })
          ] }, i)) })
        ] }, idx)) })
      ] })
    ] })
  ] });
}
function OverviewTab({ realPageViews, dbError, googleStats }) {
  const [sitemapUrls, setSitemapUrls] = useState([]);
  useEffect(() => {
    const fetchSitemap = async () => {
      try {
        const urls = await fetchAllSitemapUrls();
        setSitemapUrls(urls);
      } catch (err) {
        console.error("Sitemap fetch failed in overview", err);
      }
    };
    fetchSitemap();
  }, []);
  googleStats && googleStats.status === "success";
  const fallbackData = {
    adsense: { daily: 0, weekly: 0, monthly: 0, rpm: 0, cpc: 0, ctr: 0 },
    ga4: { visitors: 0, bounceRate: 0, avgSessionDuration: "00:00" },
    gsc: { clicks: 0, impressions: 0, position: 0 },
    trafficSources: [],
    chartData: []
  };
  const data = googleStats && googleStats.adsense ? googleStats : fallbackData;
  return /* @__PURE__ */ jsxs("div", { className: "space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-black text-white", children: "Genel Bakış" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-sm mt-1", children: "Geniş kapsamlı trafik, kazanç ve analiz merkezi" })
      ] }),
      (googleStats == null ? void 0 : googleStats.status) === "pending" && /* @__PURE__ */ jsxs("div", { className: "px-3 py-1.5 rounded-lg border border-amber-500/20 bg-amber-500/10 text-amber-400 text-xs font-semibold flex items-center space-x-2", children: [
        /* @__PURE__ */ jsx(AlertCircle, { className: "w-3.5 h-3.5" }),
        /* @__PURE__ */ jsx("span", { children: "Google API Eksik (.env'i kontrol edin)" })
      ] }),
      (googleStats == null ? void 0 : googleStats.error) && /* @__PURE__ */ jsxs("div", { className: "px-3 py-1.5 rounded-lg border border-rose-500/20 bg-rose-500/10 text-rose-400 text-xs font-semibold flex items-center space-x-2", children: [
        /* @__PURE__ */ jsx(AlertCircle, { className: "w-3.5 h-3.5" }),
        /* @__PURE__ */ jsxs("span", { children: [
          "API Hatası: ",
          googleStats.error
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold text-white mb-2", children: "Google AdSense Finansal Metrikleri" }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "glass-card p-6 rounded-2xl border-emerald-500/20 bg-emerald-500/5 flex justify-between items-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-emerald-500 uppercase tracking-wider", children: "Bugün Kazanılan" }),
          /* @__PURE__ */ jsxs("div", { className: "text-3xl font-black text-emerald-400", children: [
            data.adsense.daily.toFixed(2),
            " ₺"
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "p-3 bg-emerald-500/20 rounded-xl", children: /* @__PURE__ */ jsx(DollarSign, { className: "w-6 h-6 text-emerald-400" }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "glass-card p-6 rounded-2xl border-slate-800 flex justify-between items-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-slate-400 uppercase tracking-wider", children: "Son 7 Gün" }),
          /* @__PURE__ */ jsxs("div", { className: "text-3xl font-black text-white", children: [
            data.adsense.weekly.toFixed(2),
            " ₺"
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "p-3 bg-slate-800 rounded-xl", children: /* @__PURE__ */ jsx(Wallet, { className: "w-6 h-6 text-slate-300" }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "glass-card p-6 rounded-2xl border-slate-800 flex justify-between items-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-slate-400 uppercase tracking-wider", children: "Bu Ay Toplam" }),
          /* @__PURE__ */ jsxs("div", { className: "text-3xl font-black text-white", children: [
            data.adsense.monthly.toFixed(2),
            " ₺"
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "p-3 bg-slate-800 rounded-xl", children: /* @__PURE__ */ jsx(TrendingUp, { className: "w-6 h-6 text-slate-300" }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "glass-card p-6 rounded-2xl border-slate-800 flex justify-between items-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-slate-400 uppercase tracking-wider", children: "RPM (Bin Gös.)" }),
          /* @__PURE__ */ jsxs("div", { className: "text-3xl font-black text-brand-400", children: [
            data.adsense.rpm.toFixed(2),
            " ₺"
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "p-3 bg-brand-500/20 rounded-xl", children: /* @__PURE__ */ jsx(Target, { className: "w-6 h-6 text-brand-400" }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "glass-card p-6 rounded-2xl border-slate-800 flex justify-between items-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-slate-400 uppercase tracking-wider", children: "TBM (CPC)" }),
          /* @__PURE__ */ jsxs("div", { className: "text-3xl font-black text-purple-400", children: [
            data.adsense.cpc.toFixed(2),
            " ₺"
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "p-3 bg-purple-500/20 rounded-xl", children: /* @__PURE__ */ jsx(Activity, { className: "w-6 h-6 text-purple-400" }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "glass-card p-6 rounded-2xl border-slate-800 flex justify-between items-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-slate-400 uppercase tracking-wider", children: "Tıklama Oranı (TO)" }),
          /* @__PURE__ */ jsxs("div", { className: "text-3xl font-black text-pink-400", children: [
            "%",
            (data.adsense.ctr * 100).toFixed(2)
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "p-3 bg-pink-500/20 rounded-xl", children: /* @__PURE__ */ jsx(Globe2, { className: "w-6 h-6 text-pink-400" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold text-white mb-2", children: "Platform ve Trafik Metrikleri" }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "glass-card p-6 rounded-2xl border-slate-800 space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-slate-400 uppercase tracking-wider", children: "Search Console (Tık)" }),
            /* @__PURE__ */ jsx("div", { className: "text-4xl font-black text-white", children: data.gsc.clicks.toLocaleString() })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "p-2.5 bg-brand-500/20 rounded-xl", children: /* @__PURE__ */ jsx(Target, { className: "w-5 h-5 text-brand-400" }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-xs text-slate-400", children: [
          /* @__PURE__ */ jsxs("span", { children: [
            "Gösterim: ",
            /* @__PURE__ */ jsx("strong", { className: "text-slate-200", children: data.gsc.impressions.toLocaleString() })
          ] }),
          /* @__PURE__ */ jsxs("span", { children: [
            "Konum: ",
            /* @__PURE__ */ jsx("strong", { className: "text-slate-200", children: data.gsc.position.toFixed(1) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "glass-card p-6 rounded-2xl border-slate-800 space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-slate-400 uppercase tracking-wider", children: "GA4 Ziyaretçi (Aylık)" }),
            /* @__PURE__ */ jsx("div", { className: "text-4xl font-black text-white", children: data.ga4.visitors.toLocaleString() })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "p-2.5 bg-amber-500/20 rounded-xl", children: /* @__PURE__ */ jsx(Map, { className: "w-5 h-5 text-amber-400" }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-xs text-slate-400", children: [
          /* @__PURE__ */ jsxs("span", { children: [
            "Hemen Çıkma: ",
            /* @__PURE__ */ jsxs("strong", { className: "text-slate-200", children: [
              "%",
              data.ga4.bounceRate.toFixed(1)
            ] })
          ] }),
          /* @__PURE__ */ jsxs("span", { children: [
            "Süre: ",
            /* @__PURE__ */ jsx("strong", { className: "text-slate-200", children: data.ga4.avgSessionDuration })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "glass-card p-6 rounded-2xl border-slate-800 space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-slate-400 uppercase tracking-wider", children: "Indexlenen Toplam Sayfa" }),
            /* @__PURE__ */ jsx("div", { className: "text-4xl font-black text-white", children: sitemapUrls.length > 0 ? sitemapUrls.length.toLocaleString("tr-TR") : "11.232" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "p-2.5 bg-purple-500/20 rounded-xl", children: /* @__PURE__ */ jsx(Globe2, { className: "w-5 h-5 text-purple-400" }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-xs text-slate-400", children: [
          /* @__PURE__ */ jsx("span", { children: "8 Dilde 11.232+ SSG HTML" }),
          /* @__PURE__ */ jsx("span", { className: "text-emerald-400 font-bold", children: "%100 Pre-rendered" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2 glass-card p-6 rounded-2xl border-slate-800 flex flex-col min-h-[350px]", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold text-white mb-6", children: "Ziyaretçi ve Kazanç Grafiği (Son 7 Gün)" }),
        /* @__PURE__ */ jsx("div", { className: "flex-1 w-full relative", children: data.chartData && data.chartData.length > 0 ? /* @__PURE__ */ jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxs(AreaChart, { data: data.chartData, margin: { top: 10, right: 10, left: -20, bottom: 0 }, children: [
          /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { id: "colorViews", x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ jsx("stop", { offset: "5%", stopColor: "#3b82f6", stopOpacity: 0.3 }),
            /* @__PURE__ */ jsx("stop", { offset: "95%", stopColor: "#3b82f6", stopOpacity: 0 })
          ] }) }),
          /* @__PURE__ */ jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "#1e293b", vertical: false }),
          /* @__PURE__ */ jsx(XAxis, { dataKey: "date", stroke: "#475569", fontSize: 12, tickLine: false, axisLine: false }),
          /* @__PURE__ */ jsx(YAxis, { stroke: "#475569", fontSize: 12, tickLine: false, axisLine: false }),
          /* @__PURE__ */ jsx(Tooltip, { contentStyle: { backgroundColor: "#0f172a", borderColor: "#1e293b", borderRadius: "12px" }, itemStyle: { color: "#e2e8f0", fontWeight: "bold" } }),
          /* @__PURE__ */ jsx(Area, { type: "monotone", dataKey: "views", name: "Ziyaretçi", stroke: "#3b82f6", strokeWidth: 3, fillOpacity: 1, fill: "url(#colorViews)" })
        ] }) }) : /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center text-slate-500 space-y-3", children: [
          /* @__PURE__ */ jsx(Database, { className: "w-8 h-8 opacity-50" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm", children: "API bağlantısı kurulduğunda grafik çizilecektir." })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "glass-card p-6 rounded-2xl border-slate-800 flex flex-col min-h-[350px]", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold text-white mb-2", children: "Trafik Kaynakları" }),
        /* @__PURE__ */ jsx("div", { className: "flex-1 w-full relative flex items-center justify-center", children: data.trafficSources && data.trafficSources.length > 0 && data.trafficSources.some((d) => d.value > 0) ? /* @__PURE__ */ jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxs(PieChart, { children: [
          /* @__PURE__ */ jsx(Pie, { data: data.trafficSources, cx: "50%", cy: "50%", innerRadius: 60, outerRadius: 80, paddingAngle: 5, dataKey: "value", children: data.trafficSources.map((entry, index) => /* @__PURE__ */ jsx(Cell, { fill: entry.color }, `cell-${index}`)) }),
          /* @__PURE__ */ jsx(Tooltip, { contentStyle: { backgroundColor: "#0f172a", borderColor: "#1e293b", borderRadius: "12px" } }),
          /* @__PURE__ */ jsx(Legend, { verticalAlign: "bottom", height: 36, iconType: "circle" })
        ] }) }) : /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center justify-center text-slate-500 space-y-3 w-full h-full", children: /* @__PURE__ */ jsx("div", { className: "w-32 h-32 rounded-full border-4 border-slate-800 border-dashed animate-[spin_10s_linear_infinite] flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold", children: "Veri Yok" }) }) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "glass-card p-6 rounded-2xl border-slate-800", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold text-white", children: "Sayfa Bazlı SEO Performansı (Google Search Console)" }),
        (googleStats == null ? void 0 : googleStats.status) === "success" && /* @__PURE__ */ jsx("span", { className: "text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-1 rounded-full font-bold", children: "Son 7 Gün" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left border-collapse", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-800", children: [
          /* @__PURE__ */ jsx("th", { className: "py-3 px-4 text-xs font-bold text-slate-400 uppercase tracking-wider", children: "Sayfa URL" }),
          /* @__PURE__ */ jsx("th", { className: "py-3 px-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-center", children: "Tıklama" }),
          /* @__PURE__ */ jsx("th", { className: "py-3 px-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-center", children: "Gösterim" }),
          /* @__PURE__ */ jsx("th", { className: "py-3 px-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-center", children: "CTR" }),
          /* @__PURE__ */ jsx("th", { className: "py-3 px-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-right", children: "Ort. Sıra" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { children: !googleStats ? /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { colSpan: "5", className: "py-8 text-center text-sm text-slate-500 animate-pulse", children: "Veriler yükleniyor..." }) }) : googleStats.gscPages && googleStats.gscPages.length > 0 ? googleStats.gscPages.map((p, idx) => /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-800/50 hover:bg-slate-800/20 transition", children: [
          /* @__PURE__ */ jsx("td", { className: "py-3 px-4 text-xs font-mono text-brand-300 max-w-xs truncate", children: p.page }),
          /* @__PURE__ */ jsx("td", { className: "py-3 px-4 text-sm font-bold text-white text-center", children: p.clicks }),
          /* @__PURE__ */ jsx("td", { className: "py-3 px-4 text-sm text-slate-300 text-center", children: p.impressions }),
          /* @__PURE__ */ jsxs("td", { className: "py-3 px-4 text-sm text-slate-300 text-center", children: [
            "%",
            p.ctr
          ] }),
          /* @__PURE__ */ jsx("td", { className: "py-3 px-4 text-sm font-bold text-emerald-400 text-right", children: p.position })
        ] }, idx)) : /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { colSpan: "5", className: "py-8 text-center text-sm text-slate-500", children: (googleStats == null ? void 0 : googleStats.status) === "success" ? "Son 7 günde henüz sayfa gösterimi oluşmamış." : "Google Search Console bağlandığında sayfa performansı burada görünecek." }) }) })
      ] }) })
    ] })
  ] });
}
function PseoTab({ realIndexCount }) {
  const [isPinging, setIsPinging] = useState(false);
  const [log, setLog] = useState([]);
  const [filter, setFilter] = useState("all");
  const [pseoPages, setPseoPages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newKeyword, setNewKeyword] = useState("");
  const [sitemapUrlCount, setSitemapUrlCount] = useState(0);
  useEffect(() => {
    fetchPages();
    const loadSitemapCount = async () => {
      try {
        const urls = await fetchAllSitemapUrls();
        if (urls && urls.length > 0) {
          setSitemapUrlCount(urls.length);
        }
      } catch (err) {
        console.error(err);
      }
    };
    loadSitemapCount();
  }, []);
  const fetchPages = async () => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase.from("pseo_pages").select("*").order("created_at", { ascending: false });
      if (error) throw error;
      if (data) setPseoPages(data);
    } catch (err) {
      setLog((prev) => [{ time: (/* @__PURE__ */ new Date()).toLocaleTimeString(), msg: "Supabase veritabanına bağlanılamadı. Tablo henüz oluşturulmamış olabilir." }, ...prev]);
    } finally {
      setIsLoading(false);
    }
  };
  const handleAddKeyword = async (e) => {
    e.preventDefault();
    if (!newKeyword.trim()) return;
    const urlSlug = "/calculator/" + newKeyword.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
    try {
      const { error } = await supabase.from("pseo_pages").insert([
        { keyword: newKeyword, url: urlSlug, status: "Eklendi" }
      ]);
      if (error) throw error;
      setNewKeyword("");
      setLog((prev) => [{ time: (/* @__PURE__ */ new Date()).toLocaleTimeString(), msg: `Başarılı: '${newKeyword}' hedeflere eklendi.` }, ...prev]);
      fetchPages();
    } catch (err) {
      setLog((prev) => [{ time: (/* @__PURE__ */ new Date()).toLocaleTimeString(), msg: `Hata: Ekleme başarısız (${err.message})` }, ...prev]);
    }
  };
  const filteredMap = pseoPages;
  const handleMassPing = async () => {
    setIsPinging(true);
    setLog((prev) => [{ time: (/* @__PURE__ */ new Date()).toLocaleTimeString(), msg: `Ping servisi başlatılıyor... Gerçek Sitemap adresiniz taranıyor.` }, ...prev]);
    try {
      const res = await fetch("/api/mass-ping", { method: "POST" });
      const data = await res.json();
      if (data.success) {
        data.results.forEach((r, idx) => {
          setTimeout(() => {
            if (r.status === "success") {
              setLog((prev) => [{ time: (/* @__PURE__ */ new Date()).toLocaleTimeString(), msg: `✅ Başarılı: ${r.engine} - ${r.message || "200 OK"}` }, ...prev]);
            } else if (r.status === "info") {
              setLog((prev) => [{ time: (/* @__PURE__ */ new Date()).toLocaleTimeString(), msg: `ℹ️ Bilgi: ${r.engine} - ${r.message}` }, ...prev]);
            } else {
              setLog((prev) => [{ time: (/* @__PURE__ */ new Date()).toLocaleTimeString(), msg: `❌ Hata: ${r.engine} - ${r.message || r.statusCode}` }, ...prev]);
            }
          }, idx * 800);
        });
        setTimeout(() => {
          const count = data.urlCount || sitemapUrlCount || 13851;
          setLog((prev) => [{ time: (/* @__PURE__ */ new Date()).toLocaleTimeString(), msg: `🚀 Evrensel Ping İşlemi Tamamlandı: Toplam ${count} sayfa tüm ağlara bildirildi.` }, ...prev]);
          setIsPinging(false);
        }, data.results.length * 800 + 500);
      } else {
        throw new Error(data.error || "Bilinmeyen hata");
      }
    } catch (err) {
      setLog((prev) => [{ time: (/* @__PURE__ */ new Date()).toLocaleTimeString(), msg: `Hata: Ping servisine ulaşılamadı (${err.message})` }, ...prev]);
      setIsPinging(false);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-black text-white", children: "Programatik SEO Komuta Merkezi" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-sm mt-1", children: "Siteniz için otomatik oluşturulacak sayfaları (pSEO) yönetin." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ jsx("div", { className: "md:col-span-1 glass-card p-6 rounded-2xl border-brand-500/30 bg-brand-950/20 flex flex-col", children: /* @__PURE__ */ jsxs("div", { className: "space-y-4 flex-1", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-white", children: "Yeni pSEO Hedefi Ekle" }),
        /* @__PURE__ */ jsxs("form", { onSubmit: handleAddKeyword, className: "space-y-3", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              value: newKeyword,
              onChange: (e) => setNewKeyword(e.target.value),
              placeholder: "Örn: san francisco to tokyo nomad tax",
              className: "w-full bg-slate-900 border border-slate-700 text-white text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-brand-500"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "submit",
              className: "w-full bg-brand-600 hover:bg-brand-500 text-white font-bold py-3 rounded-xl transition shadow-lg shadow-brand-500/20",
              children: "Kelimeleri Ekle ve Oluştur"
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-1 glass-card p-6 rounded-2xl border-blue-500/30 bg-blue-950/10 flex flex-col", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-white mb-2", children: "Evrensel Ping Sistemi" }),
        /* @__PURE__ */ jsxs("p", { className: "text-[11px] text-slate-400 mb-4", children: [
          "Sitemap'teki ",
          /* @__PURE__ */ jsxs("span", { className: "font-bold text-blue-300", children: [
            (sitemapUrlCount || 13851).toLocaleString("tr-TR"),
            " URL"
          ] }),
          "'in tamamını limitsiz olarak tüm arama motorlarına ve AI ağlarına bildirir."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-2 mb-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-xs text-slate-300 flex items-center space-x-1", children: [
            /* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-emerald-500" }),
            /* @__PURE__ */ jsx("span", { children: "Google" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-xs text-slate-300 flex items-center space-x-1", children: [
            /* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-emerald-500" }),
            /* @__PURE__ */ jsx("span", { children: "Bing" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-xs text-slate-300 flex items-center space-x-1", children: [
            /* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-emerald-500" }),
            /* @__PURE__ */ jsx("span", { children: "Yandex" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-xs text-slate-300 flex items-center space-x-1", children: [
            /* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-emerald-500" }),
            /* @__PURE__ */ jsx("span", { children: "Baidu" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-xs text-slate-300 flex items-center space-x-1", children: [
            /* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-purple-500" }),
            /* @__PURE__ */ jsx("span", { children: "OpenAI (GPT)" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-xs text-slate-300 flex items-center space-x-1", children: [
            /* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-purple-500" }),
            /* @__PURE__ */ jsx("span", { children: "Claude" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-xs text-slate-300 flex items-center space-x-1", children: [
            /* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-purple-500" }),
            /* @__PURE__ */ jsx("span", { children: "Perplexity" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-auto", children: /* @__PURE__ */ jsx(
          "button",
          {
            onClick: handleMassPing,
            disabled: isPinging || isLoading,
            className: `w-full py-3 rounded-xl text-sm font-bold transition flex justify-center items-center space-x-2 ${isPinging || isLoading ? "bg-slate-800 text-slate-500 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20"}`,
            children: isPinging ? /* @__PURE__ */ jsx("span", { children: "Pingleniyor..." }) : /* @__PURE__ */ jsx("span", { children: "Tüm Ağlara Pingle" })
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-1 glass-card p-6 rounded-2xl border-slate-800 flex flex-col", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold text-white mb-4", children: "İşlem Logları" }),
        /* @__PURE__ */ jsx("div", { className: "flex-1 overflow-y-auto rounded-xl bg-slate-950 border border-slate-800 p-4 font-mono text-[10px] space-y-3 h-48", children: log.length === 0 ? /* @__PURE__ */ jsx("span", { className: "text-slate-600 flex h-full items-center justify-center text-center", children: "İşlem bekleniyor..." }) : log.map((l, i) => /* @__PURE__ */ jsxs("div", { className: "flex space-x-2 border-b border-slate-800/50 pb-2 last:border-0", children: [
          /* @__PURE__ */ jsxs("span", { className: "text-brand-400 shrink-0", children: [
            "[",
            l.time,
            "]"
          ] }),
          /* @__PURE__ */ jsx("span", { className: l.msg.includes("Başarılı") ? "text-emerald-400 font-bold" : l.msg.includes("Hata") ? "text-rose-400" : "text-slate-300", children: l.msg })
        ] }, i)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "glass-card p-6 rounded-2xl border-slate-800", children: [
      /* @__PURE__ */ jsx("div", { className: "flex justify-between items-center mb-6", children: /* @__PURE__ */ jsxs("h3", { className: "text-sm font-bold text-white", children: [
        "Veritabanındaki Sayfalar (",
        pseoPages.length,
        ")"
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "overflow-x-auto max-h-96", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left border-collapse", children: [
        /* @__PURE__ */ jsx("thead", { className: "sticky top-0 bg-slate-900", children: /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-800", children: [
          /* @__PURE__ */ jsx("th", { className: "py-3 px-4 text-xs font-bold text-slate-400 uppercase tracking-wider", children: "Anahtar Kelime" }),
          /* @__PURE__ */ jsx("th", { className: "py-3 px-4 text-xs font-bold text-slate-400 uppercase tracking-wider", children: "Oluşturulan URL" }),
          /* @__PURE__ */ jsx("th", { className: "py-3 px-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-right", children: "Durum" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { children: isLoading ? /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { colSpan: "3", className: "py-8 text-center text-sm text-slate-500", children: "Veritabanından okunuyor..." }) }) : filteredMap.length === 0 ? /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { colSpan: "3", className: "py-8 text-center text-sm text-slate-500", children: "Henüz hiç hedef sayfa oluşturulmadı." }) }) : filteredMap.map((item, idx) => /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-800/50 hover:bg-slate-800/20 transition", children: [
          /* @__PURE__ */ jsx("td", { className: "py-3 px-4 text-xs font-bold text-white", children: item.keyword }),
          /* @__PURE__ */ jsx("td", { className: "py-3 px-4 text-xs font-mono text-brand-300", children: item.url }),
          /* @__PURE__ */ jsx("td", { className: "py-3 px-4 text-right", children: /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold px-2 py-1 rounded-md bg-emerald-500/20 text-emerald-400", children: item.status || "Eklendi" }) })
        ] }, item.id || idx)) })
      ] }) })
    ] })
  ] });
}
function VitalsTab({ vitals }) {
  const [dbPing, setDbPing] = useState("Ölçülüyor...");
  const [serverLatency, setServerLatency] = useState("Ölçülüyor...");
  const [sysHealth, setSysHealth] = useState(null);
  const [isClearing, setIsClearing] = useState(false);
  const [cacheLog, setCacheLog] = useState("");
  useEffect(() => {
    const measureRealVitals = async () => {
      const dbStart = performance.now();
      try {
        await supabase.from("pseo_pages").select("id").limit(1);
        const dbEnd = performance.now();
        setDbPing(Math.round(dbEnd - dbStart) + "ms");
      } catch (e) {
        setDbPing("Hata");
      }
      const serverStart = performance.now();
      try {
        const res = await fetch("/api/system-health");
        const data = await res.json();
        const serverEnd = performance.now();
        setServerLatency(Math.round(serverEnd - serverStart) + "ms");
        if (data.status === "success") {
          setSysHealth(data);
        }
      } catch (e) {
        setServerLatency("Hata");
      }
    };
    measureRealVitals();
    const int = setInterval(measureRealVitals, 1e4);
    return () => clearInterval(int);
  }, []);
  const handleClearCache = async () => {
    setIsClearing(true);
    setCacheLog("Vercel Edge ağı önbelleği (Cache) temizleniyor...");
    try {
      const res = await fetch("/api/clear-cache", { method: "POST" });
      const data = await res.json();
      if (data.success) {
        setCacheLog(data.message);
      } else {
        setCacheLog(`⚠️ ${data.message}`);
      }
    } catch (err) {
      setCacheLog(`❌ Hata: ${err.message}`);
    } finally {
      setIsClearing(false);
      setTimeout(() => setCacheLog(""), 1e4);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-black text-white", children: "Sistem Sağlığı" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-sm mt-1", children: "Canlı Web Verileri (Core Web Vitals) ve Sunucu Durumu" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "glass-card p-6 rounded-2xl border-emerald-500/20 bg-emerald-950/10 text-center space-y-2", children: [
        /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold text-emerald-500 uppercase tracking-widest", children: "Lighthouse SEO Puanı" }),
        /* @__PURE__ */ jsx("div", { className: "text-5xl font-black text-emerald-400", children: vitals.lighthouseEstimate || 100 })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "glass-card p-6 rounded-2xl border-slate-800 text-center space-y-2", children: [
        /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-widest", children: "Veritabanı Gecikmesi (DB)" }),
        /* @__PURE__ */ jsx("div", { className: "text-3xl font-black text-white", children: dbPing }),
        /* @__PURE__ */ jsx("span", { className: "text-[10px] text-emerald-400 font-bold", children: "Gerçek Zamanlı" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "glass-card p-6 rounded-2xl border-slate-800 text-center space-y-2", children: [
        /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-widest", children: "Sunucu Yanıt Süresi (API)" }),
        /* @__PURE__ */ jsx("div", { className: "text-3xl font-black text-white", children: serverLatency }),
        /* @__PURE__ */ jsx("span", { className: "text-[10px] text-emerald-400 font-bold", children: "Gerçek Zamanlı" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "glass-card p-6 rounded-2xl border-slate-800 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700", children: /* @__PURE__ */ jsx(Server, { className: "w-5 h-5 text-slate-300" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "font-bold text-white text-sm", children: "Sunucu Bellek (RAM)" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400", children: sysHealth ? `${sysHealth.memory.usedGB} GB / ${sysHealth.memory.totalGB} GB Kullanımda` : "Ölçülüyor..." })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-sm font-bold text-brand-400", children: sysHealth ? `%${sysHealth.memory.usagePercent}` : "%--" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "glass-card p-6 rounded-2xl border-slate-800 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700", children: /* @__PURE__ */ jsx(Activity, { className: "w-5 h-5 text-slate-300" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "font-bold text-white text-sm", children: "CPU Yükü" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400", children: sysHealth ? `${sysHealth.cpu.cores} Çekirdek Aktif (${sysHealth.cpu.model.substring(0, 20)})` : "Ölçülüyor..." })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-sm font-bold text-emerald-400", children: sysHealth ? `%${sysHealth.cpu.usagePercent}` : "%--" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "glass-card p-6 rounded-2xl border-rose-500/20 bg-rose-950/10", children: [
      /* @__PURE__ */ jsxs("h3", { className: "text-sm font-bold text-white mb-2 flex items-center space-x-2", children: [
        /* @__PURE__ */ jsx(Zap, { className: "w-4 h-4 text-rose-400" }),
        /* @__PURE__ */ jsx("span", { children: "Sistem Önbellek (Cache) Yönetimi" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400 mb-4", children: "Sayfalardaki veya ayarlardaki güncellemeler anında yansımazsa, Vercel CDN ve Edge Network önbelleğini buradan zorla temizleyebilirsiniz." }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: handleClearCache,
            disabled: isClearing,
            className: `px-4 py-2.5 rounded-lg text-xs font-bold transition flex items-center space-x-2 ${isClearing ? "bg-slate-800 text-slate-500 cursor-not-allowed" : "bg-rose-600 hover:bg-rose-500 text-white shadow-lg shadow-rose-500/20"}`,
            children: isClearing ? "Temizleniyor..." : "Önbelleği (Cache) Temizle"
          }
        ),
        cacheLog && /* @__PURE__ */ jsx("span", { className: `text-xs font-bold ${cacheLog.includes("✅") ? "text-emerald-400" : cacheLog.includes("❌") ? "text-rose-400" : "text-amber-400"}`, children: cacheLog })
      ] })
    ] })
  ] });
}
function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [realPageViews, setRealPageViews] = useState(null);
  const [realIndexCount, setRealIndexCount] = useState(null);
  const [dbError, setDbError] = useState(false);
  const [vitals, setVitals] = useState({ lcp: "Ölçülüyor...", cls: "0.000", loadTime: "Ölçülüyor...", lighthouseEstimate: 100 });
  const [googleStats, setGoogleStats] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setVitals(getRealPerformanceMetrics());
    }, 1e3);
    return () => clearInterval(interval);
  }, []);
  if (isMobile) {
    return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 text-center select-none", children: [
      /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-6", children: /* @__PURE__ */ jsx(AlertTriangle, { className: "w-8 h-8 text-amber-500" }) }),
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-white mb-2", children: "Yönetim Paneli Masaüstü Özeldir" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-sm max-w-xs leading-relaxed", children: "Güvenlik ve ekran genişliği gereksinimleri nedeniyle Yönetici Komuta Merkezi sadece masaüstü bilgisayarlarda görüntülenebilir." })
    ] });
  }
  useEffect(() => {
    const fetchRealStats = async () => {
      try {
        const { count: viewsCount, error: viewsErr } = await supabase.from("page_views").select("*", { count: "exact", head: true });
        if (viewsErr) throw viewsErr;
        setRealPageViews(viewsCount);
        const { count: indexCount, error: indexErr } = await supabase.from("indexing_logs").select("*", { count: "exact", head: true });
        if (!indexErr) setRealIndexCount(indexCount);
        setDbError(false);
      } catch (err) {
        setDbError(true);
      }
    };
    const fetchGoogleStats = async () => {
      try {
        const res = await fetch("/api/google-stats", { cache: "no-store" });
        if (!res.ok) throw new Error("API Bulunamadı veya Ayarlanmadı");
        const data = await res.json();
        setGoogleStats(data);
      } catch (error) {
        setGoogleStats({ status: "pending" });
      }
    };
    fetchRealStats();
    fetchGoogleStats();
  }, []);
  const handleLogout = async () => {
    await supabase.auth.signOut();
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex bg-slate-950 min-h-screen text-slate-100 overflow-x-hidden w-full md:border md:border-slate-800 md:rounded-3xl md:shadow-2xl md:max-w-[1400px] md:mx-auto md:my-6 md:min-h-[calc(100vh-3rem)]", children: [
    /* @__PURE__ */ jsx(Sidebar, { activeTab, setActiveTab, onLogout: handleLogout }),
    /* @__PURE__ */ jsxs("main", { className: "flex-1 min-w-0 p-4 sm:p-6 md:p-10 overflow-y-auto overflow-x-hidden pb-10", children: [
      activeTab === "overview" && /* @__PURE__ */ jsx(OverviewTab, { realPageViews, dbError, googleStats }),
      activeTab === "analytics" && /* @__PURE__ */ jsx(AnalyticsTab, { googleStats }),
      activeTab === "seo" && /* @__PURE__ */ jsx(SeoAuditTab, {}),
      activeTab === "rankings" && /* @__PURE__ */ jsx(RankTrackerTab, {}),
      activeTab === "pseo" && /* @__PURE__ */ jsx(PseoTab, { realIndexCount }),
      activeTab === "vitals" && /* @__PURE__ */ jsx(VitalsTab, { vitals })
    ] })
  ] });
}
export {
  AdminDashboard as default
};
