---
layout: default
title: install 
permalink: /install/
---




# How to install Geant4 and its dependencies

---

<br/>


A full installation of Geant4 that includes qt5, clhep and xercesc can be achieved with our installation scripts.

First, clone the ceInstall repository in a location of your choice (here we use `<path_to_install>` as destination), use its modules and load sim_system:


```shell
git clone https://github.com/JeffersonLab/ceInstall
module use <path_to_ceInstall>/modules
module load sim_system
```



Then, run the installation script:

<script src="/g4home/assets/copyCode.js"></script>

<br/>


![ifarm](../assets/gifs/ifarm.gif)


