const fs = require("fs");

setImmediate(() => console.log("setImmediate"));

setTimeout(() => console.log("Timer expired"));

Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt", "utf-8", () => {
  console.log("File Reading CB");
});

process.nextTick(() => {
  process.nextTick(() => console.log("inner next tick"));
  console.log("nextTick");
});

console.log("Last Line of the file ");

// Last Line of the File
// nextTick
// inner next tick
// Promise
// Timer Expired
// SetImmediate
// File reading CB
