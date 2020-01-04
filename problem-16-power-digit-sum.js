function powerDigitSum(exponent) {
    let total = 0;
    let potencia = (Math.ceil(Math.log10(Math.pow(2, exponent) + 1)));
    let arr = new Array(potencia).fill(0);
    let plus = 0;
    let n = 0;

    arr[0] = 1;
    for (var i = 0; i < exponent; i++) {
        plus = 0;
        for (var j = 0; j < potencia; j++) {
            n = 2 * arr[j] + plus;
            plus = 0;

            if (n > 9) {
                arr[j] = n % 10;
                plus = parseInt(n / 10);
            } else {
                arr[j] = n;
            }
        }
    }

    for (var i = 0; i < potencia; i++) {
        total = total + arr[i];
    }

    return total;
}

console.log(powerDigitSum(15));
console.log(powerDigitSum(128));
console.log(powerDigitSum(1000));