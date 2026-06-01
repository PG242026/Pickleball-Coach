const CHEVRON_STYLE = `<style id="large-accordion-chevrons-middleware">
.accordion-chevron{flex:0 0 48px!important;width:48px!important;height:48px!important;margin-left:16px!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;color:transparent!important;font-size:0!important;line-height:1!important;position:relative!important;transform:rotate(0deg);transform-origin:center;transition:transform .25s ease}.accordion-chevron::before{content:"";width:19px;height:19px;border-right:4px solid #1f5f3b;border-bottom:4px solid #1f5f3b;border-radius:2px;transform:rotate(45deg) translate(-2px,-2px);box-sizing:border-box}details[open]>.accordion-header .accordion-chevron{transform:rotate(180deg)}
</style>`;

const PLAYER_MANAGEMENT_STYLE = `<style id="player-management-compact-style">
.container>.card:first-of-type{padding:0!important;border-radius:10px!important;margin-bottom:14px!important}.container>.card:first-of-type .beheer-summary{min-height:46px!important;margin:0!important;padding:4px 14px!important;font-size:21px!important;line-height:1.2!important}.container>.card:first-of-type .accordion-chevron{flex-basis:34px!important;width:34px!important;height:34px!important;margin-left:10px!important}.container>.card:first-of-type .accordion-chevron::before{width:14px!important;height:14px!important;border-right-width:3px!important;border-bottom-width:3px!important}.container>.card:first-of-type details[open] .beheer-summary{border-bottom:1px solid #e4eee8}.container>.card:first-of-type details>div{padding:10px 14px 12px!important;margin-top:0!important}.container>.card:first-of-type input{padding:9px 11px!important;margin-top:5px!important;margin-bottom:8px!important;font-size:16px!important}.container>.card:first-of-type button{min-height:38px!important;padding:8px 12px!important;font-size:15px!important}.container>.card:first-of-type .speler-item{padding:8px 10px!important;margin-bottom:7px!important}@media(max-width:600px){.container>.card:first-of-type .beheer-summary{min-height:42px!important;padding:3px 12px!important;font-size:19px!important}.container>.card:first-of-type{border-radius:10px!important;margin-bottom:12px!important}.container>.card:first-of-type details>div{padding:9px 12px 10px!important}}
</style>`;

const VIDEO_ANALYSIS_LAYOUT_STYLE = `<style id="video-analysis-layout-fix">
.premium-feature.trainer-club-feature[open]{overflow:visible!important}.premium-feature.trainer-club-feature[open] .premium-body{max-height:none!important;overflow:visible!important}.video-analysis-accordion[open] .video-analysis-paneel,.video-analysis-paneel{overflow:visible!important}.analyse-controls,.sessie-sectie{position:relative;z-index:1}
</style>`;

const HEADER_LOGO_STYLE = `<style id="title-logo-mark-style">
.brand-title{display:inline-flex;align-items:center;justify-content:center;gap:10px;white-space:normal}.brand-title-logo{width:42px;height:42px;display:inline-flex;align-items:center;justify-content:center;flex:0 0 auto;vertical-align:middle}.brand-title-logo svg{width:100%;height:100%;display:block}@media(max-width:600px){.brand-title{gap:7px}.brand-title-logo{width:34px;height:34px}}
</style>`;

const PLAYER_SCRUB_STYLE = `<style id="player-video-scrub-style">
.player-scrub-panel{display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:10px;margin:10px 0 4px;padding:10px 12px;border-radius:12px;background:#eef7f1;color:#1f5f3b;font-weight:bold}.player-scrub-time{font-variant-numeric:tabular-nums;font-size:15px;min-width:44px;text-align:center}.player-scrub-slider{width:100%;height:28px;margin:0!important;padding:0!important;accent-color:#1f5f3b;cursor:pointer}.player-scrub-slider:disabled{opacity:.55;cursor:not-allowed}@media(max-width:600px){.player-scrub-panel{grid-template-columns:1fr;gap:6px}.player-scrub-time{text-align:left}.player-scrub-time:last-child{text-align:right}}
</style>`;

