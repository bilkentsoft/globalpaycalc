// Deep Editorial Guides, Worked Numerical Examples, Formulas & Extended FAQs for all 14 Tools
// Designed to satisfy Google Search Helpful Content & Google AdSense High-Value Editorial Standards.

export const toolDeepGuides = {
  'take-home': {
    en: {
      formulaTitle: "Gross-to-Net Statutory Calculation Formula",
      formulaCode: "Net Pay = Gross Salary − Federal/National Income Tax − Regional/State Tax − Employee Social Security (Capped) + Tax Credits",
      formulaNotes: "Progressive income tax applies marginal rates only to the portion of taxable income within each statutory bracket after subtracting standard deductions and deductible social insurance contributions.",
      tableTitle: "2026 Worked Net Salary Comparison ($100,000 USD Equivalent Gross)",
      tableHeaders: ["Jurisdiction", "Gross Annual", "Income Tax", "Social Security", "Net Take-Home", "Effective Retention"],
      tableRows: [
        ["🇺🇸 United States (Texas — 0% State)", "$100,000", "$13,841", "$7,650 (FICA)", "$78,509", "78.5%"],
        ["🇺🇸 United States (California)", "$100,000", "$19,615 (Fed+CA)", "$7,650 (FICA)", "$72,735", "72.7%"],
        ["🇬🇧 United Kingdom (England)", "£80,000", "£19,432 (PAYE)", "£3,771 (Class 1 NI)", "£56,797", "71.0%"],
        ["🇩🇪 Germany (Tax Class I, No Church)", "€92,000", "€23,180 (ESt+Soli)", "€17,850 (SV Cap)", "€50,970", "55.4%"],
        ["🇪🇸 Spain (General Progressive IRPF)", "€92,000", "€27,490 (IRPF)", "€3,979 (SS Max Cap)", "€60,531", "65.8%"],
        ["🇦🇪 UAE / Dubai (Resident Payroll)", "$100,000", "$0 (0% Tax)", "$0 (Expat)", "$100,000", "100.0%"]
      ],
      sections: [
        {
          heading: "Marginal vs. Effective Tax Rate: Why Bracket Jumps Never Reduce Your Net Pay",
          body: "One of the most common misconceptions in international compensation negotiation is fearing that a raise will push your entire salary into a higher tax bracket. Almost all OECD countries operate a marginal progressive bracket system. When your gross income crosses a threshold—for example, moving from the 22% to the 24% federal bracket in the United States, or exceeding €60,000 in Spain's general IRPF scale—only the euros or dollars earned above that exact cutoff are taxed at the higher percentage. Your effective tax rate is the weighted average across all brackets divided by your total gross salary."
        },
        {
          heading: "Social Security Contribution Ceilings and Employer Payroll Burdens",
          body: "Unlike income tax, employee social security contributions in many jurisdictions are subject to an annual earnings cap (Beitragsbemessungsgrenze in Germany, Base Máxima de Cotización in Spain, or the OASDI wage base of $176,100 in the US). Once your cumulative year-to-date salary surpasses this ceiling, pension or unemployment deductions stop or drop to a smaller Medicare/solidarity surcharge for the remainder of the calendar year. Evaluating a job offer across borders requires checking both income tax bands and social security ceilings."
        },
        {
          heading: "Negotiating Cross-Border Remote Job Offers in USD, EUR, and GBP",
          body: "When evaluating an international offer, always clarify whether the quoted figure is Gross Employee Salary (on local payroll or via an Employer of Record) or Gross B2B Contractor Compensation. A €100,000 gross salary in Germany results in roughly €58,000 net for a single employee after Class I income tax and statutory social insurance, whereas the same €100,000 in Spain under the Beckham Law yields over €72,000 net."
        }
      ],
      extraFaqs: [
        { q: "Why does my net pay change between US states like Texas, New York, and California?", a: "While Federal income tax (10%–37%) and FICA (7.65%) are uniform nationwide, nine US states—including Texas, Florida, Washington, and Nevada—levy 0% state income tax. High-tax states like California (up to 13.3%) and New York (plus NYC local tax) add a second progressive tax layer." },
        { q: "Are employee pension and health insurance contributions tax-deductible?", a: "In most European systems (such as Germany, Spain, and France) and traditional US 401(k) plans, mandatory employee social security or pre-tax retirement contributions reduce your taxable income base before income tax brackets are applied." },
        { q: "How are bonuses and equity (RSUs) taxed in a take-home calculator?", a: "Cash bonuses and vested Restricted Stock Units (RSUs) are taxed as ordinary supplemental employment income at your highest marginal income tax bracket plus applicable social security contributions (unless you have already reached the annual contribution ceiling)." },
        { q: "Does this calculator store my salary figures on any server?", a: "No. Every tax bracket lookup and deduction formula executes locally inside your browser's RAM. Nothing is transmitted over the network." }
      ]
    },
    tr: {
      formulaTitle: "Brütten Nete Yasal Maaş Hesaplama Formülü",
      formulaCode: "Net Maaş = Brüt Maaş − Sosyal Güvenlik İşçi Payı (SGK/FICA) − Kademeli Gelir Vergisi − Damga/Yerel Vergiler + Vergi İstisnaları",
      formulaNotes: "Artan oranlı (kademeli) vergi sistemlerinde üst vergi dilimine geçtiğinizde maaşınızın tamamı değil, yalnızca dilim sınırını aşan kısmı bir üst orandan vergilendirilir.",
      tableTitle: "2026 Örnek Net Maaş Karşılaştırma Tablosu (100.000$ Eşdeğeri Yıllık Brüt)",
      tableHeaders: ["Ülke / Eyalet", "Yıllık Brüt", "Gelir Vergisi", "Sosyal Güvenlik", "Yıllık Net Ele Geçen", "Net Oran"],
      tableRows: [
        ["🇺🇸 ABD (Teksas — %0 Eyalet Vergisi)", "$100,000", "$13,841", "$7,650 (FICA)", "$78,509", "%78.5"],
        ["🇺🇸 ABD (Kaliforniya)", "$100,000", "$19,615 (Fed+CA)", "$7,650 (FICA)", "$72,735", "%72.7"],
        ["🇬🇧 İngiltere (Birleşik Krallık)", "£80,000", "£19,432 (PAYE)", "£3,771 (NI)", "£56,797", "%71.0"],
        ["🇩🇪 Almanya (Vergi Sınıfı I)", "€92,000", "€23,180 (ESt)", "€17,850 (Sosyal Güv.)", "€50,970", "%55.4"],
        ["🇪🇸 İspanya (Standart IRPF)", "€92,000", "€27,490 (IRPF)", "€3,979 (SS Tavanı)", "€60,531", "%65.8"],
        ["🇦🇪 BAE / Dubai", "$100,000", "$0 (%0 Vergi)", "$0", "$100,000", "%100.0"]
      ],
      sections: [
        {
          heading: "Kümülatif Vergi Matrahı ve Marjinal Vergi Dilimi Nasıl Çalışır?",
          body: "Brüt maaş üzerinden yapılan net maaş hesaplamalarında önce zorunlu sosyal güvenlik primleri (Türkiye'de %14 SGK işçi payı + %1 işsizlik sigortası; ABD'de FICA; Almanya'da emeklilik ve sağlık sigortası) ayrıştırılır. Kalan kümülatif vergi matrahı, yıl içindeki toplam kazancınıza göre ilgili gelir vergisi dilimlerine (%15'ten %40'a veya ABD'de %10'dan %37'ye) tabi tutulur. Üst dilime geçmek yalnızca sınırı aşan tutarın vergisini artırır."
        },
        {
          heading: "Sosyal Güvenlik Tavan Ücreti (SGK Tavanı) Neden Önemlidir?",
          body: "Yüksek gelirli çalışanlar için sosyal güvenlik prim tavanı net maaşı doğrudan etkiler. İspanya'da aylık 5.101,20 € (yıllık 61.214,40 €), ABD'de yıllık 176.100 $ ve Türkiye'de asgari ücretin 7,5 katı olarak uygulanan SGK tavanı aşıldığında, tavanın üzerindeki brüt kazançtan sosyal güvenlik primi kesilmez; yalnızca gelir vergisi kesintisi devam eder."
        },
        {
          heading: "Uluslararası Uzaktan Çalışma Tekliflerini Değerlendirirken Dikkat Edilecekler",
          body: "Yurtdışı bir şirketten iş teklifi aldığınızda sözleşmenin yerel bordrolu (EOR / şube üzerinden maaşlı) mı yoksa B2B serbest meslek (hizmet ihracatı faturası) mı olduğunu mutlaka netleştirin. Türkiye'den yurtdışına yazılım, tasarım veya veri analizi hizmeti veren B2B çalışanlar Gelir Vergisi Kanunu Madde 89/13 kapsamında %80 kazanç istisnasından ve %0 KDV hizmet ihracatı istisnasından yararlanabilmektedir."
        }
      ],
      extraFaqs: [
        { q: "Yıl ortasında net maaşım neden düşüyor?", a: "Kümülatif vergi matrahınız yılın ilk aylarında alt vergi dilimlerinde (%15 veya %20) yer alırken, yılın ikinci yarısında üst dilimlere (%27, %35 veya %40) geçtiği için aylık kesilen gelir vergisi artar." },
        { q: "Türkiye'de asgari ücret vergi istisnası tüm maaşlı çalışanlara uygulanır mı?", a: "Evet. Maaş tutarınız ne olursa olsun, brüt asgari ücrete tekabül eden gelir vergisi ve damga vergisi tutarı her ay ödenecek vergiden mahsup edilir." },
        { q: "Hesaplayıcıya girdiğim maaş bilgileri kaydediliyor mu?", a: "Hayır. Tüm hesaplamalar tarayıcınızın yerel RAM belleğinde çalışır; sunucularımıza hiçbir veri gönderilmez." }
      ]
    }
  },

  'beckham-law': {
    en: {
      formulaTitle: "Spain Beckham Law (Art. 93 LIRPF) vs. General Progressive IRPF Formula",
      formulaCode: "Beckham Tax (Modelo 151) = (min(Gross, €600,000) × 24%) + (max(0, Gross − €600,000) × 47%) | Employee SS (2026) = min(Gross, €61,214.40) × 6.50% (Max €3,979/yr)",
      formulaNotes: "Under Article 93 of Ley 35/2006 (LIRPF), amended by Ley 28/2022 ('Ley de Startups') and Ley 7/2024: employment income is taxed at a flat 24% up to €600,000 and 47% on the excess for the year of arrival plus 5 subsequent tax years (6 years total). No personal allowance (€5,550) applies under the special regime.",
      tableTitle: "2026 Spain Beckham Law (Art. 93 LIRPF) vs. Standard IRPF Worked Comparison",
      tableHeaders: ["Gross Salary (€)", "2026 Employee SS", "Standard IRPF Tax", "Beckham Law Tax (24%)", "Beckham Net Annual", "Annual Tax Saved", "6-Year Total Saved"],
      tableRows: [
        ["€60,000", "€3,900", "€14,510 (24.2%)", "€14,400 (24.0%)", "€41,700 (€3,475/mo)", "+€110/yr", "+€660"],
        ["€90,000", "€3,979 (Capped)", "€26,590 (29.5%)", "€21,600 (24.0%)", "€64,421 (€5,368/mo)", "+€4,990/yr", "+€29,940"],
        ["€120,000", "€3,979 (Capped)", "€40,090 (33.4%)", "€28,800 (24.0%)", "€87,221 (€7,268/mo)", "+€11,290/yr", "+€67,740"],
        ["€200,000", "€3,979 (Capped)", "€76,090 (38.0%)", "€48,000 (24.0%)", "€148,021 (€12,335/mo)", "+€28,090/yr", "+€168,540"],
        ["€350,000", "€3,979 (Capped)", "€144,550 (41.3%)", "€84,000 (24.0%)", "€262,021 (€21,835/mo)", "+€60,550/yr", "+€363,300"],
        ["€650,000", "€3,979 (Capped)", "€285,550 (43.9%)", "€167,500 (25.8%)*", "€478,521 (€39,877/mo)", "+€118,050/yr", "+€708,300"]
      ],
      sections: [
        {
          heading: "How Spain's Beckham Law (Régimen Especial de Trabajadores Desplazados — Art. 93 LIRPF) Works in 2026",
          body: "Officially titled the Régimen fiscal especial aplicable a los trabajadores, profesionales, emprendedores e inversores desplazados a territorio español under Article 93 of Law 35/2006 (LIRPF) and modernized by Law 28/2022 ('Startup Law'), the Beckham Law allows qualifying newcomers to become Spanish tax residents while being taxed under Non-Resident Income Tax (IRNR) rules for 6 tax years (the calendar year of acquiring tax residency plus the following 5 years). Instead of facing progressive Spanish IRPF rates reaching 45%–47% (or up to 54% in certain autonomous communities), employment income up to €600,000 is taxed at a flat 24%, and any portion above €600,000 is taxed at 47%."
        },
        {
          heading: "Who Qualifies After the Startup Law (Ley 28/2022) Expansion?",
          body: "To qualify in 2026, you must not have been a Spanish tax resident during the previous 5 tax years (reduced from 10 years by Ley 28/2022), and your move to Spain must be triggered by one of four qualifying pathways: (1) an employment transfer to Spain or a new employment contract with a Spanish employer; (2) international remote workers (Digital Nomad Visa holders) employed by a foreign company using exclusively computer/telecommunications systems; (3) appointment as a company director (administrador)—if the entity is patrimonial (asset-holding), your equity stake must be below 25%, whereas for active operating entities the 25% shareholding limit was removed; or (4) certified innovative entrepreneurs (ENISA endorsement) and highly qualified professionals providing R&D or startup services. Spouses and children under 25 (or any age with a disability) who move with the main taxpayer can also opt into the regime provided their combined taxable income is lower than the principal applicant's."
        },
        {
          heading: "Foreign Dividends, Capital Gains (Ley 7/2024 Scale) & Wealth Tax Rules",
          body: "One of the biggest advantages of the Beckham Law is territorial taxation on passive investment income: non-Spanish foreign dividends, foreign interest, and capital gains from selling foreign shares or real estate outside Spain are 0% taxed in Spain (though still subject to source-country withholding taxes, frequently without treaty relief since Beckham taxpayers cannot obtain standard residency certificates for all bilateral treaties). Spanish-source savings income (dividends, interest, and capital gains originating in Spain) is taxed on the special savings scale updated by Ley 7/2024: 19% on the first €6,000; 21% from €6,000 to €50,000; 23% from €50,000 to €200,000; 27% from €200,000 to €300,000; and 30% on amounts exceeding €300,000. Similarly, Spanish Wealth Tax (Impuesto sobre el Patrimonio) applies strictly on a real-obligation basis to assets located in Spain, though the Temporary Solidarity Tax on Large Fortunes can impact Spanish net assets above €3,000,000."
        },
        {
          heading: "Filing Procedure: Modelo 149 Deadline & Annual Modelo 151 Return",
          body: "Election into the Beckham Law is not automatic. You must submit Form Modelo 149 electronically to the Agencia Tributaria (AEAT) within a strict 6-month deadline from the date you register with Spanish Social Security (Alta en la Seguridad Social) or the date documented on your foreign Certificate of Coverage (A1/bilateral treaty). Once approved, AEAT issues a certificate that you give to your employer so payroll withholding is set at 24%. Each spring (typically April–June), you file your annual declaration using Modelo 151 instead of the standard Modelo 100."
        }
      ],
      extraFaqs: [
        { q: "At what salary does the Beckham Law become worth it in Spain?", a: "The breakeven point is approximately €55,000 to €60,000 gross per year. Below €55,000, standard progressive IRPF is often cheaper because standard residents receive the €5,550 personal allowance, the €2,000 employment expense deduction, and can deduct their Social Security contributions (€3,979) from their taxable base—none of which are deductible under the flat 24% Beckham Law." },
        { q: "Do I still pay Spanish Social Security under the Beckham Law?", a: "Yes. The Beckham Law only modifies your Income Tax (IRPF). Unless you hold a valid Certificate of Coverage (e.g., an EU A1 form or US/UK bilateral detachment certificate), you pay normal Spanish employee Social Security at roughly 6.50% (4.70% common contingencies + 1.55% unemployment + 0.10% training + 0.15% MEI), capped at the 2026 maximum base of €5,101.20/month (€3,979/year maximum employee contribution)." },
        { q: "Can freelancers (autónomos) apply for the Beckham Law?", a: "Standard self-employed freelancers (autónomos) cannot apply merely by registering as self-employed. However, under Ley 28/2022, self-employed professionals can qualify ONLY if they obtain official ENISA certification for an innovative entrepreneurial activity or qualify as highly skilled professionals providing services to startups or R&D projects." },
        { q: "What happens if I miss the 6-month Modelo 149 filing deadline?", a: "The 6-month window from your Spanish Social Security registration date is a strict statutory forfeiture deadline (plazo de caducidad). Missing it permanently disqualifies you from opting into Article 93 LIRPF for that relocation." },
        { q: "Can I exit the Beckham Law early if my salary drops?", a: "Yes. You may voluntarily renounce the special regime during November or December of any year via Modelo 149, taking effect on January 1 of the following tax year. Once renounced, you cannot re-enter the regime." }
      ]
    },
    es: {
      formulaTitle: "Fórmula Oficial de la Ley Beckham (Art. 93 LIRPF) vs. IRPF General Progresivo",
      formulaCode: "Cuota Ley Beckham (Modelo 151) = (mín(Bruto, 600.000 €) × 24%) + (máx(0, Bruto − 600.000 €) × 47%) | Seg. Social Trabajador (2026) = mín(Bruto, 61.214,40 €) × 6,50% (Máx. 3.979 €/año)",
      formulaNotes: "Según el Artículo 93 de la Ley 35/2006 (LIRPF), reformado por la Ley 28/2022 ('Ley de Startups') y la Ley 7/2024: los rendimientos del trabajo tributan al tipo fijo del 24% hasta 600.000 € y al 47% sobre el exceso durante el año de llegada más 5 años adicionales (6 ejercicios fiscales en total), sin mínimo personal ni deducción de Seguridad Social en la base del 24%.",
      tableTitle: "Comparativa Práctica 2026: Ley Beckham (Art. 93 LIRPF) vs. IRPF General en España",
      tableHeaders: ["Salario Bruto Anual", "Seg. Social 2026", "IRPF General", "Impuesto Ley Beckham", "Salario Neto Beckham", "Ahorro Anual", "Ahorro Total (6 Años)"],
      tableRows: [
        ["60.000 €", "3.900 €", "14.510 € (24,2%)", "14.400 € (24,0%)", "41.700 € (3.475 €/mes)", "+110 €/año", "+660 €"],
        ["90.000 €", "3.979 € (Tope)", "26.590 € (29,5%)", "21.600 € (24,0%)", "64.421 € (5.368 €/mes)", "+4.990 €/año", "+29.940 €"],
        ["120.000 €", "3.979 € (Tope)", "40.090 € (33,4%)", "28.800 € (24,0%)", "87.221 € (7.268 €/mes)", "+11.290 €/año", "+67.740 €"],
        ["200.000 €", "3.979 € (Tope)", "76.090 € (38,0%)", "48.000 € (24,0%)", "148.021 € (12.335 €/mes)", "+28.090 €/año", "+168.540 €"],
        ["350.000 €", "3.979 € (Tope)", "144.550 € (41,3%)", "84.000 € (24,0%)", "262.021 € (21.835 €/mes)", "+60.550 €/año", "+363.300 €"],
        ["650.000 €", "3.979 € (Tope)", "285.550 € (43,9%)", "167.500 € (25,8%)*", "478.521 € (39.877 €/mes)", "+118.050 €/año", "+708.300 €"]
      ],
      sections: [
        {
          heading: "¿Cómo funciona exactamente la Ley Beckham (Artículo 93 LIRPF) en 2026?",
          body: "El Régimen fiscal especial aplicable a los trabajadores, profesionales, emprendedores e inversores desplazados a territorio español (regulado en el artículo 93 de la Ley 35/2006 del IRPF y ampliado por la Ley 28/2022 de Fomento del Ecosistema de las Empresas Emergentes) permite a los nuevos residentes fiscales en España tributar conforme a las reglas del Impuesto sobre la Renta de No Residentes (IRNR) durante el período impositivo del cambio de residencia y los cinco siguientes (6 años en total). En lugar de aplicar la escala progresiva del IRPF general (que alcanza entre el 45% y el 54% según la Comunidad Autónoma), todos los rendimientos del trabajo tributan a un tipo fijo del 24% hasta 600.000 € anuales, y al 47% de ahí en adelante."
        },
        {
          heading: "Requisitos de Elegibilidad tras la Ley de Startups (Ley 28/2022)",
          body: "Para solicitar el régimen especial en 2026 deben cumplirse dos requisitos esenciales: (1) no haber sido residente fiscal en España durante los 5 períodos impositivos anteriores al desplazamiento (reducido desde los antiguos 10 años), y (2) que el traslado a territorio español se produzca por una de las causas habilitadas en la ley: un contrato de trabajo con empleador español o carta de desplazamiento internacional; teletrabajo internacional con visado de nómada digital para una empresa extranjera; adquisición de la condición de administrador de una sociedad (sin límite de participación accionarial salvo que sea una entidad patrimonial, en cuyo caso debe ser inferior al 25%); o realización de una actividad emprendedora innovadora con informe favorable de ENISA / profesionales altamente cualificados en I+D+i. Además, el cónyuge y los hijos menores de 25 años pueden acogerse como asociados si su base liquidable conjunta es inferior a la del contribuyente principal."
        },
        {
          heading: "Tributación del Ahorro (Ley 7/2024), Dividendos Extranjeros e Impuesto sobre el Patrimonio",
          body: "Bajo el artículo 93 LIRPF, las rentas pasivas de fuente extranjera (dividendos de acciones extranjeras, intereses de cuentas fuera de España y plusvalías por venta de inmuebles o carteras en el extranjero) no tributan en España (0% en el Modelo 151), a diferencia de los rendimientos del trabajo que sí tributan por renta mundial. Las rentas del ahorro de fuente española tributan según la escala actualizada por la Ley 7/2024: 19% hasta 6.000 €; 21% de 6.000 € a 50.000 €; 23% de 50.000 € a 200.000 €; 27% de 200.000 € a 300.000 €; y 30% para importes superiores a 300.000 €. En el Impuesto sobre el Patrimonio se tributa únicamente por obligación real (bienes situados en territorio español)."
        },
        {
          heading: "Plazo del Modelo 149 y Declaración Anual en el Modelo 151",
          body: "La solicitud se realiza presentando telemáticamente el Modelo 149 ante la Agencia Tributaria (AEAT) en el plazo máximo e improrrogable de 6 meses desde la fecha de alta en la Seguridad Social española (o desde la fecha de inicio que conste en la documentación de mantenimiento de Seguridad Social de origen). Una vez concedido el certificado, la declaración anual se presenta mediante el Modelo 151."
        }
      ],
      extraFaqs: [
        { q: "¿A partir de qué sueldo compensa pedir la Ley Beckham en España?", a: "El punto de equilibrio suele situarse entre los 55.000 € y 60.000 € brutos anuales. Por debajo de 55.000 €, el IRPF general progresivo suele resultar más favorable porque permite aplicar el mínimo personal (5.550 €), la reducción por gastos del trabajo (2.000 €) y deducir las cotizaciones a la Seguridad Social (hasta 3.979 €/año), deducciones que no existen en el tipo fijo del 24% de la Ley Beckham." },
        { q: "¿Cuánto se paga de Seguridad Social con la Ley Beckham en 2026?", a: "La Ley Beckham solo afecta al IRPF, no a la Seguridad Social. El trabajador cotiza aproximadamente el 6,50% (4,70% contingencias comunes + 1,55% desempleo + 0,10% formación + 0,15% MEI) sobre su salario hasta la base máxima de cotización de 2026 (5.101,20 €/mes o 61.214,40 €/año), lo que supone un tope máximo de unos 3.979 € anuales a cargo del empleado." },
        { q: "¿Puede un autónomo acogerse a la Ley Beckham?", a: "Un autónomo tradicional no puede acogerse por el mero alta en el RETA. Solo pueden acceder los profesionales por cuenta propia cuya actividad sea calificada como emprendedora e innovadora con informe de ENISA, o los profesionales altamente cualificados que presten servicios a empresas emergentes (startups) o proyectos de I+D+i." },
        { q: "¿Qué ocurre si presento el Modelo 149 fuera del plazo de 6 meses?", a: "El plazo de 6 meses desde el alta en la Seguridad Social es de caducidad. Si se presenta fuera de plazo, la Agencia Tributaria deniega automáticamente la opción y el contribuyente tributará en el IRPF general." },
        { q: "¿Se puede renunciar a la Ley Beckham antes de que terminen los 6 años?", a: "Sí, se puede comunicar la renuncia voluntaria mediante el Modelo 149 durante los meses de noviembre y diciembre, surtiendo efecto para el ejercicio fiscal siguiente. Una vez se renuncia, no es posible volver a solicitar el régimen." }
      ]
    }
  },

  contractor: {
    en: {
      formulaTitle: "Salaried Employee vs. Independent Contractor Equivalence Formula",
      formulaCode: "Required Billable Rate = (Target Net Pay + Self-Employment Tax + Income Tax + Private Health/Pension + Business Overhead) ÷ Annual Billable Hours",
      formulaNotes: "Annual Billable Hours = (52 Weeks − Vacation Weeks − Public Holidays − Sick Days) × Weekly Billable Hours (typically 1,200 to 1,680 billable hours/year after accounting for non-billable admin and business development).",
      tableTitle: "2026 Salaried Employee vs. Independent Contractor Breakeven Matrix",
      tableHeaders: ["Salaried Offer (Gross)", "Jurisdiction & Regime", "Employee Net Pay", "Equivalent Contractor Gross Needed", "Min. Daily Rate (220 Days)", "Min. Hourly Rate (1,540 Hrs)"],
      tableRows: [
        ["$120,000 (W-2)", "🇺🇸 US W-2 vs 1099 (SECA 15.3%)", "$89,400", "$158,000 (+31.7%)", "$718/day", "$103/hr"],
        ["£85,000 (PAYE)", "🇬🇧 UK Inside IR35 (Umbrella)", "£59,690", "£114,500 (+34.7%)", "£520/day", "£74/hr"],
        ["£85,000 (PAYE)", "🇬🇧 UK Outside IR35 (Ltd Co)", "£59,690", "£98,000 (+15.3%)", "£445/day", "£64/hr"],
        ["€90,000 (Brutto)", "🇩🇪 Germany Festanstellung vs Freiberufler", "€53,200", "€124,000 (+37.8%)", "€564/day", "€81/hr"],
        ["€80,000 (Salaried)", "🇪🇸 Spain Nómina vs Autónomo B2B", "€53,400", "€106,000 (+32.5%)", "€482/day", "€69/hr"]
      ],
      sections: [
        {
          heading: "US W-2 vs. 1099-NEC: Understanding the 15.3% SECA Tax and QBI Deduction",
          body: "In the United States, a W-2 employee splits FICA payroll taxes 50/50 with their employer: the employee pays 6.2% Social Security (up to the $176,100 wage base) plus 1.45% Medicare, and the employer pays the matching 7.65%. When you transition to an independent 1099 contractor, you pay both halves via the 15.3% Self-Employment Contributions Act (SECA) tax on 92.35% of your net business profit. While you can deduct half of your SE tax above the line and potentially claim the 20% Qualified Business Income (QBI) deduction under IRC Section 199A (or elect S-Corp status to split reasonable salary and distributions), you must also fund your own ACA/private health insurance ($6,000–$18,000/yr), 401(k) match, and unpaid PTO."
        },
        {
          heading: "UK Inside IR35 vs. Outside IR35 (Off-Payroll Working Rules)",
          body: "Under Chapter 10 of ITEPA 2003, medium and large UK clients must issue a Status Determination Statement (SDS) classifying contractors as Inside IR35 or Outside IR35. An 'Inside IR35' contract treats your fee as deemed employment: if working via an Umbrella company, your headline daily rate must cover Employer National Insurance (15% above the secondary threshold), the Apprenticeship Levy (0.5%), Umbrella margin, Employee PAYE Income Tax, and Employee Class 1 NI. Conversely, an 'Outside IR35' contractor operating through a Limited Company pays Corporation Tax (19% small profits rate up to £50k, tapering to 25% over £250k) and draws a tax-efficient mix of small director salary (£12,570) and dividends (8.75% basic rate, 33.75% higher rate)."
        },
        {
          heading: "Germany Freelancer Tax (Freiberufler vs. Gewerbetreibender & Scheinselbstständigkeit)",
          body: "In Germany, independent professionals classified as Freiberufler under § 18 EStG (such as software engineers, IT architects, designers, and management consultants with relevant academic or technical qualifications) are exempt from Municipal Trade Tax (Gewerbesteuer) and mandatory chamber of commerce fees. However, German freelancers must cover 100% of their statutory or private health insurance (GKV/PKV, up to ~€1,050/month at the contribution ceiling), pension provisioning, and progressive Einkommensteuer (14%–45%). Contractors with a single primary client must also structure contracts carefully to avoid false self-employment (Scheinselbstständigkeit) reclassification by the Deutsche Rentenversicherung."
        }
      ],
      extraFaqs: [
        { q: "What is the rule-of-thumb markup when switching from W-2 to 1099?", a: "Most senior engineers and consultants require a 30% to 45% gross premium over their equivalent W-2 salary to offset the extra 7.65% employer FICA share, 4–5 weeks of unpaid PTO/holidays, health insurance premiums, and unbilled downtime between contracts." },
        { q: "How does an S-Corp election reduce 1099 self-employment tax in the US?", a: "Once net 1099 profit consistently exceeds $90,000–$100,000, electing S-Corp status (Form 2553) allows you to pay yourself a 'reasonable W-2 salary' subject to the 15.3% FICA tax while taking remaining profits as shareholder distributions exempt from self-employment tax." },
        { q: "What is the difference between a Freiberufler and a Gewerbetreibender in Germany?", a: "Freiberufler (§ 18 EStG catalog professions like IT engineers, doctors, lawyers, writers) do not pay Gewerbesteuer (trade tax, ~14%–17%) and do not need double-entry bookkeeping (Bilanzierung), whereas commercial businesses (Gewerbe) must register with the Gewerbeamt and pay trade tax above the €24,500 allowance." },
        { q: "Why is my Umbrella company deduction so high on an Inside IR35 contract?", a: "Because UK law forbids passing Employer National Insurance directly to the worker, Umbrella rates are quoted as an 'assignment rate' that includes the employer's 15% NI contribution and holiday pay accrual before your personal PAYE tax is even calculated." }
      ]
    },
    de: {
      formulaTitle: "Berechnungsformel: Freelancer-Stundensatz vs. Brutto-Netto in Festanstellung",
      formulaCode: "Erforderlicher Freelancer-Umsatz = (Ziel-Netto + Einkommensteuer § 32a EStG + Kranken-/Pflegeversicherung + Altersvorsorge + Betriebskosten) ÷ Fakturierbare Jahresstunden",
      formulaNotes: "Freiberufler nach § 18 EStG (z. B. IT-Ingenieure, Softwarearchitekten, Unternehmensberater) sind von der Gewerbesteuer befreit, tragen jedoch den vollen Kranken- und Pflegeversicherungsbeitrag sowie Urlaubs- und Ausfallzeiten selbst.",
      tableTitle: "2026 Vergleichstabelle: Festanstellung (Steuerklasse I) vs. Freiberufler in Deutschland",
      tableHeaders: ["Bruttogehalt (Festanstellung)", "Netto-Gehalt (StKl. I)", "AG-Gesamtkosten", "Äquivalenter Freelancer-Jahresumsatz", "Min. Tagessatz (200 Tage)", "Min. Stundensatz (1.600 Std.)"],
      tableRows: [
        ["65.000 €", "40.150 €", "78.650 €", "92.000 € (+41,5%)", "460 € / Tag", "58 € / Std."],
        ["85.000 €", "50.480 €", "101.900 €", "118.000 € (+38,8%)", "590 € / Tag", "74 € / Std."],
        ["105.000 €", "61.120 €", "122.300 €", "144.000 € (+37,1%)", "720 € / Tag", "90 € / Std."],
        ["130.000 €", "74.950 €", "147.300 €", "176.000 € (+35,4%)", "880 € / Tag", "110 € / Std."]
      ],
      sections: [
        {
          heading: "Freelancer Steuerrechner Deutschland: Freiberufler (§ 18 EStG) vs. Gewerbebetrieb",
          body: "In Deutschland entscheidet die Einstufung durch das Finanzamt darüber, ob Sie als Freiberufler (Katalogberufe nach § 18 EStG wie Ingenieure, Informatiker mit Hochschulabschluss/vergleichbarer Qualifikation, Wirtschaftsprüfer, Designer) oder als Gewerbetreibender gelten. Freiberufler genießen zwei wesentliche Vorteile: Sie zahlen keine Gewerbesteuer (je nach Hebesatz der Gemeinde ca. 14 % bis 17 %) und dürfen ihren Gewinn unabhängig vom Umsatz per einfacher Einnahmen-Überschuss-Rechnung (EÜR nach § 4 Abs. 3 EStG) ermitteln. Dennoch unterliegt der Gewinn dem progressiven Einkommensteuertarif (14 % Eingangssteuersatz bis 42 % Spitzensteuersatz ab ca. 68.480 € bzw. 45 % Reichensteuer ab 277.826 €)."
        },
        {
          heading: "Krankenversicherung (GKV vs. PKV), Altersvorsorge und Ausfallzeiten kalkulieren",
          body: "Während der Arbeitgeber in einer Festanstellung die Hälfte der Beiträge zur gesetzlichen Kranken-, Pflege-, Renten- und Arbeitslosenversicherung übernimmt (ca. 20–21 % auf das Bruttogehalt bis zur Beitragsbemessungsgrenze), zahlt ein Selbstständiger in der freiwilligen gesetzlichen Krankenversicherung (GKV) den vollen Beitragssatz inklusive Zusatzbeitrag und Pflegeversicherung selbst—bei Erreichen der Beitragsbemessungsgrenze sind das über 1.050 € pro Monat. Hinzu kommen 30 Urlaubstage, ca. 10 gesetzliche Feiertage, Krankheitstage sowie Akquise- und Weiterbildungszeiten, sodass realistisch meist nur 180 bis 210 fakturierbare Projekttage pro Jahr verbleiben."
        },
        {
          heading: "Scheinselbstständigkeit vermeiden & Internationale B2B-Kunden (Reverse Charge)",
          body: "Arbeiten IT-Freelancer über längere Zeiträume ausschließlich für einen einzigen Auftraggeber und sind weisungsgebunden in dessen Arbeitsorganisation integriert, besteht das Risiko eines Statusfeststellungsverfahrens wegen Scheinselbstständigkeit durch die Deutsche Rentenversicherung. Durch mehrere Auftraggeber, eigene Betriebsmittel, unternehmerisches Risiko und klare Werk-/Dienstverträge sichern Sie Ihren Status ab. Bei Projekten für ausländische Unternehmenskunden innerhalb der EU oder in den USA greift zudem das Reverse-Charge-Verfahren (§ 13b UStG) bzw. die Nichtsteuerbarkeit im Inland."
        }
      ],
      extraFaqs: [
        { q: "Wie viel Stundensatz muss ich als IT-Freelancer in Deutschland verlangen, um 85.000 € Bruttogehalt zu ersetzen?", a: "Um das Nettogehalt (ca. 50.480 €) inklusive Arbeitgeberanteil zur Rentenversicherung, voller Krankenversicherung, 30 Urlaubstagen und Betriebskosten auszugleichen, benötigen Sie bei 1.600 fakturierbaren Jahresstunden (200 Tage à 8 Std.) einen Netto-Stundensatz von mindestens 74 € bis 85 € zzgl. Umsatzsteuer." },
        { q: "Wann lohnt sich als Freelancer die Gründung einer GmbH oder Holding?", a: "Ab einem nachhaltigen Jahresgewinn von ca. 120.000 € bis 150.000 € kann eine GmbH steuerlich vorteilhaft sein: Die Gesamtsteuerbelastung auf GmbH-Ebene (Körperschaftsteuer 15 % + Soli + Gewerbesteuer) liegt bei ca. 30 %, während nicht ausgeschüttete Gewinne in einer Holding-Struktur nahezu steuerfrei (effektiv ~1,5 % Steuerlast nach § 8b KStG) reinvestiert werden können." },
        { q: "Wie funktioniert die Einkommensteuer-Vorauszahlung im ersten Jahr der Selbstständigkeit?", a: "Nach Abgabe des Fragebogens zur steuerlichen Erfassung setzt das Finanzamt vierteljährliche Einkommensteuer-Vorauszahlungen (10. März, 10. Juni, 10. September, 10. Dezember) fest. Legen Sie vom ersten Tag an 35 % bis 42 % Ihres Netto-Gewinns auf ein separates Steuer-Tagesgeldkonto zurück." }
      ]
    }
  },

  'eor-cost': {
    en: {
      formulaTitle: "Employer of Record (EOR) vs. Local Subsidiary Total Cost of Ownership (TCO) Formula",
      formulaCode: "Annual EOR TCO = Headcount × (Gross Salary × (1 + Employer Statutory Burden %) + (Monthly EOR Fee × 12)) | Entity TCO = Headcount × (Gross Salary × (1 + Burden %)) + Incorporation Amortized + Annual Legal/Payroll/Tax Accounting",
      formulaNotes: "Employer Statutory Burden (social security, payroll taxes, mandatory 13th/14th month bonuses, severance accruals) is identical whether you hire via an EOR or your own local entity; the breakeven is driven by EOR platform seat fees ($499–$599/mo) vs. fixed entity incorporation and maintenance overhead.",
      tableTitle: "2026 Employer Statutory Payroll Burden & 3-Year EOR vs. Entity Breakeven by Country",
      tableHeaders: ["Country", "Employer Statutory Burden %", "Key Mandatory Employer Contributions", "Entity Setup + Annual Maint.", "EOR Breakeven Headcount"],
      tableRows: [
        ["🇺🇸 United States", "8.5% – 12.0%", "FICA (7.65%), FUTA/SUTA, Workers' Comp", "$2,500 + $6,000/yr", "2 – 3 Employees"],
        ["🇬🇧 United Kingdom", "15.5% – 18.0%", "Employer Class 1 NI (15%), Pension Auto-Enrolment (3%)", "$1,500 + $5,500/yr", "2 – 3 Employees"],
        ["🇩🇪 Germany", "20.5% – 22.0%", "Health, Pension, Unemployment, Care + Umlage U1/U2/U3", "$8,500 + $14,000/yr", "4 – 5 Employees"],
        ["🇪🇸 Spain", "30.5% – 32.5%", "Contingencias Comunes (23.6%), Desempleo (5.5%), FOGASA, MEI", "$6,500 + $12,000/yr", "3 – 4 Employees"],
        ["🇫🇷 France", "42.0% – 46.0%", "URSSAF Health, Retirement, Family, Prevoyance, Transport", "$7,500 + $16,000/yr", "4 – 5 Employees"],
        ["🇧🇷 Brazil (CLT)", "65.0% – 80.0%", "INSS Patronal (20%), FGTS (8%), 13th Salary, 1/3 Vacation Bonus", "$9,000 + $18,000/yr", "4 – 6 Employees"]
      ],
      sections: [
        {
          heading: "Deconstructing Total Employer Cost: Gross Salary + Mandatory Employer Social Taxes + EOR Fee",
          body: "When budgeting for an international hire, the gross salary on the offer letter is only the starting point. Every jurisdiction mandates employer-side payroll contributions—ranging from 7.65% FICA in the United States and 15% Employer National Insurance in the UK, to ~31.5% Seguridad Social in Spain, ~45% URSSAF charges in France, and up to 70%+ under Brazil's CLT regime (once 13th-month salary, vacation bonuses, and FGTS severance reserves are accrued). An Employer of Record (such as Deel, Remote, Oyster, or Rippling) passes through 100% of these statutory employer taxes at cost and adds a flat software/compliance fee of $399 to $599 per employee per month."
        },
        {
          heading: "Calculating the Exact Headcount Breakeven Between EOR and Local Entity Incorporation",
          body: "At 1 to 3 employees in a foreign country, an EOR is almost always cheaper and dramatically faster (onboarding in 48 hours vs. 3–6 months of notary, bank account, and tax registration delays). However, because EOR pricing scales linearly per seat ($599/mo × 12 = $7,188/year per employee), hiring 5 employees costs Nearly $36,000/year in pure platform fees. In most European and Latin American jurisdictions, incorporating a local GmbH, S.L., or Ltd costs $3,000–$9,000 upfront plus $10,000–$16,000/year in local payroll bureau, corporate tax filing, and registered office fees—meaning local entity ownership breaks even at 3 to 5 full-time employees."
        },
        {
          heading: "Hidden EOR Costs: FX Spreads on Payroll Funding and Intellectual Property Assignment",
          body: "Beyond the monthly per-seat fee, CFOs and finance teams should audit the foreign exchange (FX) spread charged when funding payroll in USD/EUR to pay local salaries in GBP, PLN, BRL, or INR. A 1.5% to 2.5% FX conversion fee on a $120,000 total employment cost adds an extra $1,800–$3,000 per year per employee—often exceeding a third of the headline EOR fee. Additionally, ensure your EOR master services agreement includes an unbroken chain of IP assignment from the local EOR entity back to your parent corporation."
        }
      ],
      extraFaqs: [
        { q: "Does using an Employer of Record eliminate Permanent Establishment (PE) corporate tax risk?", a: "An EOR mitigates employment compliance risk, but it does not automatically shield the parent company from Permanent Establishment (PE) corporate tax risk if the EOR employees are senior executives or sales directors who habitually conclude contracts or generate direct revenue in that country." },
        { q: "Can an EOR grant stock options (ISOs / ESOPs / RSUs) to international employees?", a: "Yes, the parent company can grant equity or RSUs directly to workers employed via an EOR, though upon vesting or exercise, tax withholding and employer social security reporting must be coordinated through the EOR's local payroll." },
        { q: "What happens when we graduate from an EOR to our own local subsidiary?", a: "Transitioning employees from an EOR to your newly incorporated subsidiary requires either a formal transfer of undertakings (such as TUPE in the UK/EU, preserving seniority) or mutual termination and re-hire contracts." }
      ]
    }
  },

  'hourly-rate': {
    en: {
      formulaTitle: "Freelancer Minimum Viable Hourly Rate (MVHR) Formula",
      formulaCode: "Min. Hourly Rate = ((Target Annual Net Income ÷ (1 − Effective Tax Rate)) + Annual Business Overhead + Health/Retirement) ÷ (Work Weeks × Weekly Hours × Utilization %)",
      formulaNotes: "Utilization % represents the share of total working hours directly billed to clients (typically 55%–68% after sales, proposals, invoicing, and maintenance).",
      tableTitle: "2026 Freelancer Hourly & Day Rate Benchmarks by Target Net Income",
      tableHeaders: ["Target Annual Net Pay", "Est. Tax + Overhead", "Gross Revenue Required", "At 1,000 Billable Hrs/Yr", "At 1,350 Billable Hrs/Yr", "At 1,600 Billable Hrs/Yr"],
      tableRows: [
        ["$60,000 Net", "$32,000", "$92,000", "$92 / hr ($736/day)", "$68 / hr ($545/day)", "$58 / hr ($460/day)"],
        ["$90,000 Net", "$48,500", "$138,500", "$139 / hr ($1,108/day)", "$103 / hr ($820/day)", "$87 / hr ($693/day)"],
        ["$120,000 Net", "$66,000", "$186,000", "$186 / hr ($1,488/day)", "$138 / hr ($1,102/day)", "$116 / hr ($930/day)"],
        ["$160,000 Net", "$91,000", "$251,000", "$251 / hr ($2,008/day)", "$186 / hr ($1,487/day)", "$157 / hr ($1,255/day)"]
      ],
      sections: [
        {
          heading: "The 2,080-Hour Fallacy: Why Billable Utilization Determines Freelance Survival",
          body: "Salaried employees are compensated for 2,080 hours per year (52 weeks × 40 hours), including paid vacation, public holidays, internal meetings, and quiet weeks. Independent freelancers only generate revenue during billable client hours. Once you subtract 4 weeks of vacation, 2 weeks of public holidays/sick leave, and 12–15 hours per week spent on lead generation, scoping calls, bookkeeping, and professional development, a healthy full-time solo consultant typically bills between 1,150 and 1,450 hours per year."
        },
        {
          heading: "Accounting for Hidden Freelance Overhead and Bench Time",
          body: "Every hourly rate calculation must build in a buffer for 'bench time'—the 2 to 6 weeks between project offboarding and the start of the next signed statement of work. In addition, software subscriptions (cloud hosting, AI coding assistants, design suites), professional indemnity insurance, CPA/tax filing fees, and a 3-year hardware replacement cycle typically add $4,500 to $12,000 in fixed annual overhead before a single dollar reaches your personal savings."
        },
        {
          heading: "Transitioning from Hourly Billing to Value-Based Retainers and Day Rates",
          body: "Once you know your exact minimum viable hourly rate (floor rate), avoid quoting single hours for complex engineering or advisory work. Packaging your floor rate into weekly sprints or monthly retainers increases utilization predictability and eliminates unpaid context-switching overhead."
        }
      ],
      extraFaqs: [
        { q: "What is a realistic billable utilization rate for a solo software consultant?", a: "Between 60% and 70% (roughly 24 to 28 billable hours out of a 40-hour workweek). Utilization above 80% is usually only achievable on long-term 6–12 month staff-augmentation contracts." },
        { q: "Should I charge clients for discovery calls and project scoping?", a: "Initial 30-minute introductory calls are absorbed into your unbilled overhead rate, but multi-day architectural audits or specification roadmaps should be billed as paid discovery sprints." },
        { q: "How do I adjust my hourly rate for short-term urgent projects?", a: "Apply a 25% to 50% rush/short-duration multiplier on engagements shorter than 4 weeks to compensate for the higher client onboarding and sales cost per billable hour." }
      ]
    }
  },

  'crypto-tax': {
    en: {
      formulaTitle: "Two-Stage Crypto Salary & Capital Gains Tax Formula",
      formulaCode: "Total Crypto Tax = (Fair Market Value at Receipt × Ordinary Income Tax + Payroll Tax) + (max(0, Sale Value − FMV Cost Basis) × Capital Gains Rate)",
      formulaNotes: "Receiving salary or freelance invoices in BTC, ETH, USDT, or USDC establishes your FIFO/specific-identification cost basis equal to the fiat value on the timestamp the tokens hit your wallet.",
      tableTitle: "2026 Crypto Income & Capital Gains Tax Treatment Across Key Jurisdictions",
      tableHeaders: ["Country", "Crypto Salary at Receipt", "Short-Term Capital Gains (<1 Yr)", "Long-Term Capital Gains (>1 Yr)", "Key Statutory Rule / Exemption"],
      tableRows: [
        ["🇺🇸 United States", "Ordinary Income + FICA/SECA", "10% – 37% (Ordinary Brackets)", "0%, 15%, or 20% (+3.8% NIIT)", "Form 8949 / Schedule D; no wash-sale rule on spot crypto yet"],
        ["🇬🇧 United Kingdom", "PAYE Income Tax + Class 1/4 NI", "18% (Basic) / 24% (Higher)", "18% (Basic) / 24% (Higher)", "£3,000 annual CGT allowance; Section 104 share pooling"],
        ["🇩🇪 Germany", "Einkommensteuer (14% – 45%)", "14% – 45% (Exempt if gain <€1,000)", "0% Tax-Free (>365 Days Hold)", "§ 23 EStG Private Veräußerungsgeschäfte 1-year holding exemption"],
        ["🇵🇹 Portugal", "IRS Employment / Category B Tax", "28% Flat Tax (<365 Days Hold)", "0% Tax-Free (>365 Days Hold)", "Crypto-to-crypto swaps untaxed until converted to fiat or held <1 yr"],
        ["🇪🇸 Spain (General)", "IRPF General Scale (19% – 47%)", "19% – 30% (Savings Scale)", "19% – 30% (Savings Scale)", "FIFO mandatory; Modelo 721 required if foreign crypto >€50,000"],
        ["🇦🇪 UAE / Dubai", "0% Personal Income Tax", "0% Capital Gains Tax", "0% Capital Gains Tax", "Individual salary & personal crypto investment gains are 0% taxed"]
      ],
      sections: [
        {
          heading: "Tax Event #1: Receiving Salary or Contractor Invoices in Crypto or Stablecoins",
          body: "Whether you are paid in volatile assets (Bitcoin, Ethereum, Solana) or USD-pegged stablecoins (USDC, USDT), tax authorities worldwide treat the receipt of tokens for services rendered as ordinary employment or self-employment income. Your taxable income equals the fair market value (FMV) in your local reporting currency (USD, EUR, GBP) at the exact date and time the transaction is confirmed in a wallet you control. This FMV simultaneously becomes your tax cost basis for future disposals."
        },
        {
          heading: "Tax Event #2: Selling, Swapping, or Spending Crypto (Capital Gains & Holding Periods)",
          body: "Any subsequent disposal—converting crypto to fiat, swapping ETH for USDC, or spending crypto on a crypto debit card—triggers a capital gains calculation equal to Sale Proceeds minus Cost Basis. Jurisdictions differ sharply on holding periods: Germany (§ 23 EStG) and Portugal completely exempt capital gains on crypto held for more than 365 days, while the United States reduces rates to long-term capital gains brackets (0%, 15%, or 20%) after 12 months."
        },
        {
          heading: "Why Stablecoin Payroll Still Requires Transaction-Level Accounting",
          body: "If a European or UK freelancer receives 10,000 USDC and holds it for three months before converting to EUR or GBP, the USD/EUR exchange rate fluctuation during those three months creates a taxable foreign-currency capital gain or loss even though USDC stayed at $1.00."
        }
      ],
      extraFaqs: [
        { q: "What happens if the crypto I received as salary crashes before I pay my taxes?", a: "This is the biggest trap in crypto compensation: your ordinary income tax liability is locked in at the high price on the day you received the tokens. If the token drops 60% in the next tax year before you sell, capital losses in many countries (like the US, capped at $3,000/yr against ordinary income) cannot fully offset prior ordinary salary tax. Always convert your tax percentage to fiat or stablecoins immediately upon receipt." },
        { q: "Is swapping BTC for USDT or USDC a taxable event?", a: "In the US, UK, Germany, and Spain, crypto-to-crypto swaps (including swapping into stablecoins) are taxable disposals that realize capital gains or losses immediately." },
        { q: "What is Spain's Modelo 721 for crypto holders?", a: "Spanish tax residents holding more than €50,000 in crypto assets on overseas exchanges or custodial platforms as of December 31 must file informative declaration Modelo 721 between January 1 and March 31." }
      ]
    }
  },

  'nomad-visa': {
    en: {
      formulaTitle: "Digital Nomad Visa Income Threshold & Dependent Multiplier Formula",
      formulaCode: "Required Monthly Income = Base Statutory Minimum (e.g., 200% Spain SMI) × (1 + Spouse Multiplier % + (Children × Child Multiplier %))",
      formulaNotes: "Many European nomad visas peg their minimum income directly to the national Minimum Interprofessional Wage (SMI)—meaning thresholds automatically rise whenever minimum wage is indexed.",
      tableTitle: "2026 Official Digital Nomad Visa Minimum Income & Tax Rules (10 Popular Destinations)",
      tableHeaders: ["Country & Visa Program", "Min. Monthly Income (Single)", "With Spouse (+1)", "Max Duration", "Local Tax Treatment Summary"],
      tableRows: [
        ["🇪🇸 Spain (Teletrabajo Internacional)", "€2,760 / mo (200% SMI)", "€3,795 / mo (+75% SMI)", "3 Yrs (Renewable to 5)", "Eligible for 24% Beckham Law (Art. 93) if W-2/employed or ENISA"],
        ["🇵🇹 Portugal (D8 Digital Nomad Visa)", "€3,480 / mo (4× Min Wage)", "€5,220 / mo (+50%)", "2 Yrs (Path to 5-Yr PR)", "Progressive IRS or 20% IFICI if role qualifies"],
        ["🇮🇹 Italy (Digital Nomad / Remote Worker)", "€2,400 / mo (~€28,000/yr)", "€3,200 / mo", "1 Yr (Renewable Annually)", "Eligible for 50% Impatriati tax base reduction if resident"],
        ["🇦🇪 UAE / Dubai (Virtual Working Program)", "$3,500 / mo", "$3,500 / mo", "1 Yr (Renewable)", "0% Personal Income Tax & 0% Capital Gains"],
        ["🇯🇵 Japan (Specified Visa — Digital Nomad)", "¥833,000 / mo (~$5,500/mo)", "¥833,000 / mo", "6 Months (Non-renewable)", "Non-resident status; foreign income untaxed in Japan during 6-mo stay"],
        ["🇭🇷 Croatia (Digital Nomad Temporary Stay)", "€2,870 / mo", "€3,157 / mo (+10%)", "18 Months", "100% exempt from Croatian local income tax on foreign remote work"],
        ["🇬🇷 Greece (Law 4825/2021 Nomad Visa)", "€3,500 / mo (Net)", "€4,200 / mo (+20%)", "2 Yrs", "50% income tax reduction for up to 7 years under Art. 5G"],
        ["🇨🇷 Costa Rica (Estancia Trabajador Remoto)", "$3,000 / mo", "$4,000 / mo (Family)", "1 Yr (Extendable to 2)", "100% exempt from Costa Rican income tax on foreign source income"]
      ],
      sections: [
        {
          heading: "Gross vs. Net Income Verification: How Consulates Audit Bank Statements",
          body: "Immigration consulates evaluate Digital Nomad Visa applications using two primary evidentiary pillars: your signed employment or B2B services contract (which must explicitly permit remote work from abroad and demonstrate at least 3 to 12 months of prior relationship with the company) and 3 to 6 months of stamped bank statements. While Spain's UGE (Unidad de Grandes Empresas y Colectivos Estratégicos) evaluates gross contract value against 200% of the Spanish SMI, countries like Greece (€3,500/mo) and Croatia (€2,870/mo) check net post-tax deposits landing in your personal bank account."
        },
        {
          heading: "Social Security Certificates of Coverage (A1 / Bilateral Totalization Treaties)",
          body: "For employed W-2 or PAYE remote workers applying for Spain's Digital Nomad Visa, the most frequent bottleneck is Social Security coverage. Either your foreign employer must obtain a bilateral Certificate of Coverage (available for the UK, EU/EEA via Form A1, and countries with applicable totalization clauses) or the foreign employer must register a non-resident contribution account in Spain, or you must structure the relationship as a B2B contractor registering in the Spanish RETA (autónomo) system."
        },
        {
          heading: "Separating Immigration Residency from Tax Residency (The 183-Day Rule)",
          body: "Holding a Digital Nomad Visa does not automatically mean you pay zero local tax. While short-term or special exempt visas (like Croatia's 18-month permit, Costa Rica's Estancia, or Japan's 6-month visa) explicitly exempt foreign remote income, spending more than 183 days in a calendar year in Spain, Portugal, or Italy makes you a statutory tax resident."
        }
      ],
      extraFaqs: [
        { q: "How is Spain's Digital Nomad Visa minimum income calculated for families?", a: "The main applicant must prove 200% of Spain's Salario Mínimo Interprofesional (SMI), plus 75% of the SMI for the first accompanying family member (spouse) and 25% of the SMI for each additional dependent child." },
        { q: "Can I use savings in my bank account instead of monthly income to qualify?", a: "Croatia allows applicants to qualify via a lump-sum bank balance (12× or 18× the monthly requirement) in lieu of monthly paystubs, and Portugal considers savings deposits alongside active remote income, whereas Spain and Greece strictly require ongoing monthly remote work income." },
        { q: "Do I need an apostilled criminal background check and private health insurance?", a: "Yes. Virtually all Digital Nomad Visas require an apostilled background check (FBI check for US citizens, ACRO for UK citizens) from every country lived in during the past 2–5 years, plus comprehensive zero-copay private health insurance." }
      ]
    }
  },

  'fx-fees': {
    en: {
      formulaTitle: "Hidden Bank Foreign Exchange (FX) Spread & Wire Cost Formula",
      formulaCode: "Total FX Loss = Wire Fee + (Transfer Amount × ((Mid-Market Rate − Bank Quoted Rate) ÷ Mid-Market Rate))",
      formulaNotes: "The mid-market rate is the midpoint between institutional buy and sell prices on global interbank FX markets. Banks embed a 1.5% to 4.5% markup inside their retail exchange rate even when advertising '$0 wire fee'.",
      tableTitle: "2026 Cross-Border Payout Comparison on $100,000 Annual Remote Income ($8,333/mo)",
      tableHeaders: ["Payment Provider / Rail", "Explicit Wire Fee", "Typical FX Rate Spread", "Total Cost on $100k/yr", "Net Received (EUR Equiv.)", "Annual Loss vs Mid-Market"],
      tableRows: [
        ["Interbank Mid-Market Benchmark", "$0", "0.00% (Reference)", "$0", "€92,000", "$0 (Baseline)"],
        ["Wise / Revolut Business (Mid-Market)", "$45 – $90/yr", "0.35% – 0.45%", "~$420/yr", "€91,614", "-$420 / yr"],
        ["Deel / Remote Contractor Payout", "$0 – $120/yr", "1.00% – 1.75%", "~$1,350/yr", "€90,758", "-$1,350 / yr"],
        ["Traditional Retail Bank (SWIFT)", "$300 – $540/yr", "2.50% – 3.50%", "~$3,300/yr", "€88,964", "-$3,300 / yr"],
        ["PayPal Cross-Border Conversion", "$0 – $180/yr", "3.50% – 4.50%", "~$4,100/yr", "€88,228", "-$4,100 / yr"]
      ],
      sections: [
        {
          heading: "How 'Zero-Fee' Bank Transfers Hide 3% Exchange Rate Markups",
          body: "When an international client sends $10,000 USD to your EUR, GBP, or TRY bank account via SWIFT, the receiving bank often advertises 'Free Incoming Wire'. However, instead of converting your $10,000 at the real Reuters/ECB mid-market rate (for example, 1 USD = 0.9200 EUR), the bank's treasury desk applies an internal retail board rate of 0.8920 EUR—quietly retaining €280 ($304) as an undisclosed FX spread on a single monthly paycheck."
        },
        {
          heading: "The Double-Conversion Trap and Correspondent Bank Lifting Fees (SHA vs. OUR)",
          body: "International SWIFT wires routed with 'SHA' (shared) fee instructions frequently pass through 1 to 3 intermediary correspondent banks, each deducting a $15 to $35 'lifting fee' before the funds even arrive. Worse, if a US client instructs their bank to convert USD to EUR before sending to a USD account abroad, the payment suffers a double FX conversion (USD → EUR → USD), losing 5% to 7% instantly."
        },
        {
          heading: "Best Practice: Receiving Same-Currency Local Rails (ACH, SEPA, Faster Payments)",
          body: "To eliminate SWIFT and bank FX spreads permanently, open multi-currency local receiving details (US ACH routing number for USD, IBAN for EUR SEPA, UK Sort Code for GBP) so your client pays you in their native currency with zero conversion, and convert on your own schedule using transparent mid-market liquidity."
        }
      ],
      extraFaqs: [
        { q: "What is the difference between SWIFT OUR, SHA, and BEN instructions?", a: "Under 'OUR', the sender pays all intermediary correspondent bank fees so the exact invoice amount arrives. Under 'SHA' (Shared), intermediary banks deduct $15–$35 lifting fees from the principal amount in transit. Always specify 'OUR' or use local ACH/SEPA rails in your B2B contract." },
        { q: "Are FX conversion fees and bank wire charges tax-deductible for freelancers?", a: "Yes. Both explicit wire fees and realized foreign exchange losses between invoice date and settlement date are deductible business financial expenses for independent contractors." },
        { q: "Why are weekend FX rates higher on fintech cards and apps?", a: "Global interbank FX markets close between Friday 5:00 PM EST and Sunday 5:00 PM EST. Many providers add a 0.5% to 1.0% weekend buffer markup to protect against Monday market gaps—always convert large invoices between Tuesday and Thursday." }
      ]
    }
  },

  vat: {
    en: {
      formulaTitle: "B2B Cross-Border VAT / GST & Reverse Charge Formula",
      formulaCode: "Domestic Invoice Total = Net Amount × (1 + Statutory VAT %) | Cross-Border B2B Export / EU Reverse Charge Total = Net Amount × 1.00 (0% VAT Charged by Supplier)",
      formulaNotes: "Under Article 44 and Article 196 of EU VAT Directive 2006/112/EC, the place of supply for B2B services is where the business customer is established; the buyer self-accounts for VAT via Reverse Charge.",
      tableTitle: "2026 Global VAT / GST Rates & Cross-Border B2B Invoicing Matrix",
      tableHeaders: ["Supplier Region", "Standard Domestic VAT/GST", "Invoicing EU B2B Client (Valid VIES)", "Invoicing US / UK / Non-EU B2B", "Mandatory Invoice Legal Annotation"],
      tableRows: [
        ["🇪🇺 EU Member State (e.g., DE 19%, ES 21%)", "19% – 27%", "0% (Intra-EU Reverse Charge)", "0% (Place of Supply Outside EU)", "'Reverse Charge — Art. 44 & 196 EU VAT Directive 2006/112/EC'"],
        ["🇬🇧 United Kingdom", "20% (Standard Rate)", "0% (Outside Scope of UK VAT)", "0% (Outside Scope of UK VAT)", "'Outside the scope of UK VAT — B2B Place of Supply Rules'"],
        ["🇹🇷 Turkey (Hizmet İhracatı)", "20% (Genel KDV)", "0% (KDV Kanunu Md. 11/1-a)", "0% (KDV Kanunu Md. 11/1-a)", "'Hizmet İhracatı kapsamında KDV'den istisnadır (3065 S.K. Md. 11/1-a)'"],
        ["🇦🇺 Australia / 🇨🇦 Canada", "10% GST / 5%–15% GST-HST", "0% (GST-Free Export)", "0% (Zero-Rated Export)", "'Zero-rated export of services to non-resident recipient'"],
        ["🇺🇸 United States", "0% Federal VAT (State Sales Tax)", "0% Export Service", "0% Out-of-State B2B Service", "No federal VAT; state SaaS sales tax applies only if economic nexus met"]
      ],
      sections: [
        {
          heading: "How the EU VAT Reverse Charge Mechanism Works (VIES Validation & EC Sales List)",
          body: "When a business or freelancer established in one EU country (for example, Spain or Germany) supplies consulting, software engineering, or marketing services to a VAT-registered company in another EU member state (for example, Ireland or the Netherlands), you do not charge domestic VAT. Instead, you must: (1) verify the client's EU VAT identification number in the European Commission's VIES database and save the consultation timestamp, (2) display both your VAT number and the buyer's VAT number on the invoice, (3) add the mandatory Reverse Charge legal note, and (4) report the transaction in your periodic Recapitulative Statement (EC Sales List / Modelo 349 in Spain / Zusammenfassende Meldung in Germany)."
        },
        {
          heading: "Invoicing B2B Clients in the US, UK, Switzerland, and UAE (Outside Scope / Export Exemption)",
          body: "When providing B2B digital or professional services to corporate clients outside your domestic tax jurisdiction (such as a European, British, or Turkish contractor invoicing a Delaware C-Corp or London Ltd), the place of supply shifts to the customer's country under international destination-principle rules. The invoice is issued with 0% VAT while retaining your full right to deduct input VAT paid on your own business expenses (such as laptops, coworking, and accounting fees)."
        },
        {
          heading: "B2B vs. B2C Digital Services: The EU One-Stop-Shop (OSS) Distinction",
          body: "Zero-rating applies strictly when your customer is a taxable business entity (B2B) or located outside the scope rules. If you sell automated SaaS subscriptions, e-books, or digital courses directly to private consumers (B2C) in the EU above the €10,000 cross-border threshold, you must charge the consumer's local country VAT rate and remit it through the EU One-Stop-Shop (OSS) portal."
        }
      ],
      extraFaqs: [
        { q: "What if my US LLC client does not have a VAT number?", a: "US companies do not have VAT numbers because the United States has no federal VAT system. To prove your US client is a business (B2B) during a tax audit, keep their Employer Identification Number (EIN / Form W-9), Certificate of Incorporation, and signed B2B contract on file." },
        { q: "Can I reclaim input VAT on my business purchases if 100% of my invoices are 0% export/reverse-charge?", a: "Yes! Cross-border B2B service exports and EU Reverse Charge supplies are 'taxable supplies with right of deduction' (unlike exempt healthcare or financial services). Many exporters receive net quarterly or annual VAT refunds from their tax office." },
        { q: "How do I calculate the net price from a VAT-inclusive gross amount?", a: "Divide the gross amount by (1 + VAT Rate). For example, to extract 20% VAT from a €1,200 gross invoice, divide €1,200 by 1.20 = €1,000 net + €200 VAT (never multiply €1,200 by 20%, which would wrongly give €240)." }
      ]
    }
  },

  salary: {
    en: {
      formulaTitle: "Purchasing Power Parity (PPP) & Geo-Arbitrage Equivalent Salary Formula",
      formulaCode: "Real PPP Equivalent Salary = Destination Net Salary × (Origin Cost-of-Living Index ÷ Destination Cost-of-Living Index)",
      formulaNotes: "Combines statutory post-tax net pay with housing-weighted local consumer price baskets to measure how much lifestyle and annual cash savings a remote salary buys across cities.",
      tableTitle: "2026 Remote Geo-Arbitrage Benchmark ($110,000 USD Gross Remote Salary)",
      tableHeaders: ["City & Tax Regime", "Effective Tax", "Monthly Net Pay", "1BR Center Rent + Living", "Net Monthly Cash Saved", "PPP Equivalent Lifestyle"],
      tableRows: [
        ["🇺🇸 San Francisco (US Resident)", "31%", "$6,325 / mo", "$4,850 / mo", "+$1,475 / mo ($17.7k/yr)", "$110,000 (Baseline)"],
        ["🇬🇧 London (UK Resident)", "29%", "$6,508 / mo", "$4,100 / mo", "+$2,408 / mo ($28.9k/yr)", "$124,500 Equiv."],
        ["🇪🇸 Madrid / Valencia (Beckham 24%)", "24%", "$6,967 / mo", "$2,450 / mo", "+$4,517 / mo ($54.2k/yr)", "$168,000 Equiv."],
        ["🇵🇹 Lisbon (IFICI 20%)", "20%", "$7,333 / mo", "$2,350 / mo", "+$4,983 / mo ($59.8k/yr)", "$179,000 Equiv."],
        ["🇦🇪 Dubai (0% Personal Tax)", "0%", "$9,167 / mo", "$3,600 / mo", "+$5,567 / mo ($66.8k/yr)", "$195,000 Equiv."],
        ["🇹🇭 Bangkok / Chiang Mai (LTR)", "10%–17%", "$7,800 / mo", "$1,650 / mo", "+$6,150 / mo ($73.8k/yr)", "$235,000 Equiv."]
      ],
      sections: [
        {
          heading: "Why Gross PPP Indices Fail Without Factoring in Local Tax Regimes",
          body: "Standard Purchasing Power Parity calculators only compare the price of groceries and rent between two cities, ignoring the largest single expense of any high earner: income tax and social security. Moving from a high-cost, moderate-tax US state to a lower-cost European country with a 48% progressive marginal tax rate can actually reduce your net annual savings unless you utilize a special expat tax regime."
        },
        {
          heading: "The Savings-Rate Multiplier of Geo-Arbitrage",
          body: "Even when your lifestyle consumption rises in a destination hub, reducing fixed housing and childcare costs from $4,800/month to $2,300/month while lowering effective tax from 32% to 20%–24% often triples your investable net monthly cash flow—accelerating financial independence by a decade."
        }
      ],
      extraFaqs: [
        { q: "How do global tech companies use location-based pay bands?", a: "Companies using location-tiered compensation typically benchmark against local labor market percentiles (cost of labor) rather than consumer price indices (cost of living), grouping cities into Tier 1 (SF/NYC/Zurich), Tier 2 (London/Amsterdam/Austin), and Tier 3 (Madrid/Warsaw/LATAM)." },
        { q: "Should I hold my emergency fund in my local living currency or my earning currency?", a: "Keep 3 to 6 months of local rent and living expenses in your local spending currency (e.g., EUR, THB, MXN) to eliminate short-term FX volatility, while investing long-term surplus in globally diversified assets." }
      ]
    }
  },

  inflation: {
    en: {
      formulaTitle: "Compound CPI Inflation & Real Purchasing Power Erosion Formula",
      formulaCode: "Real Value After N Years = Nominal Salary ÷ (1 + Annual Inflation Rate)^N | Required Nominal Salary = Current Salary × (1 + Inflation Rate)^N",
      formulaNotes: "Because inflation compounds geometrically each year, a steady 6% annual inflation rate erodes 25.3% of your purchasing power in just 5 years and 44.2% over 10 years.",
      tableTitle: "Compound Purchasing Power Erosion on a $100,000 Unadjusted Salary",
      tableHeaders: ["Annual Inflation Rate (CPI)", "Real Value After 3 Yrs", "Real Value After 5 Yrs", "Real Value After 10 Yrs", "Salary Needed in Yr 5 to Break Even"],
      tableRows: [
        ["2.5% (Central Bank Target)", "$92,860 (-7.1%)", "$88,385 (-11.6%)", "$78,120 (-21.9%)", "$113,141 (+13.1%)"],
        ["4.5% (Moderate Inflation)", "$87,630 (-12.4%)", "$80,245 (-19.8%)", "$64,393 (-35.6%)", "$124,618 (+24.6%)"],
        ["7.0% (High Inflation)", "$81,630 (-18.4%)", "$71,299 (-28.7%)", "$50,835 (-49.2%)", "$140,255 (+40.3%)"],
        ["15.0% (Emerging Market Spike)", "$65,752 (-34.2%)", "$49,718 (-50.3%)", "$24,718 (-75.3%)", "$201,136 (+101.1%)"]
      ],
      sections: [
        {
          heading: "Tax Bracket Creep (Fiscal Drag): How Inflation Secretly Raises Your Tax Rate",
          body: "When your employer grants a 5% nominal cost-of-living raise during a 5% inflation year, your pre-tax purchasing power stays flat—unless your country fails to index its income tax brackets and personal allowances to CPI. When tax thresholds remain frozen (fiscal drag), a nominal inflation raise pushes a larger share of your salary into higher marginal tax bands, resulting in a lower post-tax real income even after matching CPI."
        },
        {
          heading: "Exchange Rate Pass-Through for USD/EUR Remote Earners in High-Inflation Economies",
          body: "Remote workers earning hard currency (USD, EUR, CHF) while living in high-inflation jurisdictions must track the difference between local CPI inflation and local currency depreciation. Whenever domestic CPI exceeds the depreciation of the local currency against the US Dollar, your local costs in USD terms rise sharply."
        }
      ],
      extraFaqs: [
        { q: "What is the exact formula for my real (inflation-adjusted) pay raise?", a: "Use the Fisher equation: Real Raise = ((1 + Nominal Raise Rate) ÷ (1 + Inflation Rate)) − 1. For example, a 6% raise during 4% inflation gives (1.06 ÷ 1.04) − 1 = +1.92% real purchasing power growth." },
        { q: "How should freelancers index multi-year retainer contracts against inflation?", a: "Include an automatic annual rate adjustment clause tied to the official national CPI index (or a fixed 3.5%–5% annual escalator) effective on each contract anniversary." }
      ]
    }
  },

  timezone: {
    en: {
      formulaTitle: "Synchronous Team Overlap & Golden Window Calculation",
      formulaCode: "Shared Overlap Hours = max(0, min(End_UTC_CityA, End_UTC_CityB) − max(Start_UTC_CityA, Start_UTC_CityB))",
      formulaNotes: "Accounts for UTC offsets and asymmetric Daylight Saving Time (DST) transitions between North America (2nd Sunday in March), Europe (last Sunday in March), and non-DST Asia/LATAM hubs.",
      tableTitle: "Global Engineering Team Timezone Overlap Matrix (Standard 09:00–18:00 Local Windows)",
      tableHeaders: ["Team Corridor", "UTC Offset Gap", "Daily 9-to-5 Overlap", "Optimal Sync Meeting Window (UTC)", "Collaboration Pattern"],
      tableRows: [
        ["🇺🇸 New York (UTC-5) ↔ 🇬🇧 London (UTC+0)", "5 Hours", "4 Hours / day", "14:00 – 18:00 UTC", "High-Sync Transatlantic Core"],
        ["🇺🇸 San Francisco (UTC-8) ↔ 🇬🇧 London / 🇪🇸 Madrid", "8 – 9 Hours", "1 Hour / day", "16:30 – 17:30 UTC", "Async-First + Afternoon Standup"],
        ["🇬🇧 London / 🇩🇪 Berlin ↔ 🇦🇪 Dubai (UTC+4)", "3 – 4 Hours", "5 – 6 Hours / day", "09:00 – 14:00 UTC", "Seamless EMEA Overlap"],
        ["🇩🇪 Berlin (UTC+1) ↔ 🇸🇬 Singapore / 🇯🇵 Tokyo", "7 – 8 Hours", "1 – 2 Hours / day", "08:00 – 10:00 UTC", "Morning EU / Late Afternoon APAC"],
        ["🇺🇸 San Francisco (UTC-8) ↔ 🇮🇳 Bangalore / 🇸🇬 SG", "13.5 – 16 Hours", "0 Hours (9-to-5)", "16:00 – 17:30 UTC (Flex)", "Follow-the-Sun Handover Required"]
      ],
      sections: [
        {
          heading: "Surviving the Twice-Yearly Daylight Saving Time (DST) Desynchronization",
          body: "Distributed teams frequently miss meetings in March and October/November because the United States switches to Daylight Saving Time two to three weeks earlier than the European Union and the UK, while Japan, Singapore, India, UAE, and Turkey do not observe DST at all. During that 2–3 week spring and autumn gap, the New York–London difference shrinks from 5 hours to 4 hours, and the Berlin–Istanbul offset shifts from 2 hours to 1 hour."
        },
        {
          heading: "Structuring 'Golden Overlap Hours' vs. Deep-Work Async Blocks",
          body: "High-performing distributed engineering teams restrict synchronous standups, architecture reviews, and pair programming to a protected 2-to-3 hour 'Golden Window' where all timezones overlap, leaving the remaining 5–6 hours of each person's workday completely free of meetings for uninterrupted deep work."
        }
      ],
      extraFaqs: [
        { q: "Which global hubs offer the best timezone bridge between US clients and European/Asian teams?", a: "Lisbon/London (UTC+0), Madrid/Berlin (UTC+1), Istanbul (UTC+3), and Dubai (UTC+4) allow professionals to work normal daytime hours with Europe and Asia while holding afternoon/early-evening sync calls with US East and West Coast teams." },
        { q: "How can a team with zero 9-to-5 overlap collaborate without burnout?", a: "Adopt written RFCs, Loom video handovers at the end of each shift, and alternating meeting times so neither side is permanently forced into late-night calls." }
      ]
    }
  },

  wasm: {
    en: {
      formulaTitle: "Client-Side Canvas & WebAssembly Pixel Processing Pipeline",
      formulaCode: "Euclidean Color Distance d = √((R − R₀)² + (G − G₀)² + (B − B₀)²) | If d < Threshold τ ⇒ Alpha Channel A = 0 (Transparent)",
      formulaNotes: "All RGBA pixel matrix operations execute directly inside your browser's local ArrayBuffer / HTML5 Canvas memory without uploading bytes over HTTP.",
      tableTitle: "Client-Side Browser RAM Processing vs. Cloud Image Processing Comparison",
      tableHeaders: ["Processing Metric", "GlobalPayCalc Local WASM / Canvas Studio", "Traditional Cloud Upload Compressors"],
      tableRows: [
        ["Data Privacy & GDPR Compliance", "100% Local RAM (Files Never Leave Device)", "Uploaded to Third-Party Cloud Storage Buckets"],
        ["Network Upload / Download Latency", "0 ms (Instant Memory Buffer Access)", "2 – 15 Seconds per High-Res Image"],
        ["File Count & Daily Usage Limits", "Unlimited (Uses Your Own CPU/GPU)", "Typically Capped at 5–20 Free Files/Day"],
        ["Output Format & Transparency", "Lossless RGBA PNG with Alpha Transparency", "Often Paywalled for Full-Resolution PNGs"]
      ],
      sections: [
        {
          heading: "Why Zero-Upload Client-Side Image Processing Matters for Confidential Documents",
          body: "When preparing visa applications, passport scans, product mockups, or corporate financial presentations, uploading sensitive images to free cloud compression websites exposes your files to external server logs and third-party storage buckets. By executing pixel segmentation and PNG/WebP encoding directly inside your browser's local memory via the HTML5 Canvas and WebAssembly runtime, your files remain 100% on your machine."
        },
        {
          heading: "Optimizing Images for Core Web Vitals (LCP & Page Weight)",
          body: "Uncompressed hero images and transparent assets are the primary cause of slow Largest Contentful Paint (LCP) scores above 2.5 seconds. Removing uniform backgrounds and exporting clean, optimized assets reduces payload sizes by 50%–80% while preserving crisp edge contrast."
        }
      ],
      extraFaqs: [
        { q: "Can I use this tool offline once the page has loaded?", a: "Yes. Because the entire image processing pipeline runs inside your browser's JavaScript and Canvas engine, no internet connection is required to process and download your images." },
        { q: "Why does browser-based processing have no daily file limits?", a: "Because your own device's CPU and RAM perform the computation, it costs zero server compute per image, allowing us to offer unlimited usage." }
      ]
    }
  },

  ai: {
    en: {
      formulaTitle: "LLM API Monthly Spend & Prompt Caching FinOps Formula",
      formulaCode: "Monthly Spend = ((Input_M × (1 − CacheHit%) × Price_In) + (Input_M × CacheHit% × Price_CachedIn)) + (Output_M × Price_Out)",
      formulaNotes: "1 token ≈ 0.75 English words (~4 characters). Output tokens typically cost 3× to 8× more per million than input tokens because autoregressive decoding is memory-bandwidth bound.",
      tableTitle: "2026 Official LLM API Pricing & Prompt Caching Benchmark (Per 1M Tokens)",
      tableHeaders: ["Model & Provider", "Input ($/1M)", "Cached Input ($/1M)", "Output ($/1M)", "Context Window", "Cost at 50M In (50% Cache) + 10M Out"],
      tableRows: [
        ["Anthropic Claude Sonnet 4.6", "$3.00", "$0.30 (90% Off)", "$15.00", "1,000,000", "$232.50 / mo"],
        ["OpenAI GPT-5.4 Flagship", "$2.50", "$0.25 (90% Off)", "$15.00", "1,050,000", "$218.75 / mo"],
        ["OpenAI GPT-4.1", "$2.00", "$0.50 (75% Off)", "$8.00", "1,000,000", "$142.50 / mo"],
        ["Google Gemini 2.5 Pro", "$1.25", "$0.125 (90% Off)", "$10.00", "1,000,000", "$134.38 / mo"],
        ["Anthropic Claude Haiku 4.5", "$1.00", "$0.10 (90% Off)", "$5.00", "200,000", "$77.50 / mo"],
        ["Google Gemini 2.5 Flash", "$0.30", "$0.03 (90% Off)", "$2.50", "1,000,000", "$33.25 / mo"],
        ["DeepSeek V3.2 (Chat/Reasoner)", "$0.28", "$0.028 (90% Off)", "$0.42", "128,000", "$11.90 / mo"],
        ["OpenAI GPT-4o-mini", "$0.15", "$0.075 (50% Off)", "$0.60", "128,000", "$11.63 / mo"]
      ],
      sections: [
        {
          heading: "How Prompt Caching Cuts RAG and Agentic System Spend by Up to 90%",
          body: "In production AI architectures—such as multi-turn coding agents, legal document analyzers, and RAG customer support pipelines—the same system instructions, tool schemas, and reference documents are sent repeatedly on every API call. Modern providers (Anthropic, OpenAI, Google Gemini, and DeepSeek) support KV-cache reuse ('Prompt Caching'), discounting cached input tokens by 75% to 90%. Placing static system prompts, few-shot examples, and repository context at the very beginning of your prompt prefix maximizes cache hit rates."
        },
        {
          heading: "Model Routing: Pairing Frontier Reasoning Models with Fast Sub-Agents",
          body: "Running 100% of production traffic through a frontier model ($2.50–$3.00/1M input and $15.00/1M output) wastes budget on classification, extraction, and summarization tasks. Implementing a two-tier model router—sending 80% of routine requests to high-speed models like Gemini 2.5 Flash, Claude Haiku 4.5, or GPT-4o-mini while reserving Claude Sonnet 4.6 or GPT-5.4 for complex multi-step reasoning—typically reduces monthly API invoices by 65%–80% with negligible quality loss."
        },
        {
          heading: "When Does Self-Hosting Open-Weight Models (Llama 4 / DeepSeek) Beat Managed APIs?",
          body: "A dedicated 8×H100 GPU node costs roughly $14,000 to $20,000 per month on cloud GPU providers before DevOps overhead. Consequently, serverless token APIs are almost always more economical until your sustained, uniform throughput exceeds 150M–300M tokens per day or strict air-gapped data residency is required."
        }
      ],
      extraFaqs: [
        { q: "Why are output tokens 3x to 8x more expensive than input tokens?", a: "Input tokens are processed in parallel during a single 'prefill' pass across GPU tensor cores, whereas output tokens are generated sequentially one token at a time ('autoregressive decoding'), requiring the entire model weights to be read from HBM memory for every single token." },
        { q: "How do 'thinking' or 'reasoning' tokens affect my API bill?", a: "Reasoning models (such as Gemini 2.5 Pro, Claude Sonnet 4.6 extended thinking, OpenAI o-series/GPT-5.4 reasoning, and DeepSeek Reasoner) bill internal chain-of-thought tokens at the model's output token rate even if only the final summary is displayed to the user." },
        { q: "What is the Batch API discount?", a: "OpenAI, Anthropic, and Google offer a 50% discount on both input and output tokens for asynchronous workloads (such as overnight data labeling, evaluations, or bulk embeddings) completed within a 24-hour window." }
      ]
    }
  }
};
