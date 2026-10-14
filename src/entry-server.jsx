import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.jsx';
import { generatePseoTaxMatrix, generatePseoLlmMatrix } from './pseo/matrixEngine';
import { supportedLanguages } from './i18n';

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
    '/take-home',
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
    '/wasm',
    '/ai',
    '/privacy',
    '/terms',
    '/about',
    '/contact'
  ];

  const routes = [];

  // 1. Root English core routes
  for (const slug of coreSlugs) {
    routes.push(slug === '' ? '/' : slug);
  }

  // 2. Localized core routes (tr, es, de, pt, fr, id, ja)
  for (const lang of supportedLanguages) {
    if (lang.code === 'en') continue;
    for (const slug of coreSlugs) {
      routes.push(`/${lang.code}${slug}`);
    }
  }

  // 3. Curated canonical pSEO Tax & Relocation corridors (144 pages)
  for (const route of generatePseoTaxMatrix()) {
    routes.push(`/calculator/${route.slug}`);
  }

  // 4. Curated canonical pSEO LLM API Token Cost benchmarks (36 pages)
  for (const route of generatePseoLlmMatrix()) {
    routes.push(`/tools/${route.slug}`);
  }

  return routes;
}
