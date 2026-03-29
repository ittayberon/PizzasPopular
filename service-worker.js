const cacheName = 'pizzas-app-v1';
const assets = [
  './',
  './index.html',
  './manifest.json',
  './logo-pizzeria-01.png',
  './fondo-secundario.png',
  './pizzeria-popular-general-1024x682.jpg'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(assets))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(resp => resp || fetch(e.request))
  );
});