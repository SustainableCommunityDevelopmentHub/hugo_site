---
title: {{ $term := index ( split .File.Dir "/") 1 }}"{{ replace $term "-" " " | title }}"
description: "This is the description for {{ $term | title }}"
logo: "/images/{{  $term }}.jpg"
category: {{ .params.category }}
tag: {{ .params.tag }}
date: {{ .Date }}
draft: false
---
