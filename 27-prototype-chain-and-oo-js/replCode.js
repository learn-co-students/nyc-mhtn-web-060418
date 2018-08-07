// const js = {
//   name:'JavaScript',
//   punchLineText:'I am eclectic and I run everywhere',
//   punchLine: function() {console.log(`I am ${this.name}. ${this.punchLineText}`)}
// }

// const rb = {
//   name:'Ruby',
//   punchLineText:'I am very very very polished',
//   punchLine:js.punchLine
// }

// js.punchLine()
// rb.punchLine()

// function Language(name,punchLineText) {
//   this.name = name
//   this.punchLineText = punchLineText
// }

// const js2 = new Language('JavaScript','I am eclectic and I run everywhere')

// Language.prototype.punchLine = function() {console.log(`I am ${this.name}. ${this.punchLineText}`)}

// js2.punchLine()

// js2.__proto__ === Language.prototype

class AmazingHuman {
    constructor(name) {
        this.name = name
    }

    intro() {
        console.log(`I am ${this.name}. I am pretty Amazing`)
    }

    ciao() { console.log('Ciao') }
}

class JSStudent extends AmazingHuman {
    constructor(name) {
        super(name)
    }

    learning() {
        console.log("I am learning JS")
    }

    hola() {
        super.ciao()
    }
}

class CrazyTest extends JSStudent {
    testInsanity() {
        this.__proto__.__proto__.ciao()
    }
}

const brad = new AmazingHuman('Brad')

const bradLearnsJs = new JSStudent('Brad')
//bradLearnsJs.ciao()

const crazyiness = new CrazyTest
crazyiness.testInsanity()