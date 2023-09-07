process.stdout.write("please type a number:");
process.stdin.on("data", (sNum) => {
  //   let util = require("util");
  //   process.stdout.write(util.format(sNum));
  console.log(sNum.toString());
  process.exit();
});
