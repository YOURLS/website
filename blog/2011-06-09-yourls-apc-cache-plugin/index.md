---
title: "Hot: APC Cache plugin for YOURLS"
date: 2011-06-09
categories: 
  - "plugins-2"
tags: 
  - "apc"
  - "cache"
---

I'm particularly excited by this one: [Ian Barber](http://twitter.com/ianbarber) got his hand dirty and wrote the first release of an [APC Cache plugin for YOURLS](https://github.com/ianbarber/Yourls-APC-Cache).
<!-- truncate -->

In case that's Greek to you, _APC_ stands for _Alternative PHP Cache_ and is a PHP extension that provides an _opcode cache_ for PHP: it caches data and compiled code in memory. From the readme:

> This plugin is designed to remove a lot of the database traffic from YOURLS, primarily the write load from doing the logging and click tracking. We have attempted to strike a balance between keeping most information, but spilling it in some cases in the name of higher performance.

If you have a server capable of running APC, especially if you're running a popular URL shortener, please give the plugin a try and send Ian some feedback!
