const crypto = require("crypto");

console.log("Hellow World");

var a = 1078698;
var b = 20968;

//pbkdf2 Password Base Key Derivative Function

crypto.pbkdf2Sync("password", "salt", 5000000, 50, "sha512");
console.log("fisrt key generated");

setTimeout(() => {
  console.log("call me right now!!!");
}, 0); // it will only be called once call stack of main thread empty
//Async
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("second key is generated");
});

function multiplyFn(x, y) {
  const result = x * y;
  return result;
}

var c = multiplyFn(a, b);
console.log("Mulitplication result is :", c);
