import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, '..', p);

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8');
const { render, getRoutes } = await import('file://' + toAbsolute('dist-server/entry-server.js').replace(/\\/g, '/'));

const routesToPrerender = getRoutes();

console.log(`Starting prerender for ${routesToPrerender.length} routes...`);

(async () => {
  const chunkSize = 100;
  for (let i = 0; i < routesToPrerender.length; i += chunkSize) {
    const chunk = routesToPrerender.slice(i, i + chunkSize);
    
    for (const url of chunk) {
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

      // Construct file path
      const filePath = `dist${url === '/' ? '/index' : url}`;
      const absoluteFilePath = toAbsolute(`${filePath}/index.html`.replace('//', '/'));
      
      fs.mkdirSync(path.dirname(absoluteFilePath), { recursive: true });
      fs.writeFileSync(absoluteFilePath, result);
      console.log(`[prerender] ✓ ${url}`);
      } catch (err) {
        console.error(`[prerender] Error on ${url}:`, err.message);
      }
    }
    
    // Her chunk bittiğinde Node.js Event Loop'a nefes aldırıp çöp toplayıcıya (GC) şans veriyoruz
    await new Promise(resolve => setTimeout(resolve, 50));
  }
  
  // Create a base index.html too, just in case (same as /)
  fs.copyFileSync(toAbsolute('dist/index/index.html'), toAbsolute('dist/index.html'));
  
  console.log(`✅ Prerender complete!`);
})();
