---
title: Integrate with GitHub, Bitbucket, or GitLab
outline:
    problem: |
        I want to use pull requests, but still stage my changes.
draft: false
type: deck
notes:
  title: |
    While you can use Platform.sh as your application's primary remote repository, it's very easy to integrate with GitHub, Bitbucket,
    or GitLab where your code already lives.
  problem: |
    Integrations with these services not only makes migration simpler, but also enables you to trigger the deployments of new environments
    each time a pull request is opened.
---

{{< slide type="image" src="../assets/1-github.png" height="400px" alt="Copy the project to GitHub" >}}
  <p>Clone your project to a public or private repo.</p>
  <p>You can tie any project into GitHub, Bitbucket, or GitLab.</p>
  <aside class="notes">
    Whether your repository can be either public or private, nothing gets merged until your build and deploy processes are fully tested.
  </aside>
{{< /slide >}}

{{< slide type="asciicast" src="../assets/2-add-token.cast" >}}
  <p>Connect it to Platform.sh with one command.</p>
  <p>Your Platform.sh project is now a mirror of GitHub.</p>
  <aside class="notes">
    Set up the integration with a single command from the Platform.sh CLI: <code>platform integration:add</code>.
    Supply that command with a few pieces of information about the repository and then follow the steps to configure when environments are deployed.
    After that, you're all set. Your Platform.sh project now acts as a mirror for that repository.
  </aside>
{{< /slide >}}

{{< slide type="image" src="../assets/3-branch.png" alt="GitHub branches show a new integration" >}}
  <p style="margin-top: 2em;">Every Pull request becomes a new environment you can test.</p>
  <aside class="notes">
    Now every pull request becomes a live development environment on Platform.sh that you can run all of your tests on.
  </aside>
{{< /slide >}}

{{< slide type="image" src="../assets/4-branch-tree.png" alt="PR branch as seen in the UI" >}}
  <p style="margin-top: 2em;">When you merge the PR and remove its branch,<br />it gets removed from Platform.sh, too.</p>
  <aside class="notes">
    When have merged the pull request and deleted its source branch, Platform.sh mirrors that action and deactivates the environment.
  </aside>
{{< /slide >}}
