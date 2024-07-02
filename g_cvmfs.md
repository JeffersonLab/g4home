---
layout: default
title: cvmfs 
permalink: /cvmfs/
---

<br/>

We distribute releases of Geant4 on CVMFS for the following platforms:

- Linux: {{ site.supported_linux }}
- MacOS: {{ site.supported_macos }}

If you have access to a CVMFS client, you can use the following command to access the Geant4 installation:


- tcsh: `source /cvmfs/oasis.opensciencegrid.org/jlab/geant4/ceInstall/geant4_cvmfs.csh`
- bash, zsh: `. /cvmfs/oasis.opensciencegrid.org/jlab/geant4/ceInstall/geant4_cvmfs.sh`

After sourcing the script, you can use the command `module load sim` to load the latest 
version of Geant4 (currently {{ site.latestg4 }})

<br/>

---

![local](/assets/gifs/local.gif)

