let numbers = [];
process.stdout.write("\n\nPlease enter a number (zero terminates the program): ");

process.stdin.on("data", function(inputFromUser) {
    let userInput = inputFromUser.toString().trim();
    
    if (userInput == 0) {
        let largest = findLargest(numbers);
        process.stdout.write("\nLargest number is " + largest + "\n");

        // Find the smallest value in the array using a loop and print it out
        let smallest = numbers[0];
        for (let i = 1; i < numbers.length; i++) {
            if (numbers[i] < smallest) {
                smallest = numbers[i];
            }
        }
        process.stdout.write("\Smallest number is " + smallest + "\n\n");
        process.exit();
    } else {
        // Add the number into array
        numbers.push(userInput);
        // Keep asking for numbers
        process.stdout.write("\n\nPlease enter a number (zero terminates the program): ");
    }
})

/**
 * Function to find largest
 */
function findLargest(numbers) {
    // Find the largest value in the array using a loop and print it out
    let largest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }
    return largest;
}