const BUTTON_LAYOUT_STYLE = `<style id="button-layout-polish-style">
.knopgroep{gap:12px!important;align-items:center!important}.knopgroep button{margin:0!important;min-height:44px!important;border-radius:9px!important;white-space:nowrap!important}.player-box .knopgroep.hidden-during-recording{display:flex!important;gap:12px!important;align-items:center!important;flex-wrap:wrap!important;overflow:visible!important}.player-box .knopgroep.hidden-during-recording .help-icon{position:static!important;transform:none!important;flex:0 0 42px!important;width:42px!important;height:42px!important;min-width:42px!important;min-height:42px!important;padding:0!important;margin:0!important;border-radius:50%!important;background:#fff!important;color:#1f5f3b!important;border:2px solid #1f5f3b!important;line-height:1!important;box-sizing:border-box!important}.player-box .knopgroep.hidden-during-recording button:not(.help-icon){flex:0 1 auto!important}@media(max-width:520px){.player-box .knopgroep.hidden-during-recording button:not(.help-icon){flex:1 1 calc(50% - 12px)!important;min-width:145px!important}.player-box .knopgroep.hidden-during-recording .help-icon{order:2!important}.player-box .knopgroep.hidden-during-recording button[onclick="wisLeerlingVideo()"]{flex-basis:100%!important}}
</style>`;

const NOTIFICATION_POSITION_STYLE = `<style id="notification-position-style">
.melding{top:18px!important;left:auto!important;right:156px!important;transform:none!important;max-width:min(360px,calc(100vw - 32px))!important;text-align:center!important;box-sizing:border-box!important}@media(max-width:760px){.melding{top:12px!important;left:16px!important;right:16px!important;max-width:none!important}}
</style>`;

const PRO_LAYOUT_STYLE = `<style id="pro-layout-clarity-style">
.pro-later-badge{display:inline-flex;align-items:center;justify-content:center;margin-left:8px;padding:2px 8px;border-radius:999px;background:#f3ecff;color:#6e2bd8;font-size:11px;font-weight:800;letter-spacing:.03em;line-height:1.5;text-transform:uppercase}.premium-feature.trainer-club-feature summary .pro-later-badge,.sync-accordion summary .pro-later-badge{margin-left:auto;margin-right:8px}.premium-feature.trainer-club-feature .premium-body{display:grid;gap:12px}.premium-feature.trainer-club-feature .premium-body>label{margin-top:0}.video-analysis-sectie,.video-analyse-sectie{margin-top:12px!important}.video-analysis-accordion{border-color:#d2e7db!important}.video-analysis-accordion:not([open]) .video-analysis-paneel{display:none!important}.video-analysis-paneel{gap:12px!important}.analyse-controls,.sessie-sectie{display:grid!important;grid-template-columns:repeat(auto-fit,minmax(210px,1fr))!important;gap:10px!important}.analyse-controls .help-icon{width:34px!important;height:34px!important;min-width:34px!important;min-height:34px!important;justify-self:start!important}.player-video-separator{margin:26px 0 14px!important;border:0!important;border-top:1px solid #b7c7be!important;height:0!important}.youtube-sync-area{position:relative;margin-top:26px!important;padding-top:14px!important;border:0!important;border-radius:0!important;background:transparent!important}.youtube-sync-area::before{content:"";position:absolute;top:0;left:0;right:0;height:1px;background:#b7c7be}.youtube-sync-area .sync-accordion{border:1px solid #d2e7db!important;border-radius:14px!important;background:#f7fcf9!important;overflow:hidden!important}.youtube-sync-area .sync-accordion>.accordion-header,.youtube-sync-area .sync-accordion>summary{min-height:88px!important;padding:18px 28px!important;box-sizing:border-box!important;align-items:flex-start!important}#manageVideosTitle,.youtube-sync-area .accordion-title{font-family:inherit!important;font-size:21px!important;font-weight:700!important;line-height:1.25!important;color:#1f5f3b!important;letter-spacing:0!important;margin-top:0!important;padding-top:0!important;align-self:flex-start!important}.youtube-sync-area .pro-later-badge,.youtube-sync-area .accordion-chevron{align-self:center!important}@media(min-width:760px){.video-row{align-items:flex-start!important}.video-box{min-width:0!important}.youtube-sync-area{margin-top:26px!important;padding-top:14px!important}}@media(max-width:700px){.analyse-controls,.sessie-sectie{grid-template-columns:1fr!important}.player-video-separator{margin:14px 0 12px!important}.youtube-sync-area{margin-top:14px!important;padding-top:12px!important}.youtube-sync-area::before{background:#d2e7db}.youtube-sync-area .sync-accordion>.accordion-header,.youtube-sync-area .sync-accordion>summary{min-height:68px!important;padding:16px 20px!important}#manageVideosTitle,.youtube-sync-area .accordion-title{font-size:19px!important}}
</style>`;

