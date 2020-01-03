function largestPrimeFactor(number) {
    let prime = [];

    for (var i = 2; i <= number; i++) {
        if (number % i === 0) {
            prime.push(i);
            number = number / i;
        }
    }

    return prime[prime.length - 1];
}

console.log(largestPrimeFactor(2));
console.log(largestPrimeFactor(3));
console.log(largestPrimeFactor(5));
console.log(largestPrimeFactor(7));
console.log(largestPrimeFactor(13195));
console.log(largestPrimeFactor(600851475143));