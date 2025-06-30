export async function GET(request: Request) {
  const urlToFetch = new URL(request.url);
  urlToFetch.host = `u.expo.dev`;
  urlToFetch.port = '';
  urlToFetch.protocol = 'https:';
  return await fetch(urlToFetch, {
    method: request.method,
    headers: {
      'accept': request.headers.get('accept') || '*/*',
      'accept-encoding': request.headers.get('accept-encoding') || 'gzip, br',
      'cache-control': 'no-cache',
      host: `u.expo.dev`,
    },
  });
}