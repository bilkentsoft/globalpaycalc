// Inflation & Purchasing Power Loss Engine
// Calculates real salary erosion, inflation impact, and required raise percentage.

export const countryInflationRates = {
  US: { name: 'United States', flag: '🇺🇸', rate: 3.2, currency: 'USD', symbol: '$' },
  UK: { name: 'United Kingdom', flag: '🇬🇧', rate: 3.8, currency: 'GBP', symbol: '£' },
  DE: { name: 'Germany', flag: '🇩🇪', rate: 2.7, currency: 'EUR', symbol: '€' },
  TR: { name: 'Turkey', flag: '🇹🇷', rate: 65.0, currency: 'TRY', symbol: '₺' },
  IN: { name: 'India', flag: '🇮🇳', rate: 5.1, currency: 'INR', symbol: '₹' },
  AR: { name: 'Argentina', rate: 140.0, flag: '🇦🇷', currency: 'ARS', symbol: 'ARS$' },
  BR: { name: 'Brazil', rate: 4.2, flag: '🇧🇷', currency: 'BRL', symbol: 'R$' },
  CA: { name: 'Canada', rate: 2.9, flag: '🇨🇦', currency: 'CAD', symbol: 'CA$' },
  AU: { name: 'Australia', rate: 3.6, flag: '🇦🇺', currency: 'AUD', symbol: 'A$' },
  JP: { name: 'Japan', rate: 2.5, flag: '🇯🇵', currency: 'JPY', symbol: '¥' }
};

export function calculateInflationImpact(salary = 80000, countryCode = 'US', customInflationRate = null, years = 1) {
  const country = countryInflationRates[countryCode] || countryInflationRates.US;
  const inflationRate = customInflationRate !== null ? customInflationRate : country.rate;

  // Cumulative inflation multiplier over N years
  const cumulativeInflationMultiplier = Math.pow(1 + (inflationRate / 100), years);
  
  // Real purchasing power value of current salary after N years
  const realPurchasingPower = salary / cumulativeInflationMultiplier;
  
  // Total lost purchasing power amount
  const purchasingPowerLoss = salary - realPurchasingPower;
  
  // Required salary to maintain exact baseline purchasing power
  const requiredSalary = salary * cumulativeInflationMultiplier;
  
  // Required raise amount and percentage
  const requiredRaiseAmount = requiredSalary - salary;
  const requiredRaisePercent = ((cumulativeInflationMultiplier - 1) * 100).toFixed(1);

  return {
    salary,
    country,
    inflationRate,
    years,
    realPurchasingPower: Math.round(realPurchasingPower),
    purchasingPowerLoss: Math.round(purchasingPowerLoss),
    requiredSalary: Math.round(requiredSalary),
    requiredRaiseAmount: Math.round(requiredRaiseAmount),
    requiredRaisePercent: parseFloat(requiredRaisePercent)
  };
}
