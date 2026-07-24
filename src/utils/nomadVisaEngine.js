// Digital Nomad Visa Financial Income Eligibility Engine
// Checks monthly minimum remote income requirement for top 10 Digital Nomad Visas.

export const nomadVisaRequirements = [
  { id: 'ES', country: 'Spain', visaName: 'Digital Nomad Visa', flag: '🇪🇸', minMonthlyIncomeUsd: 2900, minSavingsUsd: 0, taxPerk: 'Beckham Law 24% option' },
  { id: 'PT', country: 'Portugal', visaName: 'D8 Digital Nomad Visa', flag: '🇵🇹', minMonthlyIncomeUsd: 3600, minSavingsUsd: 11000, taxPerk: 'IFICI Tax Scheme' },
  { id: 'AE', country: 'Dubai / UAE', visaName: 'Work Remotely Visa', flag: '🇦🇪', minMonthlyIncomeUsd: 3500, minSavingsUsd: 0, taxPerk: '0% Personal Income Tax' },
  { id: 'JP', country: 'Japan', visaName: 'Digital Nomad Visa', flag: '🇯🇵', minMonthlyIncomeUsd: 5500, minSavingsUsd: 0, taxPerk: '6 Months Tax Exempt' },
  { id: 'CR', country: 'Costa Rica', visaName: 'Estancia Digital Nomad', flag: '🇨🇷', minMonthlyIncomeUsd: 3000, minSavingsUsd: 0, taxPerk: '100% Tax Exempt Income' },
  { id: 'GR', country: 'Greece', visaName: 'Digital Nomad Visa', flag: '🇬🇷', minMonthlyIncomeUsd: 3800, minSavingsUsd: 0, taxPerk: '50% Income Tax Cut' },
  { id: 'IT', country: 'Italy', visaName: 'Digital Nomad Visa', flag: '🇮🇹', minMonthlyIncomeUsd: 3100, minSavingsUsd: 0, taxPerk: 'Impatriati 50-70% Cut' },
  { id: 'EE', country: 'Estonia', visaName: 'Digital Nomad Visa', flag: '🇪🇪', minMonthlyIncomeUsd: 4800, minSavingsUsd: 0, taxPerk: 'E-Residency Ecosystem' }
];

export function checkNomadVisaEligibility(monthlyIncomeUsd = 4000) {
  const eligibleVisas = nomadVisaRequirements.filter(v => monthlyIncomeUsd >= v.minMonthlyIncomeUsd);
  const ineligibleVisas = nomadVisaRequirements.filter(v => monthlyIncomeUsd < v.minMonthlyIncomeUsd);

  return {
    monthlyIncomeUsd,
    totalCount: nomadVisaRequirements.length,
    eligibleCount: eligibleVisas.length,
    eligibleVisas,
    ineligibleVisas
  };
}
