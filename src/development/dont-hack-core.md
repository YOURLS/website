---
title: Don't hack core
editLink: false
outline: deep
---

# Don't hack core

## Why you MUST NOT alter core files.

You're running YOURLS and are having fun with it. But you want it to do this here and have that, there. So you modified a bit a few cores files, so the output and functionality suits your needs

## You're doing it wrong.

What when there's a new version of YOURLS?

What if a critical security YOURLS release needs to get installed ASAP?

What when you install a plugin that is supposed to interfere with areas of YOURLS you've modified?

I'll tell you what: **headaches** and **disillusion**, plus a **major pain** to get it compatible with your custom fork of YOURLS.

## Wow, I see. What to do then?

Don't modify core: **override core**. YOURLS, like many well designed apps and CMS, comes with a Plugin API to make it flexible and modular.

Implement your custom features in a separate files that will be left untouched when you update YOURLS.

There's a tutorial on how to make [Plugins](/development/plugins). There's an ever growing [Plugin List](https://github.com/YOURLS/awesome-yourls) that may already feature what you're looking for.

**Don't hack core**. Seriously.
