---
layout: note
title: "CSS"
date: 2024-1-2
categories: css
---

- TOC
{:toc}

## Aria

### aria-label

The [aria-label] attribute only works on elements that have a [role], either implicit (like with button, a, and so on), or added used the [role] attribute (where appropriate).

Also, as Adrian Roselli has pointed out, [aria-label] is often not translated by automatic translation software.

As an alternative, you can use a .visually-hidden class to include content that’s exposed to screen readers but hidden visually in the HTML.

```css
.visually-hidden {
 border: 0;
 clip: rect(0 0 0 0);
 height: 1px;
 overflow: hidden;
 padding: 0;
 position: absolute;
 white-space: nowrap;
 width: 1px;
}
```

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

## Shapes

[The Shapes of CSS](https://css-tricks.com/the-shapes-of-css/)

The `border-left` property is transparent, defines the left side.

The `border-right` property is transparent, defines the right side.

The top (or bottom) border is the actual triangle itself.

```css
#triangle-up {
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 100px solid red;
}
```
