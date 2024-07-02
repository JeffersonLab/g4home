---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home

tutorial: "<br/><a href=\"/tutorials\"><img src=\"assets/images/tutorial.png\" 
border=\"0px\" width=\"550px\" height=\"350px\"/></a><br/>
<a href=\"tutorial\">Geant4 Tutorials</a><br/><br/>  "

ifarm: "<br/><a href=\"/ifarm\"><img src=\"assets/images/ifarm.png\" 
border=\"0px\" width=\"550px\" height=\"350px\"/></a><br/>
<a href=\"ifarm\">Geant4 on the CUE machines</a><br/><br/>  "

---

# Geant4 at Jefferson Lab

---

<br/>


[Geant4](https://geant4.web.cern.ch) is a Toolkit for the simulation of the passage of particles through matter. 
Its areas of application include high energy, nuclear and accelerator physics, 
as well as studies in medical and space science. 

At Jefferson Lab we use Geant4 for the simulation of our experimental setups, in order to:

- Optimize the design of detectors
- Minimize the background / signal ratio
- Understand and account for the detector responses
- Develop and test the reconstruction algorithms
- Calculate radiation doses on the detector and its electronics

<br/>

---


<table class="alternate" style="    text-align:center;">
<tr> 
<td>  {{page.tutorial}}  </td>
<td>  {{page.ifarm}}  </td>
</tr>
<tr> 
<td>  {{page.tutorial}}  </td>
<td>  {{page.tutorial}}  </td>
</tr>
<tr> 
<td>  {{page.tutorial}}  </td>
<td>  {{page.tutorial}}  </td>
</tr>
</table>



<br/>

- Development of Geant4, by:
  - Validating the physics models
  - Testing Geant4 on our experimental setups
- Support to the users at Jefferson Lab, by:
  - Setting up the environment on the JLab CUE machines (ifarm)
  - Distributing releases of Geant4 on CVMFS for the following platforms:
    - Linux: {{ site.supported_linux }}
    - MacOS: {{ site.supported_macos }}
  - Providing and upporting installation procedures for the supported platforms


<br/>

---

<br/>


## Latest version of geant4: {{ site.latestg4 }} 
