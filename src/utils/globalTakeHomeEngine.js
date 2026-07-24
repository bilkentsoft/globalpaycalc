// Global Country-Specific Take-Home Tax Engine
// Supports US (Federal + State + FICA), UK (Income Tax + NI), DE (Tax + Social Security), TR (SGK + Income Tax), IN (New/Old Regime), etc.

export const globalTaxCountries = {
  US_CA: { id: 'US_CA', name: 'United States (California)', flag: '🇺🇸', currency: 'USD', symbol: '$', region: 'US' },
  US_NY: { id: 'US_NY', name: 'United States (New York)', flag: '🇺🇸', currency: 'USD', symbol: '$', region: 'US' },
  US_TX: { id: 'US_TX', name: 'United States (Texas - No State Tax)', flag: '🇺🇸', currency: 'USD', symbol: '$', region: 'US' },
  US_FL: { id: 'US_FL', name: 'United States (Florida - No State Tax)', flag: '🇺🇸', currency: 'USD', symbol: '$', region: 'US' },
  US_WA: { id: 'US_WA', name: 'United States (Washington - No State Tax)', flag: '🇺🇸', currency: 'USD', symbol: '$', region: 'US' },
  UK: { id: 'UK', name: 'United Kingdom', flag: '🇬🇧', currency: 'GBP', symbol: '£', region: 'UK' },
  DE: { id: 'DE', name: 'Germany (Deutschland)', flag: '🇩🇪', currency: 'EUR', symbol: '€', region: 'DE' },
  TR: { id: 'TR', name: 'Turkey (Türkiye)', flag: '🇹🇷', currency: 'TRY', symbol: '₺', region: 'TR' },
  IN: { id: 'IN', name: 'India', flag: '🇮🇳', currency: 'INR', symbol: '₹', region: 'IN' },
  CA: { id: 'CA', name: 'Canada (Ontario)', flag: '🇨🇦', currency: 'CAD', symbol: 'CA$', region: 'GENERIC', effTax: 0.28 },
  FR: { id: 'FR', name: 'France', flag: '🇫🇷', currency: 'EUR', symbol: '€', region: 'GENERIC', effTax: 0.35 },
  NL: { id: 'NL', name: 'Netherlands (30% Facility Option)', flag: '🇳🇱', currency: 'EUR', symbol: '€', region: 'GENERIC', effTax: 0.32 },
  ES: { id: 'ES', name: 'Spain (Beckham Law)', flag: '🇪🇸', currency: 'EUR', symbol: '€', region: 'GENERIC', effTax: 0.24 },
  AE: { id: 'AE', name: 'United Arab Emirates (Dubai - 0% Income Tax)', flag: '🇦🇪', currency: 'AED', symbol: 'AED', region: 'GENERIC', effTax: 0.00 },
  SG: { id: 'SG', name: 'Singapore', flag: '🇸🇬', currency: 'SGD', symbol: 'S$', region: 'GENERIC', effTax: 0.12 },
  AU: { id: 'AU', name: 'Australia', flag: '🇦🇺', currency: 'AUD', symbol: 'A$', region: 'GENERIC', effTax: 0.28 },
  JP: { id: 'JP', name: 'Japan', flag: '🇯🇵', currency: 'JPY', symbol: '¥', region: 'GENERIC', effTax: 0.24 }
};

