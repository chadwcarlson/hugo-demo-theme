const REVEALJS_CONFIG = JSON.parse(document.getElementById('revealjs-config').innerHTML)
const REVEALJS_DEFAULTS= JSON.parse(document.getElementById('revealjs-defaults').innerHTML)

Reveal.initialize(
    Object.assign(
        {
            dependencies: [
                { src: '../vendor/reveal/lib/js/classList.js', condition: function() { return !document.body.classList; } },
                { src: '../vendor/reveal/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
                { src: '../vendor/reveal/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
                { src: '../../../vendor/reveal/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
                { src: '../../../vendor/reveal/plugin/search/search.js', async: true },
                { src: '../../../vendor/reveal/plugin/zoom-js/zoom.js', async: true },
                { src: '../../../vendor/reveal/plugin/notes/notes.js', async: true }
            ]
        },
        REVEALJS_DEFAULTS,
        REVEALJS_CONFIG
    )
)
