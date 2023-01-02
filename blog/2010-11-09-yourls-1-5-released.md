---
title: YOURLS 1.5 "Ronnie James Dio"
authors:
  - ozh
---

I'm delighted to announce the availability of the [YOURLS 1.5 "Ronnie James Dio"](https://github.com/YOURLS/YOURLS/releases/tag/1.5) release.

<!--truncate-->

## \\m/ Dio \\m/

First, in the tradition of an [Open Source CMS](https://wordpress.org/) I particularly love and steal code from, I decided to baptize YOURLS release after the name of a musician, so I elected to pick someone I truly heart and who has been often with me when coding recently. But this post isn't about me being a [metalhead](https://www.last.fm/user/-ozh-), right? So, back to YOURLS. What's new?

## Plugins

The big new feature in YOURLS is a very cool plugin API. Plugins are simple PHP files that extend or modify features of YOURLS. Plugins are uberly cool because you can change how things work without modifying core files, and this way update YOURLS without losing your changes.
Plugins are rather [simple to write](https://docs.yourls.org/development/plugins.html), and the package comes with [a](https://docs.yourls.org/development/examples/qrcode.html) [few](https://docs.yourls.org/development/examples/preview.html) [sample](https://docs.yourls.org/development/examples/public-prefix.html) [plugins](https://docs.yourls.org/development/examples/rss.html) that you can use as examples to build your own. If you happen to also know that Open Source CMS I love, you'll see that things are _very similar_.

## Lots of cool stuff!

This release introduces other cool features or improvements:

- You can move your `config.php` in the new `/user` directory where plugins live. This way, when you want to update YOURLS, simply delete everything except your /user folder and upload fresh files.
- Shortening links is now more convenient than ever. There are 4 different bookmarklets, and the very handy "Prefix-n-shorten" feature allows you to simply type your site URL before any URL (like `sho.rt/https://very-long-url-to-shrink/bleh`).
- Page titles are now saved when you shorten a long URL

Check the almost detailed [changelog](https://github.com/YOURLS/YOURLS/releases/tag/1.5), or the very detailed [commit log](https://github.com/YOURLS/YOURLS/compare/1.4.3...1.5) for more.
Or, you know what? Simply check what's new in the admin area of your YOURLS setup 🙂

## But it still sucks 🙁

All things are not perfect yet and there will be a [few bugs](https://github.com/YOURLS/YOURLS/issues) to axe. In particular, you may experience a few kinks when YOURLS will be fetching the title of a remote page with funky characters.

Also, this release is still using a, hmmm, "rather poor"? yeah, seems polite enough, rather poor DB structure that is more or less what I implemented when I began coding on YOURLS and when I didn't plan for success or fun features. This DB schema will be just fine for most installs and use, but it's not scalable and is difficult to make evolve.

So, the next release may be a quick 1.5.1 in a couple of weeks if I get enough feedback to fix a few things I left in 1.5, and then I'll start working on the major rethinking of the DB structure (and a sure fun updater script) that is a pre-requisite to implement a load of [other exciting features](https://github.com/orgs/YOURLS/projects).

## Shorten up!

Thank you for using YOURLS. I hope you'll enjoy it as much as I enjoyed making it and improving it thanks to the invaluable feedback I got from a few users. Have fun!
