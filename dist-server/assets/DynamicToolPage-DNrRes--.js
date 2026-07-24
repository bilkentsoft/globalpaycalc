import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import "react";
import { g as generateUnifiedSchema } from "./schemaGenerator-F7liX1lB.js";
import { ArrowLeftRight, TrendingUp, ShieldAlert, Info, Link } from "lucide-react";
import { a as generatePseoLlmMatrix, b as generatePseoTaxMatrix, g as getTranslation } from "../entry-server.js";
import { useParams, Link as Link$1 } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "react-dom/server";
import "react-router-dom/server.mjs";
import "@supabase/supabase-js";
const templates = {
  en: {
    taxIntro: "Evaluating a remote transition or relocation from {origin} to {dest} requires a comprehensive analysis of cross-border tax structures, local social security contributions, and cost of living indices. When working as a remote {status}, your net income is heavily influenced by local fiscal policies, double taxation treaties, and expat incentives like the {perk}.",
    taxBody1: "In {dest}, the estimated effective income tax rate is approximately {destTax}%. In comparison, {origin} imposes a baseline tax rate of {originTax}%. This tax variance plays a crucial role in your monthly disposable income. For example, a gross salary of $85,000 USD yields a net monthly take-home pay of around ${destNetMonthly} in {dest}, compared to ${originNetMonthly} in {origin}.",
    taxBody2: "Beyond nominal tax rates, local purchasing power determines your actual quality of life. Adjusting for the local cost of living index ({destCostIndex} compared to the US baseline of 100), your net income in {dest} experiences a purchasing power multiplier of {purchasingPower}x. This means your earnings in {dest} go significantly further than in {origin}, allowing you to save more or enjoy a higher standard of living under the {status} framework.",
    taxFaqs: [
      {
        q: "What is the tax rate in {dest} for remote workers?",
        a: "The estimated effective income tax rate in {dest} is around {destTax}%, which may vary based on your specific visa structure, self-employment status, or expat schemes like the {perk}."
      },
      {
        q: "How does the cost of living compare between {origin} and {dest}?",
        a: "The cost of living in {dest} has an index score of {destCostIndex}. When factoring in net taxes, this results in a {purchasingPower}x real purchasing power difference compared to {origin}."
      },
      {
        q: "Which tax schemes apply to a remote {status} in {dest}?",
        a: "In {dest}, remote {status}s typically leverage the {perk} or local independent contractor exemptions to optimize their global tax liabilities."
      }
    ],
    llmIntro: "Architecting modern AI applications utilizing large language models (LLMs) requires a careful trade-off between API call costs, output quality, and context window latency. When comparing {modelA} against {modelB} for high-volume {useCase} pipelines, API pricing structures play a defining role in monthly operational cloud costs.",
    llmBody1: "For {useCase} workloads, {modelA} and {modelB} offer different pricing matrices per 1 Million tokens. In addition to raw token input/output costs, engineering teams must evaluate factors like prompt caching efficiency, context window limitations, and latency per token generation.",
    llmBody2: "At scale, even minor pricing differences between {modelA} and {modelB} compound into thousands of dollars of variance. Choosing the right LLM configuration for {useCase} can reduce total API overhead by up to 40% while maintaining target accuracy and user experience.",
    llmFaqs: [
      {
        q: "Which model is more cost-effective for {useCase}?",
        a: "The cost-effectiveness depends on your average token ratio (input vs output tokens). Generally, models with active prompt caching (like {modelA} or {modelB}) offer significant discounts for high-volume {useCase} tasks."
      },
      {
        q: "How can I optimize API costs when using {modelA} or {modelB}?",
        a: "Key strategies include caching repetitive context prompts, limiting maximum response tokens, and selecting smaller model variants (e.g., mini or flash) for simpler sub-tasks within your {useCase} pipeline."
      }
    ]
  },
  tr: {
    taxIntro: "{origin} şehrinden {dest} şehrine uzaktan çalışma veya taşınma tekliflerini değerlendirmek; sınır ötesi vergi yapılarını, yerel sosyal güvenlik primlerini ve yaşam maliyeti endekslerini derinlemesine analiz etmeyi gerektirir. Uzaktan {status} olarak çalışırken net geliriniz; yerel maliye politikaları, çifte vergilendirmeyi önleme anlaşmaları ve {perk} gibi expat teşviklerinden doğrudan etkilenir.",
    taxBody1: "{dest} şehrinde tahmini efektif gelir vergisi oranı yaklaşık %{destTax} seviyesindedir. Buna karşılık, {origin} şehrinde bu oran %{originTax} civarındadır. Vergi oranlarındaki bu fark, elinize geçecek aylık net tutarda kritik bir rol oynar. Örneğin, yıllık brüt 85.000 USD tutarında bir gelir, {dest} şehrinde aylık yaklaşık {destNetMonthly} USD net kazanç sağlarken, {origin} şehrinde bu tutar {originNetMonthly} USD seviyesinde kalır.",
    taxBody2: "Nominal vergi oranlarının ötesinde, yerel satın alma gücü gerçek yaşam kalitenizi belirler. {dest} şehrinin yaşam maliyeti endeksi ({destCostIndex}) dikkate alındığında, net maaşınız reel olarak {purchasingPower} kat satın alma gücü artışı yaşar. Bu durum, {dest} şehrindeki kazancınızın {origin} şehrine kıyasla çok daha değerli olmasını sağlayarak, {status} çerçevesinde daha fazla tasarruf yapmanıza veya yaşam standartlarınızı yükseltmenize imkan tanır.",
    taxFaqs: [
      {
        q: "{dest} şehrinde uzaktan çalışanlar için vergi oranı nedir?",
        a: "{dest} şehrinde tahmini efektif gelir vergisi oranı yaklaşık %{destTax} olup, bu oran vize türünüze, şahıs şirketi statünüze veya yararlandığınız {perk} gibi özel muafiyetlere göre değişiklik gösterebilir."
      },
      {
        q: "{origin} ile {dest} arasındaki yaşam maliyeti farkı nasıldır?",
        a: "{dest} şehrinin yaşam maliyeti endeks skoru {destCostIndex} civarındadır. Net vergiler düşüldükten sonra bu durum, {origin} şehrine kıyasla reel satın alma gücünüzde {purchasingPower} katlık bir artış veya değişim yaratır."
      },
      {
        q: "{dest} şehrinde uzaktan {status} olarak çalışanlar hangi vergi rejimlerinden yararlanabilir?",
        a: "{dest} şehrindeki uzaktan {status} çalışanları, küresel vergi yükümlülüklerini optimize etmek için genellikle {perk} rejiminden veya yerel serbest çalışan vergi muafiyetlerinden yararlanırlar."
      }
    ],
    llmIntro: "Büyük dil modellerini (LLM) kullanan modern yapay zeka uygulamaları tasarlarken, API çağrı maliyetleri, çıktı kalitesi ve bağlam penceresi (context window) gecikme süreleri arasında dikkatli bir denge kurulmalıdır. Yüksek hacimli {useCase} iş akışları için {modelA} ile {modelB} karşılaştırıldığında, API fiyatlandırma yapıları aylık operasyonel bulut maliyetlerini doğrudan belirler.",
    llmBody1: "{useCase} iş yükleri için {modelA} ve {modelB} modelleri, 1 Milyon token başına farklı fiyatlandırma matrisleri sunar. Mühendislik ekipleri, ham token girdi/çıktı maliyetlerinin yanı sıra prompt önbellekleme verimliliği, bağlam penceresi sınırları ve token üretimi başına gecikme gibi faktörleri de değerlendirmelidir.",
    llmBody2: "Ölçeklenebilir yapay zeka projelerinde, {modelA} ve {modelB} arasındaki küçük fiyat farkları bile birikerek binlerce dolarlık maliyet varyasyonlarına yol açar. {useCase} için doğru LLM konfigürasyonunu seçmek, hedef doğruluğu ve kullanıcı deneyimini korurken toplam API giderlerini %40'a varan oranda azaltabilir.",
    llmFaqs: [
      {
        q: "{useCase} için hangi model daha maliyet etkindir?",
        a: "Maliyet etkinliği, ortalama token girdi/çıktı oranınıza bağlıdır. Genellikle, aktif prompt önbellekleme sunan modeller (örneğin {modelA} veya {modelB}), yüksek hacimli {useCase} görevleri için ciddi indirimler sağlar."
      },
      {
        q: "{modelA} veya {modelB} kullanırken API maliyetlerini nasıl optimize edebilirim?",
        a: "Başlıca stratejiler arasında tekrarlayan bağlamları önbelleğe almak, maksimum yanıt token sınırını kısmak ve {useCase} iş akışınızdaki daha basit alt görevler için daha küçük model varyantlarını (mini veya flash gibi) tercih etmek yer alır."
      }
    ]
  },
  es: {
    taxIntro: "Evaluar una transición remota o reubicación de {origin} a {dest} requiere un análisis integral de las estructuras fiscales transfronterizas, las contribuciones locales a la seguridad social y los índices de costo de vida. Al trabajar como {status} remoto, sus ingresos netos se ven fuertemente influenciados por las políticas fiscales locales y esquemas como {perk}.",
    taxBody1: "En {dest}, la tasa impositiva efectiva estimada sobre la renta es de aproximadamente {destTax}%. En comparación, {origin} impone una tasa impositiva base del {originTax}%. Esta diferencia fiscal juega un papel crucial en sus ingresos mensuales disponibles. Por ejemplo, un salario bruto de $85,000 USD produce un salario neto mensual de alrededor de ${destNetMonthly} en {dest}, en comparación con ${originNetMonthly} en {origin}.",
    taxBody2: "Más allá de las tasas impositivas nominales, el poder adquisitivo local determina su calidad de vida real. Al ajustar por el índice de costo de vida local ({destCostIndex} en comparación con la base de EE. UU. de 100), sus ingresos netos en {dest} experimentan un multiplicador de poder adquisitivo de {purchasingPower}x. Esto significa que sus ganancias en {dest} rinden significativamente más que en {origin}.",
    taxFaqs: [
      {
        q: "¿Cuál es la tasa impositiva en {dest} para trabajadores remotos?",
        a: "La tasa impositiva efectiva estimada en {dest} es de alrededor del {destTax}%, que puede variar según su estructura de visa o esquemas como {perk}."
      },
      {
        q: "¿Cómo se compara el costo de vida entre {origin} y {dest}?",
        a: "El costo de vida en {dest} tiene un índice de {destCostIndex}. Al considerar los impuestos netos, esto resulta en una diferencia de poder adquisitivo real de {purchasingPower}x en comparación con {origin}."
      },
      {
        q: "¿Qué esquemas fiscales se aplican a un {status} remoto en {dest}?",
        a: "En {dest}, los {status}s remotos suelen aprovechar la {perk} o las exenciones locales para contratistas independientes para optimizar sus impuestos."
      }
    ],
    llmIntro: "Diseñar aplicaciones de IA modernas utilizando modelos de lenguaje grandes (LLM) requiere un equilibrio entre los costes de la API, la calidad y la latencia. Al comparar {modelA} con {modelB} para tareas de {useCase} a gran escala, los precios de las APIs definen el coste operativo mensual.",
    llmBody1: "Para cargas de trabajo de {useCase}, {modelA} y {modelB} ofrecen diferentes precios por millón de tokens. Los equipos de ingeniería deben evaluar el almacenamiento en caché de prompts y los límites de la ventana de contexto.",
    llmBody2: "A gran escala, las pequeñas diferencias de precios entre {modelA} y {modelB} suponen miles de dólares de ahorro. Elegir la configuración de LLM adecuada para {useCase} puede reducir los costes de API hasta en un 40%.",
    llmFaqs: [
      {
        q: "¿Qué modelo es más rentable para {useCase}?",
        a: "La rentabilidad depende de la relación de tokens de entrada y salida. Por lo general, los modelos con almacenamiento en caché activo de prompts ofrecen descuentos significativos para {useCase}."
      },
      {
        q: "¿Cómo puedo optimizar los costes de API al usar {modelA} o {modelB}?",
        a: "Las estrategias clave incluyen almacenar en caché prompts de contexto repetitivos y seleccionar variantes de modelos más pequeñas (como mini o flash) para subtareas dentro de su flujo de {useCase}."
      }
    ]
  },
  de: {
    taxIntro: "Die Bewertung eines Remote-Übergangs oder einer Relocation von {origin} nach {dest} erfordert eine umfassende Analyse der grenzüberschreitenden Steuerstrukturen, der lokalen Sozialversicherungsbeiträge und der Lebenshaltungskostenindizes. Wenn Sie als Remote-{status} arbeiten, wird Ihr Nettoeinkommen stark von den lokalen Steuerrichtlinien und Programmen wie {perk} beeinflusst.",
    taxBody1: "In {dest} beträgt der geschätzte effektive Einkommensteuersatz ungefähr {destTax}%. Im Vergleich dazu erhebt {origin} einen Basissteuersatz von {originTax}%. Diese Steuerdifferenz spielt eine entscheidende Rolle für Ihr monatliches verfügbares Einkommen. Beispielsweise führt ein Bruttogehalt von 85.000 USD zu einem monatlichen Nettogehalt von rund ${destNetMonthly} in {dest}, verglichen mit ${originNetMonthly} in {origin}.",
    taxBody2: "Über die nominalen Steuersätze hinaus bestimmt die lokale Kaufkraft Ihre tatsächliche Lebensqualität. Unter Berücksichtigung des lokalen Lebenshaltungskostenindex ({destCostIndex} im Vergleich zur US-Basis von 100) erfährt Ihr Nettoeinkommen in {dest} einen Kaufkraftmultiplikator von {purchasingPower}x. Dies bedeutet, dass Ihre Einnahmen in {dest} deutlich weiter reichen als in {origin}.",
    taxFaqs: [
      {
        q: "Wie hoch ist der Steuersatz in {dest} für Remote-Mitarbeiter?",
        a: "Der geschätzte effektive Einkommensteuersatz in {dest} liegt bei etwa {destTax}%, was je nach Visastruktur, Selbstständigenstatus oder Programmen wie {perk} variieren kann."
      },
      {
        q: "Wie sind die Lebenshaltungskosten im Vergleich zwischen {origin} und {dest}?",
        a: "Die Lebenshaltungskosten in {dest} haben einen Indexwert von {destCostIndex}. Unter Berücksichtigung der Nettosteuern ergibt sich ein Kaufkraftunterschied von {purchasingPower}x im Vergleich zu {origin}."
      },
      {
        q: "Welche Steuerprogramme gelten für Remote-{status} in {dest}?",
        a: "In {dest} nutzen Remote-{status} in der Regel {perk} oder lokale Freiberufler-Steuerbefreiungen, um ihre globalen Steuern zu optimieren."
      }
    ],
    llmIntro: "Die Entwicklung moderner KI-Anwendungen mit LLMs erfordert einen Kompromiss zwischen API-Kosten, Qualität und Latenz. Beim Vergleich von {modelA} mit {modelB} für hochvolumige {useCase}-Pipelines bestimmen die API-Preise die monatlichen Betriebskosten.",
    llmBody1: "Für {useCase}-Workloads bieten {modelA} und {modelB} unterschiedliche Preise pro 1 Million Token. Teams müssen Prompt-Caching und Latenzzeiten pro Token-Generierung bewerten.",
    llmBody2: "Bei großen Datenmengen führen bereits geringe Preisunterschiede zu erheblichen Abweichungen. Die Wahl der richtigen LLM-Konfiguration für {useCase} kann die API-Kosten um bis zu 40% senken.",
    llmFaqs: [
      {
        q: "Welches Modell ist für {useCase} kosteneffizienter?",
        a: "Die Kosteneffizienz hängt vom Token-Verhältnis ab. Modelle mit Prompt-Caching (wie {modelA} oder {modelB}) bieten erhebliche Rabatte bei {useCase}."
      },
      {
        q: "Wie kann ich API-Kosten bei der Verwendung von {modelA} oder {modelB} optimieren?",
        a: "Zu den Strategien gehören das Caching wiederkehrender Prompts und die Auswahl kleinerer Modellvarianten (z. B. mini oder flash) für einfachere Unteraufgaben in Ihrer {useCase}-Pipeline."
      }
    ]
  },
  pt: {
    taxIntro: "Avaliar uma transição remota ou relocação de {origin} para {dest} exige uma análise abrangente das estruturas fiscais transfronteiriças, contribuições locais para a previdência social e índices de custo de vida. Ao trabalhar como {status} remoto, sua renda líquida é fortemente influenciada por políticas fiscais locais e esquemas como o {perk}.",
    taxBody1: "Em {dest}, a taxa efetiva estimada de imposto de renda é de aproximadamente {destTax}%. Em comparação, {origin} impõe uma taxa tributária base de {originTax}%. Essa variação fiscal desempenha um papel crucial na sua renda mensal disponível. Por exemplo, um salário bruto de $85.000 USD rende um salário líquido mensal de cerca de ${destNetMonthly} em {dest}, em comparação com ${originNetMonthly} em {origin}.",
    taxBody2: "Além das taxas fiscais nominais, o poder de compra local determina sua qualidade de vida real. Ajustando pelo índice de custo de vida local ({destCostIndex} comparado à base dos EUA de 100), sua renda líquida em {dest} experimenta um multiplicador de poder de compra de {purchasingPower}x. Isso significa que seus ganhos em {dest} rendem significativamente mais do que em {origin}.",
    taxFaqs: [
      {
        q: "Qual é a taxa de imposto em {dest} para trabalhadores remotos?",
        a: "A taxa efetiva estimada de imposto de renda em {dest} é de cerca de {destTax}%, variando de acordo com seu visto ou regimes como o {perk}."
      },
      {
        q: "Como o custo de vida se compara entre {origin} e {dest}?",
        a: "O custo de vida em {dest} tem uma pontuação de índice de {destCostIndex}. Considerando impostos líquidos, isso resulta em uma diferença de poder de compra real de {purchasingPower}x em relação a {origin}."
      },
      {
        q: "Quais regimes fiscais se aplicam a um {status} remoto em {dest}?",
        a: "Em {dest}, {status}s remotos costumam aproveitar o {perk} ou isenções locais de contratantes independentes para otimizar seus impostos globais."
      }
    ],
    llmIntro: "Projetar aplicativos modernos de IA utilizando modelos de linguagem grandes (LLMs) exige um equilíbrio entre custos de API, qualidade e latência. Ao comparar {modelA} com {modelB} para pipelines de {useCase} em alto volume, as estruturas de preços das APIs definem o custo operacional.",
    llmBody1: "Para cargas de trabalho de {useCase}, {modelA} e {modelB} oferecem preços diferentes por milhão de tokens. Equipes de engenharia devem avaliar o cache de prompts e limites de contexto.",
    llmBody2: "Em escala, mesmo pequenas diferenças de preço entre {modelA} e {modelB} acumulam em milhares de dólares. Escolher a configuração correta para {useCase} pode reduzir os custos de API em até 40%.",
    llmFaqs: [
      {
        q: "Qual modelo é mais econômico para {useCase}?",
        a: "A economia depende da proporção de tokens de entrada e saída. Modelos com cache ativo de prompts oferecem descontos significativos para {useCase}."
      },
      {
        q: "Como posso otimizar os custos de API ao usar {modelA} ou {modelB}?",
        a: "As estratégias principais incluem cache de prompts contextuais repetitivos e seleção de variantes de modelo menores (como mini ou flash) para subtarefas dentro do pipeline de {useCase}."
      }
    ]
  },
  fr: {
    taxIntro: "Évaluer une transition à distance ou une relocalisation de {origin} à {dest} nécessite une analyse complète des structures fiscales transfrontalières, des cotisations de sécurité sociale locales et des indices de coût de la vie. En travaillant comme {status} à distance, votre revenu net est fortement influencé par les politiques fiscales locales et les dispositifs tels que le {perk}.",
    taxBody1: "À {dest}, le taux d'imposition effectif estimé sur le revenu est d'environ {destTax}%. En comparaison, {origin} impose un taux d'imposition de base de {originTax}%. Cette différence fiscale joue un rôle crucial dans votre revenu mensuel disponible. Par exemple, un salaire brut de $85 000 USD donne un salaire net mensuel d'environ ${destNetMonthly} à {dest}, contre ${originNetMonthly} à {origin}.",
    taxBody2: "Au-delà des taux d'imposition nominaux, le pouvoir d'achat local détermine votre qualité de vie réelle. En ajustant pour l'indice de coût de la vie local ({destCostIndex} par rapport à la base américaine de 100), votre revenu net à {dest} bénéficie d'un multiplicateur de pouvoir d'achat de {purchasingPower}x. Cela signifie que vos gains à {dest} vont beaucoup plus loin qu'à {origin}.",
    taxFaqs: [
      {
        q: "Quel est le taux d'imposition à {dest} pour les travailleurs à distance ?",
        a: "Le taux d'imposition effectif estimé à {dest} est d'environ {destTax}%, ce qui peut varier selon la structure de votre visa ou des programmes comme le {perk}."
      },
      {
        q: "Comment se compare le coût de la vie entre {origin} et {dest} ?",
        a: "Le coût de la vie à {dest} a un indice de {destCostIndex}. En intégrant les impôts nets, cela donne une différence de pouvoir d'achat réel de {purchasingPower}x par rapport à {origin}."
      },
      {
        q: "Quels régimes fiscaux s'appliquent à un {status} à distance à {dest} ?",
        a: "À {dest}, les {status}s à distance tirent généralement parti du {perk} ou d'exonérations d'indépendants locaux pour optimiser leurs impôts globaux."
      }
    ],
    llmIntro: "Concevoir des applications d'IA modernes utilisant des modèles de langage (LLM) nécessite un compromis minutieux entre les coûts d'API, la qualité et la latence. Lors de la comparaison de {modelA} par rapport à {modelB} pour des pipelines {useCase} à volume élevé, les structures de tarification de l'API définissent le coût opérationnel.",
    llmBody1: "Pour les charges de travail {useCase}, {modelA} et {modelB} proposent des grilles tarifaires différentes pour 1 million de tokens. Les ingénieurs doivent évaluer la mise en cache des invites et la latence par token.",
    llmBody2: "À grande échelle, de faibles écarts de prix entre {modelA} and {modelB} représentent des milliers de dollars d'économie. Choisir la bonne configuration LLM pour {useCase} peut réduire les coûts d'API de 40%.",
    llmFaqs: [
      {
        q: "Quel modèle est le plus rentable pour {useCase} ?",
        a: "La rentabilité dépend du ratio de tokens d'entrée/sortie. Généralement, les modèles avec mise en cache active des invites (comme {modelA} ou {modelB}) offrent des réductions importantes pour {useCase}."
      },
      {
        q: "Comment puis-je optimiser les coûts d'API en utilisant {modelA} ou {modelB} ?",
        a: "Les stratégies clés incluent la mise en cache des invites répétitives et la sélection de modèles plus petits (comme mini ou flash) pour les sous-tâches de votre pipeline {useCase}."
      }
    ]
  },
  id: {
    taxIntro: "Mengevaluasi transisi jarak jauh atau relokasi dari {origin} ke {dest} memerlukan analisis komprehensif tentang struktur pajak lintas batas, kontribusi jaminan sosial setempat, dan indeks biaya hidup. Saat bekerja sebagai {status} jarak jauh, pendapatan bersih Anda sangat dipengaruhi oleh kebijakan fiskal setempat dan skema seperti {perk}.",
    taxBody1: "Di {dest}, perkiraan tarif pajak penghasilan efektif adalah sekitar {destTax}%. Sebagai perbandingan, {origin} mengenakan tarif pajak dasar sebesar {originTax}%. Variasi pajak ini memainkan peran penting dalam pendapatan bulanan Anda yang dapat dibelanjakan. Misalnya, gaji bruto sebesar $85.000 USD menghasilkan gaji bersih bulanan sekitar ${destNetMonthly} di {dest}, dibandingkan dengan ${originNetMonthly} di {origin}.",
    taxBody2: "Di luar tarif pajak nominal, daya beli lokal menentukan kualitas hidup Anda yang sebenarnya. Menyesuaikan dengan indeks biaya hidup lokal ({destCostIndex} dibandingkan dengan standar AS sebesar 100), pendapatan bersih Anda di {dest} mengalami peningkatan daya beli sebesar {purchasingPower}x. Ini berarti penghasilan Anda di {dest} bernilai jauh lebih besar daripada di {origin}.",
    taxFaqs: [
      {
        q: "Berapa tarif pajak di {dest} untuk pekerja jarak jauh?",
        a: "Perkiraan tarif pajak penghasilan efektif di {dest} adalah sekitar {destTax}%, yang dapat bervariasi berdasarkan struktur visa Anda atau skema khusus seperti {perk}."
      },
      {
        q: "Bagaimana perbandingan biaya hidup antara {origin} dan {dest}?",
        a: "Biaya hidup di {dest} memiliki skor indeks {destCostIndex}. Jika memperhitungkan pajak bersih, ini menghasilkan perbedaan daya beli riil {purchasingPower}x dibandingkan dengan {origin}."
      },
      {
        q: "Skema pajak apa yang berlaku untuk {status} jarak jauh di {dest}?",
        a: "Di {dest}, {status} jarak jauh biasanya memanfaatkan {perk} atau pengecualian kontraktor independen setempat untuk mengoptimalkan kewajiban pajak global mereka."
      }
    ],
    llmIntro: "Membangun aplikasi AI modern yang menggunakan model bahasa besar (LLM) memerlukan keseimbangan cermat antara biaya API, kualitas output, dan latency. Saat membandingkan {modelA} dengan {modelB} untuk pipa {useCase} volume tinggi, harga API sangat menentukan biaya operasional bulanan.",
    llmBody1: "Untuk beban kerja {useCase}, {modelA} dan {modelB} menawarkan harga yang berbeda per 1 Juta token. Ekiplere perlu mengevaluasi caching prompt dan batas konteks.",
    llmBody2: "Pada skala besar, perbedaan harga kecil sekalipun antara {modelA} dan {modelB} akan berakumulasi menjadi ribuan dolar. Memilih konfigurasi LLM yang tepat untuk {useCase} dapat memangkas biaya API hingga 40%.",
    llmFaqs: [
      {
        q: "Model mana yang lebih hemat biaya untuk {useCase}?",
        a: "Kehematan biaya bergantung pada rasio token input vs output Anda. Model dengan caching prompt aktif (seperti {modelA} atau {modelB}) menawarkan diskon signifikan untuk {useCase}."
      },
      {
        q: "Bagaimana cara mengoptimalkan biaya API saat menggunakan {modelA} atau {modelB}?",
        a: "Strategi utama meliputi caching prompt kontekstual yang berulang dan memilih varian model yang lebih kecil (seperti mini atau flash) untuk sub-tugas dalam pipa {useCase} Anda."
      }
    ]
  },
  ja: {
    taxIntro: "{origin}から{dest}へのリモート移行または移住を評価するには、国境を越えた税金構造、現地の社会保険料、および生活費指数の包括的な分析が必要です。リモートの{status}として働く場合、手取り収入は現地の税制や{perk}などの優遇措置に大きく影響されます。",
    taxBody1: "{dest}における推定実効所得税率は約{destTax}%です。これに対し、{origin}は基本税率として{originTax}%を課しています。この税額の差は、月々の手取り収入に極めて重要な役割を果たします。たとえば、総支給額が$85,000 USDの場合、{dest}での月々の手取りは約${destNetMonthly}となり、{origin}の${originNetMonthly}と比較されます。",
    taxBody2: "名目上の税率を超えて、現地の購買力が実際の生活の質を決定します。現地の生活費指数（米国基準100に対して{destCostIndex}）を調整すると、{dest}での手取り収入は{purchasingPower}倍の購買力を持ちます。これは、{dest}での収入が{origin}よりも実質的に価値があることを意味し、{status}としてより多くの貯蓄を可能にします。",
    taxFaqs: [
      {
        q: "{dest}でのリモートワーカーの税率はどのくらいですか？",
        a: "{dest}における推定実効所得税率は約{destTax}%であり、ビザの種類や個人事業主ステータス、または{perk}などの優遇措置によって異なる場合があります。"
      },
      {
        q: "{origin}と{dest}の生活費はどのように比較されますか？",
        a: "{dest}の生活費指数は{destCostIndex}です。純税金を考慮すると、{origin}と比較して実質{purchasingPower}倍の購買力の違いが生じます。"
      },
      {
        q: "{dest}のリモート{status}にはどのような税制が適用されますか？",
        a: "{dest}のリモート{status}は、一般的に{perk}または現地の個人事業主免除を利用して、グローバルな税金負担を最適化します。"
      }
    ],
    llmIntro: "大規模言語モデル（LLM）を活用した先進的なAIアプリケーションを設計するには、APIコスト、品質、遅延のバランスを考慮する必要があります。大量の{useCase}を処理するシステムにおいて{modelA}と{modelB}を比較する場合、API価格が月間の運用の成否を分けます。",
    llmBody1: "{useCase}ワークロードにおいて、{modelA}と{modelB}は100万トークンあたり異なる価格を提供します。プロンプトキャッシュや遅延時間などを評価する必要があります。",
    llmBody2: "規模が大きくなると、{modelA}と{modelB}のわずかな価格差が蓄積され、大きなコスト差になります。{useCase}に適したLLMを選択することで、精度を保ちながらAPIコストを最大40%削減できます。",
    llmFaqs: [
      {
        q: "{useCase}において、どちらのモデルがより費用対効果が高いですか？",
        a: "費用対効果は入力と出力トークンの比率に依存します。一般的に、アクティブなプロンプトキャッシュを備えたモデル（{modelA}や{modelB}など）は、大量の{useCase}において大きな割引を提供します。"
      },
      {
        q: "{modelA}や{modelB}を使用する際、APIコストをどのように最適化できますか？",
        a: "主な戦略として、重複するコンテキストプロンプトをキャッシュすることや、{useCase}パイプライン内の単純なサブタスクに小さなモデルバリアント（miniやflashなど）を選択することが挙げられます。"
      }
    ]
  }
};
const pageTranslations = {
  en: {
    disclaimer: "Disclaimer",
    disclaimerTax: "Tax laws change frequently and individual circumstances vary. Do not base financial or legal decisions solely on this calculator.",
    disclaimerLlm: "API prices and tokenizer rules are subject to change by the respective providers.",
    estimatesNote: "Calculations are estimations based on standard digital nomad tax schemes (e.g. {perk}) and general cost index multipliers. For official advice, please consult an accountant.",
    summaryTitle: "Tax & Relocation Summary",
    originBase: "Origin Base",
    destinationTarget: "Destination Target",
    effectiveTax: "Effective Tax",
    applicableTaxScheme: "Applicable Tax Scheme",
    realPurchasingPowerBoost: "Real Purchasing Power Boost",
    apiCostBenchmark: "{modelA} vs {modelB} API Cost Benchmark",
    remoteNetSalary: "{origin} → {dest} Remote {status} Net Salary"
  },
  tr: {
    disclaimer: "Yasal Uyarı",
    disclaimerTax: "Vergi kanunları sıklıkla değişir ve bireysel durumlar farklılık gösterir. Finansal veya yasal kararlarınızı yalnızca bu hesaplayıcıya dayandırmayın.",
    disclaimerLlm: "API fiyatları ve tokenizer kuralları ilgili sağlayıcılar tarafından değiştirilebilir.",
    estimatesNote: "Hesaplamalar standart dijital göçebe vergi rejimlerine (örn. {perk}) ve genel yaşam maliyeti endekslerine dayanan tahminlerdir. Resmi tavsiye için lütfen bir mali müşavirle görüşün.",
    summaryTitle: "Vergi ve Taşınma Özeti",
    originBase: "Kaynak Şehir",
    destinationTarget: "Hedef Şehir",
    effectiveTax: "Efektif Vergi",
    applicableTaxScheme: "Vergi Programı",
    realPurchasingPowerBoost: "Alım Gücü Çarpanı",
    apiCostBenchmark: "{modelA} ve {modelB} API Maliyet Karşılaştırması",
    remoteNetSalary: "{origin} → {dest} Uzaktan {status} Net Maaş Analizi"
  },
  es: {
    disclaimer: "Descargo de responsabilidad",
    disclaimerTax: "Las leyes fiscales cambian con frecuencia y las circunstancias individuales varían. No base sus decisiones financieras o legales únicamente en esta calculadora.",
    disclaimerLlm: "Los precios de las API y las reglas de tokenización están sujetos a cambios por parte de los respectivos proveedores.",
    estimatesNote: "Los cálculos son estimaciones basadas en esquemas fiscales estándar para nómadas digitales (por ejemplo, {perk}) y multiplicadores de índice de costo de vida general. Para obtener asesoramiento oficial, consulte a un contable.",
    summaryTitle: "Resumen de Impuestos y Reubicación",
    originBase: "Base de Origen",
    destinationTarget: "Destino de Destino",
    effectiveTax: "Impuesto Efectivo",
    applicableTaxScheme: "Esquema Fiscal Aplicable",
    realPurchasingPowerBoost: "Aumento Real del Poder Adquisitivo",
    apiCostBenchmark: "Comparación de Costos de API de {modelA} vs {modelB}",
    remoteNetSalary: "Salario Neto Remoto de {origin} → {dest} como {status}"
  },
  de: {
    disclaimer: "Haftungsausschluss",
    disclaimerTax: "Steuergesetze ändern sich häufig und die individuellen Umstände variieren. Treffen Sie finanzielle oder rechtliche Entscheidungen nicht ausschließlich auf der Grundlage dieses Rechners.",
    disclaimerLlm: "API-Preise und Tokenizer-Regeln können von den jeweiligen Anbietern geändert werden.",
    estimatesNote: "Die Berechnungen sind Schätzungen, die auf Standardsteuersystemen für digitale Nomaden (z. B. {perk}) und allgemeinen Lebenshaltungskostenindizes basieren. Für eine offizielle Beratung wenden Sie sich bitte an einen Steuerberater.",
    summaryTitle: "Steuer- & Umzugszusammenfassung",
    originBase: "Herkunftsort",
    destinationTarget: "Zielort",
    effectiveTax: "Effektiver Steuersatz",
    applicableTaxScheme: "Anwendbares Steuersystem",
    realPurchasingPowerBoost: "Realer Kaufkraftgewinn",
    apiCostBenchmark: "{modelA} vs {modelB} API-Kostenvergleich",
    remoteNetSalary: "{origin} → {dest} Remote-{status}-Nettogehalt"
  },
  pt: {
    disclaimer: "Aviso de Isenção",
    disclaimerTax: "As leis fiscais mudam frequentemente e as circunstâncias individuais variam. Não baseie as decisões financeiras ou legais exclusivamente nesta calculadora.",
    disclaimerLlm: "Os preços da API e as regras do tokenizador estão sujeitos a alterações pelos respectivos provedores.",
    estimatesNote: "Os cálculos são estimativas baseadas em regimes fiscais padrão para nômades digitais (por exemplo, {perk}) e multiplicadores gerais de custo de vida. Para conselhos oficiais, consulte um contador.",
    summaryTitle: "Resumo de Impostos e Relocação",
    originBase: "Base de Origem",
    destinationTarget: "Destino de Destino",
    effectiveTax: "Imposto Efetivo",
    applicableTaxScheme: "Regime Fiscal Aplicável",
    realPurchasingPowerBoost: "Aumento Real do Poder Aquisitivo",
    apiCostBenchmark: "Comparação de Custos de API {modelA} vs {modelB}",
    remoteNetSalary: "Salário Líquido Remoto de {origin} → {dest} como {status}"
  },
  fr: {
    disclaimer: "Clause de non-responsabilité",
    disclaimerTax: "Les lois fiscales changent fréquemment et les situations individuelles varient. Ne fondez pas vos décisions financières ou juridiques uniquement sur ce calculateur.",
    disclaimerLlm: "Les prix des API et les règles de tokenisation sont sujets à modification par les fournisseurs respectifs.",
    estimatesNote: "Les calculs sont des estimations basées sur les régimes fiscaux standards des nomades digitaux (ex. {perk}) et les indices de coût de la vie. Pour un conseil officiel, veuillez consulter un comptable.",
    summaryTitle: "Résumé des Impôts & Relocalisation",
    originBase: "Base d'Origine",
    destinationTarget: "Destination Cible",
    effectiveTax: "Impôt Effectif",
    applicableTaxScheme: "Régime Fiscal Applicable",
    realPurchasingPowerBoost: "Augmentation Réelle du Pouvoir d'Achat",
    apiCostBenchmark: "Comparatif des Coûts API {modelA} vs {modelB}",
    remoteNetSalary: "Salaire Net Distant de {origin} → {dest} en tant que {status}"
  },
  id: {
    disclaimer: "Penafian",
    disclaimerTax: "Undang-undang perpajakan sering berubah dan keadaan individu berbeda-beda. Jangan mendasarkan keputusan keuangan atau hukum semata-mata pada kalkulator ini.",
    disclaimerLlm: "Harga API dan aturan tokenisasi dapat berubah sewaktu-waktu oleh masing-masing penyedia.",
    estimatesNote: "Perhitungan adalah perkiraan berdasarkan skema pajak nomad digital standar (misalnya {perk}) dan indeks biaya hidup umum. Untuk saran resmi, silakan hubungi akuntan.",
    summaryTitle: "Ringkasan Pajak & Relokasi",
    originBase: "Basis Asal",
    destinationTarget: "Target Tujuan",
    effectiveTax: "Pajak Efektif",
    applicableTaxScheme: "Skema Pajak yang Berlaku",
    realPurchasingPowerBoost: "Peningkatan Daya Beli Nyata",
    apiCostBenchmark: "Tolok Ukur Biaya API {modelA} vs {modelB}",
    remoteNetSalary: "Gaji Bersih Remote {origin} → {dest} sebagai {status}"
  },
  ja: {
    disclaimer: "免責事項",
    disclaimerTax: "税法は頻繁に変更され、個々の状況によって異なります。この計算機のみに基づいて財務上または法律上の決定を下さないでください。",
    disclaimerLlm: "API価格およびトークナイザーのルールは、各プロバイダーによって変更される場合があります。",
    estimatesNote: "計算は、標準的なデジタルノマド税制（例：{perk}）および一般的な生活費指数に基づく見積もりです。公式なアドバイスについては、税理士にご相談ください。",
    summaryTitle: "税金と移住の概要",
    originBase: "元の拠点",
    destinationTarget: "目的地のターゲット",
    effectiveTax: "実効税率",
    applicableTaxScheme: "適用される税制",
    realPurchasingPowerBoost: "実質購買力の向上",
    apiCostBenchmark: "{modelA} と {modelB} の API コスト比較",
    remoteNetSalary: "{origin} から {dest} へのリモート {status} のネット給与"
  }
};
const localizeCity = (cityName, lang) => {
  if (!cityName) return "";
  let result = cityName;
  const countryMap = {
    " (US)": { tr: " (ABD)", es: " (EE. UU.)", de: " (USA)", pt: " (EUA)", fr: " (États-Unis)", id: " (AS)", ja: " (米国)", en: " (US)" },
    " (Germany)": { tr: " (Almanya)", es: " (Alemania)", de: " (Deutschland)", pt: " (Alemanha)", fr: " (Allemagne)", id: " (Jerman)", ja: " (ドイツ)", en: " (Germany)" },
    " (France)": { tr: " (Fransa)", es: " (Francia)", de: " (Frankreich)", pt: " (França)", fr: " (France)", id: " (Prancis)", ja: " (フランス)", en: " (France)" },
    " (Turkey)": { tr: " (Türkiye)", es: " (Turquía)", de: " (Türkei)", pt: " (Turquia)", fr: " (Turquie)", id: " (Turki)", ja: " (トルコ)", en: " (Turkey)" },
    " (UAE)": { tr: " (BAE)", es: " (EAU)", de: " (VAE)", pt: " (EAU)", fr: " (Émirats arabes unis)", id: " (UEA)", ja: " (UAE)", en: " (UAE)" },
    " (Canada)": { tr: " (Kanada)", es: " (Canadá)", de: " (Kanada)", pt: " (Canadá)", fr: " (Canada)", id: " (Kanada)", ja: " (カナダ)", en: " (Canada)" },
    " (Australia)": { tr: " (Avustralya)", es: " (Australia)", de: " (Australien)", pt: " (Austrália)", fr: " (Australie)", id: " (Australia)", ja: " (オーストラリア)", en: " (Australia)" },
    " (Switzerland)": { tr: " (İsviçre)", es: " (Suiza)", de: " (Schweiz)", pt: " (Suíça)", fr: " (Suisse)", id: " (Swiss)", ja: " (スイス)", en: " (Switzerland)" },
    " (Netherlands)": { tr: " (Hollanda)", es: " (Países Bajos)", de: " (Niederlande)", pt: " (Países Baixos)", fr: " (Pays-Bas)", id: " (Belanda)", ja: " (オランダ)", en: " (Netherlands)" },
    " (South Korea)": { tr: " (Güney Kore)", es: " (Corea del Sur)", de: " (Südkorea)", pt: " (Corea del Sur)", fr: " (Corée du Sud)", id: " (Korea Selatan)", ja: " (韓国)", en: " (South Korea)" },
    " (Poland)": { tr: " (Polonya)", es: " (Polonia)", de: " (Polen)", pt: " (Polónia)", fr: " (Pologne)", id: " (Polandia)", ja: " (ポーランド)", en: " (Poland)" },
    " (Austria)": { tr: " (Avusturya)", es: " (Austria)", de: " (Österreich)", pt: " (Áustria)", fr: " (Autriche)", id: " (Austria)", ja: " (オーストリア)", en: " (Austria)" },
    " (Ireland)": { tr: " (İrlanda)", es: " (Irlanda)", de: " (Irland)", pt: " (Irlanda)", fr: " (Irlande)", id: " (Irlandia)", ja: " (アイルランド)", en: " (Ireland)" },
    " (Sweden)": { tr: " (İsveç)", es: " (Suecia)", de: " (Schweden)", pt: " (Suécia)", fr: " (Suède)", id: " (Swedia)", ja: " (Stokholm)", en: " (Sweden)" },
    " (Denmark)": { tr: " (Danimarka)", es: " (Dinamarca)", de: " (Dänemark)", pt: " (Dinamarca)", fr: " (Danemark)", id: " (Denmark)", ja: " (デンマーク)", en: " (Denmark)" },
    " (Norway)": { tr: " (Norveç)", es: " (Noruega)", de: " (Norwegen)", pt: " (Noruega)", fr: " (Norvège)", id: " (Norwegia)", ja: " (ノルウェー)", en: " (Norway)" },
    " (Belgium)": { tr: " (Belçika)", es: " (Bélgica)", de: " (Belgien)", pt: " (Bélgica)", fr: " (Belgique)", id: " (Belgia)", ja: " (ベルギー)", en: " (Belgium)" },
    " (Italy)": { tr: " (İtalya)", es: " (Italia)", de: " (Italien)", pt: " (Itália)", fr: " (Italie)", id: " (Italia)", ja: " (イタリア)", en: " (Italy)" },
    " (Taiwan)": { tr: " (Tayvan)", es: " (Taiwán)", de: " (Taiwan)", pt: " (Taiwan)", fr: " (Taïwan)", id: " (Taiwan)", ja: " (台湾)", en: " (Taiwan)" },
    " (Spain)": { tr: " (İspanya)", es: " (España)", de: " (Spanien)", pt: " (Espanha)", fr: " (Espagne)", id: " (Spanyol)", ja: " (スペイン)", en: " (Spain)" },
    " (Portugal)": { tr: " (Portekiz)", es: " (Portugal)", de: " (Portugal)", pt: " (Portugal)", fr: " (Portugal)", id: " (Portugal)", ja: " (ポルトガル)", en: " (Portugal)" },
    " (Indonesia)": { tr: " (Endonezya)", es: " (Indonesia)", de: " (Indonesien)", pt: " (Indonésia)", fr: " (Indonésie)", id: " (Indonesia)", ja: " (インドネシア)", en: " (Indonesia)" },
    " (Japan)": { tr: " (Japonya)", es: " (Japón)", de: " (Japan)", pt: " (Japão)", fr: " (Japon)", id: " (Jepang)", ja: " (日本)", en: " (Japan)" },
    " (Thailand)": { tr: " (Tayland)", es: " (Tailandia)", de: " (Thailand)", pt: " (Tailândia)", fr: " (Thaïlande)", id: " (Thailand)", ja: " (タイ)", en: " (Thailand)" },
    " (Colombia)": { tr: " (Kolombiya)", es: " (Colombia)", de: " (Kolumbien)", pt: " (Colômbia)", fr: " (Colombie)", id: " (Kolombia)", ja: " (コロンビア)", en: " (Colombia)" },
    " (Argentina)": { tr: " (Arjantin)", es: " (Argentina)", de: " (Argentinien)", pt: " (Argentina)", fr: " (Argentine)", id: " (Argentina)", ja: " (アルゼンチン)", en: " (Argentina)" },
    " (South Africa)": { tr: " (Güney Afrika)", es: " (Sudáfrica)", de: " (Südafrika)", pt: " (África do Sul)", fr: " (Afrique du Sud)", id: " (Afrika Selatan)", ja: " (南アフリカ)", en: " (South Africa)" },
    " (Mexico)": { tr: " (Meksika)", es: " (México)", de: " (Mexiko)", pt: " (México)", fr: " (Mexique)", id: " (Meksiko)", ja: " (メキシコ)", en: " (Mexico)" },
    " (Estonia)": { tr: " (Estonya)", es: " (Estonia)", de: " (Estland)", pt: " (Estónia)", fr: " (Estonie)", id: " (Estonia)", ja: " (Estonia)", en: " (Estonia)" },
    " (Greece)": { tr: " (Yunanistan)", es: " (Grecia)", de: " (Griechenland)", pt: " (Grécia)", fr: " (Grèce)", id: " (Yunani)", ja: " (ギリシャ)", en: " (Greece)" },
    " (Vietnam)": { tr: " (Vietnam)", es: " (Vietnam)", de: " (Vietnam)", pt: " (Vietname)", fr: " (Viêt Nam)", id: " (Vietnam)", ja: " (ベトナム)", en: " (Vietnam)" },
    " (Malaysia)": { tr: " (Malezya)", es: " (Malasia)", de: " (Malaysia)", pt: " (Malásia)", fr: " (Malaisie)", id: " (Malaysia)", ja: " (マレーシア)", en: " (Malaysia)" },
    " (Hungary)": { tr: " (Macaristan)", es: " (Hungría)", de: " (Ungarn)", pt: " (Hungria)", fr: " (Hongrie)", id: " (Hongaria)", ja: " (ハンガリー)", en: " (Hungary)" },
    " (Czechia)": { tr: " (Çekya)", es: " (República Checa)", de: " (Tschechien)", pt: " (Chéquia)", fr: " (Tchéquie)", id: " (Ceko)", ja: " (チェコ)", en: " (Czechia)" },
    " (Brazil)": { tr: " (Brezilya)", es: " (Brasil)", de: " (Brasilien)", pt: " (Brasil)", fr: " (Brésil)", id: " (Brasil)", ja: " (ブラジル)", en: " (Brazil)" },
    " (Chile)": { tr: " (Şili)", es: " (Chile)", de: " (Chile)", pt: " (Chile)", fr: " (Chili)", id: " (Chili)", ja: " (チリ)", en: " (Chile)" },
    " (Costa Rica)": { tr: " (Kosta Rika)", es: " (Costa Rica)", de: " (Costa Rica)", pt: " (Costa Rica)", fr: " (Costa Rica)", id: " (Kosta Rika)", ja: " (コスタリカ)", en: " (Costa Rica)" },
    " (Georgia)": { tr: " (Gürcistan)", es: " (Georgia)", de: " (Georgien)", pt: " (Geórgia)", fr: " (Géorgie)", id: " (Georgia)", ja: " (ジョージア)", en: " (Georgia)" }
  };
  for (const [key, valueMap] of Object.entries(countryMap)) {
    if (result.includes(key)) {
      result = result.replace(key, valueMap[lang] || valueMap.en);
    }
  }
  const cityMap = {
    "New York City": { tr: "New York", es: "Nueva York", de: "New York", pt: "Nova Iorque", fr: "New York", id: "New York", ja: "ニューヨーク" },
    "London": { tr: "Londra", es: "Londres", de: "London", pt: "Londres", fr: "Londres", id: "London", ja: "ロンドン" },
    "Zurich": { tr: "Zürih", es: "Zúrich", fr: "Zurich", ja: "チューリッヒ" },
    "Seoul": { tr: "Seul", es: "Seúl", pt: "Seul", ja: "ソウル" },
    "Warsaw": { tr: "Varşova", es: "Varsovia", de: "Warschau", pt: "Varsóvia", fr: "Varsovie", id: "Warsawa", ja: "ワルシャワ" },
    "Vienna": { tr: "Viyana", es: "Viena", de: "Wien", pt: "Viena", fr: "Vienne", id: "Wina", ja: "ウィーン" },
    "Stockholm": { tr: "Stokholm", es: "Estocolmo", pt: "Estocolmo", ja: "ストックホルム" },
    "Copenhagen": { tr: "Kopenhag", es: "Copenhague", de: "Kopenhagen", pt: "Copenhaga", fr: "Copenhague", id: "Kopenhagen", ja: "コペンハーゲン" },
    "Brussels": { tr: "Brüksel", es: "Bruselas", de: "Brüssel", pt: "Bruxelas", fr: "Bruxelles", id: "Brussel", ja: "ブリュッセル" },
    "Milan": { tr: "Milano", es: "Milán", de: "Mailand", pt: "Milão", fr: "Milan", id: "Milan", ja: "ミラノ" },
    "Sydney": { tr: "Sidney", ja: "シドニー" },
    "Austin": { ja: "オースティン" },
    "Lisbon": { tr: "Lizbon", es: "Lisboa", de: "Lissabon", pt: "Lisboa", fr: "Lisbonne", id: "Lisbon", ja: "リスボン" },
    "Tokyo": { tr: "Tokyo", es: "Tokio", pt: "Tóquio", ja: "東京" },
    "Singapore": { tr: "Singapur", es: "Singapur", de: "Singapur", pt: "Singapura", fr: "Singapour", id: "Singapura", ja: "シンガポール" },
    "Cape Town": { tr: "Cape Town", es: "Ciudad del Cabo", de: "Kapstadt", pt: "Cidade do Cabo", fr: "Le Cap", id: "Cape Town", ja: "ケープタウン" },
    "Mexico City": { tr: "Meksiko", es: "Ciudad de México", de: "Mexiko-Stadt", pt: "Cidade do México", fr: "Mexico", id: "Mexico City", ja: "メキシコシティ" },
    "Athens": { tr: "Atina", es: "Grecia", de: "Athen", pt: "Atenas", fr: "Athènes", id: "Athena", ja: "アテネ" },
    "Barcelona": { tr: "Barselona", ja: "バルセロナ" },
    "Porto": { ja: "ポルト" },
    "Ho Chi Minh City": { tr: "Ho Chi Minh", es: "Ciudad Ho Chi Minh", de: "Ho-Chi-Minh-Stadt", pt: "Cidade de Ho Chi Minh", fr: "Hô-Chi-Minh-Ville", id: "Kota Ho Chi Minh", ja: "ホーチミン" },
    "Kuala Lumpur": { ja: "クアラルンプール" },
    "Budapest": { tr: "Budapeşte", ja: "ブダペスト" },
    "Prague": { tr: "Prag", es: "Praga", de: "Prag", pt: "Praga", fr: "Prague", id: "Prag", ja: "プラハ" },
    "Krakow": { tr: "Krakow", es: "Cracovia", de: "Krakau", pt: "Cracovie", fr: "Cracovie", id: "Krakow", ja: "クラクフ" },
    "Sao Paulo": { tr: "Sao Paulo", es: "São Paulo", pt: "São Paulo", ja: "サンパウロ" },
    "Santiago": { ja: "サンティアゴ" },
    "San Jose": { tr: "San Jose", es: "San José", pt: "San José", ja: "サンホセ" },
    "Valencia": { tr: "Valensiya", ja: "バレンシア" },
    "Cagliari / Sardinia": { tr: "Cagliari / Sardinya", es: "Cagliari / Cerdeña", de: "Cagliari / Sardinien", pt: "Cagliari / Sardenha", fr: "Cagliari / Sardaigne", id: "Cagliari / Sardinia", ja: "カリアリ / サルデーニャ" },
    "Tbilisi": { tr: "Tiflis", es: "Tiflis", de: "Tiflis", pt: "Tbilisi", fr: "Tbilissi", id: "Tbilisi", ja: "トビリシ" }
  };
  for (const [key, valueMap] of Object.entries(cityMap)) {
    if (result.startsWith(key)) {
      result = result.replace(key, valueMap[lang] || key);
    }
  }
  return result;
};
const localizeStatus = (label, lang) => {
  var _a, _b;
  const statusMap = {
    "Digital Nomad": { tr: "Dijital Göçebe", es: "Nómada Digital", de: "Digitaler Nomade", pt: "Nômade Digital", fr: "Nomade Digital", id: "Nomaden Digital", ja: "デジタルノマド", en: "Digital Nomad" },
    "Freelancer": { tr: "Serbest Çalışan", es: "Autónomo", de: "Freiberufler", pt: "Freelancer", fr: "Freelance", id: "Pekerja Lepas", ja: "フリーランサー", en: "Freelancer" }
  };
  return ((_a = statusMap[label]) == null ? void 0 : _a[lang]) || ((_b = statusMap[label]) == null ? void 0 : _b.en) || label;
};
const localizePerk = (perk, lang) => {
  var _a, _b;
  const perkMap = {
    "Special Tax Scheme / Beckham Law": {
      tr: "Özel Vergi Rejimi / Beckham Yasası",
      es: "Régimen Fiscal Especial / Ley Beckham",
      de: "Sondersteuerregelung / Beckham-Gesetz",
      pt: "Regime Fiscal Especial / Lei Beckham",
      fr: "Régime fiscal spécial / Loi Beckham",
      id: "Skema Pajak Khusus / Undang-Undang Beckham",
      ja: "特別税制（ベッカム法）",
      en: "Special Tax Scheme / Beckham Law"
    },
    "Independent Contractor Exemption": {
      tr: "Bağımsız Yüklenici Muafiyeti",
      es: "Exención de Contratista Independiente",
      de: "Freiberufler-Steuerbefreiung",
      pt: "Isenção de Contratador Independente",
      fr: "Exonération pour entrepreneur indépendant",
      id: "Pengecualian Kontraktor Independen",
      ja: "独立契約者免除",
      en: "Independent Contractor Exemption"
    }
  };
  return ((_a = perkMap[perk]) == null ? void 0 : _a[lang]) || ((_b = perkMap[perk]) == null ? void 0 : _b.en) || perk;
};
let taxMatrixMap = null;
let llmMatrixMap = null;
const getRouteData = (slug, type) => {
  if (type === "tax") {
    if (!taxMatrixMap) {
      taxMatrixMap = /* @__PURE__ */ new Map();
      generatePseoTaxMatrix().forEach((r) => taxMatrixMap.set(r.slug, r));
    }
    return taxMatrixMap.get(slug);
  } else {
    if (!llmMatrixMap) {
      llmMatrixMap = /* @__PURE__ */ new Map();
      generatePseoLlmMatrix().forEach((r) => llmMatrixMap.set(r.slug, r));
    }
    return llmMatrixMap.get(slug);
  }
};
function DynamicToolPage({ pageData, routeData, type, lang = "en" }) {
  const t = (path) => getTranslation(lang, path);
  const { slug } = useParams();
  let data = pageData || routeData;
  if (!data && slug) {
    data = getRouteData(slug, type);
  }
  if (!data) return null;
  const isLlmTool = !!data.modelA;
  const { title, description, origin, dest, status, modelA, modelB, useCase } = data;
  const activePageText = pageTranslations[lang] || pageTranslations.en;
  let taxContext = "";
  if (!isLlmTool && (dest == null ? void 0 : dest.effTax)) {
    if (dest.effTax > 0.25) taxContext = t("dynamic.taxHigh");
    else if (dest.effTax < 0.15) taxContext = t("dynamic.taxLow");
    else taxContext = t("dynamic.taxMid");
  }
  const localizedOriginName = isLlmTool ? "" : localizeCity(origin == null ? void 0 : origin.name, lang);
  const localizedDestName = isLlmTool ? "" : localizeCity(dest == null ? void 0 : dest.name, lang);
  const localizedStatusLabel = isLlmTool ? "" : localizeStatus(status == null ? void 0 : status.label, lang);
  const localizedStatusPerk = isLlmTool ? "" : localizePerk(status == null ? void 0 : status.perk, lang);
  const dynamicTitle = isLlmTool ? t("dynamic.llmTitle").replace("{{modelA}}", modelA).replace("{{modelB}}", modelB).replace("{{useCase}}", useCase.replace("-", " ")) : t("dynamic.taxTitle").replace("{{origin}}", localizedOriginName).replace("{{dest}}", localizedDestName).replace("{{status}}", localizedStatusLabel);
  const dynamicDesc = isLlmTool ? t("dynamic.llmDesc").replace("{{modelA}}", modelA).replace("{{modelB}}", modelB).replace("{{useCase}}", useCase.replace("-", " ")) : t("dynamic.taxDesc").replace("{{origin}}", localizedOriginName).replace("{{dest}}", localizedDestName).replace("{{status}}", localizedStatusLabel).replace("{{taxContext}}", taxContext);
  const originNet = isLlmTool ? 0 : 85e3 * (1 - origin.effTax);
  const destNet = isLlmTool ? 0 : 85e3 * (1 - dest.effTax);
  const purchasingPowerBoost = isLlmTool ? "1.0" : (destNet / originNet * (100 / dest.costIndex)).toFixed(2);
  const activeTemplates = templates[lang] || templates["en"];
  let introText = "";
  let body1Text = "";
  let body2Text = "";
  let faqs = [];
  if (!isLlmTool) {
    const replacer = (text) => {
      if (!text) return "";
      return text.replace(/{origin}/g, localizedOriginName).replace(/{dest}/g, localizedDestName).replace(/{status}/g, localizedStatusLabel).replace(/{perk}/g, localizedStatusPerk).replace(/{destTax}/g, ((dest == null ? void 0 : dest.effTax) * 100).toFixed(0)).replace(/{originTax}/g, ((origin == null ? void 0 : origin.effTax) * 100).toFixed(0)).replace(/{destNetMonthly}/g, Math.round(destNet / 12).toLocaleString()).replace(/{originNetMonthly}/g, Math.round(originNet / 12).toLocaleString()).replace(/{destCostIndex}/g, (dest == null ? void 0 : dest.costIndex) || "").replace(/{purchasingPower}/g, purchasingPowerBoost);
    };
    introText = replacer(activeTemplates.taxIntro);
    body1Text = replacer(activeTemplates.taxBody1);
    body2Text = replacer(activeTemplates.taxBody2);
    faqs = (activeTemplates.taxFaqs || []).map((f) => ({
      question: replacer(f.q),
      answer: replacer(f.a)
    }));
  } else {
    const replacer = (text) => {
      if (!text) return "";
      return text.replace(/{modelA}/g, modelA || "").replace(/{modelB}/g, modelB || "").replace(/{useCase}/g, (useCase || "").replace("-", " "));
    };
    introText = replacer(activeTemplates.llmIntro);
    body1Text = replacer(activeTemplates.llmBody1);
    body2Text = replacer(activeTemplates.llmBody2);
    faqs = (activeTemplates.llmFaqs || []).map((f) => ({
      question: replacer(f.q),
      answer: replacer(f.a)
    }));
  }
  const unifiedSchema = generateUnifiedSchema({
    url: `https://globalpaycalc.com/${isLlmTool ? "tools" : "calculator"}/${slug}`,
    name: dynamicTitle,
    description: dynamicDesc,
    faqs
  });
  const allRoutes = isLlmTool ? generatePseoLlmMatrix() : generatePseoTaxMatrix();
  const relatedRoutes = allRoutes.filter((r) => r.slug !== slug && (isLlmTool ? r.modelA === modelA : r.origin.code === origin.code)).slice(0, 3);
  const faqTitle = {
    en: "Frequently Asked Questions",
    tr: "Sıkça Sorulan Sorular",
    es: "Preguntas Frecuentes",
    de: "Häufig gestellte Fragen",
    pt: "Perguntas Frequentes",
    fr: "Questions Fréquemment Posées",
    id: "Pertanyaan yang Sering Diajukan",
    ja: "よくある質問"
  }[lang] || "Frequently Asked Questions";
  return /* @__PURE__ */ jsxs("div", { className: "space-y-8 max-w-4xl mx-auto my-8 animate-in fade-in duration-300", children: [
    /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold", children: [
        /* @__PURE__ */ jsx(ArrowLeftRight, { className: "w-3.5 h-3.5" }),
        /* @__PURE__ */ jsx("span", { children: isLlmTool ? t("dynamic.llmHeader") : t("dynamic.taxHeader") })
      ] }),
      /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl font-extrabold text-white tracking-tight", children: dynamicTitle }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-sm leading-relaxed max-w-2xl mx-auto", children: dynamicDesc })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "glass-card glass-card-hover p-6 sm:p-8 rounded-2xl border-brand-500/20 space-y-6", children: [
      /* @__PURE__ */ jsxs("h3", { className: "text-sm font-bold text-white flex items-center space-x-2", children: [
        /* @__PURE__ */ jsx(TrendingUp, { className: "w-4.5 h-4.5 text-brand-400" }),
        /* @__PURE__ */ jsx("span", { className: "gradient-text", children: isLlmTool ? t("dynamic.llmHeader") : t("dynamic.taxHeader") })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2 relative overflow-hidden group", children: [
          /* @__PURE__ */ jsx("div", { className: "text-[10px] text-slate-400 font-semibold uppercase", children: isLlmTool ? modelA : t("dynamic.originNet").replace("{{origin}}", (origin == null ? void 0 : origin.flag) + " " + localizedOriginName) }),
          /* @__PURE__ */ jsxs("div", { className: "text-2xl font-mono font-extrabold text-white", children: [
            "$",
            isLlmTool ? "N/A" : `${Math.round(originNet / 12).toLocaleString()}/mo`
          ] }),
          !isLlmTool && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("div", { className: "w-full bg-slate-800 rounded-full h-2", children: /* @__PURE__ */ jsx("div", { className: "bg-slate-500 h-2 rounded-full transition-all duration-1000", style: { width: `${(1 - (origin == null ? void 0 : origin.effTax)) * 100}%` } }) }),
            /* @__PURE__ */ jsx("span", { className: "text-[10px] text-slate-500 font-mono", children: t("dynamic.taxRate").replace("{{rate}}", ((origin == null ? void 0 : origin.effTax) * 100).toFixed(0)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-4 rounded-xl bg-brand-500/10 border border-brand-500/20 space-y-2 relative overflow-hidden group", children: [
          /* @__PURE__ */ jsx("div", { className: "text-[10px] text-brand-300 font-semibold uppercase", children: isLlmTool ? modelB : t("dynamic.destNet").replace("{{dest}}", (dest == null ? void 0 : dest.flag) + " " + localizedDestName) }),
          /* @__PURE__ */ jsxs("div", { className: "text-2xl font-mono font-extrabold text-white", children: [
            "$",
            isLlmTool ? "N/A" : `${Math.round(destNet / 12).toLocaleString()}/mo`
          ] }),
          !isLlmTool && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("div", { className: "w-full bg-slate-800 rounded-full h-2", children: /* @__PURE__ */ jsx("div", { className: "bg-brand-500 h-2 rounded-full transition-all duration-1000 delay-300", style: { width: `${(1 - (dest == null ? void 0 : dest.effTax)) * 100}%` } }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mt-1", children: [
              /* @__PURE__ */ jsx("span", { className: "text-[10px] text-brand-400/70 font-mono", children: t("dynamic.taxRate").replace("{{rate}}", ((dest == null ? void 0 : dest.effTax) * 100).toFixed(0)) }),
              /* @__PURE__ */ jsxs("span", { className: "text-[10px] text-brand-400 font-bold bg-brand-500/20 px-2 rounded-full py-0.5", children: [
                purchasingPowerBoost,
                "x ",
                t("dynamic.purchasingPower")
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "absolute -inset-4 bg-brand-500/5 blur-xl group-hover:bg-brand-500/10 transition duration-500 opacity-0 group-hover:opacity-100" })
        ] })
      ] }),
      !isLlmTool && /* @__PURE__ */ jsxs("div", { className: "pt-4 border-t border-slate-800/60 flex items-start space-x-3", children: [
        /* @__PURE__ */ jsx(ShieldAlert, { className: "w-5 h-5 text-amber-500 shrink-0 mt-0.5" }),
        /* @__PURE__ */ jsxs("p", { className: "text-xs text-slate-400 leading-relaxed", children: [
          "* ",
          activePageText.estimatesNote.replace("{perk}", localizedStatusPerk)
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("article", { className: "glass-card p-6 sm:p-10 rounded-2xl border-slate-800 space-y-8 mt-12", children: [
      /* @__PURE__ */ jsxs("header", { className: "space-y-2 border-b border-slate-800 pb-6", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold text-white flex items-center space-x-3", children: [
          /* @__PURE__ */ jsx(Info, { className: "w-6 h-6 text-brand-400 flex-shrink-0" }),
          /* @__PURE__ */ jsx("span", { children: isLlmTool ? activePageText.apiCostBenchmark.replace("{modelA}", modelA.toUpperCase()).replace("{modelB}", modelB.toUpperCase()) : activePageText.remoteNetSalary.replace("{origin}", localizedOriginName).replace("{dest}", localizedDestName).replace("{status}", localizedStatusLabel) })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-sm font-medium", children: isLlmTool ? t("dynamic.relatedLlmDesc") : t("dynamic.relatedTaxDesc") })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4 text-slate-300 text-sm leading-relaxed", children: [
        /* @__PURE__ */ jsx("p", { children: introText }),
        /* @__PURE__ */ jsx("p", { children: body1Text }),
        !isLlmTool && /* @__PURE__ */ jsxs("div", { className: "bg-slate-900 border border-slate-800 p-4 rounded-xl my-4", children: [
          /* @__PURE__ */ jsx("h4", { className: "font-bold text-white mb-2", children: activePageText.summaryTitle }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside space-y-1 text-slate-400 text-xs", children: [
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsxs("strong", { children: [
                activePageText.originBase,
                " (",
                localizedOriginName,
                "):"
              ] }),
              " ",
              activePageText.effectiveTax,
              " ~",
              ((origin == null ? void 0 : origin.effTax) * 100).toFixed(0),
              "%"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsxs("strong", { children: [
                activePageText.destinationTarget,
                " (",
                localizedDestName,
                "):"
              ] }),
              " ",
              activePageText.effectiveTax,
              " ~",
              ((dest == null ? void 0 : dest.effTax) * 100).toFixed(0),
              "%"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsxs("strong", { children: [
                activePageText.applicableTaxScheme,
                ":"
              ] }),
              " ",
              localizedStatusPerk
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsxs("strong", { children: [
                activePageText.realPurchasingPowerBoost,
                ":"
              ] }),
              " ",
              purchasingPowerBoost,
              "x"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { children: body2Text })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-8 pt-4 border-t border-slate-800", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white", children: faqTitle }),
        faqs.map((faq, index) => /* @__PURE__ */ jsxs("section", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("h4", { className: "text-base font-semibold text-slate-200", children: faq.question }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-400 leading-relaxed", children: faq.answer })
        ] }, index))
      ] }),
      /* @__PURE__ */ jsx("footer", { className: "pt-6 border-t border-slate-800 text-xs text-slate-500", children: /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsxs("strong", { children: [
          activePageText.disclaimer,
          ":"
        ] }),
        isLlmTool ? ` ${activePageText.disclaimerLlm}` : ` ${activePageText.disclaimerTax}`
      ] }) })
    ] }),
    relatedRoutes.length > 0 && /* @__PURE__ */ jsxs("section", { className: "mt-12 space-y-4", children: [
      /* @__PURE__ */ jsxs("h3", { className: "text-xl font-bold text-white flex items-center space-x-2", children: [
        /* @__PURE__ */ jsx(Link, { className: "w-5 h-5 text-brand-400" }),
        /* @__PURE__ */ jsx("span", { children: t("dynamic.relatedComparisons") })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-400 mb-6", children: isLlmTool ? t("dynamic.relatedLlmDesc") : t("dynamic.relatedTaxDesc") }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4", children: relatedRoutes.map((route) => {
        const relOrigin = isLlmTool ? "" : localizeCity(route.origin.name, lang);
        const relDest = isLlmTool ? "" : localizeCity(route.dest.name, lang);
        return /* @__PURE__ */ jsxs(
          Link$1,
          {
            to: `/${lang === "en" ? "" : lang + "/"}${isLlmTool ? "tools" : "calculator"}/${route.slug}`,
            className: "p-4 rounded-xl border border-slate-800 bg-slate-900/50 hover:bg-slate-800 transition block group",
            children: [
              /* @__PURE__ */ jsx("div", { className: "text-xs text-brand-400 mb-1", children: isLlmTool ? route.useCase.replace("-", " ") : `${relOrigin} → ${relDest}` }),
              /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold text-slate-200 group-hover:text-white line-clamp-2", children: route.title })
            ]
          },
          route.slug
        );
      }) })
    ] }),
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsxs("title", { children: [
        dynamicTitle,
        " | GlobalPayCalc"
      ] }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: dynamicDesc })
    ] }),
    /* @__PURE__ */ jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: { __html: JSON.stringify(unifiedSchema) } })
  ] });
}
export {
  DynamicToolPage as default
};
