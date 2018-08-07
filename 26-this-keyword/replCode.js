function whoIsThis(msg, msg2) { console.log(msg, msg2); return this }

var obj = {
    whoIsThis: whoIsThis,
    name: 'Obj 1'
}

var objTwo = {
    whoIsThis: whoIsThis,
    name: 'Obj 2'
}


console.log(obj.whoIsThis())

//console.log(whoIsThis()) cannot run in repl

console.log(whoIsThis.call(obj))
console.log(whoIsThis.call(objTwo, "Ciao", "Hi"))
let params = ["Ciao", "Hi"]
console.log(whoIsThis.apply(objTwo, params))

const objWillBeThis = whoIsThis.bind(obj)
const objTwoWillBeThis = whoIsThis.bind(objTwo)

objWillBeThis("Hola", "Bye") === obj
objTwoWillBeThis() === objTwo

//new obj.whoIsThis.bind(obj) === objTwo
obj.whoIsThis.call(obj) === objTwo

// Do not do this
var objTwo = {
    whoIsThis: () => this,
    name: 'Obj 2'
}

var objTwoFixed = {
    whoIsThis: function () {
        return () => this
    },
    name: 'Obj 2'
}
