let testString = "JavaScript is Fun!";
if (testString.includes("fun")) {
    process.stdout.write("Yay!");
} else {
    process.stdout.write("Boo!");
}

process.stdout.write("Word \"fun\" starts at index " + testString.toLowerCase().indexOf("fun"));
// Let's replace fun with boring
process.stdout.write("\n" + testString.replace("Fun", "boring"));