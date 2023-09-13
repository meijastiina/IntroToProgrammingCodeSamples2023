/**
 * 2.4 Task 4: Yes or No
 * Write a simple program that asks user a simple yes or no question and prints out a
 * corresponding message. Remember to also handle invalid input.
 */

// Ask user a yes or no question
process.stdout.write("Do you like JavaScript? (y/n) ");
// Read user input
process.stdin.on("data", function(inputFromUser) {
    // Create a variable to store user input
    let answer = inputFromUser.toString().trim();
    // Check if the user answered yes
    if ( answer == "y" ) {
        // Print out a corresponding message
        process.stdout.write("Yay!\n");
    // Check if the user answered no   
    } else if ( answer == "n" ) {
        // Print out a corresponding message
        process.stdout.write("Boo!\n");
    } else {
        // Print out a corresponding message
        process.stdout.write("Invalid input!\n");
    }
    // End program
    process.exit();
});