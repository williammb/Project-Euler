function sumAmicableNum(n) {
    let value = 1;
    let axt;
    let sum = 0;

    while (value <= n) {
        axt = divisores(value);
        if (axt > value && divisores(axt) == value) {
            sum = sum + value + axt;
        }
        value++;
    }

    return sum;
}

function divisores(n) {
    let value = 1;

    for (var i = 2; i < Math.sqrt(n); i++) {
        if (n % i === 0 && (n % i) === 0) {
            value = value + i + n / i;
        }
    }
    return value;
}

console.log(sumAmicableNum(1000));
console.log(sumAmicableNum(2000));
console.log(sumAmicableNum(5000));
console.log(sumAmicableNum(10000));