const CACHE_NAME = 'pickleball-coach-ai-v52-stabiel';
const DEBUG_HIDE_STYLE = `<style id="hide-pwa-debug-box">
.pwa-debug,#pwaDebugPane{display:none!important}
</style>`;

function injectStableHead(html) {
  if (html.includes('hide-pwa-debug-box')) return html;
  return html.replace('</head>', DEBUG_HIDE_STYLE + '\n</head>');
}

async function htmlResponse(response) {
  const headers = new Headers(response.headers);
  headers.delete('content-length');
  headers.set('content-type', 'text/html; charset=utf-8');
  return new Response(injectStableHead(await response.text()), {
    status: response.status,
    statusText: response.statusText,
    headers
  });
}

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.map((key) => key === CACHE_NAME ? null : caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);
  const isPage = event.request.mode === 'navigate' || url.pathname === '/' || url.pathname === '/index.html';

  if (isPage) {
    event.respondWith(
      fetch(event.request, { cache: 'no-store' })
        .then((response) => htmlResponse(response))
        .catch(() => caches.match('/index.html'))
    );
    return;
  }

  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});