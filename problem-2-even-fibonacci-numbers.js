function fiboEvenSum(n) {
    let fibonacci = [1, 1];
    let soma = 0;

    for (var i = 0; i < n - 1; i++) {
        fibonacci.push(fibonacci[i] + fibonacci[i + 1]);
        if (fibonacci[i + 2] % 2 === 0) {
            soma = soma + fibonacci[i + 2];
        }
    }

    return soma;
}

console.log(fiboEvenSum(10));
console.log(fiboEvenSum(18));
console.log(fiboEvenSum(23));
console.log(fiboEvenSum(43));