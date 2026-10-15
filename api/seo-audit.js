import * as cheerio from 'cheerio';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Sadece POST isteği kabul edilir' });
  }

  const { url } = req.body || {};

  if (!url || typeof url !== 'string') {
    return res.status(400).json({ error: 'URL parametresi gereklidir' });
  }

  // Strict SSRF Protection: Only allow auditing paths belonging to globalpaycalc.com
  let safePathname = '/';
  try {
    const parsed = new URL(url, 'https://globalpaycalc.com');
    if (parsed.hostname !== 'globalpaycalc.com' && parsed.hostname !== 'www.globalpaycalc.com') {
      return res.status(403).json({
        url,
        success: false,
        error: 'Güvenlik (SSRF Koruması): Sadece globalpaycalc.com adresleri denetlenebilir.'
      });
    }
    safePathname = parsed.pathname || '/';
  } catch {
    return res.status(400).json({ url, success: false, error: 'Geçersiz URL formatı.' });
  }

  const localPort = Number(process.env.PORT || 3005);
  const internalTargetUrl = `http://127.0.0.1:${localPort}${safePathname}`;

  try {
    const start = performance.now();
    const fetchRes = await fetch(internalTargetUrl, {
      headers: {
        'User-Agent': 'GlobalPayCalc-Internal-SEO-Auditor/2.0',
        'Host': 'globalpaycalc.com'
      },
      redirect: 'manual'
    });

    if (!fetchRes.ok && fetchRes.status !== 301 && fetchRes.status !== 302) {
      return res.status(200).json({
        url: safePathname,
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
    const title = $('title').first().text().trim();
    if (!title) {
      score -= 15;
      issues.push({ type: 'error', msg: 'Title etiketi eksik.', fix: 'Sayfaya <title> ekleyin.' });
    } else if (title.length < 25) {
      score -= 5;
      issues.push({ type: 'warning', msg: `Title çok kısa (${title.length} kar).`, fix: 'Açıklayıcı kelimeler ekleyin (Optimum: 45-65).' });
    }

    const desc = $('meta[name="description"]').first().attr('content');
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
      url: safePathname,
      success: true,
      score: Math.max(0, score),
      loadTimeMs: Math.round(loadTime),
      issues
    });
  } catch (error) {
    return res.status(200).json({
      url: safePathname,
      success: false,
      error: `Bağlantı veya ayrıştırma hatası: ${error.message}`
    });
  }
}