const FEEDBACK_SCRIPT = `<script id="feedback-close-after-send">
(function(){
  function verwijderFeedbackBevestiging(){
    var bevestiging=document.getElementById('feedbackBevestiging');
    if(bevestiging) bevestiging.remove();
  }
  function closeFeedbackAfterSend(){
    var naamEl=document.getElementById('feedbackNaam');
    var soortEl=document.getElementById('feedbackSoort');
    var berichtEl=document.getElementById('feedbackBericht');
    var popup=document.getElementById('feedbackPopup');
    var bericht=berichtEl ? berichtEl.value : '';
    if(!bericht.trim()){
      if(typeof toonMelding==='function') toonMelding('⚠️ Typ eerst je feedback');
      return;
    }
    var naam=(naamEl && naamEl.value) || 'Onbekend';
    var soort=(soortEl && soortEl.value) || 'Feedback';
    var onderwerp=encodeURIComponent('Feedback Pickleball Coach AI - '+soort);
    var body=encodeURIComponent('Naam: '+naam+'\\nSoort: '+soort+'\\nDatum: '+new Date().toLocaleString('nl-NL')+'\\n\\nFeedback:\\n'+bericht);
    var mailUrl='mailto:hcvsabben@gmail.com?subject='+onderwerp+'&body='+body;
    if(typeof toonMelding==='function') toonMelding('✅ Feedback klaargezet. Druk in je mailprogramma nog op verzenden.');
    if(popup){
      verwijderFeedbackBevestiging();
      var bevestiging=document.createElement('div');
      bevestiging.id='feedbackBevestiging';
      bevestiging.style.cssText='background:#eef7f1;border-left:6px solid #1f5f3b;color:#1f5f3b;padding:12px 14px;border-radius:10px;margin:10px 0 14px;font-weight:bold;';
      popup.insertBefore(bevestiging,popup.querySelector('button'));
      bevestiging.textContent='Bedankt, je feedback is klaargezet. Druk in je mailprogramma nog op verzenden.';
    }
    if(berichtEl) berichtEl.value='';
    setTimeout(function(){ window.location.href=mailUrl; }, 900);
    setTimeout(function(){ if(typeof sluitAllePopups==='function') sluitAllePopups(); }, 2600);
  }
  var origineleOpenFeedback=window.openFeedback;
  window.openFeedback=function(){
    verwijderFeedbackBevestiging();
    if(typeof origineleOpenFeedback==='function') return origineleOpenFeedback.apply(this, arguments);
  };
  window.verstuurFeedback=closeFeedbackAfterSend;
})();
</script>`;

