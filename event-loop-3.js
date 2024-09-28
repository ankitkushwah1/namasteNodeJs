const fs = require("fs");

setImmediate(() => console.log("setInmmediate"));

setTimeout(() => console.log("Timer expired"), 0);

Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt", "utf8", () => {
  setTimeout(() => console.log("2nd timer"), 0);

  process.nextTick(() => console.log("2nd next Tick"));

  setImmediate(() => console.log(" 2nd setImmediate"));

  console.log("File Reading CB");
});

process.nextTick(() => console.log("nextTick"));

console.log("Last line of the file ");

// Last line of the file
// nextTick
// Promise
// Timer expired
// setImmediate
// File reading CB
// 2nd next Tick
// 2nd setImmediate
// 2nd timer
