export async function GET(request: Request) {
  const urlToFetch = new URL(request.url);
  urlToFetch.host = `u.expo.dev`;
  urlToFetch.port = "";
  urlToFetch.protocol = "https:";
  return await fetch(urlToFetch, {
    method: request.method,
    headers: {
      ...(request.headers.get("expo-platform")
        ? { "expo-platform": request.headers.get("expo-platform") as string }
        : {}),
      ...(request.headers.get("expo-channel-name")
        ? {
            "expo-channel-name": request.headers.get(
              "expo-channel-name"
            ) as string,
          }
        : {}),
      ...(request.headers.get("expo-runtime-version")
        ? {
            "expo-runtime-version": request.headers.get(
              "expo-runtime-version"
            ) as string,
          }
        : {}),
      accept: request.headers.get("accept") || "*/*",
      "accept-encoding": request.headers.get("accept-encoding") || "gzip, br",
      "cache-control": "no-cache",
      host: `u.expo.dev`,
    },
  });
}
