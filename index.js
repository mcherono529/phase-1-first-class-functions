// Function that receives a callback and calls it
function receivesAFunction(callback) {
    callback();
  }
  
  // Function that returns a named function
  function returnsANamedFunction() {
    return function namedFunction() {
      // Function body (can be empty)
    };
  }
  
  // Function that returns an anonymous function
  function returnsAnAnonymousFunction() {
    return function() {
      // Function body (can be empty)
    };
  }
  
  // Export the functions if needed for testing
  module.exports = { receivesAFunction, returnsANamedFunction, returnsAnAnonymousFunction };
  