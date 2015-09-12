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
<p>Hi! I am Suman Bhunia, a PhD student in the <a href="http://cse.unr.edu">Department of Computer Science at University of Nevada, Reno (UNR)</a>. I am working as a Graduate Research Assistant in the Computer Networking laboratory (CNL). My PhD supervisor is Prof. <a href="http://cse.unr.edu/~shamik">Shamik Sengupta</a>. I am doing research on Security and vulnerability of Cognitive Radio Network. Before joining UNR, I was a PhD candidate at<a href="http://gc.cuny.edu">Graduate Center of City University of New York (CUNY) </a>. At CUNY, I was an adjunct lecturer for 2011-'12 academic year and Research Assistant for 2012-'13 academic year.</p>
<p>I have finished my Bachelor of Technology degree in Electronics and Communication Engineering from <a href="http://www.msitcollege.org">Meghnad Saha Institute of technology</a>, a college under <a href="http://www.wbut.net">West Bengal university of technology</a>and Master of Technology in <a href="http://www.jaduniv.edu.in/view_department.php?deptid=146">Distributed and Mobile Computing</a> at The <a href="http://www.jaduniv.edu.in">Jadavpur University</a>. I did my My Master's thesis in the area of Reliable Data Transfer over WiMax network under the supervision of Prof. <a href="http://www.jaduniv.edu.in/profile.php?uid=357">Iti Saha Misra</a>. After the completion of M.Tech, I continued to work in the department of <a href="http://www.jaduniv.edu.in/view_department.php?deptid=84">Electronics and Telecommunication engineering</a> at Jadavpur University as Senior Research Fellow on a <a href="http://www.dst.gov.in">Department of Science and Technology</a> funded project on Cognitive Radio Network.</p>

</article>
