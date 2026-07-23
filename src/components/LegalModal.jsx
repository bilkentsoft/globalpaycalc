import React from 'react';
import { X, ShieldCheck, Lock, FileText } from 'lucide-react';
import { getTranslation } from '../i18n';

export default function LegalModal({ type, lang = 'en', onClose }) {
  if (!type) return null;
  const t = (path) => getTranslation(lang, path);

  const renderContent = () => {
    if (lang === 'tr') {
      if (type === 'privacy') {
        return (
          <div className="space-y-4 text-xs text-slate-300 leading-relaxed">
            <div className="flex items-center space-x-2 text-brand-400 font-bold text-lg mb-2">
              <Lock className="w-5 h-5" />
              <span>Gizlilik Politikası (Privacy Policy)</span>
            </div>
            <p><strong>GlobalPayCalc.com</strong> adresinde ziyaretçilerimizin gizliliği bizim için en büyük önceliktir. Bu Gizlilik Politikası belgesi, platformumuz tarafından toplanan ve kaydedilen bilgi türlerini ve bunları nasıl kullandığımızı açıklamaktadır.</p>
            <h4 className="font-bold text-white text-sm">1. %100 Yerel İstemci Taraflı İşleme (Client-Side Privacy)</h4>
            <p>Sitemizdeki tüm video indirme analizleri, dosya dönüştürmeler, arka plan silme işlemleri ve finansal hesaplamalar tamamen tarayıcınızın belleğinde (local olarak) gerçekleşir. Dönüştürdüğünüz veya yüklediğiniz hiçbir dosya veya veri sunucularımıza yüklenmez, kaydedilmez ve saklanmaz.</p>
            <h4 className="font-bold text-white text-sm">2. Log Dosyaları</h4>
            <p>GlobalPayCalc.com standart bir log dosyası barındırma prosedürü izler. Bu dosyalar ziyaretçilerin web sitelerini ziyaret ettiklerinde tuttukları kayıtları içerir. Barındırma (hosting) şirketleri bunu analitik amaçlarla yapar. Log dosyaları IP adresleri, tarayıcı türü, İnternet Servis Sağlayıcısı (ISP), tarih/saat damgası ve tıklama sayısını içerebilir. Bunlar kişisel olarak tanımlanabilir herhangi bir bilgiyle bağlantılı değildir.</p>
            <h4 className="font-bold text-white text-sm">3. Google AdSense & Çerezler</h4>
            <p>Sitemizde Google AdSense reklamları yayınlanmaktadır. Google, üçüncü taraf satıcı olarak, sitemizde reklam sunmak için çerezleri (DART çerezi dahil) kullanır. Kullanıcılar, Google reklam ve içerik ağı gizlilik politikasını ziyaret ederek DART çerezinin kullanımını engelleyebilirler.</p>
          </div>
        );
      }
      if (type === 'terms') {
        return (
          <div className="space-y-4 text-xs text-slate-300 leading-relaxed">
            <div className="flex items-center space-x-2 text-purple-400 font-bold text-lg mb-2">
              <FileText className="w-5 h-5" />
              <span>Kullanım Şartları (Terms of Service)</span>
            </div>
            <p><strong>GlobalPayCalc.com</strong> web sitesine erişerek aşağıdaki kullanım şartlarını kabul etmiş sayılırsınız. Bu şartları kabul etmiyorsanız lütfen siteyi kullanmayınız.</p>
            <h4 className="font-bold text-white text-sm">1. Bilgilendirme Amaçlı Kullanım</h4>
            <p>Bu platformda sunulan vergi, net maaş, alım gücü paritesi ve yapay zeka token maliyeti hesaplama araçları yalnızca bilgilendirme ve tahmini analiz amacıyla sunulmaktadır. Hesaplama sonuçları kesinlik teşkil etmez.</p>
            <h4 className="font-bold text-white text-sm">2. Sorumluluk Sınırlandırması</h4>
            <p>Vergi yasaları, oranları ve finansal kurallar ülkeden ülkeye ve zamana göre sürekli değişiklik göstermektedir. Bu nedenle, resmi ve yasal kararlarınızı vermeden önce mutlaka yetkili mali müşavir veya vergi danışmanınızdan resmi onay almanız gerekmektedir. Hesaplama hatalarından veya yanlış tahminlerden kaynaklanan durumlarda platformumuz sorumluluk kabul etmez.</p>
            <h4 className="font-bold text-white text-sm">3. Hizmet Değişiklikleri</h4>
            <p>GlobalPayCalc.com, sitedeki araçları, modülleri veya kuralları önceden haber vermeksizin değiştirme veya sonlandırma hakkını saklı tutar.</p>
          </div>
        );
      }
    }

    // Default Fallback to English (Fully Written Out)
    if (type === 'privacy') {
      return (
        <div className="space-y-4 text-xs text-slate-300 leading-relaxed">
          <div className="flex items-center space-x-2 text-brand-400 font-bold text-lg mb-2">
            <Lock className="w-5 h-5" />
            <span>Privacy Policy</span>
          </div>
          <p>At <strong>GlobalPayCalc.com</strong>, accessible from https://globalpaycalc.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by our platform and how we use it.</p>
          <h4 className="font-bold text-white text-sm">1. 100% Client-Side Local Processing</h4>
          <p>All social media downloader extractions, file conversions, AI photo background removal, and financial calculators run entirely inside your browser's local RAM. No file or user data is ever uploaded to our servers, stored, or logged.</p>
          <h4 className="font-bold text-white text-sm">2. Log Files</h4>
          <p>GlobalPayCalc.com follows a standard procedure of using log files. These files log visitors when they visit websites. Barring standard server details like IP address, browser type, Internet Service Provider (ISP), date and time stamp, and referring/exit pages, no personally identifiable information is stored.</p>
          <h4 className="font-bold text-white text-sm">3. Google Cookies & Ads</h4>
          <p>Google is one of a third-party vendor on our site. It uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to our platform and other sites on the internet.</p>
        </div>
      );
    }
    return (
      <div className="space-y-4 text-xs text-slate-300 leading-relaxed">
        <div className="flex items-center space-x-2 text-purple-400 font-bold text-lg mb-2">
          <FileText className="w-5 h-5" />
          <span>Terms of Service</span>
        </div>
        <p>By accessing <strong>GlobalPayCalc.com</strong>, you agree to comply with these terms of service. If you do not agree, please do not use this platform.</p>
        <h4 className="font-bold text-white text-sm">1. Educational & Estimation Use Only</h4>
        <p>All calculator estimates, tax rates, AI token prices, and purchasing power parity results are provided for informational and estimation purposes only. They do not constitute formal legal or financial advice.</p>
        <h4 className="font-bold text-white text-sm">2. Liability Limitation</h4>
        <p>Tax regulations, rates, and software pricing parameters are subject to frequent changes. Always consult a certified accountant or tax professional before making business decisions. GlobalPayCalc.com is not liable for errors in calculations.</p>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
      <div className="glass-card max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 rounded-2xl border-slate-700 relative space-y-6 animate-float">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {renderContent()}

        <div className="pt-4 border-t border-slate-800 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs transition cursor-pointer"
          >
            OK
          </button>
        </div>

      </div>
    </div>
  );
}
