/**
 * 2.1 Task 1: Largest Number v.0.1
 * Create a simple program in which the user is asked to give two numbers and then
 * your program prints out which one of them is largest.
 */

// Ask user to give two numbers
process.stdout.write("Please enter two numbers separated by spaces: ");
// Read user input 
process.stdin.on("data", function(inputFromUser) {
    // Create a variable to store user input
    let userInput = inputFromUser.toString().trim();
    // Split the user input into two numbers
    let numbers = userInput.split(" ");
    // Check which one is largest
    if ( numbers[0] > numbers[1] ) { 
            // Print out the largest number
            process.stdout.write("The largest number is " + numbers[0] + "\n");
    } else {
            // Print out the largest number
            process.stdout.write("The largest number is " + numbers[1] + "\n");
    }
    // End program
    process.exit();
});