class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.previous = null
    }
}

class DoubleLinkedList {
    constructor(value) {
        this.head = new Node(value)
        this.tail = this.head
        this.length = 1
    }

    append(value) {
        const newNode = new Node(value)
        newNode.previous = this.tail 
        this.tail.next = newNode
        this.tail = newNode
        this.length++
    }

    prepend(value) {
        const newNode = new Node(value)
        newNode.next = this.head
        this.head.previous = newNode
        this.head = newNode
        this.length++
    }

    traverseToIndex(index) {
        let counter = 0

        let currentNode = this.head

        while (counter !== index) {
            currentNode = currentNode.next
            counter++
        }

        return currentNode
    }

    insert(index, value) {

        // Check params
        if(index >= this.length) {
            return this.append(value)
        }

        if(index === 0) {
            return this.prepend(value)
        }
        
        const newNode = new Node(value)
        
        const leader = this.traverseToIndex(index - 1)
        const follower = leader.next

        leader.next = newNode
        newNode.previous = leader
        newNode.next = follower
        follower.previous = newNode
        this.length++
       
    }

    printList() {
        const array = []
        let currentNode = this.head

        while (currentNode !== null) {
            array.push(currentNode.value)
            currentNode = currentNode.next
        }

        return array 

    }
}

const myDoubleLL = new DoubleLinkedList(10)
myDoubleLL.append(5)
myDoubleLL.append(16)
myDoubleLL.prepend(1)
myDoubleLL.prepend(17)
console.log(myDoubleLL.printList())
myDoubleLL.insert(2, 99)
myDoubleLL.insert(20, 88)
console.log(myDoubleLL.printList())