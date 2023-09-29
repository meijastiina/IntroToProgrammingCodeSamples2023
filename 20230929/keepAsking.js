// Ask the user to enter a number
process.stdout.write("\nEnter a number: ");
// Read in user input
process.stdin.on("data", function(userInput){
    // Let's get rid off the whitespace
    let givenNumber = userInput.toString().trim();
    // Keep on asking for as long as the user enters anything but a zero
    // If user enters anything but a zero
    if ( givenNumber != "0") {
        // Ask the user to enter another number
        process.stdout.write("\nEnter a number: ");
    } else {
    // If user enters a zero
        // Stop asking
        process.exit();
    }
})
