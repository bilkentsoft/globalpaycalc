// Client-Side SVG Dynamic OpenGraph Card Generator
export const generateDynamicOgSvg = ({ title, valueA, valueB, badge = 'GlobalPayCalc.com' }) => {
  const width = 1200;
  const height = 630;

  // Outputs raw SVG markup containing high-CTR sharing cards
  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#020617" />
          <stop offset="100%" stop-color="#0f172a" />
        </linearGradient>
        <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#f43f5e" />
          <stop offset="50%" stop-color="#a855f7" />
          <stop offset="100%" stop-color="#06b6d4" />
        </linearGradient>
      </defs>
      
      <!-- Base Background -->
      <rect width="100%" height="100%" fill="url(#bg)" />
      
      <!-- Border Frame -->
      <rect x="20" y="20" width="${width - 40}" height="${height - 40}" rx="24" fill="none" stroke="url(#accent)" stroke-width="4" opacity="0.4" />
      
      <!-- Brand Logo Badge -->
      <g transform="translate(80, 100)">
        <rect width="240" height="40" rx="20" fill="#f43f5e" fill-opacity="0.1" stroke="#f43f5e" stroke-width="1" />
        <text x="120" y="25" fill="#f43f5e" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle" letter-spacing="1">
          ${badge.toUpperCase()}
        </text>
      </g>
      
      <!-- Dynamic Title -->
      <text x="80" y="220" fill="#ffffff" font-family="sans-serif" font-size="48" font-weight="bold" max-width="1000">
        ${title}
      </text>

      <!-- Key Performance Values -->
      <g transform="translate(80, 360)">
        <!-- Value A Card -->
        <rect x="0" y="0" width="480" height="160" rx="16" fill="#0f172a" stroke="#334155" stroke-width="2" />
        <text x="40" y="60" fill="#94a3b8" font-family="sans-serif" font-size="18" font-weight="bold" uppercase="true">Origin Baseline</text>
        <text x="40" y="120" fill="#ffffff" font-family="sans-serif" font-size="42" font-weight="bold">${valueA}</text>

        <!-- Value B Card -->
        <rect x="540" y="0" width="480" height="160" rx="16" fill="#090d16" stroke="#f43f5e" stroke-width="2" />
        <text x="580" y="60" fill="#f43f5e" font-family="sans-serif" font-size="18" font-weight="bold">Nomad Parity Net</text>
        <text x="580" y="120" fill="#10b981" font-family="sans-serif" font-size="42" font-weight="bold">${valueB}</text>
      </g>
      
      <!-- Footer Info -->
      <text x="80" y="580" fill="#64748b" font-family="sans-serif" font-size="16" letter-spacing="0.5">
        100% Free • Secure client-side calculators.
      </text>
    </svg>
  `;
};
export const getOgDataUri = (config) => {
  const svg = generateDynamicOgSvg(config);
  return `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svg)))}`;
};
