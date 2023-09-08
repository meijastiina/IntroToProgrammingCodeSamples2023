let tmp = 1;
process.stdout.write("Original value: " + tmp +" \n");
tmp++;
process.stdout.write("Value after tmp++: " + tmp +" \n");
process.stdout.write("Value in the same line tmp++: " + tmp++ +" \n");
process.stdout.write("Value in the same line ++tmp: " + ++tmp +" \n");