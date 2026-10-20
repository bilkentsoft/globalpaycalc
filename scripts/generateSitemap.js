// Node.js Sitemap Generator Script
// Generates a flat, direct <urlset> in sitemap.xml (144 canonical core tool & legal URLs across 8 languages).
// Templated pSEO pages (/calculator/* and /tools/*) are marked noindex,follow and omitted from sitemaps
// to maintain maximum domain authority and Google AdSense editorial compliance.
import fs from 'fs';
import path from 'path';

const supportedLanguages = ['en', 'tr', 'es', 'de', 'pt', 'fr', 'id', 'ja'];

console.log('[Sitemap Engine] Generating flat canonical sitemap.xml and language sub-sitemaps (144 indexable routes)...');

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

const allCanonicalUrls = [];

// 1. Core English Sitemap (18 canonical core routes)
const enUrls = [];
staticRoutes.forEach(r => enUrls.push({
  loc: `${baseDomain}${r === '' ? '/' : r}`,
  changefreq: r === '' ? 'daily' : 'weekly',
  priority: r === '' ? '1.0' : '0.9'
}));

fs.writeFileSync(path.join(publicDir, 'sitemap-en.xml'), generateSitemapXml(enUrls), 'utf8');
allCanonicalUrls.push(...enUrls);
console.log(`[Sitemap Engine] Created sitemap-en.xml with ${enUrls.length} canonical URLs.`);

// 2. Localized Core Tool Sitemaps (18 translated interactive tools & legal pages per language)
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
  allCanonicalUrls.push(...langUrls);
  console.log(`[Sitemap Engine] Created ${filename} with ${langUrls.length} canonical URLs.`);
}

// 3. Direct Flat <urlset> in sitemap.xml AND sitemap-clean.xml (144 total indexable canonical URLs)
const masterXml = generateSitemapXml(allCanonicalUrls);
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), masterXml, 'utf8');
fs.writeFileSync(path.join(publicDir, 'sitemap-clean.xml'), masterXml, 'utf8');

console.log(`[Sitemap Engine] Direct <urlset> sitemap.xml & sitemap-clean.xml generated with ${allCanonicalUrls.length} canonical URLs.`);
