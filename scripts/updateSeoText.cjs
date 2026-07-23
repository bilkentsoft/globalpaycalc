const fs = require('fs');
const path = require('path');
const localesDir = path.join(process.cwd(), 'src/i18n/locales');
const files = fs.readdirSync(localesDir);

const translations = {
  "en.json": {
    seoTitle: "How It Works & Core Features",
    seoText: "GlobalPayCalc is a comprehensive suite built for digital nomads and developers. Our platform features an <strong class='font-semibold text-slate-300'>HD social video downloader</strong> that safely extracts MP4/MP3 media from TikTok, Instagram Reels, and YouTube Shorts without watermarks. For remote workers, our <strong class='font-semibold text-slate-300'>global salary calculator</strong> compares net income, tax brackets, and cost of living (PPP) across 150+ countries. Developers can leverage our <strong class='font-semibold text-slate-300'>AI token cost simulator</strong> to estimate API expenses for GPT-4o and Claude 3.5, while our <strong class='font-semibold text-slate-300'>client-side AI image studio</strong> removes backgrounds locally via WebAssembly, guaranteeing zero server uploads and complete data privacy."
  },
  "tr.json": {
    seoTitle: "Nasıl Çalışır ve Temel Özellikler",
    seoText: "GlobalPayCalc, dijital göçebeler ve geliştiriciler için oluşturulmuş kapsamlı bir araç paketidir. Platformumuz, TikTok, Instagram Reels ve YouTube Shorts platformlarından <strong class='font-semibold text-slate-300'>filigransız HD sosyal medya videolarını</strong> ve MP3 ses dosyalarını güvenle indirmenizi sağlar. Uzaktan çalışanlar (remote worker) için, 150'den fazla ülkede net geliri, vergi dilimlerini ve satın alma gücü paritesini (PPP) karşılaştıran bir <strong class='font-semibold text-slate-300'>küresel maaş hesaplayıcı</strong> sunuyoruz. Geliştiriciler, GPT-4o ve Claude 3.5 için API masraflarını tahmin etmek amacıyla <strong class='font-semibold text-slate-300'>yapay zeka token maliyeti simülatörümüzü</strong> kullanabilirler. Ayrıca <strong class='font-semibold text-slate-300'>istemci tabanlı AI görüntü stüdyomuz</strong>, sunucu yüklemesi olmadan WebAssembly üzerinden fotoğrafların arka planını yerel olarak silerek tam veri gizliliği sağlar."
  },
  "es.json": {
    seoTitle: "Cómo Funciona y Características Principales",
    seoText: "GlobalPayCalc es un conjunto completo creado para nómadas digitales y desarrolladores. Nuestra plataforma cuenta con un <strong class='font-semibold text-slate-300'>descargador de videos sociales HD</strong> que extrae de forma segura medios MP4/MP3 de TikTok, Instagram Reels y YouTube Shorts sin marcas de agua. Para los trabajadores remotos, nuestra <strong class='font-semibold text-slate-300'>calculadora de salario global</strong> compara ingresos netos, tramos impositivos y el costo de vida (PPA) en más de 150 países. Los desarrolladores pueden aprovechar nuestro <strong class='font-semibold text-slate-300'>simulador de costos de tokens de IA</strong> para estimar los gastos de API para GPT-4o y Claude 3.5, mientras que nuestro <strong class='font-semibold text-slate-300'>estudio de imágenes de IA del lado del cliente</strong> elimina fondos localmente a través de WebAssembly, garantizando cero cargas al servidor y privacidad total de los datos."
  },
  "de.json": {
    seoTitle: "Wie es funktioniert & Kernfunktionen",
    seoText: "GlobalPayCalc ist eine umfassende Suite für digitale Nomaden und Entwickler. Unsere Plattform bietet einen <strong class='font-semibold text-slate-300'>HD-Social-Video-Downloader</strong>, der MP4/MP3-Medien aus TikTok, Instagram Reels und YouTube Shorts ohne Wasserzeichen sicher extrahiert. Für Remote-Mitarbeiter vergleicht unser <strong class='font-semibold text-slate-300'>globaler Gehaltsrechner</strong> das Nettoeinkommen, Steuerklassen und die Lebenshaltungskosten (KKP) in über 150 Ländern. Entwickler können unseren <strong class='font-semibold text-slate-300'>KI-Token-Kosten-Simulator</strong> nutzen, um API-Ausgaben für GPT-4o und Claude 3.5 abzuschätzen, während unser <strong class='font-semibold text-slate-300'>clientseitiges KI-Bildstudio</strong> Hintergründe lokal über WebAssembly entfernt, was keine Server-Uploads garantiert und vollständige Datenprivatsphäre gewährleistet."
  },
  "pt.json": {
    seoTitle: "Como Funciona e Principais Recursos",
    seoText: "GlobalPayCalc é um conjunto abrangente criado para nômades digitais e desenvolvedores. Nossa plataforma possui um <strong class='font-semibold text-slate-300'>baixador de vídeos sociais em HD</strong> que extrai com segurança mídia MP4/MP3 do TikTok, Instagram Reels e YouTube Shorts sem marcas d'água. Para trabalhadores remotos, nossa <strong class='font-semibold text-slate-300'>calculadora de salário global</strong> compara a renda líquida, as faixas de impostos e o custo de vida (PPC) em mais de 150 países. Os desenvolvedores podem aproveitar nosso <strong class='font-semibold text-slate-300'>simulador de custo de token de IA</strong> para estimar as despesas de API para GPT-4o e Claude 3.5, enquanto nosso <strong class='font-semibold text-slate-300'>estúdio de imagem de IA no cliente</strong> remove fundos localmente via WebAssembly, garantindo zero uploads de servidor e total privacidade de dados."
  },
  "fr.json": {
    seoTitle: "Comment ça marche & Fonctionnalités clés",
    seoText: "GlobalPayCalc est une suite complète conçue pour les nomades numériques et les développeurs. Notre plateforme propose un <strong class='font-semibold text-slate-300'>téléchargeur de vidéos sociales HD</strong> qui extrait en toute sécurité les médias MP4/MP3 de TikTok, Instagram Reels et YouTube Shorts sans filigrane. Pour les travailleurs à distance, notre <strong class='font-semibold text-slate-300'>calculateur de salaire mondial</strong> compare le revenu net, les tranches d'imposition et le coût de la vie (PPA) dans plus de 150 pays. Les développeurs peuvent tirer parti de notre <strong class='font-semibold text-slate-300'>simulateur de coût des jetons IA</strong> pour estimer les dépenses API pour GPT-4o et Claude 3.5, tandis que notre <strong class='font-semibold text-slate-300'>studio d'images IA côté client</strong> supprime les arrière-plans localement via WebAssembly, garantissant zéro téléchargement sur le serveur et une confidentialité totale des données."
  },
  "id.json": {
    seoTitle: "Cara Kerja & Fitur Utama",
    seoText: "GlobalPayCalc adalah paket komprehensif yang dibangun untuk nomaden digital dan pengembang. Platform kami dilengkapi <strong class='font-semibold text-slate-300'>pengunduh video sosial HD</strong> yang dengan aman mengekstrak media MP4/MP3 dari TikTok, Instagram Reels, dan YouTube Shorts tanpa tanda air. Untuk pekerja jarak jauh, <strong class='font-semibold text-slate-300'>kalkulator gaji global</strong> kami membandingkan pendapatan bersih, golongan pajak, dan biaya hidup (PPP) di 150+ negara. Pengembang dapat memanfaatkan <strong class='font-semibold text-slate-300'>simulator biaya token AI</strong> kami untuk memperkirakan pengeluaran API untuk GPT-4o dan Claude 3.5, sementara <strong class='font-semibold text-slate-300'>studio gambar AI sisi klien</strong> kami menghapus latar belakang secara lokal melalui WebAssembly, menjamin tidak ada unggahan server dan privasi data lengkap."
  },
  "ja.json": {
    seoTitle: "機能と仕組み",
    seoText: "GlobalPayCalcは、デジタルノマドと開発者向けに構築された包括的なスイートです。当社のプラットフォームは、TikTok、Instagramリール、YouTubeショートから透かしなしでMP4/MP3メディアを安全に抽出する<strong class='font-semibold text-slate-300'>HDソーシャルビデオダウンローダー</strong>を備えています。リモートワーカー向けに、<strong class='font-semibold text-slate-300'>グローバル給与計算機</strong>は150カ国以上の純所得、税制区分、および生活費（PPP）を比較します。開発者は<strong class='font-semibold text-slate-300'>AIトークンコストシミュレーター</strong>を活用して、GPT-4oおよびClaude 3.5のAPI経費を予測できます。一方、当社の<strong class='font-semibold text-slate-300'>クライアントサイドAI画像スタジオ</strong>はWebAssemblyを介してローカルで背景を削除し、サーバーへのアップロードゼロと完全なデータプライバシーを保証します。"
  }
};

files.forEach(file => {
  if (translations[file]) {
    const filePath = path.join(localesDir, file);
    let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    if (data.hero) {
      data.hero.seoTitle = translations[file].seoTitle;
      data.hero.seoText = translations[file].seoText;
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
      console.log('Updated ' + file);
    }
  }
});
