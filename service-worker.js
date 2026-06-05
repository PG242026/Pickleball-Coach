const CACHE_NAME = 'pickleball-coach-ai-v58-taal-direct';
const DEBUG_HIDE_STYLE = `<style id="hide-pwa-debug-box">
.pwa-debug,#pwaDebugPane{display:none!important;visibility:hidden!important;opacity:0!important;pointer-events:none!important}
</style>`;
const HELP_BUTTON_FIX = `<script id="help-buttons-fix-v58">
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
  function taalVanKnop(btn){
    var txt=(btn.textContent||'').toLowerCase();
    var onclick=btn.getAttribute('onclick')||'';
    if(onclick.indexOf("'en'")>-1||txt.indexOf('english')>-1)return 'en';
    if(onclick.indexOf("'de'")>-1||txt.indexOf('deutsch')>-1)return 'de';
    if(onclick.indexOf("'es'")>-1||txt.indexOf('español')>-1||txt.indexOf('espanol')>-1)return 'es';
    if(onclick.indexOf("'fr'")>-1||txt.indexOf('français')>-1||txt.indexOf('francais')>-1)return 'fr';
    if(onclick.indexOf("'nl'")>-1||txt.indexOf('nederlands')>-1)return 'nl';
    return '';
  }
  function forceerTaalOpPagina(){
    var taal=localStorage.getItem('pickleballTaal');
    if(!taal)return;
    var i=0;
    var timer=setInterval(function(){
      i++;
      try{
        if(typeof window.setTaal==='function'&&window.__taalReloadBezig!==true){
          if(typeof window.pasTaalToe==='function')window.pasTaalToe();
        }
        if(typeof window.renderHandleiding==='function')window.renderHandleiding();
      }catch(e){}
      if(i>=12)clearInterval(timer);
    },250);
  }
  document.addEventListener('click',function(e){
    var taalKnop=e.target.closest('#taalPopup button');
    if(taalKnop){
      var taal=taalVanKnop(taalKnop);
      if(taal){
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        localStorage.setItem('pickleballTaal',taal);
        window.__taalReloadBezig=true;
        var url=new URL(window.location.href);
        url.searchParams.set('taal',taal);
        url.searchParams.set('v','taal-direct-'+taal+'-'+Date.now());
        window.location.replace(url.toString());
        return;
      }
    }
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
  },true);
  hideDebug();
  forceerTaalOpPagina();
  document.addEventListener('DOMContentLoaded',function(){hideDebug();forceerTaalOpPagina();});
  window.addEventListener('load',function(){hideDebug();forceerTaalOpPagina();});
  setInterval(hideDebug,1000);
})();
</script>`;

function injectStableHead(html) {
  let next = html;
  if (!next.includes('hide-pwa-debug-box')) {
    next = next.replace('</head>', DEBUG_HIDE_STYLE + '\n</head>');
  }
  if (!next.includes('help-buttons-fix-v58')) {
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