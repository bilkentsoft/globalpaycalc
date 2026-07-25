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

console.log(`Starting stable sequential prerender for ${routesToPrerender.length} routes...`);

(async () => {
  let successCount = 0;
  
  for (let i = 0; i < routesToPrerender.length; i++) {
    const url = routesToPrerender[i];
    try {
      const { html, helmet } = render(url);

      let result = template;

      // Inject helmet meta tags
      if (helmet) {
        const headInjection = `
          ${helmet.title.toString()}
          ${helmet.meta.toString()}
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
    
    // Log progress every 500 routes to avoid blocking console I/O
    if (i > 0 && i % 500 === 0) {
      console.log(`[prerender] Progress: ${successCount}/${routesToPrerender.length} pages generated.`);
    }
  }
  
  console.log(`✅ Prerender complete! Successfully pre-rendered ${successCount} routes.`);
})();
