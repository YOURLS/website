---
title: Passwordless API
editLink: false
outline: deep
---

# Passwordless API

YOURLS allows API calls the old fashioned way, using `username` and `password` parameters (if your setup is private, obviously). If you're worried about sending your credentials into the wild, you can also make API calls using a **secret signature token**.

## Signature token

Your secret signature token will be a string like `1002a612b4`

A secret signature token is unique, associated to one account, and can be used only for API requests. It cannot be used to log in your YOURLS setup. You will find it in the Tools page of your YOURLS install.

**NB**: Can't see this signature on the Tools page? It's probably because your install is public. Therefore, you don't use a login and password to use it. Therefore there's no signature token to be used instead of a login/password pair.

## Usage of the signature token

Use parameter `signature` in your API requests. Example:

`https://yoursite/yourls-api.php?signature=1002a612b4&action=...`

## Usage of a time limited signature token

You can create signature token valid for a short period only (one hour by default)

First, craft the time limited signature token:

```php
<?php
$timestamp = time();
$signature = md5( $timestamp . '1002a612b4' );
// Replace with your own secret signature token. Example result:
// $signature = "ed8d12124fc7916b00e3ecd7dc2c1d6a"
?>
```

Now use parameters `signature` and `timestamp` in your API requests. Example:

`https://yoursite/yourls-api.php?timestamp=$timestamp&signature=$signature&action=...`

This URL would be valid for only 43200 seconds (12 hours), the default value of constant `YOURLS_NONCE_LIFE`.

To modify this duration, add the following to your `config.php`:
`define( 'YOURLS_NONCE_LIFE', number_of_seconds );`
(note this also affect all the internal links of YOURLS such as the ones to activate a plugin, delete a short URL, etc...)

### Use other hash algorithms than `md5`

From YOURLS 1.7.7 you can use any hash function instead of `md5()`. Simply add the `hash=<hash algo>` argument to your API request, for instance:

```php
<?php
$timestamp = time();
$signature = hash('sha512', $timestamp . '1002a612b4' );
// $signature = "10c28ab4a8b1b6acf3bef1a3e3284f4984d... (128 chars)"
?>
```

Now use `https://yoursite/yourls-api.php?timestamp=$timestamp&signature=$signature&hash=sha512&action=...`

**NB**: if you try to use a hash algorithm that your setup doesn't support, you will get a simple authentication error as if the timestamp or signature were incorrect

## Reset your secret signature token

If for some reason you need to reset your signature (ie to generate a new one while making previous signature inoperative), simply modify the `YOURLS_COOKIEKEY` constant in your `config.php`. Hint: you can simply copy the result from <https://api.yourls.org/services/cookiekey/1.0/> to generate a random unique cookie.