const PLAYER_SCRUB_SCRIPT = `<script id="player-video-scrub-script">
(function(){
  function formatTime(seconds){
    if(!Number.isFinite(seconds) || seconds < 0) seconds = 0;
    var total=Math.floor(seconds);
    return Math.floor(total/60) + ':' + String(total%60).padStart(2,'0');
  }
  function initPlayerScrub(){
    var video=document.getElementById('leerlingVideo');
    if(!video || document.getElementById('playerScrubPanel')) return;
    var wrapper=video.closest('.video-wrapper');
    if(!wrapper) return;
    var panel=document.createElement('div');
    panel.id='playerScrubPanel';
    panel.className='player-scrub-panel hidden-during-recording';
    panel.innerHTML='<span id="playerScrubCurrent" class="player-scrub-time">0:00</span><input id="playerScrubSlider" class="player-scrub-slider" type="range" min="0" max="1000" value="0" step="1" aria-label="Spoel door de spelersvideo"><span id="playerScrubDuration" class="player-scrub-time">0:00</span>';
    wrapper.insertAdjacentElement('afterend', panel);
    var slider=panel.querySelector('#playerScrubSlider');
    var current=panel.querySelector('#playerScrubCurrent');
    var duration=panel.querySelector('#playerScrubDuration');
    var dragging=false;
    function update(){
      var length=Number.isFinite(video.duration) ? video.duration : 0;
      var now=Number.isFinite(video.currentTime) ? video.currentTime : 0;
      duration.textContent=formatTime(length);
      current.textContent=formatTime(now);
      slider.disabled=!length;
      if(!dragging) slider.value=length ? Math.round((now/length)*1000) : 0;
    }
    slider.addEventListener('input', function(){
      var length=Number.isFinite(video.duration) ? video.duration : 0;
      if(!length) return;
      dragging=true;
      video.currentTime=(Number(slider.value)/1000)*length;
      current.textContent=formatTime(video.currentTime);
    });
    slider.addEventListener('change', function(){ dragging=false; update(); });
    ['loadedmetadata','durationchange','timeupdate','seeked','emptied'].forEach(function(eventName){ video.addEventListener(eventName, update); });
    update();
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', initPlayerScrub); else initPlayerScrub();
})();
</script>`;

const SKELETON_HELP_SCRIPT = `<script id="skeleton-help-button-script">
(function(){
  function addSkeletonHelpButton(){
    var skeletonButton=document.getElementById('skeletonTrackingKnop');
    if(!skeletonButton || document.getElementById('skeletonTrackingHelpKnop')) return;
    var help=document.createElement('button');
    help.type='button';
    help.id='skeletonTrackingHelpKnop';
    help.className='help-icon';
    help.setAttribute('aria-label','Help Start Skeleton Tracking');
    help.setAttribute('data-help','Skeleton Tracking tekent een eenvoudig skelet over de spelersvideo. Zo kun je houding, balans en beweging beter bekijken tijdens de analyse.');
    help.textContent='?';
    skeletonButton.insertAdjacentElement('afterend', help);
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', addSkeletonHelpButton); else addSkeletonHelpButton();
})();
</script>`;

const PRO_LAYOUT_SCRIPT = `<script id="pro-layout-clarity-script">
(function(){
  function addBadge(summary){
    if(!summary || summary.querySelector('.pro-later-badge')) return;
    var badge=document.createElement('span');
    badge.className='pro-later-badge';
    badge.textContent='PRO later';
    var chevron=summary.querySelector('.accordion-chevron');
    if(chevron) summary.insertBefore(badge, chevron); else summary.appendChild(badge);
  }
  function setTitle(selector, text){
    var el=document.querySelector(selector);
    if(el) el.innerHTML=text;
  }
  function applyProLayout(){
    setTitle('#manageVideosTitle','📁 Video’s beheren');
    setTitle('#videoAnalyseTitle','🎥 Analyse');
    var manage=document.getElementById('manageVideosAccordion');
    if(manage) addBadge(manage.querySelector('summary'));
    var analysis=document.querySelector('.video-analysis-accordion');
    if(analysis){
      addBadge(analysis.querySelector('summary'));
      if(!analysis.dataset.userOpened) analysis.removeAttribute('open');
      analysis.addEventListener('toggle', function(){ analysis.dataset.userOpened='1'; }, {once:true});
    }
    var syncBox=document.querySelector('.sync-box.in-manage-videos');
    var youtubeBox=document.querySelector('#youtubePlayer') && document.querySelector('#youtubePlayer').closest('.video-box');
    if(syncBox && youtubeBox && !syncBox.dataset.movedToYoutube){
      var syncTitle=syncBox.querySelector('.accordion-title');
      if(syncTitle) syncTitle.innerHTML='🎛 Vergelijk met YouTube';
      addBadge(syncBox.querySelector('summary'));
      syncBox.classList.add('youtube-sync-area');
      syncBox.dataset.movedToYoutube='1';
      var youtubeButtons=youtubeBox.querySelector('.knopgroep');
      if(youtubeButtons) youtubeButtons.insertAdjacentElement('afterend', syncBox);
    }
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', applyProLayout); else applyProLayout();
})();
</script>`;

