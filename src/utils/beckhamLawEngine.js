// Beckham Law & Expat Tax Exemption Engine
// Calculates expat tax savings for Beckham Law (Spain 24%), Portugal NHR / IFICI, Italy Impatriati (70% exemption), Dubai 0% Tax, and US FEIE ($126,500 exclusion).

export const expatRegimes = {
  ES_BECKHAM: { id: 'ES_BECKHAM', name: 'Spain (Beckham Law)', flag: '🇪🇸', flatTaxRate: 24, durationYears: 6, maxCap: 600000 },
  PT_IFICI: { id: 'PT_IFICI', name: 'Portugal (NHR 2.0 / IFICI)', flag: '🇵🇹', flatTaxRate: 20, durationYears: 10, maxCap: 0 },
  IT_IMPATRIATI: { id: 'IT_IMPATRIATI', name: 'Italy (Rientro dei Cervelli - 50% Exemption)', flag: '🇮🇹', flatTaxRate: 21, durationYears: 5, maxCap: 0 },
  AE_DUBAI: { id: 'AE_DUBAI', name: 'Dubai / UAE (0% Income Tax)', flag: '🇦🇪', flatTaxRate: 0, durationYears: 99, maxCap: 0 },
  US_FEIE: { id: 'US_FEIE', name: 'US Expat FEIE ($126,500 Exclusion)', flag: '🇺🇸', flatTaxRate: 15, durationYears: 99, maxCap: 126500 }
};

export function calculateBeckhamSavings(annualGrossSalary = 120000, regimeId = 'ES_BECKHAM', standardTaxRatePercent = 45) {
  const regime = expatRegimes[regimeId] || expatRegimes.ES_BECKHAM;

  // Standard progressive tax without expat law
  const standardTaxAmount = annualGrossSalary * (standardTaxRatePercent / 100);
  const standardNetTakeHome = annualGrossSalary - standardTaxAmount;

  // Tax under expat regime
  let expatTaxAmount = 0;
  if (regime.id === 'US_FEIE') {
    const taxableAmount = Math.max(0, annualGrossSalary - regime.maxCap);
    expatTaxAmount = taxableAmount * 0.30; // Approx tax on excess over $126.5k
  } else {
    expatTaxAmount = annualGrossSalary * (regime.flatTaxRate / 100);
  }

  const expatNetTakeHome = annualGrossSalary - expatTaxAmount;
  const annualTaxSavings = Math.max(0, expatTaxAmount < standardTaxAmount ? standardTaxAmount - expatTaxAmount : 0);
  const totalDurationSavings = annualTaxSavings * regime.durationYears;

  return {
    annualGrossSalary,
    regime,
    standardTaxRatePercent,
    standardTaxAmount: Math.round(standardTaxAmount),
    standardNetTakeHome: Math.round(standardNetTakeHome),
    expatTaxAmount: Math.round(expatTaxAmount),
    expatNetTakeHome: Math.round(expatNetTakeHome),
    annualTaxSavings: Math.round(annualTaxSavings),
    totalDurationSavings: Math.round(totalDurationSavings)
  };
}
