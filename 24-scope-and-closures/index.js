// JS scopes: global, functions and blocks. Function body vs block vs object literal
// global
var globalVariable = "I am a global variable. I am in outer most scope";

// function scope (var variables)
function illustrateFunctionScope() {
  var notAGlobalVariable = "I will only be visible inside this function";
}

{
  //I am a block. I know I look like an object literal. Sorry!
  let block_scoped_variable = "I will only be visible inside this block";
}

var object = {}; // this is an object literal, not a block.

// var overview
// var variables are scoped by function definition
function illustrateFunctionScope() {
  var notAGlobalVariable = "I will only be visible inside this function";
  function IWillHaveMyOwnScope() {
    var notAGlobalVariable =
      "I am a completely different 'notAGlobalVariable' from the one above. I sit in a different scope";
  }
}

// let and const overview
{
  //let and const facts
  let fact_one = "let and const variables are scoped by block";
  {
    let fact_one =
      "this is a different 'fact_one' let variable. It has it's own scope";
  }
  let fact_two =
    "let and const variables are not 'hoisted'. The commented out code below would not work";
  // console.log(fact_three); // <-- this line is commented out because it would cause an error
  let fact_three = "No one above this line can reference this variable";
  // let fact_three = "'fact_three' will never point to this string because it cannot be re-declared"; // <-- this line is commented out because it would cause an error
  goodMemory = ["Variable goodMemory will always point to this array"];
  // const goodMemory = [] // <-- this line is commented out because it would cause an error. Const variables cannot be re-assigned.
  goodMemory.push("We can of course modify the object goodMemory points to");
}

// hoisting examples
hostedFn(); //I can call this function because functions definitions are 'hoisted'

// notHoisted() // <-- this line is commented out because it would cause an error. The value of notHoisted at this point in time is undefined

function hostedFn() {
  return "Hoisting can appear to makes things easy but please do not relay on me";
}

var notHoisted = function() {
  return "Hoisting can appear to makes things easy but please do not relay on me";
};

// functions that return a value

function returnAString() {
  return "Hi";
}

// functions that return a function

function returnAFn() {
  var interestingFactThatMakesJSDifferent =
    "Remember how functions can return values? JS has first class functions support and we can return functions as values.";
  return function() {
    console.log(interestingFactThatMakesJSDifferent);
    console.log(
      "P.S. I do not actually have a 'interestingFactThatMakesJSDifferent' variable. I can reference that identifier because it's in my lexical scope. Yay for closures"
    );
  };
}

// closures as the outcome of first class functions plus Lexical scope == closures()

var fnWithAClosure = returnAFn();
fnWithAClosure(); // <-- this can work thanks to closures

// debugger and closures
// If you are in the debugger (and if you are debugging you must be in a debugger or use console.log. Remember! It's your Job!)
// and you are not able to reference a value that should be there due to the lexical scope. It's is likely due to the fact that
// no where in the function we reference the value and the debugger will not make available the encloused value. Simply add a reference
// to the identifier and re-run your code.
