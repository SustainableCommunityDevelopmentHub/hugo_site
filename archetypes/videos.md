---
title: "{{ replace .TranslationBaseName "-" " " | title }}"
description: "This is the description for {{ replace .TranslationBaseName "-" " " | title }}"
cat:
  - {{ index (split .TranslationBaseName "-") 0 }}
tag:
  - "{{ replace .TranslationBaseName "-" " " | tag }}"
date: {{ .Date }}
draft: false
---
