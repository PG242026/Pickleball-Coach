const CACHE_NAME = 'pickleball-coach-ai-v61-volledige-taal-rechterkolom';
const DEBUG_HIDE_STYLE = `<style id="hide-pwa-debug-box">
.pwa-debug,#pwaDebugPane{display:none!important;visibility:hidden!important;opacity:0!important;pointer-events:none!important}
.youtube-panel-actions{display:flex!important;flex-wrap:wrap!important;gap:10px!important;align-items:flex-start!important;margin:10px 0 0!important;width:100%!important;box-sizing:border-box!important}
.youtube-panel-actions button{margin:0!important;min-height:46px!important;padding:12px 18px!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;white-space:normal!important;line-height:1.2!important;max-width:100%!important}
.youtube-compare-panel{display:block!important;width:100%!important;box-sizing:border-box!important;clear:both!important;margin:14px 0 0!important;padding:14px 0 0!important;background:transparent!important;border:0!important;border-top:1px solid #b9d2c3!important;border-radius:0!important}
.youtube-compare-panel .sync-accordion,.youtube-analysis-panel .sync-accordion{background:#f7fcf9!important;border:1px solid #d2e7db!important;border-radius:12px!important;box-sizing:border-box!important;width:100%!important}
.youtube-analysis-panel{display:block!important;width:100%!important;box-sizing:border-box!important;clear:both!important;margin:10px 0 0!important;padding:0!important;background:transparent!important;border:0!important;border-radius:0!important}
.video-box{min-width:0!important}.video-box .knopgroep{max-width:100%!important}
.onderaan div{display:flex!important;flex-wrap:wrap!important;gap:10px!important;justify-content:center!important}.onderaan button{margin:0!important}
</style>`;
const HELP_BUTTON_FIX = `<script id="help-buttons-fix-v61">
(function(){
  var D={
    nl:{app:'Pickleball Coach',clearAll:'🗑 Wis Alles',players:'👥 Spelers beheren',name:'Naam speler',choosePlayer:'Kies speler',level:'Niveau',chooseLevel:'Kies niveau',tech:'Techniek / Oefening',techPh:'Typ hier zelf de oefening of techniek',done:'✅ Klaar',help:'Hulp en contact',guide:'📘 Handleiding',language:'🌍 Language',feedback:'💬 Feedback',side:'📺 Side-by-side Analyse',player:'🎥 Spelers video',yt:'📺 YouTube filmpje',record:'🎥 Nieuwe opname maken',stop:'■ Stop Opname',clearPlayer:'🗑 Wis spelersvideo',manage:'📁 Spelers video’s beheren',compare:'🎛 Vergelijk & Afspelen',analysis:'🎥 Analyse',search:'🔍 Zoek YouTube voorbeeldvideo',paste:'📎 Plak YouTube link',clear:'🗑 Wis de video',other:'🔄 Zoek een ander',addPlayer:'➕ Speler toevoegen',remove:'❌ Verwijderen'},
    en:{app:'Pickleball Coach',clearAll:'🗑 Clear All',players:'👥 Manage players',name:'Player name',choosePlayer:'Choose player',level:'Level',chooseLevel:'Choose level',tech:'Technique / Exercise',techPh:'Type the exercise or technique here',done:'✅ Done',help:'Help and contact',guide:'📘 Guide',language:'🌍 Language',feedback:'💬 Feedback',side:'📺 Side-by-side Analysis',player:'🎥 Player video',yt:'📺 YouTube video',record:'🎥 New recording',stop:'■ Stop recording',clearPlayer:'🗑 Clear player video',manage:'📁 Manage player videos',compare:'🎛 Compare & Play',analysis:'🎥 Analysis',search:'🔍 Search YouTube example video',paste:'📎 Paste YouTube link',clear:'🗑 Clear video',other:'🔄 Search another',addPlayer:'➕ Add player',remove:'❌ Remove'},
    de:{app:'Pickleball Coach',clearAll:'🗑 Alles löschen',players:'👥 Spieler verwalten',name:'Spielername',choosePlayer:'Spieler wählen',level:'Niveau',chooseLevel:'Niveau wählen',tech:'Technik / Übung',techPh:'Übung oder Technik hier eingeben',done:'✅ Fertig',help:'Hilfe und Kontakt',guide:'📘 Anleitung',language:'🌍 Sprache',feedback:'💬 Feedback',side:'📺 Side-by-side Analyse',player:'🎥 Spielervideo',yt:'📺 YouTube-Video',record:'🎥 Neue Aufnahme',stop:'■ Aufnahme stoppen',clearPlayer:'🗑 Spielervideo löschen',manage:'📁 Spielervideos verwalten',compare:'🎛 Vergleichen & Abspielen',analysis:'🎥 Analyse',search:'🔍 YouTube-Beispielvideo suchen',paste:'📎 YouTube-Link einfügen',clear:'🗑 Video löschen',other:'🔄 Anderes suchen',addPlayer:'➕ Spieler hinzufügen',remove:'❌ Entfernen'},
    es:{app:'Pickleball Coach',clearAll:'🗑 Borrar todo',players:'👥 Gestionar jugadores',name:'Nombre del jugador',choosePlayer:'Elegir jugador',level:'Nivel',chooseLevel:'Elegir nivel',tech:'Técnica / Ejercicio',techPh:'Escribe aquí el ejercicio o la técnica',done:'✅ Listo',help:'Ayuda y contacto',guide:'📘 Guía',language:'🌍 Idioma',feedback:'💬 Comentarios',side:'📺 Análisis lado a lado',player:'🎥 Video del jugador',yt:'📺 Video de YouTube',record:'🎥 Nueva grabación',stop:'■ Detener grabación',clearPlayer:'🗑 Borrar video del jugador',manage:'📁 Gestionar vídeos del jugador',compare:'🎛 Comparar y reproducir',analysis:'🎥 Análisis',search:'🔍 Buscar video de ejemplo en YouTube',paste:'📎 Pegar enlace de YouTube',clear:'🗑 Borrar video',other:'🔄 Buscar otro',addPlayer:'➕ Añadir jugador',remove:'❌ Eliminar'},
    fr:{app:'Pickleball Coach',clearAll:'🗑 Tout effacer',players:'👥 Gérer les joueurs',name:'Nom du joueur',choosePlayer:'Choisir un joueur',level:'Niveau',chooseLevel:'Choisir un niveau',tech:'Technique / Exercice',techPh:'Tapez ici l’exercice ou la technique',done:'✅ Terminé',help:'Aide et contact',guide:'📘 Guide',language:'🌍 Langue',feedback:'💬 Feedback',side:'📺 Analyse côte à côte',player:'🎥 Vidéo du joueur',yt:'📺 Vidéo YouTube',record:'🎥 Nouvel enregistrement',stop:'■ Arrêter l’enregistrement',clearPlayer:'🗑 Effacer la vidéo du joueur',manage:'📁 Gérer les vidéos du joueur',compare:'🎛 Comparer et lire',analysis:'🎥 Analyse',search:'🔍 Rechercher une vidéo YouTube',paste:'📎 Coller le lien YouTube',clear:'🗑 Effacer la vidéo',other:'🔄 Chercher une autre',addPlayer:'➕ Ajouter un joueur',remove:'❌ Supprimer'}
  };
  function lang(){return localStorage.getItem('pickleballTaal')||new URL(location.href).searchParams.get('taal')||'nl';}
  function hideDebug(){var box=document.getElementById('pwaDebugPane');if(box){box.style.display='none';box.style.visibility='hidden';box.remove();}document.querySelectorAll('.pwa-debug').forEach(function(el){el.style.display='none';el.remove();});}
  function setText(sel,txt){var el=document.querySelector(sel);if(el)el.textContent=txt;}
  function setAccordionText(el,txt){if(!el)return;var t=el.querySelector('.accordion-title')||el;t.textContent=txt;}
  function closestVideoBox(sel){var el=document.querySelector(sel);return el?el.closest('.video-box'):null;}
  function fixLayout(){var ytBox=closestVideoBox('#youtubeVideoTitle');if(!ytBox)return;var actionRow=ytBox.querySelector('.knopgroep');if(actionRow)actionRow.classList.add('youtube-panel-actions');var compare=document.querySelector('.youtube-compare-panel')||document.querySelector('.in-youtube-panel')||document.querySelector('.sync-box.in-manage-videos')||document.querySelector('.sync-box');if(compare&&actionRow&&compare!==actionRow){compare.classList.add('youtube-compare-panel','in-youtube-panel');compare.classList.remove('in-manage-videos','sync-box');actionRow.insertAdjacentElement('afterend',compare);}var analysis=document.querySelector('.video-analyse-sectie');if(analysis&&compare){analysis.classList.add('youtube-analysis-panel');analysis.classList.remove('player-analysis-outside','in-manage-videos');compare.insertAdjacentElement('afterend',analysis);var d=analysis.querySelector('details');if(d)d.removeAttribute('open');}}
  function labelNearInput(input,txt){if(!input)return;var prev=input.previousElementSibling;if(prev&&/label/i.test(prev.tagName)){prev.textContent=txt;return;}var p=input.parentElement;if(!p)return;var label=p.querySelector('label');if(label)label.textContent=txt;}
  function translateLoose(t){
    Array.from(document.querySelectorAll('h1')).forEach(function(el){if(/Pickleball Coach/i.test(el.textContent))el.textContent=t.app;});
    Array.from(document.querySelectorAll('button')).forEach(function(b){var raw=(b.textContent||'').trim();var s=raw.replace(/[🎥📁📺🔍📎🗑🔄🎛👥✅➕❌■]/g,'').trim().toLowerCase();
      if(/wis alles|clear all|borrar todo|alles löschen|tout effacer/.test(s))b.textContent=t.clearAll;
      else if(/klaar|done|listo|fertig|terminé/.test(s))b.textContent=t.done;
      else if(/start opname|nieuwe opname|new recording|nueva grabación|nouvel enregistrement|neue aufnahme/.test(s))b.textContent=t.record;
      else if(/stop opname|stop recording|detener grabación|arrêter l’enregistrement|aufnahme stoppen/.test(s))b.textContent=t.stop;
      else if(/wis spelersvideo|clear player video|borrar video del jugador|effacer la vidéo du joueur|spielervideo löschen/.test(s))b.textContent=t.clearPlayer;
      else if(/speler toevoegen|add player|añadir jugador|ajouter un joueur|spieler hinzufügen/.test(s))b.textContent=t.addPlayer;
      else if(/verwijderen|remove|eliminar|supprimer|entfernen/.test(s))b.textContent=t.remove;
      else if(/handleiding|guide|guía|anleitung/.test(s))b.textContent=t.guide;
      else if(/language|idioma|langue|sprache/.test(s))b.textContent=t.language;
      else if(/feedback|comentarios/.test(s))b.textContent=t.feedback;
    });
    var selects=document.querySelectorAll('select');
    if(selects[0]&&selects[0].options[0])selects[0].options[0].textContent=t.choosePlayer;
    if(selects[1]&&selects[1].options[0])selects[1].options[0].textContent=t.chooseLevel;
    var inputs=document.querySelectorAll('input[type="text"],input:not([type])');
    if(inputs[0]){labelNearInput(inputs[0],t.name);if(/kies|choose|choisir|elegir|wählen/i.test(inputs[0].placeholder||''))inputs[0].placeholder=t.choosePlayer;}
    if(inputs[1]){labelNearInput(inputs[1],t.tech);inputs[1].placeholder=t.techPh;}
    Array.from(document.querySelectorAll('label, .form-label, p, strong')).forEach(function(el){var s=(el.textContent||'').trim().toLowerCase();
      if(/naam speler|player name|nombre del jugador|nom du joueur|spielername/.test(s))el.textContent=t.name;
      else if(/^niveau$|^level$|^nivel$/.test(s))el.textContent=t.level;
      else if(/techniek|technique|técnica|exercice|ejercicio|übung/.test(s))el.textContent=t.tech;
    });
  }
  function applyLang(){fixLayout();var l=lang();var t=D[l]||D.nl;document.documentElement.lang=l;setText('.onderaan h2',t.help);setText('button[onclick="openHandleiding()"]',t.guide);setText('button[onclick="openTaal()"]',t.language);setText('button[onclick="openFeedback()"]',t.feedback);var h2=document.querySelector('.card h2');if(h2&&/Side|side|Analyse|Analysis|Análisis|côte|lado/i.test(h2.textContent))h2.textContent=t.side;setText('#playerVideoTitle',t.player);setText('#youtubeVideoTitle',t.yt);setText('button[onclick="startOpname()"]',t.record);setAccordionText(document.querySelector('#spelersAccordion summary')||document.querySelector('#playersAccordion summary'),t.players);setAccordionText(document.querySelector('#manageVideosAccordion summary'),t.manage);setAccordionText(document.querySelector('.youtube-compare-panel .sync-accordion summary')||document.querySelector('.youtube-compare-panel summary'),t.compare);setText('#videoAnalyseTitle',t.analysis);setText('button[onclick="zoekYoutubeVoorbeeld()"]',t.search);setText('button[onclick="plakYoutubeLink()"]',t.paste);setText('button[onclick="wisYoutubeVideo()"]',t.clear);setText('button[onclick="andereYoutubeVideo()"]',t.other);translateLoose(t);}
  function sluitPopups(){document.querySelectorAll('.popup').forEach(function(p){p.style.display='none';});var bg=document.getElementById('popupAchtergrond');if(bg)bg.style.display='none';document.body.style.overflow='';}
  function openPopup(id){sluitPopups();var popup=document.getElementById(id);var bg=document.getElementById('popupAchtergrond');if(bg)bg.style.display='block';if(popup){popup.style.display='block';document.body.style.overflow='hidden';}}
  function taalVanKnop(btn){var txt=(btn.textContent||'').toLowerCase();var onclick=btn.getAttribute('onclick')||'';if(onclick.indexOf("'en'")>-1||txt.indexOf('english')>-1)return'en';if(onclick.indexOf("'de'")>-1||txt.indexOf('deutsch')>-1)return'de';if(onclick.indexOf("'es'")>-1||txt.indexOf('español')>-1||txt.indexOf('espanol')>-1)return'es';if(onclick.indexOf("'fr'")>-1||txt.indexOf('français')>-1||txt.indexOf('francais')>-1)return'fr';if(onclick.indexOf("'nl'")>-1||txt.indexOf('nederlands')>-1)return'nl';return'';}
  document.addEventListener('click',function(e){var taalKnop=e.target.closest('#taalPopup button');if(taalKnop){var l=taalVanKnop(taalKnop);if(l){e.preventDefault();e.stopPropagation();e.stopImmediatePropagation();localStorage.setItem('pickleballTaal',l);sluitPopups();setTimeout(applyLang,50);setTimeout(applyLang,300);setTimeout(applyLang,900);return;}}var btn=e.target.closest('button');if(!btn)return;var action=btn.getAttribute('onclick')||'';if(action==='openHandleiding()'){e.preventDefault();openPopup('handleidingPopup');}if(action==='openTaal()'){e.preventDefault();openPopup('taalPopup');}if(action==='openFeedback()'){e.preventDefault();openPopup('feedbackPopup');}if(action==='sluitAllePopups()'){e.preventDefault();sluitPopups();}},true);
  hideDebug();fixLayout();applyLang();document.addEventListener('DOMContentLoaded',function(){hideDebug();fixLayout();applyLang();});window.addEventListener('load',function(){hideDebug();fixLayout();applyLang();setTimeout(function(){fixLayout();applyLang();},500);setTimeout(function(){fixLayout();applyLang();},1500);});setInterval(function(){hideDebug();fixLayout();applyLang();},1500);
})();
</script>`;
function injectStableHead(html) {
  let next = html;
  if (!next.includes('hide-pwa-debug-box')) next = next.replace('</head>', DEBUG_HIDE_STYLE + '\n</head>');
  if (!next.includes('help-buttons-fix-v61')) next = next.replace('</body>', HELP_BUTTON_FIX + '\n</body>');
  return next;
}
async function htmlResponse(response) {
  const headers = new Headers(response.headers);
  headers.delete('content-length');
  headers.set('content-type', 'text/html; charset=utf-8');
  headers.set('cache-control', 'no-store, no-cache, must-revalidate');
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