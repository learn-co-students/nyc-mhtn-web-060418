// Why is inheritance useful?
//rb object
const rb = {
  name: "Ruby",
  inheritanceModel: "Object Oriented",
  describeLanguage: function() {
    console.log(`${this.name} is a ${this.inheritanceModel} language`);
  }
};

rb.describeLanguage();
//js object
const js = {
  name: "JavaScript",
  inheritanceModel: "Prototype"
};

// how can our JS object describe it self?
// we could add it's very own describeLanguage method
js.describeLanguage = function() {
  console.log(`${this.name} is a ${this.inheritanceModel} language`);
};
js.describeLanguage();
// or we could borrow the rb.describeLanguage function
js.describeLanguage = rb.describeLanguage;
js.describeLanguage();
// the borrowing a function idea is interesting. It's as if we were centralizing
// the location of all our behavior logic. That is were inheritance comes in. Just like in
// Ruby we can centralizing the location of our behavior in one location. Each object will not have
// re-invent the wheel.

// js.describeLanguage = rb.describeLanguage;
// js.describeLanguage();

// create objects using the `new` keyword
function Person(name) {
  this.name = name;
}
Person.prototype.sayName = function() {
  console.log(`this.name`);
};

// `new` vs `Object.create()`
// `new`
// 1. Creates a new object
// 2. Link the newly created object to it's prototype via the `__proto__` relationship. Will
// point to the `.prototype` of it's constructor
// 3. Passes the object to the constructor function
// 4. Returns the object in the event the constructor function does not return the object
// `Object.create(prototype)`
// 1. Create a new object
// 2. Sets the `__proto__` of the newly created object to point to the parameter passed to `Object.create` and
// returns the object

// classes (syntactic sugar on the prototype chain)
class Student {
  constructor(name, topic) {
    this.name = name;
    this.topic = topic;
  }

  studying() {
    console.log(`${this.name} is studying ${this.topic}`);
  }
}

jason = new Student("Jason", "JS Prototypes");
jason.studying();
console.log(jason.__proto__ === Student.prototype);
