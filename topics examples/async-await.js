/**
 
Async function always returns a promise. no matter we are returning promise form that function or a simple primitive value.

async and await combo are used to handle promises.

await keyword can only be used inside async function.

when the await keyword is used the JS Engin will wait untill the await response is not received.
Example:
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("The Promise is Resolved");
    }, 7000)
});

async function handleWithAsyncAwait() {
    console.log("Before Await"); // this line will print
    const res = await promise;
    console.log("With Async and Await"); // this line will not print untill the promise is not settled 
    console.log(res)
    console.log("Resolved: Async and Await");  // this line will not print untill the promise is not settled 

}

function handleWithThen() {
    promise.then((res) => console.log(res))
    console.log("With then fun");

}
handleWithAsyncAwait();
handleWithThen();
console.log("After Fun Call")

If we have more then one promise to await the program flow will work according to their settled time,
    means if p1 will take 3 sec and p2 will take 5, the promise (p1) will not will for p2 to settled
    on other hand if p1 will take 5 min and p2 will take 3 sec and p1 await statement is the first one then both promises responses will be received after 5 sec because the JS Engine waited for p1 to setteld

We use try-catch block to handle errors in async-await.

 */

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("The Promise is Resolved");
    }, 7000)
});

async function handleWithAsyncAwait() {
    console.log("Before Await"); // this line will print
    const res = await promise;
    console.log("With Async and Await"); // this line will not print untill the promise is not settled 
    console.log(res)
    console.log("Resolved: Async and Await");  // this line will not print untill the promise is not settled 

}

function handleWithThen() {
    promise.then((res) => console.log(res))
    console.log("With then fun");

}
handleWithAsyncAwait();
handleWithThen();
console.log("After Fun Call")
