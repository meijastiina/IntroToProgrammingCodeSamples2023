let a = Math.ceil(0.60);
let b = Math.ceil(0.40);
let c = Math.ceil(5);
let d = Math.ceil(5.1);
let e = Math.ceil(-5.1);
let f = Math.ceil(-5.9);

process.stdout.write("\nCEIL")
process.stdout.write("\n0.6 - " + a);
process.stdout.write("\n0.4 - " + b);
process.stdout.write("\n5 - " + c);
process.stdout.write("\n5.1 - " + d);
process.stdout.write("\n-5.1 - " + e);
process.stdout.write("\n-5.9 - " + f);

process.stdout.write("\nFLOOR")
a = Math.floor(0.60);
b = Math.floor(0.40);
c = Math.floor(5);
d = Math.floor(5.1);
e = Math.floor(-5.1);
f = Math.floor(-5.9);
process.stdout.write("\n0.6 - " + a);
process.stdout.write("\n0.4 - " + b);
process.stdout.write("\n5 - " + c);
process.stdout.write("\n5.1 - " + d);
process.stdout.write("\n-5.1 - " + e);
process.stdout.write("\n-5.9 - " + f);

process.stdout.write("\nROUND")
a = Math.round(0.60);
b = Math.round(0.40);
c = Math.round(5);
d = Math.round(5.1);
e = Math.round(-5.1);
f = Math.round(-5.9);
process.stdout.write("\n0.6 - " + a);
process.stdout.write("\n0.4 - " + b);
process.stdout.write("\n5 - " + c);
process.stdout.write("\n5.1 - " + d);
process.stdout.write("\n-5.1 - " + e);
process.stdout.write("\n-5.9 - " + f);

let x = Math.random() * 10;
process.stdout.write("\nRandom number: " + Math.round(x));

let number = 1.123465;
process.stdout.write("\nNumber " + number + " with two decimals is " + number.toFixed(2));
