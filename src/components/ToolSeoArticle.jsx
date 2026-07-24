import React from 'react';
import { Info, HelpCircle, ShieldCheck } from 'lucide-react';
import { generateSeoSchema } from '../utils/schemaGenerator';

export default function ToolSeoArticle({ activeTool = 'take-home', lang = 'en' }) {
  // Turkish Articles Dictionary
  const trArticles = {
    'take-home': {
      title: "Kapsamlı Rehber: Küresel Net Maaş ve Vergi Hesaplama Mantığı",
      subtitle: "40+ Ülkedeki Gelir Vergisi Dilimleri, SGK/Social Security ve Net Ele Geçen Maaş Analizi",
      paragraphs: [
        "Uluslararası uzaktan çalışma (remote) veya yurtdışına taşınma süreçlerinde brüt maaştan net ele geçen tutarı hesaplamak karmaşık mali mevzuatların anlaşılmasını gerektirir. ABD'de net maaş; Federal Kademeli Gelir Vergisi (%10 - %37), Eyalet Vergisi (FL/TX/WA'da %0, CA'da %13.3'e kadar) ve FICA sosyal güvenlik kesintilerinden (%7.65) etkilenir.",
        "Almanya ve İngiltere gibi Avrupa ülkelerinde gelirler yerel Einkommensteuer veya PAYE vergi dilimlerinin yanı sıra zorunlu Ulusal Sigorta (National Insurance) ve emeklilik fonu kesintilerine tabidir. Türkiye'de ise brüt maaştan kademeli gelir vergisi dilimleri (%15 - %40), SGK işçi payı (%14) ve işsizlik sigortası (%1) düşülürken asgari ücret vergi istisnası matrahtan düşülmektedir.",
        "Dinamik istemci tarafı motorumuz, aylık elinize geçecek net nakit tutarını hesaplayarak yurtdışı iş tekliflerini en doğru şekilde değerlendirmenizi sağlar."
      ],
      faqs: [
        { q: "ABD remote çalışanları için Federal ve Eyalet vergisi nasıl hesaplanır?", a: "Federal gelir vergisi artan oranlı dilimler (%10-%37) kullanır. Eyalet vergisi Teksas ve Florida'da %0 iken California'da %13.3'e ulaşır. FICA %7.65 oranında kesilir." },
        { q: "Brüt Maaş ile Net Maaş arasındaki fark nedir?", a: "Brüt maaş, hiçbir kesinti yapılmamış toplam sözleşme tutarıdır. Net maaş ise tüm vergi, sosyal güvenlik ve sağlık primi kesildikten sonra banka hesabınıza yatan net tutardır." }
      ]
    },
    'contractor': {
      title: "W-2 Kadrolu Çalışan vs 1099 Freelancer Karşılaştırması & IR35 Rehberi",
      subtitle: "Serbest Çalışan Vergileri, Yan Haklar ve Saatlik Fatura Ücreti Analizi",
      paragraphs: [
        "Tam zamanlı kadrolu bir iş teklifi ile 1099 bağımsız yüklenici (contractor) sözleşmesi arasında seçim yaparken dolaylı finansal hakların hesaplanması hayati önem taşır. Kadrolu çalışanlar işveren karşılamalı sağlık sigortası, emeklilik katkısı, ücretli yıllık izin (PTO) ve sosyal güvenlik işveren payı haklarına sahiptir.",
        "Buna karşılık ABD'deki 1099 yüklenicileri %15.3 oranındaki Serbest Çalışan Vergisini (Self-Employment Tax) kendileri öder, fatura kesilemeyen tatil günlerini ve yazılım/muhasebe giderlerini üstlenirler. İngiltere'de ise IR35 yasası sözleşmenin 'Inside IR35' (kadrolu gibi vergilendirilen) veya 'Outside IR35' (şirket üzerinden avantajlı vergilendirilen) olup olmadığını belirler.",
        "Aynı yaşam standardını korumak için bir freelancer/contractor'ın maaşlı çalışana göre %25 ila %40 daha yüksek bir saatlik teklif sunması gerekmektedir."
      ],
      faqs: [
        { q: "1099 yüklenicileri neden kadrolu çalışandan %30 daha fazla fatura kesmelidir?", a: "Çünkü %15.3 serbest çalışan vergisini, kendi sağlık sigortasını, ödenmeyen tatil haftalarını ve muhasebe giderlerini kendileri karşılamak zorundadırlar." }
      ]
    },
    'hourly-rate': {
      title: "Freelancer Minimum Saatlik Ücret ve Gider Hesaplama Rehberi",
      subtitle: "Hedef Net Gelir, Sabit Giderler ve Faturalandırılabilir Saatler",
      paragraphs: [
        "Sürdürülebilir bir serbest çalışma kariyeri için doğru saatlik ücreti belirlemek kritik önem taşır. Çoğu freelancer yıllık net hedefini 2.080 saate (40 saat x 52 hafta) bölerek hata yapar. Oysa müşteri bulma, faturalandırma ve idari işler nedeniyle gerçek faturalandırılabilir süre haftalık 20-25 saati geçmez.",
        "Hesaplama motorumuz; yıllık hedef net kazancınızı, tahmini vergi yükünüzü ve yıllık sabit iş giderlerinizi (yazılım lisansları, amortisman, muhasebe) toplayarak toplam yıllık faturalandırılabilir çalışma saatinize böler ve vermeniz gereken minimum teklifi çıkarır."
      ],
      faqs: [
        { q: "Bir freelancer haftada kaç saati müşteriye faturalandırabilir?", a: "Ortalama olarak tam zamanlı bir freelancer haftada 20 ila 25 saati faturalandırabilir. Kalan 15-20 saat idari işler ve müşteri görüşmelerine gider." }
      ]
    },
    'beckham-law': {
      title: "Expat Vergi Rejimleri: Beckham Law, NHR 2.0 ve Impatriati Rehberi",
      subtitle: "İspanya, Portekiz, İtalya ve Dubai'de Sabit Vergi Avantajları",
      paragraphs: [
        "Avrupa ülkeleri, yüksek gelirli remote çalışanları ve kurucuları çekmek için son derece cazip expat vergi rejimleri sunar. İspanya'daki ünlü Beckham Yasası (Royal Decree 687/2005), şartları karşılayan yabancı çalışanların 6 yıl boyunca %47'ye varan kademeli vergi yerine %24 sabit vergi ödemesini sağlar.",
        "Benzer şekilde Portekiz NHR / IFICI rejimi teknoloji rollerinde %20 sabit vergi sunarken, İtalya Impatriati kanunu vergi matrahında %50-%70 muafiyet sağlar. Dubai (BAE) ise sıfır gelir vergisi ve sıfır sermaye kazancı vergisi ile tam vergi muafiyeti sunar."
      ],
      faqs: [
        { q: "İspanya Beckham Yasasından kimler yararlanabilir?", a: "Son 5 yıl boyunca İspanya'da ikamet etmemiş ve İspanyol bir şirkete veya remote sözleşmeye bağlı olarak taşınan yabancı çalışanlar yararlanabilir." }
      ]
    },
    'crypto-tax': {
      title: "Kripto & Stablecoin Remote Maaş Vergilendirme Rehberi",
      subtitle: "USDT, USDC ve Kripto Bordrolarında Gelir Vergisi vs Sermaye Kazancı",
      paragraphs: [
        "USDT, USDC, BTC veya ETH ile maaş almak neredeyse tüm gelişmiş ülkelerde vergilendirilebilir bir olaydır. ABD (IRS), İngiltere (HMRC) ve Almanya (BZSt) gibi maliye idareleri kripto maaşı alındığı andaki piyasa değeri üzerinden 'Gelir Vergisi' olarak değerlendirir.",
        "Kripto parayı aldıktan sonra elinizde tutarsanız ve itibari paraya (fiat) dönüştürene kadar değeri değişirse, aradaki fark 'Sermaye Kazancı Vergisi' (Capital Gains Tax) kurallarına tabi olur. Almanya ve Portekiz'de 365 günden uzun tutulan kripto varlıklar %0 sermaye kazancı vergisi muafiyetine sahiptir."
      ],
      faqs: [
        { q: "USDT maaş gelir vergisi mi yoksa sermaye kazancı mı sayılır?", a: "Hesaba yattığı andaki itibari para karşılığı Gelir Vergisine tabidir. Sonraki değer değişimleri ise Sermaye Kazancı sayılır." }
      ]
    },
    'eor-cost': {
      title: "Employer of Record (EOR) vs Yerel Şirket Kurma Maliyet Analizi",
      subtitle: "Deel ve Remote.com Kullanımı ile Yerel Şirket Başa Baş Noktası",
      paragraphs: [
        "Uluslararası ekibini büyüten teknoloji şirketleri iki seçenekle karşılaşır: Deel veya Remote.com gibi bir Employer of Record (EOR) sağlayıcısı üzerinden çalıştırmak ya da o ülkede yerel şirket açmak.",
        "EOR platformları çalışan başına aylık sabit ücret ($599/ay) alarak bordro ve iş hukuku sorumluluğunu üstlenir. Ancak o ülkedeki çalışan sayısı 4-6 kişiyi geçtiğinde toplam EOR maliyeti, yerel şirket kurulum ve yıllık muhasebe masraflarını aşar."
      ],
      faqs: [
        { q: "Kaç çalışandan sonra şirket kurmak EOR'dan daha ucuza gelir?", a: "Genellikle aynı ülkede 4 ve üzeri çalışanınız olduğunda yerel şirket kurmak EOR kullanmaktan daha ekonomik hale gelir." }
      ]
    },
    'nomad-visa': {
      title: "Dijital Göçebe Vizesi Finansal Gelir Şartları Rehberi",
      subtitle: "İspanya, Portekiz, Dubai ve Japonya İçin Minimum Aylık Gelir Kriterleri",
      paragraphs: [
        "Dijital Göçebe Vizeleri, uzaktan çalışanların yurtdışındaki şirketlere hizmet verirken başka bir ülkede yasal olarak ikamet etmelerine olanak tanır. Çoğu ülke başvuru sahibinden düzenli ve belgelenebilir bir aylık remote gelir şartı ister.",
        "Örneğin İspanya aylık $2.900, Portekiz D8 vizesi $3.600, Japonya ise yıllık ¥10M (~$5.500/ay) gelir şartı arar. Başvuru sahiplerinin son 6 aylık banka dökümlerini ve aktif remote sözleşmelerini ibraz etmeleri gerekmektedir."
      ],
      faqs: [
        { q: "Dijital Göçebe Vizesine aile üyeleri dahil edilebilir mi?", a: "Evet, çoğu ülke eş ve çocukları dahil etmeye izin verir; ancak her bağımlı birey için istenen minimum gelir tutarı %25-%50 oranında artar." }
      ]
    },
    'fx-fees': {
      title: "Uluslararası Transferler ve Gizli Kur Komisyonu Rehberi",
      subtitle: "Reel Piyasa Kuru ile Banka Marjları Kıyası (Wise, SWIFT, PayPal, Stripe)",
      paragraphs: [
        "Sınır ötesi maaş ödemeleri ve uluslararası faturalar gizli döviz kuru marjlarından ciddi şekilde etkilenir. Geleneksel SWIFT banka transferleri ve öme sistemleri (PayPal, Stripe) 'düşük işlem ücreti' reklamı yaparken döviz kuruna %2.5 ila %4.5 arasında gizli marj ekler.",
        "Wise veya Revolut gibi şeffaf fintek araçları gerçek Piyasa Ortası Kuru (Mid-Market Rate) üzerinden işlem yaparak yılda binlerce dolar tasarruf etmenizi sağlar."
      ],
      faqs: [
        { q: "Gizli kur marjı (FX Markup) nedir?", a: "Bankaların veya ödeme sistemlerinin gerçek piyasa kuru üzerine kendi kâr marjlarını ekleyerek size daha kötü bir kurdan işlem yaptırmasıdır." }
      ]
    },
    'vat': {
      title: "Küresel Hizmet İhracatı Faturası ve KDV / Sales Tax Rehberi",
      subtitle: "B2B Satışlarda Ters Ödeme Yükümlülüğü (Reverse Charge %0 KDV) Esasları",
      paragraphs: [
        "Uluslararası B2B müşterilere fatura keserken KDV (VAT) ve Satış Vergisi (Sales Tax) mevzuatlarına uymak zorunludur. Avrupa Birliği'nde yerleşik olmayan kurumsal müşterilere verilen B2B hizmetler **Ters Ödeme Yükümlülüğü (Reverse Charge)** kapsamına girer.",
        "Bu kural gereği fatura %0 KDV ile kesilir ve faturaya 'EU Directive 2006/112/EC uyarınca KDV alıcı tarafından beyan edilecektir' şerhi eklenir."
      ],
      faqs: [
        { q: "Yurtdışındaki kurumsal müşteriye fatura keserken KDV eklenmeli mi?", a: "Hayır. Uluslararası B2B hizmet ihracatında vergi genellikle ihracat istisnası veya Reverse Charge kapsamında %0 KDV olarak uygulanır." }
      ]
    }
  };

  // English Articles Dictionary
  const enArticles = {
    'take-home': {
      title: "Comprehensive Guide: Global Net Take-Home Salary & Tax Calculations",
      subtitle: "Understanding Federal Tax Brackets, Social Security, and Net Pay Across 40+ Jurisdictions",
      paragraphs: [
        "Calculating gross-to-net salary for international remote positions or cross-border relocations requires understanding complex statutory tax frameworks. In countries like the United States, net pay is affected by Federal Progressive Income Tax (10% to 37%), State Income Tax (0% in FL/TX/WA to 13.3% in CA), and FICA contributions (6.2% Social Security + 1.45% Medicare).",
        "Across European jurisdictions such as Germany and the UK, income is subject to local Einkommensteuer or PAYE tax bands alongside compulsory National Insurance and statutory pension contributions. In emerging tech hubs like Turkey, statutory deductions include progressive income tax brackets (15% to 40%), SGK social security worker share (14%), and unemployment insurance (1%), balanced against minimum wage tax exemptions.",
        "Our dynamic client-side engine computes your exact net monthly take-home pay, allowing remote employees and contractors to accurately evaluate international job offers."
      ],
      faqs: [
        { q: "How is Federal and State tax calculated for US remote workers?", a: "Federal income tax uses progressive marginal brackets (10% to 37%). State tax varies from 0% (Texas, Florida, Washington) up to 13.3% in California. FICA tax deducts 7.65% from employees." },
        { q: "What is the difference between Gross Salary and Net Take-Home Pay?", a: "Gross salary is your total compensation before any deductions. Net take-home pay is the exact liquid cash deposited into your bank account after all income tax, social security, and health contributions." }
      ]
    },
    'contractor': {
      title: "W-2 Employee vs 1099 Contractor Equivalence & IR35 Tax Guide",
      subtitle: "Navigating Self-Employment Tax, Benefit Overheads, and Billing Rate Calculations",
      paragraphs: [
        "Deciding between a full-time W-2 employment offer and a 1099 independent contractor agreement involves evaluating indirect financial benefits. Full-time W-2 employees typically receive employer-funded health insurance, 401(k) matching, paid time off (PTO), and employer FICA tax contributions (7.65%).",
        "Conversely, 1099 contractors in the US must pay Self-Employment Tax (15.3% covering both employee and employer FICA shares) and cover their own unbillable downtime, software licenses, and CPA fees. In the United Kingdom, IR35 tax legislation dictates whether a contract is classified 'Inside IR35' (taxed like an employee) or 'Outside IR35' (taxed through a corporate entity).",
        "To achieve financial parity, contractors generally need to charge a billing rate that is 25% to 40% higher than a salaried equivalent hourly rate."
      ],
      faqs: [
        { q: "Why do 1099 contractors need to charge 30% more than W-2 employees?", a: "Contractors must cover 15.3% Self-Employment tax, health insurance premiums, unpaid vacation weeks, CPA fees, and unbillable administrative hours." }
      ]
    },
    'hourly-rate': {
      title: "Freelancer Minimum Billing Rate & Overhead Cost Calculator Guide",
      subtitle: "How to Factor Target Net Compensation, Business Expenses, and Billable Hours",
      paragraphs: [
        "Setting an optimal hourly rate is critical for freelance sustainability. Most freelancers make the mistake of dividing their target annual salary by 2,080 hours (40 hours x 52 weeks). However, real billable time rarely exceeds 20 to 25 hours per week due to client prospecting, invoicing, marketing, and administrative overhead.",
        "Our engine calculates your minimum required billing rate by summing your desired net annual income, total annual tax liability, and recurring business expenses (software subscriptions, equipment depreciation, CPA fees, and liability insurance), then dividing by total annual billable hours."
      ],
      faqs: [
        { q: "How many hours per week are actually billable for freelancers?", a: "On average, full-time freelancers log 20 to 25 billable hours per week. The remaining 15 to 20 hours are spent on non-billable administrative tasks, pitching, and professional development." }
      ]
    },
    'beckham-law': {
      title: "Expat Tax Regimes: Beckham Law, NHR 2.0 & Impatriati Guide",
      subtitle: "Maximizing Expat Net Take-Home Pay with Flat Tax Incentives Across Europe & Dubai",
      paragraphs: [
        "European countries offer highly attractive expat tax regimes designed to attract high-earning remote talent and founders. Spain's famous Beckham Law (Royal Decree 687/2005) allows qualifying foreign workers to pay a flat 24% tax rate on Spanish-source income up to €600,000 for up to 6 years, instead of progressive rates reaching 47%.",
        "Similarly, Portugal's IFICI / NHR scheme provides a 20% flat tax rate on qualifying scientific and tech roles, while Italy's Impatriati scheme offers a 50% to 70% exemption on taxable income. In Dubai (UAE), foreign workers enjoy a 0% personal income tax environment with zero capital gains tax."
      ],
      faqs: [
        { q: "Who qualifies for the Spanish Beckham Law?", a: "Foreign workers and remote executives moving to Spain who have not resided in Spain for the preceding 5 years qualify for the flat 24% tax rate." }
      ]
    },
    'crypto-tax': {
      title: "Crypto & Stablecoin Remote Salary Tax Compliance Guide",
      subtitle: "Navigating Income Tax vs Capital Gains Taxes on USDT, USDC, and Crypto Payroll",
      paragraphs: [
        "Receiving compensation in crypto (USDT, USDC, BTC, or ETH) triggers tax obligations in almost all major jurisdictions. Tax authorities like the IRS (US), HMRC (UK), and BZSt (Germany) treat crypto salary as ordinary income at fair market value at the time of receipt.",
        "If you hold stablecoins or crypto assets after receiving them and their value fluctuates prior to converting to fiat, subsequent gains or losses are classified under Capital Gains Tax rules. In countries like Germany and Portugal, holding crypto assets for more than 365 days qualifies for a 0% long-term capital gains tax rate."
      ],
      faqs: [
        { q: "Is USDT salary taxed as income or capital gains?", a: "It is taxed as ordinary income based on its fiat value when received. Any subsequent gain upon conversion to local currency is subject to capital gains rules." }
      ]
    },
    'eor-cost': {
      title: "Employer of Record (EOR) vs Local Entity Setup Analysis",
      subtitle: "Breakeven Cost Evaluation for Hiring Global Remote Talent via Deel or Local Subs",
      paragraphs: [
        "When expanding a remote team internationally, tech companies face a strategic choice: hire via an Employer of Record (EOR) provider like Deel, Remote.com, or Oyster, or incorporate a local legal subsidiary.",
        "EOR platforms charge fixed seat fees (typically $599/month per employee), taking care of payroll, local labor law compliance, and statutory benefits. However, as local headcount grows beyond 4 to 6 employees, the recurring annual EOR fees exceed the cost of local corporate entity incorporation and annual compliance fees."
      ],
      faqs: [
        { q: "At what headcount does establishing a local entity become cheaper than EOR?", a: "For most jurisdictions, having 4 or more full-time remote employees makes local entity incorporation more cost-effective than paying monthly EOR seat fees." }
      ]
    },
    'nomad-visa': {
      title: "Digital Nomad Visa Income Requirements & Financial Eligibility",
      subtitle: "Minimum Remote Income Benchmarks for Spain, Portugal, Dubai, and Japan",
      paragraphs: [
        "Digital Nomad Visas enable location-independent professionals to reside legally in foreign destinations while working for non-resident employers. Most countries mandate a minimum verified monthly remote income requirement.",
        "For instance, Spain requires $2,900/month, Portugal's D8 visa requires $3,600/month, and Japan's Digital Nomad Visa requires ¥10M/year (~$5,500/month). Applicants must provide bank statements and active employment/freelance contracts proving recurring overseas income."
      ],
      faqs: [
        { q: "Can I bring family members on a Digital Nomad Visa?", a: "Yes, most Digital Nomad Visas allow spouses and dependents, though minimum income requirements increase by 25% to 50% per dependent." }
      ]
    },
    'fx-fees': {
      title: "International Wire Transfers & Hidden FX Markup Fee Guide",
      subtitle: "Exposing Mid-Market Exchange Rates vs Bank Markups (Wise, SWIFT, PayPal, Stripe)",
      paragraphs: [
        "Cross-border salary payments and international freelance invoices suffer from hidden exchange rate markups. Traditional SWIFT bank transfers and payment processors (PayPal, Stripe) often advertise 'low transfer fees' while embedding a 2.5% to 4.5% markup into the exchange rate.",
        "By comparing transfer options against the real Mid-Market Rate (the interbank rate seen on Google Finance or Reuters), remote workers can save thousands of dollars annually using transparent multi-currency fintech providers like Wise or Revolut."
      ],
      faqs: [
        { q: "What is an FX markup fee?", a: "An FX markup is the hidden profit margin added to exchange rates by banks, charging you a worse rate than the real interbank mid-market rate." }
      ]
    },
    'vat': {
      title: "Global Cross-Border Invoice & VAT / GST Reverse Charge Guide",
      subtitle: "Navigating B2B Export Exemptions, EU Reverse Charge, and Zero-Rated Invoicing",
      paragraphs: [
        "Invoicing international B2B clients requires compliance with cross-border Value Added Tax (VAT) and Goods and Services Tax (GST) regulations. In the European Union, B2B services rendered to non-resident corporate entities fall under the **Reverse Charge Mechanism**.",
        "Under Reverse Charge rules, the invoice issuer charges 0% VAT, adding the mandatory legal invoice clause: 'VAT reverse-charged pursuant to EU Directive 2006/112/EC'. This ensures foreign clients account for VAT in their local tax filings without paying unnecessary upfront sales tax."
      ],
      faqs: [
        { q: "Do I charge VAT when invoicing a foreign US or EU business client?", a: "No. For cross-border B2B service exports, VAT is generally 0% under export exemptions or Reverse Charge provisions." }
      ]
    }
  };

  const articleDict = lang === 'tr' ? trArticles : enArticles;
  const article = articleDict[activeTool] || articleDict['take-home'] || enArticles['take-home'];

  const webAppSchema = generateSeoSchema({
    type: 'WebApplication',
    url: `https://globalpaycalc.com/${activeTool}`,
    name: article.title,
    description: article.subtitle
  });

  const faqSchema = generateSeoSchema({
    type: 'FAQPage',
    url: `https://globalpaycalc.com/${activeTool}`,
    faqs: article.faqs.map(f => ({ question: f.q, answer: f.a }))
  });

  return (
    <article className="glass-card p-6 sm:p-10 rounded-2xl border-slate-800 space-y-8 mt-12">
      <header className="space-y-2 border-b border-slate-800 pb-6">
        <h2 className="text-2xl font-bold text-white flex items-center space-x-3">
          <Info className="w-6 h-6 text-brand-400" />
          <span>{article.title}</span>
        </h2>
        <p className="text-slate-400 text-sm font-medium">
          {article.subtitle}
        </p>
      </header>

      <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
        {article.paragraphs.map((p, idx) => (
          <p key={idx}>{p}</p>
        ))}
      </div>

      {article.faqs && article.faqs.length > 0 && (
        <div className="space-y-6 pt-6 border-t border-slate-800">
          <h3 className="text-xl font-bold text-white flex items-center space-x-2">
            <HelpCircle className="w-5 h-5 text-amber-400" />
            <span>{lang === 'tr' ? 'Sıkça Sorulan Sorular' : 'Frequently Asked Questions'}</span>
          </h3>
          <div className="space-y-4">
            {article.faqs.map((faq, idx) => (
              <div key={idx} className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 space-y-1">
                <h4 className="font-semibold text-slate-200 text-sm">{faq.q}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <footer className="pt-6 border-t border-slate-800 text-xs text-slate-500 flex items-center justify-between">
        <span>© GlobalPayCalc.com — 100% Client-Side Financial Utility Engine</span>
        <span className="flex items-center space-x-1 text-emerald-400 font-mono"><ShieldCheck className="w-3.5 h-3.5" /><span>SSL 256-Bit Encrypted</span></span>
      </footer>

      {/* Structured JSON-LD Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </article>
  );
}