const TITLE_LOGO_MARK = `<span class="brand-title-logo" aria-hidden="true"><svg viewBox="0 0 128 128" focusable="false"><defs><linearGradient id="pcLogoA" x1="20" y1="108" x2="96" y2="18" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#07999a"/><stop offset=".58" stop-color="#67c653"/><stop offset="1" stop-color="#b9e51b"/></linearGradient><linearGradient id="pcLogoB" x1="88" y1="108" x2="112" y2="38" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5dbd4e"/><stop offset="1" stop-color="#b9e51b"/></linearGradient></defs><path d="M18 108C25 59 57 17 80 31c16 10 26 42 34 77" fill="none" stroke="url(#pcLogoA)" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/><path d="M31 101c18-9 31-21 45-33" fill="none" stroke="#4fbd5d" stroke-width="16" stroke-linecap="round" opacity=".95"/><path d="M106 48v58" fill="none" stroke="url(#pcLogoB)" stroke-width="16" stroke-linecap="round"/><circle cx="106" cy="27" r="13" fill="#aee018"/><circle cx="99" cy="24" r="2.2" fill="#eef7f1"/><circle cx="106" cy="19" r="2.2" fill="#eef7f1"/><circle cx="113" cy="24" r="2.2" fill="#eef7f1"/><circle cx="102" cy="33" r="2.2" fill="#eef7f1"/><circle cx="111" cy="34" r="2.2" fill="#eef7f1"/></svg></span>`;
const TITLE_WITH_LOGO = `<h1 class="brand-title">Pickleball Coach${TITLE_LOGO_MARK}</h1>`;

const HEAD_STYLES = [CHEVRON_STYLE,PLAYER_MANAGEMENT_STYLE,VIDEO_ANALYSIS_LAYOUT_STYLE,HEADER_LOGO_STYLE,PLAYER_SCRUB_STYLE,BUTTON_LAYOUT_STYLE,NOTIFICATION_POSITION_STYLE,PRO_LAYOUT_STYLE];
const BODY_SCRIPTS = [FEEDBACK_SCRIPT,PLAYER_SCRUB_SCRIPT,SKELETON_HELP_SCRIPT,PRO_LAYOUT_SCRIPT];

export const config = {
  matcher: ['/', '/index.html']
};

export default async function middleware(request) {
  const url = new URL('/index.html', request.url);
  const response = await fetch(url, { cache: 'no-store' });
  let html = await response.text();

  for (const style of HEAD_STYLES) {
    const id = style.match(/id="([^"]+)"/)?.[1];
    if (id && !html.includes(id)) html = html.replace('</head>', `${style}\n</head>`);
  }

  for (const script of BODY_SCRIPTS) {
    const id = script.match(/id="([^"]+)"/)?.[1];
    if (id && !html.includes(id)) html = html.replace('</body>', `${script}\n</body>`);
  }

  if (!html.includes('<h1 class="brand-title">')) {
    html = html.replace(/<h1[^>]*>\s*Pickleball Coach\s*<\/h1>/, TITLE_WITH_LOGO);
  }

  return new Response(html, {
    status: response.ok ? 200 : response.status,
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'cache-control': 'no-cache, no-store, must-revalidate'
    }
  });
}
