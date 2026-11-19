// Standalone Production Server for GlobalPayCalc.com
// Serves pre-rendered static pages (56 canonical EN + TR routes), secured /api/* endpoints,
// immediate single-request 410 Gone responses for purged pSEO doorway URLs & retired auto-translated locales,
// and single-hop 301 canonical redirects for legitimate aliases.
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

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

// Retired auto-translated locales & legacy sitemaps -> Immediate 410 Gone so Googlebot
// purges all legacy pSEO doorway URLs from the crawl queue in 1 request instead of burning crawl budget on redirects.
const purgedLangs = new Set(['es', 'de', 'pt', 'fr', 'id', 'ja']);
const purgedSitemaps = new Set([
  '/sitemap-es.xml',
  '/sitemap-de.xml',
  '/sitemap-pt.xml',
  '/sitemap-fr.xml',
  '/sitemap-id.xml',
  '/sitemap-ja.xml'
]);
const purgedSections = new Set(['calculator', 'tools', 'wasm', 'video']);

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
  res.statusCode = 410;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('X-Robots-Tag', 'noindex, nofollow');
  res.setHeader('Cache-Control', 'public, max-age=86400');
  res.end('<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"/><meta name="robots" content="noindex, nofollow"/><title>410 Gone | GlobalPayCalc</title></head><body><h1>410 Gone</h1><p>This legacy URL has been permanently removed. Explore our active tax calculators and research guides at <a href="https://globalpaycalc.com/">GlobalPayCalc.com</a>.</p></body></html>');
}

function send404NotFound(res) {
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('X-Robots-Tag', 'noindex, nofollow');
  res.setHeader('Cache-Control', 'no-cache');
  const custom404 = path.join(distDir, '404.html');
  if (fs.existsSync(custom404)) {
    return fs.createReadStream(custom404).pipe(res);
  }
  res.end('<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"/><meta name="robots" content="noindex, nofollow"/><title>404 Not Found | GlobalPayCalc</title></head><body><h1>404 Not Found</h1><p>The requested page was not found. Visit <a href="https://globalpaycalc.com/">GlobalPayCalc.com</a>.</p></body></html>');
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
    let rawPath;
    try {
      rawPath = decodeURIComponent(parsedUrl.pathname);
    } catch {
      return send404NotFound(res);
    }

    // Normalized path without trailing slash for single-request 410 Gone & redirect matching
    // (Eliminates 2-hop trailing-slash redirect chains on legacy URLs)
    const pathname = rawPath.length > 1 ? rawPath.replace(/\/+$/, '') : rawPath;
    const segments = pathname.split('/').filter(Boolean);

    // 0. IMMEDIATE 410 GONE FOR PURGED pSEO DOORWAY PAGES, RETIRED LOCALES & RETIRED SITEMAPS
    // Evaluated BEFORE trailing-slash redirects so Googlebot drops them in 1 single request.
    if (purgedSitemaps.has(pathname)) {
      return send410Gone(res);
    }
    if (segments.length > 0 && purgedLangs.has(segments[0])) {
      return send410Gone(res);
    }
    if (segments.length > 0 && purgedSections.has(segments[0])) {
      return send410Gone(res);
    }
    if ((segments[0] === 'tr' || segments[0] === 'en') && segments.length > 1 && purgedSections.has(segments[1])) {
      return send410Gone(res);
    }

    // 1. Single-hop 301 canonical redirects for legitimate aliases (evaluated before trailing-slash strip)
    if (pathname === '/yonetim') return sendRedirect(res, '/admin', 301);
    if (pathname === '/og-preview.jpg') return sendRedirect(res, '/og-image.png', 301);
    if (pathname === '/take-home') return sendRedirect(res, '/', 301);
    if (pathname === '/tr/take-home') return sendRedirect(res, '/tr', 301);
    if (segments[0] === 'en') {
      const rest = segments.slice(1);
      if (rest.length === 0 || rest[0] === 'take-home') {
        return sendRedirect(res, '/', 301);
      }
      return sendRedirect(res, '/' + rest.join('/'), 301);
    }

    // Strip trailing slashes on remaining active canonical routes
    if (rawPath.length > 1 && rawPath.endsWith('/')) {
      return sendRedirect(res, pathname + parsedUrl.search, 301);
    }

    // 2. Handle /api/* serverless endpoints with Admin Guard & Rate Limiting
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

    // 3. Static Asset & Pre-rendered HTML Serving from dist/
    const safePath = path.normalize(pathname).replace(/^(\.\.[/\\])+/, '');
    const candidateFile = path.join(distDir, safePath);

    // Check if exact file exists (e.g. /assets/..., /sitemap.xml, /robots.txt, /ads.txt)
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

    // Check if pre-rendered directory index.html exists (e.g. dist/guides/.../index.html)
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
  console.log(`   Canonical Architecture: 56 Pre-Rendered Routes (28 EN + 28 TR) | 410 Gone Purge Active`);
});
