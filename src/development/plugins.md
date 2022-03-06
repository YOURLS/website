---
title: Plugins
editLink: false
outline: deep
---

# Plugins

YOURLS features a plugin architecture and API. Plugins are additional PHP scripts that extend the functionalities or features of YOURLS. The core of YOURLS is designed to be as light as possible and avoid bloat (implementing functions not everybody needs) and to allow for easy customization.

Using the plugin architecture, you can add new features to YOURLS without having to modify core files. This way, your changes won't be lost when you upgrade your YOURLS installation. Because, [don't hack core](/development/dont-hack-core).

## Structure of a Plugin File

A plugin file needs to be named `plugin.php` and to be located in its own subdirectory of `[YOURLS_ROOT]/user/plugins`, _eg_: `YOURLS_ROOT/user/plugins/my_sample_plugin/plugin.php`.

The plugin file `plugin.php` needs to begin with a header like the following one:

```php
<?php
/*
Plugin Name: My Sample Plugin
Plugin URI: https://your-own-domain-here.com/articles/hey-test-my-sample-plugin/
Description: This plugin does something and something else
Version: 1.0
Author: Ozh
Author URI: https://ozh.org/
*/
```

## Plugin API

YOURLS core uses two kinds of 'hooks', _filters_ and _actions_, allowing your plugin to 'hook into' what YOURLS does.

- _actions_ are the hooks YOURLS triggers at specific points or during specific action. It's a way of telling "hey, this particular event just occurred", so your plugin can execute a defined function at this point.
- _filters_ are the hooks YOURLS triggers to allow modification of a variable before returning it, sending it into the database or displaying it.

### Actions

_Actions_ are triggered by specific actions: inserting a link in the database, sending headers to the browser, redirecting to a long URL...

A typical action in YOURLS is a function call like the following:

```php
yourls_do_action( 'some_event' );
```

The function `yourls_do_action()` can also accept parameters to give more context to a particular event. For instance, the following action occurs on redirection to a long URL:

```php
yourls_do_action( 'redirect_shorturl', $url );
```

#### Create an Action function

The steps to create an action function are:

1. define a custom PHP function `my_event_function()` that you want to execute when the event `'that_event'` occurs;
2. hook your function to the particular event, using YOURLS functions `yourls_add_action();`. The syntax will be: `yourls_add_action( 'my_event_function', 'that_event' );`
3. put your custom function and its hook into a plugin file

#### Example of a simple Action function

