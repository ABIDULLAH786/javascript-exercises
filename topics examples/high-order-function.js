// This is Example with HOF: this help in code reusability
const radius = [3, 4, 2, 5];

const area = (radius) => {
    return Math.PI * radius * radius;
}

const circumference = (radius) => {
    return Math.PI * radius * 2;
}

const calculate = (radius, logic) => {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]))
    }
    return output;
}

// console.log("Circumference of Circles: ", calculate(radius, circumference))
// console.log("Area of Circles: ", calculate(radius, area))


// This is Example with out HOF
/*
const radius = [3, 4, 2, 5];
const calculateArea = (radius) => {
    let output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
}

const calculateCircumference = (radius) => {
    let output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(Math.PI * radius[i] * 2);
    }
    return output;
}
console.log("Circumference of Circles: ", calculateCircumference(radius))
console.log("Area of Circles: ", calculateArea(radius))

*/

/*
Making the High Order Fun
const radius = [3, 4, 2, 5];

const area = (radius) => {
    return Math.PI * radius * radius;
}

const circumference = (radius) => {
    return Math.PI * radius * 2;
}

Array.prototype.calculate = function (logic) {
    const output = [];
    for (let i = 0; i < this.length; i++) {
        output.push(logic(this[i]))
    }
    return output;
}

console.log("Circumference of Circles: ", radius.calculate(circumference))
console.log("Area of Circles: ", radius.calculate(area))

*/