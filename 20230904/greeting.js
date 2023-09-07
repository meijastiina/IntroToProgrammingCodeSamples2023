/* Create a code to ask for user's name
and then print out a greeting.
*/

// Ask for user's name
process.stdout.write("What is your name?\n");
// Read user input
process.stdin.on("data", function(inputFromUser) {
    // Save user input to a variable
    let name = inputFromUser.toString().trim();
    // Print out a greeting with user's name
    process.stdout.write("Hello " + name + "!\n");
    // End program
    process.exit();
});
process.stdout.write("Hello unknown!\n");