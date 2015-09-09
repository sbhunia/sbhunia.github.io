---
layout: page
title: About Me
date: 2014-10-19 23:51
---


<div class="row resume-dl">
  <div class="col-xs-12">
    <a target="_BLANK" href="https://www.dropbox.com/s/o2esymylo1g5w2z/cv_suman_bhunia.pdf?dl=1" class="btn  btn-primary">
    		<i class="fa fa-file-pdf-o"></i> Download Curriculum Vitae </a>
  </div>
</div>
<div class="row">
	<div class="col-xs-12  col-sm-12 col-md-offset-1  col-md-10 col-lg-offset-1  col-lg-10 margin-top-large">
		

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
This is to be filled.	
</article>


