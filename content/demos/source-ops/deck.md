---
title: Composer Updates with Source Operations
outline:
    problem: |
        I need scheduled updates for my Drupal apps!
draft: false
type: deck
notes:
  title: |
    An application on Platform.sh can define a number of operations that can be applied to its source code.
  problem: |
    Source Operations can be fully automated, which can be useful when projects need scheduled updates applied to their applications.
---

{{< slide >}}
<p>Composer + Source Operations</p>
<div class="two-col-svg">
  <div><img src="../assets/composer-logo.png" class="plain" width="400px" alt="Composer" /></div>
  <div>Rather than pushing updates from a local repository, you can define commands that will run <code>composer update</code> automatically.</div>
</div>

<aside class="notes">
  These commands, once defined, can replace the need to push updates from a local repository by running <code>composer update</code> automatically.
</aside>
{{< /slide >}}

{{< slide type="image" src="../assets/01-source-op-defn.png" alt="Source operations definition." >}}
<p>Define the new source operation <code>update</code>.</p>
<p>Commit the <code>.platform.app.yaml</code> changes,</p>
<p>and push to your <code>sourceops</code> branch.</p>

<aside class="notes">
  In a <code>.platform.app.yaml</code> file, the source operation <code>update</code> is defined to do exactly this. It includes the update
  command, as well as the two commands to add and commit those updates to the repository. Adding this feature is as simple as including these  
  lines and pushing to a branch on Platform.sh
</aside>
{{< /slide >}}

{{< slide type="asciicast" src="../assets/02-add-sourceops.cast" >}}
<p>Now that you've defined the new <code>update</code> operation,</p>
<p>you can trigger it to update Drupal using the CLI with</p>
<p><code>platform source-operation:run update</code></p>

<aside class="notes">
  Once the source operation has been defined, you can trigger the update to take place using the CLI command
  <code>platform source-operation:run update</code>.
</aside>
{{< /slide >}}

{{< slide >}}
<video width="60%" data-autoplay muted playsinline>
  <source src="../assets/03-console-sourceops.mp4" type="video/mp4">
</video>
<p>The command will launch for the environment,</p>
<p>push the commit, and trigger the normal build process.</p>

<aside class="notes">
  As a result, the operation will execute, push the commit, and trigger the normal build process on that environment.
</aside>
{{< /slide >}}

{{< slide type="image" src="../assets/04-cli-in-container.png" alt="CLI in the app container." >}}
<p>To run the <code>update</code> command automatically,</p>
<p>add an API Token to your account and install the CLI</p>
<p>during the build phase.</p>

<aside class="notes">
  Once you are satisfied with your update command, it can be modified to run automatically. Simply add an API Token to the project
  and install the CLI during the build hook.
</aside>
{{< /slide >}}

{{< slide type="image" src="../assets/05-cron.png" alt="Source operations cron." >}}
<p>Then define a cron job to run the <code>update</code> source operation,</p>
<p>restricting it to the <code>update-dependencies</code> environment</p>
<p>which syncs from Master before the operation is triggered.</p>

<aside class="notes">
  Then define a cron job to run the source operation as often as you would like it to check for updates. It is even possible
  to read from the <code>PLATFORM_BRANCH</code> environment variable to restrict the operation only to certain environments, such
  as the dedicated <code>update-dependencies</code> environment shown here. Running this operation is that environments sole purpose,
  and prior to running it syncs all code and data from <code>master</code>.
</aside>
{{< /slide >}}

{{< slide type="image" src="../assets/06-merge-branch.png" alt="Merge the branch through the UI." >}}
<p style="margin-top: 2em;">You can then merge the changes into Master,</p>
<p>and then Branch to create the <code>update-dependencies</code></p>
<p>environment that will run the <code>update</code> operation each day.</p>

<aside class="notes">
  Merge the newly defined source operation into <code>master</code>, and then create the <code>update-dependencies</code> environment that operation
  is looking to run on. That way, your project will rebuild with updated dependencies each day when they are available.
</aside>
{{< /slide >}}

{{< slide type="image" src="../assets/07-environments.png" alt="Dedicated environment." width="75%" >}}
<p style="margin-top: 2em;">With the <code>update-dependencies</code> environment in place,</p>
<p>test the daily updates and merge into production when ready.</p>

<aside class="notes">
  Test the updates, and then merge into master as a part of the application's daily maintenance routine.
</aside>
{{< /slide >}}
