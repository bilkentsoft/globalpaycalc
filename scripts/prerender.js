import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, '..', p);

let template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8');

// Find and inline main CSS dynamically to eliminate render-blocking network requests
const assetsDir = toAbsolute('dist/assets');
const cssFile = fs.readdirSync(assetsDir).find(file => file.startsWith('main-') && file.endsWith('.css'));
if (cssFile) {
  const cssPath = path.join(assetsDir, cssFile);
  const cssContent = fs.readFileSync(cssPath, 'utf-8');
  console.log(`[prerender] Inlining main CSS file: ${cssFile} (${cssContent.length} bytes)`);
  const cssLinkRegex = new RegExp(`<link rel="stylesheet"[^>]*href="[^"]*${cssFile}"[^>]*>`, 'i');
  template = template.replace(cssLinkRegex, `<style>${cssContent}</style>`);
}

const { render, getRoutes } = await import('file://' + toAbsolute('dist-server/entry-server.js').replace(/\\/g, '/'));

const routesToPrerender = getRoutes();
const supportedLangCodes = new Set(['en', 'tr', 'es', 'de', 'pt', 'fr', 'id', 'ja']);

console.log(`Starting stable sequential prerender for ${routesToPrerender.length} routes...`);

(async () => {
  let successCount = 0;

  for (let i = 0; i < routesToPrerender.length; i++) {
    const url = routesToPrerender[i];
    try {
      const { html, helmet } = render(url);

      // Determine page language from URL prefix
      const firstSegment = url.split('/').filter(Boolean)[0];
      const pageLang = supportedLangCodes.has(firstSegment) ? firstSegment : 'en';

      let result = template.replace('<html lang="en" class="dark">', `<html lang="${pageLang}" class="dark">`);

      // Inject helmet meta tags
      if (helmet) {
        const metaStr = helmet.meta.toString();
        if (metaStr.includes('noindex')) {
          result = result.replace(
            '<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />',
            ''
          );
        }
        const headInjection = `
          ${helmet.title.toString()}
          ${metaStr}
          ${helmet.link.toString()}
        `;
        result = result.replace(`<!--app-head-->`, headInjection);
      }

      // Inject HTML
      result = result.replace(`<div id="root"></div>`, `<div id="root">${html}</div>`);

      // Construct clean file path
      const absoluteFilePath = url === '/'
        ? toAbsolute('dist/index.html')
        : toAbsolute(`dist${url}/index.html`);

      fs.mkdirSync(path.dirname(absoluteFilePath), { recursive: true });
      fs.writeFileSync(absoluteFilePath, result, 'utf-8');
      successCount++;
    } catch (err) {
      console.error(`[prerender] Error on ${url}:`, err.message);
    }
  }

  // Also pre-render 404.html for true 404/410 responses (strip AdSense script per Google Publisher Policy against ads on error pages)
  try {
    const { html } = render('/404-not-found');
    let notFoundHtml = template
      .replace('<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />', '<meta name="robots" content="noindex, nofollow" />')
      .replace(/<script[^>]*adsbygoogle\.js[^>]*><\/script>/g, '')
      .replace('<!--app-head-->', '<title>404 - Page Not Found | GlobalPayCalc</title>')
      .replace('<div id="root"></div>', `<div id="root">${html}</div>`);
    fs.writeFileSync(toAbsolute('dist/404.html'), notFoundHtml, 'utf-8');
  } catch (err) {
    console.error('[prerender] Error generating 404.html:', err.message);
  }

  console.log(`✅ Prerender complete! Successfully pre-rendered ${successCount} routes + 404.html.`);
})();
