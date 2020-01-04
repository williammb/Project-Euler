function numberLetterCounts(limit) {
    let sum = 0

    for (var i = 1; i <= limit; i++) {
        if (numberLetter(i) == NaN) {
            console.log(i);
        }
        sum = sum + numberLetter(i);
    }

    return sum;
}

function numberLetter(n) {
    let cont = 0;
    let axt = 0;
    let hasBase = false;

    if (n >= 1000) {
        hasBase = true;
        axt = parseInt(n / 1000);
        n = n - axt * 1000;
        cont = cont + numberLetterDecimal(axt) + 8; // 8(thousand)  
    }

    if (n >= 100) {
        if (cont > 0) {
            cont = cont + 3; // 3 (and)
        }
        hasBase = true;
        axt = parseInt(n / 100);
        n = n - axt * 100;
        cont = cont + numberLetterDecimal(axt) + 7; // 7(hundred)  
    }

    if (n >= 20) {
        if (cont > 0) {
            cont = cont + 3; // 3 (and)
        }
        hasBase = false;
        axt = parseInt(n / 10);
        n = n - axt * 10;
        cont = cont + numberLetterTy(axt);
    }

    if (n < 20 && n > 0) {
        if (hasBase === true) {
            cont = cont + 3; // 3 (and)
        }
        cont = cont + numberLetterDecimal(n);
        n = 0;
    }

    return cont;
}

function numberLetterDecimal(value) {
    switch (value) {
        case 1:
            return 3;
        case 2:
            return 3;
        case 3:
            return 5;
        case 4:
            return 4;
        case 5:
            return 4;
        case 6:
            return 3;
        case 7:
            return 5;
        case 8:
            return 5;
        case 9:
            return 4;
        case 10:
            return 3;
        case 11:
            return 6;
        case 12:
            return 6;
        case 13:
            return 8;
        case 14:
            return 8;
        case 15:
            return 7;
        case 16:
            return 7;
        case 17:
            return 9;
        case 18:
            return 8;
        case 19:
            return 8;
    }
}

function numberLetterTy(value) {
    switch (value) {
        case 2:
            return 6;
        case 3:
            return 6;
        case 4:
            return 5;
        case 5:
            return 5;
        case 6:
            return 5;
        case 7:
            return 7;
        case 8:
            return 6;
        case 9:
            return 6;
    }
}

console.log(numberLetterCounts(5));
console.log(numberLetterCounts(150));
console.log(numberLetterCounts(1000));