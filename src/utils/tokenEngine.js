// AI LLM API Pricing Matrix (12 Global Models sorted by Price-Performance Ratio)
// Synced with official provider API pricing documentation (OpenAI, Anthropic, Google Gemini, DeepSeek, Meta via Groq/Together, Mistral AI, xAI)
export const aiModels = [
  {
    id: 'llama31_8b',
    name: 'Meta Llama 3.1 8B Instant',
    provider: 'Meta (Groq)',
    inputCostPerM: 0.05,
    cachedInputCostPerM: 0.025,
    outputCostPerM: 0.08,
    contextWindow: '128k',
    badge: 'Ultra Low Latency',
    pricingUrl: 'https://groq.com/pricing/'
  },
  {
    id: 'gpt4o-mini',
    name: 'OpenAI GPT-4o-mini',
    provider: 'OpenAI',
    inputCostPerM: 0.15,
    cachedInputCostPerM: 0.075,
    outputCostPerM: 0.60,
    contextWindow: '128k',
    badge: 'High Efficiency',
    pricingUrl: 'https://openai.com/api/pricing/'
  },
  {
    id: 'grok41_fast',
    name: 'xAI Grok 4.1 Fast',
    provider: 'xAI',
    inputCostPerM: 0.20,
    cachedInputCostPerM: 0.05,
    outputCostPerM: 0.50,
    contextWindow: '2M',
    badge: '2M Context Value',
    pricingUrl: 'https://docs.x.ai/docs/models'
  },
  {
    id: 'deepseek_v32',
    name: 'DeepSeek V3.2 (Chat / Reasoner)',
    provider: 'DeepSeek',
    inputCostPerM: 0.28,
    cachedInputCostPerM: 0.028,
    outputCostPerM: 0.42,
    contextWindow: '128k',
    badge: '90% Cache Discount',
    pricingUrl: 'https://api-docs.deepseek.com/quick_start/pricing'
  },
  {
    id: 'gemini25flash',
    name: 'Google Gemini 2.5 Flash',
    provider: 'Google',
    inputCostPerM: 0.30,
    cachedInputCostPerM: 0.03,
    outputCostPerM: 2.50,
    contextWindow: '1M',
    badge: 'Multimodal Speed',
    pricingUrl: 'https://ai.google.dev/gemini-api/docs/pricing'
  },
  {
    id: 'llama4_maverick',
    name: 'Meta Llama 4 Maverick (17B-128E)',
    provider: 'Meta (Together)',
    inputCostPerM: 0.27,
    cachedInputCostPerM: 0.27,
    outputCostPerM: 0.85,
    contextWindow: '1M',
    badge: 'Open-Weight MoE',
    pricingUrl: 'https://www.together.ai/pricing'
  },
  {
    id: 'mistral_large3',
    name: 'Mistral Large 3',
    provider: 'Mistral AI',
    inputCostPerM: 0.50,
    cachedInputCostPerM: 0.50,
    outputCostPerM: 1.50,
    contextWindow: '256k',
    badge: 'EU Sovereign Flagship',
    pricingUrl: 'https://mistral.ai/pricing'
  },
  {
    id: 'claude45haiku',
    name: 'Anthropic Claude Haiku 4.5',
    provider: 'Anthropic',
    inputCostPerM: 1.00,
    cachedInputCostPerM: 0.10,
    outputCostPerM: 5.00,
    contextWindow: '200k',
    badge: 'Fast Agentic Coding',
    pricingUrl: 'https://docs.anthropic.com/en/docs/about-claude/pricing'
  },
  {
    id: 'gemini25pro',
    name: 'Google Gemini 2.5 Pro',
    provider: 'Google',
    inputCostPerM: 1.25,
    cachedInputCostPerM: 0.125,
    outputCostPerM: 10.00,
    contextWindow: '1M',
    badge: 'Deep Reasoning 1M',
    pricingUrl: 'https://ai.google.dev/gemini-api/docs/pricing'
  },
  {
    id: 'gpt41',
    name: 'OpenAI GPT-4.1',
    provider: 'OpenAI',
    inputCostPerM: 2.00,
    cachedInputCostPerM: 0.50,
    outputCostPerM: 8.00,
    contextWindow: '1M',
    badge: '1M Context Production',
    pricingUrl: 'https://openai.com/api/pricing/'
  },
  {
    id: 'gpt54',
    name: 'OpenAI GPT-5.4 Flagship',
    provider: 'OpenAI',
    inputCostPerM: 2.50,
    cachedInputCostPerM: 0.25,
    outputCostPerM: 15.00,
    contextWindow: '1.05M',
    badge: 'Frontier Flagship',
    pricingUrl: 'https://openai.com/api/pricing/'
  },
  {
    id: 'claudesonnet46',
    name: 'Anthropic Claude Sonnet 4.6',
    provider: 'Anthropic',
    inputCostPerM: 3.00,
    cachedInputCostPerM: 0.30,
    outputCostPerM: 15.00,
    contextWindow: '1M',
    badge: 'SWE & Agent Leader',
    pricingUrl: 'https://docs.anthropic.com/en/docs/about-claude/pricing'
  }
];

export const calculateAiCosts = (monthlyInputMTokens, monthlyOutputMTokens, cacheHitRatePct = 0) => {
  const cacheRatio = Math.min(0.95, Math.max(0, Number(cacheHitRatePct) || 0) / 100);
  return aiModels.map(model => {
    const uncachedInputM = monthlyInputMTokens * (1 - cacheRatio);
    const cachedInputM = monthlyInputMTokens * cacheRatio;
    const cachedRate = model.cachedInputCostPerM !== undefined ? model.cachedInputCostPerM : model.inputCostPerM;

    const inputTotal = (uncachedInputM * model.inputCostPerM) + (cachedInputM * cachedRate);
    const outputTotal = monthlyOutputMTokens * model.outputCostPerM;
    const monthlyTotal = inputTotal + outputTotal;
    const yearlyTotal = monthlyTotal * 12;

    return {
      ...model,
      inputTotal,
      outputTotal,
      monthlyTotal,
      yearlyTotal
    };
  });
};
