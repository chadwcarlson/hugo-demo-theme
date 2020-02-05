---
title: Control costs
outline:
    problem: |
        I don't know how popular my website will be. I want to PAYGo.
draft: false
type: deck
notes:
  title: Platform.sh comes with no upfront costs, and scaling to meet demand is very simple.
  problem: Say you're just starting out and you want a more "Pay as you go" option.
---

{{< slide type="asciicast" src="../assets/1-create-project.cast" >}}

<p>Spinning up 1 or 100 new projects has no upfront costs.</p>
<p>No hardware. No defining a devops pipeline.</p>

<aside class="notes">
  You can spin up one or multiple projects right from the command line or from your management
  console, with no upfront costs. You'll get a clear estimate for the monthly price of the
  plan straight away, and receive a ready-to-go remote environment without any definition on your end.
</aside>
{{< /slide >}}

{{< slide type="asciicast" src="../assets/2-cli-scale.cast" >}}

<p>Scaling up or down is just a button click</p>
<p>or command line away.</p>

<aside class="notes">
  You can then change the size of your plan with a single command when you expect demand will be high,
  and after your big sale return to a smaller plan the same way.
</aside>
{{< /slide >}}

{{< slide >}}

<p>There are no capital costs (CAPEX). At all.</p>
<p>All costs are on-demand operating costs (OPEX), <br>under your control.</p>

<aside class="notes">
  All costs are on-demand operating costs, completely under your control.
</aside>
{{< /slide >}}

{{< slide type="asciicast" src="../assets/3-branching.cast" >}}

<p>Who has time to setup infinite testing environments?</p>
<p>We do, and it takes just a few minutes, no matter your site.</p>

<aside class="notes">
  With your plan in place, no time is spent setting up testing environments. Platform.sh
  takes care of that for every branch you want to test, and you'll have them up and running
  in minutes. Just commit your changes to the new branch, and push to the project. By default,
  newly pushed environments do not fully deploy, but all you need to do is activate that branch's environment
  with a single command: <code>platform environment: activate</code>.
</aside>
{{< /slide >}}

{{< slide type="asciicast" src="../assets/4-services-yaml.cast" >}}

Want more services in your application?  Just add them.

<aside class="notes">
  There are no separate charges to add one of our many managed services to your application,
  just add its corresponding configuration. Here, we're adding Redis for
  our application level caching by first defining it in our <code>services.yaml</code> file.
  Then, we add a relationship between our application and the Redis service in our
  <code>.platform.app.yaml</code> file. With those changes applied, all that's needed is to
  commit and push to Platform.sh, and then our environment will contain the new service
  ready for testing.
</aside>
{{< /slide >}}

{{< slide >}}

<div>
  <h3>We handle</h3>
  <ul>
    <li>Configuration</li>
    <li>Security updates</li>
    <li>Infrastructure</li>
  </ul>
</div>
<div style="margin-top: 2em;">
  <h3>You handle what matters most</h3>
  <p>Your application</p>
</div>

<aside class="notes">
  Platform.sh provides clear configuration, and handles all security updates and infrastructure,
  so that you and your team can focus on what matters: your application.
</aside>
{{< /slide >}}

{{< slide >}}

<h2>Support included</h2>
<div class="two-col top-align">
  <img src="../assets/5-create-ticket.png" style="justify-self: center; height: 450px;" alt="Create tickets using ZenDesk" />
  <ul>
    <li>In case of trouble, we're your support team, too.</li>
    <li>We've got your back with 24/7 infrastructure support.</li>
  </ul>
</div>

<aside class="notes">
  And if you get stuck anywhere along the way, we've got infrastructure support to respond to your support tickets 24/7.
</aside>
{{< /slide >}}

{{< slide >}}

<p>No hardware to manage,<br />no devops to coordinate,<br />no servers to build</p>
<h3 style="margin-top: 1em;">We are your on-demand DevOps team</h3>

<aside class="notes">
  With Platform.sh, you don't just get hosting. You get an on demand DevOps team that relieves you from
  handling hardware and orchestrating your infrastructure, so you can get back to developing new features
  for your application.
</aside>
{{< /slide >}}
