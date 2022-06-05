let arr = [1, 2, 3, 4, 5, 6, 7, 1, 1, 8, 7, 8, 9, 10]
// usingContantTime(arr); // 1 7 8
usingInnerLoog(arr); // 1 1 7 1 8

/**
 * This method print the duplicate as many times as they occures 
 * And the complexity of the code is O(n^2).
 * Because there is use of inner loops.
 */
function usingInnerLoog(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                console.log(arr[i] + " ")
            }
        }
    }
}

/**
 * This method print the duplicate numbers only once
 * And the complexity of the code is O(n).
 * Because there is no use of inner loops.
 */
function usingContantTime(arr) {
    let numRay = arr;
    let arr_size = numRay.length;

    // count the frequency
    for (let i = 0; i < arr_size; i++) 
    {
        numRay[numRay[i] % arr_size] = numRay[numRay[i] % arr_size] + arr_size;
    }
    for (let i = 0; i < arr_size; i++) 
    {
        if (numRay[i] >= arr_size * 2) 
        {
            console.log(i);
        }
    }
}