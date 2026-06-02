const HELP_FIX_STYLE = `<style id="help-icon-production-fix-style">
.analyse-controls,.sessie-sectie{display:flex!important;flex-direction:column!important;align-items:flex-start!important;gap:10px!important;width:100%!important;max-width:100%!important;overflow:visible!important}.analysis-aligned-button,.session-aligned-button{width:min(300px,calc(100vw - 64px))!important;max-width:100%!important;min-height:44px!important;display:inline-flex!important;align-items:center!important;justify-content:flex-start!important;box-sizing:border-box!important;margin:0!important;padding-left:18px!important;padding-right:18px!important;white-space:nowrap!important;text-align:left!important;flex:0 0 auto!important}.analysis-help-row,.session-help-row{display:flex!important;align-items:center!important;justify-content:flex-start!important;gap:8px!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;overflow:visible!important}.analysis-help-row .help-icon,.session-help-row .help-icon{position:static!important;transform:none!important;flex:0 0 30px!important;width:30px!important;height:30px!important;min-width:30px!important;min-height:30px!important;margin:0!important;padding:0!important;border-radius:50%!important;box-sizing:border-box!important;background:#fff!important;color:#1f5f3b!important;border:2px solid #1f5f3b!important}.analysis-help-row .analysis-aligned-button,.session-help-row .session-aligned-button{width:min(300px,calc(100vw - 106px))!important;flex:0 0 min(300px,calc(100vw - 106px))!important}.session-action-stack{display:flex!important;flex-direction:column!important;align-items:flex-start!important;gap:10px!important;width:100%!important}
</style>`;

const HELP_FIX_SCRIPT = `<script id="help-icon-production-fix-script">
(function(){
  function text(el){ return (el && el.textContent || '').replace(/\s+/g,' ').trim(); }
  function findButton(label){
    return Array.prototype.find.call(document.querySelectorAll('button'), function(button){ return text(button).indexOf(label) !== -1; });
  }
  function findHelpByNeedle(needle){
    return Array.prototype.find.call(document.querySelectorAll('.help-icon'), function(help){
      return !help.dataset.boundToButton && ((help.getAttribute('data-help') || '') + ' ' + (help.getAttribute('aria-label') || '')).indexOf(needle) !== -1;
    });
  }
  function wrapWithHelp(button, help, rowClass){
    if(!button || !help) return;
    if(help.parentElement && help.parentElement.classList && help.parentElement.classList.contains(rowClass) && help.previousElementSibling===button) return;
    var current=button.closest('.analysis-help-row,.session-help-row');
    if(current){ current.appendChild(help); help.dataset.boundToButton='1'; return; }
    var row=document.createElement('div');
    row.className=rowClass;
    button.parentNode.insertBefore(row, button);
    row.appendChild(button);
    row.appendChild(help);
    help.dataset.boundToButton='1';
  }
  function addSkeletonHelpButton(){
    var skeletonButton=document.getElementById('skeletonTrackingKnop') || findButton('Start Skeleton Tracking');
    if(!skeletonButton) return null;
    var help=document.getElementById('skeletonTrackingHelpKnop') || findHelpByNeedle('Skeleton Tracking');
    if(!help){
      help=document.createElement('button');
      help.type='button';
      help.id='skeletonTrackingHelpKnop';
      help.className='help-icon';
      help.setAttribute('aria-label','Help Start Skeleton Tracking');
      help.setAttribute('data-help','Skeleton Tracking tekent een eenvoudig skelet over de spelersvideo. Zo kun je houding, balans en beweging beter bekijken tijdens de analyse.');
      help.textContent='?';
      skeletonButton.insertAdjacentElement('afterend', help);
    }
    return help;
  }
  function alignButtonsAndHelp(){
    document.querySelectorAll('.help-icon').forEach(function(help){ delete help.dataset.boundToButton; });
    var analyse=findButton('Analyseer met AI');
    var skeleton=document.getElementById('skeletonTrackingKnop') || findButton('Start Skeleton Tracking');
    var posture=findButton('Automatische houding-analyse');
    var manual=findButton('Handmatig moment toevoegen');
    var save=findButton('Sessie Opslaan');
    var load=findButton('Sessie Laden');
    var download=findButton('Download Analyse');
    [analyse,skeleton,posture].filter(Boolean).forEach(function(button){ button.classList.add('analysis-aligned-button'); });
    [manual,save,load,download].filter(Boolean).forEach(function(button){ button.classList.add('session-aligned-button'); });
    if(save && save.parentElement) save.parentElement.classList.add('session-action-stack');
    var analyseHelp=findHelpByNeedle('Analyseer met AI') || findHelpByNeedle('automatisch techniek');
    var skeletonHelp=addSkeletonHelpButton();
    var loadHelp=findHelpByNeedle('Open opgeslagen') || findHelpByNeedle('Sessie');
    wrapWithHelp(analyse, analyseHelp, 'analysis-help-row');
    wrapWithHelp(skeleton, skeletonHelp, 'analysis-help-row');
    wrapWithHelp(load, loadHelp, 'session-help-row');
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', alignButtonsAndHelp); else alignButtonsAndHelp();
  [50,150,400,900,1600,2600].forEach(function(ms){ setTimeout(alignButtonsAndHelp, ms); });
})();
</script>`;

export const config = {
  matcher: ['/', '/index.html']
};

export default async function middleware(request) {
  const url = new URL('/index.html', request.url);
  const response = await fetch(url, { cache: 'no-store' });
  let html = await response.text();

  if (!html.includes('help-icon-production-fix-style')) {
    html = html.replace('</head>', `${HELP_FIX_STYLE}\n</head>`);
  }
  if (!html.includes('help-icon-production-fix-script')) {
    html = html.replace('</body>', `${HELP_FIX_SCRIPT}\n</body>`);
  }

  return new Response(html, {
    status: response.ok ? 200 : response.status,
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'cache-control': 'no-cache, no-store, must-revalidate'
    }
  });
}
