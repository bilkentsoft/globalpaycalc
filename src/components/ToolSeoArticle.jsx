import React from 'react';
import { Info, HelpCircle, ShieldCheck, BookOpen, Calculator, Table } from 'lucide-react';
import { generateUnifiedSchema } from '../utils/schemaGenerator';
import allArticles from '../data/seoArticles';
import { toolDeepGuides } from '../data/toolDeepGuides';

const localizedMethodologyFallback = {
  tr: {
    formulaTitle: "Yasal Hesaplama Formülü ve Metodoloji",
    formulaNotes: "Tüm hesaplamalar ulusal vergi dairelerinin (GİB, IRS, HMRC, BMF, AEAT) ve OECD Taxing Wages raporlarının yayınladığı güncel yasal dilimler ve sosyal güvenlik tavanları kullanılarak tarayıcı belleğinde (RAM) yerel olarak gerçekleştirilir.",
    tableTitle: "2026 Uluslararası Karşılaştırmalı Referans Tablosu",
    sections: [
      {
        heading: "Kademeli Vergi Matrahı ve Sosyal Güvenlik Kesintileri Nasıl Hesaplanır?",
        body: "Uluslararası maaş, serbest meslek (B2B contractor) ve expat vergi rejimi hesaplamalarında brüt gelir üzerinden önce zorunlu sosyal güvenlik primleri ve yasal tavan sınırları ayrıştırılır. Ardından kalan vergi matrahına ilgili ülkenin artan oranlı (marjinal) gelir vergisi dilimleri veya sabit vergi istisnaları (örneğin İspanya Beckham Yasası %24 sabit oran veya Türkiye %80 yazılım/tasarım hizmet ihracatı istisnası) uygulanır."
      },
      {
        heading: "Satın Alma Gücü Paritesi (PPP), Döviz Marjları ve Enflasyon Etkisi",
        body: "Farklı para birimlerinde elde edilen gelirlerin gerçek değerini ölçmek için yalnızca nominal döviz kuru yeterli değildir. Bankaların SWIFT transferlerinde uyguladığı %2,5–%4,5 gizli kur marjları, yerel kira ve yaşam maliyeti endeksleri ile yıllık bileşik TÜFE enflasyonu dikkate alınarak net tasarruf kapasitesi modellenmelidir."
      },
      {
        heading: "Yasal Uyumluluk, Çifte Vergilendirme Anlaşmaları ve Resmi Beyan",
        body: "Birden fazla ülkede gelir elde eden uzaktan çalışanlar ve şirketler; 183 gün mukimlik kuralı, işyeri oluşturma (Permanent Establishment) riski, KDV Ters Ödeme Yükümlülüğü (Reverse Charge) ve ikili sosyal güvenlik anlaşmalarını (A1 / Certificate of Coverage) resmi beyanname öncesinde yetkili bir mali müşavir ile doğrulamalıdır."
      }
    ],
    extraFaqs: [
      { q: "Bu hesaplama aracındaki vergi oranları ve parametreler ne sıklıkla güncellenir?", a: "Hesaplama motorumuzdaki vergi dilimleri, sosyal güvenlik prim tavanları ve API birim fiyatları, resmi maliye bakanlıkları ve servis sağlayıcıların yayınladığı 2026 yılı yasal tarifelerine göre düzenli olarak güncellenmektedir." },
      { q: "Girdiğim finansal veriler herhangi bir sunucuya gönderiliyor mu?", a: "Hayır. Tüm matematiksel simülasyonlar %100 istemci taraflı olarak doğrudan tarayıcınızın yerel belleğinde (RAM) çalışır; kişisel veya kurumsal verileriniz kaydedilmez." },
      { q: "Hesaplama sonuçları resmi vergi beyannamesi yerine geçer mi?", a: "Hayır. Bu araç eğitim, bütçe planlaması ve karşılaştırma amaçlı finansal projeksiyonlar sunar. Resmi vergi beyannameleriniz için ilgili ülkedeki lisanslı bir mali müşavire danışmanız önerilir." }
    ],
    footerText: "© GlobalPayCalc Ekibi — %100 Tarayıcı Tabanlı Finansal ve Vergi Simülasyon Motoru (Bilgilendirme Amaçlıdır)"
  },
  es: {
    formulaTitle: "Fórmula de Cálculo Normativo y Metodología",
    formulaNotes: "Todos los cálculos aplican los tramos impositivos oficiales, bases máximas de cotización a la Seguridad Social (AEAT, IRS, HMRC, BMF) e informes Taxing Wages de la OCDE directamente en la memoria RAM de su navegador.",
    tableTitle: "Tabla Comparativa de Referencia Internacional (2026)",
    sections: [
      {
        heading: "Estructura de Tramos Marginales, Seguridad Social y Regímenes Especiales",
        body: "Para determinar con precisión el rendimiento neto o el coste empresarial internacional, nuestro motor separa primero las cotizaciones obligatorias a la Seguridad Social sujetas a sus topes máximos anuales (como la base máxima de 5.101,20 €/mes en España en 2026). Posteriormente aplica la escala progresiva del impuesto sobre la renta o las reglas de regímenes especiales para expatriados como el Artículo 93 de la LIRPF (Ley Beckham al 24% hasta 600.000 €)."
      },
      {
        heading: "Impacto del Tipo de Cambio (FX), Inflación IPC y Paridad de Poder Adquisitivo",
        body: "Al evaluar ofertas laborales remotas, facturación B2B intracomunitaria (inversión del sujeto pasivo) o presupuestos de infraestructura tecnológica, es imprescindible descontar las comisiones ocultas de cambio de divisa (spreads bancarios del 2,5% al 4,5%) y ajustar el ingreso neto por el índice de precios al consumo (IPC) y el coste de vida real de la ciudad de destino."
      },
      {
        heading: "Cumplimiento Tributario Internacional y Convenios de Doble Imposición",
        body: "La residencia fiscal suele determinarse por la permanencia superior a 183 días durante el año natural o por la ubicación del núcleo principal de intereses económicos. Antes de presentar declaraciones oficiales (como los Modelos 149, 151, 100 o 303/349 en España), contraste siempre su caso particular con un asesor fiscal colegiado."
      }
    ],
    extraFaqs: [
      { q: "¿Con qué frecuencia se actualizan las tablas de impuestos y cotizaciones?", a: "Los tramos de IRPF, topes de Seguridad Social, requisitos de visados para nómadas digitales y tarifas de APIs de IA se revisan periódicamente conforme a los boletines oficiales (BOE, IRS, HMRC, OCDE) vigentes en 2026." },
      { q: "¿Se almacenan mis datos salariales o financieros en algún servidor?", a: "No. Todas las simulaciones se ejecutan íntegramente en la memoria local (RAM) de su navegador web sin transmitir datos personales a servidores externos." },
      { q: "¿Tienen estos resultados validez de asesoramiento fiscal vinculante?", a: "No. Las herramientas de GlobalPayCalc tienen carácter estrictamente educativo e informativo para facilitar la planificación financiera comparada." }
    ],
    footerText: "© Equipo GlobalPayCalc — Motor de Simulación Fiscal y Financiera 100% Local (Uso Educativo)"
  },
  de: {
    formulaTitle: "Gesetzliche Berechnungsformel & Methodik",
    formulaNotes: "Alle Berechnungen basieren auf den aktuellen gesetzlichen Steuertarifen, Beitragsbemessungsgrenzen der Sozialversicherung (BMF, IRS, HMRC, AEAT) und OECD-Daten und werden lokal im Browser-RAM ausgeführt.",
    tableTitle: "Internationale Referenz- und Vergleichstabelle (2026)",
    sections: [
      {
        heading: "Progressiver Einkommensteuertarif, Beitragsbemessungsgrenzen und Netto-Ermittlung",
        body: "Bei der internationalen Brutto-Netto-Berechnung sowie beim Vergleich zwischen Festanstellung und Freiberuflichkeit (§ 18 EStG) berücksichtigt unser Berechnungsmodell zunächst die gesetzlichen Sozialversicherungsbeiträge bis zur jeweiligen Beitragsbemessungsgrenze sowie steuerfreie Grundfreibeträge. Anschließend wird der progressive Grenzsteuersatz bzw. das gewählte Expat-Sonderregime präzise auf das zu versteuernde Einkommen angewendet."
      },
      {
        heading: "Kaufkraftparität (PPP), Devisen-Spreads und Inflationsausgleich",
        body: "Für Remote-Fachkräfte, internationale B2B-Auftragnehmer (Reverse-Charge-Verfahren nach § 13b UStG) und global wachsende Technologieunternehmen entscheidet nicht allein der nominale Bruttobetrag: Erst nach Abzug versteckter Bank-Wechselkursaufschläge, lokaler Lebenshaltungskosten und der realen Inflationsrate zeigt sich die tatsächliche Netto-Sparquote."
      },
      {
        heading: "Steuerliche Ansässigkeit (183-Tage-Regel) und Rechtssicherheit",
        body: "Grenzüberschreitende Tätigkeiten berühren regelmäßig Doppelbesteuerungsabkommen (DBA), Sozialversicherungsabkommen (A1-Bescheinigung) und Kriterien zur Vermeidung von Scheinselbstständigkeit oder Betriebsstättenrisiken. Nutzen Sie diese Simulationen zur fundierten Vorplanung und stimmen Sie verbindliche Erklärungen mit einem Steuerberater ab."
      }
    ],
    extraFaqs: [
      { q: "Auf welchen Datenquellen basieren die Berechnungen für 2026?", a: "Die Parameter stützen sich auf amtliche Veröffentlichungen des Bundesministeriums der Finanzen (BMF), der OECD („Taxing Wages“), ausländischer Finanzbehörden (IRS, HMRC, AEAT) sowie offizieller Cloud- und API-Preislisten." },
      { q: "Werden meine eingegebenen Gehalts- oder Umsatzdaten gespeichert?", a: "Nein. Sämtliche Berechnungen erfolgen zu 100 % clientseitig im Arbeitsspeicher (RAM) Ihres eigenen Endgeräts." },
      { q: "Kann dieser Rechner eine individuelle Beratung durch einen Steuerberater ersetzen?", a: "Nein. Alle Ergebnisse dienen als unverbindliche Orientierungshilfe und Finanzsimulation; sie stellen keine Steuer- oder Rechtsberatung im Sinne des Steuerberatungsgesetzes dar." }
    ],
    footerText: "© GlobalPayCalc-Team — 100 % Lokale Finanz- & Steuersimulation im Browser (Nur zu Informationszwecken)"
  },
  pt: {
    formulaTitle: "Fórmula de Cálculo Regulamentar e Metodologia",
    formulaNotes: "Todos os cálculos utilizam as tabelas oficiais de imposto de renda, tetos previdenciários (Receita Federal, AEAT, IRS, HMRC, BMF) e relatórios da OCDE, processados localmente na memória RAM do navegador.",
    tableTitle: "Tabela Comparativa de Referência Internacional (2026)",
    sections: [
      {
        heading: "Alíquotas Progressivas, Contribuições Sociais e Regimes para Expatriados",
        body: "Na simulação de salários líquidos internacionais e na comparação entre contratação formal (CLT/nómina) e prestação de serviços B2B (PJ/autônomo), o motor deduz primeiramente as contribuições previdenciárias obrigatórias respeitando os tetos legais de cada jurisdição e, em seguida, aplica as faixas progressivas de imposto de renda ou regimes especiais de taxa fixa (como o IFICI em Portugal e a Lei Beckham na Espanha)."
      },
      {
        heading: "Paridade do Poder de Compra (PPC), Spreads Cambiais e Inflação Real",
        body: "Profissionais remotos e empresas que operam internacionalmente precisam avaliar o impacto combinado das tarifas ocultas de câmbio (spreads bancários de 2,5% a 4,5% em transferências SWIFT), da inflação acumulada (IPCA/CPI) e do custo de vida local para determinar a capacidade real de poupança."
      }
    ],
    extraFaqs: [
      { q: "Com que frequência os parâmetros fiscais são atualizados?", a: "As tabelas de impostos, limites de contribuição social e preços de APIs de IA são atualizados regularmente com base nas publicações oficiais das autoridades fiscais para o exercício de 2026." },
      { q: "Meus dados financeiros são enviados para algum servidor?", a: "Não. Todo o processamento ocorre 100% localmente na memória RAM do seu navegador, garantindo privacidade absoluta." }
    ],
    footerText: "© Equipe GlobalPayCalc — Simulador Financeiro e Fiscal 100% Local (Uso Educativo)"
  },
  fr: {
    formulaTitle: "Formule de Calcul Réglementaire et Méthodologie",
    formulaNotes: "Tous les calculs intègrent les barèmes officiels de l'impôt sur le revenu, les plafonds de cotisations sociales (DGFiP, IRS, HMRC, BMF, AEAT) et les données de l'OCDE, exécutés localement dans la mémoire RAM de votre navigateur.",
    tableTitle: "Tableau Comparatif de Référence Internationale (2026)",
    sections: [
      {
        heading: "Barèmes Progressifs, Charges Sociales et Régimes d'Impatriation",
        body: "Pour estimer avec précision le salaire net après impôt ou comparer un contrat salarié (CDI) avec une facturation freelance B2B, notre moteur déduit d'abord les cotisations sociales obligatoires dans la limite des plafonds légaux, puis applique les tranches marginales d'imposition ou les régimes fiscaux spéciaux (tels que la Loi Beckham en Espagne ou le régime IFICI au Portugal)."
      },
      {
        heading: "Parité de Pouvoir d'Achat (PPA), Frais de Change (FX) et Inflation",
        body: "L'évaluation d'une rémunération internationale ou d'un budget cloud/API nécessite d'intégrer les marges bancaires cachées sur les taux de change (2,5 % à 4,5 % sur les virements SWIFT), l'autoliquidation de la TVA intracommunautaire et l'érosion monétaire liée à l'inflation (IPC)."
      }
    ],
    extraFaqs: [
      { q: "Quelle est la source des barèmes fiscaux utilisés pour 2026 ?", a: "Nos modèles s'appuient sur les publications officielles des administrations fiscales nationales (DGFiP, IRS, HMRC, BMF, AEAT), les rapports « Taxing Wages » de l'OCDE et les grilles tarifaires officielles des fournisseurs d'API." },
      { q: "Mes données salariales sont-elles transmises à un serveur ?", a: "Non. Toutes les simulations sont exécutées à 100 % dans la mémoire vive (RAM) de votre navigateur sans aucun transfert vers des serveurs externes." }
    ],
    footerText: "© Équipe GlobalPayCalc — Moteur de Simulation Financière et Fiscale 100 % Local (Usage Éducatif)"
  },
  id: {
    formulaTitle: "Formula Perhitungan Resmi & Metodologi",
    formulaNotes: "Semua simulasi menerapkan tarif pajak penghasilan progresif resmi, batas jaminan sosial (DJP, IRS, HMRC, BMF, AEAT), dan laporan OECD secara lokal di dalam memori RAM peramban Anda.",
    tableTitle: "Tabel Perbandingan Referensi Internasional (2026)",
    sections: [
      {
        heading: "Perhitungan Tarif Pajak Marginal, Jaminan Sosial, dan Ekspatriat",
        body: "Dalam menghitung gaji bersih lintas negara maupun membandingkan karyawan tetap dengan kontraktor independen B2B, mesin kami memisahkan iuran jaminan sosial wajib sesuai batas maksimum tahunan sebelum menerapkan tarif pajak penghasilan progresif atau rezim pajak ekspatriat tetap."
      },
      {
        heading: "Paritas Daya Beli (PPP), Biaya Kurs Tersembunyi (FX), dan Inflasi",
        body: "Pekerja jarak jauh dan perusahaan global perlu memperhitungkan selisih kurs bank (markup FX 2,5%–4,5%), indeks biaya hidup kota tujuan, serta tingkat inflasi tahunan (IHK/CPI) untuk mengetahui nilai riil penghasilan bersih mereka."
      }
    ],
    extraFaqs: [
      { q: "Seberapa sering data tarif pajak dan harga API diperbarui?", a: "Seluruh tabel pajak, batas kontribusi sosial, persyaratan visa nomaden digital, dan harga token AI diperbarui secara berkala mengacu pada publikasi resmi tahun 2026." },
      { q: "Apakah data gaji yang saya masukkan disimpan di server?", a: "Tidak. Semua perhitungan berjalan 100% secara lokal di memori RAM peramban perangkat Anda tanpa dikirim ke server mana pun." }
    ],
    footerText: "© Tim GlobalPayCalc — Mesin Simulasi Pajak & Keuangan 100% Lokal di Peramban (Tujuan Edukasi)"
  },
  ja: {
    formulaTitle: "法定計算式および算出メソドロジー",
    formulaNotes: "すべての計算は、各国の税務当局（国税庁、IRS、HMRC、BMF、AEAT）およびOECD「Taxing Wages」レポートの公表データに基づき、お使いのブラウザのメモリ（RAM）内でローカルに実行されます。",
    tableTitle: "2026年 国際比較リファレンスデータ一覧",
    sections: [
      {
        heading: "累進課税ブラケット、社会保険料上限、および駐在員優遇税制の仕組み",
        body: "国際的な手取り給与の算出や正社員と業務委託（B2Bフリーランス）の損益分岐点比較では、まず各国の法定上限（年間拠出上限額）に基づいた社会保険料控除を計算し、その後の課税所得に対して累進所得税率または特別駐在員税制（スペインのベッカム法24%固定税率など）を適用します。"
      },
      {
        heading: "購買力平価（PPP）、隠れた為替手数料（FXスプレッド）、インフレ調整",
        body: "海外リモート案件やグローバル採用のコストを正確に評価するには、名目上の金額だけでなく、国際送金時の隠れた銀行為替スプレッド（2.5%〜4.5%）、現地の家賃・生活費指数（PPP）、および消費者物価指数（CPI）の複利インフレ影響を考慮する必要があります。"
      }
    ],
    extraFaqs: [
      { q: "税率やAPI料金データはどのくらいの頻度で更新されますか？", a: "所得税率、社会保険料の上限、デジタルノマドビザの収入要件、およびLLM APIのトークン単価は、2026年時点の各国公的機関および公式ドキュメントに基づき定期的に更新されています。" },
      { q: "入力した給与や財務データは外部サーバーに送信されますか？", a: "いいえ。すべての計算処理はお使いのブラウザのメモリ（RAM）内で100%ローカルに完結し、外部サーバーへ送信・保存されることは一切ありません。" }
    ],
    footerText: "© GlobalPayCalc チーム — 100%クライアントサイド金融・税務シミュレーションエンジン（教育・概算比較用）"
  }
};

