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

In the following instructions we will compile the `examples/basic/B5` example, but it could be any other
available in `$G4INSTALL/source/examples/`.


```

mkdir build_B5
cd build_B5
cmake  -DGeant4_DIR=$G4INSTALL/lib/cmake/Geant4 $G4INSTALL/source/examples/basic/B5
make -j 4 

```

Change `lib` to `lib64` if necessary. 

<div class="info">
	If you want to modify the example's code, we recommend to copy the example source directory somewhere 
	and replace $G4INSTALL/source/examples/basic/B5 with the path to your new source directory.
</div>

<br/>

More details on the examples are available in the [Geant4 Examples Doxygen Page](https://geant4-userdoc.web.cern.ch/Doxygen/examples_doc/html/index.html).

<script src="/g4home/assets/copyCode.js"></script>
