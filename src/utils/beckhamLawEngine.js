// Beckham Law (Art. 93 LIRPF) & Expat Special Tax Regime Engine (2026 Statutory Rules)
// References:
// - Spain: Ley 35/2006 (Art. 93 LIRPF), amended by Ley 28/2022 ("Ley de Startups") & Ley 7/2024.
//   24% flat rate up to €600,000; 47% above €600,000. Duration: arrival year + 5 years (6 tax years).
//   2026 Employee Social Security: 6.50% (4.70% CC + 1.55% Unemployment + 0.10% FP + 0.15% MEI) capped at €5,101.20/mo (€61,214.40/yr = €3,979/yr max).
// - Portugal: IFICI (NHR 2.0) — 20% flat tax on qualifying scientific/innovation/startup employment for 10 years.
// - Italy: Nuovo Regime Impatriati (D.Lgs. 209/2023) — 50% taxable base exemption (60% with minor child) up to €600,000 cap for 5 years.
// - UAE / Dubai: 0% personal income tax.
// - US Expat FEIE (IRC § 911): Foreign Earned Income Exclusion ($130,000 cap).

export const expatRegimes = {
  ES_BECKHAM: {
    id: 'ES_BECKHAM',
    name: 'Spain — Beckham Law (Art. 93 LIRPF)',
    flag: '🇪🇸',
    currencySymbol: '€',
    flatTaxRate: 24,
    excessTaxRate: 47,
    durationYears: 6,
    maxCap: 600000,
    ssEmployeeRate: 0.065,
    ssAnnualCapBase: 61214.40, // €5,101.20/mo * 12 (2026 max contribution base)
    formApplication: 'Modelo 149 (within 6 months of SS registration)',
    formAnnual: 'Modelo 151 (annual non-resident style return)',
    priorNonResidencyYears: 5,
    authorityUrl: 'https://sede.agenciatributaria.gob.es/'
  },
  PT_IFICI: {
    id: 'PT_IFICI',
    name: 'Portugal — IFICI (NHR 2.0 Innovation Regime)',
    flag: '🇵🇹',
    currencySymbol: '€',
    flatTaxRate: 20,
    excessTaxRate: 20,
    durationYears: 10,
    maxCap: 0,
    ssEmployeeRate: 0.11,
    ssAnnualCapBase: 0,
    formApplication: 'Portal das Finanças (by Jan 15 of following year)',
    formAnnual: 'Modelo 3 IRS (Anexo L)',
    priorNonResidencyYears: 5,
    authorityUrl: 'https://www.portaldasfinancas.gov.pt/'
  },
  IT_IMPATRIATI: {
    id: 'IT_IMPATRIATI',
    name: 'Italy — Regime Impatriati (50% Tax Base Exemption)',
    flag: '🇮🇹',
    currencySymbol: '€',
    flatTaxRate: 21.5,
    excessTaxRate: 43,
    durationYears: 5,
    maxCap: 600000,
    ssEmployeeRate: 0.0919,
    ssAnnualCapBase: 119650,
    formApplication: 'Autocertificazione to Employer / Modello Redditi',
    formAnnual: 'Modello 730 / Redditi PF',
    priorNonResidencyYears: 3,
    authorityUrl: 'https://www.agenziaentrate.gov.it/'
  },
  AE_DUBAI: {
    id: 'AE_DUBAI',
    name: 'UAE / Dubai — 0% Personal Income Tax',
    flag: '🇦🇪',
    currencySymbol: '$',
    flatTaxRate: 0,
    excessTaxRate: 0,
    durationYears: 10,
    maxCap: 0,
    ssEmployeeRate: 0,
    ssAnnualCapBase: 0,
    formApplication: 'UAE Residency Visa / Remote Work Visa',
    formAnnual: 'No Personal Income Tax Return',
    priorNonResidencyYears: 0,
    authorityUrl: 'https://tax.gov.ae/'
  },
  US_FEIE: {
    id: 'US_FEIE',
    name: 'US Expat — Foreign Earned Income Exclusion (IRC § 911)',
    flag: '🇺🇸',
    currencySymbol: '$',
    flatTaxRate: 15,
    excessTaxRate: 32,
    durationYears: 10,
    maxCap: 130000,
    ssEmployeeRate: 0.0765,
    ssAnnualCapBase: 176100,
    formApplication: 'IRS Form 2555 (330-day Physical Presence or Bona Fide Residence)',
    formAnnual: 'IRS Form 1040 + Form 2555',
    priorNonResidencyYears: 1,
    authorityUrl: 'https://www.irs.gov/individuals/international-taxpayers/foreign-earned-income-exclusion'
  }
};

// Progressive Spanish General IRPF Scale (State + Standard Autonomous Community Benchmark)
const SPAIN_PROGRESSIVE_BRACKETS = [
  { upTo: 12450, rate: 0.19 },
  { upTo: 20200, rate: 0.24 },
  { upTo: 35200, rate: 0.30 },
  { upTo: 60000, rate: 0.37 },
  { upTo: 300000, rate: 0.45 },
  { upTo: Infinity, rate: 0.47 }
];

