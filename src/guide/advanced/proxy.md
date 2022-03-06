---
title: Proxy
editLink: false
outline: deep
---

# Proxy

YOURLS features proxy support, meaning that you can install it behind a firewall or a proxy, and hopefully use it without any limitation.

To add proxy support, edit your `config.php` and add the following, depending on your setup:

## Proxy with no authentication:
```php
define( 'YOURLS_PROXY', 'proxy:port' );
```
The `proxy:port` notation accepts domain names or IPs. Examples:
* `define( 'YOURLS_PROXY', 'proxy.mycompany.com:3128' );`
* `define( 'YOURLS_PROXY', '10.0.0.201:3128' );`

## Proxy with authentication :

Define `YOURLS_PROXY_USERNAME` and `YOURLS_PROXY_PASSWORD` as well:

```php
define( 'YOURLS_PROXY', 'proxy:port' );
define( 'YOURLS_PROXY_USERNAME', 'my_login' );
define( 'YOURLS_PROXY_PASSWORD', 'my_password' );
```

## Exclude hosts from proxying

You may want to allow YOURLS to connect directly to particular hosts and bypass the proxy (for instance to other hosts on your corporate intranet). Add the following:
```php
define( 'YOURLS_PROXY_BYPASS_HOSTS', 'example.com, *.mycorp.com' );
```
This setting supports a comma separated list of hosts, using `*` as a wildcard if needed.
