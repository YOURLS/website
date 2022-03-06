---
title: QRCode
editLink: false
outline: deep
---

# QRCode

Add "`.qr`" to short URLs to display the shorturl's QR code.

## Install

- In `/user/plugins`, create a new folder named `qr-code`
- In this new directory, create a blank file named `plugin.php`
- In this new file, cut and paste the following code
- Go to the Plugins administration page and activate the plugin

## Code

```php
<?php
/*
Plugin Name: QR Code Short URLS
Plugin URI: https://yourls.org/
Description: Add .qr to shorturls to display QR Code
Version: 1.1
Author: Ozh
Author URI: https://ozh.org/
*/

// Kick in if the loader does not recognize a valid pattern
yourls_add_action('redirect_keyword_not_found', 'ozh_yourls_qrcode');

function ozh_yourls_qrcode( $request ) {
        // Get authorized charset in keywords and make a regexp pattern
        $pattern = yourls_make_regexp_pattern( yourls_get_shorturl_charset() );

        // Shorturl is like bleh.qr?
        if( preg_match( "@^([$pattern]+)\.qr?/?$@", $request[0], $matches ) ) {
                // this shorturl exists?
                $keyword = yourls_sanitize_keyword( $matches[1] );
                if( yourls_is_shorturl( $keyword ) ) {
                        // Show the QR code then!
                        header('Location: https://chart.apis.google.com/chart?chs=200x200&cht=qr&chld=M&chl='.YOURLS_SITE.'/'.$keyword);
                        exit;
                }
        }
}
```
