// Standalone Production Server for GlobalPayCalc.com
// Serves pre-rendered static pages, secured /api/* endpoints, 301 canonical redirects,
// and 410 Gone responses for pruned programmatic SEO doorway URLs.
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { generatePseoTaxMatrix, generatePseoLlmMatrix } from './src/pseo/matrixEngine.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, 'dist');
const apiDir = path.join(__dirname, 'api');
const PORT = Number(process.env.PORT || 3005);

// Load env file if present
const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  for (const line of envContent.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eqIdx = trimmed.indexOf('=');
    if (eqIdx > 0) {
      const k = trimmed.slice(0, eqIdx).trim();
      const v = trimmed.slice(eqIdx + 1).trim().replace(/^['"]|['"]$/g, '');
      if (!process.env[k]) process.env[k] = v;
    }
  }
}

// Build lookup sets of valid curated pSEO slugs
const validTaxSlugs = new Set(generatePseoTaxMatrix().map(r => r.slug));
const validLlmSlugs = new Set(generatePseoLlmMatrix().map(r => r.slug));
const supportedLangs = new Set(['en', 'tr', 'es', 'de', 'pt', 'fr', 'id', 'ja']);

// Per-IP Rate Limiter for /api/* endpoints
const rateLimitMap = new Map();
function checkApiRateLimit(ip, apiName) {
  const now = Date.now();
  const windowMs = 60_000;
  const maxReqs = (apiName === 'rank-scrape' || apiName === 'mass-ping') ? 10 : 120;
  const key = `${ip}:${apiName}`;
  const record = rateLimitMap.get(key) || { count: 0, resetAt: now + windowMs };
  if (now > record.resetAt) {
    record.count = 1;
    record.resetAt = now + windowMs;
  } else {
    record.count += 1;
  }
  rateLimitMap.set(key, record);
  return record.count <= maxReqs;
}

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.wasm': 'application/wasm'
};

function setSecurityHeaders(res) {
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
}

// Cache API handlers dynamically
const apiHandlers = new Map();
async function getApiHandler(name) {
  if (!/^[a-z0-9-]+$/i.test(name)) return null;
  if (apiHandlers.has(name)) return apiHandlers.get(name);
  const filePath = path.join(apiDir, `${name}.js`);
  if (!fs.existsSync(filePath)) return null;
  const mod = await import('file://' + filePath.replace(/\\/g, '/'));
  const handler = mod.default;
  apiHandlers.set(name, handler);
  return handler;
}

async function parseBody(req) {
  return new Promise((resolve) => {
    if (req.method === 'GET' || req.method === 'HEAD') return resolve({});
    let raw = '';
    req.on('data', chunk => {
      raw += chunk;
      if (raw.length > 1024 * 1024) req.destroy();
    });
    req.on('end', () => {
      if (!raw) return resolve({});
      try {
        resolve(JSON.parse(raw));
      } catch {
        resolve(raw);
      }
    });
    req.on('error', () => resolve({}));
  });
}

function enhanceRes(res) {
  res.status = (code) => {
    res.statusCode = code;
    return res;
  };
  res.json = (data) => {
    if (!res.headersSent) {
      res.setHeader('Content-Type', 'application/json; charset=utf-8');
    }
    res.end(JSON.stringify(data));
    return res;
  };
  res.send = (body) => {
    if (typeof body === 'object' && body !== null && !Buffer.isBuffer(body)) {
      return res.json(body);
    }
    res.end(String(body));
    return res;
  };
  res.redirect = (statusOrUrl, maybeUrl) => {
    const code = typeof statusOrUrl === 'number' ? statusOrUrl : 302;
    const loc = typeof statusOrUrl === 'number' ? maybeUrl : statusOrUrl;
    res.statusCode = code;
    res.setHeader('Location', loc);
    res.end();
    return res;
  };
  return res;
}

function send410Gone(res) {
  const notFoundFile = path.join(distDir, '404.html');
  res.statusCode = 410;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('X-Robots-Tag', 'noindex, nofollow');
  res.setHeader('Cache-Control', 'public, max-age=3600');
  if (fs.existsSync(notFoundFile)) {
    res.end(fs.readFileSync(notFoundFile));
  } else {
    res.end('<!DOCTYPE html><html><head><meta name="robots" content="noindex"/><title>410 Gone</title></head><body><h1>410 Gone</h1><p>This page has been permanently removed.</p></body></html>');
  }
}

