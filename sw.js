const CACHE_NAME = 'coromoto-junio-2026-v0.20';
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

// Instalacion: Forzamos el salto de espera
self.addEventListener('install', function (event) {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                console.log('Cache abierta: ' + CACHE_NAME);
                return cache.addAll(urlsToCache);
            })
    );
});

// Activacion: Limpieza y reclamo de control
self.addEventListener('activate', function (event) {
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.map(function (cacheName) {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Borrando cache antigua:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(function () {
            self.clients.claim();
        })
    );
});

// Estrategia: Cache con actualizacion en red (Stale-While-Revalidate)
self.addEventListener('fetch', function (event) {
    // Solo interceptar peticiones GET
    if (event.request.method !== 'GET') {
        return;
    }

    // Solo interceptar esquemas http y https
    var url = new URL(event.request.url);
    if (!url.protocol.startsWith('http')) {
        return;
    }

    // Excluir las peticiones dinamicas de Google Sheets de la cache
    if (url.hostname.includes('script.google.com') || url.hostname.includes('script.googleusercontent.com')) {
        return;
    }

    // Estrategia Stale-While-Revalidate para recursos estaticos
    event.respondWith(
        caches.match(event.request)
            .then(function (cachedResponse) {
                if (cachedResponse) {
                    // Revalidar en segundo plano sin bloquear la respuesta cacheada
                    fetch(event.request).then(function (networkResponse) {
                        if (networkResponse && networkResponse.status === 200) {
                            caches.open(CACHE_NAME).then(function (cache) {
                                cache.put(event.request, networkResponse.clone());
                            });
                        }
                    }).catch(function () {
                        // Sin red en segundo plano: la cache sigue vigente
                    });
                    return cachedResponse;
                }

                // No hay cache: intentar red, con fallback offline para navegaciones
                return fetch(event.request).then(function (networkResponse) {
                    if (networkResponse && networkResponse.status === 200) {
                        var responseClone = networkResponse.clone();
                        caches.open(CACHE_NAME).then(function (cache) {
                            cache.put(event.request, responseClone);
                        });
                    }
                    return networkResponse;
                }).catch(function () {
                    // Sin red y sin cache: servir fallback para navegaciones
                    if (event.request.mode === 'navigate') {
                        return caches.match('./index.html');
                    }
                    // Para otros recursos, devolver error
                    return new Response('', { status: 503, statusText: 'Sin conexión' });
                });
            })
    );
});
