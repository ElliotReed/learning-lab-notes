---
layout: note
title: "Nodejs"
categories: nodejs
---

## Table of Contents

- TOC
{:toc}

## Installed Versions

Used [nvm-windows](https://github.com/coreybutler/nvm-windows) to handle multiple versions of node (needed for [Redwood.js]({%  link _notes/redwood.md %))

nvm use [version]

- 18.19.0
- 20.10.0

## Errors

> Fix the upstream dependency conflict, or retry npm ERR! this command with --force or --legacy-peer-deps

This is a package conflict, you can pin the version to the specified version, or run with the flags to suppess the warnings. This may cause unintended results.
