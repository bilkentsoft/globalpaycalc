import { google } from 'googleapis';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  
  if (req.method === 'OPTIONS') { return res.status(200).end(); }

  const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REFRESH_TOKEN } = process.env;

  const dataStructure = {
    adsense: { daily: 0.0, weekly: 0.0, monthly: 0.0, rpm: 0.0, cpc: 0.0, ctr: 0.0, impressions: 0 },
    gsc: { clicks: 0, impressions: 0, ctr: 0.0, position: 0.0 },
    ga4: { visitors: 0, bounceRate: 0.0, avgSessionDuration: "00:00" },
    trafficSources: [],
    devices: [],
    geoData: [],
    topPages: [],
    chartData: [
      { date: 'Pzt', views: 0, revenue: 0 }, { date: 'Sal', views: 0, revenue: 0 },
      { date: 'Çar', views: 0, revenue: 0 }, { date: 'Per', views: 0, revenue: 0 },
      { date: 'Cum', views: 0, revenue: 0 }, { date: 'Cmt', views: 0, revenue: 0 },
      { date: 'Paz', views: 0, revenue: 0 }
    ]
  };

  if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET || !GOOGLE_REFRESH_TOKEN) {
    return res.status(200).json({ status: 'pending', ...dataStructure });
  }

  try {
    const oauth2Client = new google.auth.OAuth2(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET);
    oauth2Client.setCredentials({ refresh_token: GOOGLE_REFRESH_TOKEN });

    const searchConsole = google.searchconsole({ version: 'v1', auth: oauth2Client });
    const adsense = google.adsense({ version: 'v2', auth: oauth2Client });

    const liveData = { ...dataStructure, status: 'success' };

    // 1. Fetch Search Console Data (Auto-discover site)
    try {
      const sitesList = await searchConsole.sites.list();
      const siteUrl = sitesList.data.siteEntry?.[0]?.siteUrl;
      if (siteUrl) {
        // Just get last 7 days roughly
        const today = new Date();
        const sevenDaysAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
        const yyyyMMdd = (d) => d.toISOString().split('T')[0];

        const gscRes = await searchConsole.searchanalytics.query({
          siteUrl,
          requestBody: {
            startDate: yyyyMMdd(sevenDaysAgo),
            endDate: yyyyMMdd(today),
            dimensions: ['query']
          }
        });
        
        if (gscRes.data.rows) {
          let totalClicks = 0;
          let totalImp = 0;
          let totalPos = 0;
          gscRes.data.rows.forEach(r => {
            totalClicks += r.clicks;
            totalImp += r.impressions;
            totalPos += (r.position * r.impressions);
          });
          liveData.gsc.clicks = totalClicks;
          liveData.gsc.impressions = totalImp;
          liveData.gsc.ctr = totalImp > 0 ? ((totalClicks / totalImp) * 100) : 0;
          liveData.gsc.position = totalImp > 0 ? (totalPos / totalImp) : 0;
        }
      }
    } catch (e) {
      console.error('GSC Error:', e.message);
    }

    // 2. Fetch AdSense Data (Auto-discover account)
    try {
      const accountsRes = await adsense.accounts.list();
      const account = accountsRes.data.accounts?.[0]?.name;
      if (account) {
        const adsenseRes = await adsense.accounts.reports.generate({
          account,
          dateRange: 'LAST_7_DAYS',
          metrics: ['ESTIMATED_EARNINGS', 'PAGE_VIEWS', 'IMPRESSIONS', 'PAGE_VIEWS_RPM', 'COST_PER_CLICK', 'PAGE_VIEWS_CTR']
        });
        
        if (adsenseRes.data.rows) {
          let totalEarnings = 0;
          let impressions = 0;
          adsenseRes.data.rows.forEach(row => {
            totalEarnings += parseFloat(row.cells[0].value);
            impressions += parseInt(row.cells[2].value);
          });
          
          liveData.adsense.weekly = totalEarnings;
          liveData.adsense.impressions = impressions;
        }
      }
    } catch (e) {
      console.error('AdSense Error:', e.message);
    }

    res.status(200).json(liveData);
  } catch (error) {
    console.error('Google API Master Error:', error);
    res.status(500).json({ error: 'Failed to fetch Google stats: ' + error.message });
  }
}
