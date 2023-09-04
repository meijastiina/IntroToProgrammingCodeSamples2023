/* This is code for theory lesson 4th sep 

*/
process.stdout.write("Hello console!\n");
// Create a variable named age and assign your own age to it using let keyword. Print the age to the console.
let age = 25;
process.stdout.write("Age is " + age + "\n"); 
age = 78;
process.stdout.write(age.toString() + "\n"); 

let courseName = "Intro to Programming";
let amountOfCredits = 5;
let startDate = "2020-09-01";
console.log("You are studying " + courseName + ". Course has started on " + startDate + " and it is worth " + amountOfCredits + " credits.");

let x = 5, y = 10, z = 15, sum;
sum = x + y; // 15
y - x; // 5
x * y; // 50
y / x; // 2
x % 2; // 1
x++; // 6
x--; // 4
console.log("X is " + x + ", Y is " + y + ", Z is " + z + ". Sum of X and Y is " + sum + "." + " Y minus X is " + (y - x) + "." + " X multiplied by Y is " + (x * y) + "." + " Y divided by X is " + (y / x) + "." + " X modulo 2 is " + (x % 2) + "." + " X is " + x + " and after incrementing it is " + (x++) + "." + " X is " + x + " and after decrementing it is " + (x--) + ".");