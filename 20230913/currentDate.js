// Create a variable with the current date
let currentDate = new Date();
// Print out the current date
process.stdout.write(currentDate.toString());
// Print out current year
process.stdout.write("\nYear: " + currentDate.getFullYear() + '\n');