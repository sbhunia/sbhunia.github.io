---
layout: post
tags: emacs latex epstopdf pdflatex graphics
date: 2013-05-01 13:08
thumbnail: http://placehold.it/100x100
title: Useful Tips for Latex in Emacs
published: true
---

Working with latex is sometimes very painful because of several packages to be included. I am building this page to use as a reference when working with pdflatex, TeXShop, or other PDF-oriented compiler. Although I am providing required package with the code, we must include all packages at the header of the tex file i.e. just after `\documentclass` command.

### Formatting Table:
I use tabularx package for building table. The advantage with this is, I don't have to think of table width. if I line in cell exceeds the width of that column, then tabularx package wrap that particular cell to fit into the table width. My default code for table is given below

```
\usepackage{tabularx}
\begin{table}
  \centering
  \caption{}
  \label{}
  \begin{tabularx}{\columnwidth}{|c|X|}\hline
    \textbf{Heading 1}      & \textbf{Heading 2} \\ \hline \hline
    cell 1 & cell 2\\ \hline
  \end{tabularx}
\end{table}
```

### Including Graphics:
It is always preferred to use vector graphics instead of raster graphics. Details of importing figure using `graphicx` package can be found in [wiki](http://en.wikibooks.org/wiki/LaTeX/Importing_Graphics). pdflatex (default compiler for latex in linux) can not compile eps files into pdf. It can only include pdf, jpg, png, gif etc. To include eps files, I have included the package `epstopdf` in the header. epstopdf must be installed in the system.

```
    \usepackage{graphicx}
    \usepackage{epstopdf}

    \begin{figure}
      \centering
      \includegraphics[width=\columnwidth]{<figure_name>}
      \caption{caption to display}
      \label{label for referring}
    \end{figure}
```

- `\columnwidth` specify the default column width.

- For specifying figure name, we don't need to specify the format. pdflatex will take the figure with best matched format.

- To span a figure for the whole page, we need to specify `\begin{figure*}....\end{figure{*} and replace [width=\columnwidth] with [width=\textwidth]`

- Each eps file must contain bounding box which is by default generated with gnuplot.

- If pdflatex returns some error then compile it with `pdflatex --shell-escape` command. This can be automated in Emacs by following these steps:  
  - M-x customize-group RET TeX-command
  -  Expand 'TeX Command List' and press on 'INS' button
  -  Fill these fields as:
    -- Name:  `LaTeXshellEscape`
    -- Command:  `pdflatex -shell-escape \%(mode)\%' %t`
    -- How:  `TeX-run-command`
  - Now, go to top of page. Press on the button 'Save for future session' and then press on 'Exit'.
  - Now, you can compile your TeX using C-c C-c LaTeXshellEscape command

Always put label after caption. Otherwise your figure / table numbering might be wrong.

### Default Length:
In stead of providing absolute width or height in terms of cm or in, it is very useful to use default commands for that. wiki provides very useful list of lengths. I use handful of widths such as ``\columnwidth``,  ``\linewidth`` and ``\textwidth`` that corresponds to width of column, line in the local environment and  text on the page respectively.

### White Space:

I use `\hspace{length}`, ``\vspace{length}`` for providing or eliminating white space. For example, to eliminate white spae after a picture, I use ``\vspace{-20pt}`` just before ``\end{figure}`` command.
