function multiplesOf3and5(number) {
    let soma = 0;
    for (var i = 3; i < number; i++) {
        if (i % 3 === 0) {
            soma = soma + i;
        } else if (i % 5 === 0) {
            soma = soma + i;
        }
    }
    return soma;
}

console.log(multiplesOf3and5(1000));
console.log(multiplesOf3and5(49));
console.log(multiplesOf3and5(19564));
console.log(multiplesOf3and5(8456));