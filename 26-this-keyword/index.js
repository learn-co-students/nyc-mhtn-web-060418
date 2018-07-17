// `this` is the global scope is the `window` object (for the browser)
console.log(this);

// #4 Default rule:  in a simple function call this will point to the global object. (Unless we are in strict mode)
function consoleLogThis() {
  console.log(this);
}

consoleLogThis(); // `this` for simple function calls will point to the window

// #3 Function called on an object (fn will have a context) obj.fn()

var courseModule = {
  name: "JS",
  consoleLogThis: function consoleLogThis() {
    console.log(this.name);
  }
};

courseModule.consoleLogThis(); // when provided a context (function called on an object) `this` will point to the context (object in which it is called)
var directReferenceToAFunction = courseModule.consoleLogThis;
directReferenceToAFunction(); // this is a simple function now. `this` inside the consoleLogThis function will point to the window

// #2 Function called using apply or call (or bind which leveraged apply)
// We can fix the fact that we lost the reference to `this` in directReferenceToAFunction using call or apply
directReferenceToAFunction.apply(courseModule);
directReferenceToAFunction.call(courseModule);
directReferenceToAFunction.bind(courseModule)();
// call will receive function parameters as values separated by commas c(omma)all
// apply will receive function parameters as an array a(rray)pply

// #1 Function called by `new`
function Person(name) {
  this.name = name;
}
new Person("Laura"); // this inside a function used as a constructor will point to the newly created object passed in by new

// p.s. arrow function, strict mode and arrow functions as methods
// arrow functions do not have the concept about this. They will resolve `this` using the lexical scope. Meaning this will be what ever `this`
// was at the moment of definition
// in strict mode this will be undefined for simple function calls
// it does not make sense to use arrow functions as methods because they will bind to the lexical `this`
