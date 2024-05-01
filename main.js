#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence to count the word and characters:"
    }
]);
const word = answers.sentence.trim().split(" ");
// Print the word to console
console.log(word);
// Print the word count
console.log(chalk.bgCyan(`Length of Word Count is: ${word.length}`));
// Remove spaces from the input string
const characters = answers.sentence.replace(/\s/g, '');
console.log(characters);
console.log(chalk.bgGray(`Length of characters Count without spaces is: ${characters.length}`));
