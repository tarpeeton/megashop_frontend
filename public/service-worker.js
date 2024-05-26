const CACHE_NAME = 'MyCashe';

const urlsToCache = [
  '/',
  '/index.html',
  '/index.js',
  '/src/index.jsx',
  '/src/index.css',
  '/src/App.jsx',
  '/src/assets/fonts/Rubik-Regular.ttf',
  '/src/assets/css/404.css'
  
  // Add other files you want to cache
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request).then(response => {
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          const responseToCache = response.clone();
          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });
          return response;
        });
      })
  );
});
