---
title: Composer Updates with Source Operations
outline:
    problem: |
        I need scheduled updates for my Drupal apps!
draft: false
type: deck
---

{{< slide >}}
<div class="two-col-svg">
  <div><img src="../assets/composer-logo.png" class="plain" width="400px" alt="Composer" /></div>
  <div>Rather than pushing updates from a local repository, you can define commands that will run <code>composer update</code> automatically.</div>
</div>
{{< /slide >}}

{{< slide type="image" src="../assets/01-source-op-defn.png" alt="Source operations definition." >}}
<p>Define the new source operation <code>update</code>.</p>
<p>Commit the <code>.platform.app.yaml</code> changes,</p>
<p>and push to your <code>sourceops</code> branch.</p>
{{< /slide >}}

{{< slide >}}
<p>Now that you've defined the new <code>update</code> operation,</p>
<p>you can trigger it to update Drupal using the CLI with</p>
<p><code>platform source-operation:run update</code></p>
{{< /slide >}}

{{< slide >}}
<video width="60%" data-autoplay muted playsinline>
  <source src="../assets/03-console-sourceops.mp4" type="video/mp4">
</video>
<p>The command will launch for the environment,</p>
<p>push the commit, and trigger the normal build process.</p>
{{< /slide >}}

{{< slide type="image" src="../assets/04-cli-in-container.png" alt="CLI in the app container." >}}
<p>To run the <code>update</code> command automatically,</p>
<p>add an API Token to your account and install the CLI</p>
<p>during the build phase.</p>
{{< /slide >}}

{{< slide type="image" src="../assets/05-cron.png" alt="Source operations cron." >}}
<p>Then define a cron job to run the <code>update</code> source operation,</p>
<p>restricting it to a dedicated <code>update-dependencies</code> environment</p>
<p>which syncs from Master before the operation is triggered.</p>
{{< /slide >}}

{{< slide type="image" src="../assets/06-merge-branch.png" alt="Merge the branch through the UI." >}}
<p style="margin-top: 2em;">You can then merge the changes into Master,</p>
<p>and then Branch to create the <code>update-dependencies</code></p>
<p>environment that will run the <code>update</code> operation each day.</p>
{{< /slide >}}

{{< slide type="image" src="../assets/07-environments.png" alt="Dedicated environment." width="75%" >}}
<p style="margin-top: 2em;">With the <code>update-dependencies</code> environment in place,</p>
<p>test the daily updates and merge into production when ready.</p>
{{< /slide >}}