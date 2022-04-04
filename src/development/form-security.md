# Security in YOURLS forms

YOURLS forms and internal links make extensive use of **nonces** (a **n**umber used only **once**) to avoid being tricked into doing something you didn't want to.

If you can access the admin area, you have **authorization**. Nonce are here to make sure you also have **intention**.

## What are nonces

Nonces are the crytpic strings you'll find for instance on internal links, such as the one to activate a plugin in your admin interface :

```
https://sho.rt/admin/plugins.php?action=activate&plugin=joe-plugin&nonce=47876625a6
```

This nonce is here to verify that a user’s action is intentional and originates from within the YOURLS admin.
Nonces are unique to the YOURLS install, to the YOURLS user, to the requested action, and to the time of the action (12 hour window).
If any of these things changes, the nonce is invalid.

For example, thanks to nonces, no one can trick you into deactivating a plugin (or deleting a short URL, or anything done in the admin interface) because the following link misses a valid nonce:

```
https://sho.rt/admin/plugins.php?action=deactivate&plugin=joe-plugin
```

## Protect links with nonces

If you’re performing actions based on the clicking of links, you can add a nonce to your links using `yourls_nonce_url()` which takes two parameters : the action name, and the URL.

Example:

```php
$url = yourls_admin_url('plugins.php?page=joe-plugin');
var_dump($url);
// "http://sho.rt/admin/plugins.php?page=joe-plugin"

var_dump(yourls_nonce_url('joe-plugin-some-action', $url));
// "http://sho.rt/admin/plugins.php?page=joe-plugin&nonce=845aa035e4"
```

On said page, you will now be able to check that the nonce is valid, see below.

## Protect forms with nonces

To protect your `<form>` with a nonce, simply use the `yourls_nonce_field()` function within the `<form>` :

```php
<form action="....">
...
<?php yourls_nonce_field('joe-plugin-some-action'); ?>
...
</form>
```

## Verify nonces

Before performing the action protected by the nonce, use `yourls_verify_nonce()` with the name of the requested action. Example:

```php
<?php
// Process form to delete all URLs as requested
function joe-plugin-delete-everything() {
    // make sure there's a valid nonce -- if not the script will abort
    yourls_verify_nonce( 'joe-plugin-some-action' );

    // Now delete everything
    ...
```
