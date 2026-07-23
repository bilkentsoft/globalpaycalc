import { google } from 'googleapis';

export default async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const { code } = req.query;

  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    'https://globalpaycalc.com/api/google-auth'
  );

  // If no code is present, generate the Auth URL and redirect the user
  if (!code) {
    const scopes = [
      'https://www.googleapis.com/auth/analytics.readonly',
      'https://www.googleapis.com/auth/adsense.readonly',
      'https://www.googleapis.com/auth/webmasters.readonly'
    ];

    const url = oauth2Client.generateAuthUrl({
      access_type: 'offline', // Crucial to get a refresh token
      prompt: 'consent',      // Force consent to guarantee refresh token is returned
      scope: scopes
    });

    return res.redirect(url);
  }

  // If code is present, exchange it for tokens
  try {
    const { tokens } = await oauth2Client.getToken(code);
    
    // Display the refresh token to the user
    res.status(200).send(`
      <!DOCTYPE html>
      <html lang="tr">
      <head>
        <meta charset="UTF-8">
        <title>Google Yetkilendirme Başarılı</title>
        <style>
          body { font-family: system-ui, -apple-system, sans-serif; background: #0f172a; color: white; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh; margin: 0; padding: 20px; text-align: center; }
          .container { background: #1e293b; padding: 40px; border-radius: 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.5); max-width: 600px; width: 100%; border: 1px solid #334155; }
          h1 { color: #10b981; margin-top: 0; }
          .token-box { background: #020617; padding: 20px; border-radius: 8px; margin: 20px 0; word-break: break-all; font-family: monospace; font-size: 1.1rem; border: 1px solid #475569; position: relative; cursor: pointer;}
          .token-box:hover { border-color: #10b981; }
          p { color: #cbd5e1; line-height: 1.6; }
          .important { color: #f59e0b; font-weight: bold; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>✅ Bağlantı Başarılı!</h1>
          <p>Google hesabınızla başarıyla yetki verdiniz. Artık admin paneliniz gerçek verileri çekebilir.</p>
          <p class="important">Lütfen aşağıdaki Refresh Token (Yenileme Şifresi) kodunu kopyalayın ve Vercel'e GOOGLE_REFRESH_TOKEN adıyla ekleyin:</p>
          
          <div class="token-box" onclick="navigator.clipboard.writeText('${tokens.refresh_token}'); alert('Kopyalandı!');">
            ${tokens.refresh_token || 'Hata: Refresh Token alınamadı. (Daha önce yetki verdiyseniz Google hesabınızdan erişimi kaldırıp tekrar deneyin)'}
          </div>
          
          <p style="font-size: 0.9em; color: #94a3b8;">(Kodu kopyalamak için üzerine tıklayabilirsiniz)</p>
        </div>
      </body>
      </html>
    `);
  } catch (error) {
    console.error('OAuth Error:', error);
    res.status(500).send('Yetkilendirme sırasında bir hata oluştu: ' + error.message);
  }
}
