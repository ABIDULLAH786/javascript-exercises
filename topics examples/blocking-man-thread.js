// We are using the setTimeout function most of the time in program today we will see that the setTimeout will not gaurentee
// that it will execute right after the mendtioned time. it maens it should wait till the mentioned time but some time it can take
// longer then that. here will see how the while loop block the main thread and the setTimeout  which is ready in call stack to be
// executed but get a channce after  10 seconds instead of 5 seconds

console.log("start");

setTimeout(() => {
    console.log("Callback fun")
}, 5000);

const startDate = new Date().getTime();
let endDate = startDate;
while (endDate < startDate + 10000) {
    endDate = new Date().getTime();
}
console.log("While expires")