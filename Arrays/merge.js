// Create a function to merge 2 sorted arrays
// Example: [1, 5 ,9] [3, 7, 8, 12]
// Becomes: [1, 3, 5, 7, 8, 9, 12]

function mergeSortedArrays(array1, array2) {
    const resultArray = []
    let array1Item = array1[0]
    let array2Item = array2[0]
    let i = 1
    let j = 1

    // checks
    if(array1.length === 0) {
        return array2 
    }
    if(array2.length === 0) {
        return array1
    }

    while (array1Item || array2Item) {
        if(!array2Item || array1Item < array2Item) {
            resultArray.push(array1Item)
            array1Item = array1[i]
            i++        
        } else {
            resultArray.push(array2Item)
            array2Item = array2[j]
            j++

        }
    }



    return resultArray
}

// Test
const arr1 = [1, 5, 9]
const arr2 = [3, 7, 8, 12]
console.log(mergeSortedArrays(arr1, arr2))