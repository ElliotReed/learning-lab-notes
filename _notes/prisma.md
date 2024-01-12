---
layout: note
title: "Prisma"
date: 2024-1-2
categories: orm
---

- TOC
{:toc}

GraphQL's SDL syntax requires an extra `!` when a field is required. Remember: schema.prisma syntax requires an extra `?` character when a field is not required.

# schema.prisma

Example:

```js
datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

generator client {
  provider      = "prisma-client-js"
  binaryTargets = "native"
}

model Post {
  id        Int       @id @default(autoincrement())
  title     String
  body      String
  comments  Comment[]
  createdAt DateTime  @default(now())
}

model Contact {
  id        Int      @id @default(autoincrement())
  name      String
  email     String
  message   String
  createdAt DateTime @default(now())
}

model User {
  id                  Int       @id @default(autoincrement())
  name                String?
  email               String    @unique
  hashedPassword      String
  salt                String
  resetToken          String?
  resetTokenExpiresAt DateTime?
}

model Comment {
  id        Int      @id @default(autoincrement())
  name      String
  body      String
  post      Post     @relation(fields: [postId], references: [id])
  postId    Int
  createdAt DateTime @default(now())
}
```

### Relation

Comment has a relation to Post:

- post which has a type of Post and a special @relation keyword that tells Prisma how to connect a Comment to a Post. In this case the field postId references the field id in Post

- postId is just a regular Int column which contains the id of the Post that this comment is referencing

This gives us a classic database model:

```mermaid
┌───────────┐       ┌───────────┐
│   Post    │       │  Comment  │
├───────────┤       ├───────────┤
│ id        │───┐   │ id        │
│ title     │   │   │ name      │
│ body      │   │   │ body      │
│ createdAt │   └──<│ postId    │
└───────────┘       │ createdAt │
                    └───────────┘
```

When you query for a Comment using Prisma you can get access to the attached Post using that name:

```js
db.comment.findUnique({ where: { id: 1 }}).post()
```

Prisma also added a convenience comments field to Post which gives us the same capability in reverse:

```js
db.post.findUnique({ where: { id: 1 }}).comments()
```
