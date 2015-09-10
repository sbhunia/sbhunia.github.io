---
layout: post
tags: emacs latex forward-search backward-search evince
date: 2013-03-31 14:08
title: Forward and Backward Search in Emacs with Latex
published: true
---

Prof. Felisa Vazquazabad showed me a cool feature in MAC. In her computer she can toggle between latex source code and the pdf file very easily. And when toggling, the particular portion in pdf is highlighted corresponding to the position where cursor is placed in latex source file. I searched for this feature and found out that this is called forward search (mapping a point in latex source to corresponding region in pdf) and inverse search. This is highly possible in Emacs-Auctex with evince that is the default pdf viewer in Ubuntu. I am using Emacs 23 with auctex 11.87 and Evince 3.4 in Ubuntu 12.04-64bit version.

In the emacs, I have to compile the file either clicking the icon on the top or pressing C-c C-c. Then place the cursor which I want to view. Then cither click on pdf icon or press C-c C-v agian to view the pdf. We can see that particular region correspoind to the cursor pointer in emacs has been surrounded by red square. Now if we want to map a portion of the pdf to the latex source, just press Ctrl+left mouse button. This will point the cursor to the right place in latex source opened in emacs.

You have to copy paste the following code into ~/.emacs file. All things are done. However I could not fix a bug. If there is space in file name or in the parent directory then this code would not work. So, rename all parent directories without spaces (replace by underscore).

```
;compile tex as PDF
(setq TeX-PDF-mode t)

;view the pdf using evince
(setq TeX-view-program-selection '((output-pdf "Evince")))

; enable source specials or SyncTeX to be enable to compile it to a forward / backword searching.
(add-hook 'LaTeX-mode-hook 'TeX-source-correlate-mode)

; always start emacs server when viewing in evance for backward search
(setq TeX-source-correlate-start-server t)
```
