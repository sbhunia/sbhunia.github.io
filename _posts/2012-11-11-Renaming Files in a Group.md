---
layout: post
tags: Rename Linux
date: 2012-11-11 13:08
thumbnail: http://placehold.it/100x100
title: Renaming Files in Group
published: true
---


Often we need to rename a group of files into specified format. Think of of the scenario when you download few dozones of pictures from your camera and all of those pictures named as _Image00000123_.jpg. Would not it be a good idea to rename all those pictures starting with specific name such as _NiagaraTrip001.jpg_ and so on? Well, you can do it by renaming each picture manually but who wants to make his hand dirty when it can be done in a very sophisticated way by writing one line of command in Linux shell?

Just open a linux terminal (In Ubuntu press Shift+Ctrl+T). Then go to the directory where picture are stored by using _cd_ command. We have to use the command _rename_ very precisely. Syntax is: rename perlexpr [ files ]. Files can be easily specified by a wild-card character such as '\*'. \*.jpg means the rule will be applied to all files that has .jpg in its name at the end. Main constraint here is to write the perlexpr correctly. Slight mistake in the perl expression will end up in something unexpected and mess up the whole folder.

Simple perl expression is `"s/pattern1/pattern2/"`. After execution of the command,  <span style="font-size: x-small;"><span style="font-family: &quot;Courier New&quot;,Courier,monospace;">pattern1</span></span> would be replaced by <span style="font-size: x-small;"><span style="font-family: &quot;Courier New&quot;,Courier,monospace;">pattern2</span></span>. I was dealing with some files in a folder and the list is given below.

```
[Songs.PK] Talaash - 01 - Muskaanein Jhooti Hai.mp3  
[Songs.PK] Talaash - 02 - Jee Le Zaraa.mp3  
[Songs.PK] Talaash - 03 - Jiya Lage Na.mp3
```
Now I want to get rid of the string "[Songs.PK]" in the beginning. So, I applied the command <span style="font-size: x-small;"><span style="font-family: &quot;Courier New&quot;,Courier,monospace;">rename "s/\[Songs\.PK\]//" *.mp3</span></span> and all the filns renamed as provided in the list below. Here the Perlexpr means find the string [Songs.PK]. As [, . and ] are active character in Perl, we have to provide \ (back slash) before them while writing the Perl expression. The string [songs.PK] would be replace by empty string.

```
Talaash - 01 - Muskaanein Jhooti Hai.mp3
Talaash - 02 - Jee Le Zaraa.mp3  
Talaash - 03 - Jiya Lage Na.mp3
```


Now, I want to get rid of the inner 2 digit numbers. To do that I gave the command <span style="font-size: x-small;"><span style="font-family: &quot;Courier New&quot;,Courier,monospace;">rename "s/-\ (\d{2})\ -\ //" *.mp3\. <span style="font-size: small;"><span style="font-family: inherit;">Here, (\d{2}) fits for 2 consecutive digits. and as before we just placed \ before space because space is a active character in linux command. The output list looks like:

```
Talaash Jee Le Zaraa.mp3
Talaash Jiya Lage Na.mp3
Talaash Muskaanein Jhooti Hai.mp3
```

To eliminate the space in the beginning of the string, place the command as rename "s/^\ //" *.mp3. Here ^ denote to search the string at the beginning of file name.


Now, I want to replace digits from some image that I downloaded from camera with some names.</span> <span style="font-size: small;">Name of the file was</span> <span style="font-size: small;"><span style="font-size: x-small;"><span style="font-family: &quot;Courier New&quot;,Courier,monospace;">DSCN00001946.jpg</span></span></span><span style="font-size: small;">. Here I want to cut the String DSCN and subsequent 6 digits and replace it with string Niagara_ and the last 2 digits. So, I gave the command given below. which convert the file name as:</span> <span style="font-size: small;"><span style="font-size: x-small;"><span style="font-family: &quot;Courier New&quot;,Courier,monospace;">Niagara_46.jpg

>rename "s/DSCN\d{6}/Niagara_/" *.jpg

To rename pictures taken from my camera serially, I gave this command:

>for i in *.JPG; do new=$(printf "Museums%04d.JPG" ${a}); mv ${i} ${new}; let a=a+1; done  
