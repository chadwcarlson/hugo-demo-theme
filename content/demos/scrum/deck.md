---
title: The tool for scrum
outline:
    problem: |
        I have many developers, but only one test server.
draft: false
type: deck
---

{{< slide type="image" src="../assets/1-branch-list.png" alt="List of branches in a project" >}}
<p>Every branch in your project is its own isolated environment.</p>
<p>Every branch is a test server!</p>
{{< /slide >}}

{{< slide type="image" src="../assets/2-sync-button.png" alt="Sync button in the UI" >}}
<p>Branches inherit settings and data from their parents.</p>
<p>And you can resync the data from parents at any time.</p>
{{< /slide >}}

{{< slide type="image" src="../assets/3-push-log.png" height="500px" alt="Environments rebuild on push" >}}
<p>Push to a branch, no other branches are affected.</p>
{{< /slide >}}

{{< slide type="image" src="../assets/4-env-url.png" alt="Environment domain URLs" >}}
<p>Every environment gets its own domain.</p>
{{< /slide >}}

{{< slide type="image" src="../assets/5-new-theme.png" alt="The site with a new theme" >}}
<p>Try out your changes, use the database, send it to your client.</p>
<p>Every environment is completely isolated.</p>
{{< /slide >}}

{{< slide type="image" src="../assets/6-merge-feature.png" alt="The merge button in the UI. Also available on the CLI." >}}
<p>When ready, merge back to the sprint branch.</p>
<p>(Or use the command line. Either works.)</p>
{{< /slide >}}

{{< slide type="image" src="../assets/7-merge-integration.png" alt="The merge button in the UI. Also available on the CLI." >}}
<p>Merge integration to master when you're ready to go live.</p>
{{< /slide >}}

{{< slide type="image" src="../assets/8-master-build-log.png" alt="The build low shows the slug was reused." >}}
<p>On fast forward merges, we reuse the same built image.</p>
<p>You're deploying the <em>exact same bits</em> to production.</p>
{{< /slide >}}

{{< slide >}}
<p>You always know it's safe to deploy.</p>
<p style="margin-top: 1em;">Even on Friday.</p>
{{< /slide >}}
