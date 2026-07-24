// Real FX Rate & Hidden Fee Estimator Engine
// Compares Mid-Market Exchange Rates vs Provider Hidden FX Markups & Flat Fees

export const fxProviders = [
  { id: 'wise', name: 'Wise (TransferWise)', fxMarkupPercent: 0.45, fixedFeeUSD: 2.50, speed: 'Instant / Same Day', flag: '🚀' },
  { id: 'swift', name: 'Traditional Bank (SWIFT Wire)', fxMarkupPercent: 3.80, fixedFeeUSD: 35.00, speed: '2 - 5 Business Days', flag: '🏦' },
  { id: 'paypal', name: 'PayPal International', fxMarkupPercent: 4.50, fixedFeeUSD: 4.99, speed: 'Instant', flag: '💳' },
  { id: 'stripe', name: 'Stripe Cross-Border', fxMarkupPercent: 2.00, fixedFeeUSD: 0.30, speed: '2 - 3 Business Days', flag: '⚡' },
  { id: 'payoneer', name: 'Payoneer', fxMarkupPercent: 2.50, fixedFeeUSD: 1.50, speed: '1 - 2 Business Days', flag: '🌐' }
];

export const mockExchangeRates = {
  'USD_EUR': 0.92,
  'USD_GBP': 0.79,
  'USD_TRY': 33.20,
  'USD_INR': 83.50,
  'USD_CAD': 1.36,
  'USD_AUD': 1.51,
  'USD_BRL': 5.45,
  'USD_JPY': 158.00,
  'EUR_USD': 1.087,
  'GBP_USD': 1.265,
  'TRY_USD': 0.0301
};

export function calculateFxFees(sendAmount = 5000, pair = 'USD_EUR') {
  const midMarketRate = mockExchangeRates[pair] || 1.0;
  const [fromCurr, toCurr] = pair.split('_');

  const targetMidMarketAmount = sendAmount * midMarketRate;

  const comparison = fxProviders.map(provider => {
    // 1. Calculate provider exchange rate after hidden FX markup
    const providerRate = midMarketRate * (1 - (provider.fxMarkupPercent / 100));
    
    // 2. Fixed transfer fee in 'fromCurr'
    const feeInFromCurr = provider.fixedFeeUSD;
    const amountAfterFee = Math.max(0, sendAmount - feeInFromCurr);

    // 3. Final amount recipient receives
    const recipientReceives = amountAfterFee * providerRate;

    // 4. Total hidden cost = What mid-market would give minus what recipient receives
    const hiddenFxLoss = targetMidMarketAmount - recipientReceives;
    const hiddenFxLossPercent = (hiddenFxLoss / targetMidMarketAmount) * 100;

    return {
      provider,
      providerRate: parseFloat(providerRate.toFixed(4)),
      recipientReceives: parseFloat(recipientReceives.toFixed(2)),
      hiddenFxLoss: parseFloat(hiddenFxLoss.toFixed(2)),
      hiddenFxLossPercent: parseFloat(hiddenFxLossPercent.toFixed(2)),
      feeInFromCurr
    };
  });

  // Sort best recipient receives to worst
  comparison.sort((a, b) => b.recipientReceives - a.recipientReceives);

  const bestOption = comparison[0];
  const worstOption = comparison[comparison.length - 1];
  const potentialSavings = worstOption.hiddenFxLoss - bestOption.hiddenFxLoss;

  return {
    sendAmount,
    pair,
    fromCurr,
    toCurr,
    midMarketRate,
    targetMidMarketAmount: parseFloat(targetMidMarketAmount.toFixed(2)),
    comparison,
    bestOption,
    potentialSavings: parseFloat(potentialSavings.toFixed(2))
  };
}
