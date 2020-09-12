---
layout: page
title: Sustainance against Jamming using Honeynet in Cognitive Radio Network
date: 2016-06-06 23:51
---
{% assign pdfsign = '<i class="fa fa-file-pdf-o"></i>'%}
{% assign pptsign = '<i class="fa fa-file-powerpoint-o"></i>'%}

### Problem Statement and Motivation
Cognitive Radio Network (CRN) has to stall its packet transmission periodically
to sense the spectrum for Primary User’s (PU’s) transmission. The limited and
dynamically available spectrum and fixed periodic schedule of transmission interruption
make it harder to model the performance of a CRNs. Again, an open and dynamic
spectrum access model brings forth a serious challenge of sustenance among the
CRN and makes them more susceptible to jamming-based denial of service (DoS)
attacks. Inspired by honeypot in the network security, we propose a honeynet
based defense mechanism called CR-honeynet. CR-honeynet aims to avoid attacks on
legitimate communications by dedicating a Secondary User (SU) as a honeynode,
to deter the attacker from attacking legitimate SUs and attack the honeynode instead.
CR-honeynet passively  learns  the  attacker’s  strategy  from  the  history
of  attacks  and  actively  adapts  preemptive  decoy  mechanisms
to   prevent   attacks on   legitimate communications.
Agian, dedicating an SU as honeynode, on account of its permanent idleness, is
wasteful of an entire node as a resource. We seek to resolve the dilemma by
dynamically selecting the honeynode for each transmission period. The contribution
of the current paper is two-fold. Initially, we develop the first comprehensive
queuing model for CRNs, which pose unique modeling challenges, due to their fixed periodic sensing and transmission cycles. In the second step, we introduce a
 series of strategies for honeynode selection to combat these attacks while
 keeping the CRN’s performance optimal for different traffic scenarios.

### People
  - [Suman Bhunia](http://www.sbhunia.me) (University of Nevada, Reno)
  - [Dr. Shamik Sengupta](https://www.cse.unr.edu/~shamik/) (University of Nevada, Reno)
  - [Dr. Felisa Vazquez-Abad](http://www.compsci.hunter.cuny.edu/~felisav) (Hunter College of City University of New York)

### Prototype
The protype is built using USRP 210 software defined radios, controlled using GNURadio interfaces. 

<div class="row">
  <div class="col-md-6">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/LphWzKSKIuk" frameborder="0" allowfullscreen></iframe>
  </div>
</div>

### Publications

1. **S Bhunia**, E Miles, S Sengupta and F Vazquez-Abad, "CR-Honeynet: A Cognitive Radio Learning and Decoy Based Sustenance Mechanism to Avoid Intelligent Jammer",   in IEEE Transactions on Cognitive Communications and Networking, vol. 4, no. 3, pp. 567-581, 2018, [DOI: 10.1109/TCCN.2018.2833549](https://doi.org/10.1109/TCCN.2018.2833549). [{{pdfsign}}](/publicationsmanuscripts/tccn18.pdf) 

1. **S Bhunia**, S Sengupta and F Vazquez-Abad, "Performance Analysis of CR-Honeynet to prevent Jamming Attack through Stochastic Modeling", Elsevier Pervasive and Mobile Computing, Volume 21, August 2015, Pages 133–149. DOI:[10.1016/j.pmcj.2015.04.004](http://www.sciencedirect.com/science/article/pii/S1574119215000784).  [{{pdfsign}}](/publications/manuscripts/pmc15.pdf)

1. **S Bhunia**, S Sengupta and F Vazquez-Abad, "CR-Honeynet: A learning & decoy based Sustenance Mechanism Against Jamming Attack in CRN", proc. of IEEE MILCOM 2014, Baltimore, doi:10.1109/MILCOM.2014.197. [{{pdfsign}}](/publications/manuscripts/milcom14.pdf) [{{pptsign}}](/publications/manuscripts/milcom14.pptx)

1. **S Bhunia**, X Su, S Sengupta and F Vazquez-Abad, "Stochastic model for Cognitive Radio Networks under jamming attacks and honeypot-based prevention", 15th International Conference on Distributed Computing and Networking (ICDCN), 2014. [{{pdfsign}}](/publications/manuscripts/icdcn14.pdf)  [{{pptsign}}](/publications/manuscripts/icdecn_presentation.pdf)

### Useful Liknks
