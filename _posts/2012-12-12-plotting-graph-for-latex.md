---
layout: post
tags: GNUPlot Emacs Linux
date: 2012-12-12 13:08
title: Plotting graphs for latex
published: true
---


For last few weeks I was searching a good tool where I can plot graph / chart generated from simulated results. I found google spreadsheet really useful in that case. The problem with google graphs is that it does not look good in black and white. Again spreadsheet tools does not support single graph to be exported as picture. I tried to run gnuplt and believe me, running gnuplot successfully is a big headache. So, I switch back to plotting graph on spreadsheet such as 'calc' in Ubantu. Now, how can I export it? If I take screenshot and then include it in my paper, the image conversation screw up the appearance of the graph. Then I figured out that I can plot the graph in Calc, change appearance by selecting each data series and placing custom point heads, all in black and white mode, changing line types so that when printed in B/W, the chart is recognizable. Then just copy the graph and pasted it in another program called draw. Then go to export and select 'eps' format. In the below check the box titled 'Selection'. This will export only the chart instead of whole page. Save it and open in Latex. Bingo... my problem is solved and I get the best image manipulation as eps formatted images are vector image and does not blur when you are zooming in.

### GNU Plot

GNU plot is widely used tool for plotting graphs in scientific field. Once we generate graphs in eps format, we can easily include it in latex file. GNU plot can print special Greek symbols as axis labels. Given below is a sample script for plotting graph in gnuplot. Data is provided in dataFile.csv (comma separated vector). First column is the x-axis points, and other columns are data points. Legends are also printed correctly and we can specify legend position.

I saved this script as script.plt and then run it from command prompt for each graph.

```
set   autoscale                        # scale axes automatically
unset log                              # remove any log-scaling
unset label                            # remove any previous labels
set xtic auto                          # set xtics automatically
set ytic auto                          # set ytics automatically
set terminal postscript eps monochrome enhanced dashed
set output "plot1.eps"
set style data linespoints
set key top left
#set logscale x
set xlabel "Packet Arrival Rate ({/Symbol l})"
set ylabel "Average Queuing Delay in millisecond"
set size 0.6,0.6
set datafile separator ","
plot "dataFile.csv" using 1:2 lt 1 t "Priority Queue" with linespoints, "dataFile.csv" using 1:3 lt 2 t "Simulated" with linespoints,"dataFile.csv" using 1:4 lt 3 t "M/G/1 Approximation" with linespoints, "dataFile.csv" using 1:5 lt 4 title "Queue with Vacation" w linespoints
```
