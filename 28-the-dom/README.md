# The Document Object Model

Code associated to the Document Object Model lecture

## Outline

* The canvas
* Orchestrated paintbrushes (JS and CSS)
* An instrument for expression or utility
* From a string to a page
* From a static page to an interactive experience
* Abstraction layer between HTML (string), JavaScript and what we see on the page
  * String
  * DOM
  * DOM as a tree
  * DOM elements
  * Interpret CSS (CSS Object Model) and JS
* Back to CRUD
* DOM Manipulation
  * Finding DOM Elements
  * Creating DOM elements
    * From text to DOM
    * From objs to DOM
  * Altering DOM elements
* What is jQuery
* **Build something** (flatStaGram)

## Selectors

| Selector name                   | Return shape   | Return type    | Live? | Reference             | forEach? |
| ------------------------------- | -------------- | -------------- | ----- | --------------------- | -------- |
| `document.getElementById()`        | Single element | Element        | N/A   | https://goo.gl/8cHGoy | N/A      |
| `element.getElementsByClassName()` | Collection     | HTMLCollection | Yes   | https://goo.gl/qcAhcp | No       |
| `element.getElementsByTagName()`   | Collection     | HTMLCollection | Yes   | https://goo.gl/QHozSh | No       |
| `element.querySelector()`          | Single element | Element        | N/A   | https://goo.gl/6Pqbcc | N/A      |
| `element.querySelectorAll()`       | Collection     | NodeList       | Node  | https://goo.gl/vTfXza | Yes      |

Resources:

* [MDN Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)
* [MDN NodeList reference](https://developer.mozilla.org/en-US/docs/Web/API/NodeList)
* [MDN HTMLCollection reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection)
* [CSS Selectors Cheatsheet](https://guide.freecodecamp.org/css/tutorials/css-selectors-cheat-sheet/)
* [MDN Document.createElement()](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
* [MDN Document.createElement()](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
* [MDN Element.innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)
