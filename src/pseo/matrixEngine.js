// Curated High-Intent Programmatic SEO Matrix Engine
// Pruned from 12,312 thin doorway pages to ~180 rich, data-backed interactive calculator corridors
// to comply with Google's Scaled Content Abuse & Helpful Content guidelines.

export const originCities = [
  { code: 'SF', name: 'San Francisco (US)', flag: '🇺🇸', effTax: 0.35, socialSec: 0.0765, avgRent1Br: 3350, avgLivingExRent: 1650, currency: 'USD', taxNotes: 'US Federal + California State (up to 13.3%) + FICA' },
  { code: 'NYC', name: 'New York City (US)', flag: '🇺🇸', effTax: 0.38, socialSec: 0.0765, avgRent1Br: 3800, avgLivingExRent: 1750, currency: 'USD', taxNotes: 'US Federal + NY State + NYC Local Tax + FICA' },
  { code: 'LON', name: 'London (UK)', flag: '🇬🇧', effTax: 0.28, socialSec: 0.08, avgRent1Br: 2550, avgLivingExRent: 1350, currency: 'GBP', taxNotes: 'UK PAYE Income Tax (20%-45%) + Class 1/4 National Insurance' },
  { code: 'BER', name: 'Berlin (Germany)', flag: '🇩🇪', effTax: 0.42, socialSec: 0.20, avgRent1Br: 1550, avgLivingExRent: 1150, currency: 'EUR', taxNotes: 'German Progressive Einkommensteuer (14%-45%) + Mandatory Health/Pension' },
  { code: 'PAR', name: 'Paris (France)', flag: '🇫🇷', effTax: 0.40, socialSec: 0.22, avgRent1Br: 1650, avgLivingExRent: 1250, currency: 'EUR', taxNotes: 'French IR Progressive Brackets + URSSAF Social Contributions' },
  { code: 'IST', name: 'Istanbul (Turkey)', flag: '🇹🇷', effTax: 0.22, socialSec: 0.14, avgRent1Br: 950, avgLivingExRent: 750, currency: 'TRY', taxNotes: 'Turkish Progressive Income Tax (15%-40%) with 80% Remote Software Export Deduction (GVK 89/13)' },
  { code: 'TOR', name: 'Toronto (Canada)', flag: '🇨🇦', effTax: 0.33, socialSec: 0.0595, avgRent1Br: 2050, avgLivingExRent: 1250, currency: 'CAD', taxNotes: 'Canadian Federal + Ontario Provincial Tax + CPP/EI' },
  { code: 'SYD', name: 'Sydney (Australia)', flag: '🇦🇺', effTax: 0.32, socialSec: 0.02, avgRent1Br: 2350, avgLivingExRent: 1300, currency: 'AUD', taxNotes: 'ATO Resident Progressive Brackets + 2% Medicare Levy' },
  { code: 'AUS', name: 'Austin (US)', flag: '🇺🇸', effTax: 0.24, socialSec: 0.0765, avgRent1Br: 1750, avgLivingExRent: 1250, currency: 'USD', taxNotes: 'US Federal Income Tax + 0% Texas State Income Tax + FICA' },
  { code: 'ZRH', name: 'Zurich (Switzerland)', flag: '🇨🇭', effTax: 0.18, socialSec: 0.064, avgRent1Br: 2650, avgLivingExRent: 1850, currency: 'CHF', taxNotes: 'Swiss Federal + Zurich Cantonal & Municipal Tax + AHV/IV' },
  { code: 'AMS', name: 'Amsterdam (Netherlands)', flag: '🇳🇱', effTax: 0.37, socialSec: 0.11, avgRent1Br: 2250, avgLivingExRent: 1300, currency: 'EUR', taxNotes: 'Dutch Box 1 Income Tax (36.97%-49.5%) / 30% Expat Ruling' },
  { code: 'DUB', name: 'Dublin (Ireland)', flag: '🇮🇪', effTax: 0.30, socialSec: 0.04, avgRent1Br: 2300, avgLivingExRent: 1300, currency: 'EUR', taxNotes: 'Irish PAYE (20%/40%) + USC (0.5%-8%) + 4% PRSI' }
];

