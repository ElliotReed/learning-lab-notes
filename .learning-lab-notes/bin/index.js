#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from 'node:url';
import inquirer from "inquirer";

import { capitalize, getCurrentDateString } from "./utils/functions.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function help() {
  const helpText = `
Learning Lab Notes CLI:

Options:
  -h, --help  print help
`
  return helpText;
}

function noteTemplate(answer) {
  const { title, categories } = answer;

  const noteContent =
    `---
layout: note
date: ${getCurrentDateString()}
title: "${capitalize(title)}"
categories: ["${categories.toLowerCase()}"]
---

- toc
{:toc}
`
  return noteContent;
}

(function () {
  const args = process.argv.slice(2);

  if (args.includes('-h') || args.includes('--help')) {
    console.log(help());
  }

  if (args.includes('-n') || args.includes('--note')) {
    inquirer.prompt([{
      type: 'input',
      message: 'What is the note title?',
      name: 'title',
    }, {
      type: "input",
      message: "What is/are the categories? [used in url]",
      name: "categories",
    }]).then(answer => {
      const filename = answer.title.toLowerCase().split(' ').join('-') + '.md';
      fs.writeFile(path.join('.', '_notes', filename), noteTemplate(answer), 'utf-8', (err) => {
        if (err) {
          console.log('err: ', err);
        }
        console.log('created');
        console.log('__dirname: ', __dirname);
      });
    });
  }


})();