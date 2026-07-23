import * as cheerio from 'cheerio';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { keyword, domain } = req.query;

  if (!keyword || !domain) {
    return res.status(400).json({ error: 'Missing keyword or domain' });
  }

  try {
    // We add a random delay between 500ms - 1500ms to simulate human behavior
    // This is a minimal protection against rate limiting
    await new Promise(r => setTimeout(r, 500 + Math.random() * 1000));

    // Scrape Google Search (first 30 results approx)
    const googleUrl = `https://www.google.com/search?q=${encodeURIComponent(keyword)}&num=30&hl=en`;
    
    const response = await fetch(googleUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
        'Connection': 'keep-alive',
        'Upgrade-Insecure-Requests': '1',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'none',
        'Sec-Fetch-User': '?1',
        'Cache-Control': 'max-age=0',
      }
    });

    if (!response.ok) {
      if (response.status === 429) {
        return res.status(429).json({ error: 'Google IP Rate Limit (429). Lütfen daha sonra tekrar deneyin.' });
      }
      throw new Error(`Google responded with status: ${response.status}`);
    }

    const html = await response.text();
    const $ = cheerio.load(html);

    let rank = null;
    let foundUrl = null;
    let currentIndex = 1;

    // Google organic search results are usually wrapped in 'div.g'
    // But structure changes often. We will look for standard result links.
    $('div.g').each((i, element) => {
      const link = $(element).find('a').first().attr('href');
      
      if (link && link.startsWith('http')) {
        // Exclude Google's own links that might get caught
        if (!link.includes('google.com') && !link.includes('googleusercontent.com')) {
          if (link.includes(domain)) {
            rank = currentIndex;
            foundUrl = link;
            return false; // Break out of each loop
          }
          currentIndex++;
        }
      }
    });

    res.status(200).json({
      keyword,
      domain,
      rank: rank || '>30',
      foundUrl,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Scraping error:', error);
    res.status(500).json({ error: 'Scraping failed', details: error.message });
  }
}
