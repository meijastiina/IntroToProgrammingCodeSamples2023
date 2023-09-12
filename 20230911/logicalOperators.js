let x = 1;
let y = 10;
// x needs to be within range 1-10
if (x >= 1 && x <= 10 ) {
    process.stdout.write(x + " is within range 1-10");
}

// x needs to be outside range 1-10
if (x < 1 || x > 10 ) {
    process.stdout.write(x + " is outside range 1-10");
}

// x needs to be within and y outside range 1-10
if ((x >= 1 && x <= 10) && (y < 1 || y > 10)) {
    process.stdout.write("\n" + x + " is within range 1-10 and " + y + " is outside range 1-10");
}