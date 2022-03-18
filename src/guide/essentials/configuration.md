---
outline: deep
---

# Configuration

## MySQL settings

### `YOURLS_DB_USER`

MySQL username

Example: `define( 'YOURLS_DB_USER', 'joe' );`

### `YOURLS_DB_PASS`

MySQL password

Example: `define( 'YOURLS_DB_PASS', 'MySeCreTPaSsW0rd' );`

### `YOURLS_DB_NAME`

The database name

Example: `define( 'YOURLS_DB_NAME', 'yourls' );`

### `YOURLS_DB_HOST`

Database host

Example: `define( 'YOURLS_DB_HOST', 'localhost' );`

### `YOURLS_DB_PREFIX`

The name prefix for all the tables YOURLS will need

Example: `define( 'YOURLS_DB_PREFIX', 'yourls_' );`

## Site options

### `YOURLS_SITE`

Your (hopefully short) domain URL, no trailing slash, lowercase. If you pick the non-www version of your domain, don't use the www version in your browser (and vice-versa)

Example: `define( 'YOURLS_SITE', 'https://your-own-domain-here.com' );`

### `YOURLS_PRIVATE`

Private means the admin area will be protected with login/pass as defined below.

See [related page](/guide/essentials/private-or-public).

Example: `define( 'YOURLS_PRIVATE', true );`

### `YOURLS_UNIQUE_URLS`

Allow multiple short URLs for a same long URL.
Set to true to allow only one pair of shortURL/longURL (default YOURLS behavior), or to false to allow creation of multiple short URLs pointing to the same long URL (as `bit.ly` does)

Example: `define( 'YOURLS_UNIQUE_URLS', true );`

### `YOURLS_COOKIEKEY`

A random secret hash used to encrypt cookies. You don't have to remember it, make it long and complicated. Hint: generate a unique one at <https://yourls.org/cookie>

Example: `define( 'YOURLS_COOKIEKEY', 'qQ4KhL_pu|s@Zm7n#%:b^{A[vhm' );`

### `$yourls_user_passwords`

A list of username(s) and password(s) allowed to access the site if private.
Passwords can either be in plain text, or encrypted.

See [related page](/guide/essentials/credentials).

Example: `'joe' => 'mypassword'`

## URL Shortening settings

### `YOURLS_URL_CONVERT`

See [related page](/guide/essentials/charset).

### `$yourls_reserved_URL`

A list of reserved keywords that won't be used as short URLs. Define here negative, unwanted or potentially misleading keywords

Example: `'porn', 'faggot', 'sex', 'nigger', 'fuck', 'cunt', 'dick'`

## Optional settings

### `YOURLS_PRIVATE_INFOS`

If YOURLS_PRIVATE is set to true, you can still make stat pages public.

Example: `define('YOURLS_PRIVATE_INFOS', false);`

### `YOURLS_PRIVATE_API`

If YOURLS_PRIVATE is set to true, you can still make your API public.

Example: `define('YOURLS_PRIVATE_API', false);`

### `YOURLS_NOSTATS`

If YOURLS_NOSTATS is set to true, redirects won't be logged and there will be not stats available.

Example: `define('YOURLS_NOSTATS', true);`
