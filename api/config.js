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
    "version": "1.3.0", // Versi dinaikkan untuk menandai perubahan selector
    "apiPatterns": [
      "/api/v4/",
	  "/api/v2/item/get_ratings",
	  "get_shop_ratings_new"
    ],
	 // ✅ Config untuk Rating Scraper
    "ratingScraper": {
      "maxPages": 6,
      "delayMs": 1200,
      "selectors": {
        "containerTarget": ".product-rating-overview",
      	"nextButton": ".shopee-page-controller .shopee-icon-button--right, button.shopee-icon-button--right",
     	"disabledClass": "shopee-icon-button--disabled"
      }
    },
    "selectors": {
	  // --- Halaman Detail Produk ---
      "detailPriceSection": ".product-price--current, .pmmxKx, div[class*=IFdRIb], ._2Shl1j",
      // ✅ BARU: Penanda/Anchor Judul Produk (Mobile)
      "detailTitleSectionMobile": ".ezTNz_",
	  // --- Halaman Kategori/Pencarian ---
	  "productCardLink": "a[href*='-i.']",
      "productCardInfoContainer": "div[class*='flex-col']",
      // --- Halaman Produk Serupa (Analyzer) ---
	  "similarProductContainer": "div.miIYkb", // Desktop Anchor
	  // ✅ BARU: Penanda/Anchor "Produk Serupa" (Mobile)
      "analyzerAnchorMobile": ".KFL3oh",

      "analyzerProductCard": "div.wujux8, div[data-sqe=item]", // Desktop Card
      // ✅ BARU: Kartu Produk Analyzer (Mobile)
      "analyzerProductCardMobile": ".item-card-list__item-card-wrapper",
	  
	  "analyzerPriceElement": "div.text-shopee-primary, ._3_N-52", // Desktop Card
	  // ✅ BARU: Harga Analyzer (Mobile)
      "analyzerPriceElementMobile": ".text-shopee-primary",
	  
	  "analyzerSoldElement": "div.text-shopee-black87, .OwmB_O", // Desktop Sold
      // ✅ BARU: Terjual Analyzer (Mobile)
      "analyzerSoldElementMobile": ".text-shopee-black87"
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
	"tiktokCredentials": {
		"pixelCode": "D2VDHTJC77U89D72MLB0",
	  	"accessToken": "e44c2e4fa8bac43779f8b9d8df5f86f3bbe68456"
	},
    "dynamicUrls": {
        "landingPageBaseUrl": "https://www.shoper.id/beranda",
        "tutorial": "https://www.shoper.id",
        "buyLicense": "https://egi-santika.myr.id/pl/lisensi-lifetime-shoper-52870",
        "contactDeveloper": "https://wa.me/628980007065"
    },
    "fallbackUrls": {
      "uninstallUrl": "https://www.shoper.id/beranda?from=uninstall",
      "installUrl": "https://www.shoper.id/beranda?ref=install",
	  "buyLicense": "https://egi-santika.myr.id/pl/lisensi-lifetime-shoper-52870",
	  "landingPageBaseUrl": "https://www.shoper.id/beranda"
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
