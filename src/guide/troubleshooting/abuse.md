# Abuse

Getting spam links shortened and added in your YOURLS install? Read this.

## Do you have a public interface?

Anyone can shorten any link on your own little bitly? Duh. Read the page about [Public Shortening](/guide/advanced/public-shortening).

## Do you have a public API?

Same as above. Duh.

## Basic YOURLS security measures

Your install is completely private and access is supposed to be restricted to a few known users? Here are a few tips that may help:

- Change YOURLS logins/passwords
- Change DB logins/passwords
- Make sure YOURLS is up to date. Always.
- Make sure your plugins are up to date. Get rid of the plugins you're not sure about and don't need absolutely.
- There are several plugins to help you prevent or throttle spam links. See the [plugin list](https://github.com/YOURLS/awesome-yourls).
- Make sure your server is not stupidly configured to execute `.php.txt` files, read this [blog post](https://blog.yourls.org/2013/03/getting-spam-links-in-yourls-read-this/)

If you suspect YOURLS, a plugin or another script (see below) has been compromised, do not just update: the compromised file may still be present and continue to give access to malicious users. If unsure, delete all files and reinstall latest versions of what you strictly need.

## Basic hosting security measures

Most of the time, neglected and outdated third party software is the vector of attack, outside from YOURLS.

Does your account run other scripts such as WordPress, WordPress plugins, PHPBB? These scripts are very likely to attract script kiddies. Make sure they're always up to date and delete anything that seems outdated or you don't need any longer.

Sometimes your account may be compromised at the FTP level: it won't hurt to change your credentials.

## Tailor-made counter measures

- Add a [captcha on your public interface](https://blog.yourls.org/2015/05/integrating-the-new-google-recaptcha-with-yourls/)
- Block specific IP, IP ranges or country with your .htaccess file -- implementation will depend on your server config, ask Google and/or your server admin
- ... ?

## Hire an expert

In the end be aware that an unfixed spam or security problem will go on and be exploited forever. Things can only get worse.

If you're unable to fix things (and be 100% confident things are fixed), consider hiring an experienced coder or security expert.
