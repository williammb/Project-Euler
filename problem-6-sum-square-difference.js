function sumSquareDifference(n) {
    return sumSquareSum(n) - sumSquareSep(n);
}

function sumSquareSep(n) {
    let total = 0;
    for (var i = 1; i <= n; i++) {
        total = total + i * i;
    }
    return total;
}

function sumSquareSum(n) {
    let total = 0;
    for (var i = 1; i <= n; i++) {
        total = total + i;
    }
    return total * total;
}

console.log(sumSquareDifference(10));
console.log(sumSquareDifference(20));
console.log(sumSquareDifference(100));