// Example 1:
function funX() {
    const a = 4;
    return function funY() {
        console.log(a)
    }
}
var a = 7
// funX()();
// console.log(a)

// Example 2:
function funX() {
    let a = 4;
    function funY() {
        console.log(a)
    }
    a = 100
    return funY
}
var a = 10
// funX()(); // 100
// console.log(a)  // 10

// Example 3: Counter
function counter() {

    let count = 0;
    return function increment() {
        console.log(count++);
    }
}
const counter1 = counter();
counter1();
counter1();

// Example 3: Counter with constructor function.
function Counter() {
    var count=0
    this.decrement = () => {
        count--;
        console.log(count);
    }
    this.increment = () => {
        count++
        console.log(count);
    }
}
const counter2 = new Counter();
console.log("Counter result")
counter2.increment();
counter2.increment();
counter2.decrement();
