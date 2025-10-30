# YOURLS' API

YOURLS comes with an API wrapper, `yourls-api.php` at the root of your install, that allows to :

* Generate or get existing short URLs, with sequential or custom keyword,
* Get some statistics about your links: top clicked links, least clicked links, newest links,
* Return various output format: JSON, XML, or simple raw text,
* Authenticate either with login/password or using a secure [passwordless](passwordless-api) mechanism,
* Or even define your own custom API requests and actions.

## Usage

You need to send parameters to `http://your-own-domain-here.com/yourls-api.php` either via GET or POST (remember to URL-encode parameters if via GET). These parameters are:

* A valid `username` / `password` pair, or your signature (see [Passwordless API](passwordless-api) requests)
* An `action` that can take one of the following values :

  * `action = "shorturl"` : get short URL for a link.
    * the `url` to shorten
    * optional `keyword` and `title` for custom short URLs
    * `output` format: either `"jsonp"`, `"json"`, `"xml"` or `"simple"`

  * `action = "expand"` : get long URL of a shorturl.
    * the `shorturl` to expand (can be either `'abc'` or `'http://sho.rt/abc'`)
    * `output` format: either `"jsonp"`, `"json"`, `"xml"` or `"simple"`

  * `action = "url-stats"` : get stats about one short URL.
    * the `shorturl` for which to get stats (can be either 'abc' or 'http://site/abc')
    * `output` format: either `"jsonp"`, `"json"` or `"xml"`

  * `action = "stats"` : get stats about your links.
    * the `filter`: either `"top"`, `"bottom"` , `"rand"` or `"last"`
    * the `limit` (maximum number of links to return)
    * `output` format: either `"jsonp"`, `"json"` or `"xml"`

  * `action = "db-stats"` : get global link and click count.
    * `output` format: either `"jsonp"`, `"json"` or `"xml"`

  * `action = "version"` : get YOURLS version.
    * `output` format: either `"jsonp"`, `"json"`, `"xml"` or `"simple"`

## Sample requests

Example of a `GET` request with Javascript (using jQuery) to shorten a URL :

```javascript
// Javascript
var api_url  = 'http://sho.rt/yourls-api.php';
var response = $.get( api_url, {
    username: "your_username",
    password: "your_password",
    action:   "shorturl",
    format:   "json",
    url:      "http://ozh.org/"
    },
    // callback function that will deal with the server response
    function( data) {
        // now do something with the data, for instance show new short URL:
        alert(data.shorturl);
    }
);
```

Example of a `POST` request with PHP to expand a short URL

```php
<?php
$username = 'your_username';
$password = 'your_password';
$api_url =  'http://sho.rt/yourls-api.php';

// Init the CURL session
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $api_url);
curl_setopt($ch, CURLOPT_HEADER, 0);            // No header in the result
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); // Return, do not echo result
curl_setopt($ch, CURLOPT_POST, 1);              // This is a POST request
curl_setopt($ch, CURLOPT_POSTFIELDS, array(     // Data to POST
        'shorturl' => 'ozh',
        'format'   => 'json',
        'action'   => 'expand',
        'username' => $username,
        'password' => $password
    ));

// Fetch and return content
$data = curl_exec($ch);
curl_close($ch);

// Do something with the result. Here, we echo the long URL
$data = json_decode( $data );
echo $data->longurl;
```

## Sample returns

Sample return in JSON format for the shorturl action

```json
{
  "url": {
    "keyword": "ozh",
    "url": "http:\/\/ozh.org",
    "title": "Ozh RICHARD \u00ab ozh.org",
    "date": "2014-10-24 16:01:39",
    "ip": "127.0.0.1"
  },
  "status": "success",
  "message": "http:\/\/ozh.org added to database",
  "title": "Ozh RICHARD \u00ab ozh.org",
  "shorturl": "http:\/\/sho.rt\/1f",
  "statusCode": "200"
}
```

Sample return in XML format for the expand action

```xml
<result>
    <keyword>ozh</keyword>
    <shorturl>http://sho.rt/ozh</shorturl>
    <longurl>http://ozh.org/</longurl>
    <message>success</message>
    <statusCode>200</statusCode>
</result>
```

## Sample file

There's a sample PHP file included, at the root of your install, that serves as an example on how to play with the API. Copy and modify this file to suit your needs.

## Expand the API

You can easily implement custom API actions with a plugin. See the plugin list for examples : https://github.com/YOURLS/awesome
