---
layout: note
title: "Bash"
date: 2024-1-2
categories: shell, bash
---

- TOC
{:toc}

## Batch Rename

To rename avatar-01.png to placeholder__avatar-01.png

```bash
for file in avatar-*.png ; do mv "$file" "placeholder__${file}" ; done
```
