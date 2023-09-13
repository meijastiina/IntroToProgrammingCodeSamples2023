/**
 * 2.2 Task 2: Largest Number v.0.2
 * Create a simple program in which the user is asked to give three numbers and then
 * your program prints out which one of them is largest.
 */

// Ask user to give three numbers
process.stdout.write("Please enter three numbers separated by spaces: ");
// Read user input 
process.stdin.on("data", function(inputFromUser) {
    // Create a variable to store user input
    let userInput = inputFromUser.toString().trim();
    // Split the user input into three numbers
    let numbers = userInput.split(" ");
    // Check which one is largest
    // Create a temorary variable to store the largest number
    // First, assume that the first number is the largest
    let largest = numbers[0];
    // Check if the second number is larger than the first 
    if ( numbers[1] > largest ) { 
            // Set the second number as the largest
            largest = numbers[1];
    } 
    // Check if the third number is larger than the largest
    if ( numbers[2] > largest ) {
            // Set the third number as the largest
            largest = numbers[2];
    }
    process.stdout.write("The largest number is " + largest + "\n");
    // End program
    process.exit();
});