---
outline: deep
---

# Credentials

**How to use encrypted passwords in your config file.**

In `config.php`, the variable `$yourls_user_passwords` shall contain an array of usernames and passwords.

To improve security and user experience, YOURLS 1.7+ **automatically encrypts** these passwords within your config file.

## Editing login & passwords in `config.php`

Edit and save your config file with an array of simple `key => value` associations like the followings:

One login/password:

```php
<?php
$yourls_user_passwords = array(
    'joe' => 'MyPassword',
);
```

Two or more users and login/passwords pairs:

```php
<?php
$yourls_user_passwords = array(
    'joe'     => 'MyPassword',
    'Randall' => 'correct horse battery staple',
    'leetboy' => 'h3ll0w0rld!',
    'api'     => 'passwordfortheapi',
);
```

## Password auto-encryption

Next time you'll run YOURLS, this array will be rewritten, replacing plain text passwords with encrypted and undecipherable hashes. If you check now your `config.php`, you should see something like:

```php
<?php
$yourls_user_passwords = array(
    'joe' => 'phpass:!2a!08!gRCCvpvK22BgiNzN9q9fXOnjCXqQoZP/P0wydAj7bB2',
    'api' => 'phpass:!2a!08!m4IbkpuC0jjDIab7yRvjXeljjvcOJTASFL5nagml1Dm',
    // etc.
);
```

User will still log in using `joe` as a username and `MyPassword` as a password, but this password is no longer written down anywhere in the config file.

:::tip Nerd note:
We're using the Blowfish algorithm to encrypt passwords, an industry standard strong one-way hashing algorithm. This will hash your passwords so tight even the NSA will never be able to find out.
:::

## FAQ

### I have an error message: "_Could not auto-encrypt passwords_"

If YOURLS cannot edit and save your `config.php` file, you will see the following notice:

> _Could not auto-encrypt passwords. Error was: "cannot write file"._

Your config file is probably locked for reading and or writing (eg _chmoded_), which can be a good security practice. Temporarily lift that restriction (`chmod 0666 config.php`), load a YOURLS page again, then `chmod` it back.

If for some reason you cannot get it working, see **manual MD5 encryption** below

### Why hash passwords?

Storing your password as a crypted hash is more secure: if someone has access to your `config.php`, they won't be able to determine what your password is and won't be able to log in your setup. The drawback is that if you forget your own password, you cannot retrieve it: see below.

### I don't remember my password / I want to change it

Simply edit your `config.php` and write a new password in clear text. Next time you'll load YOURLS, it will be encrypted again.

### Manual MD5 encryption

If you prefer, you can manually encrypt passswords using a MD5 salted hash of the following structure:

`md5:< salt of 5 digits >:< md5 of salt + password >`

A PHP example to generate an encrypted password would be:

```php
<?php
$password = 'MyPassword';
$salt = rand( 10000, 99999 ); // example: 71688
$encrypted = 'md5:' . $salt . ':' . md5( $salt . $password ) // example: md5:71688:0ce43474167f743b7b92d046ae970801
```

You can simply use the [YOURLS salted hash generator](https://yourls.org/md5).

Edit your `config.php` so that the `key => value` associations with encrypted passwords looks like the following:

```php
<?php
$yourls_user_passwords = array(
    'joe' => 'md5:71688:0ce43474167f743b7b92d046ae970801',
);
```

Hashes using MD5 are slightly less secure than using native YOURLS encryption, but still way better than plain text passwords.

### I don't want to encrypt my password

If for some reason you'd rather keep your password unencrypted and in plain text in your config, simply add the following at the end of your `config.php`:

```php
define( 'YOURLS_NO_HASH_PASSWORD', true );
```
