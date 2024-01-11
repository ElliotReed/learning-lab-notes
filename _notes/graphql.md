---
layout: note
title: "GraphQL"
categories: database
---

- TOC
{:toc}

GraphQL's SDL syntax requires an extra `!` when a field is required,an extra `?` character when a field is not required.

## Queries

Write a query

```ts
graphql`
  query {
    site {
      siteMetadata {
        author
        description
        siteUrl
        title
      }
    }
  }
`
```
