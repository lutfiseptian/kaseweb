'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "19ac903ca95c48579a7dec4a40173389",
"index.html": "d61b6a9fac0d38f5d45bd8bc0ad08132",
"/": "d61b6a9fac0d38f5d45bd8bc0ad08132",
"main.dart.js": "df92dbb6d3607bf319e899e93b4da632",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c1db4ff5279c929b6845bbc422d6dacc",
"assets/AssetManifest.json": "f337cef0d4975feac2273c76770306f9",
"assets/NOTICES": "f447497eae519713a0d581e650445087",
"assets/FontManifest.json": "1b1e7812d9eb9f666db8444d7dde1b20",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "d10ac4ee5ebe8c8fff90505150ba2a76",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "84273dddeed5f91d9807088dcf32d389",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/dana_logo.png": "1387e7a9867d8df798d4c2cb080b6839",
"assets/assets/images/icon_carapembayaran.png": "62c385d4dbc9756afebdd7621fa65234",
"assets/assets/images/tentang_image_dvi.png": "7936d71cbbe5ae8086390af2765db905",
"assets/assets/images/banner_wot.jpg": "4e01604e9d83f1a12db9fe33775c6aa9",
"assets/assets/images/logo_kase_black.png": "20390ad8c438dca15c2c8830798eefcc",
"assets/assets/images/banner.png": "8a10d7152d7f516192268f232ec3e3af",
"assets/assets/images/icon_contac_ketentuan.png": "ec24ea73de07cf9555cbe3bf5973e9e9",
"assets/assets/images/icon_refund.png": "0193b1b29ff03e2ee95c510988696c3e",
"assets/assets/images/tentang_image_kase.png": "7dd07efa68a3e513b259da82e9333830",
"assets/assets/images/banner1.jpg": "1e12446dd6a254efdeddf900a14f26b2",
"assets/assets/images/banner_xl.jpg": "5595286518083f4232b1ea8ac4a6eadd",
"assets/assets/images/shopping.png": "1dc7438342030e2b5b52ca20616dcf4f",
"assets/assets/images/banner_ml.jpg": "5f9cbb5f8a0cd42b356248ac95fb181f",
"assets/assets/images/pc_kase.png": "7dd07efa68a3e513b259da82e9333830",
"assets/assets/images/cod.png": "201dfc2e7831d5940bd907d74a76a44d",
"assets/assets/images/loading_kase.png": "6bedee1d3b9b90ee94fd38abea93cf14",
"assets/assets/images/pubg_banner.jpg": "d7d051d96ea323478f23ee63d0109c09",
"assets/assets/images/banner_listrik.png": "090c87388509ee9b521064f808dde327",
"assets/assets/images/banner_listrik.jpg": "0f8679fdc9c091861a5899a972566810",
"assets/assets/images/banner_smart.jpg": "2ee1a3a809e7d9f82b761b7d33191b5b",
"assets/assets/images/logo_new.png": "d03619f21cc3decaa06b8d3d548171a3",
"assets/assets/images/bca_logo.png": "5b10790345e80bf55fd475d782f8fcc8",
"assets/assets/images/icon_profile_ketentuan.png": "4ea0eb89d7bf6da6836afd0d5d4b18b5",
"assets/assets/images/banner_shopper.jpg": "ef88d502166cf84bba0677f520749d34",
"assets/assets/images/image_pc_kase_new.png": "79fd6e9c29d0e6ed8a14a27ea898139d",
"assets/assets/images/banner_aov.jpg": "2976f9fac6d8d37dc68963b4c22ac4c8",
"assets/assets/images/icon_ketentuan_refund.png": "a821b413bfd40e539402a98c5f51e1b8",
"assets/assets/images/footer_kase.png": "db9bc9f0b439ec233b0c845e63f24990",
"assets/assets/images/qris_logo_dvi.png": "09b4b829a846b13f30cfa86fbacd6214",
"assets/assets/images/logo_kase_white.png": "8dda17a2310d626662067f4b705b5f9e",
"assets/assets/images/image_qris.png": "a1718383c1b1bfbf54d292e4efc7f66f",
"assets/assets/images/icon_produk_kase.png": "a94b71ccf995b790e24c4d0e910f9a45",
"assets/assets/images/logo_dvi.png": "722547bc3238ad17d13d1af5937734ef",
"assets/assets/images/banner_shoppe.png": "7cec35ba65e57e7248bd39351296623f",
"assets/assets/images/freefire_banner.jpg": "80b3661d3f405ab21402a36facf34979",
"assets/assets/images/image_tentang_kami_kase.png": "0de9b11de85b6d32656e02a0aa0c2760",
"assets/assets/images/logo_kase.png": "b7963529f5c9dd0d70ea84cfc40ff652",
"assets/assets/images/icon_privasi_ketentuan.png": "e4e5b9a3157e0bcfe61767a42957fe3a",
"assets/assets/images/icon_app.png": "54f02ffb35c00ff26b3b945bb9af0c33",
"assets/assets/images/loading.png": "936fb44d8963e09f2a3163b189c900b5",
"assets/assets/images/banner_gopay.jpg": "acd44f369784fc050ca03024aa124506",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
