---
title: Running Anaconda environments
outline:
    problem: |
        My applications require the full Anaconda data science stack!
draft: false
type: deck
notes:
  title: Anaconda is the World’s Most Popular Python Data Science Distribution.
  problem: This demo shows how to install the full Anaconda data science stack on Platform.sh.
---

{{< slide >}}

<div class="two-col-svg">
<div><img src="../assets/languages/python-logo-horizontal.svg" class="plain" width="400px" alt="Python" data-credit="https://www.python.org/community/logos/" /></div>
<div><img src="../assets/languages/conda-logo.svg" class="plain" width="400px" alt="Conda" data-credit="https://www.anaconda.com/media-kit/" style="padding-bottom:15px;" /></div>
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
{{< /highlight >}}

Simply include a bash script that configures the Conda environment in the `platform.app.yaml` build hook.

<aside  class="notes">
  The build hook in your <code>.platform.app.yaml</code> file lets you specify scripts to run when your code builds.
  This script uses curl to get Miniconda. It then runs the Conda installer, adds Conda to the path,
  and installs the full Anaconda environment.
</aside>

{{< /slide >}}

{{< slide >}}

{{< highlight bash >}}
#!/bin/bash

# Activate the conda environment that was created in the build hook
conda activate base

# Run whatever commands you need from Anaconda
jupyter notebook
{{< /highlight>}}

Then, just activate the conda environment before you run your web app in your `start` command!

<aside class="notes">
  In the web section of <code>.platform.app.yaml</code> you then specify a start command which runs this script.
  The example shown activates the Conda environment and starts the Jupyter notebook, a popular interactive
  tool for creating rich documents and running code.
</aside>

{{< /slide >}}

{{< slide type="asciicast" src="../assets/1-install.cast" >}}

All of Anaconda's packages get baked into
your app container.

<aside class="notes">
  When Platform.sh builds your code and manages dependencies, all of the required packages are written on a
  read-only disk image that is available to your application container.
</aside>

{{< /slide >}}

{{< slide >}}

<div class="two-col-svg">
<div><img src="../assets/languages/r-logo.svg" class="plain" width="400px" alt="R-language" data-credit="https://commons.wikimedia.org/wiki/File:R_logo.svg" /></div>
<div><img src="../assets/languages/pypy-logo.png" class="plain" width="400px" alt="PyPy" data-credit="https://commons.wikimedia.org/wiki/File:Pypy_logo.png" style="padding-bottom:15px;" /></div>
</div>
<div id="stackless-label"><div class="maintext"><code>Stackless</code></div><div class="subtext">Python</div></div>
<!--
<ul class="other-stacks">
  <li><img src="assets/languages/r-logo.svg" alt="R Language" class="plain" data-credit="https://commons.wikimedia.org/wiki/File:R_logo.svg" /></li>
  <li><img src="assets/languages/pypy-logo.png" alt="PyPy" class="plain" data-credit="https://commons.wikimedia.org/wiki/File:Pypy_logo.png" /></li>
  <li><div id="stackless-label"><div class="maintext"><code>Stackless</code></div><div class="subtext">Python</div></div></li>
</ul> -->

Anaconda isn't the only possibility! Any stack that can be installed with Conda—like R, PyPy, and Stackless Python—can be used!

<aside class="notes">
  R, PyPy, and Stackless Python are examples of other runtimes or tools that can be installed on Platform.sh by
  first installing Miniconda and then using it to install further packages.
</aside>

{{< /slide >}}
