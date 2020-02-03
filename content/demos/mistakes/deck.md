---
title: Freedom to make mistakes
outline:
    problem: |
        I don't want to worry about making a mistake that could hurt my production website.
draft: true
type: deck
notes:
  title: |
    Add notes that will be used to the title slide.
  problem: |
    Add notes that will be used to the "problem" slide.
---

<div style="display:none">
  Problem: I don’t want to worry about making a mistake that could hurt my production website.
  Script
    Overlay: A bug in your code, no matter how big, doesn’t have to take down your production site.
    Show: A contrived example of something like a SQL command that will drop a table in the deploy hook
    Show: The new deploy hook being pushed and the log confirming the table was dropped
    Overlay: Concurrent, isolated development environments keep your production data safe.
    Show clicking on “Sync” in the UI for the development branch and re-syncing the data from master to the branch.
    Show removing the table drop line from the deploy hook, pushing
    Show SSHing into the development environment and running the Mariadb CLI command to show that the previously dropped table is now available on the branch
  Shows
    Freedom to make mistakes
    Enforce best practices
    Security
    Integration testing
    Databases
    Reproducible environments
</div>
