import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import AdSenseSlot from './components/AdSenseSlot';
import NotFoundPage from './pages/NotFoundPage';
import ProtectedRoute from './components/ProtectedRoute';

import NomadTaxCalculator from './components/NomadTaxCalculator';
import DevTokenCalculator from './components/DevTokenCalculator';
import QuickWasmCompressor from './components/QuickWasmCompressor';
import GlobalTakeHomeCalculator from './components/GlobalTakeHomeCalculator';
import ContractorVsPermCalculator from './components/ContractorVsPermCalculator';
import HiddenFxFeeCalculator from './components/HiddenFxFeeCalculator';
import GlobalInvoiceVatCalculator from './components/GlobalInvoiceVatCalculator';
import FreelancerRateCalculator from './components/FreelancerRateCalculator';
import InflationCalculator from './components/InflationCalculator';
import TimezoneOverlapCalculator from './components/TimezoneOverlapCalculator';
import BeckhamLawCalculator from './components/BeckhamLawCalculator';
import CryptoTaxCalculator from './components/CryptoTaxCalculator';
import EorCostCalculator from './components/EorCostCalculator';
import NomadVisaCalculator from './components/NomadVisaCalculator';

import ProgrammaticSeoGrid from './components/ProgrammaticSeoGrid';
import DynamicToolPage from './pages/DynamicToolPage';
import ToolSeoArticle from './components/ToolSeoArticle';

const AdminDashboard = React.lazy(() => import('./components/AdminDashboard'));

// Direct imports for Legal/Trust pages so SSR pre-renders full E-E-A-T content
import { PrivacyPolicy, TermsOfService, AboutUs, Contact } from './pages/Legal';

import { CookieConsent } from './components/CookieConsent';
import { getTranslation, supportedLanguages } from './i18n';
import { initializeAnalytics } from './utils/adEngine';
import { Sparkles, Globe, Image, DollarSign, Briefcase, ArrowRightLeft, FileText, Clock, TrendingDown, UserCheck, Award, Cpu, Building2 } from 'lucide-react';

