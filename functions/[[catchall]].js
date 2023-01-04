export async function onRequest({ next, request }) {
  const file = await next()

  if (file.status === 404) {
    const url = new URL(request.url)
    url.hostname = `app.yourls.org`

    const app = await fetch(url, {
      redirect: 'manual',
    })

    if (app.status !== 404) {
      return app
    }
  }

  return file
}
