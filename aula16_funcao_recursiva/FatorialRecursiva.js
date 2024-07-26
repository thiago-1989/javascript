// 5! = 5 x 4 x 3 x 2 x 1 == 120
function fatorial (n) {
    let fat = 1;
    for (i = n; i > 1; i--) {
        fat *= i
    }
    return fat
}

/*
n! = n * (n - 1)!
*/ 
function fatorialRecursivo(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    } 
}

console.log(fatorial(5))
console.log(fatorialRecursivo(5))