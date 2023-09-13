process.stdin.on('data', function (inputFromUser) {
    let numberString = inputFromUser.toString();
    let numberArray = numberString.split(' ');
    let number1 = parseInt(numberArray[0]);
    let number2 = parseInt(numberArray[1]);
    let number3 = parseInt(numberArray[2]);
    let largestNumber = number1;
    if (number2 > largestNumber) {
        largestNumber = number2;
    } 
    if (number3 > largestNumber) {
        largestNumber = number3;
    }

    process.stdout.write('The largest number is: ' + largestNumber + '\n');
    process.exit();
});