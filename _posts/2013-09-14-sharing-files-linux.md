---
layout: post
tags: linux file-share
date: 2013-09-14 13:08
thumbnail: http://placehold.it/100x100
title: Sharing Files between two Computers
published: true
---

Sharing files from remote computer is very easy in linux. We can use scp command for that.

However it is very hard if you want to work on same file from many computer. Instead I want to build network file system where one directory will be shared among all computer. In my setup, the server machine have a folder named wireless_test that need to be shared. I follow this setup procedure to share it.

Install required software in the server:

```
sudo apt-get install nfs-server portmap nfs-common
```

 Put the folders you want to share with remote machine in */etc/exports*. Open /etc/export file and add the following line there. Here first argument is the path of the folder. second argument should specify the host you want the file to share with and the permission.

```
/home/sbhunia/wireless_test 172.24.76.1(rw,sync) 172.24.76.2(rw,sync)
```

then give these commands in terminal:

```
sudo exportfs -ra
sudo /etc/init.d/nfs-kernel-server restart
sudo /etc/init.d/portmap restart
```

Server is not set up. We need to setup the client. Install following softwares in the client machine.

```
sudo apt-get install nfs-client nfs-common
```

 For temporary mounting, I can give the following command. Here server ip is 172.24.76.101.

```
sudo mount -t nfs 172.24.76.101:/home/sbhunia/wireless_test /mnt
```

 or,

```
sudo mount -o soft,intr,rsize=8192,wsize=8192 172.24.76.101:/home/sbhunia/wireless_test /mnt
```
