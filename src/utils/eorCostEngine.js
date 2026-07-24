// Employer of Record (EOR) vs Local Entity Incorporation Cost Engine
// Calculates breakeven point between paying Deel/Oyster/Remote $599/mo per seat vs Incorporating a local subsidiary.

export function calculateEorBreakeven({
  employeeCount = 3,
  avgSalaryPerEmployee = 80000,
  eorMonthlyFeePerSeat = 599, // Deel / Remote.com standard rate
  entityIncorporationCost = 5000, // One-time setup
  entityAnnualComplianceCost = 8000 // Annual CPA, payroll software, legal
}) {
  const annualEorCost = employeeCount * eorMonthlyFeePerSeat * 12;
  const annualEntityCost = entityAnnualComplianceCost + (entityIncorporationCost / 3); // Amortized setup over 3 years

  const breakevenEmployeeCount = Math.ceil((entityAnnualComplianceCost + entityIncorporationCost) / (eorMonthlyFeePerSeat * 12));
  const savingsUsingEor = annualEntityCost - annualEorCost;

  return {
    employeeCount,
    avgSalaryPerEmployee,
    eorMonthlyFeePerSeat,
    annualEorCost: Math.round(annualEorCost),
    annualEntityCost: Math.round(annualEntityCost),
    breakevenEmployeeCount,
    savingsUsingEor: Math.round(savingsUsingEor),
    recommendation: employeeCount >= breakevenEmployeeCount ? 'INCORPORATE_LOCAL' : 'USE_EOR'
  };
}
