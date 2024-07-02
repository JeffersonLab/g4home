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

cvmfs: "<br/><a href=\"/cvmfs\"><img src=\"assets/images/cvmfs.png\" 
border=\"0px\" width=\"550px\" height=\"350px\"/></a><br/>
<a href=\"cvmfs\">Geant4 on CVMFS</a><br/><br/>  "

docker: "<br/><a href=\"/docker\"><img src=\"assets/images/docker.png\" 
border=\"0px\" width=\"550px\" height=\"350px\"/></a><br/>
<a href=\"docker\">Geant4 on Docker Containers</a><br/><br/>  "

showcase: "<br/><a href=\"/showcase\"><img src=\"assets/images/showcase.png\" 
border=\"0px\" width=\"550px\" height=\"350px\"/></a><br/>
<a href=\"showcase\">Geant4 Use Cases at Jefferson Lab</a><br/><br/>  "

validation: "<br/><a href=\"/validation\"><img src=\"assets/images/validation.png\" 
border=\"0px\" width=\"550px\" height=\"350px\"/></a><br/>
<a href=\"validation\">Geant4 validation at JLab's energies</a><br/><br/>  "



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
<td>  {{page.cvmfs}}  </td>
<td>  {{page.docker}}  </td>
</tr>
<tr> 
<td>  {{page.showcase}}  </td>
<td>  {{page.validation}}  </td>
</tr>
</table>



<br/>


---

<br/>


### Latest version of geant4: {{ site.latestg4 }} 
