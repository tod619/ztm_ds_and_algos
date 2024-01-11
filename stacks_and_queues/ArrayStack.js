// An implementation of a Stack data structure using an array

class Node {
    constructor(value) {
        this.value = value
    }   
}

class Stack {
    constructor() {
        this.array = []
    }

    peek() {
        return this.array[this.array.length - 1]
    }

    push(value) {
        this.array.push(value)
    }

    pop() {
        if(!this.array) {
            return null
        }
        return this.array.pop()
    }
}

const myStack = new Stack()
myStack.push("Google")
myStack.push("Discord")
myStack.push("twitter")
console.log(myStack)

console.log(myStack.peek())

myStack.pop()
console.log(myStack)

myStack.pop()
console.log(myStack)
