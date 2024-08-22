---
layout: page
title: Preserving Privacy and Security in 6G network slicing

date: 2016-06-06 23:51
---
{% assign pdfsign = '<i class="fa fa-file-pdf-o"></i>'%}
{% assign pptsign = '<i class="fa fa-file-powerpoint-o"></i>'%}

### Problem Statement and Motivation
The cellular phone system represents the most ubiquitous and trusted communication infrastructure in the world. The cellular system has evolved a lot in the past two decades, starting from a basic audio communication system to the current smart phone system. In the last few months, the COVID pandemic has made us realize the cellular network's enormous importance more, and it has become the most integral part of human life. As the whole nation is looking forward to the jump from 4G to 5G LTE network, we look for the brighter side of 100x faster download speed, 10x decrease in latency, and 100x increase in network capacity. However, with all these advantages comes a greater risk of privacy of the users. The Cybersecurity & Infrastructure Agency (CISA) director Christopher Krebs stated in the August 2020 report [1]: “From my perspective, 5G is the single biggest critical infrastructure build that the globe has seen in the last 25 years and, coupled with the growth of cloud computing, automation, and future of artificial intelligence, demands focused attention today to secure tomorrow.” To achieve higher bandwidth and broader coverage, the 5G loosen the network architecture's tight control, which opens several vulnerabilities.

It is easier to have a single security monitoring point for the whole 5G network [2]. Ideally, this system would monitor from a higher level and control the network component whenever a security breach or anomaly is detected. This kind of tight network architecture is possible for earlier generations of cellular networks. However, the 5G network architecture moved from this single point of view to a more collaborative nature. In 5G, the network is virtually sliced into several vertical control plane and allow network operators to provide a portion of the network for a specific purpose [3]. Examples of such use cases are smart home monitoring, Internet of Things (IoT), industrial monitoring system, etc. The goal of network slicing is to provide separate quality assurance for a different kind of traffic. However, this kind of heterogeneous Quality of Service (QoS) management leads to a new plethora of network attacks that were not possible in the older generation so mobile networks.

The proposed work aims to build a small scale testbed with LTE base station and open-source core networks and identify the different vulnerabilities brought by the network slicing and virtualized RAN of 5G cellular architecture. Next, we shall design a distributed intrusion detector to detect anomalies such as a crossfire attack, a man-in-the-middle attack targeting the network slicing. It is worthwhile to mention that we cannot cover all attack scenarios within the research span of this proposal. This project will provide preliminary support to seek funds from other governmental and industrial sources. We shall build a prototype system that can run on the Pico base stations and provide security alerts to the already running network-wide intrusion detection system.


### People
  - [Dr. Suman Bhunia](http://www.sbhunia.me) (Miami University)

### Prototype
N/A

### Publications

1. AG Famera, RM Shukla, and S Bhunia, “Cross-Device Federated Intrusion Detector for Early Stage Botnet Propagation in IoT,” in 2024 IEEE International Systems Conference  (IEEE SysCon 2024), Montreal, Canada, Apr. 2024. [{{pdfsign}}](/publications/manuscripts/syscon24_famera.pdf) [{{pptsign}}](/publications/manuscripts/syscon24_fl.pptx)


1. N. Perry§and S. Bhunia, “Crossfire Attack Detection in 6G Networks with the Internet of Things (IoT),” in IFIP International Internet Of Things (IFIP-IoT), Dallas, USA, Nov. 2023. [{{pdfsign}}](/publications/manuscripts/ifipiot23.pdf) 


### Useful Liknks
