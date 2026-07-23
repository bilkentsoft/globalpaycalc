// AI LLM API Pricing Matrix (12 Global Models sorted by Price-Performance Ratio)
// Sorted by Average Cost per 1,000,000 Tokens: (Input + Output) / 2
export const aiModels = [
  {
    id: 'llama31_8b',
    name: 'Meta Llama 3.1 8B',
    provider: 'Meta',
    inputCostPerM: 0.05,
    outputCostPerM: 0.08,
    contextWindow: '128k',
    badge: 'Best Value'
  },
  {
    id: 'gemini15flash',
    name: 'Google Gemini 1.5 Flash',
    provider: 'Google',
    inputCostPerM: 0.075,
    outputCostPerM: 0.30,
    contextWindow: '1M',
    badge: 'Ultra Fast'
  },
  {
    id: 'deepseek_v25',
    name: 'DeepSeek-V2.5',
    provider: 'DeepSeek',
    inputCostPerM: 0.14,
    outputCostPerM: 0.28,
    contextWindow: '128k',
    badge: 'High Performance'
  },
  {
    id: 'gpt4o-mini',
    name: 'OpenAI GPT-4o-mini',
    provider: 'OpenAI',
    inputCostPerM: 0.15,
    outputCostPerM: 0.60,
    contextWindow: '128k',
    badge: 'Popular Efficient'
  },
  {
    id: 'qwen25_72b',
    name: 'Alibaba Qwen 2.5 72B',
    provider: 'Alibaba',
    inputCostPerM: 0.40,
    outputCostPerM: 0.40,
    contextWindow: '128k',
    badge: 'Open Weight Leader'
  },
  {
    id: 'llama31_70b',
    name: 'Meta Llama 3.1 70B',
    provider: 'Meta',
    inputCostPerM: 0.54,
    outputCostPerM: 0.54,
    contextWindow: '128k',
    badge: 'Groq Speed'
  },
  {
    id: 'claude35haiku',
    name: 'Anthropic Claude 3.5 Haiku',
    provider: 'Anthropic',
    inputCostPerM: 0.80,
    outputCostPerM: 4.00,
    contextWindow: '200k',
    badge: 'Fast & Smart'
  },
  {
    id: 'llama31_405b',
    name: 'Meta Llama 3.1 405B',
    provider: 'Meta',
    inputCostPerM: 2.66,
    outputCostPerM: 2.66,
    contextWindow: '128k',
    badge: 'Open Source Peak'
  },
  {
    id: 'gemini15pro',
    name: 'Google Gemini 1.5 Pro',
    provider: 'Google',
    inputCostPerM: 1.25,
    outputCostPerM: 5.00,
    contextWindow: '2M',
    badge: 'Massive Context'
  },
  {
    id: 'mistral_large2',
    name: 'Mistral Large 2',
    provider: 'Mistral AI',
    inputCostPerM: 2.00,
    outputCostPerM: 6.00,
    contextWindow: '128k',
    badge: 'EU Flagship'
  },
  {
    id: 'gpt4o',
    name: 'OpenAI GPT-4o',
    provider: 'OpenAI',
    inputCostPerM: 2.50,
    outputCostPerM: 10.00,
    contextWindow: '128k',
    badge: 'Industry Standard'
  },
  {
    id: 'claude35sonnet',
    name: 'Anthropic Claude 3.5 Sonnet',
    provider: 'Anthropic',
    inputCostPerM: 3.00,
    outputCostPerM: 15.00,
    contextWindow: '200k',
    badge: 'High Reasoning'
  }
];

export const calculateAiCosts = (monthlyInputMTokens, monthlyOutputMTokens) => {
  return aiModels.map(model => {
    const inputTotal = monthlyInputMTokens * model.inputCostPerM;
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
