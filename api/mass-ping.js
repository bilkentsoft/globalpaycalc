export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const sitemapUrl = 'https://globalpaycalc.com/sitemap.xml';
  
  const engines = [
    { name: 'Google', url: `https://www.google.com/ping?sitemap=${sitemapUrl}` },
    { name: 'Bing', url: `https://www.bing.com/ping?sitemap=${sitemapUrl}` },
    { name: 'Yandex', url: `https://webmaster.yandex.ru/ping?sitemap=${sitemapUrl}` },
  ];

  let urlCount = 0;
  try {
    const smRes = await fetch(sitemapUrl);
    if (smRes.ok) {
      const smText = await smRes.text();
      // sitemapIndex veya sitemap kullanımlarına göre yaklaşık url veya sitemap tag'i sayar
      const matches = smText.match(/<loc>/g);
      if (matches) {
        urlCount = matches.length;
      }
    }
  } catch (e) {
    urlCount = 4132; // Fallback
  }
  if (urlCount === 0) urlCount = 4132; // Fallback to known static routes

  const results = [];

  for (const engine of engines) {
    try {
      const response = await fetch(engine.url);
      results.push({
        engine: engine.name,
        status: response.status === 200 ? 'success' : 'failed',
        statusCode: response.status
      });
    } catch (e) {
      results.push({
        engine: engine.name,
        status: 'error',
        message: e.message
      });
    }
  }

  // AI botların ping API'si yoktur; sitemap ve IndexNow üzerinden keşfederler
  results.push({ engine: 'OpenAI (GPTBot)', status: 'info', message: 'GPTBot sitemap.xml\'i kendiliginden tarar. Direkt ping API\'si mevcut degil.' });
  results.push({ engine: 'Anthropic (Claude)', status: 'info', message: 'ClaudeBot sitemap.xml\'i kendiliginden tarar. Direkt ping API\'si mevcut degil.' });
  results.push({ engine: 'Perplexity', status: 'info', message: 'PerplexityBot sitemap.xml\'i kendiliginden tarar. Direkt ping API\'si mevcut degil.' });
  results.push({ engine: 'Baidu', status: 'info', message: 'Baidu ping icin sitemap.xml URL\'si Baidu Webmaster\'a manuel eklenmeli.' });

  res.status(200).json({ success: true, urlCount, results });
}
