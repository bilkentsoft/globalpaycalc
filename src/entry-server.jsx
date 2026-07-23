import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.jsx';

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

import { generatePseoTaxMatrix, generatePseoLlmMatrix } from './pseo/matrixEngine';
import { supportedLanguages } from './i18n';

export function getRoutes() {
  const routes = ['/', '/video', '/wasm', '/salary', '/ai', '/admin', '/privacy', '/terms', '/about', '/contact'];
  
  for (const lang of supportedLanguages) {
    routes.push(`/${lang.code}`);
    routes.push(`/${lang.code}/video`);
    routes.push(`/${lang.code}/wasm`);
    routes.push(`/${lang.code}/salary`);
    routes.push(`/${lang.code}/ai`);
    routes.push(`/${lang.code}/privacy`);
    routes.push(`/${lang.code}/terms`);
    routes.push(`/${lang.code}/about`);
    routes.push(`/${lang.code}/contact`);
  }

  for (const route of generatePseoTaxMatrix()) {
    routes.push(`/calculator/${route.slug}`);
    for (const lang of supportedLanguages) {
      routes.push(`/${lang.code}/calculator/${route.slug}`);
    }
  }
  
  for (const route of generatePseoLlmMatrix()) {
    routes.push(`/tools/${route.slug}`);
    for (const lang of supportedLanguages) {
      routes.push(`/${lang.code}/tools/${route.slug}`);
    }
  }

  return routes;
}
