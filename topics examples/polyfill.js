// using default bind funtion 
const user = {
    firstName: "Abid",
    lastName: "Ullah"
}
let print = function (city,street) {
    console.log(`User: ${this.firstName} ${this.lastName},\nCity: ${city},\nStreet: ${street}`);
}
const printUserName1 = print.bind(user);
printUserName1();

// Basic Implementation of custom bind function
Function.prototype.customBind = function (...args) {
    let obj = this;
    return function () {
        obj.call(args[0])
    }
}
const printUserName2 = print.customBind(user);
printUserName2();

// modifying the custom binding to accept other arguments also
Function.prototype.customBindAdvance = function (...args) {
    let obj = this;
    let params = args.slice(1);
    return function (...args2) {
        obj.apply(args[0], [...params, ...args2]);
    }
}
let printUserName3 = print.customBindAdvance(user, "Lahore")
printUserName3("Libirty");