---
title: Easy version upgrades
outline:
    problem: |
        Is my application compatible with that sweet new PHP 7.3?
draft: false
type: deck
---

{{< slide >}}
<p>Let's find out!</p>
{{< /slide >}}

{{< slide type="image" src="../assets/1-make-branch.png" alt="Create a branch on Platform.sh." >}}
<p>Create a new environment; code and all!</p>
{{< /slide >}}

{{< slide type="image" src="../assets/2-clone-branch-ui.png" alt="Get the Git clone command from the UI" >}}
<p>You can clone the whole project using Git, or the Platform.sh CLI.</p>
{{< /slide >}}

{{< slide type="asciicast" src="../assets/3-edit-app-yaml.cast" >}}
<p>Clone the project, edit <em>one character</em>.  And git push.</p>
<p>The entire environment is rebuilt, now on your new version.</p>
{{< /slide >}}

{{< slide type="image" src="../assets/4-view-site-url.png" alt="Get the site URL from the UI" >}}
<p style="margin-top: 2em;">Do whatever testing you need, automated or manual.</p>
<p>Production hasn't been touched.</p>
{{< /slide >}}

{{< slide type="image" src="../assets/5-merge-branch.png" alt="Merge the branch through the UI." >}}
<p style="margin-top: 2em;">You know it works. You've tested it.</p>
<p>Deploy the exact same configuration to prod in seconds.</p>
{{< /slide >}}

{{< slide type="asciicast" src="../assets/6-postgres.cast" >}}
<p>Most services can be trivially upgraded, too.</p>
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
{{< /slide >}}
