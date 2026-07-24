// Global B2B & B2C Invoice VAT / Sales Tax & Reverse Charge Engine

export const countryVatRates = {
  DE: { name: 'Germany', standardVat: 19, reducedVat: 7, flag: '🇩🇪', isEU: true },
  FR: { name: 'France', standardVat: 20, reducedVat: 10, flag: '🇫🇷', isEU: true },
  ES: { name: 'Spain', standardVat: 21, reducedVat: 10, flag: '🇪🇸', isEU: true },
  IT: { name: 'Italy', standardVat: 22, reducedVat: 10, flag: '🇮🇹', isEU: true },
  NL: { name: 'Netherlands', standardVat: 21, reducedVat: 9, flag: '🇳🇱', isEU: true },
  SE: { name: 'Sweden', standardVat: 25, reducedVat: 12, flag: '🇸🇪', isEU: true },
  PL: { name: 'Poland', standardVat: 23, reducedVat: 8, flag: '🇵🇱', isEU: true },
  UK: { name: 'United Kingdom', standardVat: 20, reducedVat: 5, flag: '🇬🇧', isEU: false },
  TR: { name: 'Turkey (KDV)', standardVat: 20, reducedVat: 10, flag: '🇹🇷', isEU: false },
  IN: { name: 'India (GST)', standardVat: 18, reducedVat: 12, flag: '🇮🇳', isEU: false },
  US_CA: { name: 'United States (California Sales Tax)', standardVat: 7.25, reducedVat: 0, flag: '🇺🇸', isEU: false },
  US_NY: { name: 'United States (New York Sales Tax)', standardVat: 8.875, reducedVat: 0, flag: '🇺🇸', isEU: false },
  US_TX: { name: 'United States (Texas Sales Tax)', standardVat: 6.25, reducedVat: 0, flag: '🇺🇸', isEU: false },
  AU: { name: 'Australia (GST)', standardVat: 10, reducedVat: 0, flag: '🇦🇺', isEU: false },
  CA: { name: 'Canada (HST/GST)', standardVat: 13, reducedVat: 5, flag: '🇨🇦', isEU: false }
};

export function calculateGlobalInvoice({
  amount = 1000,
  countryKey = 'DE',
  calculationType = 'netToGross', // 'netToGross' or 'grossToNet'
  isB2B = true,
  isCrossBorderReverseCharge = false
}) {
  const country = countryVatRates[countryKey] || countryVatRates.DE;
  
  // If Reverse Charge applies for cross-border B2B service export, effective VAT rate is 0%
  const effectiveVatRatePercent = (isB2B && isCrossBorderReverseCharge) ? 0 : country.standardVat;
  const rateFraction = effectiveVatRatePercent / 100;

  let netAmount = 0;
  let vatAmount = 0;
  let grossAmount = 0;

  if (calculationType === 'netToGross') {
    netAmount = amount;
    vatAmount = netAmount * rateFraction;
    grossAmount = netAmount + vatAmount;
  } else {
    // Gross to Net
    grossAmount = amount;
    netAmount = grossAmount / (1 + rateFraction);
    vatAmount = grossAmount - netAmount;
  }

  return {
    country,
    isB2B,
    isCrossBorderReverseCharge,
    effectiveVatRatePercent,
    netAmount: parseFloat(netAmount.toFixed(2)),
    vatAmount: parseFloat(vatAmount.toFixed(2)),
    grossAmount: parseFloat(grossAmount.toFixed(2)),
    invoiceNote: (isB2B && isCrossBorderReverseCharge)
      ? 'Reverse Charge Mechanism Applies: VAT 0% (Cross-border B2B Service Export Article 196 EU VAT Directive / Local Export Exemption)'
      : `Standard VAT/Tax Applied (${effectiveVatRatePercent}%)`
  };
}
