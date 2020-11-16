---
title: "{{ replace .Name "-" " " | humanize }}"
date: {{ .Date }}
slug: "{{ replace .Name " " "-" | lower}}"
image: "/featured/{{ replace .Name " " "-" | lower}}.png"

draft: true
---

