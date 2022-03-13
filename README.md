<h1 align="center">
  <a href="https://yourls.org">
    <img src="src/public/yourls-docs-logo.png" width=66% alt="YOURLS">
  </a>
</h1>

> The sources of the [documentation](https://docs.yourls.org) for [YOURLS](https://yourls.org)

## Contribute

See something wrong or incomplete ? Please check our [Contributing Guidelines](https://github.com/YOURLS/.github/blob/master/CONTRIBUTING.md).

The docs are all the `.MD` files in the `src/` directory. We will more than happily review pull requests!

## Build locally

[YOURLS docs](https://docs.yourls.org/) is a static site built with VitePress. You will need `npm` and `yarn`, then:

```shell
$ yarn add --dev vitepress # install needed dependencies
$ yarn build               # build static site (in .vitepress/dist)
$ yarn serve               # serve site at http://localhost:5000/
```

## License

Free software. Do whatever the hell you want with it.  
YOURLS is released under the [MIT license](LICENSE).
