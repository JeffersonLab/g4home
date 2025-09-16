---
layout: default
title: examples 
permalink: /examples/
---



# How to use Compile the Geant4 examples

---

<br/>

Follow the commands on the [use](/g4home/use/) page to load the Geant4 
environment.

In the following instructions we will compile the `basic/B5` example, but it could be any other
available in `$G4INSTALL/data/Geant4/examples/`. Replace `-j4` with with `-jN` where N is the number of cores you want to use for the compilation.


```

mkdir build_B5
cd build_B5
cmake $G4INSTALL/data/Geant4/examples/basic/B5
make -j4 

```

<div class="info">
	If you want to modify the example's code, we recommend to copy the example source directory somewhere 
	and replace $G4INSTALL/data/Geant4/examples/basic/B5 with the path to your new source directory.
</div>

<br/>

More details on the examples are available in the [Geant4 Examples Doxygen Page](https://geant4-userdoc.web.cern.ch/Doxygen/examples_doc/html/index.html).

<script src="/g4home/assets/copyCode.js"></script>
