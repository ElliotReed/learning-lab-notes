---
layout: note
title: "Database"
date: 2024-1-8
categories: database
---

- TOC
{:toc}

## Id

[Dev.to article](https://dev.to/harshhhdev/uuidguid-cuid-nanoid-whats-the-difference-5dj1)

### Sequence

Short and sweet, integer.

### UUID

Universally unique identifier, is a 128 bit label. The probability that an ID will be replicated *ANYWHERE* else is near zero.

123e4567-e89b-12d3-a456-426614174000.

They take up a lot of space in a URL: api.planetscale.com/v1/deploy-requests/7cb776c5-8c12-4b1a-84aa-9941b815d873

### CUID

It found no collisions on 100 million iterations!

Prisma ORM, the Prisma schema (in relational databases) can generate both either a CUID or UUID.

### NanoID

tiny (only 130 bytes minified and gzipped), fast (x2 faster than UUID), safe, short, and portable.

With an ID length of 15 characters (pretty short and sweet), and a generation of 1,000 IDs every hour, it'll take a mind boggling 569 thousand years for it to have a 1% probability of a single collision. Now if we switch that to 1000 IDs being generated every single second, it'd still take around 158 for it to have a 1% probability of at least a single collision.

 > For most cases, I believe the best option is NanoID due to the fact that it's insanely customisable whilst being performant. It's slowly but surely taking over uuidv4, if we look at this npm trends comparison between the three. In the context of Prisma, the built-in CUID is perhaps the best choice.
