// Ask the user to input a number
process.stdout.write("Enter a number: ");
// Create an event listener for user input
process.stdin.on("data", function(inputFromUser) {
    // Read the user input into a variable
    let number = Number(inputFromUser);
    // Check if number is 0
    switch (number) {
        case 0:
            // Print out "You entered zero"
            process.stdout.write("You entered zero");
            break;
        default:
        // If it is not 0
            // Print out "You entered something else"
            process.stdout.write("You entered something else");
    }
    // Exit the program
    process.exit();
});