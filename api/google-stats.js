import { google } from 'googleapis';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  
  if (req.method === 'OPTIONS') { return res.status(200).end(); }

  const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REFRESH_TOKEN, GA4_PROPERTY_ID } = process.env;

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
    ],
    gscQueries: [],
    gscPages: []
  };

  if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET || !GOOGLE_REFRESH_TOKEN) {
    return res.status(200).json({ status: 'pending', ...dataStructure });
  }

  try {
    const oauth2Client = new google.auth.OAuth2(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET);
    oauth2Client.setCredentials({ refresh_token: GOOGLE_REFRESH_TOKEN });

    const searchConsole = google.searchconsole({ version: 'v1', auth: oauth2Client });
    const adsense = google.adsense({ version: 'v2', auth: oauth2Client });
    const analyticsData = google.analyticsdata({ version: 'v1beta', auth: oauth2Client });

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

          liveData.gscQueries = gscRes.data.rows.slice(0, 15).map(r => ({
            query: r.keys[0],
            clicks: r.clicks,
            impressions: r.impressions,
            position: r.position.toFixed(1)
          }));
        }
        // Page-level performance
        const gscPagesRes = await searchConsole.searchanalytics.query({
          siteUrl,
          requestBody: {
            startDate: yyyyMMdd(sevenDaysAgo),
            endDate: yyyyMMdd(today),
            dimensions: ['page'],
            rowLimit: 50
          }
        });
        if (gscPagesRes.data.rows) {
          liveData.gscPages = gscPagesRes.data.rows.map(r => ({
            page: r.keys[0].replace('https://globalpaycalc.com', '') || '/',
            clicks: r.clicks,
            impressions: r.impressions,
            ctr: (r.ctr * 100).toFixed(1),
            position: r.position.toFixed(1)
          }));
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
      console.error('AdSense Error (Silently ignoring so other tabs work):', e.message);
    }

    // 3. Fetch GA4 Data (Analytics)
    try {
      if (GA4_PROPERTY_ID) {
        // Basic metrics (Visitors, Bounce Rate, Session Duration)
        const ga4BasicRes = await analyticsData.properties.runReport({
          property: `properties/${GA4_PROPERTY_ID}`,
          requestBody: {
            dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
            metrics: [
              { name: 'activeUsers' },
              { name: 'bounceRate' },
              { name: 'averageSessionDuration' }
            ]
          }
        });

        if (ga4BasicRes.data.rows?.[0]) {
          const vals = ga4BasicRes.data.rows[0].metricValues;
          liveData.ga4.visitors = parseInt(vals[0].value);
          liveData.ga4.bounceRate = (parseFloat(vals[1].value) * 100).toFixed(1);
          
          const secs = parseInt(vals[2].value);
          const m = Math.floor(secs / 60);
          const s = secs % 60;
          liveData.ga4.avgSessionDuration = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
        }

        // Traffic Sources
        const ga4TrafficRes = await analyticsData.properties.runReport({
          property: `properties/${GA4_PROPERTY_ID}`,
          requestBody: {
            dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
            dimensions: [{ name: 'sessionDefaultChannelGroup' }],
            metrics: [{ name: 'activeUsers' }]
          }
        });
        if (ga4TrafficRes.data.rows) {
          liveData.trafficSources = ga4TrafficRes.data.rows.map(row => ({
            name: row.dimensionValues[0].value,
            value: parseInt(row.metricValues[0].value)
          }));
        }

        // Top Pages
        const ga4PagesRes = await analyticsData.properties.runReport({
          property: `properties/${GA4_PROPERTY_ID}`,
          requestBody: {
            dateRanges: [{ startDate: '7daysAgo', endDate: 'today' }],
            dimensions: [{ name: 'pagePath' }],
            metrics: [{ name: 'screenPageViews' }],
            limit: 5
          }
        });
        if (ga4PagesRes.data.rows) {
          liveData.topPages = ga4PagesRes.data.rows.map((row, i) => ({
            id: i + 1,
            title: row.dimensionValues[0].value,
            views: parseInt(row.metricValues[0].value)
          }));
        }

        // Devices
        const ga4DevicesRes = await analyticsData.properties.runReport({
          property: `properties/${GA4_PROPERTY_ID}`,
          requestBody: {
            dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
            dimensions: [{ name: 'deviceCategory' }],
            metrics: [{ name: 'activeUsers' }]
          }
        });
        if (ga4DevicesRes.data.rows) {
          liveData.devices = ga4DevicesRes.data.rows.map(row => ({
            name: row.dimensionValues[0].value,
            value: parseInt(row.metricValues[0].value)
          }));
        }

        // Geo Data (Countries)
        const ga4GeoRes = await analyticsData.properties.runReport({
          property: `properties/${GA4_PROPERTY_ID}`,
          requestBody: {
            dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
            dimensions: [{ name: 'country' }],
            metrics: [{ name: 'activeUsers' }],
            limit: 10,
            orderBys: [{ metric: { metricName: 'activeUsers' }, desc: true }]
          }
        });
        if (ga4GeoRes.data.rows) {
          liveData.geoData = ga4GeoRes.data.rows.map(row => ({
            name: row.dimensionValues[0].value,
            value: parseInt(row.metricValues[0].value)
          }));
        }
        
        // Chart Data (Timeline for last 7 days)
        const ga4ChartRes = await analyticsData.properties.runReport({
          property: `properties/${GA4_PROPERTY_ID}`,
          requestBody: {
            dateRanges: [{ startDate: '6daysAgo', endDate: 'today' }],
            dimensions: [{ name: 'dayOfWeekName' }, { name: 'date' }],
            metrics: [{ name: 'activeUsers' }, { name: 'totalRevenue' }],
            orderBys: [{ dimension: { dimensionName: 'date' } }]
          }
        });
        
        if (ga4ChartRes.data.rows) {
          liveData.chartData = ga4ChartRes.data.rows.map(row => ({
            date: row.dimensionValues[0].value.substring(0,3), // e.g. Mon, Tue
            views: parseInt(row.metricValues[0].value),
            revenue: parseFloat(row.metricValues[1].value)
          }));
        }
      }
    } catch (e) {
      console.error('GA4 Error:', e.message);
    }

    res.status(200).json(liveData);
  } catch (error) {
    console.error('Google API Master Error:', error);
    // Even on master auth error, return success with empty data to prevent UI from being permanently "pending" if credentials are bad
    res.status(200).json({ status: 'success', error: error.message, ...dataStructure });
  }
}
