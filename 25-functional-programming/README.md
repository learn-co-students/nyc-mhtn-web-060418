# Introduction to Functional programming

* Lecture objectives
    * Functional programming principles
    * Function composition patterns
    * Be aware of other approaches (Know more or less what the toolbox looks like)
* Prerequisites
    * First Class Functions
        * Store in variables
        * Pass as arguments to other functions (callbacks)
        * Return from other functions
    * Functions as return value
        * Closures
    * Functions vs () => {return "So may different ways and so many things implied"}
    * IIFE (iffy)
* Functional programming paradigm
    * Pure functions
        * Return a value
        * Given the same inputs, the function will always return the same output
            * Memoization
        * no side-effects
        * avoid shared state
        * avoid mutating state
        * does this program even exist?
            * Functional core
            * Side effects on perimeter
    * Function composition
        * Arguments
            * Manipulate arguments to build  a `unary` function
            * Point free style
        * General to specific
            * Partial application
            * Function composition
            * Currying
    * Higher-order functions
        * Higher Order Functions in JavaScript: A higher-order function is a function that can accept another function as a parameter and/or a function that returns another function.
        * Can be used for
            * Partial application
            * Composition
