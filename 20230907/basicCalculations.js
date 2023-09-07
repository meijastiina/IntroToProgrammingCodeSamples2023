/* 1.4 Task 4: Basic Calculations
Create a simple program with the following functionality:
1. Ask for user to input a number.
2. Define a secret number.
3. Perform and print out basic calculations for that number with the secret
*/

// Ask for user to input a number.
process.stdout.write("Enter a number:\n");
// Read user input
process.stdin.on("data", function(inputFromUser) {
    // Save user input to a variable
    let givenInput = Number(inputFromUser.toString().trim());
    // Define a secret number.
    let secretNumber = 5;
    // Perform and print out basic calculations for that number with the secret
    // Calculate Sum
    let sum = secretNumber + givenInput;
    // Print out the sum
    process.stdout.write(secretNumber + " + " + givenInput + " = " + sum + "\n");
    // Calculate Difference
    let difference = secretNumber - givenInput;
    // Print out the difference
    process.stdout.write(secretNumber + " - " + givenInput + " = " + difference + "\n");
    // Calculate Product
    // Print out the product
    // Calculate Quotient
    // Print out the quotient
    // Calculate Remainder
    // Print out the remainder
    // Calculate Increment
    // Print out the increment
    // Calculate Decrement
    // Print out the decrement
    // End program
    process.exit();
});
