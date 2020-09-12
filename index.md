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
              </p>
            </span>
            <p itemprop="email"> {{site.data.personal.email}}</p>
            <p>
              <ul id="main-menu" class="nav navbar-nav">
                {% for menuItem in site.data.social.mainmenu %}
                  <li><a href="{{ menuItem[1].url | prepend: site.baseurl }}">
                    <i class="fa {{menuItem[1].icon_class}}"></i> </a>
                  </li>
                {% endfor %}
              </ul>
            </p>
            <p>&nbsp;</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

----------------------------------

### Biography:

I joined Miami University of Ohio as an assistant professor in the Fall of 2020. Before that, I was a postdoctoral scholar at Texas A&M University. I obtained Ph.D. in Computer Science and Engineering from the University of Nevada, Reno, under the supervision of Prof. [Shamik Sengupta](http://www.cse.unr.edu/~shamik/).  I received a Master’s degree in Distributed and Mobile Computing from Jadavpur University, India in 2010, and my Bachelor’s degree in Electronics and Communication Engineering from West Bengal University of Technology, Kolkata, India in 2008. 

___________________________________

### Research Interests:
- Security and privacy in wireless communication
- Survivability against Jamming for cognitive radios and dynamic spectrum access network
- Optimized spectrum assignment with fragmentation and aggregation aware DSA network
- Directional radio and free space optical communication

----------------------------------

### Latest Updates

{% for item in site.data.updates limit:5 | | sort: 'date' %}
- `[{{item.date}}]` - {{item.text}}
{% endfor %}

<div style="text-align:center;"><a href="/updates">more</a></div>

