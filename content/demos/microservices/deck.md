---
title: Microservices
outline:
    problem: |
        My monolith application is getting too big to handle.
draft: false
type: deck
notes:
  title: |
    Splitting an application into a collection of coupled services can help simplify your projects and clarify contributor responsibilities.
  problem: |
    After awhile, you may come to realize that your monolith codebase is getting too big to handle.
---

{{< slide >}}
  <p>Most successful microservice systems start as monoliths,<br />then get broken up as they grow.</p>
  <aside class="notes">
    This a common problem software projects come up against, even the most successful microservice systems, breaking up as they grow.
  </aside>
{{< /slide >}}

{{< slide >}}
  <p>Fortunately, splitting up a project is easy.</p>
  <aside class="notes">
    If you're app has become a giant, Platform.sh's configuration makes breaking it up into separate application containers simple very straightforward.
  </aside>
{{< /slide >}}

{{< slide type="asciicast" src="../assets/1-reorg-project.cast" >}}
  <p>1 - Move your existing application to a subdirectory</p>
  <aside class="notes">
    You can move your existing application to a subdirectory, including its <code>.platform.app.yaml</code> file.


  </aside>
{{< /slide >}}

{{< slide type="asciicast" src="../assets/2-new-app.cast" >}}
  <p>2 - Add your new application in its own directory</p>
  <aside class="notes">
    You can then move a new application, such as your API backend to its own subdirectory, one that will contain its own
    <code>.platform.app.yaml</code> file inside of it.
  </aside>
{{< /slide >}}

{{< slide type="asciicast" src="../assets/3-rabbitmq.cast" >}}
  <p>3 - Optionally add services to coordinate your applications</p>
  <p>They can also talk to each other directly; your choice!</p>
  <aside class="notes">
    Since your services will be shared between each application container, everything in the <code>.platform</code> hidden configuration
    subdirectory will remain in the project root. You can optionally add additional services to your <code>services.yaml</code> file to
    help coordinate how your applications talk to each other - such as adding RabbitMQ to allow them to communicate asynchronously.
  </aside>
{{< /slide >}}

{{< slide type="asciicast" src="../assets/4-worker.cast" >}}
  <p>4 - Applications can also spawn worker containers</p>
  <p>The same application, but a different run configuration</p>
  <aside class="notes">
    In your new microservice's <code>.platform.app.yaml</code> file, you can also configure the application to spawn worker containers
    with their own run configuration.
  </aside>
{{< /slide >}}

{{< slide type="asciicast" src="../assets/5-deploy.cast" >}}
  <p>5 - <code>git push</code>; we'll take it from there</p>
  <aside class="notes">
    Push the changes, and Platform.sh will orchestrate the newly configured cluster automatically.
  </aside>
{{< /slide >}}

{{< slide type="image" src="../assets/6-topology.png" alt="The UI now shows the new services" >}}
  <p>Your new applications and services are deployed!</p>
  <p>When ready, just merge to <code>master</code></p>
  <aside class="notes">
    In your management console you will be able to see that your Service Graph has been updated, now with two application containers.
    When you're satisfied with your new infrastructure, merge to master and see the changes in production from that point on.
  </aside>
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
<aside class="notes">
  There is no requirement that application containers use the same runtime, so feel free to mix and match our supported languages to fit your needs.
</aside>
{{< /slide >}}
