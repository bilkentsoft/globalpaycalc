import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.jsx';
import { supportedLanguages } from './i18n';
import { editorialGuides } from './data/editorialGuidesData';

export function render(url) {
  const helmetContext = {};

  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </HelmetProvider>
    </React.StrictMode>
  );

  return { html, helmet: helmetContext.helmet };
}

export function getRoutes() {
  const coreSlugs = [
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

  const routes = [];

  // 1. Root English canonical routes (28 high-value routes)
  for (const slug of coreSlugs) {
    routes.push(slug === '' ? '/' : slug);
  }

  // 2. Localized Turkish canonical routes (28 high-value routes)
  for (const lang of supportedLanguages) {
    if (lang.code === 'en') continue;
    for (const slug of coreSlugs) {
      routes.push(`/${lang.code}${slug}`);
    }
  }

  return routes;
}
