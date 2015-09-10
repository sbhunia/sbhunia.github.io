---
layout: post
tags: emacs math preview
date: 2013-03-31 13:08
title: Preview Math Formulas in Emacs
published: true
---

Today I found another feather on the hat of Emacs. Any man who is tired of writing math formulas, tables or figures in latex would love this feature. In normal latex environment users have to write the latex source in some editor and the compile it and see the output in another file. So, all the time you make a change, you have to swap window which increases time consumption and error in writing.

I have discussed cool features of Emacs as Latex editor before. We can enable preview mode in emacs with the help of one package called auctex. Auctex helps the user to toggle between formula preview and source mode on the fly. So, the user doesn't need to compile the whole document or swap window. Formulas would be shown as the should look like in pdf in the place of their source code.  In th first figure we are editing with latex source code. Then simply press C-c C-p C-p to preview the portion where the current cursor is. This can be viewed in next figure. Good point is that it remains there and if we want to edit some part of it just move cursor by left or right and can edit source code. as soon as the cursor leaves this particular area, the place is again resumed to preview of the formula.


![previe not working](/images/emacs-math-preview-1.png)
![previe working](/images/emacs-math-preview-2.png)


However due to some bug or mismatch between auctex and ghostscript it is bit difficult to set emacs in preview mode in ubuntu 12.04. I am using Ubuntu 12.04, 64 bit version with Emacs 23.3.1. I have used apt-get install to install emacs. Currently Ghostscript 9.05 is is installed in my machine. Now if I install auctex with apt-get it is not going to work in preview mode. You have to install latest version of auctex from [Auctex repository](http://www.gnu.org/software/auctex/download-for-unix.html). Download the \*.tar.gz file and extract it. Then follow the instillation instruction there. Now your emacs is good to work in preview mode. To enable the preview mode with latex add these hooks in your ~/.emacs file.

```
;for enabling preview
(load "auctex.el" nil t t)
(load "preview-latex.el" nil t t)
```

Again, you can add one tab on tab named 'Math'. This helps in finding all math symbols. To add this simply add the following lines in ~/.emacs file.

```
;enable LaTeX Math mode. this put a math symbol tab on top.
(add-hook 'LaTeX-mode-hook 'LaTeX-math-mode)
```
![Mathematics menu](/images/emacs-math-preview-3.png)
