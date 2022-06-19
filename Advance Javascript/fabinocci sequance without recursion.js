// Metod-1
function fab(n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    let arr = [0,1];
    let num1 = 0; 
    let num2 = 1;
    let temp = 0;

    while (n > 2) {
        temp = num1 + num2;
        arr.push(temp);
        num1 = num2;
        num2 = temp;
        n--;
    }
    return arr;
}
// Method-2
function fab2(n){
    if (n == 0) return 0;
    if (n == 1) return 1;
    const fabArray = [ 0, 1];
    for (let i = 2; i < n; i++) {
        fabArray[i] = fabArray[i-1]+fabArray[i-2];
    }
    return fabArray;
}

console.log(fab(5)); // [ 0, 1, 1, 2, 3 ]
console.log(fab2(5)); // [ 0, 1, 1, 2, 3 ]

