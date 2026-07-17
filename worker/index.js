const acceleratorLandingPath = '/recruiting-season-accelerator';

const acceleratorMetadata = {
  [acceleratorLandingPath]: {
    title: 'Recruiting Season Accelerator | Kelly Chen',
    description:
      'A four-week mentorship program for college students applying to software engineering internships and new-grad roles.',
    openGraphTitle: 'Recruiting season is here. Apply with a strategy.',
    openGraphDescription:
      'Join the six-person founding cohort for workshops, private strategy sessions, resume feedback, and ApplyFirst resources.',
  },
  [`${acceleratorLandingPath}/terms`]: {
    title: 'Participant Terms | Recruiting Season Accelerator',
    description: 'Participant terms for the Recruiting Season Accelerator founding cohort.',
  },
  [`${acceleratorLandingPath}/privacy`]: {
    title: 'Privacy Notice | Recruiting Season Accelerator',
    description: 'Privacy notice for Recruiting Season Accelerator applicants and participants.',
  },
  [`${acceleratorLandingPath}/refund-and-feedback-credit`]: {
    title: 'Refund and Feedback Credit Policy | Recruiting Season Accelerator',
    description:
      'Refund terms and the founding participant feedback credit for Recruiting Season Accelerator.',
  },
  [`${acceleratorLandingPath}/faq`]: {
    title: 'Program FAQ | Recruiting Season Accelerator',
    description:
      'Detailed answers about eligibility, format, expectations, outcomes, and program policies.',
  },
};

function escapeAttribute(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function normalizedPath(pathname) {
  const normalized = pathname.replace(/\/+$/, '');
  return normalized || '/';
}

function acceleratorLandingUrl(requestUrl, env) {
  const requestOrigin = new URL(requestUrl).origin;
  const configuredLanding = env.RSA_CANONICAL_URL?.trim().replace(/\/+$/, '');
  return configuredLanding || `${requestOrigin}${acceleratorLandingPath}`;
}

function acceleratorCanonicalUrl(requestUrl, env, pathname) {
  const landingUrl = acceleratorLandingUrl(requestUrl, env);
  const suffix = pathname.slice(acceleratorLandingPath.length);
  return `${landingUrl}${suffix}`;
}

function acceleratorRuntimeScript(env, canonicalUrl) {
  const runtimeConfig = JSON.stringify({
    applicationUrl: env.RSA_APPLICATION_URL?.trim() || '',
    interestListUrl: env.RSA_INTEREST_URL?.trim() || '',
    canonicalUrl,
  }).replaceAll('<', '\\u003c');

  return `<script>window.__RSA_CONFIG__=${runtimeConfig};</script>`;
}

function plausibleScript(env) {
  const domain = env.RSA_PLAUSIBLE_DOMAIN?.trim();
  if (!domain) return '';

  const safeDomain = escapeAttribute(domain);
  return [
    '<script>',
    'window.plausible=window.plausible||function(){(window.plausible.q=window.plausible.q||[]).push(arguments)};',
    '</script>',
    `<script defer data-domain="${safeDomain}" src="https://plausible.io/js/script.js"></script>`,
  ].join('');
}

function acceleratorStructuredData(canonicalUrl) {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'Recruiting Season Accelerator Founding Cohort',
    description:
      'A four-week online mentorship program for college students pursuing software engineering internships and new-grad roles.',
    startDate: '2026-08-10',
    endDate: '2026-09-06',
    eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    location: {
      '@type': 'VirtualLocation',
      url: canonicalUrl,
    },
    organizer: {
      '@type': 'Person',
      name: 'Kelly Chen',
      url: new URL('/', canonicalUrl).toString(),
    },
    offers: {
      '@type': 'Offer',
      price: '99',
      priceCurrency: 'USD',
      availability: 'https://schema.org/LimitedAvailability',
      url: canonicalUrl,
    },
  }).replaceAll('<', '\\u003c');
}

function applyAcceleratorMetadata(html, request, env, pathname) {
  const metadata = acceleratorMetadata[pathname];
  if (!metadata) return html;

  const canonicalUrl = acceleratorCanonicalUrl(request.url, env, pathname);
  const landingUrl = acceleratorLandingUrl(request.url, env);
  const origin = new URL(request.url).origin;
  const socialImageUrl = `${origin}/og-recruiting-season-accelerator.png`;
  const title = metadata.openGraphTitle || metadata.title;
  const description = metadata.openGraphDescription || metadata.description;
  const metadataTags = [
    `<link rel="canonical" href="${escapeAttribute(canonicalUrl)}">`,
    '<meta property="og:type" content="website">',
    `<meta property="og:title" content="${escapeAttribute(title)}">`,
    `<meta property="og:description" content="${escapeAttribute(description)}">`,
    `<meta property="og:url" content="${escapeAttribute(canonicalUrl)}">`,
    `<meta property="og:image" content="${escapeAttribute(socialImageUrl)}">`,
    '<meta property="og:image:alt" content="Recruiting Season Accelerator by Kelly Chen">',
    '<meta name="twitter:card" content="summary_large_image">',
    `<meta name="twitter:title" content="${escapeAttribute(title)}">`,
    `<meta name="twitter:description" content="${escapeAttribute(description)}">`,
    `<meta name="twitter:image" content="${escapeAttribute(socialImageUrl)}">`,
    acceleratorRuntimeScript(env, landingUrl),
    plausibleScript(env),
    pathname === acceleratorLandingPath
      ? `<script type="application/ld+json">${acceleratorStructuredData(canonicalUrl)}</script>`
      : '',
  ].join('');

  const withTitle = html.replace(
    /<title>.*?<\/title>/is,
    `<title>${escapeAttribute(metadata.title)}</title>`,
  );
  const withDescription = withTitle.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="description" content="${escapeAttribute(metadata.description)}">`,
  );
  return withDescription.replace('</head>', `${metadataTags}</head>`);
}

function sitemapXml(origin) {
  const paths = ['/', ...Object.keys(acceleratorMetadata)];
  const urls = paths
    .map((path) => `<url><loc>${escapeAttribute(`${origin}${path}`)}</loc></url>`)
    .join('');
  return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;
}

const worker = {
  async fetch(request, env) {
    const url = new URL(request.url);
    const pathname = normalizedPath(url.pathname);

    if (request.method === 'GET' && pathname === '/robots.txt') {
      return new Response(`User-agent: *\nAllow: /\nSitemap: ${url.origin}/sitemap.xml\n`, {
        headers: { 'content-type': 'text/plain; charset=utf-8' },
      });
    }

    if (request.method === 'GET' && pathname === '/sitemap.xml') {
      return new Response(sitemapXml(url.origin), {
        headers: { 'content-type': 'application/xml; charset=utf-8' },
      });
    }

    let response = await env.ASSETS.fetch(request);
    const acceptsHtml = request.headers.get('accept')?.includes('text/html');

    if (response.status === 404 && request.method === 'GET' && acceptsHtml) {
      const rootUrl = new URL('/', request.url);
      response = await env.ASSETS.fetch(new Request(rootUrl, request));
    }

    const isHtml = response.headers.get('content-type')?.includes('text/html');
    if (request.method !== 'GET' || !isHtml || !acceleratorMetadata[pathname]) {
      return response;
    }

    const html = applyAcceleratorMetadata(await response.text(), request, env, pathname);
    const headers = new Headers(response.headers);
    headers.delete('content-length');
    return new Response(html, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};

export default worker;
