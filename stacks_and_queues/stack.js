// stack Implementation with Linked LIst
class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor() {
        this.top = null
        this.bottom = null
        this.length = 0
    }

    peek() {
        return this.top 
    }

    push(value) {
        const newNode = new Node(value)

        if(this.length === 0) {
            this.top = newNode
            this.bottom = newNode
        } else {
            const holdingPointer = this.top
            this.top = newNode
            this.top.next = holdingPointer

        }

        this.length++
        return this
    }

    pop() {
        if(!this.top) {
            return null
        }

        if(this.top === this.bottom) {
            this.bottom = null
        }

        const holdingPointer = this.top
        this.top = this.top.next
        this.length--
        
        return holdingPointer
    }
}

const myStack = new Stack()
myStack.push("Discord")
myStack.push("YouTube")
myStack.push("Facebook")
console.log(myStack.peek())
firstItem = myStack.pop()
console.log(`1 POP Top Stack Item: ${firstItem.value}, ${firstItem.length}`)
secondItem = myStack.pop()
console.log(`2 POP Top Stack Item: ${firstItem.value}, ${firstItem.length}`)