/**
 * 3.3 Task 3: Looping through Strings
Create a program with the following functionality:
1. Ask the user to enter a string.
2. Loop through the string and print out the string letter by letter saying “1.
character is [first letter of given string.]”
Hint! You might need the following String methods: charAt() and trim() and
property length. Check them out in documentation.
 */

// 1. Ask the user to enter a string.
process.stdout.write("Enter a string: ");
// Read user input
process.stdin.on("data", function (inputFromUser) {
    // Save user input into a variable
    let userInput = inputFromUser.toString().trim();
    // Loop through the string
    for (let i = 0; i < userInput.length; i++) {
        // Print out the string letter by letter saying “1. character is [first letter of given string.]”
        process.stdout.write((i + 1) + ". character is " + userInput.charAt(i) + "\n");
    }
});