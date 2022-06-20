// O(logn)
function isPowerOfTwo(n) {
    if (n < 1) return false;
    while (n>1) {
        if (n % 2 != 0)
            return false;
        n = n / 2;
    }
    return true;
}

// O(1)
function isPowerOfTwoBitWise(n) {
    if(n<1) return false;
    return (n & (n-1)) === 0;
}

console.log("5 " + isPowerOfTwo(5));      // false
console.log("8 " + isPowerOfTwo(8));      // true
console.log("16 " + isPowerOfTwo(16));    // true
console.log("32 " + isPowerOfTwo(32));    // true
console.log("64 " + isPowerOfTwoBitWise(64));    // true
console.log("128 " + isPowerOfTwoBitWise(128));  // true
console.log("256 " + isPowerOfTwoBitWise(256));  // true
console.log("12 " + isPowerOfTwoBitWise(12));  // true

