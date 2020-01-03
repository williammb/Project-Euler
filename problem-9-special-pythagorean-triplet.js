function specialPythagoreanTriplet(n) {
    let sumOfabc = n;
    let maxA = parseInt(n/3) - 1;
    let minC = parseInt(n/3) + 1;
    for(var a = maxA; a > 1; a--) {
        for(var b = a + 1; b < (n - a) / 2; b++) {
           var c = n - a - b;
           if(multiplyisValided(a, b, c) === true) {
               return (a * b * c);
           }
        }
    }
}

function multiplyisValided(a, b, c) {
    if(a * a + b * b === c * c) {
        return true;
    } else {
        return false;
    }
}

console.log(specialPythagoreanTriplet(1000));
console.log(specialPythagoreanTriplet(24));
console.log(specialPythagoreanTriplet(120));
