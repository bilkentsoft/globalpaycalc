// Country Tax & Purchasing Power Index Database (50+ Countries & States)
// Taxes are effective average income tax rates for remote employees/workers.
// PPP Index represents the Cost of Living Index relative to the United States (US_CA = 1.00).
export const countryTaxData = {
  US_CA: { name: 'United States (California)', effTax: 0.30, pppIndex: 1.00, flag: '🇺🇸', currency: 'USD' },
  US_TX: { name: 'United States (Texas)', effTax: 0.20, pppIndex: 0.90, flag: '🇺🇸', currency: 'USD' },
  US_NY: { name: 'United States (New York)', effTax: 0.32, pppIndex: 1.10, flag: '🇺🇸', currency: 'USD' },
  US_FL: { name: 'United States (Florida)', effTax: 0.20, pppIndex: 0.92, flag: '🇺🇸', currency: 'USD' },
  CA: { name: 'Canada (Ontario)', effTax: 0.26, pppIndex: 0.92, flag: '🇨🇦', currency: 'CAD' },
  UK: { name: 'United Kingdom', effTax: 0.28, pppIndex: 0.88, flag: '🇬🇧', currency: 'GBP' },
  DE: { name: 'Germany', effTax: 0.38, pppIndex: 0.82, flag: '🇩🇪', currency: 'EUR' },
  FR: { name: 'France', effTax: 0.35, pppIndex: 0.80, flag: '🇫🇷', currency: 'EUR' },
  IT: { name: 'Italy', effTax: 0.30, pppIndex: 0.68, flag: '🇮🇹', currency: 'EUR' },
  ES: { name: 'Spain (Beckham Law)', effTax: 0.24, pppIndex: 0.62, flag: '🇪🇸', currency: 'EUR' },
  PT: { name: 'Portugal (NHR Nomad)', effTax: 0.20, pppIndex: 0.55, flag: '🇵🇹', currency: 'EUR' },
  NL: { name: 'Netherlands', effTax: 0.36, pppIndex: 0.88, flag: '🇳🇱', currency: 'EUR' },
  CH: { name: 'Switzerland', effTax: 0.18, pppIndex: 1.25, flag: '🇨🇭', currency: 'CHF' },
  SE: { name: 'Sweden', effTax: 0.32, pppIndex: 0.84, flag: '🇸🇪', currency: 'SEK' },
  NO: { name: 'Norway', effTax: 0.30, pppIndex: 1.02, flag: '🇳🇴', currency: 'NOK' },
  DK: { name: 'Denmark', effTax: 0.36, pppIndex: 0.98, flag: '🇩🇰', currency: 'DKK' },
  FI: { name: 'Finland', effTax: 0.30, pppIndex: 0.82, flag: '🇫🇮', currency: 'EUR' },
  IE: { name: 'Ireland', effTax: 0.28, pppIndex: 0.90, flag: '🇮🇪', currency: 'EUR' },
  AT: { name: 'Austria', effTax: 0.32, pppIndex: 0.80, flag: '🇦🇹', currency: 'EUR' },
  BE: { name: 'Belgium', effTax: 0.38, pppIndex: 0.82, flag: '🇧🇪', currency: 'EUR' },
  PL: { name: 'Poland', effTax: 0.18, pppIndex: 0.46, flag: '🇵🇱', currency: 'PLN' },
  CZ: { name: 'Czech Republic', effTax: 0.15, pppIndex: 0.52, flag: '🇨🇿', currency: 'CZK' },
  HU: { name: 'Hungary', effTax: 0.15, pppIndex: 0.44, flag: '🇭🇺', currency: 'HUF' },
  RO: { name: 'Romania', effTax: 0.10, pppIndex: 0.38, flag: '🇷🇴', currency: 'RON' },
  BG: { name: 'Bulgaria', effTax: 0.10, pppIndex: 0.35, flag: '🇧🇬', currency: 'BGN' },
  GR: { name: 'Greece', effTax: 0.22, pppIndex: 0.50, flag: '🇬🇷', currency: 'EUR' },
  TR: { name: 'Turkey (Remote Exemption)', effTax: 0.15, pppIndex: 0.38, flag: '🇹🇷', currency: 'TRY' },
  AE: { name: 'UAE (Dubai 0% Tax)', effTax: 0.00, pppIndex: 0.85, flag: '🇦🇪', currency: 'AED' },
  SG: { name: 'Singapore', effTax: 0.12, pppIndex: 0.95, flag: '🇸🇬', currency: 'SGD' },
  JP: { name: 'Japan', effTax: 0.22, pppIndex: 0.70, flag: '🇯🇵', currency: 'JPY' },
  KR: { name: 'South Korea', effTax: 0.20, pppIndex: 0.74, flag: '🇰🇷', currency: 'KRW' },
  TW: { name: 'Taiwan', effTax: 0.15, pppIndex: 0.65, flag: '🇹🇼', currency: 'TWD' },
  AU: { name: 'Australia', effTax: 0.28, pppIndex: 0.94, flag: '🇦🇺', currency: 'AUD' },
  NZ: { name: 'New Zealand', effTax: 0.24, pppIndex: 0.85, flag: '🇳🇿', currency: 'NZD' },
  ZA: { name: 'South Africa', effTax: 0.25, pppIndex: 0.36, flag: '🇿🇦', currency: 'ZAR' },
  BR: { name: 'Brazil', effTax: 0.20, pppIndex: 0.38, flag: '🇧🇷', currency: 'BRL' },
  MX: { name: 'Mexico', effTax: 0.20, pppIndex: 0.42, flag: '🇲🇽', currency: 'MXN' },
  AR: { name: 'Argentina', effTax: 0.22, pppIndex: 0.30, flag: '🇦🇷', currency: 'ARS' },
  CO: { name: 'Colombia', effTax: 0.15, pppIndex: 0.28, flag: '🇨🇴', currency: 'COP' },
  CL: { name: 'Chile', effTax: 0.15, pppIndex: 0.44, flag: '🇨🇱', currency: 'CLP' },
  PE: { name: 'Peru', effTax: 0.12, pppIndex: 0.32, flag: '🇵🇪', currency: 'PEN' },
  CR: { name: 'Costa Rica', effTax: 0.12, pppIndex: 0.48, flag: '🇨🇷', currency: 'CRC' },
  TH: { name: 'Thailand', effTax: 0.15, pppIndex: 0.36, flag: '🇹🇭', currency: 'THB' },
  VN: { name: 'Vietnam', effTax: 0.10, pppIndex: 0.30, flag: '🇻🇳', currency: 'VND' },
  MY: { name: 'Malaysia', effTax: 0.12, pppIndex: 0.36, flag: '🇲🇾', currency: 'MYR' },
  PH: { name: 'Philippines', effTax: 0.15, pppIndex: 0.32, flag: '🇵🇭', currency: 'PHP' },
  IN: { name: 'India', effTax: 0.18, pppIndex: 0.22, flag: '🇮🇳', currency: 'INR' },
  ID: { name: 'Indonesia (Bali)', effTax: 0.10, pppIndex: 0.32, flag: '🇮🇩', currency: 'IDR' },
  HR: { name: 'Croatia', effTax: 0.18, pppIndex: 0.50, flag: '🇭🇷', currency: 'EUR' },
  CY: { name: 'Cyprus', effTax: 0.12, pppIndex: 0.60, flag: '🇨🇾', currency: 'EUR' },
  MT: { name: 'Malta', effTax: 0.15, pppIndex: 0.65, flag: '🇲🇹', currency: 'EUR' },
  EE: { name: 'Estonia', effTax: 0.20, pppIndex: 0.60, flag: '🇪🇪', currency: 'EUR' }
};

