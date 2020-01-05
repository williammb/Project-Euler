function digitFibonacci(n) {
    let arr = [1, 1, 2, 3, 5, 8, 13];

    while (Math.ceil(Math.log10((arr[arr.length - 1]))) < n) {
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    }

    return arr.length;
}


console.log(digitFibonacci(5));
console.log(digitFibonacci(10));
console.log(digitFibonacci(15));
console.log(digitFibonacci(20));