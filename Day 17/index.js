const LinkedList = require('./linkedlist/LinkedList');
const Stack = require('./stack/Stack');
const Queue = require('./queue/Queue');
const BinaryTree = require('./binarytree/BinaryTree');
const Graph = require('./graph/Graph');

// Activity 1: Linked List
// Task 1: Implement a Node class to represent an element in an linked list with properties values and next.
// Task 2: Implement a Linkedlist class with methods to add node to the end,remove a node from the end, and display all nodes. 

const linkedList = new LinkedList();
linkedList.addToEnd(1);
linkedList.addToEnd(2);
linkedList.addToEnd(3);
linkedList.display(); // Output: 1 2 3
linkedList.removeFromEnd();
linkedList.display(); // Output: 1 2


// Activity 2: Stack
// Task 3: Implement a Stack class with method push(add element), pop(remove element) and peek(view the top element).
// Task 4: Use the stack class to reverse a string by pushing all characters onto the stack and then pooping them off.

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.peek()); // Output: 3
console.log(stack.pop());  // Output: 3
console.log(stack.peek()); // Output: 2




// Activity 3: Queue
// Task 5: Implement a Queue class with methods enqueue(add element),dequeue(remove element) and front(view the first element).
// Task 6: Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.front()); // Output: 1
console.log(queue.dequeue()); // Output: 1
console.log(queue.front()); // Output: 2



// Activity 4: Binary Tree
// Task 7: Implement a Treenode class to represent a node in a binary tree with properties value, left and right.
// Task 8: Implement a BinaryTree class with methods for inserting values and performing in-order traversal to diplay nodes.
const binaryTree = new BinaryTree();
binaryTree.insert(10);
binaryTree.insert(5);
binaryTree.insert(15);
binaryTree.insert(3);
binaryTree.insert(7);
binaryTree.inOrderTraversal(); // Output: 3 5 7 10 15





// Activity 5: Graph( optional)
// Task 9: Implement a Graph class with methods to add vertices, add edges and perform a breadth first search.
// Task 10: Use a Graph class to represent a simple network and perform BFS to find the shortest path between the nodes.
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
console.log(graph.bfs('A')); // Output: [ 'A', 'B', 'C', 'D', 'E' ]