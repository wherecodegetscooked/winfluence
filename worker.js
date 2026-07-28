// Cloudflare Worker entry. Laeuft vor dem Static-Assets-Binding und
// liefert die gebaute SPA aus. Eigene Routen (API, Redirects, Header)
// hier vor dem ASSETS.fetch ergaenzen.

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/health") {
      return new Response(JSON.stringify({ status: "ok" }), {
        status: 200,
        headers: {
          "content-type": "application/json; charset=utf-8",
          "cache-control": "no-store",
        },
      });
    }

    return env.ASSETS.fetch(request);
  },
};
