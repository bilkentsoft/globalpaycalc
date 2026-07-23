// Node.js Sitemap Generator Script
// Generates sitemap.xml index and language-specific sub-sitemaps
import fs from 'fs';
import path from 'path';
import { generatePseoTaxMatrix, generatePseoLlmMatrix } from '../src/pseo/matrixEngine.js';

// Define supported languages manually here to avoid import issues if needed, or import from i18n
const supportedLanguages = ['en', 'tr', 'es', 'de', 'pt', 'fr', 'id', 'ja'];

console.log('[Sitemap Engine] Generating dynamic sitemap index and sub-sitemaps...');

const baseDomain = 'https://globalpaycalc.com';
const staticRoutes = ['', '/video', '/wasm', '/salary', '/ai', '/privacy', '/terms', '/about', '/contact'];
const taxRoutes = generatePseoTaxMatrix();
const llmRoutes = generatePseoLlmMatrix();

const publicDir = path.resolve('public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

// Helper to generate a single sitemap
const generateSitemapXml = (urls) => {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
  urls.forEach(u => {
    xml += `\n  <url>\n    <loc>${u.loc}</loc>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`;
  });
  xml += '\n</urlset>';
  return xml;
};

const sitemapFiles = [];

// 1. Generate core english sitemap (sitemap-en.xml)
let enUrls = [];
staticRoutes.forEach(r => enUrls.push({ loc: `${baseDomain}${r}`, changefreq: 'daily', priority: '1.0' }));
taxRoutes.forEach(r => enUrls.push({ loc: `${baseDomain}/calculator/${r.slug}`, changefreq: 'weekly', priority: '0.8' }));
llmRoutes.forEach(r => enUrls.push({ loc: `${baseDomain}/tools/${r.slug}`, changefreq: 'weekly', priority: '0.7' }));

fs.writeFileSync(path.join(publicDir, 'sitemap-en.xml'), generateSitemapXml(enUrls), 'utf8');
sitemapFiles.push('sitemap-en.xml');
console.log(`[Sitemap Engine] Created sitemap-en.xml with ${enUrls.length} URLs.`);

// 2. Generate sub-sitemaps for other languages
for (const lang of supportedLanguages) {
  if (lang === 'en') continue; // English is the root/base mostly, but we can prefix it if we wanted. Actually the router doesn't prefix 'en'.

  let langUrls = [];
  staticRoutes.forEach(r => langUrls.push({ loc: `${baseDomain}/${lang}${r}`, changefreq: 'daily', priority: '0.9' }));
  taxRoutes.forEach(r => langUrls.push({ loc: `${baseDomain}/${lang}/calculator/${r.slug}`, changefreq: 'weekly', priority: '0.7' }));
  llmRoutes.forEach(r => langUrls.push({ loc: `${baseDomain}/${lang}/tools/${r.slug}`, changefreq: 'weekly', priority: '0.6' }));

  const filename = `sitemap-${lang}.xml`;
  fs.writeFileSync(path.join(publicDir, filename), generateSitemapXml(langUrls), 'utf8');
  sitemapFiles.push(filename);
  console.log(`[Sitemap Engine] Created ${filename} with ${langUrls.length} URLs.`);
}

// 3. Generate sitemap.xml (Sitemap Index)
let indexXml = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
sitemapFiles.forEach(file => {
  indexXml += `\n  <sitemap>\n    <loc>${baseDomain}/${file}</loc>\n    <lastmod>${new Date().toISOString()}</lastmod>\n  </sitemap>`;
});
indexXml += '\n</sitemapindex>';

const indexPath = path.join(publicDir, 'sitemap.xml');
fs.writeFileSync(indexPath, indexXml, 'utf8');

console.log(`[Sitemap Engine] Sitemap Index generated successfully at: ${indexPath} linking ${sitemapFiles.length} sub-sitemaps.`);
