// Create a simple function that:
// prints out text "Hello!"
function printHello() {
    process.stdout.write("Hello!");
}
// Call the function to test it.
printHello();

// Create a simple function that
// takes two numbers as input
function printSum(number1, number2) {
    // Calculates the sum of these two
    // prints out the result
    process.stdout.write("\n" + (number1 + number2));
}
// Call the function to test it.
let a = 1;
let b = 10
printSum(a, b);

// Create a simple function that
// takes two numbers as input
function getSum(number1, number2) {
    // Calculates the sum of these two
    // return the result
    return number1 + number2;
}
// Call the function to test it.
a = 10;
b = 100;
let sum = getSum(a, b);
process.stdout.write("\n" + sum);
process.stdout.write("\n" + getSum(20, 5));