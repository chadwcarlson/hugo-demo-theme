---
title: Dev vs Prod
outline:
    problem: |
        I want my Dev, Test and Stage environments to be identical to Production... but not too identical!
draft: false
type: deck
---

{{< slide >}}

Dev, Test, Stage, and any other environment should match Production as closely as possible.

{{< /slide >}}

{{< slide >}}

But they should have their own:

* Settings
* Services (e.g. Database)
* Domains
* API keys

{{< /slide >}}


{{< slide >}}

Unless you're doing load testing,
they should be on smaller containers to save resources.

{{< /slide >}}


{{< slide type="image" src="../assets/01-code-same.png" alt="Code should be the same" >}}
{{< /slide >}}

{{< slide type="image" src="../assets/02-services-same.png" alt="Services should be the same" >}}
{{< /slide >}}

{{< slide type="image" src="../assets/03-data-same.png" alt="Data should be the same" >}}
{{< /slide >}}

{{< slide type="image" src="../assets/04-uniques.png" alt="URLs etc should be unique" >}}
{{< /slide >}}

{{< slide >}}

Environment variables get added to
each new environment.
<p style="margin-top: 2em;">Use these for things like API keys that differ between<br />Production and non-Production environments.

{{< /slide >}}

{{< slide >}}

<video height="500px" data-autoplay muted playsinline>
  <source src="../assets/05-variables.mp4" type="video/mp4">
</video>
<p>Master has a Production payment gateway key.</p>
<p>All other environments inherit the Sandbox key.</p>

{{< /slide >}}

{{< slide type="asciicast" src="../assets/06-new-env.cast" >}}

<p>New environments inherit variables when created.</p>
<p>Developers don't need to worry about using correct settings.</p>

{{< /slide >}}

{{< slide >}}

<p>Non-production environments are scaled down to save costs.</p>
<p style="margin-top: 2em;">Larger sizes are available if your app needs extra resources.</p>

{{< /slide >}}
