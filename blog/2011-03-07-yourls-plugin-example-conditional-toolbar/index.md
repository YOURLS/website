---
title: "YOURLS Plugin Example: Conditional Toolbar"
date: 2011-03-07
categories: 
  - "plugins-2"
  - "tutorial"
tags: 
  - "plugins"
  - "toolbar"
---

Today a YOURLS users expressed an [interesting request](http://code.google.com/p/yourls/issues/detail?id=716):

> Hello, I'd like to show a toolbar for, say, `http://sho.rt/b` when I enter the address `http://sho.rt/t/b`. Is there any fast modification I can make on the toolbar sample to make this work?

Of course there is :) Thanks to the plugin API within YOURLS, this is easily feasible, and this would also be an interesting plugin poking with various areas of YOURLS code, so I thought it deserved a little blog post about it. <!--more-->

<!-- truncate -->

## How YOURLS handles requests

The main file in YOURLS is `yourls-loader.php`, to be found in the root directory. As you can see if you give your [.htaccess](http://code.google.com/p/yourls/wiki/htaccess) file a look, this file is responsible for handling every request sent to YOURLS (basically, the `.htaccess` file says: "if it's not a file nor a directory, let `yourls-loader.php` deal with the request")

Normal requests are typically one of the following forms:

- `http://sho.rt/**stuff**`: a redirection attempt to a short URL with keyword `stuff` (see `yourls-loader.php`'s [source code](http://code.google.com/p/yourls/source/browse/tags/1.5/yourls-loader.php#33))
- `http://sho.rt/**stuff+**`: an attempt to display stats for short URL with keyword `stuff` ([source](http://code.google.com/p/yourls/source/browse/tags/1.5/yourls-loader.php#42))
- `http://sho.rt/**http://some-url/**`: a 'Prefix-n-Shorten' bookmarklet ([source](http://code.google.com/p/yourls/source/browse/tags/1.5/yourls-loader.php#52))

When the request does not meet one of these patterns, the event "`loader_failed`" is triggered and the root page loads ([line 60](http://code.google.com/p/yourls/source/browse/tags/1.5/yourls-loader.php#60) and following)

## Our goal

What we'll want to do is simple: if the request fails (and `http://sho.rt/**tb/stuff**` will not match normal requests so this will fail) we'll want to check the requested URL and if applicable load the toolbar plugin before the redirection occurs.

This means that the toolbar plugin (for instance the one shipped with YOURLS) should **not** be activated: our plugin will conditionally activate it.

The plugin will use two constants you may have to edit:

```
// Customize this: directory of your Toolbar plugin 
define( 'OZH_TBURL_PLUGINDIR', 'sample-toolbar' );

// Customize this: keyword prefix that will trigger the Toolbar plugin
define( 'OZH_TBURL_PREFIX', 'tb/' );

```

By default, the toolbar loaded (if applicable) will be the sample toolbar provided with YOURLS (to be found in directory `user/plugins/sample-toolbar`), and short URL keyword prefixed with `tb/` will trigger it (eg `http://sho.rt/tb/something`)

## Create a new request pattern

Time to tell YOURLS what to do with requests matching the `/tb/stuff` pattern.

We're going to define a function that will be triggered by action "`loader_failed`". This event is passed one parameter which is the requested URL ([line 60](http://code.google.com/p/yourls/source/browse/tags/1.5/yourls-loader.php#60) of `yourls-loader.php`)

The code to do so will be:

```
yourls_add_action( 'loader_failed', 'ozh_tburl_toolbar' );

function ozh_tburl_toolbar( $args ) {
	// short URL requested?
	$shorturl = $args[0];
	
	/*
	1. check if $shorturl is /tb/stuff
	2. if it is, load the toolbar plugin and redirect
	3. if it is not, do nothing and let YOURLS resume normal operations
	*/
}

```

I think you agree: dead simple.

## Conditionally load the plugin and redirect

If the request is something like "`/tb/stuff`", we'll need to extract that "`stuff`", load the plugin and then attempt redirection. Once again, simple stuff:

```
if( preg_match( '!^tb/(.*)!', $shorturl, $matches ) ) {
	$keyword = yourls_sanitize_keyword( $matches[1] ); // 'stuff'

	// activate the toolbar plugin just for now
	include_once( YOURLS_PLUGINDIR.'/sample-toolbar/plugin.php' );
	
	// attempt redirection
	include( YOURLS_ABSPATH.'/yourls-go.php' );
	
	// prevent other plugins or normal operations from triggering
	exit;
}

```

The first line is a regular expression pattern matching: does it begin with '`tb/`' followed by anything? If so, line 2 extracts that anything and sanitizes it. Then, line 5 includes the toolbar plugin and then includes the `yourls-go.php` template file which deals with redirections.

Last line of the code block is important: make sure you `exit()` so that YOURLS stops here processing the request, instead of resuming normal operations (in our case, redirecting to the root after the action "`loader_failed`" has been triggered)

## Conditional Toolbar Plugin

Add a proper plugin file header, replace hardcoded '`tb/`' and '`sample-toolbar`' with constants defined earlier, and you have a real world YOURLS plugin:

```
<?php
/*
Plugin Name: Conditional Toolbar
Plugin URI: http://yourls.org/
Description: Wraps short URLs in the Toolbar when requested with URL sho.rt/tb/keyword instead of sho.rt/keyword
Version: 1.0
Author: Ozh
Author URI: http://ozh.org/
*/

// Customize this: directory of your Toolbar plugin 
define( 'OZH_TBURL_PLUGINDIR', 'sample-toolbar' );

// Customize this: keyword prefix that will trigger the Toolbar plugin
define( 'OZH_TBURL_PREFIX', 'tb/' );

yourls_add_action( 'loader_failed', 'ozh_tburl_toolbar' );
function ozh_tburl_toolbar( $args ) {
	// short URL requested?
	$shorturl = $args[0];
	
	// If it's a /tb/stuff URL:
	if( preg_match( '!^'. OZH_TBURL_PREFIX .'(.*)!', $shorturl, $matches ) ) {
		$keyword = yourls_sanitize_keyword( $matches[1] ); // 'stuff'

		// activate the toolbar plugin just for now
		include_once( YOURLS_PLUGINDIR.'/'. OZH_TBURL_PLUGINDIR .'/plugin.php' );
		
		// attempt redirection
		include( YOURLS_ABSPATH.'/yourls-go.php' );
		
		// prevent other plugins or normal operations from triggering
		exit;
	}
	
	// If it's not a /tb/stuff URL, do nothing and return to normal operations
}

```

As with any plugin, create a new directory within `user/plugins`, paste this code into a file named `plugin.php` and activate through the admin interface.

## Disclaimer

Not every request or question will result in a detailed blog post :)
