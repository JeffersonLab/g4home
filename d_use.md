---
layout: default
title: use 
permalink: /use/
---



# How to use Geant4 on the JLab CUE machines (ifarm)

---

<br/>


A full installation of Geant4 that includes qt5, clhep and xercesc can be used via `modules`. To enable it:

```shell

module use /scigroup/cvmfs/geant4/modules 

```

After sourcing the script, you can use the command `module avail geant4` to display the available versions of Geant4. 
To load the latest version (currently {{ site.latestg4 }}) use the command `module load geant4`

<br/>



![ifarm](../assets/gifs/ifarm.gif)


# How to use Geant4 on supported platforms using CVMFS

We distribute releases of Geant4 on CVMFS for the following platforms:

- Linux: {{ site.supported_linux }}
- MacOS: {{ site.supported_macos }}


If you have access to a CVMFS client, you can use the same procedure as for the JLab CUE machines, but replace the cvmfs path:

```shell

module use /cvmfs/oasis.opensciencegrid.org/jlab/geant4/modules 

```

# Use a Docker Container




<br/>

<script src="/g4home/assets/copyCode.js"></script>
