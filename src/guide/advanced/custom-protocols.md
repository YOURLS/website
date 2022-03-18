# Custom protocols

YOURLS can shorten URLs with non standard protocols (other than `http` or `https`).

## What for ?

All links are not intended to redirect to a site. Depending on your needs, you may want to shorten and share short links that redirect to a `mailto:` address, an `ftp://` URL, your `facetime:` or `skype:` profile.

Example: <https://yourls.org/mailto>

When you shorten a non-standard link, a visual clue will be added next to the shortened link.

## Supported and forbidden protocols

A wide variety of popular non-standard protocols is included out of the box. They include:

- common stuff: `http(s)://`, `ftp://`, `feed://`, `mailto:`, `news:` ...
- developer oriented protocols: `git://`, `svn://`, ...
- p2p: `ed2k://`, `magnet:`, ...
- streaming and music: `lastfm://`, `spotify:`, `mms://`, ...
- text and voice: `facetime://`, `gtalk:`, `irc://`, `skype:`, `teamspeak://`, ...

Some protocol are deliberately forbidden for security reasons, such as `javascript:`, `data:`, `about:` or `chrome://`

## I want to allow/forbid a specific protocol

Depending on your use you may want to restrict allowed protocols or add custom protocols to the white list. This is easily feasible: see [Public shortening](/guide/advanced/public-shortening) and this example plugin: [YOURLS/custom-protocol](https://github.com/YOURLS/custom-protocol)
