/**
 * 3.1 Task 1: Numbers from 0 to 20
Create a code that prints out numbers from 0 to 20. Use
while loop.

 */

// Create an iterator variable and set initial value to 0
let i = 0;
// Loop from 0-20
while (i <= 20) {
    // Print current number. Parameter for write method needs to be a string -> convert number to string with toString()
    process.stdout.write(i.toString());
    // increment iterator
    i++;
}