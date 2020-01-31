---
title: Flexible options for development
outline:
    problem: |
        I want to start developing fast,
        but not be my own sysadmin.
draft: false
type: deck
---

{{< slide >}}
  <p>Use any local environment, but access your services live.</p>
{{< /slide >}}

{{< slide type="asciicast" src="../assets/01-tunnel.cast" >}}
  <p>Open a tunnel;</p>
  <p>now any application can connect to it "locally".</p>
{{< /slide >}}

{{< slide type="asciicast" src="../assets/02-connect.cast" >}}
  <p>Set a local `PORT` if necessary, and your app can connect.</p>
  <p>It runs locally, but uses the remote services. Any of them.</p>
{{< /slide >}}

{{< slide type="image" src="../assets/03-browser.png" alt="Browser showing localhost and serving a site" style="width: 80%;" class="screenshot" >}}
  <p>Work locally as needed, with your hosted services.</p>
{{< /slide >}}

{{< slide type="asciicast" src="../assets/04-close.cast" >}}
  <p>Clean up when you're done.</p>
{{< /slide >}}