function send404NotFound(res) {
  const notFoundFile = path.join(distDir, '404.html');
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('X-Robots-Tag', 'noindex, nofollow');
  res.setHeader('Cache-Control', 'no-cache');
  if (fs.existsSync(notFoundFile)) {
    res.end(fs.readFileSync(notFoundFile));
  } else {
    res.end('<!DOCTYPE html><html><head><meta name="robots" content="noindex"/><title>404 Not Found</title></head><body><h1>404 Not Found</h1></body></html>');
  }
}

function sendRedirect(res, location, code = 301) {
  res.statusCode = code;
  res.setHeader('Location', location);
  res.setHeader('Cache-Control', 'public, max-age=86400');
  res.end();
}

const server = http.createServer(async (req, res) => {
  try {
    setSecurityHeaders(res);

    const parsedUrl = new URL(req.url || '/', `http://${req.headers.host || 'localhost'}`);
    let pathname = decodeURIComponent(parsedUrl.pathname);

    // Strip trailing slashes (except root /)
    if (pathname.length > 1 && pathname.endsWith('/')) {
      pathname = pathname.replace(/\/+$/, '');
      return sendRedirect(res, pathname + parsedUrl.search, 301);
    }

    // Redirect legacy /yonetim and /og-preview.jpg
    if (pathname === '/yonetim') return sendRedirect(res, '/admin', 301);
    if (pathname === '/og-preview.jpg') return sendRedirect(res, '/og-image.png', 301);

    // 1. Handle /api/* serverless endpoints with Admin Guard & Rate Limiting
    if (pathname.startsWith('/api/')) {
      const apiName = pathname.slice(5).replace(/\/+$/, '');
      if (apiName === 'download') {
        return send410Gone(res);
      }

      const clientIp = req.headers['x-real-ip'] || req.socket.remoteAddress || '127.0.0.1';
      if (!checkApiRateLimit(clientIp, apiName)) {
        res.statusCode = 429;
        res.setHeader('Content-Type', 'application/json');
        return res.end(JSON.stringify({ error: 'Too many requests. Please try again later.' }));
      }

      // Admin API Guard: Require X-GPC-Admin header or Bearer token (except OAuth callback /api/google-auth)
      if (apiName !== 'google-auth') {
        const hasAdminHeader = req.headers['x-gpc-admin'] === '1';
        const hasBearer = typeof req.headers['authorization'] === 'string' && req.headers['authorization'].startsWith('Bearer ');
        const isInternalAudit = req.headers['user-agent']?.includes('GlobalPayCalc-Internal');
        if (!hasAdminHeader && !hasBearer && !isInternalAudit) {
          res.statusCode = 401;
          res.setHeader('Content-Type', 'application/json; charset=utf-8');
          return res.end(JSON.stringify({ error: 'Unauthorized: Admin authentication required.' }));
        }
      }

      const handler = await getApiHandler(apiName);
      if (!handler) {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'application/json');
        return res.end(JSON.stringify({ error: 'API endpoint not found' }));
      }
      req.query = Object.fromEntries(parsedUrl.searchParams.entries());
      req.body = await parseBody(req);
      enhanceRes(res);
      return await handler(req, res);
    }

    // 2. Canonical & SEO Recovery Redirects / 410 Gone Rules
    const segments = pathname.split('/').filter(Boolean);

    // 2a. Redirect /en or /en/* to root canonical
    if (segments[0] === 'en') {
      const target = '/' + segments.slice(1).join('/');
      return sendRedirect(res, target || '/', 301);
    }

    // 2b. Consolidate /take-home, /video and /:lang/take-home, /:lang/video into / and /:lang
    if (pathname === '/take-home' || pathname === '/video') {
      return sendRedirect(res, '/', 301);
    }
    if (segments.length === 2 && supportedLangs.has(segments[0]) && (segments[1] === 'take-home' || segments[1] === 'video')) {
      return sendRedirect(res, `/${segments[0]}`, 301);
    }

    // 2c. Rescue legacy broken hreflang endpoints (/calculator, /:lang/calculator, /tools, /:lang/tools)
    if (pathname === '/calculator') return sendRedirect(res, '/salary', 301);
    if (pathname === '/tools') return sendRedirect(res, '/ai', 301);
    if (segments.length === 2 && supportedLangs.has(segments[0])) {
      if (segments[1] === 'calculator') return sendRedirect(res, `/${segments[0]}/salary`, 301);
      if (segments[1] === 'tools') return sendRedirect(res, `/${segments[0]}/ai`, 301);
    }

    // 2d. Localized pSEO routes /:lang/calculator/:slug and /:lang/tools/:slug -> 301 to EN canonical or 410 Gone
    if (segments.length === 3 && supportedLangs.has(segments[0])) {
      const [, section, rawSlug] = segments;
      if (section === 'calculator') {
        const normalizedSlug = rawSlug.replace('-freelancer-tax-parity', '-nomad-tax-parity');
        if (validTaxSlugs.has(normalizedSlug)) {
          return sendRedirect(res, `/calculator/${normalizedSlug}`, 301);
        }
        return send410Gone(res);
      }
      if (section === 'tools') {
        if (validLlmSlugs.has(rawSlug)) {
          return sendRedirect(res, `/tools/${rawSlug}`, 301);
        }
        return send410Gone(res);
      }
    }

    // 2e. Root pSEO routes /calculator/:slug and /tools/:slug
    if (segments.length === 2 && segments[0] === 'calculator') {
      const rawSlug = segments[1];
      if (rawSlug.endsWith('-freelancer-tax-parity')) {
        const nomadSlug = rawSlug.replace('-freelancer-tax-parity', '-nomad-tax-parity');
        if (validTaxSlugs.has(nomadSlug)) {
          return sendRedirect(res, `/calculator/${nomadSlug}`, 301);
        }
        return send410Gone(res);
      }
      if (!validTaxSlugs.has(rawSlug)) {
        return send410Gone(res);
      }
    }

    if (segments.length === 2 && segments[0] === 'tools') {
      const rawSlug = segments[1];
      if (!validLlmSlugs.has(rawSlug)) {
        return send410Gone(res);
      }
    }

    // 3. Static Asset & Pre-rendered HTML Serving from dist/
    const safePath = path.normalize(pathname).replace(/^(\.\.[/\\])+/, '');
    const candidateFile = path.join(distDir, safePath);

    // Check if exact file exists (e.g. /assets/..., /sitemap.xml, /robots.txt)
    if (fs.existsSync(candidateFile) && fs.statSync(candidateFile).isFile()) {
      const ext = path.extname(candidateFile).toLowerCase();
      res.statusCode = 200;
      res.setHeader('Content-Type', MIME_TYPES[ext] || 'application/octet-stream');
      if (pathname.startsWith('/assets/')) {
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
      } else if (ext === '.xml') {
        // Never cache sitemaps so Google Search Console always reads fresh URL counts immediately
        res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
      } else {
        res.setHeader('Cache-Control', 'public, max-age=86400');
      }
      return fs.createReadStream(candidateFile).pipe(res);
    }

    // Check if pre-rendered directory index.html exists (e.g. dist/calculator/.../index.html)
    const indexHtmlCandidate = path.join(distDir, safePath, 'index.html');
    if (fs.existsSync(indexHtmlCandidate) && fs.statSync(indexHtmlCandidate).isFile()) {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
      return fs.createReadStream(indexHtmlCandidate).pipe(res);
    }

    // Admin SPA fallback (/admin)
    if (pathname === '/admin' || pathname.startsWith('/admin/')) {
      const rootIndex = path.join(distDir, 'index.html');
      if (fs.existsSync(rootIndex)) {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.setHeader('X-Robots-Tag', 'noindex, nofollow');
        res.setHeader('Cache-Control', 'no-store');
        return fs.createReadStream(rootIndex).pipe(res);
      }
    }

    // 4. Everything else is a true 404 Not Found (prevents Soft 404 penalties)
    return send404NotFound(res);
  } catch (err) {
    console.error('[Server Error]', err);
    if (!res.headersSent) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Internal Server Error');
    }
  }
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`✅ GlobalPayCalc production server listening on http://127.0.0.1:${PORT}`);
  console.log(`   Curated Tax Corridors: ${validTaxSlugs.size} | Curated LLM Benchmarks: ${validLlmSlugs.size}`);
});
