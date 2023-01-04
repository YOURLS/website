---
slug: /
---

# Introduction

## Overview

**YOURLS** is a set of PHP scripts that will allow you to run **Y**our **O**wn **URL** **S**hortener, on your server, using the domain or subdomain of your choice.

You'll have full control over your data, detailed stats, analytics, plugins, and more.

It's free and open-source.

## Requirements

YOURLS has the following requirements:

### Server

- [Apache (httpd)](https://httpd.apache.org/) version **2.4** or greater, with **`mod_rewrite`** enabled
- [PHP](https://secure.php.net/) version **7.4** or greater
  - PHP [cURL](https://www.php.net/curl) extension is required if you plan on playing with the API
- [MySQL](https://www.mysql.com/) version **5.0** or greater, or [MariaDB](https://mariadb.org/) version **10.0** or greater.

We also suggest that you use a host with **HTTPS** support.

If you are installing your own server, see [this file](https://github.com/YOURLS/YOURLS/blob/master/composer.json) for the PHP extensions YOURLS will use.

### Client

Any modern web browser will do.
