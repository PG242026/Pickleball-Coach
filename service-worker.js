const CACHE_NAME = 'pickleball-coach-ai-v56-debug-weg';
const DEBUG_HIDE_STYLE = `<style id="hide-pwa-debug-box">
.pwa-debug,#pwaDebugPane{display:none!important;visibility:hidden!important;opacity:0!important;pointer-events:none!important}
</style>`;
const HELP_BUTTON_FIX = `<script id="help-buttons-fix-v56">
(function(){
  function hideDebug(){
    var box=document.getElementById('pwaDebugPane');
    if(box){box.style.display='none';box.style.visibility='hidden';box.remove();}
    document.querySelectorAll('.pwa-debug').forEach(function(el){el.style.display='none';el.remove();});
  }
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
  function kiesTaalUitKnop(btn){
    var onclick=btn.getAttribute('onclick')||'';
    var match=onclick.match(/setTaal\(['\"]([^'\"]+)['\"]\)/);
    if(match)return match[1];
    var tekst=(btn.textContent||'').toLowerCase();
    if(tekst.includes('english'))return 'en';
    if(tekst.includes('deutsch'))return 'de';
    if(tekst.includes('español')||tekst.includes('espanol'))return 'es';
    if(tekst.includes('français')||tekst.includes('francais'))return 'fr';
    if(tekst.includes('nederlands'))return 'nl';
    return '';
  }
  function taalKlik(e){
    var btn=e.target.closest('#taalPopup button');
    if(!btn)return;
    var taal=kiesTaalUitKnop(btn);
    if(!taal)return;
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    localStorage.setItem('pickleballTaal',taal);
    if(typeof window.setTaal==='function'){
      try{window.setTaal(taal);}catch(err){}
    }
    if(typeof window.pasTaalToe==='function'){
      try{window.pasTaalToe();}catch(err){}
    }
    if(typeof window.renderHandleiding==='function'){
      try{window.renderHandleiding();}catch(err){}
    }
    sluitPopups();
    setTimeout(function(){
      if(typeof window.pasTaalToe==='function'){
        try{window.pasTaalToe();}catch(err){}
      }
    },100);
  }
  function openKlik(e){
    var btn=e.target.closest('button');
    if(!btn)return;
    var action=btn.getAttribute('onclick')||'';
    if(action==='openHandleiding()'){
      e.preventDefault();
      if(typeof window.renderHandleiding==='function')window.renderHandleiding();
      openPopup('handleidingPopup');
    }
    if(action==='openTaal()'){
      e.preventDefault();
      openPopup('taalPopup');
    }
    if(action==='openFeedback()'){
      e.preventDefault();
      openPopup('feedbackPopup');
    }
    if(action==='sluitAllePopups()'){
      e.preventDefault();
      sluitPopups();
    }
  }
  hideDebug();
  document.addEventListener('DOMContentLoaded',hideDebug);
  window.addEventListener('load',hideDebug);
  setInterval(hideDebug,1000);
  document.addEventListener('click',taalKlik,true);
  document.addEventListener('click',openKlik,true);
})();
</script>`;

function injectStableHead(html) {
  let next = html;
  if (!next.includes('hide-pwa-debug-box')) {
    next = next.replace('</head>', DEBUG_HIDE_STYLE + '\n</head>');
  }
  if (!next.includes('help-buttons-fix-v56')) {
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
      .then(() => self.clients.matchAll({ type: 'window', includeUncontrolled: true }))
      .then((clients) => Promise.all(clients.map((client) => client.navigate(client.url))))
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