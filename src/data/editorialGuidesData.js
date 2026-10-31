// Standalone Long-Form Editorial Research Guides (EN & TR)
// Provides original, deeply researched statutory tax, compensation, and cross-border finance analysis.

export const editorialGuides = [
  {
    slug: 'spain-beckham-law-complete-guide-2026',
    relatedTool: '/beckham-law',
    relatedToolName: {
      en: 'Spain Beckham Law Calculator (24% Flat Tax)',
      tr: 'İspanya Beckham Yasası Vergi Hesaplayıcı (%24 Sabit Vergi)'
    },
    publishedAt: '2026-09-15',
    updatedAt: '2026-10-30',
    readTime: '11 min',
    en: {
      category: 'Expat Tax Regimes',
      title: "Spain's Beckham Law (Art. 93 LIRPF) 2026 Complete Guide: Eligibility, Startup Law Rules, Modelo 149/151 & Exact Tax Math",
      subtitle: "An exhaustive statutory analysis of Spain's Special Expat Tax Regime under Article 93 of Law 35/2006 (as reformed by Law 28/2022 and Law 7/2024), covering the 24% flat rate, Digital Nomad eligibility, foreign dividend exemptions, and the €55,000 breakeven threshold.",
      summaryPoints: [
        "Qualifying newcomers pay a flat 24% income tax rate on employment income up to €600,000 (and 47% on the excess) for the year of arrival plus 5 subsequent tax years (6 years total).",
        "Under the Startup Law (Ley 28/2022), the prior non-residency requirement dropped from 10 years to 5 tax years, and international remote workers (Digital Nomad Visa holders) and company directors now qualify.",
        "Foreign passive income (non-Spanish dividends, interest, and foreign capital gains) remains 0% taxed in Spain under Non-Resident Income Tax (IRNR) territoriality rules.",
        "Election requires filing Modelo 149 electronically with the Agencia Tributaria (AEAT) within a strict 6-month forfeiture window from Spanish Social Security registration."
      ],
      tableTitle: "2026 Statutory Tax Comparison: Standard Spanish IRPF (Madrid/Catalonia Avg.) vs. Beckham Law (Art. 93 LIRPF)",
      tableHeaders: ["Annual Gross Salary", "2026 Employee SS (Capped)", "Standard Progressive IRPF", "Beckham Law Flat Tax (24%)", "Annual Net Take-Home (Beckham)", "Annual Tax Saved", "6-Year Cumulative Savings"],
      tableRows: [
        ["€50,000", "€3,250", "€10,890 (21.8%)", "€12,000 (24.0%)", "€34,750", "-€1,110 (Not Worth It)", "-€6,660"],
        ["€60,000", "€3,900", "€14,510 (24.2%)", "€14,400 (24.0%)", "€41,700", "+€110 (Breakeven)", "+€660"],
        ["€95,000", "€3,979 (Max Cap)", "€28,840 (30.4%)", "€22,800 (24.0%)", "€68,221", "+€6,040 / yr", "+€36,240"],
        ["€140,000", "€3,979 (Max Cap)", "€49,090 (35.1%)", "€33,600 (24.0%)", "€102,421", "+€15,490 / yr", "+€92,940"],
        ["€250,000", "€3,979 (Max Cap)", "€99,590 (39.8%)", "€60,000 (24.0%)", "€186,021", "+€39,590 / yr", "+€237,540"],
        ["€600,000", "€3,979 (Max Cap)", "€262,050 (43.7%)", "€144,000 (24.0%)", "€452,021", "+€118,050 / yr", "+€708,300"]
      ],
      sections: [
        {
          heading: "1. Statutory Foundation: What Is Article 93 LIRPF (The Beckham Law)?",
          body: "Spain's Special Tax Regime for Inbound Workers, Professionals, Entrepreneurs, and Investors—universally known as the Beckham Law—is codified in Article 93 of Law 35/2006 on Personal Income Tax (Ley del Impuesto sobre la Renta de las Personas Físicas, LIRPF) and Articles 113 to 120 of Royal Decree 439/2007 (RIRPF). When an individual spends more than 183 days during a calendar year in Spain, they become a Spanish tax resident by operation of law. Under the general IRPF regime, tax residents face progressive national plus regional marginal rates climbing from 19% to 47% (and up to 50%–54% in autonomous communities such as Valencian Community or Catalonia for top earners), applied to their worldwide income and capital gains.\n\nBy electing into Article 93 LIRPF, the taxpayer retains full legal tax residency in Spain while having their tax liability calculated under the rules of the Non-Resident Income Tax (Impuesto sobre la Renta de no Residentes, IRNR) for the tax period in which residency is acquired and the five following tax years (six tax years in total). Employment income (rendimientos del trabajo) up to €600,000 per year is taxed at a flat 24%, while any employment remuneration exceeding €600,000 is taxed at 47%."
        },
        {
          heading: "2. TheFour Qualifying Pathways After the Startup Law (Ley 28/2022) Reform",
          body: "Law 28/2022 of December 21 ('Ley de Startups') overhauled Article 93 LIRPF to attract remote software engineers, founders, and executives. To qualify in 2026, you must first prove that you have not been a tax resident in Spain during the five tax years preceding your relocation (down from ten years prior to 2023). Second, your displacement to Spanish territory must result from one of four specific statutory triggers:\n\n• Pathway A — Employment Contract or Intra-Company Transfer: Signing a new employment contract with a Spanish corporate employer, or being seconded to Spain via an official employer transfer letter (carta de desplazamiento) from a foreign employer.\n• Pathway B — International Remote Workers (Digital Nomad Visa): Working remotely from Spain for a foreign employer exclusively through computer, telematic, and telecommunications systems. Holders of Spain's International Teleworking Visa (Visado de Teletrabajo de Carácter Internacional) automatically satisfy this condition when employed on payroll.\n• Pathway C — Company Directors (Administradores): Acquiring the status of director of an entity. Crucially, Law 28/2022 abolished the old 25% maximum shareholding restriction for active operating businesses. Today, a founder holding 50% or 100% of an operating Spanish S.L. can qualify as its director; the <25% equity cap only applies if the company is a passive asset-holding entity (entidad patrimonial under Art. 5 of the Corporate Income Tax Law).\n• Pathway D — Innovative Entrepreneurs & Highly Qualified R&D Professionals: Self-employed professionals carrying out an entrepreneurial activity certified as innovative by ENISA (Empresa Nacional de Innovación), or highly qualified professionals providing services to certified emerging companies or R&D/training activities representing over 40% of their total professional income."
        },
        {
          heading: "3. Why €55,000–€60,000 Is the Real Mathematical Breakeven Point",
          body: "Many expats mistakenly assume that a 24% flat tax is cheaper at every income level because Spain's lowest progressive bracket starts at 19% and quickly rises to 24% above €12,450. However, under Article 93 LIRPF, the flat 24% rate applies to the very first euro of gross salary with zero deductions. You do not receive the €5,550 general personal allowance (mínimo personal y familiar), the €2,000 general employment expense allowance, or the right to deduct mandatory employee Social Security contributions (up to €3,979/year in 2026) from your taxable income base.\n\nUnder the general progressive IRPF regime, an employee earning €50,000 gross first subtracts €3,250 in Social Security and €2,000 in general employment expenses, reducing taxable base to €44,750, and also benefits from the €5,550 personal allowance—resulting in roughly €10,890 in income tax (an effective rate of 21.8%), compared to €12,000 (24.0%) under the Beckham Law. Only once gross salary reaches €58,000 to €60,000 does the Beckham Law overtake standard IRPF, after which savings accelerate rapidly—saving €11,290/year at €120,000 gross and €28,090/year at €200,000 gross."
        },
        {
          heading: "4. Foreign Dividends, Capital Gains (Ley 7/2024 Scale) & Wealth Tax Territoriality",
          body: "A critical nuance of Article 93 LIRPF is the asymmetric treatment of active employment income versus passive investment income:\n\n• Worldwide Employment Income: All employment income earned during the regime is taxable in Spain at 24% (up to €600k), regardless of where the employer is established, though double taxation relief is available for taxes paid abroad up to 30% of the total Spanish tax liability.\n• Foreign-Source Passive Income (0% in Spain): Dividends paid by US, UK, or non-Spanish corporations, interest from foreign bank accounts, rental income from properties outside Spain, and capital gains from selling foreign equities or real estate located outside Spain are completely exempt from Spanish taxation under Modelo 151. Note, however, that because Beckham Law taxpayers are taxed under IRNR rules, the AEAT does not issue standard bilateral tax-treaty residency certificates—meaning foreign brokers may withhold statutory non-resident dividend tax (e.g., 30% US withholding unless treaty rules permit otherwise).\n• Spanish-Source Savings Income: Dividends, interest, or capital gains originating inside Spain are taxed according to the savings base scale updated by Law 7/2024: 19% up to €6,000; 21% from €6,000 to €50,000; 23% from €50,000 to €200,000; 27% from €200,000 to €300,000; and 30% on amounts exceeding €300,000."
        },
        {
          heading: "5. Step-by-Step Application: Modelo 149, Required Documents & Modelo 151",
          body: "To elect into the regime, you must file Form Modelo 149 electronically via the AEAT Sede Electrónica using a Cl@ve PIN or FNMT digital certificate within exactly 6 months from the date of your registration with Spanish Social Security (Alta en la Seguridad Social) or the start date on your foreign Certificate of Coverage (A1/bilateral detachment form). Required attachments include your NIE/TIE, passport, Spanish employment contract or displacement letter, Social Security registration resolution (Tesorería General de la Seguridad Social), and employer tax identification.\n\nOnce approved (typically within 10 to 45 business days), the AEAT issues a ten-digit residency regime certificate. Deliver this certificate to your payroll department so monthly IRPF withholding is fixed at 24%. Between April and June of each subsequent year, you must file your annual tax return using Form Modelo 151 instead of the standard Modelo 100."
        }
      ],
      citations: [
        "Agencia Tributaria (AEAT) — Artículo 93, Ley 35/2006 (LIRPF): Régimen fiscal especial aplicable a los trabajadores desplazados a territorio español.",
        "Boletín Oficial del Estado (BOE) — Ley 28/2022, de 21 de diciembre, de fomento del ecosistema de las empresas emergentes (Startup Law).",
        "BOE — Ley 7/2024, de 20 de diciembre: Actualización de la escala del ahorro (30% tramo superior >300.000 €).",
        "Orden HFP/1338/2023 — Approval of the updated Modelo 149 and Modelo 151 electronic filing specifications."
      ]
    },
    tr: {
      category: 'Expat Vergi Rejimleri',
      title: "2026 İspanya Beckham Yasası (Madde 93 LIRPF) Tam Rehberi: Şartlar, Startup Yasası, Modelo 149/151 ve Vergi Hesabı",
      subtitle: "Ley 35/2006 Madde 93 (Ley 28/2022 ve Ley 7/2024 değişiklikleriyle) kapsamında İspanya'nın %24 sabit expat vergi rejiminin; Dijital Göçebe uygunluğu, yurt dışı temettü istisnası ve 58.000 € başabaş sınırı dahil kapsamlı mevzuat analizi.",
      summaryPoints: [
        "Şartları sağlayan profesyoneller İspanya'ya taşındıkları yıl ve takip eden 5 vergi yılı boyunca (toplam 6 yıl) 600.000 €'ya kadar olan çalışma gelirleri üzerinden %24 sabit gelir vergisi (aşan kısım için %47) öder.",
        "Startup Yasası (Ley 28/2022) ile geçmişte İspanya'da vergi mukimi olmama şartı 10 yıldan 5 yıla indirilmiş; Dijital Göçebe Vizesi sahipleri ve şirket yöneticileri kapsama alınmıştır.",
        "İspanya dışından elde edilen pasif yatırım gelirleri (yabancı hisse temettüleri, yurt dışı faiz ve yabancı borsa/gayrimenkul satış kazançları) İspanya'da %0 vergiye tabidir.",
        "Başvuru, İspanyol Sosyal Güvenlik (Seguridad Social) tescil tarihinden itibaren kesin 6 aylık hak düşürücü süre içinde Modelo 149 formuyla elektronik olarak yapılmalıdır."
      ],
      tableTitle: "2026 Yasal Vergi Karşılaştırması: Standart İspanya IRPF vs. Beckham Yasası (%24 Sabit Vergi)",
      tableHeaders: ["Yıllık Brüt Maaş", "2026 Çalışan SGK (Tavanlı)", "Standart Kademeli IRPF", "Beckham Yasası (%24)", "Yıllık Net Maaş (Beckham)", "Yıllık Vergi Tasarrufu", "6 Yıllık Toplam Avantaj"],
      tableRows: [
        ["€50,000", "€3,250", "€10,890 (%21.8)", "€12,000 (%24.0)", "€34,750", "-€1,110 (Avantajlı Değil)", "-€6,660"],
        ["€60,000", "€3,900", "€14,510 (%24.2)", "€14,400 (%24.0)", "€41,700", "+€110 (Başabaş Noktası)", "+€660"],
        ["€95,000", "€3,979 (Maks. Tavan)", "€28,840 (%30.4)", "€22,800 (%24.0)", "€68,221", "+€6,040 / yıl", "+€36,240"],
        ["€140,000", "€3,979 (Maks. Tavan)", "€49,090 (%35.1)", "€33,600 (%24.0)", "€102,421", "+€15,490 / yıl", "+€92,940"],
        ["€250,000", "€3,979 (Maks. Tavan)", "€99,590 (%39.8)", "€60,000 (%24.0)", "€186,021", "+€39,590 / yıl", "+€237,540"],
        ["€600,000", "€3,979 (Maks. Tavan)", "€262,050 (%43.7)", "€144,000 (%24.0)", "€452,021", "+€118,050 / yıl", "+€708,300"]
      ],
      sections: [
        {
          heading: "1. Yasal Dayanak: Madde 93 LIRPF (Beckham Yasası) Tam Olarak Nedir?",
          body: "Kamuoyunda Beckham Yasası olarak bilinen 'İspanya Topraklarına Gönderilen Çalışanlar, Profesyoneller, Girişimciler ve Yatırımcılar İçin Özel Vergi Rejimi', 35/2006 sayılı Gelir Vergisi Kanununun (LIRPF) 93. maddesinde ve 439/2007 sayılı Kraliyet Kararnamesinin 113 ila 120. maddelerinde düzenlenmiştir. Normal şartlarda İspanya'da bir takvim yılı içinde 183 günden fazla kalan herkes tam mükellef vergi mukimi olur ve dünya genelindeki tüm gelirleri üzerinden özerk bölgelere göre %19'dan başlayıp %47–%54'e kadar çıkan artan oranlı IRPF vergisine tabi tutulur.\n\nMadde 93 LIRPF kapsamına giren mükellefler ise hukuken İspanya vergi mukimi olmalarına rağmen, taşındıkları takvim yılı ve takip eden 5 vergi yılı boyunca (toplam 6 yıl) Dar Mükellef Gelir Vergisi (IRNR) kurallarına göre vergilendirilir. Yıllık 600.000 €'ya kadar olan tüm çalışma gelirleri %24 sabit orana, 600.000 €'yu aşan kısım ise %47 oranına tabidir."
        },
        {
          heading: "2. Startup Yasası (Ley 28/2022) Sonrası 4 Başvuru Yolu",
          body: "21 Aralık 2022 tarihli Ley 28/2022 ('Startup Yasası') ile Beckham Yasasının kapsamı uzaktan çalışan yazılımcıları, şirket kurucularını ve üst düzey uzmanları kapsayacak şekilde genişletilmiştir. 2026 yılında başvurabilmek için önceki 5 vergi yılı boyunca İspanya'da vergi mukimi olmamanız ve İspanya'ya taşınmanızın şu dört yasal nedenden birine dayanması gerekir:\n\n• 1. Yol — İspanyol İşverenle İş Sözleşmesi veya Şirket İçi Görevlendirme: İspanya'da kurulu bir şirketle yeni bir iş sözleşmesi imzalamak veya yabancı işvereniniz tarafından resmi görevlendirme yazısıyla (carta de desplazamiento) İspanya'ya atanmak.\n• 2. Yol — Uluslararası Uzaktan Çalışanlar (Dijital Göçebe Vizesi): Yurt dışındaki bir şirket adına tamamen bilgisayar ve telekomünikasyon sistemleri aracılığıyla İspanya'dan uzaktan çalışmak. İspanya Dijital Göçebe Vizesi (Visado de Teletrabajo Internacional) ile bordrolu çalışan olarak gelenler bu şartı doğrudan sağlar.\n• 3. Yol — Şirket Yöneticileri (Administradores): Bir şirkete yönetim kurulu üyesi veya müdür olarak atanmak. Ley 28/2022 ile aktif ticari şirketlerdeki eski '%25'ten az hisseye sahip olma' kısıtlaması kaldırılmıştır; yalnızca pasif varlık tutan şirketlerde (entidad patrimonial) %25 altı ortaklık şartı devam eder.\n• 4. Yol — ENISA Onaylı Yenilikçi Girişimciler ve Ar-Ge Uzmanları: ENISA tarafından onaylanmış yenilikçi bir girişim faaliyeti yürütenler veya gelirinin en az %40'ını tescilli startuplara ve Ar-Ge projelerine verdiği hizmetlerden elde eden yüksek nitelikli profesyoneller."
        },
        {
          heading: "3. Neden 58.000 € – 60.000 € Altındaki Maaşlarda Beckham Yasası Avantajlı Değildir?",
          body: "Sık yapılan bir hata, İspanya'da kademeli verginin 12.450 € üzerinde %24'e çıkması nedeniyle %24 sabit verginin her maaşta kârlı olduğunun sanılmasıdır. Oysa Beckham Yasasında %24 sabit vergi brüt maaşın ilk euro'sundan itibaren hiçbir indirim yapılmaksızın uygulanır: 5.550 € genel kişisel muafiyet, 2.000 € çalışma gideri indirimi ve ödediğiniz çalışan sosyal güvenlik primleri (2026'da yıllık maksimum 3.979 €) vergi matrahından düşülemez.\n\nStandart kademeli IRPF rejiminde ise 50.000 € brüt maaş alan bir çalışan önce SGK kesintisini ve çalışma indirimini matrahtan düşer, ayrıca kişisel muafiyetten yararlanır ve yaklaşık 10.890 € (%21,8 efektif vergi) öder; Beckham Yasasında ise aynı maaşa 12.000 € (%24) vergi çıkar. Başabaş noktası yıllık yaklaşık 58.000 € – 60.000 € brüt maaştır; bu seviyenin üzerinde ise tasarruf katlanarak büyür (120.000 € brütte yılda +11.290 €, 200.000 € brütte yılda +28.090 € net avantaj)."
        },
        {
          heading: "4. Yurt Dışı Temettü, Borsa Kazançları (Ley 7/2024) ve Servet Vergisi Kuralları",
          body: "Beckham Yasasında aktif maaş geliri ile pasif yatırım geliri farklı kurallara tabidir:\n\n• Yurt Dışı Pasif Yatırım Gelirleri (%0 Vergi): ABD, İngiltere veya Türkiye gibi İspanya dışındaki ülkelerden elde edilen hisse senedi temettüleri, yurt dışı mevduat faizleri, yurt dışı kira gelirleri ve yabancı borsa/gayrimenkul satışından doğan değer artış kazançları İspanya'da Modelo 151 beyannamesine dahil edilmez (%0 İspanya vergisi).\n• İspanya Kaynaklı Yatırım Gelirleri: İspanya içindeki banka veya şirketlerden elde edilen faiz, temettü ve sermaye kazançları Ley 7/2024 ile güncellenen tasarruf tarifesine tabidir: ilk 6.000 € için %19; 6.000 €–50.000 € arası %21; 50.000 €–200.000 € arası %23; 200.000 €–300.000 € arası %27 ve 300.000 € üzeri için %30."
        },
        {
          heading: "5. Adım Adım Başvuru: Modelo 149 Süresi ve Yıllık Modelo 151 Beyanı",
          body: "Özel vergi rejimine geçmek için İspanyol Sosyal Güvenlik Kurumuna (Seguridad Social) kayıt tarihinizden itibaren en geç 6 ay içinde Cl@ve veya dijital sertifika ile AEAT sistemi üzerinden Modelo 149 formunu elektronik olarak göndermeniz gerekir. Başvuruya NIE/TIE belgesi, pasaport, iş sözleşmesi veya görevlendirme yazısı ve SGK tescil belgesi eklenir. AEAT tarafından verilen onay belgesi işverene teslim edilerek aylık bordro kesintisi %24'e sabitlenir ve her yıl Nisan–Haziran döneminde Modelo 151 formuyla yıllık beyanname verilir."
        }
      ],
      citations: [
        "Agencia Tributaria (AEAT) — Artículo 93, Ley 35/2006 (LIRPF): Yabancı çalışanlar için özel vergi rejimi.",
        "Boletín Oficial del Estado (BOE) — Ley 28/2022 (Startup Yasası) ve Orden HFP/1338/2023 (Modelo 149/151 esasları).",
        "BOE — Ley 7/2024: Tasarruf gelirleri üst vergi diliminin 300.000 € üzeri için %30 olarak güncellenmesi."
      ]
    }
  },
  {
    slug: 'us-w2-vs-1099-contractor-tax-guide',
    relatedTool: '/contractor',
    relatedToolName: {
      en: 'W-2 vs 1099 Contractor Equivalence Calculator',
      tr: 'W-2 Bordrolu vs 1099 Sözleşmeli Maaş Karşılaştırma Aracı'
    },
    publishedAt: '2026-09-18',
    updatedAt: '2026-10-30',
    readTime: '10 min',
    en: {
      category: 'B2B & Freelance Tax',
      title: "US W-2 Employee vs. 1099 Independent Contractor Tax Guide (2026): SECA 15.3%, QBI Section 199A, S-Corp & Rate Math",
      subtitle: "How to calculate exact net pay equivalence between a salaried W-2 job offer and an independent 1099-NEC consulting contract after accounting for the 15.3% Self-Employment tax, QBI deduction, health insurance, Solo 401(k), and unpaid PTO.",
      summaryPoints: [
        "1099 contractors pay both the employee and employer portions of FICA via the 15.3% SECA tax (12.4% Social Security up to $176,100 + 2.9% Medicare) on 92.35% of net business profit.",
        "Half of your SECA tax is deductible 'above the line' on Form 1040 Schedule 1, and qualifying sole proprietors/LLCs can deduct up to 20% of Qualified Business Income (QBI) under IRC Section 199A.",
        "Once replacing health insurance ($7,000–$18,000/yr), employer 401(k) match (3%–5%), and 25–30 days of unpaid PTO/holidays, a 1099 contractor requires a 32% to 45% gross billing premium over an equivalent W-2 salary.",
        "For net contractor profits above $100,000–$120,000, electing S-Corporation status (Form 2553) legally reduces Medicare/Social Security exposure by splitting W-2 officer salary from shareholder distributions."
      ],
      tableTitle: "2026 US W-2 Salaried Employee vs. 1099 Independent Contractor Financial Equivalence Table",
      tableHeaders: ["Cost / Tax Component", "$120,000 W-2 Employee", "$120,000 1099 (Unadjusted)", "$162,000 1099 (+35% Premium)", "$162,000 via S-Corp ($85k W-2 + $77k Dist.)"],
      tableRows: [
        ["Gross Annual Compensation", "$120,000", "$120,000", "$162,000", "$162,000"],
        ["FICA / Self-Employment Tax", "-$9,180 (7.65%)", "-$16,955 (15.3% on 92.35%)", "-$21,820", "-$13,005 (15.3% on $85k Salary)"],
        ["Health Insurance + Business Overhead", "$0 (Employer Paid)", "-$11,400 (Out of Pocket)", "-$11,400", "-$13,200 (Incl. S-Corp Payroll/CPA)"],
        ["Estimated Federal Income Tax (Single)", "-$17,900", "-$12,450 (After SE & QBI Ded.)", "-$20,180 (After SE & QBI Ded.)", "-$21,350"],
        ["Paid Vacation / Holidays Included", "25 Days Paid", "0 Days Paid (Built into Gross)", "25 Days Unbilled Absorbed", "25 Days Unbilled Absorbed"],
        ["True Disposable Net Income", "$92,920", "$79,195 (-$13,725 Loss)", "$108,600 (Matches W-2 + Risk)", "$114,445 (+$5,845 S-Corp Saving)"]
      ],
      sections: [
        {
          heading: "1. The FICA vs. SECA Tax Mechanics (IRC Sections 3101 & 1401)",
          body: "When you work as a traditional W-2 employee in the United States, your payroll tax obligation under the Federal Insurance Contributions Act (FICA) is split evenly with your employer: 6.2% for Social Security (Old-Age, Survivors, and Disability Insurance, OASDI) up to the annual wage base ceiling ($176,100), plus 1.45% for Medicare (Hospital Insurance, with no wage cap, plus an Additional Medicare Tax of 0.9% on earnings above $200,000 single / $250,000 married filing jointly). Your employer quietly pays the matching 7.65% out of its own corporate budget.\n\nWhen you sign an independent contractor agreement (reported on Form 1099-NEC), the Internal Revenue Service classifies you as both employer and employee under the Self-Employment Contributions Act (SECA). You must file Schedule SE with your Form 1040 and pay 15.3% (12.4% Social Security + 2.9% Medicare) on 92.35% of your net Schedule C business profit. That 92.35% multiplier exists because the tax code reduces your self-employment tax base by 7.65% to mirror the fact that a corporate employer's 7.65% FICA share is not treated as taxable wages to an employee."
        },
        {
          heading: "2. Two Powerful 1099 Tax Offsets: Above-the-Line Deductions & IRC Section 199A (QBI)",
          body: "While the 15.3% SECA headline rate looks punitive, independent contractors have access to structural tax deductions unavailable to W-2 employees (whose unreimbursed employee business expenses were eliminated by the Tax Cuts and Jobs Act):\n\n• Deductible Half of SE Tax: You deduct 50% of your total SECA tax directly from your gross income on Schedule 1 before calculating your Adjusted Gross Income (AGI).\n• Self-Employed Health Insurance Deduction (IRC § 162(l)): 100% of medical, dental, and vision insurance premiums paid for yourself, your spouse, and your dependents are deductible above the line.\n• Solo 401(k) & SEP-IRA Contributions: As both employee and employer, a 1099 contractor can contribute the full employee elective deferral ($23,500) plus up to 20% of net self-employment income as an employer profit-sharing contribution—sheltering up to $70,000 per year from federal and state income tax.\n• 20% Qualified Business Income (QBI) Deduction (IRC § 199A): Eligible sole proprietors, single-member LLCs, and S-Corps can deduct up to 20% of their net qualified business income from federal income tax (subject to taxable income phase-outs for Specified Service Trades or Businesses, SSTBs, such as consulting, law, and financial services above ~$197,300 single / ~$394,600 joint)."
        },
        {
          heading: "3. Quantifying the 'Hidden W-2 Fringe Package': PTO, Healthcare, and 401(k) Match",
          body: "According to the U.S. Bureau of Labor Statistics (BLS) Employer Costs for Employee Compensation reports, base wages account for only ~69%–71% of total compensation for professional and technical workers; the remaining 29%–31% consists of employer-funded benefits. Specifically, when converting a W-2 salary to an equivalent 1099 hourly rate, you must price in:\n\n1. Unpaid Time Off (10%–12% of the year): 15–20 days of paid vacation + 10 federal holidays + 5 sick days equal 6 weeks (240 hours) where a 1099 contractor bills $0.\n2. Employer Health Insurance Subsidy ($6,500–$16,000/yr): Employers cover an average of 82% of single health premiums and 73% of family plans.\n3. Employer 401(k) Safe-Harbor Match (3%–5% of gross pay) and Group Disability/Life Insurance.\n4. State Unemployment (FUTA/SUTA) and Contract Bench Risk: Independent contractors are ineligible for standard state unemployment benefits when a contract ends."
        },
        {
          heading: "4. When to Elect S-Corporation Status (Form 2553) to Cut Self-Employment Tax",
          body: "Once your net Schedule C profit consistently exceeds $100,000 to $120,000 per year, forming an LLC and filing IRS Form 2553 to be taxed as an S-Corporation unlocks substantial Medicare and Social Security savings. In an S-Corp, you become a W-2 employee-shareholder of your own company. You must pay yourself a 'Reasonable Compensation' W-2 salary benchmarked to market duties (for example, $85,000 out of $162,000 net profit), which is subject to the 15.3% payroll tax. The remaining $77,000 flows through on Schedule K-1 as a shareholder distribution completely exempt from the 15.3% SECA/FICA tax—saving over $5,800 to $9,000 annually even after accounting for $1,800–$2,500 in Gusto/ADP payroll and Form 1120-S CPA preparation costs."
        }
      ],
      citations: [
        "Internal Revenue Service (IRS) — Publication 334 (Tax Guide for Small Business) & Schedule SE (Form 1040) Instructions.",
        "Internal Revenue Code (IRC) Section 1401 (SECA Tax Rates) & Section 199A (Qualified Business Income Deduction).",
        "U.S. Bureau of Labor Statistics (BLS) — Employer Costs for Employee Compensation (ECEC) National Benchmark."
      ]
    },
    tr: {
      category: 'B2B ve Serbest Meslek Vergisi',
      title: "ABD W-2 Bordrolu Çalışan vs. 1099 Bağımsız Yüklenici Vergi Rehberi (2026): %15,3 SECA, QBI İndirimi ve Saatlik Ücret Hesabı",
      subtitle: "ABD şirketlerinden alınan W-2 maaşlı iş teklifi ile 1099-NEC / B2B bağımsız danışmanlık sözleşmesi arasındaki gerçek net gelir farkının; %15,3 SECA vergisi, %20 QBI indirimi, sağlık sigortası ve ücretsiz izin maliyetleriyle analizi.",
      summaryPoints: [
        "ABD'de 1099 bağımsız çalışanlar, net işletme kârının %92,35'i üzerinden hem işçi hem işveren payını kapsayan %15,3 SECA (Sosyal Güvenlik + Medicare) vergisini öder.",
        "Ödenen SECA vergisinin yarısı brüt gelirden düşülür ve uygun şahıs/LLC sahipleri IRC Bölüm 199A kapsamında net ticari kazancın %20'sini (QBI) federal gelir vergisinden indirebilir.",
        "Özel sağlık sigortası (7.000$–18.000$/yıl), 401(k) işveren katkısı ve 25–30 günlük ücretsiz izin kaybı eklendiğinde, 1099 sözleşmeli çalışanın W-2 maaşına denk net gelir için %32 ila %45 daha yüksek brüt fatura kesmesi gerekir.",
        "Yıllık net kârı 100.000$–120.000$ seviyesini aşan danışmanlar S-Corp (Form 2553) statüsü seçerek kâr payı dağıtımdan %15,3 SECA vergisi tasarrufu sağlayabilir."
      ],
      tableTitle: "2026 ABD W-2 Maaşlı Çalışan vs. 1099 Sözleşmeli (Contractor) Finansal Eşdeğerlik Tablosu",
      tableHeaders: ["Maliyet / Vergi Kalemi", "$120,000 W-2 Çalışan", "$120,000 1099 (Farksız)", "$162,000 1099 (+%35 Primli)", "$162,000 S-Corp ($85k Maaş + $77k Kâr Payı)"],
      tableRows: [
        ["Yıllık Brüt Sözleşme Tutarı", "$120,000", "$120,000", "$162,000", "$162,000"],
        ["FICA / Serbest Meslek Vergisi (SECA)", "-$9,180 (%7.65)", "-$16,955 (%15.3 × %92.35)", "-$21,820", "-$13,005 ($85k Maaş üzerinden %15.3)"],
        ["Sağlık Sigortası + İşletme Gideri", "$0 (İşveren Karşılar)", "-$11,400 (Kendi Cebinden)", "-$11,400", "-$13,200 (S-Corp Muhasebe Dahil)"],
        ["Tahmini Federal Gelir Vergisi", "-$17,900", "-$12,450 (SE ve QBI Sonrası)", "-$20,180 (SE ve QBI Sonrası)", "-$21,350"],
        ["Yıllık İzin ve Resmi Tatiller", "25 Gün Ücretli İzin", "0 Gün (Gelir Kaybı)", "25 Gün Fiyata Dahil Edildi", "25 Gün Fiyata Dahil Edildi"],
        ["Gerçek Harcanabilir Net Gelir", "$92,920", "$79,195 (-$13,725 Kayıp)", "$108,600 (W-2 Eşdeğeri)", "$114,445 (+$5,845 S-Corp Avantajı)"]
      ],
      sections: [
        {
          heading: "1. FICA vs. SECA Vergi Mekanizması (IRC Bölüm 3101 ve 1401)",
          body: "ABD'de geleneksel bir W-2 bordrolu çalışan olduğunuzda, FICA sosyal güvenlik vergileri işveren ile çalışan arasında yarı yarıya paylaşılır: Çalışan maaşından %6,2 Sosyal Güvenlik (176.100$ yıllık tavan matraha kadar) ve %1,45 Medicare kesilirken, işveren de kendi bütçesinden eşdeğer %7,65 öder.\n\nBağımsız bir 1099-NEC yüklenici (contractor) olduğunuzda ise IRS sizi hem işveren hem çalışan olarak kabul eder. Form 1040 Schedule SE ile net işletme kârınızın %92,35'i üzerinden %15,3 (%12,4 Sosyal Güvenlik + %2,9 Medicare) SECA vergisi ödersiniz. ABD dışındaki (örneğin Türkiye veya Avrupa'daki) bir yazılımcı ABD şirketine hizmet verdiğinde ise W-8BEN formu imzalayarak ABD'de %0 stopaj ile brüt faturasını tahsil eder ve vergisini kendi ikamet ettiği ülkede öder."
        },
        {
          heading: "2. 1099 Çalışanlara Özel Vergi Kalkanları: QBI (%20 İndirim) ve Solo 401(k)",
          body: "1099 statüsünde çalışan ABD mukimleri, W-2 çalışanların kullanamadığı güçlü vergi indirimlerine sahiptir:\n\n• SECA Vergisinin Yarısının İndirimi: Ödediğiniz %15,3 serbest meslek vergisinin yarısı doğrudan brüt gelirinizden (AGI öncesi) düşülür.\n• IRC Bölüm 199A (QBI) %20 Nitelikli Ticari Kazanç İndirimi: Şahıs işletmeleri, tek ortaklı LLC'ler ve S-Corp sahipleri net ticari kârlarının %20'sini federal gelir vergisi matrahından muaf tutabilir.\n• Solo 401(k) Emeklilik Kalkanı: Hem çalışan (23.500$) hem de işveren (%20 kâr paylaşımı) sıfatıyla yıllık toplam 70.000$'a kadar kazancı vergi öncesi emeklilik hesabına aktararak vergi matrahını düşürebilirler."
        },
        {
          heading: "3. W-2 Yan Hak Paketinin Fiyatlandırılması: İzinler, Sağlık Sigortası ve 401(k)",
          body: "ABD Çalışma İstatistikleri Bürosu (BLS) verilerine göre bir mühendisin brüt maaşı işverenin toplam maliyetinin yalnızca %70'idir; kalan %30 yan haklardan oluşur. W-2 maaş teklifini 1099 saatlik ücretine çevirirken şu 3 kalemi mutlaka fiyata eklemelisiniz: (1) Yılda 15–20 gün izin + 10 resmi tatil + 5 hastalık günü olmak üzere toplam 6 haftalık (240 saat) fatura kesilemeyen süre, (2) İşverenin karşıladığı yıllık 7.000$–16.000$ sağlık sigortası primi ve (3) %3–%5 işveren 401(k) katkısı."
        },
        {
          heading: "4. Ne Zaman LLC Üzerinden S-Corporation (Form 2553) Seçilmeli?",
          body: "Yıllık net 1099 kârınız düzenli olarak 100.000$–120.000$ sınırını aştığında, LLC şirketinizi IRS Form 2553 ile S-Corporation vergi statüsüne geçirmek önemli bir vergi avantajı sağlar. Örneğin 162.000$ net kârın 85.000$'ını kendinize 'makul W-2 yönetici maaşı' olarak ödeyip sadece bu kısım üzerinden %15,3 FICA vergisi ödersiniz; kalan 77.000$'ı ise SECA vergisinden tamamen muaf ortak kâr payı (distribution) olarak çekerek yılda net 5.800$–9.000$ vergi tasarrufu elde edersiniz."
        }
      ],
      citations: [
        "Internal Revenue Service (IRS) — Publication 334 & Schedule SE (Form 1040) Resmi Rehberi.",
        "Internal Revenue Code (IRC) Bölüm 1401 (SECA) ve Bölüm 199A (QBI %20 Kazanç İndirimi).",
        "U.S. Bureau of Labor Statistics (BLS) — Employer Costs for Employee Compensation Raporu."
      ]
    }
  },
  {
    slug: 'uk-ir35-inside-vs-outside-contractor-guide',
    relatedTool: '/contractor',
    relatedToolName: {
      en: 'UK Inside vs Outside IR35 & Contractor Calculator',
      tr: 'İngiltere IR35 (Inside vs Outside) ve Contractor Hesaplayıcı'
    },
    publishedAt: '2026-09-20',
    updatedAt: '2026-10-30',
    readTime: '10 min',
    en: {
      category: 'B2B & Freelance Tax',
      title: "UK Off-Payroll Working (IR35) Guide 2026: Inside vs. Outside IR35 Ltd Company Dividends, Corporation Tax & Day Rate Math",
      subtitle: "A practical technical breakdown of Chapter 10 ITEPA 2003 for UK contractors: how Umbrella Employer NI erodes Inside IR35 day rates, optimal £12,570 salary + dividend extraction Outside IR35, and how much more you must charge Inside IR35.",
      summaryPoints: [
        "Under UK Off-Payroll rules (Chapter 10 ITEPA 2003), medium and large private-sector clients must issue a Status Determination Statement (SDS) before your contract begins.",
        "An 'Outside IR35' contractor operating through a Personal Service Company (Ltd) pays Corporation Tax (19% small profits rate up to £50k, marginal relief up to £250k) and extracts profits via a £12,570 salary plus low-tax dividends (8.75% basic / 33.75% higher).",
        "An 'Inside IR35' contractor working via an Umbrella company suffers a double hit: the assignment rate must first fund Employer Class 1 National Insurance (15%) and the 0.5% Apprenticeship Levy before personal PAYE tax (20%–45%) and Employee NI (8%/2%) are deducted.",
        "To match the net take-home pay of a £550/day Outside IR35 contract, you must negotiate roughly £685–£710/day (+25% to +29%) on an Inside IR35 Umbrella contract."
      ],
      tableTitle: "2026 UK Contractor Net Take-Home Comparison (220 Billable Days / Year)",
      tableHeaders: ["Contract Structure & Day Rate", "Annual Gross Billing", "Employer NI & Umbrella / Corp Tax", "Personal PAYE / Dividend Tax", "Annual Net Take-Home", "Effective Retention %"],
      tableRows: [
        ["£500/day — Outside IR35 (Ltd Co)", "£110,000", "£21,150 (Corp Tax ~21.7%)", "£13,210 (Dividend Tax)", "£75,640 (£6,303/mo)", "68.8%"],
        ["£500/day — Inside IR35 (Umbrella)", "£110,000", "£13,180 (Employer NI + Levy)", "£29,420 (PAYE + Emp NI)", "£67,400 (£5,617/mo)", "61.3% (-£8,240/yr)"],
        ["£650/day — Outside IR35 (Ltd Co)", "£143,000", "£30,450 (Corp Tax ~23.3%)", "£23,190 (Dividend Tax)", "£89,360 (£7,447/mo)", "62.5%"],
        ["£650/day — Inside IR35 (Umbrella)", "£143,000", "£17,490 (Employer NI + Levy)", "£46,110 (PAYE + Emp NI)", "£79,400 (£6,617/mo)", "55.5% (-£9,960/yr)"]
      ],
      sections: [
        {
          heading: "1. What Is IR35 and How Does HMRC Determine Employment Status?",
          body: "Introduced in 2000 and reformed under Chapter 8 and Chapter 10 of the Income Tax (Earnings and Pensions) Act 2003 (ITEPA), the intermediaries legislation—known as IR35—prevents 'disguised employment', where an individual works identically to a permanent employee but bills through a Personal Service Company (PSC / Limited Company) to avoid Employee and Employer National Insurance contributions.\n\nHMRC and UK Tax Tribunals evaluate IR35 status around three core common-law pillars established in Ready Mixed Concrete (South East) Ltd v Minister of Pensions (1968):\n1. Right of Substitution: Does your Ltd company have a genuine, unfettered right to provide a suitably qualified substitute contractor at its own expense, and would the client accept that substitute in practice?\n2. Control (Supervision, Direction, and Control): Does the client dictate how, when, and where the work is performed, or are you engaged to deliver specific project milestones autonomously?\n3. Mutuality of Obligation (MoO): Is the client obliged to offer continuous work beyond the fixed project scope, and are you obliged to accept it?"
        },
        {
          heading: "2. Why Inside IR35 Umbrella Deductions Feel Like a 50%+ Tax Rate",
          body: "Under UK employment law, an employer is legally prohibited from deducting Employer Class 1 National Insurance (15% above the secondary threshold) from an employee's gross salary. Consequently, when agencies advertise an 'Inside IR35 Umbrella Assignment Rate' of £600/day, that £600 is NOT your gross PAYE salary—it is the total 'employment cost' paid by the agency to the Umbrella company.\n\nFrom your £600/day (£132,000/year over 220 days), the Umbrella company first deducts its weekly margin (~£25/week), the 0.5% Apprenticeship Levy, and Employer Class 1 National Insurance (15%). Only the remaining ~£115,000 becomes your gross taxable PAYE salary, which is then taxed at 20% Basic Rate, 40% Higher Rate (plus the 60% personal allowance taper trap between £100,000 and £125,140!), and 45% Additional Rate, alongside Employee Class 1 NI (8% / 2%)."
        },
        {
          heading: "3. Outside IR35 Tax Strategy: Salary, Dividends, and Employer Pension Contributions",
          body: "When your contract is assessed as Outside IR35 (or when you contract for an overseas client with no UK presence, in which case IR35 remains under Chapter 8 self-assessment), your Limited Company receives the full gross invoice amount. Most solo directors optimize extraction across three tiers:\n\n• Tier 1 — Director Salary (£12,570/yr): Paid up to the Personal Allowance threshold, incurring £0 income tax and £0 employee NI while qualifying as a corporation-tax-deductible expense and earning a qualifying year toward the UK State Pension.\n• Tier 2 — Employer SIPP Pension Contributions (Up to £60,000/yr Annual Allowance): Paid directly from the Limited Company into your Self-Invested Personal Pension (SIPP). This reduces company profit before 19%–25% Corporation Tax and avoids both Employer NI and personal dividend tax.\n• Tier 3 — Shareholder Dividends (Up to £50,270 total income): After paying Corporation Tax (19% up to £50k profit, tapering at 26.5% marginal rate between £50k and £250k), you distribute dividends up to the Higher Rate threshold at just 8.75% dividend tax (after the £500 dividend allowance), leaving excess retained earnings inside the company for future years or Business Asset Disposal Relief."
        }
      ],
      citations: [
        "HM Revenue & Customs (HMRC) — Employment Status Manual (ESM10000): Off-Payroll Working Rules (Chapter 10, Part 2 ITEPA 2003).",
        "Finance Act 2023 & HMRC Corporation Tax Rates — Small Profits Rate (19% up to £50,000) and Marginal Relief Fraction (3/200)."
      ]
    },
    tr: {
      category: 'B2B ve Serbest Meslek Vergisi',
      title: "İngiltere IR35 (Inside vs. Outside IR35) Rehberi 2026: Limited Şirket Temettü Vergisi, Umbrella Kesintileri ve Günlük Ücret Hesabı",
      subtitle: "İngiltere'ye veya İngiliz şirketlerine sözleşmeli çalışanlar için ITEPA 2003 Bölüm 10 (IR35) kurallarının analizi: Inside IR35 Umbrella kesintileri, Outside IR35 £12.570 maaş + temettü optimizasyonu ve Türkiye'den İngiltere'ye fatura kesenlerin durumu.",
      summaryPoints: [
        "İngiltere'de orta ve büyük ölçekli şirketler sözleşme başlamadan önce çalışanın IR35 statüsünü belirleyen resmi bir durum belgesi (SDS) yayınlamak zorundadır.",
        "'Outside IR35' statüsünde kendi Limited (Ltd) şirketi üzerinden çalışan bir danışman %19–%25 Kurumlar Vergisi öder ve kârı £12.570 yönetici maaşı + düşük vergili temettü (%8,75 temel / %33,75 üst dilim) ile çeker.",
        "'Inside IR35' (Umbrella) sözleşmelerinde ise günlük ücretten önce %15 İşveren Ulusal Sigorta (Employer NI) primi ve %0,5 Çıraklık Vergisi düşülür, kalan tutar üzerinden %20–%45 PAYE gelir vergisi kesilir.",
        "Önemli İstisna: Türkiye veya İspanya gibi İngiltere dışında ikamet eden ve Birleşik Krallık'ta vergi mükellefi olmayan (non-UK resident) uzaktan çalışanlar İngiltere IR35 kapsamı dışındadır!"
      ],
      tableTitle: "2026 İngiltere Sözleşmeli Çalışan (Contractor) Net Kazanç Karşılaştırması (Yılda 220 Gün)",
      tableHeaders: ["Sözleşme Yapısı ve Günlük Ücret", "Yıllık Brüt Ciro", "İşveren NI / Kurumlar Vergisi", "Bireysel PAYE / Temettü Vergisi", "Yıllık Net Ele Geçen", "Net Koruma Oranı"],
      tableRows: [
        ["£500/gün — Outside IR35 (Ltd Şti)", "£110,000", "£21,150 (Kurumlar V. ~%21.7)", "£13,210 (Temettü Vergisi)", "£75,640 (£6,303/ay)", "%68.8"],
        ["£500/gün — Inside IR35 (Umbrella)", "£110,000", "£13,180 (İşveren NI + Levy)", "£29,420 (PAYE + Çalışan NI)", "£67,400 (£5,617/ay)", "%61.3 (-£8,240/yıl)"],
        ["£650/gün — Outside IR35 (Ltd Şti)", "£143,000", "£30,450 (Kurumlar V. ~%23.3)", "£23,190 (Temettü Vergisi)", "£89,360 (£7,447/ay)", "%62.5"],
        ["£650/gün — Inside IR35 (Umbrella)", "£143,000", "£17,490 (İşveren NI + Levy)", "£46,110 (PAYE + Çalışan NI)", "£79,400 (£6,617/ay)", "%55.5 (-£9,960/yıl)"]
      ],
      sections: [
        {
          heading: "1. IR35 Yasası Nedir ve HMRC Sözleşmeleri Nasıl Sınıflandırır?",
          body: "İngiltere'de ITEPA 2003 Bölüm 8 ve Bölüm 10 kapsamında uygulanan IR35 (Off-Payroll Working) mevzuatı, fiilen tam zamanlı bir personel gibi çalıştığı halde daha az vergi ve sigorta primi ödemek için kendi Limited Şirketi (Personal Service Company - PSC) üzerinden fatura kesen 'örtülü çalışanları' tespit etmek için tasarlanmıştır.\n\nHMRC bir sözleşmenin 'Outside IR35' (gerçek B2B iş) mi yoksa 'Inside IR35' (maaşlı gibi vergilendirilen) mi olduğuna karar verirken 3 temel kritere bakar:\n1. İkame Hakkı (Right of Substitution): Şirketinizin işi yapmak üzere sizin yerinize eşdeğer nitelikte başka bir uzmanı gönderme hakkı var mı?\n2. Kontrol (Control): Müşteri sadece neyin teslim edileceğini mi belirliyor, yoksa işi nasıl, nerede ve hangi saatlerde yapacağınızı doğrudan yönetiyor mu?\n3. Karşılıklı Yükümlülük (Mutuality of Obligation): Proje bittiğinde müşterinin sürekli iş verme, sizin de her verilen görevi kabul etme zorunluluğunuz var mı?"
        },
        {
          heading: "2. Türkiye veya AB'den İngiliz Şirketine Uzaktan Fatura Kesenler IR35'e Tabi midir?",
          body: "Londra merkezli teknoloji şirketleriyle çalışan Türk veya Avrupalı yazılımcıların en çok sorduğu soru budur: Eğer fiziksel olarak Türkiye'de (veya İngiltere dışında başka bir ülkede) ikamet ediyorsanız, çalışmalarınızı İngiltere toprakları dışında yürütüyorsanız ve Birleşik Krallık'ta gelir vergisi/NI mükellefiyetiniz yoksa, HMRC'nin resmi kılavuzuna (ESM10025) göre **Off-Payroll (IR35) kuralları size uygulanmaz**. İngiliz şirketine Türkiye'deki şirketinizden %0 KDV (Outside Scope of UK VAT) ile doğrudan B2B hizmet ihracatı faturası kesebilirsiniz."
        },
        {
          heading: "3. İngiltere'de Yaşayanlar İçin Outside IR35 Maaş + Temettü + SIPP Optimizasyonu",
          body: "İngiltere mukimi olup Outside IR35 sözleşmeyle çalışan bir Limited şirket ortağı kazancını üç kademede optimize eder: (1) Yıllık £12.570 yönetici maaşı (0£ gelir vergisi ile emeklilik prim gününü doldurur ve kurumlar vergisi matrahından düşülür), (2) Şirketten doğrudan bireysel emeklilik hesabına (SIPP) yıllık £60.000'a kadar vergisiz işveren katkısı (kurumlar vergisini %19–%25 oranında doğrudan azaltır) ve (3) £50.270 üst dilim sınırına kadar sadece %8,75 vergiyle çekilen temettü (dividend)."
        }
      ],
      citations: [
        "HM Revenue & Customs (HMRC) — Employment Status Manual (ESM10000 & ESM10025: Overseas Workers and IR35).",
        "UK Finance Act 2023 — Küçük Şirket Kurumlar Vergisi (%19) ve Marjinal İndirim Kuralları."
      ]
    }
  },
  {
    slug: 'turkey-software-service-export-tax-exemption-gvk-89-13',
    relatedTool: '/vat',
    relatedToolName: {
      en: 'Global B2B Invoice VAT & Export Exemption Calculator',
      tr: 'Yurt Dışı B2B Fatura, %0 KDV ve Hizmet İhracatı Hesaplayıcı'
    },
    publishedAt: '2026-09-22',
    updatedAt: '2026-10-30',
    readTime: '12 min',
    en: {
      category: 'Cross-Border Tax & VAT',
      title: "Turkey's 80% Remote Software & Engineering Export Tax Exemption (GVK Art. 89/13) & 0% VAT Complete Guide (2026)",
      subtitle: "How software engineers, UI/UX designers, data scientists, and architects residing in Turkey legally reduce their effective income tax rate to 4%–7% when contracting for US, UK, and European companies.",
      summaryPoints: [
        "Under Article 89/13 of the Turkish Income Tax Law (GVK, amended by Law No. 7491), 80% of net profits earned from software, engineering, design, and data analysis services exported to non-resident foreign clients are exempt from income tax.",
        "Combined with the 0% VAT Service Export Exemption (Article 11/1-a of VAT Law No. 3065), remote contractors in Turkey retain 90%+ of their gross foreign USD/EUR billing—outperforming even Spain's Beckham Law and Portugal's IFICI.",
        "To claim the 80% deduction, 100% of the invoice proceeds must be repatriated in foreign currency (USD, EUR, GBP) to a Turkish bank account before the annual income tax filing deadline (March 31 of the following year).",
        "Sole proprietors (Şahıs Şirketi) are generally more tax-efficient than Limited Companies (Ltd. Şti.) under GVK 89/13 because withdrawing profits from a Limited Company triggers an additional 10%–15% dividend withholding tax."
      ],
      tableTitle: "2026 Turkey GVK Art. 89/13 (80% Export Exemption) Worked Tax Calculation (Sole Proprietorship / Şahıs Şirketi)",
      tableHeaders: ["Annual Foreign Billing (USD)", "Deductible Business Expenses", "Net Profit Before Exemption", "80% GVK 89/13 Exemption", "Taxable Base (20% Remainder)", "Estimated Income Tax", "Effective Tax Rate on Gross"],
      tableRows: [
        ["$60,000 ($5,000/mo)", "$6,000", "$54,000", "-$43,200 (Exempt)", "$10,800", "~$1,950", "3.25%"],
        ["$100,000 ($8,333/mo)", "$8,000", "$92,000", "-$73,600 (Exempt)", "$18,400", "~$3,850", "3.85%"],
        ["$150,000 ($12,500/mo)", "$10,000", "$140,000", "-$112,000 (Exempt)", "$28,000", "~$6,700", "4.47%"],
        ["$250,000 ($20,833/mo)", "$15,000", "$235,000", "-$188,000 (Exempt)", "$47,000", "~$13,100", "5.24%"]
      ],
      sections: [
        {
          heading: "1. Statutory Scope of Article 89/13 GVK (80% Earnings Deduction)",
          body: "Article 89/13 of the Turkish Income Tax Law No. 193 (Gelir Vergisi Kanunu) and Article 10/1-ğ of the Corporate Tax Law No. 5520 (Kurumlar Vergisi Kanunu) provide one of the world's most generous tax incentives for remote knowledge workers. Following the enactment of Law No. 7491, the deduction rate was raised from 50% to 80%. Specifically, taxpayers residing in Turkey who provide architecture, engineering, design, software development, medical reporting, bookkeeping, data analysis, call center, or specified educational/health services exclusively to non-resident foreign entities (or individuals residing abroad) may deduct 80% of the net profit derived from these activities directly from their annual tax return.\n\nBecause only the remaining 20% of net profit enters Turkey's progressive income tax brackets (15%, 20%, 27%, 35%, and 40%), even a senior software architect billing $150,000 USD per year sees 80% of their net profit completely sheltered—resulting in an effective income tax rate between 3.5% and 5.5%."
        },
        {
          heading: "2. The Four Mandatory Compliance Conditions (Including Currency Repatriation)",
          body: "Turkish tax auditors (Gelir İdaresi Başkanlığı - GİB) strictly verify four statutory prerequisites before allowing the 80% deduction on your annual return:\n\n1. Qualifying NACE Activity Code: Your company's tax registration (Vergi Levhası) must carry an eligible NACE code—such as 62.01.01 (Computer programming activities), 62.02.01 (Computer consultancy), 71.12 (Engineering activities), or 74.10 (Specialized design activities)—and your invoice description must explicitly reflect software, engineering, or design deliverables.\n2. Foreign Non-Resident Client: The invoice must be issued to a corporate entity or individual whose legal seat and residence are outside Turkey, with no branch or permanent establishment in Turkey receiving the service.\n3. Exclusive Foreign Utilization: The deliverables must be enjoyed exclusively outside Turkey.\n4. 100% Foreign Currency Transfer to a Turkish Bank: Under Law No. 7491, the entire invoice amount must be transferred in foreign currency to a bank in Turkey by the filing date of the annual income tax return (March 31 of the following calendar year, or April 30 for Corporate Tax)."
        },
        {
          heading: "3. 0% VAT Service Export Exemption (Article 11/1-a of Law No. 3065)",
          body: "In parallel with the 80% income tax exemption, software and engineering services exported abroad qualify for a 0% VAT Full Exemption (Hizmet İhracatı İstisnası) under Article 11/1-a and Article 12/2 of VAT Law No. 3065. When issuing your e-Arşiv or e-Fatura in USD or EUR, you select exception code '302 - Hizmet İhracatı' and charge 0% VAT. Because this is a 'Full Exemption with Right of Deduction' (Tam İstisna), all 20% domestic VAT you pay on business expenses in Turkey (laptops, monitors, office rent, coworking, CPA fees) accumulates as deductible input VAT and can even be refunded or offset against your tax/SGK liabilities."
        },
        {
          heading: "4. Sole Proprietorship (Şahıs Şirketi) vs. Limited Company (Ltd. Şti.)",
          body: "For solo remote contractors earning under $250,000/year, a Sole Proprietorship (Şahıs Şirketi) is vastly superior to a Limited Company (Ltd. Şti.). In a Sole Proprietorship, after paying your ~4%–5% effective income tax (thanks to the 80% deduction), 100% of the remaining cash in your bank account belongs to you personally with zero further tax. In a Limited Company, although the corporate tax rate (25% reduced by 80% = 5% effective corporate tax) is similar, moving the money from the company bank account to your personal bank account requires a formal dividend distribution subject to dividend withholding tax (stopaj) plus personal dividend declaration above statutory thresholds."
        }
      ],
      citations: [
        "Gelir İdaresi Başkanlığı (GİB) — 193 Sayılı Gelir Vergisi Kanunu Madde 89/13 (7491 Sayılı Kanun değişikliği ile %80 kazanç indirimi).",
        "3065 Sayılı Katma Değer Vergisi Kanunu Madde 11/1-a ve Madde 12/2 — Hizmet İhracatı KDV İstisnası Uygulama Genel Tebliği."
      ]
    },
    tr: {
      category: 'Sınır Ötesi Vergi ve KDV',
      title: "2026 Türkiye %80 Yazılım, Mühendislik ve Tasarım Hizmet İhracatı Vergi İstisnası (GVK Md. 89/13) ve %0 KDV Tam Rehberi",
      subtitle: "Türkiye'de yaşayıp ABD, İngiltere ve Avrupa şirketlerine uzaktan (remote) çalışan yazılımcı, tasarımcı, veri analisti ve mühendislerin efektif gelir vergisini yasal olarak %4–%6 bandına düşürme kılavuzu.",
      summaryPoints: [
        "193 Sayılı Gelir Vergisi Kanunu Madde 89/13 (7491 sayılı Kanun değişikliği) uyarınca, yurt dışındaki müşterilere verilen yazılım, mühendislik, tasarım ve veri analizi hizmetlerinden elde edilen net kazancın %80'i gelir vergisinden istisnadır.",
        "3065 Sayılı KDV Kanunu Madde 11/1-a kapsamındaki %0 KDV Hizmet İhracatı istisnası ile birleştiğinde, Türkiye'deki bir uzaktan çalışan brüt döviz gelirinin %90'ından fazlasını net olarak koruyabilmektedir.",
        "%80 kazanç indiriminden yararlanabilmek için fatura bedelinin tamamının yıllık gelir vergisi beyannamesinin verileceği tarihe (ertesi yılın 31 Mart gününe) kadar Türkiye'deki banka hesabına döviz olarak getirilmesi zorunludur.",
        "Şahıs Şirketi yapısı, kâr çekiminde ek temettü stopajı olmaması ve Genç Girişimci teşvikiyle birleşebilmesi nedeniyle solo çalışanlar için Limited Şirketten çok daha avantajlıdır."
      ],
      tableTitle: "2026 Türkiye GVK Madde 89/13 (%80 Kazanç İstisnası) Örnek Vergi Hesaplama Tablosu (Şahıs Şirketi)",
      tableHeaders: ["Yıllık Yurt Dışı Ciro (USD)", "İndirilebilir İş Giderleri", "İstisna Öncesi Net Kâr", "%80 GVK 89/13 İstisnası", "Vergiye Tabi Matrah (%20)", "Tahmini Yıllık Gelir Vergisi", "Brüt Ciroya Göre Efektif Vergi"],
      tableRows: [
        ["$60,000 ($5,000/ay)", "$6,000", "$54,000", "-$43,200 (Vergiden Muaf)", "$10,800", "~$1,950", "%3.25"],
        ["$100,000 ($8,333/ay)", "$8,000", "$92,000", "-$73,600 (Vergiden Muaf)", "$18,400", "~$3,850", "%3.85"],
        ["$150,000 ($12,500/ay)", "$10,000", "$140,000", "-$112,000 (Vergiden Muaf)", "$28,000", "~$6,700", "%4.47"],
        ["$250,000 ($20,833/ay)", "$15,000", "$235,000", "-$188,000 (Vergiden Muaf)", "$47,000", "~$13,100", "%5.24"]
      ],
      sections: [
        {
          heading: "1. GVK Madde 89/13 (%80 Kazanç İndirimi) Kapsamına Hangi Meslekler Girer?",
          body: "193 sayılı Gelir Vergisi Kanununun 89. maddesinin birinci fıkrasının 13 numaralı bendi (ve Kurumlar Vergisi Kanunu Madde 10/1-ğ) kapsamında; Türkiye'de yerleşik mükelleflerin Türkiye dışında yerleşik kişi veya kurumlara sunduğu **mimarlık, mühendislik, tasarım, yazılım, tıbbi raporlama, muhasebe kaydı tutma, çağrı merkezi ve veri saklama/veri analizi** hizmetlerinden elde ettikleri kazançların **%80'i** beyanname üzerinden indirilir.\n\nBu muazzam teşvik sayesinde yıllık net kârınızın yalnızca %20'si gelir vergisi dilimlerine (%15–%40) girer. Örneğin yılda 100.000$ ciro ve 92.000$ net kâr elde eden bir yazılım mühendisi, 73.600$'lık kısmı vergiden tamamen düşer ve sadece kalan 18.400$ üzerinden vergi ödeyerek toplam brüt gelirinin %95'inden fazlasını vergi sonrası net olarak elinde tutar."
        },
        {
          heading: "2. Vergi İncelemesinde Denetlenen 4 Zorunlu Şart (Döviz Getirme Şartı Dahil)",
          body: "Gelir İdaresi Başkanlığı (GİB) %80 kazanç indirimi ve %0 KDV istisnasında şu dört şartın eksiksiz sağlanmasını arar:\n\n1. Doğru NACE Kodu ve Fatura Açıklaması: Vergi levhanızdaki ana faaliyet kodunun (NACE) kapsama giren kodlardan biri olması (örneğin 62.01.01 Bilgisayar programlama faaliyetleri, 71.12 Mühendislik faaliyetleri veya 74.10 Uzmanlaşmış tasarım faaliyetleri) ve e-Arşiv faturanızdaki hizmet açıklamasının ('Software Development Services', 'UI/UX Design Services' vb.) bu faaliyetle birebir örtüşmesi gerekir. (Not: Dijital pazarlama, SEO danışmanlığı veya genel yönetim danışmanlığı %80 GVK 89/13 kapsamına girmez, sadece %0 KDV istisnasına girer!)\n2. Müşterinin Yurt Dışında Yerleşik Olması: Fatura kesilen şirket veya kişinin kanuni ve iş merkezinin Türkiye dışında bulunması.\n3. Hizmetten Münhasıran Yurt Dışında Yararlanılması: Geliştirilen yazılımın veya tasarımın Türkiye pazarında değil, yurt dışındaki faaliyetlerde kullanılması.\n4. Kazancın Türkiye'deki Banka Hesabına Döviz Olarak Getirilmesi: 7491 sayılı Kanun uyarınca, fatura tutarının tamamının ilgili yıla ait yıllık gelir vergisi beyannamesinin verilmesi gereken tarihe (takip eden yılın Mart ayı sonuna) kadar Türkiye'deki bir bankaya döviz olarak transfer edilmiş olması şarttır."
        },
        {
          heading: "3. Genç Girişimci İstisnası (GVK Mükerrer Md. 20) ve Bağ-Kur Desteği ile Birleştirme",
          body: "29 yaşını doldurmamış ve ilk defa gelir vergisi mükellefi (şahıs şirketi) olan yazılımcı ve tasarımcılar, hem 3 vergi yılı boyunca yıllık Genç Girişimci Kazanç İstisnasından hem de 1 yıl boyunca Hazine tarafından karşılanan Bağ-Kur prim desteğinden yararlanır. Üstelik Genç Girişimci istisna sınırını aşan kazanç kısmına da %80 GVK 89/13 indirimi uygulanmaya devam eder; ayrıca Bağ-Kur primlerinin tamamı da beyannamede vergi matrahından indirilebilir."
        },
        {
          heading: "4. Şahıs Şirketi mi Yoksa Limited Şirket mi Kurulmalı?",
          body: "Yurt dışına çalışan bireysel profesyoneller için Şahıs Şirketi neredeyse her gelir seviyesinde Limited Şirketten daha kârlıdır. Şahıs şirketinde %80 indirim sonrası kalan ~%4–%5 efektif gelir verginizi ödedikten sonra banka hesabınızdaki tüm döviz şahsi paranızdır. Limited şirkette ise %5 efektif kurumlar vergisini ödedikten sonra parayı şirket hesabından kendi şahsi hesabınıza çekmek istediğinizde temettü dağıtımı yapmanız ve ek kâr dağıtım stopajı + gelir vergisi ödemeniz gerekir."
        }
      ],
      citations: [
        "193 Sayılı Gelir Vergisi Kanunu Madde 89/13 ve المükerrer Madde 20 (Genç Girişimci İstisnası).",
        "7491 Sayılı Kanun — Hizmet ihracatı kazanç indirimi oranının %50'den %80'e çıkarılması ve döviz getirme şartı.",
        "3065 Sayılı KDV Kanunu Madde 11/1-a ve KDV Genel Uygulama Tebliği (Hizmet İhracatı İstisnası)."
      ]
    }
  },
  {
    slug: 'european-digital-nomad-visas-income-tax-comparison',
    relatedTool: '/nomad-visa',
    relatedToolName: {
      en: 'Digital Nomad Visa Eligibility & Income Checker',
      tr: 'Dijital Göçebe Vizesi Gelir Şartı ve Uygunluk Aracı'
    },
    publishedAt: '2026-09-25',
    updatedAt: '2026-10-30',
    readTime: '11 min',
    en: {
      category: 'Visas & Residency',
      title: "2026 European & Global Digital Nomad Visa Comparison: Spain, Portugal D8/IFICI, Italy Impatriati, Greece & UAE Income & Tax Rules",
      subtitle: "Compare minimum monthly income requirements, dependent family multipliers, Social Security Certificate of Coverage hurdles, and post-arrival expat tax regimes across 8 top remote-work residency programs.",
      summaryPoints: [
        "Spain's International Teleworking Visa pegs its minimum income at 200% of the national minimum wage (SMI = ~€2,760/month for a single applicant, plus 75% SMI for a spouse and 25% SMI per child) and grants a 3-year residence card when applied for inside Spain.",
        "Portugal's D8 Digital Nomad Visa requires 4× the Portuguese minimum wage (~€3,480/month) plus proof of €10,440+ in local bank savings, and leads to permanent residency/citizenship eligibility after 5 years.",
        "Croatia (18 months) and Costa Rica (up to 2 years) offer 0% local income tax on foreign remote work, whereas Spain, Portugal, Italy, and Greece make you a local tax resident once you exceed 183 days per calendar year.",
        "Understanding the distinction between W-2/PAYE employee applications (which face strict bilateral Social Security Certificate of Coverage checks) and B2B contractor applications is essential to avoid visa rejection."
      ],
      tableTitle: "2026 Official Digital Nomad Visa Minimum Income, Family Multipliers & Tax Comparison",
      tableHeaders: ["Country & Visa Type", "Single Monthly Min.", "Couple (With Spouse)", "Family of 4 (+2 Kids)", "Initial Duration", "Effective Local Tax After 183 Days"],
      tableRows: [
        ["🇪🇸 Spain (Ley 28/2022 Teletrabajo)", "€2,760 / mo", "€3,795 / mo", "€4,485 / mo", "3 Years (In-Country)", "24% Flat (Beckham) or Progressive Autónomo"],
        ["🇵🇹 Portugal (D8 Residency Visa)", "€3,480 / mo", "€5,220 / mo", "€7,308 / mo", "2 Years (+3 Yr Renewal)", "20% IFICI (Qualifying Roles) or Progressive IRS"],
        ["🇮🇹 Italy (Art. 27-quater Nomad Visa)", "€2,400 / mo", "€3,200 / mo", "€4,000 / mo", "1 Year (Renewable)", "~15%–22% Effective (50% Impatriati Exemption)"],
        ["🇬🇷 Greece (Law 4825/2021 Nomad Visa)", "€3,500 / mo (Net)", "€4,200 / mo (Net)", "€5,250 / mo (Net)", "2 Years", "50% Income Tax Discount under Art. 5G"],
        ["🇭🇷 Croatia (Temporary Digital Nomad Stay)", "€2,870 / mo", "€3,157 / mo", "€3,731 / mo", "18 Months", "0% Local Tax on Foreign Remote Income"],
        ["🇦🇪 UAE / Dubai (Virtual Work Residence)", "$3,500 / mo", "$3,500 / mo", "$3,500 / mo", "1 Year (Renewable)", "0% Personal Income Tax & 0% Capital Gains"]
      ],
      sections: [
        {
          heading: "1. Spain's International Teleworking Visa (UGE vs. Consulate Applications)",
          body: "Created under Law 28/2022, Spain's Digital Nomad Visa offers two distinct application routes: applying at a Spanish Consulate in your home country for a 1-year visa, or entering Spain legally (on a Schengen tourist visa or visa-free passport) and applying directly online to the Unidad de Grandes Empresas y Colectivos Estratégicos (UGE) in Madrid for a 3-year residence authorization. The UGE processes applications within 20 business days under positive administrative silence (silencio administrativo positivo).\n\nFinancial requirement: 200% of Spain's Salario Mínimo Interprofesional (SMI), plus 75% SMI for the first dependent family member and 25% SMI for each additional dependent. You must also prove that your foreign employer or B2B client companies have been operating continuously for at least 1 year and that your contract with them started at least 3 months prior to filing."
        },
        {
          heading: "2. Portugal's D8 Digital Nomad Visa vs. D7 Passive Income Visa",
          body: "Portugal strictly separates active remote workers (D8 Visa) from retirees and passive investors (D7 Visa). To qualify for the D8 Residency Visa, you must demonstrate average monthly remote work income over the last 3 months equal to at least four times the Portuguese minimum wage (~€3,480/month), alongside a twelve-month Portuguese lease agreement, a Portuguese NIF tax number, and a funded Portuguese bank account holding at least 12 months of minimum wage savings (~€10,440 for a single applicant, +50% for a spouse, +30% per child)."
        },
        {
          heading: "3. Italy's Digital Nomad Visa & the Reformed Impatriati Regime (50% Tax Exemption)",
          body: "Implemented via the interministerial decree under Article 27-quater of Italy's Consolidated Immigration Act, Italy's Digital Nomad Visa targets 'highly qualified' remote workers (holding a 3-year university degree or 3–5 years of documented professional experience) earning at least 3× the minimum level required for healthcare exemption (~€28,000/year or €2,400/month). Crucially, remote workers who transfer tax residency to Italy for at least 4 years can combine this visa with Italy's reformed Regime degli Impatriati (Legislative Decree 209/2023), which exempts 50% of income (or 60% for parents relocating with a minor child) up to €600,000 from Italian IRPEF income tax for 5 years."
        },
        {
          heading: "4. The Employee vs. B2B Contractor Social Security Trap",
          body: "Across Spain, Portugal, and Italy, applying as a salaried W-2 or PAYE employee requires proving how your Social Security contributions will be paid while living abroad. Because the US-Spain bilateral Social Security agreement does not easily cover voluntary remote work initiated by the employee, US W-2 applicants frequently cannot obtain a Certificate of Coverage from the Social Security Administration. Unless your foreign employer agrees to register a non-resident payroll account in Spain, converting your relationship to a B2B independent contractor agreement (and registering as an autónomo upon approval) is the standard compliance pathway."
        }
      ],
      citations: [
        "Ministerio de Inclusión, Seguridad Social y Migraciones (UGE Spain) — Instrucciones sobre Autorización de Residencia para Teletrabajadores de Carácter Internacional (Ley 14/2013 & Ley 28/2022).",
        "Agência para a Integração, Migrações e Asilo (AIMA Portugal) — Artigo 61.º-B da Lei n.º 23/2007 (Visto D8 para Nómadas Digitais).",
        "Gazzetta Ufficiale della Repubblica Italiana — Decreto Legislativo n. 209/2023 (Nuovo Regime Impatriati Art. 5)."
      ]
    },
    tr: {
      category: 'Vizeler ve Vergi Mukimliği',
      title: "2026 Avrupa ve Küresel Dijital Göçebe Vizeleri Karşılaştırması: İspanya, Portekiz D8, İtalya, Yunanistan ve Dubai Gelir & Vergi Kuralları",
      subtitle: "8 popüler uzaktan çalışma vizesinin aylık minimum gelir şartları, aile üyeleri için ek gelir çarpanları, SGK görevlendirme belgesi şartı ve 183 gün sonrası yerel vergi avantajlarının detaylı analizi.",
      summaryPoints: [
        "İspanya Dijital Göçebe Vizesi, İspanya asgari ücretinin %200'ü (~2.760 €/ay; eş için +%75, çocuk için +%25) gelir şartı arar ve İspanya içinden UGE üzerinden başvurulduğunda doğrudan 3 yıllık oturum kartı verir.",
        "Portekiz D8 Dijital Göçebe Vizesi, Portekiz asgari ücretinin 4 katı (~3.480 €/ay) aktif uzaktan gelir ve Portekiz banka hesabında en az 10.440 € birikim şartı arar; 5 yıl sonunda vatandaşlık başvurusu hakkı tanır.",
        "Hırvatistan (18 ay) ve Kosta Rika (2 yıl) yurt dışı uzaktan çalışma gelirlerinden %0 yerel gelir vergisi alırken; İspanya, Portekiz, İtalya ve Yunanistan'da yılda 183 günü aştığınızda vergi mukimi olursunuz.",
        "Yabancı şirketin bordrolu çalışanı olarak başvurmak ile B2B şahıs/limited şirket üzerinden fatura keserek başvurmak arasındaki SGK (A1 / ikili anlaşma) farkı vize onayını doğrudan belirler."
      ],
      tableTitle: "2026 Resmi Dijital Göçebe Vizeleri Aylık Gelir Şartları ve Vergi Rejimi Karşılaştırma Tablosu",
      tableHeaders: ["Ülke ve Vize Programı", "Tek Kişi Aylık Min.", "Evli Çift (Eş Dahil)", "4 Kişilik Aile (+2 Çocuk)", "İlk Oturum Süresi", "183 Gün Sonrası Yerel Vergi Rejimi"],
      tableRows: [
        ["🇪🇸 İspanya (Ley 28/2022 Teletrabajo)", "€2,760 / ay", "€3,795 / ay", "€4,485 / ay", "3 Yıl (İspanya İçinden)", "%24 Sabit (Beckham) veya Kademeli Autónomo"],
        ["🇵🇹 Portekiz (D8 Oturum Vizesi)", "€3,480 / ay", "€5,220 / ay", "€7,308 / ay", "2 Yıl (+3 Yıl Uzatma)", "%20 IFICI (Nitelikli Meslek) veya Kademeli IRS"],
        ["🇮🇹 İtalya (Md. 27-quater Göçebe Vizesi)", "€2,400 / ay", "€3,200 / ay", "€4,000 / ay", "1 Yıl (Her Yıl Uzatılır)", "~%15–%22 Efektif (%50 Impatriati İndirimi)"],
        ["🇬🇷 Yunanistan (Yasa 4825/2021 Vizesi)", "€3,500 / ay (Net)", "€4,200 / ay (Net)", "€5,250 / ay (Net)", "2 Yıl", "Madde 5G ile 7 Yıl %50 Vergi İndirimi"],
        ["🇭🇷 Hırvatistan (Geçici Göçebe İkameti)", "€2,870 / ay", "€3,157 / ay", "€3,731 / ay", "18 Ay", "Yurt Dışı Uzaktan Gelirde %0 Yerel Vergi"],
        ["🇦🇪 BAE / Dubai (Virtual Work Vizesi)", "$3,500 / ay", "$3,500 / ay", "$3,500 / ay", "1 Yıl (Yenilenebilir)", "%0 Gelir Vergisi ve %0 Sermaye Kazancı"]
      ],
      sections: [
        {
          heading: "1. İspanya Dijital Göçebe Vizesi: Konsolosluk vs. İspanya İçinden (UGE) Başvuru",
          body: "İspanya Startup Yasası (Ley 28/2022) ile yürürlüğe giren Uluslararası Uzaktan Çalışma Vizesine iki şekilde başvurulabilir: Türkiye'deki İspanya Konsolosluğundan 1 yıllık vize olarak veya geçerli bir Schengen vizesiyle İspanya'ya giriş yapıp Madrid'deki Büyük İşletmeler ve Stratejik Kolektifler Birimine (UGE) doğrudan online başvurarak 3 yıllık oturum kartı (TIE) alarak. UGE başvuruları 20 iş günü içinde sonuçlandırılır.\n\nGelir şartı İspanya asgari ücretinin (SMI) %200'üdür (~2.760 €/ay). Ayrıca hizmet verdiğiniz yabancı şirketin en az 1 yıldır faaliyette olduğunu, o şirketle sözleşmenizin en az 3 aydır devam ettiğini ve üniversite diplomasına veya alanında en az 3 yıllık mesleki deneyime sahip olduğunuzu belgelemeniz gerekir."
        },
        {
          heading: "2. Portekiz D8 Vizesi ve 5 Yılda AB Vatandaşlığı Yolu",
          body: "Portekiz D8 Dijital Göçebe Vizesi, son 3 ayda ortalama en az 4 Portekiz asgari ücreti (~3.480 €/ay) aktif uzaktan gelir elde edildiğinin kanıtlanmasını, Portekiz vergi numarası (NIF) alınmasını, Portekiz'de 12 aylık kira sözleşmesi yapılmasını ve Portekiz banka hesabında en az 12 aylık asgari ücret tutarında (~10.440 €) birikim gösterilmesini şart koşar. İlk etapta 2 yıllık oturum kartı verilir, ardından 3 yıl uzatılır ve 5. yılın sonunda A2 seviyesinde Portekizce belgesiyle kalıcı oturum veya AB vatandaşlığına başvurulabilir."
        },
        {
          heading: "3. İtalya Dijital Göçebe Vizesi ve %50–%60 Impatriati Vergi İndirimi",
          body: "İtalya Göçmenlik Kanunu Madde 27-quater kapsamında yüksek nitelikli uzaktan çalışanlara (lisans mezunu veya 3–5 yıl mesleki deneyimli) açılan İtalya Dijital Göçebe Vizesi, yıllık yaklaşık 28.000 € (aylık ~2.400 €) gelir şartıyla Avrupa'nın en erişilebilir eşiklerinden birini sunar. Üstelik İtalya'ya taşınıp vergi mukimi olanlar, 209/2023 sayılı Kararname ile güncellenen 'Regime degli Impatriati' kapsamında 5 yıl boyunca gelirlerinin %50'sini (reşit olmayan çocuğuyla taşınanlarda %60'ını) İtalyan gelir vergisi matrahından muaf tutabilir."
        },
        {
          heading: "4. Bordrolu Çalışan vs. B2B Şirket Sahibi Başvurusu (SGK ve Autónomo Farkı)",
          body: "Türkiye'den İspanya Dijital Göçebe Vizesine başvururken Türkiye ile İspanya arasında uzaktan çalışmayı kapsayan ikili bir sosyal güvenlik görevlendirme anlaşması bulunmadığından, yabancı bir şirketin bordrolu çalışanı olarak başvurmak çoğu zaman SGK engeline takılır. Bu nedenle başvuru sahiplerinin büyük çoğunluğu müşterileriyle B2B hizmet sözleşmesi (freelancer/şirket faturası) imzalayarak başvurur ve vize onaylandığında İspanya'da serbest çalışan (Autónomo / RETA) kaydı açacağına dair taahhütname sunar."
        }
      ],
      citations: [
        "İspanya Göç Bakanlığı (UGE) — Ley 14/2013 ve Ley 28/2022 Uluslararası Uzaktan Çalışan Oturum İzni Kılavuzu.",
        "Portekiz AIMA — Lei n.º 23/2007 Madde 61-B (D8 Dijital Göçebe Vizesi Resmi Şartları).",
        "İtalya Resmi Gazetesi — Decreto Legislativo n. 209/2023 (Yeni Impatriati %50/%60 Vergi Muafiyeti)."
      ]
    }
  },
  {
    slug: 'eor-vs-local-entity-global-hiring-cost-analysis',
    relatedTool: '/eor-cost',
    relatedToolName: {
      en: 'EOR Cost vs. Local Subsidiary Breakeven Calculator',
      tr: 'EOR (Deel/Remote) vs. Yerel Şirket Maliyet Hesaplayıcı'
    },
    publishedAt: '2026-09-28',
    updatedAt: '2026-10-30',
    readTime: '10 min',
    en: {
      category: 'Global Hiring & EOR',
      title: "Employer of Record (EOR) vs. Local Subsidiary Entity: Complete Cost-Benefit, Permanent Establishment & Breakeven Analysis",
      subtitle: "When should an expanding startup graduate from an Employer of Record (Deel, Remote, Oyster) to incorporating its own local GmbH, S.L., or Ltd? A CFO-level TCO breakdown of statutory employer burdens, FX markups, and headcount thresholds.",
      summaryPoints: [
        "Statutory employer payroll burdens (ranging from 7.65% FICA in the US and 15% NI in the UK to 31.5% in Spain and 45% in France) apply identically under both an EOR and a direct local subsidiary.",
        "At $499–$599 per employee per month ($5,988–$7,188/year), an EOR is the clear winner for 1 to 3 hires in a single jurisdiction due to zero incorporation delay and zero local entity accounting fees.",
        "Once headcount in a single country reaches 4 to 6 full-time employees, incorporating a local subsidiary typically saves $15,000 to $35,000 per year in recurring platform fees.",
        "Hidden payroll FX conversion spreads (1.5%–2.5% when funding USD/EUR to pay GBP, PLN, BRL, or TRY salaries) often cost $1,800–$3,000 per employee per year on top of the headline EOR seat fee."
      ],
      tableTitle: "3-Year Total Cost of Ownership (TCO): EOR ($599/seat/mo) vs. Local Subsidiary Entity Across Headcounts",
      tableHeaders: ["Team Size in Country", "3-Yr EOR Platform Fees ($599/mo)", "3-Yr Entity Setup + Local Payroll/CPA", "Net 3-Year Cost Difference", "Recommended Structure"],
      tableRows: [
        ["1 Full-Time Employee", "$21,564", "$42,500 ($6.5k Setup + $12k/yr)", "+$20,936 Cheaper via EOR", "Use EOR (100% Optimal)"],
        ["2 Full-Time Employees", "$43,128", "$44,900", "+$1,772 Cheaper via EOR", "Use EOR (Faster & Flexible)"],
        ["4 Full-Time Employees", "$86,256", "$49,700", "+$36,556 Saved via Local Entity", "Incorporate Local Subsidiary"],
        ["8 Full-Time Employees", "$172,512", "$59,300", "+$113,212 Saved via Local Entity", "Incorporate Local Subsidiary"],
        ["15 Full-Time Employees", "$323,460", "$76,100", "+$247,360 Saved via Local Entity", "Incorporate Local Subsidiary"]
      ],
      sections: [
        {
          heading: "1. Separating Mandatory Employer Payroll Taxes from EOR Platform Markup",
          body: "First-time international hiring managers are often shocked when a €90,000 gross salary offer in Spain, Germany, or France generates a monthly Employer of Record invoice equivalent to €118,000–€130,000 per year. However, 90% of that surcharge is not the EOR's fee—it is the host country's mandatory employer social insurance contribution.\n\nWhether you hire through an EOR or spend six months incorporating your own local subsidiary, statutory employer social security is identical: ~8.5%–10% in the US (FICA + FUTA/SUTA), 15% Employer Class 1 National Insurance + 3% workplace pension in the UK, ~21% in Germany, ~31.5% in Spain, and ~45% in France. The true marginal cost of an EOR consists solely of (a) the monthly per-seat SaaS/compliance fee ($499–$599/month), (b) refundable severance/deposit reserves, and (c) foreign exchange spreads on cross-currency payroll funding."
        },
        {
          heading: "2. The 4-Employee Rule: Calculating Your Country Breakeven Point",
          body: "Maintaining a foreign corporate subsidiary—such as a German GmbH, a Spanish S.L., a French SAS, or a UK Limited Company—carries fixed annual compliance costs regardless of whether you employ 1 person or 20 people. These fixed costs include initial legal formation and notary registration ($2,000–$8,500), registered local office address, monthly statutory bookkeeping, annual corporate income tax filings, transfer-pricing intercompany service agreements (cost-plus 5%–8% markup), and a local payroll bureau ($800–$1,200/month).\n\nWhen total annual entity maintenance equals ~$14,000/year, dividing $14,000 by an annual EOR seat cost of $7,188 ($599 × 12) yields a strict mathematical breakeven of 2.0 employees—or roughly 3.5 to 4.5 employees once initial legal incorporation fees and management bandwidth are amortized over a 36-month horizon."
        },
        {
          heading: "3. Permanent Establishment (PE) Risk and Intellectual Property Assignment",
          body: "Under Article 5 of the OECD Model Tax Convention, a foreign company can inadvertently create a taxable Permanent Establishment (PE) in a country if employees or dependent agents habitually exercise authority to conclude contracts in the name of the enterprise or if a fixed place of business is maintained. While an EOR acts as the legal employer on paper, tax authorities look at economic substance: if your Country General Manager or VP of Sales is hired via an EOR and closes enterprise revenue locally, local corporate tax authorities may still assert PE status. Transitioning revenue-generating or R&D-heavy teams above 5 headcount into a wholly owned subsidiary operating under an intercompany Cost-Plus Transfer Pricing agreement eliminates this ambiguity."
        }
      ],
      citations: [
        "OECD (2026) — Taxing Wages: Comparative Employer Social Security Contributions and Total Tax Wedge across OECD Countries.",
        "OECD Model Tax Convention on Income and on Capital — Article 5 (Permanent Establishment Definition & Dependent Agent Rules)."
      ]
    },
    tr: {
      category: 'Küresel İşe Alım ve EOR',
      title: "Employer of Record (EOR) vs. Yerel Şirket Kurulumu: Küresel İşe Alım Maliyeti, İşyeri Oluşturma (PE) ve Başabaş Analizi",
      subtitle: "Yurt dışında ekip kuran şirketler ne zaman Deel veya Remote gibi bir EOR platformundan kendi yerel şirketini (GmbH, Ltd, S.L.) kurmaya geçmeli? İşveren SGK yükleri, gizli kur farkları ve çalışan sayısı başabaş analizi.",
      summaryPoints: [
        "Zorunlu işveren sosyal güvenlik yükleri (ABD'de %7,65, İngiltere'de %15, Almanya'da %21, Türkiye'de %20,75, İspanya'da %31,5) hem EOR kullanımında hem de kendi yerel şirketinizde birebir aynıdır.",
        "Çalışan başına aylık 499$–599$ (yıllık ~7.188$) EOR ücreti, tek bir ülkede 1 ila 3 çalışan istihdam ederken kurulum masrafı ve muhasebe yükü olmadığı için en ekonomik seçenektir.",
        "Aynı ülkedeki tam zamanlı çalışan sayısı 4 ila 6 kişiye ulaştığında yerel bir şube veya limited şirket kurmak yılda 15.000$ – 35.000$ platform komisyonu tasarrufu sağlar.",
        "EOR bordrolarını USD/EUR ile fonlarken yerel para birimine (TRY, GBP, PLN) geçişte kesilen %1,5–%2,5 döviz kuru marjı çalışan başına yılda 1.800$–3.000$ ek gizli maliyet yaratır."
      ],
      tableTitle: "3 Yıllık Toplam Sahip Olma Maliyeti (TCO): EOR (599$/Ay) vs. Yerel Şirket Kurulumu Karşılaştırması",
      tableHeaders: ["Ülkedeki Ekip Büyüklüğü", "3 Yıllık EOR Platform Ücreti", "3 Yıllık Şirket Kurulum + Muhasebe", "3 Yıllık Net Maliyet Farkı", "Önerilen Model"],
      tableRows: [
        ["1 Tam Zamanlı Çalışan", "$21,564", "$42,500 ($6.5k Kurulum + $12k/yıl)", "+$20,936 EOR Daha Ucuz", "EOR Kullanımı (%100 Avantajlı)"],
        ["2 Tam Zamanlı Çalışan", "$43,128", "$44,900", "+$1,772 EOR Daha Ucuz", "EOR Kullanımı (Hızlı & Esnek)"],
        ["4 Tam Zamanlı Çalışan", "$86,256", "$49,700", "+$36,556 Yerel Şirket Tasarrufu", "Yerel Şirket Kurulumu"],
        ["8 Tam Zamanlı Çalışan", "$172,512", "$59,300", "+$113,212 Yerel Şirket Tasarrufu", "Yerel Şirket Kurulumu"],
        ["15 Tam Zamanlı Çalışan", "$323,460", "$76,100", "+$247,360 Yerel Şirket Tasarrufu", "Yerel Şirket Kurulumu"]
      ],
      sections: [
        {
          heading: "1. Zorunlu İşveren SGK Primi ile EOR Hizmet Ücretini Birbirinden Ayırmak",
          body: "Yurt dışında ilk kez personel istihdam eden şirketler, 90.000 € brüt maaş teklif ettikleri bir çalışanın yıllık toplam faturasının 118.000 € – 125.000 €'ya çıktığını gördüğünde şaşırır. Oysa bu farkın %90'ı EOR platformunun komisyonu değil, ilgili ülkenin yasal işveren sosyal güvenlik payıdır.\n\nİster EOR kullanın ister kendi yerel şirketinizi kurun; işveren SGK primi ABD'de ~%8,5, İngiltere'de %15 + %3 emeklilik, Almanya'da ~%21, Türkiye'de ~%20,75 ve İspanya'da ~%31,5 olarak sabit ödenir. EOR kullanmanın gerçek ek maliyeti yalnızca çalışan başı aylık 499$–599$ platform ücreti ve döviz çevrim komisyonudur."
        },
        {
          heading: "2. 4 Çalışan Kuralı: Yerel Şirket Kurulumu Ne Zaman Daha Ucuza Gelir?",
          body: "Almanya'da GmbH, İngiltere'de Ltd veya İspanya'da S.L. kurup yaşatmanın çalışan sayısından bağımsız sabit bir yıllık maliyeti vardır: İlk kuruluş ve noter masrafları (2.000$–8.500$), yasal adres, aylık resmi muhasebe, kurumlar vergisi beyanı, şirketler arası transfer fiyatlandırması (cost-plus) sözleşmesi ve bordro hizmeti yıllık ortalama 12.000$–15.000$ tutar. Bu sabit gideri yıllık 7.188$ (599$ × 12) EOR koltuk ücretine böldüğümüzde, aynı ülkede 3 ila 4 çalışana ulaşıldığı andan itibaren yerel şirket kurmanın EOR'dan çok daha ekonomik olduğu görülür."
        },
        {
          heading: "3. Daimi İşyeri Oluşturma (Permanent Establishment - PE) Riski",
          body: "OECD Çifte Vergilendirmeyi Önleme Anlaşmalarının 5. maddesi uyarınca, EOR üzerinden çalıştırdığınız personel o ülkede ana şirket adına müşteri sözleşmeleri bağlıyor veya doğrudan gelir yaratıyorsa, yerel vergi idaresi ana şirketin o ülkede 'Daimi İşyeri' (PE) oluşturduğuna hükmederek kurumlar vergisi talep edebilir. Bu nedenle satış veya çekirdek Ar-Ge ekiplerinde çalışan sayısı 4–5 kişiyi geçtiğinde kendi yerel iştirakinizi kurmak hukuki güvence sağlar."
        }
      ],
      citations: [
        "OECD Taxing Wages (2026) — Ülkelere Göre İşveren Sosyal Güvenlik Yükü Karşılaştırma Raporu.",
        "OECD Model Vergi Anlaşması Madde 5 — Daimi İşyeri (Permanent Establishment) Kuralları."
      ]
    }
  },
  {
    slug: 'cross-border-b2b-invoicing-eu-vat-reverse-charge-guide',
    relatedTool: '/vat',
    relatedToolName: {
      en: 'Global B2B Invoice VAT & Reverse Charge Calculator',
      tr: 'Uluslararası B2B Fatura KDV / VAT ve Reverse Charge Hesaplayıcı'
    },
    publishedAt: '2026-10-02',
    updatedAt: '2026-10-30',
    readTime: '9 min',
    en: {
      category: 'Cross-Border Tax & VAT',
      title: "Cross-Border B2B Invoicing, EU VAT Reverse Charge (Directive 2006/112/EC), VIES Validation & US W-8BEN Compliance Guide",
      subtitle: "How independent contractors and agencies invoice clients across the EU, UK, US, and Turkey with 0% VAT/withholding tax while maintaining 100% input VAT recovery and audit-proof documentation.",
      summaryPoints: [
        "Under Articles 44 and 196 of EU VAT Directive 2006/112/EC, cross-border B2B services supplied between two EU Member States are taxed where the business customer is established via the Reverse Charge mechanism (0% VAT on the supplier's invoice).",
        "Before issuing an intra-EU 0% Reverse Charge invoice, you must validate the client's VAT number in the European Commission's VIES portal and report the transaction on your periodic EC Sales List (Modelo 349 / ZM).",
        "When a non-US contractor or foreign corporation invoices a US client for services performed 100% outside the United States, completing IRS Form W-8BEN (for individuals) or W-8BEN-E (for entities) eliminates the statutory 30% US withholding tax under IRC Sections 861/862.",
        "Zero-rated B2B service exports preserve your full right to reclaim domestic input VAT paid on business equipment, software, and professional services."
      ],
      tableTitle: "2026 Cross-Border B2B Service Invoicing Compliance Matrix",
      tableHeaders: ["Supplier Location", "Client Location (B2B)", "VAT / Tax Charged on Invoice", "Required Compliance Form / Registry", "Mandatory Invoice Legal Clause"],
      tableRows: [
        ["🇪🇺 EU Country A (e.g., ES)", "🇪🇺 EU Country B (e.g., DE)", "0% (Reverse Charge)", "VIES Check + EC Sales List (Modelo 349)", "'Reverse Charge — Art. 44 & 196 Directive 2006/112/EC'"],
        ["🇪🇺 EU / 🇬🇧 UK / 🇹🇷 TR", "🇺🇸 United States LLC/Corp", "0% VAT + 0% US Withholding", "IRS Form W-8BEN / W-8BEN-E (To Client)", "'Export of services outside VAT scope — B2B place of supply'"],
        ["🇬🇧 United Kingdom", "🇪🇺 EU or Non-UK Business", "0% (Outside Scope of UK VAT)", "Client Business Evidence (VAT ID / Corp Reg)", "'Outside the scope of UK VAT — VATA 1994 Place of Supply'"],
        ["🇹🇷 Turkey (Resident Co.)", "🇪🇺 EU / 🇺🇸 US / 🇬🇧 UK / 🇦🇪 UAE", "0% KDV (Tam İstisna)", "e-Arşiv Code 302 + FX Bank Repatriation", "'3065 S.K. Md. 11/1-a Hizmet İhracatı KDV İstisnası'"]
      ],
      sections: [
        {
          heading: "1. The Place-of-Supply Rule for International B2B Services (EU Directive 2006/112/EC Art. 44)",
          body: "In value-added tax (VAT) and Goods and Services Tax (GST) systems worldwide, the fundamental question is: which country has the taxing right over a cross-border digital, engineering, or consulting service? Under Article 44 of Council Directive 2006/112/EC (and mirrored in the UK Value Added Tax Act 1994 post-Brexit), the general place of supply of services to a 'taxable person acting as such' (a B2B business customer) is the country where the customer has established their business.\n\nConsequently, when a software developer in Berlin or Madrid invoices a corporate client in Dublin, Amsterdam, or London, the service is legally supplied in the client's jurisdiction—not the developer's home country. To prevent the developer from having to register for VAT in 27 different countries, Article 196 shifts the liability to pay the VAT onto the business buyer via the Reverse Charge mechanism."
        },
        {
          heading: "2. VIES Validation and the Intra-Community Recapitulative Statement (EC Sales List)",
          body: "For intra-EU B2B transactions, applying the 0% Reverse Charge is strictly conditional on proving your client is a registered taxable business in another EU Member State. In Spain, this requires registering yourself in the ROI (Registro de Operadores Intracomunitarios via Modelo 036) to obtain an ES-prefixed intra-community VAT number, verifying the client's VAT number on the European Commission VIES portal, displaying both VAT numbers on the invoice, and filing quarterly/monthly Form Modelo 349 (or the Zusammenfassende Meldung in Germany)."
        },
        {
          heading: "3. Invoicing US Clients Without 30% Withholding: IRS Form W-8BEN & W-8BEN-E",
          body: "Under Internal Revenue Code Sections 1441 and 1442, US companies paying foreign contractors are required to withhold 30% tax on US-source income unless the contractor certifies foreign status and non-US sourcing. Under IRC Sections 861(a)(3) and 862(a)(3), compensation for personal services is sourced to the physical location where the work is performed. When you perform 100% of your coding, design, or consulting work outside the physical borders of the United States, the income is foreign-source (0% US tax). Signing Form W-8BEN (for sole proprietors/individuals) or Form W-8BEN-E (for foreign Limited Companies) and handing it to your US client's finance team (you never mail it to the IRS) authorizes them to pay 100% of your invoice gross with $0 withholding."
        }
      ],
      citations: [
        "European Union Council Directive 2006/112/EC — Articles 44 & 196 (Place of supply of B2B services and Reverse Charge).",
        "Internal Revenue Service (IRS) — Instructions for Form W-8BEN / W-8BEN-E & IRC Sections 861(a)(3) and 862(a)(3)."
      ]
    },
    tr: {
      category: 'Sınır Ötesi Vergi ve KDV',
      title: "Uluslararası B2B Faturalama, AB Reverse Charge (2006/112/EC), VIES Doğrulaması ve ABD W-8BEN Tam Uyumluluk Rehberi",
      subtitle: "Yurt dışındaki ABD, İngiltere ve Avrupa Birliği şirketlerine %0 KDV ve %0 stopaj ile hatasız fatura kesmenin, VIES kaydının ve W-8BEN formunun yasal kuralları.",
      summaryPoints: [
        "AB KDV Direktifi 2006/112/EC Madde 44 ve 196 uyarınca, sınır ötesi B2B hizmetlerde vergilendirme yeri müşterinin bulunduğu ülkedir ve fatura Reverse Charge (%0 KDV) ile kesilir.",
        "ABD merkezli müşterilere Türkiye veya Avrupa'dan uzaktan hizmet verirken %30 ABD stopaj kesintisini sıfırlamak için müşteriye IRS Form W-8BEN (şahıs/birey) veya W-8BEN-E (limited/anonim şirket) verilmesi yeterlidir.",
        "Türkiye'den kesilen hizmet ihracatı faturalarında e-Arşiv sisteminde '302 - Hizmet İhracatı' istisna kodu seçilir ve yurt içi giderlerde ödenen KDV'lerin tamamı indirilebilir veya iade alınabilir.",
        "Fatura üzerinde hizmetin niteliği, ifa yeri ve ilgili KDV istisna maddesi (3065 S.K. Md. 11/1-a veya Art. 44/196 EU VAT Directive) açıkça belirtilmelidir."
      ],
      tableTitle: "2026 Uluslararası B2B Hizmet Faturası Uyumluluk ve KDV Matrisi",
      tableHeaders: ["Hizmet Veren Ülke", "Müşteri Ülkesi (B2B)", "Faturadaki KDV / Stopaj", "Gereken Belge / Doğrulama", "Faturaya Yazılacak Yasal Şerh"],
      tableRows: [
        ["🇹🇷 Türkiye (Şahıs / Ltd.)", "🇺🇸 ABD / 🇬🇧 İngiltere / 🇪🇺 AB", "%0 KDV + %0 Stopaj", "e-Arşiv Kod 302 + Döviz Dekontu + W-8BEN (ABD)", "'3065 S.K. Md. 11/1-a Hizmet İhracatı KDV İstisnası'"],
        ["🇪🇺 AB Ülkesi A (Örn. İspanya)", "🇪🇺 AB Ülkesi B (Örn. Almanya)", "%0 KDV (Reverse Charge)", "VIES VAT Doğrulama + Modelo 349 / ZM", "'Reverse Charge — Art. 44 & 196 Directive 2006/112/EC'"],
        ["🇪🇺 AB / 🇬🇧 İngiltere", "🇺🇸 ABD Şirketi (LLC / Corp)", "%0 KDV + %0 ABD Stopajı", "IRS Form W-8BEN veya W-8BEN-E", "'Export of services outside VAT scope — B2B place of supply'"],
        ["🇬🇧 İngiltere (UK Ltd)", "🇪🇺 AB veya İngiltere Dışı Şirket", "%0 KDV (Kapsam Dışı)", "Müşteri Şirket Kaydı / Vergi No", "'Outside the scope of UK VAT — VATA 1994 Place of Supply'"]
      ],
      sections: [
        {
          heading: "1. Uluslararası B2B Hizmetlerde 'Hizmetten Yararlanma Yeri' İlkesi",
          body: "Katma Değer Vergisi (KDV / VAT) hukukunda uluslararası B2B (şirketten şirkete) yazılım, tasarım ve danışmanlık hizmetleri tüketim ülkesi ilkesine göre vergilendirilir. Hem Türkiye'deki 3065 sayılı KDV Kanunu Madde 11/1-a hem de AB KDV Direktifi 2006/112/EC Madde 44 uyarınca, hizmetten yurt dışındaki kurumsal müşteri kendi ülkesinde yararlandığı için hizmeti veren ihracatçı faturasına %0 KDV uygular."
        },
        {
          heading: "2. ABD Şirketlerine Fatura Keserken W-8BEN ve W-8BEN-E Formu Nasıl Doldurulur?",
          body: "ABD vergi yasalarına (IRC Bölüm 1441/1442) göre bir Amerikan şirketi yurt dışındaki bir kişiye ödeme yaparken, eğer karşı tarafın ABD vatandaşı/mukimi olmadığını ve işi ABD toprakları dışında yaptığını kanıtlayan resmi bir belge almazsa ödemeden %30 stopaj kesmek zorundadır.\n\nBunu önlemek için: (1) Bireysel veya Şahıs Şirketi (Sole Proprietorship) olarak fatura kesiyorsanız **Form W-8BEN** doldurup imzalarsınız; (2) Limited veya Anonim Şirket (Ltd. Şti. / A.Ş.) olarak fatura kesiyorsanız **Form W-8BEN-E** (Active NFFE kutucuğunu işaretleyerek) doldurursunuz. Bu form IRS'e gönderilmez; doğrudan ABD'li müşterinizin muhasebe ekibine veya Deel/Stripe/Upwork platformuna yüklenir ve faturanız %0 kesintiyle tam ödenir."
        },
        {
          heading: "3. AB İçi Şirketlerde VIES Sorgulaması ve Ters Ödeme Yükümlülüğü (Reverse Charge)",
          body: "Avrupa Birliği içindeki bir ülkede (örneğin Estonya, Almanya veya İspanya'da) şirketiniz varsa ve başka bir AB ülkesindeki şirkete fatura kesiyorsanız, alıcının KDV numarasını Avrupa Komisyonu VIES veritabanından kontrol etmeniz ve faturaya her iki şirketin AB VAT numarasını yazarak 'Reverse Charge' ibaresi eklemeniz zorunludur."
        }
      ],
      citations: [
        "Avrupa Birliği Konsey Direktifi 2006/112/EC — Madde 44 ve Madde 196 (B2B İfa Yeri ve Reverse Charge).",
        "ABD Gelir İdaresi (IRS) — Form W-8BEN / W-8BEN-E Kılavuzu ve IRC Bölüm 861/862.",
        "3065 Sayılı KDV Kanunu Madde 11/1-a — Hizmet İhracatı Tam İstisna Esasları."
      ]
    }
  },
  {
    slug: 'hidden-bank-fx-markups-swift-vs-fintech-guide',
    relatedTool: '/fx-fees',
    relatedToolName: {
      en: 'Hidden Bank FX Markup & SWIFT Wire Fee Calculator',
      tr: 'Gizli Banka Döviz Kuru Makası (FX) ve SWIFT Maliyet Hesaplayıcı'
    },
    publishedAt: '2026-10-05',
    updatedAt: '2026-10-30',
    readTime: '9 min',
    en: {
      category: 'International Banking & FX',
      title: "How Hidden Bank FX Markups & SWIFT Correspondent Fees Erode Remote Salaries: Interbank Spreads vs. Multi-Currency Rails",
      subtitle: "An anatomical breakdown of cross-border payment rails: how retail banks embed 2.5%–4.0% treasury spreads inside 'zero-fee' wires, SWIFT MT103/ISO 20022 intermediary lifting fees (OUR vs. SHA), and how to save $3,000+/year.",
      summaryPoints: [
        "Retail banks and legacy payment processors make 80%+ of their cross-border revenue not from upfront transfer fees, but from an undisclosed 2.5% to 4.5% spread between the Reuters/ECB interbank mid-market rate and their internal customer board rate.",
        "On a $100,000 annual remote income converted across currencies, a 3.2% retail bank FX spread plus SWIFT SHA intermediary fees destroys $3,400+ of net post-tax earnings every single year.",
        "SWIFT wires sent with 'SHA' (shared) fee instructions allow 1 to 3 intermediary correspondent banks to deduct $15 to $35 each in transit before funds reach the beneficiary account.",
        "Using local currency receiving rails (US ACH routing for USD, SEPA IBAN for EUR, UK Faster Payments for GBP) eliminates correspondent banks and reduces conversion costs by up to 88%."
      ],
      tableTitle: "2026 Annual FX & Wire Cost Audit on $120,000 Remote Compensation ($10,000/Month Payout)",
      tableHeaders: ["Payment Rail / Method", "Upfront Wire Fee", "Intermediary Bank Cut", "Embedded FX Spread %", "Annual FX + Wire Loss", "Net Retained Value"],
      tableRows: [
        ["Local ACH / SEPA + Mid-Market FX (Wise/Revolut)", "$60 / yr", "$0 (Local Rail)", "0.35%", "-$480 / yr", "$119,520 (99.6%)"],
        ["SWIFT 'OUR' to Multi-Currency USD Account + Treasury Rate", "$300 / yr", "$0 (Paid by Sender)", "0.60%", "-$1,020 / yr", "$118,980 (99.2%)"],
        ["Contractor Payroll Platform Default Auto-FX", "$0", "$0", "1.50% – 2.00%", "-$2,100 / yr", "$117,900 (98.3%)"],
        ["Retail Bank SWIFT 'SHA' Auto-Converted at Receipt", "$240 / yr", "-$360 / yr ($30/mo)", "3.00%", "-$4,200 / yr", "$115,800 (96.5%)"],
        ["PayPal International Balance Withdrawal", "$0", "$0", "3.75% – 4.50%", "-$4,950 / yr", "$115,050 (95.9%)"]
      ],
      sections: [
        {
          heading: "1. Deconstructing the Interbank Mid-Market Rate vs. Retail Board Rate",
          body: "In global wholesale foreign exchange markets, currencies trade at a razor-thin bid-ask spread of less than 0.01% (1 basis point) for major pairs like EUR/USD and GBP/USD. The exact midpoint between the institutional buy and sell price is the 'Mid-Market Rate' published in real time by Reuters, Bloomberg, and the European Central Bank.\n\nWhen a traditional retail bank receives an incoming $10,000 USD wire destined for a EUR or GBP account, its automated treasury system does not convert the deposit at the mid-market rate. Instead, it applies a 'Retail Board Rate' (or card rate) skewed 2.5% to 3.8% away from the mid-market benchmark. Because bank statements only show the final converted amount and the applied customer rate—without printing the simultaneous mid-market benchmark—most professionals never realize they paid a $300 hidden currency conversion fee on a single paycheck."
        },
        {
          heading: "2. SWIFT Correspondent Banking Chains: Why 'SHA' Wires Arrive Short",
          body: "Unlike domestic networks (such as ACH in the US or SEPA in the Eurozone), the SWIFT network does not move money itself—it transmits payment messages between banks. If your client's regional bank in California does not hold a direct nostro/vostro account with your local bank in Madrid, Warsaw, or Istanbul, the payment must hop through 1 to 3 global correspondent banks (such as Citibank, JPMorgan, or Deutsche Bank).\n\nEvery SWIFT payment carries a Field 71A charge code:\n• OUR: The ordering customer (your client) pays all sending and intermediary correspondent bank charges up front; the exact invoice amount must arrive in full.\n• SHA (Shared): Your client pays only their own bank's outgoing wire fee, while each intermediary correspondent bank deducts a $15–$35 'lifting fee' directly from your invoice principal.\n• BEN (Beneficiary): All sending and intermediary fees are deducted from your invoice."
        },
        {
          heading: "3. Avoiding DCC (Dynamic Currency Conversion) and Double Conversion",
          body: "The single most expensive banking error occurs when a foreign client sends USD to an overseas USD account (for example, a USD account held at a European or Turkish bank), and the sending bank's teller or web portal prompts the sender to 'Lock in the guaranteed EUR/TRY rate before sending'. If the sender clicks yes, the US bank converts USD into local currency at a 3.5% markup, transmits local currency over SWIFT, and your receiving USD bank account immediately converts that local currency back into USD at another 3.0% markup—destroying 6.5% of the invoice in seconds. Always instruct clients in writing: 'Send strictly in USD without conversion; beneficiary account is denominated in USD.'"
        }
      ],
      citations: [
        "European Parliament & Council Regulation (EU) 2019/518 — Transparency of currency conversion charges and percentage markups over ECB reference rates.",
        "Bank for International Settlements (BIS) Committee on Payments and Market Infrastructures — Cross-Border Retail Payments & Correspondent Banking Costs."
      ]
    },
    tr: {
      category: 'Uluslararası Bankacılık ve Döviz',
      title: "Gizli Banka Döviz Kuru Makasları (FX Spread) ve SWIFT Kesintileri Uzaktan Maaşları Nasıl Eritir? Tam Korunma Rehberi",
      subtitle: "Uluslararası para transferlerinin anatomisi: Bankaların '0$ komisyon' adı altında uyguladığı %2,5–%4,0 gişe kuru makası, SWIFT muhabir banka (SHA vs. OUR) kesintileri ve yılda 3.000$+ tasarruf yöntemleri.",
      summaryPoints: [
        "Geleneksel bankalar ve ödeme kuruluşları uluslararası transfer gelirlerinin %80'inden fazlasını görünür havale ücretinden değil, piyasa ortası reel kur ile banka gişe kuru arasındaki %2,5–%4,5 gizli kur makasından (spread) kazanır.",
        "Yıllık 100.000$ uzaktan gelirde %3,2 banka kur makası ve SWIFT SHA aracı banka kesintileri yılda net 3.400$'dan fazla kazancın buharlaşmasına yol açar.",
        "SWIFT transferlerinde 'SHA' (paylaşımlı) kodu seçildiğinde, para hesabınıza ulaşana kadar 1 ila 3 aracı muhabir banka ana paradan 15$–35$ kesinti yapar.",
        "Dövizi kendi para biriminde tahsil etmek (USD faturayı USD hesabına SWIFT 'OUR' veya yerel ACH/SEPA ile almak) ve mesai saatlerinde hazine özel kuruyla bozdurmak kayıpları %85'e kadar önler."
      ],
      tableTitle: "2026 Yıllık 120.000$ Uzaktan Gelirde ($10.000/Ay) Tahsilat Yöntemi Maliyet Denetimi",
      tableHeaders: ["Tahsilat Yöntemi / Kanal", "Görünür Havale Ücreti", "Muhabir Banka Kesintisi", "Gizli Kur Makası %", "Yıllık Toplam Kayıp", "Net Korunan Tutar"],
      tableRows: [
        ["Yerel ACH / SEPA + Reel Kur (Wise/Revolut)", "$60 / yıl", "$0 (Yerel Ağ)", "%0.35", "-$480 / yıl", "$119,520 (%99.6)"],
        ["Vadesiz USD Hesabına SWIFT 'OUR' + Özel Hazine Kuru", "$300 / yıl", "$0 (Gönderici Öder)", "%0.60", "-$1,020 / yıl", "$118,980 (%99.2)"],
        ["B2B Bordro Platformu Otomatik Döviz Çekimi", "$0", "$0", "%1.50 – %2.00", "-$2,100 / yıl", "$117,900 (%98.3)"],
        ["Banka SWIFT 'SHA' + Gişe Kurundan Otomatik Bozma", "$240 / yıl", "-$360 / yıl ($30/ay)", "%3.00", "-$4,200 / yıl", "$115,800 (%96.5)"],
        ["PayPal / Standart Platform Döviz Çekimi", "$0", "$0", "%3.75 – %4.50", "-$4,950 / yıl", "$115,050 (%95.9)"]
      ],
      sections: [
        {
          heading: "1. Piyasa Ortası Reel Kur (Mid-Market Rate) vs. Banka Gişe Kuru Farkı",
          body: "Küresel bankalararası (interbank) döviz piyasasında USD/EUR veya USD/TRY gibi paritelerde alış ve satış fiyatları arasındaki fark %0,05'in altındadır. Alış ve satışın tam ortasındaki bu değere 'Piyasa Ortası Reel Kur' (Mid-Market Rate) denir.\n\nAncak geleneksel bir bankadaki TL veya EUR hesabınıza yurt dışından 10.000$ geldiğinde, banka bu tutarı reel kurdan değil, reel kurun %2,5 ila %3,8 altında belirlediği 'Banka Gişe Alış Kurundan' bozar. Dekont üzerinde sadece işlem yapılan gişe kuru yazdığı ve aynı saniyedeki Merkez Bankası/Reuters reel kuru yazmadığı için çoğu çalışan tek bir maaş ödemesinde 250$–350$ gizli kur komisyonu ödediğini fark etmez."
        },
        {
          heading: "2. SWIFT Muhabir Banka Zinciri: 'SHA' Transferler Neden Eksik Yatar?",
          body: "SWIFT ağı parayı doğrudan taşımaz; bankalar arasında ödeme talimatı iletir. Müşterinizin ABD'deki bankası ile sizin Türkiye veya Avrupa'daki bankanız arasında doğrudan hesap ilişkisi yoksa, ödeme Citibank, JPMorgan veya Deutsche Bank gibi 1 ila 3 aracı muhabir bankadan (correspondent bank) geçer.\n\nSWIFT mesajındaki 71A masraf kodu kritiktir:\n• OUR: Tüm gönderici ve aracı muhabir banka masraflarını müşteriniz peşin öder; faturanız kuruşu kuruşuna tam yatar.\n• SHA (Shared): Müşteriniz sadece kendi bankasının çıkış ücretini öder; yoldaki her muhabir banka ana paradan 15$–35$ keser.\n• BEN: Tüm masraflar sizin alacağınız paradan düşülür."
        },
        {
          heading: "3. Çifte Dönüşüm (Double Conversion) Tuzağından Korunma",
          body: "En yıkıcı maliyet hatası, yurt dışındaki müşterinizin Türkiye veya Avrupa'daki **USD vadesiz döviz hesabınıza** para gönderirken kendi banka ekranındaki 'Garantili TL/EUR kuruyla gönder' seçeneğini işaretlemesidir. Bu durumda ABD bankası doları %3,5 komisyonla TL/EUR'ya çevirip gönderir, sizin USD hesabınız ise gelen parayı tekrar %3 komisyonla dolara çevirir ve tek işlemde faturanızın %6,5'i yanar. Müşterinize verdiğiniz fatura talimatına mutlaka şu notu ekleyin: 'Please send strictly in USD with OUR instruction; do not convert currency prior to wire.'"
        }
      ],
      citations: [
        "Avrupa Parlamentosu (AB) 2019/518 Tüzüğü — Sınır ötesi ödemelerde döviz çevrim şeffaflığı ve ECB referans kur farkı bildirimi.",
        "Uluslararası Ödemeler Bankası (BIS) — Sınır Ötesi Perakende Ödemeler ve Muhabir Bankacılık Maliyet Raporu."
      ]
    }
  },
  {
    slug: 'crypto-stablecoin-salary-taxation-irs-hmrc-mica-guide',
    relatedTool: '/crypto-tax',
    relatedToolName: {
      en: 'Crypto & Stablecoin (USDT/USDC) Salary Tax Calculator',
      tr: 'Kripto ve Stablecoin (USDT/USDC) Maaş Vergisi Hesaplayıcı'
    },
    publishedAt: '2026-10-08',
    updatedAt: '2026-10-30',
    readTime: '10 min',
    en: {
      category: 'Crypto & Digital Payroll',
      title: "How Crypto & Stablecoin (USDT/USDC) Remote Salaries Are Taxed in 2026: Ordinary Income at Receipt vs. Capital Gains Disposal Rules",
      subtitle: "A comparative statutory guide to receiving employment or freelance compensation in USDC, USDT, BTC, or ETH under US IRS, UK HMRC, German § 23 EStG, Spanish AEAT, and UAE rules.",
      summaryPoints: [
        "Across all OECD tax jurisdictions, receiving crypto or stablecoins (USDT/USDC) in exchange for labor or services is taxed immediately as ordinary employment or self-employment income at the fiat Fair Market Value (FMV) on the date of receipt.",
        "That initial fiat Fair Market Value simultaneously locks in your tax cost basis; any subsequent price change before you sell, swap, or spend the tokens triggers a second tax event under Capital Gains Tax (CGT) rules.",
        "Germany (§ 23 EStG) and Portugal offer a 0% Capital Gains Tax exemption on crypto assets held for more than 365 days, though the initial salary value at receipt remains subject to normal income tax.",
        "Never hold volatile tokens received as salary into a new tax year without setting aside your income tax percentage in fiat or USD/EUR stablecoins on the day of receipt."
      ],
      tableTitle: "2026 Statutory Tax Comparison: Receiving $100,000 Salary in Crypto + $25,000 Subsequent Appreciation",
      tableHeaders: ["Jurisdiction", "Tax on $100k Salary at Receipt", "Tax on +$25k Gain (<12 Mo Hold)", "Tax on +$25k Gain (>12 Mo Hold)", "Total Tax (>12 Mo Hold)", "Net Retained Out of $125k"],
      tableRows: [
        ["🇺🇸 United States (Single, TX)", "$21,491 (Fed + FICA)", "$6,000 (24% Short-Term)", "$3,750 (15% Long-Term CGT)", "$25,241", "$99,759 (79.8%)"],
        ["🇬🇧 United Kingdom (England)", "$27,850 (PAYE + NI)", "$5,280 (24% after £3k Allow.)", "$5,280 (24% after £3k Allow.)", "$33,130", "$91,870 (73.5%)"],
        ["🇩🇪 Germany (Tax Class I)", "$38,900 (Income + Social)", "$10,500 (42% Marginal)", "$0 (0% after 365 Days § 23 EStG)", "$38,900", "$86,100 (68.9%)"],
        ["🇪🇸 Spain (Beckham Law 24%)", "$28,320 (24% + SS Cap)", "$5,370 (19%–23% Savings)", "$5,370 (unless non-ES exchange)", "$33,690", "$91,310 (73.0%)"],
        ["🇦🇪 UAE / Dubai (Resident)", "$0 (0% Income Tax)", "$0 (0% Capital Gains)", "$0 (0% Capital Gains)", "$0", "$125,000 (100.0%)"]
      ],
      sections: [
        {
          heading: "1. Dual-Event Taxation: Why Crypto Payroll Is Taxed Twice if It Appreciates",
          body: "Under IRS Notice 2014-21 and Revenue Ruling 2023-14 in the United States, HMRC Cryptoassets Manual (CRYPTO21100) in the United Kingdom, and the BMF Schreiben of May 2022 in Germany, virtual currencies and stablecoins are treated as property (or 'other economic assets' / andere Wirtschaftsgüter), not legal tender. When an employer or DAO pays you in BTC, ETH, or USDC for engineering or consulting work, two separate tax regimes apply sequentially:\n\n• Stage 1 — Ordinary Income upon Receipt: At the exact timestamp the tokens are credited to a wallet over which you exercise dominion and control, you realize ordinary gross income equal to the token's Fair Market Value (FMV) in your local reporting currency (USD, GBP, EUR). This amount is subject to standard progressive income tax plus FICA/SECA or National Insurance.\n• Stage 2 — Capital Gain or Loss upon Disposal: The fiat value taxed at Stage 1 becomes your cost basis. When you later sell the tokens for fiat, swap BTC into USDC, or spend the tokens via a crypto card, you realize a capital gain or loss equal to (Disposal FMV − Stage 1 Cost Basis)."
        },
        {
          heading: "2. The 'December Crash Trap': Why Unhedged Token Salaries Bankrupt Contractors",
          body: "Suppose a developer receives 25 ETH in June when ETH trades at $4,000—recording $100,000 of ordinary taxable income. Instead of selling 35% of the ETH immediately to reserve cash for taxes, the developer holds 100% of the ETH into the following year. In February, ETH drops to $1,800 (total value $45,000), and in April the developer owes $35,000 in June income taxes. Even if the developer sells all 25 ETH in February at a $55,000 capital loss, in jurisdictions like the United States capital losses cannot be carried back to prior tax years and can only offset $3,000 per year of ordinary income—forcing the developer to liquidate nearly their entire remaining portfolio just to pay the prior year's salary tax."
        },
        {
          heading: "3. Europe's 365-Day Tax-Free Holding Rules (Germany § 23 EStG & Portugal)",
          body: "For remote professionals who convert their tax reserve immediately into EUR and invest their remaining net savings in Bitcoin or Ethereum, Germany and Portugal offer extraordinary long-term wealth building advantages. Under § 23 Abs. 1 Nr. 2 of the German Income Tax Act (EStG), private sales of crypto assets held for more than 365 days are 100% exempt from Capital Gains Tax regardless of profit size (and even short-term gains under €1,000 per calendar year are tax-free). Portugal similarly applies a 0% capital gains rate to crypto assets held for 365 days or more (vs. 28% for holdings sold within a year)."
        }
      ],
      citations: [
        "Internal Revenue Service (IRS) — Notice 2014-21 & Form 1040 Digital Asset Reporting Instructions.",
        "HM Revenue & Customs (HMRC) — Cryptoassets Manual CRYPTO21100 ( Cryptoassets received as employment income).",
        "Bundesministerium der Finanzen (BMF Germany) — Einzelfragen zur ertragsteuerlichen Behandlung von virtuellen Währungen (§ 23 EStG)."
      ]
    },
    tr: {
      category: 'Kripto ve Dijital Bordro',
      title: "2026 Kripto ve Stablecoin (USDT/USDC) Uzaktan Maaş Vergilendirme Rehberi: Gelir Vergisi, 365 Gün Kuralı ve Yasal Uyum",
      subtitle: "ABD (IRS), İngiltere (HMRC), Almanya (§ 23 EStG), Türkiye (GİB) ve Dubai mevzuatlarına göre USDT, USDC, BTC veya ETH ile alınan maaş ve freelance ödemelerin vergilendirilmesi.",
      summaryPoints: [
        "Tüm OECD ülkelerinde bir emek veya hizmet karşılığında alınan kripto para ve stablecoinler (USDT/USDC), cüzdana ulaştığı andaki piyasa kuru üzerinden normal 'ücret veya serbest meslek kazancı' olarak gelir vergisine tabidir.",
        "Maaşın cüzdana yattığı andaki fiat değeri aynı zamanda o tokenların alış maliyet bedelini (cost basis) oluşturur; sonraki fiyat artışları satış veya takas (swap) anında Sermaye Kazancı Vergisine (Capital Gains) tabi olur.",
        "Almanya (§ 23 EStG) ve Portekiz'de maaş vergisi ödendikten sonra cüzdanda 365 günden uzun süre tutulan kripto varlıkların değer artış kazancı %0 vergilidir (tamamen vergisizdir).",
        "Türkiye'den yurt dışına çalışan yazılımcıların %80 GVK 89/13 istisnasından yararlanabilmesi için ödemeyi kripto cüzdan yerine döviz olarak Türkiye'deki banka hesabına getirmesi şarttır."
      ],
      tableTitle: "2026 Ülkelere Göre 100.000$ Kripto Maaş + 25.000$ Değer Artışı Vergi Karşılaştırması",
      tableHeaders: ["Ülke", "100.000$ Maaş Alındığında Vergi", "+25.000$ Değer Artışı (<1 Yıl)", "+25.000$ Değer Artışı (>1 Yıl)", "Toplam Vergi (>1 Yıl Tutma)", "125.000$'dan Net Kalan"],
      tableRows: [
        ["🇺🇸 ABD (Teksas, Bekar)", "$21,491 (Fed + FICA)", "$6,000 (%24 Kısa Vade)", "$3,750 (%15 Uzun Vade CGT)", "$25,241", "$99,759 (%79.8)"],
        ["🇬🇧 İngiltere", "$27,850 (PAYE + NI)", "$5,280 (%24 CGT)", "$5,280 (%24 CGT)", "$33,130", "$91,870 (%73.5)"],
        ["🇩🇪 Almanya (Vergi Sınıfı I)", "$38,900 (Gelir + SGK)", "$10,500 (%42 Marjinal)", "$0 (365 Gün Sonrası %0 Vergi)", "$38,900", "$86,100 (%68.9)"],
        ["🇪🇸 İspanya (Beckham %24)", "$28,320 (%24 + SGK Tavan)", "$5,370 (%19–%23 Tasarruf)", "$5,370", "$33,690", "$91,310 (%73.0)"],
        ["🇦🇪 BAE / Dubai (Mukim)", "$0 (%0 Gelir Vergisi)", "$0 (%0 Sermaye Kazancı)", "$0 (%0 Sermaye Kazancı)", "$0", "$125,000 (%100.0)"]
      ],
      sections: [
        {
          heading: "1. Çift Aşamalı Vergilendirme: Kripto Maaşlar Neden İki Ayrı Vergi Olayı Yaratır?",
          body: "ABD Gelir İdaresi (IRS Notice 2014-21), İngiltere HMRC (CRYPTO21100) ve Almanya Federal Maliye Bakanlığı (BMF) düzenlemelerine göre kripto paralar ve stablecoinler yasal para birimi değil, gayrimaddi varlık / emtia olarak sınıflandırılır. Bir şirket veya DAO size mühendislik ya da danışmanlık hizmetiniz karşılığında USDT, USDC, BTC veya ETH ödediğinde iki aşamalı vergi doğar:\n\n• 1. Aşama — Cüzdana Yattığı Anda Gelir Vergisi: Tokenların kontrolünüzdeki cüzdana geçtiği saniyedeki USD/EUR/TRY karşılığı brüt maaş veya serbest meslek kazancınız olarak kaydedilir ve normal gelir vergisi + sosyal güvenlik kesintisine tabi tutulur.\n• 2. Aşama — Satış veya Swap Anında Sermaye Kazancı (Capital Gains): 1. aşamada vergilendirilen değer sizin maliyet bedeliniz (cost basis) olur. Tokenı daha sonra daha yüksek bir fiyattan sattığınızda veya başka bir coine dönüştürdüğünüzde aradaki kâr üzerinden Sermaye Kazancı Vergisi ödenir."
        },
        {
          heading: "2. 'Yıl Sonu Çöküş Tuzağı': Vergi Payını Ayırmadan ETH/BTC Tutmanın Riski",
          body: "Kripto maaş alanların yaptığı en tehlikeli hata, Haziran ayında 4.000$ fiyattan aldıkları 25 ETH (100.000$ gelir matrahı) üzerinden doğacak ~30.000$ gelir vergisini o gün nakde/stablecoine ayırmadan tüm ETH'yi ertesi yıla taşımaktır. Ertesi yıl Şubat ayında ETH 1.800$'a düştüğünde elinizdeki toplam portföy 45.000$'a iner, ancak Nisan ayında bir önceki yılın 100.000$ maaşı üzerinden 30.000$ kesinleşmiş vergi borcunuzu ödemek zorunda kalırsınız. Vergi karşılığınızı ödemeyi aldığınız gün mutlaka nakde veya sabit para birimine ayırın."
        },
        {
          heading: "3. Almanya (§ 23 EStG) ve Portekiz'de 365 Gün Vergisiz Yatırım Avantajı",
          body: "Almanya Gelir Vergisi Kanunu § 23 EStG ve Portekiz IRS mevzuatı uyarınca, maaş olarak aldığınız kripto paranın ilk gelir vergisini ödedikten sonra kalan tokenları cüzdanınızda 365 günden (1 tam yıldan) uzun süre tutarsanız, 1 yıl sonrasında oluşan tüm değer artışı (%100 veya %500 yükseliş dahil) Sermaye Kazancı Vergisinden **%100 muaftır (%0 vergi)**."
        }
      ],
      citations: [
        "ABD IRS — Notice 2014-21 & Form 1040 Dijital Varlık Vergilendirme Rehberi.",
        "İngiltere HMRC — Cryptoassets Manual CRYPTO21100 (Hizmet karşılığı alınan kripto varlıklar).",
        "Almanya BMF — § 23 EStG Kapsamında Sanal Para Birimlerinin 1 Yıllık Elde Tutma İstisnası."
      ]
    }
  },
  {
    slug: 'purchasing-power-parity-ppp-inflation-remote-compensation',
    relatedTool: '/salary',
    relatedToolName: {
      en: 'Global Remote Salary & PPP Geo-Arbitrage Calculator',
      tr: 'Küresel Uzaktan Maaş ve Satın Alma Gücü (PPP) Hesaplayıcı'
    },
    publishedAt: '2026-10-12',
    updatedAt: '2026-10-30',
    readTime: '10 min',
    en: {
      category: 'Compensation & Macro',
      title: "Purchasing Power Parity (PPP) & CPI Inflation in Remote Compensation: Location-Based vs. Location-Agnostic Salary Benchmarks",
      subtitle: "How global remote employers construct geographic compensation tiers (Cost of Labor vs. Cost of Living), how Fiscal Drag erodes nominal raises, and how to model real post-tax savings capacity across 40+ cities.",
      summaryPoints: [
        "Global tech companies set remote pay bands using 'Cost of Labor' (local engineering salary supply and demand), NOT 'Cost of Living' (CPI rent and grocery baskets).",
        "Comparing cities by gross PPP indices alone is flawed: moving from a 0% state-tax US hub (Austin/Miami) to a lower-rent European city without a special expat tax regime can reduce your net savings due to 45%+ marginal tax brackets.",
        "True financial independence depends on your 'Post-Tax Net Investable Surplus' (Net Take-Home Pay minus Local Living Basket) measured in hard currency (USD/EUR), not your percentage savings rate.",
        "When negotiating multi-year remote contracts, use the Fisher Real Wage formula to account for both domestic CPI inflation and tax bracket creep (fiscal drag)."
      ],
      tableTitle: "2026 Global Remote Compensation Tier & Net Investable Surplus Matrix (Senior Software Engineer Benchmark)",
      tableHeaders: ["Geographic Hub & Tier", "Typical Local Market Gross", "Location-Agnostic US Remote Offer", "Effective Tax + SS Rate", "Annual Local Living Cost", "Net Annual USD Invested"],
      tableRows: [
        ["🇺🇸 San Francisco / NYC (Tier 1)", "$185,000", "$150,000", "33.5%", "$62,000 / yr", "+$37,750 / yr"],
        ["🇬🇧 London / 🇳🇱 Amsterdam (Tier 2)", "$125,000", "$150,000", "31.0%", "$48,000 / yr", "+$55,500 / yr"],
        ["🇪🇸 Madrid / Valencia (Tier 3 — Beckham)", "$72,000", "$150,000", "26.5%", "$29,500 / yr", "+$80,750 / yr"],
        ["🇹🇷 Istanbul (Tier 3 — GVK 89/13 80% Ex.)", "$58,000", "$150,000", "6.5%", "$26,000 / yr", "+$114,250 / yr"],
        ["🇦🇪 Dubai (Expat Hub — 0% Tax)", "$130,000", "$150,000", "0.0%", "$44,000 / yr", "+$106,000 / yr"]
      ],
      sections: [
        {
          heading: "1. Cost of Labor vs. Cost of Living: How GitLab, Airbnb, and Remote-First Companies Set Pay",
          body: "When negotiating a remote salary after relocating from San Francisco or London to Madrid, Lisbon, or Istanbul, employees often argue that inflation or local luxury housing has risen. However, corporate compensation committees do not benchmark salaries against consumer price indices (Cost of Living). Instead, they use Radford, Mercer, or Pave market data measuring the 'Cost of Labor'—what it costs to hire an equivalent mid-level or senior engineer in that geographic talent market.\n\nMost remote-first companies adopt one of three compensation philosophies:\n• Location-Agnostic (Global Tier): Paying the exact same SF/NYC benchmark (or 90% of US Tier 1) regardless of where the engineer lives.\n• Regional Hub Tiers (3–4 Bands): Grouping countries into North America, Western Europe/UK, Southern/Eastern Europe, and APAC/LATAM with 10%–25% step-downs.\n• Strict Local Market Indexing: Adjusting base pay directly to a city's local labor index upon permanent relocation."
        },
        {
          heading: "2. The Geo-Arbitrage Equation: Integrating Tax Regimes with PPP",
          body: "Standard OECD and World Bank Purchasing Power Parity (PPP) conversion factors measure how many local currency units are needed to buy the same basket of goods and services that $1.00 buys in the United States. While useful for macroeconomics, gross PPP fails remote workers because it ignores two decisive personal finance variables: (1) Effective Income and Social Security Tax, and (2) Global Hard-Currency Asset Prices.\n\nWhether you live in Zurich, Valencia, or Bangkok, buying an S&P 500 index fund, a MacBook Pro, international flights, or cloud infrastructure costs the exact same amount in US Dollars. Therefore, the true objective of geographic arbitrage is maximizing your absolute annual USD/EUR investable surplus after subtracting both local taxes and local housing/living costs."
        },
        {
          heading: "3. Protecting Your Salary Against Inflation and Fiscal Drag (Bracket Creep)",
          body: "In an economy experiencing 6% annual CPI inflation, a 6% nominal salary increase only preserves your purchasing power if the government simultaneously indexes all income tax brackets, standard deductions, and social security ceilings by 6%. When tax brackets remain frozen or lag behind inflation—a phenomenon economists call 'Fiscal Drag' or 'Bracket Creep'—a larger proportion of your nominal raise is taxed at your highest marginal bracket (35%–47%), resulting in a net real-wage decline. Use the Fisher equation together with post-tax marginal retention to calculate the exact gross raise required to keep your real net pay intact."
        }
      ],
      citations: [
        "World Bank & OECD — International Comparison Program (ICP) Purchasing Power Parity (PPP) Methodological Manual.",
        "OECD Taxing Wages — Fiscal Drag and the Impact of Inflation on Personal Income Tax Thresholds."
      ]
    },
    tr: {
      category: 'Ücretlendirme ve Makroekonomi',
      title: "Uzaktan Çalışmada Satın Alma Gücü Paritesi (PPP), TÜFE Enflasyonu ve Küresel Maaş Bantları Rehberi (2026)",
      subtitle: "Küresel teknoloji şirketleri lokasyon bazlı maaşları nasıl belirler (İşgücü Maliyeti vs. Yaşam Maliyeti), vergi dilimi kayması (Fiscal Drag) zamları nasıl eritir ve 40+ şehirde net dolar birikimi nasıl maksimize edilir?",
      summaryPoints: [
        "Küresel teknoloji şirketleri uzaktan maaş bantlarını belirlerken 'Yaşam Maliyetini' (kira ve market enflasyonu) değil, 'İşgücü Maliyetini' (o ülkedeki mühendis arz-talep piyasasını) baz alır.",
        "Şehirleri yalnızca brüt PPP yaşam maliyeti endeksiyle kıyaslamak yanıltıcıdır; vergi teşviki olmayan ucuz bir şehre taşınmak %45+ gelir vergisi nedeniyle net birikiminizi düşürebilir.",
        "Gerçek finansal bağımsızlık hızınızı belirleyen metrik yüzde tasarruf oranınız değil; vergi ve kira çıktıktan sonra her ay kenara koyabildiğiniz mutlak USD/EUR net nakit tutarıdır.",
        "Yıllık maaş artışı pazarlıklarında hem TÜFE enflasyonu hem de vergi dilimi kayması (Fiscal Drag) dikkate alınarak net alım gücünü koruyan brüt zam oranı hesaplanmalıdır."
      ],
      tableTitle: "2026 Küresel Uzaktan Maaş Kademeleri ve Yıllık Net USD Birikim Kapasitesi (Kıdemli Yazılım Mühendisi)",
      tableHeaders: ["Şehir ve Maaş Kademesi", "Yerel Piyasa Brüt Maaşı", "Lokasyondan Bağımsız ABD Teklifi", "Efektif Vergi + SGK", "Yıllık Kira ve Yaşam Gideri", "Yıllık Net USD Yatırım Fazlası"],
      tableRows: [
        ["🇺🇸 San Francisco / NYC (Tier 1)", "$185,000", "$150,000", "%33.5", "$62,000 / yıl", "+$37,750 / yıl"],
        ["🇬🇧 Londra / 🇳🇱 Amsterdam (Tier 2)", "$125,000", "$150,000", "%31.0", "$48,000 / yıl", "+$55,500 / yıl"],
        ["🇪🇸 Madrid / Valensiya (Beckham %24)", "$72,000", "$150,000", "%26.5", "$29,500 / yıl", "+$80,750 / yıl"],
        ["🇹🇷 İstanbul (GVK 89/13 %80 İstisna)", "$58,000", "$150,000", "%6.5", "$26,000 / yıl", "+$114,250 / yıl"],
        ["🇦🇪 Dubai (Expat Merkezi — %0 Vergi)", "$130,000", "$150,000", "%0.0", "$44,000 / yıl", "+$106,000 / yıl"]
      ],
      sections: [
        {
          heading: "1. İşgücü Maliyeti (Cost of Labor) vs. Yaşam Maliyeti (Cost of Living) Farkı",
          body: "Uzaktan çalışan profesyoneller maaş görüşmelerinde sıklıkla yaşadıkları şehirdeki kira veya TÜFE enflasyonunun arttığını öne sürer. Ancak küresel teknoloji şirketlerinin insan kaynakları ve finans komiteleri maaş tablolarını tüketici enflasyonuna (Cost of Living) göre değil; Radford ve Pave gibi veri tabanlarındaki 'İşgücü Maliyetine' (Cost of Labor — o ülkede aynı kıdemde bir mühendisi işe almanın piyasa fiyatı) göre belirler.\n\nBu nedenle en yüksek geliri elde etmenin yolu yerel şube bordrosuna girmek yerine, 'Location-Agnostic' (lokasyondan bağımsız tek küresel maaş bandı uygulayan) ABD veya Avrupa şirketleriyle doğrudan B2B sözleşme imzalamaktır."
        },
        {
          heading: "2. Coğrafi Arbitraj Denklemi: PPP Endeksini Vergi Teşvikleriyle Birleştirmek",
          body: "Dünya Bankası ve OECD tarafından yayınlanan Satın Alma Gücü Paritesi (PPP) katsayıları, ABD'de 1 doların satın aldığı yerel mal ve hizmet sepetinin başka bir ülkede kaç dolara alınabildiğini ölçer. Ancak uzaktan çalışan bir profesyonel için küresel teknoloji ürünleri, uluslararası uçuşlar ve S&P 500 / Eurobond gibi küresel yatırım araçları dünyanın her yerinde aynı dolar fiyatına sahiptir.\n\nDolayısıyla gerçek zenginleşme denklemi yalnızca ucuz bir şehirde yaşamak değil; yüksek küresel brüt geliri Türkiye GVK 89/13 (%80 istisna), İspanya Beckham Yasası (%24 sabit vergi) veya Dubai (%0 vergi) gibi yasal rejimlerle birleştirerek vergi ve kira sonrası net dolar birikimini yıllık 80.000$–110.000$ bandına çıkarmaktır."
        },
        {
          heading: "3. Vergi Dilimi Kayması (Fiscal Drag) ve Reel Maaş Koruması",
          body: "Enflasyonist dönemlerde yapılan nominal maaş zamları çalışanı yıl içinde daha erken aylarda %27, %35 ve %40 gibi üst gelir vergisi dilimlerine taşır. İktisatçıların 'Fiscal Drag' (Mali Sürüklenme / Vergi Dilimi Kayması) adını verdiği bu etki nedeniyle, enflasyon oranında yapılan brüt zam bile vergi sonrasında reel alım gücü kaybına yol açar."
        }
      ],
      citations: [
        "Dünya Bankası ve OECD — Uluslararası Karşılaştırma Programı (ICP) Satın Alma Gücü Paritesi Metodolojisi.",
        "OECD Taxing Wages — Enflasyonun Gelir Vergisi Dilimleri ve Reel Net Ücretler Üzerindeki Etkisi."
      ]
    }
  }
];

export function getEditorialGuideBySlug(slug) {
  return editorialGuides.find((g) => g.slug === slug) || null;
}

export function getEditorialGuidesForTool(toolPath) {
  const norm = toolPath === '' || toolPath === '/' || toolPath === 'take-home' ? '/salary' : (toolPath.startsWith('/') ? toolPath : `/${toolPath}`);
  const exact = editorialGuides.filter((g) => g.relatedTool === norm);
  if (exact.length >= 2) return exact;
  const fallback = editorialGuides.filter((g) => g.relatedTool !== norm).slice(0, 3 - exact.length);
  return [...exact, ...fallback];
}

