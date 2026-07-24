export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Sadece POST isteği kabul edilir' });
  }

  const deployHookUrl = process.env.VERCEL_DEPLOY_HOOK;

  if (!deployHookUrl) {
    return res.status(400).json({ 
      success: false, 
      message: 'Vercel Deploy Hook tanımlı değil. Lütfen Vercel panelinden "Settings -> Git -> Deploy Hooks" bölümünden bir URL oluşturup projeye VERCEL_DEPLOY_HOOK ortam değişkeni olarak ekleyin.' 
    });
  }

  try {
    const response = await fetch(deployHookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      return res.status(200).json({ 
        success: true, 
        message: '✅ Önbellek temizleme (Yeniden derleme) isteği Vercel Edge ağına başarıyla gönderildi.' 
      });
    } else {
      const errorText = await response.text();
      return res.status(response.status).json({ 
        success: false, 
        message: `Deploy hook çağrısı başarısız oldu: ${errorText}` 
      });
    }
  } catch (error) {
    console.error('Clear Cache Error:', error);
    return res.status(500).json({ 
      success: false, 
      message: `API bağlantı hatası: ${error.message}` 
    });
  }
}
