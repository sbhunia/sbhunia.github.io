---
layout: page
title: About Me
date: 2014-10-19 23:51
---

<div class="row">
	<div class="col-xs-12 col-sm-offset-1 col-sm-10 col-md-offset-1  col-md-10 col-lg-offset-1  col-lg-10 margin-top-large">


		<div id="myCarousel" class="carousel slide" data-ride="carousel">

		      <div class="carousel-inner" role="listbox">
		      	{% assign first = true %}
				{% for image in site.data.images %}
					{% assign classname='' %}
					{% if first %}
						{% assign classname='active' %}
					{% endif %}
					<div class="item {{classname}}">
		          		<img class="first-slide" src="{{ image }}" alt="First slide">
		        	</div>
		            {% assign first = false %}
          		{% endfor %}

		        <div class="item">
		          <img class="third-slide" src="{{ site.data.images[0] }}" alt="Third slide">
		        </div>
		      </div>
		      <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
		        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
		        <span class="sr-only">Previous</span>
		      </a>
		      <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
		        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
		        <span class="sr-only">Next</span>
		      </a>
		    </div>
	</div>
</div>
<article markdown="1" class="margin-top-large">
Hi! I am Suman Bhunia, a PhD student in the Department of Computer Science at University of Nevada, Reno (UNR). I am working as a Graduate Research Assistant in the Computer Networking laboratory (CNL). My PhD supervisor is Dr. Shamik Sengupta. I am doing research on Security and vulnerability of Cognitive Radio Network. Before joining UNR, I was a PhD candidate at Graduate Center of City University of New York (CUNY). At CUNY, I was an adjunct lecturer for 2011-'12 academic year and Research Assistant for 2012-'13 academic year.

I have finished my Bachelor of Technology degree in Electronics and Communication Engineering from Meghnad Saha Institute of technology, affiliated to West Bengal university of technology and Master of Technology in Distributed and Mobile Computing at The Jadavpur University. I did my My Master's thesis in the area of Reliable Data Transfer over WiMax network under the supervision of Prof.Iti Saha Misra. After the completion of M.Tech, I continued to work in the department of Electronics and Telecommunication engineering at Jadavpur University as Senior Research Fellow on a Department of Science and Technology funded project on Cognitive Radio Network.

----------------------------------

### Other Activities:
- Elected as Chair for Club funding commitee of GSA-UNR
- Elected College of Engineering Representative, Graduate Student Association, UNR
- Elected Vice President, Computer Science Graduate Student Club, UNR
- Elected Vice President, Indian Student Organization, UNR


</article>
