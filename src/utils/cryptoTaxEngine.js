// Crypto & USDT Remote Salary Tax Engine
// Calculates Income Tax vs Capital Gains tax for remote devs paid in USDT/USDC/Crypto across top jurisdictions.

export const cryptoTaxJurisdictions = {
  US: { name: 'United States', flag: '🇺🇸', incomeTaxRate: 28, capitalGainsShortTerm: 28, capitalGainsLongTerm: 15, currency: '$' },
  UK: { name: 'United Kingdom', flag: '🇬🇧', incomeTaxRate: 40, capitalGainsShortTerm: 20, capitalGainsLongTerm: 20, currency: '£' },
  DE: { name: 'Germany', flag: '🇩🇪', incomeTaxRate: 42, capitalGainsShortTerm: 42, capitalGainsLongTerm: 0, currency: '€' }, // 0% after 1 year hold
  TR: { name: 'Turkey', flag: '🇹🇷', incomeTaxRate: 35, capitalGainsShortTerm: 0, capitalGainsLongTerm: 0, currency: '₺' },
  AE: { name: 'UAE / Dubai', flag: '🇦🇪', incomeTaxRate: 0, capitalGainsShortTerm: 0, capitalGainsLongTerm: 0, currency: '$' },
  SG: { name: 'Singapore', flag: '🇸🇬', incomeTaxRate: 15, capitalGainsShortTerm: 0, capitalGainsLongTerm: 0, currency: '$' },
  PT: { name: 'Portugal', flag: '🇵🇹', incomeTaxRate: 28, capitalGainsShortTerm: 28, capitalGainsLongTerm: 0, currency: '€' } // 0% after 365 days
};

export function calculateCryptoSalaryTax(cryptoSalaryUsd = 90000, countryCode = 'US', holdingDays = 30) {
  const country = cryptoTaxJurisdictions[countryCode] || cryptoTaxJurisdictions.US;

  // Crypto salary is classified as ordinary income upon receipt
  const incomeTaxAmount = cryptoSalaryUsd * (country.incomeTaxRate / 100);
  const netSalaryAfterIncomeTax = cryptoSalaryUsd - incomeTaxAmount;

  // Capital gains classification if held after receipt
  const isLongTerm = holdingDays >= 365;
  const capitalGainsRate = isLongTerm ? country.capitalGainsLongTerm : country.capitalGainsShortTerm;

  return {
    cryptoSalaryUsd,
    country,
    holdingDays,
    isLongTerm,
    incomeTaxRate: country.incomeTaxRate,
    capitalGainsRate,
    incomeTaxAmount: Math.round(incomeTaxAmount),
    netSalaryAfterIncomeTax: Math.round(netSalaryAfterIncomeTax)
  };
}
