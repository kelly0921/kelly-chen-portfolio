import assert from 'node:assert/strict';
import test from 'node:test';
import worker from '../worker/index.js';

function createEnvironment(responses) {
  const requests = [];

  return {
    requests,
    env: {
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

test('static worker falls back to the root document for direct HTML routes', async () => {
  const { env, requests } = createEnvironment({
    '/': new Response('<!doctype html><title>Portfolio</title>', {
      headers: { 'content-type': 'text/html' },
    }),
  });
  const request = new Request('https://example.com/recruiting-season-accelerator/terms', {
    headers: { accept: 'text/html' },
  });

  const response = await worker.fetch(request, env);

  assert.equal(response.status, 200);
  assert.match(await response.text(), /Portfolio/);
  assert.deepEqual(requests, [
    '/recruiting-season-accelerator/terms',
    '/',
  ]);
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
