# Proxy

YOURLS features proxy support, meaning that you can install it behind a firewall or a proxy, and hopefully use it without any limitation.

To add proxy support, edit your `config.php` and add the following, depending on your setup:

## Proxy with no authentication

```php
define( 'YOURLS_PROXY', 'proxy:port' );
```

The `proxy:port` notation accepts domain names or IPs. Examples:

- `define( 'YOURLS_PROXY', 'proxy.mycompany.com:3128' );`
- `define( 'YOURLS_PROXY', '10.0.0.201:3128' );`

## Proxy with authentication

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

## Trusted proxies for IP detection

When YOURLS runs behind a reverse proxy, a load balancer, or a CDN, the visitor's real IP address is passed along in the `X-Forwarded-For` HTTP header.
By default, YOURLS only trusts `REMOTE_ADDR` and ignores forwarded headers, to prevent IP spoofing.

If YOURLS needs to read the real client IP from forwarded headers, the trusted proxy IPs must be declared, using the `get_ip_trusted_proxies` filter in a plugin.

### Why this matters

Without a trusted proxy list:

- `REMOTE_ADDR` is used, which is the IP of your proxy, not the visitor's.
- Click statistics and geographic data will reflect your proxy's IP, not actual visitors.
- Flood protection will treat all visitors as the same IP.

With a trusted proxy list:

- YOURLS checks if `REMOTE_ADDR` matches a trusted proxy.
- If it does, it reads the visitor's real IP from `X-Forwarded-For`.
- If it doesn't, `REMOTE_ADDR` is used as-is, and forwarded headers are ignored. This prevents untrusted clients from spoofing their IP.

### Configuring trusted proxies via a plugin

Use the `get_ip_trusted_proxies` filter to return an array of trusted proxy IPs (individual IP or IP range). Create a plugin with the following:

```php
yourls_add_filter( 'get_ip_trusted_proxies', 'my_trusted_proxies' );

/**
 * Define trusted proxy IPs for X-Forwarded-For header resolution.
 * @return array List of trusted proxy IPs
 */
function my_trusted_proxies() {
    return [
        '10.0.0.1',       // local nginx reverse proxy
        '198.41.128.0/17', // Cloudflare IPv4 range (example - see https://www.cloudflare.com/ips/)
    ];
}
```
