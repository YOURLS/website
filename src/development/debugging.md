# Debugging

## `YOURLS_DEBUG`

In your `user/config.php`:

```php
define('YOURLS_DEBUG', true);
```

Prints some debug info as well as the SQL query performed, in pages footer

## Run SQL queries manually

Have PHPMyAdmin or something similar at hand. It's handy to run SQL queries manually when something doesn't feel right (for instance, a YOURLS update that doesn't work for you).

## The `all` hook

In YOURLS 1.8.1+, you can define a custom function and hook `all` filters or actions (or both) that YOURLS triggers to it. Do **NOT** use this hook on a live site.

This is neat to better understand the flow of events within YOURLS, and debug plugins of course.

```php
<?php
/*
Plugin Name: Minimalist Super Debug
Description: Small plugin, maxi verbose debug
Version: 0.1
Author: Ozh
*/

// If xdebug is on, make sure the var_dump() outputs are not trimmed
ini_set('xdebug.var_display_max_depth', '10');
ini_set('xdebug.var_display_max_children', '256');
ini_set('xdebug.var_display_max_data', '1024');


yourls_add_filter( 'all', 'ozh_superdebug', 10 );
yourls_add_action( 'all', 'ozh_superdebug', 20 );

function ozh_superdebug(...$args) {
    var_dump($args);
    var_dump( debug_backtrace() );
    echo "________________\n\n";
}
```

**Note**: If you want to trace filters and actions using the same function, you'll need as above to use a different priority so the second `yourls_add_**` doesn't overwrite the first one.

A slighly less verbose and more usable plugin:

```php

<?php
/*
Plugin Name: List all actions and filters in the footer
Description: just as the name says
Version: 0.1
Author: Ozh
*/
ini_set('xdebug.var_display_max_depth', '10');
ini_set('xdebug.var_display_max_children', '256');
ini_set('xdebug.var_display_max_data', '1024');

// No direct call
if( !defined( 'YOURLS_ABSPATH' ) ) die();

global $ozh_debug;

yourls_add_action( 'all', 'ozh_debug_in_footer', 20 );
yourls_add_filter( 'all', 'ozh_debug_in_footer', 10 );
function ozh_debug_in_footer(...$args) {
    global $ozh_debug;
    $ozh_debug[] = sprintf("%s : %s", $args[0], $args[1]);
}

yourls_add_action('shutdown', 'ozh_debug_in_footer_print');
function ozh_debug_in_footer_print() {
    global $ozh_debug;
    echo "<pre style='text-align:left'>";
    print_r($ozh_debug);
    echo "</pre>";
}

```

Example output in the page footer:

```html
Array ( [0] => filter : shunt_get_db [1] => filter : get_db [2] => action :
plugins_loaded [3] => filter : kses_allowed_entities [4] => filter :
kses_allowed_protocols [5] => filter : shunt_get_db [6] => filter : get_db [7]
=> filter : is_admin (...)
```
