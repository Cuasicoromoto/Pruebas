const CACHE_NAME = 'coromoto-junio-2026-v0.26';
const urlsToCache = [
    './',
    './index.html',
    './styles.css',
    './script.js',
    './oraciones.js',
    './manifest.json',
    './fonts/MaterialIconsRound.otf',
    './fonts/PlayfairDisplay-Regular.ttf',
    './fonts/PlayfairDisplay-Bold.ttf',
    './fonts/PlayfairDisplay-Italic.ttf',
    './icono/favicon.svg',
    './icono/icon-192x192.png',
    './icono/icon-512x512.png'
];

// ── Instalación: cachear cada archivo por separado ──
//  Si un archivo falla, los demás se mantienen en caché.
self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                console.log('[SW] Cache abierta: ' + CACHE_NAME);
                return Promise.allSettled(
                    urlsToCache.map(function (url) {
                        return cache.add(url).catch(function (err) {
                            console.warn('[SW] No se pudo cachear:', url, err);
                        });
                    })
                );
            })
            .then(function () {
                return self.skipWaiting();
            })
    );
});

// ── Activación: limpiar caches antiguas y tomar control ──
self.addEventListener('activate', function (event) {
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.map(function (cacheName) {
                    if (cacheName !== CACHE_NAME) {
                        console.log('[SW] Borrando cache antigua:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(function () {
            return self.clients.claim();
        })
    );
});

// ── Fetch: Stale-While-Revalidate para assets estáticos ──
self.addEventListener('fetch', function (event) {
    // Solo interceptar peticiones GET
    if (event.request.method !== 'GET') return;

    var url = new URL(event.request.url);

    // Solo esquemas http/https
    if (!url.protocol.startsWith('http')) return;

    // Excluir peticiones a Google Sheets / Apps Script (dinámicas)
    if (url.hostname.includes('script.google.com') ||
        url.hostname.includes('script.googleusercontent.com')) {
        return;
    }

    // Para navegaciones (HTML):Network-First con fallback offline
    if (event.request.mode === 'navigate') {
        event.respondWith(
            fetch(event.request)
                .then(function (networkResponse) {
                    if (networkResponse && networkResponse.status === 200) {
                        var clone = networkResponse.clone();
                        caches.open(CACHE_NAME).then(function (c) {
                            c.put(event.request, clone);
                        });
                    }
                    return networkResponse;
                })
                .catch(function () {
                    return caches.match(event.request)
                        .then(function (cached) {
                            return cached || caches.match('./index.html');
                        });
                })
        );
        return;
    }

    // Para el resto de recursos: Stale-While-Revalidate
    event.respondWith(
        caches.match(event.request)
            .then(function (cachedResponse) {
                // Devolver cache de inmediato (rápido)
                var fetchPromise = fetch(event.request)
                    .then(function (networkResponse) {
                        if (networkResponse && networkResponse.status === 200) {
                            var clone = networkResponse.clone();
                            caches.open(CACHE_NAME).then(function (c) {
                                c.put(event.request, clone);
                            });
                        }
                        return networkResponse;
                    })
                    .catch(function () {
                        // Sin red: no hay problema, ya devolvimos la cache
                    });

                return cachedResponse || fetchPromise;
            })
    );
});
