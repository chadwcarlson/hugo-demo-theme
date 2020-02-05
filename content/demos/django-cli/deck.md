---
title: Django 2 with the Platform.sh CLI
outline:
    problem: |
        I want a new Django site, really fast!
draft: false
type: deck
notes:
  title: Django is a web-application framework written in Python.
  problem: Django applications can be initialized to run on Platform.sh quickly using the Platform.sh CLI.
---

{{< slide type="asciicast" src="../assets/01-create.cast" >}}

<p>1. Create a new project with the CLI</p>

<aside class="notes">
  First, you can use the CLI command <code>platform create</code> to create a new project,
  specifying the region, plan size, number of development environments, and storage you want
  for the project. The project will be created in just a few seconds, and the CLI will provide
  a project ID you can now use to interact with it.  
</aside>

{{< /slide >}}

{{< slide type="asciicast" src="../assets/02-init.cast" >}}

<p>2. Initialize the new project with a public GitHub repository, using <code>platform environment:init</code></p>

<aside class="notes">
  Next, you can use the CLI command <code>platform environment:init</code> along with the
  project ID to initialize the project with an existing Django repository, such as one of our
  Django templates. So long as the repository contains Platform.sh configuration files, it will
  then build and deploy the site. First, Platform.sh will run through the build hook of the application's
  <code>.platform.app.yaml</code> file, which defines its build process, by first downloading all of its
  dependencies defined in the <code>Pipfile.lock</code>. Once completed, Platform.sh will validate domains
  for the environment, and issue new Let's Encrypt certificates for them if not present or if they will
  soon expire. Then the environment is created and deployed.
</aside>
{{< /slide >}}

{{< slide type="asciicast" src="../assets/03-visit.cast" >}}

<p>3. Visit the new site! <br/>(The <code>platform url</code> command will open the browser window)</p>

<aside class="notes">
  Finally, you can verify that the Django application deployed successfully by visiting the site using
  the CLI command <code>platform url</code>.
</aside>
{{< /slide >}}

{{< slide type="image" src="../assets/04-live.png" alt="Live Django 2 template." >}}

<p>Your Django 2 site is ready!</p>

<aside class="notes">
  The command will open a new browser window, and you will see that your Django site is now ready.
</aside>
{{< /slide >}}
