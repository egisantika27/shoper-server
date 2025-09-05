// /api/config.js

// [DIUBAH] Gunakan format Vercel Edge Function yang lebih modern dan kompatibel
export const config = {
  runtime: 'edge',
};

export default function handler(request) {
  // --- KONTROL CORS: Memberi izin akses ---
  // Ini adalah "surat izin" yang akan menyelesaikan error CORS Anda
  const headers = {
    'Access-Control-Allow-Origin': '*', // Izinkan semua origin
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  };

  // Menangani permintaan "preflight" OPTIONS dari browser
  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers });
  }

  // --- DATA KONFIGURASI LENGKAP ---
  const configData = {
    "version": "1.2.1", // Naikkan versi untuk menandai perubahan
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
        "buyLicense": "https://www.youtube.com/",
        "contactDeveloper": "https://wa.me/628980007065"
    }
  };

  // Kirim data konfigurasi sebagai respons JSON, DENGAN header CORS
  return new Response(JSON.stringify(configData), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      ...headers, // Gabungkan header CORS di sini
    },
  });
}
