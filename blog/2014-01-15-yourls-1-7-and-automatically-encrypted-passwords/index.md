---
title: "YOURLS 1.7 and automatically encrypted passwords"
date: 2014-01-15
categories: 
  - "announcement"
tags: 
  - "1-7"
  - "password"
  - "security"
---

Another day, another highlight of a new feature in [YOURLS 1.7](https://github.com/YOURLS/YOURLS/releases). In case you weren't there when the party started, we already covered defense against SQL injections, HTTP requests robustness, funky UTF8 charsets support, proxy support, automatic checking for a new version and a few other neat stuff.

Today will be about increased security of your credentials with **automatic password encryption**.

<!-- truncate -->

## Password encryption ?

When you set up YOURLS for the first time, or when you add a new user, you edit your `config.php` and add a user and a password. Something like:

```
$yourls_user_passwords = array(
	'joe' => 'MyPassword',
);

```

Simple and easy. Now, the thing is: if someone sees that file for whatever reason, they know your YOURLS password (which is the same for most of your other stuff online, [admit it](http://xkcd.com/792/)).

Previously in YOURLS you could manually hack the config file to encrypt yourself passwords, using a [salt and a MD5 hash](http://yourls.org/md5.php). Near perfect and practically undecryptable, except that whenever something has to be done manually, well, it has to be done. And you don't do it.

We've improved things in YOURLS 1.7 : encryption is now automatic.

## Automatic password encryption !

After you've edited your config file, simply use YOURLS. Next time you'll check your `config.php`, instead of a clear text password, you'll see something like this:

```
$yourls_user_passwords = array(
    'joe' => 'phpass:!2a!08!gRCCvpvK22BgiNzN9q9fXOnjCXqjk88aQoZP/P0wydAj7bB2',
);

```

What happened? Using a military grade encryption library, YOURLS has silently encrypted your password to something completely and absolutely unbreakable.

Your password remains unchanged when you want to use it, so your YOURLS install is still as private as your password is secure, but that password does not exist any longer in clear text.

If you need to change your password, simply edit your config file again with a new password, and next time YOURLS will run, it will simply encrypt it again. Don't want that to happen, for some and probably bad reason? No problem, just add `define( 'YOURLS_NO_HASH_PASSWORD', true );` to your config file and you're done.

If you have any question or problem with that feature, be sure to first check the wiki about [YOURLS Usernames & Passwords](https://github.com/YOURLS/YOURLS/wiki/Username-Passwords).

Next time: social bookmarklets and other miscellaneous goodness.
