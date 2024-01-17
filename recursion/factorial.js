function findfactorialRecursive(number) {

    if(number === 2) {
        return 2
    }

    return number * findfactorialRecursive(number - 1)
}

console.log(findfactorialRecursive(5))
console.log(findfactorialRecursive(6))