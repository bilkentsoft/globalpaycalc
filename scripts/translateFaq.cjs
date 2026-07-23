const fs = require('fs');
const path = require('path');

const translations = {
  en: {
    faq: {
      llmQ1: "How does the architecture of {{modelA}} compare to {{modelB}} for {{useCase}}?",
      llmA1: "When evaluating {{modelA}} versus {{modelB}} for {{useCase}} workloads, you must consider both token economics and latency. {{modelA}} might offer specific architectural advantages for your use case, whereas {{modelB}} could provide a more cost-effective scale for high-throughput environments.",
      llmQ2: "What are the hidden costs of running {{useCase}} in production?",
      llmA2: "Beyond the base API token costs for {{modelA}} and {{modelB}}, production deployments often incur additional expenses related to vector database storage, prompt caching overhead, and retry logic during API rate limits.",
      llmQ3: "Which model is better suited for real-time applications?",
      llmA3: "Real-time applications demand low Time-To-First-Token (TTFT) metrics. While {{modelA}} or {{modelB}} may boast superior reasoning capabilities, the latency trade-off is a critical factor for {{useCase}}.",
      taxQ1: "What is the comprehensive digital nomad tax framework in {{dest}}?",
      taxA1: "Relocating to {{dest}} as a digital nomad involves navigating their specific tax residency rules. Under the {{perk}}, remote workers can often benefit from a streamlined tax process. The effective tax rate is approximately {{taxRate}}%.",
      taxQ2: "How does the purchasing power in {{dest}} compare to {{origin}}?",
      taxA2: "One of the primary drivers for moving from {{origin}} to {{dest}} is the difference in the cost of living. Because {{dest}} has a significantly different consumer price index, your net salary stretches much further, giving you a {{boost}}x purchasing power boost.",
      taxQ3: "Are there hidden costs when working remotely from {{dest}}?",
      taxA3: "While the headline tax rate of {{taxRate}}% and the purchasing power boost of {{boost}}x are attractive, prospective nomads should account for hidden expenses like mandatory health insurance and visa fees."
    },
    cookie: {
      message: "We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking 'Accept All', you consent to our use of cookies in accordance with our Privacy Policy.",
      accept: "Accept All",
      decline: "Decline"
    }
  },
  tr: {
    faq: {
      llmQ1: "{{modelA}} mimarisi {{useCase}} için {{modelB}} ile karşılaştırıldığında nasıldır?",
      llmA1: "{{useCase}} iş yükleri için {{modelA}} ve {{modelB}} değerlendirilirken hem jeton (token) ekonomisi hem de gecikme (latency) göz önünde bulundurulmalıdır. {{modelA}} kullanım senaryonuza özgü mimari avantajlar sunabilirken, {{modelB}} yüksek işlem hacimli ortamlar için daha maliyet etkin olabilir.",
      llmQ2: "Üretim ortamında {{useCase}} çalıştırmanın gizli maliyetleri nelerdir?",
      llmA2: "{{modelA}} ve {{modelB}} için temel API jeton maliyetlerinin ötesinde, üretim ortamı dağıtımları genellikle vektör veritabanı depolaması, prompt önbellekleme ve API hız sınırları sırasındaki yeniden deneme mantığıyla ilgili ek masraflara neden olur.",
      llmQ3: "Gerçek zamanlı uygulamalar için hangi model daha uygundur?",
      llmA3: "Gerçek zamanlı uygulamalar düşük İlk-Jeton-Süresi (TTFT) metrikleri gerektirir. {{modelA}} veya {{modelB}} üstün mantıksal yürütme yeteneklerine sahip olsa da, gecikme süresi {{useCase}} için kritik bir faktördür.",
      taxQ1: "{{dest}} ülkesindeki dijital göçebe vergi sistemi nasıldır?",
      taxA1: "Bir dijital göçebe olarak {{dest}} ülkesine taşınmak, o ülkenin spesifik vergi mukimliği kurallarını bilmeyi gerektirir. {{perk}} kapsamında uzaktan çalışanlar kolaylaştırılmış bir vergi sürecinden faydalanabilir. Efektif vergi oranı yaklaşık %{{taxRate}} civarındadır.",
      taxQ2: "{{dest}} ülkesindeki alım gücü {{origin}} ile karşılaştırıldığında nasıldır?",
      taxA2: "{{origin}} ülkesinden {{dest}} ülkesine taşınmanın temel nedenlerinden biri yaşam maliyeti farkıdır. {{dest}} tüketici fiyat endeksi daha uygun olduğu için maaşınız çok daha değerli hale gelir ve size {{boost}}x alım gücü artışı sağlar.",
      taxQ3: "{{dest}} ülkesinden uzaktan çalışmanın gizli maliyetleri var mıdır?",
      taxA3: "%{{taxRate}} vergi oranı ve {{boost}}x alım gücü artışı cazip gelse de, zorunlu sağlık sigortası ve vize ücretleri gibi gizli masrafları da hesaba katmalısınız."
    },
    cookie: {
      message: "Tarama deneyiminizi geliştirmek, kişiselleştirilmiş reklamlar veya içerik sunmak ve trafiğimizi analiz etmek için çerezleri (cookies) kullanıyoruz. 'Tümünü Kabul Et' seçeneğine tıklayarak, Gizlilik Politikamıza uygun olarak çerez kullanımımızı kabul etmiş olursunuz.",
      accept: "Tümünü Kabul Et",
      decline: "Reddet"
    }
  },
  es: {
    faq: {
      llmQ1: "¿Cómo se compara la arquitectura de {{modelA}} con {{modelB}} para {{useCase}}?",
      llmA1: "Al evaluar {{modelA}} frente a {{modelB}} para {{useCase}}, debe considerar tanto la economía de tokens como la latencia. {{modelA}} podría ofrecer ventajas arquitectónicas específicas, mientras que {{modelB}} podría proporcionar una escala más rentable.",
      llmQ2: "¿Cuáles son los costos ocultos de ejecutar {{useCase}} en producción?",
      llmA2: "Más allá de los costos base de API para {{modelA}} y {{modelB}}, las implementaciones de producción a menudo incurren en gastos adicionales relacionados con bases de datos vectoriales y caché de prompts.",
      llmQ3: "¿Qué modelo es más adecuado para aplicaciones en tiempo real?",
      llmA3: "Las aplicaciones en tiempo real exigen métricas bajas de TTFT. Aunque {{modelA}} o {{modelB}} tengan razonamiento superior, la latencia es crítica para {{useCase}}.",
      taxQ1: "¿Cuál es el marco fiscal para nómadas digitales en {{dest}}?",
      taxA1: "Reubicarse en {{dest}} requiere navegar sus reglas fiscales. Bajo {{perk}}, los trabajadores remotos se benefician de procesos simplificados. La tasa impositiva efectiva es aprox {{taxRate}}%.",
      taxQ2: "¿Cómo se compara el poder adquisitivo en {{dest}} con {{origin}}?",
      taxA2: "Debido a que {{dest}} tiene un índice de precios al consumidor diferente, su salario neto rinde mucho más, dándole un aumento de poder adquisitivo de {{boost}}x comparado con {{origin}}.",
      taxQ3: "¿Existen costos ocultos al trabajar de forma remota desde {{dest}}?",
      taxA3: "Aunque la tasa de {{taxRate}}% y el impulso de {{boost}}x son atractivos, los nómadas deben considerar gastos ocultos como seguros de salud y visas."
    },
    cookie: {
      message: "Utilizamos cookies para mejorar su experiencia, mostrar anuncios personalizados y analizar nuestro tráfico. Al hacer clic en 'Aceptar todo', acepta nuestro uso de cookies según nuestra Política de privacidad.",
      accept: "Aceptar todo",
      decline: "Rechazar"
    }
  },
  de: {
    faq: {
      llmQ1: "Wie vergleicht sich die Architektur von {{modelA}} mit {{modelB}} für {{useCase}}?",
      llmA1: "Bei der Bewertung von {{modelA}} gegenüber {{modelB}} für {{useCase}} müssen Sie sowohl die Token-Ökonomie als auch die Latenz berücksichtigen. {{modelA}} bietet möglicherweise spezifische Vorteile.",
      llmQ2: "Was sind die versteckten Kosten beim Ausführen von {{useCase}} in Produktion?",
      llmA2: "Über die grundlegenden API-Kosten für {{modelA}} und {{modelB}} hinaus entstehen oft zusätzliche Kosten für Vektordatenbanken und Caching.",
      llmQ3: "Welches Modell ist besser für Echtzeitanwendungen geeignet?",
      llmA3: "Echtzeitanwendungen erfordern niedrige TTFT-Werte. Obwohl {{modelA}} oder {{modelB}} besser logisch denken, ist die Latenz für {{useCase}} entscheidend.",
      taxQ1: "Wie ist das steuerliche Rahmenwerk für digitale Nomaden in {{dest}}?",
      taxA1: "Ein Umzug nach {{dest}} erfordert die Beachtung spezifischer Steuerregeln. Unter {{perk}} profitieren Remote-Arbeiter oft. Der effektive Steuersatz beträgt ca. {{taxRate}}%.",
      taxQ2: "Wie vergleicht sich die Kaufkraft in {{dest}} mit {{origin}}?",
      taxA2: "Da {{dest}} einen anderen Verbraucherpreisindex hat, reicht Ihr Nettogehalt viel weiter, was Ihnen einen {{boost}}x Kaufkraftschub im Vergleich zu {{origin}} gibt.",
      taxQ3: "Gibt es versteckte Kosten bei der Fernarbeit aus {{dest}}?",
      taxA3: "Während die {{taxRate}}% Rate und der {{boost}}x Schub attraktiv sind, sollten Nomaden versteckte Kosten wie Krankenversicherung und Visa einkalkulieren."
    },
    cookie: {
      message: "Wir verwenden Cookies, um Ihre Erfahrung zu verbessern, personalisierte Anzeigen zu schalten und unseren Traffic zu analysieren. Durch Klicken auf 'Alle akzeptieren' stimmen Sie der Verwendung von Cookies zu.",
      accept: "Alle akzeptieren",
      decline: "Ablehnen"
    }
  },
  pt: {
    faq: {
      llmQ1: "Como a arquitetura de {{modelA}} se compara a {{modelB}} para {{useCase}}?",
      llmA1: "Ao avaliar {{modelA}} versus {{modelB}} para {{useCase}}, considere a economia de tokens e latência. {{modelA}} pode oferecer vantagens específicas.",
      llmQ2: "Quais são os custos ocultos de executar {{useCase}} em produção?",
      llmA2: "Além dos custos básicos da API para {{modelA}} e {{modelB}}, muitas vezes há despesas adicionais com banco de dados vetorial e cache.",
      llmQ3: "Qual modelo é mais adequado para aplicações em tempo real?",
      llmA3: "Aplicações em tempo real exigem baixa latência (TTFT). Embora {{modelA}} ou {{modelB}} tenham raciocínio superior, a latência é crítica para {{useCase}}.",
      taxQ1: "Qual é a estrutura tributária para nômades digitais em {{dest}}?",
      taxA1: "Mudar para {{dest}} envolve regras específicas de residência fiscal. Sob {{perk}}, a taxa de imposto efetiva é de cerca de {{taxRate}}%.",
      taxQ2: "Como o poder de compra em {{dest}} se compara a {{origin}}?",
      taxA2: "Como {{dest}} tem um custo de vida diferente, seu salário líquido rende muito mais, dando a você um aumento de poder de compra de {{boost}}x em relação a {{origin}}.",
      taxQ3: "Existem custos ocultos ao trabalhar remotamente de {{dest}}?",
      taxA3: "Embora a taxa de {{taxRate}}% e o aumento de {{boost}}x sejam atraentes, considere despesas ocultas como seguro saúde e vistos."
    },
    cookie: {
      message: "Usamos cookies para melhorar sua experiência, veicular anúncios personalizados e analisar nosso tráfego. Ao clicar em 'Aceitar tudo', você concorda com o uso de cookies.",
      accept: "Aceitar tudo",
      decline: "Recusar"
    }
  },
  fr: {
    faq: {
      llmQ1: "Comment l'architecture de {{modelA}} se compare-t-elle à {{modelB}} pour {{useCase}} ?",
      llmA1: "Lors de l'évaluation de {{modelA}} contre {{modelB}} pour {{useCase}}, vous devez tenir compte des coûts des tokens et de la latence.",
      llmQ2: "Quels sont les coûts cachés de l'exécution de {{useCase}} en production ?",
      llmA2: "Au-delà des coûts de l'API de base pour {{modelA}} et {{modelB}}, il y a souvent des frais supplémentaires liés aux bases de données vectorielles et à la mise en cache.",
      llmQ3: "Quel modèle est le plus adapté aux applications en temps réel ?",
      llmA3: "Les applications en temps réel exigent une faible latence (TTFT). Bien que {{modelA}} ou {{modelB}} aient un raisonnement supérieur, la latence est essentielle pour {{useCase}}.",
      taxQ1: "Quel est le cadre fiscal des nomades numériques à {{dest}} ?",
      taxA1: "Déménager à {{dest}} implique des règles spécifiques de résidence fiscale. Sous {{perk}}, le taux d'imposition effectif est d'environ {{taxRate}} %.",
      taxQ2: "Comment le pouvoir d'achat à {{dest}} se compare-t-il à {{origin}} ?",
      taxA2: "Parce que {{dest}} a un coût de la vie différent, votre salaire net va beaucoup plus loin, vous donnant un gain de pouvoir d'achat de {{boost}}x par rapport à {{origin}}.",
      taxQ3: "Y a-t-il des coûts cachés en travaillant à distance depuis {{dest}} ?",
      taxA3: "Bien que le taux de {{taxRate}} % et le gain de {{boost}}x soient attrayants, tenez compte des frais cachés comme l'assurance maladie et les visas."
    },
    cookie: {
      message: "Nous utilisons des cookies pour améliorer votre expérience, diffuser des annonces personnalisées et analyser notre trafic. En cliquant sur 'Tout accepter', vous consentez à l'utilisation de cookies.",
      accept: "Tout accepter",
      decline: "Refuser"
    }
  },
  id: {
    faq: {
      llmQ1: "Bagaimana perbandingan arsitektur {{modelA}} dengan {{modelB}} untuk {{useCase}}?",
      llmA1: "Saat mengevaluasi {{modelA}} versus {{modelB}} untuk {{useCase}}, Anda harus mempertimbangkan ekonomi token dan latensi.",
      llmQ2: "Apa biaya tersembunyi menjalankan {{useCase}} dalam produksi?",
      llmA2: "Selain biaya API dasar untuk {{modelA}} dan {{modelB}}, sering kali ada pengeluaran tambahan terkait database vektor dan cache.",
      llmQ3: "Model mana yang lebih cocok untuk aplikasi real-time?",
      llmA3: "Aplikasi real-time menuntut latensi rendah (TTFT). Meskipun {{modelA}} atau {{modelB}} lebih cerdas, latensi sangat penting untuk {{useCase}}.",
      taxQ1: "Apa kerangka pajak nomaden digital di {{dest}}?",
      taxA1: "Pindah ke {{dest}} melibatkan aturan residensi pajak spesifik. Di bawah {{perk}}, tarif pajak efektif sekitar {{taxRate}}%.",
      taxQ2: "Bagaimana perbandingan daya beli di {{dest}} dengan {{origin}}?",
      taxA2: "Karena {{dest}} memiliki biaya hidup yang berbeda, gaji bersih Anda bisa digunakan lebih banyak, memberi Anda peningkatan daya beli {{boost}}x dibandingkan dengan {{origin}}.",
      taxQ3: "Apakah ada biaya tersembunyi saat bekerja dari jarak jauh dari {{dest}}?",
      taxA3: "Meskipun tarif pajak {{taxRate}}% dan peningkatan daya beli {{boost}}x menarik, nomaden harus memperhitungkan biaya asuransi kesehatan dan visa."
    },
    cookie: {
      message: "Kami menggunakan cookie untuk meningkatkan pengalaman Anda, menayangkan iklan yang dipersonalisasi, dan menganalisis lalu lintas kami. Dengan mengeklik 'Terima Semua', Anda menyetujui penggunaan cookie kami.",
      accept: "Terima Semua",
      decline: "Tolak"
    }
  },
  ja: {
    faq: {
      llmQ1: "{{useCase}} における {{modelA}} と {{modelB}} のアーキテクチャの比較は？",
      llmA1: "{{useCase}} のために {{modelA}} と {{modelB}} を評価する際は、トークンの経済性とレイテンシの両方を考慮する必要があります。",
      llmQ2: "本番環境で {{useCase}} を実行する際の隠れたコストは？",
      llmA2: "{{modelA}} および {{modelB}} の基本APIコストに加えて、ベクトルデータベースやキャッシュに関連する追加費用が発生することがよくあります。",
      llmQ3: "リアルタイムアプリケーションに適しているモデルはどちらですか？",
      llmA3: "リアルタイムアプリケーションには低いTTFTが求められます。{{modelA}} や {{modelB}} の推論能力が高くても、{{useCase}} においてはレイテンシが重要です。",
      taxQ1: "{{dest}} でのデジタルノマド向けの税制はどうなっていますか？",
      taxA1: "{{dest}} への移住には特定の税務居住ルールの確認が必要です。{{perk}} の下では、実効税率は約 {{taxRate}}% です。",
      taxQ2: "{{dest}} での購買力は {{origin}} と比較してどうですか？",
      taxA2: "{{dest}} は生活費が異なるため、手取り給与の価値が高まり、{{origin}} と比較して約 {{boost}} 倍の購買力が得られます。",
      taxQ3: "{{dest}} からリモートワークする際の隠れたコストはありますか？",
      taxA3: "{{taxRate}}% の税率と {{boost}} 倍の購買力は魅力的ですが、健康保険やビザ費用などの隠れた支出も考慮する必要があります。"
    },
    cookie: {
      message: "当社はCookieを使用して、ブラウジング体験を向上させ、パーソナライズされた広告を提供し、トラフィックを分析します。「すべて受け入れる」をクリックすると、Cookieの使用に同意したことになります。",
      accept: "すべて受け入れる",
      decline: "拒否"
    }
  }
};

const localesDir = path.join(__dirname, '../src/i18n/locales');
for (const [lang, data] of Object.entries(translations)) {
  const filePath = path.join(localesDir, `${lang}.json`);
  if (fs.existsSync(filePath)) {
    const json = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    json.faq = data.faq;
    json.cookie = data.cookie;
    fs.writeFileSync(filePath, JSON.stringify(json, null, 2));
    console.log(`Updated ${lang}.json`);
  }
}
