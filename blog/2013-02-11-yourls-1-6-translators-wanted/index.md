---
title: "YOURLS 1.6 : translators wanted !"
date: 2013-02-11
categories: 
  - "announcement"
  - "plans"
tags: 
  - "1-6"
  - "translation"
---

Change of plans for **YOURLS 1.6**. According to the RoadMap and previous posts here, the upcoming version 1.6 of YOURLS would introduce a new DB schema. But plans are made to be changed!

<!-- truncate -->

## Internaglobacalization

Localization has always been a long wanted feature for YOURLS ([issue #58](http://code.google.com/p/yourls/issues/detail?id=52), opened more than 3 years ago in September 2009). It has always been planned, but low priority. Then, two things happened.

First, a couple month ago, I had to set up a YOURLS instance on a French corporate intranet. It immediately occured to me that the lack of translation API was going to make things a little more complicated than expected, given all the strings that were hardcoded in English. I always picture individual users such as myself not having a problem using simple software in English, but it's a little different when you have to deal with a larger non-techie population.

Second, recently, [@LeoColomb](https://github.com/LeoColomb), a long time YOURLS user and prolific hacker, threw a patch in my face with the first draft of the translation API. Yep, in my face!

So, I decided to prioritize that feature. Over the last few days the committing pace has been unusually hectic and as of now, labelled [1.6-polyglot](http://yourls.googlecode.com/svn/trunk/includes/version.php), YOURLS is ready to be fully translated.

## Translators Wanted!

What does "ready for translation" mean exactly?

Instead of having hardcoded strings, such as `echo "Woah awesome"` and `return "You are nice"`, YOURLS now uses the very common `gettext` functions, and you'll see code like `yourls_e( 'URL added' )` and `return yourls__( 'You are nice' );`. These functions search for the translated string in a translation file, if available, or otherwise return the original string.

More detailed documentation to help translators will be written later, but it's a really straightforward simple process:

1. Download [YOURLS.pot](https://github.com/YOURLS/YOURLS.pot), the translation file template
2. Rename it to `[your-locale]`.po, where `[your-locale]` is typically _language code, underscore, country code_ (for instance in Portugal that would be **pt\_PT**, while in Brazil it'd be **pt\_BR**).
3. Install a translation software: it's nothing more than a text editor capable of reading .po files, showing you the untranslated string and a text box where you type in the translation, and saving a .mo file which is what PHP needs. A cross platform, simple yet complete editor is [Poedit](http://www.poedit.net/). There are also simple web based tools, such as [PoEditor](http://www.poeditor.com/) where you upload the .pot, translate, and download a .mo
4. Once you have your fully translated **pt\_BR.po** and the generated **pt\_BR.mo**, host them somewhere (preferably on a source control enabled environment such as Github or Google Code to make contributions easier) and ping me! I'll maintain a list of available translations.

To test your translation file as you create it :

1. [Download a nightly build or update via SVN](http://code.google.com/p/yourls/wiki/InstallFromSVN)
2. Drop your pt\_BR.po and pt\_BR.mo files in `user/languages`
3. Add `define( 'YOURLS_LANG', 'pt_BR' )` to your `config.php`
4. That's it! Play with YOURLS

Translators, it's important you join the party early: you'll help us make sure the translation API works as smooth as expected, and win the "First YOURLS Translation Ever" award :)

## What's the Roadmap, then ?

On top of localization, which not everyone gets excited about, YOURLS 1.6 will bring the usual load of bugfixes and little enhancements. Better URL sorting and searching in the admin interface, more filters and actions to allow for more flexible and powerful plugins, a smarter API, better security and sanitization functions, plus more awesome and more w00t.

As usual, no ETA, but we're speaking probably a couple weeks here. It really depends on the translator feedback.

Then it will be time to work on YOURLS 2.0 with the much awaited and needed DB structure change, and more goodness you'll be able to handle. From a [semantic versionning](http://semver.org/) point of view, it just made sense anyway to give such a change its own major release number rather than a simple dot release.

There are even more news to share, but that'll be another post :)
