#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import clipboardy from "clipboardy";
import { prompts } from "./prompts.js";

const promptNames = Object.keys(prompts);

console.log(chalk.blue.bold("\n🚀 Claude Engineering Playbook CLI\n"));

const answer = await inquirer.prompt([
  {
    type: "list",
    name: "selected",
    message: "Choose a prompt template:",
    choices: promptNames
  }
]);

const selectedPrompt = prompts[answer.selected];

console.log(chalk.green("\n✅ Prompt copied to clipboard!\n"));

console.log(chalk.yellow(selectedPrompt));

await clipboardy.write(selectedPrompt);

console.log(chalk.gray("\nPaste it into Claude and replace placeholders.\n"));