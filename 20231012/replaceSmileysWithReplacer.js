/**
 * 5.5 Task 5 Smileys
Create a program that has the following functionality:
1. Ask the user for a string and store it in a variable.
2. replaceSmileys(text): Finds smileys in text and replaces them with corresponding text as
shown in the table below.
3. replaceSmileysWithReplacer(text, replacer): Finds smileys in text and replaces them
with replacer. You can use regular expression (https://developer.mozilla.org/enUS/docs/Web/JavaScript/Reference/Global_Objects/RegExp) for this.
 */

// Harcoded replacer
const replacer = "**";

// Ask user to enter a string
process.stdout.write("Please enter a string: ");

// Read user input
process.stdin.on("data", function(inputFromUser){
    // Store user input in a variable
    let stringToReplace = inputFromUser.toString();
    // Print out the string after calling the function to replace smileys
    process.stdout.write(replaceSmileysWithReplacer(stringToReplace, replacer));
    // End program
    process.exit();
})

function replaceSmileysWithReplacer(text, replacer) {
    // Create regexp
    let regexp = /[;:][)(]|<3/g;
    // Create a new variable with replaced string
    let newString = text.replace(regexp, replacer);
    return newString;
}