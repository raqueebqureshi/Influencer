'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "0751cb047675d15dfe2876a35ab897f2",
"version.json": "0b5b789dfaef06212a3d5736da3c99a6",
"index.html": "16ec75c2dfdb9f67677b4021b2942a4f",
"/": "16ec75c2dfdb9f67677b4021b2942a4f",
"vercel.json": "d8ea61707a9ed3b6ac58416457fd46b7",
"main.dart.js": "46edc94317ad137ba5c6f22a00617034",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "f199c5f355086a897e58fa9e1464cc39",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "3a9c922c022aa67d578c1eddd8a7a473",
"assets/AssetManifest.json": "aedb098abeefbca3550d0688e391f089",
"assets/NOTICES": "c2b42ee13603cf8fa82ebd934a888515",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "a88708fd2c671879bf75654d8a77c7d8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "c7c4829604ac718a2be54ae6d587b493",
"assets/fonts/MaterialIcons-Regular.otf": "afd268e0c06daf140ee21de1bacf0c0b",
"assets/assets/rectangle_yellow.png": "6ee478d5a87c381f871899ed52da93d9",
"assets/assets/rectangle_red.png": "5950c227fa7cb031ef0867c130a08968",
"assets/assets/web_bg9.png": "58831829bbce337c4759e5ac07b0ff58",
"assets/assets/web_bg8.png": "0f3e47cce943326ccd8ae15aff7d226d",
"assets/assets/start_screen3.png": "486eeab54182a6e00881b5564a7fdd9e",
"assets/assets/start_screen_2.png": "c4d40eb82402390305293a55068126a7",
"assets/assets/bg22.png": "f1f63c44775078ebe8f3d0f6fe4cc647",
"assets/assets/rectangle_pink.png": "4f6f0fea6c47265fe7558b1a7ec1fa97",
"assets/assets/person2.png": "558cbcf81f8d17dbb14d363aa9045acb",
"assets/assets/start_screen.png": "1a937f832578da546d8b57d9d780f9a0",
"assets/assets/web_bg3.png": "8ac72770740536bf0bc1a3c0808c3c58",
"assets/assets/bg6.png": "4b99622fa1381a1132d40140634072cb",
"assets/assets/bg11.png": "444b4a1119782aa4f8c2ab4040f32348",
"assets/assets/web_bg2.png": "5275a0c54c40ade7203c9afa69010497",
"assets/assets/web_bg2_2.png": "c7e0aafd2c76e7ffa07cf8a943c833df",
"assets/assets/bg5.png": "b394fea6d8f805900becbc5d64927180",
"assets/assets/bg4.png": "509241e864f304dcc57fef7787711421",
"assets/assets/web_bg1.png": "4e22ec793294cdfb3a209e16ed787e35",
"assets/assets/web_bg5.png": "ee8701f5fae9c8688adc84d8f858a1a0",
"assets/assets/bg1.png": "c469b1fc11540e2006215dd56269d01a",
"assets/assets/web_bg4.png": "e5b380d4b34b08175480bd0792dcbe85",
"assets/assets/icons/color_palette_icon.png": "5aee13a496efe62e8b74ccf48076a115",
"assets/assets/icons/link_round_icon.png": "3f2ed14d79b73b1095d332499275c206",
"assets/assets/icons/add_round_icon.png": "2312022de2607d54f1a8a4f906be032f",
"assets/assets/icons/youtube_round_icon.png": "ae0770688d2cb9b4f6f918d465ce6763",
"assets/assets/icons/google_icon.png": "d8625b338b13c0a1703ae2cd0059540f",
"assets/assets/icons/add_circle_icon.png": "1ad52235d570669bbda605ddde373f0e",
"assets/assets/icons/eye_icon.png": "b1280bd65eb466ec1467d2a7eb5c3dda",
"assets/assets/icons/twitter_circle_icon.png": "426225f674961ce1e84e8a2c37ef3ad2",
"assets/assets/icons/add_icon.png": "11fb7267258e4ce4e4761cabc0cb79c0",
"assets/assets/icons/facebook_round_icon.png": "f703c37dffc76c735f630f945fe3844e",
"assets/assets/icons/person1.png": "343e74e765f0f3627ee2a3e6152063ab",
"assets/assets/icons/instagram_round_icon.png": "a64c2be03354c45e352069f7c19809d7",
"assets/assets/icons/person2.png": "558cbcf81f8d17dbb14d363aa9045acb",
"assets/assets/icons/instagram_circle_icon.png": "d8e331287daf28c670006e8ce0ac1067",
"assets/assets/icons/facebook_icon.png": "7c8d991e8a2be6abd4986c3e00c35aec",
"assets/assets/icons/x_round_icon.png": "b8ab9041c03f9ff990dec1a7e401f58c",
"assets/assets/icons/hand_wave_icon.png": "baf57f7d1c5833d88e8262012b9d4db2",
"assets/assets/icons/share_fat_icon.png": "1d7c2f207aa3aeda5169c28a3f2de663",
"assets/assets/icons/facebook_line_icon.png": "08ef25ffabcd464839b8bc7fb7c968a1",
"assets/assets/icons/pencil_icon.png": "78ffec90205e4bb4ae4a62f63d467eae",
"assets/assets/web_bg4_2.png": "e73c6139df12703f4298fbe5a5b32961",
"assets/assets/web_bg6.png": "57954065b25664f7109a9754a0475c6f",
"assets/assets/bg3.png": "188c61eca7a1c81d56674c01163a4156",
"assets/assets/bg2.png": "aae3296b365b8c61dd1f26436b01f55d",
"assets/assets/web_bg7.png": "d43b3fe8aaba85e05b1a6fb29a6bfc7d",
"assets/assets/start_screenn.png": "d7fda7733e3fd05766dfd7fcb5c3f526",
"assets/assets/verify_screen_bg1.png": "2a336e84b1c1efb1d00d0889fd30f3a0",
"assets/assets/loginbox.png": "2fbb1ff3b922b1dea494c0bd0ba7749b",
"assets/assets/verify_screen_bg.png": "3a83df01f72ef7a6d21e5146fcbc43a2",
"assets/assets/web_bg5_2.png": "9e6967822a86eebf8dca59e193af47f5",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
