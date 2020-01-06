function spiralDiagonals(n) {
    let total = 1;
    let value = 1;

    for (var i = 1; i <= (n - 1) / 2; i++) {
        for (var j = 1; j <= 4; j++) {
            value = value + 2 * i;
            total = total + value;
        }
    }

    return total;
}

console.log(spiralDiagonals(101));
console.log(spiralDiagonals(301));
console.log(spiralDiagonals(505));
console.log(spiralDiagonals(1001));