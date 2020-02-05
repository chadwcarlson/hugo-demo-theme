---
title: Try new technologies and architectures
outline:
    problem: |
        I'd like to test Elasticsearch with my app.
draft: false
type: deck
notes:
  title: |
    As your application grows, new features may require adding new technologies and architectures.
  problem: |
    Changing how search is handled on your site could require adding an Elasticsearch service to your cluster.
---

{{< slide type="image" src="../assets/01-elasticsearch-branch.png" alt="Use the UI to make a new elasticsearch branch" class="screenshot" >}}

<p>To test a new technology, start by making a new branch.</p>

<aside class="notes">
  On Platform.sh, you can start by creating a new environment to test out the new feature.
</aside>
{{< /slide >}}

{{< slide type="asciicast" src="../assets/02-services.cast" >}}
<p>On the new branch, add the Elasticsearch service to<br />your <code>services.yaml</code> file.</p>

<aside class="notes">
  On that environment's branch, add Elasticsearch to your project's <code>services.yaml</code> file.
</aside>
{{< /slide >}}

{{< slide type="asciicast" src="../assets/03-app-yaml.cast" >}}
<p>The <code>relationships</code> in the <code>.platform.app.yaml</code> file give your app access to the new Elasticsearch service.</p>

<aside class="notes">
  Then update your <code>.platform.app.yaml</code> with a new relationship to access it.
</aside>
{{< /slide >}}

{{< slide >}}
<p>Deploy these changes using <code>git push</code>.</p>

<aside class="notes">
  Commit those changes, and then push to deploy them on Platform.sh.
</aside>
{{< /slide >}}

{{< slide type="asciicast" src="../assets/04-tunnel.cast" >}}
<p>Access the new cloud service locally via a tunnel.</p>

<aside class="notes">
  After the push, you can access the service locally via an SSH tunnel using the CLI command <code>platform tunnel:open</code>.
  We can run <code>platform tunnel:info</code> to discover the Elasticsearch service's connection credentials to use in your app.
</aside>
{{< /slide >}}

{{< slide type="asciicast" src="../assets/05-curl.cast" >}}
<p>Send a request to the ES server in the cloud using the local tunnel.</p>

<aside class="notes">
  Once the tunnel is open, you can send a request to the Elasticsearch server using that tunnel and the <code>PORT</code>
  parameter we found in the previous step.
</aside>
{{< /slide >}}

{{< slide type="asciicast" src="../assets/06-relationships.cast" >}}
<p>Your app will use the connection details in <code>PLATFORM_RELATIONSHIPS</code> to connect to the ES service.</p>

<aside class="notes">
  All of your connection credentials for Elasticsearch reside in the <code>PLATFORM_RELATIONSHIPS</code> environment variable,
  which will then be used to connect to Elasticsearch.
</aside>
{{< /slide >}}

{{< slide type="image" src="../assets/07-share.gif" alt="Share the new environment by copying the URL" class="screenshot" >}}
<p>Share the new environment URL with others.</p>

<aside class="notes">
  When you're satisfied with the new Elasticsearch-dependent feature, you can share the development environment URL with others
  for review.
</aside>
{{< /slide >}}

{{< slide >}}
  <p>When you're ready to go live, just merge into <code>master</code> and the application deploys with the new Elasticsearch service.</p>

  <aside class="notes">
    Then when you're ready to take the new feature live, merge the environment into <code>master</code>. Now production, as
    each new subsequent environment, will deploy with the the new Elasticsearch service.
  </aside>
{{< /slide >}}

{{< slide >}}
<p>Infrastructure is code.  <br />If you want to go back, just <code>git revert</code><br />as you would for any other code.</p>

<aside class="notes">
  Every bit of this configuration is explicitly detailed in your Platform.sh configuration files, which means going back to
  before the service is just a <code>git revert</code> away. That's what Infrastructure as code is all about.
</aside>
{{< /slide >}}
