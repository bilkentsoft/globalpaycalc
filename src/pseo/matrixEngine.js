// 3D Programmatic SEO Matrix Generator (Expanded with Global Cities)
export const originCities = [
  { code: 'SF', name: 'San Francisco (US)', flag: '🇺🇸', effTax: 0.35 },
  { code: 'NYC', name: 'New York City (US)', flag: '🇺🇸', effTax: 0.38 },
  { code: 'LON', name: 'London (UK)', flag: '🇬🇧', effTax: 0.28 },
  { code: 'BER', name: 'Berlin (Germany)', flag: '🇩🇪', effTax: 0.42 },
  { code: 'PAR', name: 'Paris (France)', flag: '🇫🇷', effTax: 0.40 },
  { code: 'IST', name: 'Istanbul (Turkey)', flag: '🇹🇷', effTax: 0.22 },
  { code: 'DXB', name: 'Dubai (UAE)', flag: '🇦🇪', effTax: 0.00 },
  { code: 'TOR', name: 'Toronto (Canada)', flag: '🇨🇦', effTax: 0.33 },
  { code: 'SYD', name: 'Sydney (Australia)', flag: '🇦🇺', effTax: 0.32 },
  { code: 'AUS', name: 'Austin (US)', flag: '🇺🇸', effTax: 0.24 }
];

export const destinationCities = [
  { code: 'MAD', name: 'Madrid (Spain)', flag: '🇪🇸', effTax: 0.15, costIndex: 60 },
  { code: 'LIS', name: 'Lisbon (Portugal)', flag: '🇵🇹', effTax: 0.20, costIndex: 55 },
  { code: 'BALI', name: 'Bali (Indonesia)', flag: '🇮🇩', effTax: 0.10, costIndex: 32 },
  { code: 'TOK', name: 'Tokyo (Japan)', flag: '🇯🇵', effTax: 0.25, costIndex: 75 },
  { code: 'SNG', name: 'Singapore', flag: '🇸🇬', effTax: 0.12, costIndex: 90 },
  { code: 'BKK', name: 'Bangkok (Thailand)', flag: '🇹🇭', effTax: 0.15, costIndex: 40 },
  { code: 'MED', name: 'Medellin (Colombia)', flag: '🇨🇴', effTax: 0.18, costIndex: 35 },
  { code: 'BUE', name: 'Buenos Aires (Argentina)', flag: '🇦🇷', effTax: 0.10, costIndex: 25 },
  { code: 'CPT', name: 'Cape Town (South Africa)', flag: '🇿🇦', effTax: 0.20, costIndex: 45 }
];

export const nomadStatuses = [
  { code: 'nomad', label: 'Digital Nomad', perk: 'Special Tax Scheme / Beckham Law' },
  { code: 'freelancer', label: 'Freelancer', perk: 'Independent Contractor Exemption' }
];

// Generates 3D pSEO routes (slugs + titles) for city-to-city tax parity calculations
export const generatePseoTaxMatrix = () => {
  const routes = [];
  
  for (const origin of originCities) {
    for (const dest of destinationCities) {
      for (const status of nomadStatuses) {
        const slug = `${origin.code.toLowerCase()}-to-${dest.code.toLowerCase()}-${status.code}-tax-parity`;
        routes.push({
          slug,
          origin,
          dest,
          status,
          title: `${origin.name} to ${dest.name} Remote ${status.label} Tax Parity Calculator`,
          description: `Calculate net remote take-home pay, cost of living difference, and effective tax rates from ${origin.name} to ${dest.name} for remote ${status.label}s.`
        });
      }
    }
  }

  return routes;
};

// Generates 2D pSEO routes for LLM Comparison tool (expanded with next-gen models)
export const generatePseoLlmMatrix = () => {
  const models = [
    'gpt4o', 'claude35', 'gemini15pro', 'llama31', 'gpt4o-mini', 'mistral-large',
    'grok2', 'claude3-opus', 'gemini15-flash', 'llama3-70b'
  ];
  const useCases = [
    'rag-pipeline', 'customer-support', 'data-extraction', 'agents-orchestration',
    'code-generation', 'content-summarization'
  ];
  const routes = [];

  for (let i = 0; i < models.length; i++) {
    for (let j = i + 1; j < models.length; j++) {
      for (const useCase of useCases) {
        const slug = `${models[i]}-vs-${models[j]}-${useCase}-cost`;
        routes.push({
          slug,
          modelA: models[i],
          modelB: models[j],
          useCase,
          title: `${models[i].toUpperCase()} vs ${models[j].toUpperCase()} API Cost Simulator for ${useCase.replace('-', ' ')}`,
          description: `Project and compare monthly API costs between ${models[i]} and ${models[j]} for high volume ${useCase} implementations.`
        });
      }
    }
  }

  return routes;
};