export function calculateSpanishProgressiveIrpf(grossSalary, ssContribution) {
  // General employment expense deduction (€2,000) + SS deduction
  const netTaxableIncome = Math.max(0, grossSalary - ssContribution - 2000);
  // Personal allowance (€5,550 taxed at 19% = €1,054.50 credit)
  const personalAllowanceCredit = 5550 * 0.19;

  let tax = 0;
  let prev = 0;
  for (const b of SPAIN_PROGRESSIVE_BRACKETS) {
    if (netTaxableIncome > prev) {
      const slice = Math.min(netTaxableIncome, b.upTo) - prev;
      tax += slice * b.rate;
      prev = b.upTo;
    } else {
      break;
    }
  }
  return Math.max(0, tax - personalAllowanceCredit);
}

export function calculateBeckhamSavings(
  annualGrossSalary = 130000,
  regimeId = 'ES_BECKHAM',
  standardTaxRatePercent = null,
  includeSocialSecurity = true
) {
  const regime = expatRegimes[regimeId] || expatRegimes.ES_BECKHAM;
  const gross = Math.max(0, Number(annualGrossSalary) || 0);

  // Employee Social Security calculation
  let socialSecurityAmount = 0;
  if (includeSocialSecurity && regime.ssEmployeeRate > 0) {
    const contributableBase = regime.ssAnnualCapBase > 0 ? Math.min(gross, regime.ssAnnualCapBase) : gross;
    socialSecurityAmount = contributableBase * regime.ssEmployeeRate;
  }

  // Standard progressive tax (for Spain, use exact progressive IRPF brackets unless user overrides)
  let standardTaxAmount = 0;
  let effectiveStandardTaxPercent = 0;
  if (regime.id === 'ES_BECKHAM' && (standardTaxRatePercent === null || standardTaxRatePercent === undefined || standardTaxRatePercent === 0)) {
    standardTaxAmount = calculateSpanishProgressiveIrpf(gross, socialSecurityAmount);
    effectiveStandardTaxPercent = gross > 0 ? Number(((standardTaxAmount / gross) * 100).toFixed(1)) : 0;
  } else {
    const fallbackRate = standardTaxRatePercent !== null && standardTaxRatePercent !== undefined ? standardTaxRatePercent : 42;
    standardTaxAmount = gross * (fallbackRate / 100);
    effectiveStandardTaxPercent = fallbackRate;
  }

  // Expat regime tax calculation
  let expatTaxAmount = 0;
  if (regime.id === 'ES_BECKHAM') {
    // Art. 93 LIRPF: 24% up to €600,000, 47% on excess above €600,000 (no personal allowance or SS deduction against tax base)
    const baseSlice = Math.min(gross, regime.maxCap);
    const excessSlice = Math.max(0, gross - regime.maxCap);
    expatTaxAmount = baseSlice * 0.24 + excessSlice * 0.47;
  } else if (regime.id === 'US_FEIE') {
    const taxableAmount = Math.max(0, gross - regime.maxCap);
    expatTaxAmount = taxableAmount * (regime.excessTaxRate / 100);
  } else if (regime.id === 'IT_IMPATRIATI') {
    // 50% exemption up to €600,000; full 43% above €600,000
    const cappedSalary = Math.min(gross, regime.maxCap);
    const excessSalary = Math.max(0, gross - regime.maxCap);
    expatTaxAmount = (cappedSalary * 0.50) * 0.43 + excessSalary * 0.43;
  } else {
    expatTaxAmount = gross * (regime.flatTaxRate / 100);
  }

  const effectiveExpatTaxPercent = gross > 0 ? Number(((expatTaxAmount / gross) * 100).toFixed(1)) : 0;

  const standardNetTakeHome = Math.max(0, gross - standardTaxAmount - socialSecurityAmount);
  const expatNetTakeHome = Math.max(0, gross - expatTaxAmount - socialSecurityAmount);
  const annualTaxSavings = Math.max(0, standardTaxAmount - expatTaxAmount);
  const totalDurationSavings = annualTaxSavings * regime.durationYears;

  return {
    annualGrossSalary: gross,
    regime,
    socialSecurityAmount: Math.round(socialSecurityAmount),
    standardTaxRatePercent: effectiveStandardTaxPercent,
     effectiveExpatTaxPercent,
    standardTaxAmount: Math.round(standardTaxAmount),
    standardNetTakeHome: Math.round(standardNetTakeHome),
    standardNetMonthly: Math.round(standardNetTakeHome / 12),
    expatTaxAmount: Math.round(expatTaxAmount),
    expatNetTakeHome: Math.round(expatNetTakeHome),
    expatNetMonthly: Math.round(expatNetTakeHome / 12),
    annualTaxSavings: Math.round(annualTaxSavings),
    totalDurationSavings: Math.round(totalDurationSavings)
  };
}
