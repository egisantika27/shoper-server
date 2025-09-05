// /api/config.js

export default function handler(req, res) {
  // --- KONTROL CORS: Ini adalah "surat izin" yang menyelesaikan error Anda ---
  res.setHeader('Access-Control-Allow-Origin', '*'); // Izinkan semua domain
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Menangani permintaan "preflight" OPTIONS dari browser
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // --- DATA KONFIGURASI ANDA ---
  // Di sinilah konten dari file config.json Anda sekarang berada.
  const configData = {
    "version": "1.2.0",
    "apiPatterns": [
      "/api/v4/"
    ],
    "selectors": {
      "detailPriceSection": ".product-price--current, .pmmxKx, div[class*=IFdRIb], ._2Shl1j",
      "productCardLink": "a[href*='-i.']",
      "productCardInfoContainer": "div[class*='flex-col']",
      "similarProductContainer": "div.miIYkb",
      "analyzerProductCard": "div.wujux8, div[data-sqe=item]",
      "analyzerPriceElement": "div.text-shopee-primary, ._3_N-52",
      "analyzerSoldElement": "div.text-shopee-black87, .OwmB_O"
    },
    "featureFlags": {
      "storeAnalyzerEnabled": false,
      "anotherNewFeature": false
    },
    "dynamicUrls": {
		"landingPageBaseUrl": "https://shoper-beranda.vercel.app",
        "tutorial": "https://shoper.myscalev.com/shoper-shopee-product-research-tool",
        "buyLicense": "https://egi-santika.myr.id/pl/lisensi-lifetime-shoper-52870",
        "contactDeveloper": "https://wa.me/628980007065"
    }
  };

  // Kirim data konfigurasi sebagai respons dengan format JSON
  return res.status(200).json(configData);
}