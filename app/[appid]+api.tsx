export async function GET(request: Request) {
  const urlToFetch = new URL(request.url);
  urlToFetch.host = `u.expo.dev`;
  urlToFetch.port = "";
  urlToFetch.protocol = "https:";

  const proxyRes = await fetch(urlToFetch, {
    method: request.method,
    headers: {
      accept: request.headers.get("accept") || "*/*",
      "accept-encoding": request.headers.get("accept-encoding") || "gzip, br",
      "cache-control": "no-cache",
      host: `u.expo.dev`,
    },
  });

  const body = await proxyRes.arrayBuffer();

  const responseHeaders = new Headers(proxyRes.headers);
  responseHeaders.set("Access-Control-Allow-Origin", "*");
  responseHeaders.set("Access-Control-Allow-Methods", "GET, OPTIONS");
  responseHeaders.set("Access-Control-Allow-Headers", "Content-Type");

  return new Response(body, {
    status: proxyRes.status,
    headers: responseHeaders,
  });
}

export function OPTIONS(): Response {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
