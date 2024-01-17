function fibonacciRecursive(n){
    if(n < 2) {
        return n
    }

    return fibonacciRecursive(n - 1) + fibonacciRecursive( n - 2)
}

console.log(fibonacciRecursive(3))
console.log(fibonacciRecursive(8))
console.log(fibonacciRecursive(10))
console.log(fibonacciRecursive(12))