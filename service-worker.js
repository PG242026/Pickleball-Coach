const CACHE_NAME = 'pickleball-coach-ai-v59-direct-translate';
const DEBUG_HIDE_STYLE = `<style id="hide-pwa-debug-box">
.pwa-debug,#pwaDebugPane{display:none!important;visibility:hidden!important;opacity:0!important;pointer-events:none!important}
</style>`;
const HELP_BUTTON_FIX = `<script id="help-buttons-fix-v59">
(function(){
  var D={
    nl:{help:'Hulp en contact',guide:'📘 Handleiding',language:'🌍 Language',feedback:'💬 Feedback',side:'📺 Side-by-side Analyse',player:'🎥 Spelers video',yt:'📺 YouTube filmpje',record:'🎥 Nieuwe opname maken',manage:"📁 Spelers video’s beheren",compare:'🎛 Vergelijk & Afspelen',analysis:'🎥 Analyse',search:'🔍 Zoek YouTube voorbeeldvideo',paste:'📎 Plak YouTube link',clear:'🗑 Wis de video',other:'🔄 Zoek een ander'},
    en:{help:'Help and contact',guide:'📘 Guide',language:'🌍 Language',feedback:'💬 Feedback',side:'📺 Side-by-side Analysis',player:'🎥 Player video',yt:'📺 YouTube video',record:'🎥 New recording',manage:'📁 Manage player videos',compare:'🎛 Compare & Play',analysis:'🎥 Analysis',search:'🔍 Search YouTube example video',paste:'📎 Paste YouTube link',clear:'🗑 Clear video',other:'🔄 Search another'},
    de:{help:'Hilfe und Kontakt',guide:'📘 Anleitung',language:'🌍 Sprache',feedback:'💬 Feedback',side:'📺 Side-by-side Analyse',player:'🎥 Spielervideo',yt:'📺 YouTube-Video',record:'🎥 Neue Aufnahme',manage:'📁 Spielervideos verwalten',compare:'🎛 Vergleichen & Abspielen',analysis:'🎥 Analyse',search:'🔍 YouTube-Beispielvideo suchen',paste:'📎 YouTube-Link einfügen',clear:'🗑 Video löschen',other:'🔄 Anderes suchen'},
    es:{help:'Ayuda y contacto',guide:'📘 Guía',language:'🌍 Idioma',feedback:'💬 Comentarios',side:'📺 Análisis lado a lado',player:'🎥 Video del jugador',yt:'📺 Video de YouTube',record:'🎥 Nueva grabación',manage:'📁 Gestionar videos del jugador',compare:'🎛 Comparar y reproducir',analysis:'🎥 Análisis',search:'🔍 Buscar video de ejemplo en YouTube',paste:'📎 Pegar enlace de YouTube',clear:'🗑 Borrar video',other:'🔄 Buscar otro'},
    fr:{help:'Aide et contact',guide:'📘 Guide',language:'🌍 Langue',feedback:'💬 Feedback',side:'📺 Analyse côte à côte',player:'🎥 Vidéo du joueur',yt:'📺 Vidéo YouTube',record:'🎥 Nouvel enregistrement',manage:'📁 Gérer les vidéos du joueur',compare:'🎛 Comparer et lire',analysis:'🎥 Analyse',search:'🔍 Rechercher une vidéo YouTube',paste:'📎 Coller le lien YouTube',clear:'🗑 Effacer la vidéo',other:'🔄 Chercher une autre'}
  };
  function hideDebug(){
    var box=document.getElementById('pwaDebugPane');
    if(box){box.style.display='none';box.style.visibility='hidden';box.remove();}
    document.querySelectorAll('.pwa-debug').forEach(function(el){el.style.display='none';el.remove();});
  }
  function setText(sel,txt){var el=document.querySelector(sel);if(el)el.textContent=txt;}
  function setAccordion(sel,txt){var el=document.querySelector(sel);if(!el)return;var t=el.querySelector('.accordion-title')||el;t.textContent=txt;}
  function applyLang(){
    var lang=localStorage.getItem('pickleballTaal')||new URL(location.href).searchParams.get('taal')||'nl';
    var t=D[lang]||D.nl;
    setText('.onderaan h2',t.help);
    setText('button[onclick="openHandleiding()"]',t.guide);
    setText('button[onclick="openTaal()"]',t.language);
    setText('button[onclick="openFeedback()"]',t.feedback);
    var h2=document.querySelector('.card h2'); if(h2&&h2.textContent.indexOf('Side')>-1)h2.textContent=t.side;
    setText('#playerVideoTitle',t.player);
    setText('#youtubeVideoTitle',t.yt);
    setText('button[onclick="startOpname()"]',t.record);
    setAccordion('#manageVideosAccordion summary',t.manage);
    setAccordion('.sync-accordion summary',t.compare);
    setText('#videoAnalyseTitle',t.analysis);
    setText('button[onclick="zoekYoutubeVoorbeeld()"]',t.search);
    setText('button[onclick="plakYoutubeLink()"]',t.paste);
    setText('button[onclick="wisYoutubeVideo()"]',t.clear);
    setText('button[onclick="andereYoutubeVideo()"]',t.other);
  }
  function sluitPopups(){
    document.querySelectorAll('.popup').forEach(function(p){p.style.display='none';});
    var bg=document.getElementById('popupAchtergrond'); if(bg)bg.style.display='none';
    document.body.style.overflow='';
  }
  function openPopup(id){
    sluitPopups(); var popup=document.getElementById(id); var bg=document.getElementById('popupAchtergrond');
    if(bg)bg.style.display='block'; if(popup){popup.style.display='block';document.body.style.overflow='hidden';}
  }
  function taalVanKnop(btn){
    var txt=(btn.textContent||'').toLowerCase(); var onclick=btn.getAttribute('onclick')||'';
    if(onclick.indexOf("'en'")>-1||txt.indexOf('english')>-1)return 'en';
    if(onclick.indexOf("'de'")>-1||txt.indexOf('deutsch')>-1)return 'de';
    if(onclick.indexOf("'es'")>-1||txt.indexOf('español')>-1||txt.indexOf('espanol')>-1)return 'es';
    if(onclick.indexOf("'fr'")>-1||txt.indexOf('français')>-1||txt.indexOf('francais')>-1)return 'fr';
    if(onclick.indexOf("'nl'")>-1||txt.indexOf('nederlands')>-1)return 'nl';
    return '';
  }
  document.addEventListener('click',function(e){
    var taalKnop=e.target.closest('#taalPopup button');
    if(taalKnop){var lang=taalVanKnop(taalKnop);if(lang){e.preventDefault();e.stopPropagation();e.stopImmediatePropagation();localStorage.setItem('pickleballTaal',lang);sluitPopups();setTimeout(applyLang,50);return;}}
    var btn=e.target.closest('button'); if(!btn)return; var action=btn.getAttribute('onclick')||'';
    if(action==='openHandleiding()'){e.preventDefault();openPopup('handleidingPopup');}
    if(action==='openTaal()'){e.preventDefault();openPopup('taalPopup');}
    if(action==='openFeedback()'){e.preventDefault();openPopup('feedbackPopup');}
    if(action==='sluitAllePopups()'){e.preventDefault();sluitPopups();}
  },true);
  hideDebug(); applyLang();
  document.addEventListener('DOMContentLoaded',function(){hideDebug();applyLang();});
  window.addEventListener('load',function(){hideDebug();applyLang();setTimeout(applyLang,500);});
  setInterval(hideDebug,1000);
})();
</script>`;
function injectStableHead(html) {
  let next = html;
  if (!next.includes('hide-pwa-debug-box')) next = next.replace('</head>', DEBUG_HIDE_STYLE + '\n</head>');
  if (!next.includes('help-buttons-fix-v59')) next = next.replace('</body>', HELP_BUTTON_FIX + '\n</body>');
  return next;
}
async function htmlResponse(response) {
  const headers = new Headers(response.headers);
  headers.delete('content-length');
  headers.set('content-type', 'text/html; charset=utf-8');
  return new Response(injectStableHead(await response.text()), {status: response.status,statusText: response.statusText,headers});
}
self.addEventListener('install', (event) => {event.waitUntil(caches.open(CACHE_NAME));self.skipWaiting();});
self.addEventListener('activate', (event) => {event.waitUntil(caches.keys().then((keys)=>Promise.all(keys.map((key)=>key===CACHE_NAME?null:caches.delete(key)))).then(()=>self.clients.claim()).then(()=>self.clients.matchAll({type:'window',includeUncontrolled:true})).then((clients)=>Promise.all(clients.map((client)=>client.navigate(client.url)))));});
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  const isPage = event.request.mode === 'navigate' || url.pathname === '/' || url.pathname === '/index.html';
  if (isPage) {event.respondWith(fetch(event.request,{cache:'no-store'}).then((response)=>htmlResponse(response)).catch(()=>caches.match('/index.html')));return;}
  event.respondWith(fetch(event.request).catch(()=>caches.match(event.request)));
});