---
layout: note
title: "Redwood"
date: 2024-1-2
categories: react, storybook
---

[ReddwoodJS](https://redwoodjs.com/) is a  React framework that combines

- GraphQL
- Prisma
- TypeScript
- Jest
- Storybook
- vite
- Babel

## Table of Contents

- TOC
{:toc}

## Nightmare install

Redwood has locked versions for full stack and deploy capabilities.

Used [nvm-windows](https://github.com/coreybutler/nvm-windows) to handle multiple versions of node (needed for [Redwood.js]({%  link _notes/redwood.md %}))

nvm use [version]

- 18.19.0
- 20.10.0

### Meta

```js
<MetaTags />// from tutorial
<MetaData /> // current
```

## Structure

- web/public assets available from build

## Running

```shell
yarn rw upgrade
```

## Storybook

```shell
yarn rw storybook
```

## Components

Generate a component

```shell
yarn rw g component [name]
```

### Redwood Components

Redwood comes with some built in components:

```jsx
<TextField />
<PasswordField />
// etc
```
