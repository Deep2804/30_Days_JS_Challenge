// Activity 3: Queue
// Task 5: Implement a Queue class with methods enqueue(add element),dequeue(remove element) and front(view the first element).
// Task 6: Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.items.length === 0) {
            return null;
        }
        return this.items.shift();
    }

    front() {
        if (this.items.length === 0) {
            return null;
        }
        return this.items[0];
    }
}

module.exports = Queue;
