---
title: Try new technologies and architectures
outline:
    problem: |
        I'd like to test Elasticsearch with my app.
draft: false
type: deck
---

{{< slide type="image" src="../assets/01-elasticsearch-branch.png" alt="Use the UI to make a new elasticsearch branch" class="screenshot" >}}

<p>To test a new technology, start by making a new branch.</p>

{{< /slide >}}

{{< slide type="asciicast" src="../assets/02-services.cast" >}}
<p>On the new branch, add the Elasticsearch service to<br />your <code>services.yaml</code> file.</p>
{{< /slide >}}

{{< slide type="asciicast" src="../assets/03-app-yaml.cast" >}}
<p>The <code>relationships</code> in the <code>.platform.app.yaml</code> file give your app access to the new Elasticsearch service.</p>
{{< /slide >}}

{{< slide >}}
<p>Deploy these changes using <code>git push</code>.</p>
{{< /slide >}}

{{< slide type="asciicast" src="../assets/04-tunnel.cast" >}}
<p>Access the new cloud service locally via a tunnel.</p>
{{< /slide >}}

{{< slide type="asciicast" src="../assets/05-curl.cast" >}}
<p>Send a request to the ES server in the cloud using the local tunnel.</p>
{{< /slide >}}

{{< slide type="asciicast" src="../assets/06-relationships.cast" >}}
<p>Your app will use the connection details in <code>PLATFORM_RELATIONSHIPS</code> to connect to the ES service.</p>
{{< /slide >}}

{{< slide type="image" src="../assets/07-share.gif" alt="Share the new environment by copying the URL" class="screenshot" >}}
<p>Share the new environment URL with others.</p>
{{< /slide >}}

{{< slide >}}
  <p>When you're ready to go live, just merge into <code>master</code> and the application deploys with the new Elasticsearch service.</p>
{{< /slide >}}

{{< slide >}}
<p>Infrastructure is code.  <br />If you want to go back, just <code>git revert</code><br />as you would for any other code.</p>
{{< /slide >}}
