interface Env {
  ASSETS: Fetcher;
}

import { WorkerEntrypoint } from "cloudflare:workers";

export default class extends WorkerEntrypoint<Env> {
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
}
