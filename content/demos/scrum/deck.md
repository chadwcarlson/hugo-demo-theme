---
title: The tool for scrum
outline:
    problem: |
        I have many developers, but only one test server.
draft: false
type: deck
notes:
  title: |
    Platform.sh's workflow-agnostic development environments make it the ideal tool for scrum.
  problem: |
    Typically, a team of developers might have to share time to test their new features on a single testing server.
---

{{< slide type="image" src="../assets/1-branch-list.png" alt="List of branches in a project" >}}
<p>Every branch in your project is its own isolated environment.</p>
<p>Every branch is a test server!</p>
<aside class="notes">
  From the beginning, Platform.sh branches are fully isolated and live environments, which in affect makes every branch into its own
  test server.
</aside>
{{< /slide >}}

{{< slide type="image" src="../assets/2-sync-button.png" alt="Sync button in the UI" >}}
<p>Branches inherit settings and data from their parents.</p>
<p>And you can resync the data from parents at any time.</p>
<aside class="notes">
  Each branch inherits settings and data from its parent, and you can resync data at any time while you're developing.
</aside>
{{< /slide >}}

{{< slide type="image" src="../assets/3-push-log.png" height="500px" alt="Environments rebuild on push" >}}
<p>Push to a branch, no other branches are affected.</p>
<aside class="notes">
  When you push to that branch, no other environments are affected.
</aside>
{{< /slide >}}

{{< slide type="image" src="../assets/4-env-url.png" alt="Environment domain URLs" >}}
<p>Every environment gets its own domain.</p>
<aside class="notes">
  Then when you want to submit those features, each environment gets its own domain for review.
</aside>
{{< /slide >}}

{{< slide type="image" src="../assets/5-new-theme.png" alt="The site with a new theme" >}}
<p>Try out your changes, use the database, send it to your client.</p>
<p>Every environment is completely isolated.</p>
<aside class="notes">
  Try out your changes and send that URL to your client. Each environment is completely isolated from the very beginning.
</aside>
{{< /slide >}}

{{< slide type="image" src="../assets/6-merge-feature.png" alt="The merge button in the UI. Also available on the CLI." >}}
<p>When ready, merge back to the sprint branch.</p>
<p>(Or use the command line. Either works.)</p>
<aside class="notes">
  When it's passed all inspection, merge the new feature into its parent from either the command line or in your management console.
</aside>
{{< /slide >}}

{{< slide type="image" src="../assets/7-merge-integration.png" alt="The merge button in the UI. Also available on the CLI." >}}
<p>Merge integration to master when you're ready to go live.</p>
<aside class="notes">
  Then when you're ready to take the feature live, merge into master.
</aside>
{{< /slide >}}

{{< slide type="image" src="../assets/8-master-build-log.png" alt="The build low shows the slug was reused." >}}
<p>On fast forward merges, we reuse the same built image.</p>
<p>You're deploying the <em>exact same bits</em> to production.</p>
<aside class="notes">
  On these fast-forward merges, the exact same image is deployed to production whose deployment you've just tested.
</aside>
{{< /slide >}}

{{< slide >}}
<p>You always know it's safe to deploy.</p>
<p style="margin-top: 1em;">Even on Friday.</p>
<aside class="notes">
  That way, you'll always know it's safe to deploy, even on Friday.
</aside>
{{< /slide >}}
