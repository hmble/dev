---
title: "How to use rename unix utility command ?"
date: 2020-11-13T07:44:37+05:30
slug: "how-to-use-rename-unix-utility-command"
description: "In this blog post we are going to learn about rename unix command"
---


Today we will learn about perl version of `rename` command.

We can use perl version of `rename` command to batch change whitespace to any character we like.

First lets see how we can install perl version of rename.

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

Now that we have rename package lets see how we can batch rename files.

## Remove whitespace from a filename

{{<clicommand>}}
$ rename 'y/ /-/g' *.txt
{{</clicommand>}}

