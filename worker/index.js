const worker = {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);
    const acceptsHtml = request.headers.get('accept')?.includes('text/html');

    if (response.status !== 404 || request.method !== 'GET' || !acceptsHtml) {
      return response;
    }

    const rootUrl = new URL('/', request.url);
    return env.ASSETS.fetch(new Request(rootUrl, request));
  },
};

export default worker;
