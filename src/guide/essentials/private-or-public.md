# Private/Public

In your `config.php` you have to define constant `YOURLS_PRIVATE`. It can be one of these two lines:

```php
<?php
// Private:
define( 'YOURLS_PRIVATE', true );
// Or public:
define( 'YOURLS_PRIVATE', false );
```

## Private

Setting to `define( 'YOURLS_PRIVATE', true );` (default setting) will make your admin area (`https://sho.rt/admin/`) protected by a login/password form.

## Public

Setting to `define( 'YOURLS_PRIVATE', false );` will make your admin area **free to access** to anyone with the URL. Use this only if you're running a test setup, or for a setup shared by colleagues on a private intranet, for instance.

Also, since there is no login/password needed, there will be no Secret Token on the Tools page for the PasswordlessAPI.

## Private + Public Interface

If you want to run your own little bitly, you want to:

- set your install to **private**: `define( 'YOURLS_PRIVATE', true );`
- install a **public interface** in the root directory. There's a sample one provided in the package (see `sample-public-front-page.txt`)
- read the page about [Public Shortening](/guide/advanced/public-shortening) for important tips and advices.
