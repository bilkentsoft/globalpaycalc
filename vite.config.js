import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import fetch from 'node-fetch';
import url from 'url';
import { exec, spawn } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

// ─── YT-DLP EXTRACTOR ─────────────────────────────────────────────────────────
// Runs locally-installed yt-dlp to extract real, signed YouTube/TikTok/Instagram URLs
const extractWithYtDlp = async (videoUrl) => {
  try {
    // --dump-json: returns stream metadata without downloading
    // -f bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best: best 720p mp4 with audio
    const cmd = `python -m yt_dlp --dump-json --no-playlist -f "bestvideo[height<=720][ext=mp4]+bestaudio[ext=m4a]/best[height<=720][ext=mp4]/best[ext=mp4]/best" "${videoUrl.replace(/"/g, '\\"')}"`;
    console.log('[yt-dlp] Running extraction...');

    const { stdout, stderr } = await execAsync(cmd, { timeout: 30000, maxBuffer: 10 * 1024 * 1024 });

    if (!stdout || !stdout.trim()) {
      console.warn('[yt-dlp] No output received. stderr:', stderr.slice(0, 300));
      return null;
    }

    // yt-dlp may output multiple JSON lines for playlists — take the last
    const lines = stdout.trim().split('\n').filter(l => l.startsWith('{'));
    if (!lines.length) return null;

    const info = JSON.parse(lines[lines.length - 1]);

    const title = info.title || info.fulltitle || 'Video';

    // Get the best combined video URL (with audio)
    let videoStreamUrl = null;
    let audioStreamUrl = null;

    // Case 1: top-level URL is a combined stream
    if (info.url && info.vcodec !== 'none') {
      videoStreamUrl = info.url;
    }

    // Case 2: requested_formats has separate video+audio streams
    if (!videoStreamUrl && info.requested_formats) {
      const videoFmt = info.requested_formats.find(f => f.vcodec && f.vcodec !== 'none' && f.url);
      const audioFmt = info.requested_formats.find(f => f.acodec && f.acodec !== 'none' && !f.vcodec || f.vcodec === 'none');
      if (videoFmt) videoStreamUrl = videoFmt.url;
      if (audioFmt) audioStreamUrl = audioFmt.url;
    }

    // Case 3: scan formats[] for best mp4 with video
    if (!videoStreamUrl && info.formats) {
      const mp4Formats = info.formats.filter(f =>
        f.url && f.vcodec && f.vcodec !== 'none' &&
        (f.ext === 'mp4' || f.container === 'mp4_dash' || f.ext === 'webm')
      );
      mp4Formats.sort((a, b) => (b.height || 0) - (a.height || 0));
      if (mp4Formats.length) videoStreamUrl = mp4Formats[0].url;

      // Best audio
      const audioFormats = info.formats.filter(f =>
        f.url && f.acodec && f.acodec !== 'none' &&
        (f.vcodec === 'none' || !f.vcodec)
      );
      audioFormats.sort((a, b) => (b.abr || 0) - (a.abr || 0));
      if (audioFormats.length) audioStreamUrl = audioFormats[0].url;
    }

    if (!videoStreamUrl) {
      console.warn('[yt-dlp] Could not find video stream URL in response');
      return null;
    }

    console.log(`[yt-dlp] ✓ Extracted: "${title}"`);
    return { title, videoStreamUrl, audioStreamUrl };

  } catch (err) {
    console.error('[yt-dlp] Extraction failed:', err.message.slice(0, 200));
    return null;
  }
};

// ─── COBALT v2 FALLBACK ────────────────────────────────────────────────────────
// For TikTok/Instagram (yt-dlp is primary, cobalt is secondary)
const COBALT_INSTANCES = ['https://api.cobalt.tools/'];

const extractWithCobalt = async (videoUrl) => {
  for (const endpoint of COBALT_INSTANCES) {
    try {
      const cobVideoRes = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: videoUrl, videoQuality: '720' })
      });

      if (cobVideoRes.ok) {
        const result = await cobVideoRes.json();
        if (result && result.url && ['tunnel', 'redirect', 'stream'].includes(result.status)) {
          let audioUrl = null;
          try {
            const cobAudio = await fetch(endpoint, {
              method: 'POST',
              headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
              body: JSON.stringify({ url: videoUrl, downloadMode: 'audio' })
            });
            if (cobAudio.ok) {
              const ar = await cobAudio.json();
              if (ar && ar.url && ['tunnel', 'redirect', 'stream'].includes(ar.status)) {
                audioUrl = ar.url;
              }
            }
          } catch (e) {}
          return { videoStreamUrl: result.url, audioStreamUrl: audioUrl };
        }
      }
    } catch (e) {
      console.warn('[Cobalt]', endpoint, 'failed:', e.message.slice(0, 80));
    }
  }
  return null;
};

// ─── TIKWM FOR TIKTOK ─────────────────────────────────────────────────────────
const extractWithTikWM = async (videoUrl) => {
  try {
    const res = await fetch(`https://api.tikwm.com/api/?url=${encodeURIComponent(videoUrl)}`);
    if (res.ok) {
      const json = await res.json();
      if (json && json.code === 0 && json.data) {
        return {
          title: json.data.title || 'TikTok Video',
          videoStreamUrl: `https://api.tikwm.com${json.data.play}`,
          audioStreamUrl: `https://api.tikwm.com${json.data.music}`
        };
      }
    }
  } catch (e) {}
  return null;
};

