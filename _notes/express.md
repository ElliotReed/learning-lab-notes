---
layout: note
title: "Express"
date: 2024-1-5
categories: express
---

- TOC
{:toc}

## Typescript

[typsescript](https://www.typescriptlang.org/)

Install typescript, ts-node and @types/typescript as devDependancies.

```node
npm i -D typescript ts-node @types/typescript
```

Create tsconfig.json using the typescript cli.

```node
tsc --init
```

tsconfig.json options:

```json
"target": "ESNext",
"baseUrl": "./src",
"module": "CommonJS",
```
