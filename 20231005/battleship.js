/**
 * 4.6 Task 6: Battleship
Create a 5x5 Battleship game using a multidimensional array. Use asterisks to mark the ships. Ask the user
for coordinates to shoot and give feedback to the user whether they hit a ship or not. Keep asking for as
long as there are ships left. Keep count of how many shots the player needed.

    0   1   2   3   4
0   *   -   -   -   -
1   -   -   -   -   -   
2   -   -   -   -   -
3   -   -   -   -   -
4   -   -   -   -   -
 */

// Create the board array
let board = [];

// Let's initialize the board 
for ( let i = 0; i < 5; i++ ) {
    board[i] = new Array('-');
    for ( let j = 0; j < 5; j++ ) {
        board[i][j] = '-';
    }
}

// Set the ships
board[0][0] = "*";

// FOR TESTING PURPOSES: print out the board
console.table(board);

// Ask the user for coordinates
process.stdout.write("\nPlease enter coordinates, separated by space: ");

// Read user input
process.stdin.on("data", function(inputFromUser){
    // Create variables for coordinates
    let userInput = inputFromUser.toString().trim().split(" "); // toString() converts into a string -> we can use string methods, trim() will get rid off whitespace (enter key), split() is used to create an array of the different parts of the user input
    let x = userInput[0];
    let y = userInput[1];

    // FOR TESTING PURPOSES: print out user input
    process.stdout.write("\nGiven coordinates: " + inputFromUser);
    process.stdout.write("\nX: " + x);
    process.stdout.write("\nY: " + y);
    // Check if user hit or missed
    if ( board[x][y] == "*" ) {
        // A hit!
    } else {
        // A miss!
    }
})