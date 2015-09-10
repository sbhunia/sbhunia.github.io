---
layout: post
tags: mail-client thunderbird ubuntu
date: 2013-09-20 13:08
thumbnail: http://placehold.it/100x100
title: Setting Up Mail Client in Ubuntu
published: true
---

I like reading emails in e.mail client as opposed to on web browsers. This have many benefits such as you can see mails from all of your account in one place, get notified as soon as there is an incoming mails and the best of all is you don't have to type password every time you want to log in. Again, you can move mails from account to another account very easily. The biggest advantage in my view is the ability of checking mails very quickly irrespective of internet connection speed. Whenever a mail is delivered to mail-server, the e.mail client download the mail to client computer using IMAP or POP3 protocol. Client machines cache these new mails. So, the user don't get delay of reading mails because of slow download speed. However every pros with some cons. If you don't have a dedicated personal computer  and wants to check emails on different computer then you should be better of with web browser.

I'm a dedicated Linux user who doesn't like windows environment. My university use Microsoft email exchange as their mail server. They suggests Microsoft outlook as default e.mail client. [Mozilla Thunderbird](http://www.mozilla.org/thunderbird/) is the most used linux client. My Ubuntu 12.04 came with Thunderbird as default mail client. I have customized few things so that it works in preferable way.

1. **Add account**:
  - Edit->Account Setting-> Account Actions->Add Accounts
  - then follow steps. You might have to know details about your mail server.

1. Link with **gmail contacts**:
  - tools->Add-ons-> search for gContactSync and install it
  - restart firefox. it will ask for your mail id and password. provide them and you are done with gmail contact sync.

1. **Google caendar**: follow [these](https://support.mozilla.org/en-US/kb/using-lightning-google-calendar) steps.

1. By default, thunderbird places the reply message below quoted message. You can change this to top of the mail and place the quoted mail in below:
  - Edit -> Account Settings -> Composition & Addressing
  - Change "start my reply below the quote" to "start my reply above the quote"

1. **Mail merge**: Sometimes you might want to send same mail to different people without keeping all in cc or bcc field. To have this simply install [mail Merge](https://addons.mozilla.org/en-us/thunderbird/addon/mail-merge/) Add-on. While typing new mesage, provide all names as To field. Instead of clicking on Send button click on mail merge option.

1. **Start on Startup** and stay minimized:
  - Go to -> System -> Preferences -> Startup Applications - and Add name:thunderbird command:thunderbird - Click Add

1. **Keep Thunderbird running** while minimized or closed
  - Install the plugin MinimizeToTray
  - Tools --> Add-ons and click the Preferences button for the MinimizeToTray
  - select Instead of closing and when minimizing option from the list.
  - In the Unity Launcher (on the left hand side), right click on Thunderbird's entry and ensure that Keep in Launcher is not ticked.

1. Enjoy using thunderbird  
