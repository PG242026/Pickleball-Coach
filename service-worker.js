const CACHE_NAME = 'pickleball-coach-ai-v54-taalfix';
const DEBUG_HIDE_STYLE = `<style id="hide-pwa-debug-box">
.pwa-debug,#pwaDebugPane{display:none!important}
</style>`;
const HELP_BUTTON_FIX = `<script id="help-buttons-fix">
(function(){
  function sluitPopups(){
    document.querySelectorAll('.popup').forEach(function(p){p.style.display='none';});
    var bg=document.getElementById('popupAchtergrond');
    if(bg)bg.style.display='none';
    document.body.style.overflow='';
  }
  function openPopup(id){
    sluitPopups();
    var popup=document.getElementById(id);
    var bg=document.getElementById('popupAchtergrond');
    if(bg)bg.style.display='block';
    if(popup){popup.style.display='block';document.body.style.overflow='hidden';}
  }
  function bindOpen(selector,id){
    var btn=document.querySelector(selector);
    if(!btn||btn.dataset.popupFixed==='ja')return;
    btn.dataset.popupFixed='ja';
    btn.addEventListener('click',function(e){
      e.preventDefault();
      if(id==='handleidingPopup'&&typeof window.renderHandleiding==='function')window.renderHandleiding();
      openPopup(id);
    });
  }
  function bindTaalKnoppen(){
    document.querySelectorAll('#taalPopup button[onclick^="setTaal"]').forEach(function(btn){
      if(btn.dataset.langFixed==='ja')return;
      btn.dataset.langFixed='ja';
      var match=(btn.getAttribute('onclick')||'').match(/setTaal\('([^']+)'\)/);
      if(!match)return;
      var taal=match[1];
      btn.addEventListener('click',function(e){
        e.preventDefault();
        if(typeof window.setTaal==='function'){
          window.setTaal(taal);
        }else{
          localStorage.setItem('pickleballTaal',taal);
          location.reload();
        }
        setTimeout(function(){
          if(typeof window.pasTaalToe==='function')window.pasTaalToe();
          if(typeof window.renderHandleiding==='function')window.renderHandleiding();
        },50);
      });
    });
  }
  function fix(){
    bindOpen('button[onclick="openHandleiding()"]','handleidingPopup');
    bindOpen('button[onclick="openTaal()"]','taalPopup');
    bindOpen('button[onclick="openFeedback()"]','feedbackPopup');
    bindTaalKnoppen();
    var bg=document.getElementById('popupAchtergrond');
    if(bg&&!bg.dataset.closeFixed){bg.dataset.closeFixed='ja';bg.addEventListener('click',sluitPopups);}
    document.querySelectorAll('button[onclick="sluitAllePopups()"]').forEach(function(btn){
      if(btn.dataset.closeFixed==='ja')return;
      btn.dataset.closeFixed='ja';
      btn.addEventListener('click',function(e){e.preventDefault();sluitPopups();});
    });
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',fix);
  else fix();
  window.addEventListener('load',fix);
})();
</script>`;

function injectStableHead(html) {
  let next = html;
  if (!next.includes('hide-pwa-debug-box')) {
    next = next.replace('</head>', DEBUG_HIDE_STYLE + '\n</head>');
  }
  if (!next.includes('help-buttons-fix')) {
    next = next.replace('</body>', HELP_BUTTON_FIX + '\n</body>');
  }
  return next;
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