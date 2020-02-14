---
title: Security
outline:
    problem: |
        I need to know and verify that my site is secure.
draft: false
type: deck
notes:
  title: |
    Whether you're running an online store or a learning management systems, the security of your application needs to be the highest priority.
  problem: |
    Teams need to be able to know and verify that their sites are secure at all times.
---

{{< slide type="image" src="../assets/1-clone-branch.png" alt="Any user can clone a branch" >}}
<p style="margin-top: 2em;">All changes to code happen through Git.</p>
<aside class="notes">
  On Platform.sh, every change to your application code, infrastructure or otherwise, has to occur through Git.
</aside>
{{< /slide >}}

{{< slide type="asciicast" src="../assets/2-break-something.cast" >}}
<p>Sometimes users commit broken code. But if they do...</p>
<aside class="notes">
  This ensures that even when team members commit broken code, it can always be traced back to the source.
</aside>
{{< /slide >}}

{{< slide type="asciicast" src="../assets/3-git-log.cast" >}}
<p>There's no secret. It's right there in the Git log.</p>
<aside class="notes">
  So you can find out what was changed, who made that change, and when was it applied to production, all visible in the Git log.
</aside>
<p>Who, When, and Where.</p>
{{< /slide >}}

{{< slide type="asciicast" src="../assets/4-cannot-edit-live.cast" >}}
<p>The server is read-only. No one can "fix it live" and forget it.</p>
<p>That means even if a site is compromised, the code can't be.</p>
<aside class="notes">
  Additionally, Platform.sh containers are read-only post-build, making it impossible for anyone to "fix it live" and forget it. That
  means that even if the site has been compromised, the code can't be.
</aside>
{{< /slide >}}

{{< slide >}}
<video width="80%" data-autoplay muted playsinline>
  <source src="../assets/3-add-jorge.mp4" type="video/mp4">
</video>
<p>The Administrator can add Jorge to </p>
<p>the <code>integration</code> branch as a Contributor.</p>
<aside class="notes">
  What's more, Platform.sh provides strict controls to limit who can contribute to which environments right from the beginning.
</aside>
{{< /slide >}}

{{< slide type="image" src="../assets/5-jorge-integration-branch.png" alt="Jorge has access to the integration branch" >}}
<p>But don't worry.</p>
<p>While this user can commit to the <code>integration</code> branch...</p>
<aside class="notes">
  So even though you can add a user to commit to one branch,
</aside>
{{< /slide >}}

{{< slide type="image" src="../assets/6-jorge-no-master-branch.png" alt="Jorge does not have access to the master branch" >}}
<p>They can't merge it to <code>master</code> without a review.</p>
<p>No one likes broken code, even on Fridays.</p>
<aside class="notes">
  they are incapable of merging into <code>master</code> without proper review first. Because no one likes broken code,
  even on Fridays.
</aside>
{{< /slide >}}

{{< slide >}}

<h3>Security is on us.</h3>

<p style="text-align: left;">You pick the major version; we handle security updates</p>
<ul style="margin-top: 2em;">
  <li>Operating System</li>
  <li>System software</li>
  <li>Services</li>
</ul>

<aside class="notes">
  Security is on us from the start. You pick the major version for your runtimes and services, and we'll handle every
  security update to the those services, and to the operating system for you.
</aside>
{{< /slide >}}

{{< slide >}}

<h3>Secure-by-design architecture</h3>

<div class="grid-2x3">
<div class="security-point">
<!-- <img src="assets/security-shield.png" width="10px" alt="" /> -->
  <h4>Hardened services</h4>
  <p>We run hardened Linux Kernels, and all deployed packages come from internal signed repositories.</p>
</div>
<div class="security-point">
  <h4>No-root operation</h4>
  <p>Operations are fully automated. All operations are logged.</p>
</div>
<div class="security-point">
  <h4>Restrictive firewall</h4>
  <p>Only HTTP/S and SSH are allowed in. Services run in full network isolation.</p>
</div>
<div class="security-point">
  <h4>Restricted access</h4>
  <p>SSH access is controlled per-environment. All users are unprivileged.</p>
</div>
<div class="security-point">
  <h4>2FA available</h4>
  <p>Any login to the dashboard can be enforced through a second authentication method.</p>
</div>
<div class="security-point">
  <h4>TLS everywhere</h4>
  <p>Free TLS certificates included in every project, or bring your own.</p>
</div>
</div>

<aside class="notes">
  This is secure-by-design architecture at your disposal. We run hardened Linux kernels, and all packages originate from internal
  signed repositories, and every operation we make is fully automated and logged. We keep a restrictive firewall in place where only
  HTTP, HTTPS and SSH are allowed inside with fully isolated services. By default, all users are unprivileged to access environments
  via SSH, and access is granted on an environment-by-environment basis. Two factor authentication can be enforced for every login to
  your team's dashboard, and TLS certificates are provided for free for every project and environment as soon as they are created.
</aside>
{{< /slide >}}

{{< slide >}}

<h3>Compliance</h3>

<p>Platform.sh is compliant with the GDPR, BDSG, and PIPEDA.</p>
<p>Our cloud partners are certified under</p>
<p>multiple compliance frameworks.</p>

<aside class="notes">
  Platform.sh also comes compliant with GDPR, BDSG, and PIPEDA, and our cloud partners are certified under multiple compliance
  frameworks themselves.
</aside>
{{< /slide >}}
