function digitnPowers(n) {
    let sum = 0;
    let splitNumber;

    for (var i = 2; i <= Math.pow(10, n + 1) - 1; i++) {
        splitNumber = i.toString().split('');
        if (i === sumExponencial(splitNumber, n)) {
            sum = sum + i;
        }
    }

    return sum;
}

function sumExponencial(arr, n) {
    let sum = 0;

    for (var i = 0; i < arr.length; i++) {
        sum = sum + Math.pow(arr[i], n);
    }

    return sum;
}

console.log(digitnPowers(2));
console.log(digitnPowers(3));
console.log(digitnPowers(4));
console.log(digitnPowers(5));