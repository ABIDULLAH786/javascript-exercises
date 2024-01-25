// Example:1 Using generator for unique IDs
function* generateId() {
    let id = 1;
    while (true) {
        yield id;
        id = id + 1;
    }
}

const uniqueIds = generateId();
// console.log(uniqueIds.next().value)  // 1
// console.log(uniqueIds.next().value)  // 2

// Example:1 Using generator for unique IDs
function* generateId(values) {
    let id = 1;
    for (let i = 0; i < values.length; i++){
        yield values[i]
    }
}
const iteratorObj = generateId([1,2]);
// console.log(iteratorObj.next())  // { value: 1, done: false }
// console.log(iteratorObj.next())  // { value: 2, done: false }
// console.log(iteratorObj.next())  // { value: undefined, done: true }

// Example 3: Fibonaci Series
function* fibonacci() {
    let a = 0, b = 1;
    while (true) {
      yield a;
      a = b;
      b += a;
    }
  }
  
  const fibGenerator = fibonacci();
  
  // Get first 5 Fibonacci numbers
  for (let i = 0; i < 5; i++) {
    console.log(fibGenerator.next().value); // Prints 0, 1, 1, 2, 3
  }
  