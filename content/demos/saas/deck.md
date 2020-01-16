---
title: SaaS on Platform.sh
outline:
    problem: |
        How can I offer my web app as a SaaS product?
draft: false
type: deck
---

{{< slide >}}
SaaS offers your customers a lot of advantages...
{{< /slide >}}

{{< slide type="image" src="../assets/2018-12-12-OEM-Webinar.014.png" alt="PaaS vs the rest" >}}
{{< /slide >}}

{{< slide >}}
Let's discuss single-tenant vs multi-tenant.
{{< /slide >}}

{{< slide type="image" src="../assets/single-v-multi.001.png" alt="Single-tenant" >}}
{{< /slide >}}

{{< slide type="image" src="../assets/single-v-multi.002.png" alt="Multi-tenant" >}}
{{< /slide >}}

{{< slide >}}
<blockquote>How can I get the advantages of multi-tenant for my<br />single-tenant app?</blockquote>
{{< /slide >}}

{{< slide >}}
## Case study: Open Social

<div class="two-col top-align">
  <img src="../assets/2018-12-12-OEM-Webinar.022.png" alt="Open Social the Drupal distribution" />
  <ul>
    <li>Drupal distro for community groups</li>
    <li>Customers have their own instances</li>
    <li>Customers don't get server access</li>
  </ul>
</div>

{{< /slide >}}

{{< slide >}}
## Open Social SaaS

<div class="two-col top-align">
  <ul>
    <li>Open Social built their own management tool</li>
    <li>Uses Platform.sh APIs internally</li>
    <li>They didn't even talk to us!</li>
    <li>It was that easy</li>
  </ul>
  <img src="../assets/2018-12-12-OEM-Webinar.023.png" alt="Open Social has their own billing plans" />
</div>

{{< /slide >}}

{{< slide >}}

## Single-instance runtime

<div class="two-col top-align">
  <img src="../assets/2018-12-12-OEM-Webinar.025.png" alt="">
  <ul>
  <li>Every customer has their own SaaS instance</li>
  <li>Every customer has their own Platform.sh project</li>
  <li>They just don't know, or care</li>
  </ul>
</div>

{{< /slide >}}

{{< slide >}}
<p>The vendor, however, can use the PaaS backend for<br />update management and customizations.</p>
{{< /slide >}}

{{< slide >}}

## Git-based updating

<div class="two-col top-align">
  <ul>
    <li>Open Social manages the code</li>
    <li>It's all "just git", so easily automated</li>
  </ul>
  <img src="../assets/2018-12-12-OEM-Webinar.027.png" style="justify-self: center; height: 450px;" alt="Platform.sh projects are managed through Git">
</div>

{{< /slide >}}

{{< slide >}}
<p>The vendor gets the benefit of our multi-tenant cloud while keeping single-tenant application architecture.</p>
{{< /slide >}}

{{< slide type="image" src="../assets/merge.gif" alt="Merge" >}}
{{< /slide >}}
