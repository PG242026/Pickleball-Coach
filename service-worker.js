const CACHE_NAME = 'pickleball-coach-ai-v76-opnameknop-fix';

const STABLE_STYLE = `<style id="pickleball-stable-style-v76">
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

const STABLE_SCRIPT = `<script id="pickleball-stable-script-v76">
(function(){
  function hideDebug(){var box=document.getElementById('pwaDebugPane');if(box)box.remove();document.querySelectorAll('.pwa-debug').forEach(function(el){el.remove();});}
  function closestVideoBox(sel){var el=document.querySelector(sel);return el?el.closest('.video-box'):null;}
  function fixLayout(){var ytBox=closestVideoBox('#youtubeVideoTitle');if(!ytBox)return;var actionRow=ytBox.querySelector('.knopgroep');if(actionRow)actionRow.classList.add('youtube-panel-actions');var compare=document.querySelector('.youtube-compare-panel')||document.querySelector('.in-youtube-panel')||document.querySelector('.sync-box.in-manage-videos')||document.querySelector('.sync-box');if(compare&&actionRow&&compare!==actionRow){compare.classList.add('youtube-compare-panel','in-youtube-panel');compare.classList.remove('in-manage-videos','sync-box');actionRow.insertAdjacentElement('afterend',compare);}var analysis=document.querySelector('.video-analyse-sectie');if(analysis&&compare){analysis.classList.add('youtube-analysis-panel');analysis.classList.remove('player-analysis-outside','in-manage-videos');compare.insertAdjacentElement('afterend',analysis);}}
  function closePopups(){document.querySelectorAll('.popup').forEach(function(p){p.style.display='none';});var bg=document.getElementById('popupAchtergrond');if(bg)bg.style.display='none';document.body.style.overflow='';}
  function openPopup(id){var popup=document.getElementById(id);var bg=document.getElementById('popupAchtergrond');if(!popup)return;closePopups();if(bg)bg.style.display='block';popup.style.display='block';document.body.style.overflow='hidden';if(id==='handleidingPopup'&&typeof window.renderHandleiding==='function'){try{window.renderHandleiding();}catch(e){}}}
  function applyOriginalLanguage(){if(typeof window.pasTaalToe==='function'){try{window.pasTaalToe();}catch(e){console.error(e);}}}
  function kiesTaal(lang){localStorage.setItem('pickleballTaal',lang);document.documentElement.lang=lang;fixLayout();applyOriginalLanguage();closePopups();setTimeout(function(){fixLayout();applyOriginalLanguage();},100);setTimeout(function(){fixLayout();applyOriginalLanguage();},600);}
  function taalUitKnop(btn){var txt=(btn.textContent||'').toLowerCase();var action=btn.getAttribute('onclick')||'';if(action.indexOf("'nl'")>-1||txt.indexOf('nederlands')>-1)return'nl';if(action.indexOf("'en'")>-1||txt.indexOf('english')>-1)return'en';if(action.indexOf("'de'")>-1||txt.indexOf('deutsch')>-1)return'de';if(action.indexOf("'es'")>-1||txt.indexOf('español')>-1||txt.indexOf('espanol')>-1)return'es';if(action.indexOf("'fr'")>-1||txt.indexOf('français')>-1||txt.indexOf('francais')>-1)return'fr';return'';}
  function opnameMelding(tekst){if(typeof window.toonMelding==='function'){try{window.toonMelding(tekst);return;}catch(e){}}console.log(tekst);}
  function recorderOpties(){var types=['video/webm;codecs=vp9,opus','video/webm;codecs=vp8,opus','video/webm'];if(!window.MediaRecorder)return{};for(var i=0;i<types.length;i++){try{if(MediaRecorder.isTypeSupported(types[i]))return{mimeType:types[i]};}catch(e){}}return{};}
  async function vraagCameraStream(){var pogingen=[{video:{facingMode:{ideal:'environment'}},audio:true},{video:{facingMode:{ideal:'environment'}},audio:false},{video:true,audio:true},{video:true,audio:false}];var laatsteFout=null;for(var i=0;i<pogingen.length;i++){try{return await navigator.mediaDevices.getUserMedia(pogingen[i]);}catch(e){laatsteFout=e;}}throw laatsteFout;}
  function zetCameraSchermAan(){if(typeof window.zetOpnameModusAan==='function'){try{window.zetOpnameModusAan();return;}catch(e){}}document.body.classList.add('camera-open');var balk=document.getElementById('recordingBar');if(balk)balk.style.display='block';}
  function zetCameraSchermUit(){if(typeof window.zetOpnameModusUit==='function'){try{window.zetOpnameModusUit();return;}catch(e){}}document.body.classList.remove('camera-open');var balk=document.getElementById('recordingBar');if(balk)balk.style.display='none';}
  function installeerOpnameFix(){
    window.startOpname=async function(){
      var video=document.getElementById('leerlingVideo');
      if(!video){opnameMelding('❌ Spelersvideo niet gevonden.');return;}
      if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){opnameMelding('❌ Camera werkt alleen via HTTPS of localhost.');return;}
      if(!window.MediaRecorder){opnameMelding('❌ Deze browser ondersteunt opnemen niet. Gebruik Chrome of Edge.');return;}
      try{
        try{if(typeof cameraStream!=='undefined'&&cameraStream){cameraStream.getTracks().forEach(function(t){t.stop();});cameraStream=null;}}catch(e){}
        var stream=await vraagCameraStream();
        try{cameraStream=stream;}catch(e){window.cameraStream=stream;}
        try{recordedChunks=[];huidigeVideoBlob=null;}catch(e){window.recordedChunks=[];window.huidigeVideoBlob=null;}
        video.srcObject=stream;video.muted=true;video.autoplay=true;video.playsInline=true;video.controls=false;
        if(document.fullscreenElement){try{await document.exitFullscreen();}catch(e){}}
        zetCameraSchermAan();
        try{await video.play();}catch(e){}
        var recorder=new MediaRecorder(stream,recorderOpties());
        try{mediaRecorder=recorder;}catch(e){window.mediaRecorder=recorder;}
        recorder.ondataavailable=function(e){if(e.data&&e.data.size>0){try{recordedChunks.push(e.data);}catch(_){window.recordedChunks=window.recordedChunks||[];window.recordedChunks.push(e.data);}}};
        recorder.onstop=function(){
          var chunks=[];try{chunks=recordedChunks||[];}catch(e){chunks=window.recordedChunks||[];}
          var blob=new Blob(chunks,{type:'video/webm'});
          var url=URL.createObjectURL(blob);
          try{huidigeVideoBlob=blob;huidigeVideoType='video/webm';}catch(e){window.huidigeVideoBlob=blob;window.huidigeVideoType='video/webm';}
          try{stream.getTracks().forEach(function(t){t.stop();});}catch(e){}
          try{cameraStream=null;}catch(e){window.cameraStream=null;}
          video.srcObject=null;video.src=url;video.muted=false;video.controls=true;video.load();
          var reset=function(){try{video.pause();video.currentTime=0;}catch(e){}};
          video.addEventListener('loadedmetadata',reset,{once:true});reset();
          zetCameraSchermUit();
          opnameMelding('✅ Opname klaar');
        };
        recorder.start();
        opnameMelding('🎥 Opname gestart');
      }catch(e){
        console.error('Opname starten mislukt',e);
        try{if(typeof cameraStream!=='undefined'&&cameraStream){cameraStream.getTracks().forEach(function(t){t.stop();});cameraStream=null;}}catch(_){}
        zetCameraSchermUit();
        opnameMelding('❌ Camera niet beschikbaar of toestemming geweigerd.');
      }
    };
    window.stopOpname=function(){
      var video=document.getElementById('leerlingVideo');
      try{if(video){video.controls=true;video.pause();}}catch(e){}
      var recorder=null;try{recorder=mediaRecorder;}catch(e){recorder=window.mediaRecorder;}
      if(recorder&&recorder.state!=='inactive'){recorder.stop();return;}
      try{if(typeof cameraStream!=='undefined'&&cameraStream){cameraStream.getTracks().forEach(function(t){t.stop();});cameraStream=null;}}catch(e){}
      zetCameraSchermUit();
      opnameMelding('ℹ️ Er loopt geen opname.');
    };
  }
  window.openHandleiding=function(){openPopup('handleidingPopup');};
  window.openTaal=function(){openPopup('taalPopup');};
  window.openFeedback=function(){openPopup('feedbackPopup');};
  window.sluitAllePopups=closePopups;
  window.setTaal=function(lang){kiesTaal(lang);};
  document.addEventListener('click',function(e){var taalBtn=e.target.closest('#taalPopup button');if(taalBtn){var lang=taalUitKnop(taalBtn);if(lang){e.preventDefault();e.stopPropagation();e.stopImmediatePropagation();kiesTaal(lang);return;}}var btn=e.target.closest('button');if(!btn)return;var action=btn.getAttribute('onclick')||'';if(action==='openHandleiding()'){e.preventDefault();e.stopPropagation();openPopup('handleidingPopup');}if(action==='openTaal()'){e.preventDefault();e.stopPropagation();openPopup('taalPopup');}if(action==='openFeedback()'){e.preventDefault();e.stopPropagation();openPopup('feedbackPopup');}if(action==='sluitAllePopups()'){e.preventDefault();e.stopPropagation();closePopups();}},true);
  hideDebug();fixLayout();installeerOpnameFix();applyOriginalLanguage();document.addEventListener('DOMContentLoaded',function(){hideDebug();fixLayout();installeerOpnameFix();applyOriginalLanguage();});window.addEventListener('load',function(){hideDebug();fixLayout();installeerOpnameFix();applyOriginalLanguage();setTimeout(function(){fixLayout();installeerOpnameFix();applyOriginalLanguage();},500);setTimeout(function(){fixLayout();installeerOpnameFix();applyOriginalLanguage();},1600);});setInterval(function(){hideDebug();fixLayout();installeerOpnameFix();},3000);
})();
</script>`;

function injectStableHead(html){let next=html;if(!next.includes('pickleball-stable-style-v76'))next=next.replace('</head>',STABLE_STYLE+'\n</head>');if(!next.includes('pickleball-stable-script-v76'))next=next.replace('</body>',STABLE_SCRIPT+'\n</body>');return next;}
async function htmlResponse(response){const headers=new Headers(response.headers);headers.delete('content-length');headers.set('content-type','text/html; charset=utf-8');headers.set('cache-control','no-store, no-cache, must-revalidate');return new Response(injectStableHead(await response.text()),{status:response.status,statusText:response.statusText,headers});}
self.addEventListener('install',(event)=>{event.waitUntil(caches.open(CACHE_NAME));self.skipWaiting();});
self.addEventListener('activate',(event)=>{event.waitUntil(caches.keys().then((keys)=>Promise.all(keys.map((key)=>key===CACHE_NAME?null:caches.delete(key)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',(event)=>{if(event.request.method!=='GET')return;const url=new URL(event.request.url);const isPage=event.request.mode==='navigate'||url.pathname==='/'||url.pathname==='/index.html';if(isPage){event.respondWith(fetch(event.request,{cache:'no-store'}).then((response)=>htmlResponse(response)).catch(()=>caches.match('/index.html')));return;}event.respondWith(fetch(event.request).catch(()=>caches.match(event.request)));});