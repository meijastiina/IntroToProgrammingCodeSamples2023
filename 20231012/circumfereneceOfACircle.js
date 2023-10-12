/**
 * 5.4 Task 4 Circumference of a Circle
Create a program that calculates the circumference of a circle when radius is given (circumference = 2 * π *
radius). Call this method three times with different parameters and print out the results.
 */

// Set radius
let radius = 6;
// Call function
process.stdout.write("\nCircumference of a circle with radius " + radius + " is " + calculateCircumferenceOfACircle(radius));
// Set radius
radius = 60;
// Call function
process.stdout.write("\nCircumference is " + calculateCircumferenceOfACircle(radius));
// Set radius
radius = 6005;
// Call function
process.stdout.write("\nCircumference of a circle with radius " + radius + " is " + calculateCircumferenceOfACircle(radius));
/** Function to calculate circumference of a circle
 * Parameters
 * - radius
 * Return value
 * - circumference
 **/
function calculateCircumferenceOfACircle(radius) {
    // Calculate circumference
    let circumference =  2 * Math.PI * radius;
    return circumference;
}