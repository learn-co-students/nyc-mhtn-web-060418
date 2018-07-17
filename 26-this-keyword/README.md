# This

Code associated to the `JS this` lecture

## Objectives

* Answer Dan Abramov's [question](https://twitter.com/dan_abramov/status/790858537513656320)
* Leverage Ruby's `self` to frame our JS `this` conversation (will get us 40% of the way)
* Recognize and value the differences
* Answer why instrumenting `this` in even a thing in JS?
* What is `this` in the context of JS
* When is the value of `this` set? When it's **NOT** set?
* The JS environment rules that govern `this`
    1.  `this` within a function called with the keyword `new` in front will point to the newly created object
    1.  `this` within a function called with apply/call/bind will be the object passed as the first parameter
    1.  `this` within a function called with a context (i.e. Object.method()) will be the context/object.
    1.  `this` for a simple function call (fn()) will be the window (browser) or the global object (Node). If we are in strict mode this will be undefined for simple function calls
* How do we instrument `this`
* P.S. arrow function, strict mode (class definitions) and arrow functions as methods

## Resources
* [MDN `this` article](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
* [Lecture REPL](https://repl.it/repls/SlipperyColossalNumerators)
