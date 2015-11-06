---
layout: page
title: Research
date: 2015-09-12 23:51
---


{% for item in site.data.research %}
<div class='row'>
  <div class=" blog-short col-md-12" >
    <div class='row' >
      <h4 style='color:#002e62'>{{item.title}}</h4>
      <div class='col-md-4 col-xs-12'>
        <img class='img-responsive' src='{{item.img}}'>
      </div>
      <div class='col-xs-12 col-md-8'>
        {{item.desc}}
      </div>
    </div>
  </div>
</div>
{% endfor %}
