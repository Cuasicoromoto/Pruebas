// 1. Nombre de la caché (Incrementa este número cada vez que hagas cambios en CSS o JS)
const CACHE_NAME = 'coromoto-cache-v1.10';

// 2. Lista de archivos fundamentales para que la app funcione offline
const urlsToCache = [
    './',
    './index.html',
    './styles.css',
    './script.js',
    './manifest.json',
    './fonts/MaterialIconsRound.otf',
    './fonts/PlayfairDisplay-Regular.ttf',
    './fonts/PlayfairDisplay-Bold.ttf',
    './icono/favicon.svg',
    './icono/icon-192x192.png',
    './icono/icon-512x512.png'
];

// Instalación: Guarda los archivos en el teléfono
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Caché del Coromoto instalada con éxito');
                return cache.addAll(urlsToCache);
            })
    );
    // Salta la espera para que el nuevo SW se active inmediatamente
    self.skipWaiting();
});

// Activación: Borra versiones viejas de la caché para no ocupar espacio
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
        })
    );
    return self.clients.claim();
});

// Estrategia: NETWORK FIRST
// Intentamos buscar en la red, si falla (offline), servimos lo que hay en caché.
self.addEventListener('fetch', event => {
    // Solo manejamos peticiones GET
    if (event.request.method !== 'GET') return;

    event.respondWith(
        fetch(event.request)
            .then(networkResponse => {
                // Si la red responde, guardamos una copia en caché para el futuro
                return caches.open(CACHE_NAME).then(cache => {
                    cache.put(event.request, networkResponse.clone());
                    return networkResponse;
                });
            })
            .catch(() => {
                // Si no hay internet, buscamos en la caché
                return caches.match(event.request)
                    .then(cachedResponse => {
                        if (cachedResponse) {
                            return cachedResponse;
                        }
                        // Si no hay ni red ni caché (caso raro), podrías devolver una página offline.
                    });
            })
    );
});
