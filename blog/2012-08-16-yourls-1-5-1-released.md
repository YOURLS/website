---
title: YOURLS 1.5.1
authors:
  - ozh
---

I'm happy to announce that [YOURLS 1.5.1](https://github.com/YOURLS/YOURLS/releases/tag/1.5.1) is available and waiting for you. Get it quick, the first 1,000 installs get 20% off the regular price!

<!--truncate-->

## What's new

YOURLS 1.5.1 is a "minor" release, as in "there are no really new important features but lots of improvements and bug fixes". Some very cool stuff nonetheless, which are:

- You can now encrypt your passwords in the config file instead of storing them in clear text. See [Using encrypted salted passwords](https://docs.yourls.org/guide/essentials/credentials.html)
- YOURLS stat pages now uses the new [Google Visualization API](https://developers.google.com/chart/). See [that page](https://yourls.org/cookie+) for example.
- Stat pages are much more intelligently generated, SQL wise. That alone makes it worth upgrading
- The API is now JSONP compliant, for all you Javascript nerds
- Drop a favicon in the `/user` directory and YOURLS'll use it

You can check a slightly more detailed [changelog.txt](https://github.com/YOURLS/YOURLS/releases/tag/1.5.1) and, if you're really wanting to keep an eye on development, follow [@YOURLS](https://twitter.com/YOURLS) (for more general news about YOURLS, and other stuff, you'll want to follow [Ozh](https://twitter.com/ozh) instead -- much more entertaining 🙂

## 15 second updating

That'll be a quick update: just upload the new archive to overwrite all your files, and that's it. No scary update page to remind you that everything should go fine but you should backup everything just in case. Note that I'm not saying that you shouldn't backup regularly anyway 🙂

Oh, and while you're downloading the latest archive, spend a second or two on [yourls.org](https://yourls.org/) and give that "social" icons the spanking they deserve! The [Showcase section](https://yourls.org/#More) has been recently updated and, man, there are quite a few cool things around made with or for YOURLS!

## What's next

I shall now start to make up my mind about the next database schema for 1.6 and work on the next iteration. This will imply lots of DB changes and I'm truly scared because this is my sucky area 🙂

I'm also currently pondering over moving the project on GitHub or not, see previous blog post on that subject.

OK, those last two paragraphs make me sound like I just can't make any quick decision, but, Ma, I swear this isn't what it looks like! 🙂

Now be a good boy and tell a friend to update while you're updating, will you?
