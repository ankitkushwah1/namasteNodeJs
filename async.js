const fs = require("fs");
const https = require("https");

console.log("Hellow World");

var a = 1078698;
var b = 20986;

//synchronous
fs.readFileSync("./file.txt", "utf-8");
console.log("file read sync");

https.get("https://dummyjson.com/products/1", (res) => {
  console.log("Fetched Data Sucessfully");
});

setTimeout(() => {
  console.log("setTimout called after 5 second ");
}, 5000);

//Async Function
fs.readFile("./file.txt", "utf-8", (err, data) => {
  console.log("file Data: ", data);
});

function multiplyFn(x, y) {
  const result = x * y;
  return result;
}
var c = multiplyFn(a, b);
console.log("Multilication result is :", c);
