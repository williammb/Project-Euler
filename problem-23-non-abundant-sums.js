function sumOfNonAbundantNumbers(n) {
    let value = 1;
    let abundances = [];
    let sumDiv;

    while (value <= n) {
        sumDiv = divisores(value);
        if (sumDiv > value) {
            abundances.push(value);
        }
        value++;
    }

    let sum = posibleSums(abundances, n).reduce(function(arr, value, i) {
        if (value) {
            arr.push(i);
        }
        return arr;
    }, []).reduce((a, b) => a + b);

    return sum;

}

function divisores(n) {
    let value = 1;
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0 && i !== Math.sqrt(n)) {
            value = value + i + n / i;
        } else if (n % i === 0) {
            value = value + i;
        }
    }

    return value;
}

function posibleSums(abundances, n) {
    var sum;
    var arr = [];
    for (var i = 0; i <= n; i++) {
        arr[i] = true;
    }

    for (var i = 0; i < abundances.length; i++) {
        abundances.slice(i).some(function(value) {
            var sum = abundances[i] + value;
            if (sum > n) {
                return true;
            }
            arr[sum] = false;
        });
    }

    return arr;
}


console.log(sumOfNonAbundantNumbers(10000));
console.log(sumOfNonAbundantNumbers(15000));
console.log(sumOfNonAbundantNumbers(20000));
console.log(sumOfNonAbundantNumbers(28123));