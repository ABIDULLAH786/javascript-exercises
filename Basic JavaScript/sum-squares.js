function sumOfSquares(number) {
    let array = Array.from({ length: number }, (_, i) => i + 1);
    let result = array.reduce(function (acc, curr) {
        acc += curr * curr
        return acc;
    }, 0)
    return result
}

function squareOfSum(number) {
    let array = Array.from({ length: number }, (_, i) => i + 1);
    let result = array.reduce(function (acc, curr) {
        return acc + curr;
    }, 0)
    return result
}

console.log("Sum of Square is: " + sumOfSquares(10));


let squareSum = squareOfSum(10)
console.log("Square of Sum is: " + squareSum * squareSum)
