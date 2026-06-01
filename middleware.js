const CHEVRON_STYLE = `<style id="large-accordion-chevrons-middleware">
.accordion-chevron{flex:0 0 48px!important;width:48px!important;height:48px!important;margin-left:16px!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;color:transparent!important;font-size:0!important;line-height:1!important;position:relative!important;transform:rotate(0deg);transform-origin:center;transition:transform .25s ease}.accordion-chevron::before{content:"";width:19px;height:19px;border-right:4px solid #1f5f3b;border-bottom:4px solid #1f5f3b;border-radius:2px;transform:rotate(45deg) translate(-2px,-2px);box-sizing:border-box}details[open]>.accordion-header .accordion-chevron{transform:rotate(180deg)}
</style>`;

const HEADER_LOGO_STYLE = `<style id="title-logo-mark-style">
.brand-title{display:inline-flex;align-items:center;justify-content:center;gap:10px;white-space:normal}.brand-title-logo{width:42px;height:42px;display:inline-flex;align-items:center;justify-content:center;flex:0 0 auto;vertical-align:middle}.brand-title-logo svg{width:100%;height:100%;display:block}@media(max-width:600px){.brand-title{gap:7px}.brand-title-logo{width:34px;height:34px}}
</style>`;

const TITLE_LOGO_MARK = `<span class="brand-title-logo" aria-hidden="true"><svg viewBox="0 0 128 128" focusable="false"><defs><linearGradient id="pcLogoA" x1="20" y1="108" x2="96" y2="18" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#07999a"/><stop offset=".58" stop-color="#67c653"/><stop offset="1" stop-color="#b9e51b"/></linearGradient><linearGradient id="pcLogoB" x1="88" y1="108" x2="112" y2="38" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5dbd4e"/><stop offset="1" stop-color="#b9e51b"/></linearGradient></defs><path d="M18 108C25 59 57 17 80 31c16 10 26 42 34 77" fill="none" stroke="url(#pcLogoA)" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/><path d="M31 101c18-9 31-21 45-33" fill="none" stroke="#4fbd5d" stroke-width="16" stroke-linecap="round" opacity=".95"/><path d="M106 48v58" fill="none" stroke="url(#pcLogoB)" stroke-width="16" stroke-linecap="round"/><circle cx="106" cy="27" r="13" fill="#aee018"/><circle cx="99" cy="24" r="2.2" fill="#eef7f1"/><circle cx="106" cy="19" r="2.2" fill="#eef7f1"/><circle cx="113" cy="24" r="2.2" fill="#eef7f1"/><circle cx="102" cy="33" r="2.2" fill="#eef7f1"/><circle cx="111" cy="34" r="2.2" fill="#eef7f1"/></svg></span>`;
const TITLE_WITH_LOGO = `<h1 class="brand-title">Pickleball Coach${TITLE_LOGO_MARK}</h1>`;

export const config = {
  matcher: ['/', '/index.html']
};

export default async function middleware(request) {
  const url = new URL('/index.html', request.url);
  const response = await fetch(url, { cache: 'no-store' });
  let html = await response.text();

  if (!html.includes('large-accordion-chevrons-middleware')) {
    html = html.replace('</head>', `${CHEVRON_STYLE}\n</head>`);
  }

  if (!html.includes('title-logo-mark-style')) {
    html = html.replace('</head>', `${HEADER_LOGO_STYLE}\n</head>`);
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
