// Node.js Sitemap Generator Script
// Generates a flat, direct <urlset> in sitemap.xml (56 canonical high-value URLs across English & Turkish:
// 13 interactive financial calculators + 4 legal/E-E-A-T pages + 1 Editorial Hub + 10 Long-Form Tax & Compensation Guides per language).
import fs from 'fs';
import path from 'path';
import { editorialGuides } from '../src/data/editorialGuidesData.js';

const supportedLanguages = ['en', 'tr'];
const obsoleteLanguages = ['es', 'de', 'pt', 'fr', 'id', 'ja'];

console.log('[Sitemap Engine] Generating flat canonical sitemap.xml and language sub-sitemaps (56 indexable routes)...');

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
  '/ai',
  '/guides',
  ...editorialGuides.map(g => `/guides/${g.slug}`),
  '/privacy',
  '/terms',
  '/about',
  '/contact'
];

const publicDir = path.resolve('public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

// Clean up any legacy sub-sitemaps from retired auto-translated locales
for (const oldLang of obsoleteLanguages) {
  const oldFile = path.join(publicDir, `sitemap-${oldLang}.xml`);
  if (fs.existsSync(oldFile)) {
    fs.unlinkSync(oldFile);
    console.log(`[Sitemap Engine] Removed retired sub-sitemap: sitemap-${oldLang}.xml`);
  }
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

// 1. Core English Sitemap (28 canonical routes)
const enUrls = [];
staticRoutes.forEach(r => {
  const isHome = r === '';
  const isGuides = r.startsWith('/guides');
  enUrls.push({
    loc: `${baseDomain}${isHome ? '/' : r}`,
    changefreq: isHome ? 'daily' : 'weekly',
    priority: isHome ? '1.0' : (isGuides ? '0.95' : '0.9')
  });
});

fs.writeFileSync(path.join(publicDir, 'sitemap-en.xml'), generateSitemapXml(enUrls), 'utf8');
allCanonicalUrls.push(...enUrls);
console.log(`[Sitemap Engine] Created sitemap-en.xml with ${enUrls.length} canonical URLs.`);

// 2. Native Turkish Sitemap (28 canonical routes)
for (const lang of supportedLanguages) {
  if (lang === 'en') continue;

  const langUrls = [];
  staticRoutes.forEach(r => {
    const isHome = r === '';
    const isGuides = r.startsWith('/guides');
    langUrls.push({
      loc: `${baseDomain}/${lang}${r}`,
      changefreq: isHome ? 'daily' : 'weekly',
      priority: isHome ? '0.95' : (isGuides ? '0.9' : '0.85')
    });
  });

  const filename = `sitemap-${lang}.xml`;
  fs.writeFileSync(path.join(publicDir, filename), generateSitemapXml(langUrls), 'utf8');
  allCanonicalUrls.push(...langUrls);
  console.log(`[Sitemap Engine] Created ${filename} with ${langUrls.length} canonical URLs.`);
}

// 3. Direct Flat <urlset> in sitemap.xml AND sitemap-clean.xml (56 total indexable canonical URLs)
const masterXml = generateSitemapXml(allCanonicalUrls);
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), masterXml, 'utf8');
fs.writeFileSync(path.join(publicDir, 'sitemap-clean.xml'), masterXml, 'utf8');

console.log(`[Sitemap Engine] Direct <urlset> sitemap.xml & sitemap-clean.xml generated with ${allCanonicalUrls.length} canonical URLs.`);
