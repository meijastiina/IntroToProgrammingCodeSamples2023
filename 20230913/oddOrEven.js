/**
 * 2.3 Task 3: Even or Odd
 * Write a simple program to figure out whether a given number is
 * even or odd.
 * Hint! You can use modulo (%) to achieve this.
 */
// Ask user to give a number
process.stdout.write("Please enter a number: ");
// Read user input
process.stdin.on("data", function(inputFromUser) {
    // Check if the number is even
    if ( inputFromUser % 2 == 0 ) {
        // Print out the number is even
        process.stdout.write("The number is even\n");
    } else {
    // If it is not even
        // Print out the number is odd
        process.stdout.write("The number is odd\n");
    }
    // End program
    process.exit();
});