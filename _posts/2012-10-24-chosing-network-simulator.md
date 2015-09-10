---
layout: post
tags: Network-Simulator
date: 2012-10-24 13:08
thumbnail: http://placehold.it/100x100
title: Choosing Network Simulator
published: true
---

If you are in the phase of starting your research in Network or Wireless domain then, choosing correct simulator can  save a lot of your effort. I am writing this blog according to my own opinion and it should not be taken as something standard or reference. A list of well known simulators are provided [here](http://www.idsia.ch/~andrea/sim/simnet.html). Some of the simulators are developed and maintained by academia / research community while some are maintained by commercial enterprises.  

Academia community mostly provide their simulators free of cost and are open source in nature. Advantage is that anyone can change the protocol stack easily and update the change in the community so that others can use. But this kind of structure lags through maintenance. Sometimes updates are not checked properly for all kind of protocol and the person who is going to use it can get a wrong result while comparing it with other protocols. On the other hands, commercially available simulators are very handy to use and provide reliable result for standard protocols. These simulators are very useful while evaluating performance of a network or while designing network with standard devices before actually deploying it. Changing source code for protocols might be very problematic in these simulators and hence running new protocol on these simulators needs pen-stacking effort.  
 Open source simulators may not have good documentation and support like the commercial simulators, but it incorporates almost all protocols and standards and sometimes before the protocol being standardized also. If you want to pursue small project or just want to compare some standard protocol or evaluate performance of a new protocol then commercial simulators are the best. However if you are aiming for long term and are actually going to do your PhD with some simulator then open source simulators would be the best because you can use your knowledge in future in many protocol stack.  

Simulator ns-2 was the mostly used simulator by the research community but it lags good gui and proper documentation for all models. ns-3 overcomes that shortcoming and we hope this will stand strong. Opnet (recently merged with Riverbed), Qualnet are famous commercial simulators. I have been in touch of these and can say that Opnet provides very realistic results for standard protocols and wireless medium. This one can be taken to design your system but if you are going to run your algorithm with well defined protocols then pray God to help you.
