---
layout: post
title: "Tanstack React Query"
date: 2023-12-07
categories: developer
---

## library

<https://tanstack.com/query/latest>

## installation

- v3

```node
npm i react-query react-query-devtools
```

- v4

```node
npm i @tanstack/react-query @tanstack/react-query-devtools
```

## setup

- wrap *provider* at highest use level (probably around \<App/>)

```javascript
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
```

```javascript
const queryClient = new QueryClient();

<QueryClientProvider client={queryClient}>
  <App />
</QueryClientProvider>
```

### devtools

```javascript
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
```

added next to \<App />

```javascript
<QueryClientProvider client={queryClient}>
  <App />
  <ReactQueryDevtools />
</QueryClientProvider>
```

## usage

- useQuery to get, useMutation to post

```javascript
import { useQuery, useMutation } from "@tanstack/react-query";
```

### useQuery()

 @params

```javascript
{
  queryKey: ["key"],
  queryFn: () => Promise,
}
```

### useMutation()

 @params

```javascript
{
  mutationFn: () => Promise,
}
```
