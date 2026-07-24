// Freelancer Minimum Hourly Rate Calculator Engine
// Calculates the minimum hourly rate needed to cover desired net income, taxes, overhead expenses, and unbillable admin hours.

export function calculateFreelancerRate({
  targetNetAnnual = 60000,
  taxRatePercent = 25,
  monthlyExpenses = 500, // Software, equipment, CPA, insurance
  vacationWeeksPerYear = 4,
  billableHoursPerWeek = 25, // Reality of billable hours vs 40h workweek
  currency = '$'
}) {
  const annualExpenses = monthlyExpenses * 12;
  
  // Gross income needed before tax to hit net target
  const taxFraction = Math.min(0.9, taxRatePercent / 100);
  const requiredGrossBeforeTax = (targetNetAnnual + annualExpenses) / (1 - taxFraction);
  
  // Total billable weeks per year
  const billableWeeks = Math.max(1, 52 - vacationWeeksPerYear);
  const totalAnnualBillableHours = billableWeeks * billableHoursPerWeek;

  // Minimum required hourly rate
  const minHourlyRate = requiredGrossBeforeTax / totalAnnualBillableHours;
  const minDayRate = minHourlyRate * 8;
  const minMonthlyGross = requiredGrossBeforeTax / 12;
  const annualTaxAmount = requiredGrossBeforeTax - targetNetAnnual - annualExpenses;

  return {
    targetNetAnnual,
    annualExpenses,
    taxRatePercent,
    requiredGrossBeforeTax: Math.round(requiredGrossBeforeTax),
    annualTaxAmount: Math.round(annualTaxAmount),
    totalAnnualBillableHours: Math.round(totalAnnualBillableHours),
    minHourlyRate: parseFloat(minHourlyRate.toFixed(2)),
    minDayRate: Math.round(minDayRate),
    minMonthlyGross: Math.round(minMonthlyGross),
    currency
  };
}
