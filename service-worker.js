const CACHE_NAME = 'pickleball-coach-ai-v71-hulpknoppen-klikbaar';

const STABLE_STYLE = `<style id="pickleball-stable-style-v71">
.pwa-debug,#pwaDebugPane{display:none!important;visibility:hidden!important;opacity:0!important;pointer-events:none!important}
.video-box{min-width:0!important}.video-box .knopgroep{max-width:100%!important}
.youtube-panel-actions{display:flex!important;flex-wrap:wrap!important;gap:10px!important;align-items:flex-start!important;margin:10px 0 0!important;width:100%!important;box-sizing:border-box!important}
.youtube-panel-actions button{margin:0!important;min-height:46px!important;padding:12px 18px!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;white-space:normal!important;line-height:1.2!important;max-width:100%!important}
.youtube-compare-panel{display:block!important;width:100%!important;box-sizing:border-box!important;clear:both!important;margin:14px 0 0!important;padding:14px 0 0!important;background:transparent!important;border:0!important;border-top:1px solid #b9d2c3!important;border-radius:0!important}
.youtube-compare-panel .sync-accordion,.youtube-analysis-panel .sync-accordion{background:#f7fcf9!important;border:1px solid #d2e7db!important;border-radius:12px!important;box-sizing:border-box!important;width:100%!important}
.youtube-analysis-panel{display:block!important;width:100%!important;box-sizing:border-box!important;clear:both!important;margin:10px 0 0!important;padding:0!important;background:transparent!important;border:0!important;border-radius:0!important}
.onderaan{display:flex!important;flex-wrap:wrap!important;gap:14px!important;justify-content:center!important;align-items:center!important;text-align:center!important}
.onderaan h2{display:block!important;flex:0 0 100%!important;width:100%!important;margin:0 0 18px!important}
.onderaan button{margin:6px!important;min-width:150px!important;min-height:46px!important;padding:12px 18px!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;white-space:nowrap!important;box-sizing:border-box!important}
@media(max-width:520px){.onderaan button{min-width:145px!important;flex:0 1 calc(50% - 14px)!important;padding:12px 10px!important}.onderaan button:last-child{flex-basis:145px!important}}
</style>`;

const STABLE_SCRIPT = `<script id="pickleball-stable-script-v71">
(function(){
  function hideDebug(){
    var box=document.getElementById('pwaDebugPane');
    if(box) box.remove();
    document.querySelectorAll('.pwa-debug').forEach(function(el){el.remove();});
  }
  function closestVideoBox(sel){
    var el=document.querySelector(sel);
    return el ? el.closest('.video-box') : null;
  }
  function fixLayout(){
    var ytBox=closestVideoBox('#youtubeVideoTitle');
    if(!ytBox) return;
    var actionRow=ytBox.querySelector('.knopgroep');
    if(actionRow) actionRow.classList.add('youtube-panel-actions');
    var compare=document.querySelector('.youtube-compare-panel') || document.querySelector('.in-youtube-panel') || document.querySelector('.sync-box.in-manage-videos') || document.querySelector('.sync-box');
    if(compare && actionRow && compare!==actionRow){
      compare.classList.add('youtube-compare-panel','in-youtube-panel');
      compare.classList.remove('in-manage-videos','sync-box');
      actionRow.insertAdjacentElement('afterend',compare);
    }
    var analysis=document.querySelector('.video-analyse-sectie');
    if(analysis && compare){
      analysis.classList.add('youtube-analysis-panel');
      analysis.classList.remove('player-analysis-outside','in-manage-videos');
      compare.insertAdjacentElement('afterend',analysis);
    }
  }
  function closePopups(){
    document.querySelectorAll('.popup').forEach(function(p){p.style.display='none';});
    var bg=document.getElementById('popupAchtergrond');
    if(bg) bg.style.display='none';
    document.body.style.overflow='';
  }
  function openPopup(id){
    var popup=document.getElementById(id);
    var bg=document.getElementById('popupAchtergrond');
    if(!popup) return;
    closePopups();
    if(bg) bg.style.display='block';
    popup.style.display='block';
    document.body.style.overflow='hidden';
    if(id==='handleidingPopup' && typeof window.renderHandleiding==='function'){
      try{window.renderHandleiding();}catch(e){}
    }
  }
  function applyOriginalLanguage(){
    if(typeof window.pasTaalToe==='function'){
      try{window.pasTaalToe();}catch(e){}
    }
  }
  window.openHandleiding=function(){openPopup('handleidingPopup');};
  window.openTaal=function(){openPopup('taalPopup');};
  window.openFeedback=function(){openPopup('feedbackPopup');};
  window.sluitAllePopups=closePopups;
  document.addEventListener('click',function(e){
    var btn=e.target.closest('button');
    if(!btn) return;
    var action=btn.getAttribute('onclick')||'';
    if(action==='openHandleiding()'){e.preventDefault();e.stopPropagation();openPopup('handleidingPopup');}
    if(action==='openTaal()'){e.preventDefault();e.stopPropagation();openPopup('taalPopup');}
    if(action==='openFeedback()'){e.preventDefault();e.stopPropagation();openPopup('feedbackPopup');}
    if(action==='sluitAllePopups()'){e.preventDefault();e.stopPropagation();closePopups();}
  },true);
  hideDebug();
  fixLayout();
  applyOriginalLanguage();
  document.addEventListener('DOMContentLoaded',function(){hideDebug();fixLayout();applyOriginalLanguage();});
  window.addEventListener('load',function(){
    hideDebug();
    fixLayout();
    applyOriginalLanguage();
    setTimeout(function(){fixLayout();applyOriginalLanguage();},500);
    setTimeout(function(){fixLayout();applyOriginalLanguage();},1600);
  });
  setInterval(function(){hideDebug();fixLayout();},3000);
})();
</script>`;

function injectStableHead(html){
  let next=html;
  if(!next.includes('pickleball-stable-style-v71')) next=next.replace('</head>',STABLE_STYLE+'\n</head>');
  if(!next.includes('pickleball-stable-script-v71')) next=next.replace('</body>',STABLE_SCRIPT+'\n</body>');
  return next;
}
async function htmlResponse(response){
  const headers=new Headers(response.headers);
  headers.delete('content-length');
  headers.set('content-type','text/html; charset=utf-8');
  headers.set('cache-control','no-store, no-cache, must-revalidate');
  return new Response(injectStableHead(await response.text()),{status:response.status,statusText:response.statusText,headers});
}
self.addEventListener('install',(event)=>{event.waitUntil(caches.open(CACHE_NAME));self.skipWaiting();});
self.addEventListener('activate',(event)=>{event.waitUntil(caches.keys().then((keys)=>Promise.all(keys.map((key)=>key===CACHE_NAME?null:caches.delete(key)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',(event)=>{
  if(event.request.method!=='GET') return;
  const url=new URL(event.request.url);
  const isPage=event.request.mode==='navigate'||url.pathname==='/'||url.pathname==='/index.html';
  if(isPage){event.respondWith(fetch(event.request,{cache:'no-store'}).then((response)=>htmlResponse(response)).catch(()=>caches.match('/index.html')));return;}
  event.respondWith(fetch(event.request).catch(()=>caches.match(event.request)));
});