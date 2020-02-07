---
title: Add new team members
outline:
    problem: |
        We hired some new people.
        How can they get started?
draft: false
type: deck
notes:
  title: |
    Every Platform.sh user has a role which controls access and improves security on your project. Different roles are authorized
    to do different things with your applications, environments and users.
  problem: |
    As your team grows, it's easy to on-board new team members, complete with designated roles and environment access.
---

{{< slide type="image" src="../assets/1-branch-structure.png" alt="Show branch structure." class="screenshot" >}}
<p>This is our branch structure at the start.</p>

<aside class="notes">
  We can start with a fairly common branch structure for our project. We have our production site on the <code>master</code>
  branch, as well as a primary <code>staging</code> environment where changes sit for final pre-merge review. Off of the staging
  environment, there are also three additional development environments, each with some new feature currently being worked on.
</aside>
{{< /slide >}}

{{< slide >}}

<video width="100%" data-autoplay muted playsinline>
  <source src="../assets/2-add-rachel.mp4" type="video/mp4">
</video>
<p>Rachel gets added as a project administrator.</p>
<p>Rachel can now add further developers to the whole project.</p>

<aside class="notes">
  Adding team member Rachel as a project administrator gives her full ability to grant access to other developers
  across the whole project. Here the current project owner Robert goes to his project settings under the Access tab
  in his management console. After entering the e-mail Rachel has associated with her Platform.sh account, instead of
  limiting her access to a single environment, he checks the project admin option. 
</aside>

{{< /slide >}}

{{< slide >}}

<video width="80%" data-autoplay muted playsinline>
  <source src="../assets/3-add-jorge.mp4" type="video/mp4">
</video>
<p>Rachel makes Jorge a branch admin<br />on the <code>web-agency-team</code> branch.</p>

<aside class="notes">
  She can make developer Jorge an administrator on the <code>web-agency-team</code> branch.
</aside>

{{< /slide >}}

{{< slide >}}

<video width="100%" data-autoplay muted playsinline>
  <source src="../assets/4-new-branches.mp4" type="video/mp4">
</video>
<p>Jorge can add rest of his team to the <code>web-agency-team</code> branch, and any new branches he makes.</p>

<aside class="notes">
  Which then gives Jorge the ability to add the rest of his team to that branch, as well as any child branch made from it.
  Here we can see Jorge creating two environments for each of the developers on the Web Agency team he wants them to work on.
</aside>

{{< /slide >}}

{{< slide type="image" src="../assets/5-new-environments.png" alt="Show branch structure." class="screenshot" >}}
<p>This is the branch structure now that Jorge and his team are developing on their own branches.</p>

<aside class="notes">
  Those changes result in this new project branch structure, where Jorge's team is isolated to the very bottom branches.
</aside>
{{< /slide >}}

{{< slide type="image" src="../assets/6-ssh-key.png" height="400px" alt="Add ssh key." class="screenshot" >}}
<p>Newly added developers only need to add their SSH<br />keys and they're ready to start developing.</p>

<aside class="notes">
  You have control over which developers can collaborate on which environments, and on-boarding a new developer only requires
  that they add their SSH keys to the Platform.sh management console.
</aside>
{{< /slide >}}
