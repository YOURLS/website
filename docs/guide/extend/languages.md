# Languages

YOURLS supports localization: this means if a language file for YOURLS in available in your language, YOURLS will speak your language!

## Available languages

See [github.com/YOURLS/awesome-yourls](https://github.com/YOURLS/awesome-yourls)

Your language is not available so you'd like to translate YOURLS? See below!

## Install your language

If translation files for your language are available:

1. In `config.php` add or edit the following line: `define( 'YOURLS_LANG', 'fr_FR' );`
1. In directory `user/languages`, drop the two files `fr_FR.po` et `fr_FR.mo`

Of course, replace `fr_FR` with the appropriate language code.

## Translate

If YOURLS is not available in your language, be the one that will create the translation files! It's easy and no technical knowledge is required.

See this article: [How to create your own translation file for YOURLS](https://blog.yourls.org/2013/02/workshop-how-to-create-your-own-translation-file-for-yourls/)

:::tip Get your code ready for translation
Check out the [dedicated guide](/docs/development/i18n) for developers.
:::