export const calculateNomadTaxParity = (grossAnnualUSD, homeKey, targetKey) => {
  const home = countryTaxData[homeKey] || countryTaxData.US_CA;
  const target = countryTaxData[targetKey] || countryTaxData.ES;

  // Home Country Calculations
  const homeNetAnnual = grossAnnualUSD * (1 - home.effTax);
  const homeNetMonthly = homeNetAnnual / 12;

  // Target Country Calculations
  const targetNetAnnual = grossAnnualUSD * (1 - target.effTax);
  const targetNetMonthly = targetNetAnnual / 12;

  // Purchasing Power Parity (PPP) Adjustment
  // Required salary in target country to match home country standard of living
  const pppMultiplier = target.pppIndex / home.pppIndex;
  const equivalentGrossUSD = grossAnnualUSD * pppMultiplier;
  const equivalentNetMonthly = (equivalentGrossUSD * (1 - target.effTax)) / 12;

  // Financial gain / savings multiplier
  const purchasingPowerBoost = ((targetNetMonthly / pppMultiplier) / homeNetMonthly).toFixed(2);

  return {
    grossAnnualUSD,
    home: {
      ...home,
      netAnnual: homeNetAnnual,
      netMonthly: homeNetMonthly
    },
    target: {
      ...target,
      netAnnual: targetNetAnnual,
      netMonthly: targetNetMonthly
    },
    equivalentGrossUSD,
    equivalentNetMonthly,
    purchasingPowerBoost,
    monthlyGainUSD: (targetNetMonthly - homeNetMonthly)
  };
};
