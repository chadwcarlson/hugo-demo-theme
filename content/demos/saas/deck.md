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
<aside class="notes">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet feugiat eros a posuere.
  Maecenas lacinia erat eu elit bibendum, et suscipit libero viverra. Pellentesque felis magna, viverra eget pulvinar vitae, lobortis a dui.
  Pellentesque volutpat nulla a enim rutrum laoreet. Quisque est urna, faucibus ut turpis eu, dictum mollis elit.
  Nulla facilisi. Aenean lorem quam, laoreet ut sagittis quis, lacinia quis turpis.
</aside>
{{< /slide >}}

{{< slide type="image" src="../assets/2018-12-12-OEM-Webinar.014.png" alt="PaaS vs the rest" full="true">}}
<aside class="notes">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet feugiat eros a posuere.
  Maecenas lacinia erat eu elit bibendum, et suscipit libero viverra. Pellentesque felis magna, viverra eget pulvinar vitae, lobortis a dui.
  Pellentesque volutpat nulla a enim rutrum laoreet. Quisque est urna, faucibus ut turpis eu, dictum mollis elit.
  Nulla facilisi. Aenean lorem quam, laoreet ut sagittis quis, lacinia quis turpis.
</aside>
{{< /slide >}}

{{< slide >}}
Let's discuss single-tenant vs multi-tenant.
<aside class="notes">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet feugiat eros a posuere.
  Maecenas lacinia erat eu elit bibendum, et suscipit libero viverra. Pellentesque felis magna, viverra eget pulvinar vitae, lobortis a dui.
  Pellentesque volutpat nulla a enim rutrum laoreet. Quisque est urna, faucibus ut turpis eu, dictum mollis elit.
  Nulla facilisi. Aenean lorem quam, laoreet ut sagittis quis, lacinia quis turpis.
</aside>
{{< /slide >}}

{{< slide type="image" src="../assets/single-v-multi.001.png" alt="Single-tenant" full="true">}}
<aside class="notes">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet feugiat eros a posuere.
  Maecenas lacinia erat eu elit bibendum, et suscipit libero viverra. Pellentesque felis magna, viverra eget pulvinar vitae, lobortis a dui.
  Pellentesque volutpat nulla a enim rutrum laoreet. Quisque est urna, faucibus ut turpis eu, dictum mollis elit.
  Nulla facilisi. Aenean lorem quam, laoreet ut sagittis quis, lacinia quis turpis.
</aside>
{{< /slide >}}

{{< slide type="image" src="../assets/single-v-multi.002.png" alt="Multi-tenant" full="true">}}
<aside class="notes">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet feugiat eros a posuere.
  Maecenas lacinia erat eu elit bibendum, et suscipit libero viverra. Pellentesque felis magna, viverra eget pulvinar vitae, lobortis a dui.
  Pellentesque volutpat nulla a enim rutrum laoreet. Quisque est urna, faucibus ut turpis eu, dictum mollis elit.
  Nulla facilisi. Aenean lorem quam, laoreet ut sagittis quis, lacinia quis turpis.
</aside>
{{< /slide >}}

{{< slide >}}
<blockquote>How can I get the advantages of multi-tenant for my<br />single-tenant app?</blockquote>
<aside class="notes">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet feugiat eros a posuere.
  Maecenas lacinia erat eu elit bibendum, et suscipit libero viverra. Pellentesque felis magna, viverra eget pulvinar vitae, lobortis a dui.
  Pellentesque volutpat nulla a enim rutrum laoreet. Quisque est urna, faucibus ut turpis eu, dictum mollis elit.
  Nulla facilisi. Aenean lorem quam, laoreet ut sagittis quis, lacinia quis turpis.
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
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet feugiat eros a posuere.
  Maecenas lacinia erat eu elit bibendum, et suscipit libero viverra. Pellentesque felis magna, viverra eget pulvinar vitae, lobortis a dui.
  Pellentesque volutpat nulla a enim rutrum laoreet. Quisque est urna, faucibus ut turpis eu, dictum mollis elit.
  Nulla facilisi. Aenean lorem quam, laoreet ut sagittis quis, lacinia quis turpis.
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
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet feugiat eros a posuere.
  Maecenas lacinia erat eu elit bibendum, et suscipit libero viverra. Pellentesque felis magna, viverra eget pulvinar vitae, lobortis a dui.
  Pellentesque volutpat nulla a enim rutrum laoreet. Quisque est urna, faucibus ut turpis eu, dictum mollis elit.
  Nulla facilisi. Aenean lorem quam, laoreet ut sagittis quis, lacinia quis turpis.
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
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet feugiat eros a posuere.
  Maecenas lacinia erat eu elit bibendum, et suscipit libero viverra. Pellentesque felis magna, viverra eget pulvinar vitae, lobortis a dui.
  Pellentesque volutpat nulla a enim rutrum laoreet. Quisque est urna, faucibus ut turpis eu, dictum mollis elit.
  Nulla facilisi. Aenean lorem quam, laoreet ut sagittis quis, lacinia quis turpis.
</aside>
{{< /slide >}}

{{< slide >}}
<p>The vendor, however, can use the PaaS backend for<br />update management and customizations.</p>
<aside class="notes">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet feugiat eros a posuere.
  Maecenas lacinia erat eu elit bibendum, et suscipit libero viverra. Pellentesque felis magna, viverra eget pulvinar vitae, lobortis a dui.
  Pellentesque volutpat nulla a enim rutrum laoreet. Quisque est urna, faucibus ut turpis eu, dictum mollis elit.
  Nulla facilisi. Aenean lorem quam, laoreet ut sagittis quis, lacinia quis turpis.
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
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet feugiat eros a posuere.
  Maecenas lacinia erat eu elit bibendum, et suscipit libero viverra. Pellentesque felis magna, viverra eget pulvinar vitae, lobortis a dui.
  Pellentesque volutpat nulla a enim rutrum laoreet. Quisque est urna, faucibus ut turpis eu, dictum mollis elit.
  Nulla facilisi. Aenean lorem quam, laoreet ut sagittis quis, lacinia quis turpis.
</aside>
{{< /slide >}}

{{< slide >}}
<p>The vendor gets the benefit of our multi-tenant cloud while keeping single-tenant application architecture.</p>
<aside class="notes">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet feugiat eros a posuere.
  Maecenas lacinia erat eu elit bibendum, et suscipit libero viverra. Pellentesque felis magna, viverra eget pulvinar vitae, lobortis a dui.
  Pellentesque volutpat nulla a enim rutrum laoreet. Quisque est urna, faucibus ut turpis eu, dictum mollis elit.
  Nulla facilisi. Aenean lorem quam, laoreet ut sagittis quis, lacinia quis turpis.
</aside>
{{< /slide >}}

{{< slide type="image" src="../assets/merge.gif" alt="Merge" full="true">}}
<aside class="notes">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet feugiat eros a posuere.
  Maecenas lacinia erat eu elit bibendum, et suscipit libero viverra. Pellentesque felis magna, viverra eget pulvinar vitae, lobortis a dui.
  Pellentesque volutpat nulla a enim rutrum laoreet. Quisque est urna, faucibus ut turpis eu, dictum mollis elit.
  Nulla facilisi. Aenean lorem quam, laoreet ut sagittis quis, lacinia quis turpis.
</aside>
{{< /slide >}}
