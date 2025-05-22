export async function GET(request: Request) {
  const urlToFetch = new URL(request.url);
  urlToFetch.host = `staging-assets.eascdn.net`;
  urlToFetch.port = '';
  urlToFetch.protocol = 'https:';
  urlToFetch.pathname = urlToFetch.pathname.replace('/asset', '');
  return await fetch(urlToFetch, {
    method: request.method,
    headers: {
      ...Object.fromEntries(request.headers.entries()),
      'Accept-Encoding': '*',
      'cache-control': 'no-cache',
      host: `staging-assets.eascdn.net`,
    },
  });
}