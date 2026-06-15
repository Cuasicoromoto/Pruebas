const CACHE_NAME = 'coromoto-junio-2026-v0.10'; // Recuerda subir este número
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
    // 1. Solo interceptar peticiones GET
    if (event.request.method !== 'GET') {
        return;
    }

    // 2. Solo interceptar esquemas http y https (ignora chrome-extension, data:, etc.)
    const url = new URL(event.request.url);
    if (!url.protocol.startsWith('http')) {
        return;
    }

    // 3. Excluir las peticiones dinámicas de Google Sheets de la caché del Service Worker
    // para permitir que script.js maneje su propia sincronización en tiempo real
    if (url.hostname.includes('script.google.com') || url.hostname.includes('script.googleusercontent.com')) {
        return; // Deja pasar a la red directamente sin tocar la caché
    }

    // 4. Estrategia Stale-While-Revalidate para recursos estáticos del sitio
    event.respondWith(
        caches.match(event.request)
            .then(cachedResponse => {
                if (cachedResponse) {
                    // Si está en caché, lo devolvemos inmediatamente y actualizamos en segundo plano
                    fetch(event.request).then(networkResponse => {
                        if (networkResponse && networkResponse.status === 200) {
                            caches.open(CACHE_NAME).then(cache => {
                                cache.put(event.request, networkResponse.clone());
                            });
                        }
                    }).catch(() => {
                        // Ignorar fallos de red en segundo plano (ej. si está offline)
                    });
                    return cachedResponse;
                }

                // Si no está en caché, lo solicitamos a la red directamente
                return fetch(event.request).then(networkResponse => {
                    if (networkResponse && networkResponse.status === 200) {
                        const responseClone = networkResponse.clone();
                        caches.open(CACHE_NAME).then(cache => {
                            cache.put(event.request, responseClone);
                        });
                    }
                    return networkResponse;
                });
            })
    );
});
