const fs = require('fs');
const path = require('path');

const dynamicTranslations = {
  en: {
    dynamic: {
      llmTitle: "{{modelA}} vs {{modelB}} API Cost Simulator for {{useCase}}",
      llmDesc: "Project and compare monthly API costs between {{modelA}} and {{modelB}} for high volume {{useCase}} implementations.",
      taxTitle: "{{origin}} to {{dest}} Remote {{status}} Tax Parity Calculator",
      taxDesc: "Calculate net remote take-home pay, cost of living difference, and effective tax rates from {{origin}} to {{dest}} for remote {{status}}s. {{taxContext}}",
      llmHeader: "LLM API Cost & Latency Projection",
      taxHeader: "Net Salary & Purchasing Power Parity Projection",
      originNet: "{{origin}} Net",
      destNet: "{{dest}} Net",
      taxRate: "{{rate}}% Tax Rate",
      purchasingPower: "Purchasing Power Boost",
      costIndex: "Cost of Living Index",
      relatedComparisons: "Related Comparisons",
      relatedLlmDesc: "Explore other AI cost simulations and pipeline benchmarks.",
      relatedTaxDesc: "Explore other popular remote work destinations and tax parity guides.",
      taxHigh: "This route represents a relatively high tax bracket, but often balances with robust social infrastructure.",
      taxLow: "This destination offers highly favorable tax conditions, acting as a potential tax haven for digital nomads.",
      taxMid: "This destination features a moderate tax structure with standard international rates."
    }
  },
  tr: {
    dynamic: {
      llmTitle: "{{useCase}} için {{modelA}} vs {{modelB}} API Maliyet Simülatörü",
      llmDesc: "Yüksek hacimli {{useCase}} uygulamaları için {{modelA}} ve {{modelB}} arasındaki aylık API maliyetlerini projelendirin ve karşılaştırın.",
      taxTitle: "{{origin}} - {{dest}} Uzaktan {{status}} Vergi Eşitliği Hesaplayıcı",
      taxDesc: "Uzaktan {{status}} çalışanları için {{origin}}'den {{dest}}'e net maaş, yaşam maliyeti farkı ve efektif vergi oranlarını hesaplayın. {{taxContext}}",
      llmHeader: "LLM API Maliyet ve Gecikme Projeksiyonu",
      taxHeader: "Net Maaş ve Alım Gücü Eşitliği Projeksiyonu",
      originNet: "{{origin}} Net",
      destNet: "{{dest}} Net",
      taxRate: "%{{rate}} Vergi Oranı",
      purchasingPower: "Alım Gücü Artışı",
      costIndex: "Yaşam Maliyeti Endeksi",
      relatedComparisons: "Benzer Karşılaştırmalar",
      relatedLlmDesc: "Diğer yapay zeka maliyet simülasyonlarını ve altyapı kıyaslamalarını inceleyin.",
      relatedTaxDesc: "Diğer popüler uzaktan çalışma destinasyonlarını ve vergi eşitliği rehberlerini inceleyin.",
      taxHigh: "Bu rota nispeten yüksek bir vergi dilimini temsil eder, ancak genellikle güçlü sosyal altyapı ile dengelenir.",
      taxLow: "Bu hedef ülke, dijital göçebeler için oldukça avantajlı bir vergi cenneti konumundadır.",
      taxMid: "Bu destinasyon standart uluslararası oranlara sahip orta düzey bir vergi yapısı sunmaktadır."
    }
  },
  es: {
    dynamic: {
      llmTitle: "Simulador de Costos de API {{modelA}} vs {{modelB}} para {{useCase}}",
      llmDesc: "Proyecte y compare costos mensuales de API entre {{modelA}} y {{modelB}} para implementaciones de alto volumen de {{useCase}}.",
      taxTitle: "Calculadora de Paridad Fiscal para {{status}} Remoto de {{origin}} a {{dest}}",
      taxDesc: "Calcule el salario neto, diferencia de costo de vida y tasas impositivas efectivas de {{origin}} a {{dest}} para {{status}} remoto. {{taxContext}}",
      llmHeader: "Proyección de Costos y Latencia de API LLM",
      taxHeader: "Proyección de Salario Neto y Paridad de Poder Adquisitivo",
      originNet: "Neto en {{origin}}",
      destNet: "Neto en {{dest}}",
      taxRate: "{{rate}}% de Impuestos",
      purchasingPower: "Aumento del Poder Adquisitivo",
      costIndex: "Índice de Costo de Vida",
      relatedComparisons: "Comparaciones Relacionadas",
      relatedLlmDesc: "Explore otras simulaciones de costos de IA.",
      relatedTaxDesc: "Explore otros destinos populares para trabajo remoto.",
      taxHigh: "Esta ruta representa una categoría impositiva relativamente alta.",
      taxLow: "Este destino ofrece condiciones fiscales muy favorables (paraíso fiscal).",
      taxMid: "Este destino cuenta con una estructura fiscal moderada."
    }
  },
  de: {
    dynamic: {
      llmTitle: "{{modelA}} vs {{modelB}} API-Kostensimulator für {{useCase}}",
      llmDesc: "Projizieren und vergleichen Sie monatliche API-Kosten zwischen {{modelA}} und {{modelB}} für großvolumige {{useCase}} Implementierungen.",
      taxTitle: "{{origin}} nach {{dest}} Remote {{status}} Steuerparitätsrechner",
      taxDesc: "Berechnen Sie das Nettogehalt, Lebenshaltungskosten und effektive Steuersätze von {{origin}} nach {{dest}} für Remote-{{status}}. {{taxContext}}",
      llmHeader: "LLM API Kosten- & Latenzprojektion",
      taxHeader: "Nettogehalt & Kaufkraftparitätsprojektion",
      originNet: "{{origin}} Netto",
      destNet: "{{dest}} Netto",
      taxRate: "{{rate}}% Steuersatz",
      purchasingPower: "Kaufkraftsteigerung",
      costIndex: "Lebenshaltungskostenindex",
      relatedComparisons: "Verwandte Vergleiche",
      relatedLlmDesc: "Entdecken Sie weitere KI-Kostensimulationen.",
      relatedTaxDesc: "Entdecken Sie weitere beliebte Remote-Arbeitsziele.",
      taxHigh: "Diese Route stellt eine relativ hohe Steuerklasse dar.",
      taxLow: "Dieses Ziel bietet sehr günstige steuerliche Bedingungen.",
      taxMid: "Dieses Ziel verfügt über eine moderate Steuerstruktur."
    }
  },
  pt: {
    dynamic: {
      llmTitle: "Simulador de Custos de API {{modelA}} vs {{modelB}} para {{useCase}}",
      llmDesc: "Projete e compare custos mensais de API entre {{modelA}} e {{modelB}} para implementações de alto volume de {{useCase}}.",
      taxTitle: "Calculadora de Paridade Fiscal para {{status}} Remoto de {{origin}} para {{dest}}",
      taxDesc: "Calcule salário líquido, diferença de custo de vida e taxas de impostos efetivas de {{origin}} para {{dest}} para {{status}} remoto. {{taxContext}}",
      llmHeader: "Projeção de Custos e Latência de API LLM",
      taxHeader: "Projeção de Salário Líquido e Paridade de Poder de Compra",
      originNet: "Líquido em {{origin}}",
      destNet: "Líquido em {{dest}}",
      taxRate: "{{rate}}% de Imposto",
      purchasingPower: "Aumento do Poder de Compra",
      costIndex: "Índice de Custo de Vida",
      relatedComparisons: "Comparações Relacionadas",
      relatedLlmDesc: "Explore outras simulações de custos de IA.",
      relatedTaxDesc: "Explore outros destinos populares de trabalho remoto.",
      taxHigh: "Esta rota representa uma faixa de impostos relativamente alta.",
      taxLow: "Este destino oferece condições fiscais altamente favoráveis.",
      taxMid: "Este destino apresenta uma estrutura fiscal moderada."
    }
  },
  fr: {
    dynamic: {
      llmTitle: "Simulateur de Coût API {{modelA}} vs {{modelB}} pour {{useCase}}",
      llmDesc: "Projetez et comparez les coûts mensuels d'API entre {{modelA}} et {{modelB}} pour des implémentations de {{useCase}}.",
      taxTitle: "Calculateur de Parité Fiscale de {{origin}} à {{dest}} pour {{status}} à Distance",
      taxDesc: "Calculez le salaire net, la différence de coût de la vie et les taux d'imposition effectifs de {{origin}} à {{dest}} pour {{status}}. {{taxContext}}",
      llmHeader: "Projection des Coûts et de la Latence de l'API LLM",
      taxHeader: "Projection du Salaire Net et de la Parité de Pouvoir d'Achat",
      originNet: "Net à {{origin}}",
      destNet: "Net à {{dest}}",
      taxRate: "{{rate}}% d'Impôts",
      purchasingPower: "Augmentation du Pouvoir d'Achat",
      costIndex: "Indice du Coût de la Vie",
      relatedComparisons: "Comparaisons Liées",
      relatedLlmDesc: "Explorez d'autres simulations de coûts d'IA.",
      relatedTaxDesc: "Explorez d'autres destinations de télétravail populaires.",
      taxHigh: "Cet itinéraire représente une tranche d'imposition relativement élevée.",
      taxLow: "Cette destination offre des conditions fiscales très favorables.",
      taxMid: "Cette destination présente une structure fiscale modérée."
    }
  },
  id: {
    dynamic: {
      llmTitle: "Simulator Biaya API {{modelA}} vs {{modelB}} untuk {{useCase}}",
      llmDesc: "Proyeksikan dan bandingkan biaya API bulanan antara {{modelA}} dan {{modelB}} untuk implementasi {{useCase}} volume tinggi.",
      taxTitle: "Kalkulator Paritas Pajak {{status}} Jarak Jauh dari {{origin}} ke {{dest}}",
      taxDesc: "Hitung gaji bersih, perbedaan biaya hidup, dan tarif pajak efektif dari {{origin}} ke {{dest}} untuk {{status}} jarak jauh. {{taxContext}}",
      llmHeader: "Proyeksi Biaya & Latensi API LLM",
      taxHeader: "Proyeksi Gaji Bersih & Paritas Daya Beli",
      originNet: "Bersih di {{origin}}",
      destNet: "Bersih di {{dest}}",
      taxRate: "Tarif Pajak {{rate}}%",
      purchasingPower: "Peningkatan Daya Beli",
      costIndex: "Indeks Biaya Hidup",
      relatedComparisons: "Perbandingan Terkait",
      relatedLlmDesc: "Jelajahi simulasi biaya AI lainnya.",
      relatedTaxDesc: "Jelajahi tujuan kerja jarak jauh populer lainnya.",
      taxHigh: "Rute ini mewakili kelompok pajak yang relatif tinggi.",
      taxLow: "Tujuan ini menawarkan kondisi pajak yang sangat menguntungkan.",
      taxMid: "Tujuan ini memiliki struktur pajak sedang."
    }
  },
  ja: {
    dynamic: {
      llmTitle: "{{useCase}} 用の {{modelA}} vs {{modelB}} API コスト シミュレーター",
      llmDesc: "大量の {{useCase}} 実装に対する {{modelA}} と {{modelB}} の月間 API コストを予測および比較します。",
      taxTitle: "{{origin}} から {{dest}} へのリモート {{status}} 税金平価計算ツール",
      taxDesc: "リモート {{status}} のために、{{origin}} から {{dest}} への純給与、生活費の違い、実効税率を計算します。{{taxContext}}",
      llmHeader: "LLM API コストとレイテンシ予測",
      taxHeader: "純給与と購買力平価の予測",
      originNet: "{{origin}} の純額",
      destNet: "{{dest}} の純額",
      taxRate: "税率 {{rate}}%",
      purchasingPower: "購買力の向上",
      costIndex: "生活費指数",
      relatedComparisons: "関連する比較",
      relatedLlmDesc: "他のAIコストシミュレーションをご覧ください。",
      relatedTaxDesc: "他の人気のあるリモートワークの目的地をご覧ください。",
      taxHigh: "このルートは比較的高い税区分を表しています。",
      taxLow: "この目的地は非常に有利な税条件を提供します。",
      taxMid: "この目的地は中程度の税構造を持っています。"
    }
  }
};

const localesDir = path.join(__dirname, '../src/i18n/locales');
for (const [lang, data] of Object.entries(dynamicTranslations)) {
  const filePath = path.join(localesDir, `${lang}.json`);
  if (fs.existsSync(filePath)) {
    const json = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    json.dynamic = data.dynamic;
    fs.writeFileSync(filePath, JSON.stringify(json, null, 2));
    console.log(`Updated dynamic texts with new conditional logic in ${lang}.json`);
  }
}
