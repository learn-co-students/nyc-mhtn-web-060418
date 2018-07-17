// Functions (in JS functions are objects. Callable objects)
// JS has First-class functions support (from MDN...)
// A programming language is said to have First-class functions when functions
// in that language are treated like any other variable. For example, in such a
// language, a function can be passed as an argument to other functions, can be
// returned by another function and can be assigned as a value to a variable.

// function declaration
// function declaration MDN article: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function
function runMeRightAway() { console.log(`Welcome to JS from a function declaration`) }

// This returns a reference to a the runMeRightAway function
runMeRightAway

// add () to invoke the function
runMeRightAway()

// there is a very important distinction between a function definition (or reference) and a function invocation
// functions runMeRightAway() {} (or runMeRightAway) vs runMeRightAway()

var fnToRunLater = function () { console.log(`Welcome to JS from a function expression`) }
// function expression assigned to the fnToRunLater var variable (it will be a global variable)
// function expression MDN article: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function
// fnToRunLater is a global variable
// fnToRunLater points to a function expressions
// with an inferred name of `fnToRunLater`
// fnToRunLater() to invoke the function

// Objects
// Simple key-value pairs (think hashes in Ruby). The keys are strings (or Symbols),
// and the values are any data type, including other objects.
// JavaScript object basics: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics
var railsHero = {
    name: 'Graham',
    modules: ['one', 'two']
}

// Let's iterate over the rialsHero obj to write on the console the list of modules in which our
// rails hero helped us

// The code below is imperative
// this feels like a lot of noise. It includes the details of how to iterate over the railsHero.modules array

console.log(``) //add blank line
for (let i = 0; i < railsHero.modules.length; i++) {
    // this is the interesting part
    console.log(`${railsHero.name} helped us in modules ${railsHero.modules[i]}`)
    // imperative code can be more prone to errors since we are often re-declaring the details of something happens
}

function ourDuty() {
    var messages = [
        `Above all we are problem solvers. Before we write code we articulate how we intend to solve the problem (In our mind or to our rubber duck. The rubber duck way will always be more accurate)`,
        `Before we ask for assistance we...`,
        ``,
        `1. Double check we have articulated what we are trying to achieve`,
        `2. What are the steps required to achieve our desired outcome`,
        `3. What is the JS translations of our steps`,
        `4. What is the problem we are experiencing`,
        `5. The debugging steps we took (debugger / console.log)`,
        `6. Our assumptions on why the problem is happening`
]
    console.log(``) //add blank line
    for (let i = 0; i < messages.length; i++) {
        // this is the interesting part
        console.log(`${messages[i]}`)
        // imperative code can be more prone to errors since we are often re-declaring the details of something happens
    }

    console.log(``) //add blank line
    console.log(`We pledge to do the job and use console.log and debugger`)
    console.log(`console.log reference: https://developer.mozilla.org/en-US/docs/Web/API/Console/log`)
    console.log(`debugger reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger`)
}

ourDuty()
