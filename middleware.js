const CHEVRON_STYLE = `<style id="large-accordion-chevrons-middleware">
.accordion-chevron{flex:0 0 48px!important;width:48px!important;height:48px!important;margin-left:16px!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;color:transparent!important;font-size:0!important;line-height:1!important;position:relative!important;transform:rotate(0deg);transform-origin:center;transition:transform .25s ease}.accordion-chevron::before{content:"";width:19px;height:19px;border-right:4px solid #1f5f3b;border-bottom:4px solid #1f5f3b;border-radius:2px;transform:rotate(45deg) translate(-2px,-2px);box-sizing:border-box}details[open]>.accordion-header .accordion-chevron{transform:rotate(180deg)}
</style>`;

const TITLE_LOGO_SRC = 'data:image/png;base64,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';

const HEADER_LOGO_STYLE = `<style id="title-logo-mark-style">
.brand-title{display:inline-flex;align-items:center;justify-content:center;gap:12px;white-space:normal}.brand-title-logo{width:62px;height:62px;display:inline-block;object-fit:contain;vertical-align:middle}@media(max-width:600px){.brand-title{gap:8px}.brand-title-logo{width:48px;height:48px}}
</style>`;

const TITLE_WITH_LOGO = `<h1 class="brand-title">Pickleball Coach<img class="brand-title-logo" src="${TITLE_LOGO_SRC}" alt="Pickleball Coach logo"></h1>`;

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
