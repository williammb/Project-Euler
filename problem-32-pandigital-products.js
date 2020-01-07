function pandigitalProducts() {
    let arr = [];
    let sum = 0;

    [arr, sum] = produto(1, 1000, arr, sum);
    [arr, sum] = produto(10, 100, arr, sum);

    return sum;
}

function produto(initI, initJ, arr, sum) {
    const maxI = initI * 10 - 1;
    const maxJ = initJ * 10 - 1;

    for (var i = initI; i <= maxI; i++) {
        for (var j = initJ; j <= maxJ; j++) {
            if (isUnusual(i, j)) {
                if (arr.indexOf(i * j) < 0) {
                    arr.push(i * j);
                    sum = sum + i * j;
                }
            }
        }
    }

    return [arr, sum];
}

function isUnusual(i, j) {
    let sum = [0, 0];

    sum = subOperation(i, sum);
    sum = subOperation(j, sum);
    sum = subOperation(i * j, sum);

    if (sum[0] + 2 === Math.pow(2, sum[1] + 1)) {
        return true;
    }

    return false;
}

function subOperation(value, sum) {

    for (var i = 0; value > 0; i++) {
        sum[0] = sum[0] + Math.pow(2, value % 10);
        value = parseInt(value / 10);
    }
    sum[1] = sum[1] + i

    return (sum);
}

console.log(pandigitalProducts());