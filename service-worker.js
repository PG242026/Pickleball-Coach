const CACHE_NAME = 'pickleball-coach-ai-v47';
const AI_CLIENT_SCRIPT = '<script src="/ai-backend-client.js?v=cache47"></script>';
const DEBUG_HIDE_STYLE = `<style id="hide-pwa-debug-box">
.pwa-debug,#pwaDebugPane{display:none!important}
</style>`;
const CHEVRON_STYLE = `<style id="large-accordion-chevrons">
.accordion-chevron{flex:0 0 48px!important;width:48px!important;height:48px!important;margin-left:16px!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;color:transparent!important;font-size:0!important;line-height:1!important;position:relative!important;transform:rotate(0deg);transform-origin:center;transition:transform .25s ease}.accordion-chevron::before{content:"";width:19px;height:19px;border-right:4px solid #1f5f3b;border-bottom:4px solid #1f5f3b;border-radius:2px;transform:rotate(45deg) translate(-2px,-2px);box-sizing:border-box}details[open]>.accordion-header .accordion-chevron{transform:rotate(180deg)}
</style>`;
const YOUTUBE_LAYOUT_FIX = `<style id="youtube-compare-layout-fix">
.youtube-panel-actions{display:flex;flex-wrap:wrap;gap:10px;align-items:center;margin:10px 0 0}.youtube-panel-actions button{margin:0;min-height:46px;padding:13px 18px;display:inline-flex;align-items:center;justify-content:center}.youtube-compare-panel{display:block;width:100%;box-sizing:border-box;clear:both;margin-top:10px;background:#eef7f1;padding:14px;border-radius:15px;border:1px solid #d2e7db}.youtube-compare-panel .sync-accordion{background:#f7fcf9}.youtube-compare-panel+.video-analyse-sectie{width:100%;box-sizing:border-box}
</style>
<script id="youtube-compare-layout-script">
(function(){
  function fixYoutubeComparePanel(){
    var title=document.getElementById('youtubeVideoTitle');
    var youtubeBox=title&&title.closest('.video-box');
    if(!youtubeBox)return;
    var actionRow=youtubeBox.querySelector('.knopgroep,.youtube-panel-actions');
    if(!actionRow)return;
    actionRow.classList.add('youtube-panel-actions');
    var compare=document.querySelector('.in-youtube-panel')||document.querySelector('.in-manage-videos')||document.querySelector('.sync-box');
    var analysis=document.querySelector('.video-analyse-sectie');
    if(compare){
      compare.classList.add('youtube-compare-panel','in-youtube-panel');
      compare.classList.remove('in-manage-videos','sync-box');
      actionRow.insertAdjacentElement('afterend',compare);
    }
    if(analysis&&compare){
      compare.insertAdjacentElement('afterend',analysis);
    }
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',fixYoutubeComparePanel);
  else fixYoutubeComparePanel();
  window.addEventListener('load',fixYoutubeComparePanel);
})();
</script>`;
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
  if (!next.includes('hide-pwa-debug-box')) {
    next = next.replace('</head>', DEBUG_HIDE_STYLE + '\n</head>');
  }
  if (!next.includes('large-accordion-chevrons')) {
    next = next.replace('</head>', CHEVRON_STYLE + '\n</head>');
  }
  if (!next.includes('youtube-compare-layout-script')) {
    next = next.replace('</body>', YOUTUBE_LAYOUT_FIX + '\n</body>');
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

async function cacheAppShellSafely() {
  const cache = await caches.open(CACHE_NAME);
  await Promise.all(
    APP_SHELL.map(async (url) => {
      try {
        const response = await fetch(url, { cache: 'no-store' });
        if (response && response.ok) {
          await cache.put(url, response);
        }
      } catch (error) {
        // Een ontbrekend bestand mag de hele app-update niet blokkeren.
      }
    })
  );
}

self.addEventListener('install', (event) => {
  event.waitUntil(cacheAppShellSafely());
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
    )
      .then(() => self.clients.claim())
      .then(() => self.clients.matchAll({ type: 'window', includeUncontrolled: true }))
      .then((clients) => Promise.all(
        clients.map((client) => client.navigate(client.url))
      ))
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