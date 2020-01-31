---
title: Drupal 8 Multi-site
outline:
    problem: |
        What about Drupal multi-site?
draft: false
type: deck
---

{{< slide >}}
<div class="two-col-svg">
  <div>Setting up a Drupal 8 multi-site app with subdomains takes just a few modifications from our existing template.</div>
  <div><img src="../assets/druplicon.svg" class="plain" width="400px" alt="Composer" /></div>
</div>
{{< /slide >}}

{{< slide type="image" src="../assets/01-routes.png" alt="Multi-site routes." width="75%" >}}
<p style="margin-top: 2em;">Each site gets a unique subsite ID</p>
<p>that is used to define its subdomain in <code>routes.yaml.</code></p>
{{< /slide >}}

{{< slide type="image" src="../assets/02-settings.png" alt="Multi-site settings directories." >}}
<p style="margin-top: 2em;">They get their own <code>config/sync</code> directory as well as settings</p>
<p> directories in <code>sites</code>, which are identical to <code>default</code></p>
<p>but can be customized for each site.</p>
{{< /slide >}}

{{< slide type="image" src="../assets/03-relationships.png" alt="Subsite relationships." >}}
<p style="margin-top: 2em;">Each subsite has its own database</p>
<p>and endpoint, so they get their own relationship</p>
<p>in <code>.platform.app.yaml</code>.</p>
{{< /slide >}}

{{< slide type="image" src="../assets/04-services.png" alt="Database definitions." width="60%" >}}
<p style="margin-top: 1em;">Each subsite's database is defined for the same</p>
<p>MariaDB instance in the <code>services.yaml</code> file.</p>
{{< /slide >}}

{{< slide >}}
<video width="80%" data-autoplay muted playsinline>
  <source src="../assets/05-urls.mp4" type="video/mp4">
</video>
<p>The resulting application has a separate Drupal 8</p>
<p>installation at each subdomain.</p>
{{< /slide >}}

{{< slide type="image" src="../assets/06-repo.png" alt="GitHub template repo." width="80%" >}}
<p style="margin-top: 2em;">Check out the multi-site template for all the details!</p>
{{< /slide >}}
