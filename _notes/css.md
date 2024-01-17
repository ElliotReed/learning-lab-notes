---
layout: note
title: "CSS"
date: 2024-1-2
categories: css
---

- TOC
{:toc}

## Images

Standard image properties:

```css
img {
  display: block;
  width: 100%;
}
```

## Inputs

### Label in Input

HTML

```html
<div class="field relative">
  <label for="email">Label</label>
  <input type="email" name="email" placeholder="" required/>
</div>
```

Tailwind example:

```css
label {
  @apply font-handwriting uppercase text-xl tracking-tighter
}

label:has(+ input:placeholder-shown) {
  @apply text-3xl absolute top-8 left-8 pointer-events-none transition-all duration-300
}

label:has(+ input),
label:has(+ input:focus) {
  @apply absolute top-2 left-2 text-xl
}

input[type="email"],
input[type="number"],
input[type="password"],
input[type="tel"],
input[type="text"],
input[type="url"] {
  @apply font-sans text-2xl h-[100px] w-full px-7 border-black border-2
}

/* invalid label */
label:has(+ input:invalid:not(:placeholder-shown)) {
  @apply text-white
}

/* invalid input */
input:invalid:not(:placeholder-shown) {
  @apply bg-orangeRed border-fireEngineRed
}
```

## Challenge Sites

### CSSBattle

[CSSBattle](https://cssbattle.dev/)

Judged by least number of characters. Learning from solutions is worthless.

Good to try for matching on my own.
