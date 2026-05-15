interface Env {
  ASSETS: Fetcher;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url)
    url.hostname = `app.yourls.org`

    const app = await fetch(
      new Request(
        url.toString(),
        new Request(request, {
          redirect: 'manual',
        }),
      ),
    )

    if (app.status !== 404) {
      return app
    }

    return env.ASSETS.fetch(request);
  }
} satisfies ExportedHandler<Env>;
