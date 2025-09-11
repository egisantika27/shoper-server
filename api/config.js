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
	"metaCredentials": {
        "pixelId": "1289968729543730",
        "accessToken": "EAASnNwd76JMBPeTZBetttpTh8zhGeZAqUDnqumD9yzzC3fiRCD5Uyxl57HEuOkWaQvJpC3CqhbtU8Qk4EUC5ZCnYud1KrEUgZCD6yKEPRE9bTlzUHVZCP9pd8WdS2amCSDe1r4frr90yEXPrLQ5kMCEw7D2KVREQJIwUOBUs1CXyIlYMZCdeWoJrDbIOr2Fgy3YQZDZD"
    },
	"ga4Credentials": {
	    "measurementId": "G-Y773PEQWGJ",
	    "apiSecret": "PjDXc3V3RWWnev2KqBuyrg"
  	}, 
	"tiktokCredentials"
		"pixelCode": "D2VDHTJC77U89D72MLB0",
	  	"accessToken": "e44c2e4fa8bac43779f8b9d8df5f86f3bbe68456"
	},
    "dynamicUrls": {
        "landingPageBaseUrl": "https://shoper-beranda.vercel.app",
        "tutorial": "https://shoper.myscalev.com/shoper-shopee-product-research-tool",
        "buyLicense": "https://egi-santika.myr.id/pl/lisensi-lifetime-shoper-52870",
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





