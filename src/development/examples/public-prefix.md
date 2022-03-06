---
title: Public Prefix-N-Shorten
editLink: false
outline: deep
---

# Public Prefix-N-Shorten

Redirect all the "Prefix n' Shorten" URLs (eg `https://sho.rt/https://somelongurl.com/`) to a public interface instead of the admin area.

## Install

- In `/user/plugins`, create a new folder named `public-pns`
- In this new directory, create a blank file named `plugin.php`
- In this new file, cut and paste the following code
- Go to the Plugins administration page and activate the plugin

## Code

```php
<?php
/**
Plugin Name: Public Prefix-N-Shorten
Plugin URI: https://yourls.org/
Description: Redirect "Prefix n' Shorten" bookmarklets to public interface
Version: 1.0
Author: Ozh
Author URI: https://ozh.org/
**/

// URL of your public interface, with query parameter to which the long URL will be passed
// This URL must contain a query string with "parameter equals %" (eg "url=%")
define( 'OZH_PUBPNF_URL', 'https://shor.rt/public.php?url=%' );

yourls_add_action( 'load_template_redirect_admin', 'ozh_pubpnf' );
function ozh_pubpnf( $args ) {
        // Long URL requested?
        $url = $args[0];

        // If logged in and don't want to change behavior for logged in users, do nothing
        if( yourls_is_valid_user() === true )
                return;

        // Otherwise, interrupt
        $redirect = str_replace( '%', rawurlencode( $url ), OZH_PUBPNF_URL );
        yourls_redirect( $redirect, 302 );
        die();
}
```

## Usage

You must have a public interface up and running, duh. For instance rename the provided sample public interface to `public.php` and edit its look and feel to suit your needs.

This public interface must accept a long URL as a query parameter (for instance 'url' as in
the sample provided). Edit `OZH_PUBPNF_URL` to reflect the public interface location and the parameter name.
