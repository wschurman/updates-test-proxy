export async function GET(request: Request) {
  const urlToFetch = new URL(request.url);
  urlToFetch.host = `u.expo.dev`;
  urlToFetch.port = '';
  urlToFetch.protocol = 'https:';

  // copy all headers from the request if they begin with expo- or eas-, case insensitive
  const updateRequestHeaders = Object.fromEntries(
    Array.from(request.headers.entries())
      .filter(([key]) =>
        key.toLowerCase().startsWith('expo-') || key.toLowerCase().startsWith('eas-')
      )
  );

  try {
    const result = await fetch(urlToFetch, {
      method: request.method,
      headers: {
        ...updateRequestHeaders,
        'accept': request.headers.get('accept') || '*/*',
        'accept-encoding': request.headers.get('accept-encoding') || 'gzip, br',
        'cache-control': 'no-cache'
      },
    });

    return new Response(result.body, {
      status: result.status,
      headers: result.headers,
    });
  } catch(e) {
    console.error(e);
    return new Response('Error', { status: 500 });
  }
}