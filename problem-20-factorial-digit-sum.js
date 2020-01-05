function sumFactorialDigits(n) {
    let total = 0;
    let plus = 0;

    let value = 1;
    for (var i = n; i > 1; i--) {
        value = value * i;
    }

    let potencia = (Math.ceil(Math.log10(value + 1)));
    let arr = new Array(potencia).fill(0);

    arr[0] = 1;
    for (var i = n; i > 1; i--) {
        plus = 0;
        for (var j = 0; j < potencia; j++) {
            n = i * arr[j] + plus;
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

console.log(sumFactorialDigits(10));
console.log(sumFactorialDigits(25));
console.log(sumFactorialDigits(50));
console.log(sumFactorialDigits(75));
console.log(sumFactorialDigits(100));