export function calculateGlobalTakeHome(amount, countryKey = 'US_CA', period = 'annual') {
  const country = globalTaxCountries[countryKey] || globalTaxCountries.US_CA;
  
  // Convert input to annual gross
  const grossAnnual = period === 'monthly' ? amount * 12 : amount;
  
  let incomeTax = 0;
  let socialSecurityTax = 0;
  let stateOrLocalTax = 0;
  let deductionsDetails = [];

  if (country.region === 'US') {
    // 1. FICA (Social Security 6.2% up to $168,600 + Medicare 1.45%)
    const ssCap = 168600;
    const ssTax = Math.min(grossAnnual, ssCap) * 0.062;
    const medicareTax = grossAnnual * 0.0145;
    const addlMedicare = grossAnnual > 200000 ? (grossAnnual - 200000) * 0.009 : 0;
    socialSecurityTax = ssTax + medicareTax + addlMedicare;

    // 2. Federal Income Tax Brackets (Single Filer 2024 Standard Deduction = $14,600)
    const stdDeduction = 14600;
    const taxableFed = Math.max(0, grossAnnual - stdDeduction);
    
    if (taxableFed <= 11600) {
      incomeTax = taxableFed * 0.10;
    } else if (taxableFed <= 47150) {
      incomeTax = 1160 + (taxableFed - 11600) * 0.12;
    } else if (taxableFed <= 100525) {
      incomeTax = 5426 + (taxableFed - 47150) * 0.22;
    } else if (taxableFed <= 191950) {
      incomeTax = 17168.50 + (taxableFed - 100525) * 0.24;
    } else if (taxableFed <= 243725) {
      incomeTax = 39110.50 + (taxableFed - 191950) * 0.32;
    } else if (taxableFed <= 609350) {
      incomeTax = 55678.50 + (taxableFed - 243725) * 0.35;
    } else {
      incomeTax = 183647.25 + (taxableFed - 609350) * 0.37;
    }

    // 3. State Income Tax
    if (countryKey === 'US_CA') {
      stateOrLocalTax = grossAnnual * 0.08; // CA Progressive State Tax approx
    } else if (countryKey === 'US_NY') {
      stateOrLocalTax = grossAnnual * 0.065; // NY State Tax approx
    } else {
      stateOrLocalTax = 0; // TX, FL, WA No State Tax
    }

    deductionsDetails = [
      { name: 'Federal Income Tax', amount: incomeTax },
      { name: 'FICA (Social Security & Medicare)', amount: socialSecurityTax },
      { name: 'State Income Tax', amount: stateOrLocalTax }
    ];

  } else if (country.region === 'UK') {
    // UK Personal Allowance = £12,570
    const personalAllowance = 12570;
    const taxable = Math.max(0, grossAnnual - personalAllowance);

    // Basic (20% up to £50,270), Higher (40% up to £125,140), Additional (45%)
    if (taxable <= 37700) {
      incomeTax = taxable * 0.20;
    } else if (taxable <= 112570) {
      incomeTax = 7540 + (taxable - 37700) * 0.40;
    } else {
      incomeTax = 37488 + (taxable - 112570) * 0.45;
    }

    // National Insurance Class 1 (Primary Threshold £12,570, Upper Limit £50,270)
    if (grossAnnual > 12570) {
      const mainNiBand = Math.min(grossAnnual, 50270) - 12570;
      const upperNiBand = Math.max(0, grossAnnual - 50270);
      socialSecurityTax = (mainNiBand * 0.08) + (upperNiBand * 0.02);
    }

    deductionsDetails = [
      { name: 'UK Income Tax (PAYE)', amount: incomeTax },
      { name: 'National Insurance (Class 1)', amount: socialSecurityTax }
    ];

  } else if (country.region === 'DE') {
    // Germany Tax & Social Insurance
    // Social Security worker share (~20%: Health 7.3%, Pension 9.3%, Nursing 2.3%, Unemployment 1.3%)
    socialSecurityTax = grossAnnual * 0.2015;
    
    // Tax Free Grundfreibetrag ~€11,784
    const freeAmount = 11784;
    const taxable = Math.max(0, grossAnnual - freeAmount - (socialSecurityTax * 0.5));

    if (taxable > 0) {
      if (taxable <= 66760) {
        incomeTax = taxable * 0.26;
      } else if (taxable <= 277825) {
        incomeTax = 17357 + (taxable - 66760) * 0.42;
      } else {
        incomeTax = 106004 + (taxable - 277825) * 0.45;
      }
      // Solidarity surcharge (Soli) 5.5% of income tax for higher earners
      if (incomeTax > 18130) {
        stateOrLocalTax = incomeTax * 0.055;
      }
    }

    deductionsDetails = [
      { name: 'Einkommensteuer (Income Tax)', amount: incomeTax },
      { name: 'Sozialabgaben (Social Contributions)', amount: socialSecurityTax },
      { name: 'Solidaritätszuschlag (Solidarity Surcharge)', amount: stateOrLocalTax }
    ];

  } else if (country.region === 'TR') {
    // Turkey SGK worker share %14 + Unemployment %1 = %15
    socialSecurityTax = grossAnnual * 0.15;
    const taxBase = grossAnnual - socialSecurityTax;

    // Progressive income tax brackets (2024 values)
    if (taxBase <= 110000) {
      incomeTax = taxBase * 0.15;
    } else if (taxBase <= 230000) {
      incomeTax = 16500 + (taxBase - 110000) * 0.20;
    } else if (taxBase <= 870000) {
      incomeTax = 40500 + (taxBase - 230000) * 0.27;
    } else if (taxBase <= 3000000) {
      incomeTax = 213300 + (taxBase - 870000) * 0.35;
    } else {
      incomeTax = 958800 + (taxBase - 3000000) * 0.40;
    }

    // Minimum Wage Tax Exemption credit (~₺30,000/yr discount)
    const minWageExemption = Math.min(incomeTax, 30000);
    incomeTax = Math.max(0, incomeTax - minWageExemption);
    stateOrLocalTax = grossAnnual * 0.00759; // Damga Vergisi

    deductionsDetails = [
      { name: 'Gelir Vergisi (İstisna Düşülmüş)', amount: incomeTax },
      { name: 'SGK İşçi Payı & İşsizlik (%15)', amount: socialSecurityTax },
      { name: 'Damga Vergisi (%0.759)', amount: stateOrLocalTax }
    ];

  } else if (country.region === 'IN') {
    // India New Tax Regime (FY 2024-25) Standard Deduction ₹75,000
    const stdDeduct = 75000;
    const taxable = Math.max(0, grossAnnual - stdDeduct);

    if (taxable <= 300000) {
      incomeTax = 0;
    } else if (taxable <= 700000) {
      incomeTax = (taxable - 300000) * 0.05;
    } else if (taxable <= 1000000) {
      incomeTax = 20000 + (taxable - 700000) * 0.10;
    } else if (taxable <= 1200000) {
      incomeTax = 50000 + (taxable - 1000000) * 0.15;
    } else if (taxable <= 1500000) {
      incomeTax = 80000 + (taxable - 1200000) * 0.20;
    } else {
      incomeTax = 140000 + (taxable - 1500000) * 0.30;
    }

    // 4% Health & Education Cess
    stateOrLocalTax = incomeTax * 0.04;
    socialSecurityTax = grossAnnual * 0.03; // PF contribution approx

    deductionsDetails = [
      { name: 'Income Tax (New Regime)', amount: incomeTax },
      { name: 'Health & Education Cess (4%)', amount: stateOrLocalTax },
      { name: 'Provident Fund (PF Approx)', amount: socialSecurityTax }
    ];

  } else {
    // Generic fallback for other countries
    const rate = country.effTax || 0.25;
    incomeTax = grossAnnual * rate;
    socialSecurityTax = grossAnnual * 0.05;
    deductionsDetails = [
      { name: 'Income Tax (Estimated Effective)', amount: incomeTax },
      { name: 'Social Security / Statutory Fees', amount: socialSecurityTax }
    ];
  }

  const totalDeductions = incomeTax + socialSecurityTax + stateOrLocalTax;
  const netAnnual = Math.max(0, grossAnnual - totalDeductions);
  const netMonthly = netAnnual / 12;
  const grossMonthly = grossAnnual / 12;
  const effectiveTaxRate = grossAnnual > 0 ? (totalDeductions / grossAnnual) * 100 : 0;

  return {
    country,
    grossAnnual,
    grossMonthly,
    netAnnual,
    netMonthly,
    totalDeductions,
    effectiveTaxRate: parseFloat(effectiveTaxRate.toFixed(1)),
    deductionsDetails
  };
}
