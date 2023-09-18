// Ask user to enter their name
process.stdout.write("Enter your name: ");
// Read user input
process.stdin.on("data", function (inputFromUser) {
    // Convert user input from Buffer to String
    let name = inputFromUser.toString().trim();
    // Repeat five times
    // Create iterator variable
    let i = 0;
    while (i < 5) {
        // Print given name
        process.stdout.write("\n" + name);
        // Increment iterator variable
        i++;
    }
    // End the program
    process.exit();
});