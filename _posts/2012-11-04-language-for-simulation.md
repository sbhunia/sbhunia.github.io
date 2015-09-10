---
layout: post
tags: Network-Simulator language
date: 2012-11-04 13:08
thumbnail: http://placehold.it/100x100
title: Choosing language for simulating networks/graphs
published: true
---

Nowadays, I am writing some code to simulate Erald Troja's research on a wireless network. We can use standard simulators but the difficulty in that is to plug new algorithms into an already developed protocol suit. So, we decided to use any programming language and simulate the network treating it as a graph, i.e. vertex as mobile nodes and edges as wireless links. Every edge has many time varying characteristics depending on its location.

Last semester I took a course on Algorithms. In that course, we studied how to solve many programs efficiently so that computers can find the solution in shorter time. In that course we also dealt with graphs and networks. When simulating for big graphs with a large number of nodes and edges, we need to use a suitable programming language. Normally graphs are represented in the form of Adjacency matrix because manipulation of matrix is very straight forward and easy to code. For enhancing the time/space complexity of the algorithm we can represent the graph as a linked list and more.

In my opinion, functional programming languages like haskel would not be efficient for this reason. Some of my friends used Java and some programmed it with C or C++. Some of my friends used Java as the programming tool. Many, including myself, use C to code it. The reason behind choosing it is because it is very easy to think of representing a graph in C. In Java, you don't need worry about the boundary of an array because the program itself takes care of it. On the other hand, we need to pay serious attention for array bound checking in C. C does not give any message when we are exceeding array limit and trying to write something on memory space outside the boundary (it aborts the program if the the address we are trying to write does not belong to the current process memory space). This is a big headache in programming in C. When you have coded around a thousand lines with many function calls and try to think of the scenario that gives a small error message "segmentation failure" and the program is aborted. You will literally pull your hair while trying to find the bug and when you finally discover the stupid error you made, you will say no one on the earth has ever made a more stupid error than that one.

I don't know among Java and C who will win the battle. I am just trying to convey my view here. Later on if I get some feedback from any of my friends, I shall update this writing.
