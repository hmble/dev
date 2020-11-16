---
title: "{{ replace .Name "-" " " | humanize }}"
date: {{ .Date }}
slug: "{{ replace .Name " " "-" | lower}}"
draft: true
image: "/featured/{{replace (replaceRE "^series/([^/]+)/" "$1" .Dir 1) " " "-" | lower}}-{{ replace .Name " " "-" | lower}}.png" 

series: "{{replace (replaceRE "^series/([^/]+)/" "$1" .Dir 1) "-" " " | humanize}}"
---

