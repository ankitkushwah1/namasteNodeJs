// recquire("./path")
// All the code of the module is wrapped inside a function(IIFE)

//IIFE - Immediately Invoked Function Expression

(function (module, require) {
  require();
  // All code of the module runs inside here
  function calculateMultiply(a, b) {
    const result = a * b;
    console.log(result);
  }

  module.exports = { calculateMultiply };
})((module.exports = {}));
