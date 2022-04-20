# Hooks

This guide is for coders who have already gone through the basics of the [Plugins](/development/plugins) API. It lists all the possible ways to hook your custom functions into actions and events.

:::tip Note
Although only filters are covered here, everything applies for actions as well.
:::

:::tip Write production ready code
For brevity and clarity, generic and stupid names are given to functions and variables (eg `'my_function()'`). **Don't do this** and make sure you read the [Coding Standards](/development/coding-standards).
:::

## Possible syntaxes

### `yourls_add_filter('filter', 'funcname');`

This is the default way, using two strings. Example:

```php
function say_hello( $name ) {
    return yourls_apply_filter( 'hello', "hello $name" );
}

// Unfiltered result
var_dump( say_hello( "ozh" ) );
// string 'hello ozh' (length=9)

// Custom filter function
function add_exclamations( $input ) {
    return $input . '!!!';
}

// Now filtered result
yourls_add_filter( 'hello', 'add_exclamations' );

var_dump( say_hello( "ozh" ) );
// string 'hello ozh!!!' (length=12)
```

### `yourls_add_filter('filter', create_function(...));`

You don't necessarily have to define your custom function, and can use an anonymous function inline with PHP function [create_function()](https://php.net/create_function) (Note: DEPRECATED as of PHP 7.2.0)

The following example will return `false` to any hooked filters:

```php
yourls_add_filter( 'some_filter', create_function( '', 'return false;' ) );
```

While very possible and a completely valid PHP syntax, **we don't encourage this**: this is not very readable, hard to debug when the anonymous function is not trivial, inefficient performance and memory wise, and deprecated in PHP 7.2

### `yourls_add_filter('filter', function(){...});`

A more elegant and readable way to use anonymous functions is to use [closures](https://php.net/manual/en/functions.anonymous.php).

Full example:

```php
function say_hello( $name ) {
    return yourls_apply_filter( 'hello', "hello $name" );
}

// Unfiltered result
var_dump( say_hello( "ozh" ) );
// string 'hello ozh' (length=9)

yourls_add_filter( 'hello', function( $in ) { return "well $in and have a good day"; } );

// Now filtered result
var_dump( say_hello( "ozh" ) );
// string 'well hello ozh and have a good day' (length=34)
```

### `yourls_add_filter('filter', array('my_class','some_function'));`

You can use filter functions that are defined inside of classes. Example:

```php
function say_hello( $name ) {
    return yourls_apply_filter( 'hello', "hello $name" );
}

// Unfiltered result
var_dump( say_hello( "ozh" ) );
// string 'hello ozh' (length=9)

class My_Class {
    static function my_friend( $var ) {
        return "$var my friend";
    }
}

yourls_add_filter( 'hello', array('My_Class', 'my_friend') );

// Filtered result
var_dump( say_hello( "ozh" ) );
// string 'hello ozh my friend' (length=19)
```

Note that because the class is not instantiated, you have to declare your function as a `static` method to be able to use it.

### `yourls_add_filter('filter', 'my_class::some_function');`

Slight variation of the same example, using notation `'class::method'` instead:

```php
function say_hello( $name ) {
    return yourls_apply_filter( 'hello', "hello $name" );
}

// Unfiltered result
var_dump( say_hello( "ozh" ) );
// string 'hello ozh' (length=9)

class My_Class {
    static function my_friend( $var ) {
        return "$var my friend";
    }
}

yourls_add_filter( 'hello', 'My_Class::my_friend' );

// Filtered result
var_dump( say_hello( "ozh" ) );
// string 'hello ozh my friend' (length=19)
```

### `yourls_add_filter('filter', array($this,'some_function'));`

If the class has an instance, the syntax is as follows:

```php
function say_hello( $name ) {
    return yourls_apply_filter( 'hello', "hello $name" );
}

// Unfiltered result
var_dump( say_hello( "ozh" ) );
// string 'hello ozh' (length=9)


class My_Class {
    function my_friend( $var ) {
        return "$var my friend";
    }
}

$friendify = new My_Class;

yourls_add_filter( 'hello', array( $friendify, 'my_friend' ) );

// Filtered result
var_dump( say_hello( "ozh" ) );
// string 'hello ozh my friend' (length=19)
```

Of course you don't have to name the instance of the class, and can simply use `array( new My_Class, 'my_friend' )` instead of using variable `$friendify`.

This syntax is particularly used if your plugin is self contained into a class, and want to refer to the current instance of the class using the keyword `$this`.

## Summary

You will find all possible hook syntaxes in this [concise example](https://gist.github.com/ozh/bf5a3c6e03f0fef89d849cb76fae49d3), for quick reference.

## Practical example of use

Practical example that will add `"title is modified"` to every admin page title, [much like](https://github.com/YOURLS/YOURLS/blob/1.7/user/plugins/sample-plugin/plugin.php#L51:L60) in the sample plugin bundled with YOURLS:

```php
<?php
/*
Plugin Name: Change admin page titles
Version: 1.0
Author: Ozh
Author URI: https://ozh.org/
*/

class Hack_The_Page_Title{

    function __construct() {
        yourls_add_filter( 'html_title', array( $this, 'change_title' ) );
    }

    function change_title( $value ) {
        return $value . ' -- title is modified';
    }
}

new Hack_The_Page_Title;
```

## Further hook hacking

Removing filters using function `yourls_remove_filter()` or checking if a hook has a filter with `yourls_has_filter()` uses the same syntax to refer to a function. See for instance this simple example of how to [add, check and remove a filter within a YOURLS plugin class](https://gist.github.com/ozh/988a49419d4b34c431ad).

Actions work exactly the same as filters, and the same syntax can be used to add, check or remove an action.

Note that you cannot easily remove (or check the existence of) a hook that has been added with an anonymous function. In most cases, this syntax should be avoided.
