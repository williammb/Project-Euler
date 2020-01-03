function nthPrime(n) {
    let prime = [2];
    let hasDiv = false;

    let i = 3;
    while (prime.length < n) {
        hasDiv = false;
        for (var j = 0; j < prime.length; j++) {
            if (i % prime[j] === 0) {
                hasDiv = true;
            }
        }
        if (hasDiv === false) {
            prime.push(i);
        }
        i = i + 2;
    }

    return prime[n - 1];
}

console.log(nthPrime(6));
console.log(nthPrime(10));
console.log(nthPrime(100));
console.log(nthPrime(1000));
console.log(nthPrime(10001));