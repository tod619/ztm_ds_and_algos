// An implementation of a linked list in JavaScript

class Node {

    constructor(value) {
        this.value = value
        this.next = null 
    }

}

class LinkedList {
    constructor(value) {

        this.head = new Node(value)
        this.tail = this.head
        this.length = 1
    }

    append(value) {
        const newNode = new Node(value)
        this.tail.next = newNode
        this.tail = newNode
        this.length++
    }

    prepend(value) {
        const newNode = new Node(value)

        newNode.next = this.head
        this.head = newNode
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
        const holdingPointer = leader.next

        leader.next = newNode
        newNode.next = holdingPointer
        this.length++
       
    }

    delete(index) {
        const leader = this.traverseToIndex(index - 1)
        const unwantedNode = leader.next
        leader.next = unwantedNode.next 
        this.length--

    }
}

const myLinkedList = new LinkedList(10)
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
console.log(myLinkedList.printList())
myLinkedList.insert(2, 99)
myLinkedList.insert(20, 88)
console.log(myLinkedList.printList())
myLinkedList.insert(0, 15)
console.log(myLinkedList.printList())
myLinkedList.delete(2)
console.log(myLinkedList.printList())