# First steps

Facing a problem? Something isn't working as expected? Before submitting a new issue, take your time and follow these few steps.

## Double check your `config.php`

99% of the time, errors are caused by a **user error** in their config file or server configuration.

Double check your config, read the readme that comes with YOURLS and all the pages here in this documentation.

## Disable plugins

Make sure one of your plugins isn't causing the issue. Disable them all, see if things works, and if so, re-enable plugins one by one with tests each time till you find the culprit. It could be either a plugin on its own, or two plugins conflicting with each other.

## Enable debugging mode

By default, most error messages are hidden in YOURLS, and this may end up with a blank screen (_ie_ the dreaded _White Screen Of Death_). Turn debugging **on** to display any error or warning, with the following line anywhere in your `config.php`:

```php
define( 'YOURLS_DEBUG', true );
```

Check this page for more advanced debugging techniques: [Debugging](/docs/development/debugging).

## Use latest release

If something isn't working as expected and is an actual confirmed bug, make sure you are using the [latest release](https://github.com/YOURLS/YOURLS/releases). Several bugs are fixed in each version.

## Check `.htaccess` / `web.config`

See [Server configuration](/docs/guide/server-configuration) page.

## Check server logs

If the error is produced on the server-side (_ie_ the page is generated with an error), most of the time you will find valuable information in the server logs.

Depending on the server software and configuration, this text file may be located somewhere like `/var/log/apache2/error.log`, `/usr/local/apache/logs/error_log`, `/xampp/apache/logs/error.log`, etc.

If you don't know where the error log is, you can look for the `ErrorLog` directive in the Apache configuration. If you don't know how to do this, ask your server admin.

## Use your browser developer tools

If the error is produced on the client-side (_ie_ the page is generated fine, but when you try to interact with it, something wrong happens), hunt for JavaScript errors in Ajax requests.

Depending on your browser, this can be done with the Firebug extension in Firefox, with Chrome DevTools, ... You'll find plenty of guides explaining how to do so (_eg_ [how to debug Ajax chrome](https://www.google.com/search?q=how+to+debug+ajax+chrome))

## STFW after you have RTFM

When you have **R**ead **T**he **F**_ine_ **M**anual but are still lost, please **S**earch **T**he **F**_ine_ **W**eb. Thousands of people have probably faced the same situation before and it may be documented already.

In particular, be sure to search in [issues](https://github.com/YOURLS/YOURLS/issues?q=is%3Aissue), open _and_ closed. Your problem may have been dealt with, already.

## Submit proper issues

Submitting an issue that is improperly or incompletely written is a waste of time for everybody. It's nothing complicated so please read the [Contributing Guide](https://github.com/YOURLS/.github/blob/master/CONTRIBUTING.md) before anything.
