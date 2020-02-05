---
title: Laravel with the Platform.sh CLI
outline:
    problem: |
        I want a new Laravel site, really fast!
draft: false
type: deck
notes:
  title: |
    Laravel is an integrated, rapid-application-development framework written in PHP.
  problem: |
    Platform.sh makes it easy to start up a new Laravel project with a few commands from the CLI.
---

{{< slide type="asciicast" src="../assets/01-create.cast" >}}
  <p>1. Create a new project with the CLI</p>
  <aside class="notes">
    First, use the command <code>platform create</code> to quickly create a new Platform.sh project. The command
    will prompt you to configure the project for one of our regions with as much resources as you think you
    might need. The project will be created in just a few seconds, and the CLI will provide a project ID you can
    now use to interact with it.
  </aside>
{{< /slide >}}

{{< slide type="asciicast" src="../assets/02-init.cast" >}}
  <p>2. Initialize the new project with a</p>
  <p>public GitHub repository, using <span class="hljs">platform environment:init</span></p>
  <aside class="notes">
    You can then use the command <code>platform environment:init</code> to initialize that project within any public GitHub
    repository. Here, we are using our Laravel template, that already includes Platform.sh's three configuration files to deploy.
    So long as the repository contains Platform.sh configuration files, it will then build and deploy the site. First, Platform.sh
    will run through the build hook of the application's <code>.platform.app.yaml</code> file, which defines its build process.
    Once completed, Platform.sh will validate domains for the environment, and issue new Let's Encrypt certificates for them if not
    present or if they will soon expire. Then the environment is created and deployed.
  </aside>
{{< /slide >}}

{{< slide type="asciicast" src="../assets/03-visit.cast" >}}
  <p>3. Visit the new site! <br/>(The <code>platform url</code> command will open</p><p> the browser window)</p>
  <aside class="notes">
    Once the project has finished initializing, use the command <code>platform url</code> to view the new site, which will
    open in a browser window.
  </aside>
{{< /slide >}}

{{< slide type="image" src="../assets/04-live.png" alt="Live Laravel template." >}}
  <p style="margin-top: 1em;">Your Laravel site is ready!</p>
  <aside class="notes">
    Laravel has built and deployed on Platform.sh, and you're now ready to customize the site as you see fit.
  </aside>
{{< /slide >}}
