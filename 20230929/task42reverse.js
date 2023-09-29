/**
 * 4.2 Task 2: Reverse
Create a program that keeps asking the user to input
numbers. These numbers are stored in an array. Keep asking
till zero is entered. After that the numbers are printed out in
a reverse order. Don’t use array methods for this but only
simple loops.
 */
// Create a blank array for user input
let numberArray = [];

// Ask for user input
process.stdout.write("\nEnter a number: ");
// Read the entered number
process.stdin.on("data", function(inputFromUser){
    // Convert input into a number
    let givenNumber = Number(inputFromUser);
    // Check if user entered a zero
    if (givenNumber !== 0) {
        // not a zero -> keep asking
        process.stdout.write("\nEntered number is " + givenNumber);
        process.stdout.write("\nEnter a number: ");
        // save in the array
        numberArray.push(givenNumber);
    } else {
        // a zero -> stop
        // print out numbers in reverse order
        process.stdout.write("\nReverse order ");
        for (let i = numberArray.length - 1; i >= 0; i--) {
            // Print out current number
            process.stdout.write(numberArray[i] + " ");
        }
        process.stdout.write("\n");

        process.stdout.write("\nReverse order with array methods " + numberArray.reverse().join(" ") + "\n");
        // terminate program
        process.exit();
    }
})
