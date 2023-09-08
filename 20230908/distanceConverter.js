/*
1.3 Task 3: Distance Converter version 0.2
Extend the functionality from the previous task to:
1. Ask for the distance in meters.
2. Also convert the distance to following units:
o kilometers
o miles
o yards
o feet
o inches
o light years
3. Show numbers with three decimals.
Hint! If you want to align the results, you can use padStart() function to add empty spaces to make the
string equal length. (OPTIONAL)
*/

// 1. Ask for the distance in meters.
process.stdout.write("Please enter the distance in meters: ");
// Read user input
process.stdin.on("data", function (inputFromUser) {
    // Save user input in a variable
    let distanceInMeters = Number(inputFromUser);
    // Print out the distance in meters
    process.stdout.write("Distance in meters: " + distanceInMeters + "\n");
    // Convert the distance to kilometers
    let distanceInKilometers = distanceInMeters / 1000;
    // Print out the distance in kilometers
    process.stdout.write(distanceInKilometers.toFixed(3).padStart(15) + " kilometers"   + "\n");
    // Convert the distance to miles
    let distanceInMiles = distanceInKilometers * 0.621371;
    // Print out the distance in miles
    process.stdout.write(distanceInMiles.toFixed(3).padStart(15) + " miles"   + "\n");
    // End program
    process.exit();
});
