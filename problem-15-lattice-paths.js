function latticePaths(gridSize) {
    let arr = new Array(gridSize + 1).fill(new Array(gridSize + 1).fill(1));
    for (var i = 1; i <= gridSize; i++) {
        for (var j = 1; j <= gridSize; j++) {
            arr[i][j] = arr[i - 1][j] + arr[i][j - 1];
        }
    }
    return arr[gridSize][gridSize];
}

console.log(latticePaths(4));
console.log(latticePaths(9));
console.log(latticePaths(20));