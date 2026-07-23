async function runTest() {
  console.log("Stres Testi Başlıyor...");
  try {
    const res = await fetch('http://localhost:4173/api/download?url=' + encodeURIComponent('https://www.youtube.com/watch?v=dQw4w9WgXcQ'));
    
    if (res.ok) {
      const data = await res.json();
      console.log("✅ API Başarılı, Sonuç:", JSON.stringify(data, null, 2));
    } else {
      console.log("❌ API Hatası:", res.status);
    }
  } catch (err) {
    console.error("❌ Sunucuya Bağlanılamadı:", err.message);
  }
}
runTest();
