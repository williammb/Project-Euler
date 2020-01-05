function lexicographicPermutations(n) {
    // 9! 362880, 8! 40320, 7! 5040 ...
    let value = n;
    let fatArr = [362880, 40320, 5040, 720, 120, 24, 6, 2, 1, 1];
    let positions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let arr = [];
    let result = '';

    for (var i = 0; i < fatArr.length; i++) {
        arr.push(parseInt(value / fatArr[i]));
        value = n % fatArr[i];
    }

    for (var i = 0; i < fatArr.length; i++) {
        result = result + positions[arr[i]];
        positions.splice(arr[i], 1);
    }

    return parseInt(result);
}

console.log(lexicographicPermutations(699999));
console.log(lexicographicPermutations(899999));
console.log(lexicographicPermutations(900000));
console.log(lexicographicPermutations(999999));