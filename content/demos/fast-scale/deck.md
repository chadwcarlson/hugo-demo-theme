---
title: Scaling on demand
outline:
    problem: |
        We have a big sale tomorrow.
        Traffic is going to skyrocket!
draft: false
type: deck
notes:
  title: |
    Projects on Platform.sh are very easy to upsize and downsize to meet upcoming demands on your applications.
  problem: |
    When Black Friday draws close, you might expect increased traffic that Platform.sh can help you prepare for.
---

{{< slide type="image" src="../assets/1-user-menu.png" alt="Go to the user menu in the top right of the screen." class="screenshot" >}}
  <p>That's easy. Just go to your Account page...</p>
  <aside class="notes">
    Just visit the "Accounts" page in your management console.
  </aside>
{{< /slide >}}

{{< slide type="image" src="../assets/2-select-project.png" alt="Select your project and click Edit." class="screenshot" >}}
  <p>... Edit the project</p>
  <aside class="notes">
    Find the project for your site and click the three dots to edit the project.
  </aside>
{{< /slide >}}

{{< slide type="image" src="../assets/3-set-plan.png" alt="Pick your plan size." class="screenshot" >}}
  <p>... And pick a new plan size. Scale as high as you need.</p>
  <aside class="notes">
    In the plan settings for that project, simply pick a new plan size from the dropdown. Each new selection will update
    the list of resources that come with the new plan, so you know exactly how much resources will cover the traffic you
    expect.
  </aside>
{{< /slide >}}

{{< slide type="image" src="../assets/4-redeploy.png" height="425px" alt="When you save, the site redeploys automatically at the new size." class="screenshot" >}}
  <p>The site will redeploy in seconds.</p>
  <p>5x the memory and CPU are now yours!</p>
  <aside class="notes">
    Save the changes, and your site will redeploy in seconds, complete with all of that plan's resources.
  </aside>
{{< /slide >}}

{{< slide type="image" src="../assets/5-set-plan-down.png" alt="Scale back down at any time." class="screenshot" >}}
  <p>You can scale back down to any plan size anytime.</p>
  <p>Plans are prorated. Pay for only the time you use!</p>
  <aside class="notes">
    When the sale is over, go right back to the same settings page from before and scale the plan back down to its previous size.
    Since plans are prorated, you only pay for the time you have used each plan.
  </aside>
{{< /slide >}}

{{< slide type="asciicast" src="../assets/6-cli-scale.cast" >}}
  <p>You can scale from the command line, too.</p>
  <p>Including from your own scripts.</p>
  <aside class="notes">
    You can even scale your projects up or down from the command line using the Platform.sh CLI, making the whole
    process as scriptable as you'd like it to be.
  </aside>
{{< /slide >}}
