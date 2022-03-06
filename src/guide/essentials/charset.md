---
title: Character set
editLink: false
outline: deep
---

# Character set

In `user/config.php` the setting `YOURLS_URL_CONVERT` defines what characters short URLs will use

## `36` or `62`, nothing else

This rather cryptic setting defines the character set used for your short URL "keywords" (the `abc12` part in `https://sho.rt/abc12`) :

- with `36` : lower case alphanumeric, _ie_ allowed characters are `0123456789abcdefghijklmnopqrstuvwxyz`
- with `62` : mixed case alphanumeric, _ie_ allowed characters are `0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`

:::info Nerd explanation
The number represent the "base" a sequential or random number will be converted in. Base 36 has 36 characters (10 digits + 26 latin alphabet letters), base 62 has 62 characters (10 digits, 26 lower case and 26 upper case latin letters)
:::

## Short URLs will comply to this character set

When you create a new short URL with a custom keyword, any character not in the list will get removed. Examples:

- with `62`, if you create a short URLs with keyword `OMG@🤒ozh♛!` it will become `OMGozh` (non alpha numeric stripped)
- with `36`, short URL keyword `OMGozh` will become `ozh` (non lower case alpha numeric stripped)

## But I want to use a custom character set

You want to restrict your short URLs keywords to, say, `12345abcde` ? No problemo. That's why YOURLS has a plugin architecture, so you can use and make plugins to make it work the way you need. See [Plugins](/guide/extend/plugins).

## Recommendation

We suggest you:

- do not change this setting after you're created some short URL
- use latin character for your keywords
