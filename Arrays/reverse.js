// Create a function that will reverse a string
// Example: Hello how are you
// Becomes: uoy era woh olleh

function reverse(str) {
    // Check input 
    if(!str || str.length < 2 || typeof str !== "string") {
        return "error"
    }

    const backwards = []
    const totalItems = str.length - 1

    for(let i = totalItems; i >= 0; i--) {
        backwards.push(str[i])
    }

    return backwards.join('')
}

let myString = "Hello how are you"
console.log(`Original String: ${myString}`)
let reverseString = reverse(myString)
console.log(`String Reversed: ${reverseString}`)