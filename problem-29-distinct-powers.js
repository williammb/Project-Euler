function distinctPowers(n) {
    let arr = [];

    for (var i = 2; i <= n; i++) {
        for (var j = 2; j <= n; j++) {
            if (arr.indexOf(Math.pow(i, j)) < 0) {
                arr.push(Math.pow(i, j));
            }
        }
    }

    return arr.length;
}

console.log(distinctPowers(15));
console.log(distinctPowers(20));
console.log(distinctPowers(25));
console.log(distinctPowers(30));