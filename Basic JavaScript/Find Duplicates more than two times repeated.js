const findDuplicates = (arr) => {
    let sorted_arr = arr.slice().sort(); // You can define the comparing function here. 
    // JS by default uses a crappy string compare.
    // (we use slice to clone the array so the
    // original array won't be modified)
    let results = [];
    for (let i = 1; i < sorted_arr.length - 1; i++) {
        if (sorted_arr[i - 1] == sorted_arr[i] && sorted_arr[i + 1] == sorted_arr[i]) {
            results.push(sorted_arr[i]);
        }
    }
    return results;
}

let array = [9, 9, 111, 2, 3, 4, 4, 5, 9, 7];
console.log(`The duplicates in ${array} are ${findDuplicates(array)}`);