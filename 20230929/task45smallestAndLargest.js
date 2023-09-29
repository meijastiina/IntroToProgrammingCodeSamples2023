/**
 * 4.5 Task 5: Smallest and Largest with Random Numbers
1. Create a program with an 100 item array that is initialized with random numbers of range 0-1000.
• To create random numbers you can use Math.random () function.
2. Find the largest value in the array using a loop and print it out.
3. Find the smallest value in the array using a loop and print it out. 
 */

// Create an array 
let randomNumbers = [];
// initialise 100 items 
for ( let i = 0; i < 100; i++ ) {
    // add a new item in the array
    randomNumbers.push(Math.floor(Math.random() * 1001));
}
// Print out the array
process.stdout.write(randomNumbers.toString());
// Find the largest value in the array using a loop and print it out.
// Create a variable for the largest number
let largestNumber = randomNumbers[0];
// Loop through the array
for ( let i = 1; i < randomNumbers.length; i++ ) {
    // Check if current number is greater than the value in variable largestNumber
    if (randomNumbers[i] > largestNumber ) {
        // Set current number to be largestNumber
        largestNumber = randomNumbers[i];
    }
}
// Print out the largest number
process.stdout.write("\nLargest number is " + largestNumber);
// Print out the largest number using array methods
process.stdout.write("\nLargest number is " + Math.max(...randomNumbers));