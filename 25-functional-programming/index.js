// Combining functions
const getCostFromUser = cost => parseInt(cost)
const addProcessingFeeToCost = cost => cost + 1
const addShippingFeeToTotalCost = totalCost => totalCost + 2
const returnCostToUser = totalCost => `The total cost is ${totalCost}`

// Combining functions manually
// returnCostToUser(addShippingFeeToTotalCost(addProcessingFeeToCost(getCostFromUser('12'))))

// Utility to combine functions using `Array.prototype.reduce`
const combineFs = (...fns) => (input) => { fns.reverse().forEach(fn => { input = fn(input);} ); return input; }

const getCostFromUserAndCalculateTotalCost = combineFs(
    returnCostToUser,
    addShippingFeeToTotalCost,
    addProcessingFeeToCost,
    getCostFromUser
);

console.log(getCostFromUserAndCalculateTotalCost("12"));

// Utility to combine functions using `Array.prototype.reduce`
const combineFsUsingReduce = (...fns) => (fnArg) => fns.reverse().reduce( (fnArg,fn) => fn(fnArg) , fnArg )

const getCostFromUserAndCalculateTotalCostWithReduce = combineFsUsingReduce(
  returnCostToUser,
  addShippingFeeToTotalCost,
  addProcessingFeeToCost,
  getCostFromUser
);

console.log(getCostFromUserAndCalculateTotalCostWithReduce("12"));

// Utility to curry a function
function sumUpThreeNumbers(x,y,z) {
    return x+y+z
}

const curryFn = fn => {
    const fnArgs = []
    const curriedFn = input => {
        fnArgs.push(input)
        return fnArgs.length < fn.length ? curriedFn : fn(...fnArgs);
    }
    return curriedFn
}

const curriedSum = curryFn(sumUpThreeNumbers);
console.log(curriedSum(1)(2)(3))