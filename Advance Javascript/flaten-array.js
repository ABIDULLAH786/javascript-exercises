// Take a nested list and return a single flattened list with all values except nil/null.
// SOLUTION:
// Declare empty arrayList array
let arrayList = [];

// Push fruits and categories to the array
arrayList[0] = Array("fruits", "apples", "bananas", "oranges", null);
arrayList[1] = Array("vegetables", null, ["fresh", "tomatoes", "cucumbers"], ["frozen", "baby carrots", "broccoli"]);
arrayList[2] = Array("Mix", "values", ["int", [1, 2, 3, 4]]);



function flattenArray(array) {
    let output = []
    function recursivelyFlatten(list) {
        for (let item of list) {
            if (Array.isArray(item)) {
                recursivelyFlatten(item)
            } else if (item != null && item != undefined) {
                output.push(item);
            }
        }
    }
    recursivelyFlatten(array);
    return output;
}

console.log(flattenArray(arrayList))
