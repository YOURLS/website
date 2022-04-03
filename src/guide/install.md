# Installing and updating YOURLS

Installing or updating YOURLS is not a difficult task. Some webhosts even automate the process, with tools such as CPanel.

Here are the instructions to do it manually by yourself.

:::tip Prerequisites
This part of the documentation assumes basic familiarity with software deployment or system administration.
If you are totally new to web app management, it might not be the best idea to jump right into the project as your first step - grasp the basics then come back!
:::

## Install YOURLS

1. Grab the [latest release archive](https://github.com/YOURLS/YOURLS/releases)
2. Unzip the YOURLS archive
3. Copy `user/config-sample.php` to `user/config.php`
4. Fill `user/config.php` with the required settings
5. Upload the unzipped files to your website, generally in `public_html` or `www` folder
6. Create a new database (see [Configuration](/guide/essentials/configuration) – you can also use an existing one)
7. Point your browser to `https://your-own-domain-here.com/admin/`
8. Follow the installation procedure

## Update YOURLS

Every now and then a new version of YOURLS is available, and you will get the information right in your admin interface.

1. **Backup your database** !
2. Grab the [latest release archive](https://github.com/YOURLS/YOURLS/releases)
3. Unzip the YOURLS archive
4. Upload all files to your server, overwriting your existing install (this won't affect user files such as config or plugins)
5. Point your browser to `https://your-own-domain-here.com/admin/`

## Installation guides

Head to [Awesome YOURLS](https://github.com/YOURLS/awesome-yourls#guides--tutorials) for installation guides covering specific environments, translated in different languages.
