function isPrime(n) {
    if (n % 2 == 0 || n == 1) return false;

    for (let i = 2; i < n / 2; i++) {
        if (n % i == 0) return false;
    }
    return true;
}

console.log(isPrime(5));
console.log(isPrime(9));
console.log(isPrime(11));
console.log(isPrime(15));
console.log(isPrime(21));