export const destinationCities = [
  {
    code: 'MAD',
    name: 'Madrid (Spain)',
    flag: '🇪🇸',
    effTax: 0.24,
    costIndex: 60,
    avgRent1Br: 1350,
    avgLivingExRent: 950,
    internetMbps: 300,
    visaMinIncomeMonthly: 2850,
    visaType: 'Spain Digital Nomad Visa (Ley de Startups)',
    taxSchemeName: 'Beckham Law (Ley Beckham - 24% Flat Tax up to €600k)',
    taxSchemeSummary: 'Qualifying remote workers and relocated employees pay a flat 24% tax on Spanish-sourced income up to €600,000 for 6 years, with foreign passive income largely exempt.'
  },
  {
    code: 'LIS',
    name: 'Lisbon (Portugal)',
    flag: '🇵🇹',
    effTax: 0.20,
    costIndex: 55,
    avgRent1Br: 1300,
    avgLivingExRent: 850,
    internetMbps: 220,
    visaMinIncomeMonthly: 3480,
    visaType: 'Portugal D8 Digital Nomad Visa',
    taxSchemeName: 'IFICI (NHR 2.0 - 20% Flat Rate for High-Value Tech/R&D)',
    taxSchemeSummary: 'Portugal’s D8 visa allows remote workers earning 4x the minimum wage to reside legally, while qualifying tech/innovation roles under IFICI benefit from a 20% flat IRS rate.'
  },
  {
    code: 'BALI',
    name: 'Bali (Indonesia)',
    flag: '🇮🇩',
    effTax: 0.00,
    costIndex: 32,
    avgRent1Br: 750,
    avgLivingExRent: 650,
    internetMbps: 65,
    visaMinIncomeMonthly: 5000,
    visaType: 'Indonesia E33G Remote Worker KITAS (1 Year)',
    taxSchemeName: 'E33G Foreign-Sourced Income Exemption (0% Local Tax)',
    taxSchemeSummary: 'Holders of the E33G Remote Worker Visa earning at least $60,000/year from an overseas employer are exempt from Indonesian local income tax on foreign-sourced remuneration.'
  },
  {
    code: 'TOK',
    name: 'Tokyo (Japan)',
    flag: '🇯🇵',
    effTax: 0.20,
    costIndex: 72,
    avgRent1Br: 1150,
    avgLivingExRent: 950,
    internetMbps: 280,
    visaMinIncomeMonthly: 5600,
    visaType: 'Japan Digital Nomad Specified Activities Visa (6 Months)',
    taxSchemeName: 'Non-Resident Treaty Exemption (6-Month Stay) / 20.42% Non-Resident Rate',
    taxSchemeSummary: 'Japan’s 6-month Digital Nomad Visa requires ¥10M (~$67k) annual income and allows remote work for foreign clients without triggering permanent Japanese tax residency.'
  },
  {
    code: 'SNG',
    name: 'Singapore',
    flag: '🇸🇬',
    effTax: 0.12,
    costIndex: 88,
    avgRent1Br: 2600,
    avgLivingExRent: 1300,
    internetMbps: 320,
    visaMinIncomeMonthly: 6000,
    visaType: 'Singapore EntrePass / ONE Pass / Employment Pass',
    taxSchemeName: 'Singapore Progressive Territorial Tax (Effective ~11-15%, 0% Capital Gains)',
    taxSchemeSummary: 'Singapore taxes resident income progressively from 0% to 24%, resulting in an effective rate around 11–14% on six-figure tech salaries with zero capital gains tax.'
  },
  {
    code: 'BKK',
    name: 'Bangkok (Thailand)',
    flag: '🇹🇭',
    effTax: 0.15,
    costIndex: 40,
    avgRent1Br: 650,
    avgLivingExRent: 600,
    internetMbps: 250,
    visaMinIncomeMonthly: 2500,
    visaType: 'Destination Thailand Visa (DTV - 5 Year Multi-Entry) / LTR Visa',
    taxSchemeName: 'DTV <180-Day Non-Tax Resident / LTR 17% Flat Rate',
    taxSchemeSummary: 'The 5-year DTV allows 180-day stays per entry. Staying under 180 days/year avoids Thai tax residency; LTR Work-from-Thailand professionals enjoy foreign income tax exemptions.'
  },
  {
    code: 'MED',
    name: 'Medellin (Colombia)',
    flag: '🇨🇴',
    effTax: 0.15,
    costIndex: 35,
    avgRent1Br: 600,
    avgLivingExRent: 550,
    internetMbps: 150,
    visaMinIncomeMonthly: 1100,
    visaType: 'Colombia V Digital Nomad Visa (Up to 2 Years)',
    taxSchemeName: '183-Day Non-Resident Rule / SIMPLE Regime for Contractors',
    taxSchemeSummary: 'Colombia’s Digital Nomad Visa requires just 3x the local minimum wage (~$1,100/mo). Non-residents staying under 183 days in a 365-day window are not taxed on foreign income.'
  },
  {
    code: 'MEX',
    name: 'Mexico City (Mexico)',
    flag: '🇲🇽',
    effTax: 0.15,
    costIndex: 44,
    avgRent1Br: 980,
    avgLivingExRent: 750,
    internetMbps: 120,
    visaMinIncomeMonthly: 4300,
    visaType: 'Mexico Temporary Resident Visa (1–4 Years)',
    taxSchemeName: 'Foreign Employer Non-Source Exemption / RESICO (1%–2.5%)',
    taxSchemeSummary: 'Temporary residents paid into foreign bank accounts by non-Mexican entities without a permanent establishment in Mexico generally avoid local ISR withholding, while local contractors can use RESICO.'
  },
  {
    code: 'TAL',
    name: 'Tallinn (Estonia)',
    flag: '🇪🇪',
    effTax: 0.20,
    costIndex: 64,
    avgRent1Br: 800,
    avgLivingExRent: 850,
    internetMbps: 160,
    visaMinIncomeMonthly: 4500,
    visaType: 'Estonia Digital Nomad Visa (Type D - 1 Year) & e-Residency',
    taxSchemeName: 'Estonian 0% Undistributed Corporate Tax / 20% Flat Income Tax',
    taxSchemeSummary: 'Estonia’s e-Residency OÜ structure charges 0% corporate tax on retained/reinvested profits and a flat 20% (rising to 22%) only when dividends are distributed.'
  },
  {
    code: 'ATH',
    name: 'Athens (Greece)',
    flag: '🇬🇷',
    effTax: 0.22,
    costIndex: 52,
    avgRent1Br: 700,
    avgLivingExRent: 750,
    internetMbps: 95,
    visaMinIncomeMonthly: 3500,
    visaType: 'Greece Digital Nomad Visa (Law 4825/2021)',
    taxSchemeName: 'Article 5G Expat Incentive (50% Income Tax Exemption for 7 Years)',
    taxSchemeSummary: 'Remote workers transferring their tax residency to Greece under Article 5G receive a 50% exemption on Greek income tax for up to 7 consecutive fiscal years.'
  },
  {
    code: 'BCN',
    name: 'Barcelona (Spain)',
    flag: '🇪🇸',
    effTax: 0.24,
    costIndex: 62,
    avgRent1Br: 1400,
    avgLivingExRent: 950,
    internetMbps: 300,
    visaMinIncomeMonthly: 2850,
    visaType: 'Spain Digital Nomad Visa (Ley de Startups)',
    taxSchemeName: 'Beckham Law (Ley Beckham - 24% Flat Tax up to €600k)',
    taxSchemeSummary: 'Barcelona tech expats and remote workers qualifying for the Special Expatriate Regime pay a flat 24% tax rate instead of progressive Catalan rates up to 50%.'
  },
  {
    code: 'TBS',
    name: 'Tbilisi (Georgia)',
    flag: '🇬🇪',
    effTax: 0.01,
    costIndex: 35,
    avgRent1Br: 600,
    avgLivingExRent: 550,
    internetMbps: 85,
    visaMinIncomeMonthly: 2000,
    visaType: 'Georgia 365-Day Visa-Free & Individual Entrepreneur Registration',
    taxSchemeName: 'Small Business Status (1% Gross Turnover Tax up to 500,000 GEL)',
    taxSchemeSummary: 'Foreign software engineers and freelancers registering as an Individual Entrepreneur with Small Business Status in Georgia pay just 1% tax on gross foreign revenue up to ~$185,000/yr.'
  }
];

