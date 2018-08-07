// function nameOfFn() {
//   // return

// }

// const nameOfFnNumberTwo = function () {}

// const nameOfFnNumberTwo = function namedFnThree() {}

// const arrowFn = (x,y) => (console.log('hi');x+y)

// (function spammyMsg(msg) {
//   setInterval( ()=>console.log(msg),2000 )
// })('Ciao')

const receivePriceStr = costStr => parseInt(costStr)
const addProcessingFee = cost => cost + 2
const generateReceiptStr = orderCost => `Your total is ${orderCost}`


generateReceiptStr(addProcessingFee(receivePriceStr(4)))

function combineFns(...fns) {
    return function (input) {
        fns.reverse().forEach(fn => {
            input = fn(input)
        })
        return input
    }
}

generateReceiptStr(addProcessingFee(receivePriceStr(4)))
const getCoststrAndPrintOrderTotal = combineFns(generateReceiptStr, addProcessingFee, receivePriceStr)

function encluseN(n) {
    return function nForEver() { console.log(n); return nForEver }
}

const encloseOne = encluseN(1)

const encloseTwo = encluseN(2)


getCoststrAndPrintOrderTotal(4)

function addTreeNumbers(x, y, z) { return x + y + z }

addTreeNumbers(1, 2, 3)

// curriedaddTreeNumbers(1)(2)(3)

encloseOne()
encloseOne()
encloseOne()
encloseTwo()
encloseTwo()
encloseTwo()