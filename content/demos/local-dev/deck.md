---
title: Flexible options for development
outline:
    problem: |
        I want to start developing fast,
        but not be my own sysadmin.
draft: false
type: deck
notes:
  title: |
    Platform.sh makes deploying applications simple, and we also provide a number of local development options that you can use when you're
    building new features for your projects.
  problem: |
    Developing locally can allow you to test your ideas quickly before pushing remotely for team review.
---

{{< slide >}}
  <p>Use any local environment, but access your services live.</p>
  <aside class="notes">
    Because your application may depend on a number of our managed services, your local development environment will need the same access
    to those services that a deployed environment would have.
  </aside>
{{< /slide >}}

{{< slide type="asciicast" src="../assets/01-tunnel.cast" >}}
  <p>Open a tunnel;</p>
  <p>now any application can connect to it "locally".</p>
  <aside class="notes">
    You can use the Platform.sh CLI command <code>platform tunnel:open</code> to open an SSH tunnel to your services. This will allow
    your application that is running on a local web server to access them.
  </aside>
{{< /slide >}}

{{< slide type="asciicast" src="../assets/02-connect.cast" >}}
  <p>Set a local <code>PORT</code> if necessary, and your app can connect.</p>
  <p>It runs locally, but uses the remote services. Any of them.</p>
  <aside class="notes">
    Once you export the <code>PLATFORM_RELATIONSHIPS</code> environment variable from your project, the local application will have the
    credentials it expects to interact with your services. Export a <code>PORT</code> variable, if your application requires one, and
    you'll be all set up to run locally using your remote services.
  </aside>
{{< /slide >}}

{{< slide type="image" src="../assets/03-browser.png" alt="Browser showing localhost and serving a site" style="width: 80%;" class="screenshot" >}}
  <p>Work locally as needed, with your hosted services.</p>
  <aside class="notes">
    These hosted services are identical to those you would use in your Platform.sh environments, for as long you need them locally.
  </aside>
{{< /slide >}}

{{< slide type="asciicast" src="../assets/04-close.cast" >}}
  <p>Clean up when you're done.</p>
  <aside class="notes">
    When you're all done and ready to push your new feature for review, close your tunnels with the CLI command <code>platform tunnel:close</code>.
  </aside>
{{< /slide >}}
