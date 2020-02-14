---
title: Dev vs Prod
outline:
    problem: |
        I want my Dev, Test and Stage environments to be identical to Production... but not too identical!
draft: false
type: deck
notes:
  title: |
    Development environments work the way they should on Platform.sh: identical to production where it matters.
  problem: |
    Testing and Staging environments reflect new features, but also match production so you know there won't be any unexpected changes post-merge.
---

{{< slide >}}

Dev, Test, Stage, and any other environment should match Production as closely as possible.

<aside class="notes">
  All of your development environments should match Production as closely as possible.
</aside>

{{< /slide >}}

{{< slide >}}

<p>But they should have their own:
<ul style="margin-top: 2em;">
  <li>Settings</li>
  <li>Services (e.g. Database)</li>
  <li>Domains</li>
  <li>API keys</li>
</ul>

<aside class="notes">
  While maintaining unique settings, copies of services and data that don't affect production, and domains for showcasing new features to clients.
</aside>

{{< /slide >}}


{{< slide >}}

Unless you're doing load testing,
they should be on smaller containers to save resources.

<aside class="notes">
  These development environments can do so all while being built on small containers that reflect their small resource demand.
</aside>

{{< /slide >}}


{{< slide type="image" src="../assets/01-code-same.png" alt="Code should be the same" >}}

<aside class="notes">
  Their code should be the same as production.
</aside>
{{< /slide >}}

{{< slide type="image" src="../assets/02-services-same.png" alt="Services should be the same" >}}

<aside class="notes">
  Their services should also be identical.
</aside>
{{< /slide >}}

{{< slide type="image" src="../assets/03-data-same.png" alt="Data should be the same" >}}

<aside class="notes">
  And data should always reflect up-to-date production data.
</aside>
{{< /slide >}}

{{< slide type="image" src="../assets/04-uniques.png" alt="URLs etc should be unique" >}}

<aside class="notes">
  But payment gateways, email, and environment URLs should remain unique for every environment you're working on.
</aside>
{{< /slide >}}

{{< slide >}}

Environment variables get added to
each new environment.
<p style="margin-top: 2em;">Use these for things like API keys that differ between<br />Production and non-Production environments.

<aside class="notes">
  You can set environment variables, such as API keys, that differ between Production and non-Production environments.
</aside>
{{< /slide >}}

{{< slide >}}

<video height="500px" data-autoplay muted playsinline>
  <source src="../assets/05-variables.mp4" type="video/mp4">
</video>
<p>Master has a Production payment gateway key.</p>
<p>All other environments inherit the Sandbox key.</p>

<aside class="notes">
  So that each new development environment inherits a Sandbox variable, and never has access to a Production variable.
  In the demo shown here, we set a variable called <code>Payment-API</code> for the <code>master</code> environment with
  a value of <code>my-secret-key</code>. The variable will initially be inherited by all of its child branches. Once we
  add the variable, we can see that it was indeed inherited by the staging environment. We don't want development environments
  to use the production API key, so we'll update the variable's value for all non-production branches to instead be
  <code>my-development-key</code>. This new value is then inherited, as can be seen here on the <code>feature-1</code> branch. 
</aside>
{{< /slide >}}

{{< slide type="asciicast" src="../assets/06-new-env.cast" >}}

<p>New environments inherit variables when created.</p>
<p>Developers don't need to worry about using correct settings.</p>

<aside class="notes">
  As a result, developers don't need to worry about using the correct settings, as they inherit all of the non-Production variables
  they need as soon as those environments are created.
</aside>
{{< /slide >}}

{{< slide >}}

<p>Non-production environments are scaled down to save costs.</p>
<p style="margin-top: 2em;">Larger sizes are available if your app needs extra resources.</p>

<aside class="notes">
  If your application requires Production-level resources in development, you can easily upsize those environment's resources to match.
</aside>
{{< /slide >}}
