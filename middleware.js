const LAYOUT_STYLE = `<style id="coach-layout-polish-style">
.brand-title{display:inline-flex;align-items:center;justify-content:center;gap:10px;white-space:normal}.brand-title-logo{width:42px;height:42px;display:inline-flex;align-items:center;justify-content:center;flex:0 0 auto;vertical-align:middle}.brand-title-logo svg{width:100%;height:100%;display:block}
.accordion-chevron{flex:0 0 48px!important;width:48px!important;height:48px!important;margin-left:16px!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;color:transparent!important;font-size:0!important;line-height:1!important;position:relative!important;transform:rotate(0deg);transform-origin:center;transition:transform .25s ease}.accordion-chevron::before{content:"";width:19px;height:19px;border-right:4px solid #1f5f3b;border-bottom:4px solid #1f5f3b;border-radius:2px;transform:rotate(45deg) translate(-2px,-2px);box-sizing:border-box}details[open]>.accordion-header .accordion-chevron{transform:rotate(180deg)}
.container>.card:first-of-type{padding:0!important;border-radius:10px!important;margin-bottom:14px!important}.container>.card:first-of-type .beheer-summary{min-height:46px!important;margin:0!important;padding:4px 14px!important;font-size:21px!important;line-height:1.2!important}.container>.card:first-of-type details>div{padding:10px 14px 12px!important;margin-top:0!important}.container>.card:first-of-type input{padding:9px 11px!important;margin-top:5px!important;margin-bottom:8px!important;font-size:16px!important}.container>.card:first-of-type button{min-height:38px!important;padding:8px 12px!important;font-size:15px!important}
.premium-feature.trainer-club-feature[open]{overflow:visible!important}.premium-feature.trainer-club-feature[open] .premium-body{max-height:none!important;overflow:visible!important;display:grid;gap:12px}.video-analysis-sectie,.video-analyse-sectie{margin-top:12px!important}.video-analysis-accordion{border-color:#d2e7db!important}.video-analysis-accordion:not([open]) .video-analysis-paneel{display:none!important}.video-analysis-paneel{gap:12px!important;overflow:visible!important}.player-video-separator{margin:24px 0 12px!important;border:0!important;border-top:1px solid #b7c7be!important;height:0!important}
.pro-later-badge{display:inline-flex!important;align-items:center!important;justify-content:center!important;white-space:nowrap!important;margin-left:0!important;margin-right:0!important;padding:2px 7px!important;border-radius:999px!important;background:#f3ecff!important;color:#6e2bd8!important;font-size:9px!important;font-weight:800!important;letter-spacing:.04em!important;line-height:1.2!important;text-transform:uppercase!important}.youtube-sync-area{position:relative;margin-top:24px!important;padding-top:12px!important;border:0!important;border-radius:0!important;background:transparent!important}.youtube-sync-area::before{content:"";position:absolute;top:0;left:0;right:0;height:1px;background:#b7c7be}.youtube-sync-area .sync-accordion{border:1px solid #d2e7db!important;border-radius:12px!important;background:#f7fcf9!important;overflow:hidden!important}
#manageVideosAccordion>.accordion-header,#manageVideosAccordion>summary,.youtube-sync-area .sync-accordion>.accordion-header,.youtube-sync-area .sync-accordion>summary{display:grid!important;grid-template-columns:minmax(0,1fr) auto 42px!important;column-gap:10px!important;align-items:center!important;min-height:76px!important;padding:18px 20px!important;box-sizing:border-box!important}#manageVideosTitle,.youtube-sync-area .accordion-title{font-family:inherit!important;font-size:20px!important;font-weight:700!important;line-height:1.2!important;color:#1f5f3b!important;letter-spacing:0!important;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important;margin:0!important;padding:0!important;min-width:0!important}.premium-feature.trainer-club-feature summary .pro-later-badge,.sync-accordion summary .pro-later-badge{justify-self:end!important;align-self:center!important}
.knopgroep{gap:12px!important;align-items:center!important}.knopgroep button{margin:0!important;min-height:44px!important;border-radius:9px!important;white-space:nowrap!important}.player-box .knopgroep.hidden-during-recording{display:flex!important;gap:12px!important;align-items:center!important;flex-wrap:wrap!important;overflow:visible!important}.player-box .knopgroep.hidden-during-recording .help-icon{position:static!important;transform:none!important;flex:0 0 42px!important;width:42px!important;height:42px!important;min-width:42px!important;min-height:42px!important;padding:0!important;margin:0!important;border-radius:50%!important;background:#fff!important;color:#1f5f3b!important;border:2px solid #1f5f3b!important;line-height:1!important;box-sizing:border-box!important}
.analyse-controls,.sessie-sectie{display:flex!important;flex-direction:column!important;align-items:flex-start!important;gap:10px!important;width:100%!important;max-width:100%!important;overflow:visible!important}.analysis-aligned-button,.session-aligned-button{width:auto!important;max-width:calc(100vw - 74px)!important;min-height:44px!important;display:inline-flex!important;align-items:center!important;justify-content:flex-start!important;box-sizing:border-box!important;margin:0!important;padding-left:18px!important;padding-right:18px!important;white-space:nowrap!important;text-align:left!important;flex:0 0 auto!important}.analysis-help-row,.session-help-row{display:inline-flex!important;align-items:center!important;justify-content:flex-start!important;gap:8px!important;width:auto!important;max-width:100%!important;box-sizing:border-box!important;overflow:visible!important;flex-wrap:nowrap!important}.analysis-help-row .help-icon,.session-help-row .help-icon{position:static!important;transform:none!important;flex:0 0 30px!important;width:30px!important;height:30px!important;min-width:30px!important;min-height:30px!important;margin:0!important;padding:0!important;border-radius:50%!important;box-sizing:border-box!important;background:#fff!important;color:#1f5f3b!important;border:2px solid #1f5f3b!important}.session-action-stack{display:flex!important;flex-direction:column!important;align-items:flex-start!important;gap:10px!important;width:100%!important}
.player-scrub-panel{display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:10px;margin:10px 0 4px;padding:10px 12px;border-radius:12px;background:#eef7f1;color:#1f5f3b;font-weight:bold}.player-scrub-time{font-variant-numeric:tabular-nums;font-size:15px;min-width:44px;text-align:center}.player-scrub-slider{width:100%;height:28px;margin:0!important;padding:0!important;accent-color:#1f5f3b;cursor:pointer}.melding{top:18px!important;left:auto!important;right:156px!important;transform:none!important;max-width:min(360px,calc(100vw - 32px))!important;text-align:center!important;box-sizing:border-box!important}
@media(max-width:760px){.melding{top:12px!important;left:16px!important;right:16px!important;max-width:none!important}}@media(max-width:700px){.brand-title{gap:7px}.brand-title-logo{width:34px;height:34px}.player-video-separator{margin:14px 0 12px!important}.youtube-sync-area{margin-top:14px!important}#manageVideosAccordion>.accordion-header,#manageVideosAccordion>summary,.youtube-sync-area .sync-accordion>.accordion-header,.youtube-sync-area .sync-accordion>summary{min-height:66px!important;padding:15px 16px!important;grid-template-columns:minmax(0,1fr) auto 36px!important}#manageVideosTitle,.youtube-sync-area .accordion-title{font-size:18px!important}.pro-later-badge{font-size:8px!important;padding:2px 6px!important}.player-scrub-panel{grid-template-columns:1fr;gap:6px}}
</style>`;

