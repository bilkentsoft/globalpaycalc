// Full-Time Employee vs. Contractor / Freelance Equivalence Engine
// Evaluates W-2 vs 1099 (US), Inside vs Outside IR35 (UK), and Perm vs Contractor (EU/Global)

export function calculateContractorEquivalence({
  baseSalary = 100000,
  ptoDays = 20, // Paid holidays + vacation
  healthInsuranceValue = 6000, // Annual value of company health insurance
  retirementMatchPercent = 4, // Company pension/401k match %
  bonusPercent = 5, // Annual bonus %
  workingWeeksPerYear = 48,
  hoursPerWeek = 40,
  countryKey = 'US'
}) {
  // 1. Employee Total Compensation Value
  const ptoValue = (baseSalary / 260) * ptoDays; // 260 working days per year
  const bonusValue = baseSalary * (bonusPercent / 100);
  const retirementValue = baseSalary * (retirementMatchPercent / 100);
  
  // Employer taxes paid on employee behalf (Employer FICA 7.65% in US, Employer NI 13.8% in UK, Employer Social 20% in DE/EU)
  let employerTaxBurdenRate = 0.08;
  if (countryKey === 'UK') employerTaxBurdenRate = 0.138;
  if (countryKey === 'DE' || countryKey === 'EU') employerTaxBurdenRate = 0.20;
  
  const employerTaxValue = baseSalary * employerTaxBurdenRate;
  
  // Total Employer Cost / True Employee Value
  const totalEmployeeValue = baseSalary + bonusValue + ptoValue + healthInsuranceValue + retirementValue;

  // 2. Contractor Overhead Factors
  // Contractors pay 100% of their own self-employment taxes, accountant fees, software licenses, equipment, unbilled admin time
  let selfEmploymentTaxExtra = 0.0765; // In US, extra 7.65% SE tax
  if (countryKey === 'UK') selfEmploymentTaxExtra = 0.09;
  if (countryKey === 'DE') selfEmploymentTaxExtra = 0.12;

  const adminUnbilledOverheadRate = 0.15; // 15% time spent on invoicing, sales, admin
  const equipmentAndSoftwareAnnual = 3000; // Laptop, subscriptions, CPA/Accountant

  // 3. Billable Hours Calculation
  const totalBillableHoursAnnual = (workingWeeksPerYear - (ptoDays / 5)) * hoursPerWeek * (1 - adminUnbilledOverheadRate);
  
  // Required Annual Billing for Contractor to Match Employee Package
  const requiredContractorGrossAnnual = (totalEmployeeValue * (1 + selfEmploymentTaxExtra)) + equipmentAndSoftwareAnnual;
  
  // Required Hourly & Monthly Billing Rates
  const minHourlyBillingRate = requiredContractorGrossAnnual / totalBillableHoursAnnual;
  const minMonthlyBillingRate = requiredContractorGrossAnnual / 12;

  // Contractor markup multiplier relative to salaried base pay
  const contractorMultiplier = requiredContractorGrossAnnual / baseSalary;

  return {
    baseSalary,
    totalEmployeeValue,
    breakdown: {
      ptoValue: Math.round(ptoValue),
      bonusValue: Math.round(bonusValue),
      healthInsuranceValue: Math.round(healthInsuranceValue),
      retirementValue: Math.round(retirementValue),
      employerTaxValue: Math.round(employerTaxValue)
    },
    contractor: {
      requiredGrossAnnual: Math.round(requiredContractorGrossAnnual),
      minMonthlyBillingRate: Math.round(minMonthlyBillingRate),
      minHourlyBillingRate: parseFloat(minHourlyBillingRate.toFixed(2)),
      totalBillableHoursAnnual: Math.round(totalBillableHoursAnnual),
      contractorMultiplier: parseFloat(contractorMultiplier.toFixed(2))
    }
  };
}
