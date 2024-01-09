---
layout: note
title: "Redwood"
date: 2024-1-2
categories: react, storybook, prisma
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

## Recipies

- Blog

  1. Generate the homepage
  2. Generate the blog layout
  3. Define the database schema
  4. Run migrations to update the database and create a table
  5. Scaffold a CRUD interface to the database table
  6. Create a cell to load the data and take care of loading/empty/failure/success states
  7. Add the cell to the page

## Global

### Commands

```shell
yarn rw dev
```

```shell
yarn rw upgrade
```

## Web

### Public

- web/public assets available from build

### Router

The router will attempt to match the current URL to each route in turn, and only render those with a matching path. The only exception to this is the notfound route, which can be placed anywhere in the list and only matches when no other routes do.
The notfound route can't be nested in a Set

Routes.ts

```js
import { Router, Route } from '@redwoodjs/router'

const Routes = () => (
  <Router>
    <Set wrap={[BlogContext, BlogLayout]}>
      <Route path="/" page={HomePage} name="home" />
      <Route path="/about" page={AboutPage} name="about" />
      <Route path="/contact" page={ContactPage} name="contact" />
      <Route path="/blog-post/{id:Int}" page={BlogPostPage} name="blogPost" />
    </Set>
    <PrivateSet unauthenticated="home">
      <Route path="/admin" page={AdminPage} name="admin" />
    </PrivateSet>
  </Router>
)

export default Routes
```

Private Routes

```ts
<Router>
  <PrivateSet unauthenticated="forbidden" roles={['admin', 'editor', 'publisher']}>
    <Route path="/admin/posts/{id:Int}/edit" page={EditPostPage} name="editPost" />
  </PrivateSet>

  <Route path="/forbidden" page={ForbiddenPage} name="forbidden" />
</Router>
```

### Components

Generate a component

```shell
yarn rw g component [name]
```

#### Redwood Components

Redwood comes with some built in components:

```jsx
<TextField />
<PasswordField />
// etc
```

## API

### Prisma

Use schema.prisma to define models.

```shell
yarn rw prisma migrate [database]
```

View with

```shell
yarn rw prisma studio
```

Generate CRUD

```shell
yarn rw g scaffold [table]
```

## Cells

```shell
yarn rw g cell [name]
```

## Typescript

### Types

When you have the dev server (via yarn rw dev) running, the CLI watches files for changes and triggers type generation automatically, but you can trigger it manually too by running:

```shell
yarn rw g types
```

## GraphQL

GraphQL implementation is built with [Apollo Client](https://www.apollographql.com/docs/react/) (on the client) and [GraphQL Yoga](https://www.graphql-yoga.com/) & [Envelop](https://www.envelop.dev/docs) (on the server)

## Storybook

```shell
yarn rw storybook
```
