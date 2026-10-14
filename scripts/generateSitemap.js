// Node.js Sitemap Generator Script
// Generates clean, penalty-free sitemap.xml index and sub-sitemaps
// Excludes duplicate /take-home alias (canonicalized to /) and pruned doorway combinations.
import fs from 'fs';
import path from 'path';
import { generatePseoTaxMatrix, generatePseoLlmMatrix } from '../src/pseo/matrixEngine.js';

const supportedLanguages = ['en', 'tr', 'es', 'de', 'pt', 'fr', 'id', 'ja'];

console.log('[Sitemap Engine] Generating curated sitemap index and sub-sitemaps...');

const baseDomain = 'https://globalpaycalc.com';
// Canonical core routes (/take-home is omitted from sitemap because its canonical is /)
const staticRoutes = [
  '',
  '/contractor',
  '/hourly-rate',
  '/beckham-law',
  '/crypto-tax',
  '/eor-cost',
  '/nomad-visa',
  '/salary',
  '/inflation',
  '/fx-fees',
  '/vat',
  '/timezone',
  '/wasm',
  '/ai',
  '/privacy',
  '/terms',
  '/about',
  '/contact'
];

const taxRoutes = generatePseoTaxMatrix();
const llmRoutes = generatePseoLlmMatrix();

const publicDir = path.resolve('public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

const todayIso = new Date().toISOString().split('T')[0];

const generateSitemapXml = (urls) => {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
  urls.forEach(u => {
    xml += `\n  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${todayIso}</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`;
  });
  xml += '\n</urlset>\n';
  return xml;
};

const sitemapFiles = [];

// 1. Core English Sitemap (18 core routes + 144 tax corridors + 36 LLM benchmarks = 198 URLs)
const enUrls = [];
staticRoutes.forEach(r => enUrls.push({
  loc: `${baseDomain}${r === '' ? '/' : r}`,
  changefreq: r === '' ? 'daily' : 'weekly',
  priority: r === '' ? '1.0' : '0.9'
}));
taxRoutes.forEach(r => enUrls.push({
  loc: `${baseDomain}/calculator/${r.slug}`,
  changefreq: 'weekly',
  priority: '0.8'
}));
llmRoutes.forEach(r => enUrls.push({
  loc: `${baseDomain}/tools/${r.slug}`,
  changefreq: 'weekly',
  priority: '0.8'
}));

fs.writeFileSync(path.join(publicDir, 'sitemap-en.xml'), generateSitemapXml(enUrls), 'utf8');
sitemapFiles.push('sitemap-en.xml');
console.log(`[Sitemap Engine] Created sitemap-en.xml with ${enUrls.length} canonical URLs.`);

// 2. Localized Core Tool Sitemaps (18 translated interactive tools per language, zero spun doorway bloat)
for (const lang of supportedLanguages) {
  if (lang === 'en') continue;

  const langUrls = [];
  staticRoutes.forEach(r => langUrls.push({
    loc: `${baseDomain}/${lang}${r}`,
    changefreq: r === '' ? 'daily' : 'weekly',
    priority: r === '' ? '0.9' : '0.8'
  }));

  const filename = `sitemap-${lang}.xml`;
  fs.writeFileSync(path.join(publicDir, filename), generateSitemapXml(langUrls), 'utf8');
  sitemapFiles.push(filename);
  console.log(`[Sitemap Engine] Created ${filename} with ${langUrls.length} canonical URLs.`);
}

// 3. Sitemap Index (sitemap.xml)
let indexXml = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
sitemapFiles.forEach(file => {
  indexXml += `\n  <sitemap>\n    <loc>${baseDomain}/${file}</loc>\n    <lastmod>${new Date().toISOString()}</lastmod>\n  </sitemap>`;
});
indexXml += '\n</sitemapindex>\n';

const indexPath = path.join(publicDir, 'sitemap.xml');
fs.writeFileSync(indexPath, indexXml, 'utf8');

console.log(`[Sitemap Engine] Sitemap Index generated successfully (${enUrls.length + (supportedLanguages.length - 1) * staticRoutes.length} total high-value URLs across ${sitemapFiles.length} sitemaps).`);
