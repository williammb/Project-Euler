function smallestMult(n) {
    let prime = [];
    let hasDiv = false;
    let minVal = 1;
    let result = 0;

    for (var i = 2; i <= n; i++) {
        hasDiv = false;
        for (var j = 0; j < prime.length; j++) {
            if (i % prime[j] === 0) {
                hasDiv = true;
            }
        }
        if (hasDiv === false) {
            prime.push(i);
            minVal = minVal * prime[j];
        }
    }

    let isDiv = false;
    while (isDiv === false) {
        result = result + minVal;
        isDiv = true;
        for (var i = 2; i <= n; i++) {
            if (result % i !== 0) {
                isDiv = false;
            }
        }
    }

    return result;
}

console.log(smallestMult(5));
console.log(smallestMult(7));
console.log(smallestMult(10));
console.log(smallestMult(13));
console.log(smallestMult(20));