import { jsxs, jsx } from "react/jsx-runtime";
import "react";
import { Info, HelpCircle, ShieldCheck } from "lucide-react";
import { a as generateSeoSchema } from "./schemaGenerator-F7liX1lB.js";
const articles = {
  /* ─────────────────────────── ENGLISH ─────────────────────────── */
  en: {
    "take-home": {
      title: "Global Net Take-Home Salary & Tax Calculator — Complete Guide",
      subtitle: "Federal Brackets, Social Security, and Net Pay Across 40+ Jurisdictions",
      paragraphs: [
        "Calculating gross-to-net salary for international remote positions requires understanding complex statutory tax frameworks. In the United States, net pay is affected by Federal Progressive Income Tax (10%–37%), State Income Tax (0% in TX/FL to 13.3% in CA), and FICA contributions (7.65%). European jurisdictions such as Germany and the UK layer National Insurance and pension contributions on top of progressive income tax bands.",
        "In emerging remote hubs like Turkey, statutory deductions include progressive income tax (15%–40%), SGK social security worker share (14%), and unemployment insurance (1%), partially offset by a minimum-wage tax exemption. Dubai remains a zero-income-tax jurisdiction, making it uniquely attractive for high earners. Our client-side engine computes exact monthly net take-home pay without sending any data to a server, ensuring full privacy while enabling accurate comparison of international offers."
      ],
      faqs: [
        { q: "How is Federal and State tax calculated for US remote workers?", a: "Federal income tax uses progressive marginal brackets (10%–37%). State tax ranges from 0% in Texas and Florida to 13.3% in California. FICA deducts 7.65% from employees." },
        { q: "What is the difference between Gross Salary and Net Take-Home Pay?", a: "Gross salary is total compensation before deductions. Net take-home is the exact cash deposited into your bank account after all income tax, social security, and health contributions." }
      ]
    },
    contractor: {
      title: "W-2 Employee vs 1099 Contractor Equivalence & IR35 Tax Guide",
      subtitle: "Self-Employment Tax, Benefit Overheads, and Billing Rate Calculations",
      paragraphs: [
        "Choosing between a full-time salaried position and a 1099 independent contractor arrangement requires careful accounting of indirect financial benefits. Employees receive employer-subsidised health insurance, retirement matching, paid time off, and the employer's FICA share (7.65%). In contrast, US 1099 contractors pay 15.3% self-employment tax, fund their own health coverage, and absorb non-billable vacation days and software/accounting expenses.",
        "In the UK, the IR35 legislation determines whether a contract is 'Inside IR35' (taxed like employment) or 'Outside IR35' (allowing tax-efficient dividends through a Personal Service Company). To maintain the same net standard of living, a freelancer typically needs to bill 25%–40% more than an equivalent salaried employee. Our calculator factors in all these variables to find the precise hourly rate needed."
      ],
      faqs: [
        { q: "Why should 1099 contractors charge 30% more than salaried employees?", a: "They pay 15.3% SE tax, fund their own health insurance, absorb unpaid vacation weeks, and cover accounting and software expenses entirely themselves." }
      ]
    },
    "hourly-rate": {
      title: "Freelancer Minimum Hourly Rate Calculator — Complete Guide",
      subtitle: "Target Net Income, Fixed Business Expenses & Billable Hours",
      paragraphs: [
        "Setting the right hourly rate is the most critical financial decision for a freelancer. Most new freelancers make the mistake of dividing their desired annual income by 2,080 hours. In reality, client acquisition, invoicing, revisions, and admin work mean true billable hours rarely exceed 20–25 per week for a full-time freelancer.",
        "Our engine adds your target annual net income, estimated tax burden, and fixed annual business expenses (software licences, hardware amortisation, accountancy fees), then divides the total by realistically billable hours to produce the minimum viable rate. Setting any rate below this figure guarantees a net loss versus salaried employment."
      ],
      faqs: [
        { q: "How many hours per week can a freelancer bill to clients?", a: "On average, 20–25 hours per week are billable. The remaining 15–20 hours go to admin, business development, and communication." }
      ]
    },
    "beckham-law": {
      title: "Expat Tax Regimes: Beckham Law, NHR 2.0, and Impatriati Guide",
      subtitle: "Fixed-Rate Tax Advantages in Spain, Portugal, Italy, and Dubai",
      paragraphs: [
        "Europe's governments offer powerful expat tax regimes to attract high-earning remote workers and founders. Spain's Beckham Law (Royal Decree 687/2005) allows qualifying foreign workers to pay a flat 24% rate on Spanish-sourced income for six years, instead of the progressive rate reaching 47%. Applicants must not have been Spanish tax residents in the prior five years.",
        "Portugal's NHR / IFICI regime offers 20% flat tax on qualifying tech and creative roles, while Italy's Impatriati law exempts 50%–70% of income from the tax base. Dubai (UAE) levies zero income tax and zero capital gains tax, making it the most tax-efficient destination for remote founders. Our calculator models net savings across all four regimes simultaneously."
      ],
      faqs: [
        { q: "Who qualifies for Spain's Beckham Law?", a: "Foreign workers who have not been Spanish tax residents in the prior five years and are relocating under an employment contract with a Spanish or internationally structured company." }
      ]
    },
    "crypto-tax": {
      title: "Crypto & Stablecoin Remote Salary Tax Guide",
      subtitle: "USDT, USDC, and Crypto Payroll — Income Tax vs Capital Gains Tax",
      paragraphs: [
        "Receiving salary in USDT, USDC, BTC, or ETH is a taxable event in virtually every developed jurisdiction. The US IRS, UK HMRC, and German BZSt all treat crypto compensation as ordinary income at the fair market value on the date of receipt. Failing to report this accurately can result in significant underpayment penalties.",
        "When you later convert or dispose of the crypto, any price appreciation since receipt triggers Capital Gains Tax (CGT). Germany and Portugal offer a notable exemption: crypto held for more than 365 days is CGT-free. Dubai, by contrast, imposes no income tax and no CGT on crypto, making it increasingly popular for high-volume crypto earners. Our tool calculates both income tax at receipt and projected CGT at disposal."
      ],
      faqs: [
        { q: "Is USDT salary subject to income tax or capital gains tax?", a: "Both. The fiat value on the day of receipt is ordinary income. Any price change after receipt is a capital gain or loss when you dispose of the asset." }
      ]
    },
    "eor-cost": {
      title: "Employer of Record (EOR) vs Local Entity Setup — Cost Analysis",
      subtitle: "Deel, Remote.com vs Local Subsidiary: Breakeven Point Calculator",
      paragraphs: [
        "Tech companies expanding globally face two primary options: contracting through an Employer of Record (EOR) such as Deel or Remote.com, or incorporating a local subsidiary entity. EOR platforms charge a fixed monthly fee per employee (typically $499–$599/seat) and absorb all payroll compliance and employment law liability.",
        "However, once headcount in a single country exceeds 4–6 employees, total annual EOR fees often surpass the one-time cost of local entity formation plus ongoing accountancy. Our breakeven calculator models EOR vs entity total cost of ownership over 1–5 year horizons across all major markets, accounting for setup fees, monthly compliance costs, and legal overhead."
      ],
      faqs: [
        { q: "At what headcount does a local entity become cheaper than EOR?", a: "Typically when you have 4 or more employees in the same country, incorporating a local entity is more cost-effective than ongoing EOR fees." }
      ]
    },
    "nomad-visa": {
      title: "Digital Nomad Visa Financial Eligibility Guide",
      subtitle: "Minimum Monthly Income Requirements for Spain, Portugal, Dubai, Japan & More",
      paragraphs: [
        "Digital Nomad Visas allow remote workers to legally reside in a foreign country while serving clients or employers based elsewhere. Most countries require proof of consistent, documentable remote income above a stated monthly threshold. Spain requires approximately $2,900/month, Portugal's D8 visa requires $3,600/month, and Japan's Highly Skilled Professional visa requires approximately $5,500/month equivalent.",
        "Applicants must typically provide six months of bank statements, active remote contracts or proof of self-employment income, and proof of health insurance coverage. Our eligibility checker maps your current monthly net income against the official requirements of 10+ countries and flags which visas you qualify for today and which require an income increase."
      ],
      faqs: [
        { q: "Can family members be included in a Digital Nomad Visa?", a: "Yes. Most countries permit spouses and dependent children, but the minimum income threshold increases by 25%–50% per additional dependent." }
      ]
    },
    "fx-fees": {
      title: "International Wire Transfers & Hidden FX Markup Fee Guide",
      subtitle: "Mid-Market Exchange Rates vs Bank Markups: Wise vs SWIFT vs PayPal vs Stripe",
      paragraphs: [
        "Cross-border salary payments and international freelance invoices suffer from hidden exchange rate markups that are rarely disclosed upfront. Traditional SWIFT transfers and payment processors like PayPal and Stripe advertise low transfer fees while embedding a 2.5%–4.5% spread on the exchange rate. On a $60,000 annual salary, this hidden cost amounts to $1,500–$2,700 per year.",
        "Transparent fintech providers such as Wise and Revolut execute at the real mid-market interbank rate and charge an explicit, small percentage fee. Our calculator fetches the live interbank rate and compares it to typical bank markup tiers, showing your exact annual savings from switching to fee-transparent services."
      ],
      faqs: [
        { q: "What is an FX markup fee?", a: "An FX markup is the hidden profit margin banks embed in the exchange rate, quoting you a worse rate than the real interbank mid-market rate." }
      ]
    },
    vat: {
      title: "Global Cross-Border Invoice & VAT / GST Reverse Charge Guide",
      subtitle: "B2B Export Exemptions, EU Reverse Charge, and Zero-Rated Invoicing",
      paragraphs: [
        "Invoicing international B2B clients requires compliance with cross-border VAT and GST regulations. In the European Union, services rendered to non-resident corporate entities fall under the Reverse Charge Mechanism — the invoice issuer charges 0% VAT and annotates the invoice with: 'VAT reverse-charged pursuant to EU Directive 2006/112/EC'.",
        "Outside the EU, most jurisdictions apply export exemptions for services delivered to overseas businesses: UK zero-rating under VATA 1994, Australian GST-free exports, and Turkish 0% KDV ihracat istisnası. Our VAT calculator automatically applies the correct regime based on seller country, buyer country, and transaction type (B2B vs B2C), producing a fully compliant invoice breakdown."
      ],
      faqs: [
        { q: "Do I charge VAT when invoicing a foreign B2B client?", a: "Generally no. Cross-border B2B service exports are zero-rated under export exemptions or EU Reverse Charge, meaning the buyer accounts for any local VAT themselves." }
      ]
    },
    salary: {
      title: "Global Remote Salary & Purchasing Power Parity Calculator",
      subtitle: "Net Pay Comparison Across 150+ Countries with Cost-of-Living Adjustment",
      paragraphs: [
        "A $100,000 USD gross salary in San Francisco yields dramatically different purchasing power than the same figure in Warsaw or Bangkok. Purchasing Power Parity (PPP) adjustments allow remote workers to understand the true lifestyle value of compensation in any global city. Our calculator converts gross salary to net after local taxes, then adjusts for cost-of-living indices to show real equivalent purchasing power.",
        "This is especially critical for remote workers negotiating location-independent salaries with US or European employers. A company offering $80,000 to a developer relocating from London to Tbilisi may not realise that $80,000 in Tbilisi is equivalent to over $250,000 in London purchasing power terms."
      ],
      faqs: [
        { q: "What is Purchasing Power Parity and why does it matter for remote workers?", a: "PPP measures how much a given amount of money can buy in different countries. For remote workers, it reveals whether a salary covers a comparable lifestyle across locations." }
      ]
    },
    inflation: {
      title: "Inflation & Real Salary Purchasing Power Calculator",
      subtitle: "Annual Pay Rise Required to Maintain Real Income Against Inflation",
      paragraphs: [
        "Inflation silently erodes salary value every year. A 5% inflation rate with a 2% pay rise means an effective 3% annual pay cut in real terms. Remote workers receiving USD or EUR salaries while living in high-inflation countries like Turkey or Argentina face compounding purchasing power loss that can halve real income over 5–7 years.",
        "Our calculator uses current CPI data for 50+ countries to compute: (1) cumulative real salary erosion over 1–10 years, (2) the exact percentage raise required to maintain today's purchasing power, and (3) the inflation-adjusted equivalent of any past salary in today's money."
      ],
      faqs: [
        { q: "How much pay rise do I need to keep up with 8% inflation?", a: "You need exactly an 8% nominal raise to maintain your current purchasing power. Any raise below 8% represents a real-terms pay cut." }
      ]
    },
    timezone: {
      title: "Timezone Overlap Calculator for Global Remote Teams",
      subtitle: "Shared Working Hours Grid for US, Europe, Asia, and Africa",
      paragraphs: [
        "Distributed remote teams face the daily challenge of finding shared working windows across multiple timezones. A team split between San Francisco (UTC-8) and Singapore (UTC+8) shares zero overlap during standard 9–5 hours, making synchronous collaboration nearly impossible without flexible shift arrangements.",
        "Our overlap grid visualises exact shared hours between any combination of global cities, highlights optimal async communication windows, and suggests team meeting slots that minimise out-of-hours burden. The tool covers 80+ cities across all UTC offsets and automatically adjusts for Daylight Saving Time transitions."
      ],
      faqs: [
        { q: "What is the best city to be based in for maximum global timezone overlap?", a: "Dubai (UTC+4) offers the broadest overlap, sharing morning hours with Europe and afternoon hours with Southeast Asia, while remaining reachable from US East Coast evenings." }
      ]
    },
    wasm: {
      title: "Free AI Background Remover & Image Compressor — Privacy-First",
      subtitle: "Client-Side WebAssembly Processing — Zero Uploads, Zero Data Leaks",
      paragraphs: [
        "Traditional background removal tools upload your photos to remote servers, raising serious privacy concerns for sensitive personal or business images. Our WASM Studio processes every image entirely within your browser using a WebAssembly-compiled AI model, meaning your photos never leave your device.",
        "The tool supports batch processing of multiple images, outputs clean PNG with transparent background or WebP for web optimisation, and applies lossless or lossy compression to minimise file sizes. It runs at near-native speed on modern browsers thanks to WASM execution, with no API key, no account, and no usage limits."
      ],
      faqs: [
        { q: "Does the AI background remover upload my photos?", a: "No. All processing happens locally in your browser via WebAssembly. Your images are never transmitted to any server." }
      ]
    },
    ai: {
      title: "LLM API Cost Simulator: GPT-4o, Claude 3.5 & Gemini 1.5 Guide",
      subtitle: "Compare Monthly Token Costs for RAG, Customer Support & Agent Workloads",
      paragraphs: [
        "LLM API costs vary enormously across providers and models. GPT-4o charges $5/million input tokens and $15/million output tokens, while Claude 3.5 Sonnet is priced at $3/$15 per million. For a high-volume production deployment processing 50 million tokens monthly, the choice of model can mean a difference of $100,000+ per year in API costs.",
        "Our simulator lets you input monthly input and output token volumes, select any combination of models, and see exact cost projections for 1 month, 6 months, and 1 year. It also calculates the break-even point between using a managed API and self-hosting open-source models like LLaMA 3 on cloud GPU instances."
      ],
      faqs: [
        { q: "Is it cheaper to use GPT-4o API or self-host an open-source model?", a: "At low to medium volumes, GPT-4o API is cheaper when accounting for GPU rental, engineering, and maintenance. At very high volumes (100M+ tokens/month), self-hosting LLaMA 3 70B becomes cost-competitive." }
      ]
    }
  },
  /* ─────────────────────────── TÜRKÇE ─────────────────────────── */
  tr: {
    "take-home": {
      title: "Kapsamlı Rehber: Küresel Net Maaş ve Vergi Hesaplama",
      subtitle: "40+ Ülkede Gelir Vergisi Dilimleri, SGK ve Net Ele Geçen Maaş",
      paragraphs: [
        "Uluslararası uzaktan çalışma veya yurtdışına taşınma süreçlerinde brüt maaştan net ele geçen tutarı hesaplamak karmaşık mali mevzuatların anlaşılmasını gerektirir. ABD'de net maaş; Federal Kademeli Gelir Vergisi (%10–%37), Eyalet Vergisi (FL/TX/WA'da %0, CA'da %13.3'e kadar) ve FICA sosyal güvenlik kesintilerinden (%7.65) etkilenir.",
        "Türkiye'de brüt maaştan kademeli gelir vergisi dilimleri (%15–%40), SGK işçi payı (%14) ve işsizlik sigortası (%1) düşülürken asgari ücret vergi istisnası matrahtan indirilmektedir. Dinamik istemci tarafı motorumuz hiçbir veriyi sunucuya göndermeden aylık net nakit tutarını hesaplayarak yurtdışı iş tekliflerini en doğru şekilde değerlendirmenizi sağlar."
      ],
      faqs: [
        { q: "ABD remote çalışanları için Federal ve Eyalet vergisi nasıl hesaplanır?", a: "Federal gelir vergisi artan oranlı dilimler (%10–%37) kullanır. Eyalet vergisi Teksas ve Florida'da %0 iken California'da %13.3'e ulaşır. FICA %7.65 oranında kesilir." },
        { q: "Brüt Maaş ile Net Maaş arasındaki fark nedir?", a: "Brüt maaş kesinti yapılmamış toplam sözleşme tutarıdır. Net maaş ise tüm vergi, sosyal güvenlik ve sağlık primi kesildikten sonra hesabınıza yatan tutardır." }
      ]
    },
    contractor: {
      title: "W-2 Kadrolu Çalışan vs 1099 Freelancer Karşılaştırması & IR35 Rehberi",
      subtitle: "Serbest Çalışan Vergileri, Yan Haklar ve Saatlik Fatura Ücreti",
      paragraphs: [
        "Tam zamanlı kadrolu bir iş teklifi ile 1099 bağımsız yüklenici sözleşmesi arasında seçim yaparken dolaylı finansal hakların hesaplanması hayati önem taşır. Kadrolu çalışanlar işveren karşılamalı sağlık sigortası, emeklilik katkısı, ücretli yıllık izin ve sosyal güvenlik işveren payı haklarına sahiptir.",
        "ABD'deki 1099 yüklenicileri %15.3 oranındaki Serbest Çalışan Vergisini kendileri öder, fatura kesilemeyen tatil günlerini ve yazılım/muhasebe giderlerini üstlenirler. İngiltere'de IR35 yasası sözleşmenin kadrolu gibi mi yoksa avantajlı şirket yapısı üzerinden mi vergilendirileceğini belirler. Aynı yaşam standardını korumak için bir freelancer'ın maaşlı çalışana göre %25–%40 daha yüksek fatura sunması gerekmektedir."
      ],
      faqs: [
        { q: "1099 yüklenicileri neden kadrolu çalışandan %30 daha fazla fatura kesmelidir?", a: "%15.3 serbest çalışan vergisini, kendi sağlık sigortasını, ödenmeyen tatil haftalarını ve muhasebe giderlerini kendileri karşılamak zorundadırlar." }
      ]
    },
    "hourly-rate": {
      title: "Freelancer Minimum Saatlik Ücret Hesaplama Rehberi",
      subtitle: "Hedef Net Gelir, Sabit Giderler ve Faturalandırılabilir Saatler",
      paragraphs: [
        "Sürdürülebilir bir serbest çalışma kariyeri için doğru saatlik ücreti belirlemek kritik önem taşır. Çoğu freelancer yıllık net hedefini 2.080 saate bölerek hata yapar. Oysa müşteri bulma, faturalandırma ve idari işler nedeniyle gerçek faturalandırılabilir süre haftalık 20–25 saati geçmez.",
        "Hesaplama motorumuz; yıllık hedef net kazancınızı, tahmini vergi yükünüzü ve yıllık sabit iş giderlerinizi (yazılım lisansları, donanım amortismanı, muhasebe) toplayarak toplam yıllık faturalandırılabilir çalışma saatinize böler ve vermeniz gereken minimum teklifi çıkarır."
      ],
      faqs: [
        { q: "Bir freelancer haftada kaç saati müşteriye faturalandırabilir?", a: "Ortalama olarak tam zamanlı bir freelancer haftada 20–25 saati faturalandırabilir. Kalan 15–20 saat idari işler ve müşteri görüşmelerine gider." }
      ]
    },
    "beckham-law": {
      title: "Expat Vergi Rejimleri: Beckham Law, NHR 2.0 ve Impatriati Rehberi",
      subtitle: "İspanya, Portekiz, İtalya ve Dubai'de Sabit Vergi Avantajları",
      paragraphs: [
        "Avrupa ülkeleri yüksek gelirli remote çalışanları çekmek için son derece cazip expat vergi rejimleri sunar. İspanya'daki Beckham Yasası şartları karşılayan yabancı çalışanların 6 yıl boyunca %47'ye varan kademeli vergi yerine %24 sabit vergi ödemesini sağlar.",
        "Portekiz NHR / IFICI rejimi teknoloji rollerinde %20 sabit vergi sunarken, İtalya Impatriati kanunu vergi matrahında %50–%70 muafiyet sağlar. Dubai (BAE) ise sıfır gelir vergisi ve sıfır sermaye kazancı vergisi ile tam muafiyet sunar. Hesaplayıcımız dört rejim için net tasarrufu eş zamanlı olarak modellemektedir."
      ],
      faqs: [
        { q: "İspanya Beckham Yasasından kimler yararlanabilir?", a: "Son 5 yıl boyunca İspanya'da ikamet etmemiş ve İspanyol bir şirkete bağlı olarak taşınan yabancı çalışanlar yararlanabilir." }
      ]
    },
    "crypto-tax": {
      title: "Kripto & Stablecoin Remote Maaş Vergilendirme Rehberi",
      subtitle: "USDT, USDC ve Kripto Bordrolarında Gelir Vergisi vs Sermaye Kazancı",
      paragraphs: [
        "USDT, USDC, BTC veya ETH ile maaş almak neredeyse tüm gelişmiş ülkelerde vergilendirilebilir bir olaydır. ABD (IRS), İngiltere (HMRC) ve Almanya (BZSt) kripto maaşı alındığı andaki piyasa değeri üzerinden Gelir Vergisi olarak değerlendirir.",
        "Kripto parayı aldıktan sonra elinizde tutarsanız ve değeri değişirse, aradaki fark Sermaye Kazancı Vergisi kurallarına tabidir. Almanya ve Portekiz'de 365 günden uzun tutulan kripto varlıklar %0 sermaye kazancı vergisi muafiyetine sahiptir."
      ],
      faqs: [
        { q: "USDT maaş gelir vergisi mi yoksa sermaye kazancı mı sayılır?", a: "Hesaba yattığı andaki fiat karşılığı Gelir Vergisine tabidir. Sonraki değer değişimleri ise Sermaye Kazancı sayılır." }
      ]
    },
    "eor-cost": {
      title: "Employer of Record (EOR) vs Yerel Şirket Kurma Maliyet Analizi",
      subtitle: "Deel ve Remote.com Kullanımı ile Yerel Şirket Başa Baş Noktası",
      paragraphs: [
        "Uluslararası ekibini büyüten teknoloji şirketleri iki seçenekle karşılaşır: Deel veya Remote.com gibi bir EOR sağlayıcısı üzerinden çalıştırmak ya da o ülkede yerel şirket açmak. EOR platformları çalışan başına aylık sabit ücret alarak bordro ve iş hukuku sorumluluğunu üstlenir.",
        "Ancak o ülkedeki çalışan sayısı 4–6 kişiyi geçtiğinde toplam EOR maliyeti, yerel şirket kurulum ve yıllık muhasebe masraflarını aşar. Motorumuz 1–5 yıl ufkunda EOR vs şirket toplam sahip olma maliyetini tüm büyük pazarlar için modellemektedir."
      ],
      faqs: [
        { q: "Kaç çalışandan sonra şirket kurmak EOR'dan daha ucuza gelir?", a: "Genellikle aynı ülkede 4 ve üzeri çalışanınız olduğunda yerel şirket kurmak EOR kullanmaktan daha ekonomik hale gelir." }
      ]
    },
    "nomad-visa": {
      title: "Dijital Göçebe Vizesi Finansal Gelir Şartları Rehberi",
      subtitle: "İspanya, Portekiz, Dubai ve Japonya İçin Minimum Aylık Gelir Kriterleri",
      paragraphs: [
        "Dijital Göçebe Vizeleri uzaktan çalışanların başka bir ülkede yasal olarak ikamet etmelerine olanak tanır. Çoğu ülke başvuru sahibinden düzenli belgelenebilir bir aylık remote gelir şartı ister. İspanya aylık $2.900, Portekiz D8 vizesi $3.600, Japonya ise yıllık ~$5.500 gelir şartı arar.",
        "Başvuru sahiplerinin son 6 aylık banka dökümlerini, aktif remote sözleşmelerini ve sağlık sigortası belgelerini ibraz etmeleri gerekmektedir. Uygunluk denetleyicimiz aylık net gelirinizi 10+ ülkenin resmi şartlarıyla karşılaştırarak hangi vizelere bugün başvurabileceğinizi gösterir."
      ],
      faqs: [
        { q: "Dijital Göçebe Vizesine aile üyeleri dahil edilebilir mi?", a: "Evet. Çoğu ülke eş ve çocukları dahil etmeye izin verir; ancak her bağımlı birey için istenen minimum gelir tutarı %25–%50 oranında artar." }
      ]
    },
    "fx-fees": {
      title: "Uluslararası Transferler ve Gizli Kur Komisyonu Rehberi",
      subtitle: "Reel Piyasa Kuru ile Banka Marjları Kıyası: Wise, SWIFT, PayPal, Stripe",
      paragraphs: [
        "Sınır ötesi maaş ödemeleri ve uluslararası faturalar gizli döviz kuru marjlarından ciddi şekilde etkilenir. Geleneksel SWIFT banka transferleri ve ödeme sistemleri düşük işlem ücreti reklamı yaparken döviz kuruna %2.5–%4.5 arasında gizli marj ekler. Yıllık $60.000 maaşta bu gizli maliyet $1.500–$2.700 arasındadır.",
        "Wise veya Revolut gibi şeffaf fintek araçları gerçek Piyasa Ortası Kuru üzerinden işlem yaparak yılda binlerce dolar tasarruf etmenizi sağlar. Hesaplayıcımız canlı bankalararası kuru çekerek tipik banka marjı kademeleriyle karşılaştırır."
      ],
      faqs: [
        { q: "Gizli kur marjı (FX Markup) nedir?", a: "Bankaların veya ödeme sistemlerinin gerçek piyasa kuru üzerine kendi kâr marjlarını ekleyerek size daha kötü bir kurdan işlem yaptırmasıdır." }
      ]
    },
    vat: {
      title: "Küresel Hizmet İhracatı Faturası ve KDV / Sales Tax Rehberi",
      subtitle: "B2B Satışlarda Ters Ödeme Yükümlülüğü (Reverse Charge %0 KDV) Esasları",
      paragraphs: [
        "Uluslararası B2B müşterilere fatura keserken KDV (VAT) ve Satış Vergisi (Sales Tax) mevzuatlarına uymak zorunludur. Avrupa Birliği'nde yerleşik olmayan kurumsal müşterilere verilen B2B hizmetler Ters Ödeme Yükümlülüğü (Reverse Charge) kapsamına girer.",
        "Bu kural gereği fatura %0 KDV ile kesilir ve faturaya 'EU Directive 2006/112/EC uyarınca KDV alıcı tarafından beyan edilecektir' şerhi eklenir. KDV hesaplayıcımız satıcı ülkesi, alıcı ülkesi ve işlem türüne göre doğru vergi rejimini otomatik uygular."
      ],
      faqs: [
        { q: "Yurtdışındaki kurumsal müşteriye fatura keserken KDV eklenmeli mi?", a: "Hayır. Uluslararası B2B hizmet ihracatında vergi genellikle ihracat istisnası veya Reverse Charge kapsamında %0 KDV olarak uygulanır." }
      ]
    },
    salary: {
      title: "Küresel Remote Maaş & Satın Alma Gücü Paritesi Hesaplayıcısı",
      subtitle: "150+ Ülkede Net Maaş Karşılaştırması ve Yaşam Maliyeti Düzeltmesi",
      paragraphs: [
        "San Francisco'daki $100.000 brüt maaş, Varşova veya Bangkok'taki aynı rakamdan dramatik biçimde farklı satın alma gücü sağlar. Satın Alma Gücü Paritesi (PPP) düzeltmesi, uzaktan çalışanların herhangi bir küresel şehirde tazminatın gerçek yaşam değerini anlamasına olanak tanır.",
        "Bu, ABD veya Avrupa işverenlerinden lokasyondan bağımsız maaş müzakere eden remote çalışanlar için özellikle kritiktir. Hesaplayıcımız brüt maaşı yerel vergi sonrası net maaşa çevirir, ardından yaşam maliyeti endeksleri için düzelterek gerçek eşdeğer satın alma gücünü gösterir."
      ],
      faqs: [
        { q: "Satın Alma Gücü Paritesi remote çalışanlar için neden önemlidir?", a: "PPP, belirli bir miktarın farklı ülkelerde ne kadar satın alabileceğini ölçer. Remote çalışanlar için bir maaşın farklı lokasyonlarda benzer bir yaşam tarzını karşılayıp karşılamadığını gösterir." }
      ]
    },
    inflation: {
      title: "Enflasyon & Gerçek Maaş Satın Alma Gücü Hesaplayıcısı",
      subtitle: "Gerçek Geliri Korumak İçin Gereken Yıllık Zam Oranı",
      paragraphs: [
        "Enflasyon maaş değerini sessizce her yıl aşındırır. %8 enflasyona karşılık %3 zam alan bir çalışan aslında gerçek anlamda %5 ücret kesintine uğramaktadır. Türkiye veya Arjantin gibi yüksek enflasyonlu ülkelerde yaşayan ve USD veya EUR maaş alan remote çalışanlar, kümülatif satın alma gücü kaybıyla karşı karşıya kalır.",
        "Hesaplayıcımız 50+ ülkenin güncel TÜFE verilerini kullanarak gerçek maaş erozyonunu hesaplar, bugünkü satın alma gücünü korumak için gereken zam yüzdesini belirler ve geçmişteki herhangi bir maaşın bugünkü enflasyona göre güncel karşılığını çıkarır."
      ],
      faqs: [
        { q: "%8 enflasyona karşı satın alma gücümü korumak için ne kadar zam almalıyım?", a: "Tam olarak %8 nominal zam almalısınız. %8'in altındaki her zam gerçek anlamda ücret kesintisi demektir." }
      ]
    },
    timezone: {
      title: "Küresel Remote Ekipler için Saat Dilimi Örtüşme Hesaplayıcısı",
      subtitle: "ABD, Avrupa, Asya ve Afrika Genelinde Ortak Çalışma Saatleri",
      paragraphs: [
        "Dağıtık remote ekipler her gün birden fazla saat diliminde ortak çalışma penceresi bulmak zorundadır. San Francisco (UTC-8) ile Singapur (UTC+8) arasında çalışan bir ekip, standart 9–5 saatlerinde sıfır örtüşme yaşar. Bu, esnek vardiya düzenlemeleri olmadan eş zamanlı işbirliğini neredeyse imkânsız kılar.",
        "Örtüşme ızgaramız herhangi bir küresel şehir kombinasyonu için tam paylaşımlı saatleri görselleştirir, optimum asenkron iletişim pencerelerini vurgular ve ekip toplantı slotlarını önerir. Araç tüm UTC ofseti için 80+ şehri kapsar ve Yaz Saati Uygulaması geçişlerini otomatik olarak ayarlar."
      ],
      faqs: [
        { q: "En geniş küresel saat dilimi örtüşmesi için en iyi şehir hangisidir?", a: "Dubai (UTC+4) en geniş örtüşmeyi sunar: sabahları Avrupa ile, öğleden sonraları Güneydoğu Asya ile örtüşür ve ABD Doğu Kıyısı akşamları erişilebilir kalır." }
      ]
    },
    wasm: {
      title: "Ücretsiz AI Fotoğraf Arka Plan Silici & Görsel Sıkıştırıcı",
      subtitle: "İstemci Tarafı WebAssembly İşleme — Yükleme Yok, Veri Kaybı Yok",
      paragraphs: [
        "Geleneksel arka plan silme araçları fotoğraflarınızı uzak sunuculara yükler ve hassas kişisel veya iş görselleri için ciddi gizlilik endişeleri yaratır. WASM Stüdyomuz her görseli WebAssembly ile derlenmiş bir AI modeli kullanarak doğrudan tarayıcınızda işler; fotoğraflarınız hiçbir zaman cihazınızdan çıkmaz.",
        "Araç birden fazla görselin toplu işlenmesini destekler, web optimizasyonu için şeffaf arka planlı PNG veya WebP çıktısı üretir ve dosya boyutlarını en aza indirmek için kayıpsız veya kayıplı sıkıştırma uygular. API anahtarı, hesap veya kullanım limiti gerektirmez."
      ],
      faqs: [
        { q: "AI arka plan silici fotoğraflarımı yüklüyor mu?", a: "Hayır. Tüm işlemler WebAssembly aracılığıyla tarayıcınızda yerel olarak gerçekleşir. Görselleriniz hiçbir sunucuya iletilmez." }
      ]
    },
    ai: {
      title: "LLM API Maliyet Simülatörü: GPT-4o, Claude 3.5 & Gemini 1.5 Rehberi",
      subtitle: "RAG, Müşteri Desteği ve Ajan Yükleri için Aylık Token Maliyeti Karşılaştırması",
      paragraphs: [
        "LLM API maliyetleri sağlayıcılar ve modeller arasında büyük ölçüde farklılık gösterir. GPT-4o milyon token başına $5 giriş ve $15 çıkış ücreti alırken, Claude 3.5 Sonnet $3/$15 fiyatlandırmasıyla sunulmaktadır. Aylık 50 milyon token işleyen yüksek hacimli bir üretim dağıtımında model seçimi yılda $100.000+ API maliyeti farkı anlamına gelebilir.",
        "Simülatörümüz aylık giriş ve çıkış token hacimlerini girmenize, herhangi bir model kombinasyonu seçmenize ve 1 ay, 6 ay ve 1 yıl için tam maliyet projeksiyonları görmenize olanak tanır. Ayrıca yönetilen API kullanımı ile LLaMA 3 gibi açık kaynaklı modellerin bulut GPU örneklerinde kendi kendine barındırılması arasındaki başa baş noktasını hesaplar."
      ],
      faqs: [
        { q: "GPT-4o API kullanmak mı yoksa açık kaynak modeli kendi barındırmak mı daha ucuz?", a: "Düşük ve orta hacimlerde, GPU kiralama ve mühendislik maliyetleri hesaba katıldığında GPT-4o API daha ucuzdur. Çok yüksek hacimlerde (aylık 100M+ token) LLaMA 3 70B'nin kendi kendine barındırılması maliyet açısından rekabetçi hale gelir." }
      ]
    }
  },
  /* ─────────────────────────── ESPAÑOL ─────────────────────────── */
  es: {
    "take-home": {
      title: "Calculadora Global de Salario Neto y Retenciones Fiscales",
      subtitle: "Impuesto Federal, Seguridad Social y Sueldo Neto en 40+ Países",
      paragraphs: [
        "Calcular el salario neto en trabajos remotos internacionales requiere comprender marcos fiscales complejos. En Estados Unidos, el sueldo neto se ve afectado por el Impuesto Federal Progresivo sobre la Renta (10%–37%), el Impuesto Estatal (0% en TX/FL hasta 13,3% en CA) y las contribuciones FICA (7,65%). Los países europeos como Alemania y el Reino Unido añaden cotizaciones a la Seguridad Nacional y pensiones sobre los tramos de IRPF.",
        "En España, los trabajadores remotos tributan en el IRPF con tramos progresivos del 19% al 47%, aunque quienes se trasladan al país pueden acogerse a la Ley Beckham para tributar a un tipo fijo del 24% durante 6 años. Nuestro motor de cálculo en el lado del cliente calcula el sueldo neto mensual exacto sin enviar ningún dato a servidores externos."
      ],
      faqs: [
        { q: "¿Cómo se calcula el impuesto federal y estatal para trabajadores remotos en EE. UU.?", a: "El impuesto federal usa tramos marginales progresivos (10%–37%). El impuesto estatal varía de 0% en Texas y Florida hasta 13,3% en California. FICA descuenta el 7,65%." },
        { q: "¿Cuál es la diferencia entre salario bruto y salario neto?", a: "El salario bruto es la retribución total antes de deducciones. El salario neto es el efectivo exacto que llega a tu cuenta bancaria tras impuestos, Seguridad Social y salud." }
      ]
    },
    contractor: {
      title: "Empleado vs Contratista Independiente: Guía Fiscal y de Equivalencia",
      subtitle: "Autónomos, Retenciones y Cálculo de la Tarifa Mínima de Facturación",
      paragraphs: [
        "Elegir entre un puesto asalariado y un contrato de contratista independiente requiere cuantificar los beneficios laborales indirectos. Los empleados reciben seguro médico subvencionado por el empleador, plan de pensiones con aportación empresarial, vacaciones retribuidas y la parte de FICA del empleador (7,65%). En contraste, los autónomos en España abonan la cuota de autónomos mensual (desde 230€ hasta 500€+) y financian su propio seguro médico.",
        "Para mantener el mismo nivel de vida neto, un freelancer suele necesitar facturar entre un 25% y un 40% más que un empleado equivalente a jornada completa. Nuestra calculadora tiene en cuenta todos estos factores para encontrar la tarifa horaria mínima viable."
      ],
      faqs: [
        { q: "¿Por qué los freelancers deben cobrar un 30% más que un empleado?", a: "Porque pagan la cuota de autónomos, financian su propio seguro médico, absorben los días de vacaciones no facturables y asumen todos los gastos de software y contabilidad." }
      ]
    },
    "hourly-rate": {
      title: "Calculadora de Tarifa Horaria Mínima para Freelancers",
      subtitle: "Ingresos Netos Objetivo, Gastos Fijos y Horas Facturables Reales",
      paragraphs: [
        "Establecer la tarifa horaria correcta es la decisión financiera más crítica para un freelancer. La mayoría de los nuevos autónomos cometen el error de dividir su ingreso anual deseado entre 2.080 horas. En realidad, la búsqueda de clientes, la facturación y las tareas administrativas significan que las horas facturables reales raramente superan 20–25 horas semanales.",
        "Nuestro motor suma tu ingreso neto anual objetivo, la carga fiscal estimada y los gastos fijos anuales del negocio (licencias de software, amortización de hardware, gestoría), y divide el total entre las horas facturables realistas para obtener la tarifa mínima viable."
      ],
      faqs: [
        { q: "¿Cuántas horas semanales puede facturar un freelancer?", a: "De media, 20–25 horas semanales son facturables. Las 15–20 horas restantes se dedican a administración, prospección y comunicación." }
      ]
    },
    "beckham-law": {
      title: "Regímenes Fiscales para Expatriados: Ley Beckham, NHR 2.0 e Impatriati",
      subtitle: "Ventajas Fiscales de Tipo Fijo en España, Portugal, Italia y Dubái",
      paragraphs: [
        "Los gobiernos europeos ofrecen regímenes fiscales especiales para atraer a trabajadores remotos de altos ingresos. La Ley Beckham de España (Real Decreto 687/2005) permite a los trabajadores extranjeros elegibles pagar un tipo fijo del 24% sobre rentas de fuente española durante seis años, en lugar del tipo progresivo que puede alcanzar el 47%.",
        "El régimen NHR / IFICI de Portugal ofrece un tipo fijo del 20% en roles tecnológicos y creativos cualificados. La ley italiana Impatriati exime del 50% al 70% de la base imponible. Dubái (EAU) no aplica impuesto sobre la renta ni sobre las plusvalías, siendo el destino más eficiente fiscalmente para fundadores y nómadas digitales."
      ],
      faqs: [
        { q: "¿Quién puede acogerse a la Ley Beckham en España?", a: "Trabajadores extranjeros que no hayan sido residentes fiscales en España en los cinco años anteriores y que se trasladen al país en virtud de un contrato laboral." }
      ]
    },
    "crypto-tax": {
      title: "Guía Fiscal para Salarios en Criptomonedas y Stablecoins",
      subtitle: "USDT, USDC y Nóminas en Cripto — Renta vs Ganancias Patrimoniales",
      paragraphs: [
        "Recibir el salario en USDT, USDC, BTC o ETH es un hecho imponible en prácticamente todas las jurisdicciones desarrolladas. La AEAT en España, el IRS en EE. UU. y el HMRC en el Reino Unido tratan la remuneración en cripto como rendimiento del trabajo al valor de mercado en la fecha de recepción.",
        "Cuando posteriormente conviertes o transfieres la criptomoneda, cualquier revalorización desde la fecha de recepción tributa como Ganancia Patrimonial. Alemania y Portugal ofrecen una exención notable: las criptos mantenidas más de 365 días están exentas de impuesto sobre plusvalías. Dubái, por el contrario, no aplica ningún impuesto sobre la renta ni sobre las ganancias patrimoniales."
      ],
      faqs: [
        { q: "¿El salario en USDT tributa como renta o como ganancia patrimonial?", a: "Ambos. El valor en euros en la fecha de cobro es rendimiento del trabajo. Cualquier variación posterior al recibirlo es ganancia o pérdida patrimonial al vender." }
      ]
    },
    "eor-cost": {
      title: "Employer of Record (EOR) vs Constitución de Empresa Local: Análisis de Costes",
      subtitle: "Deel y Remote.com vs Subsidiaria Local: Punto de Equilibrio",
      paragraphs: [
        "Las empresas tecnológicas que se expanden globalmente se enfrentan a dos opciones principales: contratar a través de un Employer of Record (EOR) como Deel o Remote.com, o constituir una filial local. Las plataformas EOR cobran una tarifa mensual fija por empleado (generalmente $499–$599) y asumen toda la responsabilidad de nóminas y legislación laboral.",
        "Sin embargo, cuando la plantilla en un país supera los 4–6 empleados, las comisiones EOR anuales suelen superar el coste único de constituir la entidad local más la contabilidad anual. Nuestra calculadora de punto de equilibrio modela el coste total de propiedad EOR vs entidad en horizontes de 1 a 5 años."
      ],
      faqs: [
        { q: "¿A partir de cuántos empleados es más barato constituir una empresa local que usar EOR?", a: "Generalmente cuando tienes 4 o más empleados en el mismo país, constituir una entidad local resulta más rentable que las comisiones EOR continuas." }
      ]
    },
    "nomad-visa": {
      title: "Guía de Visados para Nómadas Digitales: Requisitos de Ingresos",
      subtitle: "Ingresos Mínimos Mensuales para España, Portugal, Dubái, Japón y Más",
      paragraphs: [
        "Los visados de nómada digital permiten a los trabajadores remotos residir legalmente en un país extranjero mientras prestan servicios a empleadores o clientes en el extranjero. La mayoría de los países exigen demostrar ingresos remotos consistentes por encima de un umbral mensual establecido.",
        "España exige aproximadamente $2.900/mes, el visado D8 de Portugal requiere $3.600/mes y el visado de Japón requiere el equivalente a $5.500/mes. Los solicitantes deben aportar seis meses de extractos bancarios, contratos de trabajo remoto activos y cobertura de seguro médico."
      ],
      faqs: [
        { q: "¿Se pueden incluir familiares en un visado de nómada digital?", a: "Sí. La mayoría de países permiten cónyuges e hijos dependientes, pero el umbral mínimo de ingresos aumenta entre un 25% y un 50% por dependiente adicional." }
      ]
    },
    "fx-fees": {
      title: "Transferencias Internacionales y Comisiones Ocultas de Tipo de Cambio",
      subtitle: "Tipo de Cambio Interbancario vs Márgenes Bancarios: Wise vs SWIFT vs PayPal",
      paragraphs: [
        "Los pagos de salarios transfronterizos y las facturas internacionales sufren márgenes ocultos en el tipo de cambio que raramente se divulgan. Las transferencias SWIFT tradicionales y los procesadores de pago como PayPal y Stripe anuncian comisiones bajas mientras incorporan un diferencial del 2,5% al 4,5% en el tipo de cambio.",
        "Proveedores fintech transparentes como Wise y Revolut ejecutan las transferencias al tipo de cambio interbancario real y cobran una comisión explícita y reducida. Nuestra calculadora obtiene el tipo interbancario en tiempo real y lo compara con los márgenes bancarios típicos, mostrando tu ahorro anual exacto."
      ],
      faqs: [
        { q: "¿Qué es una comisión oculta de tipo de cambio (FX markup)?", a: "Es el margen de beneficio oculto que los bancos incorporan en el tipo de cambio, ofreciéndote una tasa peor que el tipo interbancario real." }
      ]
    },
    vat: {
      title: "Guía Global de Facturación Internacional e IVA / Inversión del Sujeto Pasivo",
      subtitle: "Exenciones B2B a la Exportación, IVA Intracomunitario e Inversión del Sujeto Pasivo",
      paragraphs: [
        "Facturar a clientes B2B internacionales requiere cumplir con la normativa transfronteriza de IVA y GST. En la Unión Europea, los servicios prestados a entidades corporativas no residentes están sujetos al Mecanismo de Inversión del Sujeto Pasivo. El emisor de la factura aplica IVA del 0% e incluye el texto legal: 'IVA invertido conforme a la Directiva UE 2006/112/CE'.",
        "Fuera de la UE, la mayoría de jurisdicciones aplican exenciones a la exportación para servicios prestados a empresas en el extranjero: exención de IVA en el Reino Unido bajo la VATA 1994, exportaciones exentas de GST en Australia y exención de IVA al 0% en Turquía (ihracat istisnası). Nuestra calculadora aplica automáticamente el régimen correcto."
      ],
      faqs: [
        { q: "¿Debo cobrar IVA al facturar a un cliente B2B extranjero?", a: "Generalmente no. Las exportaciones de servicios B2B transfronterizos se facturan al 0% de IVA bajo exenciones de exportación o inversión del sujeto pasivo." }
      ]
    },
    salary: { title: "Calculadora Global de Salario Remoto y Paridad de Poder Adquisitivo", subtitle: "Comparación de Sueldo Neto en 150+ Países con Ajuste por Coste de Vida", paragraphs: ["Un salario bruto de $100.000 USD en San Francisco proporciona un poder adquisitivo radicalmente diferente al mismo importe en Varsovia o Bangkok. Nuestra calculadora convierte el salario bruto en neto tras impuestos locales y lo ajusta por índices de coste de vida.", "Esto es especialmente crítico para trabajadores remotos que negocian salarios independientes de la ubicación con empleadores estadounidenses o europeos. Un salario de $80.000 en Tbilisi equivale en términos de poder adquisitivo a más de $250.000 en Londres."], faqs: [{ q: "¿Por qué es importante la Paridad de Poder Adquisitivo para los trabajadores remotos?", a: "La PPA mide cuánto puede comprar un importe dado en diferentes países, revelando si un salario cubre un estilo de vida comparable según la ubicación." }] },
    inflation: { title: "Calculadora de Inflación y Poder Adquisitivo del Salario Real", subtitle: "Subida Salarial Necesaria para Mantener los Ingresos Reales ante la Inflación", paragraphs: ["La inflación erosiona silenciosamente el valor del salario cada año. Una inflación del 5% con una subida del 2% supone un recorte salarial real del 3%. Nuestra calculadora usa datos actuales del IPC de 50+ países para calcular la erosión acumulada del salario real y el porcentaje exacto de subida necesario.", "Los trabajadores remotos que cobran en USD o EUR viviendo en países de alta inflación como Turquía o Argentina enfrentan pérdidas de poder adquisitivo que pueden reducir a la mitad los ingresos reales en 5–7 años."], faqs: [{ q: "¿Cuánta subida necesito para mantenerme ante una inflación del 8%?", a: "Exactamente un 8% de subida nominal. Cualquier aumento inferior al 8% representa un recorte salarial en términos reales." }] },
    timezone: { title: "Calculadora de Solapamiento de Husos Horarios para Equipos Remotos", subtitle: "Horas de Trabajo Compartidas entre EE. UU., Europa, Asia y África", paragraphs: ["Los equipos remotos distribuidos deben encontrar ventanas de trabajo compartidas entre múltiples husos horarios. Un equipo dividido entre San Francisco (UTC-8) y Singapur (UTC+8) no tiene solapamiento en horario estándar de 9–5.", "Nuestra cuadrícula de solapamiento visualiza las horas compartidas exactas entre cualquier combinación de ciudades globales, destaca las ventanas óptimas de comunicación asíncrona y sugiere franjas horarias de reunión que minimicen las cargas fuera de horario."], faqs: [{ q: "¿Cuál es la mejor ciudad para el mayor solapamiento de huso horario global?", a: "Dubái (UTC+4) ofrece el solapamiento más amplio: por la mañana con Europa y por la tarde con el Sudeste Asiático." }] },
    wasm: { title: "Eliminador de Fondos con IA Gratis — Sin Subidas, 100% Privado", subtitle: "Procesamiento WebAssembly del Lado del Cliente — Cero Subidas, Cero Fugas de Datos", paragraphs: ["Las herramientas tradicionales de eliminación de fondos suben tus fotos a servidores remotos. Nuestro estudio WASM procesa cada imagen localmente en tu navegador usando un modelo de IA compilado en WebAssembly.", "Admite procesamiento por lotes, exporta PNG transparente o WebP optimizado para la web y aplica compresión para minimizar el tamaño de archivo. Sin clave API, sin cuenta, sin límites de uso."], faqs: [{ q: "¿El eliminador de fondos sube mis fotos?", a: "No. Todo el procesamiento ocurre localmente en tu navegador. Tus imágenes nunca se transmiten a ningún servidor." }] },
    ai: { title: "Simulador de Costes de API LLM: GPT-4o, Claude 3.5 y Gemini 1.5", subtitle: "Costes Mensuales de Tokens para RAG, Soporte al Cliente y Cargas de Trabajo de Agentes", paragraphs: ["Los costes de la API de LLM varían enormemente entre proveedores y modelos. GPT-4o cobra $5/millón de tokens de entrada y $15/millón de salida, mientras que Claude 3.5 Sonnet se cobra a $3/$15 por millón. En un despliegue de producción de alto volumen, la elección del modelo puede suponer más de $100.000 de diferencia en costes de API anuales.", "Nuestro simulador te permite introducir volúmenes mensuales de tokens, seleccionar modelos y ver proyecciones de costes para 1 mes, 6 meses y 1 año. También calcula el punto de equilibrio entre usar una API gestionada y autoalojar modelos de código abierto como LLaMA 3."], faqs: [{ q: "¿Es más barato usar GPT-4o API o autoalojar un modelo de código abierto?", a: "A volúmenes bajos-medios, GPT-4o API es más barato. A volúmenes muy altos (100M+ tokens/mes), autoalojar LLaMA 3 70B se vuelve competitivo en costes." }] }
  },
  /* ─────────────────────────── DEUTSCH ─────────────────────────── */
  de: {
    "take-home": {
      title: "Globaler Nettolohn & Steuerrechner — Vollständiger Leitfaden",
      subtitle: "Einkommensteuersätze, Sozialversicherung und Nettovergütung in 40+ Ländern",
      paragraphs: [
        "Die Berechnung des Nettolohns für internationale Remote-Stellen erfordert das Verständnis komplexer Steuersysteme. In Deutschland unterliegt das Einkommen der progressiven Einkommensteuer (14%–45%), dem Solidaritätszuschlag, der Kirchensteuer sowie den Arbeitnehmeranteilen zur Sozialversicherung (Rente 9,3%, Kranken 7,3%, Pflege 1,525%, Arbeitslosigkeit 1,3%). Zusammen können diese Abzüge über 42% des Bruttolohns ausmachen.",
        "In den USA beeinflusst die bundesstaatliche progressive Einkommensteuer (10%–37%), die staatliche Einkommensteuer (0% in TX/FL bis 13,3% in CA) und FICA-Beiträge (7,65%) den Nettolohn. Unser clientseitiger Rechner ermittelt Ihren genauen monatlichen Nettolohn, ohne dass Daten an externe Server übertragen werden."
      ],
      faqs: [
        { q: "Wie hoch ist der Spitzensteuersatz in Deutschland für Remote-Arbeitnehmer?", a: "Der Spitzensteuersatz beträgt 45% für Einkommen über 277.825 € (2024). Hinzu kommen bis zu 5,5% Solidaritätszuschlag und optionale Kirchensteuer (8–9%)." },
        { q: "Was ist der Unterschied zwischen Brutto- und Nettolohn?", a: "Bruttolohn ist die Gesamtvergütung vor Abzügen. Nettolohn ist der tatsächliche Betrag, der nach Steuern und Sozialabgaben auf Ihrem Konto landet." }
      ]
    },
    contractor: {
      title: "Festanstellung vs Freiberufler: Äquivalenzrechner & Steuervergleich",
      subtitle: "Selbstständigensteuer, Sozialabgaben und Mindeststundensatz für Freelancer",
      paragraphs: [
        "Die Wahl zwischen einer Festanstellung und einer freiberuflichen Tätigkeit erfordert eine sorgfältige Analyse indirekter finanzieller Vorteile. Festangestellte erhalten arbeitgeberfinanzierte Krankenversicherung, betriebliche Altersvorsorge, bezahlten Urlaub und den Arbeitgeberanteil zur Sozialversicherung. Freiberufler in Deutschland zahlen hingegen alle Sozialversicherungsbeiträge selbst oder müssen eigene Altersvorsorge und Krankenversicherung arrangieren.",
        "Um denselben Lebensstandard zu halten, muss ein Freiberufler typischerweise 25%–40% mehr als ein vergleichbarer Festangestellter in Rechnung stellen. Unser Rechner berücksichtigt alle diese Variablen, um den präzisen Mindeststundensatz zu ermitteln."
      ],
      faqs: [
        { q: "Warum sollten Freelancer 30% mehr als Festangestellte berechnen?", a: "Weil sie alle Sozialversicherungsbeiträge selbst tragen, eigene Krankenversicherung finanzieren, unbezahlte Urlaubszeiten absorbieren und alle Geschäftskosten selbst übernehmen müssen." }
      ]
    },
    "hourly-rate": { title: "Mindest-Stundensatz-Rechner für Freiberufler", subtitle: "Netto-Zieleinnahmen, Fixkosten und reale fakturierbare Stunden", paragraphs: ["Den richtigen Stundensatz festzulegen ist die wichtigste finanzielle Entscheidung für einen Freiberufler. Viele teilen ihr Jahresziel einfach durch 2.080 Stunden. Tatsächlich überschreiten die fakturierbaren Stunden selten 20–25 Wochenstunden, da Kundenakquise, Rechnungsstellung und Verwaltung Zeit kosten.", "Unser Motor addiert Ihr Netto-Jahresziel, die geschätzte Steuerlast und Ihre jährlichen Fixkosten (Softwarelizenzen, Buchhaltung, Abschreibungen) und teilt die Summe durch die realistischen fakturierbaren Stunden, um den Mindeststundensatz zu berechnen."], faqs: [{ q: "Wie viele Stunden pro Woche kann ein Freiberufler fakturieren?", a: "Durchschnittlich 20–25 Stunden pro Woche. Die restlichen 15–20 Stunden fließen in Administration, Akquise und Kommunikation." }] },
    "beckham-law": { title: "Expat-Steuerregimes: Beckham Law, NHR 2.0 und Impatriati-Leitfaden", subtitle: "Pauschalsteuervorteile in Spanien, Portugal, Italien und Dubai", paragraphs: ["Europäische Regierungen bieten attraktive Steuerregimes für hochverdienende Remote-Arbeitnehmer. Das spanische Beckham-Gesetz ermöglicht qualifizierten ausländischen Arbeitnehmern, sechs Jahre lang einen Pauschalsteuersatz von 24% statt des progressiven Satzes von bis zu 47% zu zahlen.", "Das portugiesische NHR/IFICI-Regime bietet 20% Pauschalsteuer in qualifizierten Tech- und Kreativrollen. Das italienische Impatriati-Gesetz befreit 50%–70% der Bemessungsgrundlage. Dubai (VAE) erhebt weder Einkommensteuer noch Kapitalertragsteuer."], faqs: [{ q: "Wer qualifiziert sich für das spanische Beckham-Gesetz?", a: "Ausländische Arbeitnehmer, die in den letzten fünf Jahren nicht in Spanien steueransässig waren und im Rahmen eines Arbeitsvertrags mit einem spanischen Unternehmen umziehen." }] },
    "crypto-tax": { title: "Steuerleifaden für Krypto- und Stablecoin-Gehälter", subtitle: "USDT, USDC und Krypto-Lohnabrechnung — Einkommensteuer vs Kapitalertragsteuer", paragraphs: ["Die Zahlung des Gehalts in USDT, USDC, BTC oder ETH ist in fast allen entwickelten Ländern ein steuerpflichtiger Vorgang. Das BZSt in Deutschland behandelt Krypto-Vergütungen als Einkünfte aus nichtselbstständiger Arbeit zum Marktwert am Empfangstag.", "Wenn Sie die Kryptowährung später veräußern, unterliegt jede Wertsteigerung seit dem Empfang der Kapitalertragsteuer. Deutschland bietet eine bemerkenswerte Ausnahme: Krypto, das länger als 365 Tage gehalten wird, ist vollständig von der Kapitalertragsteuer befreit."], faqs: [{ q: "Gilt USDT-Gehalt als Einkommen oder Kapitalgewinn?", a: "Beides. Der EUR-Wert am Empfangstag gilt als Arbeitslohn. Spätere Wertänderungen beim Verkauf sind Kapitalgewinne oder -verluste." }] },
    "eor-cost": { title: "Employer of Record (EOR) vs lokale Gesellschaftsgründung: Kostenanalyse", subtitle: "Deel und Remote.com vs lokale Tochtergesellschaft: Break-even-Punkt", paragraphs: ["Technologieunternehmen, die global expandieren, stehen vor zwei Hauptoptionen: Einstellung über einen Employer of Record (EOR) wie Deel oder Remote.com, oder Gründung einer lokalen Tochtergesellschaft. EOR-Plattformen berechnen eine monatliche Pauschalgebühr pro Mitarbeiter (typischerweise $499–$599) und übernehmen die gesamte Lohn- und Arbeitsrechtshaftung.", "Wenn die Mitarbeiterzahl in einem Land 4–6 Personen überschreitet, übersteigen die jährlichen EOR-Gebühren häufig die einmaligen Gründungskosten plus laufende Buchhaltung. Unser Break-even-Rechner modelliert die Gesamtbetriebskosten von EOR vs Gesellschaft über 1–5 Jahre."], faqs: [{ q: "Ab welcher Mitarbeiterzahl ist eine lokale Gesellschaft günstiger als EOR?", a: "In der Regel ab 4 Mitarbeitern im selben Land ist die Gründung einer lokalen Gesellschaft kostengünstiger als laufende EOR-Gebühren." }] },
    "nomad-visa": { title: "Leitfaden zu Digitalem-Nomaden-Visum: Einkommensanforderungen", subtitle: "Monatliches Mindesteinkommen für Spanien, Portugal, Dubai, Japan und mehr", paragraphs: ["Digitale Nomadenvisa ermöglichen Remote-Arbeitern den legalen Aufenthalt in einem fremden Land. Die meisten Länder fordern nachweisbares regelmäßiges Remote-Einkommen über einem monatlichen Schwellenwert. Spanien verlangt ca. $2.900/Monat, Portugals D8-Visum $3.600/Monat und Japan ca. $5.500/Monat.", "Antragsteller müssen typischerweise sechs Monate Kontoauszüge, aktive Remote-Arbeitsverträge und Krankenversicherungsnachweis vorlegen. Unser Eignungsprüfer vergleicht Ihr monatliches Nettoeinkommen mit den offiziellen Anforderungen von 10+ Ländern."], faqs: [{ q: "Können Familienmitglieder in ein Digitales-Nomaden-Visum einbezogen werden?", a: "Ja. Die meisten Länder gestatten Ehepartner und abhängige Kinder, aber der Mindesteinkommensschwellenwert steigt um 25%–50% pro zusätzlichem Abhängigen." }] },
    "fx-fees": { title: "Internationale Überweisungen und versteckte Wechselkursgebühren", subtitle: "Interbankenkurs vs Bankaufschläge: Wise vs SWIFT vs PayPal vs Stripe", paragraphs: ["Grenzüberschreitende Gehaltszahlungen leiden unter versteckten Wechselkursaufschlägen. SWIFT-Überweisungen und Zahlungsabwickler wie PayPal und Stripe werben mit niedrigen Transfergebühren und bauen gleichzeitig Aufschläge von 2,5%–4,5% in den Wechselkurs ein.", "Transparente Fintech-Anbieter wie Wise und Revolut führen Transaktionen zum echten Interbankenkurs durch und berechnen eine explizite, niedrige Prozentgebühr. Unser Rechner ruft den Live-Interbankenkurs ab und vergleicht ihn mit typischen Bankaufschlägen."], faqs: [{ q: "Was ist ein versteckter Wechselkursaufschlag (FX-Markup)?", a: "Ein FX-Markup ist der versteckte Gewinnaufschlag, den Banken in den Wechselkurs einbauen und Ihnen einen schlechteren Kurs als den echten Interbankenkurs anbieten." }] },
    vat: { title: "Globaler Leitfaden für internationale Rechnungen & Umsatzsteuer / Reverse Charge", subtitle: "B2B-Exportsteuerbefreiungen, EU-Umkehrung der Steuerschuldnerschaft und Nullsatz-Rechnungen", paragraphs: ["Die Rechnungsstellung an internationale B2B-Kunden erfordert die Einhaltung grenzüberschreitender Umsatzsteuervorschriften. In der EU unterliegen Dienstleistungen an nicht ansässige Unternehmen dem Reverse-Charge-Verfahren. Der Rechnungsaussteller berechnet 0% USt und fügt den Vermerk hinzu: 'Steuerschuld geht auf den Leistungsempfänger über (§ 13b UStG)'.", "Außerhalb der EU wenden die meisten Länder Exportsteuerbefreiungen für Dienstleistungen an Unternehmen im Ausland an. Unser USt-Rechner wendet automatisch das korrekte Regime basierend auf Verkäuferland, Käuferland und Transaktionstyp an."], faqs: [{ q: "Muss ich beim Stellen einer Rechnung an einen ausländischen B2B-Kunden USt berechnen?", a: "Im Allgemeinen nein. Grenzüberschreitende B2B-Dienstleistungsexporte werden mit 0% USt unter Exportsteuerbefreiungen oder dem Reverse-Charge-Verfahren fakturiert." }] },
    salary: { title: "Globaler Remote-Gehaltsrechner & Kaufkraftparitätsvergleich", subtitle: "Nettolohnvergleich in 150+ Ländern mit Lebenshaltungskostenkorrektur", paragraphs: ["Ein Bruttogehalt von $100.000 USD in San Francisco bietet eine völlig andere Kaufkraft als dieselbe Summe in Warschau oder Bangkok. Unser Rechner konvertiert das Bruttogehalt in Nettolohn nach lokalen Steuern und korrigiert dann um Lebenshaltungskostenindizes.", "Dies ist besonders kritisch für Remote-Arbeitnehmer, die standortunabhängige Gehälter mit US- oder europäischen Arbeitgebern verhandeln. Ein Gehalt von $80.000 in Tiflis entspricht hinsichtlich der Kaufkraft mehr als $250.000 in London."], faqs: [{ q: "Warum ist die Kaufkraftparität für Remote-Arbeitnehmer wichtig?", a: "Die KKP misst, wie viel eine bestimmte Geldsumme in verschiedenen Ländern kaufen kann, und zeigt, ob ein Gehalt einen vergleichbaren Lebensstil je nach Standort abdeckt." }] },
    inflation: { title: "Inflations- und Reallohnrechner", subtitle: "Erforderliche Gehaltserhöhung zur Kaufkrafterhaltung bei Inflation", paragraphs: ["Inflation erodiert jedes Jahr still den Lohnwert. Eine Inflation von 5% bei einer Lohnerhöhung von 2% bedeutet einen effektiven realen Lohnrückgang von 3%. Unser Rechner nutzt aktuelle VPI-Daten für 50+ Länder, um die kumulative Reallohnentwicklung zu berechnen.", "Remote-Arbeitnehmer, die in USD oder EUR bezahlt werden und in Hochinflationsländern wie der Türkei oder Argentinien leben, sind mit einem kumulativen Kaufkraftverlust konfrontiert, der das Realeinkommen in 5–7 Jahren halbieren kann."], faqs: [{ q: "Wie viel Lohnerhöhung brauche ich bei einer Inflation von 8%?", a: "Exakt 8% nominale Erhöhung. Jede Erhöhung unter 8% stellt einen realen Lohnrückgang dar." }] },
    timezone: { title: "Zeitzonenüberschneidungsrechner für globale Remote-Teams", subtitle: "Gemeinsame Arbeitszeiten zwischen USA, Europa, Asien und Afrika", paragraphs: ["Verteilte Remote-Teams müssen täglich gemeinsame Arbeitsfenster über mehrere Zeitzonen hinweg finden. Ein Team, das zwischen San Francisco (UTC-8) und Singapur (UTC+8) aufgeteilt ist, hat in der Standard-9-bis-5-Arbeitszeit keine Überschneidung.", "Unser Überschneidungs-Grid visualisiert genaue gemeinsame Stunden zwischen beliebigen globalen Stadtkombinationen, hebt optimale asynchrone Kommunikationsfenster hervor und schlägt Meeting-Slots vor, die Belastungen außerhalb der Arbeitszeit minimieren."], faqs: [{ q: "Welche Stadt bietet die größte globale Zeitzonenüberschneidung?", a: "Dubai (UTC+4) bietet die breiteste Überschneidung: morgens mit Europa und nachmittags mit Südostasien." }] },
    wasm: { title: "Kostenloser KI-Hintergrundentferner & Bildkompressor — Datenschutz zuerst", subtitle: "Client-seitige WebAssembly-Verarbeitung — Null Uploads, Null Datenlecks", paragraphs: ["Herkömmliche Hintergrundentfernungs-Tools laden Ihre Fotos auf Remote-Server hoch. Unser WASM-Studio verarbeitet jedes Bild vollständig in Ihrem Browser mit einem WebAssembly-kompilierten KI-Modell.", "Das Tool unterstützt die Stapelverarbeitung mehrerer Bilder, gibt sauberes PNG mit transparentem Hintergrund oder WebP aus und komprimiert Dateien verlustfrei oder verlustbehaftet. Kein API-Schlüssel, kein Konto, keine Nutzungsbeschränkungen."], faqs: [{ q: "Lädt der KI-Hintergrundentferner meine Fotos hoch?", a: "Nein. Die gesamte Verarbeitung erfolgt lokal in Ihrem Browser über WebAssembly. Ihre Bilder werden niemals an einen Server übertragen." }] },
    ai: { title: "LLM-API-Kostenrechner: GPT-4o, Claude 3.5 & Gemini 1.5 Leitfaden", subtitle: "Monatliche Token-Kosten für RAG, Kundensupport und Agenten-Workloads vergleichen", paragraphs: ["LLM-API-Kosten variieren enorm zwischen Anbietern und Modellen. GPT-4o berechnet $5/Million Input-Token und $15/Million Output-Token, während Claude 3.5 Sonnet bei $3/$15 pro Million liegt. Bei hochvolumigen Produktionseinsätzen kann die Modellwahl einen Unterschied von über $100.000 pro Jahr bedeuten.", "Unser Simulator ermöglicht es Ihnen, monatliche Token-Volumina einzugeben, Modelle zu wählen und genaue Kostenprognosen für 1 Monat, 6 Monate und 1 Jahr zu sehen. Er berechnet auch den Break-even-Punkt zwischen Managed-API und Self-Hosting."], faqs: [{ q: "Ist es günstiger, die GPT-4o-API zu nutzen oder ein Open-Source-Modell selbst zu hosten?", a: "Bei niedrigem bis mittlerem Volumen ist die GPT-4o-API günstiger. Bei sehr hohem Volumen (100M+ Token/Monat) wird das Self-Hosting von LLaMA 3 70B kosteneffizient." }] }
  },
  /* ─────────────────────────── PORTUGUÊS ─────────────────────────── */
  pt: {
    "take-home": {
      title: "Calculadora Global de Salário Líquido e Imposto de Renda",
      subtitle: "Tabelas de Imposto de Renda, Previdência Social e Salário Líquido em 40+ Países",
      paragraphs: [
        "Calcular o salário líquido para vagas remotas internacionais exige compreender sistemas tributários complexos. Nos EUA, o salário líquido é afetado pelo Imposto de Renda Federal Progressivo (10%–37%), pelo Imposto Estadual (0% em TX/FL a 13,3% na CA) e pelas contribuições FICA (7,65%). No Brasil, o salário está sujeito às alíquotas do IRPF (7,5%–27,5%) e ao INSS (7,5%–14%).",
        "Em Portugal, o NHR/IFICI oferece uma taxa fixa de 20% para certas profissões qualificadas, tornando o país muito atrativo para trabalhadores remotos europeus e nômades digitais. Nosso motor calcula o salário líquido mensal exato sem enviar quaisquer dados para servidores externos, garantindo total privacidade."
      ],
      faqs: [
        { q: "Como é calculado o imposto para trabalhadores remotos nos EUA?", a: "O imposto federal usa alíquotas progressivas (10%–37%). O imposto estadual varia de 0% no Texas e na Flórida a 13,3% na Califórnia. O FICA desconta 7,65%." },
        { q: "Qual é a diferença entre salário bruto e salário líquido?", a: "Salário bruto é a remuneração total antes dos descontos. Salário líquido é o valor exato depositado na sua conta após todos os impostos e contribuições previdenciárias." }
      ]
    },
    contractor: { title: "Empregado CLT vs PJ Freelancer: Guia de Equivalência e Tributação", subtitle: "Impostos para Autônomos, Benefícios Indiretos e Cálculo da Hora Mínima de Faturamento", paragraphs: ["Escolher entre um emprego CLT e um contrato PJ exige contabilizar cuidadosamente os benefícios trabalhistas indiretos. Empregados CLT recebem FGTS (8%), 13º salário, férias remuneradas, seguro saúde pelo empregador e vale-alimentação. Trabalhadores PJ devem custear suas próprias contribuições previdenciárias, plano de saúde e impostos sobre nota fiscal (ISS/IRPJ/CSLL).", "Para manter o mesmo padrão de vida líquido, um freelancer normalmente precisa faturar 35%–50% mais do que o salário CLT equivalente. Nossa calculadora considera todas essas variáveis para encontrar o valor mínimo de hora trabalhada."], faqs: [{ q: "Por que freelancers PJ devem cobrar 40% a mais que empregados CLT?", a: "Porque pagam ISS, IRPJ, CSLL, custeiam plano de saúde, não recebem 13º salário, férias ou FGTS, e arcam com todas as despesas do negócio." }] },
    "hourly-rate": { title: "Calculadora de Valor Hora Mínimo para Freelancers", subtitle: "Renda Líquida Alvo, Custos Fixos e Horas Faturáveis Reais", paragraphs: ["Definir o valor hora correto é a decisão financeira mais crítica para um freelancer. Muitos dividem a renda anual desejada por 2.080 horas. Na prática, prospecção de clientes, emissão de notas fiscais e tarefas administrativas fazem com que as horas faturáveis reais raramente ultrapassem 20–25 horas semanais.", "Nosso motor soma a renda líquida anual alvo, a carga tributária estimada e os custos fixos anuais do negócio (licenças de software, contador, amortização de hardware) e divide o total pelas horas faturáveis realistas para obter o valor mínimo viável."], faqs: [{ q: "Quantas horas por semana um freelancer pode faturar para clientes?", a: "Em média, 20–25 horas semanais são faturáveis. As outras 15–20 horas vão para administração, prospecção e comunicação." }] },
    "beckham-law": { title: "Regimes Fiscais para Expatriados: Beckham Law, NHR 2.0 e Impatriati", subtitle: "Vantagens Fiscais de Taxa Fixa na Espanha, Portugal, Itália e Dubai", paragraphs: ["Os governos europeus oferecem regimes fiscais especiais para atrair trabalhadores remotos de alta renda. A Beckham Law da Espanha permite que trabalhadores estrangeiros elegíveis paguem uma taxa fixa de 24% durante seis anos, em vez da alíquota progressiva de até 47%.", "O regime NHR/IFICI de Portugal oferece 20% de taxa fixa para profissões tecnológicas e criativas qualificadas. A lei italiana Impatriati isenta 50%–70% da base tributável. Dubai (EAU) não cobra imposto de renda nem imposto sobre ganhos de capital, sendo o destino mais eficiente fiscalmente para fundadores remotos."], faqs: [{ q: "Quem pode se qualificar para a Beckham Law da Espanha?", a: "Trabalhadores estrangeiros que não foram residentes fiscais na Espanha nos cinco anos anteriores e que se mudam para o país sob um contrato de trabalho." }] },
    "crypto-tax": { title: "Guia Fiscal para Salários em Criptomoedas e Stablecoins", subtitle: "USDT, USDC e Folha de Pagamento em Cripto — Imposto de Renda vs Ganho de Capital", paragraphs: ["Receber salário em USDT, USDC, BTC ou ETH é um fato gerador de tributos em praticamente todas as jurisdições desenvolvidas. A Receita Federal do Brasil e o IRS norte-americano tratam a remuneração em criptomoedas como renda ordinária pelo valor de mercado na data de recebimento.", "Ao converter ou alienar a criptomoeda posteriormente, qualquer valorização desde o recebimento está sujeita ao Imposto sobre Ganho de Capital. Alemanha e Portugal oferecem uma isenção notável: criptomoedas mantidas por mais de 365 dias estão isentas de imposto sobre ganhos de capital."], faqs: [{ q: "O salário em USDT é imposto de renda ou ganho de capital?", a: "Ambos. O valor em reais na data do recebimento é renda ordinária. Qualquer variação de preço posterior ao alienar é ganho ou perda de capital." }] },
    "eor-cost": { title: "Employer of Record (EOR) vs Abertura de Empresa Local: Análise de Custos", subtitle: "Deel e Remote.com vs Subsidiária Local: Ponto de Equilíbrio", paragraphs: ["Empresas de tecnologia em expansão global enfrentam duas opções principais: contratar por meio de um Employer of Record (EOR) como Deel ou Remote.com, ou abrir uma subsidiária local. Plataformas EOR cobram uma taxa mensal fixa por colaborador (tipicamente $499–$599) e assumem toda a responsabilidade de folha de pagamento e legislação trabalhista.", "Porém, quando o número de funcionários em um país ultrapassa 4–6 pessoas, as taxas anuais de EOR frequentemente superam o custo único de abertura de empresa mais a contabilidade anual. Nossa calculadora modela o custo total de propriedade de EOR vs entidade em horizontes de 1 a 5 anos."], faqs: [{ q: "A partir de quantos funcionários é mais barato abrir uma empresa local do que usar EOR?", a: "Geralmente quando você tem 4 ou mais funcionários no mesmo país, abrir uma entidade local torna-se mais econômico do que as taxas contínuas de EOR." }] },
    "nomad-visa": { title: "Guia de Visto para Nômades Digitais: Requisitos de Renda", subtitle: "Renda Mínima Mensal para Espanha, Portugal, Dubai, Japão e Mais", paragraphs: ["Os vistos de nômade digital permitem que trabalhadores remotos residam legalmente em um país estrangeiro. A maioria dos países exige comprovação de renda remota consistente acima de um limite mensal. A Espanha exige aproximadamente $2.900/mês, o visto D8 de Portugal requer $3.600/mês e o Japão exige o equivalente a $5.500/mês.", "Os solicitantes devem tipicamente apresentar seis meses de extratos bancários, contratos de trabalho remoto ativos e comprovação de seguro saúde. Nosso verificador de elegibilidade compara sua renda líquida mensal com os requisitos oficiais de 10+ países."], faqs: [{ q: "Familiares podem ser incluídos em um visto de nômade digital?", a: "Sim. A maioria dos países permite cônjuges e filhos dependentes, mas o limite mínimo de renda aumenta 25%–50% por dependente adicional." }] },
    "fx-fees": { title: "Transferências Internacionais e Taxas Ocultas de Câmbio", subtitle: "Taxa de Câmbio Interbancária vs Margens Bancárias: Wise vs SWIFT vs PayPal", paragraphs: ["Pagamentos de salários internacionais sofrem com spreads ocultos nas taxas de câmbio. Transferências SWIFT e processadores como PayPal anunciam tarifas baixas enquanto embutem spreads de 2,5%–4,5% na taxa de câmbio. Em um salário anual de R$300.000, esse custo oculto pode chegar a R$7.500–R$13.500 por ano.", "Provedores fintech transparentes como Wise e Revolut executam transações à taxa interbancária real e cobram uma comissão explícita e reduzida. Nossa calculadora busca a taxa interbancária ao vivo e a compara com as margens bancárias típicas."], faqs: [{ q: "O que é uma taxa oculta de câmbio (FX markup)?", a: "É a margem de lucro oculta que os bancos embutem na taxa de câmbio, oferecendo uma taxa pior que a taxa interbancária real." }] },
    vat: { title: "Guia Global de Faturamento Internacional e IVA / Inversão do Sujeito Passivo", subtitle: "Isenções B2B de Exportação, Mecanismo de Inversão e Faturamento a Taxa Zero", paragraphs: ["Faturar clientes B2B internacionais exige conformidade com regulamentações transfronteiriças de IVA e GST. Na União Europeia, serviços prestados a entidades corporativas não residentes estão sujeitos ao Mecanismo de Inversão do Sujeito Passivo.", "O emissor da fatura aplica 0% de IVA e inclui o texto legal obrigatório. Fora da UE, a maioria das jurisdições aplica isenções de exportação. Nossa calculadora aplica automaticamente o regime correto com base no país do vendedor, país do comprador e tipo de transação."], faqs: [{ q: "Devo cobrar IVA ao faturar um cliente B2B estrangeiro?", a: "Geralmente não. As exportações de serviços B2B transfronteiriços são faturadas a 0% de IVA sob isenções de exportação ou inversão do sujeito passivo." }] },
    salary: { title: "Calculadora Global de Salário Remoto e Paridade de Poder de Compra", subtitle: "Comparação de Salário Líquido em 150+ Países com Ajuste pelo Custo de Vida", paragraphs: ["Um salário bruto de $100.000 USD em San Francisco proporciona poder de compra radicalmente diferente do mesmo valor em Varsóvia ou Bangkok. Nossa calculadora converte o salário bruto em líquido após impostos locais e ajusta pelos índices de custo de vida.", "Isso é especialmente crítico para trabalhadores remotos que negociam salários independentes de localização com empregadores norte-americanos ou europeus."], faqs: [{ q: "Por que a Paridade de Poder de Compra importa para trabalhadores remotos?", a: "A PPC mede quanto uma quantia pode comprar em diferentes países, revelando se um salário cobre um estilo de vida comparável em diferentes localidades." }] },
    inflation: { title: "Calculadora de Inflação e Poder Real de Compra do Salário", subtitle: "Aumento Salarial Necessário para Manter a Renda Real Diante da Inflação", paragraphs: ["A inflação corrói silenciosamente o valor do salário a cada ano. Uma inflação de 5% com um aumento de 2% equivale a uma redução salarial real de 3%. Nossa calculadora usa dados atuais do IPCA/CPI de 50+ países para calcular a erosão acumulada do salário real.", "Trabalhadores remotos recebendo em USD ou EUR e vivendo em países de alta inflação como Brasil ou Turquia enfrentam perda de poder de compra que pode reduzir a metade a renda real em 5–7 anos."], faqs: [{ q: "Quanto de aumento preciso para manter meu poder de compra com inflação de 8%?", a: "Exatamente 8% de aumento nominal. Qualquer aumento abaixo de 8% representa um corte salarial em termos reais." }] },
    timezone: { title: "Calculadora de Sobreposição de Fusos Horários para Equipes Remotas", subtitle: "Horas de Trabalho Compartilhadas entre EUA, Europa, Ásia e África", paragraphs: ["Equipes remotas distribuídas precisam encontrar janelas de trabalho compartilhadas em múltiplos fusos horários. Nossa grade de sobreposição visualiza as horas compartilhadas exatas entre qualquer combinação de cidades globais, destaca janelas ideais de comunicação assíncrona e sugere horários de reunião.", "A ferramenta cobre 80+ cidades em todos os offsets UTC e ajusta automaticamente para as transições de horário de verão."], faqs: [{ q: "Qual cidade oferece a maior sobreposição global de fuso horário?", a: "Dubai (UTC+4) oferece a sobreposição mais ampla: pela manhã com a Europa e à tarde com o Sudeste Asiático." }] },
    wasm: { title: "Removedor de Fundo com IA Gratuito — Sem Uploads, 100% Privado", subtitle: "Processamento WebAssembly no Lado do Cliente — Zero Uploads, Zero Vazamentos", paragraphs: ["Ferramentas tradicionais de remoção de fundo fazem upload das suas fotos para servidores remotos. Nosso WASM Studio processa cada imagem localmente no seu navegador usando um modelo de IA compilado em WebAssembly.", "Suporta processamento em lote, exporta PNG transparente ou WebP otimizado para web e aplica compressão para minimizar o tamanho do arquivo. Sem chave de API, sem conta, sem limites de uso."], faqs: [{ q: "O removedor de fundo faz upload das minhas fotos?", a: "Não. Todo o processamento ocorre localmente no seu navegador. Suas imagens nunca são transmitidas para nenhum servidor." }] },
    ai: { title: "Simulador de Custos de API LLM: GPT-4o, Claude 3.5 e Gemini 1.5", subtitle: "Custos Mensais de Tokens para RAG, Suporte ao Cliente e Cargas de Trabalho de Agentes", paragraphs: ["Os custos de API de LLM variam enormemente entre provedores e modelos. GPT-4o cobra $5/milhão de tokens de entrada e $15/milhão de saída, enquanto Claude 3.5 Sonnet está em $3/$15 por milhão. Em um deployment de produção de alto volume, a escolha do modelo pode significar mais de $100.000 de diferença nos custos anuais de API.", "Nosso simulador permite inserir volumes mensais de tokens, selecionar modelos e ver projeções de custo para 1 mês, 6 meses e 1 ano."], faqs: [{ q: "É mais barato usar a API GPT-4o ou hospedar um modelo de código aberto?", a: "Em volumes baixos a médios, a API GPT-4o é mais barata. Em volumes muito altos (100M+ tokens/mês), auto-hospedar LLaMA 3 70B torna-se competitivo em custo." }] }
  },
  /* ─────────────────────────── FRANÇAIS ─────────────────────────── */
  fr: {
    "take-home": {
      title: "Calculateur Global de Salaire Net et d'Impôts — Guide Complet",
      subtitle: "Tranches d'Imposition, Cotisations Sociales et Salaire Net dans 40+ Pays",
      paragraphs: [
        "Calculer le salaire net pour des postes distants internationaux exige de comprendre des systèmes fiscaux complexes. En France, le salaire net est affecté par le barème progressif de l'impôt sur le revenu (0%–45%), les cotisations sociales salariales (environ 22%) et la CSG/CRDS (9,7%). Ces prélèvements peuvent représenter plus de 45% du salaire brut selon la tranche.",
        "Aux États-Unis, l'impôt fédéral progressif (10%–37%), l'impôt d'État (0% au TX/FL à 13,3% en CA) et les cotisations FICA (7,65%) déterminent le net. Notre moteur de calcul côté client calcule votre salaire net mensuel exact sans envoyer aucune donnée à des serveurs externes."
      ],
      faqs: [
        { q: "Comment est calculé l'impôt pour les travailleurs distants aux États-Unis ?", a: "L'impôt fédéral utilise des tranches marginales progressives (10%–37%). L'impôt d'État varie de 0% au Texas et en Floride à 13,3% en Californie. Le FICA prélève 7,65%." },
        { q: "Quelle est la différence entre salaire brut et salaire net ?", a: "Le salaire brut est la rémunération totale avant déductions. Le salaire net est la somme exacte versée sur votre compte après impôts et cotisations sociales." }
      ]
    },
    contractor: { title: "Salarié vs Freelance : Guide d'Équivalence et de Fiscalité", subtitle: "Cotisations d'Indépendant, Avantages Indirects et Calcul du TJM Minimum", paragraphs: ["Choisir entre un poste salarié et un contrat de freelance nécessite de quantifier les avantages indirects. Les salariés bénéficient de la mutuelle d'entreprise, de l'épargne salariale, des congés payés et des cotisations patronales. En France, les auto-entrepreneurs paient des cotisations sociales de 12,3%–22% selon leur régime.", "Pour maintenir le même niveau de vie net, un freelance doit généralement facturer 30%–45% de plus qu'un salarié équivalent. Notre calculateur prend en compte toutes ces variables pour trouver le taux journalier minimum (TJM) viable."], faqs: [{ q: "Pourquoi les freelances doivent-ils facturer 35% de plus qu'un salarié ?", a: "Parce qu'ils payent leurs propres cotisations sociales, financent leur mutuelle, absorbent les jours de congé non facturés et assument toutes les dépenses professionnelles." }] },
    "hourly-rate": { title: "Calculateur de Taux Horaire Minimum pour Freelances", subtitle: "Revenu Net Cible, Charges Fixes et Heures Facturables Réelles", paragraphs: ["Définir le bon taux horaire est la décision financière la plus critique pour un freelance. La plupart divisent simplement leur objectif annuel par 2 080 heures. En réalité, la prospection, la facturation et les tâches administratives font que les heures facturables dépassent rarement 20–25 heures hebdomadaires.", "Notre moteur additionne votre objectif net annuel, la charge fiscale estimée et vos charges fixes annuelles (logiciels, comptable, amortissements) et divise le total par les heures facturables réalistes pour obtenir le taux minimum viable."], faqs: [{ q: "Combien d'heures par semaine un freelance peut-il facturer ?", a: "En moyenne, 20–25 heures par semaine sont facturables. Les 15–20 heures restantes sont consacrées à l'administration, la prospection et la communication." }] },
    "beckham-law": { title: "Régimes Fiscaux pour Expatriés : Beckham Law, NHR 2.0 et Impatriati", subtitle: "Avantages Fiscaux à Taux Fixe en Espagne, Portugal, Italie et Dubaï", paragraphs: ["Les gouvernements européens proposent des régimes fiscaux spéciaux pour attirer les travailleurs distants à hauts revenus. La Beckham Law espagnole permet aux travailleurs étrangers éligibles de payer un taux fixe de 24% pendant six ans, au lieu du taux progressif pouvant atteindre 47%.", "Le régime NHR/IFICI portugais offre un taux fixe de 20% pour les professions tech et créatives qualifiées. La loi italienne Impatriati exonère 50%–70% de la base imposable. Dubaï (EAU) n'applique ni impôt sur le revenu ni impôt sur les plus-values."], faqs: [{ q: "Qui peut bénéficier de la Beckham Law espagnole ?", a: "Les travailleurs étrangers qui n'ont pas été résidents fiscaux en Espagne au cours des cinq années précédentes et qui s'y déplacent dans le cadre d'un contrat de travail." }] },
    "crypto-tax": { title: "Guide Fiscal pour les Salaires en Cryptomonnaies et Stablecoins", subtitle: "USDT, USDC et Fiches de Paie en Crypto — Revenu vs Plus-values", paragraphs: ["Recevoir un salaire en USDT, USDC, BTC ou ETH est un fait générateur d'imposition dans pratiquement toutes les juridictions développées. En France, les DGFiP traitent la rémunération en crypto comme un revenu ordinaire à la valeur de marché à la date de réception.", "Lorsque vous cédez ultérieurement la cryptomonnaie, toute plus-value depuis la date de réception est soumise à la flat tax de 30% (PFU) en France. L'Allemagne et le Portugal offrent une exonération pour les cryptos détenues plus de 365 jours."], faqs: [{ q: "Le salaire en USDT est-il imposé comme revenu ou comme plus-value ?", a: "Les deux. La valeur en euros à la date de réception est un revenu ordinaire. Toute variation ultérieure lors de la cession est une plus-value ou moins-value." }] },
    "eor-cost": { title: "Employer of Record (EOR) vs Création d'Entité Locale : Analyse des Coûts", subtitle: "Deel et Remote.com vs Filiale Locale : Point Mort", paragraphs: ["Les entreprises tech qui se développent à l'international ont deux options principales : recruter via un EOR comme Deel ou Remote.com, ou créer une filiale locale. Les plateformes EOR facturent un forfait mensuel fixe par employé (typiquement $499–$599) et assument toute la responsabilité de la paie et du droit du travail.", "Cependant, lorsque l'effectif dans un pays dépasse 4–6 personnes, les frais annuels d'EOR dépassent souvent le coût unique de création d'entité plus la comptabilité annuelle. Notre calculateur de point mort modélise le coût total de possession EOR vs entité sur 1 à 5 ans."], faqs: [{ q: "À partir de combien d'employés vaut-il mieux créer une entité locale qu'utiliser un EOR ?", a: "Généralement à partir de 4 employés dans le même pays, créer une entité locale est plus rentable que les frais EOR continus." }] },
    "nomad-visa": { title: "Guide des Visas Nomade Numérique : Conditions de Revenus", subtitle: "Revenus Mensuels Minimum pour l'Espagne, le Portugal, Dubaï, le Japon et Plus", paragraphs: ["Les visas de nomade numérique permettent aux travailleurs distants de résider légalement dans un pays étranger. La plupart des pays exigent des revenus distants documentés au-dessus d'un seuil mensuel. L'Espagne exige environ $2 900/mois, le visa D8 du Portugal $3 600/mois et le Japon l'équivalent de $5 500/mois.", "Les candidats doivent généralement fournir six mois de relevés bancaires, des contrats de travail à distance actifs et une preuve d'assurance maladie. Notre vérificateur d'éligibilité compare votre revenu net mensuel avec les exigences officielles de 10+ pays."], faqs: [{ q: "Les membres de la famille peuvent-ils être inclus dans un visa nomade numérique ?", a: "Oui. La plupart des pays autorisent les conjoints et enfants à charge, mais le seuil de revenu minimum augmente de 25%–50% par dépendant supplémentaire." }] },
    "fx-fees": { title: "Virements Internationaux et Frais de Change Cachés", subtitle: "Taux de Change Interbancaire vs Marges Bancaires : Wise vs SWIFT vs PayPal", paragraphs: ["Les paiements de salaires transfrontaliers souffrent de marges cachées sur le taux de change. Les virements SWIFT traditionnels et les processeurs de paiement comme PayPal et Stripe annoncent de faibles frais tout en incorporant un spread de 2,5%–4,5% dans le taux de change.", "Des fournisseurs fintech transparents comme Wise et Revolut exécutent les transactions au taux interbancaire réel et facturent des frais explicites et réduits. Notre calculateur récupère le taux interbancaire en temps réel et le compare aux marges bancaires typiques."], faqs: [{ q: "Qu'est-ce qu'une commission de change cachée (FX markup) ?", a: "C'est la marge bénéficiaire cachée que les banques intègrent dans le taux de change, vous proposant un taux moins favorable que le taux interbancaire réel." }] },
    vat: { title: "Guide Mondial de Facturation Internationale et TVA / Autoliquidation", subtitle: "Exonérations B2B à l'Export, TVA Intracommunautaire et Facturation à Taux Zéro", paragraphs: ["Facturer des clients B2B internationaux exige de se conformer aux réglementations transfrontalières de TVA et de GST. Dans l'UE, les services fournis à des entités d'entreprise non résidentes relèvent du mécanisme d'autoliquidation de la TVA. L'émetteur de la facture applique 0% de TVA et inclut la mention légale obligatoire.", "En dehors de l'UE, la plupart des juridictions appliquent des exonérations à l'exportation. Notre calculateur de TVA applique automatiquement le régime correct en fonction du pays du vendeur, du pays de l'acheteur et du type de transaction."], faqs: [{ q: "Dois-je facturer la TVA à un client B2B étranger ?", a: "En général non. Les exportations de services B2B transfrontaliers sont facturées à 0% de TVA sous les exonérations à l'exportation ou l'autoliquidation." }] },
    salary: { title: "Calculateur Global de Salaire Distant et de Parité de Pouvoir d'Achat", subtitle: "Comparaison du Salaire Net dans 150+ Pays avec Ajustement du Coût de la Vie", paragraphs: ["Un salaire brut de $100 000 USD à San Francisco offre un pouvoir d'achat radicalement différent de la même somme à Varsovie ou Bangkok. Notre calculateur convertit le salaire brut en net après impôts locaux et l'ajuste par des indices de coût de la vie.", "Cela est particulièrement crucial pour les travailleurs distants qui négocient des salaires indépendants de la localisation avec des employeurs américains ou européens."], faqs: [{ q: "Pourquoi la Parité de Pouvoir d'Achat est-elle importante pour les travailleurs distants ?", a: "La PPA mesure ce qu'une somme donnée peut acheter dans différents pays, révélant si un salaire couvre un style de vie comparable selon la localisation." }] },
    inflation: { title: "Calculateur d'Inflation et de Pouvoir d'Achat Réel du Salaire", subtitle: "Augmentation Salariale Requise pour Maintenir les Revenus Réels face à l'Inflation", paragraphs: ["L'inflation érode silencieusement la valeur du salaire chaque année. Une inflation de 5% avec une augmentation de 2% représente une baisse de salaire réelle de 3%. Notre calculateur utilise les données IPC actuelles de 50+ pays pour calculer l'érosion cumulée du salaire réel.", "Les travailleurs distants percevant des salaires en USD ou EUR et vivant dans des pays à forte inflation comme la Turquie ou l'Argentine font face à une perte de pouvoir d'achat qui peut réduire de moitié les revenus réels en 5–7 ans."], faqs: [{ q: "De quelle augmentation ai-je besoin pour tenir face à une inflation de 8% ?", a: "Exactement 8% d'augmentation nominale. Toute augmentation inférieure à 8% représente une baisse de salaire en termes réels." }] },
    timezone: { title: "Calculateur de Chevauchement de Fuseaux Horaires pour Équipes Distantes", subtitle: "Heures de Travail Partagées entre les États-Unis, l'Europe, l'Asie et l'Afrique", paragraphs: ["Les équipes distantes distribuées doivent trouver des fenêtres de travail partagées dans plusieurs fuseaux horaires. Notre grille de chevauchement visualise les heures partagées exactes entre toute combinaison de villes mondiales, met en évidence les fenêtres de communication asynchrone optimales et suggère des créneaux de réunion.", "L'outil couvre 80+ villes dans tous les décalages UTC et s'ajuste automatiquement aux transitions d'heure d'été."], faqs: [{ q: "Quelle ville offre le plus grand chevauchement mondial de fuseaux horaires ?", a: "Dubaï (UTC+4) offre le chevauchement le plus large : le matin avec l'Europe et l'après-midi avec l'Asie du Sud-Est." }] },
    wasm: { title: "Suppresseur de Fond IA Gratuit — Sans Upload, 100% Privé", subtitle: "Traitement WebAssembly Côté Client — Zéro Upload, Zéro Fuite de Données", paragraphs: ["Les outils traditionnels de suppression de fond téléchargent vos photos sur des serveurs distants. Notre Studio WASM traite chaque image localement dans votre navigateur à l'aide d'un modèle IA compilé en WebAssembly.", "Il prend en charge le traitement par lots, exporte des PNG transparents ou WebP optimisés pour le web et applique une compression pour minimiser la taille des fichiers. Sans clé API, sans compte, sans limites d'utilisation."], faqs: [{ q: "Le suppresseur de fond télécharge-t-il mes photos ?", a: "Non. Tout le traitement se fait localement dans votre navigateur. Vos images ne sont jamais transmises à aucun serveur." }] },
    ai: { title: "Simulateur de Coûts API LLM : GPT-4o, Claude 3.5 et Gemini 1.5", subtitle: "Coûts Mensuels de Tokens pour RAG, Support Client et Charges de Travail d'Agents", paragraphs: ["Les coûts des API LLM varient énormément selon les fournisseurs et les modèles. GPT-4o facture $5/million de tokens en entrée et $15/million en sortie, tandis que Claude 3.5 Sonnet est à $3/$15 par million. Pour un déploiement de production à haut volume, le choix du modèle peut représenter plus de $100 000 de différence en coûts annuels.", "Notre simulateur vous permet de saisir les volumes mensuels de tokens, de sélectionner des modèles et de voir des projections de coûts pour 1 mois, 6 mois et 1 an."], faqs: [{ q: "Est-il moins cher d'utiliser l'API GPT-4o ou d'héberger soi-même un modèle open source ?", a: "À faibles volumes, l'API GPT-4o est moins chère. À très hauts volumes (100M+ tokens/mois), l'auto-hébergement de LLaMA 3 70B devient compétitif en termes de coûts." }] }
  },
  /* ─────────────────────────── BAHASA INDONESIA ─────────────────────────── */
  id: {
    "take-home": {
      title: "Kalkulator Gaji Bersih Global dan Pajak Penghasilan",
      subtitle: "Bracket Pajak Penghasilan, Jaminan Sosial, dan Gaji Bersih di 40+ Negara",
      paragraphs: [
        "Menghitung gaji bersih untuk posisi kerja jarak jauh internasional memerlukan pemahaman tentang sistem pajak yang kompleks. Di Amerika Serikat, gaji bersih dipengaruhi oleh Pajak Penghasilan Federal Progresif (10%–37%), Pajak Negara Bagian (0% di TX/FL hingga 13,3% di CA), dan kontribusi FICA (7,65%). Di Indonesia, penghasilan dikenakan PPh 21 dengan tarif progresif (5%–35%) dan iuran BPJS Ketenagakerjaan.",
        "Di Dubai (Uni Emirat Arab), tidak ada pajak penghasilan dan tidak ada pajak keuntungan modal, menjadikannya sangat menarik bagi pekerja jarak jauh berpenghasilan tinggi. Mesin penghitungan sisi klien kami menghitung gaji bersih bulanan Anda yang tepat tanpa mengirimkan data apa pun ke server eksternal."
      ],
      faqs: [
        { q: "Bagaimana pajak dihitung untuk pekerja jarak jauh di AS?", a: "Pajak federal menggunakan bracket marginal progresif (10%–37%). Pajak negara bagian bervariasi dari 0% di Texas dan Florida hingga 13,3% di California. FICA memotong 7,65%." },
        { q: "Apa perbedaan antara gaji bruto dan gaji bersih?", a: "Gaji bruto adalah total kompensasi sebelum pemotongan. Gaji bersih adalah uang tunai yang masuk ke rekening bank Anda setelah semua pajak dan iuran sosial." }
      ]
    },
    contractor: { title: "Karyawan vs Freelancer: Panduan Ekuivalensi dan Perpajakan", subtitle: "Pajak Wiraswasta, Tunjangan Tidak Langsung, dan Tarif Per Jam Minimum", paragraphs: ["Memilih antara posisi karyawan tetap dan kontrak freelancer memerlukan perhitungan cermat atas manfaat finansial tidak langsung. Karyawan mendapatkan asuransi kesehatan yang disubsidi perusahaan, tunjangan pensiun, cuti berbayar, dan kontribusi BPJS dari pemberi kerja.", "Untuk mempertahankan standar hidup bersih yang sama, seorang freelancer biasanya perlu menagih 25%–40% lebih banyak dari karyawan setara. Kalkulator kami memperhitungkan semua variabel ini untuk menemukan tarif per jam minimum yang layak."], faqs: [{ q: "Mengapa freelancer harus menagih 30% lebih dari karyawan?", a: "Karena mereka membayar semua iuran sosial sendiri, mendanai asuransi kesehatan mereka sendiri, menyerap hari libur yang tidak dapat ditagih, dan menanggung semua biaya bisnis." }] },
    "hourly-rate": { title: "Kalkulator Tarif Per Jam Minimum untuk Freelancer", subtitle: "Target Penghasilan Bersih, Biaya Tetap, dan Jam Tagihan Nyata", paragraphs: ["Menetapkan tarif per jam yang tepat adalah keputusan keuangan paling penting bagi seorang freelancer. Sebagian besar membagi target pendapatan tahunan dengan 2.080 jam. Kenyataannya, akuisisi klien, penagihan, dan tugas administrasi membuat jam tagihan nyata jarang melebihi 20–25 jam per minggu.", "Mesin kami menjumlahkan target pendapatan bersih tahunan Anda, beban pajak estimasi, dan biaya tetap bisnis tahunan (lisensi perangkat lunak, akuntan, amortisasi perangkat keras), lalu membagi total dengan jam yang dapat ditagih secara realistis."], faqs: [{ q: "Berapa jam per minggu yang bisa ditagih seorang freelancer?", a: "Rata-rata, 20–25 jam per minggu dapat ditagih. 15–20 jam sisanya digunakan untuk administrasi, pengembangan bisnis, dan komunikasi." }] },
    "beckham-law": { title: "Rezim Pajak Ekspatriat: Beckham Law, NHR 2.0, dan Impatriati", subtitle: "Keuntungan Pajak Tarif Tetap di Spanyol, Portugal, Italia, dan Dubai", paragraphs: ["Pemerintah Eropa menawarkan rezim pajak khusus untuk menarik pekerja jarak jauh berpenghasilan tinggi. Beckham Law Spanyol memungkinkan pekerja asing yang memenuhi syarat membayar tarif tetap 24% selama enam tahun, bukan tarif progresif hingga 47%.", "Rezim NHR/IFICI Portugal menawarkan pajak tetap 20% untuk peran teknologi dan kreatif yang memenuhi syarat. Undang-undang Impatriati Italia membebaskan 50%–70% dari dasar pajak. Dubai (UEA) tidak mengenakan pajak penghasilan maupun pajak keuntungan modal."], faqs: [{ q: "Siapa yang memenuhi syarat untuk Beckham Law Spanyol?", a: "Pekerja asing yang belum menjadi residen pajak Spanyol dalam lima tahun sebelumnya dan yang pindah ke negara itu berdasarkan kontrak kerja." }] },
    "crypto-tax": { title: "Panduan Pajak untuk Gaji Kripto dan Stablecoin", subtitle: "USDT, USDC, dan Penggajian Kripto — Pajak Penghasilan vs Pajak Keuntungan Modal", paragraphs: ["Menerima gaji dalam USDT, USDC, BTC, atau ETH adalah peristiwa kena pajak di hampir semua yurisdiksi maju. Di Indonesia, kripto diperlakukan sebagai objek pajak dan tunduk pada aturan PPh final. IRS AS dan HMRC Inggris memperlakukan kompensasi kripto sebagai penghasilan biasa berdasarkan nilai pasar saat diterima.", "Ketika Anda kemudian mengonversi atau membuang kripto, setiap apresiasi harga sejak penerimaan memicu Pajak Keuntungan Modal. Jerman dan Portugal menawarkan pengecualian: kripto yang dipegang lebih dari 365 hari bebas pajak keuntungan modal."], faqs: [{ q: "Apakah gaji USDT dikenakan pajak penghasilan atau pajak keuntungan modal?", a: "Keduanya. Nilai fiat pada tanggal penerimaan adalah penghasilan biasa. Setiap perubahan harga setelah itu saat dilepas adalah keuntungan atau kerugian modal." }] },
    "eor-cost": { title: "Employer of Record (EOR) vs Pendirian Entitas Lokal: Analisis Biaya", subtitle: "Deel dan Remote.com vs Anak Perusahaan Lokal: Titik Impas", paragraphs: ["Perusahaan teknologi yang berkembang secara global menghadapi dua pilihan utama: merekrut melalui Employer of Record (EOR) seperti Deel atau Remote.com, atau mendirikan anak perusahaan lokal. Platform EOR mengenakan biaya bulanan tetap per karyawan (biasanya $499–$599) dan menanggung semua tanggung jawab penggajian dan hukum ketenagakerjaan.", "Namun, ketika jumlah karyawan di suatu negara melebihi 4–6 orang, biaya EOR tahunan sering melebihi biaya pendirian entitas lokal plus akuntansi tahunan. Kalkulator kami memodelkan total biaya kepemilikan EOR vs entitas selama 1–5 tahun."], faqs: [{ q: "Pada berapa karyawan lebih murah mendirikan perusahaan lokal daripada menggunakan EOR?", a: "Umumnya ketika Anda memiliki 4 atau lebih karyawan di negara yang sama, mendirikan entitas lokal menjadi lebih hemat biaya daripada biaya EOR yang berkelanjutan." }] },
    "nomad-visa": { title: "Panduan Visa Nomaden Digital: Persyaratan Penghasilan", subtitle: "Penghasilan Bulanan Minimum untuk Spanyol, Portugal, Dubai, Jepang, dan Lainnya", paragraphs: ["Visa Nomaden Digital memungkinkan pekerja jarak jauh tinggal secara legal di negara asing sambil melayani klien atau pemberi kerja yang berbasis di tempat lain. Sebagian besar negara memerlukan bukti penghasilan jarak jauh yang konsisten di atas ambang bulanan yang ditetapkan.", "Spanyol membutuhkan sekitar $2.900/bulan, visa D8 Portugal memerlukan $3.600/bulan, dan Jepang memerlukan setara $5.500/bulan. Pemeriksa kelayakan kami membandingkan penghasilan bersih bulanan Anda dengan persyaratan resmi dari 10+ negara."], faqs: [{ q: "Bisakah anggota keluarga dimasukkan dalam visa nomaden digital?", a: "Ya. Sebagian besar negara mengizinkan pasangan dan anak-anak tanggungan, tetapi ambang penghasilan minimum meningkat 25%–50% per tanggungan tambahan." }] },
    "fx-fees": { title: "Transfer Internasional dan Biaya Kurs Tersembunyi", subtitle: "Kurs Antar Bank vs Margin Bank: Wise vs SWIFT vs PayPal vs Stripe", paragraphs: ["Pembayaran gaji lintas batas dan faktur freelance internasional menderita spread kurs tersembunyi. Transfer SWIFT tradisional dan pemroses pembayaran seperti PayPal dan Stripe mengiklankan biaya rendah sambil menyematkan spread 2,5%–4,5% ke dalam kurs tukar.", "Penyedia fintech transparan seperti Wise dan Revolut menjalankan transaksi pada kurs antar bank tengah yang nyata dan mengenakan biaya persentase kecil yang eksplisit. Kalkulator kami mengambil kurs antar bank langsung dan membandingkannya dengan margin bank tipikal."], faqs: [{ q: "Apa itu biaya markup kurs tersembunyi?", a: "Markup FX adalah margin keuntungan tersembunyi yang bank tanamkan ke dalam kurs tukar, menawarkan kurs yang lebih buruk dari kurs tengah antar bank nyata." }] },
    vat: { title: "Panduan Faktur Internasional dan PPN / GST Global", subtitle: "Pengecualian Ekspor B2B, Mekanisme Reverse Charge, dan Faktur Tarif Nol", paragraphs: ["Menagih klien B2B internasional memerlukan kepatuhan terhadap peraturan PPN dan GST lintas batas. Di Uni Eropa, layanan yang diberikan kepada entitas perusahaan bukan residen tunduk pada Mekanisme Reverse Charge — penerbit faktur mengenakan PPN 0%.", "Di luar UE, sebagian besar yurisdiksi menerapkan pengecualian ekspor untuk layanan yang diberikan kepada bisnis di luar negeri. Kalkulator PPN kami secara otomatis menerapkan rezim yang benar berdasarkan negara penjual, negara pembeli, dan jenis transaksi."], faqs: [{ q: "Apakah saya harus mengenakan PPN ketika menagih klien B2B asing?", a: "Umumnya tidak. Ekspor layanan B2B lintas batas dikenakan PPN 0% di bawah pengecualian ekspor atau Reverse Charge." }] },
    salary: { title: "Kalkulator Gaji Jarak Jauh Global dan Paritas Daya Beli", subtitle: "Perbandingan Gaji Bersih di 150+ Negara dengan Penyesuaian Biaya Hidup", paragraphs: ["Gaji bruto $100.000 USD di San Francisco memberikan daya beli yang sangat berbeda dari jumlah yang sama di Warsawa atau Bangkok. Kalkulator kami mengonversi gaji bruto ke bersih setelah pajak lokal dan menyesuaikannya dengan indeks biaya hidup.", "Ini sangat penting bagi pekerja jarak jauh yang menegosiasikan gaji independen lokasi dengan pemberi kerja AS atau Eropa."], faqs: [{ q: "Mengapa Paritas Daya Beli penting bagi pekerja jarak jauh?", a: "PPP mengukur seberapa banyak jumlah tertentu dapat dibeli di berbagai negara, mengungkapkan apakah gaji mencakup gaya hidup yang sebanding tergantung lokasi." }] },
    inflation: { title: "Kalkulator Inflasi dan Daya Beli Gaji Nyata", subtitle: "Kenaikan Gaji yang Diperlukan untuk Mempertahankan Penghasilan Nyata", paragraphs: ["Inflasi secara diam-diam mengikis nilai gaji setiap tahun. Inflasi 5% dengan kenaikan gaji 2% berarti penurunan gaji nyata sebesar 3%. Kalkulator kami menggunakan data IHK terkini untuk 50+ negara untuk menghitung erosi kumulatif gaji nyata.", "Pekerja jarak jauh yang menerima gaji dalam USD atau EUR sambil tinggal di negara dengan inflasi tinggi menghadapi kehilangan daya beli yang dapat membagi dua penghasilan nyata dalam 5–7 tahun."], faqs: [{ q: "Berapa kenaikan gaji yang saya butuhkan untuk mengimbangi inflasi 8%?", a: "Tepat 8% kenaikan nominal. Setiap kenaikan di bawah 8% merupakan pemotongan gaji dalam istilah nyata." }] },
    timezone: { title: "Kalkulator Tumpang Tindih Zona Waktu untuk Tim Jarak Jauh Global", subtitle: "Jam Kerja Bersama antara AS, Eropa, Asia, dan Afrika", paragraphs: ["Tim jarak jauh terdistribusi harus menemukan jendela kerja bersama di beberapa zona waktu. Kisi tumpang tindih kami memvisualisasikan jam bersama yang tepat antara kombinasi kota global manapun, menyoroti jendela komunikasi asinkron yang optimal.", "Alat ini mencakup 80+ kota di semua offset UTC dan secara otomatis menyesuaikan untuk transisi waktu musim panas."], faqs: [{ q: "Kota mana yang menawarkan tumpang tindih zona waktu global terbesar?", a: "Dubai (UTC+4) menawarkan tumpang tindih terluas: pagi dengan Eropa dan sore dengan Asia Tenggara." }] },
    wasm: { title: "Penghapus Latar Belakang AI Gratis — Tanpa Upload, 100% Privat", subtitle: "Pemrosesan WebAssembly Sisi Klien — Nol Upload, Nol Kebocoran Data", paragraphs: ["Alat penghapus latar belakang tradisional mengunggah foto Anda ke server jarak jauh. WASM Studio kami memproses setiap gambar sepenuhnya di browser Anda menggunakan model AI yang dikompilasi dalam WebAssembly.", "Mendukung pemrosesan batch beberapa gambar, mengekspor PNG transparan atau WebP yang dioptimalkan untuk web, dan menerapkan kompresi untuk meminimalkan ukuran file. Tanpa kunci API, tanpa akun, tanpa batas penggunaan."], faqs: [{ q: "Apakah penghapus latar belakang mengunggah foto saya?", a: "Tidak. Semua pemrosesan terjadi secara lokal di browser Anda melalui WebAssembly. Gambar Anda tidak pernah dikirimkan ke server mana pun." }] },
    ai: { title: "Simulator Biaya API LLM: GPT-4o, Claude 3.5 & Gemini 1.5", subtitle: "Biaya Token Bulanan untuk RAG, Dukungan Pelanggan, dan Beban Kerja Agen", paragraphs: ["Biaya API LLM sangat bervariasi antar penyedia dan model. GPT-4o mengenakan $5/juta token input dan $15/juta output, sedangkan Claude 3.5 Sonnet berada di $3/$15 per juta. Untuk deployment produksi volume tinggi, pilihan model dapat berarti perbedaan lebih dari $100.000 per tahun dalam biaya API.", "Simulator kami memungkinkan Anda memasukkan volume token bulanan, memilih model, dan melihat proyeksi biaya untuk 1 bulan, 6 bulan, dan 1 tahun."], faqs: [{ q: "Apakah lebih murah menggunakan API GPT-4o atau meng-hosting model open-source sendiri?", a: "Pada volume rendah hingga menengah, API GPT-4o lebih murah. Pada volume sangat tinggi (100M+ token/bulan), hosting mandiri LLaMA 3 70B menjadi kompetitif secara biaya." }] }
  },
  /* ─────────────────────────── 日本語 ─────────────────────────── */
  ja: {
    "take-home": {
      title: "グローバル手取り給与・税金計算ガイド",
      subtitle: "40カ国以上の所得税ブラケット、社会保険、手取り額の徹底解説",
      paragraphs: [
        "国際リモートポジションの総支給額から手取り額を計算するには、複雑な税制を理解する必要があります。日本では、所得税は累進課税（5%〜45%）が適用され、住民税（約10%）、健康保険料、厚生年金保険料が源泉徴収されます。これらの控除合計は総支給額の30%〜40%に達することがあります。",
        "米国では連邦所得税（10%〜37%）、州税（TX/FL：0%〜CA：13.3%）、FICA（7.65%）が控除されます。ドバイ（UAE）では所得税・資本利得税ともに課されないため、高所得リモートワーカーに非常に魅力的です。当社のクライアントサイドエンジンは外部サーバーにデータを送信することなく正確な月次手取り額を計算します。"
      ],
      faqs: [
        { q: "米国のリモートワーカーの連邦税・州税はどのように計算されますか？", a: "連邦所得税は累進的な限界税率（10%〜37%）を使用します。州税はテキサス・フロリダで0%、カリフォルニアで13.3%まで変動します。FICAは7.65%を源泉徴収します。" },
        { q: "総支給額と手取り額の違いは何ですか？", a: "総支給額は控除前の総報酬です。手取り額はすべての税金、社会保険、健康保険料が控除された後、実際に銀行口座に振り込まれる金額です。" }
      ]
    },
    contractor: { title: "正社員 vs フリーランス：同等性と税務ガイド", subtitle: "個人事業主税、間接的な福利厚生、最低時給の計算", paragraphs: ["正社員とフリーランス契約のどちらを選ぶかは、間接的な経済的メリットの定量化が必要です。正社員は会社補助の健康保険、企業年金、有給休暇、社会保険の雇用者負担分を受け取ります。フリーランスは国民健康保険、国民年金を自己負担し、請求できない休暇日数や業務経費も自己負担します。", "同じ手取り生活水準を維持するために、フリーランサーは同等の正社員より25%〜40%多く請求する必要があります。当社の計算機はこれらすべての変数を考慮して、最低限必要な時間料金を算出します。"], faqs: [{ q: "なぜフリーランサーは正社員より30%多く請求する必要があるのですか？", a: "社会保険料を全額自己負担し、自身の健康保険を賄い、有給休暇のない日数を吸収し、すべてのビジネスコストを負担する必要があるためです。" }] },
    "hourly-rate": { title: "フリーランサーの最低時間料金計算ガイド", subtitle: "目標純収入、固定費、実際の請求可能時間", paragraphs: ["適切な時間料金を設定することは、フリーランサーにとって最も重要な財務上の決定です。多くのフリーランサーは年間目標収入を2,080時間で割る間違いを犯します。実際には、クライアント獲得、請求書作成、管理業務のために、実際の請求可能時間は週20〜25時間を超えることはほとんどありません。", "当社のエンジンは、年間目標純収入、推定税負担、年間固定ビジネス費用（ソフトウェアライセンス、ハードウェア償却、会計費用）を合算し、現実的な請求可能時間で割って最低限必要な時間料金を算出します。"], faqs: [{ q: "フリーランサーは週何時間請求できますか？", a: "平均して、フルタイムのフリーランサーは週20〜25時間を請求できます。残りの15〜20時間は管理業務、営業活動、コミュニケーションに費やされます。" }] },
    "beckham-law": { title: "駐在員税制：ベッカム法、NHR 2.0、インパトリアーティガイド", subtitle: "スペイン、ポルトガル、イタリア、ドバイの固定税率優遇措置", paragraphs: ["欧州政府は高収入リモートワーカーを誘致するために魅力的な駐在員税制を提供しています。スペインのベッカム法は、適格な外国人労働者が6年間、最大47%の累進税率の代わりに24%の固定税率で納税することを可能にします。", "ポルトガルのNHR/IFICIレジームは適格なテック・クリエイティブ職に20%の固定税率を提供します。イタリアのインパトリアーティ法は課税標準の50%〜70%を非課税にします。ドバイ（UAE）は所得税も資本利得税も課さず、リモート創業者に最も税効率の高い目的地です。"], faqs: [{ q: "スペインのベッカム法の対象者は誰ですか？", a: "過去5年間スペインの税務上の居住者でなく、スペイン企業との雇用契約に基づいてスペインに移転する外国人労働者。" }] },
    "crypto-tax": { title: "暗号資産・ステーブルコイン給与の税務ガイド", subtitle: "USDT・USDCと暗号資産給与支払い：所得税vs譲渡所得税", paragraphs: ["USDT、USDC、BTC、ETHで給与を受け取ることは、ほぼすべての先進国で課税対象となります。日本の国税庁、米国のIRS、英国のHMRCはいずれも、受け取り日の公正市場価値で暗号資産報酬を通常の所得として扱います。", "後で暗号資産を売却・換金すると、受け取り時からの値上がり分は譲渡所得税の対象となります。ドイツとポルトガルは365日以上保有した暗号資産を譲渡所得税免除としています。ドバイは所得税も譲渡所得税も課しません。"], faqs: [{ q: "USDT給与は所得税か譲渡所得税のどちらですか？", a: "両方です。受け取り日の法定通貨換算額は通常所得です。その後売却した際の価格変動は譲渡利益または損失になります。" }] },
    "eor-cost": { title: "EOR（雇用代行）vs現地法人設立：コスト分析", subtitle: "DeelとRemote.com vs現地子会社：損益分岐点計算", paragraphs: ["グローバル展開するテック企業は2つの主要な選択肢に直面します：DeelやRemote.comのようなEORを通じた採用か、現地子会社の設立かです。EORプラットフォームは従業員1名あたり月額固定料金（通常$499〜$599）を請求し、給与計算と労働法の責任を引き受けます。", "ただし、ある国の従業員数が4〜6名を超えると、EORの年間費用が現地法人設立の一時費用と年間会計費用の合計を超えることがよくあります。当社の損益分岐点計算機は1〜5年のEOR対エンティティの総所有コストをモデル化します。"], faqs: [{ q: "何名の従業員からEORより現地法人設立の方が安くなりますか？", a: "通常、同じ国に4名以上の従業員がいる場合、現地法人の設立はEOR手数料の継続的な支払いよりも費用対効果が高くなります。" }] },
    "nomad-visa": { title: "デジタルノマドビザ財務要件ガイド", subtitle: "スペイン、ポルトガル、ドバイ、日本の最低月収基準", paragraphs: ["デジタルノマドビザにより、リモートワーカーは他国のクライアントや雇用主にサービスを提供しながら、外国に合法的に居住することができます。ほとんどの国は申請者に対し、規定の月次閾値を超える一貫した文書化可能なリモート収入を要求します。", "スペインは約$2,900/月、ポルトガルのD8ビザは$3,600/月、日本は月額換算で約$5,500を要求します。当社の適格性チェッカーは月次純収入を10カ国以上の公式要件と比較し、現在申請できるビザを表示します。"], faqs: [{ q: "家族をデジタルノマドビザに含めることはできますか？", a: "はい。ほとんどの国では配偶者と扶養子女の同伴が認められていますが、追加の扶養家族1名あたり最低収入閾値が25%〜50%増加します。" }] },
    "fx-fees": { title: "国際送金と隠れた為替手数料ガイド", subtitle: "インターバンクレート vs 銀行マークアップ：Wise vs SWIFT vs PayPal", paragraphs: ["国境を越えた給与支払いや国際フリーランス請求書は、隠れた為替スプレッドの影響を受けます。従来のSWIFT送金やPayPal、Stripeなどの決済業者は低額の送金手数料を宣伝しながら、為替レートに2.5%〜4.5%のスプレッドを組み込んでいます。", "WiseやRevolutのような透明性の高いフィンテックプロバイダーは、実際のインターバンク中値レートで取引を実行し、明示的な少額の手数料を請求します。当社の計算機はライブインターバンクレートを取得し、典型的な銀行マークアップと比較します。"], faqs: [{ q: "隠れた為替マークアップ（FX markup）とは何ですか？", a: "銀行が為替レートに組み込む隠れた利益マージンで、実際のインターバンク中値レートよりも悪いレートを提供するものです。" }] },
    vat: { title: "グローバル国際請求書・VAT/消費税リバースチャージガイド", subtitle: "B2B輸出免税、EUリバースチャージ、ゼロ税率請求書の基礎", paragraphs: ["国際B2Bクライアントへの請求には、国境を越えたVATとGSTの規制への準拠が必要です。EUでは、非居住企業法人に提供されるサービスはリバースチャージメカニズムの対象となり、請求書発行者は0%のVATを請求し、法的必須記載事項を含める必要があります。", "EU外では、ほとんどの管轄区域が海外企業向けサービスに輸出免税を適用します。当社のVAT計算機は、売り手国、買い手国、取引タイプ（B2B vs B2C）に基づいて正しい税制を自動的に適用します。"], faqs: [{ q: "外国のB2Bクライアントに請求する際にVATを請求する必要がありますか？", a: "一般的にいいえ。国境を越えたB2Bサービス輸出は輸出免税またはリバースチャージのもとで0%のVATで請求されます。" }] },
    salary: { title: "グローバルリモート給与・購買力平価計算機", subtitle: "生活費調整付き150カ国以上の手取り額比較", paragraphs: ["サンフランシスコでの総支給額$100,000 USDは、ワルシャワやバンコクの同額とは劇的に異なる購買力を提供します。当社の計算機は総支給額を現地税引き後の手取り額に変換し、生活費指数で調整して実際の購買力を表示します。", "これは、米国や欧州の雇用主と場所に依存しない給与を交渉するリモートワーカーにとって特に重要です。トビリシでの$80,000の給与は、購買力の観点からロンドンの$250,000以上に相当します。"], faqs: [{ q: "なぜ購買力平価がリモートワーカーにとって重要なのですか？", a: "PPPは特定の金額が異なる国でどれだけ購入できるかを測定し、給与が場所によって同等のライフスタイルをカバーするかどうかを明らかにします。" }] },
    inflation: { title: "インフレと実質給与購買力計算機", subtitle: "インフレに対して実質収入を維持するために必要な年間昇給率", paragraphs: ["インフレは毎年静かに給与の価値を侵食します。インフレ5%、昇給2%では実質的に3%の減給になります。当社の計算機は50カ国以上の最新CIPIデータを使用して、実質給与の累積侵食を計算します。", "トルコやアルゼンチンなどの高インフレ国に住みながらUSDやEURで給与を受け取るリモートワーカーは、5〜7年で実質収入が半減する可能性のある購買力損失に直面しています。"], faqs: [{ q: "インフレ8%に対して購買力を維持するにはどれだけの昇給が必要ですか？", a: "正確に8%の名目昇給が必要です。8%未満の昇給はすべて実質的な賃金削減を意味します。" }] },
    timezone: { title: "グローバルリモートチームのタイムゾーン重複計算機", subtitle: "米国、欧州、アジア、アフリカ間の共有勤務時間", paragraphs: ["分散型リモートチームは複数のタイムゾーンにわたって共有作業ウィンドウを見つける必要があります。当社の重複グリッドはグローバル都市の任意の組み合わせ間の正確な共有時間を視覚化し、最適な非同期コミュニケーションウィンドウを強調表示します。", "このツールはすべてのUTCオフセットにわたる80以上の都市をカバーし、夏時間の移行を自動的に調整します。"], faqs: [{ q: "最大のグローバルタイムゾーン重複のための最良の都市はどこですか？", a: "ドバイ（UTC+4）は最も広い重複を提供します：午前中はヨーロッパと、午後は東南アジアと重なります。" }] },
    wasm: { title: "無料AIバックグラウンド除去・画像圧縮ツール", subtitle: "クライアントサイドWebAssembly処理 — アップロードなし、データ漏洩なし", paragraphs: ["従来のバックグラウンド削除ツールは写真をリモートサーバーにアップロードします。当社のWASMスタジオはWebAssemblyでコンパイルされたAIモデルを使用してブラウザ内で完全にローカル処理します。", "複数画像のバッチ処理をサポートし、透明背景のPNGまたはWeb最適化WebPを出力し、ファイルサイズを最小化する圧縮を適用します。APIキー、アカウント、使用制限は不要です。"], faqs: [{ q: "AIバックグラウンド除去ツールは写真をアップロードしますか？", a: "いいえ。すべての処理はWebAssemblyを通じてブラウザでローカルに実行されます。画像がサーバーに送信されることは決してありません。" }] },
    ai: { title: "LLM APIコストシミュレーター：GPT-4o、Claude 3.5、Gemini 1.5", subtitle: "RAG、カスタマーサポート、エージェントワークロードの月次トークンコスト比較", paragraphs: ["LLM APIのコストはプロバイダーとモデルによって大きく異なります。GPT-4oは入力100万トークンあたり$5、出力$15を請求し、Claude 3.5 Sonnetは$3/$15/百万です。高ボリューム本番デプロイメントでは、モデルの選択が年間APIコストで$100,000以上の差をもたらす可能性があります。", "シミュレーターでは月次トークンボリュームを入力し、任意のモデルを選択して1ヶ月、6ヶ月、1年のコスト予測を確認できます。また、管理APIの使用とLLaMA 3などのオープンソースモデルの自己ホスティングの損益分岐点も計算します。"], faqs: [{ q: "GPT-4o APIを使用するのとオープンソースモデルを自己ホストするのはどちらが安いですか？", a: "低〜中ボリュームでは、GPT-4o APIの方が安いです。非常に高いボリューム（月1億+トークン）では、LLaMA 3 70Bの自己ホスティングがコスト競争力を持ちます。" }] }
  }
};
function ToolSeoArticle({ activeTool = "take-home", lang = "en" }) {
  const langDict = articles[lang] || articles["en"];
  const article = langDict[activeTool] || langDict["take-home"] || articles["en"]["take-home"];
  const faqLabels = {
    en: "Frequently Asked Questions",
    tr: "Sıkça Sorulan Sorular",
    es: "Preguntas Frecuentes",
    de: "Häufig gestellte Fragen",
    pt: "Perguntas Frequentes",
    fr: "Questions Fréquemment Posées",
    id: "Pertanyaan yang Sering Diajukan",
    ja: "よくある質問"
  };
  const faqLabel = faqLabels[lang] || faqLabels["en"];
  const webAppSchema = generateSeoSchema({
    type: "WebApplication",
    url: `https://globalpaycalc.com/${lang !== "en" ? lang + "/" : ""}${activeTool}`,
    name: article.title,
    description: article.subtitle
  });
  return /* @__PURE__ */ jsxs("article", { className: "glass-card p-6 sm:p-10 rounded-2xl border-slate-800 space-y-8 mt-12", children: [
    /* @__PURE__ */ jsxs("header", { className: "space-y-2 border-b border-slate-800 pb-6", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold text-white flex items-center space-x-3", children: [
        /* @__PURE__ */ jsx(Info, { className: "w-6 h-6 text-brand-400 flex-shrink-0" }),
        /* @__PURE__ */ jsx("span", { children: article.title })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-sm font-medium", children: article.subtitle })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "space-y-4 text-slate-300 text-sm leading-relaxed", children: (article.paragraphs || []).map((p, idx) => /* @__PURE__ */ jsx("p", { children: p }, idx)) }),
    article.faqs && article.faqs.length > 0 && /* @__PURE__ */ jsxs("div", { className: "space-y-6 pt-6 border-t border-slate-800", children: [
      /* @__PURE__ */ jsxs("h3", { className: "text-xl font-bold text-white flex items-center space-x-2", children: [
        /* @__PURE__ */ jsx(HelpCircle, { className: "w-5 h-5 text-amber-400" }),
        /* @__PURE__ */ jsx("span", { children: faqLabel })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-4", children: article.faqs.map((faq, idx) => /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/60 p-4 rounded-xl border border-slate-800 space-y-1", children: [
        /* @__PURE__ */ jsx("h4", { className: "font-semibold text-slate-200 text-sm", children: faq.q }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400 leading-relaxed", children: faq.a })
      ] }, idx)) })
    ] }),
    /* @__PURE__ */ jsxs("footer", { className: "pt-6 border-t border-slate-800 text-xs text-slate-500 flex items-center justify-between", children: [
      /* @__PURE__ */ jsx("span", { children: "© GlobalPayCalc.com — 100% Client-Side Financial Utility Engine" }),
      /* @__PURE__ */ jsxs("span", { className: "flex items-center space-x-1 text-emerald-400 font-mono", children: [
        /* @__PURE__ */ jsx(ShieldCheck, { className: "w-3.5 h-3.5" }),
        /* @__PURE__ */ jsx("span", { children: "SSL 256-Bit Encrypted" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: { __html: JSON.stringify(webAppSchema) } })
  ] });
}
export {
  ToolSeoArticle as default
};