export const nomadStatuses = [
  { code: 'nomad', label: 'Digital Nomad', perk: 'Expat & Remote Worker Tax Regime' }
];

// LLM Models with real verified API pricing per 1 Million tokens (USD)
export const llmModelsCatalog = {
  'gpt4o': { id: 'gpt4o', name: 'GPT-4o', provider: 'OpenAI', inputPer1M: 2.50, outputPer1M: 10.00, cachedInputPer1M: 1.25, contextWindow: '128K', speedTokSec: 110 },
  'claude35': { id: 'claude35', name: 'Claude 3.5 Sonnet', provider: 'Anthropic', inputPer1M: 3.00, outputPer1M: 15.00, cachedInputPer1M: 0.30, contextWindow: '200K', speedTokSec: 85 },
  'gemini15pro': { id: 'gemini15pro', name: 'Gemini 1.5 Pro', provider: 'Google', inputPer1M: 1.25, outputPer1M: 5.00, cachedInputPer1M: 0.31, contextWindow: '2M', speedTokSec: 75 },
  'llama31': { id: 'llama31', name: 'Llama 3.1 405B', provider: 'Meta (Managed API)', inputPer1M: 2.70, outputPer1M: 2.70, cachedInputPer1M: 1.35, contextWindow: '128K', speedTokSec: 65 },
  'gpt4o-mini': { id: 'gpt4o-mini', name: 'GPT-4o Mini', provider: 'OpenAI', inputPer1M: 0.15, outputPer1M: 0.60, cachedInputPer1M: 0.075, contextWindow: '128K', speedTokSec: 165 },
  'mistral-large': { id: 'mistral-large', name: 'Mistral Large 2', provider: 'Mistral AI', inputPer1M: 2.00, outputPer1M: 6.00, cachedInputPer1M: 1.00, contextWindow: '128K', speedTokSec: 95 },
  'grok2': { id: 'grok2', name: 'Grok-2', provider: 'xAI', inputPer1M: 2.00, outputPer1M: 10.00, cachedInputPer1M: 1.00, contextWindow: '128K', speedTokSec: 90 },
  'claude3-opus': { id: 'claude3-opus', name: 'Claude 3 Opus', provider: 'Anthropic', inputPer1M: 15.00, outputPer1M: 75.00, cachedInputPer1M: 1.50, contextWindow: '200K', speedTokSec: 45 },
  'gemini15-flash': { id: 'gemini15-flash', name: 'Gemini 1.5 Flash', provider: 'Google', inputPer1M: 0.075, outputPer1M: 0.30, cachedInputPer1M: 0.018, contextWindow: '1M', speedTokSec: 190 },
  'llama3-70b': { id: 'llama3-70b', name: 'Llama 3 70B', provider: 'Meta (Inference API)', inputPer1M: 0.59, outputPer1M: 0.79, cachedInputPer1M: 0.30, contextWindow: '128K', speedTokSec: 260 }
};

