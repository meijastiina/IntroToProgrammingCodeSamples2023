// Let's include util module
const util = require("util");
let number1 = 5.123456789;
let number2 = 10;

process.stdout.write(util.format("\nFirst number is %d and second number is %d.\n", number1.toFixed(2),number2));


