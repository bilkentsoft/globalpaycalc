import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  BookOpen,
  Calendar,
  Clock,
  CheckCircle2,
  ArrowRight,
  Calculator,
  ShieldCheck,
  FileText,
  ChevronRight,
  Table,
  Sparkles
} from 'lucide-react';
import { editorialGuides, getEditorialGuideBySlug } from '../data/editorialGuidesData';
import NotFoundPage from './NotFoundPage';

export function GuidesIndexPage({ lang = 'en' }) {
  const isTr = lang === 'tr';
  const langPrefix = isTr ? '/tr' : '';
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const categories = Array.from(
    new Set(editorialGuides.map((g) => (isTr ? g.tr.category : g.en.category)))
  );

  const filteredGuides = selectedCategory === 'ALL'
    ? editorialGuides
    : editorialGuides.filter((g) => (isTr ? g.tr.category : g.en.category) === selectedCategory);

  const pageTitle = isTr
    ? 'Uluslararası Vergi, Uzaktan Maaş ve B2B Finans Rehberleri (2026) | GlobalPayCalc'
    : 'International Tax, Remote Salary & B2B Finance Guides (2026) | GlobalPayCalc';

  const pageDesc = isTr
    ? 'İspanya Beckham Yasası, Türkiye %80 yazılım ihracatı istisnası (GVK 89/13), ABD W-2 vs 1099, İngiltere IR35, Dijital Göçebe vizeleri ve B2B KDV mevzuat rehberleri.'
    : 'In-depth statutory guides on Spain Beckham Law (Art. 93 LIRPF), US W-2 vs 1099 taxes, UK IR35, Turkey 80% software export exemption, Digital Nomad Visas, and B2B VAT.';

  const canonicalUrl = `https://globalpaycalc.com${langPrefix}/guides`;

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: pageTitle,
    description: pageDesc,
    url: canonicalUrl,
    publisher: {
      '@type': 'Organization',
      name: 'GlobalPayCalc',
      url: 'https://globalpaycalc.com'
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: editorialGuides.map((g, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        url: `https://globalpaycalc.com${langPrefix}/guides/${g.slug}`,
        name: isTr ? g.tr.title : g.en.title
      }))
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-10 py-4">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hreflang="en" href="https://globalpaycalc.com/guides" />
        <link rel="alternate" hreflang="tr" href="https://globalpaycalc.com/tr/guides" />
        <link rel="alternate" hreflang="x-default" href="https://globalpaycalc.com/guides" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:image" content="https://globalpaycalc.com/og-image.png" />
      </Helmet>

      {/* Hero Section */}
      <div className="glass-card rounded-3xl border border-slate-800 p-8 sm:p-10 space-y-5 bg-gradient-to-br from-slate-900/95 via-slate-900/80 to-brand-950/30">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/30 text-xs font-bold text-brand-300">
          <BookOpen className="w-3.5 h-3.5 text-brand-400" />
          <span>
            {isTr
              ? '2026 Resmi Vergi Mevzuatı & Finans Araştırma Kütüphanesi'
              : '2026 Statutory Tax & Remote Compensation Research Library'}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
          {isTr
            ? 'Uluslararası Vergi, Maaş ve Uzaktan Çalışma Rehberleri'
            : 'International Tax, Salary & Cross-Border Finance Guides'}
        </h1>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
          {isTr
            ? 'GlobalPayCalc Araştırma Ekibi tarafından birincil resmi kaynaklar (IRS, HMRC, İspanya AEAT/BOE, Almanya BMF, Türkiye GİB ve OECD Taxing Wages) referans alınarak hazırlanan kapsamlı mevzuat incelemeleri, örnek vergi hesaplama tabloları ve vaka analizleri.'
            : 'Comprehensive, non-templated statutory research articles authored by the GlobalPayCalc Research Team. Every guide includes worked numerical tax comparisons, official law citations (IRS, HMRC, Spain AEAT/BOE, Germany BMF, Turkey GİB, OECD), and practical compliance checklists.'}
        </p>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 pt-2">
          <button
            onClick={() => setSelectedCategory('ALL')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold border transition cursor-pointer ${
              selectedCategory === 'ALL'
                ? 'bg-brand-600 text-white border-brand-500 shadow-lg shadow-brand-500/20'
                : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'
            }`}
          >
            {isTr ? `Tüm Rehberler (${editorialGuides.length})` : `All Guides (${editorialGuides.length})`}
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold border transition cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-brand-600 text-white border-brand-500 shadow-lg shadow-brand-500/20'
                  : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Guides Grid */}
      <div className="grid grid-cols-1 gap-6">
        {filteredGuides.map((guide) => {
          const content = isTr ? guide.tr : guide.en;
          const articleHref = `${langPrefix}/guides/${guide.slug}`;
          const toolHref = `${langPrefix}${guide.relatedTool}`;
          const toolName = isTr ? guide.relatedToolName.tr : guide.relatedToolName.en;

          return (
            <article
              key={guide.slug}
              className="glass-card rounded-2xl border border-slate-800 hover:border-brand-500/40 p-6 sm:p-8 transition space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
                <span className="px-2.5 py-1 rounded-lg bg-brand-500/10 border border-brand-500/20 text-brand-300 font-bold">
                  {content.category}
                </span>
                <div className="flex items-center space-x-4 font-mono">
                  <span className="flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{guide.updatedAt}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>{guide.readTime}</span>
                  </span>
                </div>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-white leading-snug hover:text-brand-300 transition">
                <Link to={articleHref}>{content.title}</Link>
              </h2>

              <p className="text-slate-300 text-sm leading-relaxed">
                {content.subtitle}
              </p>

              {/* Key Takeaways Preview */}
              <div className="bg-slate-900/70 rounded-xl p-4 border border-slate-800/80 space-y-2">
                <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  {isTr ? 'Öne Çıkan Mevzuat Bulguları:' : 'Key Statutory Findings:'}
                </div>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {content.summaryPoints.slice(0, 2).map((pt, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-slate-800/80">
                <Link
                  to={articleHref}
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-xs font-bold transition shadow-md shadow-brand-600/20"
                >
                  <span>{isTr ? 'Rehberin Tamamını Oku' : 'Read Full Statutory Guide'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  to={toolHref}
                  className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-400 hover:text-emerald-400 transition"
                >
                  <Calculator className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{toolName}</span>
                </Link>
              </div>
            </article>
          );
        })}
      </div>

      {/* Editorial Standards & Methodology Box */}
      <div className="glass-card rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-3 bg-slate-900/50">
        <div className="flex items-center space-x-2 text-emerald-400 font-bold text-sm">
          <ShieldCheck className="w-5 h-5" />
          <h2>
            {isTr
              ? 'GlobalPayCalc Editoryal Doğrulama ve Mevzuat Metodolojisi'
              : 'GlobalPayCalc Editorial Verification & Statutory Methodology'}
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          {isTr
            ? 'Kütüphanemizdeki tüm vergi ve finans rehberleri; resmi gazete tebliğleri (İspanya BOE, Türkiye Resmi Gazete/GİB), ABD IRS yayınları, İngiltere HMRC kılavuzları, Almanya BMF cetvelleri ve OECD raporları baz alınarak hazırlanır. Makaleler yalnızca bilgilendirme ve finansal modelleme amaçlıdır; kişisel vergi beyannameleriniz için ilgili ülkedeki lisanslı bir mali müşavir (SMMM / CPA / Asesor Fiscal) ile çalışmanız önerilir.'
            : 'Every guide in our research library is compiled directly from primary statutory legislation—including Spain’s Boletín Oficial del Estado (BOE/AEAT), US Internal Revenue Service (IRS) Publications, UK HMRC Manuals, German Federal Ministry of Finance (BMF) tables, Turkish Revenue Administration (GİB) communiqués, and OECD Taxing Wages datasets. Our publications are strictly educational and do not substitute for individualized tax advice from a licensed CPA, Steuerberater, or asesor fiscal.'}
        </p>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
    </div>
  );
}

export function GuideArticlePage({ lang = 'en' }) {
  const { slug } = useParams();
  const guide = getEditorialGuideBySlug(slug);
  const isTr = lang === 'tr';
  const langPrefix = isTr ? '/tr' : '';

  if (!guide) {
    return <NotFoundPage />;
  }

  const content = isTr ? guide.tr : guide.en;
  const canonicalUrl = `https://globalpaycalc.com${langPrefix}/guides/${guide.slug}`;
  const enUrl = `https://globalpaycalc.com/guides/${guide.slug}`;
  const trUrl = `https://globalpaycalc.com/tr/guides/${guide.slug}`;
  const toolHref = `${langPrefix}${guide.relatedTool}`;
  const toolName = isTr ? guide.relatedToolName.tr : guide.relatedToolName.en;

  const relatedGuides = editorialGuides
    .filter((g) => g.slug !== guide.slug)
    .slice(0, 3);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: content.title,
        description: content.subtitle,
        datePublished: guide.publishedAt,
        dateModified: guide.updatedAt,
        author: {
          '@type': 'Organization',
          name: 'GlobalPayCalc Tax & Compensation Research Team',
          url: 'https://globalpaycalc.com/about'
        },
        publisher: {
          '@type': 'Organization',
          name: 'GlobalPayCalc',
          url: 'https://globalpaycalc.com',
          logo: {
            '@type': 'ImageObject',
            url: 'https://globalpaycalc.com/favicon.svg'
          }
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': canonicalUrl
        }
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: isTr ? 'Ana Sayfa' : 'Home',
            item: `https://globalpaycalc.com${langPrefix || '/'}`
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: isTr ? 'Vergi & Maaş Rehberleri' : 'Tax & Salary Guides',
            item: `https://globalpaycalc.com${langPrefix}/guides`
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: content.title,
            item: canonicalUrl
          }
        ]
      }
    ]
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 py-4">
      <Helmet>
        <title>{`${content.title} | GlobalPayCalc`}</title>
        <meta name="description" content={content.subtitle} />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hreflang="en" href={enUrl} />
        <link rel="alternate" hreflang="tr" href={trUrl} />
        <link rel="alternate" hreflang="x-default" href={enUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={content.title} />
        <meta property="og:description" content={content.subtitle} />
        <meta property="og:image" content="https://globalpaycalc.com/og-image.png" />
      </Helmet>

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs text-slate-400">
        <Link to={langPrefix || '/'} className="hover:text-white transition">
          {isTr ? 'Ana Sayfa' : 'Home'}
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
        <Link to={`${langPrefix}/guides`} className="hover:text-white transition">
          {isTr ? 'Vergi ve Maaş Rehberleri' : 'Tax & Salary Guides'}
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
        <span className="text-slate-200 font-semibold truncate max-w-xs sm:max-w-md">
          {content.category}
        </span>
      </nav>

      {/* Article Header */}
      <article className="glass-card rounded-3xl border border-slate-800 p-6 sm:p-10 space-y-8">
        <header className="space-y-4 border-b border-slate-800 pb-6">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="px-3 py-1 rounded-full bg-brand-500/15 border border-brand-500/30 text-brand-300 text-xs font-bold">
              {content.category}
            </span>
            <Link
              to={isTr ? `/guides/${guide.slug}` : `/tr/guides/${guide.slug}`}
              className="text-xs font-semibold text-slate-400 hover:text-brand-300 border border-slate-800 rounded-lg px-3 py-1 transition"
            >
              {isTr ? '🇺🇸 Read in English' : '🇹🇷 Türkçe Olarak Oku'}
            </Link>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-white leading-tight tracking-tight">
            {content.title}
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {content.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-400">
            <span className="font-semibold text-slate-200">
              {isTr ? 'Yazar: GlobalPayCalc Mevzuat Araştırma Ekibi' : 'By GlobalPayCalc Tax & Compensation Research Team'}
            </span>
            <span className="flex items-center space-x-1 font-mono">
              <Calendar className="w-3.5 h-3.5 text-emerald-400" />
              <span>{isTr ? `Son Güncelleme: ${guide.updatedAt}` : `Last Verified: ${guide.updatedAt}`}</span>
            </span>
            <span className="flex items-center space-x-1 font-mono">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>{guide.readTime}</span>
            </span>
          </div>
        </header>

        {/* Executive Summary / Key Takeaways */}
        <div className="bg-slate-900/90 border border-emerald-500/30 rounded-2xl p-5 sm:p-6 space-y-3">
          <div className="flex items-center space-x-2 text-emerald-400 font-bold text-xs sm:text-sm uppercase tracking-wider">
            <Sparkles className="w-4 h-4 shrink-0" />
            <span>
              {isTr ? 'Yönetici Özeti ve Temel Yasal Kurallar (2026)' : 'Executive Summary & Key Statutory Rules (2026)'}
            </span>
          </div>
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-200 leading-relaxed">
            {content.summaryPoints.map((pt, idx) => (
              <li key={idx} className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Interactive Calculator Callout */}
        <div className="bg-gradient-to-r from-brand-950/60 via-slate-900 to-purple-950/50 border border-brand-500/30 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="text-xs font-bold text-brand-400 uppercase tracking-wider">
              {isTr ? 'İnteraktif Hesaplama Motoru' : 'Interactive Statutory Simulator'}
            </div>
            <div className="text-sm sm:text-base font-bold text-white">
              {toolName}
            </div>
            <p className="text-xs text-slate-300">
              {isTr
                ? 'Kendi brüt maaş veya fatura tutarınızı girerek net vergi ve kesintileri tarayıcınızda anında simüle edin.'
                : 'Run your own salary or contract numbers through our live browser-based statutory calculation engine.'}
            </p>
          </div>
          <Link
            to={toolHref}
            className="inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition shrink-0 shadow-lg shadow-emerald-600/20"
          >
            <Calculator className="w-4 h-4" />
            <span>{isTr ? 'Hesaplayıcıyı Aç' : 'Launch Calculator'}</span>
          </Link>
        </div>

        {/* Worked Numerical Comparison Table */}
        {content.tableRows && content.tableRows.length > 0 && (
          <div className="space-y-3 pt-2">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center space-x-2">
              <Table className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>{content.tableTitle}</span>
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/60">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 bg-slate-950/80 text-slate-300">
                    {content.tableHeaders.map((th, i) => (
                      <th key={i} className="py-3 px-4 font-bold whitespace-nowrap">{th}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/70 text-slate-300">
                  {content.tableRows.map((row, rIdx) => (
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

        {/* Long-Form Sections */}
        <div className="space-y-8 pt-4 border-t border-slate-800">
          {content.sections.map((sec, idx) => (
            <section key={idx} className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-white">
                {sec.heading}
              </h2>
              <div className="space-y-3 text-sm sm:text-base text-slate-300 leading-relaxed whitespace-pre-line">
                {sec.body}
              </div>
            </section>
          ))}
        </div>

        {/* Statutory Citations & Legal References */}
        {content.citations && content.citations.length > 0 && (
          <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-5 sm:p-6 space-y-3">
            <h3 className="text-sm font-bold text-white flex items-center space-x-2">
              <FileText className="w-4 h-4 text-brand-400" />
              <span>
                {isTr ? 'Resmi Mevzuat Kaynakları ve Kanun Referansları' : 'Official Statutory Citations & Legal References'}
              </span>
            </h3>
            <ul className="space-y-2 text-xs text-slate-400 font-mono">
              {content.citations.map((cit, i) => (
                <li key={i} className="flex items-start space-x-2">
                  <span className="text-brand-400">[{i + 1}]</span>
                  <span>{cit}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </article>

      {/* Related Guides */}
      <div className="glass-card rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-4">
        <h2 className="text-lg font-bold text-white flex items-center space-x-2">
          <BookOpen className="w-5 h-5 text-brand-400" />
          <span>{isTr ? 'İlgili Diğer Vergi ve Maaş Rehberleri' : 'Related Statutory Tax & Compensation Guides'}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {relatedGuides.map((rg) => {
            const rgContent = isTr ? rg.tr : rg.en;
            return (
              <Link
                key={rg.slug}
                to={`${langPrefix}/guides/${rg.slug}`}
                className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-brand-500/40 transition flex flex-col justify-between space-y-3 group"
              >
                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold text-brand-400 uppercase">{rgContent.category}</span>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-200 group-hover:text-white leading-snug">
                    {rgContent.title}
                  </h3>
                </div>
                <span className="text-xs font-semibold text-emerald-400 flex items-center space-x-1">
                  <span>{isTr ? 'Rehberi İncele' : 'Read Guide'}</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </div>
  );
}
