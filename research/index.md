---
layout: page
title: Research
date: 2015-09-12 23:51
---


{% for item in site.data.research %}
<div class='row'>
  <div class=" blog-short col-md-12" >
    <div class='row' >
      <a href="{{item.link}}"><h3>{{item.title}}</h3></a>
      <div class='col-md-4 col-xs-12'>
        <a href="{{item.link}}"><img class='img-responsive' src='{{item.img}}'></a>
      </div>
      <div class='col-xs-12 col-md-8'>
        {{item.desc}}
        
      </div>
    </div>
    <a class="pull-right marginBottom10" href="{{item.link}}">Read More</a>
  </div>
</div>
{% endfor %}
