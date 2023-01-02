# Database queries

This guide covers the proper way to query the database of a YOURLS setup.

## Don't write SQL queries

Seriously, you probably don't need to. There are wrapper functions for **mostly everything** (eg to store and retrieve options for example, use functions `yourls_add_option()` and `yourls_get_option()`, don't fiddle with the database).

So, before crafting your SQL query, make sure there isn't a function to take care of this for you.

## The YDB object

If your use case isn't covered by a wrapper core function, you may need to query the database directly. To do so, you will need to use the global `$ydb` object, retrieved using helper function `yourls_get_db()`:

```php
function my_plugin_get_stuff_from_database() {
    $stuff = yourls_get_db()->some_SQL_method('some SQL query'); // details below
    ...
}
```

**Don't hardcode table names.** To make sure your code is compatible with any YOURLS setup, don't hardcode table names (eg `yourls_url`) but use instead the user defined constants:

- `YOURLS_DB_TABLE_URL`
- `YOURLS_DB_TABLE_OPTIONS`
- `YOURLS_DB_TABLE_LOG`

## Versions 1.7.3 and up

Starting from 1.7.3, YOURLS uses PDO via the [Aura.SQL](https://github.com/auraphp/Aura.Sql) library. The core concept is: bind values and fetch results.

Binding values means writing SQL queries with placeholders in place of variables, and then explaining which variables will replace placeholders.

Example:

```php
$table = YOURLS_DB_TABLE_URL;
$sql   = "SELECT * FROM `$table` WHERE `keyword` = :keyword"; // notice the ":keyword" placeholder
$binds = array('keyword', $some_keyword);
$infos = yourls_get_db()->fetchObject($sql, $binds);
```

Example:

```php
$table  = YOURLS_DB_TABLE_URL;
$sql    = "UPDATE `$table` SET `title` = :title WHERE `keyword` = :keyword";
$binds  = array('title' => $title, 'keyword' => $keyword);
$update = yourls_get_db()->fetchAffected($sql, $binds);
```

The point is: **you don't mix SQL statements with variables**. Instead, write SQL statement with hardcoded placeholders (everything is hardcoded except for the table name), define an array of (placeholder, variable) pairs, and let the magic happen under the hood, where everything is escaped for you.

Doing so, you are sure to never run a query with a variable that could potentially contain malicious content and lead to SQL injection.

The available methods are:

- `$ydb->fetchAll($sql, $binds)`: returns an array containing all of the result set rows
- `$ydb->fetchAssoc($sql, $binds)`: returns an associative array of all rows where the key is the first column
- `$ydb->fetchGroup($sql, $binds)`: like fetchAssoc() except that the values aren't wrapped in arrays
- `$ydb->fetchObject($sql, $binds)`: returns the first row as an object
- `$ydb->fetchObjects($sql, $binds)`: returns an array of objects
- `$ydb->fetchOne($sql, $binds)`: returns the first row as an associative array
- `$ydb->fetchPairs($sql, $binds)`: returns an associative array where each key is the first column and each value is the second column
- `$ydb->fetchValue($sql, $binds)`: returns the value of the first row in the first column
- `$ydb->fetchAffected($sql, $binds)`: returns the number of affected rows

The methods are fully [documented on Aura.SQL](https://github.com/auraphp/Aura.Sql/blob/3.x/docs/index.md), and here are a few [sample outputs](https://gist.github.com/ozh/d60fcc8e22103ca1b35e7c799f5df02b) of available methods.

## Before 1.7.3

Up to 1.7.2, YOURLS used to use a homegrown extended version of [ezSQL](https://github.com/YOURLS/YOURLS/tree/1.7.2/includes/ezSQL), a legacy popular SQL wrapping library.

As ezSQL provided no automatic escaping of SQL statements, you had to pay great attention to escaping variable before running the queries. For example:

```php
$table   = YOURLS_DB_TABLE_URL;
$keyword = yourls_escape($keyword);
$title   = yourls_escape($title);
$update  = $ydb->query("UPDATE `$table` SET `title` = '$title' WHERE `keyword` = '$keyword';"); // query written with variable content
```

The methods were:

- `$ydb->get_col($query)`: get one column
- `$ydb->get_row($query)`: get one row
- `$ydb->get_var($query)`: get one value
- `$ydb->get_results($query)`: get multiple rows
- `$ydb->query($query)`: run a query and get the number of affected rows

For compatibility reasons, those deprecated methods still work in YOURLS 1.7.3+ but they now send a deprecation notice when debug mode is on (as it should be if you are coding).

## Upgrade your code for 1.7.3

Up to 1.7.2 your plugins or code pieces might have contained something along the lines of:

```php
$table = YOURLS_DB_TABLE_URL;
$keyword = [ ... somedata coming from somewhere ... ];
$keyword = yourls_escape($keyword); // escape arbitrary content
$sql = "SELECT `url` FROM `$table` WHERE `keyword` = '$keyword'"; // SQL query with variable content
$url = $ydb->get_var($sql);
```

The schema was: get some data, `yourls_escape()` it, pass it inside an SQL query.

From 1.7.3 this same code would now be:

```php
$table = YOURLS_DB_TABLE_URL;
$keyword = [ ... somedata coming from somewhere ... ];
$sql = "SELECT `url` FROM $table WHERE `keyword` = :keyword"; // SQL query with only hardcoded parameters
$binds = array('keyword' => $keyword); // array of parameter key => parameter value
$url = $ydb->fetchValue($sql, $binds);
```

The schema now is: don't bother escaping arbitrary content, be it a string, an array or whatever, bind it and let the engine do the magic.
