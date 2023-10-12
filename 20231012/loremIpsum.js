/**
 * 
 * 5.2 Task 2 Lorem Ipsum
Create a method that prints out Lorem ipsum
sentence (”Lorem Ipsum dolor sit amet, consectetur
adipiscing elit. ”) ten times. Call this method.

 */

function printLoremIpsum() {
    // Repeat 10 times
    for ( let i = 0; i < 10; i++ ) {
        // Print out lorem ipsum
        process.stdout.write("\nLorem Ipsum dolor sit amet, consectetur adipiscing elit.");
    }
}

// Call the function
printLoremIpsum();