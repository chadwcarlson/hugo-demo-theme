

## Development

### Updating vendored dependencies

#### Updating `static/vendor/reveal`

The directory `static/vendor/reveal` is a [git subtree](https://manpages.debian.org/testing/git-man/git-subtree.1.en.html). It is recommended that you add Reveal's origin as a remote:

```
git remote add reveal-upstream git@github.com:hakimel/reveal.js.git
```

To update the subtree, pull from this remote. You should run this command from the root of the `modular-reveal/` directory tree.

```
git subtree pull -P static/vendor/reveal reveal-upstream master \
    --squash -m "Update reveal from upstream"
```

To update to a specific release rather than the head of the master branch, substitute a specific tag for `master`, e.g.

```
git subtree pull -P static/vendor/reveal reveal-upstream 3.8.0 \
    --squash -m "Update reveal to version 3.8.0"
```

### Updating `static/vendor/asciinema`

The directory `static/vendor/asciinema` contains the two downloadable assets from the
[`asciinema-player` repository](https://github.com/asciinema/asciinema-player). To update
these files, change into the `static/vendor/asciinema` directory and run the
following command:

```
curl -s https://api.github.com/repos/asciinema/asciinema-player/releases/latest |\
    grep "browser_download_url.*[js|css]" |\
    cut -d'"' -f 4 | xargs -n1 curl -sL -O
```
