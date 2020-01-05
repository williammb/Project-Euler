function reciprocalCycles(n) {
    let maxPath = 0;
    let maxValue = 0;
    let current;

    for (var i = n; i > 1; i--) {
        current = dividindo(i);
        if (current > maxPath) {
            maxPath = current;
            maxValue = i;
        }
    }

    return maxValue;
}

function contain(arr, value) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i][0] === value) {
            return i;
        }
    }

    return -1;
}

function dividindo(n) {
    let map = [];
    let mod = 1;

    for (var i = 1;; i++) {
        var axt = contain(map, mod);
        if (axt !== -1) {
            return i - map[axt][1];
        } else {
            map.push([mod, i]);
            mod = mod * 10 % n;
        }
    }
}

console.log(reciprocalCycles(700));
console.log(reciprocalCycles(800));
console.log(reciprocalCycles(900));
console.log(reciprocalCycles(1000));