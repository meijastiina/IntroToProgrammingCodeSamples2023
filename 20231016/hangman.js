/** Hangman game */

// Hardcoded secret word
const SECRET_WORD = "JavaScript";
// Create a variable for current word
let currentWord = "";
let currentWordArray = new Array();
// Initialize current word with asterisks
for ( let i = 0; i < SECRET_WORD.length; i++ ) {
    currentWord = currentWord + "*";
    currentWordArray.push("*");
}

// Print out the current word
process.stdout.write("\nWord to guess: " + currentWord);
// Print out the current word (array)
process.stdout.write("\nWord to guess (array implementation): " + currentWordArray.join(""));
// Ask the user to guess a letter
process.stdout.write("\nGuess a letter: ");

// Read in user input
process.stdin.on("data", function(userInput){
    // Let's convert user input into a string
    let guessedLetter = userInput.toString().trim();
    // Print out user's guess
    process.stdout.write("\nYour guess: " + guessedLetter);
    // Check if the entered letter exists in secret word
    if ( SECRET_WORD.includes(guessedLetter)) {
        process.stdout.write("\nCorrect!");
        // Find the index where guessed letter exists in the secret word
        let position = SECRET_WORD.indexOf(guessedLetter);
        // J a v a S c r i p t
        // 0 1 2 3 4 5 6 7 8 9
        // Replace the guessed letter in the current word
        currentWord = currentWord.substring(0, position) + guessedLetter + currentWord.substring(position + 1, currentWord.length);
        // Replace the guessed letter in the current word (array implementation)
        currentWordArray[position] = guessedLetter;
        // Print out the current word
        process.stdout.write("\nWord to guess: " + currentWord + "\n");
        // Print out the current word (array)
        process.stdout.write("\nWord to guess (array implementation): " + currentWordArray.join("") + "\n");
    } else {
        process.stdout.write("\nLetter not found in the secret word.");
    }
    // Print out secret word so that all letters already guessed are shown and other letters are marked with asterisks JavaScript -> user has guessed a -> *a*a******

    // Terminate the program
    process.exit();
})