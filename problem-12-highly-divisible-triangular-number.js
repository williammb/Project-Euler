function divisibleTriangleNumber(n) {
    let value = 0;
    let i = 1;
    let totalDiv = 0;

    while (totalDiv < n) {
        value = value + i;
        totalDiv = 0;
        for (var j = 1; j < Math.sqrt(value); j++) {
            if (value % j === 0) {
                totalDiv++;
                if (value / j > Math.sqrt(value)) {
                    totalDiv++;
                }
            }
        }
        i++;
    }
    return value;
}

console.log(divisibleTriangleNumber(5));
console.log(divisibleTriangleNumber(23));
console.log(divisibleTriangleNumber(167));
console.log(divisibleTriangleNumber(374));
console.log(divisibleTriangleNumber(500));