// Simple Examples
// Map
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers) // [ 2, 4, 6, 8, 10 ]

// Filter
const numbersArr = [1, 2, 3, 4, 5];
const evenNumbers = numbersArr.filter(num => num % 2 === 0); 
console.log(evenNumbers) // [2, 4]

// Reduce
const prices = [10, 20, 30];
const totalCost = prices.reduce((sum, price) => sum + price, 0); 
console.log(totalCost) // 60

//-----------------------------------------------------------------

//  ticky Examples
const users = [
    { firstName: 'abid', lastName: "khan", age: 24 },
    { firstName: 'farhan', lastName: "ahmed", age: 25 },
    { firstName: 'adam', lastName: "smith", age: 30 },
]

const withFitlerAndMap = users.filter(user => user.age < 30).map(user => user.firstName)

const output = users.reduce(function (acc, curr) {
    if (curr.age < 30) {
        acc.push(curr.firstName)
    }
    return acc
}, [])

console.log(output) // [ 'abid', 'farhan' ]
console.log(withFitlerAndMap)   // [ 'abid', 'farhan' ]