const LAYOUT_SCRIPT = `<script id="coach-layout-polish-script">
(function(){
  function text(el){ return (el && el.textContent || '').replace(/\s+/g,' ').trim(); }
  function findButton(label){ return Array.prototype.find.call(document.querySelectorAll('button'), function(button){ return text(button).indexOf(label) !== -1; }); }
  function isHelp(el){ return !!(el && el.classList && el.classList.contains('help-icon') && text(el)==='?'); }
  function wrapWithHelp(button, help, rowClass){
    if(!button || !help) return null;
    var row=button.closest('.analysis-help-row,.session-help-row');
    if(!row){ row=document.createElement('div'); row.className=rowClass; button.parentNode.insertBefore(row, button); row.appendChild(button); }
    if(help.parentElement!==row) row.appendChild(help);
    help.dataset.boundToButton='1';
    return row;
  }
  function ensureAnalyseHelp(){
    var analyse=findButton('Analyseer met AI');
    if(!analyse) return;
    var help=document.getElementById('analyseAiHelpKnop');
    if(!help){
      help=document.createElement('button');
      help.type='button';
      help.id='analyseAiHelpKnop';
      help.className='help-icon';
      help.textContent='?';
      help.setAttribute('aria-label','Help Analyseer met AI');
      help.setAttribute('data-help','Analyseer met AI maakt automatisch momenten aan op basis van AI-tijdcodes.');
    }
    var row=wrapWithHelp(analyse, help, 'analysis-help-row');
    var ar=analyse.getBoundingClientRect();
    var sr=(document.getElementById('skeletonTrackingKnop') || findButton('Start Skeleton Tracking') || analyse).getBoundingClientRect();
    Array.prototype.slice.call(document.querySelectorAll('.help-icon')).forEach(function(other){
      if(other===help || !isHelp(other) || other.closest('.analysis-help-row,.session-help-row')) return;
      var r=other.getBoundingClientRect();
      if(r.top>=ar.bottom-4 && r.top<=sr.top+8 && r.left<=ar.left+60){ other.style.display='none'; other.dataset.hiddenAnalyseOrphan='1'; }
    });
  }
  function ensureSkeletonHelp(){
    var skeleton=document.getElementById('skeletonTrackingKnop') || findButton('Start Skeleton Tracking');
    if(!skeleton) return;
    var help=document.getElementById('skeletonTrackingHelpKnop');
    if(!help){
      help=document.createElement('button');
      help.type='button';
      help.id='skeletonTrackingHelpKnop';
      help.className='help-icon';
      help.textContent='?';
      help.setAttribute('aria-label','Help Start Skeleton Tracking');
      help.setAttribute('data-help','Skeleton Tracking tekent een eenvoudig skelet over de spelersvideo.');
    }
    var row=wrapWithHelp(skeleton, help, 'analysis-help-row');
    Array.prototype.slice.call(row.querySelectorAll('.help-icon')).forEach(function(other){ if(other!==help) other.remove(); });
  }
  function setTitle(selector, value){ var el=document.querySelector(selector); if(el) el.innerHTML=value; }
  function addBadge(summary){ if(!summary || summary.querySelector('.pro-later-badge')) return; var badge=document.createElement('span'); badge.className='pro-later-badge'; badge.textContent='PRO later'; var chevron=summary.querySelector('.accordion-chevron'); if(chevron) summary.insertBefore(badge, chevron); else summary.appendChild(badge); }
  function applyProLayout(){
    setTitle('#manageVideosTitle','📁 Spelers video’s beheren');
    setTitle('#videoAnalyseTitle','🎥 Analyse');
    var manage=document.getElementById('manageVideosAccordion'); if(manage) addBadge(manage.querySelector('summary'));
    var analysis=document.querySelector('.video-analysis-accordion'); if(analysis){ addBadge(analysis.querySelector('summary')); if(!analysis.dataset.userOpened) analysis.removeAttribute('open'); analysis.addEventListener('toggle', function(){ analysis.dataset.userOpened='1'; }, {once:true}); }
    var syncBox=document.querySelector('.sync-box.in-manage-videos');
    var youtubeBox=document.querySelector('#youtubePlayer') && document.querySelector('#youtubePlayer').closest('.video-box');
    if(syncBox && youtubeBox && !syncBox.dataset.movedToYoutube){ var syncTitle=syncBox.querySelector('.accordion-title'); if(syncTitle) syncTitle.innerHTML='🎬 Vergelijk & Afspelen'; addBadge(syncBox.querySelector('summary')); syncBox.classList.add('youtube-sync-area'); syncBox.dataset.movedToYoutube='1'; var youtubeButtons=youtubeBox.querySelector('.knopgroep'); if(youtubeButtons) youtubeButtons.insertAdjacentElement('afterend', syncBox); }
  }
  function initPlayerScrub(){
    var video=document.getElementById('leerlingVideo'); if(!video || document.getElementById('playerScrubPanel')) return;
    var wrapper=video.closest('.video-wrapper'); if(!wrapper) return;
    var panel=document.createElement('div'); panel.id='playerScrubPanel'; panel.className='player-scrub-panel hidden-during-recording';
    panel.innerHTML='<span id="playerScrubCurrent" class="player-scrub-time">0:00</span><input id="playerScrubSlider" class="player-scrub-slider" type="range" min="0" max="1000" value="0" step="1" aria-label="Spoel door de spelersvideo"><span id="playerScrubDuration" class="player-scrub-time">0:00</span>';
    wrapper.insertAdjacentElement('afterend', panel);
  }
  function alignButtons(){
    ['Analyseer met AI','Start Skeleton Tracking','Automatische houding-analyse'].forEach(function(label){ var b=findButton(label); if(b) b.classList.add('analysis-aligned-button'); });
    ['Handmatig moment toevoegen','Sessie Opslaan','Sessie Laden','Download Analyse'].forEach(function(label){ var b=findButton(label); if(b) b.classList.add('session-aligned-button'); });
    var save=findButton('Sessie Opslaan'); if(save && save.parentElement) save.parentElement.classList.add('session-action-stack');
  }
  function applyAll(){ applyProLayout(); initPlayerScrub(); alignButtons(); ensureAnalyseHelp(); ensureSkeletonHelp(); }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', applyAll); else applyAll();
  [50,150,400,900,1600,2600,4200,7000].forEach(function(ms){ setTimeout(applyAll, ms); });
})();
</script>`;

