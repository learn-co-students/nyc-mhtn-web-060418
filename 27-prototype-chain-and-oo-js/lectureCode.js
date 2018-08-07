// function Person(name, interests) {
//   this.name = name
//   this.interests = interests
// }

// Person.prototype.introduceYourself = function() {
//   console.log(this.name)
//   console.log(this.value)
//   console.log(`I enjoy:`)
//   this.interests.forEach( interest => console.log(interest) )
// }

// Person.prototype.value = 1

// const j = new Person('Jason',['photography','cooking'])
// j.introduceYourself()

// j.__proto__ === Person.prototype

// class Person {
//     constructor(name) {
//       this.name = name
//     }

//     sayName() {
//       console.log(this.name)
//     }
//   }

//   const j = new Person('Jason')
//   // j.__proto__ === Person.prototype
//   Person.prototype.constructor === Person


// function Chair(style,material,tableness,comfortLevel) {
//   this.style = style
//   this.material = material
//   this.tableness = tableness
//   this.comfortLevel = comfortLevel
//   return this
// }

// const chair = new Chair('arm','pelle',true,9)
// Chair.prototype.sayHello = function() {
//   console.log(`I am ${this.style} and you should sit in me because my comfort level is ${this.comfortLevel}`)
// }
// chair.sayHello()

// function Person(name) {
//     this.name = name
//   }

//   j = new Person('Jason')
//   j.__proto__


//   function Chair(style,material,tableness,comfortLevel) {
//     this.style = style
//     this.material = material
//     this.tableness = tableness
//     this.comfortLevel = comfortLevel
//     return this
//   }

//   const chair = new Chair('arm','pelle',true,9)
//   Chair.prototype.sayHello = function() {
//     console.log(`I am ${this.style} and you should sit in me because my comfort level is ${this.comfortLevel}`)
//   }
//   chair.sayHello()


  // function Person() {}
  // const j = new Person()
  // // 1. craete new empthy object {}
  // // 2. {}.__proto__ = Person.prototype
  // // 3. `this` inside of Person = to the newly crated and linked object
  // // 4. return the newly crated, linked and initialized object

// const coolStuff = {
//     surf:function surf() {return 'surfing'}
//   }

//   const j = Object.create(coolStuff)

//   j.surf()

//   j.__proto__ === coolStuff

//   const goodHuman = {
//     beKind:function() {return `learn how to feel`}
//   }

//   coolStuff.__proto__ = goodHuman

//   j.surf()


  // Parent.prototype = Object.create(Grandparent.prototype)


  //j.__proto__.__proto__.__proto__ === Object.prototype

// class Chair {
//     constructor(style,material,tableness,comfortLevel) {
//       this.style = style
//       this.material = material
//       this.tableness = tableness
//       this.comfortLevel = comfortLevel
//     }

//       sayHello() {
//         console.log(`I am ${this.style} and you should sit in me because my comfort level is ${this.comfortLevel}`)
//         }
//   }

//   // class OtherChair extends Chair {

//   // }

//   const chair = new Chair('arm','pelle',true,9)
//   chair.__proto__ === Chair.prototype
//   Chair.prototype.constructor === Chair
//   Chair.prototype.__proto__ === Object.prototype



// class Person {
//     constructor(interests) {
//       this.interests = interests
//     }

//     tellMeAboutYourInterest() {
//       this
//       debugger
//       this.interests.forEach( function (interest) {
//         this
//         debugger
//       }.bind(this) )
//     }
//   }

//   const j = new Person(['photography','cooking'])
//   j.tellMeAboutYourInterest()