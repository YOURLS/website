---
title: Public shortening
editLink: false
outline: deep
---

# Public shortening

Tips and must-do things if you run a public shortening interface.

## Public Interface

Want to run your own little *bitly*? You need what is called a **public interface** along with your **private** YOURLS install. Make sure you read [Private Or Public](/guide/essentials/private-or-public) first.

A sample public interface is provided, named `sample-public-front-page.txt`. Rename it as a `.php` file and customize it to suit your needs.

You will find examples and inspiration in the **More / Showcase** section of the `readme.html`

## Public API

Similarly, you can run a public API with a private install. There is also a sample file provided, named `sample-public-api.txt`.

## Spam

If you run a public interface, you will have to deal with spam and if you're not prepared, your webhost will not like it and eventually shut your account down.

Read the page about [Abuse](/guide/troubleshooting/abuse). Install anti spam plugins from the [Plugin List](https://github.com/YOURLS/awesome-yourls) or even consider adding a [Captcha](http://blog.yourls.org/2015/05/integrating-the-new-google-recaptcha-with-yourls/). Also, read this [blog post](http://blog.yourls.org/2013/03/getting-spam-links-in-yourls-read-this/).

## Protocols

Out of the box, YOURLS 1.6+ allows URLs with common protocols such as `ftp://`, `mailto:`, `ssh://` or `facetime://`. See [Custom Protocols](/guide/advanced/custom-protocols) for more info.

This is neat if you trust users, this is most likely unwanted if anyone can shorten links. It is easy to define what protocols will be allowed:

### Globally

To **globally** enforce a custom set of allowed protocols and blacklist all others, just add the following at the end of your `config.php`:

```php
$yourls_allowedprotocols = array( 'http://', 'https://', 'facetime://' );
```

### Depending on the user and context

To contextually enforce depending on the user (logged in or not), use a plugin such as [Custom Protocols](https://github.com/YOURLS/custom-protocol)

## Performance

Often asked is the question about the kind of webhost and server you need to run your public interface. There is no short answer: it completely depends on traffic & usage you expect.

YOURLS itself isn't much of a resource eater. The CPU load is virtually null and a redirection costs nothing. There's only a small SQL cost: each redirection generates 2 `read` queries and 2 `write` queries. Use these numbers to estimate what your web hosting is capable of.

If you need further tweaking, you can install cache plugins or disable the logging - read the README.
