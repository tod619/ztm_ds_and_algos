// An implementation of a binary search tree
class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        const newNode = new Node(value)

        if(this.root === null) {
            this.root = newNode 
        }else {
            let currentNode = this.root
            while(true) {
                if(value < currentNode.value) {
                    // Go Left
                    if(!currentNode.left) {
                        currentNode.left = newNode
                        return this 
                    }

                    currentNode = currentNode.left 
                } else {
                    // Go right
                    if(!currentNode.right) {
                        currentNode.right = newNode
                        return this 
                    }

                    currentNode = currentNode.right 
                }
            }
        }


    }


}

function traverse(node) {
    const tree = {value: node.value}
    tree.left = node.left === null ? null : traverse(node.left)
    tree.right = node.right === null ? null : traverse(node.right)
    return tree 
}

const tree = new BinarySearchTree()
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
console.log(JSON.stringify(traverse(tree.root)))