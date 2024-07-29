// Task 2: Implement a Linkedlist class with methods to add node to the end,remove a node from the end, and display all nodes. 
const Node = require('./Node');

class LinkedList {
    constructor() {
        this.head = null;
    }

    addToEnd(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    removeFromEnd() {
        if (!this.head) {
            return null;
        }
        if (!this.head.next) {
            const value = this.head.value;
            this.head = null;
            return value;
        }
        let current = this.head;
        while (current.next.next) {
            current = current.next;
        }
        const value = current.next.value;
        current.next = null;
        return value;
    }

    display() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

module.exports = LinkedList;
