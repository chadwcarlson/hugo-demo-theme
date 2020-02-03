---
title: Updating Drupal with Composer
outline:
    problem: |
        There's a new security release of a Drupal module. I need to update fast!
draft: false
type: deck
notes:
  title: |
    The recommended way to deploy Drupal 8 on Platform.sh is to use Composer.
  problem: |
    Composer is a PHP package manager that controls which versions of your dependencies are pulled into your project on every build.
---

{{< slide >}}

Composer to the rescue

<div class="two-col-svg">
<div><img src="../assets/druplicon.svg" class="plain" width="400px" alt="Drupal" /></div>
<div><img src="../assets/composer-logo.png" class="plain" width="400px" alt="Composer" /></div>
</div>
<aside class="notes">
  With a Composer-installed Drupal project, it is possible to update your entire application with a single command and commit.
</aside>
{{< /slide >}}

{{< slide type="asciicast" src="../assets/01-update.cast" >}}

<p>Platform.sh supports Composer-builds natively.</p>
<p><code>composer update</code>, push to a branch, profit!</p>
<aside class="notes">
  Checkout a new branch on your local project and run <code>composer update</code> to update your dependencies.
  Push to Platform.sh and then activate and environment to deploy the updated application.
</aside>
{{< /slide >}}

{{< slide type="image" src="../assets/2-merge-branch.png" >}}

<p>Test the branch, then hit Merge.</p>
<p>Deploy the exact same application image to prod in seconds.</p>
<aside class="notes">
  Once the updates have passed all of your tests, you can merge and deploy the exact same updated application to production
  in seconds.
</aside>
{{< /slide >}}
