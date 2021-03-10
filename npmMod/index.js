const chalk = require('chalk');
const validator = require('validator');

console.log(chalk.blue("Hello World"));
console.log(chalk.yellow.underline("Hello World"));

console.log(chalk.red.inverse("False"));

const res = validator.isEmail("abhi@gmail.com");
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));