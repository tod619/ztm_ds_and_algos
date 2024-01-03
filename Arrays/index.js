// Create myArray class
class myArray {
    constructor() {
        this.length = 0;
        this.data = {}
    }

    get(index) {
        return this.data[index]
    } 

    push(item) {
        this.data[this.length] = item
        this.length ++
        return this.length
    }

    pop() {
        const lastItem = this.data[this.length-1]
        delete this.data[this.length-1]
        this.length--
        return lastItem
    }

    delete(index) {
        const item = this.data[index]
        this.shiftItems(index)
    }

    shiftItems(index) {
        for(let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i+1]
        }

        delete this.data[this.length - 1]
        this.length--
    }
}

// Create new myArray object and test it
console.log("Test creating new array")
const newArray = new myArray();
console.log(newArray)
console.log(newArray.get(0))

// Test push operation
console.log("\nTest push method")
newArray.push(5)
newArray.push(20)
newArray.push(50)
newArray.push(100)
newArray.push(150)
newArray.push(200)
console.log(newArray)
console.log(newArray.get(0))
console.log(newArray.get(1))

// Test pop operation
console.log("\nTest pop method")
console.log(newArray.pop())
console.log(newArray)

// Delete method
console.log("\ntest delete method")
newArray.delete(1)
console.log(newArray)