When an admin page is sent to the browser, after the YOURLS logo has been printed, an [event occurs in YOURLS core](https://github.com/YOURLS/YOURLS/blob/1.7/includes/functions-html.php#L15):

```php
yourls_do_action( 'html_logo' );
```

Let's add custom text right after the logo:

```php
<?php
// our custom function that adds text
function my_custom_text() {
    echo "<p>This is a custom text</p>";
}

// Now hook our custom function into the 'html_logo' event
yourls_add_action( 'html_logo', 'my_custom_text');
```

Simple heh?

#### Example of an advanced Action function

Before the browser is redirected to another location (like when loading a short URL that points to a long URL), the following event is triggered:

```php
yourls_do_action( 'pre_redirect', $location, $code );
```

with `$location` being the location to be redirected to, and `$code` being the status header to be sent ('301 Moved Permanently' most of the time)

Now if you hook a custom function into the event 'pre_redirect', it will be passed `array($location, $code)` as an argument.

Let's interrupt the redirection with a message telling the user they are about to be sent to another URL:

```php
<?php
// Hook our custom function into the 'pre_redirect' event
yourls_add_action( 'pre_redirect', 'warning_redirection' );

// Our custom function that will be triggered when the event occurs
function warning_redirection( $args ) {
    $url = $args[0];
    $code = $args[1];
    echo "<p>This is a redirection page to: $url</p>";
    echo "<p>Click <a href='$url'>here</a> to proceed</p>";

    // Now die so the normal flow of event is interrupted
    die();
}
```

### Filters

_Filters_ are functions that process data, typically before being handled or returned by an internal function of YOURLS.

A typical filter in YOURLS is a function call like the following:

```php
$value = yourls_apply_filter( 'some_filter', $value );
```

#### Create a Filter function

The steps to create a filter function are:

1. define a custom PHP function `my_filter_function()` that accepts arguments, process them and _return_ them;
1. hook your function to the particular filter, using YOURLS function `yourls_add_filter()`;
1. put your custom function and its hook into a plugin file.

#### Example of a filter function

When a short URL is created with no custom keyword provided, a random (actually, sequential) keyword is generated. Then this keyword goes through [the following filter](https://github.com/YOURLS/YOURLS/blob/1.7/includes/functions.php#L269):

```php
$keyword = yourls_apply_filter( 'random_keyword', $keyword );
```

If a custom function hooks into the 'random_keyword' filter, it will be sent `$keyword` as an argument.

Let's append 'iloveyourls' to every sequential keyword, so that the generated shorturl become `https://sho.rt/abciloveyourls` instead of `https://sho.rt/abc`

```php
<?php
// hook our custom function into the 'random_keyword' filter
yourls_add_filter( 'random_keyword', 'my_silly_function' );

// Our silly custom function
function my_silly_function( $original_keyword ) {
    $silly_keyword = $original_keyword . "iloveyourls";

    // a filter function MUST return something once its arguments are processed
    return $silly_keyword;
}
```

### Advanced syntax for hooks

There are different ways to hook functions into actions or filters: read the [advanced hook syntax page](/development/hooks).

### Plugin admin pages

If you want to make your plugin settings customizable via the web interface, you can register a "plugin page" that will appear as a sub-item under the Plugins menu.

```php
<?php
// Register your plugin admin page
yourls_add_action( 'plugins_loaded', 'myplugin_init' );
function myplugin_init() {
    yourls_register_plugin_page( 'myplugin', 'My Plugin', 'myplugin_display_page' );
}

// The function that will draw the admin page
function myplugin_display_page() {
    echo "Hello, World!";
}
```

## Wrapping it up: your first plugin

We saw how to interrupt the redirection with a warning message, and how to make all random short URLs end with 'iloveyourls': let's package these example into an actual (yet totally pointless) plugin.

First we need to create the plugin directory and file:

1. in `user/plugins/` create a new directory, named for instance `my_first_plugin`
1. create a new empty file named `plugin.php`

**ProTip**: On GitHub, clone this skeleton repository to get yours in seconds: https://github.com/YOURLS/plugin-sample

In this empty `plugin.php` paste the following code:

```php
<?php
/*
Plugin Name: My First Plugin
Plugin URI: https://github.com/YOURLS/my-first-plugin
Description: Sample (pointless) plugin that interrupts short URLs redirection and creates absurdly long short URLs
Version: 1.0
Author: Ozh
Author URI: https://ozh.org/
*/

// Hook our custom function into the 'pre_redirect' event
yourls_add_action( 'pre_redirect', 'warning_redirection' );

// Our custom function that will be triggered when the event occurs
function warning_redirection( $args ) {
    $url  = $args[0];
    $code = $args[1]; // Print the message
    echo "<p>This is a redirection page to: $url</p>";
    echo "<p>Click <a href='$url'>here</a> to proceed</p>";

    // Now die so the normal flow of event is interrupted
    die();
}

// hook our custom function into the 'random_keyword' filter
yourls_add_filter( 'random_keyword', 'my_silly_function' );

// Our silly custom function
function my_silly_function( $original_keyword ) {
    $silly_keyword = $original_keyword . "iloveyourls";

    // a filter function MUST return something once its arguments are processed
    return $silly_keyword;
}


// And that's it!
```

Now put this `plugin.php` into `user/plugins/my_first_plugin/` and go to the admin page of your YOURLS setup: a new Plugin menu appears and points to the plugin administration page.

Congratulation, you've just extended the functionalities of YOURLS!

## List of hooks

[A full list of hooks (actions and filters) is available](https://yourls.org/hooklist.php).
It is generated every night against the current development version of YOURLS

If you code a plugin, you should run that dev version on a test install.

## Coding Guidelines Or Die

- Prefix everything. Function names, global variables, classes, option names, everything should be uniquely prefixed to avoid conflict with another plugin or, worse, YOURLS' core. The best naming scheme to date is `nick_project_meaningful_stuff` (eg `ozh_pingfm_add_more_cheese`, `joe_captcha_validate_input`, etc..)
- Corollary: you **must not** use `yourls_` as a prefix. This is for core functions only.
- Code your plugin against the dev version. It'll be easier for you to follow code development and request inclusions of any missing hook
- Code with `define( 'YOURLS_DEBUG', true );` in your `config.php` to catch PHP notices and coding mistakes soon
- Write clean, whitespaced, commented code.

Read [Coding Standards](/development/coding-standards)
