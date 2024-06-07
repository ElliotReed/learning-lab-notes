---
layout: note
date: 2024-06-07
title: "Vite"
categories: [""]
---

- toc
{:toc}

[Vite](https://vitejs.dev/)

Frontend tooling

## Instalation

```code
npm create vite@latest
```

## Config

[vite config](https://vitejs.dev/config)

Vite's config file (vite.config.ts)

```js
export default defineConfig({
  plugins: [
    react(),
  ],
})
```

Add an alias to defineConfig()

```js
resolve: {
  alias: {
    '@': path.resolve(__dirname, 'src'),
  },
}
```

If using typescript add to tsconfig

```json
"baseUrl": ".",
"paths": {
  "@/*": ["src/*"],
},
```
