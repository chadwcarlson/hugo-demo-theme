---
title: Integrate with GitHub, Bitbucket, or GitLab
outline:
    problem: |
        I want to use pull requests, but still stage my changes.
draft: false
type: deck
---

{{< slide type="image" src="../assets/1-github.png" height="400px" alt="Copy the project to GitHub" >}}
  <p>Clone your project to a public or private repo.</p>
  <p>You can tie any project into GitHub, Bitbucket, or GitLab.</p>
{{< /slide >}}

{{< slide type="asciicast" src="../assets/2-add-token.cast" >}}
  <p>Connect it to Platform.sh with one command.</p>
  <p>Your Platform.sh project is now a mirror of GitHub.</p>
{{< /slide >}}

{{< slide type="image" src="../assets/3-branch.png" alt="GitHub branches show a new integration" >}}
  <p style="margin-top: 2em;">Every Pull request becomes a new environment you can test.</p>
{{< /slide >}}

{{< slide type="image" src="../assets/4-branch-tree.png" alt="PR branch as seen in the UI" >}}
  <p style="margin-top: 2em;">When you merge the PR and remove its branch,<br />it gets removed from Platform.sh, too.</p>
{{< /slide >}}
