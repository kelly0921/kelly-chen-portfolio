import assert from 'node:assert/strict';
import test from 'node:test';
import worker from '../worker/index.js';

function createEnvironment(responses, values = {}) {
  const requests = [];

  return {
    requests,
    env: {
      ...values,
      ASSETS: {
        async fetch(request) {
          const path = new URL(request.url).pathname;
          requests.push(path);
          return responses[path] ?? new Response('Not found', { status: 404 });
        },
      },
    },
  };
}

test('static worker serves an existing asset response unchanged', async () => {
  const { env, requests } = createEnvironment({
    '/assets/app.js': new Response('console.log("ready")', {
      headers: { 'content-type': 'text/javascript' },
    }),
  });
  const request = new Request('https://example.com/assets/app.js');

  const response = await worker.fetch(request, env);

  assert.equal(response.status, 200);
  assert.equal(await response.text(), 'console.log("ready")');
  assert.deepEqual(requests, ['/assets/app.js']);
});

test('static worker falls back to the root document and applies route metadata', async () => {
  const { env, requests } = createEnvironment({
    '/': new Response(
      '<!doctype html><html><head><meta name="description" content="Portfolio"><title>Portfolio</title></head><body></body></html>',
      {
      headers: { 'content-type': 'text/html' },
      },
    ),
  }, {
    RSA_APPLICATION_URL: 'https://tally.so/r/application',
    RSA_INTEREST_URL: 'https://tally.so/r/interest',
    RSA_PLAUSIBLE_DOMAIN: 'example.com',
  });
  const request = new Request('https://example.com/recruiting-season-accelerator/terms', {
    headers: { accept: 'text/html' },
  });

  const response = await worker.fetch(request, env);
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(html, /<title>Participant Terms \| Recruiting Season Accelerator<\/title>/);
  assert.match(
    html,
    /<link rel="canonical" href="https:\/\/example\.com\/recruiting-season-accelerator\/terms">/,
  );
  assert.match(html, /window\.__RSA_CONFIG__=/);
  assert.match(html, /https:\/\/tally\.so\/r\/application/);
  assert.match(
    html,
    /"canonicalUrl":"https:\/\/example\.com\/recruiting-season-accelerator"/,
  );
  assert.match(html, /data-domain="example\.com"/);
  assert.deepEqual(requests, [
    '/recruiting-season-accelerator/terms',
    '/',
  ]);
});

test('landing metadata includes social tags and structured event data', async () => {
  const { env } = createEnvironment({
    '/': new Response(
      '<!doctype html><html><head><meta name="description" content="Portfolio"><title>Portfolio</title></head><body></body></html>',
      { headers: { 'content-type': 'text/html' } },
    ),
  });
  const request = new Request('https://example.com/recruiting-season-accelerator', {
    headers: { accept: 'text/html' },
  });

  const response = await worker.fetch(request, env);
  const html = await response.text();

  assert.match(html, /property="og:image"/);
  assert.match(html, /name="twitter:card" content="summary_large_image"/);
  assert.match(html, /type="application\/ld\+json"/);
  assert.match(html, /Recruiting Season Accelerator Founding Cohort/);
});

test('worker serves robots and sitemap documents for the current host', async () => {
  const { env } = createEnvironment({});

  const robots = await worker.fetch(new Request('https://example.com/robots.txt'), env);
  const sitemap = await worker.fetch(new Request('https://example.com/sitemap.xml'), env);

  assert.equal(robots.headers.get('content-type'), 'text/plain; charset=utf-8');
  assert.match(await robots.text(), /Sitemap: https:\/\/example\.com\/sitemap\.xml/);
  assert.equal(sitemap.headers.get('content-type'), 'application/xml; charset=utf-8');
  assert.match(
    await sitemap.text(),
    /https:\/\/example\.com\/recruiting-season-accelerator\/faq/,
  );
});

test('static worker preserves 404 responses for missing non-HTML assets', async () => {
  const { env, requests } = createEnvironment({});
  const request = new Request('https://example.com/assets/missing.png', {
    headers: { accept: 'image/avif,image/webp' },
  });

  const response = await worker.fetch(request, env);

  assert.equal(response.status, 404);
  assert.deepEqual(requests, ['/assets/missing.png']);
});
