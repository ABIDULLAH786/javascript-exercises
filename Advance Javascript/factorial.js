function factorial(n) {
    if (n >= 0) {
        let result = 1;
        while (n >0)
        {
            result = result *n;
            n--;
        }
        return result;
    }
    else
        console.log("Please Enter Positive Number");
}
console.log(factorial(-1));
