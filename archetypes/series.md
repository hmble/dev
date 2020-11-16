---
title: "{{ replace .Name "-" " " | humanize }}"
date: {{ .Date }}
slug: "{{ replace .Name " " "-" | lower}}"
draft: true

series: "{{replace (replaceRE "^series/([^/]+)/" "$1" .Dir 1) "-" " " | humanize}}"
---

