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