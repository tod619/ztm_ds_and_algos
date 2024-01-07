// Given an array return the first recurring character
// Array: [2, 6, 7, 2, 3, 6,]
// Returns: 2 (2 is the fisrts recurring character in the array)

function firstRecuringCharacter(input) {
    let map = {}

    for(let i = 0; i < input.length; i++) {
        if(map[input[i]] !== undefined) {
            return input[i]
        } else {
            map[input[i]] = i 
        }
    }

    return undefined
}

console.log(firstRecuringCharacter([2, 6, 7, 2, 3, 6]))