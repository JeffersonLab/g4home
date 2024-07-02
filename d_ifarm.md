---
layout: default
title: ifarm 
permalink: /ifarm/
---




# How to use Geant4 on the JLab CUE machines (ifarm)

---

<br/>


A full installation of Geant4 that includes qt5, clhep and xercesc can be used via `modules`. To enable it:

- tcsh: `source /cvmfs/oasis.opensciencegrid.org/jlab/geant4/ceInstall/geant4_cvmfs.csh`
- bash, zsh: `. /cvmfs/oasis.opensciencegrid.org/jlab/geant4/ceInstall/geant4_cvmfs.sh`

After sourcing the script, you can use the command `module load sim` to load the latest 
version of Geant4 (currently {{ site.latestg4 }}):

<br/>


![ifarm](/assets/gifs/ifarm.gif)


