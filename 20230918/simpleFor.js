// Print out numbers from 0 to 10
for ( let i = 0; i <= 10; i++) {
    // Print out current number
    process.stdout.write(i.toString());
}
// Print out a new line
process.stdout.write("\n");
// Print out numbers from 10 to 0
for ( let i = 10; i >= 0; i--) {
    // Print out current number
    process.stdout.write(i.toString());
}