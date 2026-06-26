# Passwordless API

YOURLS allows API calls the old fashioned way, using `username` and `password` parameters (if your setup is private, obviously).

If you're worried about sending your credentials into the wild, you can also make API calls using a **secret signature token**.

## Signature token

Your secret signature token will be a 32 character string like `4ea59aab37f6df0755a6da98ee5ca85d`.

A secret signature token is unique, associated to one account, and can be used only for API requests. It cannot be used to
log in your YOURLS setup. You will find it in the Tools page of your YOURLS install.

**NB**: Can't see this signature on the Tools page? It's probably because your install is public. Therefore, you don't use a
login and password to use it. Therefore there's no signature token to be used instead of a login/password pair.

If you know what you are doing, you can customize the signature length or even content with filters `auth_signature_length` and `auth_signature`.

## Usage of the signature token

Use parameter `signature` in your API requests. Example:

`https://yoursite/yourls-api.php?signature=4ea59aab37f6df0755a6da98ee5ca85d&action=...`

## Usage of a time limited signature token

You can create signature token valid for a short period only (one hour by default)

First, craft the time limited signature token:

```php
<?php
$timestamp = time();
$signature = hash('sha256', $timestamp . '4ea59aab37f6df0755a6da98ee5ca85d' );
// $signature = "10c28ab4a8b1b6acf3bef1a3e3284f4984d... (64 chars)"
?>
```

The hash must be one of `sha256`, `sha384` or `sha512`, unless explicitly allowed by a plugin via
the `allowed_hash_algos` filter.

Now use parameters `signature`, `timestamp` and `hash` in your API requests. Example:

`https://yoursite/yourls-api.php?timestamp=$timestamp&signature=$signature&hash=sha256&action=...`

This URL would be valid for only 43200 seconds (12 hours), the default value of constant `YOURLS_NONCE_LIFE`.

To modify this duration, add the following to your `config.php`:
`define( 'YOURLS_NONCE_LIFE', number_of_seconds );`
(note this also affect all the internal links of YOURLS such as the ones to activate a plugin, delete a short URL, etc.)

**NB**: if you try to use a hash algorithm that your setup doesn't support, you will get a simple authentication error as if the timestamp or signature were incorrect.

## Reset your secret signature token

If for some reason you need to reset your signature (ie to generate a new one while making previous signature inoperative), simply modify the `YOURLS_COOKIEKEY` constant in your `config.php`.

Hint: you can simply copy the result from [api.yourls.org/services/cookiekey/1.0/](https://api.yourls.org/services/cookiekey/1.0/) to generate a random unique cookie.
