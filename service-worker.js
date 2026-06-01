const CACHE_NAME = 'pickleball-coach-ai-v33';
const AI_CLIENT_SCRIPT = '<script src="/ai-backend-client.js?v=cache33"></script>';
const CHEVRON_STYLE = `<style id="large-accordion-chevrons">
.accordion-chevron{flex:0 0 44px!important;width:44px!important;height:44px!important;margin-left:16px!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;color:transparent!important;font-size:0!important;line-height:1!important;position:relative!important;transform:rotate(0deg);transform-origin:center;transition:transform .25s ease}.accordion-chevron::before{content:"";width:17px;height:17px;border-right:4px solid #1f5f3b;border-bottom:4px solid #1f5f3b;border-radius:2px;transform:rotate(45deg) translate(-2px,-2px);box-sizing:border-box}details[open]>.accordion-header .accordion-chevron{transform:rotate(180deg)}
</style>`;
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
  let next = html;
  if (!next.includes('ai-backend-client.js')) {
    next = next.replace('</body>', AI_CLIENT_SCRIPT + '\n</body>');
  }
  if (!next.includes('large-accordion-chevrons')) {
    next = next.replace('</head>', CHEVRON_STYLE + '\n</head>');
  }
  return next;
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
            const cacheIndexResponse = response.clone();
            const cacheRootResponse = response.clone();
            caches.open(CACHE_NAME).then(async (cache) => {
              cache.put('/index.html', await htmlResponseWithAiClient(cacheIndexResponse));
              if (requestUrl.pathname === '/') {
                cache.put('/', await htmlResponseWithAiClient(cacheRootResponse));
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
