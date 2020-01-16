---
title: Updating Drupal with Composer
outline:
    problem: |
        There's a new security release of a Drupal module. I need to update fast!
draft: false
type: deck
---

{{< slide >}}

Composer to the rescue

<div class="two-col-svg">
<div><img src="../assets/druplicon.svg" class="plain" width="400px" alt="Drupal" /></div>
<div><img src="../assets/composer-logo.png" class="plain" width="400px" alt="Composer" /></div>
</div>

{{< /slide >}}

{{< slide type="asciicast" src="../assets/01-update.cast" >}}

Platform.sh supports Composer-builds natively.
`composer update`, push to a branch, profit!

{{< /slide >}}

{{< slide type="image" src="../assets/2-merge-branch.png" >}}

<p>Test the branch, then hit Merge.</p>
<p>Deploy the exact same application image to prod in seconds.</p>

{{< /slide >}}
