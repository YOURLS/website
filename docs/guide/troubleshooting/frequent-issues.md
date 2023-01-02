# Frequent issues

## 404 instead of redirection

If you experience "_404 not found_" instead of a redirection when you follow a short URL, **this is not a bug**.
It's a configuration problem on your end.

- Make sure your server configuration is correct. [Check out the documentation](/docs/guide/server-configuration).
- Check **server logs**. See [troubleshooting first steps](/docs/guide/troubleshooting/first-steps).
- Check **all previously opened issues**, open and closed.

## Endless spinning icon

Cannot add or edit links?

### Symptoms

You've installed YOURLS, everything went fine and looks functional. However, when you try to shorten a new link, or edit an existing one, the button get a little spinning icon forever ![loading icon](https://raw.github.com/YOURLS/YOURLS/master/images/loading.gif) and nothing actually happens.

### Problem

The Ajax script loads a URL like: `https://sho.rt/admin/index_ajax.php?mode=add&url=https://longurl.com/&keyword=123`

If that URL returns anything but a well formed result, then the Ajax script dies.

### Cure

Most of the time, the problem is a **server configuration** issue.

- Check your `config.php` and your `.htaccess`.
- Check server logs
- Manually check what kind of result the Ajax URL returns (type the full URL in your browser, or use your web browser developer tools)

Most of the time, you **should not** open an issue about it. Search in closed issues.

## Share icon and share links not showing

On the admin page you will see action buttons next to each short URL, to delete, share, edit them or see their stats.
If the Share button isn't visible and you cannot get the Share Box to be displayed, make sure to turn your ad blocker off.
