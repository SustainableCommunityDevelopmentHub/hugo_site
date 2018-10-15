+++
tag=[]
cat=[]
title: {{ $term := index ( split .File.Dir "/") 1 }}"{{ replace $term "-" " " | title }}"
image: "/images/{{  $term }}.jpg"
date: {{ .Date }}
draft: false
+++
