---
layout: page
title: Updates
date: 2015-11-05 23:51
---

{% for item in site.data.updates %}
- `[{{item.date}}]` - {{item.text}}
{% endfor %}
