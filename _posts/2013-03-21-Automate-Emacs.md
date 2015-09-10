---
layout: post
tags: Emacs
date: 2013-03-21 13:08
title: Automate Emacs
published: true
---


I love emacs because it allows you to customize it according to your need. I am using emacs as my latex editor and found it very easy. I have talked about it earlier. Recently I found out that generating a dvi file is not a good idea from tex file. because when we generate dvi file, figures and pictures are not included in the dvi file. Instead a blank spot is provided in dvi file and during displaying it, the dvi viewer link to that particular file to that blank spot. So, I can't mail only dvi file to someone who don't have access to those pictures. pdf files are extremely reliable in this case. Once a pdf file is generated, it contains all information and pictures inside it. So, we don't need any extra file alongside. Generally pdflatex is used to generate pdf file out of latex source code. It is very generous. However emacs use latex command by default which generate dvi file. If we want to run pdflatex instead of latex, we have to set some environment for emacs.  ```(setq TeX-PDF-mode t)``` will tell emacs to run pdflatex when we press ```C-c-C-c-RET``` (Ctrl+c, Ctrl+c, Enter).

Again it is very good idea to run flyspell which check spelling of the buffer and emphasize wrong words.

To change defaulet emacs environment, open .emacs file in the home directory and add required lines of code. Given below is a list of code requires for the matter discussed above.

```emacs
(setq TeX-auto-save t)
(setq TeX-parse-self t)
(setq TeX-save-query nil)
; set the latex files to be compiled by pdflatex
(setq TeX-PDF-mode t)
; start flyspell
(add-hook 'LaTeX-mode-hook 'flyspell-mode)
(add-hook 'LaTeX-mode-hook 'flyspell-buffer)
```

Now, when flyspell is active, it will highlight spelling mistake and unknown words. o check words individually type ```M-x ispell```. it will go to every highlighted words one by one. When you reach your desired word, press i to insert this word permanently into the dictionary.
