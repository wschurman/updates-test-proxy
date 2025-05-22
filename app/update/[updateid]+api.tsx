export async function GET(request: Request) {
  const urlToFetch = new URL(request.url);
  urlToFetch.host = `staging-u.expo.dev`;
  urlToFetch.port = '';
  urlToFetch.protocol = 'https:';
  return await fetch(urlToFetch, {
    method: request.method,
    headers: {
      ...Object.fromEntries(request.headers.entries()),
      'Accept-Encoding': '*',
      'cache-control': 'no-cache',
      host: `staging-u.expo.dev`,
    },
  });
}