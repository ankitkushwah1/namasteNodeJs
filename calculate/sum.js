//Modules protectes their variable and functions from leaking

// console.log("sum module Executed");
// z = "Hellow World";
// var x = "Hellow World";
function calculateSum(a, b) {
  const sum = a + b;
  console.log(sum);
}
// console.log(module.exports);
module.exports = { calculateSum };
// module.exports.x = x;
// module.exports.calculateSum = calculateSum;
