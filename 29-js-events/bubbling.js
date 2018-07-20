// bind to html elements
const espresso = document.getElementById("espresso");
const milk = document.getElementById("milk");
const sugar = document.getElementById("sugar");

// generic handler
const clicked = function (event) { debugger;console.log(`Clicked ${this.id}`); event.stopPropagation() };

// event listeners
espresso.addEventListener("click", clicked);
milk.addEventListener("click", clicked);
sugar.addEventListener("click", clicked);
// listen to capture phase because the last parameter is true
document.body.addEventListener("click", clicked, true);
