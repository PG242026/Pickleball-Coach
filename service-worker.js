const CACHE_NAME = 'pickleball-coach-ai-v32';
const AI_CLIENT_SCRIPT = '<script src="/ai-backend-client.js?v=cache32"></script>';
const APP_SHELL = [
  '/',
  '/index.html',
  '/styles.css',
  '/manifest.json',
  '/ai-backend-client.js',
  '/icons/icon-192.png',
  '/icons/icon-512.png'
];

function injectAiClient(html) {
  if (html.includes('ai-backend-client.js')) return html;
  return html.replace('</body>', AI_CLIENT_SCRIPT + '\n</body>');
}

async function htmlResponseWithAiClient(response) {
  const headers = new Headers(response.headers);
  headers.delete('content-length');
  headers.set('content-type', 'text/html; charset=utf-8');

  return new Response(injectAiClient(await response.text()), {
    status: response.status,
    statusText: response.statusText,
    headers
  });
}

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const requestUrl = new URL(event.request.url);
  const isNavigationRequest = event.request.mode === 'navigate';
  const isIndexRequest = requestUrl.pathname === '/' || requestUrl.pathname === '/index.html';

  if (isNavigationRequest || isIndexRequest) {
    event.respondWith(
      fetch(event.request)
        .then(async (response) => {
          if (response && response.status === 200 && response.type === 'basic') {
            const responseToCache = response.clone();
            caches.open(CACHE_NAME).then(async (cache) => {
              cache.put('/index.html', await htmlResponseWithAiClient(responseToCache));
              if (requestUrl.pathname === '/') {
                cache.put('/', await htmlResponseWithAiClient(response.clone()));
              }
            });
          }
          return htmlResponseWithAiClient(response);
        })
        .catch(() => caches.match('/index.html'))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;

      return fetch(event.request)
        .then((response) => {
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return response;
        })
        .catch(() => caches.match('/index.html'));
    })
  );
});
