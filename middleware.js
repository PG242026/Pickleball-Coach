const CHEVRON_STYLE = `<style id="large-accordion-chevrons-middleware">
.accordion-chevron{flex:0 0 48px!important;width:48px!important;height:48px!important;margin-left:16px!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;color:transparent!important;font-size:0!important;line-height:1!important;position:relative!important;transform:rotate(0deg);transform-origin:center;transition:transform .25s ease}.accordion-chevron::before{content:"";width:19px;height:19px;border-right:4px solid #1f5f3b;border-bottom:4px solid #1f5f3b;border-radius:2px;transform:rotate(45deg) translate(-2px,-2px);box-sizing:border-box}details[open]>.accordion-header .accordion-chevron{transform:rotate(180deg)}
</style>`;

const HEADER_LOGO_STYLE = `<style id="title-logo-mark-style">
.brand-title{display:inline-flex;align-items:center;justify-content:center;gap:12px;white-space:normal}.brand-title-logo{width:62px;height:62px;display:inline-block;object-fit:contain;vertical-align:middle}@media(max-width:600px){.brand-title{gap:8px}.brand-title-logo{width:48px;height:48px}}
</style>`;

const TITLE_WITH_LOGO = '<h1 class="brand-title">Pickleball Coach<img class="brand-title-logo" src="/assets/pickleball-logo-mark.svg" alt="Pickleball Coach logo"></h1>';

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

  if (!html.includes('brand-title-logo')) {
    html = html.replace('<h1>Pickleball Coach</h1>', TITLE_WITH_LOGO);
  }

  return new Response(html, {
    status: response.ok ? 200 : response.status,
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'cache-control': 'no-cache, no-store, must-revalidate'
    }
  });
}
