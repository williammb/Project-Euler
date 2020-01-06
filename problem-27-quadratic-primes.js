function quadraticPrimes(range) {
    let listPrimos = [2];
    let maxProduto = 0;
    let maxCont = 0;
    let currentCont = 0;

    for (var i = 3; i <= range; i = i + 2) {
        if (isPrime(i)) {
            listPrimos.push(i);
        }
    }

    for (var i = (1 - (range * 2)); i <= range; i = i + 2) {
        for (var j = 0; j <= listPrimos.length - 1; j++) {
            currentCont = consecutivosPrimos(i, listPrimos[j]);

            if (currentCont > maxCont) {
                maxCont = currentCont;
                maxProduto = i * listPrimos[j];
            }
        }
    }

    return maxProduto;
}

function isPrime(value) {
    let list = [];

    if (value < 2) {
        return false;
    }

    for (var i = 2; i <= Math.sqrt(value); i++) {
        if (value % i == 0) {
            return false;
        }
    }

    return true;
}

function consecutivosPrimos(value, primo) {
    for (var i = 0;; i++) {
        if (!isPrime(i * i + value * i + primo)) {
            return i;
        }
    }
}

console.log(quadraticPrimes(200));
console.log(quadraticPrimes(500));
console.log(quadraticPrimes(800));
console.log(quadraticPrimes(1000));