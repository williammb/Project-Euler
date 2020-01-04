function longestCollatzSequence(limit) {
    let index = 0;
    let maxInteractions = 0;
    let intractions;

    for (var i = 2; i <= limit; i++) {
        intractions = numberTrys(i);
        if (intractions > maxInteractions) {
            index = i;
            maxInteractions = intractions
        }
    }

    return index;
}

function numberTrys(nInit) {
    let n = 0;

    while (nInit !== 1) {
        if (nInit % 2 === 0) {
            nInit = nInit / 2;
        } else {
            nInit = 3 * nInit + 1;
        }
        n++;
    }
    return n;
}

console.log(longestCollatzSequence(14));
console.log(longestCollatzSequence(5847));
console.log(longestCollatzSequence(46500));
console.log(longestCollatzSequence(54512));
console.log(longestCollatzSequence(1000000));