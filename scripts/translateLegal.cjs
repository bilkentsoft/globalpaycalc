const fs = require('fs');
const path = require('path');

const legalTranslations = {
  en: {
    legal: {
      lastUpdated: "Last updated",
      privacy: {
        title: "Privacy Policy",
        desc: "Privacy Policy and GDPR compliance for GlobalPayCalc.",
        h1: "1. Information We Collect",
        p1: "GlobalPayCalc (\"we,\" \"our,\" or \"us\") is committed to protecting your privacy. We collect minimal information necessary to provide our services. We use Google Analytics to monitor website traffic and Google AdSense to display advertisements.",
        h2: "2. How We Use Cookies",
        p2: "We use cookies to personalize content and ads, to provide social media features, and to analyze our traffic. You can choose to accept or decline cookies using our consent banner.",
        h3: "3. Third-Party Services",
        p3: "We use third-party services like Google Analytics and Google AdSense. These services may use cookies and web beacons to collect data about your visits to this and other websites in order to provide relevant advertisements. You can opt out of personalized advertising by visiting Google Ads Settings.",
        h4: "4. Data Security",
        p4: "All calculations (salary, tax, video processing) are performed locally in your browser. We do not store or transmit your sensitive financial inputs to our servers."
      },
      terms: {
        title: "Terms of Service",
        desc: "Terms of Service for GlobalPayCalc.",
        h1: "1. Acceptance of Terms",
        p1: "By accessing and using GlobalPayCalc.com, you accept and agree to be bound by the terms and provision of this agreement.",
        h2: "2. Use of Service",
        p2: "The calculators and tools provided on this website are for informational purposes only. We do not guarantee the accuracy of tax or financial calculations. You should consult with a certified financial advisor before making any financial decisions.",
        h3: "3. Intellectual Property",
        p3: "The content, features, and functionality of this website are owned by GlobalPayCalc and are protected by international copyright, trademark, and other intellectual property laws."
      },
      about: {
        title: "About Us",
        desc: "Learn more about GlobalPayCalc and our mission.",
        intro: "GlobalPayCalc is a comprehensive suite of digital tools designed for remote workers, digital nomads, and software developers.",
        h1: "Our Mission",
        p1: "Our mission is to democratize financial and technical data by providing instant, client-side, and highly accurate tools. From calculating digital nomad tax parity across different global cities to estimating the API costs of next-generation AI models, our platform is built for speed and precision.",
        h2: "Why We Built This",
        p2: "The world is shifting towards remote work and AI integration. Professionals need quick answers to complex questions like \"How much tax will I pay if I move to Tokyo?\" or \"How much will it cost to run 1 million tokens through Claude 3 Opus?\". GlobalPayCalc answers these questions instantly, without requiring users to sign up or send their private data to external servers."
      },
      contact: {
        title: "Contact Us",
        desc: "Contact GlobalPayCalc support.",
        intro: "Have questions, suggestions, or business inquiries? We'd love to hear from you.",
        response: "We typically respond within 24-48 business hours."
      }
    }
  },
  tr: {
    legal: {
      lastUpdated: "Son güncelleme",
      privacy: {
        title: "Gizlilik Politikası",
        desc: "GlobalPayCalc Gizlilik Politikası ve GDPR uyumluluğu.",
        h1: "1. Topladığımız Bilgiler",
        p1: "GlobalPayCalc gizliliğinizi korumaya kararlıdır. Sadece hizmetlerimizi sunmak için gerekli asgari bilgileri toplarız. Web sitesi trafiğini izlemek için Google Analytics'i ve reklam göstermek için Google AdSense'i kullanıyoruz.",
        h2: "2. Çerezleri Nasıl Kullanıyoruz",
        p2: "Çerezleri, içerik ve reklamları kişiselleştirmek, sosyal medya özellikleri sağlamak ve trafiğimizi analiz etmek için kullanırız. Çerez onay afişimizi kullanarak çerezleri kabul etmeyi veya reddetmeyi seçebilirsiniz.",
        h3: "3. Üçüncü Taraf Hizmetleri",
        p3: "Google Analytics ve Google AdSense gibi üçüncü taraf hizmetleri kullanıyoruz. Bu hizmetler, size alakalı reklamlar sunmak için çerezleri ve web işaretçilerini kullanabilir. Google Reklam Ayarları'nı ziyaret ederek kişiselleştirilmiş reklamlardan çıkabilirsiniz.",
        h4: "4. Veri Güvenliği",
        p4: "Tüm hesaplamalar (maaş, vergi, video işleme) tarayıcınızda yerel olarak yapılır. Hassas finansal girişlerinizi sunucularımızda saklamaz veya sunucularımıza iletmeyiz."
      },
      terms: {
        title: "Kullanım Koşulları",
        desc: "GlobalPayCalc Kullanım Koşulları.",
        h1: "1. Koşulların Kabulü",
        p1: "GlobalPayCalc.com'a erişerek ve kullanarak, bu sözleşmenin şartlarını ve hükümlerini kabul etmiş olursunuz.",
        h2: "2. Hizmet Kullanımı",
        p2: "Bu web sitesinde sunulan hesaplayıcılar ve araçlar yalnızca bilgi amaçlıdır. Vergi veya finansal hesaplamaların doğruluğunu garanti etmiyoruz. Finansal kararlar almadan önce sertifikalı bir mali danışmana başvurmalısınız.",
        h3: "3. Fikri Mülkiyet",
        p3: "Bu web sitesinin içeriği, özellikleri ve işlevselliği GlobalPayCalc'a aittir ve uluslararası telif hakkı ve ticari marka yasaları ile korunmaktadır."
      },
      about: {
        title: "Hakkımızda",
        desc: "GlobalPayCalc ve misyonumuz hakkında daha fazla bilgi edinin.",
        intro: "GlobalPayCalc, uzaktan çalışanlar, dijital göçebeler ve yazılım geliştiriciler için tasarlanmış kapsamlı bir dijital araçlar paketidir.",
        h1: "Misyonumuz",
        p1: "Misyonumuz, anında çalışan ve son derece doğru araçlar sunarak finansal ve teknik verileri demokratikleştirmektir. Dijital göçebe vergi eşitliğini hesaplamaktan yeni nesil yapay zeka modellerinin API maliyetlerini tahmin etmeye kadar, platformumuz hız ve hassasiyet için oluşturulmuştur.",
        h2: "Bunu Neden Yaptık?",
        p2: "Dünya uzaktan çalışmaya ve yapay zeka entegrasyonuna doğru kayıyor. Profesyonellerin 'Tokyo'ya taşınırsam ne kadar vergi öderim?' veya '1 milyon tokeni yapay zekaya işletmek ne kadara mal olur?' gibi karmaşık sorulara hızlı yanıtlar bulması gerekiyor. GlobalPayCalc, kullanıcılardan kayıt olmalarını veya özel verilerini harici sunuculara göndermelerini istemeden bu soruları anında yanıtlar."
      },
      contact: {
        title: "İletişim",
        desc: "GlobalPayCalc destek ekibiyle iletişime geçin.",
        intro: "Sorularınız, önerileriniz veya iş talepleriniz mi var? Sizden haber almaktan memnuniyet duyarız.",
        response: "Genellikle 24-48 iş saati içinde yanıt veririz."
      }
    }
  },
  es: {
    legal: {
      lastUpdated: "Última actualización",
      privacy: {
        title: "Política de Privacidad",
        desc: "Política de privacidad y cumplimiento del GDPR.",
        h1: "1. Información que Recopilamos",
        p1: "Recopilamos la información mínima necesaria. Utilizamos Google Analytics para el tráfico y Google AdSense para anuncios.",
        h2: "2. Cómo Usamos las Cookies",
        p2: "Utilizamos cookies para personalizar contenido, anuncios y analizar nuestro tráfico.",
        h3: "3. Servicios de Terceros",
        p3: "Servicios como Google Analytics y AdSense pueden usar cookies. Puede darse de baja visitando la Configuración de Anuncios de Google.",
        h4: "4. Seguridad de Datos",
        p4: "Todos los cálculos se realizan localmente en su navegador. No almacenamos sus datos financieros."
      },
      terms: {
        title: "Términos de Servicio",
        desc: "Términos de servicio de GlobalPayCalc.",
        h1: "1. Aceptación de los Términos",
        p1: "Al utilizar GlobalPayCalc.com, acepta regirse por estos términos.",
        h2: "2. Uso del Servicio",
        p2: "Las herramientas son solo para fines informativos. Consulte a un asesor financiero certificado antes de tomar decisiones.",
        h3: "3. Propiedad Intelectual",
        p3: "El contenido y la funcionalidad son propiedad de GlobalPayCalc y están protegidos por las leyes de propiedad intelectual."
      },
      about: {
        title: "Sobre Nosotros",
        desc: "Nuestra misión en GlobalPayCalc.",
        intro: "GlobalPayCalc es una suite de herramientas digitales para nómadas digitales y desarrolladores.",
        h1: "Nuestra Misión",
        p1: "Nuestra misión es democratizar los datos financieros y técnicos con herramientas instantáneas y precisas.",
        h2: "Por Qué Construimos Esto",
        p2: "El mundo cambia hacia el trabajo remoto. Los profesionales necesitan respuestas rápidas a cálculos complejos sin comprometer su privacidad."
      },
      contact: {
        title: "Contáctenos",
        desc: "Soporte de GlobalPayCalc.",
        intro: "¿Tiene preguntas o sugerencias? Nos encantaría escucharlo.",
        response: "Normalmente respondemos en 24-48 horas hábiles."
      }
    }
  },
  de: {
    legal: {
      lastUpdated: "Zuletzt aktualisiert",
      privacy: {
        title: "Datenschutzrichtlinie",
        desc: "Datenschutzrichtlinie und DSGVO-Konformität.",
        h1: "1. Informationen, die wir sammeln",
        p1: "Wir sammeln minimale Informationen. Wir verwenden Google Analytics und Google AdSense.",
        h2: "2. Wie wir Cookies verwenden",
        p2: "Wir verwenden Cookies, um Inhalte und Anzeigen zu personalisieren und unseren Traffic zu analysieren.",
        h3: "3. Dienste von Drittanbietern",
        p3: "Dienste wie Google Analytics und AdSense können Cookies verwenden. Sie können personalisierte Werbung deaktivieren.",
        h4: "4. Datensicherheit",
        p4: "Alle Berechnungen werden lokal im Browser durchgeführt. Wir speichern keine Finanzdaten."
      },
      terms: {
        title: "Nutzungsbedingungen",
        desc: "Nutzungsbedingungen von GlobalPayCalc.",
        h1: "1. Annahme der Bedingungen",
        p1: "Durch die Nutzung von GlobalPayCalc.com stimmen Sie diesen Bedingungen zu.",
        h2: "2. Nutzung des Dienstes",
        p2: "Die Tools dienen nur zu Informationszwecken. Wir garantieren nicht für die Richtigkeit von Steuerberechnungen.",
        h3: "3. Geistiges Eigentum",
        p3: "Die Inhalte sind Eigentum von GlobalPayCalc und urheberrechtlich geschützt."
      },
      about: {
        title: "Über uns",
        desc: "Erfahren Sie mehr über GlobalPayCalc.",
        intro: "GlobalPayCalc ist ein umfassendes digitales Werkzeug für Remote-Arbeiter.",
        h1: "Unsere Mission",
        p1: "Unsere Mission ist es, Finanzdaten durch schnelle und genaue Tools zu demokratisieren.",
        h2: "Warum wir das gebaut haben",
        p2: "Profis brauchen schnelle Antworten auf komplexe Fragen, ohne private Daten zu senden."
      },
      contact: {
        title: "Kontakt",
        desc: "Kontaktieren Sie den Support.",
        intro: "Haben Sie Fragen oder Anregungen?",
        response: "Wir antworten normalerweise innerhalb von 24-48 Stunden."
      }
    }
  },
  pt: {
    legal: {
      lastUpdated: "Última atualização",
      privacy: {
        title: "Política de Privacidade",
        desc: "Política de Privacidade e GDPR.",
        h1: "1. Informações que coletamos",
        p1: "Coletamos o mínimo de informações. Usamos o Google Analytics e o Google AdSense.",
        h2: "2. Como usamos cookies",
        p2: "Usamos cookies para personalizar conteúdo, anúncios e analisar o tráfego.",
        h3: "3. Serviços de terceiros",
        p3: "Serviços como Google Analytics podem usar cookies. Você pode desativar anúncios personalizados.",
        h4: "4. Segurança de dados",
        p4: "Os cálculos são feitos localmente. Não armazenamos dados financeiros."
      },
      terms: {
        title: "Termos de Serviço",
        desc: "Termos de Serviço do GlobalPayCalc.",
        h1: "1. Aceitação",
        p1: "Ao usar o GlobalPayCalc.com, você concorda com estes termos.",
        h2: "2. Uso do Serviço",
        p2: "As calculadoras são apenas para fins informativos. Consulte um consultor financeiro.",
        h3: "3. Propriedade Intelectual",
        p3: "O conteúdo é propriedade do GlobalPayCalc e é protegido por leis de direitos autorais."
      },
      about: {
        title: "Sobre Nós",
        desc: "Saiba mais sobre a nossa missão.",
        intro: "GlobalPayCalc é uma suíte de ferramentas para trabalhadores remotos.",
        h1: "Nossa Missão",
        p1: "Fornecer ferramentas precisas, instantâneas e seguras no lado do cliente.",
        h2: "Por que construímos isso",
        p2: "O mundo exige respostas rápidas a cálculos complexos sem comprometer a privacidade."
      },
      contact: {
        title: "Contate-Nos",
        desc: "Entre em contato com o suporte.",
        intro: "Tem dúvidas ou sugestões?",
        response: "Normalmente respondemos em 24-48 horas úteis."
      }
    }
  },
  fr: {
    legal: {
      lastUpdated: "Dernière mise à jour",
      privacy: {
        title: "Politique de confidentialité",
        desc: "Politique de confidentialité et RGPD.",
        h1: "1. Informations que nous collectons",
        p1: "Nous collectons un minimum d'informations. Nous utilisons Google Analytics et Google AdSense.",
        h2: "2. Comment nous utilisons les cookies",
        p2: "Nous utilisons des cookies pour personnaliser le contenu et analyser notre trafic.",
        h3: "3. Services tiers",
        p3: "Des services comme Google Analytics peuvent utiliser des cookies. Vous pouvez désactiver les annonces personnalisées.",
        h4: "4. Sécurité des données",
        p4: "Tous les calculs sont effectués localement. Nous ne stockons pas vos données financières."
      },
      terms: {
        title: "Conditions d'utilisation",
        desc: "Conditions d'utilisation de GlobalPayCalc.",
        h1: "1. Acceptation des conditions",
        p1: "En utilisant GlobalPayCalc.com, vous acceptez ces conditions.",
        h2: "2. Utilisation du service",
        p2: "Les outils sont fournis à titre informatif. Consultez un conseiller financier.",
        h3: "3. Propriété intellectuelle",
        p3: "Le contenu appartient à GlobalPayCalc et est protégé par le droit d'auteur."
      },
      about: {
        title: "À propos de nous",
        desc: "En savoir plus sur GlobalPayCalc.",
        intro: "GlobalPayCalc est une suite d'outils pour les travailleurs à distance.",
        h1: "Notre mission",
        p1: "Fournir des outils précis, instantanés et sécurisés.",
        h2: "Pourquoi nous avons construit cela",
        p2: "Le monde a besoin de réponses rapides à des questions complexes sans compromettre la confidentialité."
      },
      contact: {
        title: "Nous contacter",
        desc: "Contacter le support.",
        intro: "Vous avez des questions ou des suggestions ?",
        response: "Nous répondons généralement dans les 24-48 heures."
      }
    }
  },
  id: {
    legal: {
      lastUpdated: "Terakhir diperbarui",
      privacy: {
        title: "Kebijakan Privasi",
        desc: "Kebijakan privasi dan kepatuhan GDPR.",
        h1: "1. Informasi yang Kami Kumpulkan",
        p1: "Kami mengumpulkan informasi minimal. Kami menggunakan Google Analytics dan AdSense.",
        h2: "2. Penggunaan Cookie",
        p2: "Kami menggunakan cookie untuk mempersonalisasi konten dan menganalisis lalu lintas.",
        h3: "3. Layanan Pihak Ketiga",
        p3: "Layanan seperti Google Analytics dapat menggunakan cookie. Anda dapat memilih keluar dari iklan yang dipersonalisasi.",
        h4: "4. Keamanan Data",
        p4: "Semua perhitungan dilakukan secara lokal di browser Anda. Kami tidak menyimpan data keuangan Anda."
      },
      terms: {
        title: "Ketentuan Layanan",
        desc: "Ketentuan Layanan GlobalPayCalc.",
        h1: "1. Penerimaan Ketentuan",
        p1: "Dengan menggunakan GlobalPayCalc.com, Anda menyetujui ketentuan ini.",
        h2: "2. Penggunaan Layanan",
        p2: "Alat-alat hanya untuk tujuan informasi. Konsultasikan dengan penasihat keuangan.",
        h3: "3. Kekayaan Intelektual",
        p3: "Konten dimiliki oleh GlobalPayCalc dan dilindungi oleh hak cipta."
      },
      about: {
        title: "Tentang Kami",
        desc: "Pelajari lebih lanjut tentang misi kami.",
        intro: "GlobalPayCalc adalah alat digital untuk pekerja jarak jauh.",
        h1: "Misi Kami",
        p1: "Menyediakan alat yang akurat, instan, dan aman.",
        h2: "Mengapa Kami Membangun Ini",
        p2: "Dunia membutuhkan jawaban cepat atas perhitungan kompleks tanpa mengorbankan privasi."
      },
      contact: {
        title: "Hubungi Kami",
        desc: "Hubungi dukungan.",
        intro: "Punya pertanyaan atau saran?",
        response: "Kami biasanya merespons dalam 24-48 jam kerja."
      }
    }
  },
  ja: {
    legal: {
      lastUpdated: "最終更新日",
      privacy: {
        title: "プライバシーポリシー",
        desc: "プライバシーポリシーとGDPRコンプライアンス。",
        h1: "1. 収集する情報",
        p1: "最小限の情報を収集します。Google AnalyticsおよびAdSenseを使用しています。",
        h2: "2. Cookieの使用",
        p2: "コンテンツのパーソナライズとトラフィックの分析にCookieを使用します。",
        h3: "3. サードパーティサービス",
        p3: "Google AnalyticsなどのサービスがCookieを使用する場合があります。",
        h4: "4. データセキュリティ",
        p4: "すべての計算はブラウザ内でローカルに行われます。財務データを保存することはありません。"
      },
      terms: {
        title: "利用規約",
        desc: "GlobalPayCalcの利用規約。",
        h1: "1. 規約の同意",
        p1: "GlobalPayCalc.comを使用することで、これらの規約に同意したことになります。",
        h2: "2. サービスの利用",
        p2: "ツールは情報提供のみを目的としています。財務上の決定を下す前にファイナンシャルアドバイザーにご相談ください。",
        h3: "3. 知的財産",
        p3: "コンテンツはGlobalPayCalcが所有しており、著作権法によって保護されています。"
      },
      about: {
        title: "私たちについて",
        desc: "GlobalPayCalcのミッション。",
        intro: "GlobalPayCalcは、リモートワーカー向けのデジタルツールスイートです。",
        h1: "私たちのミッション",
        p1: "正確で安全なツールを提供し、データを民主化することです。",
        h2: "構築した理由",
        p2: "プライバシーを損なうことなく、複雑な計算に対する迅速な回答が必要とされています。"
      },
      contact: {
        title: "お問い合わせ",
        desc: "サポートに連絡する。",
        intro: "ご質問やご提案がありますか？",
        response: "通常24〜48営業時間以内に返信します。"
      }
    }
  }
};

const localesDir = path.join(__dirname, '../src/i18n/locales');
for (const [lang, data] of Object.entries(legalTranslations)) {
  const filePath = path.join(localesDir, `${lang}.json`);
  if (fs.existsSync(filePath)) {
    const json = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    json.legal = data.legal;
    fs.writeFileSync(filePath, JSON.stringify(json, null, 2));
    console.log(`Updated ${lang}.json with legal texts`);
  }
}
