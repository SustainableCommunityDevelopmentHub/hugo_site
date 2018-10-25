---
title: "{{ replace .TranslationBaseName "-" " " | title }}"
date: {{ .Date }}
draft: false
logo_path:
post_image:
logo: "/images/{{  $term }}.jpg"
category: {{ .params.category }}
tag: {{ .params.tag }}
---
