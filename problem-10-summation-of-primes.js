function primeSummation(n) {
    let isPrime = new Array(n).fill(true);
    let sumPrime = 0;

    for (var i = 2; i < Math.sqrt(n); i++) {
        for (var j = i * i; j < n; j += i) {
            if (isPrime[i]) {
                isPrime[j] = false
            }
        }
    }

    for (var i = 2; i < n; i++) {
        if (isPrime[i] === true) {
            sumPrime = sumPrime + i;
        }
    }

    return sumPrime;
}

console.log(primeSummation(17));
console.log(primeSummation(2001));
console.log(primeSummation(140759));
console.log(primeSummation(2000000));