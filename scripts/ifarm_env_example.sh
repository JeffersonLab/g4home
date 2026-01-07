# this script is meant to run manually
farm
module use /scigroup/cvmfs/geant4/g4install/modules
module avail geant4
module load geant4
echo $G4INSTALL
ls -l $G4INSTALL