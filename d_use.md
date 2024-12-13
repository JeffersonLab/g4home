---
layout: default
title: use 
permalink: /use/
---



# How to use Geant4 on the JLab CUE machines (ifarm)

---

<br/>

A full installation of Geant4 that includes qt5, clhep and xercesc is available at Jefferson Lab on the CUE machines.

To load the latest version of Geant4 (currently {{ site.latestg4 }}), use the following commands:

```shell

module use /scigroup/cvmfs/geant4/modules 
module load geant4

```

<div class="info">
	We recommend to specify the Geant4 version if you want to add the commands above to your shell login file,
    for example module load geant4/{{ site.latestg4 }}. This way you ensure that your project will work even 
	if the default version changes.
</div>

<br/>

Run `module avail geant4` to show the available versions of Geant4, and `module switch geant4/<version>` to change Geant4 version.


![ifarm](../assets/gifs/ifarm.gif)

<br/>

---

<br/>



# How to use Geant4 on your local machine using CVMFS

If you have access to a CVMFS client and your OS platform is supported, you can load 
Geant4 with the following commands:

```shell

module use /cvmfs/oasis.opensciencegrid.org/jlab/geant4/modules 
module avail geant4
module load geant4

```

Use `module switch geant4/<version>` to change Geant4 version.

### Supported Platforms:  {{ site.supported_platforms }}

<br/>

---

<br/>

# Use a Docker Container

The following docker containers are available:

- {{ site.fedora_container }}
- {{ site.alma_container }}
- {{ site.ubuntu_container }}

To use, we recommend mounting a work directory to the container (here we use `~/work`) to save your work through docker sessions.
In the following examples we'll use the `fedora` container, but the same applies to the other containers.

<br/>


---

<br/>

### Batch mode:

```

docker run --platform linux/amd64 -it --rm -v ~/mywork:/usr/local/mywork {{ site.fedora_container }} bash

```
<br/>


---

<br/>


### Interactive mode:


```

docker run --platform linux/amd64 -it --rm -v ~/mywork:/usr/local/mywork -p 8080:8080 {{ site.fedora_container }}

```

After the above command, follow the instructions in the terminal to open a browser and connect to the container's port.

<br/>

If you want to use containers with different versions of Geant4, replace {{ site.latestg4 }} with one of the supported versions. 

---

<br/>


### Questions or Feedback?

If you have any questions or suggestions, please contact me at [ungaro](mailto: ungaro@jlab.org). 
For general Geant4 issues, please use the [Geant4 Forum](https://geant4-forum.web.cern.ch/).

<script src="/g4home/assets/copyCode.js"></script>
