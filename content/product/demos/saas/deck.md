---
title: SaaS on Platform.sh
outline:
    problem: |
        How can I offer my web app as a SaaS product?
draft: false
type: deck
notes:
  title: |
    Software as a Service, or SaaS, is a software delivery model where that software is centrally hosted and then licensed to users through some kind of subscription.
  problem: |
    But how can you offer your web application as a SaaS product?
---

{{< slide >}}
SaaS offers your customers a lot of advantages...
<aside class="notes">
  There's plenty of incentive for you and for your customers to figure out how to do deliver a SaaS product.
</aside>
{{< /slide >}}

{{< slide type="image" src="../assets/2018-12-12-OEM-Webinar.014.png" alt="PaaS vs the rest" full="true">}}
<aside class="notes">
  By alleviating all software and hardware considerations from your users, the SaaS model provides faster time to market
  and replaces capital costs with on-demand operating costs, all in a clear 1-stop shop solution.
</aside>
{{< /slide >}}

{{< slide >}}
Let's discuss single-tenant vs multi-tenant.
<aside class="notes">
  There are two major ways to implement your SaaS product: single and multi-tenancy.
</aside>
{{< /slide >}}

{{< slide type="image" src="../assets/single-v-multi.001.png" alt="Single-tenant" full="true">}}
<aside class="notes">
  Single-tenant software exists as a single instance per single customer. Data and resources are isolated for their needs, which makes
  instances easier to customize and scale for each customer. But there are also disadvantages. A one-to-one relationship between customer
  and SaaS instance can make it more difficult to update all instances in the fleet, and resource isolation can result in a greater cost
  per customer to operate.
</aside>
{{< /slide >}}

{{< slide type="image" src="../assets/single-v-multi.002.png" alt="Multi-tenant" full="true">}}
<aside class="notes">
  On the other hand, in multi-tenant SaaS products sharing data is possible across all customers from a central instance. This makes it
  easier add new customers and can result in lower operating costs. However, multi-tenancy can be more difficult to scale, and customization
  for individual customers becomes much more difficult. Effort will always have to be made to keep customer data segregated at the application layer.
</aside>
{{< /slide >}}

{{< slide >}}
<blockquote>How can I get the advantages of multi-tenant for my<br />single-tenant app?</blockquote>
<aside class="notes">
  But I want it all. I want the advantages of multi-tenancy for my single-tenant application.
</aside>
{{< /slide >}}

{{< slide >}}
<h3>Case study: Open Social</h3>

<div class="two-col top-align">
  <img src="../assets/2018-12-12-OEM-Webinar.022.png" alt="Open Social the Drupal distribution" />
  <ul>
    <li>Drupal distro for community groups</li>
    <li>Customers have their own instances</li>
    <li>Customers don't get server access</li>
  </ul>
</div>
<aside class="notes">
  Well, we can take a look at a case study from Open Social to get an idea of what that might look like. With Platform.sh, Open Social provides
  a Drupal distribution for community groups, where each of their customers has their own instances. Open Social retains control of that instance,
  and no customers are given access to their server.
</aside>
{{< /slide >}}

{{< slide >}}
<h3>Open Social SaaS</h3>

<div class="two-col top-align">
  <ul>
    <li>Open Social built their own management tool</li>
    <li>Uses Platform.sh APIs internally</li>
    <li>They didn't even talk to us!</li>
    <li>It was that easy</li>
  </ul>
  <img src="../assets/2018-12-12-OEM-Webinar.023.png" alt="Open Social has their own billing plans" />
</div>
<aside class="notes">
  Open Social built their own management tool, which uses the Platform.sh API internally.
</aside>
{{< /slide >}}

{{< slide >}}

<h3>Single-instance runtime</h3>

<div class="two-col top-align">
  <img src="../assets/2018-12-12-OEM-Webinar.025.png" alt="">
  <ul>
  <li>Every customer has their own SaaS instance</li>
  <li>Every customer has their own Platform.sh project</li>
  <li>They just don't know, or care</li>
  </ul>
</div>
<aside class="notes">
  A customer's community is a unique SaaS instance powered by its own project on Platform.sh, not that they would ever need to know that that's
  how it's done.
</aside>
{{< /slide >}}

{{< slide >}}
<p>The vendor, however, can use the PaaS backend for<br />update management and customizations.</p>
<aside class="notes">
  Then, all of the community instances can be accessed by the vendor to manage updates and apply customizations.
</aside>
{{< /slide >}}

{{< slide >}}

<h3>Git-based updating</h3>

<div class="two-col top-align">
  <ul>
    <li>Open Social manages the code</li>
    <li>It's all "just git", so easily automated</li>
  </ul>
  <img src="../assets/2018-12-12-OEM-Webinar.027.png" style="justify-self: center; height: 450px;" alt="Platform.sh projects are managed through Git">
</div>
<aside class="notes">
  Open Social manages all the code in the PaaS fleet. Since it's all just Git in the background, they can automate it - no matter the number of
  communities - very easily.
</aside>
{{< /slide >}}

{{< slide >}}
<p>The vendor gets the benefit of our multi-tenant cloud while keeping single-tenant application architecture.</p>
<aside class="notes">
  As a result, the vendor can receive all of the benefits of multi-tenancy, while keeping the advantages of a single-tenant application architecture for their customers.  
</aside>
{{< /slide >}}

{{< slide type="image" src="../assets/merge.gif" alt="Merge" full="true">}}
<aside class="notes">
  With Platform.sh, they get the ease of single-tenant isolation, but the kind of complete control over scaling that comes
  with multi-tenancy in the background.
</aside>
{{< /slide >}}
