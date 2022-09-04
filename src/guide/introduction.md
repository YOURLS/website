# Requirements

**YOURLS** is a modern PHP application built as a [Laravel](https://laravel.com) package, which carries with it the same [server requirements](https://laravel.com/docs/9.x/deployment#server-requirements) as Laravel itself.

## Server Requirements

To run YOURLS you'll need a server meeting the following requirements.
These are standard defaults (at minimum) for most modern hosting platforms.


- PHP `>= 8.0.x`
- BCMath PHP Extension
- Ctype PHP Extension
- JSON PHP Extension
- Mbstring PHP Extension
- OpenSSL PHP Extension
- PDO PHP Extension
- Tokenizer PHP Extension
- XML PHP Extension
- Composer

We also suggest that you use a host with **HTTPS** support.

If you are installing your own server, see [this file](https://github.com/YOURLS/YOURLS/blob/master/composer.json) for the PHP extensions YOURLS will use.

## Client Requirements

Any modern web browser will do.

## Development Environments

All of these requirements are satisfied by the [Laravel Sail](https://laravel.com/docs/sail) Docker development environment, which makes it a great starting point for building a Laravel application using PHP, MySQL, and Redis without requiring prior Docker experience.

See [Development Guide]() // TODO