// Localized SEO Metadata (Title, Description, and Unique H1) per Tool & Language
const localizedToolSeo = {
  'take-home': {
    en: { h1: 'Global Net Salary & Income Tax Calculator', title: 'Global Net Salary & Tax Calculator | GlobalPayCalc', desc: 'Calculate net take-home salary after federal and state income tax, social security, and FICA deductions across 40+ countries.' },
    tr: { h1: 'Küresel Net Maaş ve Gelir Vergisi Hesaplayıcı', title: 'Küresel Net Maaş ve Gelir Vergisi Hesaplama | GlobalPayCalc', desc: '40+ ülkede gelir vergisi dilimleri, SGK/sosyal güvenlik kesintileri ve FICA sonrası elinize geçecek net maaşı anında hesaplayın.' },
    es: { h1: 'Calculadora Global de Salario Neto e Impuestos', title: 'Calculadora Global de Salario Neto e IRPF | GlobalPayCalc', desc: 'Calcule el salario neto después de impuestos sobre la renta y deducciones de seguridad social en más de 40 países.' },
    de: { h1: 'Globaler Brutto-Netto-Gehalts- & Steuerrechner', title: 'Globaler Brutto-Netto-Gehaltsrechner & Steuern | GlobalPayCalc', desc: 'Berechnen Sie Ihr Nettogehalt nach Einkommensteuer und Sozialversicherungsabzügen in über 40 Ländern weltweit.' },
    pt: { h1: 'Calculadora Global de Salário Líquido e Impostos', title: 'Calculadora Global de Salário Líquido e Imposto de Renda | GlobalPayCalc', desc: 'Calcule o salário líquido após imposto de renda e deduções de seguridade social em mais de 40 países.' },
    fr: { h1: 'Calculateur Mondial de Salaire Net et Impôts', title: 'Calculateur Mondial de Salaire Brut en Net & Impôts | GlobalPayCalc', desc: 'Calculez votre salaire net après impôt sur le revenu et cotisations sociales dans plus de 40 pays.' },
    id: { h1: 'Kalkulator Gaji Bersih & Pajak Penghasilan Global', title: 'Kalkulator Gaji Bersih & Pajak Penghasilan Global | GlobalPayCalc', desc: 'Hitung gaji bersih setelah potongan pajak penghasilan dan jaminan sosial di lebih dari 40 negara secara instan.' },
    ja: { h1: 'グローバル手取り給与・所得税シミュレーター', title: '世界40カ国対応 手取り給与・所得税計算ツール | GlobalPayCalc', desc: '世界40カ国以上の所得税・社会保険料控除後の正確な手取り給与額を瞬時にシミュレーションします。' }
  },
  'contractor': {
    en: { h1: 'W-2 vs 1099 B2B Contractor Equivalence Calculator', title: 'W-2 vs 1099 Contractor Equivalence Calculator | GlobalPayCalc', desc: 'Compare W-2 salaried offers against 1099 B2B contractor billing rates factoring in self-employment taxes, PTO, and benefits.' },
    tr: { h1: 'B2B Sözleşmeli (Freelance) ve Bordrolu Maaş Karşılaştırma', title: 'B2B Freelance ve Bordrolu Maaş Karşılaştırma | GlobalPayCalc', desc: 'Kadrolu (SGK/W-2) maaş teklifi ile B2B faturalı sözleşmeli çalışma maliyetlerini, vergi ve yan hak farklarıyla karşılaştırın.' },
    es: { h1: 'Calculadora de Equivalencia Empleado vs Contratista B2B', title: 'Calculadora Empleado Fijo vs Contratista Autónomo B2B | GlobalPayCalc', desc: 'Compare ofertas de salario en nómina frente a tarifas de contratista independiente B2B incluyendo impuestos y vacaciones.' },
    de: { h1: 'Festanstellung vs. Freelancer B2B Vergleichsrechner', title: 'Festanstellung vs. Freelancer B2B Honorarrechner | GlobalPayCalc', desc: 'Vergleichen Sie Festgehälter mit B2B-Freelancer-Tagessätzen unter Berücksichtigung von Steuern, Urlaub und Sozialabgaben.' },
    pt: { h1: 'Calculadora CLT/Efetivo vs PJ Contratado B2B', title: 'Calculadora Salário Efetivo vs Contratado PJ B2B | GlobalPayCalc', desc: 'Compare propostas de emprego formal com tarifas de prestação de serviços PJ/B2B incluindo impostos, férias e benefícios.' },
    fr: { h1: 'Comparateur Salaire CDI vs Freelance Prestataire B2B', title: 'Simulateur CDI Salarié vs Freelance B2B | GlobalPayCalc', desc: 'Comparez une offre salariale en CDI avec la facturation freelance B2B en intégrant les charges sociales et congés payés.' },
    id: { h1: 'Kalkulator Perbandingan Karyawan Tetap vs Kontraktor B2B', title: 'Kalkulator Gaji Karyawan vs Kontraktor B2B | GlobalPayCalc', desc: 'Bandingkan tawaran gaji karyawan tetap dengan tarif kontrak B2B independen termasuk pajak mandiri dan tunjangan.' },
    ja: { h1: '正社員給与 vs 業務委託（B2Bフリーランス）比較計算機', title: '正社員 vs 業務委託フリーランス手取り比較ツール | GlobalPayCalc', desc: '社会保険・有給休暇・自営業税を考慮し、正社員オファーと業務委託（B2B）報酬の損益分岐点を比較します。' }
  },
  'hourly-rate': {
    en: { h1: 'Freelancer Target Income to Hourly Rate Calculator', title: 'Freelancer Hourly Rate Calculator | GlobalPayCalc', desc: 'Calculate minimum required hourly and daily billing rates based on your annual target income, taxes, expenses, and billable hours.' },
    tr: { h1: 'Freelancer Saatlik ve Günlük Ücret Hesaplama Aracı', title: 'Freelancer Saatlik Ücret Hesaplama Aracı | GlobalPayCalc', desc: 'Yıllık hedef net geliriniz, vergi oranınız, iş giderleriniz ve faturalandırılabilir çalışma saatlerinize göre minimum saatlik ücretinizi hesaplayın.' },
    es: { h1: 'Calculadora de Tarifa por Hora para Freelancers', title: 'Calculadora de Tarifa por Hora y Día para Freelancers | GlobalPayCalc', desc: 'Calcule su tarifa mínima por hora y día según su objetivo de ingresos netos anuales, impuestos, gastos y horas facturables.' },
    de: { h1: 'Freelancer Stundensatz- & Tagessatz-Rechner', title: 'Freelancer Stundensatz-Rechner nach Wunschgehalt | GlobalPayCalc', desc: 'Berechnen Sie Ihren optimalen Stundensatz und Tagessatz basierend auf Zielnettoeinkommen, Steuern, Betriebsausgaben und Auslastung.' },
    pt: { h1: 'Calculadora de Valor Hora para Freelancers', title: 'Calculadora de Valor Hora e Diária Freelancer | GlobalPayCalc', desc: 'Descubra quanto cobrar por hora e por dia com base na sua meta de renda líquida anual, impostos, custos e horas faturáveis.' },
    fr: { h1: 'Calculateur de Taux Horaire et TJM Freelance', title: 'Calculateur TJM et Taux Horaire Freelance | GlobalPayCalc', desc: 'Déterminez votre tarif horaire et TJM minimum selon votre revenu net cible, vos charges fiscales, frais professionnels et jours facturés.' },
    id: { h1: 'Kalkulator Tarif Per Jam & Harian Freelancer', title: 'Kalkulator Tarif Per Jam Freelancer | GlobalPayCalc', desc: 'Hitung tarif tagihan per jam dan harian minimum berdasarkan target penghasilan bersih tahunan, pajak, dan jam kerja efektif.' },
    ja: { h1: 'フリーランス目標年収・時給換算シミュレーター', title: 'フリーランス時給・日当単価計算ツール | GlobalPayCalc', desc: '目標手取り年収、税金、経費、稼働時間から必要な最低時給・日額単価を算出します。' }
  },
  'beckham-law': {
    en: { h1: 'Spain Beckham Law & Expat Tax Regimes Calculator', title: 'Beckham Law & Expat Tax Savings Calculator | GlobalPayCalc', desc: "Calculate expat tax exemptions under Spain's Beckham Law (24% flat), Portugal IFICI/NHR, Italy Impatriati, and Dubai 0% tax scheme." },
    tr: { h1: 'İspanya Beckham Yasası ve Expat Vergi Avantajı Hesaplayıcı', title: 'İspanya Beckham Yasası ve Expat Vergi Hesaplama | GlobalPayCalc', desc: 'İspanya Beckham Yasası (%24 sabit vergi), Portekiz IFICI/NHR, İtalya Impatriati ve Dubai %0 vergi rejimleriyle yıllık vergi tasarrufunuzu hesaplayın.' },
    es: { h1: 'Calculadora de la Ley Beckham y Regímenes Expat', title: 'Calculadora de Ley Beckham (24% IRPF) e Impuestos Expat | GlobalPayCalc', desc: 'Calcule su ahorro fiscal bajo la Ley Beckham en España (24% tarifa plana), IFICI en Portugal, régimen Impatriati en Italia y Dubái.' },
    de: { h1: 'Spanien Beckham-Gesetz & Expat-Steuerrechner', title: 'Beckham Law Spanien (24% Flat Tax) & Expat-Steuerrechner | GlobalPayCalc', desc: 'Berechnen Sie Ihre Steuerersparnis mit dem spanischen Beckham-Gesetz (24% Pauschalsteuer), Portugal IFICI, Italien und Dubai.' },
    pt: { h1: 'Calculadora da Lei Beckham e Regimes Fiscais Expat', title: 'Calculadora Lei Beckham Espanha e IFICI/NHR Portugal | GlobalPayCalc', desc: 'Simule a economia de impostos com a Lei Beckham na Espanha (24% fixo), IFICI/NHR em Portugal, Itália e regime 0% de Dubai.' },
    fr: { h1: 'Simulateur Loi Beckham Espagne & Fiscalité Expatriés', title: 'Calculateur Loi Beckham Espagne (24%) & Régimes Expat | GlobalPayCalc', desc: "Estimez vos économies d'impôt avec la Loi Beckham en Espagne (taux fixe 24%), le statut IFICI au Portugal, l'Italie et Dubaï." },
    id: { h1: 'Kalkulator Pajak Ekspat & Beckham Law Spanyol', title: 'Kalkulator Penghematan Pajak Ekspat & Beckham Law | GlobalPayCalc', desc: 'Hitung penghematan pajak ekspatriat di bawah Beckham Law Spanyol (pajak tetap 24%), IFICI Portugal, Italia, dan pajak 0% Dubai.' },
    ja: { h1: 'スペイン・ベッカム法＆海外移住優遇税制シミュレーター', title: 'ベッカム法（24%一律税率）・海外移住節税計算機 | GlobalPayCalc', desc: 'スペインのベッカム法（一律24%課税）、ポルトガルIFICI、イタリア、ドバイ（無税）での節税額を比較計算します。' }
  },
  'crypto-tax': {
    en: { h1: 'Crypto & Stablecoin (USDT/USDC) Salary Tax Calculator', title: 'Crypto & USDT Salary Tax Calculator | GlobalPayCalc', desc: 'Calculate income and capital gains tax liabilities for remote salaries paid in USDT, USDC, BTC, or ETH across major jurisdictions.' },
    tr: { h1: 'Kripto ve USDT/USDC Uzaktan Maaş Vergisi Hesaplayıcı', title: 'Kripto Maaş (USDT/USDC) Vergi Hesaplama | GlobalPayCalc', desc: 'USDT, USDC, BTC veya ETH ile alınan uzaktan çalışma maaşlarının ABD, İngiltere, Almanya ve Türkiye vergi mevzuatına göre yükümlülüğünü hesaplayın.' },
    es: { h1: 'Calculadora de Impuestos sobre Salarios en Cripto y USDT', title: 'Calculadora de Impuestos para Sueldos en Cripto y USDT | GlobalPayCalc', desc: 'Calcule el impuesto sobre la renta y ganancias de capital para salarios remotos cobrados en USDT, USDC, Bitcoin o Ethereum.' },
    de: { h1: 'Krypto- & Stablecoin-Gehalt (USDT/USDC) Steuerrechner', title: 'Krypto-Gehalt & USDT Einkommensteuer-Rechner | GlobalPayCalc', desc: 'Berechnen Sie Einkommensteuer und Kapitalertragsteuer für Remote-Gehälter in USDT, USDC, BTC oder ETH in Deutschland, USA und UK.' },
    pt: { h1: 'Calculadora de Impostos para Salários em Cripto e USDT', title: 'Calculadora de Imposto sobre Salário em USDT e Cripto | GlobalPayCalc', desc: 'Calcule o imposto de renda e ganho de capital sobre salários remotos recebidos em USDT, USDC, Bitcoin ou Ethereum.' },
    fr: { h1: 'Calculateur Fiscal de Salaire Crypto & Stablecoin (USDT)', title: 'Simulateur Impôt Salaire Crypto, USDT & USDC | GlobalPayCalc', desc: "Calculez l'impôt sur le revenu et les plus-values pour les salaires à distance versés en USDT, USDC, BTC ou ETH." },
    id: { h1: 'Kalkulator Pajak Gaji Kripto & Stablecoin (USDT/USDC)', title: 'Kalkulator Pajak Gaji Kripto & USDT | GlobalPayCalc', desc: 'Hitung kewajiban pajak penghasilan dan capital gain untuk gaji kerja jarak jauh yang dibayar dalam USDT, USDC, atau ETH.' },
    ja: { h1: '仮想通貨・ステーブルコイン（USDT/USDC）給与税金計算機', title: '仮想通貨・USDTリモート給与の所得税＆キャピタルゲイン計算 | GlobalPayCalc', desc: 'USDT、USDC、ETH等で受け取るリモートワーク給与の所得税およびキャピタルゲイン税額を国別に試算します。' }
  },
  'eor-cost': {
    en: { h1: 'Employer of Record (EOR) vs Local Entity Cost Calculator', title: 'EOR vs Local Entity Setup Cost Calculator | GlobalPayCalc', desc: 'Calculate the financial breakeven point between paying Deel or Remote per-seat EOR fees versus incorporating a local subsidiary.' },
    tr: { h1: 'EOR (Deel/Remote) ve Yerel Şirket Kurulum Maliyeti Karşılaştırma', title: 'EOR vs Yerel Şirket Kurma Maliyet Hesaplayıcı | GlobalPayCalc', desc: 'Deel veya Remote gibi EOR servislerine çalışan başı aylık ücret ödemek ile yurt dışında yerel tüzel kişilik kurmanın başabaş noktasını hesaplayın.' },
    es: { h1: 'Calculadora de Costos EOR vs Filial Local Propia', title: 'Calculadora Employer of Record (EOR) vs Entidad Local | GlobalPayCalc', desc: 'Compare el punto de equilibrio financiero entre pagar tarifas mensuales de EOR (Deel/Remote) frente a constituir una sociedad local.' },
    de: { h1: 'Employer of Record (EOR) vs. Eigene Niederlassung Kostenrechner', title: 'EOR (Deel/Remote) vs. GmbH-Gründung Kostenrechner | GlobalPayCalc', desc: 'Ermitteln Sie den Break-Even-Punkt zwischen monatlichen EOR-Gebühren pro Mitarbeiter und der Gründung einer lokalen Tochtergesellschaft.' },
    pt: { h1: 'Calculadora de Custo EOR vs Abertura de Filial Local', title: 'Calculadora Employer of Record (EOR) vs Entidade Local | GlobalPayCalc', desc: 'Compare o custo anual de contratar via plataformas EOR (Deel/Remote) versus abrir e manter uma subsidiária própria no exterior.' },
    fr: { h1: 'Comparateur de Coût Portage EOR vs Filiale Locale', title: 'Calculateur Employer of Record (EOR) vs Création de Filiale | GlobalPayCalc', desc: 'Calculez le seuil de rentabilité entre les frais mensuels EOR (Deel/Remote) par salarié et la création d’une entité juridique locale.' },
    id: { h1: 'Kalkulator Biaya EOR vs Pendirian Badan Hukum Lokal', title: 'Kalkulator Biaya EOR vs Perusahaan Lokal | GlobalPayCalc', desc: 'Hitung titik impas finansial antara membayar biaya bulanan Employer of Record (EOR) dibandingkan mendirikan entitas anak perusahaan lokal.' },
    ja: { h1: 'EOR（雇用代行）vs 現地法人設立コスト損益分岐シミュレーター', title: 'EOR（Deel/Remote）対 現地法人設立コスト比較ツール | GlobalPayCalc', desc: '海外採用においてEOR（雇用代行サービス）を利用する場合と現地法人を設立・維持する場合の年間コストと損益分岐人数を算出します。' }
  },
  'nomad-visa': {
    en: { h1: 'Digital Nomad Visa Minimum Income Eligibility Checker', title: 'Digital Nomad Visa Income Eligibility Checker | GlobalPayCalc', desc: 'Verify monthly minimum income requirements and tax rules for Digital Nomad Visas in Spain, Portugal, Italy, Greece, Dubai, and Japan.' },
    tr: { h1: 'Dijital Göçebe Vizesi Gelir Şartı ve Uygunluk Testi', title: 'Dijital Göçebe Vizesi Gelir Şartı Sorgulama | GlobalPayCalc', desc: 'İspanya, Portekiz, İtalya, Yunanistan, Dubai ve Japonya dijital göçebe vizeleri için gereken minimum aylık gelir şartlarını anında kontrol edin.' },
    es: { h1: 'Verificador de Requisitos de Ingresos para Visa de Nómada Digital', title: 'Calculadora de Elegibilidad para Visa de Nómada Digital | GlobalPayCalc', desc: 'Verifique los ingresos mensuales mínimos exigidos para las visas de nómada digital en España, Portugal, Italia, Grecia, Dubái y Japón.' },
    de: { h1: 'Digital Nomad Visum Einkommens- & Berechtigungsprüfer', title: 'Digital Nomad Visa Mindesteinkommen-Prüfer | GlobalPayCalc', desc: 'Prüfen Sie die monatlichen Mindesteinkommensanforderungen für Digitale-Nomaden-Visa in Spanien, Portugal, Italien, Griechenland und Dubai.' },
    pt: { h1: 'Verificador de Renda Mínima para Visto de Nômade Digital', title: 'Simulador de Elegibilidade Visto Nômade Digital | GlobalPayCalc', desc: 'Verifique os requisitos de renda mensal mínima para vistos de nômade digital em Portugal (D8), Espanha, Itália, Grécia e Dubai.' },
    fr: { h1: 'Vérificateur d’Éligibilité Revenu Visa Nomade Numérique', title: 'Simulateur Revenu Minimum Visa Digital Nomad | GlobalPayCalc', desc: 'Vérifiez les seuils de revenus mensuels requis pour obtenir un visa nomade numérique en Espagne, au Portugal, en Italie, en Grèce et à Dubaï.' },
    id: { h1: 'Pemeriksa Syarat Penghasilan Minimum Visa Digital Nomad', title: 'Cek Syarat Gaji Visa Digital Nomad Global | GlobalPayCalc', desc: 'Periksa syarat penghasilan bulanan minimum untuk Visa Digital Nomad di Spanyol, Portugal, Italia, Yunani, Dubai, dan Jepang.' },
    ja: { h1: 'デジタルノマドビザ最低所得要件・適格性チェッカー', title: '各国デジタルノマドビザ月収要件チェッカー | GlobalPayCalc', desc: 'スペイン、ポルトガル、イタリア、ギリシャ、ドバイ、日本のデジタルノマドビザ申請に必要な最低月収基準を判定します。' }
  },
  'salary': {
    en: { h1: 'Global Remote Salary & Purchasing Power Parity (PPP) Calculator', title: 'Global Remote Salary & PPP Calculator | GlobalPayCalc', desc: 'Compare net remote salaries, cost of living index, and purchasing power parity across 150+ international cities and nomad hubs.' },
    tr: { h1: 'Ülkeler Arası Satın Alma Gücü Paritesi (PPP) ve Maaş Hesaplayıcı', title: 'Küresel Maaş ve Satın Alma Gücü (PPP) Hesaplama | GlobalPayCalc', desc: 'Farklı şehir ve ülkelerdeki yaşam maliyeti indekslerini, kira giderlerini ve net maaş satın alma gücü paritesini (PPP) karşılaştırın.' },
    es: { h1: 'Calculadora de Salario Remoto y Paridad de Poder Adquisitivo (PPP)', title: 'Calculadora Global de Salario y Costo de Vida (PPP) | GlobalPayCalc', desc: 'Compare salarios remotos netos, índice de costo de vida y paridad de poder adquisitivo entre ciudades globales.' },
    de: { h1: 'Globaler Remote-Gehalts- & Kaufkraftparitäts-Rechner (KKP)', title: 'Kaufkraftparität (PPP) & Lebenshaltungskosten-Rechner | GlobalPayCalc', desc: 'Vergleichen Sie Remote-Nettogehälter, Lebenshaltungskostenindizes und reale Kaufkraft zwischen internationalen Metropolen.' },
    pt: { h1: 'Calculadora de Salário Remoto e Poder de Compra (PPP)', title: 'Calculadora de Paridade de Poder de Compra (PPP) e Custo de Vida | GlobalPayCalc', desc: 'Compare salários remotos líquidos, índice de custo de vida e paridade de poder de compra entre cidades do mundo todo.' },
    fr: { h1: 'Calculateur de Salaire à Distance & Parité de Pouvoir d’Achat (PPA)', title: 'Comparateur Coût de la Vie & Pouvoir d’Achat (PPP) | GlobalPayCalc', desc: 'Comparez les salaires nets à distance, le coût de la vie et la parité de pouvoir d’achat entre les grandes villes mondiales.' },
    id: { h1: 'Kalkulator Gaji Remote & Paritas Daya Beli (PPP) Global', title: 'Kalkulator Biaya Hidup & Paritas Daya Beli (PPP) | GlobalPayCalc', desc: 'Bandingkan gaji bersih jarak jauh, indeks biaya hidup, dan daya beli riil antar kota di seluruh dunia.' },
    ja: { h1: 'グローバル給与＆購買力平価（PPP・生活費指数）比較計算機', title: '世界の生活費・購買力平価（PPP）給与比較ツール | GlobalPayCalc', desc: '世界の主要都市間での生活費指数、家賃、現地税率を考慮した実質的な購買力（PPP）を比較します。' }
  },
  'inflation': {
    en: { h1: 'Inflation & Real Salary Purchasing Power Erosion Calculator', title: 'Inflation & Salary Purchasing Power Calculator | GlobalPayCalc', desc: 'Calculate real salary erosion and the exact annual pay raise percentage required to preserve your purchasing power against inflation.' },
    tr: { h1: 'Enflasyon Karşısında Maaş Erimesi ve Zam Oranı Hesaplayıcı', title: 'Enflasyon Maaş Erimesi ve Alım Gücü Hesaplama | GlobalPayCalc', desc: 'Yıllık enflasyon oranlarına göre maaşınızın gerçek alım gücü kaybını ve standartlarınızı korumak için gereken zam yüzdesini hesaplayın.' },
    es: { h1: 'Calculadora de Inflación y Pérdida de Poder Adquisitivo Salarial', title: 'Calculadora de Impacto de la Inflación en el Salario | GlobalPayCalc', desc: 'Calcule la erosión salarial real y el porcentaje exacto de aumento anual necesario para mantener su nivel de vida frente a la inflación.' },
    de: { h1: 'Inflations- & Reallohnverlust-Rechner für Gehälter', title: 'Inflationsrechner Gehalt & Kaufkraftverlust | GlobalPayCalc', desc: 'Berechnen Sie den realen Kaufkraftverlust Ihres Gehalts durch Inflation und die notwendige Gehaltserhöhung zum Ausgleich.' },
    pt: { h1: 'Calculadora de Perda Salarial pela Inflação e Reajuste', title: 'Calculadora de Inflação sobre o Salário e Poder de Compra | GlobalPayCalc', desc: 'Calcule a corrosão real do seu salário pela inflação e o percentual exato de aumento necessário para manter seu padrão de vida.' },
    fr: { h1: 'Calculateur d’Érosion Salariale liée à l’Inflation', title: 'Simulateur Perte de Pouvoir d’Achat & Inflation Salariale | GlobalPayCalc', desc: 'Mesurez la perte réelle de pouvoir d’achat de votre salaire face à l’inflation et l’augmentation requise pour la compenser.' },
    id: { h1: 'Kalkulator Dampak Inflasi terhadap Gaji & Daya Beli', title: 'Kalkulator Gerusan Inflasi Gaji & Kenaikan Tahunan | GlobalPayCalc', desc: 'Hitung penurunan nilai riil gaji akibat inflasi dan persentase kenaikan gaji tahunan yang dibutuhkan agar daya beli tetap terjaga.' },
    ja: { h1: 'インフレによる実質賃金目減り＆必要昇給率シミュレーター', title: 'インフレ実質給与計算・購買力維持シミュレーター | GlobalPayCalc', desc: '物価上昇（インフレ）による給与の実質的な目減り額と、生活水準を維持するために必要な昇給率を計算します。' }
  },
  'fx-fees': {
    en: { h1: 'Real Mid-Market FX Rate & Hidden Bank Wire Fee Estimator', title: 'Real FX Rate & Hidden Bank Fee Estimator | GlobalPayCalc', desc: 'Compare real mid-market exchange rates against hidden bank FX markups and international wire transfer fees across Wise, SWIFT, PayPal, and Stripe.' },
    tr: { h1: 'Gizli Banka Döviz (FX) Makası ve Yurt Dışı Transfer Komisyonu Hesaplayıcı', title: 'Gizli Banka FX Komisyonu ve SWIFT Maliyet Hesaplama | GlobalPayCalc', desc: 'Gerçek piyasa kuru ile SWIFT, PayPal, Stripe ve Wise uluslararası para transferlerindeki gizli kur makası kayıplarını karşılaştırın.' },
    es: { h1: 'Calculadora de Comisiones Ocultas de Cambio (FX) y Transferencias', title: 'Comparador de Comisiones FX Bancarias, SWIFT, Wise y PayPal | GlobalPayCalc', desc: 'Descubra el sobreprecio oculto en el tipo de cambio bancario frente a la tasa real del mercado en transferencias internacionales.' },
    de: { h1: 'Versteckte Bank-Wechselkursgebühren (FX) & Auslandsüberweisungs-Rechner', title: 'FX-Aufschlag & Auslandsüberweisung Kostenrechner (SWIFT/Wise) | GlobalPayCalc', desc: 'Vergleichen Sie echte Devisenmittelkurse mit versteckten Bank-Wechselkursaufschlägen bei SWIFT, PayPal, Stripe und Wise.' },
    pt: { h1: 'Calculadora de Taxas Ocultas de Câmbio (FX) e Remessas Internacionais', title: 'Simulador de Spread Cambial Oculto (SWIFT, Wise, PayPal) | GlobalPayCalc', desc: 'Compare o câmbio comercial real com o spread oculto cobrado por bancos, PayPal, Stripe e transferências SWIFT.' },
    fr: { h1: 'Calculateur de Frais de Change Cachés (FX) & Virements Internationaux', title: 'Comparateur Frais de Change Bancaires (SWIFT, Wise, PayPal) | GlobalPayCalc', desc: 'Révélez les marges de change cachées appliquées par les banques, PayPal et SWIFT par rapport au taux interbancaire réel.' },
    id: { h1: 'Kalkulator Biaya Kurs Tersembunyi (FX) & Transfer Bank Internasional', title: 'Kalkulator Selisih Kurs Bank, SWIFT, Wise & PayPal | GlobalPayCalc', desc: 'Bandingkan nilai tukar pasar tengah riil dengan markup kurs bank tersembunyi pada transfer internasional SWIFT, PayPal, dan Wise.' },
    ja: { h1: '海外送金・隠れ為替手数料（FXスプレッド）比較シミュレーター', title: '海外送金手数料・為替レート隠れコスト計算機 (SWIFT/Wise/PayPal) | GlobalPayCalc', desc: '実際の市場仲値レートと銀行SWIFT送金・PayPal・Stripeに含まれる隠れた為替スプレッドの手数料差額を可視化します。' }
  },
  'vat': {
    en: { h1: 'Global B2B Invoice VAT, GST & Reverse Charge Calculator', title: 'Global Invoice & VAT Calculator | GlobalPayCalc', desc: 'Calculate net, VAT/GST amounts, and gross invoice totals with B2B cross-border Reverse Charge 0% export exemptions.' },
    tr: { h1: 'Uluslararası B2B Fatura, KDV/VAT ve İhracat İstisnası Hesaplayıcı', title: 'B2B Fatura KDV / VAT ve Stopaj Hesaplama | GlobalPayCalc', desc: 'Yurt dışı yazılım/hizmet ihracatı (%0 KDV / Reverse Charge) ve küresel KDV/GST oranlarıyla netten brüte fatura tutarlarını hesaplayın.' },
    es: { h1: 'Calculadora Global de IVA, GST e Inversión del Sujeto Pasivo B2B', title: 'Calculadora de IVA para Facturas Internacionales B2B | GlobalPayCalc', desc: 'Calcule importes netos, IVA/IGIC y totales brutos de facturación incluyendo exenciones B2B intracomunitarias (Reverse Charge).' },
    de: { h1: 'Globaler B2B-Rechnungs-, Mehrwertsteuer- (USt) & Reverse-Charge-Rechner', title: 'Mehrwertsteuer- & B2B Reverse-Charge-Rechner | GlobalPayCalc', desc: 'Berechnen Sie Netto-, Umsatzsteuer- und Bruttorechnungsbeträge inklusive grenzüberschreitendem B2B Reverse-Charge-Verfahren (0% USt).' },
    pt: { h1: 'Calculadora Global de Faturas B2B, IVA/GST e Exportação de Serviços', title: 'Calculadora de IVA/VAT para Faturas Internacionais B2B | GlobalPayCalc', desc: 'Calcule valores líquidos, impostos sobre valor agregado (IVA/GST) e isenções de exportação de serviços B2B.' },
    fr: { h1: 'Calculateur Mondial de TVA B2B, HT/TTC & Autoliquidation', title: 'Calculateur TVA Facture Internationale B2B & Autoliquidation | GlobalPayCalc', desc: 'Calculez les montants HT, TVA/GST et TTC de vos factures avec gestion de l’autoliquidation B2B transfrontalière (0% TVA).' },
    id: { h1: 'Kalkulator Faktur B2B Global, PPN (VAT/GST) & Ekspor Jasa', title: 'Kalkulator PPN / VAT Invoice B2B Internasional | GlobalPayCalc', desc: 'Hitung nilai bersih, pajak pertambahan nilai (PPN/VAT/GST), dan pembebasan pajak ekspor jasa B2B lintas negara.' },
    ja: { h1: 'グローバルB2B請求書・付加価値税（VAT/GST・消費税）計算ツール', title: '国際B2BインボイスVAT/GST・リバースチャージ計算機 | GlobalPayCalc', desc: 'クロスボーダーB2B取引におけるリバースチャージ（免税）や各国のVAT/GST税率に対応した税抜・税込請求額を計算します。' }
  },
  'timezone': {
    en: { h1: 'Global Remote Team Timezone Overlap & Meeting Window Planner', title: 'Timezone Overlap Calculator for Remote Teams | GlobalPayCalc', desc: 'Visualize working hour overlaps and optimal synchronous meeting windows for distributed engineering teams across global timezones.' },
    tr: { h1: 'Uzaktan Çalışan Ekipler İçin Zaman Dilimi Çakışması Planlayıcı', title: 'Küresel Zaman Dilimi ve Ortak Toplantı Saati Hesaplama | GlobalPayCalc', desc: 'ABD, Avrupa, Türkiye ve Asya saat dilimlerindeki dağıtık ekipler için ortak mesai saatlerini ve en uygun toplantı aralıklarını görselleştirin.' },
    es: { h1: 'Planificador de Solapamiento de Zonas Horarias para Equipos Remotos', title: 'Calculadora de Diferencia Horaria y Reuniones Remotas | GlobalPayCalc', desc: 'Visualice el solapamiento de horarios laborales y las mejores franjas de reunión para equipos remotos entre América, Europa y Asia.' },
    de: { h1: 'Zeitzonen-Überschneidungs-Planer für Globale Remote-Teams', title: 'Zeitzonen-Rechner & Meeting-Planer für Remote-Teams | GlobalPayCalc', desc: 'Finden Sie optimale gemeinsame Arbeitszeiten und Meeting-Fenster für verteilte Teams in Europa, den USA und Asien.' },
    pt: { h1: 'Planejador de Fuso Horário e Janelas de Reunião para Equipes Remotas', title: 'Calculadora de Fuso Horário para Trabalho Remoto | GlobalPayCalc', desc: 'Visualize a sobreposição de horários de trabalho entre Brasil, EUA, Europa e Ásia para agendar reuniões sem desgaste.' },
    fr: { h1: 'Planificateur de Fuseaux Horaires pour Équipes Distribuées', title: 'Calculateur de Chevauchement de Fuseaux Horaires | GlobalPayCalc', desc: 'Visualisez les plages horaires de travail communes entre l’Europe, l’Amérique du Nord et l’Asie pour vos équipes à distance.' },
    id: { h1: 'Perencana Irisan Zona Waktu Tim Remote Global', title: 'Kalkulator Zona Waktu & Jadwal Meeting Tim Remote | GlobalPayCalc', desc: 'Visualisasikan jam kerja yang beririsan untuk menjadwalkan rapat tim lintas benua (AS, Eropa, Asia) secara efisien.' },
    ja: { h1: 'グローバルリモートチーム向けタイムゾーン重複・会議時間プランナー', title: '世界時差・リモートチーム会議時間重複シミュレーター | GlobalPayCalc', desc: '日本・欧米・アジアに分散するリモートチームの稼働時間重なりを可視化し、最適なミーティング時間帯を特定します。' }
  },
  'wasm': {
    en: { h1: 'Client-Side WebAssembly Image Compressor & Format Converter', title: 'Free WebAssembly Image Compressor & Converter | GlobalPayCalc', desc: 'Compress and convert images to WebP, AVIF, or PNG with 100% browser RAM privacy using local WebAssembly—zero server uploads.' },
    tr: { h1: 'Tarayıcı İçi WebAssembly Görsel Sıkıştırma ve Dönüştürme Stüdyosu', title: 'Ücretsiz WebAssembly Görsel Sıkıştırıcı (WebP/PNG) | GlobalPayCalc', desc: 'Fotoğraflarınızı sunucuya yüklemeden, %100 gizlilikle doğrudan tarayıcı belleğinizde (RAM) WebP veya PNG formatına sıkıştırın.' },
    es: { h1: 'Compresor y Convertidor de Imágenes WebAssembly en el Navegador', title: 'Compresor de Imágenes Privado WebAssembly (WebP/PNG) | GlobalPayCalc', desc: 'Comprima y convierta imágenes a WebP o PNG con 100% de privacidad en la memoria local de su navegador sin subir archivos.' },
    de: { h1: 'Lokaler WebAssembly Bildkomprimierer & WebP/PNG-Konverter', title: 'Kostenloser WebAssembly Bildkomprimierer (100% Lokal) | GlobalPayCalc', desc: 'Komprimieren und konvertieren Sie Bilder direkt im Browser-RAM zu WebP oder PNG mit 100% Datenschutz ohne Server-Upload.' },
    pt: { h1: 'Compressor e Conversor de Imagens WebAssembly 100% Local', title: 'Compressor de Imagens WebP/PNG no Navegador | GlobalPayCalc', desc: 'Comprima e converta imagens para WebP ou PNG diretamente na memória RAM do navegador com total privacidade e zero upload.' },
    fr: { h1: 'Compresseur et Convertisseur d’Images WebAssembly 100% Local', title: 'Compresseur d’Images WebP/PNG Local sans Upload | GlobalPayCalc', desc: 'Compressez et convertissez vos images en WebP ou PNG directement dans la RAM de votre navigateur sans aucun envoi serveur.' },
    id: { h1: 'Kompresor & Konverter Gambar WebAssembly Lokal di Browser', title: 'Kompresor Gambar WebP/PNG Privat Tanpa Upload | GlobalPayCalc', desc: 'Kompres dan ubah format gambar ke WebP atau PNG dengan privasi 100% di memori RAM browser Anda tanpa unggahan server.' },
    ja: { h1: 'ブラウザ内完結 WebAssembly 画像圧縮＆フォーマット変換ツール', title: 'サーバー送信なし！WebAssembly高速画像圧縮（WebP/PNG） | GlobalPayCalc', desc: '画像を外部サーバーに一切アップロードせず、ブラウザ内メモリ（RAM）のみで安全・高速にWebP/PNG圧縮を行います。' }
  },
  'ai': {
    en: { h1: 'LLM API Token Cost & Prompt Caching Simulator', title: 'LLM API Token Cost Simulator (GPT-4o, Claude 3.5, Gemini) | GlobalPayCalc', desc: 'Compare monthly API token costs for OpenAI GPT-4o, Anthropic Claude 3.5 Sonnet, Gemini 1.5, and Llama 3 across RAG and agent workloads.' },
    tr: { h1: 'Yapay Zeka (LLM) API Token Maliyeti ve Prompt Cache Simülatörü', title: 'LLM API Token Maliyet Hesaplayıcı (GPT-4o, Claude 3.5) | GlobalPayCalc', desc: 'OpenAI GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 ve Llama 3 modellerinin aylık girdi/çıktı token ve önbellek maliyetlerini karşılaştırın.' },
    es: { h1: 'Simulador de Costos de Tokens API LLM y Caché de Prompts', title: 'Calculadora de Costos API de IA (GPT-4o, Claude 3.5, Gemini) | GlobalPayCalc', desc: 'Compare el gasto mensual en tokens para OpenAI GPT-4o, Claude 3.5, Gemini y Llama 3 en flujos RAG y agentes autónomos.' },
    de: { h1: 'LLM API-Token-Kosten & Prompt-Caching-Simulator', title: 'KI API-Token-Kostenrechner (GPT-4o, Claude 3.5, Gemini) | GlobalPayCalc', desc: 'Vergleichen Sie monatliche API-Token-Kosten für OpenAI GPT-4o, Anthropic Claude 3.5, Gemini 1.5 und Llama 3 bei RAG-Workloads.' },
    pt: { h1: 'Simulador de Custos de Tokens de API LLM e Prompt Caching', title: 'Calculadora de Preços de API de IA (GPT-4o, Claude 3.5) | GlobalPayCalc', desc: 'Compare os custos mensais de tokens de entrada e saída para GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 e Llama 3 em produção.' },
    fr: { h1: 'Simulateur de Coûts API LLM & Cache de Tokens IA', title: 'Calculateur de Coût API IA (GPT-4o, Claude 3.5, Gemini) | GlobalPayCalc', desc: 'Comparez les coûts mensuels de tokens pour OpenAI GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 et Llama 3 sur vos pipelines RAG.' },
    id: { h1: 'Simulator Biaya Token API LLM & Prompt Caching', title: 'Kalkulator Biaya Token API AI (GPT-4o, Claude 3.5, Gemini) | GlobalPayCalc', desc: 'Bandingkan estimasi biaya bulanan token input/output untuk OpenAI GPT-4o, Claude 3.5, Gemini 1.5, dan Llama 3.' },
    ja: { h1: 'LLM APIトークン料金＆プロンプトキャッシュ比較シミュレーター', title: '生成AI APIトークンコスト計算機（GPT-4o / Claude 3.5 / Gemini） | GlobalPayCalc', desc: 'OpenAI GPT-4o、Claude 3.5 Sonnet、Gemini 1.5、Llama 3の月間入出力トークン費用とキャッシュ割引額を精密に比較します。' }
  }
};

