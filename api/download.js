// Vercel Serverless Function: api/download.js
import fetch from 'node-fetch';

const COBALT_INSTANCES = [
  'https://api.cobalt.tools/',
  'https://cobalt.api.ryz.cx/',
  'https://cobalt-api.l1.ro/'
];

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    const { url: targetUrl, action, streamUrl, filename, ext } = req.query;

    // --- STREAM PROXY ---
    if (action === 'stream' && streamUrl) {
      const decUrl = decodeURIComponent(streamUrl);
      const safeFilename = (decodeURIComponent(filename || 'globalpaycalc_download')).replace(/[^\w\s\-_.]/g, '_').slice(0, 80);
      const fileExt = ext || 'mp4';

      const mediaResponse = await fetch(decUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Referer': 'https://www.youtube.com/',
          'Origin': 'https://www.youtube.com'
        },
        redirect: 'follow'
      });

      if (!mediaResponse.ok) {
        return res.status(502).json({ error: `Source CDN returned ${mediaResponse.status}` });
      }

      const contentType = mediaResponse.headers.get('content-type') || '';
      const contentLength = parseInt(mediaResponse.headers.get('content-length') || '0', 10);

      // Reject HTML error pages
      if (contentType.includes('text/') || contentType.includes('html')) {
        return res.status(422).json({ error: 'source_returned_error_page' });
      }

      // Reject suspiciously small files (<50KB)
      if (contentLength > 0 && contentLength < 51200) {
        return res.status(422).json({ error: 'file_too_small', bytes: contentLength });
      }

      const mimeType = fileExt === 'mp3' ? 'audio/mpeg' : (contentType || 'video/mp4');
      res.setHeader('Content-Type', mimeType);
      res.setHeader('Content-Disposition', `attachment; filename="${safeFilename}.${fileExt}"`);
      res.setHeader('Cache-Control', 'no-cache');

      const actualLength = mediaResponse.headers.get('content-length');
      if (actualLength) res.setHeader('Content-Length', actualLength);

      const contentRange = mediaResponse.headers.get('content-range');
      if (contentRange) res.setHeader('Content-Range', contentRange);

      mediaResponse.body.pipe(res);
      return;
    }

    // --- EXTRACTION ---
    if (!targetUrl) {
      return res.status(400).json({ error: 'URL parameter is required.' });
    }

    const cleanUrl = decodeURIComponent(targetUrl).trim();
    const platform = cleanUrl.includes('tiktok.com') ? 'tiktok'
      : cleanUrl.includes('instagram.com') ? 'instagram'
      : 'youtube';

    let directUrl = null;
    let audioUrl = null;
    let title = `${platform.toUpperCase()} Video`;

    // Fetch title
    try {
      const oembedRes = await fetch(`https://noembed.com/embed?url=${encodeURIComponent(cleanUrl)}`, {
        headers: { 'User-Agent': 'Mozilla/5.0' }
      });
      if (oembedRes.ok) {
        const oembedData = await oembedRes.json();
        if (oembedData && oembedData.title) title = oembedData.title;
      }
    } catch (e) {}

    // 1. TikTok via TikWM
    if (platform === 'tiktok') {
      try {
        const tikRes = await fetch(`https://api.tikwm.com/api/?url=${encodeURIComponent(cleanUrl)}`);
        if (tikRes.ok) {
          const tikJson = await tikRes.json();
          if (tikJson && tikJson.code === 0 && tikJson.data) {
            directUrl = `https://api.tikwm.com${tikJson.data.play}`;
            audioUrl = `https://api.tikwm.com${tikJson.data.music}`;
          }
        }
      } catch (e) {}
    }

    // 2. Cobalt v2 API
    if (!directUrl) {
      for (const endpoint of COBALT_INSTANCES) {
        try {
          // Video
          const cobVideoRes = await fetch(endpoint, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url: cleanUrl, videoQuality: '720' })
          });

          if (cobVideoRes.ok) {
            const videoResult = await cobVideoRes.json();

            if (videoResult && videoResult.url &&
              ['tunnel', 'redirect', 'stream'].includes(videoResult.status)) {
              directUrl = videoResult.url;
            } else if (videoResult && videoResult.status === 'picker' && videoResult.picker) {
              const item = videoResult.picker.find(p => p.type === 'video' || p.type === 'photo');
              if (item) directUrl = item.url;
            }

            if (directUrl) {
              // Audio (separate request)
              try {
                const cobAudioRes = await fetch(endpoint, {
                  method: 'POST',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({ url: cleanUrl, downloadMode: 'audio' })
                });
                if (cobAudioRes.ok) {
                  const audioResult = await cobAudioRes.json();
                  if (audioResult && audioResult.url &&
                    ['tunnel', 'redirect', 'stream'].includes(audioResult.status)) {
                    audioUrl = audioResult.url;
                  }
                }
              } catch (e) {}

              if (!audioUrl) audioUrl = directUrl;
              break;
            }
          }
        } catch (e) {
          console.warn(`[Cobalt] ${endpoint} failed:`, e.message);
        }
      }
    }

    // 3. Instagram fallback
    if (!directUrl && platform === 'instagram') {
      directUrl = `https://download.instasave.org/video?url=${encodeURIComponent(cleanUrl)}`;
    }

    // 4. All failed — honest error, no fake file
    if (!directUrl) {
      return res.status(200).json({
        success: false,
        error: 'extraction_failed'
      });
    }

    const encodedTitle = encodeURIComponent(title);
    return res.status(200).json({
      success: true,
      platform,
      title,
      videoUrl: `/api/download?action=stream&streamUrl=${encodeURIComponent(directUrl)}&filename=${encodedTitle}&ext=mp4`,
      audioUrl: audioUrl
        ? `/api/download?action=stream&streamUrl=${encodeURIComponent(audioUrl)}&filename=${encodedTitle}&ext=mp3`
        : null,
      sizeMB: null
    });

  } catch (error) {
    console.error('[API Downloader Error]:', error);
    return res.status(500).json({ success: false, error: 'internal_server_error' });
  }
}
