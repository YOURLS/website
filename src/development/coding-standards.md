---
title: Coding standards
editLink: false
outline: deep
---

# Coding standards

## #1 Rules Or Die

- **Readability** is more important than cleverness or brevity.
- Submit a patch against the current development version in the `master` branch, **not** the latest [official package](https://github.com/YOURLS/YOURLS/tags) available. Also check for potential [branches](https://github.com/YOURLS/YOURLS/branches) in which your feature or bugfix may be already taken care of.

## *Mandatory* naming conventions

We use **lowercase letters and underscores** in names (also known as snake case).
Examples:
- `function yourls_check_php_version() {...}`
- `$valid_user = ...`

We don't use camelCase like `fetchSqlTableResult` ([because](https://twitter.com/ozh/status/897792003584532480). Sorry, PSR2.)

Use unambiguous and self-documenting names instead of generic and meaningless names (eg `function2()` or `global $a`)

In core patches, always prefix all your PHP functions with `yourls_`.

In plugins, prefix **everything** (functions, classes, global variables, HTML elements...) with a unique and personal prefix such as `joe_myplugin_`


## *Mandatory* curly braces on same line as function name

We put braces on the same line as the function or class declaration.

Good:
```php
function yourls_do_something( $string, $var ) {
    ...
}
```

Bad:
```php
function yourls_do_something( $string, $var )
{
    ...
}
```

##  *Mandatory* 4 spaces indentation

Indentation should reflect logical structure of the code, and you must use **4 spaces**.


## *Recommended* comments

There are **never** too many comments and we'd rather strip a few out before committing a patch than pull our hair trying to understand what's going on.

For simple explanations, use inline commenting. For larger explanation, don't hesitation to break in multiple lines using `/** ... **/`

Comments should not focus on *what* is happening (unless the code itself is not self explanatory enough) but on *why* we are doing this.

##  *Recommended* white space

Your code must reflect logical structure and be easy on the eye
- Use blocks of **4 spaces** at the beginning of a line
- Align as many things as possible where it improves readability
- Vertically align begining of line blocks and end of blocks with opening and closing parenthesis `()`, brackets `[` and braces `{}`

Put white space anywhere it will make your code _breathe_

```php
<?php
// if, elseif, foreach, for and switch blocks
foreach( $array as $key => $value } { ...

// define a function
function do_stuff( $param1= 'foo', $param2 = 'bar' ) { ...

// call a function
do_stuff( '31337', other_func( 42 ) );

// white space around variable array items
$x = $foo['bar']; // string, no space = OK
$y = $foo[ $bar ]; // variable, need spaces

// vertically align things if it increases readability
$this_var   = 'hello';
$this_other = 'world';
$omg_lol    = 'ozh';

```

##  PHP tags

Always use full PHP tag.

Correct:
```php
<?php ... ?>
```

Forbidden:
```php
<? ... ?>
<?= $var ?>
```

It is also best to omit the final closing PHP tag of a PHP file

##  Turn debugging on

Always develop with error reporting on. In YOURLS, this means you should add this to your dev `config.php`:
```php
define( 'YOURLS_DEBUG', true );
```

##  Don't hardcode a URL or path

Users may have their plugins in any directory, not just `/user/plugins`. They may have renamed your plugin directory. They may use `https` instead of `http`.

Don't hardcode any path or URL, there are functions for this, such as `dirname()`, `yourls_plugin_url()` or `yourls_admin_url()`.

## Don't hardcode echoed strings

If you need to output text, don't hardcode it in English, but use the Translation API.
Bad: ```<?php echo "some message"; ?>```
Good: ```<?php yourls_e( "some message" ); ?>```

Read [languages guide](/guide/extend/languages) and, more specifically, [i18n for developers](/development/i18n) for more.

