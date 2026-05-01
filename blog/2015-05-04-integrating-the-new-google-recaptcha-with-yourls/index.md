---
title: "Integrating the New Google reCAPTCHA With YOURLS"
date: 2015-05-04
categories: 
  - "tutorial"
tags: 
  - "captcha"
  - "google"
  - "spam"
---

_This guide and screenshots are courtesy of Jared Stark and [Erasure Web Services](http://erasurge.com/), originally available on their own [bitty.link shortener](http://bitty.link/recaptcha.html). It's duplicated here in case their goes offline or missing but please check on the original link first in case they have updated it. Much thanks to them!_

How to integrate the New Google reCAPTCHA With YOURLS

<!-- truncate -->

## The problem

URL shortening services are often a target for automated spam form submissions. The traditional way to prevent spam bots from doing this is to require a captcha to be properly filled out before a form can be submitted. Unfortunately, captchas can significantly reduce the quality of a user experience as they require deciphering cryptic text, putting the pieces of a puzzle together, or some other action which can significantly increase the amount of time a user spends trying to complete a form.

The new Google reCAPTCHA service aims to get rid of those traditional problems with captchas by providing what they call the "No CAPTCHA reCAPTCHA experience." This is accomplished by using an "advanced risk analysis system" which can separate actual humans from bots with just the check of a box. More information about this system can be found on the [Google reCAPTCHA website](https://www.google.com/recaptcha).

Because of its easy of use, the new Google reCAPTCHA is ideal for URL Shortening websites since it allows users to create short URLS quickly while preventing spam at the same time. This tutorial will show you how to integrate this service into a YOURLS installation, much like what this website, [bitty.link](http://bitty.link/) uses.

## The solution : tutorial

This tutorial will show how to implement the "No CAPTCHA reCAPTCHA" into the default YOURLS public interface setup. Obviously, it can be tweaked and modified for other public interfaces.

**Please note that this tutorial uses the reCAPTCHA API 1.0.**

1. Visit the [Google reCAPTCHA](http://google.com/recaptcha) website. You will need to "Get reCAPTCHA," which requires a Google account. After filling out the required information, you should receive your site key and secret key. Make sure to keep this information handy.
2. In your YOURLS installation, open the file `includes/functions-html.php`. Copy the JavaScript client-side script from the reCAPTCHA website and place it in the described place ([screenshot](http://ozh.dreamhosters.com/wp-content/uploads/2015/05/tutorial1.png))
3. Open your public interface file. On the reCAPTCHA website, copy the "sitekey" line and paste it in the described place ([screenshot](http://ozh.dreamhosters.com/wp-content/uploads/2015/05/tutorial2.png))
4. Upload a copy of the [captcha.php](http://ozh.dreamhosters.com/wp-content/uploads/2015/05/captcha.txt) and [recaptchalib.php](http://ozh.dreamhosters.com/wp-content/uploads/2015/05/recaptchalib.txt) files to the directory of your YOURLS installation that has your public user interface in it. Although those two files do not use the most recent reCAPTCHA API, they are easier to implement and will still work just fine.
5. In the captcha.php file, paste in your secret and site keys to the indicated spots.
6. Open your public user interface file. Paste the following under where it says "Part to be executed if FORM has been submitted:" `include('captcha.php'); if ($resp != null && $resp->success) {` ([screenshot](http://ozh.dreamhosters.com/wp-content/uploads/2015/05/tutorial4.png))
7. Place a `}` at the end of the text block in the example photo: ([screenshot](http://ozh.dreamhosters.com/wp-content/uploads/2015/05/tutorial5.png))

This is the most basic way to get the new Google reCAPTCHA working on your YOURLS instillation. Although it will prevent spam bots from submitting automated requests, if a user fails to fill out the captcha, unfortunately, a reason to why the request failed will not be given unless more code is added.

_Tutorial written by Jared Stark for [bitty.link](http://bitty.link/recaptcha.html)_
