# Server configuration

## Apache

What your `.htaccess` file for YOURLS should look like.

### Make a `.htaccess` file

If the `.htaccess` file automated creation/updating failed because of file permission, you'll have to manually make one. No worry, it's simple.

:::tip Note
YOURLS **cannot share** its root directory with another `.htaccess` rewrite rules driven app such as WordPress. The `.htaccess` file should contain YOURLS directives and no other rewrite rule.
:::

#### YOURLS installed on root

If YOURLS root URL is `https://yoursite.com/` or `https://subdomain.yoursite.com/`, the `.htaccess` file in the root directory must be like:

```apacheconf
# BEGIN YOURLS
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^.*$ /yourls-loader.php [L]
</IfModule>
# END YOURLS
```

#### YOURLS installed in subdirectory

If YOURLS root URL is `https://yoursite.com/somedir/`, the `.htaccess` file in this subdirectory must be like:

```apacheconf
# BEGIN YOURLS
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /somedir/
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^.*$ /somedir/yourls-loader.php [L]
</IfModule>
# END YOURLS
```

### Redirect everything from HTTP to HTTPS

Add `RewriteCond %{HTTPS} off` and `RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]`
before the `RewriteBase /` rule in your Apache configuration.
(Full example [here](https://github.com/YOURLS/YOURLS/issues/2578#issuecomment-612451531))

### Give YOURLS its own directory

By default YOURLS installs its files in the directory it will run from.

This section explains how to have YOURLS running from `http://sho.rt/` but with all files installed in their own directory, say `http://sho.rt/yourls/`, and still have YOURLS served from the parent directory and without changing your URLs.

1. **Move files**
   Simply create a directory, eg `yourls_subdir/` and move **everything** in this directory.

2. **`.htaccess`**
   In the now empty directory, create a `.htaccess` file with the following (replace `sho.rt` and `yourls_subdir` with your hostname and directory name).

```apacheconf
<IfModule mod_rewrite.c>
RewriteEngine on
RewriteCond %{HTTP_HOST} sho.rt$
RewriteCond %{REQUEST_URI} !^/yourls_subdir/
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /yourls_subdir/$1
RewriteCond %{HTTP_HOST} sho.rt$
RewriteRule ^(/)?$ yourls_subdir/yourls-loader.php [L]
</IfModule>
```

:::tip Note
This doesn't change the fact that YOURLS needs its own `.htaccess` in the directory.
:::

### Bonus tricks

The following line will prevent access to any "dot file" or "dot directory", except for `.well-known/` which is rightfully used in various cases:

```apacheconf
RewriteRule "(^|/)\.(?!well-known\/)" - [F]
```

### Other resources

- [.htaccess snippets](https://github.com/phanan/htaccess) is a great resource for your `.htaccess`.
- [H5BP Server Configs](https://github.com/h5bp/server-configs-apache) has a lot of in-depths tricks and tips regarding your `.htaccess` file.

## Nginx

What your `yourls.conf` file for YOURLS should look like.

**The server configuration can differ from one install to another, depending on your needs (and if you elect to run nginx you're supposed to be able to adapt the configuration based on these needs).**

### The basic Nginx _server_ configuration

```nginx
server {

  # HTTP over IPv4 & IPv6
  listen 80;
  listen [::]:80;

  # HTTPS over IPv4 & IPv6
  # MUST BE EDITED TO REFLECT YOUR CONFIGURATION
  listen 443 ssl;
  listen [::]:443 ssl;
  ssl_certificate     example.com.crt;
  ssl_certificate_key example.com.key;

  # Server names
  # MUST BE EDITED TO REFLECT YOUR CONFIGURATION
  server_name example.com www.example.com;

  # Root directory
  # MUST BE EDITED TO REFLECT YOUR CONFIGURATION
  root /path/to/yourls/files;

  # Rewrites
  location / {
    try_files $uri $uri/ /yourls-loader.php$is_args$args;
    # if YOURLS is installed in a subdirectory, change the path
    # to yourls-loader.php accordingly, eg
    # try_files $uri $uri/ /subdir/yourls-loader.php$is_args$args;
  }

  # PHP engine
  location ~ \.php$ {
    include fastcgi.conf;
    # OR
    # include fastcgi_params;

    fastcgi_index index.php;

    # MUST BE EDITED TO REFLECT YOUR CONFIGURATION
    fastcgi_pass unix:/var/run/php/php7.2-fpm.sock;
  }

}
```

:::tip Note
By design, this configuration will throw an error 403 "forbidden" on your bare YOURLS `server_name` domain: it will not answer with an index file on the bare domain, nor on any sub-directory (such as `/admin`), unless you manually specify `/admin/index.php` (example: `https://your.yourlsdomain.tld/admin/index.php`). ([source](https://github.com/YOURLS/YOURLS/issues/2549#issuecomment-589040063))
:::

### Other resources

You may look at [H5BP Server Configs](https://github.com/h5bp/server-configs-nginx) for tricks and tips regarding your Nginx global file configuration. This may suit your needs or improve your overall experience.
