require("./xyz.js"); // one module into another
const util = require("node:util");
// const { x, calculateSum } = require("./calculate/sum.js"); // one module into another
// const { calculateMultiply } = require("./calculate/multiply.js"); // one module into another
// import { x, calculateSum } from "./sum.js";
const data = require("./data.json");
const { calculateMultiply, calculateSum } = require("./calculate");
var name = "Namaste NodeJs";

var a = 10;
var b = 20;
// var x = 100;
calculateSum(a, b);
calculateMultiply(a, b);
console.log(JSON.stringify(data));
