---
title: YOURLS 1.10 "Tati" released
authors:
  - dgw
tags:
  - release
slug: /2025/04/yourls-1-10-tati-released
---

Hello everyone, we're excited to announce the release of [YOURLS 1.10](https://github.com/YOURLS/YOURLS/releases/tag/1.10.0) \\o/

<!--truncate-->

## Salute to Tatiana « Tati » Shmayluk \\m/

In our tradition to name a new release after a metal vocalist, we're dedicating 1.10 to Tatiana "Tati" Shmayluk, frontwoman of Ukrainian heavy metal band [Jinjer](http://jinjer-metal.com/). I'm in awe of her ability to scream her throat out almost every night on tour, and her courage to face anxiety off-stage without the help of alcohol (two years sober!). If you haven't listened to Jinjer before, why not start with the badass title track from their new album, ["Duél"](https://www.youtube.com/watch?v=hEt3MajR0cU)? 🤘

![](./Tatiana.jpg)

> Tatiana Shmayluk of Jinjer - [photo](https://commons.wikimedia.org/wiki/File:20190802_Wacken_Wacken-Open-Air_Jinjer_0306.jpg) ([CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.en)) by [Markus Felix](https://commons.wikimedia.org/wiki/User:MarkusFelix)

## What's new this time?

YOURLS 1.10 is a big jump for future compatibility. Most of the work that went into this release was on making sure PHP 8.4 and MySQL 8+ will work. Of course, there are also bug fixes: to the login page, searching your shorturls, and API return codes.

Note that YOURLS now requires **PHP 8.1** as a minimum. We also run tests on every version up to and including PHP 8.4.

Those interested will find more boring details in the [CHANGELOG](https://github.com/YOURLS/YOURLS/blob/master/CHANGELOG.md) as usual.

### Even more documentation improvements

We took our VuePress docs and made them even better. The documentation now lives inside YOURLS' main website at [yourls.org/docs](https://yourls.org/docs), putting everything together for us to keep updated more easily. Switching to Docusaurus 2 helped with that **AND** kept both of the main points for users:

- The whole website is fully searchable with as-you-type page & section suggestions

- There's still an "Edit this page" link to quickly propose fixes to [YOURLS/website](https://github.com/YOURLS/website).

## Wrapping it up

Over the years YOURLS has been consistently in the [Top 100 PHP projects on GitHub](https://github.com/ozh/top_100_PHP_projects) and we are really humbled and honoured. From the bottom of our hearts, we're sending a warm thank you to every people using YOURLS in small personal projects or large corporate environment, to people writing plugins and providing materials that make a [vivid ecosystem](https://github.com/YOURLS/awesome-yourls), to people [financially supporting](https://yourls.org/sponsor) the project, and to everyone telling the world about it!

Now it's time to do your part!

- [Update YOURLS](https://github.com/YOURLS/YOURLS/releases)! As usual, this would make a nice occasion for a little backup 😉
- Tweet about this release, make friends know about it and entice them to update
- Star us on GitHub if you haven't already 😉
- Plugin author? [Write some tests](https://github.com/YOURLS/YOURLS-test-suite-for-plugins/)!
- Translation maintainer? [Update your translation](https://github.com/YOURLS/YOURLS.pot)!

Peace to you, and Слава Україні! 🇺🇦
