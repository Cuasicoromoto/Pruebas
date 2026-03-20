const CACHE_NAME = 'coromoto-marzo-2026-v0.020'; // Recuerda subir este número
const urlsToCache = [
    './',
    './index.html',
    './styles.css',
    './script.js',
    './manifest.json',
    './fonts/MaterialIconsRound.otf',
    './fonts/PlayfairDisplay-Regular.ttf',
    './fonts/PlayfairDisplay-Bold.ttf',
    './fonts/PlayfairDisplay-Italic.ttf',
    './icono/favicon.svg',
    './icono/icon-192x192.png',
    './icono/icon-512x512.png'
];

// Instalación: Forzamos el salto de espera
self.addEventListener('install', event => {
    self.skipWaiting(); // <--- IMPORTANTE
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Cache abierta: ' + CACHE_NAME);
                return cache.addAll(urlsToCache);
            })
    );
});

// Activación: Limpieza y reclamo de control
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Borrando caché antigua:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => self.clients.claim()) // <--- Toma el control de la PWA abierta
    );
});

// Estrategia: Cache con actualización en red (Stale-While-Revalidate)
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(cachedResponse => {
                // Si está en caché, lo devolvemos, pero lanzamos la red para actualizarlo
                const fetchPromise = fetch(event.request).then(networkResponse => {
                    if (networkResponse && networkResponse.status === 200) {
                        caches.open(CACHE_NAME).then(cache => {
                            cache.put(event.request, networkResponse.clone());
                        });
                    }
                    return networkResponse;
                }).catch(() => {
                    // Si falla la red (offline), no pasa nada, ya servimos la caché
                });

                return cachedResponse || fetchPromise;
            })
    );
});
