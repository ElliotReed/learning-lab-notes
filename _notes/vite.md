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

To import kebab case into a styles object:

```css
.icon-button {
  \\ properties
}
```

and import as 'styles' in camelCase use this config:

```js
css: {
  modules: {
    localsConvention: 'camelCase',
  }
},
```

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
