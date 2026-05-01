---
title: "It's Alpha but it's stable. For now!"
date: 2013-01-11
categories: 
  - "announcement"
tags: 
  - "1-6"
  - "alpha"
---

As of writing, YOURLS version number says "`1.6-alpha`". Despite boasting an intimidating "alpha" tag, it's currently completely stable: I didn't introduce yet any major change, especially in the DB structure, so feel really free to update today [using SVN](http://yourls.org/installsvn) or with a [nightly build](http://yourls.org/nightly-builds/). For the record, I'm using that version on _yourls.org_ and my personal _ozh.in_, amongst others.
<!-- truncate -->

This said, expect some breakages in the future: I'll slightly refactor the [way action works](http://code.google.com/p/yourls/issues/detail?id=1203), I'll change a bit [API returns](http://code.google.com/p/yourls/issues/detail?id=1277), probably a few other things, and of course, there'll be DB upgrading which is always the scary operation of all :)

After the stable version is released, there will be thorough documentation to help plugin authors update their code. No worries, that'll be quick and simple.

When I'll start implementing potentially breaker features, I'll change the version number to something more frightening such as "`1.6-alpha-dont-use`", so be sure to [check it](http://yourls.org/version) before you update on a live setup.

So, if you've always had ideas or thoughts for something crazy but not necessarily backward compatible, now might be a good time to suggest them :)