function ContentWrapper({ lang, t }) {
  const location = useLocation();
  const navigate = useNavigate();
  const pathSegments = location.pathname.split('/').filter(Boolean);
  
  // Ignore language prefix for routing tab highlighting
  const hasLangPrefix = supportedLanguages.some(l => l.code === pathSegments[0]);
  const activeTab = hasLangPrefix ? (pathSegments[1] || 'take-home') : (pathSegments[0] || 'take-home');
  const basePath = hasLangPrefix ? `/${pathSegments[0]}` : '';

  const [activeCat, setActiveCat] = useState('tax');

  // Note: First tool links directly to canonical root ('') instead of '/take-home' to prevent internal 301 redirect chains
  const tools = [
    { path: '', slug: 'take-home', title: t('nav.takeHome'), desc: lang === 'tr' ? 'Gelir vergisi ve sosyal kesinti' : 'Net salary after tax & FICA', icon: DollarSign, color: 'text-emerald-400', bg: 'bg-emerald-500/10', cat: 'tax' },
    { path: '/contractor', slug: 'contractor', title: t('nav.contractor'), desc: lang === 'tr' ? 'B2B ve bordrolu karşılaştırma' : 'W2 vs 1099 contractor equivalency', icon: Briefcase, color: 'text-cyan-400', bg: 'bg-cyan-500/10', cat: 'tax' },
    { path: '/hourly-rate', slug: 'hourly-rate', title: t('nav.hourlyRate'), desc: lang === 'tr' ? 'Freelancer saatlik ücret hesabı' : 'Target income to hourly billing rate', icon: UserCheck, color: 'text-emerald-400', bg: 'bg-emerald-500/10', cat: 'tax' },
    { path: '/beckham-law', slug: 'beckham-law', title: t('nav.beckhamLaw'), desc: lang === 'tr' ? 'Expat vergi muafiyeti' : 'Spain Beckham law & expat incentives', icon: Award, color: 'text-rose-400', bg: 'bg-rose-500/10', cat: 'tax' },
    { path: '/crypto-tax', slug: 'crypto-tax', title: t('nav.cryptoTax'), desc: lang === 'tr' ? 'Kripto maaş vergi hesaplama' : 'Taxes on USDT/USDC remote salary', icon: Cpu, color: 'text-cyan-400', bg: 'bg-cyan-500/10', cat: 'tax' },
    { path: '/nomad-visa', slug: 'nomad-visa', title: t('nav.nomadVisa'), desc: lang === 'tr' ? 'Dijital göçebe vize uygunluğu' : 'Nomad visa minimum income check', icon: Globe, color: 'text-emerald-400', bg: 'bg-emerald-500/10', cat: 'tax' },
    { path: '/eor-cost', slug: 'eor-cost', title: t('nav.eorCost'), desc: lang === 'tr' ? 'EOR ve şirket kurma maliyeti' : 'Employer of Record vs local entity cost', icon: Building2, color: 'text-purple-400', bg: 'bg-purple-500/10', cat: 'tax' },
    { path: '/salary', slug: 'salary', title: t('nav.salary'), desc: lang === 'tr' ? 'Ülkeler arası satın alma gücü' : 'Global cost of living & PPP parity', icon: Globe, color: 'text-amber-400', bg: 'bg-amber-500/10', cat: 'tax' },
    { path: '/inflation', slug: 'inflation', title: t('nav.inflation'), desc: lang === 'tr' ? 'Maaşın enflasyon karşısındaki kaybı' : 'Real purchasing power loss calculator', icon: TrendingDown, color: 'text-amber-400', bg: 'bg-amber-500/10', cat: 'finance' },
    { path: '/fx-fees', slug: 'fx-fees', title: t('nav.fxFees'), desc: lang === 'tr' ? 'Gizli döviz transfer marjları' : 'Hidden bank FX markup wire fees', icon: ArrowRightLeft, color: 'text-rose-400', bg: 'bg-rose-500/10', cat: 'finance' },
    { path: '/vat', slug: 'vat', title: t('nav.vat'), desc: lang === 'tr' ? 'B2B fatura vergi ve KDV matrahı' : 'Invoice VAT & sales tax calculator', icon: FileText, color: 'text-purple-400', bg: 'bg-purple-500/10', cat: 'finance' },
    { path: '/timezone', slug: 'timezone', title: t('nav.timezone'), desc: lang === 'tr' ? 'Ortak çalışma saati çakışması' : 'Remote meeting window grid builder', icon: Clock, color: 'text-indigo-400', bg: 'bg-indigo-500/10', cat: 'finance' },
    { path: '/wasm', slug: 'wasm', title: t('nav.bgRemover'), desc: lang === 'tr' ? 'Tarayıcıda yerel görsel işleme' : '100% private WASM image compressor', icon: Image, color: 'text-cyan-400', bg: 'bg-cyan-500/10', cat: 'ai_wasm' },
    { path: '/ai', slug: 'ai', title: t('nav.aiCost'), desc: lang === 'tr' ? 'LLM API token maliyet hesabı' : 'Compare GPT-4o, Claude 3.5 API token cost', icon: Sparkles, color: 'text-amber-400', bg: 'bg-amber-500/10', cat: 'ai_wasm' }
  ];

  useEffect(() => {
    const currentTabSlug = activeTab === 'video' ? 'take-home' : activeTab;
    const currentTool = tools.find(item => item.slug === currentTabSlug);
    if (currentTool) {
      setActiveCat(currentTool.cat);
    }
  }, [activeTab]);

  const isLegalPage = ['privacy', 'terms', 'about', 'contact'].includes(activeTab);
  const isPseoPage = location.pathname.includes('/calculator/') || location.pathname.includes('/tools/');

  // Resolve localized Title, Description, and Unique H1
  const toolSeoGroup = localizedToolSeo[activeTab] || localizedToolSeo['take-home'];
  const activeSeo = toolSeoGroup[lang] || toolSeoGroup.en;

  let pageTitle = activeSeo.title;
  let pageDesc = activeSeo.desc;
  let heroH1 = activeSeo.h1;

  if (activeTab === 'privacy') {
    pageTitle = `${t('legal.privacy.title')} | GlobalPayCalc`;
    pageDesc = t('legal.privacy.desc');
  } else if (activeTab === 'terms') {
    pageTitle = `${t('legal.terms.title')} | GlobalPayCalc`;
    pageDesc = t('legal.terms.desc');
  } else if (activeTab === 'about') {
    pageTitle = `${t('legal.about.title')} | GlobalPayCalc`;
    pageDesc = t('legal.about.desc');
  } else if (activeTab === 'contact') {
    pageTitle = `${t('legal.contact.title')} | GlobalPayCalc`;
    pageDesc = t('legal.contact.desc');
  }

  const canonicalSlug = (activeTab === 'take-home' || activeTab === 'video') ? '' : activeTab;
  const canonicalPath = hasLangPrefix
    ? `/${pathSegments[0]}${canonicalSlug ? '/' + canonicalSlug : ''}`
    : (canonicalSlug ? `/${canonicalSlug}` : '/');
  const canonicalHref = `https://globalpaycalc.com${canonicalPath}`;

  return (
    <>
      {!isPseoPage && (
        <Helmet>
          <title>{pageTitle}</title>
          <meta name="description" content={pageDesc} />
          <link rel="canonical" href={canonicalHref} />

          {/* hreflang Alternates for all supported languages */}
          <link rel="alternate" hreflang="en" href={`https://globalpaycalc.com/${canonicalSlug}`} />
          {['tr','es','de','pt','fr','id','ja'].map(lc => (
            <link key={lc} rel="alternate" hreflang={lc} href={`https://globalpaycalc.com/${lc}${canonicalSlug ? '/' + canonicalSlug : ''}`} />
          ))}
          <link rel="alternate" hreflang="x-default" href={`https://globalpaycalc.com/${canonicalSlug}`} />
          
          {/* Open Graph / Facebook / LinkedIn */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content={canonicalHref} />
          <meta property="og:title" content={pageTitle} />
          <meta property="og:description" content={pageDesc} />
          <meta property="og:image" content="https://globalpaycalc.com/og-image.png" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content={canonicalHref} />
          <meta name="twitter:title" content={pageTitle} />
          <meta name="twitter:description" content={pageDesc} />
          <meta name="twitter:image" content="https://globalpaycalc.com/og-image.png" />
        </Helmet>
      )}

      {activeTab !== 'admin' && !isPseoPage && !isLegalPage && (
        <div className="text-center max-w-4xl mx-auto space-y-6 pt-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-brand-500/10 via-purple-500/10 to-pink-500/10 border border-brand-500/20 text-xs font-semibold text-brand-300 animate-float">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{t('hero.badge')}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight drop-shadow-2xl">
            <span className="gradient-text">{heroH1}</span>
          </h1>

          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            {pageDesc}
          </p>

          {/* Desktop view navigation - wrapping list (100% crawlable canonical links) */}
          <div className="hidden md:flex flex-wrap justify-center gap-2 pt-4">
            {tools.map(tool => {
              const Icon = tool.icon;
              const isActive = activeTab === tool.slug || (tool.slug === 'take-home' && activeTab === 'video');
              const colorScheme = {
                'text-emerald-400': 'bg-emerald-600 text-white border-emerald-500 shadow-lg shadow-emerald-500/20',
                'text-cyan-400': 'bg-cyan-600 text-white border-cyan-500 shadow-lg shadow-cyan-500/20',
                'text-rose-400': 'bg-rose-600 text-white border-rose-500 shadow-lg shadow-rose-500/20',
                'text-purple-400': 'bg-purple-600 text-white border-purple-500 shadow-lg shadow-purple-500/20',
                'text-amber-400': 'bg-amber-600 text-white border-amber-500 shadow-lg shadow-amber-500/20',
                'text-indigo-400': 'bg-indigo-600 text-white border-indigo-500 shadow-lg shadow-indigo-500/20',
              };
              const activeClass = colorScheme[tool.color] || 'bg-slate-800 text-white border-slate-700';
              const targetHref = `${basePath}${tool.path}` || '/';

              return (
                <Link 
                  key={tool.slug}
                  to={targetHref} 
                  title={tool.desc}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 border cursor-pointer ${isActive ? activeClass : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'}`}
                >
                  <Icon className={`w-3.5 h-3.5 ${tool.color}`} />
                  <span>{tool.title}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile view navigation - category switcher and grid */}
          <div className="md:hidden block space-y-4 pt-4">
            <div className="flex space-x-1 bg-slate-900/60 p-1.5 rounded-2xl border border-slate-850/80 max-w-md mx-auto">
              <button 
                onClick={() => setActiveCat('tax')} 
                className={`flex-1 flex items-center justify-center space-x-1 py-3 px-1 rounded-xl text-[10px] font-black transition-all ${activeCat === 'tax' ? 'bg-gradient-to-r from-rose-600 via-purple-600 to-brand-500 text-white shadow-lg shadow-purple-600/20' : 'text-slate-400 hover:text-slate-200'}`}
              >
                <DollarSign className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                <span>{lang === 'tr' ? 'Maaş & Vergi' : 'Salary & Tax'}</span>
              </button>
              <button 
                onClick={() => setActiveCat('finance')} 
                className={`flex-1 flex items-center justify-center space-x-1 py-3 px-1 rounded-xl text-[10px] font-black transition-all ${activeCat === 'finance' ? 'bg-gradient-to-r from-rose-600 via-purple-600 to-brand-500 text-white shadow-lg shadow-purple-600/20' : 'text-slate-400 hover:text-slate-200'}`}
              >
                <FileText className="w-3.5 h-3.5 text-purple-400" />
                <span>{lang === 'tr' ? 'B2B & Finans' : 'Finance'}</span>
              </button>
              <button 
                onClick={() => setActiveCat('ai_wasm')} 
                className={`flex-1 flex items-center justify-center space-x-1 py-3 px-1 rounded-xl text-[10px] font-black transition-all ${activeCat === 'ai_wasm' ? 'bg-gradient-to-r from-rose-600 via-purple-600 to-brand-500 text-white shadow-lg shadow-purple-600/20' : 'text-slate-400 hover:text-slate-200'}`}
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>{lang === 'tr' ? 'Yapay Zeka' : 'AI & WASM'}</span>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              {tools.filter(item => item.cat === activeCat).map(tool => {
                const Icon = tool.icon;
                const isActive = activeTab === tool.slug || (tool.slug === 'take-home' && activeTab === 'video');
                const borderColors = {
                  'text-emerald-400': 'border-emerald-500/30',
                  'text-cyan-400': 'border-cyan-500/30',
                  'text-rose-400': 'border-rose-500/30',
                  'text-purple-400': 'border-purple-500/30',
                  'text-amber-400': 'border-amber-500/30',
                  'text-indigo-400': 'border-indigo-500/30',
                };
                const borderClass = borderColors[tool.color] || 'border-slate-800';
                const targetHref = `${basePath}${tool.path}` || '/';

                return (
                  <div 
                    key={tool.slug}
                    onClick={() => navigate(targetHref)}
                    className={`flex flex-col text-left p-4 rounded-2xl border transition-all duration-150 active:scale-[0.96] cursor-pointer ${isActive ? 'bg-slate-900 border-brand-500 shadow-lg shadow-brand-500/10' : 'bg-slate-900/50 hover:bg-slate-900 border-slate-800'}`}
                  >
                    <div className={`w-9 h-9 rounded-xl ${tool.bg} flex items-center justify-center mb-3 border ${borderClass}`}>
                      <Icon className={`w-4 h-4 ${tool.color}`} />
                    </div>
                    <span className="text-xs font-black text-white leading-tight">{tool.title}</span>
                    <span className="text-[10px] text-slate-400 mt-1 font-medium leading-tight">{tool.desc}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      <div className="pt-4">
        <React.Suspense fallback={
          <div className="min-h-[450px] flex flex-col items-center justify-center bg-slate-900/40 rounded-3xl border border-slate-800/80 p-8 text-center animate-pulse">
            <div className="w-10 h-10 rounded-full border-2 border-brand-500 border-t-transparent animate-spin mb-4" />
            <div className="text-slate-400 text-sm font-medium">Yükleniyor... / Loading...</div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<GlobalTakeHomeCalculator lang={lang} />} />
            <Route path="/take-home" element={<GlobalTakeHomeCalculator lang={lang} />} />
            <Route path="/contractor" element={<ContractorVsPermCalculator lang={lang} />} />
            <Route path="/hourly-rate" element={<FreelancerRateCalculator lang={lang} />} />
            <Route path="/beckham-law" element={<BeckhamLawCalculator lang={lang} />} />
            <Route path="/crypto-tax" element={<CryptoTaxCalculator lang={lang} />} />
            <Route path="/eor-cost" element={<EorCostCalculator lang={lang} />} />
            <Route path="/nomad-visa" element={<NomadVisaCalculator lang={lang} />} />
            <Route path="/inflation" element={<InflationCalculator lang={lang} />} />
            <Route path="/fx-fees" element={<HiddenFxFeeCalculator lang={lang} />} />
            <Route path="/vat" element={<GlobalInvoiceVatCalculator lang={lang} />} />
            <Route path="/timezone" element={<TimezoneOverlapCalculator lang={lang} />} />
            <Route path="/salary" element={<NomadTaxCalculator lang={lang} />} />
            <Route path="/ai" element={<DevTokenCalculator lang={lang} />} />
            <Route path="/wasm" element={<QuickWasmCompressor lang={lang} />} />
            <Route path="/video" element={<GlobalTakeHomeCalculator lang={lang} />} />
            <Route path="/admin" element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            } />
            
            <Route path="/privacy" element={<PrivacyPolicy lang={lang} />} />
            <Route path="/terms" element={<TermsOfService lang={lang} />} />
            <Route path="/about" element={<AboutUs lang={lang} />} />
            <Route path="/contact" element={<Contact lang={lang} />} />
            
            {/* Lang Routes */}
            {supportedLanguages.map(l => (
              <React.Fragment key={l.code}>
                <Route path={`/${l.code}`} element={<GlobalTakeHomeCalculator lang={l.code} />} />
                <Route path={`/${l.code}/take-home`} element={<GlobalTakeHomeCalculator lang={l.code} />} />
                <Route path={`/${l.code}/contractor`} element={<ContractorVsPermCalculator lang={l.code} />} />
                <Route path={`/${l.code}/hourly-rate`} element={<FreelancerRateCalculator lang={l.code} />} />
                <Route path={`/${l.code}/beckham-law`} element={<BeckhamLawCalculator lang={l.code} />} />
                <Route path={`/${l.code}/crypto-tax`} element={<CryptoTaxCalculator lang={l.code} />} />
                <Route path={`/${l.code}/eor-cost`} element={<EorCostCalculator lang={l.code} />} />
                <Route path={`/${l.code}/nomad-visa`} element={<NomadVisaCalculator lang={l.code} />} />
                <Route path={`/${l.code}/inflation`} element={<InflationCalculator lang={l.code} />} />
                <Route path={`/${l.code}/fx-fees`} element={<HiddenFxFeeCalculator lang={l.code} />} />
                <Route path={`/${l.code}/vat`} element={<GlobalInvoiceVatCalculator lang={l.code} />} />
                <Route path={`/${l.code}/timezone`} element={<TimezoneOverlapCalculator lang={l.code} />} />
                <Route path={`/${l.code}/salary`} element={<NomadTaxCalculator lang={l.code} />} />
                <Route path={`/${l.code}/ai`} element={<DevTokenCalculator lang={l.code} />} />
                <Route path={`/${l.code}/wasm`} element={<QuickWasmCompressor lang={l.code} />} />
                <Route path={`/${l.code}/video`} element={<GlobalTakeHomeCalculator lang={l.code} />} />
                
                <Route path={`/${l.code}/privacy`} element={<PrivacyPolicy lang={l.code} />} />
                <Route path={`/${l.code}/terms`} element={<TermsOfService lang={l.code} />} />
                <Route path={`/${l.code}/about`} element={<AboutUs lang={l.code} />} />
                <Route path={`/${l.code}/contact`} element={<Contact lang={l.code} />} />
              </React.Fragment>
            ))}

            {/* Programmatic SEO Routes */}
            <Route path="/calculator/:slug" element={<DynamicToolPage type="tax" lang={lang} />} />
            <Route path="/tools/:slug" element={<DynamicToolPage type="llm" lang={lang} />} />
            
            {supportedLanguages.map(l => (
              <React.Fragment key={l.code}>
                <Route path={`/${l.code}/calculator/:slug`} element={<DynamicToolPage type="tax" lang={l.code} />} />
                <Route path={`/${l.code}/tools/:slug`} element={<DynamicToolPage type="llm" lang={l.code} />} />
              </React.Fragment>
            ))}

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </React.Suspense>
      </div>

      {activeTab !== 'admin' && !isLegalPage && !isPseoPage && (
        <ToolSeoArticle activeTool={activeTab} lang={lang} />
      )}

      {activeTab !== 'admin' && (
        <div className="space-y-8 mt-12">
          <AdSenseSlot slotId="content-bottom" />
          <ProgrammaticSeoGrid lang={lang} />
        </div>
      )}
    </>
  );
}

export default function App() {
  const location = useLocation();

  // Detect URL lang prefix synchronously during render phase
  const pathSegments = location.pathname.split('/').filter(Boolean);
  const urlLang = supportedLanguages.find(l => l.code === pathSegments[0]);

  // Deterministic URL-based language prevents SSR hydration mismatch and mixed-language indexing
  const [lang, setLang] = useState(urlLang ? urlLang.code : 'en');

  useEffect(() => {
    initializeAnalytics();

    const targetLang = urlLang ? urlLang.code : 'en';
    if (lang !== targetLang) {
      setLang(targetLang);
    }

    import('./utils/analyticsTracker').then(({ trackPageView }) => {
       trackPageView(location.pathname);
    }).catch(err => {
       console.warn('[Analytics] Failed to track page view dynamically', err);
    });
  }, [location.pathname, urlLang]);

  const t = (path) => getTranslation(lang, path);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-brand-500 selection:text-white">
      <Header currentLang={lang} onLanguageChange={setLang} />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ContentWrapper lang={lang} t={t} />
      </main>

      <Footer lang={lang} />
      <CookieConsent lang={lang} />
    </div>
  );
}
