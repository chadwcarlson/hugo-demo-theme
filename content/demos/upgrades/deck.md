---
title: Easy version upgrades
outline:
    problem: |
        Is my application compatible with that sweet new PHP 7.4?
draft: false
type: deck
notes:
  title: |
    As you're developing with one version of a service, you may want to upgrade that service for a number of reasons.
  problem: |
    You may want to check compatibility with your application, with as little work as possible.
---

{{< slide >}}
<p>Let's find out!</p>
<aside class="notes">
  Luckily, on Platform.sh, finding out if another service version works for you is quick to test.
</aside>
{{< /slide >}}

{{< slide type="image" src="../assets/1-make-branch.png" alt="Create a branch on Platform.sh." >}}
<p>Create a new environment; code and all!</p>
<aside class="notes">
  Branch your production environment, and create a completely identical environment to try out the upgrade.
</aside>
{{< /slide >}}

{{< slide type="image" src="../assets/2-clone-branch-ui.png" alt="Get the Git clone command from the UI" >}}
<p>You can clone the whole project using Git,</p>
<p>or the Platform.sh CLI.</p>
<aside class="notes">
  Then clone the whole project locally, either through Git or through the Platform.sh CLI.
</aside>
{{< /slide >}}

{{< slide type="asciicast" src="../assets/3-edit-app-yaml.cast" >}}
<p>Clone the project, edit <em>one character</em>.  And git push.</p>
<p>The entire environment is rebuilt, now on your new version.</p>
<aside class="notes">
  When changing runtime version, open up your <code>.platform.app.yaml</code> file and edit a single character to the next
  major version. That's it. Commit and push the change, and Platform.sh will rebuild the entire application, now on that
  newest version.
</aside>
{{< /slide >}}

{{< slide type="image" src="../assets/4-view-site-url.png" alt="Get the site URL from the UI" >}}
<p style="margin-top: 2em;">Do whatever testing you need, automated or manual.</p>
<p>Production hasn't been touched.</p>
<aside class="notes">
  Production hasn't been touched at all. You can visit the environment's unique URL and do whatever testing you need to, automated
  or manual.
</aside>
{{< /slide >}}

{{< slide type="image" src="../assets/5-merge-branch.png" alt="Merge the branch through the UI." >}}
<p style="margin-top: 2em;">You know it works. You've tested it.</p>
<p>Deploy the exact same configuration to prod in seconds.</p>
<aside class="notes">
  Run it through every one until you know it works like production should. When you're satisfied, merge the upgrade, and deploy the
  identical configuration to production in seconds.
</aside>
{{< /slide >}}

{{< slide type="asciicast" src="../assets/6-postgres.cast" >}}
<p>Most services can be trivially upgraded, too.</p>
<aside class="notes">
  Services can be upgraded in the same way. Branch, update the configuration on that branch, push, test, and merge.
</aside>
{{< /slide >}}

{{< slide >}}
<ul class="logo-list">
  <li><img src="../assets/php-logo.svg" alt="PHP 7" class="plain" data-credit="https://commons.wikimedia.org/wiki/File:PHP-logo.svg" /></li>
  <li><img src="../assets/python-logo.svg" alt="Python" class="plain" data-credit="https://commons.wikimedia.org/wiki/File:Python.svg" /></li>
  <li><img src="../assets/nodejs-logo.svg" alt="NodeJs" class="plain" data-credit="https://commons.wikimedia.org/wiki/File:Node.js_logo.svg" /></li>
  <li><img src="../assets/ruby-logo.svg" alt="Ruby" class="plain" data-credit="https://commons.wikimedia.org/wiki/File:Ruby_logo.svg" /></li>
  <li><img src="../assets/golang-logo.svg" alt="Go" class="plain" data-credit="https://www.vectorlogo.zone/logos/golang/index.html" /></li>
</ul>
<p style="margin-top: 0;">It works for any change, any language, any dependency.</p>
<aside class="notes">
  This process works exactly the same for any change to your code, and any upgrade to your language and dependencies, so you can feel free
  to try out any change you'd like.
</aside>
{{< /slide >}}
