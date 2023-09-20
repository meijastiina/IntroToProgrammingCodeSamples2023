/**
 * .6 Task 6: Palindrome
Ask the user to give a string and then check if it’s a palindrome
(a word, phrase, or sequence that reads the same backwards
as forwards, e.g. madam or nurses run) or not. Use loops to
solve this.
Note: What happens if madam was spelt with a capital letter?
 */

// 1. Ask the user to give a string
process.stdout.write("Enter a string: ");
// Read user input
process.stdin.on("data", function (inputFromUser) {
    // Save user input into a variable
    let userInput = inputFromUser.toString().trim();
    // Loop through the string
    for (let i = 0; i < userInput.length; i++) {
        process.stdout.write("Char in index " + i + " is " + userInput.charAt(i) + "\n");
    }
    // Loop through the string backwards
    for (let i = userInput.length-1; i >= 0; i--) {
        process.stdout.write("Char in index " + i + " is " + userInput.charAt(i) + "\n");
    }
});