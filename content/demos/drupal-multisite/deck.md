---
title: Drupal 8 Multi-site
outline:
    problem: |
        What about Drupal multi-site?
draft: false
type: deck
notes:
  title: |
    Drupal can be configured to allow multiple sites to be served from a single codebase.
  problem: |
    This demo shows how to implement a Drupal multi-site project on Platform.sh.
---

{{< slide >}}
<div class="two-col-svg">
  <div>Setting up a Drupal 8 multi-site app with subdomains takes just a few modifications from our existing template.</div>
  <div><img src="../assets/druplicon.svg" class="plain" width="400px" alt="Composer" /></div>
</div>

<aside class="notes">
  You can set up each site with a separate subdomain on Platform.sh quickly with only a
  few modifications to our Drupal 8 template.
</aside>
{{< /slide >}}

{{< slide type="image" src="../assets/01-routes.png" alt="Multi-site routes." width="75%" >}}
<p style="margin-top: 2em;">Each site gets a unique subsite ID</p>
<p>that is used to define its subdomain in <code>routes.yaml.</code></p>

<aside class="notes">
  First, you can modify your <code>routes.yaml</code> file to assign a unique subdomain for each site.
  We're going to use the subdomains <code>first</code> and <code>second</code> for the two sites, and reuse those
  names throughout all of the following configuration steps. Notice how each subdomain is pointing at the same application,
  called <code>app</code>, as its upstream route.
</aside>
{{< /slide >}}

{{< slide type="image" src="../assets/02-settings.png" alt="Multi-site settings directories." >}}
<p style="margin-top: 2em;">They get their own <code>config/sync</code> directory as well as settings</p>
<p> directories in <code>sites</code>, which are identical to <code>default</code></p>
<p>but can be customized for each site.</p>

<aside class="notes">
  Next, you can give each site its own <code>config/sync</code> subdirectory, as well as settings in the
  <code>sites</code> subdirectory. To start off, each site's settings can be identical to those in
  <code>default</code>, but you can always customize them when you need to.
</aside>
{{< /slide >}}

{{< slide type="image" src="../assets/03-relationships.png" alt="Subsite relationships." >}}
<p style="margin-top: 2em;">Each subsite has its own database</p>
<p>and endpoint, so they get their own relationship</p>
<p>in <code>.platform.app.yaml</code>.</p>

<aside class="notes">
  Each subsite, <code>first</code> and <code>second</code> has its own database and endpoint, so we will
  give each of them a corresponding relationship in our <code>.platform.app.yaml</code> file.
</aside>
{{< /slide >}}

{{< slide type="image" src="../assets/04-services.png" alt="Database definitions." width="60%" >}}
<p style="margin-top: 1em;">Each subsite's database is defined for the same</p>
<p>MariaDB instance in the <code>services.yaml</code> file.</p>

<aside class="notes">
  Each of those databases is defined for the same MariaDB instance in the project's <code>services.yaml</code> file.
  Notice that each database's relationship uses the service name <code>db</code> but then includes the unique
  endpoint defined for each of the two sites.
</aside>
{{< /slide >}}

{{< slide >}}
<video width="80%" data-autoplay muted playsinline>
  <source src="../assets/05-urls.mp4" type="video/mp4">
</video>
<p>The resulting application has a separate Drupal 8</p>
<p>installation at each subdomain.</p>

<aside class="notes">
  Once we deploy the application, we can see that each subdomain contains its own separate Drupal 8 installation.  
</aside>
{{< /slide >}}

{{< slide type="image" src="../assets/06-repo.png" alt="GitHub template repo." width="80%" >}}
<p style="margin-top: 2em;">Check out the multi-site template for all the details!</p>

<aside class="notes">
  We kept the subsite and endpoint names identical so that we could include some glue code that gets each installation
  to talk to the right database. While we did not cover that code in this demo, it's relatively simple, so be sure to
  check out our Drupal 8 Multisite template on GitHub for all of the details.
</aside>
{{< /slide >}}
