const express = require("express");
const app = new express();
const url = require("url")
app.use(express.json());


app.get("/", (req, res) => {
    console.log("Server is listening")
    res.send("Server is listening")
})

function checkArrayData(array) {


    const newArray = array.split(",")
    /**
     * This will check if the array have any character in it
     * it will return false and we are returning the negation result
     * if character found return false else return true
     */
    return !newArray.some(isNaN)

}
function convertStrArrayToNum(strArray) {
    return JSON.parse(strArray).map(Number);
}

function findLCM(array) {
    if (array.length < 2) return false;
    function lcm_two_numbers(x, y) {
        if ((typeof x !== 'number') || (typeof y !== 'number'))
            return false;
        return (!x || !y) ? 0 : Math.abs((x * y) / gcd_two_numbers(x, y));
    }

    function gcd_two_numbers(x, y) {
        x = Math.abs(x);
        y = Math.abs(y);
        while (y) {
            var t = y;
            y = x % y;
            x = t;
        }
        return x;
    }

    var multiple = array[0];
    array.forEach(function (n) {
        multiple = lcm_two_numbers(multiple, n);
    });

    return multiple;
}
app.get("/lcm", (req, res) => {

    /**
     * Getting the url after ?
     */
    const queryObject = url.parse(req.url, true).search;

    /**
     * Extractiung the [] part from url 
     */
    const stringNumber = queryObject.substring(1);


    const validData = checkArrayData(stringNumber.substring(1, stringNumber.length - 1))


    /**
     * Converting the string array to numbers array
     */
    if (validData) {

        var numberArray = convertStrArrayToNum(stringNumber)
        if (numberArray.length < 2)
            return res.status(422).send("At least two natural numbers must be provided to compute the LCM.")


        /**
         * Method to find lcm of numbers 
         */
        var result = findLCM(numberArray)
    } else {
        return res.status(422).send("Only natural numbers may be used to calculate a LCM.")
    }


    // Sending final result of LCM to User/Client
    return res.status(200).send(`The LCM of { ${numberArray} } is { ${result} }`)
})


module.exports = { findLCM ,app}
