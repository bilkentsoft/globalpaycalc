import React, { useState } from 'react';
import { Zap, ShieldCheck, UploadCloud, RefreshCw, Download } from 'lucide-react';
import { getTranslation } from '../i18n';

export default function QuickWasmCompressor({ lang = 'en' }) {
  const t = (path) => getTranslation(lang, path);

  const [files, setFiles] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processed, setProcessed] = useState(false);
  const [progressPercent, setProgressPercent] = useState(0);

  const handleFileDrop = (e) => {
    e.preventDefault();
    const uploadedFiles = Array.from(e.dataTransfer ? e.dataTransfer.files : e.target.files);
    if (uploadedFiles.length > 0) {
      setFiles(uploadedFiles.map(f => ({
        name: f.name,
        size: (f.size / 1024 / 1024).toFixed(2),
        rawFile: f,
        downloadUrl: null
      })));
      setProcessed(false);
      setProgressPercent(0);
    }
  };

  // Real client-side canvas-based background remover (Segmenting solid/uniform background pixels)
  const processImageBackgroundRemoval = (fileObj) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = URL.createObjectURL(fileObj.rawFile);
      
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        
        ctx.drawImage(img, 0, 0);
        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imgData.data;
        
        // Detect background color: sample the top-left pixel as the base color
        const rTarget = data[0];
        const gTarget = data[1];
        const bTarget = data[2];
        const threshold = 40; // Color similarity threshold
        
        // Scan all pixels and transparentize matching background colors
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i+1];
          const b = data[i+2];
          
          // Euclidean distance of RGB color space
          const dist = Math.sqrt(
            Math.pow(r - rTarget, 2) +
            Math.pow(g - gTarget, 2) +
            Math.pow(b - bTarget, 2)
          );
          
          if (dist < threshold) {
            data[i+3] = 0; // Set Alpha to 0 (Fully transparent!)
          }
        }
        
        ctx.putImageData(imgData, 0, 0);
        
        // Convert canvas output to a transparent PNG Blob
        canvas.toBlob((blob) => {
          const downloadUrl = URL.createObjectURL(blob);
          const compressedSize = (blob.size / 1024 / 1024).toFixed(2);
          resolve({ downloadUrl, compressedSize });
        }, 'image/png');
      };
    });
  };

  const handleStartProcess = async () => {
    if (files.length === 0) return;

    setIsProcessing(true);
    setProgressPercent(10);

    // Simulate progress updates for visual feedback
    const interval = setInterval(() => {
      setProgressPercent(prev => {
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
      setFiles(prev => prev.map((f, idx) => {
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
      console.error('[Process Error]:', err);
    } finally {
      clearInterval(interval);
      setIsProcessing(false);
    }
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto my-8">
      <div className="text-center space-y-3">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold">
          <Zap className="w-3.5 h-3.5" />
          <span>{t('bg.title')} • WebAssembly Engine</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {t('bg.title')}
        </h2>
        <p className="text-slate-400 text-sm leading-relaxed">
          {t('bg.subtitle')}
        </p>
      </div>

      {/* Dropzone */}
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleFileDrop}
        className="glass-card p-10 rounded-2xl text-center border-2 border-dashed border-slate-700 hover:border-cyan-500/50 transition-all cursor-pointer space-y-4"
        onClick={() => document.getElementById('wasm-file-input').click()}
      >
        <div className="w-16 h-16 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center mx-auto">
          <UploadCloud className="w-8 h-8" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-white">{t('bg.dropzone')}</h3>
          <p className="text-xs text-slate-400 mt-1">Supports PNG, JPG, WebP, AVIF & SVG up to 500MB</p>
        </div>
        <input
          type="file"
          multiple
          onChange={handleFileDrop}
          className="hidden"
          id="wasm-file-input"
        />
      </div>

      {/* Selected Files & Processing Status */}
      {files.length > 0 && (
        <div className="glass-card p-6 rounded-2xl space-y-4">
          <div className="flex justify-between items-center text-xs font-semibold text-slate-300">
            <span>{t('bg.selectedFiles')} ({files.length})</span>
            <span>{t('bg.localReady')}</span>
          </div>

          <div className="space-y-2">
            {files.map((file, idx) => (
              <div key={idx} className="flex justify-between items-center p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs">
                <div className="truncate max-w-xs space-y-0.5">
                  <span className="font-mono text-slate-200 block truncate">{file.name}</span>
                  <span className="text-[10px] text-slate-500 font-mono">{t('bg.originalSize')}: {file.size} MB</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  {file.compressedSize && (
                    <div className="text-right font-mono text-xs">
                      <span className="text-slate-400">{t('bg.processedSize')}:</span>
                      <span className="text-emerald-400 font-bold ml-1">{file.compressedSize} MB</span>
                    </div>
                  )}

                  {file.downloadUrl && (
                    <a
                      href={file.downloadUrl}
                      download={`no_bg_${file.name.split('.')[0]}.png`}
                      className="p-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center space-x-1 transition cursor-pointer"
                    >
                      <Download className="w-4 h-4" />
                      <span>{t('bg.download')}</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Progressive Progress Bar */}
          {isProcessing && (
            <div className="space-y-1">
              <div className="flex justify-between text-xs text-slate-400 font-mono">
                <span>{t('bg.progressText')}</span>
                <span>{progressPercent}%</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                <div 
                  className="bg-cyan-500 h-2 rounded-full transition-all duration-150" 
                  style={{ width: `${progressPercent}%` }}
                ></div>
              </div>
            </div>
          )}

          <div className="pt-2 flex justify-between items-center">
            <div className="flex items-center space-x-2 text-xs text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>{t('bg.zeroUpload')}</span>
            </div>

            {!processed && (
              <button
                onClick={handleStartProcess}
                disabled={isProcessing}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-xs hover:opacity-90 transition shadow-lg shadow-cyan-500/20 flex items-center space-x-2 cursor-pointer"
              >
                {isProcessing ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>{t('bg.processing')}</span>
                  </>
                ) : (
                  <>
                    <Zap className="w-4 h-4" />
                    <span>{t('bg.btn')}</span>
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