export default function ToolSeoArticle({ activeTool = 'take-home', lang = 'en' }) {
  // Pick the language dict, fall back to EN
  const langDict = allArticles[lang] || allArticles['en'];
  const article = langDict[activeTool] || langDict['take-home'] || allArticles['en']['take-home'];

  // Pick deep guide for activeTool:
  // IMPORTANT: Never dump English prose onto non-English pages!
  // If toolGuideMap[lang] exists, use it; otherwise combine English numerical formula/table with 100% native localized prose.
  const toolGuideMap = toolDeepGuides[activeTool] || toolDeepGuides['take-home'];
  const enGuide = toolGuideMap?.['en'] || null;
  const nativeGuide = toolGuideMap?.[lang] || null;
  const locFallback = localizedMethodologyFallback[lang] || null;

  const deepGuide = nativeGuide || (locFallback && enGuide ? {
    formulaTitle: locFallback.formulaTitle,
    formulaCode: enGuide.formulaCode,
    formulaNotes: locFallback.formulaNotes,
    tableTitle: locFallback.tableTitle,
    tableHeaders: enGuide.tableHeaders,
    tableRows: enGuide.tableRows,
    sections: locFallback.sections,
    extraFaqs: locFallback.extraFaqs
  } : enGuide);

  const faqLabels = {
    en: 'Frequently Asked Questions & Statutory Rules',
    tr: 'Sıkça Sorulan Sorular ve Mevzuat Rehberi',
    es: 'Preguntas Frecuentes y Normativa Oficial',
    de: 'Häufig gestellte Fragen & Gesetzliche Grundlagen',
    pt: 'Perguntas Frequentes e Regras Oficiais',
    fr: 'Questions Fréquemment Posées et Réglementation',
    id: 'Pertanyaan yang Sering Diajukan & Panduan Resmi',
    ja: 'よくある質問（FAQ）と法定計算ガイド',
  };
  const faqLabel = faqLabels[lang] || faqLabels['en'];

  const footerLabel = (lang !== 'en' && locFallback?.footerText)
    ? locFallback.footerText
    : '© GlobalPayCalc Team — Client-Side Financial & Tax Simulation Engine (Educational Use Only)';

  const combinedFaqs = [
    ...(article.faqs || []),
    ...(deepGuide?.extraFaqs || [])
  ];

  const schemaFaqs = combinedFaqs.map(f => ({
    question: f.q,
    answer: f.a
  }));

  const canonicalPath = activeTool === 'take-home' ? '' : `/${activeTool}`;
  const fullUrl = `https://globalpaycalc.com${lang !== 'en' ? '/' + lang : ''}${canonicalPath || (lang === 'en' ? '/' : '')}`;

  const unifiedToolSchema = generateUnifiedSchema({
    url: fullUrl,
    name: article.title,
    description: article.subtitle,
    faqs: schemaFaqs
  });

  return (
    <article className="glass-card rounded-2xl border-slate-800 mt-8 p-6 sm:p-10 space-y-8">
      <header className="space-y-2 border-b border-slate-800 pb-6">
        <h2 className="text-2xl font-bold text-white flex items-center space-x-3">
          <Info className="w-6 h-6 text-brand-400 flex-shrink-0" />
          <span>{article.title}</span>
        </h2>
        <p className="text-slate-400 text-sm font-medium">{article.subtitle}</p>
      </header>

      {/* Core Introduction Paragraphs */}
      <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
        {(article.paragraphs || []).map((p, idx) => (
          <p key={idx}>{p}</p>
        ))}
      </div>

      {/* Mathematical Formula & Statutory Methodology Box */}
      {deepGuide?.formulaCode && (
        <div className="bg-slate-900/90 border border-brand-500/30 rounded-2xl p-5 sm:p-6 space-y-3">
          <div className="flex items-center space-x-2 text-brand-400 font-bold text-xs uppercase tracking-wider">
            <Calculator className="w-4 h-4 shrink-0" />
            <span>{deepGuide.formulaTitle}</span>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs sm:text-sm text-emerald-300 overflow-x-auto">
            {deepGuide.formulaCode}
          </div>
          {deepGuide.formulaNotes && (
            <p className="text-xs text-slate-400 leading-relaxed">
              {deepGuide.formulaNotes}
            </p>
          )}
        </div>
      )}

      {/* Worked Numerical Comparison & Benchmark Table */}
      {deepGuide?.tableRows && deepGuide.tableRows.length > 0 && (
        <div className="space-y-3 pt-2">
          <h3 className="text-lg font-bold text-white flex items-center space-x-2">
            <Table className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>{deepGuide.tableTitle}</span>
          </h3>
          <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/60">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-950/80 text-slate-300">
                  {deepGuide.tableHeaders.map((th, i) => (
                    <th key={i} className="py-3 px-4 font-bold whitespace-nowrap">{th}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/70 text-slate-300">
                {deepGuide.tableRows.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-slate-800/40 transition">
                    {row.map((cell, cIdx) => (
                      <td
                        key={cIdx}
                        className={`py-3 px-4 whitespace-nowrap ${
                          cIdx === 0 ? 'font-semibold text-white' : 'font-mono text-slate-300'
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Deep Editorial Subsections */}
      {deepGuide?.sections && deepGuide.sections.length > 0 && (
        <div className="space-y-6 pt-4 border-t border-slate-800">
          {deepGuide.sections.map((sec, idx) => (
            <section key={idx} className="space-y-2">
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-brand-400 shrink-0" />
                <span>{sec.heading}</span>
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {sec.body}
              </p>
            </section>
          ))}
        </div>
      )}

      {/* Comprehensive FAQs */}
      {combinedFaqs.length > 0 && (
        <div className="space-y-5 pt-6 border-t border-slate-800">
          <h3 className="text-xl font-bold text-white flex items-center space-x-2">
            <HelpCircle className="w-5 h-5 text-amber-400 shrink-0" />
            <span>{faqLabel}</span>
          </h3>
          <div className="grid grid-cols-1 gap-4">
            {combinedFaqs.map((faq, idx) => (
              <div key={idx} className="bg-slate-900/60 p-4 sm:p-5 rounded-xl border border-slate-800 space-y-1.5">
                <h4 className="font-bold text-slate-100 text-sm">{faq.q}</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <footer className="pt-6 border-t border-slate-800 text-xs text-slate-400 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <span>{footerLabel}</span>
        <span className="flex items-center space-x-1 text-emerald-400 font-mono">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>100% Local Browser RAM</span>
        </span>
      </footer>

      {/* Structured JSON-LD Schema (WebApplication + FAQPage) */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(unifiedToolSchema) }} />
    </article>
  );
}