// ─── MAIN RESOLVER ────────────────────────────────────────────────────────────
const resolveDownloadStream = async (targetUrl) => {
  const cleanUrl = decodeURIComponent(targetUrl).trim();
  const isTikTok = cleanUrl.includes('tiktok.com');
  const isInstagram = cleanUrl.includes('instagram.com');

  let title = 'Video';
  let videoStreamUrl = null;
  let audioStreamUrl = null;

  // 1. TikTok → TikWM first, then yt-dlp
  if (isTikTok) {
    const tikResult = await extractWithTikWM(cleanUrl);
    if (tikResult) {
      title = tikResult.title;
      videoStreamUrl = tikResult.videoStreamUrl;
      audioStreamUrl = tikResult.audioStreamUrl;
    }
  }

  // 2. For everything (YouTube, Instagram, TikTok fallback) → yt-dlp
  if (!videoStreamUrl) {
    const ytResult = await extractWithYtDlp(cleanUrl);
    if (ytResult) {
      title = ytResult.title;
      videoStreamUrl = ytResult.videoStreamUrl;
      audioStreamUrl = ytResult.audioStreamUrl;
    }
  }

  // 3. Last resort — Cobalt (mainly useful for Instagram)
  if (!videoStreamUrl) {
    const cobResult = await extractWithCobalt(cleanUrl);
    if (cobResult) {
      videoStreamUrl = cobResult.videoStreamUrl;
      audioStreamUrl = cobResult.audioStreamUrl;
    }
  }

  if (!videoStreamUrl) {
    return { success: false, error: 'extraction_failed' };
  }

  const encodedTitle = encodeURIComponent(title);
  return {
    success: true,
    title,
    videoUrl: `/api/download?action=stream&streamUrl=${encodeURIComponent(videoStreamUrl)}&filename=${encodedTitle}&ext=mp4`,
    audioUrl: audioStreamUrl
      ? `/api/download?action=stream&streamUrl=${encodeURIComponent(audioStreamUrl)}&filename=${encodedTitle}&ext=mp3`
      : null
  };
};

// ─── STREAM PROXY ─────────────────────────────────────────────────────────────
const handleStreamProxy = async (req, res, streamUrl, filename, ext) => {
  try {
    const decUrl = decodeURIComponent(streamUrl);
    const safeFilename = decodeURIComponent(filename || 'download').replace(/[^\w\s\-_.]/g, '_').slice(0, 80);

    console.log(`[Stream] Piping: ${decUrl.slice(0, 100)}...`);

    const mediaResponse = await fetch(decUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': '*/*',
        'Accept-Language': 'en-US,en;q=0.9',
        'Referer': 'https://www.youtube.com/'
      },
      redirect: 'follow'
    });

    if (!mediaResponse.ok) {
      console.error(`[Stream] Source HTTP ${mediaResponse.status}`);
      res.writeHead(502, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: `source_http_${mediaResponse.status}` }));
      return;
    }

    const contentType = mediaResponse.headers.get('content-type') || '';
    if (contentType.includes('text/') || contentType.includes('html')) {
      console.warn('[Stream] Got HTML error page instead of media');
      res.writeHead(422, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'source_returned_html' }));
      return;
    }

    const mimeType = ext === 'mp3' ? 'audio/mpeg'
      : ext === 'webm' ? 'video/webm'
      : contentType || 'video/mp4';

    const responseHeaders = {
      'Content-Type': mimeType,
      'Content-Disposition': `attachment; filename="${safeFilename}.${ext || 'mp4'}"`,
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-cache'
    };

    const contentLength = mediaResponse.headers.get('content-length');
    if (contentLength) {
      responseHeaders['Content-Length'] = contentLength;
      console.log(`[Stream] File size: ${Math.round(parseInt(contentLength) / 1024 / 1024 * 10) / 10} MB`);
    }

    const contentRange = mediaResponse.headers.get('content-range');
    if (contentRange) responseHeaders['Content-Range'] = contentRange;

    res.writeHead(200, responseHeaders);
    mediaResponse.body.pipe(res);

  } catch (e) {
    console.error('[Stream] Fatal:', e.message);
    if (!res.headersSent) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'proxy_failed' }));
    }
  }
};

// ─── VITE PLUGIN ─────────────────────────────────────────────────────────────
const localApiPlugin = () => ({
  name: 'local-api-middleware',
  configureServer(server) {
    server.middlewares.use(async (req, res, next) => {
      const parsedUrl = url.parse(req.url, true);

      if (parsedUrl.pathname === '/api/download') {
        const { url: targetUrl, action, streamUrl, filename, ext } = parsedUrl.query;

        if (action === 'stream' && streamUrl) {
          await handleStreamProxy(req, res, streamUrl, filename, ext);
          return;
        }

        if (targetUrl) {
          try {
            const result = await resolveDownloadStream(targetUrl);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(result));
          } catch (err) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ success: false, error: err.message }));
          }
          return;
        }
      }

      if (parsedUrl.pathname === '/api/index-ping') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, timestamp: new Date().toISOString() }));
        return;
      }

      next();
    });
  },
  configurePreviewServer(server) {
    server.middlewares.use(async (req, res, next) => {
      const parsedUrl = url.parse(req.url, true);

      if (parsedUrl.pathname === '/api/download') {
        const { url: targetUrl, action, streamUrl, filename, ext } = parsedUrl.query;

        if (action === 'stream' && streamUrl) {
          await handleStreamProxy(req, res, streamUrl, filename, ext);
          return;
        }

        if (targetUrl) {
          try {
            const result = await resolveDownloadStream(targetUrl);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(result));
          } catch (err) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ success: false, error: err.message }));
          }
          return;
        }
      }

      next();
    });
  }
});

// ─── VITE CONFIG ──────────────────────────────────────────────────────────────
export default defineConfig({
  plugins: [react(), localApiPlugin()],
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        yonetim: resolve(__dirname, 'yonetim/index.html')
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
});
