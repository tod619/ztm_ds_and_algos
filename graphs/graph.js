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
