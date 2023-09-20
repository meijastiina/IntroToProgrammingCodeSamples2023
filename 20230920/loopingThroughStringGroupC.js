/**
 * 3.3 Task 3: Looping through Strings
Create a program with the following functionality:
1. Ask the user to enter a string.
2. Loop through the string and print out the string letter by letter saying “1.
character is [first letter of given string.]”
Hint! You might need the following String methods: charAt() and trim() and
property length. Check them out in documentation.

 */
// Ask user to enter a string
process.stdout.write("Please enter a string: ");
// Read in user input
process.stdin.on("data", function(inputFromUser){
    // Save user input in a variable
    let givenString = inputFromUser.toString().trim();
    // Loop through string
    for ( let i = 0; i < givenString.length; i++) {
        // Print out current character
        process.stdout.write(i + 1 + ". character is " + givenString.charAt(i) + "\n");
    }
});