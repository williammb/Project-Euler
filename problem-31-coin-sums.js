function coinSums(n) {
    let conts = [1, 2, 5, 10, 20, 50, 100, 200];
    let arr = new Array(n + 1).fill(1);

    for (var i = 1; i < conts.length; i++) {
        for (var j = conts[i]; j <= n; j++) {
            arr[j] = arr[j] + arr[j - conts[i]];
        }
    }

    return arr[n];
}

console.log(coinSums(50));
console.log(coinSums(100));
console.log(coinSums(150));
console.log(coinSums(200));