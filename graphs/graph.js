// Graph representations of the following graph
//          2 ----- 0
//         / \
//        /   \
//       /     \
//      1 ----- 3


// Implementation of an Edge List Graph
const edgeGraph = [[0, 2], [2, 3], [2, 1], [1, 3] ]

//Implementation of na Adjacent List
const adjacentList = [[2], [2, 3], [0, 1, 3], [1, 2]]

//Implementation of an Adjacent Matrix graph
const adjacentMatrixGraph = [
    [0, 0, 1, 0],
    [0, 0, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 1, 0]
]

class Graph {
    constructor() {
        this.numberOfNodes = 0
        this.adjacentList = {}
    }

    addVertex(node) {}

    addEdge(node1, node2) {}

    showConnections() {
        const allNodes = Object.keys(this.adjacentList)

        for(let node of allNodes) {
            let nodeConnections = this.adjacentList[node]
            let connections = ""
            let vertex 

            for(vertex of nodeConnections) {
                connections += vertex + " "
            }

            console.log(node + "-->" + connections)
        }
    }
}
