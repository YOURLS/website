# Special Files

YOURLS support a number of _special user files_ to further customize some internal behaviors. Here are these little known yet powerful features:


## Pages

Pages are custom files is `user/pages/` that will be displayed when requested like short URLs. See [Pages](/docs/guide/extend/pages) for details.


## Custom DB error page

If the database becomes unreachable, or YOURLS is misconfigured, a default YOURLS error page is displayed.
You can replace this error page with a custom version : `user/db_error.php`


## Custom maintenance page

When you update YOURLS to a new version (good job!) the site may become briefly inaccessible and a default landing page is displayed.
You can replace this page with a custom version : `user/maintenance.php`


## Custom favicon

By default YOURLS displays a tiny YOURLS favicon. You can easily display a custom favicon with your own `user/favicon.(jpg|gif|png|ico|svg)`.


## Custom "always-on plugin"

If present, YOURLS will always include `user/cache.php` early during the boot process, before regular active plugins are loaded.

This special file will not appear in the list of plugin and cannot be activated or deactivated in the admin area. To deactivate it,
delete (or rename) it manually.

"Cache" stands for "Custom Additional Code for Hazardous Extension".


## Custom DB layer

Out of the box, YOURLS uses PDO to interact with a MySQL server. If you are an experienced coder and want to replace the core DB engine,
you can implement your own library in `/user/db.php`.

