function digitCancellingFractions() {
    let multiplyD = 1;
    let multiplyB = 1;

    for (var i = 10; i < 51; i++) {
        for (var j = 51; j < 100; j++) {
            if (i !== j) {
                if (temDigitosIguais(i, j)) {
                    multiplyD = multiplyD * i;
                    multiplyB = multiplyB * j;
                }
            }
        }
    }

    return multiplyB / multiplyD;
}

function temDigitosIguais(i, j) {
    let a = i.toString().split('');
    let b = j.toString().split('');
    let result = false;

    for (var k = 0; k < a.length; k++) {
        if (a[k] === b[0] || a[k] === b[1]) {
            result = sameValue(i, j, parseInt(a[k]));
        }
    }

    return result;
}

function sameValue(i, j, rem) {
    let a = 0;
    let b = 0;

    if (rem === 0) {
        return false;
    }

    if (i % 10 === rem) {
        a = parseInt(i / 10);
    } else if (parseInt(i / 10) === rem) {
        a = i % 10;
    }

    if (j % 10 === rem) {
        b = parseInt(j / 10);
    } else if (parseInt(j / 10) === rem) {
        b = j % 10;
    }

    if (a / b === i / j) {
        return true;
    } else {
        return false;
    }
}

console.log(digitCancellingFractions());