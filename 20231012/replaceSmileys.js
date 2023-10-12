/**
 * 5.5 Task 5 Smileys
Create a program that has the following functionality:
1. Ask the user for a string and store it in a variable.
2. replaceSmileys(text): Finds smileys in text and replaces them with corresponding text as
shown in the table below.

 */

// Ask user to enter a string
process.stdout.write("Please enter a string: ");

// Read user input
process.stdin.on("data", function(inputFromUser){
    // Store user input in a variable
    let stringToReplace = inputFromUser.toString();
    // Replace :) with *smiling*
    let newString = stringToReplace.replace(":)", "*smiling*");
    // Print out the string
    process.stdout.write(newString);
    // End program
    process.exit();
})