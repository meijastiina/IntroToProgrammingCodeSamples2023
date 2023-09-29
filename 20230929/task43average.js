/**
 * 4.3 Task 3: Average
Create a program that asks user for number and
calculates the average for them. Numbers will be asked
till the user enters a letter.
Hint! You can check whether a value is numeric with
isNaN().

 */

// Create a variable for sum
let sum = 0;
// array
let enteredNumbers = [];

// Ask the user to enter a number
process.stdout.write("\nEnter a number: ");
// Read user input
process.stdin.on("data", function(inputFromUser){
    // Check the user input
    // Convert input form buffer to number
    let enteredNumber = Number(inputFromUser);
    // If user entered a number
    if (!isNaN(enteredNumber)) {
        // Print out user input
        process.stdout.write("\nEntered number is " + enteredNumber);
        // Add given number into the array
        enteredNumbers.push(enteredNumber);
        // Add given number into total sum
        sum += enteredNumber;
        // Ask the user to enter a number
        process.stdout.write("\nEnter a number: ");
    } else {
        // If user entered a letter
        // Stop asking for numbers
        // Calculate average
        // Loop through the array
        // for (let i = 0; i < enteredNumbers.length; i++) {
        //     // Add current number into total sum
        //     sum += enteredNumbers[i];
        // }
        // Print out the average
        process.stdout.write("\nAverage is " + sum / enteredNumbers.length);
        // Terminate program
        process.exit();
    }
})