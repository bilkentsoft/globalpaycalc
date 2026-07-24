import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { Zap, UploadCloud, Download, ShieldCheck, RefreshCw } from "lucide-react";
import { g as getTranslation } from "../entry-server.js";
import "react-dom/server";
import "react-router-dom/server.mjs";
import "react-helmet-async";
import "react-router-dom";
import "@supabase/supabase-js";
function QuickWasmCompressor({ lang = "en" }) {
  const t = (path) => getTranslation(lang, path);
  const [files, setFiles] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processed, setProcessed] = useState(false);
  const [progressPercent, setProgressPercent] = useState(0);
  const handleFileDrop = (e) => {
    e.preventDefault();
    const uploadedFiles = Array.from(e.dataTransfer ? e.dataTransfer.files : e.target.files);
    if (uploadedFiles.length > 0) {
      setFiles(uploadedFiles.map((f) => ({
        name: f.name,
        size: (f.size / 1024 / 1024).toFixed(2),
        rawFile: f,
        downloadUrl: null
      })));
      setProcessed(false);
      setProgressPercent(0);
    }
  };
  const processImageBackgroundRemoval = (fileObj) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = URL.createObjectURL(fileObj.rawFile);
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imgData.data;
        const rTarget = data[0];
        const gTarget = data[1];
        const bTarget = data[2];
        const threshold = 40;
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          const dist = Math.sqrt(
            Math.pow(r - rTarget, 2) + Math.pow(g - gTarget, 2) + Math.pow(b - bTarget, 2)
          );
          if (dist < threshold) {
            data[i + 3] = 0;
          }
        }
        ctx.putImageData(imgData, 0, 0);
        canvas.toBlob((blob) => {
          const downloadUrl = URL.createObjectURL(blob);
          const compressedSize = (blob.size / 1024 / 1024).toFixed(2);
          resolve({ downloadUrl, compressedSize });
        }, "image/png");
      };
    });
  };
  const handleStartProcess = async () => {
    if (files.length === 0) return;
    setIsProcessing(true);
    setProgressPercent(10);
    const interval = setInterval(() => {
      setProgressPercent((prev) => {
        if (prev >= 80) {
          clearInterval(interval);
          return 80;
        }
        return prev + 15;
      });
    }, 150);
    try {
      const result = await processImageBackgroundRemoval(files[0]);
      setProgressPercent(100);
      setFiles((prev) => prev.map((f, idx) => {
        if (idx === 0) {
          return {
            ...f,
            compressedSize: result.compressedSize,
            downloadUrl: result.downloadUrl
          };
        }
        return f;
      }));
      setProcessed(true);
    } catch (err) {
      console.error("[Process Error]:", err);
    } finally {
      clearInterval(interval);
      setIsProcessing(false);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "space-y-8 max-w-4xl mx-auto my-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center space-y-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold", children: [
        /* @__PURE__ */ jsx(Zap, { className: "w-3.5 h-3.5" }),
        /* @__PURE__ */ jsxs("span", { children: [
          t("bg.title"),
          " • WebAssembly Engine"
        ] })
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-extrabold text-white tracking-tight", children: t("bg.title") }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-sm leading-relaxed", children: t("bg.subtitle") })
    ] }),
    /* @__PURE__ */ jsxs(
      "div",
      {
        onDragOver: (e) => e.preventDefault(),
        onDrop: handleFileDrop,
        className: "glass-card p-10 rounded-2xl text-center border-2 border-dashed border-slate-700 hover:border-cyan-500/50 transition-all cursor-pointer space-y-4",
        onClick: () => document.getElementById("wasm-file-input").click(),
        children: [
          /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center mx-auto", children: /* @__PURE__ */ jsx(UploadCloud, { className: "w-8 h-8" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-white", children: t("bg.dropzone") }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400 mt-1", children: "Supports PNG, JPG, WebP, AVIF & SVG up to 500MB" })
          ] }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "file",
              multiple: true,
              onChange: handleFileDrop,
              className: "hidden",
              id: "wasm-file-input"
            }
          )
        ]
      }
    ),
    files.length > 0 && /* @__PURE__ */ jsxs("div", { className: "glass-card p-6 rounded-2xl space-y-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-xs font-semibold text-slate-300", children: [
        /* @__PURE__ */ jsxs("span", { children: [
          t("bg.selectedFiles"),
          " (",
          files.length,
          ")"
        ] }),
        /* @__PURE__ */ jsx("span", { children: t("bg.localReady") })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-2", children: files.map((file, idx) => /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs", children: [
        /* @__PURE__ */ jsxs("div", { className: "truncate max-w-xs space-y-0.5", children: [
          /* @__PURE__ */ jsx("span", { className: "font-mono text-slate-200 block truncate", children: file.name }),
          /* @__PURE__ */ jsxs("span", { className: "text-[10px] text-slate-500 font-mono", children: [
            t("bg.originalSize"),
            ": ",
            file.size,
            " MB"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
          file.compressedSize && /* @__PURE__ */ jsxs("div", { className: "text-right font-mono text-xs", children: [
            /* @__PURE__ */ jsxs("span", { className: "text-slate-400", children: [
              t("bg.processedSize"),
              ":"
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "text-emerald-400 font-bold ml-1", children: [
              file.compressedSize,
              " MB"
            ] })
          ] }),
          file.downloadUrl && /* @__PURE__ */ jsxs(
            "a",
            {
              href: file.downloadUrl,
              download: `no_bg_${file.name.split(".")[0]}.png`,
              className: "p-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center space-x-1 transition cursor-pointer",
              children: [
                /* @__PURE__ */ jsx(Download, { className: "w-4 h-4" }),
                /* @__PURE__ */ jsx("span", { children: t("bg.download") })
              ]
            }
          )
        ] })
      ] }, idx)) }),
      isProcessing && /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-xs text-slate-400 font-mono", children: [
          /* @__PURE__ */ jsx("span", { children: t("bg.progressText") }),
          /* @__PURE__ */ jsxs("span", { children: [
            progressPercent,
            "%"
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-full bg-slate-800 rounded-full h-2 overflow-hidden", children: /* @__PURE__ */ jsx(
          "div",
          {
            className: "bg-cyan-500 h-2 rounded-full transition-all duration-150",
            style: { width: `${progressPercent}%` }
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "pt-2 flex justify-between items-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2 text-xs text-emerald-400", children: [
          /* @__PURE__ */ jsx(ShieldCheck, { className: "w-4 h-4" }),
          /* @__PURE__ */ jsx("span", { children: t("bg.zeroUpload") })
        ] }),
        !processed && /* @__PURE__ */ jsx(
          "button",
          {
            onClick: handleStartProcess,
            disabled: isProcessing,
            className: "px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-xs hover:opacity-90 transition shadow-lg shadow-cyan-500/20 flex items-center space-x-2 cursor-pointer",
            children: isProcessing ? /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx(RefreshCw, { className: "w-4 h-4 animate-spin" }),
              /* @__PURE__ */ jsx("span", { children: t("bg.processing") })
            ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx(Zap, { className: "w-4 h-4" }),
              /* @__PURE__ */ jsx("span", { children: t("bg.btn") })
            ] })
          }
        )
      ] })
    ] })
  ] });
}
export {
  QuickWasmCompressor as default
};
