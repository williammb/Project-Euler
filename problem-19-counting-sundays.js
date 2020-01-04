function countingSundays(firstYear, lastYear) {
    // Good luck!

    let calendar = [];
    let axi = [];
    let mouths = [31, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30];
    let cont = 0;

    for (var i = 0; i <= 101; i++) {
        axi = [];
        for (var j = 0; j < 12; j++) {
            if (j === 0) {
                if (i === 0) {
                    axi.push(1);
                } else {
                    axi.push((calendar[i - 1][11] + mouths[j]) % 7);
                }
            } else if (j === 2) {
                var add = 0;
                if (i % 4 === 0 && i !== 0) {
                    add = 1;
                }
                axi.push((axi[j - 1] + mouths[j] + add) % 7)
            } else {
                axi.push((axi[j - 1] + mouths[j]) % 7)
            }
        }
        calendar.push(axi);
    }

    for (var i = firstYear - 1900; i <= lastYear - 1900; i++) {
        for (var j = 0; j < 12; j++) {
            if (calendar[i][j] === 0) {
                cont++;
            }
        }
    }

    return cont;
}

console.log(countingSundays(1943, 1946));
console.log(countingSundays(1995, 2000));
console.log(countingSundays(1901, 2000));