export const useCasePresets = {
  'rag-pipeline': { label: 'RAG Pipeline', defaultReqsPerDay: 5000, defaultInputTokens: 4500, defaultOutputTokens: 600, defaultCacheHit: 60 },
  'customer-support': { label: 'Customer Support Agent', defaultReqsPerDay: 10000, defaultInputTokens: 1800, defaultOutputTokens: 400, defaultCacheHit: 50 },
  'data-extraction': { label: 'Structured Data Extraction', defaultReqsPerDay: 8000, defaultInputTokens: 3200, defaultOutputTokens: 500, defaultCacheHit: 30 },
  'agents-orchestration': { label: 'Multi-Agent Orchestration', defaultReqsPerDay: 3000, defaultInputTokens: 6000, defaultOutputTokens: 1200, defaultCacheHit: 65 },
  'code-generation': { label: 'Code Generation & Review', defaultReqsPerDay: 2500, defaultInputTokens: 5000, defaultOutputTokens: 1500, defaultCacheHit: 55 },
  'content-summarization': { label: 'Document Summarization', defaultReqsPerDay: 4000, defaultInputTokens: 8000, defaultOutputTokens: 800, defaultCacheHit: 25 }
};

// Generates 144 curated city-to-city tax & living cost parity corridors
export const generatePseoTaxMatrix = () => {
  const routes = [];
  const status = nomadStatuses[0];

  for (const origin of originCities) {
    for (const dest of destinationCities) {
      const slug = `${origin.code.toLowerCase()}-to-${dest.code.toLowerCase()}-nomad-tax-parity`;
      routes.push({
        slug,
        origin,
        dest,
        status: {
          code: status.code,
          label: status.label,
          perk: dest.taxSchemeName
        },
        title: `${origin.name} to ${dest.name} Remote Tax & Cost of Living Calculator`,
        description: `Compare net take-home pay, ${dest.taxSchemeName}, 1BR rent, and real purchasing power when relocating from ${origin.name} to ${dest.name}.`
      });
    }
  }

  return routes;
};

