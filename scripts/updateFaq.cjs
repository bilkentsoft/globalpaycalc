const fs = require('fs');
const path = require('path');
const localesDir = path.join(process.cwd(), 'src/i18n/locales');
const files = fs.readdirSync(localesDir);

const translations = {
  "en.json": {
    "title": "Frequently Asked Questions",
    "q1": "How does the social video downloader work?",
    "a1": "Our free universal video downloader lets you securely download HD videos from social media platforms like TikTok, Instagram Reels, and YouTube Shorts. It operates directly in your browser as a client-side utility, meaning we process everything without storing your media on our servers. You can easily download MP4 videos or extract MP3 audio files completely without watermarks, ensuring 100% privacy and unlimited usage for all your media needs.",
    "q2": "Can I calculate my remote salary and tax parity accurately?",
    "a2": "Yes! GlobalPayCalc provides a highly accurate global salary calculator designed specifically for digital nomads and remote workers. Our utility engine compares your net salary across over 150 countries, taking into account local tax brackets, living cost variations, and purchasing power parity (PPP). This ensures you can evaluate sponsor offers and securely calculate how much you will actually earn after taxes, regardless of your global location.",
    "q3": "Is the AI token cost simulator free for developers?",
    "a3": "Absolutely. Developers can use our advanced AI API token cost simulator to accurately predict the financial cost of running large language models (LLMs) such as GPT-4o, Claude 3.5, and LLaMA 3. Whether you are building an autonomous agent, processing large data extractions, or running a customer support pipeline, our simulator provides instant, free estimates to help you optimize your API expenses securely."
  },
  "tr.json": {
    "title": "Sıkça Sorulan Sorular",
    "q1": "Sosyal medya video indirici nasıl çalışır?",
    "a1": "Ücretsiz evrensel video indiricimiz, TikTok, Instagram Reels ve YouTube Shorts gibi platformlardan güvenli bir şekilde HD videolar indirmenizi sağlar. Doğrudan tarayıcınızda istemci tarafı bir araç olarak çalışır, yani medyanızı sunucularımızda saklamadan her şeyi işleriz. Filigran olmadan kolayca MP4 videoları indirebilir veya MP3 ses dosyalarını çıkarabilirsiniz; böylece tüm medya ihtiyaçlarınız için %100 gizlilik ve sınırsız kullanım sağlanır.",
    "q2": "Uzaktan çalışma maaşımı ve vergi durumumu doğru bir şekilde hesaplayabilir miyim?",
    "a2": "Evet! GlobalPayCalc, özellikle dijital göçebeler ve uzaktan çalışanlar için tasarlanmış son derece hassas bir küresel maaş hesaplayıcı sunar. Yardımcı motorumuz, yerel vergi dilimlerini, yaşam maliyeti değişikliklerini ve satın alma gücü paritesini (PPP) dikkate alarak 150'den fazla ülkede net maaşınızı karşılaştırır. Bu, küresel konumunuz ne olursa olsun sponsor tekliflerini değerlendirebilmenizi ve vergilerden sonra gerçekte ne kadar kazanacağınızı güvenli bir şekilde hesaplayabilmenizi sağlar.",
    "q3": "Yapay zeka token maliyet simülatörü geliştiriciler için ücretsiz mi?",
    "a3": "Kesinlikle. Geliştiriciler, GPT-4o, Claude 3.5 ve LLaMA 3 gibi büyük dil modellerini (LLM'ler) çalıştırmanın finansal maliyetini doğru bir şekilde tahmin etmek için gelişmiş AI API token maliyet simülatörümüzü kullanabilirler. İster otonom bir aracı (agent) inşa ediyor olun, ister büyük veri çıkarımları işliyor olun, isterse de bir müşteri destek hattı çalıştırıyor olun, simülatörümüz API giderlerinizi güvenli bir şekilde optimize etmenize yardımcı olmak için anında ve ücretsiz tahminler sunar."
  },
  "es.json": {
    "title": "Preguntas Frecuentes",
    "q1": "¿Cómo funciona el descargador de videos sociales?",
    "a1": "Nuestro descargador de videos universal gratuito te permite descargar videos HD de plataformas de redes sociales como TikTok, Instagram Reels y YouTube Shorts de forma segura. Funciona directamente en tu navegador como una utilidad del lado del cliente, lo que significa que procesamos todo sin almacenar tus medios en nuestros servidores. Puedes descargar videos MP4 o extraer archivos de audio MP3 fácilmente y sin marcas de agua, garantizando un 100% de privacidad y uso ilimitado para todas tus necesidades de medios.",
    "q2": "¿Puedo calcular mi salario remoto y la paridad fiscal con precisión?",
    "a2": "¡Sí! GlobalPayCalc ofrece una calculadora de salario global altamente precisa, diseñada específicamente para nómadas digitales y trabajadores remotos. Nuestro motor de utilidad compara tu salario neto en más de 150 países, teniendo en cuenta los tramos impositivos locales, las variaciones del costo de vida y la paridad del poder adquisitivo (PPA). Esto asegura que puedas evaluar las ofertas de patrocinadores y calcular de manera segura cuánto ganarás realmente después de impuestos, independientemente de tu ubicación global.",
    "q3": "¿El simulador de costo de tokens de IA es gratuito para los desarrolladores?",
    "a3": "Absolutamente. Los desarrolladores pueden utilizar nuestro avanzado simulador de costo de tokens API de IA para predecir con precisión el costo financiero de ejecutar modelos de lenguaje grande (LLM) como GPT-4o, Claude 3.5 y LLaMA 3. Ya sea que estés construyendo un agente autónomo, procesando grandes extracciones de datos o ejecutando un canal de soporte al cliente, nuestro simulador proporciona estimaciones instantáneas y gratuitas para ayudarte a optimizar tus gastos de API de forma segura."
  },
  "de.json": {
    "title": "Häufig gestellte Fragen",
    "q1": "Wie funktioniert der Social-Video-Downloader?",
    "a1": "Unser kostenloser universeller Video-Downloader ermöglicht es Ihnen, HD-Videos von Social-Media-Plattformen wie TikTok, Instagram Reels und YouTube Shorts sicher herunterzuladen. Er arbeitet direkt in Ihrem Browser als clientseitiges Dienstprogramm, d.h. wir verarbeiten alles, ohne Ihre Medien auf unseren Servern zu speichern. Sie können MP4-Videos herunterladen oder MP3-Audiodateien extrahieren, ganz ohne Wasserzeichen, und so 100% Privatsphäre und unbegrenzte Nutzung für all Ihre Medienanforderungen gewährleisten.",
    "q2": "Kann ich mein Remote-Gehalt und die Steuerparität genau berechnen?",
    "a2": "Ja! GlobalPayCalc bietet einen hochpräzisen globalen Gehaltsrechner, der speziell für digitale Nomaden und Remote-Mitarbeiter entwickelt wurde. Unsere Utility-Engine vergleicht Ihr Nettogehalt in über 150 Ländern unter Berücksichtigung lokaler Steuerklassen, Lebenshaltungskostenunterschiede und der Kaufkraftparität (KKP). Dies stellt sicher, dass Sie Sponsorenangebote bewerten und sicher berechnen können, wie viel Sie nach Steuern tatsächlich verdienen, unabhängig von Ihrem globalen Standort.",
    "q3": "Ist der KI-Token-Kosten-Simulator für Entwickler kostenlos?",
    "a3": "Absolut. Entwickler können unseren fortschrittlichen KI-API-Token-Kosten-Simulator verwenden, um die finanziellen Kosten für den Betrieb großer Sprachmodelle (LLMs) wie GPT-4o, Claude 3.5 und LLaMA 3 genau vorherzusagen. Egal, ob Sie einen autonomen Agenten erstellen, große Datenextraktionen verarbeiten oder eine Kundensupport-Pipeline betreiben, unser Simulator bietet sofortige, kostenlose Schätzungen, die Ihnen helfen, Ihre API-Ausgaben sicher zu optimieren."
  },
  "pt.json": {
    "title": "Perguntas Frequentes",
    "q1": "Como funciona o baixador de vídeos sociais?",
    "a1": "Nosso baixador de vídeo universal gratuito permite que você baixe com segurança vídeos HD de plataformas de mídia social como TikTok, Instagram Reels e YouTube Shorts. Ele opera diretamente no seu navegador como um utilitário do lado do cliente, ou seja, processamos tudo sem armazenar sua mídia em nossos servidores. Você pode facilmente baixar vídeos MP4 ou extrair arquivos de áudio MP3 totalmente sem marcas d'água, garantindo 100% de privacidade e uso ilimitado para todas as suas necessidades de mídia.",
    "q2": "Posso calcular meu salário remoto e paridade fiscal com precisão?",
    "a2": "Sim! A GlobalPayCalc fornece uma calculadora de salário global altamente precisa, projetada especificamente para nômades digitais e trabalhadores remotos. Nosso mecanismo utilitário compara seu salário líquido em mais de 150 países, levando em consideração as faixas de impostos locais, variações de custo de vida e paridade de poder de compra (PPC). Isso garante que você possa avaliar as ofertas dos patrocinadores e calcular com segurança quanto realmente ganhará após os impostos, independentemente da sua localização global.",
    "q3": "O simulador de custo de token de IA é gratuito para desenvolvedores?",
    "a3": "Absolutamente. Os desenvolvedores podem usar nosso avançado simulador de custo de token de API de IA para prever com precisão o custo financeiro de executar modelos de linguagem grande (LLMs), como GPT-4o, Claude 3.5 e LLaMA 3. Esteja você construindo um agente autônomo, processando grandes extrações de dados ou executando um pipeline de suporte ao cliente, nosso simulador fornece estimativas instantâneas e gratuitas para ajudá-lo a otimizar as despesas de sua API com segurança."
  },
  "fr.json": {
    "title": "Foire Aux Questions",
    "q1": "Comment fonctionne le téléchargeur de vidéos sociales ?",
    "a1": "Notre téléchargeur de vidéos universel gratuit vous permet de télécharger en toute sécurité des vidéos HD à partir de plateformes de médias sociaux telles que TikTok, Instagram Reels et YouTube Shorts. Il fonctionne directement dans votre navigateur en tant qu'utilitaire côté client, ce qui signifie que nous traitons tout sans stocker vos médias sur nos serveurs. Vous pouvez facilement télécharger des vidéos MP4 ou extraire des fichiers audio MP3 sans filigrane, garantissant ainsi une confidentialité à 100 % et une utilisation illimitée pour tous vos besoins en médias.",
    "q2": "Puis-je calculer mon salaire à distance et la parité fiscale avec précision ?",
    "a2": "Oui ! GlobalPayCalc fournit un calculateur de salaire mondial très précis, conçu spécifiquement pour les nomades numériques et les travailleurs à distance. Notre moteur utilitaire compare votre salaire net dans plus de 150 pays, en tenant compte des tranches d'imposition locales, des variations du coût de la vie et de la parité de pouvoir d'achat (PPA). Cela garantit que vous pouvez évaluer les offres des sponsors et calculer en toute sécurité ce que vous gagnerez réellement après impôts, quelle que soit votre situation géographique mondiale.",
    "q3": "Le simulateur de coût des jetons IA est-il gratuit pour les développeurs ?",
    "a3": "Absolument. Les développeurs peuvent utiliser notre simulateur de coût des jetons de l'API IA avancé pour prévoir avec précision le coût financier de l'exécution de grands modèles linguistiques (LLM) tels que GPT-4o, Claude 3.5 et LLaMA 3. Que vous construisiez un agent autonome, traitiez des extractions de données volumineuses ou gériez un pipeline de support client, notre simulateur fournit des estimations instantanées et gratuites pour vous aider à optimiser vos dépenses d'API en toute sécurité."
  },
  "id.json": {
    "title": "Pertanyaan yang Sering Diajukan",
    "q1": "Bagaimana cara kerja pengunduh video sosial?",
    "a1": "Pengunduh video universal gratis kami memungkinkan Anda mengunduh video HD dengan aman dari platform media sosial seperti TikTok, Instagram Reels, dan YouTube Shorts. Alat ini beroperasi langsung di browser Anda sebagai utilitas sisi klien, yang berarti kami memproses semuanya tanpa menyimpan media Anda di server kami. Anda dapat dengan mudah mengunduh video MP4 atau mengekstrak file audio MP3 sepenuhnya tanpa tanda air, memastikan privasi 100% dan penggunaan tak terbatas untuk semua kebutuhan media Anda.",
    "q2": "Dapatkah saya menghitung gaji jarak jauh dan paritas pajak saya secara akurat?",
    "a2": "Ya! GlobalPayCalc menyediakan kalkulator gaji global yang sangat akurat yang dirancang khusus untuk nomaden digital dan pekerja jarak jauh. Mesin utilitas kami membandingkan gaji bersih Anda di lebih dari 150 negara, dengan mempertimbangkan golongan pajak lokal, variasi biaya hidup, dan paritas daya beli (PPP). Ini memastikan bahwa Anda dapat mengevaluasi penawaran sponsor dan dengan aman menghitung berapa banyak yang benar-benar akan Anda peroleh setelah pajak, terlepas dari lokasi global Anda.",
    "q3": "Apakah simulator biaya token AI gratis untuk pengembang?",
    "a3": "Tentu saja. Pengembang dapat menggunakan simulator biaya token API AI kami yang canggih untuk memprediksi secara akurat biaya keuangan dari menjalankan model bahasa besar (LLM) seperti GPT-4o, Claude 3.5, dan LLaMA 3. Apakah Anda sedang membangun agen otonom, memproses ekstraksi data yang besar, atau menjalankan pipa dukungan pelanggan, simulator kami memberikan perkiraan instan dan gratis untuk membantu Anda mengoptimalkan biaya API Anda secara aman."
  },
  "ja.json": {
    "title": "よくある質問",
    "q1": "ソーシャルビデオダウンローダーはどのように機能しますか？",
    "a1": "当社の無料のユニバーサルビデオダウンローダーを使用すると、TikTok、Instagram Reels、YouTube ShortsなどのソーシャルメディアプラットフォームからHDビデオを安全にダウンロードできます。これはクライアントサイドのユーティリティとしてブラウザで直接動作します。つまり、サーバーにメディアを保存することなくすべてを処理します。透かしなしでMP4ビデオを簡単にダウンロードしたり、MP3オーディオファイルを抽出したりできるため、100%のプライバシーとすべてのメディアニーズに対する無制限の使用が保証されます。",
    "q2": "リモート給与と税のパリティを正確に計算できますか？",
    "a2": "はい！GlobalPayCalcは、デジタルノマドとリモートワーカー向けに特別に設計された、高精度のグローバル給与計算機を提供しています。当社のユーティリティエンジンは、現地の税制区分、生活費の変動、および購買力平価（PPP）を考慮して、150か国以上の純給与を比較します。これにより、スポンサーのオファーを評価し、世界中のどこにいても税引き後に実際にいくら稼ぐかを安全に計算できます。",
    "q3": "開発者向けのAIトークンコストシミュレーターは無料ですか？",
    "a3": "もちろんです。開発者は、当社の高度なAI APIトークンコストシミュレーターを使用して、GPT-4o、Claude 3.5、LLaMA 3などの大規模言語モデル（LLM）を実行する財務コストを正確に予測できます。自律型エージェントの構築、大規模なデータ抽出の処理、カスタマーサポートパイプラインの実行など、シミュレーターはAPIの経費を安全に最適化するのに役立つ無料の即時見積もりを提供します。"
  }
};

files.forEach(file => {
  if (translations[file]) {
    const filePath = path.join(localesDir, file);
    let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    data.faq = translations[file];
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    console.log('Updated ' + file);
  }
});
