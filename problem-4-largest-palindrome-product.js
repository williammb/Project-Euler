function largestPalindromeProduct(n) {
    let rest = 0;
    let init = '';
    for (var d = 0; d < n; d++) {
        init = init + 9;
    }

    for (var i = parseInt(init); i > 0; i--) {
        for (var j = parseInt(init); j > 0; j--) {
            if (rest < i * j) {
                var mult = i * j;
                let arr = mult.toString().split('');
                var nub1 = '';
                var nub2 = '';
                for (var d = 0; d < n; d++) {
                    nub1 = nub1 + arr[d];
                }
                for (var d = n * 2 - 1; d >= n; d--) {
                    nub2 = nub2 + arr[d];
                }
                if (parseInt(nub1) == parseInt(nub2)) {
                    rest = mult;
                }
            }
        }
    }
    return rest;
}

console.log(largestPalindromeProduct(2));
console.log(largestPalindromeProduct(3));
console.log(largestPalindromeProduct(4));