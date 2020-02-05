---
title: Operating at scale
outline:
    problem: |
        I have 300 sites to manage.  Help!
draft: false
type: deck
notes:
  title: |
    Operating at scale doesn't just mean meeting the demands of a single application.
  problem: |
    As your business grows, you may have multiple application across an entire fleet that each require diligent management.
---

{{< slide >}}
<h3>Large fleets pose large problems</h3>
<ul>
  <li>Provisioning</li>
  <li>Updating</li>
  <li>Access control</li>
  <li>Support and problem resolution</li>
</ul>
<aside class="notes">
  Managing fleets introduces new and large problems. How do you efficiently provision new sites? How do you manage updates for each site
  when needed across the whole fleet? How do you control your developer's access to each of them? What's the support lifecycle for problems?
</aside>
{{< /slide >}}

{{< slide >}}

<p style="font-style: italic;">Provisioning - automate it</p>
<asciinema-player src="../assets/1-create-project.cast"></asciinema-player>
<p>Our API is fully scriptable.</p>
<aside class="notes">
  With Platform.sh, provisioning can be completely automated since our API is fully scriptable.
</aside>
{{< /slide >}}

{{< slide >}}
<p style="font-style: italic; margin-bottom: 1em;">Updating - automate it</p>
<ul>
  <li>Manage your source code and push it out via Git and scripts.</li>
  <li>You decide what the workflow is.</li>
  <li>Update into a testing branch or straight to prod, your choice.</li>
</ul>
<aside class="notes">
  Platform.sh doesn't restrict your updates workflow at all, so you can decide to test pushed updates on dedicated testing branches.
</aside>
{{< /slide >}}

{{< slide >}}

  <p style="font-style: italic;">Access control - automate it</p>
  <asciinema-player src="../assets/2-multi-add-users.cast"></asciinema-player>
  <p>Run commands on multiple projects using the CLI or API calls.</p>
  <aside class="notes">
    Through the CLI or our API, controlling developer access can be fully automated as well, giving you fine grained control over who
    can contribute to which project.
  </aside>
{{< /slide >}}

{{< slide >}}

<h3>Support and problem resolution</h3>

<div class="two-col top-align">
  <img src="../assets/3-create-ticket.png" style="justify-self: center; height: 450px" alt="Create tickets using ZenDesk" />
  <ul>
    <li>We've got your back with 24/7 infrastructure support.</li>
    <li>Your helpdesk team can escalate relevant tickets to us directly via ticket sharing.</li>
  </ul>
</div>
<aside class="notes">
  And when it comes to support, Platform.sh provides 24/7 infrastructure support where you can open and share pressing tickets we can
  escalate quickly to resolution.
</aside>
{{< /slide >}}

{{< slide >}}

<p>Platform.sh is a one-stop solution for web hosting.</p>
<p style="margin-top: 2em;">The more sites you need to manage,<br />the greater the benefit of our fully automatable solution.</p>
<aside class="notes">
  All of this makes Platform.sh a one-stop solution for web hosting. As the number of sites your team manages grows, the greater the
  benefit you'll receive from the fully automatable solutions we provide.
</aside>
{{< /slide >}}
