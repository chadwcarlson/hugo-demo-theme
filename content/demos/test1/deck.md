---
title: Test demo 1
draft: false
type: deck
dir: test1
outline:
    problem: |
        Outline the problem question/explanation for the title slide.
---


{{< slide >}}

  <div class="two-col-svg">
  <div><img src="/demos/{{< param dir >}}/assets/languages/python-logo-horizontal.svg" class="plain" width="400px" alt="Python" data-credit="https://www.python.org/community/logos/" /></div>
  <div><img src="/demos/{{< param dir >}}/assets/languages/conda-logo.svg" class="plain" width="400px" alt="Conda" data-credit="https://www.anaconda.com/media-kit/" style="padding-bottom:15px;" /></div>
  </div>
  <p style="margin-top: 0;">Installers for Conda-based environments like Anaconda and Miniconda work on Platform.sh!</p>
  <aside class="notes">
    Conda is an open source package and environment management system.
    It was created for Python programs, but it can package and distribute software for any language.
    Conda is included in all versions of Anaconda, as well as Miniconda, which is essentially Anaconda
    without the packages included.
  </aside>

{{< /slide >}}

{{< slide >}}

{{< highlight bash >}}
#!/bin/bash

# Download the latest Miniconda3 release and name the file `conda.sh`
curl https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh -o conda.sh

# Run the conda installer
bash conda.sh -b -p $PLATFORM_APP_DIR/conda

# Put the `conda` command in the path
. /app/conda/etc/profile.d/conda.sh

# Activate the conda environment and install the full Anaconda environment
conda activate base
conda install anaconda
{{< /highlight>}}

Simply include a bash script that configures the Conda environment in the `platform.app.yaml` build hook.

<aside  class="notes">
  The build hook in your .platform.app.yaml file lets you specify scripts to run when your code builds.
  This script uses curl to get Miniconda. It then runs the conda installer, adds conda to the path,
  and installs the full Anaconda environment.
</aside>

{{< /slide >}}

{{< slide >}}

{{< highlight yaml >}}
#!/bin/bash

# Activate the conda environment that was created in the build hook
conda activate base

# Run whatever commands you need from Anaconda
jupyter notebook
{{< /highlight>}}

Then, just activate the conda environment before you run your web app in your `start` command!

<aside class="notes">
  In the web section of .platform.app.yaml you then specify a start command which runs this script.
  The example shown activates the conda environment and starts the jupyter notebook, a popular interactive
  tool for creating rich documents and running code.
</aside>

{{< /slide >}}