// Curated high-search-volume LLM model pairs (9 pairs x 4 core workloads = 36 high-value pages)
const curatedModelPairs = [
  ['gpt4o', 'claude35'],
  ['gpt4o', 'gemini15pro'],
  ['claude35', 'gemini15pro'],
  ['gpt4o-mini', 'gemini15-flash'],
  ['gpt4o-mini', 'llama3-70b'],
  ['gpt4o', 'llama31'],
  ['claude35', 'llama31'],
  ['gpt4o', 'mistral-large'],
  ['claude35', 'claude3-opus']
];

const curatedUseCases = [
  'rag-pipeline',
  'customer-support',
  'agents-orchestration',
  'code-generation'
];

export const generatePseoLlmMatrix = () => {
  const routes = [];

  for (const [mA, mB] of curatedModelPairs) {
    const modelAInfo = llmModelsCatalog[mA];
    const modelBInfo = llmModelsCatalog[mB];
    for (const useCase of curatedUseCases) {
      const preset = useCasePresets[useCase];
      const slug = `${mA}-vs-${mB}-${useCase}-cost`;
      routes.push({
        slug,
        modelA: mA,
        modelB: mB,
        modelAInfo,
        modelBInfo,
        useCase,
        useCasePreset: preset,
        title: `${modelAInfo.name} vs ${modelBInfo.name} API Token Cost Calculator for ${preset.label}`,
        description: `Calculate and compare monthly API token costs, prompt caching savings, and latency between ${modelAInfo.name} ($${modelAInfo.inputPer1M}/1M in) and ${modelBInfo.name} ($${modelBInfo.inputPer1M}/1M in) for ${preset.label}.`
      });
    }
  }

  return routes;
};
