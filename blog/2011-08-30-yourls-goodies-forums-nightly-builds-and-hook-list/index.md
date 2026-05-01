---
title: "YOURLS goodies: forums, nightly builds and hook list."
date: 2011-08-30
categories: 
  - "announcement"
  - "plugins-2"
tags: 
  - "forums"
  - "hooks"
  - "nightly-builds"
  - "plugins"
---

There are a few things I've discreetly mentioned over the past weeks, either on Twitter ([follow me](http://twitter.com/ozh "@ozh")!) or through the [project wiki pages](http://code.google.com/p/yourls/w/list), that are well worth an official blog post: **forums**, **nightly builds** and **hook list**.

<!-- truncate -->

## 1\. Forums!

Some time ago, I've setup a few [YOURLS forums](http://ozh.dreamhosters.com/forums/). There are currently 3 forums:

1. [General discussion](http://ozh.dreamhosters.com/forums/forum/general-discussion/): show off your cool public interface or personalized YOURLS index page with stats and stuff, discuss anything, bounce ideas.
2. [Plugins](http://ozh.dreamhosters.com/forums/forum/plugins/): anything related to plugins. Introduce yours and ask for feedback, suggest plugin ideas.
3. [Help Wanted!](http://ozh.dreamhosters.com/forums/forum/help-wanted/): if you have a problem and need someone to lend a hand, try here. The project issue tracker is not suitable for personal support requests (its goals are to report defects or suggest feature requests, not troubleshoot your own unique personal .htaccess issue), but this forum is. Maybe some freelancers will even get a couple paid gigs here too?

If these forums do meet a need and become active, I may ask a few volunteers to help moderate it in the future.

## 2\. Nightly builds!

There are now [YOURLS nightly builds](http://yourls.org/nightly-builds/) generated, well, every night. This is aimed at users who want to update their install (either to code plugins or to fix bugs without waiting for an official package) and don't know [how to update YOURLS with SVN](http://code.google.com/p/yourls/wiki/InstallFromSVN).

For the record, unless stated otherwise the [current trunk](http://yourls.googlecode.com/svn/trunk/) version of YOURLS is safe to run on a live site. For instance, I run it on yourls.org and also my personal URL shortener, ozh.in, and things have always been fine.

Remember: when coding plugins, it's recommended to use the latest available, that is either running trunk or installing a nightly build. Which leads to me third point:

## 3\. Hook list!

YOURLS plugin coders will be pleased to know that there is now an exhaustive and always up to date list of [YOURLS actions and filters](http://yourls.org/hooklist.php). This list is generated every night against the current trunk version, thanks to the help of a smart user who crafted a [neat perl script](http://code.google.com/p/yourls/issues/detail?id=891).
