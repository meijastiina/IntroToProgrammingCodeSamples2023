// Create a JS array that has the following items: "banana", "apple", "kiwi", "orange".
let fruitSalad = ["banana", "apple", "kiwi", "orange", "grapefruit"];
// Print out "First item in the array is [first item]".
process.stdout.write("First item in the array is " + fruitSalad[0]);
// Loop through the array backwards 
for ( let i = fruitSalad.length - 1; i >= 0; i-- ) {
    // and print out the items.
    process.stdout.write("\n" + fruitSalad[i]);
}
// Add a new element pomegranate in the beginning of the array.
fruitSalad.push("pomegranate");
process.stdout.write("\n***********Item added************\n");
// Loop through the array 
for ( let i = 0; i < fruitSalad.length; i++ ) {
    // and print out the items.
    process.stdout.write("\n" + fruitSalad[i]);
}
// Add a new element watermelon in the end of the array.
fruitSalad.unshift("watermelon");
process.stdout.write("\n***********Item added************\n");
// Loop through the array 
for ( let i = 0; i < fruitSalad.length; i++ ) {
    // and print out the items.
    process.stdout.write("\n" + fruitSalad[i]);
}
// Sort the array in descending alphabetical order (z-a).
fruitSalad.sort().reverse();
process.stdout.write("\n***********Array sorted************\n");
// Loop through the array 
for ( let i = 0; i < fruitSalad.length; i++ ) {
    // and print out the items.
    process.stdout.write("\n" + fruitSalad[i]);
}