import * as cheerio from 'cheerio';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Sadece POST isteği kabul edilir' });
  }

  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: 'URL parametresi gereklidir' });
  }

  // Ensure the URL is absolute
  let targetUrl = url;
  if (targetUrl.startsWith('/')) {
    // If running in Vercel, req.headers.host contains the deployment domain
    const protocol = req.headers['x-forwarded-proto'] || 'https';
    targetUrl = `${protocol}://${req.headers.host}${url}`;
  }

  try {
    const start = performance.now();
    // Using a user-agent to avoid simple bot blocks
    const fetchRes = await fetch(targetUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });
    
    if (!fetchRes.ok) {
      return res.status(200).json({ 
        url, 
        success: false,
        error: `Sayfa ${fetchRes.status} hatası döndürdü.` 
      });
    }

    const html = await fetchRes.text();
    const end = performance.now();
    const loadTime = end - start;

    const $ = cheerio.load(html);

    let score = 100;
    const issues = [];

    // 1. Basic Tags
    const title = $('title').text().trim();
    if (!title) { 
      score -= 15; 
      issues.push({ type: 'error', msg: 'Title etiketi eksik.', fix: 'Sayfaya <title> ekleyin.' }); 
    } else if (title.length < 30) { 
      score -= 5; 
      issues.push({ type: 'warning', msg: `Title çok kısa (${title.length} kar).`, fix: 'Açıklayıcı kelimeler ekleyin (Optimum: 50-60).' }); 
    }

    const desc = $('meta[name="description"]').attr('content');
    if (!desc || desc.trim() === '') { 
      score -= 15; 
      issues.push({ type: 'error', msg: 'Meta Description eksik.', fix: '<meta name="description"> ekleyin.' }); 
    }

    // 2. Headings
    const h1s = $('h1');
    if (h1s.length === 0) { 
      score -= 15; 
      issues.push({ type: 'error', msg: 'H1 başlığı yok.', fix: 'Sadece 1 adet <h1> ekleyin.' }); 
    } else if (h1s.length > 1) { 
      score -= 10; 
      issues.push({ type: 'warning', msg: `Birden fazla H1 (${h1s.length}).`, fix: 'H1 tek olmalıdır.' }); 
    }

    // 3. Advanced SEO: Canonical
    const canonical = $('link[rel="canonical"]').attr('href');
    if (!canonical) { 
      score -= 10; 
      issues.push({ type: 'warning', msg: 'Canonical URL eksik.', fix: 'Kopya içeriği önlemek için canonical ekleyin.' }); 
    }

    // 4. Image ALT Tags
    let missingAlts = 0;
    $('img').each((i, img) => {
      if (!$(img).attr('alt')) missingAlts++;
    });
    if (missingAlts > 0) { 
      score -= 10; 
      issues.push({ type: 'warning', msg: `${missingAlts} resimde ALT etiketi yok.`, fix: 'Erişilebilirlik ve görsel SEO için ALT metni ekleyin.' }); 
    }

    // 5. Robots Directives
    const robots = $('meta[name="robots"]').attr('content');
    if (robots && robots.toLowerCase().includes('noindex')) { 
      score -= 50; 
      issues.push({ type: 'error', msg: 'Sayfada NOINDEX var!', fix: 'Sayfanın dizine eklenmesini engelliyorsunuz, kaldırın.' }); 
    }

    // 6. Performance Check
    if (loadTime > 1500) { 
      score -= 10; 
      issues.push({ type: 'warning', msg: `Sayfa yanıt süresi (TTFB) yavaş (${Math.round(loadTime)}ms).`, fix: 'Sunucu yanıt süresini iyileştirin veya cache kullanın.' }); 
    }

    // 7. Schema / JSON-LD
    const jsonLd = $('script[type="application/ld+json"]').length;
    if (jsonLd === 0) { 
      score -= 5; 
      issues.push({ type: 'warning', msg: 'JSON-LD Schema eksik.', fix: 'Zengin sonuçlar için yapısal veri ekleyin.' }); 
    }

    return res.status(200).json({
      url,
      success: true,
      score: Math.max(0, score),
      loadTimeMs: Math.round(loadTime),
      issues
    });

  } catch (error) {
    return res.status(200).json({ 
      url,
      success: false, 
      error: `Bağlantı veya ayrıştırma hatası: ${error.message}` 
    });
  }
}
