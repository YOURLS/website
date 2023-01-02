# Installation

Installing and updating YOURLS is a simple task.
Some hosts provide process automation, with tools such as CPanel.

:::tip Prerequisites
This part of the documentation assumes basic familiarity with software deployment or system administration.
If you are totally new to web app management, it might not be the best idea to jump right into the project as your first step - grasp the basics then come back!
:::

## Manual instructions

1. Grab the [latest release archive](https://github.com/YOURLS/YOURLS/releases)
2. Unzip the YOURLS archive
3. Copy `user/config-sample.php` to `user/config.php`
4. Fill `user/config.php` with the required settings
5. Upload the unzipped files to your website, generally in `public_html` or `www` folder
6. Create a new database (see [Configuration](/docs/guide/essentials/configuration) – you can also use an existing one)
7. Point your browser to `https://your-own-domain-here.com/admin/`
8. Follow the installation procedure

## Third party guides

Head to [Awesome YOURLS](https://github.com/YOURLS/awesome-yourls#guides--tutorials) for installation guides covering specific environments, translated in different languages.
