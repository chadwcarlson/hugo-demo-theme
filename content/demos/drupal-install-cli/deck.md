---
title: Installing Drupal with the Platform.sh CLI
outline:
    problem: |
        I want a new Drupal 8 site, really fast!
draft: false
type: deck
notes:
  title: Drupal is a flexible and extensible CMS framework written in PHP.
  problem: This demo shows how to install Drupal on Platform.sh using the CLI.
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
<p>2. Initialize the new project with a public GitHub repository, using <span class="hljs">platform environment:init</span></p>
<aside class="notes">
  Next, you can use the CLI command <code>platform environment: init</code> along with the
  project ID to initialize the project with an existing Drupal repository, such as our
  Drupal 8 template. So long as they repository contains Platform.sh configuration files, it will
  then build and deploy the site.  
</aside>
{{< /slide >}}

{{< slide type="asciicast" src="../assets/03-visit.cast" >}}
<p>3. Visit the new site! <br/>(The <code>platform url</code> command will open the browser window)</p>
<aside class="notes">
  Finally, you can verify that Drupal deployed successfully by visiting the site using
  the CLI command <code>platform url</code>.
</aside>
{{< /slide >}}

{{< slide type="image" src="../assets/04-install-drupal.png" alt="The web UI for installing Drupal." >}}
<p style="margin-top: 1em;">Drupal 8 is ready to install.</p>
<aside class="notes">
  The command will open the environment in a new browser window, and you will see that
  your Drupal site is now ready to install.
</aside>
{{< /slide >}}
