फल
पद
# Pages

YOURLS has a little known -- yet fancy -- feature to route users to custom content you create: **Pages**.

## What is a "Page"

A page is PHP aware and YOURLS aware custom content.

See for instance [yourls.org/examplepage](https://yourls.org/examplepage) and its source: [github.com/YOURLS/YOURLS/blob/master/user/pages/examplepage.php](https://github.com/YOURLS/YOURLS/blob/master/user/pages/examplepage.php)

It's a convenient way to create simple pages (about your team, corporate info, ...) and route to them as if they were short URLs created with YOURLS

## How to create a Page

- In `user/pages/`, create a new PHP file, for instance `about.php`
- Put content in this file (HTML, PHP code, YOURLS stuff...)

That's all. This page is now viewable at `https://yoursite/about` (no `.php` extension).

### "I have a `pages/` directory in YOURLS root, not in `user/`!"

Previous versions of YOURLS used to have the pages folder located in the root directory. You can simply move the directory into the `user/pages/` folder and everything should work fine.

If for some reason you want to keep your pages located in the root directory (for example, tons of pages and you don't want to edit them all to update your hardcoded `include()` paths), you can simply use this [simple plugin](https://gist.github.com/ozh/715b9ecf34517717318a3a687252d286) for backward compatibility.

## Page example

Let's make a simple stat page like [yourls.org/somestats](https://yourls.org/somestats)

First, create a new file named `somestats.php` and put it in `user/pages/`

In this file, paste the following code:

```php
<?php
// Make sure we're in YOURLS context
if( !defined( 'YOURLS_ABSPATH' ) ) {
    die('oops');
}

yourls_html_head( 'statspage', 'YOURLS stats' );
yourls_html_logo();
?>

<h2>Some stats here</h2>

<?php
$stats = yourls_get_stats('top', 5);
printf('<p>We have <strong>%s</strong> short urls and a total of <strong>%s</strong> clicks</p>',
        yourls_number_format_i18n( $stats['stats']['total_links'] ),
        yourls_number_format_i18n( $stats['stats']['total_clicks'] )
    );
?>

<p>The 5 most clicked URLs are:</p>
<ul>
<?php
foreach($stats['links'] as $url) {
    printf('<li><a href="%s">%s</a>: %s clicks (%s)</li>',
            $url['shorturl'],
            basename($url['shorturl']),
            yourls_number_format_i18n($url['clicks']),
            yourls_trim_long_string($url['title'])
        );
}
?>
</ul>

<p>The 5 most recent URLs are:</p>
<ul>
<?php
$stats = yourls_get_stats('last', 5);
foreach($stats['links'] as $url) {
    printf('<li><a href="%s">%s</a>: %s</li>',
            $url['shorturl'],
            basename($url['shorturl']),
            yourls_trim_long_string($url['title'])
        );
}
?>
</ul>

<p>The 5 most active short URLs during the last 24 hours were:</p>
<ul>
<?php
$sql = sprintf("SELECT shorturl, count(*) as total FROM %s
                WHERE (TIMESTAMPDIFF( DAY, SUBSTRING_INDEX( click_time, ' ', 1 ), CURDATE() ) < 1 )
                GROUP BY shorturl
                ORDER BY total DESC LIMIT 5",
    YOURLS_DB_TABLE_LOG);
global $ydb;
$results = $ydb->fetchObjects($sql);
foreach($results as $url) {
    printf('<li><a href="%s">%s</a>: %s clicks</li>',
            yourls_link($url->shorturl),
            $url->shorturl,
            yourls_number_format_i18n($url->total)
        );
}
?>
</ul>

<?php
yourls_html_footer();
```

See the result at `https://yoursite/somestats`
