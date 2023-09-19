/**
 * 3.3 Task 3: Looping through Strings
Create a program with the following functionality:
1. Ask the user to enter a string.
2. Loop through the string and print out the string letter by letter saying “1.
character is [first letter of given string.]”
Hint! You might need the following String methods: charAt() and trim() and
property length. Check them out in documentation.

 */

// Prompt for string
process.stdout.write("Enter a string:\n");
// Read user input
process.stdin.on('data', function (data) {
    // Save user input to variable
    let string = data.toString().trim();
    // Loop through string
    for(let i = 0; i < string.length; i++) {
        // Print out string letter by letter
        process.stdout.write((i + 1) + ". character is " + string.charAt(i) + "\n");
    }
});