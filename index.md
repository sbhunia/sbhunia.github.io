---
layout: default
date: 2014-10-19 23:51
---


<div itemscope itemtype="http://schema.org/Person" >
  <div class="row">
  <div class="col-xs-12 col-sm-3 text-center">
    <figure>
      <img src="/assets/images/protrait_3.jpg" alt="protrait" class=" img-responsive">
    </figure>
  </div>
    <div class="col-sm-9">
      <div class="profile">
        <div class="col-sm-12">

          <div class="col-xs-12 col-sm-10">
            <h2> <span itemprop="name">{{site.data.personal.name}}</span></h2>
            <p itemprop="jobTitle">{{site.data.personal.position}}</p>
            <span itemprop="affiliation">
              <p><a href="{{site.data.personal.deptlink}}">{{site.data.personal.dept}}</a></p>
              <p>{{site.data.personal.school}}</p>
            </span>
            <span itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
              <p>
                <span itemprop="streetAddress">{{site.data.personal.address.line1}} <br/>
                {{site.data.personal.address.line2}}</span>
                <span itemprop="addressLocality">{{site.data.personal.city}}</span>,
                <span itemprop="addressRegion">{{site.data.personal.state}}</span>
              </p>
            </span>
            <p itemprop="email"> {{site.data.personal.email}}</p>
            <p>&nbsp;</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

----------------------------------

### Biography:

I am a postdoctoral scholar at the Department of Computer Science of Texas A&M University where I feel very lucky to be working with a very enthusiastic group supervised by Prof. [Radu Stoleru](http://faculty.cs.tamu.edu/stoleru/). Before joining TAMU, I was a postdoctoral scholar at the University of Cclifornia - Davis, and before that I obtained my PhD degree in Computer Science and Engineering from the University of Nevada, Reno. My PhD advisor was Prof. [Shamik Sengupta](http://www.cse.unr.edu/~shamik/).  My thesis is focused on defense against smart malicious entities in wireless communications. I received a Master’s degree in Distributed and Mobile Computing from Jadavpur University, India in 2010, and my Bachelor’s degree in Electronics and Communication Engineering from West Bengal University of Technology, Kolkata, India in 2008.

___________________________________

### Research Interests:
- Security and privacy in wireless communication
- Survivability against Jamming for cognitive radios and dynamic spectrum access network
- Optimized spectrum assignment with fragmentation and aggregation aware DSA network
- Maintaining communication in 3D mesh network
- LOS discovery for directional RF and Free Space Optical transceivers

----------------------------------

### Latest Updates

{% for item in site.data.updates limit:5 | | sort: 'date' %}
- `[{{item.date}}]` - {{item.text}}
{% endfor %}

<div style="text-align:center;"><a href="/updates">more</a></div>

### Professional Services:
- Served as session Chair at IEEE CSS 2015 track: Active Defense Techniques and Systems
- Technical Program Committee Member of ICIT `2015`, `2016`
- Technical Program Committee Member of MILCOM `2017`
- Technical Program Committee Member of GameSec `2017`
