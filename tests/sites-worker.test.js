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

test('former program routes redirect to the unified Cloudflare microsite', async () => {
  const { env, requests } = createEnvironment({});
  const request = new Request('https://example.com/recruiting-season-accelerator/terms', {
    headers: { accept: 'text/html' },
  });

  const response = await worker.fetch(request, env);

  assert.equal(response.status, 301);
  assert.equal(response.headers.get('location'), 'https://recruiting-accelerator-apply.pages.dev/terms');
  assert.deepEqual(requests, []);
});

test('program redirects preserve campaign parameters', async () => {
  const { env } = createEnvironment({});
  const request = new Request('https://example.com/recruiting-season-accelerator?utm_source=linkedin', {
    headers: { accept: 'text/html' },
  });

  const response = await worker.fetch(request, env);

  assert.equal(response.status, 301);
  assert.equal(
    response.headers.get('location'),
    'https://recruiting-accelerator-apply.pages.dev/?utm_source=linkedin',
  );
});

test('worker serves robots and sitemap documents for the current host', async () => {
  const { env } = createEnvironment({});

  const robots = await worker.fetch(new Request('https://example.com/robots.txt'), env);
  const sitemap = await worker.fetch(new Request('https://example.com/sitemap.xml'), env);

  assert.equal(robots.headers.get('content-type'), 'text/plain; charset=utf-8');
  assert.match(await robots.text(), /Sitemap: https:\/\/example\.com\/sitemap\.xml/);
  assert.equal(sitemap.headers.get('content-type'), 'application/xml; charset=utf-8');
  assert.doesNotMatch(await sitemap.text(), /recruiting-season-accelerator/);
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
