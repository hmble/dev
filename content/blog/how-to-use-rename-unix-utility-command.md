---
title: "How to use rename unix utility command ?"
date: 2020-11-13T07:44:37+05:30
slug: "how-to-use-rename-unix-utility-command"
image: "/featured/how-to-use-rename-unix-utility-command"
description: "Is blog post me hum unix rename command k baare me sikhenge."
---

{{<unsplash "npxXWgQ33ZQ" "Glenn Carstens-Peters" "https://unsplash.com/@glenncarstenspeters">}}

Aaj hum `rename` command k perl version k baare me padenge.

Hum perl version of `rename` command ka use saare whitespace character ko ek
sath remove ya change karne k liye use kar sakte. Lets see an example jaha hum
se jyada files jinke name me whitespace hai usse `-` change kaise kar sakte.

Us se pahle lets see how we can install perl version of rename.

## Install rename in Ubuntu

{{<clicommand>}}
$ sudo apt install rename
{{</clicommand>}}


## Install rename in Centos or Fedora 

{{<clicommand>}}
$ sudo yum install prename
{{</clicommand>}}

## Install rename in Arch Linux 

{{<clicommand>}}
$ sudo pacman -s perl-rename
{{</clicommand>}}

Considering k aapne successfully rename command install kar li ab hum dekhte k
hai k batch rename kaise kar sakte.

## Remove whitespace from a filename

{{<clicommand>}}
$ rename 'y/ /-/g' *.txt
{{</clicommand>}}
