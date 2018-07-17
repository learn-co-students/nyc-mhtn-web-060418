// var name //undefined
// function sayName() {console.log(name)}

// // After first pass
// console.log(name)
// console.log(sayName)
// sayName()


// name = "Brad"
// sayName()

// function sayName() {
//   let name = 'Brad'
//   {
//     let name = 'Not Brad'
//     {
//       let name = 'Another non Brad'
//       {
//           let name = 'Another non Brad two'
//       }
//     }
//   }
//   console.log(name)
// }

// sayName()


// console.log(name)
// let name = 'Brad'

// const name = "Brad"
// name = 'Not Brad'

// const container  = []
// console.log(container)
// container.push(1)
// console.log(container)

// var fn = function() {}

// function printFn(fn) {console.log(fn)}

// printFn(fn)

// function returnFive() {return 5}

// function returnFn () {return function() {console.log(`Ciao Brad from a first class function`)}}

// returnFive()
// returnFn()()

// function bradGreetingGenerator(greering) {
//   debugger
//   return function() {console.log(`${greering} Brad`)}
// }

// let ciaoBrad = bradGreetingGenerator('Ciao')

// console.log(ciaoBrad)

// function a() {
//   var letterA = 'A'
//   return function b() {
//     var letterB = "B"
//     return function c() {
//       letterA
//       letterB
//       var letterC = 'C'
//       debugger
//     }
//   }
// }
// a()()()

// const rideValidatorGenerator = function(cost) {return function(amountInWallet) { return amountInWallet >= cost }
// }

// const fiveDollarRide = rideValidatorGenerator(5)

// const tenDollarRide = rideValidatorGenerator(10)

// fiveDollarRide(6)
// tenDollarRide(6)


function outer() {
  var secret = "Brad is the best name... the best!"
  function inner() {
    console.log(secret)
    debugger
  }
  inner()
}
outer()


function inner() {
  debugger
  console.log(secret)

}

function outer() {
  var secret = "Brad is the best name... the best!"

  inner()
}
outer()


const fiveDollarRide = {
  cost:5,
  canRide:function(amountInWallet) {return amountInWallet >= this.cost}
}

fiveDollarRide.canRide(6)
fiveDollarRide.cost = 1
fiveDollarRide.canRide(2)

// function generateRideValidator(rideCost) {
//   return function(amoutInWallet) {
//     return amoutInWallet >= rideCost
//   }
// }

// const tenDollarRide = generateRideValidator(10)
// const fiveDollarRide = generateRideValidator(5)

// tenDollarRide

// function one() {
//   var oneValue = 1
//   return function two() {
//     oneValue
//     debugger
//     var twoValue = 2
//     return function three() {
//       oneValue
//       twoValue
//     debugger
//     var threeValue = 3
//   }
//   }

// }

// one()()()



// function outer() {
//   var secret = 'outer secret'
//   return function() {
//     secret
//     debugger
//     console.log(secret)
//   }
// }

// var outerSecret = outer()
// debugger
// outerSecret()

// function a() {
//   var secret = 'secret of A'
//   function c() {
//     secret
//     debugger
//   }
//   b(c)
// }

// function b(cb) {
//   var secret = 'secret of B'
//   cb()
// }

// a()


// function outer() {
//   var secret = 'outer secret'
//   function inner() {
//     secret
//     debugger
//   }
//   inner()
// }
// outer()


// function generateAFn() {
//   var secret
//   return function() {
//     console.log(secret)
//   }
// }

// const printSecret = generateAFn()


// function fnThatRetrunsAFn() {
//   return function() {console.log('Ciao from myFn')}
// }

// let myFn = fnThatRetrunsAFn()
// let fnThatCallsACallBack = function(cb) {cb()}

// fnThatCallsACallBack(myFn)



// function letsBreakHoisting() {
//   function some() {console.log('Buongiorno')}
//   var someFn = function myVeryOwnName() {myVeryOwnName()}
//   someFn()
// }
// letsBreakHoisting()

// const jsIceCream = ['pistacchio']

// jsIceCream.push('tomato')
// jsIceCream

// var x = {letter:'a'}

// const test = x

// console.log(test)

// x = 8
// console.log(test)


// function tdzDemo() {
//   console.log(letter)
//   let letter = 'l'
// }
// tdzDemo()


// function showBlockScope() {
// let letter = 'z'
//   console.log(letter)
// {
//   let letter = 'a'
//   console.log(letter)
//   {
//     let letter = 'b'
//     console.log(letter)
//   }
//   console.log(letter)
// }
// console.log(letter)
// }

// showBlockScope()



// var where = 'outside'

// function outer() {
//   where = 'insider outer'
//   console.log(where)
//   function inner() {
//     console.log(where)
//   }
//   inner()
// }


// outer()
// console.log(where)