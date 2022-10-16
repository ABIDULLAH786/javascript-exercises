
var arr = ["1", "2", "3"];
arr = arr.map(Number);
const yourArray = ["15","a","10"]
// console.log(!yourArray.some(isNaN))

console.log(Array.isArray(['7', '2']))
console.log(Array.isArray("(7,2)".substring(1, "(7,2)".length-1).split(",")))

function findLCM(array) {
    function gcd(a, b) {
        return !b ? a : gcd(b, a % b);
    }

    function lcm(a, b) {
        return (a * b) / gcd(a, b);
    }

    var multiple = array[0];
    array.forEach(function (n) {
        multiple = lcm(multiple, n);
    });

    return multiple;
}