const TITLE_LOGO_MARK = `<span class="brand-title-logo" aria-hidden="true"><svg viewBox="0 0 128 128" focusable="false"><defs><linearGradient id="pcLogoA" x1="20" y1="108" x2="96" y2="18" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#07999a"/><stop offset=".58" stop-color="#67c653"/><stop offset="1" stop-color="#b9e51b"/></linearGradient><linearGradient id="pcLogoB" x1="88" y1="108" x2="112" y2="38" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5dbd4e"/><stop offset="1" stop-color="#b9e51b"/></linearGradient></defs><path d="M18 108C25 59 57 17 80 31c16 10 26 42 34 77" fill="none" stroke="url(#pcLogoA)" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/><path d="M31 101c18-9 31-21 45-33" fill="none" stroke="#4fbd5d" stroke-width="16" stroke-linecap="round" opacity=".95"/><path d="M106 48v58" fill="none" stroke="url(#pcLogoB)" stroke-width="16" stroke-linecap="round"/><circle cx="106" cy="27" r="13" fill="#aee018"/><circle cx="99" cy="24" r="2.2" fill="#eef7f1"/><circle cx="106" cy="19" r="2.2" fill="#eef7f1"/><circle cx="113" cy="24" r="2.2" fill="#eef7f1"/><circle cx="102" cy="33" r="2.2" fill="#eef7f1"/><circle cx="111" cy="34" r="2.2" fill="#eef7f1"/></svg></span>`;
const TITLE_WITH_LOGO = `<h1 class="brand-title">Pickleball Coach${TITLE_LOGO_MARK}</h1>`;

export const config = { matcher: ['/', '/index.html'] };

export default async function middleware(request) {
  const url = new URL('/index.html', request.url);
  const response = await fetch(url, { cache: 'no-store' });
  let html = await response.text();
  if (!html.includes('coach-layout-polish-style')) html = html.replace('</head>', `${LAYOUT_STYLE}\n</head>`);
  if (!html.includes('coach-layout-polish-script')) html = html.replace('</body>', `${LAYOUT_SCRIPT}\n</body>`);
  if (!html.includes('<h1 class="brand-title">')) html = html.replace(/<h1[^>]*>\s*Pickleball Coach\s*<\/h1>/, TITLE_WITH_LOGO);
  return new Response(html, { status: response.ok ? 200 : response.status, headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-cache, no-store, must-revalidate' } });
}
