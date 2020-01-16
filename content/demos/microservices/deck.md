---
title: Microservices
outline:
    problem: |
        My monolith application is getting too big to handle.
draft: false
type: deck
---

{{< slide >}}
  <p>Most successful microservice systems start as monoliths,<br />then get broken up as they grow.</p>
{{< /slide >}}

{{< slide >}}
  <p>Fortunately, splitting up a project is easy.</p>
{{< /slide >}}

{{< slide type="asciicast" src="../assets/1-reorg-project.cast" >}}
  <p>1 - Move your existing application to a subdirectory</p>
{{< /slide >}}

{{< slide type="asciicast" src="../assets/2-new-app.cast" >}}
  <p>2 - Add your new application in its own directory</p>
{{< /slide >}}

{{< slide type="asciicast" src="../assets/3-rabbitmq.cast" >}}
  <p>3 - Optionally add services to coordinate your applications</p>
  <p>They can also talk to each other directly; your choice!</p>
{{< /slide >}}

{{< slide type="asciicast" src="../assets/4-worker.cast" >}}
  <p>4 - Applications can also spawn worker containers</p>
  <p>The same application, but a different run configuration</p>
{{< /slide >}}

{{< slide type="asciicast" src="../assets/5-deploy.cast" >}}
  <p>5 - <code>git push</code>; we'll take it from there</p>
{{< /slide >}}

{{< slide type="image" src="../assets/6-topology.png" alt="The UI now shows the new services" >}}
  <p>Your new applications and services are deployed!</p>
  <p>When ready, just merge to <code>master</code></p>
{{< /slide >}}

{{< slide >}}
<ul class="logo-list">
  <li><img src="../assets/php-logo.svg" alt="PHP 7" class="plain" data-credit="https://commons.wikimedia.org/wiki/File:PHP-logo.svg" /></li>
  <li><img src="../assets/python-logo.svg" alt="Python" class="plain" data-credit="https://commons.wikimedia.org/wiki/File:Python.svg" /></li>
  <li><img src="../assets/nodejs-logo.svg" alt="NodeJs" class="plain" data-credit="https://commons.wikimedia.org/wiki/File:Node.js_logo.svg" /></li>
  <li><img src="../assets/ruby-logo.svg" alt="Ruby" class="plain" data-credit="https://commons.wikimedia.org/wiki/File:Ruby_logo.svg" /></li>
  <li><img src="../assets/golang-logo.svg" alt="Go" class="plain" data-credit="https://www.vectorlogo.zone/logos/golang/index.html" /></li>
</ul>
<p style="margin-top: 0;">Mix and match any supported language as you please.</p>
{{< /slide >}}
