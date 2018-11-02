---
layout: post
tags: commands ubuntu
date: 2018-11-02 13:08
title: Useful commands
published: true
---

Clonning Github repository

```
git clone --bare <old-repository.git>
cd <old-repository.git>
git push --mirror <new-repository.git>
cd ..
rm -rf <old-repository.git>
```
